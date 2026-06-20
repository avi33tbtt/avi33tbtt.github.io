[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module 13 — Medication Reconciliation & Polypharmacy Audit

**Objective:** Guide a medical student through a structured, patient-centred medication audit on a real or case-based patient on 5+ drugs — building the skills to identify drug-drug interactions, drug-disease conflicts, prescribing cascades, and practical adherence barriers through active reasoning, not passive receipt of answers.

**Indication:** Patient-centred learning sessions where the student is working with a real patient (under supervision) or a de-identified case and has access to a medication list; clerkship or bedside teaching preparation; PaJR WhatsApp group case reviews where the student is the active learner and a faculty teacher or senior student is facilitating; self-directed pharmacology revision on a complex multi-morbid case.

> [!IMPORTANT] **Clinical Disclaimer** All AI-generated outputs from this module — including interaction flags, deprescribing observations, and dose-range alerts — are learning scaffolds, not clinical decisions. Nothing in this module authorises a student to change, stop, or recommend changing any patient's medication. All findings must be discussed with a licensed supervising clinician before any action is taken. Drug interaction databases are incomplete; clinical context always overrides algorithmic output.

> [!IMPORTANT] **Data Security Note** Medication records often appear on prescription photos that also capture full name, date of birth, and home address. Before using this module: type drug name, dose, frequency, and route as text rather than uploading a prescription image. Use de-identified data only in any shared LLM environment.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Orient the AI and set the learning contract

### Step 13.0: Student Session Setup

**Prompt:**

```
#VibeRounds You are a warm, knowledgeable clinical pharmacology mentor
helping a medical student learn medication reconciliation through a real
patient case. Your role is not to audit the prescription for the clinical
team — it is to teach the student to think like someone who does. At every
step, ask the student to reason first before you reveal the finding. When
the student identifies a concern correctly, name it explicitly: 'That is
exactly the kind of flag a clinician would raise.' When they miss one, do
not simply list it — ask a guiding question that helps them find it
themselves. Begin by telling the student one thing that makes polypharmacy
clinically interesting before we look at any medications. Then ask them
to share the patient's medication list and active diagnoses. Confirm you
understand your role before we begin.
```

> [!NOTE] **Application Note:** The opening instruction — tell the student one interesting thing about polypharmacy before looking at any medications — is a direct carry-over of the curiosity hook in Step 1.0 (Module 1). It activates engagement before the cognitive load of the medication table lands. The 'ask the student to reason first' contract is the core distinction between this module and a standard drug interaction checker: the AI is a teacher using a real case as material, not a lookup tool. Run once at the start of every session.

---

## Phase 2 · Execution — Guided medication audit with active reasoning

### Step 13.1: Build the Medication Table Together

**Prompt:**

```
#VibeRounds Help me build the medication table for this patient. For each
drug I enter, ask me to fill in: (1) the generic name, (2) dose, (3)
frequency, (4) route, (5) what condition it is treating — in my own words,
(6) how long the patient has been on it, if I know. If I do not know a
field, prompt me with: 'That is worth finding out — what would be your
source for that information on a real ward?' Mark any field I cannot fill
as [NOT RECORDED] rather than skipping it, so we can see the gaps clearly.
When the table is complete, ask me: 'Looking at the total number of
medications, what term would you use to describe this prescribing pattern
— and at what threshold does that term apply?'
```

> [!NOTE] **Application Note:** Making the student fill in the indication column in their own words is the highest-yield learning moment in this step — students who cannot state what a drug is for in plain language do not yet understand the patient's condition well enough to spot a drug-disease conflict. The closing question (polypharmacy vs hyper-polypharmacy threshold) is a Bloom's Remember-level checkpoint: the threshold is ≥5 drugs for polypharmacy and ≥10 for hyper-polypharmacy, but the student should produce that answer, not receive it unprompted.

### Step 13.2: Drug-Drug Interaction Hunt — Student-Led

**Prompt:**

```
#VibeRounds Now I want to find the drug-drug interactions in this list
myself before you tell me. For each pair of medications I name, tell me
whether I am right, partially right, or have missed the mechanism — then
ask me the next question rather than listing all the remaining interactions.
Start by asking me: 'Which two drugs on this list would you be most worried
about being given together — and what is your reasoning?' After I attempt
each pair, give me a hint if I am stuck rather than the answer. Once I have
worked through my own list, show me any interactions I missed, ranked by
severity: MAJOR first, then MODERATE, then MINOR. For each missed
interaction, explain the mechanism in one sentence and ask me: 'Now that
you know the mechanism, what would you watch for clinically in this
patient?'
```

> [!NOTE] **Application Note:** The student-led structure here — attempting interactions before the AI lists them — is the most important design decision in this step. Students who receive a ranked interaction list first rarely retain the reasoning; students who commit to a pair and defend it before receiving feedback retain both the interaction and the mechanism. The 'what would you watch for clinically' follow-up converts pharmacological knowledge into clinical observation skill, which is the level of understanding a bedside student actually needs.

### Step 13.3: Drug-Disease Conflict — The Comorbidity Layer

**Prompt:**

```
#VibeRounds The patient has the following active diagnoses: [LIST
DIAGNOSES]. I want to check whether any of the medications conflict with
these conditions. Walk me through this Socratically: name one diagnosis
at a time and ask me whether any medication on the list is problematic for
it — before telling me. For each one I identify correctly, tell me whether
it is an absolute contraindication, a relative contraindication, or a
caution. For any I miss, ask me a guided question: 'Think about what this
condition does to [organ system] — does that change how you would want any
of these drugs to behave?' End this step by asking me: 'Which drug-disease
concern on this list would you escalate first, and why?'
```

> [!NOTE] **Application Note:** The organ-system guiding question is the key scaffold here — it gives the student a reasoning route without giving the answer. The 'escalate first' question at the end is a clinical prioritisation probe that tests a skill distinct from recognition: not just 'can you find the conflict' but 'do you understand why it matters urgently.' This connects to the renal/hepatic dose-adjustment concerns that are among the most common prescribing errors in ward medicine — metformin in renal impairment, digoxin toxicity in the elderly, DOAC dosing in CKD — and which a student on the ward is in a position to notice and flag.

### Step 13.4: High-Risk Drug Class Spotlight — Five Classes

**Prompt:**

```
#VibeRounds Some drug classes carry a disproportionate share of medication
harm. For each of the following classes, first ask me whether this patient
is on a drug in that class — and if so, what specific concern I would have.
Then fill what I miss. The five classes: (1) Anticoagulants — warfarin,
DOACs, heparin; (2) Hypoglycaemic agents — insulin, sulphonylureas,
SGLT2 inhibitors; (3) Antihypertensives — especially ACE inhibitors, ARBs,
diuretics, and the combination with NSAIDs; (4) Opioids — including
co-prescription of other respiratory depressants; (5) Psychotropics —
antipsychotics, benzodiazepines, antidepressants, and falls risk. For each
class that is present, end with: 'What is the one bedside observation that
would tell you this drug is causing a problem right now?' For any class not
present, say 'Not on this list — no check needed' and move on.
```

> [!NOTE] **Application Note:** The 'one bedside observation' question anchors the class-level pharmacology to something the student can actually do at the bedside — observe. It bridges pharmacological knowledge and clinical behaviour, which is the gap that most pharmacology curricula leave open. The 'Not on this list — no check needed' instruction is equally important: a student who generates generic answers about drug classes not prescribed to this patient is practising pattern-matching, not patient-centred thinking. The triple whammy (ACEi/ARB + diuretic + NSAID → AKI) is the specific three-way combination worth drawing out explicitly if all three are present, since it is one of the most common causes of ward AKI and is invisible to standard pairwise interaction checkers.

### Step 13.5: Practical Safety — What the Patient Actually Experiences

**Prompt:**

```
#VibeRounds Pharmacological interactions are one layer of medication risk.
Now I want to think about practical risks — the ones the patient lives
with every day. Ask me the following questions one at a time, wait for my
answer, then add what I missed: (1) How many separate doses does this
patient take per day in total? What problems might that cause? (2) Are
any of these medications supposed to be taken at a specific time relative
to food, other tablets, or each other — and is that documented? (3) Are
there any foods or common drinks that interact with any of these drugs?
(4) Is there anything about this patient's circumstances — age, living
alone, swallowing difficulty, literacy, supply access — that might make
any of these medications harder to take correctly? (5) If this patient
misses one dose of each drug on the list, which missed dose carries the
most clinical risk, and which one can be safely doubled the next day?
```

> [!NOTE] **Application Note:** This step is the patient-centred core of the module — it asks the student to think about the person taking the medication, not just the pharmacology. In PaJR settings, the student may have access to the advocate's observations about the patient's daily routine, which makes this step unusually rich: the AI can work from actual reported behaviour rather than hypothetical concerns. Question 5 (which missed dose is most dangerous vs which can be doubled) is a Bloom's Evaluate-level probe that requires integrating pharmacokinetics, therapeutic window, and clinical consequence simultaneously — it is harder than it looks and should be attempted genuinely before any answer is offered.

### Step 13.6: Prescribing Cascade Detection — The Hidden Chain

**Prompt:**

```
#VibeRounds I want to check for prescribing cascades — situations where a
drug was added to treat a side effect of another drug rather than a new
disease. This is one of the most common and underdiagnosed causes of
polypharmacy. For each medication on the list, ask me: 'Can you think of
any other drug on this list that could be causing a side effect that this
medication was prescribed to treat?' Work through them one at a time.
When I identify a possible cascade, ask me: 'How would you test whether
that is a cascade or a genuinely independent indication?' When I finish,
show me any cascades I missed and explain the most classic examples —
including why the original prescriber may not have recognised it as a
cascade at the time.
```

> [!NOTE] **Application Note:** Classic cascades a student should be able to identify with scaffolding include: opioid-induced constipation treated with a laxative; NSAID-induced dyspepsia treated with a PPI; antihypertensive-induced ankle swelling treated with a diuretic; antipsychotic-induced Parkinsonism treated with an anticholinergic. The 'how would you test whether it is a cascade' question is deliberately hard — the correct answer (trial withdrawal of the suspected causal drug under supervision) requires the student to understand both the pharmacology and the clinical ethics of stopping a medication, which is a sophisticated and high-yield reasoning skill.

### Step 13.7: Socratic Integration Round — Reasoning Across All Findings

**Prompt:**

```
#VibeRounds We have now worked through the full medication audit. Before
we move to any summary, I want to reason across all the findings together.
Ask me: (1) Of everything we found, which single concern would you bring
to the supervising clinician first — and how would you frame it in one
sentence? (2) Which finding surprised you most, and why did you not spot
it before we examined it together? (3) If this patient is discharged
tomorrow with this exact medication list and no changes, what is the most
likely medication-related harm they will experience in the next 30 days?
(4) What is the one thing you want to read about tonight because of what
this case taught you? Take each question one at a time. Do not answer
the next until I have genuinely attempted the current one.
```

> [!NOTE] **Application Note:** This step is the module's highest-yield learning moment — it forces synthesis across all the individual audit steps rather than leaving each finding as an isolated fact. Question 1 tests clinical communication (framing a concern for a senior); question 2 tests metacognition (recognising one's own blind spots); question 3 tests predictive clinical reasoning (30-day harm projection); question 4 activates self-directed learning. Together they span Bloom's levels Apply through Create. In PaJR group settings, these four questions can be posted as group discussion prompts after the student has attempted them privately.

