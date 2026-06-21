# VibeRounds Dashboard — Design Guidelines
## Medical Student Case Analysis & Doctor Action Plan Report

**Template Version:** 1.0 — June 2026
**Purpose:** Instructions for an LLM to generate a single self-contained HTML file (with all CSS and JS inline) implementing a minimalist light-theme dashboard for medical student case review.

---

## 1. Output Requirements

- **Single file:** One `.html` file. All CSS, JavaScript, and content inline — no external dependencies except one optional CDN font import.
- **Light theme only:** White/off-white backgrounds, dark text, subtle grey borders. No dark mode toggle needed.
- **Minimalist design:** No gradients, no heavy shadows, no decorative flourishes. Use whitespace as the primary layout tool.
- **Self-contained data:** All case content embedded directly in the JavaScript as a structured data object. No API calls, no localStorage.
- **Print-ready:** The Action Plan Report section must be printable cleanly (CSS `@media print` rules required).

---

## 2. Technology Stack

```
HTML5 (semantic tags: <main>, <section>, <nav>, <header>, <article>)
CSS3 (CSS custom properties for theming; Flexbox and CSS Grid for layout)
Vanilla JavaScript (no frameworks; no jQuery; ES6+)
Font: Inter from Google Fonts (single CDN import — acceptable exception)
Icons: Unicode symbols or simple SVG inline — no icon library
```

---

## 3. Color Palette

All colors defined as CSS custom properties on `:root`.

```css
:root {
  --bg-primary:     #ffffff;   /* page background */
  --bg-secondary:   #f8f9fa;   /* card / panel background */
  --bg-tertiary:    #f1f3f5;   /* table row alternate, tag background */
  --border:         #dee2e6;   /* all borders */
  --text-primary:   #1a1a2e;   /* headings, body text */
  --text-secondary: #6c757d;   /* labels, metadata, captions */
  --text-muted:     #adb5bd;   /* placeholder, disabled */
  --accent:         #2563eb;   /* primary accent — links, active states, key numbers */
  --accent-light:   #eff6ff;   /* accent tinted background for highlights */
  --warning:        #d97706;   /* amber — medium priority */
  --warning-light:  #fffbeb;
  --danger:         #dc2626;   /* red — high priority / critical */
  --danger-light:   #fef2f2;
  --success:        #16a34a;   /* green — completed / low risk */
  --success-light:  #f0fdf4;
  --score-high:     #dc2626;   /* score 9–10 */
  --score-mid:      #d97706;   /* score 7–8 */
  --score-low:      #16a34a;   /* score ≤6 */
}
```

---

## 4. Typography

```css
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-primary);
}

h1 { font-size: 1.5rem;  font-weight: 700; }
h2 { font-size: 1.15rem; font-weight: 600; }
h3 { font-size: 1rem;    font-weight: 600; }

.label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

/* No decorative text — all font-weight variation via 400 / 600 / 700 only */
```

---

## 5. Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  HEADER — Case title, date, case ID badge               │
├──────────┬──────────────────────────────────────────────┤
│          │  CONTENT AREA                                │
│   NAV    │  ┌────────────────────────────────────────┐  │
│ (sidebar │  │  Active Section (swapped by JS)        │  │
│  or top  │  │                                        │  │
│   tabs)  │  └────────────────────────────────────────┘  │
│          │                                              │
├──────────┴──────────────────────────────────────────────┤
│  FOOTER — Disclaimer one-liner + print button           │
└─────────────────────────────────────────────────────────┘
```

**Navigation style:** Tab strip across the top (not sidebar). Five tabs. Active tab: `border-bottom: 2px solid var(--accent)`. Inactive: no underline, `color: var(--text-secondary)`.

---

## 6. Navigation Tabs (5 sections)

| Tab # | Label | Icon (Unicode) | Content |
|-------|-------|----------------|---------|
| 1 | Case Summary | ◎ | Structured case fields; demographics; symptom timeline |
| 2 | Top Insights | ✦ | 10 insight cards with Finding / Significance / Correct Response |
| 3 | Investigations | ⊞ | Prioritised investigation table with score badges |
| 4 | Differentials | ⊕ | Differential diagnosis grouped by likelihood tier |
| 5 | Action Plan | ▶ | Printable doctor report — the primary deliverable |

---

## 7. Component Specifications

### 7.1 Stat Bar (header row under case title)

Four inline stat chips showing:
- **Gaps logged** (count of [NOT DOCUMENTED] fields)
- **Prompts mapped** (total VibeRounds prompts identified)
- **Critical investigations** (count of priority-10 items)
- **Specialties involved** (count for MDT)

```
[ ◎  14 gaps ]  [ ✦  21 prompts ]  [ ⚠  4 critical ]  [ ⊞  6 specialties ]
```

Style: `background: var(--bg-tertiary); border-radius: 4px; padding: 4px 10px; font-size: 0.8rem`

---

### 7.2 Insight Card (Tab 2)

One card per insight. Layout:

```
┌─────────────────────────────────────────────────────┐
│  #1  [INSIGHT TITLE]                          [●●●] │  ← score dots (filled = high)
├─────────────────────────────────────────────────────┤
│  FINDING                                            │
│  [text]                                             │
│                                                     │
│  SIGNIFICANCE                                       │
│  [text]                                             │
│                                                     │
│  CORRECT RESPONSE                                   │
│  [text]                                             │
└─────────────────────────────────────────────────────┘
```

- Card border: `1px solid var(--border)`
- Card background: `var(--bg-secondary)`
- Section labels (`FINDING`, `SIGNIFICANCE`, `CORRECT RESPONSE`): `.label` class
- Collapsed by default — click title row to expand (accordion). Title row has `cursor: pointer`.
- Score dots: 3 filled circles = highest; colour from `--score-high / --score-mid / --score-low`

---

### 7.3 Investigation Table (Tab 3)

Three sub-tabs within this section: **History** | **Examination** | **Investigations**

Table columns: `Priority Score | Item | Why It Matters | Source`

```css
/* Score badge */
.score-badge {
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  text-align: center;
  line-height: 28px;
  font-weight: 700;
  font-size: 0.8rem;
}
/* colour assigned by score value via JS:
   score === 10  → background: var(--danger);  color: white
   score >= 8    → background: var(--warning); color: white
   score <= 7    → background: var(--success); color: white  */
