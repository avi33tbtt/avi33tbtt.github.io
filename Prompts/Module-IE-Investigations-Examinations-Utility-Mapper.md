# Module IE — Investigations & Examinations Utility Mapper

**Objective:** Given a clinical history or case dataset, generate a structured, ranked list of physical examinations and investigations that are useful for the case — with an explicit statement of *why* each is useful and what it teaches a clinical learner, rather than simply what a clinician would "order."

**Indication:** Any stage of a case where a learner has taken a history (or been given one) and needs to move from history to a rational examination/investigation plan; useful after Module 1 (Socratic Clinical Reasoning) history-taking, before Module 12 (Differential Diagnosis Deepdive), or as a standalone teaching exercise on test-selection reasoning.

> [!IMPORTANT] **Clinical Disclaimer**
> All AI-generated outputs produced using this module — including examination lists, investigation panels, and usefulness ratings — require independent clinical verification before being acted upon. This module does not select tests for a real patient; it teaches a learner how to reason about test selection using a case as the substrate.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Design Logic — Why "usefulness," not just a list

A junior learner asked to "list the relevant investigations" will often reproduce a textbook panel without being able to say *why* each item is on it. This module forces the AI to separate three things that are usually collapsed together:

| Dimension | Question it answers |
|---|---|
| **Diagnostic yield** | Does this test/exam distinguish between the leading differentials? |
| **Educational value** | What does *ordering* or *interpreting* this teach the learner about pathophysiology, semiology, or reasoning — independent of the result? |
| **Stewardship cost** | What is the harm, cost, delay, or invasiveness of getting this, and is it proportionate to the yield? |

Every output in this module is structured around these three axes so a learner internalises test-selection as a reasoning skill, not a checklist.

---

## Phase 1 · Initiation — Load the case and set the teaching contract

### Step IE.0: Session Setup

**Prompt:**

```
#VibeRounds You are entering Investigations & Examinations Utility Mapper
Mode. I will give you a clinical history or case dataset. Your role is
educational, not clinical: help me — a clinical learner — reason out which
physical examinations and investigations are useful for this case, and
why. For every examination or investigation you list, you must give: (1)
what it is looking for in this specific case (not generically), (2) its
usefulness rated as High / Moderate / Low yield for this presentation, (3)
one sentence on what a learner gains educationally from doing or
interpreting it, even if the result turns out to be normal. Do not just
reproduce a textbook panel — justify every item against the case features
I give you. Confirm you understand and ask me to paste the case.
```
> [!NOTE] **Application Note:** Requiring justification "against the case features" is the single most important instruction in this step — it is what stops the model from defaulting to a generic disease-based checklist and forces case-specific reasoning, which is the actual skill being taught.

---

## Phase 2 · Execution — Build the examination and investigation map

### Step IE.1: Case Intake & Problem Framing

**Prompt:**

```
#VibeRounds Here is the case: [PASTE CASE — demographics, presenting
complaint, history of present illness, past history, drug history, and
any examination/investigation findings already available]. Before listing
anything, first state back to me in one or two sentences: (1) the core
clinical problem as you understand it, (2) the two or three leading
differentials this history points toward. Do not proceed to examinations
or investigations yet — confirm your framing of the problem first.
```
> [!NOTE] **Application Note:** This checkpoint step exists so the learner can catch a misreading of the case before the AI builds an entire examination/investigation list on a wrong framing. It also models good clinical practice: never order a test before you can state what question it is answering.

### Step IE.2: Focused Physical Examination Plan

**Prompt:**

```
#VibeRounds Based on the case and the differentials you named, list the
physical examinations useful for this case. Group them as: (1) General
and vital sign examination relevant here, (2) System-specific examination
directly implicated by the history, (3) Targeted manoeuvres or special
tests relevant to the leading differentials. For each item give: what
positive or negative finding would shift the differential and in which
direction, its yield (High/Moderate/Low) for this case specifically, and
one learning point about the sign, manoeuvre, or examination technique
itself.
```
> [!NOTE] **Application Note:** Splitting examination into general/system-specific/targeted mirrors how clinical examination is actually taught and performed, and prevents the AI from producing an undifferentiated bullet list where a stethoscope check and a targeted neurological manoeuvre carry equal apparent weight.

### Step IE.3: First-Line Investigation Panel

**Prompt:**

```
#VibeRounds Now list the first-line investigations useful for this case —
the tests that are low-cost, low-risk, and high-yield enough that most
clinicians would order them early. For each: (1) what it is looking for
in this case, (2) usefulness rating (High/Moderate/Low), (3) what an
abnormal result would change about the differential or next step, (4)
what a normal result would still teach the learner — a normal result that
teaches nothing is a weak justification for ordering it.
```
> [!NOTE] **Application Note:** Point (4) — forcing a justification for the normal-result case — is a deliberate stewardship check. It surfaces reflex-ordered tests ("routine bloods") that have low true diagnostic yield for the specific case, even though they are cheap.

### Step IE.4: Second-Line & Confirmatory Investigations

**Prompt:**

```
#VibeRounds Now list the second-line or confirmatory investigations for
this case — tests that are more specific, more invasive, more costly, or
would only be reached after first-line results. For each: (1) which
specific first-line result or clinical trigger would justify escalating
to it, (2) what it confirms or excludes, (3) usefulness rating for this
case, (4) one sentence on the risk, cost, or delay trade-off a learner
should weigh before ordering it.
```
> [!NOTE] **Application Note:** Anchoring second-line tests to an explicit trigger ("which result would justify escalating") teaches sequential, Bayesian-style test ordering rather than shotgun panel ordering — directly reinforcing the reasoning taught in Module 36 (Bayesian Probability / Likelihood Ratio Engine).

