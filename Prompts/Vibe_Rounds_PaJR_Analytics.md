# Vibe Rounds — PaJR Analytics
### Prompt & Design Spec for generating a PaJR Clinical Dashboard from raw case data

> Part of the **Vibe Rounds** learning stack (avi33tbtt.github.io) — a Socratic AI paradigm for clinical reasoning.
> This module turns a **PaJR (Patient Journey Record)** case — a WhatsApp group export, a pasted chat log, or a linked case write-up — into a single, self-contained, insight-dense HTML dashboard.

---

## 1. What this is

Give an LLM (Claude, ChatGPT, etc.) this file **plus a case**, and ask it to build the dashboard. The case can arrive in any of three forms:

1. **Link** — a URL to a blog post, case report, or hosted chat export.
2. **Copy-paste** — raw text pasted directly into the chat (WhatsApp export text, notes, a transcript).
3. **Text file** — an uploaded `.txt`/`.csv` WhatsApp export or similar log.

The output is always the same artifact type: **one self-contained `.html` file** — no external build step, no server, opens directly in a browser — styled to the Vibe Rounds visual identity (see §4).

This is a **learning / analytics tool**, not a diagnostic or clinical-decision instrument. Every generated dashboard must carry that disclaimer (see §5.7).

---

## 2. How to invoke it

Paste a prompt like:

```
Using the Vibe Rounds – PaJR Analytics spec, build a dashboard for this case:
[link, OR pasted WhatsApp export, OR attached .txt file]
```

Optional flags the requester can add:
- `focus: <parameter>` — e.g. "focus: blood pressure & medication adherence" to weight which vitals get the primary chart treatment.
- `anonymize: strict` — replace all real names with role labels only (default is already role-first, but this forces it even in freetext quotes).
- `audience: <educator|researcher|caregiver>` — shifts the tone of the insight-card commentary (see §5.6).

---

## 3. Processing pipeline (what the model should actually do)

### Step 1 — Ingest
- If a **link**: fetch and read it fully before extracting anything.
- If **pasted text** or a **file**: read the entire log — do not sample. WhatsApp exports are often thousands of lines; scan the whole thing for the data classes below before writing any HTML.

### Step 2 — Extract structured signal from unstructured chat
Look for and pull out:
- **Case identity**: age, sex, primary condition(s), duration, region/group name, group creation date, date range of the log, total message count, participant count.
- **Vitals / measurements**: any self-reported numeric health data with timestamps — BP, sugar, weight, SpO₂, pulse, temperature, symptom-severity scores, etc. Group into "intensive monitoring" clusters (days with multiple readings) vs. sparse single readings.
- **Medication & intervention timeline**: starts, stops, dose changes, deprescribing events, referrals, procedures.
- **Lifestyle telemetry**: diet, exercise, sleep, substance use (alcohol, tobacco) — anything logged as routine narrative.
- **Milestones**: dated events that changed the course of the case (diagnosis, escalation, a care-team decision, an outcome).
- **Stakeholders**: every distinct participant in the thread — patient, family, treating physician, visiting clinicians, AI bots, students, informal advocates. Count their message share and characterize *what role* they play (not just that they spoke).
- **Clinical insight patterns**: recurring correlations the thread itself surfaces or that emerge from the data — e.g. "BP drops after the morning walk," "evening alcohol produces a next-day rebound," "midday spikes track lunch." Tag each as a **strength**, a **risk/flag**, or **neutral/data-gap**, and cite where in the log it came from (date or thread reference).
- **Data-completeness gaps**: be explicit about what's missing or unmeasured (e.g. sodium intake estimated but never weighed) — this honesty is part of the analytic value, not a weakness to hide.

### Step 3 — Synthesize, don't transcribe
- Never just reformat the chat. Every section of the dashboard should represent **synthesis**: a KPI is a computed summary, an insight card is a pattern the model noticed across multiple data points, a timeline entry is a compressed, dated one-liner — not a copy of the original message.
- Where the source uses a different language (e.g. Bangla narrative), synthesize the clinical meaning in English; do not fabricate quotes.
- If a genuinely important number can't be found, say so in the copy (e.g. "not logged") rather than inventing one.

