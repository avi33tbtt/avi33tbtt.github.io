# VibeRounds: What Each Module Does, Why It Doubles as an Explainability Framework, and What It Actually Surfaces in a Real Case

*Prepared as a briefing on Dr. Avinash Kumar Gupta's VibeRounds framework, June 2026*

---

## Introduction

VibeRounds is built around one constraint: the AI is not allowed to give the answer. It questions, surfaces evidence, and flags gaps, while the learner does the reasoning. That constraint is the source of two separate but connected things this framework produces. First, it's a **teaching system** — 20 modules, each targeting a distinct clinical-reasoning skill. Second, almost as a structural side effect of how it's built, it functions as an **explainability layer** — a way of making both AI reasoning and expert human judgment inspectable, rather than opaque. This document walks through what each module does, explains why the same architecture that teaches also explains, and then shows that this isn't just theoretical — by walking through a real worked case where the framework surfaced a specific, missed diagnostic pivot.

---

## Part 1 — What Each Module Does

The modules aren't a flat prompt list; each targets a distinct moment or skill in clinical training. Four cross-cutting frameworks (Bloom's Taxonomy, Fink's Taxonomy of Significant Learning, a Humanistic Persona trait set, and a Critical Awareness framework) are woven into specific steps across them rather than run standalone. Every module follows the same three-phase shape — **Initiation → Execution → Closure/Review** — regardless of content.

