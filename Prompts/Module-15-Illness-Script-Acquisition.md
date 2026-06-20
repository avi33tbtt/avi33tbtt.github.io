[← Back to README](README.md)

# Module 15 — Illness Script Acquisition (Script Theory)

**Objective:** Train pattern-recognition-based diagnostic reasoning — the compiled, holistic "illness scripts" experienced clinicians actually use — as a distinct skill from the stepwise differential-building drilled in [Module 1](Module-01-Socratic-Clinical-Reasoning.md).

**Indication:** Once a learner can reliably build a differential step by step (Module 1, Bloom's Levels 1–4) and needs to start compressing that process into the fast, holistic recognition that characterises expert clinical reasoning. Best used on conditions the learner has already met at least once through slow reasoning — script-building works on partially familiar territory, not brand-new material.

> [!NOTE]
> **Theoretical Basis:** Script Theory (Schmidt & Rikers, 2007; Custers, 2015) models expert diagnostic reasoning as retrieval of compiled "illness scripts" rather than first-principles differential construction. Each script bundles three components: **enabling conditions** (the context that makes a diagnosis plausible — epidemiology, risk factors, setting), **fault** (the underlying pathophysiological process), and **consequences** (the clinical findings that follow). Novices reason forward from findings through pathophysiology to diagnosis, one step at a time. Experts reason by matching a presentation against pre-compiled scripts almost instantly, only falling back to stepwise reasoning when no script fits well — the hallmark of encountering a genuinely novel or atypical case. This module trains the *compression* from stepwise to script-based reasoning deliberately, rather than leaving it to accumulate as an unexamined by-product of repetition.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Orient the AI and establish the script-building contract

### Step 15.0: Session Setup & Script Framing

**Prompt:**
```text
#VibeRounds You are a clinical reasoning partner helping me build illness
scripts rather than step-by-step differentials. An illness script has
three parts: enabling conditions (the context that makes this diagnosis
plausible — who gets it, when, where), fault (the underlying process), and
consequences (the findings that follow from the fault). When I describe a
condition or case, do not walk me through it stepwise. Instead, present a
case stripped to a small number of enabling conditions and ask me to name
the script — diagnosis, fault, and expected consequences — as a single
fast judgement, not a reasoned-out chain. Only slow down to stepwise
reasoning if I cannot match a script at all. Confirm you understand the
distinction before we begin.
```

> [!NOTE]
> **Application Note:** Run once per script-building session. This step exists specifically to stop the AI from defaulting to Module 1's stepwise Socratic pattern — script acquisition and stepwise differential-building are different skills and the prompt must say so explicitly, or most LLMs default to walking the learner through reasoning one clue at a time regardless of what is asked.

---

## Phase 2 · Execution — Build, stress-test, and discriminate scripts

### Step 15.1: Enabling-Conditions-Only Script Trigger

**Prompt:**
```text
#VibeRounds Give me only the enabling conditions for a case — age,
context, risk factors, setting — with no symptoms or findings yet. Ask me
to name the script(s) this profile most readily activates: what diagnoses
come to mind immediately, before any clinical findings are given. Then
reveal the findings and ask whether they confirm, refine, or overturn the
script I activated.
```

> [!NOTE]
> **Application Note:** This is the core script-acquisition drill. It deliberately withholds findings to test whether the learner's pattern recognition fires from context alone — the way experienced clinicians often form a leading impression before the history is even finished. Compare to Module 1, Step 1.0, which withholds the *answer*; this step withholds the *findings* instead, testing a different and earlier stage of reasoning.

### Step 15.2: Full-Script Articulation

**Prompt:**
```text
#VibeRounds Present me with a brief case. Ask me to state the full script
in three parts, in order: (1) enabling conditions — why this patient, why
now; (2) fault — the underlying process in one or two sentences; (3)
consequences — the findings I would expect, stated before I am told what
was actually found. Then compare my predicted consequences to the actual
case findings and tell me which part of my script — enabling conditions,
fault, or consequences — was weakest.
```

> [!NOTE]
> **Application Note:** Identifying *which component* of the script is weak is more diagnostically useful for the learner than an overall right/wrong judgement — a learner who gets the fault right but predicts the wrong consequences has a different gap than one who never activated the right script at all.

### Step 15.3: Script Discrimination — Near-Miss Pairs

**Prompt:**
```text
#VibeRounds Give me two conditions whose scripts are commonly confused —
similar enabling conditions or overlapping consequences but a different
fault. Present a single case that could plausibly trigger either script.
Ask me to state which script I activate first, then ask: what is the one
enabling condition or consequence that would most efficiently discriminate
between the two? Only after I answer, tell me the actual discriminating
feature.
```

> [!NOTE]
> **Application Note:** This is the highest-value drill in the module. Expert clinical reasoning is less about generating long differentials and more about efficiently discriminating between a small number of activated scripts — this step trains that discrimination directly rather than leaving it to emerge from volume of exposure.

### Step 15.4: Atypical Presentation — Script Mismatch Recognition

**Prompt:**
```text
#VibeRounds Present me with a case where the findings partially match a
common script but one or two key features don't fit. Ask me first: does
this match a script I know well, or does something not fit? If something
doesn't fit, ask me to name specifically what is inconsistent before
offering an alternative or modified script. Affirm explicitly if I
correctly recognise a mismatch rather than forcing the case into a
familiar script.
```

> [!NOTE]
> **Application Note:** This step trains the single most safety-critical script-based skill: noticing when no script fits well enough, which is precisely the trigger point where expert reasoning is supposed to fall back to slower, stepwise analysis (see [Module 1](Module-01-Socratic-Clinical-Reasoning.md)). A learner who forces every case into the nearest familiar script — rather than noticing the mismatch — is exhibiting the premature-closure risk named in [Framework D, 2a](Framework-D-Critical-Awareness-Framework.md).

### Step 15.5: Script Speed Drill

**Prompt:**
```text
#VibeRounds Run a rapid-fire script drill. Give me five short case vignettes
in sequence — enabling conditions and consequences only, no working shown.
For each, ask me to name the script (diagnosis + one-line fault) in a
single fast response, no deliberation. After all five, go back through and
ask me to justify any I am uncertain about, and tell me which ones were
genuine pattern recognition versus which were lucky or shallow guesses.
```

> [!NOTE]
> **Application Note:** Deliberately time-pressured and shallow on the first pass — this mirrors how scripts are actually deployed clinically (fast, low-effort, parallel) before being checked. The follow-up justification pass distinguishes real script compilation from superficial pattern-matching, which matters because the two can look identical in a single fast answer.

---

## Phase 3 · Closure / Review — Consolidate scripts and audit the limits of pattern recognition

### Step 15.6: Script Library Consolidation

**Prompt:**
```text
#VibeRounds Based on this session, help me write out the script(s) we built
today in a compact, reusable form: enabling conditions / fault /
consequences, three lines each. Then tell me: which existing script in my
library is this new one most likely to be confused with in future, and what
is the one discriminating feature I should anchor on to avoid that
confusion later.
```

> [!NOTE]
> **Application Note:** Writing the script down in this compressed form is the consolidation step that turns a single session's pattern recognition into something retrievable later — without it, the discrimination work from Step 15.3 tends not to persist.

### Step 15.7: Script vs. Stepwise — Reasoning Mode Debrief

**Prompt:**
```text
#VibeRounds Looking back at this session, identify the moments where I
correctly used fast script recognition versus the moments where I should
have — but didn't — fall back to slower stepwise reasoning because no
script fit well. For each moment of premature script-matching, name what
cue I overlooked that should have triggered the fallback.
```

> [!NOTE]
> **Application Note:** This is the script-theory analogue of [Module 1, Step 1.8](Module-01-Socratic-Clinical-Reasoning.md) (Missed Diagnosis Debrief) — but the failure mode being audited is different. Module 1 audits *what diagnosis was missed*; this step audits *which reasoning mode was wrongly chosen*, which is the more fundamental skill at the expert end of training.

### Step 15.8: Critical Awareness — Limits of Pattern-Based Reasoning

**Prompt:**
```text
#VibeRounds Apply a critical awareness lens to script-based reasoning
specifically: (1) What is the risk of relying on compiled scripts when a
presentation is genuinely atypical or from an underrepresented population
not well reflected in the scripts I have built? (2) How would over-reliance
on fast script-matching differ from the automation-bias risk of over-relying
on AI output? (3) What is the single best safeguard against script-based
reasoning producing fast, confident, wrong answers? Be honest but
constructive.
```

> [!NOTE]
> **Application Note:** Script-based reasoning trades the slow-but-thorough failure modes of novice reasoning for a new failure mode of its own — fast, confident pattern-matching that fails silently on atypical or underrepresented presentations. This step deliberately extends [Framework D](Framework-D-Critical-Awareness-Framework.md)'s bias taxonomy to a risk that is specific to expert-level reasoning rather than novice reasoning, and should not be skipped simply because the learner has progressed past Module 1.

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](Framework-A-Humanistic-Persona.md) (persona language throughout; Trait 5 — Calibrated Difficulty Framing — applies directly to the Module 1 → Module 15 progression)
- [Framework D — Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) (Step 15.8; extends Domain 1 and Domain 2 to expert-level pattern-recognition risk)
- [Module 1 — Socratic Clinical Reasoning](Module-01-Socratic-Clinical-Reasoning.md) (prerequisite stepwise reasoning; Step 15.0 contract deliberately diverges from Module 1's stepwise pattern)
- [Module 8 — Socratic-Mode Design Specification](Module-08-Socratic-Mode-Design-Specification.md) (criterion 7, adaptive difficulty — script acquisition is the natural advanced-learner endpoint of that progression)

---

## Navigation

**Previous:** [← Module 14 — Global Health & Resource-Constrained Clinical Reasoning](Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.md)

This is currently the final module. **Up next:** browse the [Supplementary Frameworks](README.md) or [Reference Material](README.md).

[← Back to README](README.md)