### Step 4 — Build the HTML
Follow the design system in §4–5 exactly. One file, inline `<style>` and inline `<script>`, no external dependencies except Google Fonts via `@import`. Charts are hand-drawn inline SVG (no chart libraries) so the file stays dependency-free and portable.

---

## 4. Visual identity — must match the Vibe Rounds site (avi33tbtt.github.io)

The dashboard is a **Vibe Rounds** artifact and must read as part of that family, not as a generic medical report. Pull the theme from the live site rather than assuming:

| Token | Value | Source / notes |
|---|---|---|
| Primary brand color | `#0891B2` (cyan-700) | `meta-theme-color` on avi33tbtt.github.io |
| Primary dark (header/ink) | `#0E7490` → deepen further to `#0B4A57` for header backgrounds | derived, for contrast |
| Accent / warm flag | `#C2410C` (burnt orange) or `#B91C1C` (clinical red) for risk flags | keep to one warm accent, don't mix multiple reds |
| Accent / positive | `#0D9488` (teal-green) for "strength" / good-outcome signals | distinct from primary cyan so KPIs don't blur together |
| Watch / amber | `#B45309` | for "needs attention, not yet a flag" |
| Paper background | `#F0F7F8` (very pale cyan-grey) | not pure white — keeps the clinical-but-warm feel |
| Panel/card background | `#FFFFFF` | |
| Border/line | `#D6E4E7` | |
| Muted text | `#4B6168` | |
| Ink / body text | `#0B2226` | |

