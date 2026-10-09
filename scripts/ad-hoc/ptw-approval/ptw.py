#!/usr/bin/env python3
"""Permit-to-Work (PTW) review & approval helper for the HSE Manager.

Rixos Premium Qetaifan Island North - Meryal Water Park / Azure Beach Club.
Forms handled: RPQIN.OHS.F.020 Work Permit, F.021 Work at Height,
               F.022 Confined Space, F.023 Hot Work.

Workflow (folders live under $PTW_HOME, default ~/PTW):
    inbox/      drop the permits you receive (.docx / .doc / .pdf)
    review/     `prepare` puts the PDF + a review checklist here
    approved/   `approve` writes the signed PDF here
    rejected/   `reject`  writes the rejected PDF here
    signature/signature.png   your signature (transparent PNG), added later
    register.csv              one line per decision (audit trail)

    python ptw.py prepare            # inbox -> review/ (PDF + checklist)
    python ptw.py approve review/X.pdf [--conditions "text"]
    python ptw.py reject  review/X.pdf --reason "text"
    python ptw.py list
"""
from __future__ import annotations

import argparse
import csv
import datetime as dt
import io
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

import pdfplumber
from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

HOME = Path(os.environ.get("PTW_HOME", Path.home() / "PTW")).expanduser()
DIRS = {n: HOME / n for n in ("inbox", "review", "approved", "rejected", "signature")}
REGISTER = HOME / "register.csv"
SIGNATURE = DIRS["signature"] / "signature.png"
MANAGER_NAME = os.environ.get("PTW_MANAGER_NAME", "HSE Manager")
SIGN_HEADER = re.compile(r"Approved\s*By\s*\(Safety", re.I)

FORMS = {
    "F.020": "Work Permit",
    "F.021": "Permit to Work at Height",
    "F.022": "Permit to Enter Confined Space",
    "F.023": "Hot Work Permit",
}

COMMON_CHECKS = [
    "Permit number, request date and venue (Hotel / Water Park / Beach Club) filled",
    "Work description, asset location and asset no./tag are specific and clear",
    "Start/end dates and working hours are acceptable (no clash with guest hours / events)",
    "Contractor details, supervisor name and contact number provided",
    "Method statement + risk assessment attached (and matches the scope of work)",
    "Basic PPE ticked and appropriate to the hazards",
    "Requester and Department In-charge have signed",
    "Contractor supervisor declaration signed and dated",
    "Fire alarm isolation arranged with Security if needed (no nuisance alarms)",
    "Separate Hot Work / Work at Height / Confined Space permit attached if the work needs it",
    "Site visit done or area checked: barricades, signage, housekeeping, guest/staff segregation",
]

SPECIFIC_CHECKS = {
    "F.020": [
        "Type of work ticked correctly; extra safety measures match the risk",
        "Lock-out / tag-out, COSHH / MSDS, gas detection ticked where relevant",
        "Water park only: slide / pump / chemical plant isolated and made safe",
    ],
    "F.021": [
        "SWMS / JSA / SWP attached (Yes ticked)",
        "Harness, anchor points, edge protection / net / platform suitable; equipment inspected",
        "Services isolated (smoke detectors, pipes, electrical) and area below barricaded",
        "Weather / wind / heat stress checked for the working window",
    ],
    "F.022": [
        "Known hazards and number of persons stated",
        "Atmosphere test (O2 / toxic / flammable) and ventilation arranged",
        "Standby person (watcher), communication link and rescue plan in place",
        "Breathing apparatus / harness / lifeline available; flows isolated and sealed",
        "Emergency telephone number completed",
    ],
    "F.023": [
        "Known hazards and number of persons stated",
        "Flammables removed or protected; fire blanket and extinguisher at the work point",
        "Fire watch assigned and stays 30 min after work; fire watch section completed on return",
        "Welders / operators trained; no flammable vapour or dust in the area",
    ],
}


# ----------------------------------------------------------------- helpers
def ensure_dirs() -> None:
    for d in DIRS.values():
        d.mkdir(parents=True, exist_ok=True)


def to_pdf(src: Path, out_dir: Path) -> Path:
    """Return a PDF in out_dir for a docx/doc/pdf source."""
    out = out_dir / (src.stem + ".pdf")
    if src.suffix.lower() == ".pdf":
        if src.resolve() != out.resolve():
            shutil.copy2(src, out)
        return out
    soffice = shutil.which("soffice") or shutil.which("libreoffice")
    if not soffice:
        sys.exit("LibreOffice (soffice) is needed to convert Word files to PDF.")
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(
            [soffice, "--headless", "--convert-to", "pdf", "--outdir", tmp, str(src)],
            check=True, capture_output=True, timeout=180,
        )
        shutil.move(str(Path(tmp) / (src.stem + ".pdf")), out)
    return out


