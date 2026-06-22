# Module 24 — Heuristic Analysis

**Objective:** Name, examine, and calibrate the mental shortcuts — heuristics — that drove clinical reasoning in a case, distinguishing the rules of thumb that served the clinician well from those that introduced error, and building a calibrated personal heuristic inventory.

**Indication:** Any case where fast, pattern-based reasoning was used (most clinical encounters); cases where a heuristic "worked" but the clinician cannot fully articulate why; cases where reasoning felt fluent but the outcome was suboptimal; educational sessions targeting clinical intuition and System 1 reasoning; transition points in training where a learner's heuristic library is being built or tested for the first time.

> [!IMPORTANT] **Clinical Disclaimer**
> Heuristic outputs — including named heuristics, validity ratings, and recalibration recommendations — are educational reflections on reasoning processes, not evaluations of clinical performance or competence. They are learning tools and must not be used to assess clinical fitness or document professional conduct.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Framework: Observe → Cluster → Hypothesize → Test → Update

| Phase | Heuristic Function |
|---|---|
| **Observe** | Identify every reasoning shortcut and pattern-match used in the case |
| **Cluster** | Group heuristics by type: diagnostic, therapeutic, triage, communication |
| **Hypothesize** | Propose how each heuristic shaped the clinical trajectory |
| **Test** | Test each heuristic's validity in this case and in general |
| **Update** | Recalibrate the heuristic — refine, restrict, expand, or retire it |

---

## Background: What Is a Clinical Heuristic?

A heuristic is a mental shortcut — a rule of thumb that allows rapid, efficient decision-making without exhaustive analysis. Clinical heuristics are not errors; they are necessary tools. The problem arises when a heuristic that is correct in most cases is applied in the case where it does not hold.

**Common clinical heuristic families:**

| Family | Example |
|---|---|
| **Frequency heuristic** | "Common things are common" |
| **Appearance heuristic** | "If it looks like X, treat for X" |
| **Trajectory heuristic** | "If they were fine yesterday, they'll be fine today" |
| **Response heuristic** | "If it responds to treatment, the diagnosis was right" |
| **Exclusion heuristic** | "We ruled out the dangerous thing, so we're safe" |
| **Threshold heuristic** | "The result isn't that abnormal" |
| **Consensus heuristic** | "The team agreed, so it must be right" |

This module does not condemn heuristics — it calibrates them.

---

## Phase 1 · Initiation — Load case and establish heuristic contract

### Step 24.0: Heuristic Analysis Session Setup

**Prompt:**

```
#VibeRounds You are entering Heuristic Analysis Mode.
Your role is to help me name and examine the mental shortcuts —
heuristics — that shaped the clinical reasoning in this case.

We are not here to judge whether fast thinking was wrong. We are here
to build a calibrated understanding of which heuristics were well-
applied in this case, which misfired, and why. The goal is a more
conscious and accurate heuristic library — knowing when to trust
a pattern and when to slow down.

For every heuristic we identify, you will:
(1) Name it in plain language (the "rule of thumb" being applied)
(2) Identify the clinical moment where it was activated
(3) State what the heuristic predicted or recommended
(4) State whether the heuristic was: VALID in this case / PARTIALLY
    VALID / INVALID in this case
(5) Give the heuristic a general CALIBRATION RATING:
    — Reliable: holds in >80% of similar cases
    — Contextual: holds only under specific conditions (name them)
    — Unreliable: frequently misleads in this clinical context

Confirm you understand. Then ask me to present the case.
```

---

## Phase 2 · Execution

### Step 24.1: Observe — Reasoning Inventory

**Prompt:**

```
#VibeRounds Here is the case:
[PASTE CASE SUMMARY — demographics, presenting complaint, history,
examination findings, investigations, clinical decisions, outcome]

Begin with Observe. Walk through the case chronologically and at each
significant decision point, identify the reasoning mode used:

(A) Was the decision reached by fast pattern-recognition (System 1)?
(B) Was it reached by deliberate step-by-step analysis (System 2)?
(C) Was there a moment where System 1 triggered and System 2 was
    NOT activated to check it?

For each System 1 moment, state the apparent pattern that triggered it.
Do not name the heuristic yet — only describe the pattern-match.
```

### Step 24.2: Cluster — Identify and Name the Heuristics

**Prompt:**