| # | Module | What It Does |
|---|---|---|
| **1** | Socratic Clinical Reasoning | Pushes a learner to reason through a case actively rather than passively receive the answer. The AI withholds the diagnosis until the learner has made a genuine attempt and explicitly surrendered. |
| **2** | Patient-Advocate Case Documentation | A 4-step workflow letting a family member build a structured case record collaboratively with an AI acting as a documentation companion — for when there is no clinician present to do this. |
| **3** | Extended Patient-Advocate Monitoring | Extends Module 2 with longitudinal tracking — lifestyle, mood, medication adherence, and red-flag symptoms — over weeks or months rather than a single encounter. |
| **4** | Peer-Level Ward Round Preparation | Rehearses rounds, admission workups, pre-op clearance, and overnight triage, with the AI acting as a peer study partner rather than a supervisor — it thinks alongside the learner, not above them. |
| **5** | Real-Time Case Review & Data Audit | Queries and cleans a single patient's live case log — diet diaries, insulin logs, prescriptions — during active management. |
| **6** | Registry-Level Analytics | Queries an entire case registry, not a single patient, across nine escalating levels of analytic depth. |
| **7** | Longitudinal & Cross-Case Learning | Turns the registry itself into a learning system across cases and time — asking not just what cases contain, but what the registry has learned across them (still experimental; proposed but not yet fully validated live). |
| **8** | Socratic-Mode Design Specification | A 12-point QA checklist for authoring or revising any new Socratic-style prompt — quality control for the prompts themselves. |
| **9** | N-of-1 Case Research Protocol | Takes a clinician from a raw, unstructured case narrative to a fixed, publication-ready output package — severity rating, priority rating, timeline, intervention-symptom correlation — via seven explicit stages. |
| **10** | Medical Journal & Article Reading | Has the AI do the intellectual processing most readers skip when reading a paper — translating statistics into clinical meaning, mapping findings onto real patients, surfacing what the paper doesn't say. |
| **11** | Patient Education Query Intelligence | Helps a student anticipate the real questions patients and families carry about an illness, so they learn to see the case through the patient's eyes, not just the chart. |
| **12** | Differential Diagnosis Deepdive (Devil's Advocate) | Systematically attacks the working diagnosis and stress-tests the differential list, surfacing anchoring errors and premature closure before they reach the patient. |
| **13** | Medication Reconciliation & Polypharmacy | A structured audit of a patient on 5+ drugs, training the student to spot drug-drug interactions, drug-disease conflicts, and prescribing cascades through active reasoning. |
| **14** | Global Health & Resource-Constrained Reasoning | Trains clinical reasoning that starts from "what is actually available here" rather than "what is ideal" — making the resource ceiling itself part of the differential and management process. |
| **15** | Illness Script Acquisition | Trains the compiled, holistic "illness scripts" experienced clinicians actually use for fast recognition — a distinct skill from the stepwise differential-building in Module 1. |
| **16** | Bidirectional Basic Science ↔ Clinical Integration | Drills the two-way link between mechanism and diagnosis explicitly — diagnosis-to-mechanism *and* mechanism-to-diagnosis — rather than leaving it to form implicitly over years. |
| **17** | Semantic Qualifiers & Problem Representation | Trains the compression step *before* any diagnosis is attempted: restating a raw case as paired abstract qualifiers (acute/chronic, focal/diffuse) — the step research shows correlates more strongly with diagnostic accuracy than raw factual knowledge. |
| **18** | Causal vs. Probabilistic (Network) Reasoning | Trains reasoning over networks of interacting findings, where one finding's diagnostic weight changes depending on what else is already known — rather than treating findings as independent. |
| **19** | Community & Social Medicine Insights | Trains reasoning about a patient's social and economic context as a clinically active variable, not background colour — connecting individual social context to population-level patterns. |
| **20** | Naturalistic Decision Making (RPD) | Trains decision-making under real time pressure the way experienced practitioners do it: recognise the pattern, generate one plausible plan, mentally simulate it forward — not a side-by-side comparison of options. |

---

## Part 2 — How the Same Architecture Doubles as an Explainability Framework

Clinical AI has a standing problem independent of VibeRounds: a model can return a conclusion — a differential, a risk flag, a ranked priority list — without showing the steps that produced it. An unexplained conclusion can't be checked, can't be taught from, and can't be defended later if a decision is questioned. VibeRounds treats this as something the architecture itself is built to solve, not a side effect to tolerate.

### The mechanism is structural, not bolted on

Because Module 1's Socratic constraint forbids the AI from jumping straight to an answer, the AI is *forced* to externalize its intermediate reasoning — as questions, evidence flags, gap identification — rather than collapsing it into a single output. The registry-level modules extend the same principle to data: cross-case queries are designed to surface *why* a diagnosis shifted, not just that it shifted, and an "Epistemic Bias Audit" step audits how the reasoning network arrived somewhere, not just what it concluded. If a system can't answer a "why did this change" query, that's treated as a documentation failure to fix, not an acceptable limitation.

### The 6-stage pipeline

The Master Case Analysis Protocol runs every case through six stages that force visible reasoning:

1. **Prompt mapping** — which modules actually apply to this case
2. **Ranking** — justifying *why* certain problems outrank others
3. **Mechanistic deep-dives** — anchoring conclusions in basic science, not pattern completion
4. **Output** — a structured report with traceable logic connecting the above to the final synthesis

This is stated explicitly to prevent "black box" outputs — a conclusion with no visible reasoning chain behind it.

### Two-Tier Analysis: explainability through refusing to merge

Module 9's Stage 4 keeps two views of a case deliberately separate before synthesis: the **Coded View** (structured data — diagnoses, results, drug names) and the **Narrative View** (the unstructured, sequential record of what was noticed first, doubted, deferred, or wrongly attributed). Standard summarization collapses these into one clean story — which is itself an explainability failure, because it erases the reasoning path and replaces it with hindsight. Keeping them separate prevents **premature closure**: resolving ambiguity too early by imposing a coherent narrative on incomplete data.

### Human annotation, not just AI output

Outputs are designed to function as a **structured possibilities map** that a human expert can mark up as confirmed, ruled out, or uncertain — particularly at **"diagnostic void" points**, where the framework explicitly flags that no decision can be made until missing data is retrieved, rather than guessing past the gap.

### Making expert judgment auditable too

The same logic is applied to *human* reasoning, not just the AI's. A clinical-importance ranking exercise scores every applicable prompt in a case 1–10 and assigns each an explicit reason (irreversibility, time-window, confirmatory vs. action-changing). The framework is candid that an experienced clinician would already sense this prioritization instinctively — what the exercise adds is **externalizing a judgment that's normally silent, fast, and undocumented**, turning it into a defensible audit trail, a teaching artefact for a junior colleague, and a safeguard against the exact fatigue conditions under which expert judgment degrades.

---

## Part 3 — A Full-Fledged Report: What the Framework Actually Surfaced in a Real Case

The clearest demonstration isn't theoretical — it's a worked case in the repository: a 60-year-old woman with an 18-year history of cervical myelopathy who died of MDR *E. coli* sepsis, pancytopenia, stony splenomegaly, and CSF albumino-cytological dissociation, with no unifying diagnosis ever established. The framework was applied to the original (de-identified, consented) clinical record using the CARE case-report format, and the insight it produced is concrete enough to walk through directly.

### The anchoring problem the framework caught

The patient's 18-year cervical myelopathy diagnosis functioned as a powerful cognitive anchor: every new symptom over nearly two decades was interpreted within that existing frame rather than questioned. Applying Module 12 (Devil's Advocate) and Module 15 (Illness Script — script mismatch recognition) to the four-month acceleration period identified the **specific point where the frame should have been reset**: a pre-operative finding of pancytopenia, four months before death, when planned surgery was cancelled and the patient was simply referred back with instructions to "normalise blood counts."

