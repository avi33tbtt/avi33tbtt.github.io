# VibeRounds — Global Health Optimization Methodology
## Re-Grounding a Fully-Resourced Case Analysis Into a Resource-Constrained Version

**Protocol Version:** VibeRounds Global Health Optimization Methodology v1.0
**Date of Analysis:** 21 June 2026
**Derived From:** Applied case — Adult-ThyroidMass-SubclinicalHyper (Module 14 application, 21 June 2026)
**Parent Module:** Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.md
**Scope:** Case-level re-grounding only — taking one existing fully-resourced VibeRounds case analysis and producing one resource-constrained companion version against one stated local ceiling. Does not cover building or maintaining a facility-wide resource inventory across a rotation, or training others — see Module 14, Steps 14.0–14.1, for that meta-layer.

---

## Purpose

A VibeRounds Master Case Analysis (TopInsights / CaseAnalysis / CARE-AdvocateDebrief / FurtherInfo) is produced assuming tertiary, fully-resourced investigation and management pathways by default. This is intentional — it gives the learner the complete, undistorted clinical picture first. But used unmodified at a resource-constrained facility, it silently teaches a workup the learner cannot actually perform, and worse, can bury the *real* local safety-critical decision points under a list of tests that will never be run.

This methodology converts an already-completed fully-resourced case analysis into a second, ground-truthed document — without re-deriving the clinical reasoning from scratch — by systematically passing it through a stated local resource ceiling and asking, line by line: *does this finding survive, and if not, what replaces it?*

This is not a simplification pass. The constrained version is frequently **harder** to write than the original, because it requires the same standard of safety thinking to be reconstructed with fewer tools.

---

## When to Use This Methodology

Use this when:
- A VibeRounds case analysis already exists (or any structured fully-resourced clinical case writeup, even non-VibeRounds, can serve as the source)
- The learner's actual practice setting has a stated resource ceiling that diverges meaningfully from the source document's assumptions
- The divergence is large enough that simply "noting the gap" in the original document is insufficient — entire diagnostic or safety pathways in the original need to be rebuilt, not footnoted

Do **not** use this when the local ceiling closely matches the source document's assumptions — in that case, Module 14's lighter-weight Steps 14.2–14.6 (run live, during the case) are more appropriate than a full re-grounding pass on an already-finished document.

---

## Workflow

**Stage 1** confirms the source case analysis is complete and stable (Top Insights and/or full Case Analysis already exist; do not run this methodology against a draft). **Stage 2** elicits and records the actual local resource ceiling as a single reference table, explicitly marking what survives and what does not from the source document's assumed pathway. **Stage 3** re-stratifies the differential diagnosis by what changes immediate local management, not by abstract probability. **Stage 4** generates substitutes/workarounds for each unavailable test or drug named in the source document, with the known sensitivity/specificity trade-off stated explicitly, and a named threshold at which the substitute is no longer good enough and referral becomes mandatory. **Stage 5** converts the source document's "what must happen before X" sequencing into an empirical, ceiling-aware management plan with an explicit exit criterion. **Stage 6** separates referral decisions that genuinely differ in urgency and risk-of-delay, rather than batching them under one generic "refer" recommendation. **Stage 7** runs a missed-low-cost-clue debrief specifically against the *constrained* version — clues that were buried under the original's expensive-test list often surface only once those tests are stripped away. **Stage 8** runs system-level critical awareness on the re-grounded reasoning itself, naming where the constrained version's own shortcuts would become unsafe if applied at a better-resourced centre, and flags any structural (non-patient-specific) resource gaps for escalation rather than absorbing them silently into the case.

---

## Stage 1: Confirm Source Document Readiness

**Purpose:** Avoid re-grounding a moving target.

**Procedure:**
- Confirm the source case analysis has passed its own quality gate (sufficient clinical content; ranked prompt table complete; Top Insights synthesised)
- Identify which source document(s) will be re-grounded — typically the Top Insights file (for a focused output) or the full Case Analysis (for a comprehensive output)
- Note the source's Protocol Version and Date of Analysis in the new document's header for traceability

**Output of this stage:** A locked reference point. The constrained document should cite the source by filename and version, not silently restate its content.

---

## Stage 2: Elicit and Record the Stated Local Ceiling

**Purpose:** Make the resource gap explicit and inspectable, rather than letting it stay an implicit assumption in the writer's head.

**Procedure:**
- Ask the learner directly what is actually available, using Module 14 Step 14.0/14.1 framing if no inventory exists yet
- Build a single table with three columns: the category of resource (test, imaging, drug, specialist, referral pathway), what the **source document assumed**, and what the **stated local reality** is
- Mark each row's severity of divergence — "available but slower," "referral-only with real cost," or "not available at all, drop from active planning" are three different categories requiring three different responses in later stages
- Identify the **single most consequential divergence** explicitly — usually one or two items whose unavailability cascades into multiple downstream safety nets in the source document. Naming this up front orients the rest of the document around the highest-stakes gap rather than treating every row as equally important