```

Table rows alternate: `var(--bg-secondary)` / `var(--bg-primary)`.
Sortable by score (default: descending). Sort arrow rendered as `↑` / `↓` in the column header.

---

### 7.4 Differential Diagnosis Panel (Tab 4)

Three collapsible groups, each with a coloured left border:

| Group | Border Color | Label |
|-------|-------------|-------|
| Group A — Most Likely | `var(--accent)` | Most Likely |
| Group B — Must-Not-Miss | `var(--danger)` | Must Not Miss |
| Group C — Benign Alternatives | `var(--success)` | Benign / Alternative |

Within each group: numbered list of diagnoses. Each entry shows:
- Diagnosis name (bold)
- One-line rationale (regular weight, `var(--text-secondary)`)

---

### 7.5 Action Plan Report (Tab 5) — PRIMARY DELIVERABLE

This section renders as a clean, printable clinical brief. It is the output the medical student hands or sends to the supervising doctor.

**Layout (single column, max-width 720px, centered):**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CASE ACTION PLAN
Generated: [date]   Prepared by: Medical Student (VibeRounds)
Case: [case ID]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLINICAL SUMMARY
[2-sentence case summary]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMMEDIATE ACTIONS (do today — before any procedure)

  □  1. [Action]
  □  2. [Action]
  □  3. [Action]

URGENT INVESTIGATIONS (within 48–72 hours)

  □  1. [Investigation + reason in ≤1 line]
  □  2.
  □  3.

PRE-OPERATIVE SAFETY CHECKLIST

  □  Heart rate < 80 bpm confirmed
  □  Serum calcitonin reported as normal
  □  Phaeochromocytoma screen negative
  □  ECG reviewed — rhythm confirmed
  □  Thyroid ultrasound reported — target nodule identified
  □  Anaesthetist briefed on thyroid storm risk

SPECIALIST REFERRALS REQUIRED

  □  Endocrinology
  □  Cardiology (if AF on ECG)
  □  Nuclear Medicine (scintigraphy)
  □  Clinical Oncology (if Bethesda V/VI)

TOP 3 DIAGNOSTIC PRIORITIES

  1. [Item] — [2-sentence justification]
  2. [Item] — [2-sentence justification]
  3. [Item] — [2-sentence justification]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PREPARED USING VibeRounds v1.1
Educational output only. Independent clinical verification required.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Print button:** `window.print()`. Styled as a flat outlined button: `border: 1px solid var(--border); background: white`. Positioned top-right of the Action Plan section. Hidden in `@media print`.

**Checkbox interaction:** Each `□` checkbox is an actual `<input type="checkbox">` — checkable on screen. In print, renders as an empty box.

---

## 8. Card / Panel Base Styles

```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 16px 20px;
  margin-bottom: 12px;
}

.card:hover {
  border-color: #c0c7ce;   /* subtle hover — not accent colour */
}

/* No box-shadow on cards in minimalist theme */
```

---

## 9. Gap / Not Documented Badges

Inline tag for any field marked [NOT DOCUMENTED]:

```css
.gap-badge {
  display: inline-block;
  background: var(--warning-light);
  color: var(--warning);
  border: 1px solid #fcd34d;
  border-radius: 3px;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 1px 5px;
  letter-spacing: 0.04em;
  vertical-align: middle;
}
/* renders as: [GAP] */
```

---

## 10. JavaScript Behaviour

```javascript
// Required JS behaviours (all vanilla, no libraries):

// 1. Tab switching
//    - On tab click: hide all sections, show clicked section, update active tab styling
//    - Default active: Tab 1 (Case Summary)

