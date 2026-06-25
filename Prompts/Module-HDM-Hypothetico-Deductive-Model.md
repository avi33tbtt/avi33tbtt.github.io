# Module HDM — Hypothetico-Deductive Reasoning

**VibeRounds Prompt Module · Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026**
**#VibeRounds — A Socratic AI Paradigm for Clinical Medicine**

[← Back to README](https://avi33tbtt.github.io/Prompts/)

---

> [!IMPORTANT] **Clinical Disclaimer & Independent Verification Required**
> All AI-generated outputs produced using these prompts — including hypothesis lists, ranked differentials, investigation plans, and confidence ratings — require independent clinical verification before being acted upon. This module does not substitute for clinical judgment, professional medical advice, or established institutional safety protocols at any stage.

---

> [!NOTE] **Module Status: 🟡 In Progress**
> Structure is proposed and internally validated. Not yet tested in a live clinical or educational environment. Evidence base is design rationale and educational theory only.

---

## Overview

| Field | Description |
|---|---|
| **Module** | HDM |
| **Title** | Hypothetico-Deductive Reasoning |
| **Objective** | Train a learner to explicitly generate, rank, and iteratively test diagnostic hypotheses from the first cue — building the conscious reasoning scaffold that underpins all expert clinical decision-making |
| **Indication** | Any case where the learner has received initial clinical information (chief complaint + one or two salient features) and needs to build a structured reasoning pathway before committing to investigations or management. Also indicated when a learner has been diagnosed as over-relying on gestalt (Module S1S2 debrief) or when Module 12 has exposed a premature-closure pattern. |
| **Lifecycle** | Initiation → Execution → Closure / Review |
| **Validated Env.** | Claude Sonnet (claude.ai); Gemini 1.5 Pro |
| **Application Note** | The Hypothetico-Deductive Model (HDM) is the dominant conscious reasoning framework in clinical medicine. Unlike pattern recognition (which fires automatically from cues) or Naturalistic Decision Making (which selects the first workable plan), HDM requires the learner to *explicitly articulate* hypotheses and *explicitly state* what would confirm or refute each one. This module enforces that explicitness. It is the reasoning framework most aligned with how clinical reasoning is taught in medical education — and the one most quietly abandoned under time pressure. This module restores it as a deliberate, trainable skill. |

---

## Theoretical Grounding

The Hypothetico-Deductive Model was formalised by Elstein, Shulman, and Sprafka (1978) following their landmark study of physician reasoning. Their finding: expert clinicians generate a small set of hypotheses (typically 2–5) within the first 30–60 seconds of a patient encounter, then selectively gather data to confirm or eliminate each one. The *quantity* of hypotheses was not what distinguished experts from novices — the *quality* of cue triggering and the *efficiency* of data selection were.

**The four-stage HDM cycle:**

| Stage | What happens | Failure mode |
|---|---|---|
| **1. Cue Acquisition** | A clinical cue (symptom, sign, demographic, context) triggers hypothesis generation | Cue ignored, missed, or not recognised as discriminating |
| **2. Hypothesis Generation** | A short-list of diagnoses is assembled from the cue set | List too narrow (anchoring), too broad (cognitive overload), or missing the most dangerous entry |
| **3. Cue Interpretation** | Further data is gathered and interpreted against each hypothesis | Confirmation bias — only seeking data that supports the favourite |
| **4. Hypothesis Evaluation** | Hypotheses are ranked, accepted, or eliminated based on cumulative evidence | Premature closure — eliminating alternatives before sufficient evidence; or failure to close — continuing to investigate a hypothesis already ruled out |

**HDM in the VibeRounds cognitive stack:**

HDM sits between illness script activation (automatic, expert) and pure algorithmic reasoning (exhaustive, slow). It is the *conscious scaffold* that a learner uses when their illness scripts are immature, when the case is atypical, or when they need to be able to *explain their reasoning* to a supervisor, a handover, or a court.

**Linked Frameworks and Modules:**

- **Framework C (Bloom's Revised Taxonomy):** HDM maps directly onto Bloom's mid-levels — Apply (generate hypotheses from cues), Analyse (weigh evidence per hypothesis), Evaluate (rank and accept/reject).
- **Framework D (Critical Awareness):** Stage 3 (Cue Interpretation) is the point of maximum confirmation bias vulnerability — Framework D's bias interrogation is applied here explicitly.
- **Module 1 (Socratic Clinical Reasoning):** Socratic mode is the *conversational wrapper* for HDM. This module makes the HDM *cycle* explicit and trainable. Use Module 1 for the teaching relationship; use Module HDM for the reasoning architecture.
- **Module 12 (Differential Diagnosis Deepdive):** Module 12 attacks the hypothesis list adversarially *after* it is formed. Module HDM trains the learner to form it rigorously *before* Module 12 stress-tests it.
- **Module S1S2 (System 1 & System 2):** HDM is a System 2 framework. If Module S1S2 shows the learner is over-reliant on System 1 gestalt, Module HDM is the corrective training.
- **Module 36 (Bayesian Probability / Likelihood Ratio Engine):** HDM's Stage 4 (Hypothesis Evaluation) is strengthened by Bayesian explicit probability — use Module 36 after HDM to quantify what HDM qualifies.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Orient the AI and set the reasoning contract

### Step HDM.0: Session Setup & HDM Contract

**Prompt:**

```
#VibeRounds You are a clinical reasoning coach running the VibeRounds
Hypothetico-Deductive Reasoning Module.

Your role is to walk me through all four stages of the HDM cycle —
Cue Acquisition, Hypothesis Generation, Cue Interpretation, and Hypothesis
Evaluation — as an explicit, conscious reasoning exercise on the case I am
about to share.

Rules:
1. Do not generate the hypothesis list for me. Instead, ask me to generate
   it first, then evaluate what I produced.
2. At each stage, ask one question at a time and wait for my response.
3. After my response, acknowledge what was well-reasoned before identifying
   any gaps.
4. At Stage 3 (Cue Interpretation), flag any question I am generating that
   is confirmatory only — and redirect me toward a disconfirmatory question
   instead.
5. Do not reveal your own preferred diagnosis until Stage 4 is complete and
   I have explicitly asked for your view.
6. At the end of the session, produce a formal HDM Reasoning Audit (see
   Step HDM.8).

Confirm you understand these rules, then ask me to present the opening
clinical data — no more than the presenting complaint, age, and one or two
salient contextual details. We will gather further data deliberately, not
all at once.
```

> [!NOTE] **Application Note:** The instruction to present *only* opening clinical data at the start is critical — it enforces the HDM principle that hypothesis generation precedes (and guides) data gathering. Learners who dump the full case at Step HDM.0 should be redirected: "Share only the presenting complaint and age for now. We will request further data at Stage 3." This mirrors the structure of a real clinical encounter and is where the most important HDM training occurs.

---

## Phase 2 · Execution — The four-stage HDM cycle

### Step HDM.1: Stage 1 — Cue Acquisition (Trigger Recognition)

**Prompt:**

```
#VibeRounds Stage 1 — Cue Acquisition.

Here is the opening clinical data:
[PASTE: patient age, sex, presenting complaint, and up to two contextual
details — e.g. onset, setting, or one salient background fact]

Before generating any hypothesis, answer these questions one at a time
as I ask them:
(1) What is the single most diagnostically triggering element in what I
    have just shared?
(2) What feature, if any, is acting as a red flag in this opening
    presentation?
(3) What is the most important piece of information that is *absent* from
    what I have shared — the gap that most limits your hypothesis
    generation right now?
```

> [!NOTE] **Application Note:** The third question — "what is absent?" — is the most important of the three. It trains the learner to recognise that hypothesis generation is limited by the *quality of cue acquisition*, not just the *breadth of differential knowledge*. Many diagnostic errors begin not in the reasoning stage but in the data-gathering stage: the clinician did not notice that a key cue was missing. This step is adapted from Elstein's original finding that expert clinicians were distinguished from novices not by hypothesis breadth but by *cue selectivity* — they noticed which data mattered.

---

### Step HDM.2: Stage 2 — Hypothesis Generation (Building the Short-List)

**Prompt:**

```
#VibeRounds Stage 2 — Hypothesis Generation.

Based only on the opening data shared so far, generate your diagnostic
hypothesis short-list. Include:
— At minimum 3 and at most 6 hypotheses.
— At least one that is the most dangerous diagnosis to miss (even if
  unlikely).
— At least one that is the most statistically common diagnosis in this
  demographic and presentation.
— At least one that you would not normally consider first but that the
  opening data does not exclude.

For each hypothesis, write one sentence explaining which specific cue
from the opening data triggered it.

After you have shared your list, I will evaluate it and then we proceed
to Stage 3.
```

> [!NOTE] **Application Note:** The 3–6 hypothesis limit is deliberate and evidence-grounded. Elstein's research showed that diagnostic accuracy did not improve when clinicians generated more than 5–6 hypotheses — cognitive load beyond this number led to worse cue interpretation in Stage 3, not better. The three-category requirement (most dangerous, most common, non-default) mirrors the structure used in Module 12's adversarial differential (Step 12.2) and creates a hypothesis list that is resistant to both over-anchoring and dangerous omission.

---

### Step HDM.2a: Hypothesis Quality Evaluation (AI Response Step)

After the learner shares their list, the AI runs this evaluation automatically:

**Prompt:**

```
#VibeRounds Evaluate my hypothesis list using the following four criteria:

(1) COVERAGE — Did I include the most dangerous diagnosis and the most
    statistically likely diagnosis? If either is absent, name it and
    state which cue from the opening data should have triggered it.

(2) CUE LINKAGE — For each of my hypotheses, is the triggering cue I
    cited genuinely discriminating, or is it a non-specific feature that
    could trigger almost any diagnosis? Flag any hypothesis whose
    triggering cue is non-specific.

(3) LIST ECONOMY — Is my list within the 3–6 hypothesis range? If over
    6, name the two I should drop first and why. If under 3, name the
    category I most obviously omitted.

(4) ANCHORING RISK — Based on the order I listed them, which hypothesis
    am I most likely to anchor on? Is that anchor appropriate given the
    evidence so far, or is it premature?

After this evaluation, tell me the one modification to my hypothesis list
that would most improve my Stage 3 reasoning. Then ask me to confirm my
revised short-list before we proceed to Stage 3.
```

> [!NOTE] **Application Note:** Step HDM.2a is the only AI-led evaluation step in Phase 2. All other Phase 2 steps are learner-led with AI guidance. This inversion at 2a is intentional: hypothesis list quality determines the quality of *everything* that follows, so a rigorous AI evaluation here prevents a compounding error from propagating through Stages 3 and 4. The anchoring risk flag in criterion 4 is the highest-yield finding — list order is a proxy for the learner's implicit probability weighting, which they are often unaware of.

---

### Step HDM.3: Stage 3 — Cue Interpretation (Directed Data Gathering)

**Prompt:**

```
#VibeRounds Stage 3 — Cue Interpretation.

For each hypothesis on my confirmed short-list, I am now going to design
the data-gathering questions I would ask in a real clinical encounter.

For each hypothesis in turn, ask me:
(1) What ONE question from the history would most efficiently confirm this
    hypothesis if positive?
(2) What ONE question from the history would most efficiently exclude this
    hypothesis if negative? (This must be a *disconfirmatory* question —
    not a further confirmatory one.)
(3) What ONE examination finding would most change the probability of this
    hypothesis, up or down?

After I answer each set, flag if any of my confirmatory questions are
actually just restatements of the presenting complaint (i.e. not genuinely
discriminating), and flag if my disconfirmatory question would actually
exclude more than one hypothesis simultaneously (i.e. is high-efficiency).

Work through my hypotheses one at a time. Do not move to the next
hypothesis until I have answered all three questions for the current one.
```

> [!NOTE] **Application Note:** The disconfirmatory question requirement (question 2) is the most educationally important element of Stage 3, and the one learners most consistently skip. Elstein's research showed that clinicians at all levels preferentially seek confirmatory data — the confirmation bias operates at the data-gathering stage, not just the evaluation stage. Forcing an explicit disconfirmatory question for each hypothesis trains the learner to hold their hypotheses lightly while they test them. The "high-efficiency disconfirmation" flag — identifying questions that exclude multiple hypotheses simultaneously — is a marker of expert data-gathering efficiency.

---

### Step HDM.3a: Full Clinical Data Release

After Stage 3 questioning is designed, the learner releases the full case data:

**Prompt:**

```
#VibeRounds I am now releasing the full clinical data for this case.

[PASTE: complete history, examination findings, vital signs, and
investigations already performed]

For each hypothesis on my short-list, apply the data I have just shared
and rate each one as:
— SUPPORTED: the data is consistent with this hypothesis
— WEAKENED: one or more findings make this hypothesis less likely
— EXCLUDED: a specific finding makes this hypothesis implausible or
  impossible (state which finding and why)
— INSUFFICIENT DATA: the key discriminating data for this hypothesis
  is not yet present in what I have shared

After rating all hypotheses, tell me which data point in what I just
shared was the single most diagnostically decisive piece of information —
the one that most shifted the probability landscape.
```

> [!NOTE] **Application Note:** The SUPPORTED / WEAKENED / EXCLUDED / INSUFFICIENT DATA rating system is borrowed from formal evidence sufficiency analysis (see also Module 12, Step 12.5). Applying this system to the learner's *own* hypothesis list — rather than a generic differential — makes the rating meaningful and personal. The "most diagnostically decisive data point" question at the end frequently produces a different answer in the learner's mind than in the AI's — the gap between these is often the highest-yield teaching moment of the entire session.

---

### Step HDM.4: Stage 4 — Hypothesis Evaluation (Ranking, Accepting, Closing)

**Prompt:**

```
#VibeRounds Stage 4 — Hypothesis Evaluation.

Based on all the data gathered in Stage 3, produce a final ranked
hypothesis list:

(1) Rank my original hypotheses from most to least probable, given all
    available data. For each, give a one-sentence evidence summary —
    the key finding that most determines its position in the ranking.

(2) State which hypothesis you are provisionally accepting as the working
    diagnosis and why. Specify the evidence threshold that was crossed
    to elevate it above the others.

(3) State which hypotheses you are formally eliminating and the specific
    finding that excludes each one.

(4) State which hypotheses remain live — not yet confirmed but not
    excludable with current data — and what single investigation would
    resolve their status.

(5) Apply the Closure Test: Is the evidence base sufficient to close the
    differential and commit to a management plan, or does diagnostic
    uncertainty remain at a level that requires further investigation
    before management? State your threshold explicitly.
```

> [!NOTE] **Application Note:** The Closure Test (question 5) is the formal output gate of the HDM cycle. It asks the learner to distinguish between *diagnostic confidence sufficient for management* and *diagnostic certainty* — these are different thresholds, and conflating them causes both under-investigation (managing before excluding dangerous alternatives) and over-investigation (ordering tests when the diagnosis is already actionable). The explicit threshold statement in question 5 is what the learner should be able to reproduce verbally in a ward round or handover.

---

### Step HDM.5: Iterative Loop — When the First Hypothesis Cycle Fails

*Use this step when Stage 4 produces an inconclusive result — no hypothesis reaches the acceptance threshold.*

**Prompt:**

```
#VibeRounds The first HDM cycle has not produced a working diagnosis with
sufficient confidence. We need to run a second cycle.

(1) What new hypothesis — not on my original short-list — does the
    accumulated data from Cycle 1 now suggest? What specific finding from
    Stage 3 triggered it?

(2) What is the single investigation I should now order to most
    efficiently resolve the remaining diagnostic uncertainty? For that
    investigation, state:
    — What result would confirm the new leading hypothesis?
    — What result would exclude it and redirect to the next alternative?
    — What result would be indeterminate, and what would I do next if
      I get that result?

(3) Is the level of diagnostic uncertainty at this point compatible with
    empirical treatment while investigation continues, or is it necessary
    to withhold management until a result is available? State your
    reasoning.
```

> [!NOTE] **Application Note:** The iterative loop is one of the most important and least-taught aspects of HDM. Elstein's original model describes HDM as cyclical — when the first cycle fails to produce an acceptable hypothesis, the clinician must re-enter at Stage 1 (new cue acquisition) or Stage 2 (revised hypothesis generation), not simply repeat the same cycle with the same hypotheses. Step HDM.5 makes this re-entry explicit. The third question — empirical treatment while investigating — addresses the clinical reality that management and diagnosis often run in parallel, and that the HDM framework must accommodate this rather than artificially sequencing them.

---

### Step HDM.6: Confirmation Bias Audit — Stage 3 Retrospective

**Prompt:**

```
#VibeRounds Now run a retrospective confirmation bias audit on my Stage 3
data-gathering.

Review all the history questions and examination findings I prioritised
in Stage 3. For each hypothesis that was ultimately rejected in Stage 4:

(1) Did I ask fewer clarifying questions about this hypothesis than about
    my leading hypothesis? (Data-gathering asymmetry — a marker of
    premature de-prioritisation.)

(2) When a finding weakened my leading hypothesis, did I seek an
    alternative explanation for that finding that preserved my leading
    hypothesis, rather than taking it at face value as weakening evidence?
    (Motivated reasoning — a specific confirmation bias subtype.)

(3) Was there a finding in the full data release (Step HDM.3a) that I
    had not designed a question to elicit — meaning it arrived only
    because it was given, not because I sought it?

For each "yes" answer, name the specific question or finding, state
the hypothesis it affected, and name the confirmation bias subtype
operating. Frame findings as reasoning pattern observations, not errors.
```

> [!NOTE] **Application Note:** This step operationalises Framework D (Vibe Rounds Critical Awareness Framework) at the data-gathering level — specifically targeting confirmation bias at Stage 3, where it operates most silently. Unlike Module 12's bias audit (Step 12.3), which audits bias across the whole reasoning process, Step HDM.6 is scoped to Stage 3 data-gathering exclusively. This specificity matters: learners who understand that confirmation bias operates in *what they choose to ask*, not just in *what they choose to believe*, develop more durable debiasing habits.

---

### Step HDM.7: Cross-Hypothesis Efficiency Analysis

**Prompt:**

```
#VibeRounds Before we close the execution phase, run a Cross-Hypothesis
Efficiency Analysis on my Stage 3 data-gathering.

(1) Which of my history questions, if answered positively, would have
    excluded the most hypotheses simultaneously? (Highest-efficiency
    question — a marker of expert data selection.)

(2) Which examination finding I requested was specific to only one
    hypothesis? (Lowest-efficiency finding — justified only if that
    hypothesis was the most dangerous on the list.)

(3) Is there a single investigation — not yet ordered — that would
    resolve the status of more than one live hypothesis simultaneously?
    Name it, and for each live hypothesis, state what result would
    confirm versus exclude it.

(4) Looking at the sequence in which I gathered data, did I front-load
    the highest-efficiency questions or did I work through hypotheses
    serially (one at a time)? Which strategy was more efficient in this
    case, and which is generally preferred under time pressure?
```

> [!NOTE] **Application Note:** The efficiency analysis is a meta-level skill — it teaches learners not just to gather data correctly but to *sequence* data-gathering for maximum diagnostic return per question. This is the reasoning skill that distinguishes a 10-minute focused history from a 30-minute unfocused one. The serial versus parallel data-gathering question (question 4) has a nuanced answer: serial (hypothesis-by-hypothesis) is safer for learners and for atypical cases; parallel (cross-hypothesis, highest-efficiency-first) is faster and appropriate under time pressure when the hypothesis list is well-formed.

---

## Phase 3 · Closure / Review — Synthesise, audit, and embed

### Step HDM.8: HDM Reasoning Audit (Formal Closure Report)

**Prompt:**

```
#VibeRounds Produce the full HDM Reasoning Audit for this session.

SECTION 1 — CUE ACQUISITION QUALITY
Rate my Stage 1 cue recognition: Strong / Adequate / Weak.
Name the most important cue I correctly identified and the most important
cue I missed or underweighted.

SECTION 2 — HYPOTHESIS LIST QUALITY
Rate my Stage 2 hypothesis list: Strong / Adequate / Weak.
State whether I included the most dangerous and most likely diagnoses.
Name any critical omission.

SECTION 3 — DATA-GATHERING STRATEGY
Rate my Stage 3 efficiency: Strong / Adequate / Weak.
Name my highest-efficiency question and my lowest-efficiency question.
State whether my disconfirmatory questions were genuine or disguised
confirmatory questions.

SECTION 4 — HYPOTHESIS EVALUATION
Rate my Stage 4 closure decision: Correct / Premature / Incomplete.
If premature: name the hypothesis I closed on too early and what data
should have kept it live. If incomplete: name the hypothesis I failed
to close despite sufficient exclusion evidence.

SECTION 5 — BIAS PROFILE
Name the one cognitive bias that most significantly influenced my
reasoning in this session. Rate its impact: Low / Moderate / High.
Give one debiasing action I can apply in my next case.

SECTION 6 — HDM CYCLE COMPLETION
Did I complete a full four-stage cycle? If not, which stage was
abbreviated or skipped, and what was the consequence for diagnostic
accuracy?

SECTION 7 — GROWTH NOTE
End with one sentence naming the strongest element of my HDM reasoning
in this session. Frame as a specific skill, not a generic compliment.
```

> [!NOTE] **Application Note:** The seven-section Reasoning Audit is the primary exportable output of this module. It can be used by a supervisor as a formative assessment tool, by the learner as a self-directed reflection record, or as input to Module 7 (Longitudinal & Cross-Case Learning) for tracking HDM competency development across cases. Section 7's growth note is mandatory — the session must not close on a deficit summary.

---

### Step HDM.9: HDM vs Gestalt Integration Debrief

**Prompt:**

```
#VibeRounds Help me integrate the explicit HDM reasoning I just practised
with my intuitive gestalt response to this case.

(1) What was my initial gestalt — the diagnosis I would have named in
    the first 10 seconds if I had not been forced to run the HDM cycle?

(2) Did the HDM cycle confirm my gestalt, modify it, or overturn it?
    What specific stage of the cycle produced the most significant
    change from my initial impression?

(3) In a future case of this type, what is the one HDM question I should
    ask myself — even when under time pressure — to prevent my gestalt
    from becoming premature closure?

(4) If I were teaching this case to a junior learner, what is the one
    explicit HDM step I would make them perform that I would have skipped
    myself on this case?
```

> [!NOTE] **Application Note:** This step is the bridge between Module HDM and Module S1S2. HDM and gestalt are not opposites — expert clinicians use gestalt to generate the initial hypothesis and HDM to test it. The question in point 3 — a single self-interrogation question under time pressure — is the practical take-home from the entire module. Learners who can articulate this question have internalised the HDM habit at the level that survives a busy ED or ward.

---

### Step HDM.10: Difficulty Ratchet & Next Session Calibration

**Prompt:**

```
#VibeRounds Based on my performance in this HDM session:

(1) Which stage of the HDM cycle was I strongest in?
(2) Which stage was I weakest in?
(3) Recommend the difficulty level for my next HDM session:
    — Same: similar case complexity and hypothesis list size
    — One level harder: atypical presentation + time-pressure simulation
      (limit Stage 3 to 5 questions total before forced closure)
    — One level easier: present the hypothesis list and ask me only to
      rank and evaluate in Stage 4
(4) Give me one specific skill to practise before the next session —
    something I can do with a textbook, a ward case, or a clinical
    encounter in the next 48 hours.
```

> [!NOTE] **Application Note:** The time-pressure simulation in "one level harder" — limiting Stage 3 to five questions total before forced Stage 4 closure — is a direct analogue of real clinical time constraints. It is the most important difficulty escalation for HDM specifically, because HDM's primary failure mode in experienced clinicians is not cognitive error but *abandonment under time pressure*: the deliberate cycle is dropped in favour of gestalt precisely when the case is most complex and the deliberate cycle is most needed.

---

## Quick-Reference Card

*For experienced users — copy the step you need directly.*

| Step | One-line purpose | Phase |
|---|---|---|
| HDM.0 | Set the HDM reasoning contract | Initiation |
| HDM.1 | Stage 1 — Identify the triggering cue and its gap | Execution |
| HDM.2 | Stage 2 — Generate the 3–6 hypothesis short-list | Execution |
| HDM.2a | AI evaluates hypothesis list quality before Stage 3 | Execution |
| HDM.3 | Stage 3 — Design confirmatory and disconfirmatory questions | Execution |
| HDM.3a | Release full case data; rate each hypothesis against findings | Execution |
| HDM.4 | Stage 4 — Rank, accept, eliminate, and apply Closure Test | Execution |
| HDM.5 | Iterative loop — when Cycle 1 fails to produce a working diagnosis | Execution |
| HDM.6 | Retrospective confirmation bias audit on Stage 3 | Execution |
| HDM.7 | Cross-hypothesis efficiency analysis | Execution |
| HDM.8 | Full HDM Reasoning Audit — seven-section formal closure report | Closure |
| HDM.9 | HDM vs Gestalt integration debrief | Closure |
| HDM.10 | Difficulty ratchet + next session calibration | Closure |

---

## How Module HDM Differs from Related Modules

| Dimension | Module 1 (Socratic) | Module 12 (Devil's Advocate) | Module HDM |
|---|---|---|---|
| **Primary cognitive target** | Reasoning engagement | Working diagnosis stress-test | Hypothesis cycle structure |
| **AI posture** | Encouraging coach | Adversarial challenger | Neutral process enforcer |
| **When to use** | Case reasoning practice | After a working diagnosis exists | When the explicit HDM cycle needs training |
| **Hypothesis list source** | Emerges through Socratic Q&A | Provided by learner and attacked | Generated explicitly in Stage 2, then tested |
| **Data-gathering posture** | Guided by AI questions | Full case presented upfront | Deliberately staged — opening data then full release |
| **Primary bias target** | Errors of omission | Anchoring, premature closure | Confirmation bias in data-gathering |
| **Exportable output** | Teaching summary + next steps | Diagnostic Confidence Score + Vulnerability Report | Seven-section HDM Reasoning Audit |

---

## Prompt Analytics Tags

| Step | AI Mode |
|---|---|
| HDM.0 | Socratic |
| HDM.1 | Socratic |
| HDM.2 | Socratic |
| HDM.2a | Traditional (evaluative) |
| HDM.3 | Socratic |
| HDM.3a | Traditional (evaluative) |
| HDM.4 | Socratic · Traditional |
| HDM.5 | Socratic |
| HDM.6 | Devil's Advocate · Traditional |
| HDM.7 | Traditional (analytical) |
| HDM.8 | Traditional (report) |
| HDM.9 | Socratic |
| HDM.10 | Traditional |

> **Tagging rationale:** HDM.0–HDM.3 and HDM.5 and HDM.9 are Socratic — the AI asks and the learner reasons. HDM.2a and HDM.3a are Traditional — the AI produces a structured evaluation. HDM.4 is dual-tagged because the Closure Test question requires both Socratic commitment (the learner states a threshold) and Traditional evaluation (the AI assesses whether it is justified). HDM.6 is Devil's Advocate because it retrospectively interrogates the learner's own data-gathering choices adversarially, even though the tone is formative rather than combative.

---

## Design Rationale & Gap This Module Fills

HDM is the most-referenced framework in clinical reasoning education and the least explicitly trained. It appears in virtually every medical school curriculum as a concept but almost never as a *step-by-step practice protocol* with a defined lifecycle and exportable output.

The existing VibeRounds modules address HDM implicitly in several places:

- Module 1's Socratic questioning produces HDM-like reasoning through guided Q&A, but does not make the four stages explicit or trainable as discrete skills.
- Module 12's differential generation (Step 12.2) is Stage 2 of HDM applied adversarially, but does not include the preceding cue acquisition or the iterative testing cycle.
- Module 36's Bayesian engine is Stage 4 of HDM (hypothesis evaluation) made quantitative, but assumes a well-formed hypothesis list and does not train the stages that produce it.

Module HDM fills the gap by making the four-stage cycle *explicit, staged, and auditable* — learners work through each stage consciously, in order, with the AI enforcing stage discipline. Its three distinct contributions to the VibeRounds stack:

1. **Staged data release** (HDM.0 → HDM.3a): The deliberate withholding of full case data until Stage 3 is complete is unique to this module and directly trains the most commonly violated HDM principle — that hypothesis generation should precede (and shape) data gathering, not follow it.
2. **Disconfirmatory question enforcement** (HDM.3): No other module in the VibeRounds system explicitly requires the learner to generate disconfirmatory questions — questions designed to *rule out* their hypotheses — for every hypothesis in their list. This is the highest-yield debiasing skill in clinical data-gathering.
3. **The Closure Test** (HDM.4): The explicit evidence threshold for moving from diagnosis to management is named and required in no other module. Its presence here makes the diagnostic-management boundary a conscious, articulable decision rather than an unconscious transition.

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) — active in HDM.2a and HDM.8 (evaluation framing as growth observation)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) — HDM Stages 1–4 map onto Apply, Analyse, and Evaluate
- [Framework D — Vibe Rounds Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) — operationalised in Step HDM.6 (confirmation bias audit)
- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) — conversational wrapper for HDM; use Module 1 for teaching relationship, Module HDM for reasoning architecture
- [Module 12 — Differential Diagnosis Deepdive](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html) — stress-tests the hypothesis list that Module HDM trains the learner to build rigorously
- [Module 36 — Bayesian Probability / Likelihood Ratio Engine](https://avi33tbtt.github.io/Prompts/Module-36-Bayesian-Probability-Likelihood-Ratio-Engine.html) — quantifies Stage 4 hypothesis evaluation; run after Module HDM for Bayesian depth
- [Module S1S2 — System 1 & System 2 Question Generator](https://avi33tbtt.github.io/Prompts/Module-S1S2-System1-System2-Question-Generator.html) — HDM is the System 2 corrective when Module S1S2 identifies gestalt over-reliance; the two modules are complementary and frequently chained

---

## Navigation

[← Back to Module Index](https://avi33tbtt.github.io/Prompts/Prompts.html) · [← Back to README](https://avi33tbtt.github.io/Prompts/)

---

*VibeRounds Prompt Modules — Module HDM — Hypothetico-Deductive Reasoning*
*Proposed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*