**Output of this stage:** The ceiling table, plus one sentence identifying the highest-consequence gap and which source-document safety nets depend on it.

**Caution:** Do not let the learner's stated ceiling go unverified if it seems internally inconsistent (e.g., a facility with no calcitonin assay but with frozen-section pathology) — ask, don't assume coherence.

---

## Stage 3: Re-Stratify the Differential by Local Actionability

**Purpose:** The source document's differential is usually ranked by clinical probability or textbook teaching order. At a resource-constrained facility, this order can mislead — a rare diagnosis that cannot be tested for locally needs a different kind of entry (a clinical screening protocol and referral threshold) than a common diagnosis that can be confirmed on-site.

**Procedure:**
- Carry forward the source document's full differential as "Layer 1 — orientation only," unmodified, with a pointer back to the source document rather than reproducing its full detail
- Build "Layer 2" ranked not by probability but by: *does confirming or excluding this diagnosis change what I do next, given what I can actually access?*
- For diagnoses where the local answer is "the confirmatory test does not exist here," do not delete the diagnosis — re-tag it as "managed via clinical screening, not lab confirmation" and carry it into Stage 4

**Output of this stage:** A two-layer differential table, with an explicit note on which entries changed rank (and why) relative to the source document.

---

## Stage 4: Generate Substitutes and Workarounds, Test by Test

**Purpose:** This is the core diagnostic-reasoning work of the methodology — for every test, drug, or pathway flagged unavailable in Stage 2, decide what replaces it and where the replacement's limits are.

**Procedure — for each unavailable item:**
1. **Name the best available local substitute.** This may be clinical (history/exam finding), a cheaper/older test, or in some cases genuinely "none — name the gap honestly" rather than manufacturing a false equivalent
2. **State the known sensitivity/specificity or limitation versus the gold standard explicitly**, in plain terms a learner can repeat back. Do not let a workaround read as equivalent to the original test if it is not
3. **Set an explicit safety threshold** — the specific clinical sign or finding at which continuing to "make do" with the substitute becomes unsafe, and referral or escalation becomes mandatory regardless of cost or distance. This threshold is the single most important sentence in each substitution entry; it is what prevents resource-constrained reasoning from drifting into normalised risk-acceptance
4. Where the unavailable item is a *planning tool* rather than a diagnostic test (e.g., molecular re-stratification panels), state plainly that the substitute is not a bridge to the original pathway but **is** the local standard of care at this resource tier — name this distinction to the learner explicitly, so it is understood as a real trade-off rather than a clinical shortfall

**Output of this stage:** One substitution entry per unavailable Tier-1/critical item from Stage 2, each ending in a named threshold.

---

## Stage 5: Convert to an Empirical, Ceiling-Aware Management Plan

**Purpose:** The source document's management plan is usually phrased as "do X, then Y, then Z" assuming each step's prerequisite test returns on schedule. At the stated ceiling, several of those prerequisites will not return, or will not return in time.

**Procedure:**
- State the working diagnosis the learner should commit to **now**, incorporating the Stage 4 substitutions explicitly (e.g., "a mass requiring tissue diagnosis, where rare cause X is managed by clinical screening rather than confirmatory testing") rather than the source document's idealised working diagnosis
- Sequence the plan using only what survived Stage 2, in the order it can actually happen locally — not the source document's original order
- End with an **exit criterion**: the specific clinical sign that means the empirical plan has failed and escalation, referral, or diagnostic reconsideration is required. Pull this directly from the Stage 4 thresholds where applicable, plus any additional triggers specific to the management plan itself (e.g., heart rate not controlling despite treatment)

**Output of this stage:** A phased management plan, each phase using only locally available resources, ending in a named exit criterion (not optional — see Module 14 Step 14.4 application note).

---

## Stage 6: Separate Referral Decisions by Urgency and Risk-of-Delay

**Purpose:** A source document or a first-pass constrained rewrite will often collapse multiple distinct referral questions into one generic "refer for further workup" line. This hides the fact that different referrals in the same case can have very different urgency profiles.

**Procedure:**
- List every point in the case where referral is mentioned or implied, as separate, individually-labelled questions (not one combined recommendation)
- For each, reason explicitly through: risk of deterioration in transit; risk of delay if deferred; what can be monitored locally versus not; and real family/patient practicality (distance, cost, caregiver availability)
- Reach an explicit lean for each — "often manageable without referral if [specific local condition holds]" or "refer, full stop, regardless of distance" — and justify which one applies; do not default to "refer when in doubt" without reasoning through the specific case, per Module 14 Step 14.5
- Explicitly flag any referral question where the standard Module 14 caution ("don't assume referral is always safer") **does not apply** — i.e., cases where referral genuinely is non-negotiable regardless of distance — and say so plainly rather than hedging

**Output of this stage:** One sub-section per distinct referral question, each with its own lean and justification — never a single blanket referral recommendation for a multi-issue case.

---

## Stage 7: Missed Low-Cost Clue Debrief on the Constrained Version