```
#VibeRounds Now apply Cluster. Review the System 1 moments you identified.
For each, name the heuristic family it belongs to and give it a
case-specific label.

Example format:
- Frequency heuristic: "chest pain + diaphoresis = ACS until proven
  otherwise" — activated at triage
- Trajectory heuristic: "improving on Day 2 = safe to step down" —
  activated on ward round

Group any heuristics that belong to the same family.
Then identify: which single heuristic had the highest influence on the
overall clinical trajectory?
```

### Step 24.3: Hypothesize — How Did Each Heuristic Shape the Case?

**Prompt:**

```
#VibeRounds Now apply Hypothesize. For each named heuristic:

(1) What did it lead the clinician to do or not do?
(2) What did it lead the clinician to notice or not notice?
(3) What would the clinical path have looked like if this heuristic
    had NOT been applied — if the clinician had slowed to full
    analytical reasoning at that moment?
(4) Is there a specific patient feature in this case that should have
    signalled "don't apply your usual rule here"?
```

### Step 24.4: Test — Validate Each Heuristic

**Prompt:**

```
#VibeRounds Now apply Test. For each heuristic, run three validity checks:

(1) CASE VALIDITY: Did the heuristic serve this patient well, partially
    well, or poorly? What is the evidence from this case?
(2) GENERAL VALIDITY: Under what conditions does this heuristic hold
    reliably? Under what conditions does it misfire?
    (Draw on clinical knowledge — this is the calibration step.)
(3) EXCEPTION PROFILE: Who is the patient for whom this heuristic
    is most dangerous? (Demographic, comorbidity, presentation type,
    or clinical context where the rule of thumb fails most often.)

Return a CALIBRATION RATING for each: Reliable / Contextual / Unreliable.
```

> [!NOTE] **Application Note:** The exception profile in Step 24.4 is the most practically useful output of this module. A heuristic that is "contextual" but whose exception profile is vague is still a calibration risk. Push for specific patient types, presentations, or contexts where the heuristic reliably fails — not abstract qualifications.

### Step 24.5: Update — Recalibrate the Heuristic Library

**Prompt:**

```
#VibeRounds Now apply Update. For each heuristic, recommend one of four
recalibration actions:

(A) RETAIN — this heuristic is well-calibrated and should be kept as-is
(B) REFINE — retain but add a specific exception condition or boundary
    (state the refined version explicitly)
(C) RESTRICT — the heuristic should only be applied in a narrower
    context than currently used (state the restriction)
(D) RETIRE — this heuristic is unreliable in this clinical domain
    and should be consciously deactivated

Then produce a PERSONAL HEURISTIC LEDGER for this case:
A table of all identified heuristics, their calibration rating,
and their recalibration action.
```

### Step 24.6: Clinical Complexities — Factors That Distorted Heuristic Application

**Prompt:**

```
#VibeRounds Identify the clinical complexities in this case that distorted
the normal operation of the heuristics identified:

(1) Atypical presentations that mimicked the heuristic's target pattern
(2) Patient factors that made the heuristic's usual exception profile
    invisible (age, communication barrier, comorbidity mask)
(3) Time pressure or cognitive load that prevented System 2 activation
(4) Team dynamics (consensus, hierarchy, handover) that amplified or
    suppressed heuristic challenge

For each complexity: rate how significantly it distorted heuristic
application in this case (Major / Moderate / Minor).
```

### Step 24.7: Evidence Search — What Does Literature Say About This Case Type?

**Prompt:**

```
#VibeRounds Now guide an evidence search approach for this case.

(A) FOR THE CASE ITSELF:
    (1) What is the evidence base for the clinical scenario in which
        the primary heuristic misfired?
    (2) What does the literature say about the reliability of the
        highest-influence heuristic identified in Step 24.2 in this
        clinical domain?
    (3) Give 3 PICO-formatted search terms to retrieve this evidence.

(B) FOR THE COMPLEXITY:
    (1) What is the evidence base for managing the complexity that
        most distorted heuristic application in this case?
    (2) Are there validated debiasing interventions or structured
        tools that address this complexity in this context?
    (3) Give 2 PICO-formatted searches for the complexity.
```

### Step 24.8: Evidence Search Output

**Prompt:**

```
#VibeRounds Based on the evidence search approach above, produce a
structured Evidence Summary:

FOR THE CASE:
(1) What does best evidence say about the reliability of pattern-based
    reasoning in this clinical scenario?
(2) Are there published error patterns or cognitive bias studies
    relevant to the heuristics identified in this case?
(3) What does evidence say about the intervention that most reliably
    prevents heuristic misfire in this context?

FOR THE COMPLEXITY:
(1) What does best evidence say about managing the complexity that
    distorted heuristic application?
(2) What are the evidence gaps — where does literature not yet address
    this complexity or heuristic interaction adequately?
(3) What is the practical implication for a clinician in a similar case?

Format each finding as:
Evidence Statement | Level of Evidence | Implication for This Case
```

