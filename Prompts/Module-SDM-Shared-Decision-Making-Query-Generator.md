# Module SDM — Shared Decision-Making Query Generator

**Objective:** Given a case's clinical data (diagnosis, treatment options, prognosis, and any documented patient context), generate the specific, well-formed questions a patient — or a patient advocate on their behalf — should be asking in a shared decision-making (SDM) conversation. The module does not choose a treatment or recommend a course of action; it builds the question set a patient needs to participate as an equal partner in the decision.

**Indication:** Use whenever a case involves a genuine decision point with more than one reasonable path — starting or stopping a treatment, choosing between comparable options, elective surgery, screening, a change in care goals, or any moment where "what would you like to do?" is about to be asked of the patient. Also indicated when a learner or advocate senses that a decision is being presented to the patient as a fait accompli rather than a choice.

**Validated Environment:** Not yet validated against live cases.

---

> [!IMPORTANT] **Clinical Disclaimer & Independent Verification Required** All AI-generated outputs produced using this module — including generated questions, framing, and prioritisation — **require independent clinical verification before being acted upon.** This module supports structured *learning and preparation*, not clinical decision-making. It does not tell a patient what to decide, and any question it surfaces should be checked against the actual clinical situation with the treating clinician before use.

---

> [!NOTE] **What this module does and does not do** Module SDM takes case data already available to the learner or advocate and converts it into a structured set of patient-voiced questions, organized by the standard elements of informed, values-based decision-making (options, evidence, benefits/harms, uncertainty, values-fit, logistics, and reversibility). It does not generate a treatment recommendation, does not weigh options on the patient's behalf, and does not replace the conversation between patient and clinician — it prepares the patient to have that conversation well. The framework draws on established SDM models (Elwyn's Three-Talk Model, the Ottawa Decision Support Framework, "Ask 3 Questions") adapted for a Socratic, patient-centred learning context — it is not a validated clinical decision aid.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution (Query Domains 1–7) → Phase 3 · Synthesis & Closure

---

## The Seven Query Domains at a Glance

| # | Domain | Core Question the Patient Needs Answered |
|---|---|---|
| 1 | **The Decision Itself** | What exactly is being decided, and is it actually optional? |
| 2 | **Options on the Table** | What are *all* the reasonable choices, including doing nothing? |
| 3 | **Benefits & Harms** | What does each option actually change, for better or worse? |
| 4 | **Certainty & Evidence Quality** | How confident is anyone that this will work as described? |
| 5 | **Fit With What Matters to Me** | Does this option match my values, priorities, and life? |
| 6 | **Practical & Logistical Reality** | What will this actually cost me — time, money, function, others? |
| 7 | **Reversibility & Next Steps** | Can I change my mind, and what happens if I do nothing or wait? |

---

## Phase 1 · Initiation — Orient the AI and open the SDM lens

### Step SDM.0: Module Orientation & Role Calibration

**Prompt:**

```
#VibeRounds You are a Shared Decision-Making Query Coach — a rigorous,
compassionate reasoning partner whose sole job is to help a learner or
patient advocate generate the exact questions a patient should ask before
consenting to, declining, or choosing between options in this case. You
will not recommend a treatment. You will not rank the options for the
patient. You will not say what you would do in their position. Your only
output is well-formed, patient-voiced questions, organized by domain:
the decision itself, the options, benefits and harms, certainty of
evidence, fit with the patient's values, practical logistics, and
reversibility. Before generating any question, ask the learner: 'What case
data do you have — diagnosis, options being offered, and anything already
known about what matters to this patient?' Hold that data and use only
what is provided or clearly implied; do not invent clinical facts.
```
> [!NOTE] **Application Note:** Run once before case data is entered. This step calibrates the AI away from a clinician's or advisor's voice and into the patient's own first-person question-generating voice — the central discipline of this module.

### Step SDM.0.1: Case Data Intake

**Prompt:**

```
#VibeRounds Before generating questions, summarise back to the learner, in
plain non-technical language, your understanding of: (a) the diagnosis or
clinical situation; (b) the decision that is being presented; (c) the
option(s) already mentioned in the case data; (d) anything documented about
the patient's stated preferences, fears, priorities, or life
circumstances. Ask the learner to confirm or correct this summary before
proceeding. If any of (a)-(d) is missing from the case data, say so
explicitly rather than filling the gap — a missing patient-preference field
is itself an important finding, not an oversight to quietly patch.
```
> [!NOTE] **Application Note:** This step protects against the most common failure mode of AI-generated SDM content — quietly inventing patient values or clinical details that were never in the case data.

