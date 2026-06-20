[← Back to README](README.md)

# Module 10 — Medical Journal & Article Reading

**Objective:** Turn a medical article into deeply digested clinical knowledge — by having the AI do the work of unpacking, layering, translating, and connecting the evidence, so the learner leaves with understanding that sticks rather than facts that evaporate.

**Indication:** Self-directed literature reading, pre-journal-club preparation, post-case deepening, or any moment when you have read (or are about to read) a paper and want to absorb it rather than merely skim it.

**Status:** 🟡 In Progress — authored June 2026; not yet validated against a live cohort.

**Design orientation:** This module is not a quiz. The AI's job here is not to test the learner — it is to *do* the intellectual processing that most readers skip: translating statistics into clinical meaning, mapping findings onto real patients, surfacing what the paper does not say, and layering understanding so the reader ends the session knowing more than the abstract told them.

> [!IMPORTANT]
> All AI-generated appraisal outputs — including effect-size interpretations, bias ratings, applicability assessments, and registry-linkage conclusions — require independent clinical verification before being acted upon. This module is a learning tool, not a clinical decision aid.

---

## Design rationale

The failure mode of medical reading is not lack of effort — it is passive absorption. A reader finishes an article, closes the tab, and retains the conclusion without internalising the *why*, the *for whom*, the *caveats*, or the *so what for my patient*. A week later, what remains is a fragile half-memory of a p-value.

Module 10 addresses this by inverting the reader's role. Instead of the learner summarising for the AI, **the AI digests for the learner** — in progressively deeper layers — so that understanding accumulates rather than evaporates.

Five steps in the Execution phase are **patient-anchored**: at those steps, the learner pastes a brief de-identified patient vignette and the AI presses the article's evidence directly against that patient. These five patients can be the same patient (tracking one case through every angle of the paper) or five different patients (stress-testing the paper's generalisability across patient types). Either approach is valid; the choice depends on the learner's goal for that session.

**AI mode profile:** This module is predominantly Traditional and Devil's Advocate — the AI produces, the learner reads and absorbs. No prompt requires a learner answer before the AI proceeds.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution — Layered Digestion → Phase 3 · Closure / Knowledge Crystallisation

---

## Phase 1 · Initiation — Load the article and anchor it to a patient

### Step 10.0: Article Load & Plain-Language First Read

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds You are a clinical knowledge companion. I am going to give you
a medical journal article. Your first job is to give me a plain-language
explanation of what this article is about — written as if you are
explaining it to a clinician who has not yet read it. Cover: (1) the
clinical problem being studied and why it matters, (2) what the
researchers did and why they chose that approach, (3) what they found —
in one or two sentences, no statistical notation, (4) why a clinician
should care about this finding. Make it readable and human. [paste
article, abstract, or publicly accessible URL]
```

> [!NOTE] **Application Note:** The plain-language first read is the entry gate. Statistics, methods, and caveats come in later layers. Starting with human-readable framing is deliberate — it gives the reader a mental scaffold to hang everything else onto before the complexity arrives.

---

### Step 10.1: Case Anchor — Patient 1

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Here is a patient I am managing or thinking about: [paste
a brief de-identified patient vignette — diagnosis, key history,
current management, and the specific clinical question you are facing].
Read this patient and the article together. Tell me in two or three
sentences: what specific clinical question does this article raise for
this patient? Is there anything in the paper that directly bears on a
decision already made in this case — and if so, does the evidence
support, challenge, or remain silent on that decision?
```

> [!NOTE] **Application Note:** The case anchor is not a quiz — the AI answers its own question. The learner reads the linkage and thinks: *yes, that is my patient.* Use a de-identified vignette only — remove name, date of birth, and any identifying details before pasting. The same patient can be reused across all five anchored steps, or a different patient used at each step to broaden the generalisability test.

---

## Phase 2 · Execution — Layered digestion

*The digestion phase works in six layers. Run them in sequence for maximum absorption. Each layer builds on the last.*

---

### Layer 1 — What the paper actually did (Methods translation)