// 2. Accordion (Insight Cards)
//    - Click on card header row: toggle .expanded class on card
//    - .expanded → max-height: none; collapsed → max-height: 0; overflow: hidden
//    - Animate with CSS transition: max-height 0.2s ease

// 3. Investigation sub-tab switching (within Tab 3)
//    - Same pattern as main tabs but scoped within the section

// 4. Table sort
//    - Click score column header → sort rows by score value (numeric, descending first)
//    - Toggle on second click to ascending

// 5. Print
//    - document.getElementById('print-btn').addEventListener('click', () => window.print())

// 6. Data object
//    - All content stored in a single const DATA = { ... } object at top of <script>
//    - Sections rendered by JS reading DATA — not hardcoded in HTML
//    - This makes the template reusable: swap DATA, same HTML/CSS/JS renders new case
```

---

## 11. Data Object Structure

The LLM generating the HTML file must populate this object from the VibeRounds case analysis files:

```javascript
const DATA = {
  meta: {
    caseId: "Adult-ThyroidMass-SubclinicalHyper",
    caseTitle: "Recent Thyroid Mass with Subclinical Hyperthyroidism",
    date: "20 June 2026",
    sourceUrl: "https://classworkdecjan.blogspot.com/2026/06/case-2-20-jun-2026.html",
    stats: {
      gaps: 14,
      prompts: 21,
      criticalInvestigations: 4,
      specialties: 6
    }
  },

  caseSummary: {
    chiefComplaint: "",
    duration: "",
    keyFindings: [],          // array of strings
    workingDiagnoses: [],     // array of strings
    planStatus: "",
    timeline: []              // array of { time: "", event: "" }
  },

  insights: [
    {
      number: 1,
      title: "",
      scoreLevel: "high",     // "high" | "mid" | "low"
      finding: "",
      significance: "",
      correctResponse: ""
    }
    // × 10
  ],

  investigations: {
    history: [
      { score: 10, item: "", whyItMatters: "", source: "" }
    ],
    examination: [
      { score: 10, item: "", whyItMatters: "", source: "" }
    ],
    investigations: [
      { score: 10, item: "", whyItMatters: "", source: "" }
    ]
  },

  differentials: {
    mostLikely: [
      { name: "", rationale: "" }
    ],
    mustNotMiss: [
      { name: "", rationale: "" }
    ],
    benign: [
      { name: "", rationale: "" }
    ]
  },

  actionPlan: {
    clinicalSummary: "",
    immediateActions: [],     // array of strings
    urgentInvestigations: [], // array of { item: "", reason: "" }
    preOpChecklist: [],       // array of strings (checkbox labels)
    referrals: [],            // array of strings
    top3Priorities: [
      { item: "", justification: "" }
    ]
  }
};
```

---

## 12. Print Styles

```css
@media print {
  nav, .tab-strip, .print-btn, footer { display: none; }
  body { font-size: 12px; color: #000; background: #fff; }
  .card { border: 1px solid #ccc; page-break-inside: avoid; }
  a { color: #000; text-decoration: none; }
  /* Only the Action Plan section renders in print */
  section:not(#action-plan) { display: none; }
  #action-plan { display: block !important; }
}
```

---

## 13. Spacing Scale

Use multiples of 4px only. Do not use arbitrary values.

```
4px   — tight inline gaps
8px   — element internal padding (small)
12px  — card margin-bottom
16px  — card padding (vertical)
20px  — card padding (horizontal), section gap
24px  — between major blocks
32px  — section top margin
48px  — page top/bottom padding
```

---

## 14. Rules for the LLM Generating the HTML File

1. Output a single `.html` file. Begin with `<!DOCTYPE html>`.
2. Place all CSS inside one `<style>` block in `<head>`.
3. Place all JavaScript inside one `<script>` block at end of `<body>`.
4. Populate `const DATA = { ... }` from the four VibeRounds case analysis `.md` files provided.
5. Render all sections from `DATA` via JavaScript DOM manipulation — do not hardcode case content in HTML.
6. Apply the exact color palette from Section 3. Do not introduce new colors.
7. Use the Inter font via Google Fonts CDN as the only external resource.
8. Do not use any CSS framework (no Tailwind, no Bootstrap).
9. Do not use any JavaScript framework or library.
10. The Action Plan tab (Tab 5) must be print-ready with `@media print` rules per Section 12.
11. Every `[NOT DOCUMENTED]` field in the source data must render with a `.gap-badge` reading `[GAP]`.
12. All accordions collapsed by default. All tables sorted by score descending on load.
13. The file must render correctly in a modern browser without any build step, bundler, or server.
14. Do not add any content not present in the source VibeRounds `.md` files.

---

## 15. File Naming Convention

Output file: `VibeRounds-Dashboard-[CaseName].html`

For this case: `VibeRounds-Dashboard-Adult-ThyroidMass-SubclinicalHyper.html`

---

*VibeRounds Dashboard Design Guidelines v1.0 — June 2026*
*Template for educational use. All dashboard outputs require independent clinical verification. Not a clinical decision support tool.*
