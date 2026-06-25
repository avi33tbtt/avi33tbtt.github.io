# Clinical Cognition Deep Dive (Module CC)
### VibeRounds Prompt Modules — *by Dr. Avinash Kumar Gupta*

> **Module Status:** 🟢 Mature  
> **Module Type:** Meta-Pipeline Orchestrator  
> **Depends on:** Modules 0–48, Frameworks A–D  
> **Lifecycle:** Initiation → Profiling → Pipeline Assignment → Execution → Synthesis → Closure

---

> [!IMPORTANT] **Clinical Disclaimer**
> All outputs produced using this module are educational observations for a learner's self-directed reasoning. They are not clinical decisions. Any concern with real-patient implications must be raised with a supervising clinician before any action is taken. All case data pasted must be fully de-identified in accordance with your local law.

---

## What this module does

**Clinical Cognition Deep Dive (Module CC)** is a meta-pipeline orchestrator — it does not run a single prompt workflow, it *assembles and sequences a bespoke pipeline* of existing VibeRounds modules calibrated to your education level and the specific case at hand.

The result is a full-spectrum cognitive dissection of one clinical case: from first principles through Bayesian reasoning, bias audit, systems failure, evidence grounding, and synthesis — all at the depth appropriate for where you are in your training.

**What you get at the end:**

- A layered understanding of why this patient is sick *now*
- A calibrated differential with likelihood ratios
- A map of your own cognitive biases on this case
- A summary of what the evidence says and where the gaps are
- A synthesis statement you could use as a teaching case

---

## Objective

Run a complete clinical cognitive analysis of a single case by orchestrating a curated, level-appropriate sequence of VibeRounds modules — producing not just a diagnosis, but a deep understanding of *how* and *why* that diagnosis is reached, what could go wrong, and what a learner at your level should take away.

## Indication

Reach for Module CC when:

- You want to go beyond surface-level case discussion into genuine cognitive understanding
- You are preparing a complex case for teaching, grand rounds, or publication
- You want to audit your own reasoning on a case you found hard
- You are a supervisor building a structured learning session around a real case
- You want a single, comprehensive case analysis rather than running individual modules ad hoc

---

## Step CC.0 — Initiation: Education Level Profiling

**Run this step first, before any case is submitted.**

---

### Prompt CC.0.1 — Role Identification

Paste this prompt into your AI as the very first message in a new session:

```
You are the Clinical Cognition Deep Dive orchestrator — a meta-reasoning companion that assembles a bespoke analytical pipeline for a clinical case, calibrated to the learner's education level.

Before any case is submitted, you need to identify who I am. Ask me ONE question only:

"To calibrate your Clinical Cognition Deep Dive, please tell me your current role:

  A) Medical Student
  B) Resident / Registrar
  C) Consultant / Attending
  D) Researcher / Scientist

Reply with A, B, C, or D."

Do not ask anything else. Do not begin analysis. Wait for my single-letter reply.
```

---

### Prompt CC.0.2 — Pipeline Confirmation

After you reply with A, B, C, or D, paste this:

```
Based on my role, confirm:

1. My education level as I stated it (do not infer beyond what I said)
2. The pipeline you will run — list every module by number and name, in the exact sequence you will execute them, with a one-sentence rationale for each inclusion
3. The cognitive depth target for this session (what level of Bloom's Revised Taxonomy and which Fink dimensions you will prioritise)
4. One thing I should actively do as a learner while you run each stage (not just read — what mental work should I be doing?)

Then ask me to paste the case.
```

---

## Step CC.1 — Case Submission

### Prompt CC.1.1 — Case Input

```
Here is the case for the Clinical Cognition Deep Dive:

[PASTE DE-IDENTIFIED CASE HERE — include presenting complaint, history, examination findings, investigations, current management, and any available follow-up]

Confirm receipt, identify the two or three features of this case that make it cognitively interesting, and tell me which pipeline stage you will begin with. Do not begin the analysis yet — wait for my confirmation to proceed.
```