### Step IE.5: Low-Yield / Not-Indicated Register

**Prompt:**

```
#VibeRounds Now list three examinations or investigations that a learner
might be tempted to order for this presentation but that are LOW yield or
NOT indicated given the specific case features. For each: (1) name the
test or examination, (2) why it seems tempting (what generic teaching or
pattern-match makes it seem relevant), (3) why it is actually low-yield
or inappropriate for this specific case, (4) what over-ordering it would
teach the learner to avoid.
```
> [!NOTE] **Application Note:** This is the highest-yield step in the module for combating over-investigation habits. Learners are rarely taught explicitly *not* to order something; naming the tempting-but-wrong test and explaining why is a stronger educational intervention than a positive list alone. This step operationalises the same stewardship logic as Module 34 (High-Value Care Auditor) at the single-case level.

### Step IE.6: Usefulness Ranking & Sequencing

**Prompt:**

```
#VibeRounds Now take every examination and investigation you have listed
across Steps IE.2–IE.4 and produce a single ranked table, ordered from
highest to lowest overall usefulness for this case. Columns: Item | Type
(Examination/First-line/Second-line) | What it is looking for | Yield
(High/Moderate/Low) | Educational value (one line) | Suggested sequence
position (Now / After first-line results / Only if escalation triggered).
```
> [!NOTE] **Application Note:** Consolidating into one ranked table is the deliverable a learner can actually use at the bedside or in a case write-up. The "suggested sequence position" column converts a flat list into a workflow, reinforcing that investigation is a staged process, not a one-time order set.

---

## Phase 3 · Closure / Review — Synthesise and extract the learning

### Step IE.7: Teaching Debrief

**Prompt:**

```
#VibeRounds We have built the full examination and investigation map for
this case. Now give me a short teaching debrief: (1) Which single
examination or investigation on the list would most efficiently narrow
the differential if I could only choose one — and why? (2) What general
principle of test selection (not specific to this case) did this exercise
illustrate? (3) What is one question I should ask myself before ordering
any test on a future, different case, based on what this exercise taught
me?
```
> [!NOTE] **Application Note:** Question (2) is what makes the exercise transferable — without it, the learner has a good plan for one case but no portable reasoning skill. This step is the module's equivalent of Module 12's Step 12.9 integration debrief.

### Step IE.8: Red Flag & Urgent Item Check

**Prompt:**

```
#VibeRounds Review the full list one more time and flag anything that
should be treated as urgent or time-critical rather than routine — any
examination finding or investigation result that, if abnormal, would
change immediate management rather than just refine the differential.
For each: state the item, the abnormal finding that would be urgent, and
the timeframe in which it should be acted on or escalated to a senior
clinician.
```

---

## Quick-Start Reference Card

*For experienced users who know the module — copy the step you need directly.*

| Step | One-line purpose | Phase |
|---|---|---|
| IE.0 | Set the educational contract | Initiation |
| IE.1 | Frame the problem and leading differentials before listing anything | Execution |
| IE.2 | Focused physical examination plan (general / system-specific / targeted) | Execution |
| IE.3 | First-line investigations, with a "what does a normal result teach" check | Execution |
| IE.4 | Second-line/confirmatory investigations, trigger-anchored | Execution |
| IE.5 | Low-yield / not-indicated register — the over-ordering guardrail | Execution |
| IE.6 | Consolidated ranked table with suggested sequencing | Execution |
| IE.7 | Teaching debrief — transferable principle extraction | Closure |
| IE.8 | Red flag / urgent item check | Closure |

---

## Module IE Maturity Level

| Module | Status | Description |
|---|---|---|
| **Module IE** | 🔴 Primitive | Proposed structure — not yet validated in a live clinical or educational environment. Evidence base is expert opinion / design rationale only. |

---

## Prompt Analytics Tags

| Step | AI Mode |
|---|---|
| IE.0 | Traditional |
| IE.1 | Socratic |
| IE.2 | Traditional |
| IE.3 | Traditional |
| IE.4 | Traditional |
| IE.5 | Devil's Advocate |
| IE.6 | Traditional |
| IE.7 | Socratic |
| IE.8 | Traditional |

> **Tagging rationale:** Step IE.1 is Socratic because the learner's own framing must be surfaced and checked before the AI proceeds. Step IE.5 is Devil's Advocate — it deliberately challenges the learner's likely instinct to over-order. Step IE.7 is Socratic because it asks the learner to generalise the principle themselves rather than simply receiving a summary. All other steps are Traditional, producing structured deliverables.

---

## Related Modules & Frameworks

- **Module 1 — Socratic Clinical Reasoning:** natural predecessor; a learner who has worked through history-taking there can carry the case straight into Module IE.
- **Module 12 — Differential Diagnosis Deepdive:** Step IE.6's ranked table can feed directly into Step 12.5 (Evidence Sufficiency Challenge) once investigations have actually been obtained.
- **Module 34 — The High-Value Care (HVC) Auditor:** Step IE.5 applies the same stewardship logic at the single-case, pre-order stage rather than as a retrospective audit.
- **Module 36 — Bayesian Probability / Likelihood Ratio Engine:** Step IE.4's trigger-anchored escalation logic is a plain-language precursor to formal likelihood-ratio reasoning.
- **Framework D — Vibe Rounds Critical Awareness Framework:** relevant to Step IE.5, where over-investigation habits and their cognitive origins are surfaced.

---

## Navigation

[← Back to README](https://avi33tbtt.github.io/Prompts/)

---

*VibeRounds Prompt Modules · Module IE — Investigations & Examinations Utility Mapper*
*Proposed as a companion module in the style of Dr. Avinash Kumar Gupta's Vibe Rounds system*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*
