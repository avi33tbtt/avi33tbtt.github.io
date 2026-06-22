# Module 23 — Counterfactual Analysis

**Objective:** Interrogate what *would have changed* if key clinical variables had been different — systematically surfacing causal assumptions, decision sensitivity, and the hidden leverage points in a case that retrospective review alone cannot reveal.

**Indication:** Post-case debrief when the outcome differed from expectation; any case where a management decision is being scrutinised; high-stakes pivot points (delayed diagnosis, unexpected deterioration, treatment failure); cases being prepared for audit, case conference, or near-miss review; any moment a clinician asks "what if we had done X instead?"

> [!IMPORTANT] **Clinical Disclaimer**
> All AI-generated counterfactual outputs — including alternative outcome projections, causal attribution, and decision sensitivity ratings — are reasoning tools for educational reflection only. They are not evidence-based outcome predictions and must never be used to assign clinical blame, document medicolegal risk, or inform active patient management without independent clinical review.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Framework: Observe → Cluster → Hypothesize → Test → Update

This module runs the full **Observe → Cluster → Hypothesize → Test → Update** cycle as its backbone:

| Phase | Counterfactual Function |
|---|---|
| **Observe** | Catalogue all decision nodes and outcome data from the case |
| **Cluster** | Group decisions by type: diagnostic, therapeutic, timing, communication |
| **Hypothesize** | Generate "what if" alternatives for each decision node |
| **Test** | Stress-test each counterfactual against the case evidence |
| **Update** | Synthesise which counterfactuals most change the outcome trajectory |

---

## Phase 1 · Initiation — Load case and establish counterfactual contract

### Step 22.0: Counterfactual Session Setup

**Prompt:**

```
#VibeRounds You are entering Counterfactual Analysis Mode.
Your role is to help me reason about what would have been different
in this clinical case if specific decisions, timings, or findings had
changed. You are not here to assign blame or judge decisions as right or
wrong — you are here to map the causal architecture of this case:
which nodes mattered most, which were decision-sensitive, and which
outcomes were robust regardless of what was done.

For every counterfactual we explore, you will:
(1) State the original decision or finding
(2) State the counterfactual alternative
(3) Trace the most likely downstream consequence
(4) Rate the outcome sensitivity: HIGH (likely different outcome),
    MODERATE (possibly different), or LOW (outcome probably unchanged)
(5) Identify whether the change was within the clinician's control at
    the time, or driven by system, patient, or chance factors

Confirm you understand. Then ask me to present the case.
```

> [!NOTE] **Application Note:** The control attribution in step (5) is the most educationally important output of this module. Counterfactual analysis without a control frame risks creating false guilt ("I should have known earlier") or false reassurance ("nothing would have changed anyway"). The framework is designed to prevent both.

---

## Phase 2 · Execution — Systematic counterfactual stress-testing

### Step 22.1: Observe — Full Finding and Decision Inventory

**Prompt:**

```
#VibeRounds Here is the case:
[PASTE CASE SUMMARY — demographics, presenting complaint, clinical course,
key decisions made, investigations, management, and outcome]

Begin with Observe. List every significant clinical decision node in
this case in chronological order. For each node include:
(1) The decision or action taken
(2) The point in time it occurred
(3) The information available to the clinician at that moment
(4) The alternative(s) that were theoretically available but not chosen

Do not yet generate counterfactuals — only map the decision architecture.
Flag any nodes where the available information was incomplete, ambiguous,
or contested at the time of the decision.
```

> [!NOTE] **Application Note:** Separating the decision inventory (Step 22.1) from counterfactual generation (Step 22.2) is deliberate. Conflating the two produces post-hoc bias — the clinician retrospectively constructs the "available alternatives" in light of the outcome rather than the information state at the time. Forcing an explicit inventory first grounds the analysis in contemporaneous epistemic conditions.

### Step 22.2: Cluster — Group Decision Nodes by Type

**Prompt:**

```
#VibeRounds Now apply Cluster. Organise the decision nodes you have
identified into the following clusters:
(A) Diagnostic decisions — what was diagnosed, when, and how
(B) Therapeutic decisions — what treatment was chosen, dose, timing
(C) Timing decisions — when to act, when to wait, when to escalate
(D) Communication decisions — what was conveyed to team, patient, family
(E) Systemic factors — resource availability, staffing, protocol constraints

For each cluster, identify which node within it had the highest decision
sensitivity — i.e., the node where a different choice was most plausible
and would most have altered the downstream course.
```

### Step 22.3: Hypothesize — Generate Counterfactuals for Each Cluster

