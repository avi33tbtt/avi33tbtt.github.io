[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module 26 — Bias Auditing

**Objective:** Train the discipline of deliberately surfacing and naming the cognitive biases that have shaped — or may have distorted — clinical reasoning on a case, *after* the reasoning has already occurred. Where [Module 1](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) builds reasoning forward from available evidence, Module 22 audits that reasoning retrospectively, asking not *what did you conclude* but *what warped the path to that conclusion*. The output is not a different diagnosis — it is a structured bias inventory and a set of corrective reasoning moves.

**Indication:** Any case where a learner (or team) has already formed a working diagnosis or management plan and needs to examine whether that conclusion was shaped by anchoring, premature closure, availability, or any other identifiable reasoning distortion. Particularly valuable after a missed diagnosis, a case that evolved unexpectedly, a scenario where the first impression proved wrong, or any case reviewed in [Module 5](https://avi33tbtt.github.io/Prompts/Module-05-Real-Time-Case-Review-and-Data-Audit.html) or [Module 7](https://avi33tbtt.github.io/Prompts/Module-07-Longitudinal-and-Cross-Case-Learning.html) where outcome data are now available to compare against the original reasoning.

> [!IMPORTANT] **Pedagogical Warning — read before using this module.** Bias auditing is a post-hoc analytical exercise, not a real-time checklist. Running this module while a case is still live and undecided risks a different error — analysis paralysis — which can itself constitute a form of reasoning failure. Use Module 22 after a reasoning episode has concluded. When bias auditing is used for live cases, the output must be clearly labelled a reflexive observation rather than a clinical recommendation, and must be reviewed by a supervising clinician before it influences any action.

> [!NOTE] **Relationship to Framework D.** [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) seeds bias awareness *across* all modules as a background layer. Module 22 takes that same awareness and makes it the *foreground* — a structured, standalone audit session. Learners already familiar with Framework D will find Module 22 applies those concepts at depth to a single case.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Orient, contract, and prime

### Step 22.0: Session Setup & Reflexivity Contract

**Prompt:**

```
#VibeRounds You are a clinical bias-auditing partner. Your role is not to
tell me whether my diagnosis was right or wrong — that is a clinical
question for a supervising clinician. Your role is to examine *how* I
reasoned: what I attended to, what I discounted, what I assumed, and what
cognitive patterns may have shaped my conclusions. You will name specific
biases where you observe them, explain the mechanism by which each bias
operates in clinical reasoning, and prompt me to reason back through the
case from a de-biased position. You will not flatter my reasoning; you
will interrogate it. Confirm you understand this contract before we begin,
and ask me to paste the case summary I want to audit.
```

> [!NOTE] **Application Note:** The explicit instruction not to flatter is load-bearing — without it, a language model will tend to affirm the learner's reasoning before noting problems, which blunts the audit's value. The contract also positions the AI as a reasoning-process examiner rather than a second-opinion clinician, which is the correct scope boundary for this module.

### Step 22.1: Case Reasoning Reconstruction

**Prompt:**

```
#VibeRounds Before we name any biases, help me reconstruct exactly what
reasoning steps I took — in order. Ask me: What was the first clinical
impression I formed, and when? What information reinforced it? What
information pushed against it, and how did I handle that? What
alternative diagnoses did I actively consider, and at what point did I
set them aside? What was the final conclusion, and what tipped it? Do not
analyse yet — just help me build a complete, chronological map of the
reasoning as it actually happened.
```

> [!NOTE] **Application Note:** Reconstruction before audit is essential — a learner who jumps directly to bias-naming without first mapping the reasoning path tends to identify the biases they already know about (anchoring, availability) rather than the ones that actually operated. A complete reasoning map surfaces the specific moments where distortion entered, rather than producing a generic bias checklist.

---

## Phase 2 · Execution — Identify, interrogate, and challenge

### Step 22.2: First-Impression Anchoring Audit

**Prompt:**

```
#VibeRounds Looking at the reasoning map we built, examine the first
clinical impression I formed. Ask me: How early did I form it? How much
did subsequent information revise it, versus confirm it? Can I identify a
specific moment where I stopped updating my probability estimate even
though new information warranted revision? Name this pattern precisely
(anchoring and insufficient adjustment) and ask me to re-estimate the
probability of each diagnosis on the differential *as if I had received
the disconfirming evidence first*.
```

> [!NOTE] **Application Note:** The counterfactual re-estimation at the end of the step is the active corrective move — it forces the learner to detach the probability estimate from the narrative it arrived in. This is a direct application of the de-biasing technique described in Croskerry's cognitive error literature and in Kahneman's *Thinking, Fast and Slow* framing of System 1 override.

### Step 22.3: Availability & Representativeness Audit

**Prompt:**

```
#VibeRounds Now examine two related biases in my reasoning. First,
availability: did I weight any diagnosis more heavily because it is one I
have seen recently, read about recently, or that came easily to mind —
rather than because the evidence for it was genuinely stronger? Second,
representativeness: did I match this patient's presentation to a prototype
(a textbook image, a memorable prior case) and use that match as a
substitute for working through the actual base rates? Name each pattern
where you find it in my reasoning map, and ask me: what is the actual
prior probability of each diagnosis in a patient with this demographic
profile and presentation, independent of how easily it came to mind?
```

> [!NOTE] **Application Note:** Availability and representativeness are treated together here because they often operate in tandem — a recently seen case (availability) becomes a mental prototype (representativeness) that then anchors the subsequent impression (Step 22.2). Identifying the chain, not just the individual nodes, is the skill being built.

### Step 22.4: Premature Closure Audit

**Prompt:**

```
#VibeRounds Examine whether I closed the diagnostic process too early. Ask
me: At what point did I stop actively generating alternatives? Was that
closure driven by genuinely sufficient evidence, by a satisfying narrative
(a story that "made sense"), by time pressure, or by social factors (a
senior clinician's expressed preference, a patient's own stated belief
about their diagnosis)? Name premature closure explicitly where you find
it. Then ask me: If I had forced myself to maintain an open differential
for one additional reasoning cycle, what diagnosis would have received the
most serious re-examination — and what evidence would I have needed to
gather to rule it in or out?
```

> [!NOTE] **Application Note:** The social-factor component (senior clinician's preference, patient's stated belief) is deliberately included because premature closure driven by hierarchy or patient pressure is clinically extremely common but rarely named as a cognitive bias — learners often experience it as "deferring appropriately" rather than as a reasoning error.

### Step 22.5: Framing Effect & Contextual Bias Audit

**Prompt:**

```
#VibeRounds Examine how the case was *framed* when it arrived to me — the
language used in the referral, the nurse's verbal handover, the patient's
own opening statement, the specialty of the referring doctor — and ask me:
did the framing of the case load the reasoning in a particular direction
before I had access to the raw evidence? Now examine my own contextual
factors: my fatigue level, the volume of cases around this one, whether
this patient reminded me of a previous patient (positive or negative
association). Ask me to name any framing or contextual effect I can
identify and to state explicitly how I would re-approach the case if those
framing elements were different.
```

> [!NOTE] **Application Note:** Framing and contextual bias are often the hardest for learners to identify because they feel like background conditions rather than active inputs to reasoning. Making them explicit — "what was the first sentence I heard about this patient, and from whom?" — is frequently revelatory even for experienced clinicians.

### Step 22.6: Commission Bias & Omission Audit

**Prompt:**

```
#VibeRounds Examine two opposite error directions in my reasoning. First,
commission bias: did I have a tendency to do more, test more, or intervene
more when watchful waiting or de-escalation was clinically appropriate?
Second, omission: did I fail to pursue an investigation or consider a
diagnosis because acting or testing felt disproportionate, risky, or
uncomfortable to raise — and did that omission expose the patient to a
different risk? Ask me to identify which direction my bias tended in this
case, to name the specific decision point where it operated, and to
describe what a recalibrated decision at that point would have looked like.
```

> [!NOTE] **Application Note:** Commission and omission bias are asymmetrically discussed in medical education — commission errors (unnecessary tests, overtreatment) receive more explicit attention in modern curricula; omission errors (failure to act, failure to consider) tend to be labelled differently ("missed diagnosis", "below threshold") without naming the cognitive pattern. This step treats them symmetrically.

### Step 22.7: Affective & Attribution Bias Audit

**Prompt:**

```
#VibeRounds Examine whether my feelings about this patient — positive or
negative — influenced my reasoning. Ask me: Did I find this patient
likeable, credible, or sympathetic, and did that make me more accepting of
their self-reported history or less likely to challenge their stated
beliefs? Conversely, did I find them difficult, non-compliant, or
unconvincing — and did that make me discount symptom reports or default to
psychosomatic or behavioural attributions prematurely? Name any affective
or attribution bias you identify. Then ask me: what would my reasoning
have looked like if this patient's demographics, manner, and credibility
signals had been reversed?
```

> [!NOTE] **Application Note:** Affective bias is the most personally confronting component of this audit and therefore the most commonly skipped. The demographic reversal counterfactual ("if this patient had been younger/older, more articulate, of a different background") is the most reliable way to surface it, because it forces the learner to confront what changed in the reasoning rather than simply denying that affect was present.

---

## Phase 3 · Closure / Review — Consolidate, remediate, and forward-plan

### Step 22.8: Bias Inventory Summary

**Prompt:**

```
#VibeRounds Produce a structured inventory of every bias we identified in
this session. For each one, give me: the bias name and a one-sentence
definition of its mechanism, the specific moment in my reasoning where it
operated, what it caused me to over-weight or under-weight, and the
corrective reasoning move that would have counteracted it. Format this as
a table: Bias | Mechanism | Where it operated | Effect on reasoning |
Corrective move. Do not add any bias we did not actually find in this
case — this is a case-specific audit, not a generic list.
```

> [!NOTE] **Application Note:** The instruction to restrict the table to biases actually identified — not a generic catalogue — is deliberate. A generic bias list is reference material; a case-specific inventory is a learning artifact with direct transfer value to the learner's next similar case.

### Step 22.9: Revised Reasoning Simulation

**Prompt:**

```
#VibeRounds Now run the case reasoning one more time — but this time with
the corrective moves from the bias inventory applied. Walk through the
same decision points, but prompt me to reconsider each one using the de-
biased position we identified. At the end, ask me: did the corrected
reasoning pathway lead to the same conclusion, or a different one? If
different, at which specific decision point did the outcome diverge, and
what was the clinical significance of that divergence?
```

> [!NOTE] **Application Note:** This is the payoff step — it converts an analytical audit into a prospective skill by showing the learner exactly where in their reasoning the correction was highest-yield. Learners who only complete the audit steps without the simulation have named what went wrong; learners who complete the simulation have rehearsed what doing it right looks like.

### Step 22.10: Forward Commitment & Difficulty Ratchet

**Prompt:**

```
#VibeRounds To close the session, ask me three questions. First: which
single bias from this audit am I most likely to repeat in my next similar
case — and what is the one concrete change to my reasoning process that
would make it less likely? Second: is there an aspect of my reasoning in
this case that held up well under audit — something I did not need to
revise — and what enabled that? Third: recommend a next case type or
clinical scenario that would specifically stress-test the bias I am most
prone to, so I can build resistance to it in a controlled learning
environment rather than in an uncontrolled clinical one.
```

> [!NOTE] **Application Note:** The second question is intentional — a bias audit that only surfaces errors, without naming what the learner did right, produces a demotivating signal and misrepresents the actual distribution of reasoning quality. The difficulty-ratchet recommendation in the third question mirrors Module 1's closure design, creating a consistent learning-trajectory logic across the stack.

---

## Cross-Module Connections

| Module | Connection |
|---|---|
| [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) | The foundational bias taxonomy that Module 22 applies at depth to a single case |
| [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) | Module 22 audits reasoning that Module 1 produced; run Module 22 on any Module 1 session where the learner's path diverged from the correct answer |
| [Module 5 — Real-Time Case Review & Data Audit](https://avi33tbtt.github.io/Prompts/Module-05-Real-Time-Case-Review-and-Data-Audit.html) | Outcome data from Module 5 provides the empirical baseline against which Module 22 audits the original reasoning |
| [Module 20 — Naturalistic Decision Making](https://avi33tbtt.github.io/Prompts/Module-20-Recognition-Primed-Decision-Model.html) | Module 20 trains pattern-recognition speed (System 1); Module 22 audits where that speed introduced error |
| [Module 23 — Clinical Cognition Loop](https://avi33tbtt.github.io/Prompts/Module-23-Clinical-Cognition-Loop.html) | Module 23 structures the full forward reasoning cycle; Module 22 is the retrospective audit of that cycle — the two modules are designed to be paired |

---

## Module Maturity

🟡 **In Progress** — Core prompt steps are complete and internally tested. Live clerkship validation pending. Steps 22.2–22.7 are the most developed; Step 22.9 (Revised Reasoning Simulation) is the most experimentally novel component and should be used with a supervising clinician's input until further validation is complete.

---

*Vibe Rounds Prompt Modules — Module 22.*
*Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*

[← Back to README](https://avi33tbtt.github.io/Prompts/)
