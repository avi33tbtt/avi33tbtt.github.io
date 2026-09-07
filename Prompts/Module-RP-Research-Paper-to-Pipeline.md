# Module RP — Research Paper → Insight & Pipeline Generator

### Turning a paper, preprint, or article into a testable VibeRounds analysis plan

*VibeRounds — Clinical Intelligence Suite companion module*

---

> [!IMPORTANT] **Disclaimer & Independent Verification Required**
> This module produces **learning observations and exploratory analysis plans**, not validated clinical evidence. Any correlation, "replication," or "variation" the AI reports between a published paper and your cohort's deterministic analytics must be independently checked against the actual VibeRounds output numbers before being treated as a finding. The AI never sees patient-level data — it only ever sees paper text, module names/descriptions, and the numeric summaries you paste back to it. Synthetic cohorts (default `seed: 42`) are for methodology rehearsal only; findings from synthetic data have no clinical meaning.

> [!NOTE] **What this module is and is not**
> This is a **bridge module**: it sits between the literature and the Suite's 100+ deterministic analytics buttons. It does not run any analytics itself. It reads a paper, tells you which existing Suite module(s) most closely probe the same question, drafts the cohort filter and sequence of buttons to click, and — once you paste back the real output — tells you whether your cohort's numbers point the same direction as the paper or diverge, and by how much. Every number the AI reasons about must come from the deterministic Suite output, never from its own memory of "typical" clinical values.

---

## Objective

Given a research paper (PDF upload, DOI/link, or pasted abstract/full text), produce:
1. A structured extraction of the paper's population, exposure/comparator, outcome, effect size, and key limitations.
2. A mapping from the paper's claims to the specific VibeRounds Suite module(s) (e.g., `Backward factors`, `Time-to-escalation`, `Co-occurrence`, `Cox proportional hazards · V2`) that could probe an analogous question on your own cohort.
3. A step-by-step **pipeline plan** — cohort filter → which buttons to click, in what order → what output shape to expect — that a user can execute in the Suite UI (Lite or Advanced browser mode) without needing to already know which module to pick.
4. After the user runs the pipeline and pastes back results, a **concordance/variation read-out**: does the direction and rough magnitude match the paper, and what are the most likely reasons for any divergence (cohort composition, coding definitions, sample size, synthetic vs. real data, confounding not controlled for).

## Indication

Reach for this module when:
- You've read (or been handed) a paper and want to know "can I sanity-check or explore this on my own registry/cohort?"
- You're building a Suite session and want a starting hypothesis grounded in literature rather than a blind click-through.
- You want a defensible **audit trail**: paper → hypothesis → deterministic output → human-reviewed interpretation, rather than jumping straight from paper to conclusion.
- You're using the Suite's own `Backward hypothesis`/`Forward hypothesis`/`Closed loop` modules and need a literature-sourced hypothesis to seed them with.

Do **not** reach for this module to:
- Generate clinical recommendations for an individual patient (see Module 9 / Module 48 in the Prompts directory instead).
- Substitute for actually reading the paper's methods section — the AI's extraction is a scaffold, not a replacement for critical appraisal (see Module 26 — Bias Auditing, and Framework D).

## Lifecycle

**Initiation** (Steps RP.0–RP.1) → **Execution** (Steps RP.2–RP.4) → **Closure / Review** (Steps RP.5–RP.6)

---

## Step RP.0 — Intake & Source Declaration

Before any extraction, tell the AI what you're giving it and what you want out of the session.

> **Prompt:**
> "I'm giving you a research paper as **[PDF upload / link / pasted text]**. I'm using it alongside VibeRounds, a deterministic clinical-analytics suite with cohort filtering and ~100 named analytic modules (list below or attached). My goal for this session is: **[explore a hypothesis / sanity-check a published finding on my own data / seed a Backward-hypothesis run / just extract structured insight, no pipeline needed]**. Do not fetch anything beyond what I give you. If the link is inaccessible or the PDF didn't parse, tell me plainly instead of guessing at the paper's content."

**Application Note:** If using an LLM with browsing (e.g., Gemini in-browser as in the screenshots), a link can be fetched live; if using a model without browsing, paste the abstract + methods + results tables directly, since guessed content from a paper the model hasn't actually read is the single biggest failure mode of this module.

---

## Step RP.1 — Paper Extraction (Structured, Bounded)

> **Prompt:**
> "Extract the following from the paper, and mark any field 'not stated' rather than inferring it:
> 1. **Population** — sample size, inclusion/exclusion criteria, setting.
> 2. **Exposure / index condition / comparator groups.**
> 3. **Primary outcome(s)** and how each was measured/defined.
> 4. **Key effect estimate(s)** — e.g., hazard ratio, odds ratio, absolute rate difference — with confidence intervals if given.
> 5. **Study design** (retrospective cohort, RCT, case-control, registry analysis, etc.) and its position on the evidence hierarchy.
> 6. **Named limitations the authors themselves state** (not ones you infer).
> 7. **One-sentence plain-English summary of the central claim.**
> Present this as a table. Do not add interpretation yet."

**Application Note:** Keeping extraction and interpretation as separate steps is deliberate — it lets you (the human) catch a bad extraction before the AI starts building an analysis plan on top of it.

---

## Step RP.2 — Module Mapping

Paste in (or attach) the Suite's module list — the button names visible in the **Suite** tab, grouped by section (Overview, Process Mining, Discovery & Replication, Clinical/Diagnostic, Public Health/Population, Medication/Longitudinal, Visual/Statistics, Patient/Evidence, Records).