#### Step 10.2: Study Design in Plain English

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Explain the study design of this article in plain clinical
language. Tell me: (1) what type of study this is and what that means for
the strength of the evidence, (2) who the participants were and whether
they represent the kinds of patients I see, (3) what exactly was done —
intervention and comparator — and (4) what was measured and why that
outcome was chosen. Where the methods have a meaningful limitation, name
it here as a practical note on what it means for how much I should trust
the finding — not as a textbook caveat list.
```

---

#### Step 10.3: Study Design — Patient 2 Applicability Check

**AI Mode:** Traditional · Devil's Advocate

**Prompt:**

```
#VibeRounds Look at the study population in this article and compare it
to this patient: [paste de-identified patient vignette]. Tell me
directly: would this patient have been eligible for enrolment in this
study? If not, what does that exclusion mean for whether I can apply this
paper's finding to their care? Give me a one-paragraph honest assessment
— not hedged academic language, a direct clinical opinion.
```

> [!NOTE] **Application Note:** External validity is the most consistently skipped step in clinical reading. Naming a real patient makes the question concrete rather than theoretical. This is the step most likely to reveal that a headline result does not apply to the patient you actually have.

---

### Layer 2 — What the numbers mean (Statistics translation)

#### Step 10.4: Effect Size in Human Language

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Translate the main statistical result of this article into
clinical language I can actually use. Tell me: (1) what the effect
measure is — RR, OR, HR, MD, NNT, or whatever applies — and what it
means in words, (2) what the confidence interval tells me about
uncertainty expressed as a practical range, not a statistical definition,
(3) whether the effect size is clinically meaningful — separate from
whether it is statistically significant, and (4) if an NNT is reported
or calculable, what that number means for a patient sitting in front of
me. If the paper reports multiple outcomes, focus on the primary outcome
first, then flag if any secondary outcome tells a different story.
```

---

#### Step 10.5: What the Statistics Do Not Tell Me

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Play devil's advocate on the statistics in this article. Tell
me: (1) what the numbers cannot tell me that I still need to know before
applying this finding, (2) whether the statistical significance was
driven by a large sample size rather than a meaningful effect, (3)
whether there are subgroup results that contradict or complicate the
headline finding, and (4) what would need to be true for this result to
be a false positive. Give me your honest read of where the statistical
story is weakest.
```

---

### Layer 3 — What could be wrong (Bias & methodology)

#### Step 10.6: Bias Map

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Map the most likely sources of bias in this study. For each
source you identify, give me: (1) what the bias is and how it likely
entered this specific study — not a textbook definition, (2) the
direction the bias probably pushed the result — towards or away from the
null, and (3) how much this should affect my confidence in the main
finding. Conclude with a single sentence: given all of this, what is
your overall bias-adjusted read of how reliable this result is?
```

---

#### Step 10.7: Evidence Gap Map — Patient 3

**AI Mode:** Devil's Advocate · Brainstorming

**Prompt:**

```
#VibeRounds This article answers one question. Tell me what questions it
deliberately or inadvertently leaves unanswered — and which of those
gaps matter most for clinical practice. For each gap, tell me whether
existing evidence elsewhere fills it or whether it is genuinely open.
Then tell me: for this patient [paste de-identified patient vignette],
which unanswered gap is most consequential for the clinical decision
I am facing?
```

> [!NOTE] **Application Note:** This prompt produces the learner's *next reading agenda* — turning a single article into a directed literature journey. The patient anchor at the end converts an abstract gap list into a clinically prioritised one.

---

### Layer 4 — Connection to the patient (Clinical integration)

#### Step 10.8: Management Implication — Patient 4

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Given what this article found, tell me concretely: does this
evidence change, support, or leave untouched the management of this
patient? [paste de-identified patient vignette]. Be direct. If the
evidence supports what is already being done — say so and say why. If it
challenges a decision already made — say so clearly and name the decision
point. If the paper is silent on this patient's situation — say that too,
and tell me why the gap exists.
```

---

#### Step 10.9: Counter-Evidence Radar

**AI Mode:** Devil's Advocate · Brainstorming

**Prompt:**

```
#VibeRounds Before I adopt this paper's finding into practice, tell me
what counter-evidence or alternative arguments I should be aware of.
Specifically: (1) are there other published studies that reach a
different conclusion on the same question, and if so, why might they
disagree? (2) what does current guideline consensus say — does this
paper align with, challenge, or extend it? (3) if a rigorous
methodologist were presenting this paper at journal club, what would
they say is the strongest reason not to act on this finding yet? Give
me the counter-argument, not just the caveat.
```

---

### Layer 5 — Deep learning integration (Frameworks)

#### Step 10.10: Bloom's Taxonomy — Article as Knowledge Object

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Apply Bloom's Revised Taxonomy to this article as a teaching
object. Tell me: (1) Remember — what are the two facts from this paper a
clinician must be able to recall? (2) Understand — what is the
conceptual insight this paper teaches beyond the result itself?
(3) Apply — in what clinical scenario would a clinician use this
finding, and how? (4) Analyse — what does this paper's design reveal
about the difficulty of studying this question well? (5) Evaluate — is
this paper a reliable basis for practice change, and why or why not?
(6) Create — what single sentence would you add to a local clinical
guideline based on this evidence, and for which patient population
exactly?
```

> [!NOTE] **Application Note:** See Framework C. Unlike Module 1 where Bloom's is a learner interrogation, here it is an AI-generated teaching analysis that the learner reads and internalises. The 'Create' level produces a draft guideline sentence — a concrete output the learner can test against their own clinical context.

