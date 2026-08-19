# Module CC-UG — Uncertainty & Evidence Gap Mapper

**Objective:** Train the discipline of systematically isolating what is known, what is inferred, and what remains an unevidenced gap in a clinical case — before proceeding to management or research decisions. This module functions as an epistemic audit lens rather than a diagnostic engine: it does not generate a differential, it audits the certainty status of every claim feeding into one, classifies the *kind* of uncertainty present, prioritises gaps by clinical impact and resolvability, and converts the highest-priority gaps into actionable next steps — a targeted workup order or a structured literature search.

**Indication:** Whenever a case has reached a working diagnosis or management plan that feels settled but rests on claims that have never been explicitly separated into confirmed fact, inference, pattern knowledge, and speculation; whenever a learner is about to accept a numeric claim (a sensitivity, an incidence, a trial result) without checking whether it is source-verified for this specific patient; whenever a case sits at the boundary of the evidence base — an atypical presentation, an off-label plan, a patient subgroup excluded from the trials that justify the guideline; or whenever premature closure is a live risk and a structured pause is needed before the next irreversible step.

> [!IMPORTANT] **This module classifies uncertainty; it does not resolve it.** The output of CC-UG is a map of what is unknown and a set of targeted next actions — not a diagnosis, and not permission to treat a Quadrant II gap as settled because it has been named. Every `[P]` or `[S]`-tagged numeric claim carries an explicit skepticism qualifier for this reason: naming an assumption is the first step in managing it, not a substitute for verifying it.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Frame the epistemic task

### Step UG.0: Session Setup & Epistemic Contract

**Prompt:**

```
#VibeRounds You are an epistemic clinical auditor and medical research
navigator in the Vibe Rounds framework. Your role is not to diagnose or
manage the case I present, but to audit the certainty status of every
claim in it. You will: (1) tag every clinical statement in your analysis
with an inline epistemic marker — [C] Confirmed (directly documented in
case data), [I] Inference (logical deduction from confirmed facts), [P]
Pattern Knowledge (general literature or clinical heuristic), or [S]
Speculative (unverified hypothesis without direct case basis); (2) attach
the qualifier "(treat with skepticism — not source-verified for this
case)" to any [P] or [S] statement containing a numeric rate, sensitivity/
specificity, or trial result; (3) not accept an assumption as established
fact unless it is explicitly supported by objective case data. Confirm
you understand this contract before I give you the case.

```
> [!NOTE] **Application Note:** The epistemic tagging contract is the module's load-bearing instruction — everything downstream depends on the model holding this discipline consistently rather than lapsing into confident narrative prose once the case gets complex. Setting it as an explicit pre-case contract, and asking for confirmation before proceeding, catches drift early: if the model cannot sustain `[C]/[I]/[P]/[S]` tagging on a simple confirmation exchange, it will not sustain it across a multi-step case audit.

### Step UG.1: Case Intake

**Prompt:**

```
#VibeRounds Here is the case: [paste case narrative, history, vitals,
labs, current management plan]. Before any analysis, restate back to me
in one short paragraph what you understand the current working
diagnosis and management plan to be, and flag if any part of the case
as I've presented it is itself ambiguous or incomplete before we begin
the formal audit.

```
> [!NOTE] **Application Note:** The restate-back step catches transcription and comprehension errors before they propagate through four subsequent analytical steps — an epistemic audit built on a misread case is worse than no audit, because it produces confident-looking output anchored to the wrong starting point.

---

## Phase 2 · Execution — Parse, classify, map, and mitigate

### Step UG.2: Epistemic Parsing & Fact Extraction

**Prompt:**

```
#VibeRounds List the core assertions made in the case narrative — about
diagnosis, aetiology, history, exam findings, labs, imaging, and the
current management plan — as a set of discrete, individually tagged
statements. Assign each one an inline epistemic marker: [C] Confirmed,
[I] Inference, [P] Pattern Knowledge, or [S] Speculative. Where a single
sentence in my narrative mixes a confirmed fact with an inference (e.g.
"the patient likely has heart failure given the crackles"), split it
into its component claims and tag each separately.

```
> [!NOTE] **Application Note:** Splitting mixed sentences into component claims is the step most often skipped under time pressure, and the one that matters most — clinical narratives routinely fuse an observation with an interpretation in the same breath, and it is exactly that fusion that allows an inference to travel forward through a case masquerading as a confirmed fact.

### Step UG.3: Four-Dimensional Uncertainty Taxonomy Classification

**Prompt:**

```
#VibeRounds Using the tagged claim list, classify every identified
ambiguity or gap into one of four domains: (1) Data Gaps — missing labs,
unobtained history, unperformed imaging; (2) Diagnostic Ambiguities —
competing diagnoses with overlapping clinical presentations; (3) Evidence
Gaps — lack of randomized trial data, off-label management, or
conflicting guidelines for this specific patient subgroup; (4) Stochastic/
Prognostic Variability — inherent biological uncertainty in treatment
response or disease trajectory that no amount of further testing will
resolve. For each item, state which domain it belongs to and why it does
not belong to the other three.

```
> [!NOTE] **Application Note:** Requiring the "why not the other three" justification forces a real classification decision rather than a default bucket assignment — the distinction between a Data Gap (resolvable by ordering a test) and Stochastic Variability (irreducible regardless of testing) is the single most consequential one in the taxonomy, since conflating them leads either to unnecessary further workup or to premature abandonment of a resolvable question.

### Step UG.4: 2×2 Risk-Impact vs. Resolvability Matrix Mapping

**Prompt:**