---

## Phase 2 · Execution — Seven-Domain Query Sweep

### DOMAIN 1 — The Decision Itself

#### Step SDM.1.1: Naming and Scoping the Decision

**Prompt:**

```
#VibeRounds Domain 1 — The Decision Itself. From the case data, generate
5-7 patient-voiced questions that clarify what is actually being decided.
Include variants of: 'What exactly am I being asked to decide right now?'
'Is this decision urgent, or do I have time to think about it?' 'Who is
making this decision — me, my family, or the team, and whose decision is
it supposed to be?' 'What happens if I don't decide today?' 'Is "doing
nothing for now" actually one of the choices, even if no one has said so?'
Phrase every question in first person, as the patient would say it aloud,
not in clinical third person.
```

#### Step SDM.1.2: Checking for a False Binary

**Prompt:**

```
#VibeRounds Still in Domain 1. Case data often frames a decision as two
options when more may exist. Generate 3-4 questions that test whether the
decision has been artificially narrowed: 'Are there other options that
haven't been mentioned to me?' 'Is this a choice between exactly two
paths, or are there variations — different doses, timings, or partial
approaches?' 'Has this decision been shaped by what's available or covered
here, rather than by what exists everywhere?' Flag to the learner if the
case data itself only presents one option — that is a red flag for the
advocate to raise, not a normal finding.
```

---

### DOMAIN 2 — Options on the Table

#### Step SDM.2.1: Full Option Enumeration

**Prompt:**

```
#VibeRounds Domain 2 — Options. Generate patient-voiced questions that
force a complete option list to surface, including ones that may be
under-discussed: 'What are all the ways this could be managed, including
watching and waiting?' 'Is there a non-surgical / non-pharmacological
option I haven't been told about?' 'What would happen if I chose to do
nothing at all?' 'Are there options that exist but aren't offered here —
at another centre, on a trial, or through a specialist?' Ask 5-6 questions
total, calibrated to the specific decision type in the case data (e.g.
surgical vs. medication vs. screening vs. goals-of-care decisions require
different sub-questions).
```

#### Step SDM.2.2: Option-by-Option Comparison Questions

**Prompt:**

```
#VibeRounds Still in Domain 2. For each option identified in the case
data, generate one parallel question the patient can ask about that
specific option, so options can be compared side by side: 'For [Option A],
what would my day-to-day life actually look like?' 'For [Option B], what
would my day-to-day life actually look like?' Repeat this parallel
structure for every option present in the case data. Close with: 'Can you
walk me through what a "good outcome" and a "bad outcome" would look like
for each option, in plain terms?'
```

---

### DOMAIN 3 — Benefits & Harms

#### Step SDM.3.1: Benefit Specificity

**Prompt:**

```
#VibeRounds Domain 3 — Benefits and Harms. Generate questions that push
past vague reassurance toward specific, numeric, or concrete answers:
'What specifically will get better, and by when, if I choose this option?'
'Out of 100 people like me who choose this, roughly how many are helped in
the way I'd care about?' 'Is the benefit about living longer, feeling
better, or both — and which one does this option actually target?' 'What
does "success" mean here, in terms I would notice in my own life, not just
in test results?'
```

#### Step SDM.3.2: Harm and Trade-Off Specificity

**Prompt:**

```
#VibeRounds Still in Domain 3. Generate the harm-side counterpart
questions: 'What are the most common side effects or complications, and
how often do they happen?' 'What is the worst realistic outcome of this
option, even if rare?' 'What symptoms or losses might I experience that
nobody has mentioned yet — pain, fatigue, changes to how I look, function,
or independence?' 'Is there a harm that would only become clear months or
years later?' Close with a synthesis question: 'If I weigh what I could
gain against what I could lose, who has actually done that weighing — has
anyone, or is it left to me alone?'
```

---

### DOMAIN 4 — Certainty & Evidence Quality

#### Step SDM.4.1: How Sure Is Anyone?

**Prompt:**