**Prompt:**

```
#VibeRounds Now apply Hypothesize. For each cluster, generate the single
most clinically significant counterfactual — the alternative decision
that a reasonable, competent clinician could have made given the same
information at the time.

For each counterfactual:
(1) State the original decision
(2) State the counterfactual: "What if instead..."
(3) Describe the most plausible causal chain that would have followed
(4) Rate outcome sensitivity: HIGH / MODERATE / LOW
(5) State whether this counterfactual was within the clinician's control

Avoid hindsight framing — base each counterfactual only on information
available at the time the original decision was made.
```

> [!NOTE] **Application Note:** The "reasonable, competent clinician" standard deliberately mirrors medicolegal language — not to create legal anxiety but to anchor counterfactuals in what was actually achievable, not what a future specialist with full outcome data might have done. This prevents the analysis from generating unrealistic "if only they had known" scenarios.

### Step 22.4: Test — Stress-Test the Most Sensitive Counterfactuals

**Prompt:**

```
#VibeRounds Now apply Test. Take the two counterfactuals you rated as
HIGH outcome sensitivity and stress-test each one:

(1) Best-case trajectory: if this counterfactual had been followed and
    everything downstream went well — what is the best plausible outcome?
(2) Worst-case trajectory: if this counterfactual had been followed but
    introduced its own risks or complications — what is the worst
    plausible outcome?
(3) Null hypothesis: is there any argument that even with this change,
    the actual outcome would have been similar? What is the strength of
    that argument?
(4) Confounders: what patient, system, or chance factors would have
    influenced the counterfactual trajectory independently of the
    clinical decision?
```

### Step 22.5: Update — Synthesise the Causal Architecture

**Prompt:**

```
#VibeRounds Now apply Update. Synthesise everything we have generated.

Produce a Causal Architecture Summary for this case:
(1) The decision node with the HIGHEST leverage — most likely to have
    changed the outcome if altered
(2) The decision node that APPEARS high-leverage but is actually outcome-
    robust (i.e., looks like it mattered but probably didn't)
(3) The factor most outside anyone's control that most determined
    the outcome
(4) A one-paragraph narrative that honestly describes how much of this
    outcome was changeable, and how much was not

Then give me one learning statement — the single most important thing
this counterfactual analysis reveals about how I should reason differently
in similar future cases.
```

### Step 22.6: Clinical Complexities — Case-Specific Counterfactual Constraints

**Prompt:**

```
#VibeRounds Identify the clinical complexities in this case that constrained
the counterfactual space — factors that made the "obvious" alternatives
actually less obvious at the time:

(1) Patient factors: comorbidities, atypical presentation, communication
    barriers, cultural or contextual factors
(2) Clinical trajectory factors: rate of change, nonlinear deterioration,
    misleading initial stability
(3) System factors: resource constraints, team structure, time pressures,
    handover gaps
(4) Epistemic factors: what the team could not have known; where the
    evidence base itself was absent or contested

For each complexity: rate how significantly it narrowed the realistic
counterfactual space (Major / Moderate / Minor constraint).
```

### Step 22.7: Evidence Search — What Does Literature Say About This Case Type?

**Prompt:**

```
#VibeRounds Now guide an evidence search approach for this case.

(A) For the CASE ITSELF:
    (1) What is the best evidence base for the management pathway
        actually followed in this case?
    (2) What systematic reviews or guidelines address the highest-leverage
        decision node identified in Step 22.5?
    (3) What search terms would best retrieve this evidence?
        (Give 3 structured PICO-formatted searches)

(B) For the COMPLEXITY:
    (1) Which clinical complexity identified in Step 22.6 has the thinnest
        evidence base — where guideline recommendations are weakest?
    (2) What is the best available evidence for managing that complexity?
    (3) What search terms would retrieve evidence specifically for the
        atypical or constrained scenario?
        (Give 2 PICO-formatted searches)
```

### Step 22.8: Evidence Search Output

**Prompt:**

```
#VibeRounds Based on the evidence search approach above, produce a
structured Evidence Summary for this case:

FOR THE CASE:
(1) What does best evidence say about the management of [PRIMARY DIAGNOSIS
    / CLINICAL SCENARIO]?
(2) Does the evidence support or challenge the actual management pathway
    followed? Cite the level of evidence.
(3) Does the evidence address the counterfactual alternatives identified?
    If so, what does it say?

FOR THE COMPLEXITY:
(1) What does best evidence say about managing [SPECIFIC COMPLEXITY]?
(2) Where are the evidence gaps — what does the literature not address
    that was relevant to this case?
(3) What is the practical clinical implication of those gaps for a
    clinician facing a similar case in the future?

Format each finding as:
Evidence Statement | Level of Evidence | Implication for This Case
```

