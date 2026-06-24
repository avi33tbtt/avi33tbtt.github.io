# Module DRM — Diagnostic Reasoning Map

**VibeRounds Prompt Modules · Dr. Avinash Kumar Gupta · June 2026**
`#VibeRounds — A Socratic AI Paradigm for Clinical Medicine`

[← Back to Prompt Directory](https://avi33tbtt.github.io/Prompts/Prompts.html)

---

> [!IMPORTANT] **Clinical Disclaimer**
> All AI-generated outputs from this module — including reasoning maps, ranked differentials, decision-point flags, and insight annotations — require independent clinical verification before being acted upon. This module is an educational reasoning tool, not a diagnostic system. Never enter outputs into a clinical record without review and endorsement by a licensed clinician.

---

## Objective

Construct a **visual and structured Diagnostic Reasoning Map (DRM)** for a clinical case — a step-by-step representation of the reasoning pathway from presenting complaint to working diagnosis, with explicit annotation of key decision points, cognitive branch-points, and embedded insights at each node.

The DRM is not a differential diagnosis list. It is a *map of how a clinician thinks* — surfacing where reasoning advances, where it stalls, where anchoring occurs, and where the case could have gone differently.

---

## Indication

Reach for this module when:

- A case is diagnostically complex, atypical, or took an unexpected turn
- A learner wants to reconstruct *how* a diagnosis was (or should have been) reached, not just *what* the diagnosis is
- A post-case debrief requires structured reflection on reasoning quality
- A supervisor wants to audit a trainee's clinical thought process
- A learner wants to practice moving from System 1 (pattern recognition) to System 2 (analytical) reasoning deliberately
- A case involves a missed, delayed, or revised diagnosis worth mapping

---

## Relationship to Other Modules

| Module | Relationship |
|---|---|
| **Module 1** (Socratic Clinical Reasoning) | DRM is the *map* of the reasoning that Module 1 interrogates |
| **Module 12** (Differential Diagnosis Deepdive) | Module 12 broadens the differential; DRM maps the *selection pathway* through it |
| **Module 20** (Naturalistic Decision Making) | NDM describes the expert's instinct; DRM makes that instinct explicit and auditable |
| **Module 28** (Diagnostic Time-Out) | Time-Out interrupts reasoning mid-stream; DRM reconstructs it retrospectively |
| **Module 30** (Diagnostic Anchor Extractor) | Anchor Extractor finds the bias; DRM shows *where in the map* it took hold |
| **Module 35** (Epistemic Certainty Mapping) | Certainty mapping annotates *confidence* at each DRM node |
| **Module 36** (Bayesian Engine) | Bayesian updates at each DRM decision point can be made explicit using Module 36 |
| **Framework D** (Critical Awareness) | Applies throughout — DRM surfaces reasoning errors for Framework D reflection |

---

## Lifecycle

| Phase | Steps | Purpose |
|---|---|---|
| **Initiation** | DRM.0 → DRM.1 | Orient the AI, load the case, define the map scope |
| **Execution** | DRM.2 → DRM.7 | Build the map layer by layer, annotate decision points and insights |
| **Closure / Review** | DRM.8 → DRM.9 | Consolidate, identify learning edges, set next-session difficulty |

---

## Key Concepts — Read Before Starting

### What is a Decision Point?
A **decision point** is any node in the reasoning map where the clinician could have taken more than one branch. It marks a fork in the diagnostic path. Decision points are not the same as "important findings" — a finding only becomes a decision point when it *changed, could have changed, or should have changed* the reasoning direction.

Decision points fall into four types:

| Type | Description | Example |
|---|---|---|
| **Pivotal** | A single finding that collapses the differential | Kernig's sign in a headache case |
| **Bifurcating** | A finding that splits the differential into two equally plausible branches | Fever + rash → infectious vs. autoimmune |
| **Closing** | A finding that rules out a previously live branch | Negative D-dimer in low-pretest-probability PE |
| **Missed** | A decision point the clinician did not recognise in real time | Overlooked travel history that would have shifted pre-test probability |

### What is an Insight?
An **insight** in a DRM is an annotated observation that explains *why* a decision point mattered — the pathophysiological, epidemiological, cognitive, or systems-level reason the case turned the way it did. Insights are not facts appended to findings; they are explanatory links between what was observed and what it means for the reasoning chain.

---

## Steps

---

### Phase 1 — Initiation

---

#### Step DRM.0 — AI Orientation & Contract

**Purpose:** Load the AI into its DRM educator role before any case content is shared.

**Prompt:**

```
You are a clinical reasoning educator operating within the Vibe Rounds Socratic AI Paradigm.

Your role in this session is to help me build a Diagnostic Reasoning Map (DRM) for a clinical case. A DRM is a structured, step-by-step map of the reasoning pathway from presenting complaint to working diagnosis — not a summary, not a differential list, but an explicit reconstruction of *how* the diagnosis was or should have been reached.

In this role you will:
1. Ask for the case before offering any analysis.
2. Build the map iteratively — one layer at a time — rather than producing a complete output at once.
3. At each node, identify whether a key decision point exists, classify it (Pivotal / Bifurcating / Closing / Missed), and annotate it with an explanatory insight.
4. Ask Socratic questions when my reasoning at a node is incomplete or too fast.
5. Never anchor to the final diagnosis prematurely — hold the map open until the evidence warrants closure.
6. Surface cognitive biases (anchoring, premature closure, availability) when they appear in the reasoning path.
7. At closure, identify the single highest-yield learning edge from the map — the one decision point whose earlier or better recognition would have most changed the case.

Confirm you understand this role and ask me to describe the case.
```

**Application Note:** Run this step at the start of every DRM session. If the AI has prior context from a previous module (e.g., Module 1 or Module 28), you may add: *"We have already explored this case via [module name]. Build the DRM using that prior reasoning as input, but reconstruct the map as if auditing the reasoning fresh."*

---

#### Step DRM.1 — Case Loading & Scope Definition

**Purpose:** Present the case and define the scope of the DRM (full case, a single phase, or a specific diagnostic branch).

**Prompt:**

```
Here is the case for the DRM session:

[Paste de-identified case narrative here — include: presenting complaint, timeline, key history, examination findings, investigations ordered and results, working diagnosis reached, and if relevant, the final or revised diagnosis.]

Before we begin mapping, I want to set the scope:
- Map scope: [Full case from symptom onset to final diagnosis / Only the initial assessment phase / Only the investigation-to-diagnosis phase / A specific branch of the differential I want to explore]
- Starting node: [Presenting complaint / First encounter / A specific finding or investigation]
- End node: [Working diagnosis / Final diagnosis / Point of diagnostic uncertainty still unresolved]

Ask me any clarifying questions about the case or scope before we begin building the map.
```

**Application Note:** Keep the scope tight for learning efficiency. A first DRM session on a complex case should map one phase only — expand in subsequent sessions. Use "Only the initial assessment phase" for cases where premature closure is suspected.

---

### Phase 2 — Execution

---

#### Step DRM.2 — Opening Node: Presenting Complaint Analysis

**Purpose:** Establish the map's first node — the presenting complaint — and surface what the complaint alone should and should not have triggered.

**Prompt:**

```
Let's build the first node of the DRM: the presenting complaint.

Node 1 — Presenting Complaint: [restate the chief complaint here]

For this node, I want you to:
1. List the *semantic qualifier set* for this complaint — the key descriptors (onset, duration, character, severity, modifiers, associated features) that were present and that should have shaped early pre-test probabilities.
2. Identify what the presenting complaint *alone* — before any history, examination, or investigation — should have activated in an experienced clinician's pattern library.
3. Flag any semantic qualifiers that were missing or not elicited at this stage that would have been decision-relevant.
4. Classify this node: does it contain a decision point? If yes, what type (Pivotal / Bifurcating / Closing / Missed)?

Do not proceed to the history yet. Hold at this node and ask me what I think the complaint alone activated before you give your analysis.
```

**Application Note:** This step is deliberately slow. Rushing past the presenting complaint is one of the most common sources of premature closure. The Socratic pause before AI analysis is mandatory — do not skip it.

---

#### Step DRM.3 — History Branch: Key History Decision Points

**Purpose:** Map the history-taking phase, identifying which historical features constituted decision points and annotating the insight at each.

**Prompt:**

```
Node 2 — History.

Here is the history that was obtained:
[Paste the relevant history — HPC, PMH, medications, allergies, family history, social history, travel, occupational exposures]

For the history node, I want the DRM to do the following:

1. **Map the history as a sequence of sub-nodes** — each significant historical feature gets its own sub-node (e.g., Node 2a: duration; Node 2b: prior episodes; Node 2c: travel history).

2. **At each sub-node**, classify whether it is a decision point (Pivotal / Bifurcating / Closing / Missed) and provide a one-sentence insight explaining *why* — linking the feature to its effect on the differential or pre-test probability.

3. **Identify the single most important piece of history** — the one that most changed (or most should have changed) the differential at this stage.

4. **Identify any history that was not obtained** but would have been decision-relevant at this node. Do not assume it was obtained if it is not in the case as presented.

5. Ask me a Socratic question about the history before providing your full analysis.
```

---

#### Step DRM.4 — Examination Branch: Physical Findings as Decision Points

**Purpose:** Map the examination findings, classifying each as a decision-point node and annotating the pathophysiological or probabilistic insight.

**Prompt:**

```
Node 3 — Physical Examination.

Examination findings:
[Paste the examination findings]

Build the examination layer of the DRM:

1. **Create sub-nodes for each key finding** — both positive and negative findings that were decision-relevant.

2. **For each positive finding**, classify the decision-point type and provide the insight: what does this finding do to the differential, and *why* — what is the pathophysiological or clinical reasoning basis?

3. **For each significant negative finding** (e.g., absence of a sign that was specifically sought), classify and annotate it. Negative findings are often under-annotated in reasoning maps — treat them with equal weight.

4. **Identify any examination finding that was listed but not followed up** — a finding that should have generated a branch in the reasoning but did not.

5. **Flag System 1 vs. System 2 moments**: at which examination nodes did pattern recognition (System 1) likely operate, and at which nodes was deliberate analysis (System 2) required?

Hold the map open — do not anchor to a diagnosis based on examination alone.
```

---

#### Step DRM.5 — Investigation Branch: Test Selection and Result Interpretation as Decision Points

**Purpose:** Map the investigation phase as a reasoning sequence — not just what was ordered, but *why* each investigation was a decision point, and how each result moved the map.

**Prompt:**

```
Node 4 — Investigations.

Investigations ordered and results:
[Paste investigations and results in the sequence they were ordered and received]

Build the investigation layer of the DRM:

1. **For each investigation ordered**, create a sub-node that answers:
   - Why was this test ordered at this point? (What diagnostic hypothesis was it testing?)
   - What was the pre-test probability of the condition being tested?
   - What result was required to meaningfully shift the probability (threshold thinking)?

2. **For each result received**, classify the decision-point type and annotate the insight:
   - Did this result open new branches, close existing ones, or confirm a working hypothesis?
   - Was the result interpreted correctly given the pre-test probability and likelihood ratios?

3. **Identify any test that was ordered but whose result was not acted upon** — a decision point that was generated but not followed.

4. **Identify any test that should have been ordered at this stage but was not** — a missing decision point.

5. **Bayesian annotation (optional)**: for the one most pivotal investigation result, walk me through how it updated the probability of the leading diagnosis using prior → likelihood ratio → posterior reasoning.
```

**Application Note:** For resource-constrained settings (see Module 14), add: *"Annotate which investigations would not have been available in a low-resource context, and describe how the DRM would have needed to rely more heavily on clinical reasoning without those results."*

---

#### Step DRM.6 — Synthesis Node: The Diagnostic Leap

**Purpose:** Map the moment of diagnostic synthesis — where the clinician moved from data collection to conclusion — and examine whether that leap was warranted.

**Prompt:**

```
Node 5 — Diagnostic Synthesis.

Working diagnosis reached: [state the working diagnosis]
At what point in the case was this conclusion reached? [describe the moment — after which finding or result]

This is the DRM's most critical node — the diagnostic leap. I want to examine it carefully:

1. **Reconstruct the synthesis**: which combination of findings, history features, and investigation results, taken together, justified the working diagnosis? List them explicitly.

2. **Classify the leap**:
   - Was this a *pattern-recognition closure* (System 1 — the constellation matched a known illness script)?
   - Was this an *analytical closure* (System 2 — the probability was calculated or explicitly reasoned)?
   - Was this a *premature closure* (the diagnosis was reached before all key branches were ruled out)?
   - Was this a *forced closure* (external pressure — time, resource, team expectation — drove the diagnosis before the evidence fully warranted it)?

3. **Map the alternatives that were open at the point of closure**: what diagnoses were still alive in the differential when the working diagnosis was confirmed? Were they appropriately ruled out, or were they abandoned without explicit closure?

4. **Identify the single insight that best explains the leap** — the key reasoning move that made the correct (or incorrect) diagnosis possible at this moment.
```

---

#### Step DRM.7 — Cognitive Bias Audit Layer

**Purpose:** Overlay the completed map with a cognitive bias scan — identifying where in the reasoning pathway known biases were operating.

**Prompt:**

```
We now have a near-complete DRM. Before we close, I want to overlay a cognitive bias audit on the map.

Working through each phase of the map (Complaint → History → Examination → Investigations → Synthesis):

1. **Anchoring bias**: was there a point where a finding or hypothesis established too early in the map began to over-constrain subsequent reasoning? Identify the anchor node.

2. **Availability bias**: were any diagnoses given disproportionate weight because of recent exposure, notable cases, or emotional salience rather than base rates? Identify the node where this occurred.

3. **Premature closure**: at which node did the differential collapse before the evidence warranted it?

4. **Framing effect**: was the case framed (by the referral, the history-giver, a team member's comment) in a way that biased the map from the first node?

5. **Commission bias** (over-testing) or **Omission bias** (under-testing): flag any investigation node where bias operated.

6. **Search satisficing**: was there a point where the clinician stopped looking once a plausible answer was found, even though the map still had open branches?

For each bias identified: state the node, name the bias, and give a one-sentence insight into how it shaped the reasoning from that point forward.
```

**Application Note:** This step is layered from Framework D (Critical Awareness). It is designed to be uncomfortable — the goal is not reassurance but calibration.

---

### Phase 3 — Closure / Review

---

#### Step DRM.8 — Map Consolidation & Full Pathway Output

**Purpose:** Produce the complete DRM as a single structured output — the full reasoning pathway with all annotated decision points and insights.

**Prompt:**

```
We have now built all layers of the DRM. Please produce the full consolidated map as a single structured output in the following format:

---
DIAGNOSTIC REASONING MAP — [Case identifier / presenting complaint]
Date: [today's date]
Learner: [optional]
Module: DRM — Diagnostic Reasoning Map

NODE 1 — Presenting Complaint
  Finding: [...]
  Decision Point: [Yes/No] — Type: [Pivotal / Bifurcating / Closing / Missed]
  Insight: [one sentence]

NODE 2 — History
  2a. [Feature]: Decision Point: [Type] — Insight: [...]
  2b. [Feature]: Decision Point: [Type] — Insight: [...]
  [continue for each sub-node]
  Missing history: [list any elicitation gaps identified]

NODE 3 — Examination
  3a. [Finding]: Decision Point: [Type] — Insight: [...]
  [continue]
  System 1 nodes: [list]
  System 2 nodes: [list]

NODE 4 — Investigations
  4a. [Test + result]: Decision Point: [Type] — Insight: [...]
  [continue]
  Unused results: [list any results not acted upon]
  Missing investigations: [list]

NODE 5 — Diagnostic Synthesis
  Closure type: [Pattern / Analytical / Premature / Forced]
  Open branches at closure: [list]
  Synthesis insight: [...]

BIAS AUDIT OVERLAY
  Anchoring: Node [X] — [one sentence]
  Availability: Node [X] — [one sentence]
  Premature closure: Node [X] — [one sentence]
  Framing: Node [X] — [one sentence]
  [other biases if identified]

HIGHEST-YIELD DECISION POINT
  Node: [...]
  Why: [two sentences — what was at stake here and what earlier/better recognition would have changed]
---

After producing this output, do not add commentary. Wait for my response.
```

---

#### Step DRM.9 — Closure: Learning Edge & Next-Session Calibration

**Purpose:** Consolidate the learning from this DRM session, identify the highest-yield learning edge, and calibrate the difficulty or focus of the next session.

**Prompt:**

```
Closure phase.

Based on the completed DRM, I want three things:

1. **The Learning Edge** — the single decision point or reasoning move in this case that, if I improve on it, will most advance my diagnostic accuracy across a broad range of future cases. Not the most dramatic finding, but the most *transferable* reasoning lesson.

2. **A Generalised Reasoning Principle** — distil the learning edge into a principle that applies beyond this case. Frame it as: "When [clinical scenario pattern], always [reasoning move], because [pathophysiological or probabilistic basis]."

3. **Next-Session Recommendation** — based on where this DRM revealed my reasoning gaps, suggest:
   - A case category that would specifically train the identified weakness
   - A companion module from the Vibe Rounds stack that addresses this gap
   - A difficulty calibration: should the next case be at the same complexity level, more atypical, or more data-sparse?

Then ask me: "What will you do differently in your next clinical encounter because of this map?"

Do not answer that question for me. Hold the space for my reflection.
```

---

## Quick Reference — Decision Point Classification

| Type | Trigger | Reasoning Effect |
|---|---|---|
| **Pivotal** | Single finding collapses the differential | Narrows to 1–2 diagnoses |
| **Bifurcating** | Finding splits differential equally | Creates two live branches requiring further data |
| **Closing** | Finding rules out a previously live branch | Eliminates a diagnosis |
| **Missed** | A decision point not recognised in real time | Left the map on a biased or incomplete branch |

---

## Quick Reference — Cognitive Biases in the DRM

| Bias | Where it tends to appear in the DRM |
|---|---|
| Anchoring | Node 1–2 (first striking finding fixes the frame) |
| Availability | Node 2–3 (recent memorable case overweights pattern match) |
| Premature closure | Node 5 (diagnosis confirmed before alternatives ruled out) |
| Framing effect | Node 1 (referral or handover language shapes the map from the start) |
| Commission bias | Node 4 (over-investigation of the leading hypothesis) |
| Omission bias | Node 4 (under-investigation due to satisficing) |
| Search satisficing | Node 4–5 (search stops when first plausible answer is found) |
| Representation bias | Node 2–3 (atypical presentations dismissed because they don't fit the prototype) |

---

## Validated Environments

| Step | Tested On | Notes |
|---|---|---|
| DRM.0–DRM.9 | Claude Sonnet (claude.ai) | Full lifecycle tested on internal medicine cases (n=3) |
| DRM.5 (Bayesian annotation) | Claude Sonnet | Optional step; requires learner to specify prior probability |
| DRM.7 (Bias audit) | Claude Sonnet | Works best after Steps DRM.2–DRM.6 are complete in sequence |

---

## Module Status

🟡 **In Progress** — Core lifecycle (Steps DRM.0–DRM.9) is functional and ready for self-directed use. Bayesian annotation (Step DRM.5, optional) and multi-session map linking (cross-case DRM comparison) are under development.

---

## Known Limitations

- The DRM reconstructs reasoning *retrospectively* — it cannot capture the real-time cognitive state of the original clinician. The map reflects what the reasoning *should have* looked like, which may differ from what actually occurred.
- AI identification of cognitive biases is probabilistic and non-validated. Treat bias annotations as hypotheses for reflection, not confirmed diagnoses of reasoning error.
- The module is most useful when the learner has direct access to the original case and can self-report their real-time reasoning at each node. Third-party case analysis (mapping someone else's reasoning) is possible but lower fidelity.
- Complex multi-system cases may require splitting the DRM into phase-specific sub-maps across multiple sessions.

---

## Appendix — DRM in the VibeRounds Lifecycle

The DRM module is designed to sit **after** active case work and **before** the next case encounter:

```
[Case encounter or simulation]
        ↓
Module 1 — Socratic Reasoning (active case reasoning)
        ↓
Module 28 — Diagnostic Time-Out (mid-case interruption if needed)
        ↓
Module DRM — Diagnostic Reasoning Map (post-case retrospective)
        ↓
Module 32 — Clinical Cognition Loop (metacognitive review of the map)
        ↓
[Next case encounter — with identified learning edge applied]
```

---

*Vibe Rounds Prompt Modules — Module DRM.*
*Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*

[← Back to Prompt Directory](https://avi33tbtt.github.io/Prompts/Prompts.html)
