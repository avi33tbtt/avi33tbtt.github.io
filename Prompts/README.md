# Disclosure Statement

> [!IMPORTANT]
> **Clinical Disclaimer & Independent Verification Required**
> All AI-generated outputs produced using these prompts — including but not limited to diagnostic suggestions, severity/priority ratings, drug-interaction flags, and registry-level or cross-case conclusions — **require independent clinical verification before being acted upon.** This document does not substitute for clinical judgment, professional medical advice, or established institutional safety protocols at any stage.

---

## Authorship & Development
This document (*Vibe Rounds Prompt Modules 1–9*) was developed by `[team]`. 
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
| **"Validated Environment" (Modules 1–8)** | Indicates **only** that a prompt was run, informally and without a comparator condition or outcome measure, in the named environment against typically one case or one testing session. It does *not* mean the output was verified against clinical ground truth, peer-reviewed, or shown to improve any outcome. |
| **Module 9** | Derived from a single *n-of-1* case-report preprint and inherits that source's evidentiary limitations. |
| **Evidence Hierarchy Rating** | By the *Oxford Centre for Evidence-Based Medicine* hierarchy, the entire evidence base underlying this document sits at the **case-report / expert-opinion level — the lowest tier of clinical evidence** — and should be treated accordingly. |

### ⚠️ Frameworks
None of the frameworks are described as built into PaJR Health Bot itself — they're pedagogical lenses applied to the prompts/steps that happen to be validated for execution on that platform.
---------------------------------------------------------------------------------------------------------------------------------------------------------------





# VibeRounds Prompt Modules

### A Structured Directory for Bedside Reasoning, Case Documentation & Registry Analytics

*Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*
**#VibeRounds — A Socratic AI Paradigm for Clinical Medicine**

---

## What this repository is (NON TESTED YET)

This repository organizes a Non-tested set of large-language-model prompts the way a clinical procedure manual organizes bedside techniques — by objective, indication, and step sequence, rather than by who happened to write each one down.

It contains **9 modules** (numbered 0–8), each a self-contained prompt workflow with its own lifecycle, and **4 supplementary frameworks** (A–D) that are layered into specific steps across those modules rather than run on their own.

---

## 🚀 New here? Start with this

If you are new to Vibe Rounds and unsure where to begin, go to **[Module 0 — Cold-Start Orientation](Module-00-Cold-Start-Orientation.md)** first. It is a short pre-module entry point that identifies your role and goal and routes you to the right module before any clinical content is exchanged.

If you already know which module and step you need, skip straight there using the index below.

---

## Finding what you need

| If you are... | Go to |
|---|---|
| New to Vibe Rounds, not sure where to start | [Module 0 – Cold-Start Orientation](Module-00-Cold-Start-Orientation.md) |
| Teaching or learning through a single case | [Module 1 – Socratic Clinical Reasoning](Module-01-Socratic-Clinical-Reasoning.md) |
| A family member building a case record | [Module 2](Module-02-Patient-Advocate-Case-Documentation.md) and [Module 3](Module-03-Extended-Patient-Advocate-Monitoring.md) |
| Prepping for or running ward rounds | [Module 4 – Peer-Level Ward Round Preparation](Module-04-Peer-Level-Ward-Round-Preparation.md) |
| Auditing a live patient log | [Module 5 – Real-Time Case Review & Data Audit](Module-05-Real-Time-Case-Review-and-Data-Audit.md) |
| Running registry-level analytics | [Module 6 – Registry-Level Analytics](Module-06-Registry-Level-Analytics.md) |
| Mining the registry for cross-case learning | [Module 7 – Longitudinal & Cross-Case Learning](Module-07-Longitudinal-and-Cross-Case-Learning.md) |
| Authoring or QA-checking a new Socratic prompt | [Module 8 – Socratic-Mode Design Specification](Module-08-Socratic-Mode-Design-Specification.md) |
| N-of-1 Case Research Protocol | [Module 9 – N-of-1 Case Research Protocol](VibeRounds_Module9_Research_Protocol.md) |

**Reading order:** Modules are independent entry points — jump straight to the one you need. Within a module, work the numbered steps (Step X.0, X.1, X.2…) in order; the three lifecycle phases (Initiation → Execution → Closure/Review) are designed to run in sequence, not be skipped around.

**Cross-cutting frameworks:** Frameworks A–D are not separate modules to run on their own — they are layered into specific steps throughout Modules 0–8. **[Lifecycle Coverage Summary](Lifecycle-Coverage-Summary.md)** is the master index of exactly which step, in which module, carries each framework — consult it if you are trying to locate every place a given framework is applied.

**Before you copy any prompt:** re-read the Safety & Compliance Note just below, and the Data Security Notes inside [Module 2](Module-02-Patient-Advocate-Case-Documentation.md) and [Module 3](Module-03-Extended-Patient-Advocate-Monitoring.md) if you are handling real patient or family data. Modules 1–4 are template-safe as written; Modules 5–7 require de-identified data only.

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

## ⚠️ Safety & Compliance Note

> [!IMPORTANT]
> Modules 1–4 are template prompts containing no patient data and are safe to use as-is in any LLM. Modules 5–7 were tested against real, de-identified case logs; before reuse, confirm that any `[paste...]` placeholder is filled with de-identified data only.

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
| 9 | [N-of-1 Case Research Protocol](VibeRounds_Module9_Research_Protocol.md) | Running the seven-stage research protocol on your own complex case. |

## 🧩 Supplementary Frameworks

*Not standalone modules — each is layered into specific steps across Modules 0–8. See the [Lifecycle Coverage Summary](Lifecycle-Coverage-Summary.md) for exactly where.*

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
