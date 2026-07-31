# Module — Case Report → Patient Story Converter

**Objective:** Convert any medical case report — journal-style, ward-style, or a raw tagged case history — into a humanised, narrative "patient story" that preserves every clinically material fact while making the case legible, memorable, and emotionally intelligible to a learner, a patient advocate, or a lay reader.

**Indication:** Use whenever a learner has a case report (published n-of-1, de-identified ward case, or their own tagged case history from this repository) and wants a version that reads as a story of a person rather than a list of findings — for teaching, reflection, advocacy communication, or building narrative-reasoning skill (illness scripts are easier to retain as stories than as data tables).

> [!IMPORTANT] **Clinical Disclaimer & Independent Verification Required**
> All AI-generated outputs produced using this module — including the narrative itself, any inferred emotional content, and any inferred timeline — **require independent clinical verification before being acted upon or shared.** A "patient story" generated here is a **learning and communication artefact**, not a clinical document, and must never be entered into a medical record or used as a substitute for the source case report. Any emotional or experiential detail not explicitly present in the source case must be clearly flagged as a plausible narrative device, not a documented fact.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Load the case and set the narrative contract

### Step 58.0: Context Upload & Module Orientation

**Prompt:**

```
#VibeRounds I am a medical student/learner using Module 58 — Case Report → Patient
Story Converter. My goal is to transform a clinical case report into a narrative
"patient story" that a lay reader could follow and feel, while losing none of the
clinically material facts.

Here is the case report [paste in full — journal-style case report, ward case
summary, or tagged case history]:

[paste case report]

Please confirm you have received the case and understand your role: you are an AI
narrative-conversion assistant helping me learn to translate clinical data into
human story form — you are NOT generating new clinical facts, diagnoses, or
opinions beyond what is stated or directly implied in the source. Flag anything
you infer for narrative colour as [INFERRED — not in source]. Confirm before we begin.

```
> [!NOTE] **Application Note:** This step works with any level of source material — a two-paragraph case snippet or a full published case report with investigations and timeline. Richer source input unlocks a fuller story in Steps 58.2–58.4.

---

## Phase 2 · Execution — Building the patient story

### Step 58.1: Fact Extraction Ledger

*Validated Environment: Claude*

**Prompt:**

```
#VibeRounds Before writing anything narrative, extract and list every clinically
material fact from the case report as a ledger, organised under:

1. Demographics & context (age, sex, relevant background — no identifiers)
2. Presenting complaint & timeline (what happened, in what order, over what duration)
3. Examination & investigation findings
4. Diagnosis / working diagnosis
5. Management & interventions
6. Course & outcome
7. Any explicitly stated patient/family perspective, quote, or concern in the source

This ledger is the ground truth. Every fact in the story I ask you to write next
must trace back to one of these lines. Do not add anything here that is not in
the source case report.

```
> [!NOTE] **Application Note:** This step is the single most important safeguard in the module. Writing the ledger first, and only afterward the narrative, is what prevents the model from quietly inventing clinical details "for the sake of the story."

### Step 58.2: The Patient Story — First Draft

**Prompt:**

```
#VibeRounds Using ONLY the facts in the Step 58.1 ledger, write the case as a
narrative patient story. Guidelines:

- Give the patient a placeholder name or "Ms./Mr. [Initial]" — never a real
  identifier from the source
- Tell it in a natural story arc: who they were day-to-day, what changed, what
  it felt like for something to be wrong, what happened when they sought care,
  what was found, what was done, how it resolved (or where it stands)
- Write in third person, past tense, plain language a non-medical reader can follow
- Where the source is silent on subjective experience (fear, confusion, relief),
  you may add ONE brief, clearly-labelled plausible narrative touch per section,
  tagged inline as [INFERRED] — never more than one per section, never anything
  that contradicts or exceeds the clinical facts
- Preserve every clinically material fact from the ledger; do not omit anything
  for narrative flow
- Length: 400–700 words unless I specify otherwise

```
> [!NOTE] **Application Note:** The single-inference-per-section cap and inline [INFERRED] tagging are deliberate friction. They keep the story auditable — a learner (or supervising clinician) can see at a glance exactly where narrative licence was taken versus where the text is fact-anchored.

### Step 58.3: Fidelity Cross-Check

*Validated Environment: Claude*

**Prompt:**

```
#VibeRounds Now audit the story you just wrote against the Step 58.1 ledger:

(1) Go line by line through the ledger — confirm which story sentence(s) each
    line maps to. Flag any ledger fact that did NOT make it into the story.
(2) Go through the story and list every [INFERRED] tag used — confirm each is
    clearly narrative colour and not a disguised clinical claim.
(3) Flag anything in the story that is NOT traceable to the ledger and was not
    tagged [INFERRED] — this is an error and must be corrected.

Produce a short compliance table:
| Ledger Fact | Present in Story? | Story Sentence/Section |

```
> [!NOTE] **Application Note:** This is the module's QA gate. A story that fails this cross-check should be revised (return to Step 58.2) before use. This step operationalises Framework D (Critical Awareness) at the sentence level rather than only at the closure stage.

