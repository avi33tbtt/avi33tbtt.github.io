# Vibe Rounds
### Turn any clinical case write-up into a queryable knowledge graph

---

## What this is

A repeatable prompt/runbook. Paste a case link in, get back a self-contained
HTML artifact: a node-link knowledge graph of the case (symptoms → exam →
investigations → diagnoses → treatment), a day-by-day timeline, and a
**reasoning-gap layer** — a clinician's-brain pass that adds what's *missing*
from the documented workup, sourced from general medical knowledge rather
than the chart itself.

This file is the spec. Paste it (or its contents) to Claude along with a
case URL, and say: **"Run Vibe Rounds on this case: `<link>`"**

---

## How to run it

1. Give Claude the case link (a blog post, a discharge summary, a teaching
   case PDF — anything with a clinical narrative).
2. Claude fetches and reads the source.
3. Claude extracts the case into the structured node model below.
4. Claude adds the reasoning-gap layer from general clinical knowledge.
5. Claude builds one self-contained `.html` file following the design system
   below and delivers it as a file.

No code should be written before this extraction step — the graph is only
as good as the structured read of the source case.

---

## 1. Extraction pass — build the node model

Read the case once for narrative, then extract every discrete clinical fact
into one of these types. Skip nothing that's in the chart; don't invent
anything at this stage — that comes later, and it's a separate, visibly
distinct layer.

| Type | What goes here | Examples |
|---|---|---|
| `symptom` | Presenting complaints, history, comorbidities, risk factors | "Fever ×15d", "K/C/O CKD", "Chronic smoker" |
| `exam` | Positive and pertinent-negative findings on examination | "Shifting dullness +", "HR 100, BP 110/100" |
| `invx` | Investigations ordered (not results, unless the result is the notable fact) | "RFT", "Blood culture" |
| `dx` | Diagnoses — working, revised, and final — including how a label changes over the admission | "UTI (Day 1–3)", "Hepatic encephalopathy (Day 5, revised from hypertensive)" |
| `rx` | Treatments, drugs, interventions, and when they were added/stopped | "Lactulose, added Day 3" |

For each node, capture:
- a short **label** (what shows on the graph)
- an optional **sub-label** (dose, timing, qualifier)
- a 1–3 sentence **description** written for a learner, not a copy of the
  chart line — explain *why this fact matters*, not just what it says

Then draw **edges** between nodes wherever the source material implies a
causal or reasoning link: symptom → investigation it prompted, investigation
→ diagnosis it supported, diagnosis → treatment it led to, any node → an
outcome. Prefer edges the case itself justifies over ones you're inferring.

If the case has a clear chronological structure (ward-round notes, daily
SOAP entries, an admission-to-discharge or admission-to-death arc), extract
a parallel **timeline** array: one entry per distinct day/stage, each with a
short label and 1–2 sentence summary. Flag any point where a diagnosis is
revised — that's usually the most instructive moment in the case.

---

## 2. Reasoning-gap pass — add the clinician's brain

This is the layer that makes it more than a transcript. After extracting
what's documented, reread the case as a clinician would and ask: **given
these findings, what would a thorough workup normally chase down that never
appears here?**

Rules for this pass:

- **Every gap node must be justified by a real clinical link to a
  documented finding** — never invent a gap unrelated to what's in the
  chart. Anchor each one to the specific symptom, exam finding, or
  diagnosis that should have prompted it.
- **Draw on genuine standard-of-care reasoning**: the test that would
  classify an undifferentiated finding (e.g. SAAG for ascites), the
  differential that fits the epidemiology but is never named (e.g. TB in an
  endemic setting), the confirmatory test for a diagnosis that's asserted
  without one (e.g. ammonia for "hepatic encephalopathy"), or a
  reassessment that should have happened as the patient's course changed.
- **Never present a gap as a criticism of the treating clinicians.**
  Resource limits, tests pending-but-uncharted, and real-world constraints
  are invisible in a write-up. Frame each gap as "here's what this finding
  would normally prompt," not "the doctors missed this."
- **Keep the count proportionate** — roughly 8–15 gap nodes for a typical
  single-case write-up. More than that stops reading as curated judgment
  and starts reading as noise.
- **These nodes must be visually and textually unmistakable** as a
  separate, non-chart layer at every point they appear (graph, panel,
  legend). See design system below.