---

## Step CC.2 — Pipeline Execution

The pipeline runs sequentially. The AI will narrate each stage transition. You do not need to trigger individual modules manually — the orchestrator handles sequencing and prompts you between stages.

### Prompt CC.2.1 — Pipeline Start

```
Confirmed. Begin the pipeline now. Work through each module stage in sequence. Between each stage:

- Summarise what that stage revealed in 3–5 bullet points
- State explicitly what changed in your understanding of the case
- Ask me one Socratic question before proceeding to the next stage

Do not skip stages. Do not merge stages. If a stage produces nothing new for this case, say so explicitly rather than padding.
```

---

## Pipeline Assignment by Education Level

The orchestrator selects from the 56 modules using the logic below. These are the default pipelines; the AI may adjust sequence within a level based on case complexity.

---

### 🔵 Level A — Medical Student

**Cognitive Target:** Bloom's Levels 1–4 (Remember, Understand, Apply, Analyse) · Fink Dimensions: Foundational Knowledge + Application + Learning-How-to-Learn

**Pipeline (12 stages):**

| Stage | Module | Why included at this level |
|-------|--------|---------------------------|
| 1 | **M17** — Semantic Qualifiers & Problem Representation | Teaches the first clinical skill: turning a messy history into a precise one-liner |
| 2 | **M15** — Illness Script Acquisition | Builds the mental template for what this disease looks like across patients |
| 3 | **M16** — Basic Science ↔ Clinical Integration | Anchors the clinical picture in the pathophysiology you studied in pre-clinical years |
| 4 | **M1** — Socratic Clinical Reasoning | Forces active reasoning rather than passive receipt of the answer |
| 5 | **M12** — Differential Diagnosis Deepdive | Structures the differential from first principles with Socratic scaffolding |
| 6 | **M31** — First-Principles Pathophysiology Mapping | Maps how the disease mechanism produces each sign and symptom |
| 7 | **M33** — The "Why Now?" Precipitant Hunter | Adds temporal reasoning: why did this patient deteriorate today, not last week? |
| 8 | **M24** — Heuristic Analysis | Introduces cognitive shortcutting — what rules of thumb are being used and where they break |
| 9 | **M28** — Diagnostic Time-Out | Structures a deliberate pause to catch premature closure |
| 10 | **M37** — Red Herring / Signal-to-Noise Drill | Separates clinically meaningful findings from noise |
| 11 | **M13** — Medication Reconciliation & Polypharmacy Audit | Builds the drug-safety habit early |
| 12 | **M32** — Clinical Cognition Loop | Closes the loop: what did I think, what did I miss, what do I update? |

**Closure output:** A structured one-page case summary with illness script, top three differentials with likelihood ranking, and one learning objective for the next case.

---

### 🟡 Level B — Resident / Registrar

**Cognitive Target:** Bloom's Levels 3–5 (Apply, Analyse, Evaluate) · Fink Dimensions: Application + Integration + Human Dimension

**Pipeline (18 stages):**