**Purpose:** This is the most distinctive and highest-value stage of the methodology. Source documents written for a fully-resourced setting often bury cheap, high-yield clinical data points under a long list of expensive investigations, because the investigations dominate the document's attention. Once those investigations are stripped away by the ceiling, the cheap clues become proportionally more important — and are often the ones the original source document never actually documented.

**Procedure:**
- Re-read the source document's data-completeness gaps (most VibeRounds Case Analysis files already contain a Data Completeness Audit — start there)
- From that list, separate clues that require unavailable technology (out of scope for this stage) from clues that are genuinely zero-cost and locally available (vitals, weight, family history, basic palpation findings, duration/character of symptoms)
- For each zero-cost missed clue, state plainly why it is easy to overlook precisely *because* of how the original resource-rich framing was structured — this causal link (resource-rich framing burying cheap clues) is the teaching point, not just "this was missing"
- Rank these by how directly they substitute for one of the Stage 4 unavailable tests — clues that double as substitutes for an unavailable test are higher-yield than clues that are merely generally useful

**Output of this stage:** A short, ranked list of specific zero-cost clues, each with a one-line explanation of why it was overlooked and what it substitutes for.

---

## Stage 8: System-Level Critical Awareness on the Re-Grounded Reasoning

**Purpose:** A resource-constrained rewrite can itself encode habits that are unsafe outside the constrained setting, or can quietly normalise a real patient-safety gap by reframing it as "just how it's done here." This stage checks the constrained document's own reasoning, not just the original case.

**Procedure — answer explicitly, in writing, not just implicitly:**
1. Which specific reasoning shortcuts adopted in Stages 3–5 would need to be consciously unlearned if the learner later practises somewhere better-resourced
2. Where the empirical/clinical-screening substitutions from Stage 4 could fail **silently** — i.e., produce no warning sign before harm occurs — and name this as the single most dangerous gap in the case, not just one risk among several
3. What a legitimate critic of resource-constrained reasoning would say about this specific case's approach — write the strongest fair criticism, not a strawman
4. What uncertainty remains that **no amount of local resourcefulness closes** — distinguish this explicitly from uncertainty that better history-taking or examination could still resolve

**Output of this stage:** Four short, direct answers — this section should read as honest self-audit, not reassurance.

**Closing requirement:** End with a short, separate note — distinct from the individual patient's case — flagging any *structural* resource gap (e.g., a test that should exist at this facility tier but doesn't) worth raising at a supervisor or system level. This keeps the individual case from absorbing what is actually a service-level problem.

---

## Document Assembly Conventions (VibeRounds House Style)

- Header block: title, subtitle naming the source case, Protocol Version (this methodology's own version, separate from the source case's version), Date of Analysis, source document(s) cited by filename
- Open with a `[!IMPORTANT]` callout restating that the local ceiling is learner-stated and may not match next week — this is not optional boilerplate; it is the methodology's core epistemic caveat (see Module 14, top-level `[!IMPORTANT]` note)
- Use Stage numbering aligned to this methodology, not the original Module 14 step numbers, when producing the constrained case document itself — cite the relevant Module 14 step in parentheses where helpful, but do not renumber this methodology to match Module 14 1:1, since several stages here (especially Stage 6 and Stage 7) are case-level elaborations not present as standalone steps in the parent module
- Close with the standard VibeRounds footer: protocol line, educational-use disclaimer, and explicit pointer back to both the source case document(s) and the parent Module 14 file

---

## Relationship to Existing VibeRounds Structures

| This methodology's stage | Closest Module 14 step | Closest source-document section it operates on |
|---|---|---|
| Stage 1 — Confirm source readiness | 14.0 (session setup) | Source document's own quality gate |
| Stage 2 — Elicit local ceiling | 14.0, 14.1 | New — produces the ceiling table |
| Stage 3 — Re-stratify differential | 14.2 | Source's Differential Diagnosis section |
| Stage 4 — Substitutes/workarounds | 14.3 | Source's Investigation Sequencing section |
| Stage 5 — Empirical management plan | 14.4 | Source's Management Planning section |
| Stage 6 — Referral threshold | 14.5 | New — not always present as a standalone section in source |
| Stage 7 — Missed low-cost clue debrief | 14.8 | Source's Data Completeness Audit |
| Stage 8 — System-level critical awareness | 14.9 | New synthesis, references source's bias/missed-diagnosis sections |

This mapping is intentional: the methodology does not invent new clinical reasoning content where a Module 14 step or an existing source-document section already covers it — it sequences and operationalises what exists into a single coherent re-grounded document, and adds structure (explicit ceiling table, paired substitution-with-threshold format, separated referral questions) only where the source materials left that structure implicit.

---

*VibeRounds Global Health Optimization Methodology | v1.0 | June 2026*
*All outputs are educational. Independent clinical verification required before acting on any content. This document does not constitute clinical advice or a substitute for licensed professional judgment.*
*Derived from applied use on: VibeRounds-TopInsights/CaseAnalysis/CARE-AdvocateDebrief-Adult-ThyroidMass-SubclinicalHyper.md, re-grounded per Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.md*
