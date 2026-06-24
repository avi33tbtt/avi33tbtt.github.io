[← Back to README](README.md)
# Disclosure Statement

> [!IMPORTANT]
> **Clinical Disclaimer & Independent Verification Required**
> All AI-generated outputs produced using these prompts — including but not limited to diagnostic suggestions, severity/priority ratings, drug-interaction flags, and registry-level or cross-case conclusions — **require independent clinical verification before being acted upon.** This document does not substitute for clinical judgment, professional medical advice, or established institutional safety protocols at any stage.

---
> [!NOTE] **What this repository is and is not**
> Vibe Rounds is a **patient-centred learning system** for medical students, learners, and patient advocates. Every module, prompt, and framework on this site is designed for one purpose: helping a learner reason better about a clinical case. No module is designed to execute, change, or directly inform patient care.
>
> Specifically:
> - The AI in every prompt plays an **educational role** — Socratic teacher, documentation companion, reasoning partner, or adversarial challenger. It does not play a clinical role.
> - All findings produced by these prompts — interaction flags, differential diagnoses, red flags, audit outputs — are **learning observations**, not clinical decisions. They describe what a learner noticed and reasoned through, not what should be done to a patient.
> - Any concern a learner identifies using these prompts that has real-patient implications must be **raised with a supervising clinician** before any action is taken. The prompt is the start of that conversation, not a substitute for it.
> - No output from any module in this repository is intended to be entered into a clinical record, a handover document, or a patient management plan without independent review and endorsement by a licensed clinician.
>
> If you are looking for a clinical decision support tool, a prescribing aid, or a diagnostic system — this is not that. If you are a learner trying to think more carefully about a case, or a patient advocate trying to understand and document your loved one's situation better — this is exactly that.

---


## Authorship & Development
This document (*Vibe Rounds Prompt Modules 1–21*) was developed by Avinash. 
* **Review Process:** No formal peer-review or institutional review process is done/documented yet.

## Funding & Conflicts of Interest
* **Funding:** No funding source is disclosed.
* **Conflicts of Interest:** No conflict-of-interest statement is provided. 
* **Platform Affiliations:** No affiliance with any institution or company. Gemini was used for testing but no affiliation with that.

---

## Evidence Base
IMPORTANT - This document has not undergone controlled evaluation of clinical, educational, or patient-safety outcomes. 

### ⚠️ Key Evidentiary Limitations

| Aspect | Status & Context |
| :--- | :--- |
| **Module 9** | Derived from a single *n-of-1* case-report preprint and inherits that source's evidentiary limitations. |
| **Evidence Hierarchy Rating** | By the *Oxford Centre for Evidence-Based Medicine* hierarchy, the entire evidence base underlying this document sits at the **case-report / expert-opinion level — the lowest tier of clinical evidence** — and should be treated accordingly. |

---------------------------------------------------------------------------------------------------------------------------------------------------------------

## 📑 Project Evaluation & Demos

| File | Contents |
|---|---|
| [Vibe Rounds — Evaluation & Demos](./Demo/demos.md) | Vibe Rounds — Evaluation & Demos | 

## Prompts Analytics

| Check analytics - Traditional Ai , Socratic Ai, Devil's advocate Ai, Brainstorming AI| [Check analytics](VibeRounds_Prompt_Directory.md) |

# VibeRounds Prompt Modules

### A Structured Directory for Clinical Reasoning

*Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*
**#VibeRounds — A Socratic AI Paradigm for Clinical Medicine**

---

## What this repository is (NON TESTED YET)

This repository organizes a Non-tested set of large-language-model prompts the way a clinical procedure manual organizes bedside techniques — by objective, indication, and step sequence, rather than by who happened to write each one down.

It contains **21 modules** each a self-contained prompt workflow with its own lifecycle, and **4 supplementary frameworks** (A–D) that are layered into specific steps across those modules rather than run on their own.

---

## 🚀 New here? Start with this

If you are new to Vibe Rounds and unsure where to begin, go to **[Module 0 — Cold-Start Orientation](Module-00-Cold-Start-Orientation.md)** first. It is a short pre-module entry point that identifies your role and goal and routes you to the right module before any clinical content is exchanged.

If you already know which module and step you need, skip straight there using the index below.

---

**Reading order:** Modules are independent entry points — jump straight to the one you need. Within a module, work the numbered steps (Step X.0, X.1, X.2…) in order; the three lifecycle phases (Initiation → Execution → Closure/Review) are designed to run in sequence, not be skipped around.