def detect_form(pdf: Path) -> str | None:
    with pdfplumber.open(pdf) as p:
        text = " ".join((pg.extract_text() or "") for pg in p.pages)
    m = re.search(r"RPQIN\.?\s*OHS\.?\s*F\.?\s*(\d{3})", text)
    code = f"F.{m.group(1)}" if m else None
    return code if code in FORMS else None


def permit_number(pdf: Path) -> str:
    with pdfplumber.open(pdf) as p:
        text = p.pages[0].extract_text() or ""
    m = re.search(r"Permit\s*Number\s*:\s*([A-Za-z0-9][A-Za-z0-9\-/_.]*)", text)
    if m and not m.group(1).lower().startswith("renewal"):
        return m.group(1)
    return ""


def signature_box(pdf: Path) -> tuple[int, tuple[float, float, float, float]]:
    """(page_index, (x0, top, x1, bottom)) of the cell under 'Approved By (Safety Manager)'."""
    with pdfplumber.open(pdf) as p:
        for i, pg in enumerate(p.pages):
            hits = pg.search(SIGN_HEADER.pattern, regex=True, case=False)
            if not hits:
                continue
            h = hits[0]
            cx = (h["x0"] + h["x1"]) / 2
            cells = []
            for t in pg.find_tables():
                for row in t.rows:
                    for c in row.cells:
                        if c and c[0] <= cx <= c[2]:
                            cells.append(c)
            cells.sort(key=lambda c: c[1])
            below = [c for c in cells if c[1] >= h["bottom"] - 1]
            if below:
                return i, below[0]
            return i, (h["x0"] - 5, h["bottom"] + 4, h["x1"] + 35, h["bottom"] + 40)
    sys.exit(f"{pdf.name}: could not find the 'Approved By (Safety Manager)' box.")


# ----------------------------------------------------------------- stamping
def stamp(pdf: Path, out: Path, status: str, note: str) -> None:
    page_i, (x0, top, x1, bottom) = signature_box(pdf)
    reader = PdfReader(pdf)
    ph = float(reader.pages[page_i].mediabox.height)
    w, h = x1 - x0, bottom - top
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=(float(reader.pages[page_i].mediabox.width), ph))
    now = dt.datetime.now().strftime("%d/%m/%Y %H:%M")
    ok = status == "APPROVED"
    colour = colors.HexColor("#0B6B2E") if ok else colors.HexColor("#B00020")
    y_bottom = ph - bottom
    if ok and SIGNATURE.exists():
        c.drawImage(str(SIGNATURE), x0 + 2, y_bottom + 9, width=w - 4, height=h - 11,
                    preserveAspectRatio=True, anchor="c", mask="auto")
    elif ok:
        c.setFillColor(colors.HexColor("#999999")); c.setFont("Helvetica-Oblique", 6)
        c.drawCentredString(x0 + w / 2, y_bottom + h / 2, "(signature file not set)")
    else:
        c.setFillColor(colour); c.setFont("Helvetica-Bold", 9)
        c.drawCentredString(x0 + w / 2, y_bottom + h / 2 - 1, "NOT APPROVED")
    c.setFillColor(colour); c.setFont("Helvetica", 5.5)
    c.drawCentredString(x0 + w / 2, y_bottom + 1.5, f"{MANAGER_NAME} | {now}")
    c.setStrokeColor(colour); c.setLineWidth(0.8); c.rect(x0 + 0.5, y_bottom + 0.5, w - 1, h - 1)
    # status line in the top margin of the page
    c.setFont("Helvetica-Bold", 8)
    c.drawString(28, ph - 18, f"HSE: {status}  {now}" + (f"  -  {note}"[:110] if note else ""))
    c.save()
    overlay = PdfReader(io.BytesIO(buf.getvalue())).pages[0]
    wr = PdfWriter()
    for i, pg in enumerate(reader.pages):
        if i == page_i:
            pg.merge_page(overlay)
        wr.add_page(pg)
    wr.add_metadata({"/Title": f"{out.stem} - {status}", "/Author": MANAGER_NAME})
    with open(out, "wb") as f:
        wr.write(f)


def log(pdf: Path, code: str | None, status: str, note: str, out: Path) -> None:
    new = not REGISTER.exists()
    with open(REGISTER, "a", newline="", encoding="utf-8") as f:
        wr = csv.writer(f)
        if new:
            wr.writerow(["timestamp", "form", "permit_no", "source_file", "decision", "notes", "output_file"])
        wr.writerow([dt.datetime.now().isoformat(timespec="seconds"), code or "?", permit_number(pdf),
                     pdf.name, status, note, out.name])