### Step 58.4: Register Variants — Audience Adaptation

*Use when the story needs to be reshaped for a specific audience.*

**Prompt:**

```
#VibeRounds Produce two additional register variants of the Step 58.2 story,
using the exact same fact ledger (no new facts, same [INFERRED] discipline):

VARIANT A — "For a patient/family reader": Grade 8 reading level, warm and
plain, second person optional, minimal medical jargon (define any unavoidable
term in brackets).

VARIANT B — "For a medical student teaching session": same narrative arc, but
retain medical terminology, and add a one-line teaching aside after each major
story beat (e.g., "[Teaching note: this is why the WBC differential mattered here]").

```
> [!NOTE] **Application Note:** Register variants let a single fact-audited story serve both a lay-facing and a teaching-facing purpose without re-deriving the narrative from scratch, which would reopen the fidelity risk Step 58.3 just closed.

---

## Phase 3 · Closure / Review — Reflection and audit trail

### Step 58.5: Socratic Debrief — What the Story Reveals

**Prompt:**

```
#VibeRounds Before we close, ask me three questions about what converting this
case into a story taught me:

Question 1: Ask me which clinical fact felt most different — more vivid, more
concerning, or more understandable — once it was expressed as part of a story
rather than as a data point.

Question 2: Ask me to identify one thing the narrative form made easier to
grasp, and one thing it risked oversimplifying or dramatising compared to the
original case report.

Question 3: Ask me what I would want to know from the real patient that neither
the case report nor the story could tell me.

After I respond, give me brief formative feedback connecting my answers to
Fink's Human Dimension and Caring dimensions (Framework B).

```
> [!NOTE] **Application Note:** This closure loop prevents the story from being consumed as a comfortable substitute for the clinical source. It routes the exercise back to the Vibe Rounds pedagogic spine — narrative is a learning lens, not a replacement for the case report or the patient.

### Step 58.6: Critical Awareness Debrief — Narrative Lens

**Prompt:**

```
#VibeRounds Apply the Vibe Rounds Critical Awareness lens to the story we produced:

(1) Where might narrative framing (story arc, emotional colour, chosen order of
    events) have shaped how sympathetic, severe, or "interesting" this case feels,
    independent of the actual clinical facts?

(2) Could this story format be more prone to memorable-but-wrong recall than the
    original case report (the "vivid anecdote over base rate" bias)? Where
    specifically?

(3) What is lost by converting tabular/timeline clinical data into prose — what
    would a reader NOT be able to reconstruct accurately from the story alone?

(4) One sentence: what should I re-check against the original case report before
    using this story for teaching or advocacy purposes?

```
> [!NOTE] **Application Note:** See [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html). Narrative conversion is powerful for retention and empathy-building but carries a specific bias risk (availability/vividness bias) that this step makes explicit.

---

## Flexible Input Reference

| Input Type                                      | Steps Unlocked                     | Notes                                                              |
| ------------------------------------------------ | ----------------------------------- | ------------------------------------------------------------------- |
| Short case snippet (2–5 sentences)               | 58.0, 58.1, 58.2, 58.5, 58.6        | Story will be short; fewer ledger lines to audit                    |
| Full published case report / tagged case history | All steps                           | Richest ledger; Steps 58.3 and 58.4 most valuable at this input level |

---

## Module Maturity

| Module        | Status        | Description                                                                                          |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------ |
| **Module 58** | 🟡 In Progress | Structured; fidelity cross-check (58.3) designed but untested against live student cohorts.            |

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (narrative warmth in Step 58.2)
- [Framework B — Fink's FLINK Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-B-Finks-FLINK-Taxonomy.html) (Human Dimension & Caring dimensions targeted by Step 58.5)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step 58.6)
- [Module 2 — Patient-Advocate Case Documentation](https://avi33tbtt.github.io/Prompts/Module-02-Patient-Advocate-Case-Documentation.html) (complementary — Module 2 builds the record, Module 58 narrativises it)
- [Module 9 — N-of-1 Case Research Protocol](https://avi33tbtt.github.io/Prompts/Module-09-Case-Research_Protocol.html) (a natural source case for this module's input)
- [Module 26 — Bias Auditing](https://avi33tbtt.github.io/Prompts/Module-26-Bias-Auditing.html) (relevant to the vividness/availability bias flagged in Step 58.6)

---

## Navigation

**Previous:** [← Module 57 — Clinical Cognition Deep Dive](https://avi33tbtt.github.io/Prompts/Module-CC-Clinical-Cognition-Deep-Dive.html)

[← Back to README](https://avi33tbtt.github.io/Prompts/)

---

*Vibe Rounds Prompt Modules — Module 58 · Case Report → Patient Story Converter*
*Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*
