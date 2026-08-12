# Journey Bench — Module Spec

**Purpose:** Given a raw/free-text case report, produce a single self-contained HTML page with two parts:
1. A **Comprehensive History & Physical (H&P)** reconstructed from the case narrative.
2. A **Clinical Progress Journey** — the treatment/intervention/management/plan rewritten as a gradual, step-by-step, reasoning-based sequence (not a flat list), with **Clinical Pearls** and **source-highlighted** passages for fast scanning.

Use this file as a system prompt/spec. Attach a case report. Output: one HTML file matching the Bench Lite/Insights design system already used across VibeRounds (viberounds.ai.studio).

---

## 1. Input

- One case report, any format: WhatsApp export, discharge summary, admission note, free narrative.
- If data is missing for a required H&P field, write `Not documented in source` — never fabricate.

## 2. Output Structure

### A. Comprehensive H&P
Standard sections, each populated only from source text:
- Chief Complaint
- History of Present Illness (chronological, symptom-by-symptom)
- Past Medical / Surgical History
- Medications & Allergies
- Family History
- Social History
- Review of Systems
- Physical Examination (vitals + system-wise findings)
- Investigations / Labs / Imaging (as reported, with values)
- Assessment / Problem List
- Initial Diagnosis / Differential

### B. Clinical Progress Journey (the core deliverable)
Convert the plan/management/intervention into a **day-by-day or event-by-event step sequence**, NOT a bullet dump of orders. Each step must show the *reasoning*, not just the action.

Each journey step card includes:
- **Timepoint** (Day 1, Admission, Hour 6, Post-op Day 2, etc. — from source)
- **Clinical state at this point** (what changed, what was observed)
- **Decision/Action taken**
- **Why** (1–2 lines of clinical reasoning connecting state → decision — inferred reasoning must be labeled `(inferred)` if not explicit in source)
- **Response/Outcome of that step** (if documented)

Steps are sequential and connected — reader should be able to follow the patient's course like a story, not a checklist.

### C. Clinical Pearls
3–8 short, high-yield takeaways derived from this specific case (not generic textbook facts) — e.g., a discriminating sign that was present, a management pitfall avoided, a teaching point about sequencing.

### D. Fast-Read Highlighting
Throughout both H&P and Journey sections, visually highlight (inline `<mark>`/styled span, not just bold) the terms/values that came directly from the original case report — abnormal vitals, key positive findings, drug names/doses, critical decision points — so a reader skimming can catch the signal in seconds. Do not highlight inferred/reasoning text.

---

## 3. Design System (match existing VibeRounds output)

- Palette: cyan/teal (Bench Lite/Insights tokens)
- Fonts: Fraunces (headers), Inter (body), IBM Plex Mono (values/vitals/labs)
- Layout: single-page, single HTML file, no external dependencies
- Two-tab or two-section layout: "H&P" tab and "Journey" tab (or stacked sections with anchor nav)
- Journey section renders as a vertical timeline/card sequence, each card collapsible
- Pearls rendered as a distinct highlighted panel (not just a list) — visually separated so it's scannable
- Print-friendly / single-file export (matches existing dashboard pattern)

## 4. Non-negotiables

- No fabricated clinical data. Every H&P field and journey step must trace to the source case.
- Reasoning text that isn't explicit in the source must be marked `(inferred)`.
- Journey must be a *narrative sequence*, not a re-listed plan.
- Output is one self-contained HTML file, viberounds visual identity.