---

#### Step 10.11: Fink FLINK — Significant Learning From This Article

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Apply Fink's six dimensions of significant learning to this
article and tell me what genuinely matters from it across each dimension:
(1) Foundational Knowledge — what are the two things I must now know
that I may not have known before reading this paper? (2) Application —
what will a clinician who has absorbed this paper do differently at the
bedside? (3) Integration — how does this finding connect to or reframe
something I already know about this condition or system? (4) Human
Dimension — what does this paper mean for the experience of being a
patient with this condition; does it change the conversation a clinician
should have with them? (5) Caring — does this evidence activate any
value conflict or ethical tension — for example around resource
allocation, treatment trade-offs, or whose outcomes were measured?
(6) Learning How to Learn — what does reading this paper teach me about
how to read the next paper on this topic more efficiently?
```

> [!NOTE] **Application Note:** See Framework B. Dimension 5 (Caring) is not optional — articles that appear value-neutral often embed ethical assumptions in their choice of outcome measure, comparator, or study population. Surfacing this is part of full digestion.

---

### Layer 6 — Patient communication (Translation to care)

#### Step 10.12: Patient Communication Distillation — Patient 5

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Based on this article, help me explain the evidence to this
patient: [paste de-identified patient vignette, including any relevant
context about the patient's education level or communication needs if
known]. Write a plain-language paragraph — the kind I could read aloud
in a clinic — covering: what the research found, what it means for this
patient specifically, and what I am recommending as a result. Do not
include statistical notation. Translate effect size into everyday impact
language. End with one sentence the patient can take home as their key
message.
```

> [!NOTE] **Application Note:** This step closes the loop between evidence and care. It is placed last in the execution phase deliberately — translation to patient language should happen *after* full critical appraisal, not before. A clinician who communicates an uncritically absorbed finding to a patient has not finished reading the paper.

---

## Phase 3 · Closure — Knowledge crystallisation

### Step 10.13: Critical Awareness Debrief (Framework D)

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Before I close this article session, apply the Vibe Rounds
Critical Awareness lens: (1) What publication bias, funding influence,
or framing choices might have shaped this paper's presentation of its
findings? (2) What assumptions about the patient population, healthcare
system, or resource context does this paper make that may not transfer
to my setting? (3) What is the single weakest link in this paper's
chain of inference — from question to method to result to conclusion?
(4) What is the most important clinical question this paper raises that
it cannot itself answer? Give me honest, targeted answers — not a
generic limitations section.
```

> [!NOTE] **Application Note:** See Framework D. This is not a reason to dismiss the paper — it is the final calibration step before deciding how much weight to give the finding in practice. A learner who cannot answer question 4 has not yet finished digesting the paper.

---

### Step 10.14: Knowledge Crystallisation Summary

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Produce a Knowledge Crystallisation Summary for this article
session. Structure it exactly as follows:

The finding in one sentence: [plain language, no jargon]
Who it applies to: [specific patient profile from the study population]
Effect in clinical terms: [NNT / ARR / practical magnitude — not raw statistics]
Strongest caveat: [single most important limitation for practice adoption]
What it changes in my practice: [specific, patient-type-anchored]
What it does not change: [equally specific]
Biggest remaining gap: [one unanswered question the evidence leaves open]
Best next read: [one specific type of paper or guideline to consult before acting]

End with one sentence that names what made this article worth reading —
even if adoption is uncertain.
```

> [!NOTE] **Application Note:** The crystallisation summary is the exportable output of this module — save it, share it at journal club, or link it to a registry case. The 'what it does not change' field is as important as 'what it changes' — precision about scope prevents over-application of evidence to patient types the study did not include.

---

### Step 10.15: Exportable Journal Club Abstract

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Generate a 250-word structured abstract suitable for
presenting this article at a journal club or case conference. Include:
clinical question in PICO format, study design and population, key
result with effect size in clinical language, two most important
critical appraisal points, and one practice implication anchored to a
specific patient type. After the abstract, add two tags: (a) the Bloom's
level at which this article is best taught and why, and (b) the Oxford
CEBM evidence level for the main finding.
```

> [!NOTE] **Application Note:** Bloom's and CEBM tags make this abstract reusable for curriculum mapping, registry linkage (Module 6), and cross-case learning (Module 7). Export format mirrors Step 5.11.

---

### Step 10.16: Difficulty Ratchet — Next Reading Session

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Based on the complexity of this article and the depth of
digestion we reached in this session, recommend what I should read next
to deepen understanding on this topic: same level of complexity, one
step more methodologically rigorous, or a foundational paper I should
have read first. Justify the recommendation briefly. Then suggest one
specific reading skill to sharpen before the next session — for example:
reading a forest plot, interpreting heterogeneity in a meta-analysis, or
locating allocation concealment in a methods section.
```

