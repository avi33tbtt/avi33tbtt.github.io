[← Back to Start Here](Start-Here.md)

# Module 8 — Socratic-Mode Design Specification

**Objective:** A quality-improvement specification for authoring Socratic-mode prompts, expanded after early testing showed underperformance in Gemini Live.

**Indication:** Apply when authoring or revising any new Socratic-style prompt for [Module 1](Module-01-Socratic-Clinical-Reasoning.md) or any #VibeRounds session.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Pre-authoring specification review

### Step 8.0: Spec Activation

**Prompt:**
```text
#VibeRounds I am about to author a new Socratic-mode prompt. Before I write
it, review the Vibe Rounds Socratic-Mode Design Specification with me
point by point. For each criterion, I will tell you my design choice and
you will flag gaps or weaknesses. Begin with criterion 1.
```

---

## Phase 2 · Execution — The 12-point specification

### Original 10 Criteria (Validated)

1. **Forced commitment first:** Learner must answer before hints unlock.
2. **Minimum effort threshold:** 'idk' or 2-word replies trigger: 'Give your best guess, differential, or next step.'
3. **10-second rule / delayed rescue:** The AI pauses and encourages thinking before revealing answers.
4. **Tiered hints:** Hint 1 (framework), Hint 2 (narrowed direction), Hint 3 (partial answer), Final teaching summary.
5. **Effort-weighted assistance:** More thoughtful responses earn deeper teaching.
6. **Reasoning grading:** Grade logic, prioritisation, and uncertainty — not only correctness.
7. **Adaptive difficulty:** Beginner gets supportive scaffolding; advanced learner gets aggressive Socratic questioning.
8. **Role calibration:** The AI explicitly adopts the appropriate learning relationship — peer study partner, near-peer tutor, or senior-guided discussion — depending on selected rigour. No licensed clinical persona.
9. **Reflection before reveal:** 'Why do you think that?', 'What could be life-threatening here?', 'What are you possibly missing?'
10. **Answer-withholding policy:** Full answer only after an attempt, reasoning, revision, or explicit surrender.

### Added Criteria (Humanistic Expansion)

11. **Confidence-affirming acknowledgement:** Every Socratic exchange must include at least one genuine, specific affirmation of what the learner got right or reasoned well — before any challenge or correction. Generic praise ('Good!') does not count; the affirmation must name the specific reasoning move. *Rationale: challenge without affirmation triggers defensive cognition and inhibits the learning state.*
12. **Strength-forward closure:** Every Socratic session must end by naming the learner's strongest reasoning quality from that session — not just listing what to improve. This anchors self-efficacy and creates a positive re-engagement drive for the next session.

> [!NOTE]
> Criteria 11 and 12 correspond directly to Traits 1 and 2 of [Framework A](Framework-A-Humanistic-Persona.md).

---

## Phase 3 · Closure / Review — Prompt quality assurance

### Step 8.1: Prompt Peer Review

**Prompt:**
```text
#VibeRounds Score this Socratic prompt against the 12-point Vibe Rounds
Design Specification — one criterion at a time, Pass / Partial / Fail.
Overall quality score out of 12. Top two revisions required. [paste
prompt]
```

### Step 8.2: Regression Test on Low-Effort Failure Mode

**Prompt:**
```text
#VibeRounds Simulate a learner replying 'idk' to every question in this
Socratic prompt for 3 turns. Show exactly how the prompt handles
low-effort responses. Flag any turn where the minimum effort threshold is
not enforced. [paste prompt]
```

> [!NOTE]
> **Application Note:** Tests the validated failure mode from Gemini Live testing.

### Step 8.3: Difficulty Calibration Check

**Prompt:**
```text
#VibeRounds Run this Socratic prompt twice in simulation: once with a
Year-1 medical student, once with a senior resident. Show the first 2
turns of each side by side. Assess whether adaptive difficulty produces
meaningfully different outputs, or whether both simulations look
identical — which indicates a calibration failure. [paste prompt]
```

### Step 8.4: Humanistic Criteria Audit

**Prompt:**
```text
#VibeRounds Specifically test criteria 11 and 12 of the Vibe Rounds Design
Specification against this prompt: (11) Does the prompt produce a
specific, named affirmation of the learner's correct reasoning — not
generic praise? (12) Does the prompt produce a strength-forward closure
that names the learner's best reasoning quality? Simulate the final
exchange of a session with a learner who has performed averagely — not
brilliantly, not poorly — and show me what the prompt generates. [paste
prompt]
```

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](Framework-A-Humanistic-Persona.md) (criteria 11–12, Step 8.4)
- [Framework D — Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) (Domain 2: Risks of AI-Assisted Clinical Education)

---

## Navigation

**Previous:** [← Module 7 — Longitudinal & Cross-Case Learning](Module-07-Longitudinal-and-Cross-Case-Learning.md)

This is the final module. **Up next:** browse the [Supplementary Frameworks](Start-Here.md#-supplementary-frameworks) or [Reference Material](Start-Here.md#-reference-material).

[← Back to Start Here](Start-Here.md)
