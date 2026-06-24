# Module 49 — FMEA Analysis & Clinical Insights

*VibeRounds Prompt Modules · Dr. Avinash Kumar Gupta · June 2026*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*

[← Back to Prompt Directory](https://avi33tbtt.github.io/Prompts/Prompts.html)

---

> [!IMPORTANT] **Clinical Disclaimer & Independent Verification Required**
> All AI-generated outputs produced using this module — including failure mode identification, Risk Priority Numbers (RPN), severity/detectability ratings, and recommended mitigations — **require independent clinical verification before being acted upon.** This module does not substitute for clinical judgment, professional medical advice, institutional patient-safety committees, or established quality-improvement protocols.

> [!NOTE] **What this module is and is not**
> Module 49 applies the **Failure Mode and Effects Analysis (FMEA)** methodology to clinical cases, care processes, and system-level workflows. The AI functions as a structured analytical partner — not a patient-safety officer or quality committee substitute.
>
> - All RPN scores and risk rankings are **learning observations**, not institutional determinations.
> - Identified failure modes should be raised with supervising clinicians, patient-safety leads, or quality-improvement teams before any system change.
> - No output from this module should be entered into a quality register, incident report, or clinical protocol without independent expert review.

---

## Module Metadata

| Field | Detail |
|---|---|
| **Module Number** | 49 |
| **Status** | 🟡 In Progress — Active development; validated conceptually; awaiting live pilot |
| **Objective** | Apply FMEA methodology to identify, score, and prioritize clinical failure modes; generate structured insights and mitigation strategies through Socratic reasoning |
| **Indication** | Use when a learner wants to (a) analyse a near-miss or adverse event, (b) prospectively map risks in a clinical workflow, (c) audit a medication process, procedure, or care pathway for latent failure modes, or (d) prepare for a morbidity & mortality (M&M) conference |
| **Validated Env.** | Conceptually validated; not yet run on live cases |
| **Primary Frameworks Layered** | Framework A (Humanistic Persona), Framework C (Bloom's Taxonomy), Framework D (Critical Awareness) |
| **Companion Modules** | Module 5 (Data Audit), Module 26 (Bias Auditing), Module 28 (Diagnostic Time-Out), Module 29 (Iatrogenic Domino Effect), Module 38 (Poly-Crisis Simulator), Module 42 (Clinical Pre-Mortem) |

---

## What is FMEA? (30-Second Primer for Learners)

**Failure Mode and Effects Analysis (FMEA)** is a prospective risk-assessment technique originally developed in aerospace engineering and later adopted by healthcare (IHI, Joint Commission, NHS). It asks three questions for every step in a process:

1. **What could go wrong?** *(Failure Mode)*
2. **What happens if it does?** *(Effect)*
3. **How likely, severe, and detectable is this failure?** *(RPN)*

The **Risk Priority Number (RPN)** is calculated as:

```
RPN = Severity (S) × Occurrence (O) × Detectability (D)
      Each scored 1–10; RPN range 1–1000
```

| Score | Severity | Occurrence | Detectability |
|---|---|---|---|
| 1–3 | Minor / cosmetic | Unlikely | Almost certain to detect |
| 4–6 | Moderate / reversible harm | Occasional | Sometimes detected |
| 7–9 | Serious / irreversible harm | Frequent | Rarely detected |
| 10 | Catastrophic / death | Near-certain | Virtually undetectable |

> [!NOTE] **FMEA in clinical medicine adapts the industrial model.** Healthcare FMEA (hFMEA) developed by the VA National Center for Patient Safety uses a Hazard Score (Severity × Probability) with a decision tree rather than pure RPN. Both approaches are supported in this module — specify your preferred scoring approach in Step 49.0.

---

## Lifecycle Overview

```
INITIATION  →  EXECUTION  →  CLOSURE / REVIEW
  49.0            49.1–49.7        49.8–49.9
```

---

## Phase 1 — Initiation

### Step 49.0 — Context-Setting & Contract

**Objective:** Orient the AI, define the scope, and set the analytical contract before any case content is submitted.

**When to use:** Always first. Run this step before sharing any case detail.

**Prompt:**

```
You are a Vibe Rounds FMEA Analytical Partner operating under the VibeRounds Socratic AI Paradigm.

Your role in this session is structured analytical reasoning — not clinical decision-making.
You will help me apply Failure Mode and Effects Analysis (FMEA) to a clinical process or case.

Session contract:
1. All failure modes, scores, and recommendations you produce are LEARNING OBSERVATIONS only.
2. You will Socratically prompt me to think before you provide answers — do not immediately give a full FMEA table unprompted.
3. Use the standard RPN model (Severity × Occurrence × Detectability, each 1–10) UNLESS I specify hFMEA (VA model: Severity × Probability + decision tree). Confirm which I want.
4. Flag explicitly when you are uncertain or when your output requires human expert validation.
5. Apply Framework D (Critical Awareness) throughout — name biases and limitations in real time.

Before we begin:
- Ask me (a) whether I am analysing a PAST event (reactive FMEA) or a FUTURE process (prospective FMEA).
- Ask me (b) what the clinical process or case involves (1–2 sentences, de-identified).
- Ask me (c) my role: medical student / junior doctor / nurse / quality officer / patient advocate / other.
- Ask me (d) whether I want RPN scoring or hFMEA Hazard Scoring.

Wait for my answers before proceeding.
```

**Application note:** This step is mandatory. It prevents the AI from producing a generic FMEA table without understanding the learner's context or the case's scope. The four orientation questions directly mirror Module 0's role-routing function.

---

## Phase 2 — Execution

### Step 49.1 — Process Mapping (Define the Steps)

**Objective:** Decompose the clinical process into discrete, sequential steps before any failure mode is named.

**Bloom's level targeted:** Understand → Analyse

**Prompt:**

```
Before we identify failure modes, I need to map the process.

Socratically guide me to list every discrete step in the clinical process or care pathway I described.
- Do NOT give me the list yourself. Ask me to name each step one at a time.
- When I miss an obvious step, ask a Socratic question that leads me to discover it (e.g. "What happens between X and Y?").
- When I believe I am done, play back the full list in a numbered table and ask: "Is anything missing? Are there any handover, documentation, or communication steps that are not listed?"

Target: a numbered step-table of 5–15 discrete process steps.
Format the final agreed table as:

| Step # | Process Step | Person Responsible | Location / Setting |
|---|---|---|---|
```

**Application note:** Borrowed from Module 41 (Clinical Workflow Implementation Science). Learners consistently skip handover and documentation steps, which are disproportionately where failures occur.

---

### Step 49.2 — Failure Mode Elicitation (What Could Go Wrong?)

**Objective:** For each process step, identify plausible failure modes through guided Socratic questioning.

**Bloom's level targeted:** Analyse

**Prompt:**

```
For each step in the process table we just built, help me identify failure modes.

Work through each step one at a time.
For each step, ask me:
1. "What could go wrong at this step?"
2. "Could it fail by being omitted entirely, done incorrectly, or done at the wrong time?"
3. "Have you considered human error, equipment failure, communication breakdown, and system/process gaps as separate categories?"

After I respond for each step, you may add any failure modes I missed — but frame them as questions first:
"Have you considered [X]? What do you think about that?"

Record all agreed failure modes in a running table:

| Step # | Failure Mode ID | Failure Mode Description | Failure Type (Omission / Commission / Timing / Communication / System) |
|---|---|---|---|
```

**Application note:** The four failure-type categories (omission, commission, timing, communication/system) are adapted from the Swiss Cheese Model (Reason, 1990) and the IHI hFMEA toolkit. Naming the type forces the learner to think about *mechanism*, not just *event*.

---

### Step 49.3 — Effects Analysis (What Happens If It Does?)

**Objective:** For each failure mode, reason through the downstream effect on the patient, team, and system.

**Bloom's level targeted:** Analyse → Evaluate

**Prompt:**

```
Now let us analyse the effect of each failure mode.

For each failure mode in our table, Socratically prompt me to reason through:
1. The IMMEDIATE effect — what happens to the patient at that moment?
2. The DOWNSTREAM effect — what does this trigger downstream in the care pathway? (Link to Module 29 — Iatrogenic Domino Effect thinking if relevant.)
3. The SYSTEM effect — what does this do to the team, ward, or institution?

For high-severity failure modes, prompt me to consider whether the effect is:
- Reversible vs. irreversible
- Detectable early vs. only detectable late / post-harm

Add an "Effect" column and an "End Effect" column to the running table:

| Step # | Failure Mode ID | Failure Mode | Effect (Immediate) | End Effect (Final Patient Outcome if Unmitigated) |
|---|---|---|---|---|
```

---

### Step 49.4 — RPN Scoring (Severity, Occurrence, Detectability)

**Objective:** Score each failure mode on S, O, D dimensions and calculate RPN.

**Bloom's level targeted:** Evaluate

**Prompt:**

```
Now let us score each failure mode.

For each failure mode, ask me to assign:
- Severity (S): 1–10 — how bad is the end effect if this failure occurs?
- Occurrence (O): 1–10 — how frequently does or could this failure happen in this setting?
- Detectability (D): 1–10 — how likely is this failure to be detected BEFORE it causes patient harm? (10 = virtually undetectable)

For each score I give, Socratically challenge me:
- "What is your justification for that severity score? What evidence or experience are you drawing on?"
- "Is that occurrence rate based on local data, published literature, or intuition? Does that change your confidence in the score?"
- "What detection systems exist at this step — bedside checks, checklists, electronic alerts, second-person verification? Are they reliable?"

After all three scores are agreed, calculate:  RPN = S × O × D

Flag any RPN ≥ 200 with ⚠️ HIGH PRIORITY.
Flag any Severity = 9 or 10 regardless of RPN with 🔴 CRITICAL SEVERITY — act regardless of RPN.

Produce a scored table:

| Failure Mode ID | S | O | D | RPN | Priority Flag |
|---|---|---|---|---|---|
```

**Application note:** The "Critical Severity" flag is deliberately separate from RPN. An S=10, O=1, D=1 failure has RPN=10 (low) but represents a catastrophic-if-rare event and should never be deprioritised solely on RPN arithmetic. This mirrors NHS guidance on FMEA in clinical settings.

---

### Step 49.5 — Root Cause Analysis (Why Does This Failure Occur?)

**Objective:** For the top 3–5 highest-priority failure modes, explore root causes using structured questioning.

**Bloom's level targeted:** Analyse → Evaluate

**Prompt:**

```
Let us focus on the top 3–5 failure modes by RPN (or Critical Severity flags).

For each, apply the "5 Whys" technique Socratically:
- Start with: "Why does [Failure Mode X] occur?"
- For each answer I give, ask: "And why does that happen?"
- Continue for up to 5 iterations or until we reach a systemic root cause (a policy gap, training gap, equipment gap, or cultural norm).

After each "5 Whys" chain is complete, ask me to categorise the root cause into one of:
- People (knowledge, skill, behaviour)
- Process (workflow, protocol, checklist)
- Equipment / Technology
- Environment / Culture
- Communication / Handover
- Policy / Governance

Record in a root-cause table:

| Failure Mode ID | Root Cause (Final "Why") | Root Cause Category |
|---|---|---|
```

---

### Step 49.6 — Mitigation Design (Recommended Controls)

**Objective:** Generate and evaluate mitigation strategies for each high-priority failure mode.

**Bloom's level targeted:** Create

**Prompt:**

```
For each high-priority failure mode and its identified root cause, help me design a mitigation strategy.

For each one, Socratically prompt me before offering suggestions:
1. "What controls or safeguards already exist for this failure mode?"
2. "Does the current control act at prevention (reduces Occurrence), protection (reduces Severity), or detection (reduces Detectability)?"
3. "What is one additional control you could recommend — and would it act at O, S, or D?"

Then ask me to predict the revised RPN after the mitigation is in place (Revised S × Revised O × Revised D), and evaluate whether the improvement is meaningful.

Framework for control hierarchy (list in order of preference):
1. Eliminate the failure mode (redesign the process)
2. Engineering control (forcing function, alert, lock-out)
3. Administrative control (protocol, checklist, training)
4. Barrier / monitoring (double-check, audit)

Prompt me to aim for controls higher in the hierarchy before accepting a training-only solution.

Produce a mitigation table:

| Failure Mode ID | Existing Control | New Recommended Control | Control Type (O/S/D) | Control Hierarchy Level | Revised RPN |
|---|---|---|---|---|---|
```

---

### Step 49.7 — FMEA Insights Synthesis

**Objective:** Move from individual failure modes to system-level patterns and learning insights.

**Bloom's level targeted:** Evaluate → Create

**Prompt:**

```
Now step back from the individual failure modes and look at the full FMEA table.

Socratically prompt me to identify:

1. PATTERN RECOGNITION — "Which root cause category appears most frequently across failure modes? What does that tell us about the system?"

2. SINGLE POINTS OF FAILURE — "Is there any one step where three or more failure modes originate? What is the significance of that?"

3. DETECTION GAP — "Where is the detectability score consistently highest (most difficult to detect)? What does that reveal about our monitoring architecture?"

4. UNMITIGATED RESIDUAL RISK — "After proposed mitigations, which failure modes still carry a high RPN or a Critical Severity flag? What is our accepted residual risk, and is that acceptable?"

5. LEARNING INSIGHT — "If you had to name the single most important thing this FMEA taught you about this process, what would it be?"

After I answer each question, reflect my insights back to me critically:
- Challenge any overconfident conclusions.
- Name cognitive biases that may have shaped my scoring (e.g. availability bias inflating Occurrence for memorable events; optimism bias deflating Severity for familiar processes).
- Apply Framework D (Critical Awareness) explicitly at this step.

Produce a summary Insights box at the end of this step:

---
### 🔍 FMEA Insights Summary

**Dominant Root Cause Category:** [learner's answer]
**Single Points of Failure Identified:** [step numbers]
**Greatest Detection Gap:** [step and failure mode]
**Unmitigated High-Risk Failure Modes:** [list]
**Key Learning Insight:** [learner's synthesis]
**Biases Flagged During Analysis:** [list from Framework D review]

---
```

---

## Phase 3 — Closure / Review

### Step 49.8 — Closure & Consolidation

**Objective:** Consolidate the session, identify what the learner did well and where reasoning was challenged, and recommend next steps.

**Prompt:**

```
This FMEA session is now complete. Before we close:

1. Play back to me a one-paragraph plain-language summary of what we found — written as if briefing a ward manager who was not present.

2. Ask me to reflect:
   - "What failure mode surprised you most, and why?"
   - "Where did you feel most uncertain in your scoring, and what would resolve that uncertainty?"
   - "What is the ONE action you would recommend be implemented first, and who would you escalate this to?"

3. Name one thing I did well in this FMEA (a genuine strength observation, not generic praise) and one area where my reasoning was challenged or could deepen.

4. Apply the difficulty-ratchet for future sessions:
   - If I struggled with RPN scoring → recommend Module 35 (Epistemic Certainty Mapping) next.
   - If I struggled with root cause analysis → recommend Module 33 (Why Now? Precipitant Hunter) next.
   - If I struggled with systems thinking → recommend Module 38 (Poly-Crisis Simulator) next.
   - If I performed strongly → recommend Module 42 (Clinical Pre-Mortem) as a prospective complement.

5. Remind me: all outputs from this session are learning observations and must be reviewed by a supervising clinician or patient-safety lead before any system change is made.
```

---

### Step 49.9 — FMEA Registry Entry (Optional)

**Objective:** Create a structured summary entry suitable for a personal FMEA learning registry or M&M conference preparation.

**Indication:** Use after completing Steps 49.0–49.8 when the learner wants a storable, reviewable record.

**Prompt:**

```
Generate a structured FMEA Registry Entry for this session in the following format.
Use ONLY de-identified information.

---

## FMEA Registry Entry

**Date:** [today's date]
**Process Analysed:** [de-identified 1-line description]
**FMEA Type:** [Reactive / Prospective]
**Learner Role:** [role entered at Step 49.0]

### Process Map Summary
[Numbered step list from Step 49.1]

### Top 5 Failure Modes by RPN
| Rank | Failure Mode | S | O | D | RPN |
|---|---|---|---|---|---|

### Critical Severity Flags (S ≥ 9)
[List]

### Key Root Causes
[From Step 49.5 — one line per failure mode]

### Recommended Mitigations (Priority Order)
[From Step 49.6 — one line per mitigation]

### FMEA Insights Summary
[From Step 49.7]

### Session Reflection
[From Step 49.8 — learner's own words]

### Recommended Next Module
[From Step 49.8 difficulty-ratchet]

---

Remind the learner to store this entry only in a system that complies with local data protection and patient confidentiality requirements.
```

---

## Framework Integration Map

| Framework | Step(s) Applied | How It Is Applied |
|---|---|---|
| **A — Humanistic Persona** | 49.0, 49.8 | Warm, non-judgmental tone; framing scoring uncertainty as normal; growth observation at closure |
| **B — FLINK (Fink's Taxonomy)** | 49.7, 49.8 | Integration dimension (connecting FMEA to broader patient safety culture); Learning-how-to-learn (difficulty-ratchet) |
| **C — Bloom's Taxonomy** | 49.1–49.7 | Stepwise escalation from Understand (process mapping) → Analyse (failure modes, effects, causes) → Evaluate (scoring, pattern recognition) → Create (mitigation design) |
| **D — Critical Awareness** | 49.4, 49.7, 49.8 | Explicit bias flagging at scoring step; availability bias and optimism bias named at insights synthesis; all outputs labelled as learning observations, not institutional determinations |

---

## Companion Module Cross-Reference

| Companion | When to Use Alongside Module 49 |
|---|---|
| **Module 5 — Real-Time Data Audit** | When the FMEA is informed by actual case log data rather than hypothetical process mapping |
| **Module 26 — Bias Auditing** | When the learner suspects scoring bias is systematically distorting the RPN table |
| **Module 28 — Diagnostic Time-Out** | When the FMEA reveals a diagnostic-process failure mode (e.g. premature closure) |
| **Module 29 — Iatrogenic Domino Effect** | For mapping cascading downstream effects of a single high-RPN failure mode |
| **Module 38 — Poly-Crisis Simulator** | When multiple high-RPN failure modes co-occur; stress-testing the mitigations |
| **Module 42 — Clinical Pre-Mortem** | Prospective complement: imagining that the process has already failed and reasoning backwards |

---

## Limitations & Evidentiary Status

| Aspect | Status |
|---|---|
| **Clinical validation** | Not yet piloted on live cases; conceptual validation only |
| **RPN reliability** | RPN scoring is subjective and inter-rater variability is well-documented in the literature; all scores should be treated as estimates, not measurements |
| **AI scoring bias** | The AI has no access to local incidence data; Occurrence scores will be drawn from general clinical knowledge, not institution-specific rates |
| **Evidence hierarchy** | This module, like all Vibe Rounds modules, sits at the expert-opinion / case-report level by the OCEBM hierarchy |
| **Regulatory compliance** | This module does not produce outputs compliant with IHI hFMEA, Joint Commission, NHS NPSA, or any other regulatory FMEA standard; those require institution-specific processes |

---

## Quick-Start: Which Step Do I Go To?

| I want to… | Go to… |
|---|---|
| Start a brand-new FMEA session | Step 49.0 |
| Map the process steps | Step 49.1 |
| Identify what could go wrong | Step 49.2 |
| Understand the consequences | Step 49.3 |
| Score and prioritise risks | Step 49.4 |
| Understand why failures happen | Step 49.5 |
| Design fixes | Step 49.6 |
| Get system-level insights | Step 49.7 |
| Close the session and reflect | Step 49.8 |
| Create an M&M / registry record | Step 49.9 |

---

## Disclosure & Safety Reminder

> [!IMPORTANT]
> All FMEA outputs from this module are **educational outputs**, not institutional patient-safety determinations.
> Any failure mode identified that has immediate patient-safety implications must be escalated to a supervising clinician, patient-safety officer, or quality committee **before** this session ends.
> All `[paste...]` placeholders must be filled with **de-identified data only**, in accordance with your local law and institutional policy.

---

*Vibe Rounds Prompt Modules — Module 49.*
[← Back to Prompt Directory](https://avi33tbtt.github.io/Prompts/Prompts.html)
