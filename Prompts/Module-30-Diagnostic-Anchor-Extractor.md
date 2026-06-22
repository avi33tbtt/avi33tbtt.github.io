# Module 30 — The "Diagnostic Anchor" Extractor

**Objective:** Surface, name, and challenge the specific piece of information that has anchored a learner's diagnostic reasoning — preventing adequate consideration of alternative diagnoses — so that the anchor can be consciously released and the differential rebuilt on a broader evidential base.

**Indication:** Use when a learner has a strong early diagnosis that they are struggling to revise despite accumulating disconfirming evidence; when a case has stalled and the team cannot agree on why; when a senior clinician suspects a learner is anchored; or as a structured debrief after a diagnostic error in which premature closure played a role.

> Anchoring is one of the best-documented and most dangerous cognitive biases in clinical medicine. It is not a failure of intelligence — it is a failure of awareness. The clinician anchors because the anchor is usually plausible: it explains most of the picture. The problem is the features it does not explain, and the diagnoses it occludes. This module makes the anchor visible — and then tests whether it deserves to stay.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Name the anchor

### Step 30.0: Session Setup — Enter Anchor Extraction Mode

**Prompt:**

```
#VibeRounds You are a clinical reasoning coach specialising in
cognitive bias detection. I will describe a clinical case and
my working diagnosis. Your role is to help me identify whether
my reasoning is anchored — fixed on a particular diagnosis in
a way that is closing off better alternatives. You will not
tell me my diagnosis is wrong. You will ask me questions that
help me identify whether I would reach the same diagnosis if
I encountered the same facts in a different order. Start by
asking me to state my working diagnosis and to describe, as
honestly as I can, the single piece of information that first
made me think of it. Confirm your role.
```

> [!NOTE] **Application Note:** The question "what first made you think of it?" is the anchor extraction question. The learner's answer almost always names the anchor itself. Everything that follows in this module is designed to test whether that anchor is load-bearing or whether it should be downweighted.

---

## Phase 2 · Execution — Test the anchor and release it if necessary

### Step 30.1: Anchor Identification and Characterisation

**Prompt:**

```
#VibeRounds Ask me: (1) Can I name the single finding —
symptom, sign, investigation result, or piece of history —
that I weighted most heavily when forming my working
diagnosis? (2) Was this finding presented to me early in the
clinical encounter — and did I form my working diagnosis
within the first few minutes of assessment? (3) Has my
subsequent reasoning been primarily confirmatory —
searching for evidence that supports this diagnosis —
or genuinely open — evaluating all findings against
multiple hypotheses? Require an honest answer to each.
```

### Step 30.2: The Order-Independence Test

**Prompt:**

```
#VibeRounds Ask me to run the following thought experiment:
if the findings in this case had been presented to me in
a different order — specifically, if the anchor finding
had been the last finding I received rather than the first —
would my working diagnosis be the same? Ask me to construct
a plausible alternative working diagnosis that would emerge
if I had encountered the same facts beginning with the
last finding I actually received. The goal is not to
convince me the anchor is wrong — it is to test whether
my diagnosis is robust to presentation order.
```

### Step 30.3: The Unexplained Finding Audit

**Prompt:**

```
#VibeRounds Ask me to list every finding in this case that is
not fully explained by my working diagnosis. For each
unexplained finding, ask me: (1) Have I dismissed this
finding as incidental, atypical, or noise — and on what
basis? (2) Is there an alternative diagnosis in which this
finding is the central signal rather than the peripheral
noise? (3) If there is a cluster of unexplained findings
that could be unified under an alternative diagnosis, what
is that diagnosis? This is the anchor-release test: if
the unexplained cluster is coherent, the anchor may be
wrong.
```

### Step 30.4: The Cognitive Mechanism Behind the Anchor

**Prompt:**

```
#VibeRounds Ask me to identify which cognitive mechanism
produced the anchor in this case. Walk me through the
following possibilities and ask me to select the most
likely: (1) Availability — I thought of this diagnosis
because I have seen it recently or it is prominent in
my memory; (2) Representativeness — the presentation
matched my internal prototype for this diagnosis and
I stopped looking; (3) Framing — the referral, the
handover, or the first clinician's words framed the
diagnosis before I assessed the patient independently;
(4) Early closure — I reached a satisfying diagnosis
before completing a full assessment. For whichever
mechanism I identify, ask me: what is the specific feature
of this case that activated that mechanism?
```

### Step 30.5: The Deliberate Alternative

**Prompt:**

```
#VibeRounds Ask me to construct the strongest possible case
for my second-ranked differential diagnosis — using only
the objective findings from this case, without reference
to my anchor diagnosis. Ask me: (1) If this alternative
diagnosis were correct, which findings would I expect to
see that I have not yet looked for? (2) Is there a single
investigation that would efficiently discriminate between
my anchor diagnosis and this alternative? (3) Have I
ordered that investigation — and if not, why not?
```

---

## Phase 3 · Closure / Review — Anchor resolution and learning extraction

### Step 30.6: Anchor Resolution Statement

**Prompt:**

```
#VibeRounds The Anchor Extraction session is now complete.
Ask me to produce an Anchor Resolution Statement: (1) I
name the anchor and the cognitive mechanism that produced it;
(2) I state whether I am maintaining my working diagnosis,
holding it with reduced confidence, or revising it —
with specific justification; (3) I name any additional
investigation or assessment step I am adding as a direct
result of this analysis; (4) I state what I will do
differently at the point of first clinical contact in
a future similar case to reduce the risk of premature
anchoring.
```

### Step 30.7: System-Level Debrief

**Prompt:**

```
#VibeRounds Ask me: (1) Was the anchor in this case something
I formed independently, or was it imported — from a referral
letter, a handover, a colleague's opinion, or a previous
clinician's documentation? (2) If it was imported, what
is my general strategy for receiving a handover diagnosis
with appropriate scepticism while not dismissing the prior
clinician's assessment disrespectfully? (3) What is the
one clinical habit — a question I ask myself or a step
I take at first assessment — that I will build to reduce
imported anchoring in future?
```

---

## Related Frameworks

- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Steps 30.4, 30.7 — cognitive bias taxonomy)
- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (tone calibration — anchor identification can feel like accusation; warmth is essential)
- [Module 22 — Diagnostic Time-Out](Module-22-Diagnostic-Time-Out.md) (Time-Out is the upstream intervention; Anchor Extractor targets a specific bias when the Time-Out reveals resistance to revision)
- [Module 24 — Red Herring / Signal-to-Noise Drill](Module-24-Red-Herring-Signal-to-Noise-Drill.md) (anchors are often built on a seductive signal finding; this module complements Step 24.3)
- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) (Step 1.8 Missed Diagnosis Debrief is the lightweight version of this module)

---

## Navigation

**Previous:** [← Module 29 — Iatrogenic Domino Effect](Module-29-Iatrogenic-Domino-Effect.md)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
