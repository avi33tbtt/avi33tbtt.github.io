[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module 27 — Clinical Cognition Loop

**Objective:** Build the discipline of structured, iterative clinical reasoning by running every case through a defined five-stage cognition loop: **Observe → Cluster → Hypothesize → Test → Update**. Where other modules in this stack target specific reasoning skills (differential generation in [Module 12](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html), illness scripts in [Module 15](https://avi33tbtt.github.io/Prompts/Module-15-Illness-Script-Acquisition.html), causal networks in [Module 18](https://avi33tbtt.github.io/Prompts/Module-18-Causal-vs-Probabilistic-Network-Reasoning.html)), Module 23 provides the *overarching loop architecture* within which all those skills are deployed — a repeatable reasoning engine rather than a one-pass diagnostic pass. The loop is explicitly iterative: after each Update, a new cycle begins, allowing clinical reasoning to evolve as findings accumulate.

**Indication:** Any case where the learner needs to reason from raw clinical data to an actionable working diagnosis or management plan, particularly: cases with multiple active problems and complex multimorbidity, cases where the initial working diagnosis has been challenged by new data, cases where the team has lost track of the central reasoning thread, or any structured teaching session where the goal is to demonstrate what systematic clinical reasoning looks like, step by step.

> [!NOTE] **Framework context.** The Observe → Cluster → Hypothesize → Test → Update loop is a formalisation of the hypothetico-deductive model of clinical reasoning — the dominant cognitive model in the literature on expert diagnostic reasoning (Elstein, Shulman & Sprafka 1978; Schmidt, Norman & Boshuizen 1990). Module 23 makes that model explicit and teachable, creating a scaffold that learners can internalise and later deploy without the prompt. The goal is not that learners always use this module — it is that learners who have used it enough eventually stop needing it because the loop has become habitual.

> [!IMPORTANT] **Complexity and evidence output — scope boundary.** Steps 23.8 and 23.9 (clinical complexities and evidence search) produce outputs that are educational observations, not clinical recommendations. Any complexity identified, any evidence cited, or any uncertainty flagged by this module must be reviewed by a supervising clinician before influencing patient management. The AI cannot verify that evidence retrieved is current, correctly applied, or complete — see [Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html) for the appropriate evidence-retrieval discipline.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## The Cognition Loop at a Glance

```
OBSERVE → CLUSTER → HYPOTHESIZE → TEST → UPDATE → (repeat)
   |           |           |          |        |
All raw      Related    Explanatory  Focused  Revise
findings    finding     hypotheses   tests    probabilities
collected   grouped                 planned   and re-enter
```

Each loop cycle produces a progressively refined working diagnosis. The loop terminates not when uncertainty disappears — clinical certainty is rare — but when the working diagnosis is precise enough to act on, and the residual uncertainty is named and managed.

---

## Phase 1 · Initiation — Establish the reasoning contract and prime the loop

### Step 23.0: Session Setup

**Prompt:**

```
#VibeRounds You are a clinical cognition-loop facilitator. Your role is
to guide me through a structured five-stage reasoning cycle — Observe,
Cluster, Hypothesize, Test, Update — applied to a real case I will
describe. You will move through each stage in sequence, prompting me with
targeted questions at each stage rather than producing the answer for me.
When I have completed one loop cycle (through Update), you will help me
decide whether to re-enter the loop for a second cycle with the updated
picture, or whether the reasoning has reached a working conclusion. You
are not producing a diagnosis — you are building my reasoning process.
Confirm you understand this contract, then ask me to describe the case.
```

> [!NOTE] **Application Note:** The explicit instruction to prompt rather than produce is the module's core pedagogical commitment — if the AI drives the reasoning, the learner is observing a demonstration rather than building a skill. Run this contract step even in solo practice sessions; the stated commitment changes how both the learner and the AI engage with the subsequent steps.

### Step 23.1: Case Framing & Problem Representation

**Prompt:**

```
#VibeRounds Before we begin the cognition loop, help me build a one-
sentence problem representation — a compressed summary of this patient
that captures the three to five most clinically meaningful features:
demographic anchor (age, sex, relevant background), the central symptom
or sign (precise, qualified), the time course, and any key modifying
context (prior diagnoses, recent exposures, relevant social factors).
Ask me the components one at a time if I have not provided them. The
problem representation is not a diagnosis — it is the lens through which
the loop will run.
```

> [!NOTE] **Application Note:** This step mirrors the semantic qualifier work in [Module 17](https://avi33tbtt.github.io/Prompts/Module-17-Semantic-Qualifiers-Problem-Representation.html) and is the necessary foundation for the cognition loop — a poorly framed problem representation propagates error through every subsequent stage. A learner who finds this step difficult should complete Module 17 before re-attempting Module 23.

---

## Phase 2 · Execution — The Five-Stage Cognition Loop

### Step 23.2: OBSERVE — Collect All Findings

**Prompt:**

```
#VibeRounds Stage 1 of the loop: OBSERVE. Help me collect every clinical
finding in this case — positive and negative. Ask me to list: symptoms
reported by the patient (with onset, duration, character, severity,
modifying factors), signs elicited on examination (present and absent),
available investigation results (including normal results — absence of
abnormality is a finding), and any contextual findings (medication
history, social history, vaccination status, travel, occupational
exposures). Do not cluster, explain, or rank yet — this stage is a
complete, uncurated collection pass. Push me to be exhaustive: ask "what
else?" after each category until I cannot add anything further.
```

> [!NOTE] **Application Note:** The instruction to include negative findings is clinically critical — the absence of fever in a septic-appearing patient, the absence of a murmur in suspected endocarditis, the absence of lymphadenopathy in a lymphoma workup — these are as diagnostically informative as positive findings, and novice reasoners systematically underweight them. Making the Observe stage explicitly exhaustive counteracts the selective attention that produces anchoring bias (cf. [Module 22 — Bias Auditing](https://avi33tbtt.github.io/Prompts/Module-22-Bias-Auditing.html)).

### Step 23.3: CLUSTER — Group Related Findings

**Prompt:**

```
#VibeRounds Stage 2 of the loop: CLUSTER. Take the full list of findings
and help me group them into clinically coherent clusters — sets of
findings that are likely to share a common underlying mechanism, anatomy,
or pathophysiology. Ask me: which findings naturally belong together?
Which findings are unexplained by any cluster I have named so far? Are
there findings that could belong to more than one cluster — and if so,
what does that ambiguity suggest? Do not assign diagnoses to clusters yet
— just name what the pattern looks like. Label each cluster descriptively
(e.g. "inflammatory cluster", "fluid-overload cluster", "autonomic
cluster") rather than diagnostically.
```

> [!NOTE] **Application Note:** Descriptive rather than diagnostic cluster labels are specified because diagnostic labels at the clustering stage pre-commit the learner to a hypothesis before the formal hypothesis-generation step, reproducing premature closure through the back door. "Inflammatory cluster" is a pattern; "sepsis" is a hypothesis — the distinction matters for the loop's integrity.

### Step 23.4: HYPOTHESIZE — Generate Explanatory Hypotheses

**Prompt:**

```
#VibeRounds Stage 3 of the loop: HYPOTHESIZE. For each cluster, ask me
to generate at least two explanatory hypotheses — diagnoses or
pathophysiological states that would account for the findings in that
cluster. Then ask me to identify: Is there a single unifying hypothesis
that accounts for all clusters simultaneously (a "one disease" frame)?
If so, what is it, and how well does it fit? Are there findings that
resist the unifying hypothesis and suggest a second concurrent process?
After I have generated hypotheses myself, push me to name one hypothesis
per cluster that I have NOT yet considered — the one I most wanted to
leave off the list.
```

> [!NOTE] **Application Note:** The final instruction — to name the hypothesis most wanted to leave off the list — is the module's most important de-biasing move. Learners reliably omit hypotheses that are uncomfortable (rare but serious diagnoses), socially charged (conditions with stigma), or cognitively demanding (complex multisystem disorders). Naming the omitted hypothesis does not mean adding it to the working differential — it means examining whether the omission was evidence-based or bias-driven.

### Step 23.5: TEST — Plan Focused Investigations

**Prompt:**

```
#VibeRounds Stage 4 of the loop: TEST. For each hypothesis on the
working differential, ask me to name the single most discriminating
investigation — the test that, if positive, would most increase my
confidence in that hypothesis, and if negative, would most reduce it.
Then ask me: which of these tests are already available from data I have
already collected? Which require ordering or requesting? For each test
I plan to order, ask me to state the specific result threshold that would
move the hypothesis up, the result that would move it down, and the
result that would remove it from the differential entirely. Do not allow
me to list tests without precommitting to what the result will mean.
```

> [!NOTE] **Application Note:** The precommitment instruction — stating in advance what result would change the hypothesis and in which direction — is the key anti-anchoring move at the testing stage. A learner who plans tests without precommitting to result thresholds tends to interpret results post-hoc in whichever direction confirms the existing working diagnosis. This step is a direct application of the "prediction before observation" discipline from Bayesian clinical reasoning pedagogy.

### Step 23.6: UPDATE — Revise Probabilities and Re-Enter the Loop

**Prompt:**

```
#VibeRounds Stage 5 of the loop: UPDATE. For each investigation result
now available, ask me to revise my probability estimates for each
hypothesis — up, down, or unchanged — and to state explicitly which
finding drove the revision and by how much. Then ask me: does any
hypothesis now dominate the differential clearly enough to act on? If
yes, what is the action, and what residual uncertainty needs to be named
and managed? If no, which hypothesis cluster remains most uncertain, and
what is the minimum additional information that would resolve it? Based
on this update, help me decide: does the reasoning require a second loop
cycle, or has it reached a working conclusion?
```

> [!NOTE] **Application Note:** The explicit decision between "re-enter loop" and "working conclusion" is what distinguishes iterative reasoning from a one-pass diagnostic pass. In complex cases, two or three loop cycles are expected and represent the reasoning working correctly — not the learner failing to reach a quick answer. The module is designed to make multi-cycle reasoning feel like a feature, not a failure.

---

## Phase 3 · Closure — Extended Analysis Outputs

The following steps are run after the cognition loop has reached a working conclusion. They extend the loop output into the dimensions of clinical complexity, evidence, and knowledge synthesis.

### Step 23.7: Complexity Mapping — Clinical Complexities in This Case

**Prompt:**

```
#VibeRounds Now that the loop has reached a working conclusion, map the
clinical complexities that made this case non-trivial. Ask me to identify
and name: (1) diagnostic complexity — features that made the diagnosis
non-straightforward (atypical presentation, overlapping syndromes,
competing explanations); (2) therapeutic complexity — factors that
complicate management (comorbidities, contraindications, drug
interactions, patient preferences, resource constraints); (3) prognostic
complexity — factors that make the outcome trajectory uncertain beyond
the usual range; and (4) communication complexity — features of this
case that are particularly difficult to explain to the patient or family,
or to communicate accurately in a handover. For each complexity, ask me
to name whether it was resolved by the loop, still open, or requires a
decision under acknowledged uncertainty.
```

> [!NOTE] **Application Note:** Complexity mapping is the step that converts a closed reasoning loop into an open clinical case — most cases in real practice have at least one unresolved complexity that requires ongoing attention. Naming those complexities explicitly rather than treating them as noise is the mark of expert clinical thinking. This step connects to [Module 14 — Resource-Constrained Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.html) for contexts where resource limitation is itself a complexity category.

### Step 23.8: Evidence Search Approach — For the Case and the Complexities

**Prompt:**

```
#VibeRounds Now design an evidence search approach for this case. Ask me
to do this in two parts. First, for the working diagnosis itself: what is
the key clinical question I need evidence to answer — diagnostic accuracy,
treatment efficacy, prognosis, or a combination? Frame this as a PICO
question (Patient/Population, Intervention, Comparison, Outcome). What
are the most appropriate evidence sources for this question type — a
systematic review, a clinical guideline, an RCT, a diagnostic accuracy
study, or a cohort study? Second, for each unresolved complexity
identified in Step 23.7: what is the specific evidence gap, what would
an ideal evidence source look like, and — if no high-quality evidence
exists — how should the clinical decision be made in its absence? Do not
search yet — this step designs the search strategy; [Module 21](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html) executes it.
```

> [!NOTE] **Application Note:** Separating search strategy design (this step) from search execution ([Module 21](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html)) is deliberate — a learner who designs the search question carefully before searching retrieves more relevant evidence and is better positioned to critically appraise what they find. The PICO framing at this step is directly compatible with Module 21's Step 21.1.

### Step 23.9: Evidence Output — Synthesised Findings for the Case and Complexity

**Prompt:**

```
#VibeRounds Based on the evidence search approach we designed in Step
23.8, help me produce a structured evidence output for this case. Ask me
to retrieve or recall the most relevant evidence for the working diagnosis
and for each complexity, then organise the output as follows: (1) For the
working diagnosis — the best available evidence for the diagnostic
approach, treatment, and prognosis, with evidence level noted (RCT,
guideline, cohort, expert opinion); (2) For each complexity — what the
evidence says, what it does not say, and what the clinical recommendation
is in the absence of high-quality evidence; (3) Evidence gaps — questions
this case raised for which no adequate evidence currently exists, flagged
explicitly as learning targets or future research questions. Cite sources
where available. Flag any output that is from AI memory rather than
verified retrieval — treat unverified AI recall as hypothesis-level, not
evidence-level.
```

> [!NOTE] **Application Note:** The instruction to flag AI-memory outputs as hypothesis-level rather than evidence-level is the module's hardest anti-hallucination boundary — the Observe → Cluster → Hypothesize → Test → Update loop is explicitly a reasoning framework, not a knowledge-retrieval system. Evidence synthesis at Step 23.9 is the point where the loop's output transitions from internal reasoning to external knowledge, and that transition must be made with the same verification discipline as [Module 21](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html).

### Step 23.10: Loop Debrief & Skill Transfer

**Prompt:**

```
#VibeRounds To close the session, debrief the loop itself — not just the
case. Ask me: At which of the five stages did my reasoning feel most
uncertain or effortful, and why? Was there a specific transition between
stages where the reasoning stalled — and what caused the stall? Did I
re-enter the loop, and if so, what new data triggered the second cycle?
Finally, ask me: which element of the Observe → Cluster → Hypothesize →
Test → Update structure, if I internalised it as a habit, would most
improve my reasoning on the next comparable case — and what is a
realistic way to practise that element before the next similar case
arrives?
```

> [!NOTE] **Application Note:** Debriefing the *process* rather than the *content* is what makes the loop transferable. A learner who can identify where their loop stalled — "I moved from Observe to Hypothesize without properly Clustering, which meant my hypotheses were driven by individual findings rather than patterns" — has extracted a skill lesson, not just a case lesson. This is the forward-transfer step.

---

## Cross-Module Connections

| Module | Connection |
|---|---|
| [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) | Module 1 uses Socratic questioning on a case; Module 23 provides the explicit loop architecture that underpins what Module 1 is doing implicitly |
| [Module 12 — Differential Diagnosis Deepdive](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html) | Module 23 Step 23.4 (Hypothesize) feeds into Module 12's deeper differential generation; use together for complex cases |
| [Module 15 — Illness Script Acquisition](https://avi33tbtt.github.io/Prompts/Module-15-Illness-Script-Acquisition.html) | Illness scripts are the cognitive structures populated by the Cluster and Hypothesize stages; Module 15 builds those structures explicitly |
| [Module 17 — Semantic Qualifiers & Problem Representation](https://avi33tbtt.github.io/Prompts/Module-17-Semantic-Qualifiers-Problem-Representation.html) | Module 23 Step 23.1 (Case Framing) uses the problem representation technique taught in Module 17 |
| [Module 18 — Causal vs. Probabilistic Network Reasoning](https://avi33tbtt.github.io/Prompts/Module-18-Causal-vs-Probabilistic-Network-Reasoning.html) | Module 23 Update stage (Step 23.6) applies Bayesian probability revision; Module 18 teaches the network reasoning that underpins it |
| [Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html) | Module 23 Step 23.8 designs the evidence search approach; Module 21 executes it with live verification discipline |
| [Module 22 — Bias Auditing](https://avi33tbtt.github.io/Prompts/Module-22-Bias-Auditing.html) | Module 23 runs the forward cognition loop; Module 22 audits that loop retrospectively — the natural pairing for a complete case debrief |

---

## Module Maturity

🟡 **In Progress** — Core loop steps (23.2–23.6) are complete and internally tested. The extended analysis outputs (Steps 23.7–23.9) are new and require live clerkship validation. The Complexity Mapping step (23.7) is the most conceptually novel component and benefits most from facilitator guidance in early use.

---

*Vibe Rounds Prompt Modules — Module 23.*
*Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*

[← Back to README](https://avi33tbtt.github.io/Prompts/)
