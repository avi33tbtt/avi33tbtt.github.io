# Shadow Module CC — Quantitative Integrity & Hallucination-Skepticism Safeguard

**Objective:** Audit and correct a completed analytical output (typically a [Module CC — Clinical Cognition Deep Dive](https://avi33tbtt.github.io/Prompts/Module-CC-Clinical-Cognition-Deep-Dive.html) run, but applicable to any module that produces probabilistic or statistical-sounding language — [Module 35](https://avi33tbtt.github.io/Prompts/Module-35-Epistemic-Certainty-Mapping-Calibration.html), [Module 36](https://avi33tbtt.github.io/Prompts/Module-36-Bayesian-Probability-Likelihood-Ratio-Engine.html), [Module 48](https://avi33tbtt.github.io/Prompts/Module-48-Treatment-Comparative-Analysis-and-Prognosis-Trajectory.html)) **before it is treated as a final document.** Where Module CC builds the reasoning forward, this Shadow Module runs *backward* across the finished output, hunting specifically for fabricated numeric precision, mislabeled clinical syndromes, and confident-sounding claims that are not actually traceable to the source case or a retrieved citation. The output is not a new analysis — it is a corrected, re-graded version of the one already produced, plus a list of what was changed and why.

**Indication:** Run this immediately after any module output that will be saved, shared, published, or used as a teaching artifact — and *before* that document is treated as final. Particularly necessary when the source module assigned specific numbers (likelihood ratios, percentages, incidence rates) without a retrieved citation, when a named clinical syndrome was invoked, or when the output is long enough that an error could be buried in volume.

> [!IMPORTANT] **Why this exists.** Large language models routinely produce plausible-sounding quantification — "LR+ ~8," "posterior probability 78%" — with no actual source. This is not a minor stylistic issue: presented next to genuinely sourced facts, fabricated numbers are indistinguishable from real ones to a learner, and teach incorrect calibration by example. This module exists specifically to find and remove that failure mode before a document is finalized.

> [!NOTE] **Relationship to Module 26 and Framework D.** [Module 26 — Bias Auditing](https://avi33tbtt.github.io/Prompts/Module-26-Bias-Auditing.html) audits the *clinical reasoning* for cognitive bias. This Shadow Module audits the *AI output itself* for fabrication, false precision, and self-inconsistency — a different failure surface. [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) seeds general skepticism of AI-assisted reasoning across the stack; this module operationalizes that skepticism into a concrete, repeatable pass with a defined output.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Orient and load the draft

### Step SG.0: Session Setup & Adversarial Contract

**Prompt:**

```
#VibeRounds You are now my quantitative-integrity and hallucination-
skepticism auditor. Your job is not to praise this document or confirm it
reads well — your job is to find every claim in it that sounds more
certain, more numeric, or more sourced than it actually is, and to correct
or flag it. Do not soften this role. I am about to paste a completed
analytical document (a Module CC output or similar). Confirm you
understand this contract, then ask me to paste the document and, if
available, the original source case data it was based on.
```
> [!NOTE] **Application Note:** As in Module 26's Step 22.0, the instruction not to flatter is load-bearing. A model auditing its own prior output (or another model's) will default to confirming quality unless explicitly told its job is adversarial, not evaluative.

---

## Phase 2 · Execution — Hunt, tag, and correct

### Step SG.1: Numeric De-Fabrication Pass

**Prompt:**

```
#VibeRounds Go through the document and find every specific number that
is not a directly documented case value — this includes likelihood
ratios, percentage probabilities, incidence rates, and any other
statistic. For each one: quote the original sentence, state whether it
is traceable to (a) the case data itself, or (b) a citation actually
retrieved in this conversation. If neither, rewrite the claim using a
qualitative bin instead — Strongly / Moderately / Weakly favors, or
High / Moderate / Low probability — and label it
"[unsourced — reframed qualitatively]". Do not invent a citation to
justify keeping a number. List every change you make in a table:
Original claim | Numeric element removed | Qualitative replacement | Reason.
```
> [!NOTE] **Application Note:** Requiring the model to quote the original sentence before rewriting it prevents quiet, untracked edits — the learner needs to see exactly what was downgraded and why, not just receive a cleaned final version with no audit trail.

### Step SG.2: Clinical Syndrome & Label Accuracy Check

**Prompt:**

```
#VibeRounds Now find every place the document names a specific clinical
syndrome, severity label, or mechanism (e.g. "tension pneumothorax,"
"septic shock," "ARDS," "ICD failure"). For each one, check it against
the documented vitals/criteria for that label in the source case data.
State explicitly whether the criteria are met, partially met, or not
met. Where a label is used but the supporting criteria are absent or
contradicted by the case data (e.g. a syndrome requiring hemodynamic
instability is applied to a patient with normal blood pressure),
flag it as an overcall and propose the more conservative, accurate label.
```
> [!NOTE] **Application Note:** This step exists because confident-sounding clinical labels are a more dangerous failure mode than fabricated numbers — a reader who would catch "LR+ ~8" as suspicious may not catch "tension pneumothorax" as an overcall, because it reads as ordinary clinical language rather than a statistic.

### Step SG.3: Epistemic Basis Tagging

**Prompt:**

```
#VibeRounds Go through the document one more time and tag every major
claim with one of: [C] Confirmed directly in the case data, [I] Clinical
inference reasonably drawn from the case data, [P] General medical
knowledge/pattern not specific to this case, [S] Speculative or
model-generated hypothesis. Any claim tagged [P] or [S] that also
contains a number, rate, or named study must carry an explicit note:
"treat with skepticism — not source-verified for this case." Present
this as an inline-tagged version of the relevant sections, not a separate
summary — the tags need to sit next to the claims they describe.
```
> [!NOTE] **Application Note:** Inline tagging (rather than a separate appendix) is deliberate — a tag that lives next to its claim is read in context; a tag list at the end of a long document is easy to skip, which defeats the purpose for a learner skimming the body.

### Step SG.4: Self-Audit Cross-Check

**Prompt:**

```
#VibeRounds Re-read your own corrected output from the previous steps.
Find any sentence that still contains an unsourced number, an unverified
syndrome label, or a claim that contradicts something else stated
elsewhere in the same document. State explicitly: "On review, I missed
this in my own earlier pass" for anything you find, then correct it.
If you find nothing on this pass, say so explicitly rather than
defaulting to a generic confirmation — I want to know whether this is a
clean result or an unchecked one.
```
> [!NOTE] **Application Note:** This step is the weakest one in the module by design admission — a model checking its own output shares the same blind spots that produced the error in the first place. It catches careless repetition, not the underlying pattern. It is not a substitute for Step SG.6's recommendation; it is a cheap first pass before that more expensive step.

---

## Phase 3 · Closure / Review — Compress, disclose, and route for independent review

### Step SG.5: Signal Compression — Top-3 Actionable Findings

**Prompt:**

```
#VibeRounds Before finalizing, extract the three most clinically or
educationally important findings from the entire corrected document —
the ones a reader should not miss even if they read nothing else. State
each in one sentence, with its epistemic tag from Step SG.3. Place this
as a boxed callout at the top of the final document, above the full
walkthrough, so the core signal is not dependent on reading the entire
length to find it.
```
> [!NOTE] **Application Note:** Long Module CC outputs (the 22-stage pipeline runs long) risk burying the single most important catch of the session under volume. A top-of-document box solves this without requiring the body to be shortened.

### Step SG.6: Closing Disclaimer & Independent-Review Recommendation

**Prompt:**

```
#VibeRounds Write a short closing disclaimer for this document stating:
(1) this is a retrospective cognition-training exercise on a de-identified
case, not a verified clinical reference or decision tool; (2) any
statistic in this document without a citation should be assumed
illustrative, not evidence-based; (3) this document has undergone a
self-audit pass (Steps SG.1-SG.4) but self-audit shares the same blind
spots as the original generation — if this document will be used for
teaching, publication, or shared beyond personal study, it should also
receive an independent pass by a different model or a human reviewer
specifically looking for ungrounded numbers and mislabeled syndromes
before being treated as final.
```
> [!NOTE] **Application Note:** This step exists to prevent the safeguard module itself from being mistaken for a guarantee. A same-model self-audit is a meaningful improvement over no audit, but it is not equivalent to independent review — the disclaimer should say so plainly rather than implying the document is now fully verified.

---

## Cross-Module Connections

| Module | Connection |
|---|---|
| [Module CC — Clinical Cognition Deep Dive](https://avi33tbtt.github.io/Prompts/Module-CC-Clinical-Cognition-Deep-Dive.html) | Primary module this Shadow Module is designed to run after — every Module CC output should pass through this safeguard before being treated as final |
| [Module 35 — Epistemic Certainty Mapping & Calibration](https://avi33tbtt.github.io/Prompts/Module-35-Epistemic-Certainty-Mapping-Calibration.html) | Shares the Solid/Uncertain/Speculative vocabulary this module's qualitative bins (Step SG.1) are built to be compatible with |
| [Module 36 — Bayesian Probability / Likelihood Ratio Engine](https://avi33tbtt.github.io/Prompts/Module-36-Bayesian-Probability-Likelihood-Ratio-Engine.html) | The module most likely to produce the fabricated numeric likelihood ratios that Step SG.1 is built to catch |
| [Module 26 — Bias Auditing](https://avi33tbtt.github.io/Prompts/Module-26-Bias-Auditing.html) | Audits the clinical reasoning for cognitive bias; this module audits the AI output for fabrication — run both for a complete pre-publication pass |
| [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) | The background skepticism layer this module operationalizes into a concrete, repeatable procedure |
| [Appendix — QA & Publication Checklist](https://avi33tbtt.github.io/Prompts/Appendix-QA-Publication-Checklist.html) | This module's Step SG.6 output should be cross-checked against the broader publication checklist before any document is shared externally |

---

## Module Maturity

🟡 **In Progress** — Drafted and informally tested against a live three-model comparison (Module CC outputs from three different LLMs run on the same case) in a single working session. Not yet validated across a larger sample of documents or independently reviewed. Step SG.4 (Self-Audit Cross-Check) is explicitly the weakest step in the module and should not be relied upon as a substitute for the independent review recommended in Step SG.6.

---

*Vibe Rounds Prompt Modules — Shadow Module CC.*
*Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*
