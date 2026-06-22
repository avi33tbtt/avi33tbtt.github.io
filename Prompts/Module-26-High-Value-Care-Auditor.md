# Module 26 — The High-Value Care (HVC) Auditor

**Objective:** Interrogate a proposed workup or management plan for investigations, interventions, and referrals that are low-value, redundant, potentially harmful, or inconsistent with the principle of delivering the maximum benefit per unit of clinical resource and patient burden.

**Indication:** Use when reviewing an investigation list that feels reflexively comprehensive rather than targeted; when preparing for a resource-constrained clinical environment (see also Module 14); when a learner's workup is driven by anxiety or habit rather than diagnostic logic; or as a routine audit step before finalising any management plan.

> High-value care is not cost-cutting — it is the recognition that every investigation and intervention carries a burden: patient discomfort, risk of incidental findings, opportunity cost, false-positive rates, and downstream cascade investigations. Ordering more is not always doing more for the patient.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Declare the workup under audit

### Step 26.0: Session Setup — Enter HVC Audit Mode

**Prompt:**

```
#VibeRounds You are a High-Value Care Auditor. I will present you
with my proposed workup and management plan for this patient.
Your role is to challenge every item on that list with one of
four questions: (1) Does this investigation or intervention
change management for this patient? (2) Is there a lower-burden
alternative that provides equivalent diagnostic information?
(3) Does the evidence support this intervention for a patient
with this specific profile? (4) Does this item duplicate
information already available? You are not trying to help me
do less — you are trying to help me do the right things.
Confirm your role and ask me to present my plan.
```

> [!NOTE] **Application Note:** The four HVC challenge questions in this setup step are the backbone of the entire module. Every subsequent step operationalises one or more of them. Learners should be encouraged to memorise these four questions as a portable audit tool they can apply mentally at any clinical decision point.

---

## Phase 2 · Execution — Item-by-item audit of the proposed plan

### Step 26.1: The Management-Change Test

**Prompt:**

```
#VibeRounds Take each investigation on my proposed list. For each
one, ask me: if this test comes back positive, will my management
change — and if so, specifically how? If this test comes back
negative, will my management change — and if so, how? If the
answer to both questions is "no," ask me to justify why the test
should remain on the list. Do not let me answer with "it's
routine" or "for completeness" — require a management-linked
justification for every item.
```

### Step 26.2: The Cascade Risk Assessment

**Prompt:**

```
#VibeRounds For each investigation on my list, ask me: what is
the expected false-positive rate of this test in a patient with
this demographic and comorbidity profile? If a false-positive
result occurs, what is the most likely next investigation it
would trigger — and does that downstream investigation carry
its own risks? Identify the two investigations on my list with
the highest cascade risk in this patient's context, and ask me
whether the diagnostic yield justifies that cascade risk.
```

### Step 26.3: The Patient-Burden Inventory

**Prompt:**

```
#VibeRounds From the patient's perspective, not the clinician's,
walk through my plan and identify: (1) Which investigation or
intervention on this list is most burdensome to this patient
in terms of pain, time, risk, or anxiety — and have I
discussed this burden with the patient or their advocate?
(2) Is there any item on this list that a well-informed patient
with this diagnosis might reasonably decline, and have I
prepared for that conversation? (3) Is the total burden of
this plan proportionate to the severity and prognosis of
the underlying condition?
```

### Step 26.4: The Evidence-Base Audit

**Prompt:**

```
#VibeRounds For each major intervention in my management plan
(not investigations — treatments, referrals, procedures), ask
me: (1) What is the evidence base for this intervention in a
patient with this specific profile — age, comorbidities,
and severity? (2) Is this intervention supported by a
guideline for this population, and which guideline? (3) Is
there any subgroup within the evidence base in which this
intervention is known to cause net harm? Require me to
acknowledge evidence gaps honestly rather than citing
general-population evidence for a patient who may not fit
the study population.
```

### Step 26.5: The Minimum Necessary Workup

**Prompt:**

```
#VibeRounds Given everything we have audited, ask me to rebuild
my investigation list from scratch — starting with nothing and
adding items only when I can answer "yes" to the management-
change test (Step 26.1). Compare this minimum necessary list
to my original list. Ask me: (1) How many items did I remove,
and what category of driver produced most of the removals —
habit, anxiety, institutional culture, or genuine uncertainty?
(2) Is there any item I removed that I now want to reinstate —
and can I give a management-change justification for it?
```

---

## Phase 3 · Closure / Review — Build the HVC habit

### Step 26.6: Value Statement

**Prompt:**

```
#VibeRounds Produce a brief High-Value Care Audit Summary for
this case: (1) Original investigation/intervention count;
(2) Items removed after audit with brief justification for
each; (3) Items retained with their management-change
justification; (4) The single highest-yield item in the
revised plan — the one most likely to change management;
(5) The single highest-cascade-risk item and what we will
watch for.
```

### Step 26.7: Habit Transfer Prompt

**Prompt:**

```
#VibeRounds Ask me: based on this audit, what is the single
ordering habit — a test, referral type, or intervention —
that I use most reflexively without applying the
management-change test? What would I need to build into
my clinical workflow to pause and apply the HVC four
questions before ordering that item in future?
```

---

## Related Frameworks

- [Module 14 — Resource-Constrained Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.html) (complementary — HVC in low-resource environments)
- [Module 25 — Bayesian Probability / Likelihood Ratio Engine](Module-25-Bayesian-Probability-Likelihood-Ratio-Engine.md) (Step 26.1 management-change test is strengthened by probability framing)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step 26.7 habit reflection)
- [Module 13 — Medication Reconciliation & Polypharmacy](https://avi33tbtt.github.io/Prompts/Module-13-Medication-Reconciliation-Polypharmacy-Audit.html) (complementary medication-side HVC)

---

## Navigation

**Previous:** [← Module 25 — Bayesian Probability / Likelihood Ratio Engine](Module-25-Bayesian-Probability-Likelihood-Ratio-Engine.md) **Next:** [Module 27 — The "Why Now?" Precipitant Hunter →](Module-27-Why-Now-Precipitant-Hunter.md)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
