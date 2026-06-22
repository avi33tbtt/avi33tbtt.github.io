# Module 28 — First-Principles Pathophysiology Mapping

**Objective:** Reconstruct the mechanistic chain linking a patient's underlying pathology to their clinical findings — from molecular or cellular disruption, through organ dysfunction, to the symptoms and signs that brought them to clinical attention — without relying on memorised associations.

**Indication:** Use when a learner can name a diagnosis but cannot explain it mechanistically; when a clinical finding does not fit the expected pattern and the learner cannot reason about why; when preparing for clinical examinations that require mechanistic explanation; or when a case has an unusual or atypical feature that needs a pathophysiological explanation before management can proceed.

> Pattern recognition is fast and powerful, but it is fragile when a case deviates from the prototype. First-principles pathophysiology is the foundation of robust clinical reasoning: a clinician who understands the mechanism can reason about any presentation — including ones they have never seen — because they understand what the disease is doing to the body, not just what it looks like on a typical day.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Frame the mechanistic task

### Step 28.0: Session Setup — Enter Pathophysiology Mode

**Prompt:**

```
#VibeRounds You are a clinical reasoning partner helping me
build a first-principles pathophysiology map for this case.
Your role is not to give me the mechanism — it is to ask me
questions that force me to construct the mechanism myself,
step by step, from the underlying pathology to the bedside
presentation. You will ask "How?" and "Why?" far more often
than you provide answers. You will not accept memorised
statements like "it causes sodium retention" — you will
ask me to explain the mechanism behind the mechanism. Start
by asking me to state the diagnosis and the first upstream
event in the pathological cascade. Confirm your role.
```

> [!NOTE] **Application Note:** The deliberate refusal to accept surface-level mechanistic answers (e.g. "it causes fluid retention") in favour of deeper explanation (e.g. "what activates RAAS in this context, and through which receptor?") is the core pedagogical move of this module. It targets Bloom Level 2 (Understand) but forces the learner to demonstrate genuine understanding rather than paraphrase.

---

## Phase 2 · Execution — Mechanistic chain construction

### Step 28.1: Upstream Origin — The Initiating Event

**Prompt:**

```
#VibeRounds Ask me to identify the single initiating event
or lesion in this disease — the most upstream point in
the pathological cascade. Then ask: (1) At what level does
this initiating event occur — molecular, cellular, tissue,
organ, or systemic? (2) What is the normal function of
the structure or process being disrupted? (3) How does
the disruption of that normal function produce the first
downstream consequence? Require a mechanistic answer —
not a description of the clinical result.
```

### Step 28.2: Cascade Mapping — Downstream Chain

**Prompt:**

```
#VibeRounds Now map the pathological cascade forward from the
initiating event. Ask me to trace the mechanism step by step,
naming: (1) the physiological compensatory response, if any,
activated by the disruption — and whether that response
helps or worsens the situation in this specific context;
(2) the point at which compensation fails and the patient
enters a decompensated state; (3) the mechanism by which
each major symptom and sign in this patient's presentation
is produced. For each symptom and sign, require a mechanistic
link back to the cascade — not a correlation.
```

### Step 28.3: The Atypical Feature Explanation

**Prompt:**

```
#VibeRounds Identify any finding in this case that is atypical
for the classic presentation of this diagnosis. Ask me to
explain it mechanistically: (1) Does this atypical finding
represent a variant in the pathophysiological cascade —
and if so, at which step? (2) Does it represent a
complicating co-pathology that is modifying the primary
cascade? (3) Does it represent a physiological compensation
that has produced an unexpected downstream effect? Do not
allow me to dismiss the atypical finding as "just an unusual
presentation" — require a mechanism.
```

### Step 28.4: Treatment-Mechanism Alignment

**Prompt:**

```
#VibeRounds For each major treatment in my management plan,
ask me to map it onto the pathophysiological cascade: at
which step in the cascade does this treatment intervene,
and through what mechanism? Then ask: (1) Is there a step
in the cascade that is not targeted by my current management
plan — and if so, is that gap intentional or an oversight?
(2) Is there any treatment in my plan that could worsen
a downstream branch of the cascade — for example, by
blocking a compensatory response rather than the pathological
driver?
```

### Step 28.5: The Two-Way Bridge — Basic Science to Bedside

**Prompt:**

```
#VibeRounds Ask me to identify one basic-science concept —
from physiology, biochemistry, or pharmacology — that, once
understood, makes the entire pathophysiology of this case
easier to reason about. Then ask me to demonstrate that
understanding by predicting: given the mechanism we have
mapped, what would happen to this patient clinically if we
(a) removed one of the current treatments, and (b) added
a specific physiological stressor such as a new infection,
fluid challenge, or medication?
```

---

## Phase 3 · Closure / Review — Map consolidation and transfer

### Step 28.6: Pathophysiology Map Summary

**Prompt:**

```
#VibeRounds Produce a structured Pathophysiology Map for this
case in the following format: (1) Initiating event; (2) Primary
cascade — list each step in order; (3) Compensatory responses
— list each and state whether helpful or harmful in this case;
(4) Decompensation point — where and why; (5) Clinical
manifestations — each linked to a specific cascade step;
(6) Treatment-to-mechanism alignment — each treatment mapped
to the cascade step it targets.
```

### Step 28.7: Transfer and Generalisation

**Prompt:**

```
#VibeRounds Ask me: (1) Which step in this pathophysiological
cascade is shared with another common condition I have
encountered — and does understanding the mechanism here
help me reason about that condition too? (2) If this same
pathophysiological cascade occurred in a patient with a
different co-morbidity (name one), at which step would
the cascade diverge or intensify, and why? (3) What is
the single basic-science concept from this case I will
take forward to help me reason about the next unfamiliar
presentation I encounter?
```

---

## Related Frameworks

- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (this module ascends all six levels — Step 28.5 reaches Create)
- [Module 16 — Basic Science ↔ Clinical Integration](https://avi33tbtt.github.io/Prompts/Module-16-Bidirectional-Basic-Science-Clinical-Integration.html) (complementary bidirectional translation module)
- [Module 15 — Illness Script Acquisition](https://avi33tbtt.github.io/Prompts/Module-15-Illness-Script-Acquisition.html) (illness scripts are the pattern-recognition complement to first-principles reasoning)
- [Module 29 — Iatrogenic Domino Effect](Module-29-Iatrogenic-Domino-Effect.md) (Step 28.4 treatment-mechanism alignment links directly to cross-comorbidity consequences)

---

## Navigation

**Previous:** [← Module 27 — The "Why Now?" Precipitant Hunter](Module-27-Why-Now-Precipitant-Hunter.md) **Next:** [Module 29 — Iatrogenic Domino Effect →](Module-29-Iatrogenic-Domino-Effect.md)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