**Cross-cutting frameworks:** Frameworks A–D are not separate modules to run on their own — they are layered into specific steps throughout Modules 0–21. **[Lifecycle Coverage Summary](Lifecycle-Coverage-Summary.md)** is the master index of exactly which step, in which module, carries each framework — consult it if you are trying to locate every place a given framework is applied.


---

## How each module is structured

Each module is a process with a lifecycle. Every module follows a consistent structure:

| Field | Description |
|---|---|
| **Objective** | What the module accomplishes |
| **Indication** | When to reach for it |
| **Lifecycle** | Three phases: Initiation → Execution → Closure / Review |
| **Steps** | Numbered steps, each with a ready-to-use prompt |
| **Validated Env.** | The LLM platform on which a step was tested, where documented |
| **Application Note** | Context on how a step was used, or how to adapt it |

---

## Module Maturity Levels

| Module | Status | Description |
| :--- | :---: | :--- |
| **Module 1** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 2** | 🟡 In Progress | Active development, expect changes. |
| **Module 3** | 🟡 In Progress | Active development, expect changes. |
| **Module 4** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 5** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 6** | 🔴 Primitive | Experimental / Alpha stage. |
| **Module 7** | 🔴 Primitive | Experimental / Alpha stage. |
| **Module 8** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 9** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 10** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 11** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 12** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 13** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 14** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 15** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 16** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 17** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 18** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 19** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 20** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 21** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 22** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 23** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 24** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 25** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 26** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 27** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 18** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 19** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 20** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 21** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 22** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 23** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 24** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 25** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 26** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 27** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 28** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 29** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 30** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 31** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 32** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 33** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 34** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 35** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 36** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 37** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 38** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 39** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 40** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 41** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 42** | 🟢 Mature | Ready for ~~production~~ self learning use. |
| **Module 43** | 🟢 Mature | Ready for ~~production~~ self learning use. |

---

## ⚠️ Safety & Compliance Note

> [!IMPORTANT]
> All modules tested on de-identified case logs; before reuse, confirm that any `[paste...]` placeholder is filled with de-identified data only at your individual capacity with patient consent and in accordance with your local law. 

---

## 🗂️ Module Index