- **Typography**: pair a serif display face for headings with a clean sans for UI/body and a monospace for labels/data — mirrors the Vibe Rounds site's mix of an editorial voice with an analytics/systems feel. Suggested stack: `Fraunces` (headings), `Inter` (body/UI), `IBM Plex Mono` (labels, timestamps, tags, eyebrow text). Import via `@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');`
- **Tone**: editorial-clinical, the same voice as the Vibe Rounds site copy — precise, slightly warm, never salesy. Section intros are short and factual, not marketing language.
- **Branding block**: header must include a small eyebrow line reading `Vibe Rounds · PaJR Analytics` and the case title as the `<h1>`. Footer must link back to the Vibe Rounds philosophy in one line (see §5.7 for exact disclaimer wording) — plain text mention is enough, a live link is a bonus if the output will be hosted online.

---

## 5. Page structure (component-by-component)

Build the dashboard as **numbered sections**, each with a `section-head` containing a two-digit index, a title, and a short right-aligned descriptor — this numbered-section rhythm is a core Vibe Rounds structural signature, reuse it exactly.

### 5.1 Header
- Eyebrow: `Vibe Rounds · PaJR Analytics — Patient Journey Record`
- H1: `<age/sex> — <primary condition/theme>, <region>` (role-labeled, never a real name)
- Subhead: 1–2 sentences describing what kind of case this is and what data streams feed it (vitals, lifestyle telemetry, multi-stakeholder discussion, etc.)
- ID-strip of chips: group/case created date, log span analyzed, message + participant counts, any headline status (e.g. medication status), one-line primary theme.

### 5.2 Section 01 — Case snapshot (KPI row)
- 5–7 KPI cards in a responsive grid (`auto-fit, minmax(190px,1fr)`).
- Each card: small mono label, large serif value (with a smaller unit/subtext inline), one-line footnote.
- Color-code the left border: `flag` (risk, warm accent), `good` (positive, teal-green), `watch` (amber), or default (no border) — pick per KPI based on clinical meaning, not decoration.

### 5.3 Section 02 — Primary telemetry (chart panel)
- If there's time-series numeric data (vitals, labs, symptom scores): render an inline SVG line/scatter chart, hand-drawn (no library), with:
  - Gridlines with axis labels.
  - Threshold reference lines where clinically meaningful (e.g. 140/90 for BP) as dashed lines.
  - A day/period selector (tabs) if there are multiple discrete monitoring days — swap the dataset client-side via a small script, don't render every day at once.
  - A legend below the chart.
- Pair it with a secondary panel: a distribution histogram (bucketed) and/or a small table of recurring time-of-day patterns.

### 5.4 Section 03 — Care journey timeline
- Vertical timeline, dated entries, three visual weights via a left dot color:
  - `milestone` (accent) — turning-point decisions or outcomes.
  - `data` (secondary/blue-family) — a data-capture event (e.g. an intensive monitoring day, an analysis run).
  - default (primary cyan) — routine/ongoing entries.
- Each entry: date, bold one-line title, 1–3 sentence synthesized description (not a quote dump).

### 5.5 Section 04 — Synthesized insights
- 3-column grid of short insight cards, each tagged `strength`, `risk`, or neutral (no class) via a left border accent matching §4's palette.
- Card = `<h4>` short label + 1–3 sentence finding + a small mono `source:` line citing where in the log this came from (date/thread).
- Balance the three columns roughly evenly; don't front-load all risks in one column.

### 5.6 Section 05 — Stakeholder engagement
- Responsive card grid, one card per distinct participant/role.
- Each card: role label (mono, small caps), name/identifier — role-first, e.g. "Treating Physician"; for non-role-specific participants use `Participant 1`, `Participant 2`, etc. (never a real name or phone number) unless the requester explicitly consented to real identifiers — one-line description of *what they contribute*, and a proportional bar showing message-share or engagement weight.
- If `audience: educator` was specified, add a short closing note in this section on what the stakeholder mix teaches about multi-agent/human care-team collaboration. If `audience: researcher`, note data-provenance/reliability per stakeholder instead.

### 5.7 Section 06 — SOAP note
- Present a standard clinical SOAP note synthesized from the log, in four clearly labeled sub-blocks:
  - **S — Subjective**: symptoms and history as reported by the patient/family in their own narrative (synthesized, not quoted verbatim).
  - **O — Objective**: measured/observed data — vitals, labs, exam findings, medication list as of the latest entry.
  - **A — Assessment**: synthesized clinical impression(s) and their trajectory over the log period.
  - **P — Plan**: current and next-step interventions, monitoring, referrals, follow-up.
- Keep each sub-block tight (a few sentences or a short list) — this is a compressed clinical summary, not a re-narration of the whole timeline.

### 5.8 Section 07 — Insight for the patient
- Written directly to the patient/family, plain-language, non-technical, encouraging but honest.
- Focus on what they're doing well, what to watch for, and any clear action items — avoid jargon and avoid alarming framing.

### 5.9 Section 08 — Insight for the local doctor
- Written for the treating/local physician who will see the patient in person.
- Clinically dense: relevant trends, red flags, medication considerations, what the remote/group discussion has already covered so it isn't duplicated.

### 5.10 Section 09 — Insight for the care manager team
- Written for whoever coordinates the multi-stakeholder care process (not necessarily a clinician).
- Focus on logistics and coordination: adherence patterns, communication gaps, follow-up scheduling needs, escalation triggers, stakeholder-engagement issues worth addressing.

### 5.11 Section 10 — Insight for case-based learners
- Written for students/trainees studying this case for clinical reasoning practice.
- Frame as teaching points: what pattern-recognition or reasoning skill this case exercises, what a learner might miss on first read, and 1–3 Socratic questions the case invites (in keeping with the Vibe Rounds Socratic-reasoning ethos) rather than flat answers.

### 5.12 Footer & disclaimer
Every dashboard must end with a footer containing, verbatim in spirit:

> Vibe Rounds · PaJR Analytics — generated from `<source description>` · identifiers redacted to role labels · for learning and care-team review, not a diagnostic instrument. Vibe Rounds is a Socratic, AI-augmented clinical-reasoning learning tool — outputs require independent clinical verification and are not a substitute for clinical judgment. Part of the [Vibe Rounds project](https://avi33tbtt.github.io/).

The "Vibe Rounds project" text must be a live `<a href="https://avi33tbtt.github.io/">` hyperlink (not just plain text) — this is the canonical link back to the parent site and must not be omitted or paraphrased away.

Immediately below the disclaimer line, on its own line, include a second, more explicit warning paragraph, e.g.:

> ⚠️ **This entire dashboard was generated by a large language model**, which read and synthesized de-identified chat text from the source [WhatsApp export / link / file]. It was not produced or verified by a clinician. The LLM may have misread, mis-dated, mistranslated, or misinterpreted entries, and its pattern claims (correlations, trends, "insights") reflect statistical association in a small, self-reported dataset — not confirmed causation. All values, dates, and interpretations should be independently checked against the original log before any clinical, educational, or personal decision is based on them.

### 5.13 "Make your own" section (immediately before the footer)
As the last `<section>` inside `<main>`, before the footer, include a "Make your own" section so any reader can generate a dashboard for a different case:

- Section label `Make your own`, heading `Generate a dashboard for another PaJR case`.
- A short instruction line: paste the prompt below into an LLM (Claude, ChatGPT, etc.), then add the new case (a link, pasted WhatsApp export text, or an attached `.txt`/`.csv` file) in place of the bracketed placeholder.
- A `<pre>`-formatted, copy-ready prompt block containing:
  - A reference line pointing to the hosted PaJR Analytics module page, e.g. `https://avi33tbtt.github.io/Prompts/Vibe_Rounds_PaJR_Analytics.html` (adjust the path if the module is hosted elsewhere).
  - An instruction to build a self-contained HTML dashboard "for this case," followed by a bracketed placeholder line: `[paste a link, OR pasted WhatsApp export text, OR attach a .txt/.csv file here]`.