---

## Phase 3 · Closure / Review — Consolidate and produce learning outputs

### Step 13.8: Personal Learning Summary — Student-Authored

**Prompt:**

```
#VibeRounds Help me write my own learning summary from this session.
Prompt me to fill in the following — ask me each one and then help me
refine my answer rather than writing it for me: (1) The three most
important pharmacological principles this case illustrated, in my own
words; (2) The one finding I would have missed without this structured
process; (3) The one clinical observation I will make every time I see
a patient on polypharmacy going forward; (4) A one-sentence summary of
this patient's medication risk that I could present to my supervising
clinician. After I have completed all four, reflect back to me: 'Based
on what you have written, here is what you understood well — and here is
the one concept worth revisiting before your next session.'
```

> [!NOTE] **Application Note:** Making the student author the summary (with AI as editor, not author) is the deliberate design choice here — passive receipt of an AI-generated summary produces lower retention than active reconstruction. The one-sentence clinician-facing summary at the end of point 4 is a communication skill as much as a pharmacology skill: it requires the student to compress clinical complexity into a safe and actionable format for a senior, which is a core ward competency. The AI's closing reflection mirrors the structure of Step 1.7 (Module 1's End-of-Case Teaching Summary): name what was understood well before naming what needs revisiting.

### Step 13.9: Medication Brief for the Patient Advocate