```
#VibeRounds Domain 4 — Certainty and Evidence Quality. Generate questions
that surface how confident the evidence actually is, without requiring the
patient to understand statistics: 'How much evidence is there for this
option — has it been well studied, or is this based on a smaller or newer
body of research?' 'Is this recommendation based on strong trial evidence,
or is it more of an expert best-guess for a case like mine?' 'Is there
anything about my specific situation — my age, other conditions, or
history — that makes the usual evidence less certain to apply to me?'
'What don't we know yet that could change this decision later?'
```

#### Step SDM.4.2: Whose Estimate Is This?

**Prompt:**

```
#VibeRounds Still in Domain 4. Generate questions that clarify the source
and possible bias of the numbers being presented: 'Where do these numbers
come from — this hospital's own results, a national average, or a study
population that may not look like me?' 'Has anyone else's opinion been
sought — a second opinion, a multidisciplinary team discussion?' 'If I
asked a different specialist the same question, is it likely I'd get a
different answer, and if so, why?'
```

---

### DOMAIN 5 — Fit With What Matters to Me

#### Step SDM.5.1: Values Elicitation Questions

**Prompt:**

```
#VibeRounds Domain 5 — Fit With What Matters to Me. This domain generates
questions the patient asks *themselves*, not the clinician, to clarify
their own values before or during the conversation. Generate 5-6
self-directed reflective questions: 'What matters most to me right now —
living as long as possible, staying independent, staying comfortable,
being able to keep doing a specific activity or role?' 'What would I be
most afraid of losing if this goes badly?' 'Is there a line I would not
want crossed, regardless of the medical benefit — for example, a
treatment intensity, a loss of independence, or a location of care I would
not accept?' 'Whose voice, if anyone, do I want in this decision with me?'
If case data already documents patient values, incorporate them directly
into the phrasing rather than asking generically.
```

#### Step SDM.5.2: Matching Options to Values

**Prompt:**

```
#VibeRounds Still in Domain 5. Generate questions that connect the
patient's own stated values (from Step SDM.5.1 or from case data) to the
specific options on the table: 'Given that [stated value] matters most to
me, which of these options is actually built around that, and which one
isn't?' 'Is there an option that technically works clinically but doesn't
fit how I want to live?' 'Has anyone asked me what matters to me before
recommending an option, or was the option chosen first?'
```

---

### DOMAIN 6 — Practical & Logistical Reality

#### Step SDM.6.1: Time, Cost, and Burden

**Prompt:**

```
#VibeRounds Domain 6 — Practical and Logistical Reality. Generate
questions covering the non-clinical costs of each option: 'How much time
will this take — appointments, recovery, travel — and can I actually fit
that into my life?' 'What will this cost me, and is any of it covered?'
'Will I need someone else to help me — a carer, time off work for a
family member — and have they been asked if they can?' 'What happens to
my other responsibilities — work, children, caregiving I already do —
while I go through this?'
```

#### Step SDM.6.2: Support and Preparation Needs

**Prompt:**

```
#VibeRounds Still in Domain 6. Generate questions about what the patient
would need in place to actually carry out each option: 'What would I need
to have ready at home before this — equipment, help, changes to my
living space?' 'Who will I be able to contact if something goes wrong
after hours or after discharge?' 'Is there support available to help me
decide — a decision aid, a patient navigator, a second conversation once
I've had time to think?'
```

---

### DOMAIN 7 — Reversibility & Next Steps

#### Step SDM.7.1: Can I Change My Mind?

**Prompt:**

```
#VibeRounds Domain 7 — Reversibility and Next Steps. Generate questions
that clarify how locked-in each option is: 'If I choose this and it isn't
right for me, can I stop or change course later?' 'Is this decision
permanent, or can it be revisited?' 'If I choose to wait or do nothing for
now, does that close off any of the other options later?' 'What is the
actual deadline for this decision, and what happens if I miss it?'
```

#### Step SDM.7.2: What Happens Next

**Prompt:**

```
#VibeRounds Still in Domain 7. Close the domain with process questions:
'Once I decide, what happens next, step by step?' 'How and when will I
know if the option I chose is working?' 'Who do I tell if I change my
mind, and how much notice do they need?' 'Can I get a written or recorded
summary of this conversation so I don't have to rely on memory alone?'
```

---

