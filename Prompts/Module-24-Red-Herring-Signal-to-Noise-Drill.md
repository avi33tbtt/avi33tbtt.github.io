# Module 24 — Red Herring / Signal-to-Noise Drill

**Objective:** Train a learner to discriminate between clinically meaningful findings (signal) and incidental, misleading, or contextually irrelevant findings (noise) in a complex case — and to resist the pull of compelling but diagnostically unhelpful data.

**Indication:** Use when a case contains multiple abnormal findings of uncertain relevance; when a learner is chasing an impressive or dramatic finding at the expense of a more mundane but correct diagnosis; or as deliberate practice for trainees preparing for clinical examinations or complex ward cases.

> The red herring problem is not a failure of knowledge — it is a failure of weighting. Clinicians with more knowledge are, paradoxically, sometimes more susceptible: they can construct a plausible narrative around any finding. This module builds the habit of asking not "what could this mean?" but "what does this actually change?"

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Frame the noise environment

### Step 24.0: Session Setup — Establish the Signal-Noise Contract

**Prompt:**

```
#VibeRounds You are a clinical reasoning coach running a Signal-to-Noise
Drill. I will present you with a clinical case containing a mix of
findings — some central to the diagnosis, some incidental, and some
deliberately misleading. Your role is not to solve the case for me,
but to challenge me on every finding I emphasise: ask me to justify
why I am treating it as signal rather than noise. You will use the
phrase "Why does that change your thinking?" frequently. You will
not validate my reasoning unless I have explicitly distinguished
the finding's sensitivity, specificity, or causal relevance from
its surface-level abnormality. Begin by asking me to present the
case findings, then confirm your role.
```

> [!NOTE] **Application Note:** The phrase "Why does that change your thinking?" is the core probe of this module. It forces the learner to move from "this finding is abnormal" — a recall task — to "this finding shifts my probability estimate in this direction for this reason" — an analysis task. Bloom Level 4.

---

## Phase 2 · Execution — Signal-noise discrimination training

### Step 24.1: Full Finding Inventory and First-Pass Sort

**Prompt:**

```
#VibeRounds Ask me to list every clinical finding in this case —
symptoms, signs, investigation results, and history features — in any
order. Then ask me to attempt a first-pass sort: place each finding
into one of three bins: (A) signal — I believe this finding is
directly relevant to the working diagnosis; (B) noise — I believe
this finding is incidental or unrelated; (C) uncertain — I am not
sure how to weight this finding. Do not correct me yet — just
capture my initial sorting.
```

### Step 24.2: Challenge Round — Defending Signal Choices

**Prompt:**

```
#VibeRounds Take the findings I placed in the Signal bin. For each
one, challenge me with the following questions in sequence:
(1) What is the positive predictive value of this finding for
my working diagnosis in a patient with this demographic profile?
(2) If this finding were absent, would my diagnosis change —
and if not, why is it signal rather than supportive noise?
(3) Could this finding be explained by a diagnosis other than
my working one? Do not let me answer in generalities — require
specificity.
```

### Step 24.3: The Seductive Abnormality Test

**Prompt:**

```
#VibeRounds Identify the single most dramatic, unusual, or visually
striking finding in this case — the one most likely to capture
clinical attention. Ask me: (1) Is this finding causally upstream,
downstream, or incidental to the primary diagnosis? (2) If I had
not seen this finding, would my diagnostic reasoning have been more
or less accurate? (3) Is there a documented cognitive bias that
describes the tendency to over-weight this type of finding, and
can I name it? Force me to answer each before moving on.
```

### Step 24.4: The Noise-to-Signal Reversal

**Prompt:**

```
#VibeRounds Take the two findings I placed in the Noise bin.
Ask me: is there any clinical scenario — a different patient age,
comorbidity, or presentation context — in which either of these
findings would become the most important signal in the case?
If yes, ask me to describe that scenario precisely. This step
is not about reversing my initial sort — it is about building
context-dependence awareness for findings I have been trained
to dismiss.
```

### Step 24.5: The Final Weighted Differential

**Prompt:**

```
#VibeRounds Based on the signal-noise work we have done, ask me
to reconstruct my differential diagnosis using only the findings
I have confirmed as signal. Compare this signal-only differential
to my original differential before the drill. Ask me: (1) Did
the signal-only differential change my leading diagnosis?
(2) Which finding, if removed, most destabilises the working
diagnosis? (3) What is the minimum viable finding set that
still supports the working diagnosis at a clinically acceptable
probability?
```

---

## Phase 3 · Closure / Review — Consolidate noise-resistance skills

### Step 24.6: Pattern and Bias Debrief

**Prompt:**

```
#VibeRounds Review my performance in this Signal-to-Noise Drill.
Identify: (1) the finding I most consistently over-weighted and
the likely cognitive mechanism behind that tendency; (2) the
finding I under-weighted that a senior clinician would have
prioritised, and why; (3) a one-sentence rule of thumb I can
carry forward to guard against the same over-weighting pattern
in future cases.
```

### Step 24.7: Transfer Question

**Prompt:**

```
#VibeRounds Give me one short scenario — different disease, different
organ system — in which the same signal-noise discrimination skill
I practised today would be the most important clinical reasoning
move. Ask me to apply the skill to that scenario in two to three
sentences, without full workup. This is a transfer check, not a
new case session.
```

---

## Related Frameworks

- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Steps 24.2, 24.5 target Analyse and Evaluate levels)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step 24.3 bias naming)
- [Module 22 — Diagnostic Time-Out](Module-22-Diagnostic-Time-Out.md) (complementary — Time-Out challenges assumptions; this module challenges weighting)
- [Module 31 — Diagnostic Anchor Extractor](Module-31-Diagnostic-Anchor-Extractor.md) (use after this module to identify which signal finding became an anchor)

---

## Navigation

**Previous:** [← Module 23 — Clinical Pre-Mortem](Module-23-Clinical-Pre-Mortem.md) **Next:** [Module 25 — Bayesian Probability / Likelihood Ratio Engine →](Module-25-Bayesian-Probability-Likelihood-Ratio-Engine.md)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