**Prompt:**

```
#VibeRounds Based on everything we have found in this audit, help me
write a plain-language medication brief that the patient's advocate —
a non-medical family member — could actually use. I will draft it first;
you tell me what is unclear, what I have left out, and whether the reading
level is appropriate. The brief should include: (1) a plain-language
medication table — what each drug is called, what it is for in one
sentence, and when to take it; (2) a list of three things the advocate
should watch for and report to the clinical team; (3) a short checklist
of what to bring to every doctor's appointment. After I draft it, ask me:
'Is there anything in the pharmacological findings that you chose not to
include — and why?' That choice is as important as what you included.
```

> [!NOTE] **Application Note:** This step converts a pharmacology audit into a health communication exercise — a skill gap that is rarely addressed in medical school curricula despite being a daily ward task. The closing question ('what did you choose not to include — and why?') is the critical thinking probe: a student who copies interaction flags verbatim into an advocate-facing document has not understood the difference between clinical information and actionable safety guidance. The correct answer includes the recognition that an advocate who reads 'MAJOR drug interaction' without context may stop a medication unilaterally, which could cause harm — so the brief communicates observable safety signals (watch for bleeding, dizziness, low blood sugar) rather than pharmacological mechanisms.

### Step 13.10: PaJR Group Reflection Post