| # | Module | What it does |
|---|---|---|
| 0 | [Cold-Start Orientation](Module-00-Cold-Start-Orientation.md) | Pre-module entry point — identifies a new user's role and goal and routes them to the right module |
| 1 | [Socratic Clinical Reasoning](Module-01-Socratic-Clinical-Reasoning.md) | Pushes a learner to reason through a case actively rather than passively receive the answer |
| 2 | [Patient-Advocate Case Documentation](Module-02-Patient-Advocate-Case-Documentation.md) | A 4-step workflow for a family member to build a structured case record with an AI documentation companion |
| 3 | [Extended Patient-Advocate Monitoring](Module-03-Extended-Patient-Advocate-Monitoring.md) | Longitudinal domain tracking (lifestyle, mood, medication, red flags) that extends Module 2 |
| 4 | [Peer-Level Ward Round Preparation](Module-04-Peer-Level-Ward-Round-Preparation.md) | Rehearses rounds, admissions, pre-op clearance, polypharmacy screening, and overnight triage |
| 5 | [Real-Time Case Review & Data Audit](Module-05-Real-Time-Case-Review-and-Data-Audit.md) | Queries and cleans a single patient's live case log during active management |
| 6 | [Registry-Level Analytics](Module-06-Registry-Level-Analytics.md) | Queries an entire case registry across nine escalating levels of analytic depth |
| 7 | [Longitudinal & Cross-Case Learning](Module-07-Longitudinal-and-Cross-Case-Learning.md) | Turns the registry itself into a cross-case, cross-time learning system *(proposed; not yet validated live)* |
| 8 | [Socratic-Mode Design Specification](Module-08-Socratic-Mode-Design-Specification.md) | A 12-point QA specification for authoring or revising any new Socratic-mode prompt |
| 9 | [N-of-1 Case Research Protocol](Module-09-Case-Research_Protocol.md) | Running the seven-stage research protocol on your own complex case |
| 10 | [Journal & Article Reading](Module-10-Medical-Journal-Article-Reading.md) | Vibe Rounds — Journal & Article Reading |
| 11 | [Patient Education Query Intelligence](Module-11-Patient-Education-Query-Intelligence.md) | Patient Education Query Intelligence |
| 12 | [Differential Diagnosis Deepdive](Module-12-Differential-Diagnosis-Deepdive.md) | Differential Diagnosis Deepdive |
| 13 | [Medication Reconciliation & Polypharmacy](Module-13-Medication-Reconciliation-Polypharmacy-Audit.md) | Medication Reconciliation & Polypharmacy |
| 14 | [Resource-Constrained Clinical Reasoning](Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.md) | Resource-Constrained Clinical Reasoning |
| 15 | [Illness Script Acquisition](Module-15-Illness-Script-Acquisition.md) | Illness Script Acquisition |
| 16 | [Basic Science ↔ Clinical Integration](Module-16-Bidirectional-Basic-Science-Clinical-Integration.md) | Basic Science ↔ Clinical Integration |
| 17 | [Semantic Qualifiers & Problem Representation](Module-17-Semantic-Qualifiers-Problem-Representation.md) | Semantic Qualifiers & Problem Representation |
| 18 | [Causal vs. Probabilistic (Network) Reasoning](Module-18-Causal-vs-Probabilistic-Network-Reasoning.md) | Causal vs. Probabilistic (Network) Reasoning |
| 19 | [Community & Social Medicine Insights](Module-19-Community-and-Social-Medicine-Insights.md) | Community & Social Medicine Insights |
| 20 | [Naturalistic Decision Making](Module-20-Recognition-Primed-Decision-Model.md) | Naturalistic Decision Making |
| 21 | [Evidence Frontier Search](Module-21-Evidence-Frontier-Search.md) | Evidence Frontier Search |
| 22 | [Nested Analysis](Module-22-Nested-Analysis.md) | Nested Analysis |
| 23 | [Counterfactual Analysis](Module-23-Counterfactual-Analysis.md) | Counterfactual Analysis |
| 24 | [Heuristic Analysis](Module-24-Heuristic-Analysis.md) | Heuristic Analysis |
| 25 | [Thematic Analysis](Module-25-Thematic-Analysis.md) | Thematic Analysis |
| 26 | [Bias Auditing](Module-26-Bias-Auditing.md) | Bias Auditing |
| 27 | [Time-Series & Velocity Analyzer](Module-27-Time-Series-Velocity-Analyzer.md) | Time-Series & Velocity Analyzer |
| 28 | [Diagnostic Time-Out](Module-28-Diagnostic-Time-Out.md) | Diagnostic Time-Out |
| 29 | [he Iatrogenic Domino Effect](Module-29-Iatrogenic-Domino-Effect.md) | he Iatrogenic Domino Effect |
| 30 | [The "Diagnostic Anchor" Extractor](Module-30-Diagnostic-Anchor-Extractor.md) | The "Diagnostic Anchor" Extractor |
| 31 | [First-Principles Pathophysiology Mapping](Module-31-First-Principles-Pathophysiology-Mapping.md) | First-Principles Pathophysiology Mapping |
| 32 | [Clinical Cognition Loop](Module-32-Clinical-Cognition-Loop.md) | Clinical Cognition Loop |
| 33 | [The "Why Now?" (Precipitant) Hunter](Module-33-Why-Now-Precipitant-Hunter.md) | The "Why Now?" (Precipitant) Hunter |
| 34 | [The High-Value Care (HVC) Auditor](Module-34-High-Value-Care-Auditor.md) | The High-Value Care (HVC) Auditor |
| 35 | [Epistemic Certainty Mapping & Calibration](Module-35-Epistemic-Certainty-Mapping-Calibration.md) | Epistemic Certainty Mapping & Calibration |
| 36 | [The Bayesian Probability / Likelihood Ratio Engine](Module-36-Bayesian-Probability-Likelihood-Ratio-Engine.md) | The Bayesian Probability / Likelihood Ratio Engine |
| 37 | [Red Herring / Signal-to-Noise Drill](Module-37-Red-Herring-Signal-to-Noise-Drill.md) | Red Herring / Signal-to-Noise Drill |
| 38 | [Poly-Crisis & Cascading Failure Simulator](Module-38-Poly-Crisis-Cascading-Failure-Simulator.md) | Poly-Crisis & Cascading Failure Simulator |
| 39 | [The "Global Knowledge Network" Diagnostic Matrix](Module-39-Global-Knowledge-Network-Diagnostic-Matrix.md) | The "Global Knowledge Network" Diagnostic Matrix |
| 40 | [The Operational & Throughput Strategist](Module-40-Operational-Throughput-Strategist.md) | The Operational & Throughput Strategist |
| 41 | [Clinical Workflow Implementation Science](Module-41-Clinical-Workflow-Implementation-Science.md) | Clinical Workflow Implementation Science |
| 42 | [Clinical Pre-Mortem](Module-42-Clinical-Pre-Mortem.md) | Clinical Pre-Mortem |
| 43 | [Health Economics & Value-Based Care Alignment](Module-43-Health-Economics-Value-Based-Care-Alignment.md) | Health Economics & Value-Based Care Alignment |
| 44 | [Clinical Genetics Reasoning](Module-44-Clinical-Genetics-Reasoning.md) | Clinical Genetics Reasoning |
| 45 | [Shadow Module 44 — Clinical Genetics Adversarial Counterpart](Shadow-Module-44-Clinical-Genetics-Adversarial-Counterpart.md) | Shadow Module 44 — Clinical Genetics Adversarial Counterpart |
| 46 | [Evidence-Based Medicine Insights](Module-45-Evidence-Based-Medicine-Insights.md) | Evidence-Based Medicine Insights |
| 47 | [Shadow Module 45 — Evidence-Based Medicine Adversarial Counterpart](Shadow-Module-45-EBM-Adversarial-Counterpart.md) | Shadow Module 45 — Evidence-Based Medicine Adversarial Counterpart |
| -- | [Vibe Rounds in Practice: A Case Walkthrough](Vibe_Rounds_Case_Walkthrough.md) | Vibe Rounds in Practice: A Case Walkthrough |
| -- | [Sackett EBM Cycle Cross-Reference](EBM-Cycle-Cross-Reference.md) | Sackett EBM Cycle Cross-Reference |
| -- | [VibeRounds — Combined Module Reference](VibeRounds-Combined-Modules-01-20.md) | VibeRounds — Combined Module Reference |
| -- | [Tagged Case History](Tagged-Case-History.md) | Tagged Case History |
| -- | [Tagged Case History with answers](Tagged-Case-History1.md) | Tagged Case History with answers |
| -- | [Top Insight — Points 1 & 2](Top-Insights.md) | Top Insight — Points 1 & 2 |
| -- | [Top Insight — Points 1 & 2](Top-Insights.md) | Top Insight — Points 1 & 2 |
| -- | [Clinical Importance Ranking](Clinical-Importance-Ranking.md) | Clinical Importance Ranking |
| -- | [Clinical Case Analysis](Clinical-Importance-Ranking.md) | VibeRounds Clinical Case Analysis |
| -- | [CARE Case Report & Advocate Debrief](VibeRounds-CARE-AdvocateDebrief-60F-EColi-Sepsis.md) | VibeRounds — CARE Case Report & Advocate Debrief |
| -- | [Master Case Analysis Protocol](VibeRounds-Master-Protocol.md) | Master Case Analysis Protocol |
| -- | [Master Case Analysis: A Multi-Level Explainer](VibeRounds_case_analysis_explainer.md) | Master Case Analysis: A Multi-Level Explainer |
| -- | [Global Clinical Knowledge Architecture](VibeRounds_Repository_Scaling.md) | Global Clinical Knowledge Architecture |
| -- | [Lightweight Disease-Specific Protocol](ViberRounds_directory_tb_lightweight_protocol.md) | Lightweight Disease-Specific Protocol |
| -- | [Why Case Narratives Surpass Case Reports](VibeRounds_narrative_edge.md) | Why Case Narratives Surpass Case Reports |
| -- | [Final Briefing](VibeRounds-Professor-Briefing.md) | Final Briefing |
| -- | [Protocol Dependency & Network Map](VibeRounds-Dependency-Network-Map.md) | Protocol Dependency & Network Map |
| -- | [Dashboard — Design Guidelines](VibeRounds-Dashboard-DesignGuidelines.md) | Dashboard — Design Guidelines |
| -- | [Article](VibeRounds-Research-Article.md) | Article |
| -- | [Global Health Optimization Methodology](VibeRounds-GlobalHealthOptimizationMethodology-v1.0.md) | Global Health Optimization Methodology |
| -- | [How This Can Happen](VibeRounds_How_This_Can_Happen.md) | How This Can Happen |
| -- | [Guided Discovery Agent](VibeRounds_Guided_Discovery_Agent.md) | Guided Discovery Agent |
| -- | [Patient Needs Assessment](Module-PN-Patient-Needs-Assessment.md) | Patient Needs Assessment |
| -- | Adaptive Guided Discovery Agent](VibeRounds_Adaptive_Discovery_Agent.md) | Adaptive Guided Discovery Agent |