| Stage | Module | Why included at this level |
|-------|--------|---------------------------|
| 1 | **M17** — Semantic Qualifiers & Problem Representation | Sharpens the problem representation before analysis begins |
| 2 | **M12** — Differential Diagnosis Deepdive | Structured differential with probabilistic ranking |
| 3 | **M36** — Bayesian Probability / Likelihood Ratio Engine | Quantifies how each finding updates the differential |
| 4 | **M18** — Causal vs. Probabilistic (Network) Reasoning | Distinguishes what *caused* this from what *predicts* this |
| 5 | **M33** — The "Why Now?" Precipitant Hunter | Time-locks the clinical deterioration |
| 6 | **M30** — Diagnostic Anchor Extractor | Identifies the cognitive anchor the team is stuck on |
| 7 | **M28** — Diagnostic Time-Out | Structured debiasing before committing to management |
| 8 | **M24** — Heuristic Analysis | Names the heuristics in use and where each is likely to fail |
| 9 | **M26** — Bias Auditing | Systematic scan for anchoring, availability, premature closure |
| 10 | **M20** — Naturalistic Decision Making (RPD Model) | Analyses expert pattern-recognition — what an attending would spot that a resident might not |
| 11 | **M35** — Epistemic Certainty Mapping & Calibration | Maps which conclusions are solid, which are guesses, and which are assumption chains |
| 12 | **M5** — Real-Time Case Review & Data Audit | Audits the data quality and flags what is missing or conflicting |
| 13 | **M13** — Medication Reconciliation & Polypharmacy Audit | Full drug-interaction and polypharmacy scan |
| 14 | **M29** — Iatrogenic Domino Effect | Traces any hospital-acquired complications and their downstream effects |
| 15 | **M34** — High-Value Care Auditor | Evaluates whether the workup and management are appropriately targeted |
| 16 | **M4** — Peer-Level Ward Round Preparation | Synthesises findings into a concise ward round presentation |
| 17 | **M42** — Clinical Pre-Mortem | Imagines what goes wrong if the current plan proceeds — what is the failure mode? |
| 18 | **M32** — Clinical Cognition Loop | Integrates all stages into a coherent cognitive narrative |

**Closure output:** A consultant-ready case summary with calibrated differential, bias audit, management justification with high-value care commentary, and pre-mortem failure map.

---

### 🔴 Level C — Consultant / Attending

**Cognitive Target:** Bloom's Levels 5–6 (Evaluate, Create) · Fink Dimensions: Integration + Caring + Human Dimension + Learning-How-to-Learn

**Pipeline (22 stages):**

| Stage | Module | Why included at this level |
|-------|--------|---------------------------|
| 1 | **M20** — Naturalistic Decision Making | Starts with pattern recognition — what expert intuition fires first |
| 2 | **M35** — Epistemic Certainty Mapping | Calibrates which elements of your certainty are evidence-based vs. experience-based |
| 3 | **M36** — Bayesian Probability / Likelihood Ratio Engine | Quantitative update model for the differential |
| 4 | **M18** — Causal vs. Probabilistic (Network) Reasoning | Builds the causal network across the case |
| 5 | **M22** — Nested Analysis | Identifies sub-problems nested within the presenting problem |
| 6 | **M23** — Counterfactual Analysis | Explores the paths not taken and their consequences |
| 7 | **M33** — The "Why Now?" Precipitant Hunter | Pins the precipitant with attending-level rigour |
| 8 | **M30** — Diagnostic Anchor Extractor | Audits the team's anchors — including the consultant's own |
| 9 | **M26** — Bias Auditing | Full bias inventory including systemic and institutional biases |
| 10 | **M28** — Diagnostic Time-Out | Structured reset before finalising diagnosis |
| 11 | **M37** — Red Herring / Signal-to-Noise Drill | Expert-level signal discrimination |
| 12 | **M38** — Poly-Crisis & Cascading Failure Simulator | Models what happens when multiple systems fail simultaneously |
| 13 | **M39** — Global Knowledge Network Diagnostic Matrix | Brings in international and cross-specialty knowledge frameworks |
| 14 | **M31** — First-Principles Pathophysiology Mapping | Builds the mechanistic map for teaching purposes |
| 15 | **M29** — Iatrogenic Domino Effect | Full iatrogenic chain analysis |
| 16 | **M34** — High-Value Care Auditor | Attending-level value and resource analysis |
| 17 | **M43** — Health Economics & Value-Based Care Alignment | Situates the case within institutional and health-system economics |
| 18 | **M42** — Clinical Pre-Mortem | Failure-mode and recovery planning |
| 19 | **M21** — Evidence Frontier Search | Where is the cutting edge of evidence on this case's key question? |
| 20 | **M46** — Evidence-Based Medicine Insights | Applies Sackett's EBM cycle to the management decisions |
| 21 | **M48** — Treatment Comparative Analysis & Prognosis Trajectory | Compares treatment options with evidence-informed prognosis modelling |
| 22 | **M32** — Clinical Cognition Loop | Full cognitive integration — what would you teach a resident from this case? |