*For use in PaJR WhatsApp learning groups — a short student-authored post summarising the learning for the group.*

**Prompt:**

```
#VibeRounds Help me write a short reflection post for our PaJR learning
group about what this medication audit taught me. The post should have
three parts: (1) one clinical pearl from the pharmacology — something
I did not know or had not connected before this session; (2) one question
I still have that I want to discuss with the group or my supervisor;
(3) one practical tip for any student auditing a polypharmacy patient for
the first time. Keep the whole post under 150 words. I will draft it; you
help me sharpen it so it is useful to other students in the group, not
just a record of what I did.
```

> [!NOTE] **Application Note:** This step serves the PaJR group learning architecture — the student is not just a receiver of teaching but an active contributor to the group's collective knowledge. The three-part structure (pearl / open question / tip for others) is calibrated to produce posts that are useful to other students at different stages: the pearl rewards those who read; the open question invites the faculty or senior students to respond; the tip for others multiplies the learning beyond the student who ran the session. In PaJR groups where the teacher posts findings, this step gives the student their own voice in the group thread.

### Step 13.11: Session Closure Checklist — Student Self-Assessment

**Prompt:**

```
#VibeRounds Before we close, run the session closure check with me.
Ask me to confirm the following one at a time: (1) Can I name the two
most clinically significant findings from this audit without looking at
my notes? (2) Do I know which finding needs to be escalated to my
supervising clinician, and have I planned how to raise it? (3) Is there
any field that remained [NOT RECORDED] that I now know how to find on
a real ward? (4) Have I completed my personal learning summary (Step
13.8)? (5) Is there anything from this session I want to flag for the
patient's advocate or family? For any item I cannot confirm, note it as
OPEN and ask me: 'What is your plan for closing this before your next
clinical contact with this patient?'
```