* **Clinical Reasoning & Cognitive Frameworks:** 1, 12, 14, 15, 17, 18, 20, 28, 30, 32, 33, 35, 36, 37
* **Patient Advocacy & Individual Care Management:** 2, 3, 9, 11, 13
* **Data Analytics & Analytical Methodologies:** 5, 6, 7, 22, 23, 24, 25, 27
* **Patient Safety, Risk & Systems Failure:** 26, 29, 38, 42
* **Medical Education, Literature & Basic Science:** 4, 10, 16, 21, 31, 39
* **Health Operations, Systems & Economics:** 19, 34, 40, 41, 43
* **Framework Architecture & Meta-Design:** 8, 44

## 🧩 Supplementary Frameworks

*Not standalone modules — each is layered into specific steps across Modules 0–28. See the [Lifecycle Coverage Summary](Lifecycle-Coverage-Summary.md) for exactly where.*

| Letter | Framework | What it does |
|---|---|---|
| A | [Humanistic Persona & Confidence-Building Trait Set](Framework-A-Humanistic-Persona.md) | Six traits that keep every Vibe Rounds persona building clinical confidence alongside clinical competence |
| B | [Fink's Taxonomy of Significant Learning (FLINK)](Framework-B-Finks-FLINK-Taxonomy.md) | Six non-hierarchical dimensions of significant learning, applied to clinical cases |
| C | [Bloom's Revised Taxonomy](Framework-C-Blooms-Taxonomy.md) | Six cognitive levels (Remember → Create) applied to clinical reasoning |
| D | [Vibe Rounds Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) | Biases, risks, and legitimate critiques of AI-assisted clinical reasoning and of the Vibe Rounds paradigm itself |

## 📑 Reference Material

| File | Contents |
|---|---|
| [Appendix — QA & Publication Checklist](Appendix-QA-Publication-Checklist.md) | Pre-publication safety checklist and known limitations of Socratic-mode prompts |
| [Lifecycle Coverage Summary](Lifecycle-Coverage-Summary.md) | Master cross-reference of which module/step carries which framework |

---

## 📁 Repository structure

```
.
├── Start-Here.md                                          ← you are here
├── Module-00-Cold-Start-Orientation.md
├── Module-01-Socratic-Clinical-Reasoning.md
├── Module-02-Patient-Advocate-Case-Documentation.md
├── Module-03-Extended-Patient-Advocate-Monitoring.md
├── Module-04-Peer-Level-Ward-Round-Preparation.md
├── Module-05-Real-Time-Case-Review-and-Data-Audit.md
├── Module-06-Registry-Level-Analytics.md
├── Module-07-Longitudinal-and-Cross-Case-Learning.md
├── Module-08-Socratic-Mode-Design-Specification.md
├── Module-09-Case-Research_Protocol.md
├── Module-10-Medical-Journal-Article-Reading.md
├── Module-11-Patient-Education-Query-Intelligence.md
├── Module-12-Differential-Diagnosis-Deepdive.md
├── Module-13-Medication-Reconciliation-Polypharmacy-Audit.md
├── Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.md
├── Module-15-Illness-Script-Acquisition.md
├── Module-16-Bidirectional-Basic-Science-Clinical-Integration.md
├── Module-17-Semantic-Qualifiers-Problem-Representation.md
├── Module-18-Causal-vs-Probabilistic-Network-Reasoning.md
├── Module-19-Community-and-Social-Medicine-Insights.md
├── Module-20-Recognition-Primed-Decision-Model.md
├── Vibe_Rounds_Case_Walkthrough.md
├── Module-21-Evidence-Frontier-Search.md
├── EBM-Cycle-Cross-Reference.md
├── VibeRounds-Combined-Modules-01-20.md
├── Tagged-Case-History.md
├── Tagged-Case-History1.md
├── Top-Insights.md
├── Clinical-Importance-Ranking.md
├── VibeRounds-Methodology-and-Value.md
├── Clinical-Importance-Ranking.md
├── VibeRounds-CARE-AdvocateDebrief-60F-EColi-Sepsis.md
├── VibeRounds-Master-Protocol.md
├── VibeRounds_case_analysis_explainer.md
├── VibeRounds_Repository_Scaling.md
├── ViberRounds_directory_tb_lightweight_protocol.md
├── VibeRounds_narrative_edge.md
├── VibeRounds-Professor-Briefing.md
├── VibeRounds-Dependency-Network-Map.md
├── VibeRounds-Dashboard-DesignGuidelines.md
├── Module-22-Nested-Analysis.md
├── VibeRounds_How_This_Can_Happen.md
├── Module-23-Counterfactual-Analysis.md
├── Framework-A-Humanistic-Persona.md
├── Framework-B-Finks-FLINK-Taxonomy.md
├── Framework-C-Blooms-Taxonomy.md
├── Framework-D-Critical-Awareness-Framework.md
├── Appendix-QA-Publication-Checklist.md
├── Lifecycle-Coverage-Summary.md
```

> [!NOTE]
> All links in this repository are relative and assume every file sits in the same directory (the repo root). If you reorganize files into subfolders, update the links accordingly.

---
*Vibe Rounds Prompt Modules.*
[← Back to README](README.md)