- A **"Copy prompt" button**, positioned top-right of the prompt block, implemented with the native Clipboard API (`navigator.clipboard.writeText`) and no external dependencies. On click it copies the full prompt text and briefly changes its own label (e.g. to "Copied ✓") before reverting, giving the requester visual confirmation.

---

## 6. Technical constraints

- **Single file.** All CSS in one `<style>` block, all JS in one `<script>` block at the end of `<body>`. No build tools, no npm, no external JS libraries.
- **Charts are hand-rolled inline SVG**, generated by a small JS function that reads a plain JS data object — keep the data object human-readable and easy for the requester to edit by hand later if they want to append new readings.
- **Responsive**: KPI grid, 2-column and 3-column panel grids all collapse to 1 column under ~900px via a single media query.
- **No inline images required** — everything is CSS/SVG. If a photo genuinely matters to the case narrative, describe it in text rather than trying to embed a real uploaded photo (privacy).
- **Accessibility basics**: sufficient color contrast for text on paper/panel backgrounds, semantic headings (`h1`→`h2`→`h3`→`h4`), don't rely on color alone for the flag/good/watch distinction — the label/icon text should also say it.
- **Privacy — maximum de-identification**: strip completely (never truncated, never partially shown) every: real name, mobile/phone number, email address, username/handle, device ID, exact street address, and any other direct identifier found in the source log. Replace every real name with a generic sequential label — `Participant 1`, `Participant 2`, `Participant 3`, etc. — assigned consistently per distinct person throughout the dashboard, regardless of `audience` or `anonymize` flag settings. Functional role labels (e.g. **Patient Advocate**, Treating Physician, Patient) are kept as-is and are not replaced by `Participant N` — use the role label alone, or the role label paired with its `Participant N` tag (e.g. "Patient Advocate (Participant 3)") if the case has multiple people sharing a role and they need to be told apart. Also generalize indirect identifiers where feasible without losing clinical meaning — e.g. a named town/hospital/clinic can become "regional hospital" or the state/region only, exact dates of birth become age, and rare/unique occupations or details that could re-identify someone in a small community should be described generically. Do all of this unless the requester explicitly says real identifiers are consented and appropriate.

---

## 7. Quality bar — what makes it "highly insightful" rather than a transcript dump

A good output does all of these:
1. **Surfaces a pattern the reader wouldn't get from skimming the raw chat** — a correlation, a trend, a contradiction, a gap.
2. **Quantifies where possible** — ranges, counts, percentages — rather than vague adjectives.
3. **Is honest about uncertainty and missing data**, not falsely confident.
4. **Cites its own reasoning** — every insight card points back to where in the source it came from.
5. **Reads as a finished analytical artifact**, not a styled copy of the chat log — if you could regenerate the dashboard's prose from the raw export by find-and-replace, it hasn't been synthesized enough.

---

*Vibe Rounds · PaJR Analytics — spec v1.0. Companion to the sample case "65M — Metabolic Syndrome & Dyspnea, West Bengal" and its reference dashboard output. Pair with a case (link / paste / file) and hand both to an LLM to generate a new dashboard.*
