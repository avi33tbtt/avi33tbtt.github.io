# Module 36 — The Bayesian Probability / Likelihood Ratio Engine

**Objective:** Build the habit of updating diagnostic probability estimates explicitly and sequentially as new findings emerge — using pre-test probability, likelihood ratios, and Bayes' theorem as a structured thinking scaffold, not just a statistical exercise.

**Indication:** Use when a learner treats all abnormal findings as equally confirmatory; when a diagnosis is being held or dismissed on gestalt rather than reasoned probability; or as deliberate practice for calibrating clinical intuition against formal probabilistic reasoning.

> This module does not require numerical precision. Its goal is *directional calibration* — training the learner to ask "does this finding make the diagnosis more or less likely, by how much, and compared to what?" The mental habit of sequential Bayesian updating is the skill; the numbers are the scaffold.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Establish the probabilistic frame

### Step 25.0: Session Setup — Enter Bayesian Mode

**Prompt:**

```
#VibeRounds You are a clinical reasoning partner helping me think in
probabilities, not certainties. For this case, your role is to guide
me through explicit pre-test probability estimation, likelihood ratio
application, and post-test probability updating — one finding at a
time. You will not accept "likely" or "unlikely" as answers. You
will ask me to assign a rough probability (as a percentage or a
ratio) to each diagnosis at each step, and to state the direction
and approximate magnitude of change each new finding produces.
You are not testing my statistics — you are training my
probabilistic reasoning habit. Confirm your role and ask me to
present the case.
```

> [!NOTE] **Application Note:** Forcing percentage estimates, even rough ones, is the core mechanism of this module. A learner who says "PE is likely" and a learner who says "PE is 40% — elevated but not dominant" are reasoning at fundamentally different levels of precision. The second learner will make a different, better-calibrated workup decision.

---

## Phase 2 · Execution — Sequential probability updating

### Step 25.1: Pre-Test Probability Anchoring

**Prompt:**

```
#VibeRounds Before I share any investigation results, ask me to
estimate the pre-test probability of my top three differential
diagnoses based solely on the history and demographics of this
patient. For each diagnosis, ask me: (1) What population base-rate
am I starting from? (2) What features of this specific patient
shift me above or below that base rate? (3) What is my best
estimate as a percentage? Record these as my Baseline Probability
Estimates before any test results are applied.
```

### Step 25.2: Finding-by-Finding Likelihood Ratio Application

**Prompt:**

```
#VibeRounds I will now reveal clinical findings one at a time.
For each finding, ask me: (1) Does this finding increase or
decrease the probability of each of my top diagnoses, and in
which direction — and by roughly how much? (2) What is the
approximate likelihood ratio of this finding for my leading
diagnosis — is it a strong test (LR >5 or <0.2), a moderate
test (LR 2–5 or 0.2–0.5), or a weak test (LR near 1)?
(3) After applying this finding, what is my updated probability
estimate for each diagnosis? Run this loop for each finding
sequentially. Do not reveal the next finding until I have
updated my estimates for the current one.
```

### Step 25.3: The Threshold Decision Points

**Prompt:**

```
#VibeRounds For my leading diagnosis, ask me to identify:
(1) My treatment threshold — the probability above which I would
begin treatment even without further investigation; (2) My
test threshold — the probability below which the diagnosis is
so unlikely that further testing is not warranted; (3) My
current estimated probability relative to those thresholds —
am I in the "test" zone, the "treat" zone, or the "watchful
waiting" zone? Require me to justify each threshold with
reference to the consequences of missing the diagnosis versus
the harms of unnecessary treatment.
```

### Step 25.4: The High-LR Hunt

**Prompt:**

```
#VibeRounds Based on my current probability estimates, ask me to
identify: what single investigation or clinical finding, if
positive, would most efficiently push me above my treatment
threshold for my leading diagnosis? This is the finding with
the highest positive likelihood ratio that I have not yet
obtained. Then ask: what single investigation, if negative,
would most efficiently rule out my leading diagnosis? This is
the finding with the lowest negative likelihood ratio available
to me. These are the two highest-yield next steps in this
workup.
```

### Step 25.5: Competing Hypothesis Pressure Test

**Prompt:**

```
#VibeRounds Ask me to apply the same probability-updating process
to my second-ranked diagnosis. Ask: after applying all the
same findings in this case, what is my current probability
estimate for the second diagnosis? Then ask: is there any
single finding in this case that, under a different clinical
context, would swap the rank order of my top two diagnoses?
What does that finding's context-dependence tell me about
the robustness of my current leading diagnosis?
```

---

## Phase 3 · Closure / Review — Calibration and habit extraction

### Step 25.6: Calibration Debrief

**Prompt:**

```
#VibeRounds Review my probability estimates across this session.
Ask me: (1) At which step did my probability update most sharply —
and was that update driven by a high-LR finding or by a
gestalt shift? (2) Is there any finding in this case I treated
as highly diagnostic that, on reflection, has a likelihood
ratio close to 1? (3) What would a well-calibrated Bayesian
clinician have done differently in this workup, and why?
```

### Step 25.7: Intuition-Probability Alignment Check

**Prompt:**

```
#VibeRounds Ask me to compare my final probability-derived
working diagnosis with my original gut-feel diagnosis from
the start of the case. Ask: (1) Did the probabilistic
reasoning confirm or contradict my intuition? (2) If it
confirmed it, was my intuition tracking the high-LR findings
implicitly — and if so, which ones? (3) If it contradicted
it, what feature of the presentation caused my intuition
to misfire? This step is about building a bridge between
System 1 and System 2 clinical reasoning, not choosing
between them.
```

---

## Related Frameworks

- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Steps 25.3, 25.4 target Evaluate and Create levels)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step 25.6 calibration debrief)
- [Module 24 — Red Herring / Signal-to-Noise Drill](Module-24-Red-Herring-Signal-to-Noise-Drill.md) (pre-requisite: signal identification before probability weighting)
- [Module 12 — Differential Diagnosis Deepdive](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html) (use to build the differential before entering Bayesian mode)

---

## Navigation

**Previous:** [← Module 24 — Red Herring / Signal-to-Noise Drill](Module-24-Red-Herring-Signal-to-Noise-Drill.md) **Next:** [Module 26 — High-Value Care Auditor →](Module-26-High-Value-Care-Auditor.md)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