- Always ship a visible disclaimer near the gap layer stating it is
  synthesized from general knowledge, not a verified expert review of this
  specific case, and that it's a learning prompt, not a clinical critique.

---

## 3. Design system — Vibe Rounds visual identity

Keep this exact system across every case run through Vibe Rounds, so the
brand stays recognizable case to case. Ground it in a cardiac-monitor /
ward-chart aesthetic — dark, clinical, alive — not a generic dashboard.

**Palette**
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0a1210` | page background (near-black clinical green-black) |
| `--bg-panel` | `#0f1a17` | detail panel background |
| `--bg-card` | `#122019` | relationship-item cards |
| `--line` | `#22342d` | borders, grid |
| `--ink` | `#d9e8e0` | primary text |
| `--ink-dim` | `#7fa093` | secondary text |
| `--ink-faint` | `#4d6b60` | tertiary / labels |
| `--mon-green` | `#4fe3a0` | monitor accent, diagnosis nodes, active states |
| `--amber` | `#e8a23d` | symptom/history nodes, eyebrow text |
| `--red` | `#e2626b` | **reasoning-gap layer only**, death/outcome markers |
| `--violet` | `#9d8ce8` | investigation nodes |
| exam blue | `#7fb8e8` | exam-finding nodes |
| treatment coral | `#e88c6b` | treatment nodes |

**Typography**
- Display / headers: **IBM Plex Serif** (600 weight) — gives the chart a
  human, editorial voice against all the mono data.
- Body / data / UI: **IBM Plex Mono** — every label, vital, and node reads
  like an instrument readout.
- Never substitute a generic system sans — the mono-for-data /
  serif-for-narrative pairing is the signature of this brand.

**Signature elements**
- A **live monitor strip** across the top: a pulsing dot, key vitals as a
  ticker (age/sex, key vital signs, course length, outcome).
- An **ECG waveform** (SVG polyline) bleeding into the hero header,
  masked to fade left.
- The graph itself as **swim-lane columns** left→right in clinical logic
  order: Symptoms/History → Exam → Investigations → **Reasoning Gaps** →
  Diagnoses → Treatment. The gap column always sits between Investigations
  and Diagnoses — it's literally the missing step in the reasoning chain.
- Gap nodes are **dashed-outline, low-fill, italic, red, prefixed with ⚠**
  — never the same visual weight as a documented node.
- A **day-by-day timeline strip** below the graph, dots on a horizontal
  line, death/adverse outcomes marked in red.

**Interaction**
- Click a node → highlight its direct neighbors, dim everything else, open
  a detail panel with description and "led to this / this led to" lists.
- Graph is horizontally scrollable/pannable (cases vary in width); never
  compress node count to fit — widen the canvas instead.
- Respect reduced-motion; keep the pulse/ECG animations subtle, not
  distracting from a subject this serious (see tone note below).

**Tone note**: this is medical content. Keep loading states, copy, and
micro-interactions calm and functional — no cute jargon, no celebratory
language, no gamification. The one place to spend visual energy is making
the *reasoning* legible, not decorating the interface.

---

## 4. Branding

Every artifact produced by this runbook carries the **Vibe Rounds** mark:

- Header eyebrow line includes: `Vibe Rounds · Knowledge graph view`
- Footer credits the original case source (link, author/blog if known,
  date) and states: *"Restructured by Vibe Rounds — a case-based learning
  tool. Reasoning-gap nodes are synthesized from general clinical
  knowledge, not a verified expert review. Not a clinical reference."*
- Browser tab title format: `Vibe Rounds — <short case description>`

---

## 5. Output contract

Deliver a **single self-contained `.html` file** (inline CSS/JS, Google
Fonts link only) so it can be opened, shared, or hosted with no build step.
File name pattern: `vibe-rounds-<short-case-slug>.html`

If the person wants to build a library across many cases (not just one),
say so explicitly rather than assuming — that's a different, larger build
(a merged multi-case graph with shared entities), not a variant of this
single-case runbook.

---

## Usage example

> Run Vibe Rounds on this case: `http://example-blog.com/2021/03/case.html`

Claude should then: fetch → extract → gap-analyze → build the HTML per the
design system above → present the file. No need to re-confirm the design
system each time; it's fixed by this document.
