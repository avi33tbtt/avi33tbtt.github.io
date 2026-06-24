# Module 48 — Treatment Comparative Analysis & Evidence-Informed Prognosis Trajectory

*Modeled on the VibeRounds Prompt Module format (Dr. Avinash Kumar Gupta, [avi33tbtt.github.io/Prompts](https://avi33tbtt.github.io/Prompts/)). Proposed as a new module candidate — not yet part of the published, numbered repository, and not validated live.*

> [!IMPORTANT] **Clinical Disclaimer**
> This module produces a **learning artifact**, not a clinical decision. Every output — evidence grading, risk/benefit ledger, prognosis trajectory — is a structured reasoning exercise for a learner or patient advocate to bring *to* a supervising clinician, not a substitute for that clinician's judgment. No output should be entered into a clinical record or used to change a real patient's management without independent review by a licensed clinician treating that patient.

**Objective:** Build a detailed, exhaustive, evidence-backed critical analysis comparing **(a) the current treatment** a patient is on against **(b) a proposed or best-possible alternative treatment**, with an explicit pros/cons and risk/benefit ledger for each option — then translate that comparison into an evidence-informed prognosis trajectory showing how the patient's expected course diverges depending on which path is taken.

**Indication:** Use when a current treatment's adequacy is in question; when a learner or advocate has identified a guideline-preferred or trial-supported alternative and wants to stress-test it against the status quo before raising it with the treating team; when preparing for a second-opinion or shared-decision-making conversation; or as a structured way to understand "what happens next" under different treatment paths rather than a single flat prognosis.
> A critical analysis is not "current treatment = bad, alternative = good." Most current treatments were chosen for reasons — access, prior response, comorbidity contraindications, patient preference — that a textbook-best alternative may not improve on. This module is built to surface *both* the case for change and the case for staying the course, with equal rigor, and to make the evidence quality behind each visible rather than implied.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Declare the case and both treatment arms

### Step 44.0: Session Setup — Enter Treatment Comparative Analysis Mode

**Prompt:**

```
#VibeRounds You are a Treatment Comparative Analysis partner. I will
give you: (1) the diagnosis and relevant clinical context
[paste de-identified summary — age, sex, comorbidities, severity/stage,
relevant labs or imaging, prior treatment response]; (2) the CURRENT
treatment the patient is on, including dose, duration, and response
so far; (3) a PROPOSED or best-possible alternative treatment I want
evaluated against it — this may be a guideline-preferred option, a
newer agent, a different modality, or "best supportive/optimal current
practice" if I don't have a specific alternative in mind. Your role is
to run an exhaustive, evidence-graded, critical comparison of both
arms — not to default to recommending the newer or more aggressive
option. Confirm your role, and ask me for the three pieces of
information above before proceeding.

```
> [!NOTE] **Application Note:** This step deliberately asks for the current treatment's *response so far*, not just its identity. A treatment that is failing and a treatment that is working but suboptimal lead to very different comparative analyses in Steps 44.5–44.6, and the AI cannot distinguish them without this detail.

---

## Phase 2 · Execution — Build both arms, then compare

### Step 44.1: Current Treatment — Evidence Base Audit

**Prompt:**

```
#VibeRounds Audit the CURRENT treatment against its evidence base.
For each major component of the regimen, tell me: (1) What is the
highest-quality evidence supporting its use in this condition — RCT,
meta-analysis, guideline consensus, or lower (cohort/expert opinion)
— and grade it using a recognised hierarchy (e.g. Oxford CEBM or
GRADE)? (2) Does the trial or guideline population this evidence
comes from actually resemble this patient — age, comorbidity burden,
disease severity, prior treatment exposure? Flag any major mismatch.
(3) Is this still the guideline-preferred first-line option for this
presentation, or has guidance shifted since it was started? (4) What
specific evidence, if any, supports its continued use given the
response-so-far I gave you in Step 44.0?

```

### Step 44.2: Current Treatment — Pros, Cons, and Risk/Benefit Ledger

**Prompt:**

```
#VibeRounds Build a structured risk/benefit ledger for the CURRENT
treatment. PROS: established response data in similar patients,
familiarity/monitoring infrastructure already in place, any
demonstrated response in this specific patient, access/cost/logistics
advantages. CONS: known limitations of effect size, adverse effect
profile (give the major and notable-minor effects with approximate
incidence where evidence allows), interaction or contraindication
risk given the comorbidities I described, and any signal — from the
evidence base or this patient's actual response — that benefit is
plateauing or has plateaued. Where you cite a specific number (NNT,
NNH, absolute risk reduction, hazard ratio), name the study or
guideline it traces to and flag if it's extrapolated rather than
directly studied in this population.

```

### Step 44.3: Proposed / Best-Possible Treatment — Evidence Base Audit

**Prompt:**

```
#VibeRounds Now run the identical evidence audit from Step 44.1 on
the PROPOSED or best-possible alternative treatment: evidence grade
and source, population match to this patient, current guideline
status, and — critically — is there head-to-head trial evidence
comparing it directly to the current treatment, or only separate
single-arm/placebo-controlled evidence for each? Head-to-head
evidence and separately-graded evidence support very different
strength of comparative claims, and I want that distinction made
explicit rather than papered over.

```

### Step 44.4: Proposed / Best-Possible Treatment — Pros, Cons, and Risk/Benefit Ledger

**Prompt:**

```
#VibeRounds Build the same structured risk/benefit ledger from
Step 44.2 for the PROPOSED treatment. PROS: expected effect-size
advantage (if any) and its evidentiary basis, any mechanism-based
rationale for it suiting this patient's specific profile better than
the current treatment, and any benefit unrelated to efficacy (e.g.
lower monitoring burden, oral vs. infusion, fewer interactions with
this patient's other medications). CONS: novelty discount — is the
evidence base shorter-term, smaller, or less real-world-tested than
the current treatment's; switching costs (washout periods, loss of
established response, re-titration risk); new adverse-effect or
interaction profile relative to this patient's comorbidities; and
access, cost, or logistic burden of switching. Do not let "newer" or
"guideline-preferred in general" stand in as a substitute for
patient-specific justification.

```

### Step 44.5: Head-to-Head Critical Comparison

**Prompt:**

```
#VibeRounds Put the two ledgers side by side and force a direct
comparison on four axes: (1) Evidence strength — which arm's
case rests on stronger evidence, and by how much, once population
mismatch is accounted for? (2) Magnitude of expected benefit —
is the difference between the two arms large, marginal, or
genuinely uncertain given the evidence quality? (3) Risk asymmetry
— does one arm carry a materially higher risk of serious harm, even
if its efficacy case is stronger? (4) Patient-specific fit — given
THIS patient's comorbidities, prior response, and stated preferences
(ask me for preferences if I haven't given them), which arm's
pros/cons profile actually fits better, independent of which is
"newer" or "more guideline-favored" in the general population? End
by stating plainly where the evidence supports a clear preference
and where it genuinely does not — do not manufacture a confident
recommendation where the evidence is mixed or thin.

```

### Step 44.6: Evidence-Informed Prognosis Trajectory Mapping

**Prompt:**

```
#VibeRounds Construct an evidence-informed prognosis trajectory for
THIS patient under three scenarios: (A) continuing the current
treatment unchanged, (B) switching to the proposed treatment, and
(C) the natural history / minimal-intervention baseline, if clinically
relevant as a reference point. For each scenario, lay out: (1) the
expected trajectory over short- (weeks–months), medium- (6–24 months),
and long-term (multi-year, where evidence exists) horizons; (2) the
specific evidence each trajectory segment is anchored to (trial
follow-up data, registry/cohort data, or — if no direct data exists —
clearly labelled extrapolation); (3) the major inflection points or
decision forks along each trajectory (e.g. "if no response by week X,
evidence supports reassessing") and what clinical signal would trigger
re-evaluation; (4) the width of uncertainty around each trajectory —
state explicitly where the evidence allows a confident projection
versus where it only supports a plausible range. Do not present any
trajectory as more certain than its underlying evidence justifies.

```

---

## Phase 3 · Closure / Review — Synthesize for a real conversation

### Step 44.7: Decision-Conversation Synthesis

**Prompt:**

```
#VibeRounds Produce a one-page Treatment Comparative Analysis Summary
formatted for me to bring to the treating clinician or a second-opinion
conversation: (1) Current treatment — top 2 pros, top 2 cons, evidence
grade; (2) Proposed treatment — top 2 pros, top 2 cons, evidence grade;
(3) The single strongest evidence-based argument for staying the
course; (4) The single strongest evidence-based argument for switching;
(5) The prognosis trajectory under each arm in 2–3 sentences each;
(6) The specific, concrete questions this analysis raises that only
the treating clinician can answer (e.g. information about the patient
not captured in this analysis, local access/formulary constraints,
or judgment calls that don't resolve from evidence alone).

```

### Step 44.8: Critical Awareness Check

**Prompt:**

```
#VibeRounds Before I act on or present this analysis, run a critical
awareness pass on it: (1) Where in this analysis did you, the AI,
have to fill an evidence gap with extrapolation or general clinical
reasoning rather than direct data — list each instance plainly;
(2) Is there a plausible bias in how this comparison was framed —
for instance, did the proposed treatment get framed more favorably
simply because it was introduced second, or because "proposed/best-
possible" framing primes toward recommending change? (3) What
specific piece of this patient's information, if I had given it to
you, would most likely have changed the comparison — and should I go
find that information before relying on this analysis further?

```
> [!NOTE] **Application Note:** Step 44.8 deliberately runs *after* the synthesis, not before it — the point is to audit the completed analysis for the kind of framing bias that tends to favor the "proposed/alternative" arm by default, consistent with the Critical Awareness Framework (D).

---

## Related Frameworks

- [Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html) (complementary — use before Step 44.1/44.3 if the current evidence base needs updating from recent literature)
- [Module 34 — The High-Value Care (HVC) Auditor](https://avi33tbtt.github.io/Prompts/Module-34-High-Value-Care-Auditor.html) (complementary — audits burden/value of either treatment arm once selected)
- [Module 35 — Epistemic Certainty Mapping & Calibration](https://avi33tbtt.github.io/Prompts/Module-35-Epistemic-Certainty-Mapping-Calibration.html) (strengthens the uncertainty-width language in Step 44.6)
- [Module 43 — Health Economics & Value-Based Care Alignment](https://avi33tbtt.github.io/Prompts/Module-43-Health-Economics-Value-Based-Care-Alignment.html) (complementary — cost/access dimension of the switching decision)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (underlies Step 44.8)

---

## Navigation

**Previous:** [← Module 43 — Health Economics & Value-Based Care Alignment](https://avi33tbtt.github.io/Prompts/Module-43-Health-Economics-Value-Based-Care-Alignment.html)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