> **Prompt:**
> "Here is the full list of VibeRounds Suite analytic modules, grouped by section: **[paste list]**. Given the paper's population, exposure, and outcome from Step RP.1, identify:
> - The **1–3 modules that most directly probe an analogous question** on a cohort (name the exact button label).
> - For each, state in one sentence *why* it's the right module and *what output shape* to expect (e.g., 'Cox proportional hazards · V2 will return a hazard ratio table — compare its sign and rough magnitude to the paper's HR of 1.8').
> - Flag if **no existing module** is a good match, and if so, whether `Build your own query` (the manual cohort filter builder) could approximate it instead.
> Do not assume my cohort will reproduce the paper's population — just map the *question*, not the expected answer."

**Application Note:** This step is where the module earns its keep over a generic "summarize this paper" prompt — it forces a concrete decision (which button, in what order) rather than a vague "you could explore comorbidities."

---

## Step RP.3 — Cohort & Filter Plan

> **Prompt:**
> "Given the mapped modules from Step RP.2, draft the cohort definition I should build in the Suite's sidebar or `Build your own query` panel to approximate the paper's population as closely as this dataset allows. Specify:
> - Which **fields/conditions** to filter on (e.g., Category is Cardiometabolic; Lab includes X).
> - Whether this should run as **Include** or as a **subset comparison** (matched subset vs. everyone else).
> - What to do if the exact inclusion/exclusion criteria from the paper aren't representable as fields in this cohort (state the closest approximation and name the gap explicitly — don't silently substitute a looser filter)."

---

## Step RP.4 — Execution Order (Pipeline)

> **Prompt:**
> "Lay out the exact click-by-click sequence I should follow in the Suite UI: which button first, what to note from its output before moving to the next, and which later module depends on an earlier one's result (e.g., 'run Cohort overview first to confirm N and confirm the filter matched a sensible subset before running Cox proportional hazards · V2'). Number the steps. If a step could be run in the Advanced Browser (SQL-like `Build your own query`) instead of a preset button, say so as an alternative branch, not a replacement."

**Application Note:** This is the "whole pipeline" the user asked for — a numbered sequence, not a single button. It mirrors the Suite's own "Suggested Research Learning Path" pattern (see screenshot 2) but seeded from the paper rather than generically from the cohort's readmission rate.

---

## Step RP.5 — Concordance & Variation Read-Out

After you've actually run the pipeline in the Suite and have real output (numbers, tables, KM curves, etc.), come back with the results.

> **Prompt:**
> "Here is the actual output from running the pipeline: **[paste numeric results / describe the chart / paste table]**. Compare this against the paper's effect estimate from Step RP.1. Tell me:
> 1. **Direction:** same direction as the paper, opposite, or null/non-significant here?
> 2. **Rough magnitude:** in the same ballpark, meaningfully smaller/larger, or not comparable (say why if not comparable — e.g., different outcome definition, synthetic data, underpowered subset).
> 3. **Most plausible explanations for any divergence** — rank 2–4 candidates (e.g., cohort composition differs, this is synthetic data with seed 42 and no real clinical signal, confounder present in the paper's adjusted model but not in this cohort's fields, sample size too small for the effect to show).
> 4. **What I'd need to do next** to actually adjudicate between those explanations, if I wanted to (e.g., re-run with Database mode on a real registry, add a covariate, check Data quality assessment first).
> Do not state or imply that this constitutes replication or refutation of the paper — only that the cohort's deterministic output does or doesn't point the same direction."

---

## Step RP.6 — Closure Note

> **Prompt:**
> "Summarize this whole session in 5 lines: the paper's claim, the module(s) used, the cohort filter applied, what the Suite's deterministic output showed, and the single most important caveat a reader should know before treating this as anything beyond an exploratory exercise."

**Application Note:** This closing artifact is what should actually get saved (e.g., via `Save suite` in the Suite UI) alongside the numeric outputs — the AI's prose summary is not itself the record; the Suite's exported analytics are.

---

## Worked Skeleton (fill-in-the-blank)

```
Paper claim:            [e.g., "CKD stage ≥3 associated with HR 1.8 for 90-day readmission"]
Mapped module(s):        Backward factors → Cox proportional hazards · V2
Cohort filter used:       Category is Cardiometabolic AND Lab includes [creatinine marker]
Matched / total:          [n] of [N] ([%])
Suite output:             HR = [x], 95% CI [y–z]  |  KM curve separation: [yes/no]
Direction vs. paper:      [same / opposite / null]
Magnitude vs. paper:      [comparable / smaller / larger / not comparable — why]
Top divergence driver:    [e.g., synthetic seed-42 data — no real clinical signal expected]
Next step if pursuing:    [e.g., switch to Database mode with real registry, add covariate X]
```

---

## Safety & Scope Notes

- **No case-level data ever goes to the LLM.** As in the Suite's own architecture (deterministic compute → LLM interpretation → human gate), this module's prompts only ever pass paper text, module names, and *already-computed summary statistics* — never row-level patient records.
- **Synthetic ≠ real signal.** If `Source: Synthetic` is active (seed 42 or otherwise), any "concordance" with a real paper is coincidental by construction and must be labeled as such in Step RP.5 — the AI should say this unprompted if it notices the source field, and you should say it if the AI doesn't.
- **This module does not perform meta-analysis, statistical replication, or power calculation.** It produces a plan and a qualitative direction/magnitude comparison a human still has to check against the raw numbers.
- **Evidence hierarchy stays visible.** If the paper is a single case report or an unreplicated preprint, Step RP.1's "study design" field should carry that forward into every later step's caveats, not just be stated once and forgotten.

---

*Module RP — Research Paper → Insight & Pipeline Generator.* Companion to the VibeRounds Clinical Intelligence Suite. Not clinical decision support; produces exploratory, human-reviewed learning artifacts only.