## Phase 3 · Synthesis & Closure

### Step SDM.8: The Patient Question Set

**Prompt:**

```
#VibeRounds Consolidate all domains into a single Patient Question Set,
ready to bring into the actual conversation. Format as:

| # | Domain | Question (first-person, plain language) | Why this question matters |

Limit to the 12-15 highest-value questions overall — not every question
generated in Phases 1-2, but the ones most load-bearing for *this*
specific case's decision. Order them in the sequence a patient would
naturally want to ask them in conversation, not by domain number.
```

### Step SDM.9: The "Ask 3" Priority Distillation

**Prompt:**

```
#VibeRounds From the full Patient Question Set, distil the three questions
that matter most if the patient only gets to ask three. For each, state:
(a) the question in plain first-person language; (b) why it was chosen
over the others; (c) what a good, complete answer from the clinician
should sound like, so the patient can recognise if the question has
actually been answered or just acknowledged.
```

### Step SDM.10: Gaps in the Case Data Itself

**Prompt:**

```
#VibeRounds Separately from the patient's questions, identify what is
MISSING from the case data that would be needed to answer those questions
well — e.g., no documented discussion of patient values, no mention of a
"watch and wait" option, no numeric estimate of benefit given. Present
this as a short list: 'Not found in the case data: ___.' This list is for
the learner or advocate, not the patient — it flags where the advocate
should push for more information before or during the conversation.
```

### Step SDM.11: Learner Reflection — Bloom's Close

**Prompt:**

```
#VibeRounds Close this module with a three-level Bloom's reflection: (1)
[Remember] Which question in the generated set would you not have thought
to ask before working through this module? (2) [Analyse] Was the original
case data presented to you as a genuine choice, or as a decision already
made and merely being explained? What told you which one it was? (3)
[Evaluate] If this patient walks into the real conversation with only
these questions and nothing else, what is the single biggest way their
outcome could be better because of it? Affirm the learner's effort:
generating good questions on someone else's behalf, without putting words
in their mouth, is one of the hardest and most protective advocacy skills
in medicine.
```
> [!NOTE] **Application Note:** Bloom's "Remember → Analyse → Evaluate" applied to SDM-question-generation competency. See [Framework C](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html). The reflection step is not optional — it converts a question list into a learning event about advocacy itself.

---

## Seven-Domain Quick-Reference Card

*Paste this at the top of any decision-point case note to use as a checklist without running the full module.*

```
#VibeRounds — SDM Patient Question Quick Scan (7 Domains)
Patient: [paste de-identified identifier]
Decision point: [name the decision]
Date: [date]

□ 1. THE DECISION     — What exactly is being decided? Is "wait" an option?
□ 2. OPTIONS           — Full list, including doing nothing? Any missing?
□ 3. BENEFITS & HARMS  — Specific, numeric where possible, both sides?
□ 4. CERTAINTY         — How strong is the evidence? Does it apply to me?
□ 5. VALUES FIT        — What matters most to me? Does an option match it?
□ 6. PRACTICAL REALITY — Time, cost, help needed, burden on others?
□ 7. REVERSIBILITY     — Can I change my mind? What's the real deadline?

Any box left blank = an unasked question. Name it. Ask it. Bring it in.
```

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (patient-voiced persona language throughout)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Step SDM.11)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step SDM.10 — case-data gap auditing)

## Related Modules

- [Module 2 — Patient-Advocate Case Documentation](https://avi33tbtt.github.io/Prompts/Module-02-Patient-Advocate-Case-Documentation.html) (builds the case record this module draws on)
- [Module 11 — Patient Education Query Intelligence](https://avi33tbtt.github.io/Prompts/Module-11-Patient-Education-Query-Intelligence.html) (complementary — understanding vs. deciding)
- [Module 55 / PN — Patient Needs Assessment](https://avi33tbtt.github.io/Prompts/Module-55-Patient-Needs-Assessment.html) (Domain 5 informational/decision-support needs feeds this module)
- [Module 53 — Clinical Guideline Intelligence Navigator](https://avi33tbtt.github.io/Prompts/Module-53-Clinical-Guideline-Intelligence-Navigator.html) (Domain 4 certainty/evidence questions)

---

## Navigation

[← Back to README](https://avi33tbtt.github.io/Prompts/)