The report's own framing of this: *pancytopenia in a patient with myelopathy and stony splenomegaly is not a reason to delay surgery until blood counts normalise — it is a reason to stop and ask what is causing the triad.* That reframe — turning a "wait and recheck" moment into a flagged diagnostic pivot — is exactly the kind of insight Module 12 is built to produce: surfacing premature closure before it reaches the patient, not after.

### Findings the framework forced into explicit weight

Several individual findings, applying Module 16 (mechanism ↔ diagnosis) and Module 18 (network reasoning), were shown to carry diagnostic weight that the original clinical course didn't act on:

- **Stony, hard splenomegaly** (as opposed to a soft, enlarged spleen) — texture, not just size, was treated as diagnostically specific: implying infiltration by granulomas (TB), malignant cells (lymphoma), or fibrosis, and specifically *not* consistent with simple portal hypertension. This was documented in the clinical record but never followed to an investigative conclusion.
- **A near-normal CSF cell count (5 cells) in a pancytopenic patient** — interpreted at the time as excluding active meningitis. Module 18's conditional-weighting logic flags this as unsafe: when peripheral white cells are suppressed, the CSF cell *response* to meningeal infection is also suppressed, so a near-normal count doesn't rule out TB or carcinomatous meningitis in this specific patient — it's conditionally uninformative, not reassuring.
- **Haemoglobin rising only 0.1 g/dL after two units of packed red cells** — reframed not as a transfusion failure but as a positive finding in itself: an explicit signal of active red cell destruction or ongoing haemorrhage outpacing replacement, which was never investigated.
- **Escalating baclofen dosing** (patient self-escalated to twice-daily over the final four months) — flagged via Module 13-style polypharmacy logic as a pharmacological differential for the exact terminal triad (coma, hypothermia, type 2 respiratory failure), since baclofen is renally cleared and toxic on accumulation — something that should have been evaluated against renal/hepatic function and wasn't.

### The explainability layer made visible in this case

This case is also where the explainability mechanism is easiest to see directly. The report doesn't just state a missed diagnosis — it produces a structured differential table (disseminated TB vs. haematological malignancy vs. autoimmune disease vs. baclofen toxicity vs. hepatic myelopathy), each row scored against *supporting evidence*, *evidence against*, and the *specific investigation* that would have resolved it. That is the 6-stage pipeline's "ranking" and "mechanistic deep-dive" stages made concrete: not "this patient probably had TB," but a traceable table a second reader can independently check, disagree with, or extend.

The report goes further and names the **three specific accessible investigations** that, had they been obtained at the pre-operative pancytopenia discovery, may have changed the diagnostic trajectory — TB-PCR/AFB culture on the bone marrow that was already biopsied, expert review of the peripheral blood smear, and a single autoimmune panel. All three were available at the level of care the patient was receiving; none are documented as having been obtained. That is the framework's "diagnostic void" concept applied concretely — not a vague statement that something was missed, but a flagged, specific, actionable gap.

### What the advocate side of the same case adds

A companion Advocate Debrief, built from Modules 2, 3, and 11, applies the same framework retrospectively to what the family was — and wasn't — given at each clinical decision point. It identifies three specific moments where clearer guidance could have prompted earlier escalation: when haemoglobin barely rose after transfusion and the family wasn't told this was itself a red flag; when self-resolving diarrhoea was attributed to diet rather than explained as a possible clinical signal; and when new breathlessness wasn't explicitly framed as a respiratory red flag. This is the same explainability principle pointed at a different audience: not "what should the clinician have concluded," but "what should the family have been told, and when."

---

## Summary

VibeRounds is, at its core, a teaching system organized as 20 modules and four cross-cutting frameworks, each targeting a distinct moment in clinical training — from withholding an answer until a learner reasons (Module 1) to training fast pattern-recognition under time pressure (Module 20). The same Socratic constraint that makes it work pedagogically — forcing reasoning to stay visible rather than collapsing into an answer — is what makes it function as an explainability layer: a 6-stage pipeline that produces traceable logic, a Two-Tier analysis that resists premature closure, and a human-annotation layer that turns both AI uncertainty and tacit expert judgment into something inspectable. The worked 60F case shows this isn't just architectural description: applying the framework to a real, fatal diagnostic-anchoring case produced a specific missed pivot point, a ranked differential with named confirmatory investigations, and a concrete account of what the family should have been told and wasn't — output a clinician, a student, or a family member could each independently check against the record.