```
#VibeRounds Plot every uncertainty identified in Step UG.3 onto a 2x2
matrix: Clinical Impact on Patient Outcome (High vs. Low) against
Resolvability/Modifiability (High vs. Low). Label each quadrant's
contents explicitly: Quadrant I (High Impact/High Resolvability) —
Critical Actions, address immediately via bedside test, specific lab,
or targeted imaging; Quadrant II (High Impact/Low Resolvability) —
Evidence Gaps/Risks, requires risk mitigation, off-label shared
decision-making, or N-of-1 evidence synthesis; Quadrant III (Low
Impact/High Resolvability) — Routine Workup, easy to resolve, minimal
outcome impact; Quadrant IV (Low Impact/Low Resolvability) — Accepted
Noise, irreducible background variance, monitor without intervention.
For every item you place in Quadrant I, state the specific next action.

```
> [!NOTE] **Application Note:** Forcing a specific next action for every Quadrant I item — rather than leaving the matrix as a static classification exercise — is what converts this from a reflective diagram into an operational output the learner can actually act on before the next ward round or the next case review.

### Step UG.5: Evidence Gap Mitigation Protocol (PICO Generation)

**Prompt:**

```
#VibeRounds For every uncertainty placed in Quadrant I or Quadrant II,
generate a targeted resolution pathway. For Quadrant I items, state the
specific diagnostic order or bedside test that resolves it. For Quadrant
II items — genuine evidence gaps — formulate a structured PICO question
(Population, Intervention, Comparator, Outcome) and provide a targeted
PubMed/Embase search string using MeSH terms and boolean operators. Do
not generate a PICO question for a Quadrant I item — those are resolved
by data collection, not literature search.

```
> [!NOTE] **Application Note:** The explicit prohibition on running PICO generation against Quadrant I items guards against a common failure mode where a learner reaches for a literature search to resolve a question that a blood test would answer directly — a category error that wastes the highest-leverage minutes of a case review on the wrong tool.

---

## Phase 3 · Closure / Review — Consolidate and audit

### Step UG.6: Top-3 Signal Box

**Prompt:**

```
#VibeRounds From everything mapped so far, distill a top-3 signal box:
the three most critical evidence or data gaps that, if resolved, would
most fundamentally alter patient outcome or management strategy. For
each, state in one sentence what changes in the management plan if the
gap is resolved in each direction (e.g. "if the D-dimer returns negative,
anticoagulation is deferred; if positive, CTPA is ordered same-day").

```
> [!NOTE] **Application Note:** Requiring the "resolves in each direction" statement is a decision-analysis discipline borrowed from test-threshold reasoning — a gap only belongs in the signal box if its resolution actually changes what happens next; a gap whose resolution would not alter management, however clinically interesting, does not meet the bar for top-3 and should be reclassified rather than force-ranked.

### Step UG.7: Epistemic Clean-Result Audit

**Prompt:**

```
#VibeRounds Audit your own output from this session: state explicitly
whether any unverified numeric claim or speculative assumption remained
untagged or unqualified anywhere in the analysis above. If you find one,
correct it now. Then state: of all claims tagged [P] or [S] in this
session, how many carried the required skepticism qualifier, and how
many did not?

```
> [!NOTE] **Application Note:** This self-audit step exists because tagging discipline degrades over a long multi-step session even when it was set correctly in Step UG.0 — a model (or a learner) that has been carefully tagging claims for five steps will often lapse into confident untagged prose by the sixth. Making the audit an explicit, countable step rather than a vague closing reflection catches specific lapses rather than producing a generic reassurance that "uncertainty was considered throughout."

### Step UG.8: Difficulty Ratchet Recommendation

**Prompt:**

```
#VibeRounds Based on how I performed in this session — which domains of
the uncertainty taxonomy I identified readily, which I missed or
under-weighted, and whether I tended toward overconfidence or over-
hedging in my own claims — recommend the next reasoning drill I should
run, and name which Vibe Rounds module it comes from.

```
> [!NOTE] **Application Note:** Closing on a difficulty ratchet rather than a static summary keeps CC-UG inside the broader Vibe Rounds spaced-progression design — the module's real value is not a single well-mapped case but the habit of running this audit reflexively, and the ratchet recommendation is what turns one session into the next rung of a longitudinal skill build.

---

## Related Frameworks

- **Framework C — Bloom's Revised Taxonomy** (Analyse → Evaluate throughout; the metacognitive Create dimension surfaces in Step UG.6's signal-box synthesis)
- **Framework D — Critical Awareness Framework** (overconfidence and hallucination risk are exactly what the `[P]`/`[S]` skepticism qualifier in Step UG.0 is designed to contain)
- **Module 35 — Epistemic Certainty Mapping & Calibration** (Module 35 calibrates confidence language across a case's claims; CC-UG adds the structural classification of *why* a claim is uncertain — data gap, diagnostic ambiguity, evidence gap, or stochastic variability — and routes each to a concrete mitigation)
- **Module 21 — Evidence Frontier Search** (Quadrant II items in Step UG.4 that resolve to a genuine evidence gap hand off directly to Module 21's frontier-search workflow)
- **Module 9 — N-of-1 Case Research Protocol** (a Quadrant II gap with no literature answer available is the entry condition for Module 9's seven-stage protocol)
- **Module 12 — Differential Diagnosis Deepdive** (Module 12 generates the differential whose competing claims Step UG.3's Diagnostic Ambiguities category then audits)

---

## Navigation

**Related:** Browse the [Supplementary Frameworks](https://avi33tbtt.github.io/Prompts/) or [Reference Material](https://avi33tbtt.github.io/Prompts/).

[← Back to README](https://avi33tbtt.github.io/Prompts/)