**Closure output:** A teaching case ready for grand rounds, with full cognitive narrative, evidence grounding, counterfactual paths, pre-mortem, and a one-paragraph "what this case teaches about clinical cognition" statement.

---

### 🟣 Level D — Researcher / Scientist

**Cognitive Target:** Bloom's Level 6 (Create) · All six Fink Dimensions · Framework D (Critical Awareness) as primary lens

**Pipeline (24 stages):**

| Stage | Module | Why included at this level |
|-------|--------|---------------------------|
| 1 | **M35** — Epistemic Certainty Mapping | Begins with epistemological grounding: what do we actually know? |
| 2 | **M36** — Bayesian Probability / Likelihood Ratio Engine | Full probabilistic modelling of the diagnostic landscape |
| 3 | **M18** — Causal vs. Probabilistic (Network) Reasoning | Causal inference framing — DAG construction for the case |
| 4 | **M22** — Nested Analysis | Identifies the research-relevant sub-problems |
| 5 | **M23** — Counterfactual Analysis | Counterfactual causal analysis: what would have changed the outcome? |
| 6 | **M25** — Thematic Analysis | Extracts thematic patterns for qualitative depth |
| 7 | **M27** — Time-Series & Velocity Analyzer | Temporal dynamics of the clinical trajectory |
| 8 | **M6** — Registry-Level Analytics | Situates this case within a broader case registry |
| 9 | **M39** — Global Knowledge Network Diagnostic Matrix | Cross-system and cross-specialty knowledge synthesis |
| 10 | **M26** — Bias Auditing | Research-level bias audit including observer bias, selection bias, information bias |
| 11 | **M47** — EBM Adversarial Counterpart | Devil's advocate against the evidence base used to manage this case |
| 12 | **M45** — Clinical Genetics Adversarial Counterpart | Challenges genetic and genomic assumptions in the case |
| 13 | **M38** — Poly-Crisis & Cascading Failure Simulator | Complex systems modelling of the clinical trajectory |
| 14 | **M44** — Clinical Genetics Reasoning | Full genetic reasoning workup if relevant to the case |
| 15 | **M21** — Evidence Frontier Search | Identifies gaps in the current evidence base this case illuminates |
| 16 | **M9** — N-of-1 Case Research Protocol | Full seven-stage research protocol — is this case publishable? |
| 17 | **M10** — Journal & Article Reading | Situates the case within the 3 most relevant recent publications |
| 18 | **M46** — Evidence-Based Medicine Insights | EBM cycle applied with research-grade rigour |
| 19 | **M48** — Treatment Comparative Analysis & Prognosis Trajectory | Evidence-informed prognosis and treatment comparison |
| 20 | **M34** — High-Value Care Auditor | Health economics and resource-allocation lens |
| 21 | **M43** — Health Economics & Value-Based Care Alignment | Policy and systems-level implications of this case |
| 22 | **M42** — Clinical Pre-Mortem | What systemic or institutional failure does this case reveal? |
| 23 | **M8** — Socratic-Mode Design Specification | Could this case generate a new VibeRounds module or research question? |
| 24 | **M32** — Clinical Cognition Loop | Final integration: what does this case contribute to the field? |

**Closure output:** A research-grade case analysis with causal model, evidence gap map, N-of-1 protocol readiness assessment, and a structured research question derived from this case's unresolved elements.

---

## Step CC.3 — Synthesis Stage

### Prompt CC.3.1 — Cross-Stage Synthesis

After all pipeline stages are complete, paste this:

```
All pipeline stages are now complete. Run the synthesis stage:

1. COGNITIVE NARRATIVE — In 200 words, narrate how my understanding of this case evolved from Stage 1 to the final stage. Name the two or three moments where something genuinely shifted.

2. RESIDUAL UNCERTAINTY MAP — List every conclusion from the pipeline that is assumption-dependent or evidence-thin. Rate each as: Solid / Uncertain / Speculative.

3. WHAT I PROBABLY MISSED — Given my education level, what is the most likely gap in my reasoning on this case that a more senior or differently-trained clinician would catch?

4. ONE TEACHING POINT — If this case were presented at a teaching session, what is the single most important clinical cognition lesson it demonstrates?

5. NEXT CASE CALIBRATION — What type of case should I tackle next to specifically address the gap you identified in point 3?
```

---

## Step CC.4 — Closure

### Prompt CC.4.1 — Session Close

```
Close this Clinical Cognition Deep Dive session.

Produce:

A) SESSION SUMMARY — One structured paragraph: what the case was, what the pipeline found, and what I should remember from this session.

B) BLOOM'S LEVEL ACHIEVED — Across the pipeline, which Bloom's levels did I actively engage? Which did I only passively receive?

C) FINK DIMENSIONS ENGAGED — Which of Fink's six dimensions were most active in this session? Which were absent?

D) CONFIDENCE CALIBRATION — On a scale of 1–5, how confident should I be in the key diagnostic conclusion from this session, and why?

E) MODULE RECOMMENDATION — Which single VibeRounds module should I run as a standalone session on a future case to deepen the weakest area you identified today?

Do not pad. Be direct.
```

---

## Cross-Cutting Frameworks Applied Across All Levels

All four VibeRounds supplementary frameworks run beneath the pipeline at every level:

| Framework | How it is applied in Module CC |
|-----------|-------------------------------|
| **Framework A — Humanistic Persona** | The orchestrator maintains a confidence-building tone calibrated to your level — more scaffolded for students, more peer-level for consultants |
| **Framework B — Fink's FLINK** | Each pipeline stage is tagged to a Fink dimension; the synthesis stage audits which dimensions were and were not engaged |
| **Framework C — Bloom's Revised Taxonomy** | Pipeline depth and Socratic question difficulty scale with your level across all six cognitive tiers |
| **Framework D — Critical Awareness** | Runs as a background process throughout — the orchestrator flags when AI-generated conclusions are overconfident, under-evidenced, or likely to reflect training-data bias |

---

## Quick-Reference: Module CC at a Glance

| Feature | Detail |
|---------|--------|
| **Stages (Medical Student)** | 12 modules |
| **Stages (Resident)** | 18 modules |
| **Stages (Consultant)** | 22 modules |
| **Stages (Researcher)** | 24 modules |
| **Session length (approx.)** | 45–90 min depending on case complexity and level |
| **Case requirement** | Single de-identified case, minimum: presenting complaint + history + key investigations |
| **Output** | Level-appropriate synthesis document + residual uncertainty map + calibration statement |
| **Validated environment** | Designed for Claude, Gemini, GPT-4-class models in long-context mode |

---

## ⚠️ Safety Note

This module handles clinical case data. Before running:

- Confirm all case data is fully de-identified
- Do not enter patient names, MRN numbers, dates of birth, or institution-identifying details
- All pipeline outputs are learning observations — they do not enter clinical records or handover documents without independent clinician review

---

## Related Modules & Navigation

- **Starting fresh?** → Module 0 (Cold-Start Orientation) first, then return here
- **Want just the differential?** → Module 12 (Differential Diagnosis Deepdive)
- **Want just the bias audit?** → Module 26 (Bias Auditing)
- **Want to write this case up?** → Module 9 (N-of-1 Case Research Protocol)
- **Want to teach it?** → Module 4 (Peer-Level Ward Round Preparation)
- **Pipeline design reference** → [Lifecycle Coverage Summary](https://avi33tbtt.github.io/Prompts/Lifecycle-Coverage-Summary.html)

---

*Clinical Cognition Deep Dive (Module CC) · VibeRounds Prompt Modules*
*Developed in the VibeRounds Socratic AI Paradigm · June 2026*
*[← Back to Module Index](https://avi33tbtt.github.io/Prompts/Prompts.html)*
