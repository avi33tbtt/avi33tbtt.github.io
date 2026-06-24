# VibeRounds Module 25 — Socratic Question Generator
## Bloom's Taxonomy-Mapped Question Bank from a Patient Case

**Author:** Dr. Avinash Kumar Gupta  
**Module Series:** VibeRounds Prompt Modules | [avi33tbtt.github.io/Prompts/](https://avi33tbtt.github.io/Prompts/)  
**Module Type:** Generative Teaching Module — Case-Driven Question Bank  
**Companion Modules:** Module 1 (Socratic Reasoning), Module 22 (Nested Analysis), Module 6 (Registry)  
**DOI:** 10.5281/zenodo.20622693

---

## Purpose

This module takes **any patient case you provide** and generates an **exhaustive, Bloom's Taxonomy-stratified Socratic question bank** anchored entirely to that case.

Every question:
- Is **derived from the actual case details** — the patient's symptoms, signs, investigations, diagnosis, and management
- Is **tagged to a Bloom's level** (L1–L6) and a **learner target**
- Carries a **patient-context importance statement** — why this question matters *for this specific patient*, not in the abstract
- Progresses from first-year recall to physician-scientist synthesis without leaving the same case

The result is a living teaching document that a faculty member, bedside teacher, or self-directed learner can use to run a full Socratic session at any training level.

---

## How to Use This Module

### Step 1 — Provide the case

Paste the patient case in any format:
- A brief clinical summary (2–5 lines)
- A structured case vignette (history → examination → investigations → diagnosis → management)
- A discharge summary or clinic letter
- A raw bedside narrative

The richer the case, the richer the question bank. You may provide partial cases (e.g., only history and examination) — the AI will generate questions up to the level the case data supports and will explicitly note where case completion would unlock further questions.

### Step 2 — Specify the learner target (optional)

If you want questions filtered or weighted for a specific group, state it:
- `"Generate questions for a 3rd-year clinical student"`
- `"Focus on L4–L6 for a registrar teaching session"`
- `"Full bank, all levels"`

If unspecified, the full L1–L6 bank is generated.

### Step 3 — Receive the question bank

The output follows the fixed structure below, applied to your case.

---

## The Prompt

Copy the block below. Replace `[PASTE CASE HERE]` with your case. Paste into any Claude session.

---

```
You are operating as VibeRounds Module 25 — a Socratic Question Generator.

Your task is to generate an exhaustive, Bloom's Revised Taxonomy-stratified question bank 
from the patient case provided below. Every question must be:
1. Grounded in the specific details of this case — the patient's age, symptoms, signs, 
   investigations, diagnosis, and management decisions.
2. Tagged with its Bloom's level (L1–L6) and its target learner group.
3. Accompanied by a "Patient Context" statement of 1–3 sentences explaining why this 
   question matters for this specific patient, not in the abstract.

---

PATIENT CASE:
[PASTE CASE HERE]

---

LEARNER TARGET (leave blank for full bank):
[e.g., "3rd year student" / "registrar" / "all levels"]

---

QUESTION BANK STRUCTURE — follow exactly:

## CASE SUMMARY
Write a 3-sentence clinical synthesis of the case as the teaching anchor.

---

## LEVEL 1 — REMEMBER
### Target: 1st–2nd Year Preclinical Students
*What foundational facts does this case require the learner to have stored?*

Generate 8–12 questions.
For each question:
**Q1.X** — [Question]
> *Patient context:* [Why this specific patient makes this fact clinically critical]

Cover: anatomy relevant to the presentation, normal physiology/values implicated, 
drug names/classes used, pathological definitions, and eponymous signs or scales used 
in the case.

---

## LEVEL 2 — UNDERSTAND
### Target: 3rd–4th Year Students, Interns
*Can the learner explain the mechanism behind what they see in this case?*

Generate 8–12 questions.
For each:
**Q2.X** — [Question]
> *Patient context:* [Why this understanding changes management or communication in this case]

Cover: pathophysiology of the presenting complaint, mechanism of each drug prescribed, 
reason each investigation was ordered, why the diagnosis fits better than the top 
differential.

---

## LEVEL 3 — APPLY
### Target: Final Year, Interns, Junior Residents
*Can the learner use knowledge to act correctly in this case?*

Generate 8–12 questions.
For each:
**Q3.X** — [Question, including actual numbers from the case where available]
> *Patient context:* [How incorrect application of this skill would have harmed this patient]

Cover: scoring systems applicable to this case (calculated from actual case data), 
drug dose calculations, investigation interpretation (ECG, ABG, imaging reports, 
lab values), immediate management steps in sequence, clinical procedures indicated.

---

## LEVEL 4 — ANALYZE
### Target: Residents, Senior Residents, Registrars
*Can the learner deconstruct what is unusual, complex, or multi-layered in this case?*

Generate 8–12 questions.
For each:
**Q4.X** — [Question]
> *Patient context:* [What analytical failure at this level would have caused in this case]

Cover: features that distinguish this case from the classic textbook presentation, 
comparison of the actual diagnosis against the top two differentials, 
unusual or atypical findings requiring explanation, 
drug interaction or complication analysis, 
systems-level thinking (why did multiple problems occur together).

---

## LEVEL 5 — EVALUATE
### Target: Fellows, Senior Registrars, Consultants
*Can the learner judge, critique, and defend decisions in this case?*

Generate 6–8 questions.
For each:
**Q5.X** — [Question]
> *Patient context:* [The clinical or ethical consequence of poor evaluation in this case]

Cover: critique of the investigations chosen (were they the best? were any unnecessary?), 
evaluation of the management decisions against current guidelines, 
evidence quality behind a key decision made in this case, 
ethical dimensions (consent, prognosis communication, resource use), 
what should be done differently in hindsight.

---

## LEVEL 6 — CREATE
### Target: Fellows, Consultants, Clinician-Scientists
*Can the learner generate something new from this case?*

Generate 4–6 questions.
For each:
**Q6.X** — [Question]
> *Patient context:* [How this generative thinking could benefit this patient or future patients like them]

Cover: hypothesis generation about the underlying mechanism or unusual feature, 
design of a follow-up investigation protocol or research question arising from this case, 
construction of a novel management algorithm for this presentation type, 
proposal for an N-of-1 study design if the case is rare or atypical, 
system redesign (what process change would have caught this earlier).

---

## PATIENT PERSPECTIVE QUESTIONS
### For Any Level — Anchor Cognition to the Person
*These questions are inserted at any point in a teaching session.*

Generate 4–5 questions.
For each:
**QP.X** — [Question about this patient's experience, beliefs, fears, or social context]
> *Patient context:* [How answering this question changes the therapeutic relationship or adherence in this case]

---

## TEACHING FACULTY NOTES
Provide:
1. **Recommended session flow** — which levels to deploy in what order for a 30-minute bedside teaching session
2. **Pivotal question** — the single most important question in this bank (any level) and why
3. **Diagnostic trap** — one question that highlights where most trainees at this level go wrong in cases like this
4. **Extension prompt** — one L6 question that could become a publishable case report or N-of-1 research question if pursued rigorously

---

Formatting rules:
- Every question must be answerable from the case as provided, or the question must 
  explicitly state what additional information would be needed
- Never generate generic questions that would appear in any case — every question must 
  contain a case-specific detail (the patient's age, the actual drug used, the specific 
  investigation finding, the named diagnosis)
- If the case lacks sufficient detail for a Bloom's level, state: 
  "Insufficient case data for [Level X] — provide [what is needed] to unlock these questions"
- The total question bank should be 40–60 questions for a full case

Begin now.
```

---

## Output Format Reference

A complete Module 25 output for a well-described case will look like this:

```
## CASE SUMMARY
[3-sentence synthesis]

## LEVEL 1 — REMEMBER (10 questions)
## LEVEL 2 — UNDERSTAND (10 questions)
## LEVEL 3 — APPLY (10 questions)
## LEVEL 4 — ANALYZE (10 questions)
## LEVEL 5 — EVALUATE (7 questions)
## LEVEL 6 — CREATE (5 questions)
## PATIENT PERSPECTIVE (5 questions)
## TEACHING FACULTY NOTES
```

**Total: ~57 questions** — all derived from the single patient case you provided.

---

## Learner Level Quick Reference

| Level | Bloom's Operation | Learner Target | Signature Question Form |
|-------|-------------------|----------------|-------------------------|
| L1 | Recall facts | 1st–2nd year | *"Name the… / What is the normal value of… / List the…"* |
| L2 | Explain mechanisms | 3rd–4th year, intern | *"Why does this patient… / Explain how… / What is the mechanism of…"* |
| L3 | Act on knowledge | Final year, JR | *"Calculate… / Interpret this result… / What is your immediate step…"* |
| L4 | Deconstruct complexity | Resident, registrar | *"What is unusual about… / Compare this to… / Why did… despite…"* |
| L5 | Judge and defend | Fellow, consultant | *"Was this the right investigation? / Critique the management… / Should we have…"* |
| L6 | Generate new thinking | Clinician-scientist | *"Hypothesize… / Design a study… / Propose a framework… / Construct…"* |

---

## Variant Prompts

### Variant A — Focused Level Bank
If you only want questions for a specific Bloom's level (e.g., to prepare residents for a specific session):

> *"Run Module 25, Level 4 only. Generate 15 analytic questions from this case for a registrar teaching session."*

### Variant B — Rapid 10-Question Bedside Set
For quick bedside teaching (5 minutes, mixed levels):

> *"Run Module 25, rapid mode. Give me 10 questions across all Bloom's levels for a 5-minute bedside teaching session on this case. One question per level plus 4 from the level most appropriate for a final-year student."*

### Variant C — Self-Assessment Ladder
For a learner to self-assess their own depth on this case:

> *"Run Module 25, self-assessment mode. Present questions one level at a time, starting from L1. After each question, wait for my answer before providing the model answer and moving to the next level."*

### Variant D — Examination Question Extraction
For faculty creating assessments:

> *"Run Module 25, exam mode. For each question, provide: (a) the question stem, (b) the model answer, (c) the Bloom's level, (d) a common wrong answer and the reasoning error it reflects."*

---

## Integration with Other VibeRounds Modules

| Use Case | Module Combination |
|----------|--------------------|
| Deep case analysis first, then question bank | Module 22 (Nested Analysis) → Module 25 |
| Live bedside teaching session | Module 1 (Socratic) + Module 25 as question source |
| Registry case with teaching output | Module 6 (Registry) → Module 25 for each case |
| Rare/complex case research angle | Module 25 L6 questions → Module 9 (N-of-1 Protocol) |
| Student self-directed learning | Module 25 Variant C → Module 1 for guided reasoning |

---

## Citation

> Gupta, A.K. (2025). *VibeRounds Module 25: Socratic Question Generator — Bloom's Taxonomy-Mapped Question Bank from a Patient Case*. VibeRounds Prompt Module Series. https://avi33tbtt.github.io/Prompts/  
> DOI: 10.5281/zenodo.20622693

---

*VibeRounds — A Socratic AI Paradigm for Clinical Medicine | Dr. Avinash Kumar Gupta*