---

## Module 10 Prompt Index

| ID | Phase | Layer | Prompt purpose | AI mode |
|---|---|---|---|---|
| 10.0 | Initiation | — | Plain-language first read — entry scaffold | Traditional |
| 10.1 | Initiation | — | Case anchor — Patient 1 — clinical question linkage | Traditional |
| 10.2 | Execution | Layer 1 | Study design in plain English — methods translation | Traditional |
| 10.3 | Execution | Layer 1 | Study population vs Patient 2 — applicability check | Traditional · Devil's Advocate |
| 10.4 | Execution | Layer 2 | Effect size in human language — statistics translation | Traditional |
| 10.5 | Execution | Layer 2 | What the statistics do not tell me | Devil's Advocate |
| 10.6 | Execution | Layer 3 | Bias map — direction and magnitude per source | Devil's Advocate |
| 10.7 | Execution | Layer 3 | Evidence gap map — Patient 3 — priority gap linkage | Devil's Advocate · Brainstorming |
| 10.8 | Execution | Layer 4 | Management implication — Patient 4 — direct decision linkage | Traditional |
| 10.9 | Execution | Layer 4 | Counter-evidence radar — guideline alignment and objections | Devil's Advocate · Brainstorming |
| 10.10 | Execution | Layer 5 | Bloom's Taxonomy — article as knowledge object | Traditional |
| 10.11 | Execution | Layer 5 | Fink FLINK — six dimensions of significant learning | Traditional |
| 10.12 | Execution | Layer 6 | Patient communication distillation — Patient 5 | Traditional |
| 10.13 | Closure | — | Critical awareness debrief — Framework D | Devil's Advocate |
| 10.14 | Closure | — | Knowledge crystallisation summary — exportable | Traditional |
| 10.15 | Closure | — | Exportable journal club abstract — CEBM + Bloom's tags | Traditional |
| 10.16 | Closure | — | Difficulty ratchet — next reading session | Traditional |

---

## Patient anchoring — how to use the five patient slots

Five steps in this module ask the learner to paste a patient vignette. These slots exist because abstract evidence only becomes clinical knowledge when it is pressed against a real person. There are two ways to use them:

**Same patient, five angles** — paste the same de-identified vignette at Steps 10.1, 10.3, 10.7, 10.8, and 10.12. This tracks one patient through every angle of the paper — clinical question, applicability, evidence gaps, management decision, and patient communication. Useful when a paper was read because of a specific patient.

**Five different patients** — paste a different patient at each step. This stress-tests the paper's generalisability across patient types — useful when building a general understanding of an evidence base rather than answering a specific clinical question.

> [!NOTE] Use de-identified vignettes only at all five steps. Remove name, date of birth, hospital number, and any other identifying detail before pasting.

---

## AI Mode Summary

| Mode | Steps |
|---|---|
| Traditional | 10.0, 10.1, 10.2, 10.4, 10.8, 10.10, 10.11, 10.12, 10.14, 10.15, 10.16 |
| Devil's Advocate | 10.5, 10.6, 10.13 |
| Traditional + Devil's Advocate | 10.3 |
| Devil's Advocate + Brainstorming | 10.7, 10.9 |

*No Socratic prompts in this module by design — this module digests knowledge into the learner; it does not test the learner's recall of it. If Socratic-mode article engagement is the goal, apply Module 1 to an article-based clinical case.*

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (persona language throughout)
- [Framework B — Fink's FLINK Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-B-Finks-FLINK-Taxonomy.html) (Step 10.11)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Steps 10.10, 10.15)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step 10.13)
- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) (if Socratic-mode article engagement is preferred over knowledge digestion)
- [Module 6 — Registry-Level Analytics](https://avi33tbtt.github.io/Prompts/Module-06-Registry-Level-Analytics.html) (Step 10.15 abstract feeds registry curriculum)
- [Module 7 — Longitudinal & Cross-Case Learning](https://avi33tbtt.github.io/Prompts/Module-07-Longitudinal-and-Cross-Case-Learning.html) (Step 10.15 abstract reusable for cross-case teaching sequences)
- [Module 8 — Socratic-Mode Design Specification](https://avi33tbtt.github.io/Prompts/Module-08-Socratic-Mode-Design-Specification.html) (design rationale for AI-mode selection across steps)

---

## Navigation

**Previous:** [← Module 9 — N-of-1 Case Research Protocol](https://avi33tbtt.github.io/Prompts/VibeRounds_Module9_Research_Protocol.html)

[← Back to README](README.md)

---

*Vibe Rounds Prompt Modules — Module 10. Drafted June 2026.*
*Authored in alignment with the VibeRounds paradigm — Dr. Avinash Kumar Gupta.*