# ----------------------------------------------------------------- checklist
def checklist_pdf(code: str | None, name: str, out: Path) -> None:
    c = canvas.Canvas(str(out), pagesize=A4)
    W, H = A4
    y = H - 40
    c.setFont("Helvetica-Bold", 14); c.drawString(36, y, "HSE REVIEW CHECKLIST - PERMIT TO WORK")
    y -= 16; c.setFont("Helvetica", 9)
    c.drawString(36, y, f"Form: {code or '?'} {FORMS.get(code, 'Unrecognised form')}   |   File: {name}")
    y -= 13; c.drawString(36, y, "Permit No: ______________   Contractor: ________________________   Date reviewed: ____/____/______")
    y -= 20
    c.setFont("Helvetica-Bold", 9)
    for x, t in ((440, "Yes"), (476, "No"), (510, "N/A")):
        c.drawString(x, y, t)
    y -= 6; c.line(36, y, W - 36, y); y -= 13
    c.setFont("Helvetica", 8.5)
    for item in COMMON_CHECKS + SPECIFIC_CHECKS.get(code, []):
        c.drawString(36, y, item[:96])
        for x in (440, 476, 510):
            c.rect(x, y - 1.5, 9, 9)
        y -= 18
    y -= 6
    c.setFont("Helvetica-Bold", 9); c.drawString(36, y, "Decision:")
    c.setFont("Helvetica", 9)
    for x, t in ((100, "Approved"), (190, "Approved with conditions"), (350, "Rejected / resubmit")):
        c.rect(x, y - 1.5, 9, 9); c.drawString(x + 13, y, t)
    y -= 22; c.drawString(36, y, "Conditions / comments:")
    for _ in range(5):
        y -= 20; c.line(36, y, W - 36, y)
    y -= 34; c.drawString(36, y, "HSE Manager: ____________________   Signature: ______________   Date: ____/____/______")
    c.save()


# ----------------------------------------------------------------- commands
def cmd_prepare(a: argparse.Namespace) -> None:
    ensure_dirs()
    srcs = [Path(p) for p in a.files] or sorted(
        p for p in DIRS["inbox"].iterdir() if p.suffix.lower() in (".docx", ".doc", ".pdf"))
    if not srcs:
        print(f"Nothing in {DIRS['inbox']}"); return
    for s in srcs:
        pdf = to_pdf(s, DIRS["review"])
        code = detect_form(pdf)
        checklist_pdf(code, pdf.name, DIRS["review"] / f"{pdf.stem}_CHECKLIST.pdf")
        print(f"OK  {s.name} -> review/{pdf.name}  [{code or 'unknown form'}"
              f"{', ' + FORMS[code] if code else ''}]  permit no: {permit_number(pdf) or 'not filled'}")


def _decide(a: argparse.Namespace, status: str, note: str, dest: str, suffix: str) -> None:
    ensure_dirs()
    src = Path(a.file)
    pdf = to_pdf(src, DIRS["review"]) if src.suffix.lower() != ".pdf" else src
    out = DIRS[dest] / f"{pdf.stem}_{suffix}.pdf"
    stamp(pdf, out, status, note)
    log(pdf, detect_form(pdf), status if not note or status != "APPROVED" else "APPROVED WITH CONDITIONS", note, out)
    print(f"{status}: {out}")
    if status == "APPROVED" and not SIGNATURE.exists():
        print(f"  note: no signature yet - add a transparent PNG at {SIGNATURE}")


def cmd_approve(a): _decide(a, "APPROVED", a.conditions or "", "approved", "APPROVED")
def cmd_reject(a): _decide(a, "REJECTED", a.reason, "rejected", "REJECTED")


def cmd_list(_: argparse.Namespace) -> None:
    if not REGISTER.exists():
        print("No decisions logged yet."); return
    for r in csv.DictReader(open(REGISTER, encoding="utf-8")):
        print(f"{r['timestamp']}  {r['form']}  {r['permit_no'] or '-':12} {r['decision']:<22} {r['source_file']}")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    p = sub.add_parser("prepare", help="convert inbox permits to PDF + review checklist")
    p.add_argument("files", nargs="*"); p.set_defaults(fn=cmd_prepare)
    p = sub.add_parser("approve", help="stamp signature and approve")
    p.add_argument("file"); p.add_argument("--conditions"); p.set_defaults(fn=cmd_approve)
    p = sub.add_parser("reject", help="mark as not approved")
    p.add_argument("file"); p.add_argument("--reason", required=True); p.set_defaults(fn=cmd_reject)
    sub.add_parser("list", help="show decision register").set_defaults(fn=cmd_list)
    a = ap.parse_args(); a.fn(a)


if __name__ == "__main__":
    main()
