# Module 29 — Diagnostic Time-Out

**Objective:** Force a deliberate pause at a high-stakes decision point to surface assumptions, blind spots, and premature closures before a diagnostic or management commitment is made.

**Indication:** Use when a diagnosis feels "obvious," when a case has stalled without improvement, when the team is about to commit to an irreversible intervention, or when there is a nagging clinical unease that has not been articulated.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Declare the pause and frame the stakes

### Step 22.0: Session Setup — Calling the Time-Out

**Prompt:**

```
#VibeRounds You are a senior clinical reasoning partner. I am calling a
Diagnostic Time-Out on this case. Your role is not to reassure me — it is
to pressure-test my current working diagnosis and management plan. You will
ask structured, uncomfortable questions designed to surface anything I may
have anchored on prematurely, missed, or underweighted. You will not
accept vague answers. Begin by asking me to state, in one sentence, my
current working diagnosis and the single piece of evidence I am most
confident in. Confirm you understand your role before we begin.
```

> [!NOTE] **Application Note:** The Time-Out is borrowed from surgical safety culture and applied to diagnostic reasoning. It is most powerful when the learner — or team — already feels confident. Confidence is the highest-risk state in diagnosis. Run this module whenever a case feels "settled" but the patient has not improved as expected.

---

## Phase 2 · Execution — Structured interrogation of the working diagnosis

### Step 22.1: State-and-Challenge

**Prompt:**

```
#VibeRounds I will now state my working diagnosis and the top three pieces
of evidence supporting it. After I state each piece of evidence, challenge
it: ask me how I would rule it out as a false positive, and whether this
finding is specific or just compatible with my diagnosis. Push me to
distinguish between findings that support my diagnosis and findings that
merely do not contradict it.
```

### Step 22.2: The Deliberate Disconfirmation Search

**Prompt:**

```
#VibeRounds For my current working diagnosis, ask me three questions in
sequence: (1) What single finding, if present, would make this diagnosis
impossible — and have I looked for it? (2) What single investigation
result, if it came back unexpected, would force me to revise? (3) What
is the one thing I have not yet done in this workup that a cautious senior
would have done first? Wait for my answer to each before proceeding.
```

### Step 22.3: Alternative Hypothesis Generation

**Prompt:**

```
#VibeRounds Without referencing my current working diagnosis, generate the
three most plausible alternative diagnoses for this presentation using
only the objective findings I have shared. Then ask me: for each
alternative, what single investigation or examination finding would
most efficiently include or exclude it? Do not let me off the hook
with "low prior probability" — make me explain why each alternative
can be safely deprioritised given this specific patient's profile.
```

### Step 22.4: Premature Closure Audit

**Prompt:**

```
#VibeRounds Apply a premature closure audit to my reasoning. Ask me:
(1) At what point did I stop generating new hypotheses, and what happened
immediately before that moment? (2) Is there any symptom, sign, or result
in this case I have not yet explained within my working diagnosis?
(3) If I had heard this case presented by someone else and the working
diagnosis was different from my own, what would I have questioned?
Force me to answer all three before moving on.
```

### Step 22.5: The "What If I'm Wrong?" Scenario

**Prompt:**

```
#VibeRounds Ask me to run the following scenario: assume my working
diagnosis is incorrect. Walk me through, step by step, what the
consequence to this patient would be over the next 24 hours, 72 hours,
and one week if we proceed with the current management plan on a wrong
diagnosis. Then ask me: given those stakes, what is the minimum
additional safety net I should put in place right now before committing?
```

---

## Phase 3 · Closure / Review — Commit or revise

### Step 22.6: Post-Time-Out Decision Statement

**Prompt:**

```
#VibeRounds The Diagnostic Time-Out is now complete. Ask me to state:
(1) whether I am maintaining, modifying, or abandoning my working
diagnosis, and why; (2) what one additional action I am committing to
before the next review; (3) what I will use as my trip-wire — the
specific finding or time-point that, if reached without improvement,
will trigger a mandatory diagnostic re-evaluation. Record my answers
as a structured Post-Time-Out Decision Statement.
```

### Step 22.7: Bias and Heuristic Debrief

**Prompt:**

```
#VibeRounds Review the reasoning I displayed during this Time-Out session.
Name the two cognitive biases most likely to have influenced my original
working diagnosis — explain the mechanism of each in one sentence. Then
tell me: what is the one reasoning habit I should build before the next
similar case to reduce the risk of the same bias recurring?
```

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (tone calibration throughout)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Steps 22.4, 22.7)
- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) (complementary active-reasoning module)
- [Module 12 — Differential Diagnosis Deepdive](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html) (use after Time-Out if differential must be rebuilt)

---

## Navigation

**Previous:** [← Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html) **Next:** [Module 23 — Clinical Pre-Mortem →](Module-23-Clinical-Pre-Mortem.md)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
