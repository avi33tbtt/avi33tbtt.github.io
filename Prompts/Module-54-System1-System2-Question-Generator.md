# Module S1S2 — System 1 & System 2 Thinking Question Generator

**VibeRounds Prompt Module · Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026**
**#VibeRounds — A Socratic AI Paradigm for Clinical Medicine**

---

> [!IMPORTANT] **Clinical Disclaimer & Independent Verification Required**
> All AI-generated outputs produced using these prompts require independent clinical verification before being acted upon. This module does not substitute for clinical judgment, professional medical advice, or established institutional safety protocols at any stage.

---

> [!NOTE] **Module Status: 🟢 Mature**
> Ready for self-directed learning use.

---

## Overview

| Field | Description |
|---|---|
| **Module** | S1S2 |
| **Title** | System 1 & System 2 Thinking Question Generator |
| **Objective** | Generate a structured set of System 1 (fast, intuitive, pattern-recognition) and System 2 (slow, deliberate, analytical) questions for any clinical case, forcing the learner to consciously shift between cognitive modes |
| **Indication** | Use when a learner has presented a case and needs to interrogate their own reasoning process — not just the diagnosis, but *how* they arrived at it |
| **Lifecycle** | Initiation → Execution → Closure / Review |
| **Validated Env.** | Claude Sonnet (claude.ai); Gemini 1.5 Pro |
| **Application Note** | Best used immediately after an initial case presentation, before the learner has committed to a diagnosis. The goal is metacognitive disruption — surfacing where fast thinking helped and where it may have anchored prematurely. |

---

## Theoretical Grounding

This module is built on **Dual Process Theory** (Kahneman, 2011; Croskerry, 2002), which describes two modes of clinical cognition:

| System | Character | Clinical Expression | Risk |
|---|---|---|---|
| **System 1** | Fast, automatic, pattern-based, low-effort | "This feels like PE" · Gestalt recognition · Illness scripts | Premature closure · Anchoring bias · Availability heuristic errors |
| **System 2** | Slow, deliberate, analytical, high-effort | Systematic DDx generation · Bayesian reasoning · Explicit hypothesis testing | Cognitive overload · Satisficing · Paralysis under time pressure |

Neither system is superior. Expert clinicians toggle fluidly between them. This module teaches that toggle explicitly.

**Linked Frameworks (from VibeRounds architecture):**

