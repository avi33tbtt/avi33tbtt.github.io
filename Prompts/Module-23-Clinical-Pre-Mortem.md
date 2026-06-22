# Module 23 — Clinical Pre-Mortem

**Objective:** Prospectively imagine that the current management plan has failed — then work backwards to identify the most likely reasons why, before the failure actually occurs.

**Indication:** Use before committing to a management plan for a high-acuity, complex, or multi-morbid patient; before discharging a patient whose trajectory feels uncertain; or whenever a plan has been agreed but a team member has unvoiced reservations.

> The Pre-Mortem inverts the post-mortem: instead of asking "what went wrong?" after the outcome, it asks "what will have gone wrong?" before the plan is executed. It is one of the most evidence-supported debiasing tools in decision science (Klein, 1998) and is systematically underused in clinical medicine.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Frame the prospective failure scenario

### Step 23.0: Session Setup — State the Plan Under Review

**Prompt:**

```
#VibeRounds You are a rigorous clinical decision partner running a
Pre-Mortem analysis. I will describe my current management plan for this
patient. Your role is to help me imagine, in concrete clinical detail,
how this plan could fail — not to reassure me, and not to critique the
plan from a theoretical standpoint, but to generate specific, realistic
failure scenarios grounded in this patient's actual profile. Start by
asking me to describe the plan in full, including the diagnosis it is
built on, the key interventions, the expected response timeline, and
the discharge or review trigger I am using. Confirm your role before
we begin.
```

> [!NOTE] **Application Note:** The critical step here is that the learner must articulate the plan explicitly before any challenge begins. Vague plans cannot be pre-mortemed — forcing articulation is itself a debiasing intervention.

---

## Phase 2 · Execution — Structured failure-scenario generation

### Step 23.1: Fast-Forward to Failure

**Prompt:**

```
#VibeRounds Project forward 48 hours. Assume this patient has deteriorated
despite the plan I described. Ask me the following in sequence:
(1) What is the most likely clinical picture at 48 hours if the
underlying diagnosis was correct but the treatment failed to work?
(2) What is the most likely clinical picture at 48 hours if the
underlying diagnosis was wrong? (3) What is the most likely clinical
picture at 48 hours if the diagnosis and treatment were both correct,
but a complication arose that we did not anticipate? Require a concrete
clinical description for each scenario, not an abstract possibility.
```

### Step 23.2: The Three Most Dangerous Assumptions

**Prompt:**

```
#VibeRounds Every management plan rests on assumptions. Based on the plan
I have described, identify the three assumptions my plan is most
dependent on — the ones that, if wrong, would cause the plan to fail
most catastrophically. For each assumption, ask me: (1) What is my
evidence that this assumption is correct? (2) What would I observe
in the next 12–24 hours that would signal this assumption is failing?
(3) What is my contingency if it does fail?
```

### Step 23.3: The Overlooked Stakeholder

**Prompt:**

```
#VibeRounds Ask me to consider the following perspectives on this plan,
one at a time: (1) The patient — is there any aspect of this plan the
patient might not adhere to, misunderstand, or be physiologically
unable to tolerate that I have not accounted for? (2) The night team —
if this patient deteriorates at 2 a.m. and the team covering has no
prior knowledge of the case, what in the handover would be
ambiguous or missing? (3) The next specialty — if this patient
requires escalation or transfer, what would the receiving team find
inadequate in our current workup?
```

### Step 23.4: The Silent Contraindication Sweep

**Prompt:**

```
#VibeRounds Walk through my management plan intervention by intervention.
For each, ask me: Is there any feature of this patient's comorbidity
profile, current medications, renal/hepatic function, or recent
investigation results that creates a contraindication or dose-adjustment
need I may not have explicitly addressed? Do not let me answer with
"I checked" — require me to state the specific value or finding that
confirms safety.
```

### Step 23.5: Failure Mode Prioritisation

**Prompt:**

```
#VibeRounds Based on the failure scenarios we have generated in this
session, ask me to rank them by: (1) clinical severity if they
occur, and (2) probability of occurring given this patient's specific
profile. Then ask me: given that ranking, which failure mode deserves
an immediate additional safeguard in my plan right now, before I
proceed?
```

---

## Phase 3 · Closure / Review — Revise, reinforce, and document

### Step 23.6: Plan Revision and Safety-Net Design

**Prompt:**

```
#VibeRounds Based on the Pre-Mortem analysis, ask me to state:
(1) What specific change, if any, am I making to my management plan
as a result of this exercise? (2) What is my safety-net — the
explicit trip-wire (time, clinical finding, or investigation result)
that will trigger mandatory plan review? (3) What have I added to
my handover or documentation that was not there before this exercise?
Record my answers as a structured Pre-Mortem Closure Statement.
```

### Step 23.7: Learning Extraction

**Prompt:**

```
#VibeRounds Reflect on this Pre-Mortem session. Ask me: (1) What
assumption in my original plan turned out to be the weakest —
and why did I make it without questioning it at the time? (2) What
type of patient or clinical scenario should automatically trigger
a Pre-Mortem from me in future practice? (3) What is the one
habit change I am committing to as a result of this session?
```

---

## Related Frameworks

- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Steps 23.2, 23.7)
- [Module 22 — Diagnostic Time-Out](Module-22-Diagnostic-Time-Out.md) (run before Pre-Mortem if diagnosis is uncertain)
- [Module 13 — Medication Reconciliation & Polypharmacy](https://avi33tbtt.github.io/Prompts/Module-13-Medication-Reconciliation-Polypharmacy-Audit.html) (Step 23.4 drug-safety sweep)
- [Module 30 — Iatrogenic Domino Effect](Module-30-Iatrogenic-Domino-Effect.md) (use after Pre-Mortem for multi-morbid patients)

---

## Navigation

**Previous:** [← Module 22 — Diagnostic Time-Out](Module-22-Diagnostic-Time-Out.md) **Next:** [Module 24 — Red Herring / Signal-to-Noise Drill →](Module-24-Red-Herring-Signal-to-Noise-Drill.md)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
