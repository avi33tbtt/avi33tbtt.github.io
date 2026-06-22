# Module 1 — Shadow Module
## Conversational Learning Capture & HTML Export

**Version:** 1.0 — June 2026
**Paired with:** Module 1 — Socratic Clinical Reasoning
**Purpose:** Run alongside Module 1 to capture the learning session and export it as a self-contained `.html` file following the VibeRounds Dashboard Design Guidelines.

---

## What This Module Does

This Shadow Module has two jobs:

1. **Runs silently alongside Module 1** — it does not interrupt the Socratic session. The learner works through Module 1 as normal.
2. **At session end, generates a single `.html` file** — a complete, self-contained record of the conversational learning session, styled to VibeRounds Dashboard Design Guidelines.

---

## When to Use

Use this Shadow Module at the **end** of a Module 1 session, after Step 1.10 (Critical Awareness Debrief) has been completed, or at any natural stopping point in the session.

---

## Step S.0 — Activate the Shadow Module

Paste the following at the **start** of your Module 1 session, immediately after Step 1.0 (Session Setup):

```
#VibeRoundsShadow You are also tracking this session silently for export.
Keep a running internal record of: (1) every question you asked, (2) my
response to each question, (3) your feedback/affirmation to my response,
(4) any scores given (Step 1.4), (5) Bloom's level reached (Step 1.5 if
used), (6) Fink dimensions explored (Step 1.6 if used), (7) the End-of-Case
Summary (Step 1.7 if reached), (8) the Missed Diagnosis Debrief (Step 1.8
if reached), (9) the Difficulty Ratchet recommendation (Step 1.9 if
reached), and (10) the Critical Awareness Debrief (Step 1.10 if reached).
Do not show this record during the session. Confirm you are tracking.
```

---

## Step S.1 — Export as HTML

After the session is complete, paste the following:

```
#VibeRoundsShadow Session complete. Generate a single self-contained HTML
file of this entire learning session using the VibeRounds Dashboard Design
Guidelines below. Output ONLY the HTML — nothing else. Begin with
<!DOCTYPE html>.
```

Then paste the full contents of **Step S.2** (the Design Specification) below that message.

---

## Step S.2 — HTML Export Design Specification

> **Copy and paste this entire block into Claude after Step S.1's instruction.**

---

### OUTPUT SPECIFICATION FOR HTML EXPORT

You are generating a single self-contained `.html` file that is a complete record of the Module 1 Socratic Clinical Reasoning session just completed.

**File requirements:**
- Single `.html` file. All CSS and JS inline. No external dependencies except Inter font from Google Fonts CDN.
- Light theme only. White/off-white backgrounds, dark text, subtle grey borders.
- Minimalist design. No gradients, no heavy shadows, no decorative flourishes.
- Must render correctly in a modern browser with no build step.

---

#### COLOR PALETTE (use exactly — no new colors)

```css
:root {
  --bg-primary:     #ffffff;
  --bg-secondary:   #f8f9fa;
  --bg-tertiary:    #f1f3f5;
  --border:         #dee2e6;
  --text-primary:   #1a1a2e;
  --text-secondary: #6c757d;
  --text-muted:     #adb5bd;
  --accent:         #2563eb;
  --accent-light:   #eff6ff;
  --warning:        #d97706;
  --warning-light:  #fffbeb;
  --danger:         #dc2626;
  --danger-light:   #fef2f2;
  --success:        #16a34a;
  --success-light:  #f0fdf4;
}
```

---