---

## Phase 3 · Closure / Review

### Step 24.9: Heuristic Analysis Report

**Prompt:**

```
#VibeRounds Produce the full Heuristic Analysis Closure Report:

(1) HEURISTIC LEDGER — all identified heuristics with calibration
    ratings and recalibration actions
(2) HIGHEST-INFLUENCE HEURISTIC — the rule of thumb that most shaped
    this case's trajectory, and its final calibration status
(3) EXCEPTION PROFILES — the patient types for whom the most dangerous
    heuristics in this case most reliably misfire
(4) SYSTEM 1 / SYSTEM 2 BALANCE — a one-paragraph reflection on the
    overall reasoning mode profile in this case: was fast thinking
    applied appropriately, under-applied, or over-applied?
(5) RECALIBRATION ACTIONS — a concise list of what to do differently
    next time, derived directly from the Update step
(6) EVIDENCE ANCHORS — the strongest literature supporting or
    challenging the key heuristic recalibrations
```

### Step 24.10: Difficulty Ratchet & Next Session Calibration

**Prompt:**

```
#VibeRounds Based on this heuristic session:
(1) Which phase was most valuable for me, and which most difficult?
(2) Recommend next session complexity: same (one dominant heuristic,
    clear misfire), harder (two competing heuristics with conflicting
    recommendations), or easier (single heuristic, clearly valid).
(3) Give me one metacognitive practice for my next clinical shift —
    a specific moment in the day when I should pause and ask
    "which heuristic am I applying right now, and does it fit?"
```

---

## Quick-Start Reference Card

| Step | One-line purpose | Phase |
|---|---|---|
| 24.0 | Set the heuristic contract | Initiation |
| 24.1 | Observe — identify System 1 reasoning moments | Execution |
| 24.2 | Cluster — name the heuristics and their families | Execution |
| 24.3 | Hypothesize — trace how each heuristic shaped the case | Execution |
| 24.4 | Test — validate each heuristic with case and general evidence | Execution |
| 24.5 | Update — recalibrate: retain, refine, restrict, or retire | Execution |
| 24.6 | Clinical complexities distorting heuristic application | Execution |
| 24.7 | Evidence search approach for case and complexity | Execution |
| 24.8 | Evidence search output — structured summary | Execution |
| 24.9 | Heuristic Analysis Report — full closure output | Closure |
| 24.10 | Difficulty ratchet + next session calibration | Closure |

---

## Module 24 Maturity Level

| Module | Status | Description |
|---|---|---|
| **Module 24** | 🟡 In Progress | Proposed structure — designed for integration with Modules 12, 20, and 25. Not yet validated in a live educational environment. |

---

## Prompt Analytics Tags

| Step | AI Mode |
|---|---|
| 24.0 | Traditional |
| 24.1 | Traditional · Socratic |
| 24.2 | Brainstorming |
| 24.3 | Socratic |
| 24.4 | Devil's Advocate |
| 24.5 | Traditional |
| 24.6 | Traditional |
| 24.7 | Traditional |
| 24.8 | Traditional |
| 24.9 | Traditional |
| 24.10 | Socratic |

---

## Related Modules & Frameworks

- [Module 20 — Naturalistic Decision Making](Module-20-Recognition-Primed-Decision-Model.md) — Module 20 examines recognition-primed decisions in context; Module 24 examines the heuristic rules embedded within them. Run together for a complete fast-reasoning debrief.
- [Module 12 — Differential Diagnosis Deepdive](Module-12-Differential-Diagnosis-Deepdive.md) — Step 12.3's cognitive bias audit is the adversarial complement to Module 24's constructive calibration; both are needed for complete reasoning debrief
- [Module 25 — Bias Auditing](Module-25-Bias-Auditing.md) — heuristics and biases are related but distinct; Module 24 builds the heuristic library, Module 25 audits where biases distorted it
- [Framework D — Vibe Rounds Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) — the calibration orientation of Module 24 operationalises Framework D's mandate to interrogate AI-assisted and human reasoning simultaneously

---

*VibeRounds Prompt Modules · Module 24 — Heuristic Analysis*
*Developed within the Vibe Rounds framework · June 2026*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*
