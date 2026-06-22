# Module 29 — The Iatrogenic Domino Effect (Cross-Comorbidity Matrix)

**Objective:** Systematically map the second- and third-order clinical consequences of a proposed treatment plan on the patient's co-existing conditions — exposing the "treating one disease worsens another" problem that is the central challenge of multi-morbid patient management.

**Indication:** Use for any patient with two or more significant co-existing conditions when a treatment plan has been proposed; when a patient has deteriorated in an unexpected domain after a new treatment was started; when a prescribing decision must be made in a patient with competing organ-level vulnerabilities; or as a mandatory step before any significant new intervention in a multi-morbid patient.

> Multi-morbid patients are not simply patients with multiple single-disease problems running in parallel. Their diseases interact — and their treatments interact with those interacting diseases. A beta-blocker prescribed for heart failure may worsen reactive airway disease. A corticosteroid prescribed for COPD may destabilise diabetes and cause fluid retention that worsens heart failure. The chess game is played on multiple boards simultaneously, and the most dangerous moves are the ones that look locally correct.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Build the comorbidity and treatment landscape

### Step 29.0: Session Setup — Enter Cross-Comorbidity Mode

**Prompt:**

```
#VibeRounds You are a specialist in multi-morbidity management.
I will present you with a patient who has multiple co-existing
conditions and a proposed treatment plan. Your role is to
challenge me on the second-order consequences of every
significant treatment decision: for each treatment, ask me
which other disease on this patient's problem list could be
adversely affected, and through what mechanism. You are not
trying to stop me from treating — you are ensuring I have
thought through the full chessboard before I make each move.
Start by asking me to list all active co-existing conditions
and the full proposed treatment plan. Confirm your role.
```

> [!NOTE] **Application Note:** The framing of "thinking through the full chessboard" is intentional. Single-disease treatment logic is checkers — it considers one move at a time. Multi-morbid treatment logic is chess — every move has consequences on the rest of the board. This module trains chess-level thinking.

---

## Phase 2 · Execution — Cross-comorbidity impact mapping

### Step 29.1: Build the Cross-Comorbidity Matrix

**Prompt:**

```
#VibeRounds Ask me to construct a Cross-Comorbidity Matrix
for this patient. The matrix has: rows = each active
co-existing condition; columns = each proposed treatment.
For each cell, ask me to state: (A) no significant
interaction; (B) beneficial interaction — this treatment
also helps this condition; (C) potentially harmful
interaction — this treatment may worsen this condition,
with mechanism; or (D) contraindication — this treatment
should not be used in the presence of this condition, with
evidence. Work through the matrix one row at a time.
Do not accept blank cells — every cell requires an
explicit rating.
```

### Step 29.2: The Domino Chain Analysis

**Prompt:**

```
#VibeRounds Identify the highest-risk cell in the matrix —
the treatment-condition pair most likely to produce a
clinically significant adverse interaction in this patient.
For that pair, ask me to map the domino chain: (1) How
does the treatment worsen the co-existing condition —
at the mechanistic level? (2) What clinical sign or
investigation result will be the first indicator that
this domino has fallen? (3) Does worsening of that
condition then create a third domino — does deterioration
in Condition A, caused by Treatment B, then worsen
Condition C? Trace the full chain.
```

### Step 29.3: The Treatment Sequencing Challenge

**Prompt:**

```
#VibeRounds Given the cross-comorbidity interactions we have
identified, ask me: (1) Is there an optimal sequence for
introducing these treatments — one that manages the
highest-risk domino first before adding the next
intervention? (2) Are there two treatments on my plan
that are particularly hazardous to introduce simultaneously
in this patient — and if so, what monitoring protocol
would make simultaneous introduction safer? (3) Is there
any treatment on my plan that should be withheld entirely
until a specific co-existing condition is better controlled?
```

### Step 29.4: The Shared Mechanism Benefit Search

**Prompt:**

```
#VibeRounds The cross-comorbidity matrix is not only a risk map
— it can also reveal therapeutic opportunities. Ask me:
(1) Are there any treatments on my plan that treat more
than one condition on this patient's list — and am I
maximising that dual benefit? (2) Is there any treatment
not currently on my plan that would address two or more
of this patient's conditions simultaneously, representing
a higher-value intervention than two separate treatments?
(3) Is there any condition on the problem list that is
currently untreated, but that — if treated — would
passively improve one of the other conditions?
```

### Step 29.5: The Monitoring and Safety-Net Design

**Prompt:**

```
#VibeRounds For each Category C or D cell identified in the
Cross-Comorbidity Matrix, ask me to design a specific
monitoring protocol: (1) What is the early warning sign
that the adverse interaction is occurring? (2) What
investigation, clinical parameter, or patient-reported
symptom will I track — and at what frequency? (3) What
is the pre-specified threshold that will trigger a
treatment modification or discontinuation? Require a
concrete, actionable monitoring plan for each high-risk
pair — not a generic "monitor closely."
```

---

## Phase 3 · Closure / Review — Synthesise a multi-morbid management strategy

### Step 29.6: The Revised Treatment Plan

**Prompt:**

```
#VibeRounds Based on the Cross-Comorbidity Matrix and Domino
Chain Analysis, ask me to produce a revised treatment plan
that: (1) sequences interventions to manage the highest-risk
interactions first; (2) explicitly notes the monitoring
protocol for each Category C or D pair; (3) identifies
any treatment that has been withheld, modified, or
substituted as a result of this analysis, with justification;
(4) names the single highest-priority review timepoint —
the moment at which the cross-comorbidity risk is greatest
and a senior clinical review is most critical.
```

### Step 29.7: Teaching Debrief — The Multi-Morbid Mind

**Prompt:**

```
#VibeRounds Ask me to reflect on this session: (1) Which
domino chain was the most counterintuitive to me — the
interaction I would not have identified without this
structured analysis? (2) What is the general class of
interaction (e.g. haemodynamic, renal, metabolic,
immunological) that I am most likely to miss habitually
in multi-morbid patients — and why? (3) What change in
my clerking or prescribing habit will I build to surface
cross-comorbidity risks more routinely, without needing
a formal module session every time?
```

---

## Related Frameworks

- [Framework B — Fink's FLINK Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-B-Finks-FLINK-Taxonomy.html) (Step 29.6 Integration dimension — synthesising across disease systems)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step 29.7 bias and habit debrief)
- [Module 13 — Medication Reconciliation & Polypharmacy](https://avi33tbtt.github.io/Prompts/Module-13-Medication-Reconciliation-Polypharmacy-Audit.html) (drug-drug interaction complement to disease-treatment interaction)
- [Module 28 — First-Principles Pathophysiology Mapping](Module-28-First-Principles-Pathophysiology-Mapping.md) (Step 29.2 domino chain requires mechanistic reasoning)
- [Module 23 — Clinical Pre-Mortem](Module-23-Clinical-Pre-Mortem.md) (Pre-Mortem identifies failure modes; this module maps the causal mechanism of the most common ones in multi-morbid patients)

---

## Navigation

**Previous:** [← Module 28 — First-Principles Pathophysiology Mapping](Module-28-First-Principles-Pathophysiology-Mapping.md) **Next:** [Module 30 — Diagnostic Anchor Extractor →](Module-30-Diagnostic-Anchor-Extractor.md)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