---

## Phase 3 · Closure / Review — Synthesise and extract

### Step 22.9: Counterfactual Case Report

**Prompt:**

```
#VibeRounds Produce the full Counterfactual Analysis Closure Report:

(1) DECISION ARCHITECTURE MAP — the chronological list of all decision
    nodes, their cluster type, and their outcome sensitivity rating
(2) HIGHEST-LEVERAGE NODE — the single decision that most shaped the
    outcome, with a one-sentence justification
(3) OUTCOME ROBUSTNESS RATING — overall: was this outcome highly
    changeable, moderately changeable, or largely determined by factors
    outside clinical control?
(4) UNRESOLVED CAUSAL QUESTIONS — what remains genuinely uncertain even
    after this analysis?
(5) KEY LEARNING — one paragraph on what this case teaches about
    counterfactual reasoning in this clinical domain
(6) EVIDENCE GAPS IDENTIFIED — where the literature cannot yet answer
    the questions this case raises
```

### Step 22.10: Difficulty Ratchet & Next Session Calibration

**Prompt:**

```
#VibeRounds Based on this counterfactual session:
(1) Which phase of the Observe → Cluster → Hypothesize → Test → Update
    cycle was I most comfortable with, and which was hardest?
(2) Recommend the complexity level for my next counterfactual session:
    same (single decision node with clear alternatives), harder (two
    competing high-leverage nodes with conflicting counterfactual
    trajectories), or easier (single low-stakes node with obvious
    alternative).
(3) Give me one reasoning skill to practise before next time —
    something I can apply to any case I encounter in the next 48 hours.
```

---

## Quick-Start Reference Card

| Step | One-line purpose | Phase |
|---|---|---|
| 22.0 | Set the counterfactual contract | Initiation |
| 22.1 | Observe — map all decision nodes chronologically | Execution |
| 22.2 | Cluster — group nodes by type, flag highest sensitivity | Execution |
| 22.3 | Hypothesize — generate one counterfactual per cluster | Execution |
| 22.4 | Test — stress-test HIGH-sensitivity counterfactuals | Execution |
| 22.5 | Update — synthesise causal architecture | Execution |
| 22.6 | Clinical complexities constraining the counterfactual space | Execution |
| 22.7 | Evidence search approach for case and complexity | Execution |
| 22.8 | Evidence search output — structured evidence summary | Execution |
| 22.9 | Counterfactual Case Report — full closure output | Closure |
| 22.10 | Difficulty ratchet + next session calibration | Closure |

---

## Module 22 Maturity Level

| Module | Status | Description |
|---|---|---|
| **Module 22** | 🟡 In Progress | Proposed structure — designed for integration with Modules 1, 12, and 9. Not yet validated in a live educational environment. |

---

## Prompt Analytics Tags

| Step | AI Mode |
|---|---|
| 22.0 | Traditional |
| 22.1 | Traditional |
| 22.2 | Traditional · Brainstorming |
| 22.3 | Brainstorming · Socratic |
| 22.4 | Devil's Advocate |
| 22.5 | Traditional |
| 22.6 | Traditional |
| 22.7 | Traditional |
| 22.8 | Traditional |
| 22.9 | Traditional |
| 22.10 | Socratic |

---

## Related Modules & Frameworks

- [Module 1 — Socratic Clinical Reasoning](Module-01-Socratic-Clinical-Reasoning.md) — counterfactual probes are embedded in Step 1.7; Module 22 expands these into a full session
- [Module 12 — Differential Diagnosis Deepdive](Module-12-Differential-Diagnosis-Deepdive.md) — Step 12.7's closing counterfactual question is the seed; Module 22 is the full harvest
- [Module 9 — N-of-1 Case Research Protocol](Module-09-Case-Research_Protocol.md) — counterfactual analysis in Module 22 feeds Stage 5 (alternative explanations) of the N-of-1 protocol
- [Framework D — Vibe Rounds Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) — Step 22.3's hindsight-framing guard operationalises Framework D's bias awareness mandate
- [Module 23 — Thematic Analysis](Module-23-Thematic-Analysis.md) — counterfactuals cluster around recurrent themes; run Module 23 after Module 22 on registry cases

---

*VibeRounds Prompt Modules · Module 22 — Counterfactual Analysis*
*Developed within the Vibe Rounds framework · June 2026*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*
