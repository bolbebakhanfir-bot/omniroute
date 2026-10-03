# Investigation Playbook: Safety & Security
Meryal Water Park · Rixos Premium Qetaifan Island North · Azure Beach Club Doha

**Frameworks this playbook draws on:**
- UK HSE **HSG245** *Investigating accidents and incidents* (4-step method)
- **ISO 45001:2018 clause 10.2** (incident, nonconformity and corrective action)
- **ICAM** (Incident Cause Analysis Method)
- Reason's **Swiss cheese model**
- UK HSE **HSG48** *Reducing error and influencing behaviour*
- **Just Culture** (Reason / Marx)
- **PEACE** investigative interviewing model
- **ISO/IEC 27037** (handling digital evidence)
- **ANSI/ASIS INV.1-2015** *Investigations* standard

Before citing a clause number from any of these in a formal report, check it against the standard itself.

---

## 1. Triage: decide the investigation level (first 30 min)

| Level | Typical events | Lead | Team | Report due |
|---|---|---|---|---|
| **1 Minimal** | First aid, minor near miss, minor property damage | Supervisor / duty manager | Supervisor | Incident form same shift |
| **2 Low** | Medical treatment case, repeated near miss, minor theft, guest complaint with injury | Dept head + HSE | 2–3 people | Within 72 h |
| **3 Medium** | Lost time injury, hospitalisation, slide stopped by a defect, lost child found, assault, chemical release | HSE Manager | HSE + dept head + engineering/security | Flash 24 h; full 7 days |
| **4 High** | Fatality, drowning or near-drowning with hospital admission, life-changing injury, structural failure, missing child not found, serious crime, Legionella case, media interest | HSE Manager + GM | Multi-disciplinary, consider independent expert, Legal and insurer informed | Flash immediately; full 7–14 days |

**Upgrade the level if:**
- the **potential** outcome was serious, even though the actual outcome was minor (SIF potential), or
- it is a repeat event.

---

## 2. First hour: scene control and evidence

### Make safe and stabilise
1. Make the area safe, close the attraction or zone, and give first aid / AED.
2. Call **999**. Record who called and the exact time.
3. Notify the GM / Duty Manager, Security and HSE.

### Secure the scene
- Cordon the area. Nothing is moved unless it is needed to save life or prevent further harm.
- If something had to be moved, record what, by whom, and why.
- **Quarantine and tag equipment** (tube, mat, ladder, chemical container). Write on the tag: "DO NOT USE – under investigation", the date, and a signature.
- **Lock out the ride or attraction.** It reopens only after engineering and HSE sign it off.

### Preserve evidence
Preserve all of the following immediately:

| Evidence type | Action |
|---|---|
| **CCTV** | Send a written preservation request to Security for every camera covering the route before, during and after (for example 30 min before to 30 min after). Export the original files with their native timestamps, generate a hash where your system can, and log the export. Note any offset between the camera clock and real time. |
| **Photos / video** | Wide shot → mid shot → close-up, with a scale (ruler or coin) and the time on. Include signage, depth markers, chair positions and water conditions. |
| **Records** | Ride pre-opening checklist, dispatch counter and ride log, water-test log (take a **fresh water sample now** and record the result), pump and flow data, lifeguard rotation and zone sheet, radio log, rosters, training and certification records, maintenance work orders, weather and WBGT. |
| **People** | List everyone present: staff, guests and contractors. Separate witnesses before they compare stories. Get contact details. |
| **Physical items** | Bag and label the item, start a chain-of-custody record, and store it locked. |

### Chain of custody log
Use one row per item:

| Item no. | Description | Collected by | Date/time | From where | Stored where | Transferred to (name, date/time, signature) |

**Digital evidence (ISO/IEC 27037 principles):**
- Work only on copies and keep the original untouched.
- Document every step, so someone else could repeat it.
- Only trained people handle the original.

---

## 3. Notifications checklist

| Who | When | Notes |
|---|---|---|
| 999 (Police / Ambulance / Civil Defence) | Immediately for injury, crime, fire or a missing child after 10 min | Record the call time and reference |
| Police + Labour Department | **Immediately** for a worker's death or work injury | Labour Law 14/2004 Art. 108 |
| GM, Director of Operations, Security Manager | Immediately for Level 3–4 | Phone first, then the written flash report |
| Legal / insurer | Level 3–4, any claim or threatened claim | Ask about legal-privilege marking |
| Brand (Ennismore / Accor incident line) | According to brand SOP | Use the brand SOP if it is in `.claude/hse-knowledge/` |
| MoPH | Food poisoning, water-quality illness, Legionella case | Ask MoPH for the exact trigger and timeline `[TO CONFIRM]` |
| Guest's family / next of kin | GM or a delegated senior manager only | Factual and caring; no admission of liability |
| Media | GM / PR only | Staff do not comment or post on social media |

