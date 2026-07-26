# Module EBM — Case → Critical Appraisal Query Generator

*Companion module for the [Evidence-Based Medicine for Techies course](https://avi33tbtt.github.io/ebm/), restructured in the Vibe Rounds module format. Upload this file together with a patient case (notes, SOAP summary, discharge letter, etc.) to generate a structured list of EBM / critical-appraisal queries — the questions that need answering, and the PubMed-ready search strings to go find the evidence — derived directly from that case's data.*

---

# Disclosure Statement

> [!IMPORTANT]
> **Clinical Disclaimer & Independent Verification Required.** All AI-generated output produced by this module — including every PICO breakdown, search string, question-type classification, and appraisal-checklist pointer — **requires independent clinical verification before being acted upon.** This module does not substitute for clinical judgment, professional medical advice, or established institutional protocols.

> [!NOTE]
> **What this module is and is not.** This is a **learning and search-strategy tool**, not a clinical decision support system. It plays an educational role — turning a case into well-formed questions — and does not play a clinical role. Its output is a *draft list of queries*, not answers, not a diagnosis, and not a treatment recommendation. Any number, statistic, trial name, or citation that appears in a *later* step (once queries are actually run) must be traced back to a specific sentence in a specific primary source before it is trusted or acted on. See "The One Hard Rule" below.

---

## Module Summary

| Field | Description |
|---|---|
| **Objective** | Convert a de-identified patient case into a structured set of critical-appraisal queries (question type, study design, PICO(T), search string, applicable appraisal checklist) — without answering the clinical question itself. |
| **Indication** | Reach for this module whenever a case raises a clinical decision point (start/stop a treatment, trust a test result, estimate prognosis, assess harm, judge cost-effectiveness, or decide whether to follow a guideline) and you need the *questions and search strategy* before going to the evidence. |
| **Lifecycle** | Three phases, run in sequence: **Initiation → Execution → Closure/Review** (see Steps below). |
| **Validated Env.** | Designed for use with the [EBM for Techies course](https://avi33tbtt.github.io/ebm/) framework; not tied to a specific LLM platform. |
| **Application Note** | Works best on a single, de-identified case at a time. Multiple decision points in one case should be split into separate query threads rather than collapsed into one PICO. |

---

## ⚠️ Safety & Compliance Note

> [!IMPORTANT]
> Use only de-identified case data (see Lesson 1 of the course). Do not paste real patient identifiers into this module. Every output remains a draft — nothing produced here should enter a patient record, handover document, or management plan without independent clinical review.

---

## Steps

### Initiation

**Step 1 — Load the case and the framework.**
Upload this `.md` file together with the case data in the same conversation, then use the Master Prompt below (as-is, or paraphrased as *"Using ebm-case-query-generator.md, generate the EBM queries for this case"*).

```
You are acting as an EBM (Evidence-Based Medicine) research assistant,
following the framework in the "Evidence-Based Medicine for Techies"
course (avi33tbtt.github.io/ebm). Here is a patient case: [paste or
attach case data].

Using ONLY the "Query Extraction Checklist" below, read the case and
generate a structured list of critical-appraisal / EBM queries that
arise from it. Do not answer the clinical question itself, do not
recommend treatment, and do not fabricate any statistic, trial name,
or citation. Your job is to produce the QUESTIONS and SEARCH STRINGS
this case needs answered -- not the answers.

For each query you generate, tag it with:
1. The EBM question type it belongs to (Therapy / Diagnosis /
   Prognosis / Harm / Cost-effectiveness / Guideline).
2. The study design that would best answer it (per Lesson 2's table).
3. A draft PICO(T) breakdown.
4. A draft PubMed-ready search string.
5. Which lesson's appraisal checklist applies once evidence is found
   (Lesson 3 for RCTs, Lesson 5 for diagnostics, Lesson 6 for
   prognosis/harm, Lesson 7 for guidelines).

Flag explicitly, as a separate list, anything in the case that is
missing or ambiguous and would change the PICO breakdown if clarified
(e.g. unclear baseline risk factors, unstated patient values/priorities,
missing severity/duration detail) -- per the course's rule that
ambiguity should be surfaced, not silently resolved.

End with the patient's own stated priority or values (if present in
the case, per Lesson 1's history-taking) restated in one sentence, so
it isn't lost among the technical queries.
```

**Step 2 — Extract patient framing (Lesson 1).**
Before generating any query, pull from the case:
- The core **history**: presenting complaint, timeline, qualitative/quantitative/narrative detail.
- **Examination / objective findings**: what confirms or narrows the problem.
- A **SOAP** summary (Subjective / Objective / Assessment / Plan) if not already in that format.
- The **patient's own stated priority or value**, in their own words, if present — this is what the final answer has to actually serve.

### Execution

**Step 3 — Identify each vague clinical worry.**
List every decision point implied by the case (e.g. "start drug X or not," "is this diagnosis right," "what's the long-term risk"). Each becomes a separate query thread — don't collapse multiple decisions into one PICO.

**Step 4 — Classify each worry by question type (Lesson 2).**

| If the case is asking about... | Question type | Study design to search for |
|---|---|---|
| Whether a treatment/intervention works | Therapy | RCT, systematic review of RCTs |
| Whether a test result can be trusted | Diagnosis | Cross-sectional study vs. gold standard |
| What's likely to happen over time | Prognosis | Cohort study |
| Whether an exposure/drug causes harm | Harm | Cohort or case-control |
| Whether it's worth the money/resources | Cost-effectiveness | Economic evaluation |
| Whether to follow a recommendation | Guideline check | GRADE-based guideline (Lesson 7) |

**Step 5 — Build PICO(T) for each query.**
- **P** — population/problem, pulled from the case's demographics + condition + setting.
- **I** — the intervention/test/exposure in question.
- **C** — the realistic comparator (placebo, standard care, no treatment, alternative test).
- **O** — the outcome that actually matters to *this* patient (not just what's easiest to measure).
- **T** (optional) — time frame, if duration changes the answer.

**Step 6 — Draft the search string.**
For each PICO, draft (not run) a PubMed-style string: Title/Abstract terms for P/I/O, candidate MeSH terms flagged as unverified, `AND`/`OR` structure, and a publication-type filter matching the question type from Step 4.

**Step 7 — Surface ambiguity, don't resolve it silently.**
List anything the case doesn't specify that would change the PICO if known — missing risk factors, unclear severity, unstated comorbidities, unclear patient values. These become clarifying questions back to whoever provided the case, not assumptions.

### Closure / Review

**Step 8 — Anticipate the appraisal that will follow.**
Once a query returns a paper, tag which checklist applies so the next step is already framed:
- **Therapy →** Lesson 3: validity (randomization, allocation concealment, blinding, baseline similarity, follow-up/ITT) → results (ARR/RRR/NNT/CI) → applicability.
- **Diagnosis →** Lesson 5: valid gold-standard comparison, blinding, spectrum of patients → sensitivity/specificity/LR+/LR− → does the patient's pre-test probability match the study population.
- **Prognosis/Harm →** Lesson 6: confounders adjusted for, exposure/outcome measured blindly and consistently → HR/OR/RR + CI, absolute risk over a meaningful time frame → does the patient resemble the study population.
- **Guideline check →** Lesson 7: GRADE certainty-of-evidence and strength-of-recommendation stated separately, conflict-of-interest/funding disclosed, update date current → does the patient match the guideline's target population.

**Step 9 — Close with a stress-test query.**
Once queries are drafted (and, later, answered), add one adversarial query per major conclusion: *"What is the strongest argument that this conclusion is wrong or overstated, given the evidence?"* (Lesson 9 / prompt library §6).

**Step 10 — Restate the patient's priority.**
End the whole output with the patient's own stated priority or value, in one sentence, so it doesn't get lost among the technical queries.

---

## The One Hard Rule

> **The LLM drafts. You verify every number and citation against the source.**

This module generates *questions and search strategies* from case data — it does not generate trial results, statistics, or guideline recommendations that didn't come from a source you've actually opened. Any number that appears in a later step must be traceable to a specific sentence in a specific paper.

---

## Reference: full course

- [Course index](https://avi33tbtt.github.io/ebm/) · [Techie Summary (cheat sheet)](https://avi33tbtt.github.io/ebm/techie-summary.html) · [Prompt Library](https://avi33tbtt.github.io/ebm/prompts.html) · [Insights](https://avi33tbtt.github.io/ebm/insights.html)
- Lessons: [1 Patient-centred appraisal](https://avi33tbtt.github.io/ebm/lesson1.html) · [2 PICO](https://avi33tbtt.github.io/ebm/lesson2.html) · [3 RCT appraisal](https://avi33tbtt.github.io/ebm/lesson3.html) · [4 Systematic reviews](https://avi33tbtt.github.io/ebm/lesson4.html) · [5 Diagnostic tests](https://avi33tbtt.github.io/ebm/lesson5.html) · [6 Prognosis & harm](https://avi33tbtt.github.io/ebm/lesson6.html) · [7 Guidelines/GRADE](https://avi33tbtt.github.io/ebm/lesson7.html) · [8 Statistics](https://avi33tbtt.github.io/ebm/lesson8.html) · [9 Full case](https://avi33tbtt.github.io/ebm/lesson9.html)
- Related: [Vibe Rounds Prompt Modules directory](https://avi33tbtt.github.io/Prompts/Prompts.html)