- **Framework C (Bloom's Revised Taxonomy):** Questions span Remember (S1 pattern recall) through Evaluate and Create (S2 synthesis and hypothesis generation).
- **Framework D (Critical Awareness):** Forces the learner to audit *their own* reasoning process for bias, not just the clinical content.
- **Module 24 (Heuristic Analysis):** Companion module — S1S2 surfaces *that* a heuristic was used; Module 24 names and analyses it.
- **Module 26 (Bias Auditing):** S1S2 is the upstream trigger; Module 26 is the deep-dive downstream.
- **Module 32 (Clinical Cognition Loop):** S1S2 feeds directly into the cognition loop debrief.

---

## Lifecycle

### Phase 1 — Initiation

**Step S1S2.0 — Orient the AI and Set the Contract**

> Paste the following initiation block at the start of a new session, then paste your case immediately after:

```
You are a clinical reasoning coach running the VibeRounds System 1 / System 2 Thinking Module.

Your role is NOT to tell me the diagnosis. Your role is to generate two distinct lists of questions that will force me to examine how I am reasoning about this case — one list targeting my fast, intuitive System 1 thinking, and one targeting my slow, deliberate System 2 thinking.

Rules:
1. Do not reveal your assessment of the most likely diagnosis until I explicitly ask.
2. Pose System 1 questions one at a time and wait for my response before moving on.
3. After the System 1 block is complete, signal the shift to System 2 explicitly.
4. After both blocks, provide a brief Cognition Debrief that names any System 1 shortcuts I appeared to rely on and any System 2 analysis I appeared to skip.
5. Frame all feedback as growth observations, not corrections.

I will now paste the case:

[PASTE DE-IDENTIFIED CASE HERE]
```

---

### Phase 2 — Execution

**Step S1S2.1 — System 1 Question Block (Pattern Recognition & Gestalt)**

> The AI will generate the following question types in sequence. Do not skip ahead.

**S1 Question Categories and Example Stems:**

| Category | Purpose | Example Question |
|---|---|---|
| **First Impression** | Capture the learner's gestalt before analysis | "Before you read any further — what is the first diagnosis that came to mind when you saw this case? What triggered it?" |
| **Pattern Match** | Surface the illness script the learner is using | "What cluster of features made this feel like [condition the learner named]? Can you list them in order of weight?" |
| **Visceral Signal** | Identify non-verbal / non-analytical cues | "Was there a single finding — a number, a word, an image — that made something 'click'? What was it?" |
| **Temporal Anchor** | Check if time pressure shaped the impression | "If you had 30 more seconds with this case, would your first impression change? Why or why not?" |
| **Crowd Comparison** | Assess prior exposure bias | "Does this patient remind you of a case you have seen before? How similar are they, really?" |
| **Miss-Risk Screen** | Flag dangerous pattern over-fit | "What is the one diagnosis this pattern could be masking — the one you did not think of first?" |

---

**Prompt for Step S1S2.1:**

```
Now generate the System 1 question block for my case. Use all six S1 question categories (First Impression, Pattern Match, Visceral Signal, Temporal Anchor, Crowd Comparison, Miss-Risk Screen). Ask one question at a time. Wait for my response before continuing. Label each question with its category in brackets.
```

---

**Step S1S2.2 — Cognitive Mode Shift Signal**

> After completing the System 1 block, the AI delivers this transition:

```
⟳ SHIFTING COGNITIVE MODE — System 1 Interrogation Complete

You have now examined your intuitive reasoning. We are switching gears.
System 2 is slower. It is uncomfortable. It asks you to question what felt obvious.
Take a breath. The next questions are not designed to confirm your first impression.
They are designed to stress-test it.
```

---

**Step S1S2.3 — System 2 Question Block (Deliberate Analysis)**

> The AI will generate the following question types in sequence.

**S2 Question Categories and Example Stems:**

| Category | Purpose | Example Question |
|---|---|---|
| **Hypothesis Inventory** | Force explicit DDx generation beyond the first hit | "List every diagnosis this presentation is consistent with. Not just the likely ones — all of them. Then rank by probability." |
| **Feature Accounting** | Ensure all data is used, not just salient data | "Which findings in this case did *not* fit your leading diagnosis? How did you explain them away?" |
| **Prior Probability** | Apply base-rate thinking | "In your clinical context — this patient's age, geography, comorbidities — what is the base-rate probability of your leading diagnosis? Does your impression match that base rate?" |
| **Test Threshold** | Distinguish diagnostic from therapeutic thresholds | "At what probability would you treat empirically without further workup? Are you above or below that threshold right now?" |
| **Worst-Case Forcing** | Counter satisficing | "If your leading diagnosis is wrong and you send this patient home, what is the worst outcome that could occur within 72 hours? What single test would rule that out?" |
| **Debiasing Check** | Direct metacognitive audit | "Name the cognitive bias most likely to be operating in this case. How confident are you that it is *not* affecting your reasoning?" |
| **Evidence Demand** | Separate what is known from what is assumed | "Which part of your working diagnosis rests on clinical assumption rather than data from this specific patient?" |
| **Synthesis** | Rebuild the problem representation cleanly | "In one sentence, without using the disease name you are leaning toward, describe this patient's core clinical problem. Does that sentence still point to the same diagnosis?" |

---

**Prompt for Step S1S2.3:**

```
Now generate the System 2 question block for my case. Use all eight S2 question categories (Hypothesis Inventory, Feature Accounting, Prior Probability, Test Threshold, Worst-Case Forcing, Debiasing Check, Evidence Demand, Synthesis). Ask one question at a time. Wait for my response before continuing. Label each question with its category in brackets.
```

---

**Step S1S2.4 — Rapid-Fire Alternating Mode Drill (Optional)**

> For advanced learners or time-pressured simulation: the AI alternates S1 and S2 questions without warning, forcing real-time cognitive gear-switching.

```
Optional advanced drill: Now run a rapid-fire alternating mode drill. Mix System 1 and System 2 questions without labelling which is which. I will try to identify the cognitive mode each question is targeting before answering it. After 10 questions, reveal which were S1 and which were S2 and give me a hit-rate.
```

---

### Phase 3 — Closure / Review

**Step S1S2.5 — Cognition Debrief**

```
Cognition Debrief:

1. Based on my responses, identify the dominant cognitive mode I appeared to rely on in this case (S1-dominant / S2-dominant / balanced).

2. Name up to three specific System 1 shortcuts or heuristics I appeared to apply. For each, state whether it helped or created risk in this case.

3. Name up to two System 2 steps I appeared to skip or shortcut. For each, state the potential consequence.

4. Give one concrete action I can take in my next clinical encounter to better balance S1 and S2 reasoning.

Frame all observations as growth notes, not corrections.
```

---

**Step S1S2.6 — Session Calibration & Difficulty Ratchet**

```
Calibration note:

- If the System 1 questions felt too easy (your pattern recognition was well-calibrated): in the next session, ask the AI to introduce atypical presentations or deliberate red herrings.
- If the System 2 questions felt overwhelming: in the next session, reduce to four S2 categories and focus on Hypothesis Inventory + Worst-Case Forcing.
- If you scored poorly on the alternating mode drill: repeat Step S1S2.4 with a different case before progressing.
```

---

## Quick-Reference Question Bank

> Copy-paste ready. Use these as standalone prompts if you do not want to run the full lifecycle.

### System 1 Question Starters (12 stems)

1. "What is your gut feeling about this case before any analysis?"
2. "What single feature made the most impact on your first impression?"
3. "Does this patient match a template you have seen before? How closely?"
4. "What diagnosis would a rushed, time-pressured clinician land on in 60 seconds?"
5. "If this were a clinical photograph, what would it be a photograph of?"
6. "What is the 'obvious' diagnosis here — and why does it feel obvious?"
7. "Which abnormal finding are you anchoring on most heavily?"
8. "What is your visceral reaction to this patient's trajectory?"
9. "If a colleague described this case verbally in 20 words, what would you say?"
10. "What is the diagnosis you would bet on right now, before any further workup?"
11. "What clinical rule or maxim is operating in the background of your thinking?"
12. "What would you write in the initial assessment line if you had to write it now?"

### System 2 Question Starters (15 stems)

1. "Enumerate every diagnosis on your differential, including low-probability ones."
2. "Which findings does your leading diagnosis fail to explain?"
3. "What is the pre-test probability of your leading diagnosis in this population?"
4. "What single test result would change your management most significantly?"
5. "At what probability threshold would you treat without further investigation?"
6. "What is the most dangerous diagnosis you have not yet ruled out?"
7. "Name the cognitive bias most active in this case. How are you compensating?"
8. "If the first three tests come back normal, what do you do next?"
9. "What assumption are you making that has not been verified with data?"
10. "Restate the core problem without using any diagnostic label."
11. "What would a clinician from a different specialty see in this case that you might miss?"
12. "If this patient deteriorates in 6 hours, which diagnosis explains that deterioration?"
13. "What is the likelihood ratio of the most salient finding for your leading diagnosis?"
14. "What does this patient's age, comorbidity profile, and geography change about your DDx?"
15. "If you were writing a case report about a missed diagnosis, what would this case be about?"

---

## Integration with Other Modules

| When to chain to another module | Which module |
|---|---|
| After identifying a specific heuristic in the Cognition Debrief | **Module 24 — Heuristic Analysis** |
| After naming a bias in Step S1S2.5 | **Module 26 — Bias Auditing** |
| After completing the Synthesis question and needing a full DDx workup | **Module 12 — Differential Diagnosis Deepdive** |
| After identifying a dangerous missed diagnosis in Worst-Case Forcing | **Module 28 — Diagnostic Time-Out** |
| After the session, to embed the case in long-term schema | **Module 15 — Illness Script Acquisition** |
| After the session, to quantify the probabilities named | **Module 36 — Bayesian Probability / Likelihood Ratio Engine** |

---

## Authorship & Development

- **Developed by:** Avinash Kumar Gupta, in the VibeRounds Socratic AI Paradigm framework
- **Theoretical basis:** Kahneman D. *Thinking, Fast and Slow* (2011); Croskerry P. *Achieving Quality in Clinical Decision Making* (2002); Norman G. *Dual Processing and Diagnostic Errors* (2009)
- **Review status:** Not formally peer-reviewed. Community feedback welcome.
- **Testing environment:** Claude Sonnet (claude.ai), Gemini 1.5 Pro. Not tested on GPT-4 or other models.

---

> [!NOTE]
> All placeholders marked `[PASTE DE-IDENTIFIED CASE HERE]` must be filled with de-identified data only, at your individual capacity, with appropriate consent, and in accordance with your local law and institutional policy.

---

*Vibe Rounds Prompt Modules — Module S1S2*
[← Back to Module Index](https://avi33tbtt.github.io/Prompts/Prompts.html) · [← Back to README](https://avi33tbtt.github.io/Prompts/)
