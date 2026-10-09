# PTW approval helper (HSE Manager)

Converts incoming Permit-to-Work files (F.020 Work, F.021 Height, F.022 Confined Space, F.023 Hot Work)
to PDF, gives you a review checklist, and stamps your approval + signature in the
**Approved By (Safety Manager)** box.

Needs: Python 3, `pip install pdfplumber pypdf reportlab`, LibreOffice (for .docx -> PDF).

```bash
export PTW_MANAGER_NAME="Your Name"        # printed under the signature
python ptw.py prepare                      # ~/PTW/inbox -> ~/PTW/review (PDF + _CHECKLIST.pdf)
python ptw.py approve ~/PTW/review/X.pdf [--conditions "Fire watch 30 min"]
python ptw.py reject  ~/PTW/review/X.pdf --reason "No method statement"
python ptw.py list                         # decision register (~/PTW/register.csv)
```

Signature: save a transparent PNG as `~/PTW/signature/signature.png`. Until it exists, the stamp
shows name/date only. Folder root can be changed with `PTW_HOME`.
