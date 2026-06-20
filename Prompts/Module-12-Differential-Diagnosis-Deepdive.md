[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module 12 — Differential Diagnosis Deepdive (Devil's Advocate Mode)

**Objective:** Systematically attack the working diagnosis and stress-test the entire differential list — surfacing anchoring errors, premature closure, and overlooked zebras before they reach the patient.

**Indication:** Any complex, atypical, or diagnostically uncertain presentation; cases where an initial working diagnosis has been formed but not yet confirmed; post-Socratic (Module 1) debrief when deeper adversarial pressure is warranted; high-stakes or rare-disease contexts where anchoring bias is most dangerous.

> [!IMPORTANT] **Clinical Disclaimer** All AI-generated outputs produced using this module — including diagnostic challenges, ranked differentials, and bias flags — require independent clinical verification before being acted upon. Devil's Advocate outputs are deliberately adversarial and do not represent a balanced clinical opinion. They are a stress-testing tool, not a diagnostic service.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## How Devil's Advocate Mode differs from Socratic Mode

| Dimension | Socratic (Module 1) | Devil's Advocate (Module 12) |
|---|---|---|
| **Primary role of AI** | Coach who withholds answers to make learner reason | Adversarial challenger who attacks the learner's conclusions |
| **Direction of pressure** | Forward — "what do you think next?" | Backward — "why do you think that at all?" |
| **Answer posture** | Reveal only after learner commits | AI asserts the countercase and demands a rebuttal |
| **Cognitive bias target** | Errors of omission during reasoning | Errors of commission — premature closure, anchoring |
| **Best moment to deploy** | Before a diagnosis is formed | After a working diagnosis is formed |
| **Learner affect to expect** | Curiosity, guided uncertainty | Productive discomfort, intellectual pressure |

---

## Phase 1 · Initiation — Load the case and set the adversarial contract

### Step 12.0: Devil's Advocate Session Setup

**Prompt:**

```
#VibeRounds You are entering Devil's Advocate Mode. Your role is not to
teach — it is to challenge. I have a working diagnosis for a clinical case
and I am going to share the case details with you. Your job is to
systematically argue against my working diagnosis, surface every
reasonable alternative on the differential, and force me to defend my
reasoning with evidence from the case — not intuition. You are allowed to
be blunt. You are not allowed to be cruel. You do not affirm my working
diagnosis until I have defended it against at least three serious
challenges you have raised. If I cannot rebut a challenge, you log it as
an UNRESOLVED VULNERABILITY and we continue. At the end of the session you
will give me a Diagnostic Confidence Score out of 10 based on how well I
defended my working diagnosis, and a list of all unresolved
vulnerabilities. Confirm you understand the rules and ask me to present the
case.
```

> [!NOTE] **Application Note:** The three-challenge minimum before any affirmation is deliberate — it prevents the AI from validating a correct diagnosis too early and short-circuiting the adversarial stress-test. The UNRESOLVED VULNERABILITY log is the most clinically important output of this module; it becomes the audit trail for what still needs investigation.

---

## Phase 2 · Execution — Adversarial differential stress-testing

### Step 12.1: Working Diagnosis Attack — The First Assault

**Prompt:**

```
#VibeRounds My working diagnosis is [STATE DIAGNOSIS]. Here is the case:
[PASTE CASE SUMMARY — demographics, presenting complaint, history, vitals,
examination findings, investigations to date]. Begin the adversarial
stress-test. Give me your three strongest arguments against this diagnosis
being correct. For each argument, cite the specific case feature that
undermines my diagnosis and name the cognitive bias that could explain why
I landed here anyway. Do not offer alternatives yet — only attack first.
```

> [!NOTE] **Application Note:** Separating attack (Step 12.1) from alternative generation (Step 12.2) prevents the AI from softening the attack by immediately pivoting to a "but here's what it could be instead." The attack must land cleanly first. This structure is adapted from formal adversarial red-teaming methodology.

### Step 12.2: Alternative Differential Generation — The Counter-Roster

**Prompt:**

```
#VibeRounds Now generate the full adversarial differential. List every
diagnosis that fits this presentation at least as well as my working
diagnosis, starting with the most dangerous alternative (highest mortality
if missed) and ending with the most statistically likely alternative (base
rate). For each: (1) name one feature from the case that supports it,
(2) name one feature from the case that weighs against it, (3) name the
single investigation that would most efficiently confirm or exclude it.
Flag any diagnosis I should have considered that is absent from my
original differential.
```

> [!NOTE] **Application Note:** The dual ranking — most dangerous first, then most likely — forces the learner to hold two separate risk calculi simultaneously, which mirrors real clinical triage logic. The "absent from your original differential" flag is where the highest-yield learning usually occurs.

### Step 12.3: Cognitive Bias Interrogation

**Prompt:**

```
#VibeRounds Now run a cognitive bias audit on my reasoning in this case.
For each of the following biases, tell me whether the case evidence
suggests I may have fallen into it, and if so, give one concrete example
from the case: (1) Anchoring bias — fixating on the first diagnosis
suggested; (2) Availability bias — favouring a diagnosis I have seen
recently; (3) Premature closure — stopping the search after the first
plausible fit; (4) Framing effect — being led by how the referral or
history was worded; (5) Confirmation bias — selectively weighting features
that support my working diagnosis; (6) Representativeness bias — matching
to a prototype and ignoring atypical features. For each bias present: rate
its likely influence as Low / Moderate / High and suggest one debiasing
action I could take right now.
```

> [!NOTE] **Application Note:** This step operationalises Framework D (Vibe Rounds Critical Awareness Framework). Unlike the general debrief in Step 1.10, this bias audit is case-specific and adversarial — the AI is looking for evidence of bias in what the learner has already said and committed to, not raising abstract concerns. See [Framework D](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html).

### Step 12.4: The Zebra Test — Low-Frequency, High-Stakes Alternatives

**Prompt:**

```
#VibeRounds Now apply the Zebra Test. Set aside all common diagnoses.
Give me the top three rare or atypical diagnoses that this case could
represent, even if the prior probability is low. For each: (1) what
feature of this case — however subtle — makes you consider it, (2) what
is the single clinical or investigative finding that would confirm or
exclude it within 24 hours, (3) what is the consequence of missing it for
one more day? Flag if any of these zebras has a specific demographic,
geographic, or occupational risk factor relevant to this patient.
```

> [!NOTE] **Application Note:** The 24-hour exclusion window is intentional — it grounds the zebra hunt in practical urgency rather than academic curiosity. This step is highest-yield in presentations with red-flag features (weight loss, night sweats, systemic symptoms) or in geographic or occupational contexts where exposure-based diagnoses are plausible.

### Step 12.5: Evidence Sufficiency Challenge

**Prompt:**

```
#VibeRounds Challenge my evidence base. For my working diagnosis of
[RESTATE DIAGNOSIS], list every investigation I have ordered and rate each
one as: (A) Necessary and sufficient to support this diagnosis, (B)
Supportive but not specific, or (C) Irrelevant or actively misleading in
this context. Then tell me: (1) What is the single piece of evidence I do
not yet have that would most raise my diagnostic confidence? (2) What is
the single result I should obtain before committing to a management plan?
(3) Is there any result in the current dataset that I appear to have
underweighted or overweighted?
```

> [!NOTE] **Application Note:** The A/B/C evidence sufficiency rating often reveals that management plans are being driven by non-specific supportive data rather than diagnostic-grade evidence — a pattern that Module 5's data audit (Step 5.8) can flag at the case log level but that only this adversarial lens exposes at the reasoning level.

### Step 12.6: Cross-Examination — The Rebuttal Round

**Prompt:**

```
#VibeRounds I am now going to defend my working diagnosis against all the
challenges you have raised. [PASTE YOUR REBUTTAL HERE — or type it live
in your next message.] After I have made my case, you will: (1) Score
each of my rebuttals as Strong, Partial, or Insufficient; (2) For any
Insufficient rebuttal, restate the challenge and give me one specific piece
of evidence from the case or from clinical knowledge that I need to address
it properly; (3) Update the UNRESOLVED VULNERABILITY list — remove any
challenge I have successfully rebutted and keep or add any that remain
open.
```

> [!NOTE] **Application Note:** This is the only step in Phase 2 where the learner leads and the AI responds to them, rather than vice versa. The rebuttal round inverts the adversarial dynamic briefly to give the learner agency — without this, the session risks becoming demoralising rather than productive. Strong rebuttals should be explicitly acknowledged; this is where the humanistic persona from Framework A is most important to activate.

### Step 12.7: Atypical Presentation Stress-Test

**Prompt:**

```
#VibeRounds This presentation has atypical features. Apply the Atypical
Presentation Lens. For each atypical feature in this case: (1) name the
feature, (2) state which classic textbook presentation it deviates from
and how, (3) list the three most important explanations for why the
presentation might be atypical — including age-related variation, sex or
hormonal variation, immunosuppression, polypharmacy masking, or cultural
or linguistic framing of symptoms. Then ask me: if every typical feature
I was expecting had been present and this atypical one was the only thing
missing, would I still have reached the same diagnosis?
```

> [!NOTE] **Application Note:** The closing question — a counterfactual reasoning probe — is deliberately Socratic in a Devil's Advocate module. This is intentional: at Step 12.7, the adversarial pressure has been fully applied and a single Socratic pivot helps the learner reintegrate their reasoning rather than remain in a purely defensive posture. Modules are allowed to borrow a move from another mode at a specific step when the learner's cognitive state warrants it.

---

## Phase 3 · Closure / Review — Synthesise, score, and extract

### Step 12.8: Diagnostic Confidence Score & Vulnerability Report

**Prompt:**

```
#VibeRounds We have completed the adversarial stress-test. Now produce the
full Devil's Advocate Closure Report: (1) Diagnostic Confidence Score —
rate my overall defence of the working diagnosis out of 10, with a
one-sentence justification; (2) UNRESOLVED VULNERABILITY LIST — all
challenges I did not successfully rebut, with a one-line note on the
clinical implication of each; (3) Differential Ranking — your ranked list
of the top three alternative diagnoses that should remain live until the
unresolved vulnerabilities are addressed; (4) Minimum Investigation
Checklist — the specific tests or findings needed before I can close the
differential with confidence; (5) Cognitive Bias Summary — the one bias
that most significantly influenced my reasoning in this session.
```

> [!NOTE] **Application Note:** The Diagnostic Confidence Score is not a grade on case knowledge — it is a calibration tool for investigative urgency. A score of 7/10 or above with no Critical-grade vulnerabilities supports proceeding. A score below 6/10 or any single unresolved vulnerability rated as high-stakes should trigger active re-evaluation before management escalates.

### Step 12.9: Devil's Advocate vs Socratic Integration Debrief

**Prompt:**

```
#VibeRounds We have now stress-tested this diagnosis adversarially. Help
me integrate this experience with my earlier Socratic reasoning on this
case. (1) What did the Devil's Advocate mode reveal that my Socratic
reasoning session missed or underweighted? (2) What did the Socratic
session build in me that helped me rebuttal-defend my diagnosis in this
session? (3) If I were to teach this case to a junior learner, which three
questions would I now add to a Socratic case discussion that I would not
have thought to ask before this adversarial session? Frame the answer as a
growth narrative, not a deficit summary.
```

> [!NOTE] **Application Note:** This step is the formal integration bridge between Module 12 and Module 1. It is optional when Module 12 is run as a standalone, but strongly recommended when Module 12 follows a Module 1 session on the same case. The three new Socratic questions it generates can be fed directly into Step 1.1 (Socratic Question Generator) for a future session on a similar case.

### Step 12.10: Red Flag Extraction & Escalation Trigger

**Prompt:**

```
#VibeRounds Based on everything we have discussed in this Devil's Advocate
session, extract all active red flags in this case — clinical features,
investigative gaps, or diagnostic vulnerabilities that should trigger
immediate escalation or senior review. For each red flag: (1) state the
feature, (2) state why it is a red flag in this case specifically (not
generically), (3) state the escalation action and timeframe. Then give me
a one-sentence clinical safety statement I could use in a handover or
documentation note to accurately represent the diagnostic uncertainty
that remains.
```


### Step 12.11: Difficulty Ratchet & Next Adversarial Session Calibration

**Prompt:**

```
#VibeRounds Based on my performance in this Devil's Advocate session:
(1) Which phase of the adversarial process was I strongest in —
generating the rebuttal, recognising cognitive bias, or identifying
investigative gaps? (2) Which phase was I weakest in? (3) Recommend the
difficulty level for my next Devil's Advocate session: same complexity,
one level harder (add a second competing diagnosis with equal evidence
weight), or one level easier (reduce the number of atypical features).
(4) Give me one specific clinical reasoning skill to practise before the
next session — something I can do with a real case or a textbook in the
next 48 hours.
```

> [!NOTE] **Application Note:** Mirrors the structure of Step 1.9 (Difficulty Ratchet for Next Session) intentionally — the parallel structure allows learners to track their trajectory across both Socratic and Devil's Advocate modes in a consistent format. A learner who scores Strong across all rebuttals in Step 12.6 and receives a Diagnostic Confidence Score ≥ 8/10 in Step 12.8 should be directed to Module 12 Level Hard (two competing diagnoses) or Module 9 (N-of-1 Research Protocol) for the same case.

---

## Quick-Start Reference Card

*For experienced users who know the module — copy the step you need directly.*

| Step | One-line purpose | Phase |
|---|---|---|
| 12.0 | Set the adversarial contract | Initiation |
| 12.1 | Attack the working diagnosis with three arguments | Execution |
| 12.2 | Generate full adversarial differential (danger-first, base-rate-second) | Execution |
| 12.3 | Cognitive bias audit — six biases, case-specific evidence | Execution |
| 12.4 | Zebra Test — rare/high-stakes alternatives | Execution |
| 12.5 | Evidence sufficiency challenge — rate every investigation | Execution |
| 12.6 | Rebuttal round — learner defends, AI scores and updates vulnerability log | Execution |
| 12.7 | Atypical presentation stress-test | Execution |
| 12.8 | Diagnostic Confidence Score + full Vulnerability Report | Closure |
| 12.9 | Integration debrief — Devil's Advocate vs Socratic | Closure |
| 12.10 | Red flag extraction + escalation triggers + clinical safety statement | Closure |
| 12.11 | Difficulty ratchet + next session calibration | Closure |

---

## Module 12 Maturity Level

| Module | Status | Description |
|---|---|---|
| **Module 12** | 🔴 Primitive | Proposed structure — not yet validated in a live clinical or educational environment. Evidence base is expert opinion / design rationale only. |

---

## Prompt Analytics Tags

| Step | AI Mode |
|---|---|
| 12.0 | Devil's Advocate |
| 12.1 | Devil's Advocate |
| 12.2 | Devil's Advocate · Brainstorming |
| 12.3 | Devil's Advocate |
| 12.4 | Devil's Advocate · Brainstorming |
| 12.5 | Devil's Advocate |
| 12.6 | Devil's Advocate · Socratic |
| 12.7 | Devil's Advocate · Socratic |
| 12.8 | Traditional |
| 12.9 | Devil's Advocate · Socratic |
| 12.10 | Traditional |
| 12.11 | Traditional |

> **Tagging rationale:** Steps 12.6, 12.7, and 12.9 carry dual Devil's Advocate + Socratic tags. In 12.6 the AI is scoring a learner rebuttal (adversarial) but the learner is generating a reasoned defence (Socratic commitment required). In 12.7 the closing counterfactual question is a direct Socratic probe embedded in an adversarial frame. In 12.9 the integration debrief requires the learner to reason across two modes simultaneously. Steps 12.8, 12.10, and 12.11 are Traditional — they produce structured deliverables (report, safety statement, calibration note) with the AI in output mode.

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) — active in Step 12.6 (rebuttal acknowledgement) and Step 12.8 (growth framing of the Confidence Score)
- [Framework D — Vibe Rounds Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) — operationalised in Step 12.3 (cognitive bias audit) and Step 12.9 (integration debrief)
- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) — Step 12.9 is the formal bridge between Module 1 and Module 12; the three new Socratic questions generated in 12.9 feed back into Step 1.1
- [Module 4 — Peer-Level Ward Round Preparation](https://avi33tbtt.github.io/Prompts/Module-04-Peer-Level-Ward-Round-Preparation.html) — Step 12.10's clinical safety statement feeds directly into the SBAR handover structure in Step 4.9
- [Module 9 — N-of-1 Case Research Protocol](https://avi33tbtt.github.io/Prompts/VibeRounds_Module9_Research_Protocol.html) — learners who exhaust Module 12's adversarial process without resolving their diagnostic uncertainty should escalate to Module 9

---

## Design Rationale & Gap This Module Fills

The existing Devil's Advocate prompts in the Vibe Rounds system (Steps 1.8, 1.10, 4.3, 6.6, 6.13, 7.6, 7.12, 8.2, 9.4, 9.9) are all **embedded** — they appear as single closure or debrief steps within modules whose primary mode is Socratic, Traditional, or Registry. None of them is dedicated to the full adversarial stress-test of a single working diagnosis from first challenge through to resolved closure.

Module 12 is the first module in the Vibe Rounds system where Devil's Advocate Mode is the **primary lifecycle mode**, not a debrief addendum. Its distinct contributions:

1. **Sequential adversarial structure** — attack precedes alternatives (Steps 12.1 → 12.2), which prevents the AI from softening the attack by immediately pivoting to "what else could it be."
2. **Formal rebuttal round** (Step 12.6) — the learner is required to defend, not just receive criticism. This is absent from all existing Devil's Advocate steps.
3. **UNRESOLVED VULNERABILITY LOG** — a persistent audit trail across the session, not a one-off debrief comment.
4. **Exportable clinical safety statement** (Step 12.10) — bridges the educational exercise to real clinical documentation.
5. **Mode integration** (Step 12.9) — explicitly connects the Devil's Advocate experience back to Socratic reasoning to prevent the two modes from being siloed in the learner's mind.

---

## Navigation

**Previous:** [← Module 9 — N-of-1 Case Research Protocol](https://avi33tbtt.github.io/Prompts/VibeRounds_Module9_Research_Protocol.html) &nbsp;&nbsp; *(Modules 10–11 are reserved for future development)*

[← Back to README](https://avi33tbtt.github.io/Prompts/)

---

*VibeRounds Prompt Modules · Module 12 — Differential Diagnosis Deepdive (Devil's Advocate Mode)*
*Proposed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*
