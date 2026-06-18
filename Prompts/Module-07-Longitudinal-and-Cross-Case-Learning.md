[← Back to README](README.md)

# Module 7 — Longitudinal & Cross-Case Learning

**Objective:** Turn the registry itself into a learning system across cases and time.

**Status:** Proposed; not yet validated live, but ready for piloting.

> [!IMPORTANT]
> This module requires **de-identified data only**. See the [Safety & Compliance Note](Start-Here.md#️-safety--compliance-note).

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Scope the longitudinal inquiry

### Step 7.0: Learning Inquiry Setup

**Prompt:**
```text
#VibeRounds I am starting a longitudinal learning session on this
registry. Before we begin, help me scope it: (1) What is the time window?
(2) Are we examining a specific diagnosis group or the whole registry? (3)
What is the primary learning question we want answered by the end of this
session? Once we agree on scope, tell me: what is one thing about this
registry that you suspect will surprise me — based on the data you can
see?
```

> [!NOTE]
> **Application Note:** The 'what will surprise you' prompt activates anticipatory curiosity, a core driver of intrinsic learning motivation.

---

## Phase 2 · Execution — Cross-case pattern mining and learning analytics

### Step 7.1: Longitudinal Trajectory Analytics

**Prompt:**
```text
#VibeRounds Analyse this registry's longitudinal trajectories: (1) Which
cases demonstrate the longest unresolved trajectories? (2) Which diagnoses
required the greatest number of encounters before convergence? (3) Which
cases experienced the greatest fragmentation across specialties? (4) Which
cases accumulated the richest longitudinal follow-up?
```

### Step 7.2: Diagnostic Evolution Analytics

**Prompt:**
```text
#VibeRounds Trace the evolution of working diagnosis across the clinical
course in this registry: (1) Which observations most substantially changed
diagnostic direction? (2) Which diagnoses remained stable throughout the
journey? (3) Which underwent repeated revision?
```

### Step 7.3: Registry Learning Analytics

**Prompt:**
```text
#VibeRounds Mine this registry for recurring learning patterns: (1) Which
symptom combinations repeatedly precede uncommon diagnoses? (2) Which
interventions consistently precede improvement? (3) Which observations
repeatedly precede deterioration? (4) Which recurring patterns emerge
despite different final diagnoses?
```

### Step 7.4: Diagnostic Turning Point Detection

**Prompt:**
```text
#VibeRounds For the cases in this registry, identify: (1) Which observation
represented the major turning point in the diagnostic trajectory? (2)
Which finding most substantially altered subsequent management?
```

### Step 7.5: Cross-Case Pattern Mining

**Prompt:**
```text
#VibeRounds Mine this registry for cross-case patterns: (1) Which cases
unexpectedly cluster together? (2) Which symptom constellations recur
across different diseases? (3) Which uncommon clinical combinations appear
repeatedly?
```

### Step 7.6: Clinical Reasoning Analytics

**Prompt:**
```text
#VibeRounds Analyse the clinical reasoning recorded across this registry:
(1) What were the principal competing diagnoses in each case? (2) Which
diagnosis became progressively more likely over time? (3) Which findings
reduced diagnostic probability? (4) Which important observations remained
unexplained?
```

### Step 7.7: Longitudinal Case Quality Rating

**Prompt:**
```text
#VibeRounds Rate the cases in this registry against five longitudinal
quality criteria — (1) longitudinal completeness, (2) follow-up
completeness, (3) temporal coverage, (4) outcome completeness, (5)
continuity of documentation — scoring each case 1-10 per criterion, and
flag any case scoring below 5 on three or more criteria.
```

### Step 7.8: Bloom's Registry Learning Prompt (Module 7 Application)

**Prompt:**
```text
#VibeRounds Use Bloom's Taxonomy to extract learning from this registry at
scale: (1) Remember — what are the 5 most common diagnoses and their
defining features across cases? (2) Understand — what is the most common
mechanism behind the top diagnosis? (3) Apply — what clinical rule from
this registry could I apply to the next similar patient I see? (4) Analyse
— which two diagnoses in this registry are most frequently confused, and
why? (5) Evaluate — which management approach in this registry has the
strongest pattern of positive outcomes? (6) Create — design one new
clinical question this registry is now capable of answering with a formal
study.
```

> [!NOTE]
> **Application Note:** Bloom's applied to population-level registry learning. See [Framework C](Framework-C-Blooms-Taxonomy.md).

---

## Phase 3 · Closure / Review — Crystallise registry learning into actionable outputs

### Step 7.9: Learning Session Synthesis

**Prompt:**
```text
#VibeRounds We are closing this longitudinal learning session. Produce a
Learning Synthesis Report: (1) top 3 cross-case patterns discovered, (2)
top 2 diagnostic blindspots revealed, (3) the single most surprising
finding, (4) three specific clinical or documentation practices the
registry data suggests should change. Open with: 'What this registry has
learned from [X] cases is worth documenting.'
```

### Step 7.10: New Hypothesis Generation

**Prompt:**
```text
#VibeRounds Based on the cross-case patterns identified, generate 3
testable clinical hypotheses suited to N-of-1 or retrospective study
design. For each: state the hypothesis, the data elements needed to test
it, and which existing cases are most relevant. End with: 'Which of these
three hypotheses do you find most personally compelling, and why?' —
directing the question back to me.
```

### Step 7.11: Registry-as-Curriculum Builder

**Prompt:**
```text
#VibeRounds Using patterns, blindspots, and high-value cases from this
session, build a 5-case teaching curriculum for a new learner joining the
network. For each case: description or link, primary learning objective,
Bloom's level best suited to the case, and the Socratic question that best
anchors the session. Sequence the cases from most accessible to most
complex.
```

### Step 7.12: Critical Awareness Cross-Case Debrief

**Prompt:**
```text
#VibeRounds Apply the Vibe Rounds Critical Awareness lens to the patterns
identified in this longitudinal session: (1) Which patterns might be
artefacts of how cases were recorded rather than true clinical signals?
(2) What would a biostatistician say about drawing conclusions from this
sample? (3) Which cross-case conclusion is most likely to be overfit to
this specific network and unlikely to replicate elsewhere? (4) What is the
most intellectually honest caveat to attach to each of the top 3 findings
from this session?
```

> [!NOTE]
> **Application Note:** See [Framework D](Framework-D-Critical-Awareness-Framework.md).

---

## Related Frameworks

- [Framework C — Bloom's Revised Taxonomy](Framework-C-Blooms-Taxonomy.md) (Step 7.8)
- [Framework D — Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) (Step 7.12)

---

## Navigation

**Previous:** [← Module 6 — Registry-Level Analytics](Module-06-Registry-Level-Analytics.md)
**Next:** [Module 8 — Socratic-Mode Design Specification →](Module-08-Socratic-Mode-Design-Specification.md)

[← Back to README](README.md)
