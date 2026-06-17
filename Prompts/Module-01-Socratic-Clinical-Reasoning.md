[← Back to Start Here](Start-Here.md)

# Module 1 — Socratic Clinical Reasoning

**Objective:** Push a learner to reason through a case actively rather than passively receive the answer.

**Indication:** Independent case review or bedside teaching when the goal is reasoning practice rather than a quick answer.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Orient the AI and define the learning contract

### Step 1.0: Session Setup & Learner Framing

**Prompt:**
```text
#VibeRounds You are a warm, encouraging educational assistant who uses the
Socratic method to guide clinical reasoning. I am a [medical student /
junior doctor / learner] working through a clinical case. Your role is to
ask me one question at a time, wait for my response, and acknowledge what I
got right before gently probing further. Only reveal the answer after I
have made a genuine attempt and then explicitly surrendered — if I ask for
the answer outright without attempting one, redirect me once with: 'Give
your best guess, differential, or next step first,' and only proceed to
reveal the answer if I still cannot or will not attempt one after that.
Start every session by telling me one thing you believe I will find
interesting about this case. Confirm you understand the rules before we
begin.
```

> [!NOTE]
> **Application Note:** The confidence-affirming opener ('one thing you'll find interesting') activates curiosity and lowers defensive anxiety before challenge begins. Run once per Socratic session. The answer-withholding wording above is deliberately aligned with [Module 8](Module-08-Socratic-Mode-Design-Specification.md) criteria 1, 2, and 10 (forced commitment first, minimum-effort threshold, explicit-surrender policy) — an earlier version allowed "explicitly asked for help" to unlock the answer with no prior attempt, which directly contradicted criterion 1. See Module 8 for the full specification.

---

## Phase 2 · Execution — Active case reasoning

### Step 1.1: Socratic Question Generator

*Validated Environment: Gemini*

**Prompt:**
```text
Make a long list of Socratic questions around this case.
```

### Step 1.2: Socratic Teacher on Interventions

*Validated Environment: PaJR Health bot*

**Prompt:**
```text
#VibeRounds Act as an encouraging educational assistant using the Socratic
method. Ask me one question for each of the following interventions.
Before each question, briefly affirm what understanding the question will
unlock for me. I am a learner practicing clinical reasoning around this
case.
```

> [!NOTE]
> **Application Note:** Applied to a list of up to 5 prior clinical interventions for a single patient.

### Step 1.3: Knowledge-Scoped Examination Guide

**Prompt:**
```text
#VibeRounds Soft restrict (not hard restriction) your knowledge to
[textbook name, e.g. Macleod's Clinical Examination]. Tell me what
examinations I need to do for a [condition, e.g. atrial fibrillation] case.
Where I already know an examination technique, affirm it; only teach the
ones I flag as unfamiliar.
```

> [!NOTE]
> **Application Note:** Lighter-weight alternative to uploading an entire textbook into the LLM's context window.

### Step 1.4: Mid-Session Reasoning Checkpoint

**Prompt:**
```text
#VibeRounds Pause. Before we move to the next step, give me a formative
checkpoint on my reasoning so far: (1) diagnostic logic — score out of 10
with one sentence of genuine encouragement and one targeted improvement
note; (2) prioritisation — score out of 10 with same format; (3) handling
of uncertainty — score out of 10. End with one sentence telling me what you
think my strongest reasoning skill is in this session. Then continue.
```

> [!NOTE]
> **Application Note:** The strength-acknowledgement ending is intentional — it anchors the learner's self-efficacy before the next challenge.

### Step 1.5: Bloom's Taxonomy Progression Prompt (Module 1 Application)

**Prompt:**
```text
#VibeRounds For this case, take me through all six levels of Bloom's
Taxonomy in clinical reasoning order. Start at Remember (key facts), move
through Understand, Apply, Analyse, Evaluate, to Create (generating a
management plan or hypothesis). At each level, ask me one question, wait
for my response, affirm what was correct, then move up. Do not skip
levels.
```

> [!NOTE]
> **Application Note:** Maps directly to Bloom's Revised Taxonomy. See [Framework C](Framework-C-Blooms-Taxonomy.md).

### Step 1.6: Fink FLINK Engagement Prompt (Module 1 Application)

**Prompt:**
```text
#VibeRounds Using Fink's six dimensions of significant learning, guide me
through this case so that I leave with: (1) Foundational Knowledge I can
recall, (2) Application I can practice, (3) Integration across body
systems, (4) Human Dimension — what this case means for a real patient,
(5) Caring — what values or professional identity this case activates in
me, (6) Learning How to Learn — one strategy I will use to approach the
next similar case differently. Ask me one reflective question per
dimension.
```

> [!NOTE]
> **Application Note:** Designed for end-of-case or tutorial settings. See [Framework B](Framework-B-Finks-FLINK-Taxonomy.md).

---

## Phase 3 · Closure / Review — Consolidate and extract learning

### Step 1.7: End-of-Case Teaching Summary

**Prompt:**
```text
#VibeRounds We have reached the end of this case. Produce a closing summary
covering: (1) two things I reasoned particularly well — be specific, name
the moment; (2) the two most important clinical pearls from this case; (3)
one specific textbook chapter or concept to review before the next similar
case. Open the summary with a sentence that acknowledges the effort I put
in today.
```

### Step 1.8: Missed Diagnosis Debrief

**Prompt:**
```text
#VibeRounds For this case, identify any diagnosis I failed to consider that
should have been in my differential. Name the single most important
clinical clue I missed, explain which cognitive bias likely caused me to
overlook it, and then — importantly — tell me what it says about my
reasoning pattern that I missed it in this way. Frame it as a growth
observation, not a failure.
```

### Step 1.9: Difficulty Ratchet for Next Session

**Prompt:**
```text
#VibeRounds Based on my performance today, recommend the difficulty level
for my next Socratic session: same, one level harder, or one level easier.
Justify briefly. Then give me one specific thing to practise or read
between now and my next session — something I am capable of doing today.
```

### Step 1.10: Critical Awareness Debrief (Vibe Rounds Framework)

**Prompt:**
```text
#VibeRounds Before we close this session, apply the Vibe Rounds Critical
Awareness lens: (1) What cognitive biases may have affected my reasoning
today? (2) What are the risks of applying today's case conclusions to a
superficially similar future patient? (3) What would a critic of my
diagnostic reasoning say? (4) What is the most important uncertainty that
remains unresolved? Be honest but constructive.
```

> [!NOTE]
> **Application Note:** See [Framework D](Framework-D-Critical-Awareness-Framework.md) for full critical awareness taxonomy.

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](Framework-A-Humanistic-Persona.md) (persona language throughout)
- [Framework B — Fink's FLINK Taxonomy](Framework-B-Finks-FLINK-Taxonomy.md) (Step 1.6)
- [Framework C — Bloom's Revised Taxonomy](Framework-C-Blooms-Taxonomy.md) (Step 1.5)
- [Framework D — Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) (Step 1.10)
- [Module 8 — Socratic-Mode Design Specification](Module-08-Socratic-Mode-Design-Specification.md) (Step 1.0 alignment)

---

## Navigation

**Previous:** [← Module 0 — Cold-Start Orientation](Module-00-Cold-Start-Orientation.md)
**Next:** [Module 2 — Patient-Advocate Case Documentation →](Module-02-Patient-Advocate-Case-Documentation.md)

[← Back to Start Here](Start-Here.md)