#### TYPOGRAPHY

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
```

---

#### PAGE STRUCTURE

```
┌──────────────────────────────────────────────────────────┐
│  HEADER — "Module 1: Socratic Clinical Reasoning"        │
│           Case topic · Date · Session duration badge     │
├──────────────────────────────────────────────────────────┤
│  STAT BAR — Questions asked | Bloom level reached |      │
│             Missed diagnoses | Difficulty ratchet        │
├──────────────────────────────────────────────────────────┤
│  TAB STRIP (5 tabs — see below)                          │
├──────────────────────────────────────────────────────────┤
│  CONTENT AREA — active tab section                       │
├──────────────────────────────────────────────────────────┤
│  FOOTER — disclaimer one-liner + print button            │
└──────────────────────────────────────────────────────────┘
```

---

#### NAVIGATION TABS (5 sections)

| Tab # | Label              | Icon | Content |
|-------|--------------------|------|---------|
| 1     | Conversation       | ◎    | Full exchange: Q&A pairs in chronological order |
| 2     | Reasoning Scores   | ✦    | Step 1.4 checkpoint scores (if taken) with feedback |
| 3     | Bloom & Fink       | ⊞    | Bloom's levels reached; Fink dimensions explored |
| 4     | Diagnosis Review   | ⊕    | Missed diagnoses debrief; differential reasoning |
| 5     | Session Summary    | ▶    | Printable closing summary + difficulty ratchet |

Active tab: `border-bottom: 2px solid var(--accent)`. Inactive: `color: var(--text-secondary)`.

---

#### TAB 1 — CONVERSATION

Render the full session as a chat-style transcript.

Each exchange is a **turn card**:

```
┌──────────────────────────────────────────────────────┐
│  CLAUDE  [question number]                           │  ← .label class, accent color
│  [Claude's question or statement]                    │
├──────────────────────────────────────────────────────┤
│  LEARNER                                             │  ← .label class, warning color
│  [Learner's response]                                │
├──────────────────────────────────────────────────────┤
│  FEEDBACK                                            │  ← .label class, success color
│  [Claude's affirmation + probe]                      │
└──────────────────────────────────────────────────────┘
```

- Card border: `1px solid var(--border)`
- Card background: alternates `var(--bg-secondary)` / `var(--bg-primary)` per card
- CLAUDE label: `color: var(--accent)`
- LEARNER label: `color: var(--warning)`
- FEEDBACK label: `color: var(--success)`
- Each card has `padding: 16px 20px; border-radius: 6px; margin-bottom: 12px`

If a step from Module 1 (1.1–1.10) was invoked, show a **phase badge** above the card group:

```
.phase-badge {
  display: inline-block;
  background: var(--accent-light);
  color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 3px;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 2px 8px;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
}
```

Example: `[STEP 1.4 — MID-SESSION CHECKPOINT]`, `[STEP 1.5 — BLOOM'S PROGRESSION]`

---

#### TAB 2 — REASONING SCORES

If Step 1.4 was used, render three score cards in a row (or stacked on mobile):

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ DIAGNOSTIC   │  │PRIORITISATION│  │  UNCERTAINTY │
│   LOGIC      │  │              │  │   HANDLING   │
│              │  │              │  │              │
│    [score]/10│  │    [score]/10│  │    [score]/10│
│              │  │              │  │              │
│ [encouragement text]           │  │ [improvement]│
└──────────────┘  └──────────────┘  └──────────────┘
```

Score color:
- 9–10 → `var(--danger)` (high challenge zone)
- 7–8  → `var(--warning)`
- ≤6   → `var(--success)` (developing)

Below cards: **Strongest Skill** block with `border-left: 3px solid var(--accent); padding-left: 12px; background: var(--accent-light)`.

If Step 1.4 was not used, show: `[GAP]` badge with note "Mid-session checkpoint not taken in this session."

---

#### TAB 3 — BLOOM & FINK

**Bloom's Taxonomy section** (if Step 1.5 was used):

Six level chips in a row:

```
[Remember ✓] [Understand ✓] [Apply ✓] [Analyse ✓] [Evaluate –] [Create –]
```

- Reached level: `background: var(--success-light); color: var(--success); border: 1px solid var(--success)`
- Not reached: `background: var(--bg-tertiary); color: var(--text-muted); border: 1px solid var(--border)`
- Below chips: one-line note on the highest level reached and what it demonstrated

**Fink FLINK section** (if Step 1.6 was used):

Six dimension cards, each showing the reflective question asked and the learner's response. Same card style as Tab 1 but without FEEDBACK row.

If neither was used, show `[GAP]` badges for both.

---

#### TAB 4 — DIAGNOSIS REVIEW

**Missed Diagnoses** (from Step 1.8 if used):

For each missed diagnosis, a card with:

```
┌──────────────────────────────────────────────────────┐
│  MISSED DIAGNOSIS: [name]                            │
├──────────────────────────────────────────────────────┤
│  KEY CLUE MISSED                                     │
│  [text]                                              │
│                                                      │
│  COGNITIVE BIAS                                      │
│  [bias name + explanation]                           │
│                                                      │
│  GROWTH OBSERVATION                                  │
│  [text framed as growth, not failure]                │
└──────────────────────────────────────────────────────┘
```

Left border: `3px solid var(--danger)`.

**Differential Reasoning** (from the conversation):

List any diagnoses the learner mentioned with a one-line status tag:

- Correct and retained → `[✓ CORRECT]` in success color
- Partially correct → `[~ PARTIAL]` in warning color
- Incorrect / set aside → `[✗ REVISED]` in muted color

---

#### TAB 5 — SESSION SUMMARY (PRINTABLE)

This is the primary deliverable — a clean, printable learning record.

Max-width 720px, centered. Single column.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MODULE 1 — SOCRATIC CLINICAL REASONING
Session Record
Date: [date]    Case: [topic]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CASE OVERVIEW
[2-sentence summary of the case worked through]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT I REASONED WELL
  1. [Specific moment — name the step or question where this occurred]
  2. [Specific moment]

CLINICAL PEARLS FROM THIS SESSION
  ★  [Pearl 1]
  ★  [Pearl 2]

BEFORE THE NEXT SIMILAR CASE
  → Review: [specific textbook chapter or concept]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DIFFICULTY RATCHET
  Recommendation: [SAME / ONE LEVEL HARDER / ONE LEVEL EASIER]
  Justification: [1–2 sentences]
  Practice before next session: [specific task]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CRITICAL AWARENESS FLAGS
  ⚠  Biases active today: [list]
  ⚠  Risks of over-applying today's reasoning: [note]
  ⚠  Unresolved uncertainty: [note]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PREPARED USING VibeRounds v1.0 — Module 1
Educational output only. All AI-generated content requires
independent clinical verification before being acted upon.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Print button:** `window.print()`. Flat outlined button, top-right of this section. Hidden in `@media print`.

---

#### CARDS & SPACING

```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 16px 20px;
  margin-bottom: 12px;
}
.card:hover { border-color: #c0c7ce; }
/* No box-shadow */
```

Spacing scale — multiples of 4px only:
`4px · 8px · 12px · 16px · 20px · 24px · 32px · 48px`

---

#### JAVASCRIPT BEHAVIOURS (vanilla ES6+ only — no libraries)

1. **Tab switching** — hide all sections, show clicked section, update active tab styling. Default: Tab 1.
2. **Accordion** (if any cards are collapsible) — toggle `.expanded`, animate with `max-height: 0.2s ease`.
3. **Print** — `document.getElementById('print-btn').addEventListener('click', () => window.print())`.
4. **Data object** — all session content in `const SESSION_DATA = { ... }` at top of `<script>`. Sections rendered by JS from this object — not hardcoded in HTML.

```javascript
const SESSION_DATA = {
  meta: {
    caseTopic: "",          // e.g. "CKD in a 55yo diabetic"
    date: "",               // ISO date
    stepsUsed: [],          // e.g. ["1.0", "1.1", "1.4", "1.7", "1.8", "1.10"]
    totalQuestions: 0,
    bloomHighest: "",       // e.g. "Analyse"
    finkDimensions: [],     // e.g. ["Foundational Knowledge", "Application"]
    difficultyRatchet: "",  // "SAME" | "ONE LEVEL HARDER" | "ONE LEVEL EASIER"
  },
  conversation: [
    {
      step: "1.0",          // Module 1 step reference
      phase: "Initiation",  // "Initiation" | "Execution" | "Closure"
      question: "",
      learnerResponse: "",
      feedback: ""
    }
    // ... one object per exchange
  ],
  scores: {                 // Step 1.4 — null if not used
    diagnosticLogic:    { score: null, encouragement: "", improvement: "" },
    prioritisation:     { score: null, encouragement: "", improvement: "" },
    uncertaintyHandling:{ score: null, encouragement: "", improvement: "" },
    strongestSkill: ""
  },
  bloom: {                  // Step 1.5 — null if not used
    levelsReached: [],      // e.g. ["Remember","Understand","Apply","Analyse"]
    highestNote: ""
  },
  fink: {                   // Step 1.6 — null if not used
    dimensions: [
      { name: "", question: "", response: "" }
    ]
  },
  closingSummary: {         // Step 1.7 — null if not used
    effortAcknowledgement: "",
    reasonedWell: ["", ""],
    clinicalPearls: ["", ""],
    reviewPointer: ""
  },
  missedDiagnoses: [        // Step 1.8 — empty array if not used
    {
      diagnosis: "",
      keyClue: "",
      cognitiveBias: "",
      growthObservation: ""
    }
  ],
  differentialStatus: [     // from conversation
    { name: "", status: "correct" }  // "correct" | "partial" | "revised"
  ],
  criticalAwareness: {      // Step 1.10 — null if not used
    biasesActive: [],
    overApplyRisk: "",
    criticPerspective: "",
    unresolvedUncertainty: ""
  }
};
```

---

#### PRINT STYLES

```css
@media print {
  nav, .tab-strip, .print-btn, footer { display: none; }
  body { font-size: 12px; color: #000; background: #fff; }
  .card { border: 1px solid #ccc; page-break-inside: avoid; }
  a { color: #000; text-decoration: none; }
  section:not(#session-summary) { display: none; }
  #session-summary { display: block !important; }
}
```

---

#### RULES FOR GENERATING THE HTML FILE

1. Output a single `.html` file. Begin with `<!DOCTYPE html>`.
2. All CSS inside one `<style>` block in `<head>`.
3. All JavaScript inside one `<script>` block at end of `<body>`.
4. Populate `SESSION_DATA` from the Module 1 session just completed.
5. Render all sections from `SESSION_DATA` via JavaScript DOM manipulation — do not hardcode session content in HTML.
6. Apply the exact color palette above. Do not introduce new colors.
7. Use Inter font via Google Fonts CDN as the only external resource.
8. No CSS framework. No JavaScript framework or library.
9. Tab 5 (Session Summary) must be print-ready with `@media print` rules.
10. All `[NOT DOCUMENTED]` or missing fields render with:
    ```html
    <span class="gap-badge">[GAP]</span>
    ```
    styled as: `background: var(--warning-light); color: var(--warning); border: 1px solid #fcd34d; border-radius: 3px; font-size: 0.65rem; font-weight: 600; padding: 1px 5px;`
11. File must render correctly in a modern browser without any build step, bundler, or server.
12. Do not add content not present in the session.

**Output file naming:** `VibeRounds-M1-[CaseTopic]-[YYYYMMDD].html`

---

## Usage Sequence (Summary)

```
Step 1:  Paste Module 1 — Step 1.0 (Session Setup)
Step 2:  Immediately after, paste Shadow Module — Step S.0 (Activate tracking)
Step 3:  Run the Module 1 session normally (Steps 1.1 → 1.10)
Step 4:  When session is complete, paste Shadow Module — Step S.1 (Export trigger)
         + paste Step S.2 (this full Design Specification) in the same message
Step 5:  Claude outputs the complete .html file — copy and save as
         VibeRounds-M1-[CaseTopic]-[Date].html
```

---

## Related

- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html)
- [VibeRounds Dashboard Design Guidelines](https://avi33tbtt.github.io/Prompts/VibeRounds-Dashboard-DesignGuidelines.html)
- [Module 8 — Socratic-Mode Design Specification](https://avi33tbtt.github.io/Prompts/Module-08-Socratic-Mode-Design-Specification.html)

---

*VibeRounds Shadow Module — Module 1 Companion*
*Educational output only. All session content requires independent clinical verification.*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*