> [!NOTE] **Application Note:** The student-facing closure checklist replaces the clinician-facing 'reconciliation is complete' gate from a professional audit module — because for a student, completion is a learning milestone, not a medicolegal standard. The 'what is your plan for closing this' follow-up question is deliberately forward-looking: it activates self-directed learning rather than ending the session on an unresolved gap. Point 2 — 'have I planned how to raise it' — is a communication rehearsal prompt, not just a knowledge check. A student who knows what to escalate but does not know how to raise it with a senior has only half the competency.

---

## Quick-Start Reference Card

*For experienced users — copy the step you need directly.*

| Step | One-line purpose | Phase |
|---|---|---|
| 13.0 | Set learning contract — AI as teacher, student reasons first | Initiation |
| 13.1 | Build medication table collaboratively, gaps visible | Execution |
| 13.2 | Student-led drug-drug interaction hunt, AI fills gaps | Execution |
| 13.3 | Drug-disease conflict — Socratic comorbidity layer | Execution |
| 13.4 | Five high-risk drug class spotlight, bedside anchored | Execution |
| 13.5 | Practical safety — what the patient actually experiences | Execution |
| 13.6 | Prescribing cascade detection — the hidden chain | Execution |
| 13.7 | Integration round — reasoning across all findings | Execution |
| 13.8 | Student-authored personal learning summary | Closure |
| 13.9 | Plain-language advocate brief — student drafts, AI edits | Closure |
| 13.10 | PaJR group reflection post — student voice in the group | Closure |
| 13.11 | Session closure self-assessment checklist | Closure |

---

## Module 13 Maturity Level

| Module | Status | Description |
|---|---|---|
| **Module 13** | 🔴 Primitive | Proposed structure — not yet validated in a live clinical or educational environment. Pharmacology framework logic is derived from published STOPP/START criteria and standard clinical pharmacology curricula but has not been formally tested against those tools or assessed for learning outcomes. |

---

## Prompt Analytics Tags

| Step | AI Mode |
|---|---|
| 13.0 | Socratic |
| 13.1 | Socratic |
| 13.2 | Socratic |
| 13.3 | Socratic |
| 13.4 | Socratic · Devil's Advocate |
| 13.5 | Socratic |
| 13.6 | Socratic · Devil's Advocate |
| 13.7 | Socratic |
| 13.8 | Socratic · Traditional |
| 13.9 | Socratic · Traditional |
| 13.10 | Traditional |
| 13.11 | Traditional |

> **Tagging rationale:** The original module (professional-facing) was predominantly Traditional. This student-centred revision is predominantly Socratic — the AI withholds findings until the student attempts them in every execution step. Steps 13.4 and 13.6 carry Devil's Advocate dual tags: in 13.4 the AI is actively probing the student's assumptions about drug class risks (adversarial lens on their reasoning); in 13.6 it is challenging them to detect a hidden prescribing pattern that their initial reading missed. Steps 13.8 and 13.9 are Socratic + Traditional: the student authors content and the AI edits/scaffolds, producing a structured deliverable through an active process. Steps 13.10 and 13.11 are Traditional — they produce a group post and a checklist with the AI in a supporting rather than teaching role.

---

## Design Rationale & What Changed From the Professional Version

The original design of Module 13 assumed three concurrent user tiers — patient advocate, intern, and ward physician — each entering through a different initiation prompt and receiving different outputs. That architecture was built for a clinical workflow.

This revision has a single user: **a medical student doing patient-centred learning.** Every structural consequence of that change:

| Dimension | Original (professional) | This version (student) |
|---|---|---|
| **Primary user** | Ward physician / intern / advocate | Medical student under supervision |
| **AI role** | Clinical audit tool + documentation aid | Clinical pharmacology teacher |
| **Step 13.0** | Three-tier entry (A / B / C) | Single student learning contract |
| **Execution steps** | AI runs the audit, produces findings | Student reasons first, AI fills gaps |
| **Step 13.7** | Optional Socratic layer, bolted on last | Central integration step, core to the module |
| **Closure outputs** | Clinician safety report + medicolegal checklist | Student learning summary + advocate communication exercise |
| **Step 13.10** | PaJR handoff note posted by physician | Student reflection post in their own voice |
| **Closure checklist** | 'Reconciliation is not complete until...' (medicolegal) | 'What is your plan for closing this?' (self-directed learning) |
| **Dominant AI mode** | Traditional (documentation) | Socratic (reasoning before reveal) |

The pharmacological content — interaction screening, drug-disease conflicts, high-risk class spotlighting, prescribing cascade detection — is identical in both versions. What changed is who does the thinking.

---

## Related Frameworks and Connections

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) — active throughout; the AI affirms correct student reasoning explicitly and by name at every step, consistent with Framework A's confidence-building trait set
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) — Step 13.1 targets Remember (thresholds, terminology); Steps 13.2–13.6 target Apply and Analyse; Step 13.7 targets Evaluate and Create; Step 13.8 targets Create (student-authored synthesis)
- [Framework D — Vibe Rounds Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) — Steps 13.6 (cascade detection) and 13.7 question 2 (what did you miss and why) are direct applications of Framework D's metacognitive and bias-awareness lens
- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) — Step 13.0 mirrors Step 1.0's session setup and curiosity hook; Step 13.8's closure structure mirrors Step 1.7's end-of-case teaching summary; the full module applies Module 1's Socratic contract to a pharmacology context
- [Module 2 — Patient-Advocate Case Documentation](https://avi33tbtt.github.io/Prompts/Module-02-Patient-Advocate-Case-Documentation.html) — Step 2.3 (Prescription Transcription) is the upstream data source for Step 13.1; if the advocate has completed Module 2, the student can import the medication table directly rather than rebuilding it
- [Module 3 — Extended Patient-Advocate Monitoring](https://avi33tbtt.github.io/Prompts/Module-03-Extended-Patient-Advocate-Monitoring.html) — practical safety concerns identified in Step 13.5 (adherence barriers, timing conflicts) can be forwarded as monitoring triggers to the advocate via Module 3 Step 3.3
- [Module 4 — Peer-Level Ward Round Preparation](https://avi33tbtt.github.io/Prompts/Module-04-Peer-Level-Ward-Round-Preparation.html) — Step 4.3 is the lighter-touch one-sentence polypharmacy screen for patients on fewer drugs; Module 13 is the dedicated deep-audit module for 5+ drug patients; a student who has completed Module 13 on a patient can use Step 4.1 (Pre-Rounds Consultant Prep) to prepare how to present their findings to a senior
- [Module 12 — Differential Diagnosis Deepdive](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html) — when a medication side effect or interaction is itself a diagnosis on the differential (drug-induced lupus, DILI, medication-overuse headache, serotonin syndrome), run Module 12 Step 12.4 (Zebra Test) alongside Step 13.2 to ensure drug causation is not excluded from the differential
- [PaJR × Vibe Rounds Demo Implementation](https://avi33tbtt.github.io/Prompts/pajr-viberounds-prompts.html) — Step 13.10 is the student's contribution to the PaJR group thread; Steps 13.7's four integration questions can be posted as group discussion prompts after the student attempts them privately

---

## Navigation

**Previous:** [← Module 12 — Differential Diagnosis Deepdive (Devil's Advocate Mode)](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html)

[← Back to README](https://avi33tbtt.github.io/Prompts/)

---

*VibeRounds Prompt Modules · Module 13 — Medication Reconciliation & Polypharmacy Audit*
*Proposed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*