---

## 4. Interviews and statements

### Order of interviews
1. First responders and the people closest to the event.
2. Other witnesses.
3. Supervisors.
4. People who manage the system (training, maintenance, scheduling).

**Interview each person separately, as soon as possible**, and in their own language. Use an interpreter where needed and record the interpreter's name.

### PEACE model

| Step | What to do |
|---|---|
| **P – Plan & prepare** | Know the timeline gaps; prepare open questions; use a private, quiet room; let them bring a colleague if they ask |
| **E – Engage & explain** | Introduce yourself, explain the purpose ("to understand what happened and stop it happening again, not to blame"), explain how notes are used |
| **A – Account** | Free recall first: "Tell me everything you remember, from when you started your shift." Do not interrupt. Then probe with open questions (TED: Tell, Explain, Describe) |
| **C – Closure** | Summarise back, ask "Is there anything else?", explain the next steps |
| **E – Evaluate** | Compare the account with CCTV, logs and other accounts; list contradictions to clarify |

### Cognitive interview techniques (for witnesses)
- Mentally put them back in the scene: the weather, the noise, what they were doing.
- Ask them to report everything, even details they think don't matter.
- Ask them to recall in a different order, or from another person's viewpoint.

### Do and don't

| Do | Don't |
|---|---|
| Use open questions | Ask leading questions ("The guard was on his phone, wasn't he?") |
| Write verbatim quotes | Paraphrase |
| Note the time and place of the interview | Interview people in a group |
| Get the statement signed and dated, with corrections initialled | Promise confidentiality you cannot keep |
| Record any refusal to give a statement | Threaten anyone, or discuss discipline during a fact-finding interview |

### Statement template

```
Statement of: [Name / ID or initials]   Role: [Guest / Staff – dept / Contractor]
Language: [ ]  Interpreter: [name or N/A]
Date/time of statement: [ ]   Taken by: [ ]   Place: [ ]

In my own words:
[Free account — what I saw, heard, did, with times if known]

I confirm this statement is true to the best of my knowledge.
Signature: ________  Date/time: ________
Witnessed by: ________
```

---

## 5. Build the timeline

Use a single table that combines all sources:

| Time (source) | Event | Who | Source (CCTV cam #, radio log, statement X) | Confidence (confirmed / single source / conflicting) |

- Correct the CCTV clock offsets first.
- Mark every gap or conflict and resolve it before the root cause analysis.
- Include the **lead-up**: the shift start, the morning inspection, the water tests, staffing changes, the weather, the bather load.

---

## 6. Root cause analysis

**Pick the tool to match the level:**
- Level 1–2: **5 Whys**, plus a short Fishbone.
- Level 3–4: **ICAM** or barrier analysis, plus a Fishbone. Use a team; never one person alone.

### 5 Whys (with discipline)
- Ask "why" until you reach a cause that management can control: a system, design, procedure, training, resourcing or supervision issue.
- **Stop if the answer is "human error".** Ask instead why the system allowed that error.
- Branch the chain when there is more than one cause.

### Fishbone (Ishikawa): aquatic and hotel categories
- **People:** competence, fatigue, heat strain, language, staffing
- **Procedures:** the normal operating procedure (NOP) and emergency action plan (EAP), the checklist, the dispatch rule, signage
- **Equipment / plant:** the slide, pumps, chemical dosing, tubes, PPE
- **Environment:** heat or WBGT, wind, glare, crowding, lighting, sea state, jellyfish
- **Management / supervision:** rotation, audits, defect close-out, management of change
- **Guests:** height and weight, swimming ability, supervision of children, alcohol, behaviour

### ICAM layers (from the event back to the organisation)

| Layer | Question | Examples |
|---|---|---|
| 1. Absent or failed defences | Which barriers did not work? | Slide dispatch light, catch-pool attendant, height check, fence, disinfectant level |
| 2. Individual / team actions | What did people do or not do? | Classify each as below, without blaming anyone |
| 3. Task / environmental conditions | What conditions affected performance? | Heat, glare, noise, crowding, time pressure, missing equipment |
| 4. Organisational factors | What system weaknesses allowed this? | Training, resourcing, procedures, maintenance planning, culture, communication, MoC |

### Types of human failure (HSG48)
- **Errors** are unintended:
  - **Slip / lapse:** skill-based, for example forgetting a checklist step.
  - **Mistake:** a rule-based or knowledge-based wrong decision.
- **Violations** are deliberate:
  - **Routine:** a shortcut that everyone takes.
  - **Situational:** the job could not be done the right way, for example because there were not enough staff.
  - **Exceptional:** a one-off in unusual circumstances.

Each type needs a different fix:
- Slips and lapses: better design, checklists and reminders.
- Mistakes: training and decision aids.
- Routine violations: remove the reason for the shortcut, and supervise.

### Just Culture decision guide (for HR, after the RCA, kept separate)

| Behaviour | Response |
|---|---|
| Human error | Console, fix the system |
| At-risk behaviour (the risk was not recognised) | Coach, remove the incentive for the shortcut |
| Reckless behaviour (a conscious disregard of a substantial risk) | Disciplinary action may be appropriate |

**Substitution test:** would another trained person in the same situation have done the same? If yes, the problem is the system.

**Keep the investigation report and any disciplinary process separate.**

### Barrier / bow-tie view (useful for KPI presentations)

Threats → [prevention barriers] → **Top event** (for example "guest under water unnoticed") → [mitigation barriers] → Consequences

Mark each barrier as worked / failed / missing / degraded.

---

## 7. CAPA: corrective and preventive actions

Use the **hierarchy of controls**, strongest first:
1. Elimination
2. Substitution
3. Engineering: sensors, guards, automatic dosing, AI drowning detection
4. Administrative: procedures, signage, training, rotation
5. PPE

**Training and signage alone are weak controls for a Level 3–4 root cause.**

### CAPA tracker
Use one row per action:

| CAPA no. | Root cause it addresses | Action (SMART) | Hierarchy level | Owner | Due date | Status | Evidence of completion | **Effectiveness check (how, when, result)** |

### Closure rules
- **Done** means the action is completed **and** there is evidence of it.
- **Effective** means a follow-up check shows it works, for example:
  - an audit 30 or 90 days later
  - no repeat events
  - the KPI has improved
- Overdue CAPAs go into the weekly report, and are escalated to the GM after 14 days.

---

## 8. Security investigations (specific guidance)

General rules:
- Security investigations follow the ASIS INV.1 principles: objectivity, legality, confidentiality, proportionality, and documented findings.
- Where a crime may have been committed, **the Police lead**. The hotel's role is to preserve evidence, support the victim, and provide CCTV and records **through a formal request**.
- Staff must not search, detain or interrogate people beyond what Qatari law allows. Check the limits with Legal or the Police `[TO CONFIRM]`.

| Incident | Key first actions | Evidence | Typical root-cause areas |
|---|---|---|---|
| **Lost / missing child (Code Adam)** | Take a description (clothing, wristband, photo from the parent); page "Code Adam"; staff the exits and the beach waterline; check water areas and slide exits first; **call 999 after 10 minutes**; one manager stays with the family | CCTV of the entrances, the last-seen point and the waterfronts; wristband or ticket scans; staff radio log | Wristband system, how parents are briefed, sightlines, exit control, meeting points |
| **Theft (guest or locker)** | Support the guest, record the items and their value, report to Police if the guest wants (or if hotel policy requires) | Locker or key logs, CCTV, access-card logs, staff on duty | Locker design, key control, patrols, signage |
| **Assault / fight** | Separate the parties, give first aid, call 999, keep the witnesses there | CCTV, statements, bar or alcohol service records | Crowd control, alcohol service policy, staffing at night events |
| **Sexual harassment / indecent behaviour** | Protect and support the victim; female staff available; call Police; strict confidentiality | CCTV, statements (taken carefully, minimum number of times) | Supervision of changing rooms, CCTV coverage (privacy-compliant), lifeguard and attendant positioning, staff code of conduct |
| **Staff dishonesty / cash** | Involve HR and Finance; follow the internal audit process; preserve POS and cash-up records | POS logs, cash-up sheets, CCTV, access logs | Segregation of duties, cash-handling SOP |
| **Trespass / after-hours entry** | Clear the area safely, check the pools and slides for people in the water | Perimeter CCTV, gate and access logs | Perimeter design, lighting, patrol frequency |
| **Suspicious item / bomb threat** | **Do not touch the item.** No radios or phones within about 15 m. Evacuate outward, call 999, use the bomb-threat checklist for calls | Caller details, time, exact words | Bag-search policy, staff awareness |
| **Data / CCTV privacy breach** | Contain it, find out what personal data was exposed, inform Legal | Access logs, export logs | Qatar Personal Data Privacy Protection Law (Law No. 13 of 2016) `[verify current requirements]`; CCTV access control |

**Note on the bomb-threat distance:** the 15 m stand-off is a common rule of thumb, not a confirmed standard. Follow Civil Defence and Police guidance and your site EAP.

---

## 9. Aquatic investigation playbooks

**Drowning / near-drowning:**
- Lifeguard zone diagram and the scanning position at the time.
- 10/20 rule: how long it took to recognise the swimmer, and how long to reach them. Use CCTV for this.
- Rotation sheet: time on the chair, breaks, heat conditions.
- Bather load, glare and water clarity; whether the main drain was visible.
- Swimming ability and supervision of the casualty; signage.
- AED or oxygen times; times recorded in the rescue log.

**Slide injury:**
- Pre-opening checklist, including the inside-flume inspection.
- Dispatch interval and the traffic-light log; flow rate and pump status.
- Rider height, weight and riding position; whether the rider was in a tube; the combined raft weight.
- Splash-pool depth.
- Whether earlier, similar first-aid cases were reported (look at the trend).
- Manufacturer O&M limits.
- **Any laceration closes the slide until the flume has been inspected.**

**Chemical release (plant room or pool):**
- Dosing pump logs and controller set-points; delivery and decanting records.
- Ventilation; PPE; the permit to work.
- Mixing of incompatible chemicals (chlorine and acid).
- Exposure symptoms and how many people were affected; Civil Defence notified if needed.

**Faecal or vomit incident:**
- Time noticed; whether the pool was closed and when.
- Diarrhoeal or formed: follow the MAHC CT procedure.
- Free chlorine and pH before and after; time reopened; log signature.

**Legionella case linked to the site:**
- Spa, shower and cooling-tower logs; hot water ≥ 60 °C stored and ≥ 50 °C at outlets; cold water < 20 °C.
- Sampling results; the water management programme.
- Take samples before disinfecting, if it is safe to do so; agree this with MoPH.

---

## 10. Investigation report structure (Level 3–4)

Each numbered section is one part of the report:

1. Cover: report no., classification, level, confidentiality marking, distribution list.
2. Executive summary: what happened, the main root causes, the top CAPAs. Maximum half a page.
3. Terms of reference, the team, and the methods used.
4. Background: the site, the attraction, the controls in place, the conditions.
5. Timeline: the combined table.
6. Findings: facts, each referenced to its evidence.
7. Analysis:
   - failed or missing barriers
   - ICAM layers or the Fishbone
   - human-factors classification
8. Root causes and contributing factors, numbered.
9. CAPA table: owner, due date, effectiveness check.
10. Lessons learned and the safety alert (one page, for all departments).
11. Appendices:
    - evidence list
    - chain of custody
    - statements (restricted)
    - photos
    - records

**Quality check before issue:**
- Every finding traces to evidence.
- Every root cause has a CAPA.
- No opinion words and no blame.
- Privacy is protected.
- Gaps are marked `[TO CONFIRM]`.
- Signed off by HSE and the GM.

---

## 11. Safety alert / lessons learned (one page for all departments)

**Title:** "SAFETY ALERT – [short topic]" · date · site

- **What happened:** 2–3 factual lines. No names.
- **Why it happened:** the key causes, in plain English.
- **What we are changing:** the top 3 actions.
- **What YOU must do from today:** 3 bullet points.
- **Questions:** HSE contact (extension / email).

Write it in plain English, suitable for translation (Arabic / Hindi / Tagalog / others as needed), and brief it in toolbox talks.

---

## 12. Investigation KPIs (for monthly reports)
- % of incidents reported within the required time
- % of Level 3–4 investigations completed within 7 / 14 days
- CAPA on-time completion %
- CAPA effectiveness-verified %
- Repeat incidents (same root cause within 12 months)
- Near-miss : injury reporting ratio
- Average days from incident to closure
