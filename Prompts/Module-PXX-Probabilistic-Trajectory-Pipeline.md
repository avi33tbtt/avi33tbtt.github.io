# Probabilistic Trajectory Pipeline (Module PXX)

### VibeRounds Prompt Modules — *by Dr. Avinash Kumar Gupta*

> **Module Status:** 🟢 Mature
> **Module Type:** Sequential Forecasting Pipeline
> **Depends on:** M27, M18, M36, M38, M42, M35
> **Lifecycle:** Initiation → Velocity Analysis → Causal Mapping → Probabilistic Ranking → Cascade Simulation → Pre-Mortem → Confidence Calibration → Closure

---

> [!IMPORTANT] **Clinical Disclaimer** All outputs produced using this module are educational observations for a learner's self-directed reasoning. They are not clinical decisions. Any concern with real-patient implications must be raised with a supervising clinician before any action is taken. All case data pasted must be fully de-identified in accordance with your local law.

---

## What this module does

**Probabilistic Trajectory Pipeline (Module PXX)** is a six-stage sequential forecasting pipeline that moves a clinician from *observing where a patient is now* to *mathematically forecasting where they are going* — and then stress-testing those forecasts before committing to them.

It does not ask: *"What is the diagnosis?"*
It asks: *"At what rate is this patient moving, along which causal track, toward which probable future states — and what would have to be true for each of those futures to arrive?"*

The pipeline is built around a single insight: **trajectory is more clinically actionable than snapshot**. A patient's current vitals, labs, and symptoms are coordinates. What matters is their velocity, their direction, the forces acting on their course, and the probability of each destination.

**What you get at the end:**

- A quantified velocity profile of the case (rate and direction of change across key parameters)
- A directed causal chain mapping how each finding conditionally shifts others
- A ranked list of probable future clinical states with Bayesian likelihood estimates
- A simulation of how multi-system failure could cascade from the current trajectory
- A pre-mortem failure map identifying the specific breakdown points currently on track
- A Confidence Calibration score (e.g., 4/5) for the forecasted trajectory, with explicit separation of evidence-grounded versus speculative conclusions

---

## Objective

Run a complete probabilistic trajectory analysis of a single clinical case by executing six modules in strict sequence — producing not just a differential diagnosis, but a **forecasted clinical trajectory** with quantified likelihoods, cascading risk maps, and a calibrated confidence rating for each predicted outcome.

## Indication

Reach for Module PXX when:

- The patient's condition is dynamic, time-sensitive, or visibly changing between assessments
- You need to communicate a trajectory to a team, family, or handover recipient — not just a current status
- You are risk-stratifying a patient for escalation, ICU transfer, or palliative re-goals
- You want to identify the single most probable failure mode *before* it happens
- You are teaching forecasting and probabilistic reasoning as distinct from diagnostic reasoning
- You want to formally stress-test a management plan against the most likely adverse trajectories

---

## Step PXX.0 — Initiation

**Run this step first, before any case is submitted.**

---

### Prompt PXX.0.1 — Pipeline Orientation

Paste this prompt into your AI as the very first message in a new session:

```
You are the Probabilistic Trajectory Pipeline (Module PXX) — a sequential clinical forecasting engine that moves from velocity analysis through causal mapping, Bayesian ranking, cascade simulation, pre-mortem auditing, and confidence calibration.

Your job is not to diagnose. Your job is to forecast — to establish the rate at which a patient is moving, identify the tracks available to them, calculate the probability of each destination, simulate how systems might fail, audit the failure modes already on track, and calibrate how confident we should be in all of the above.

Before any case is submitted, confirm you understand this role by stating:

1. The six pipeline stages you will run, in order, by module number and name
2. The single forecasting question you will be answering across all six stages
3. That you will not merge stages, skip stages, or pre-empt a later stage's conclusions in an earlier one

Then ask for the case.
```

---

### Prompt PXX.0.2 — Pipeline Confirmation

After the AI confirms, paste this:

```
Before I submit the case, tell me:

1. What clinical data will be most important for Stage 1 (velocity analysis)? What should I make sure is included in the case I paste?
2. What is the difference between what Stage 2 (causal mapping) will produce versus what Stage 3 (Bayesian ranking) will produce? Why does Stage 2 come before Stage 3?
3. What is a "cascading failure" in the context of Stage 4, and how is it different from a complication?
4. What is the logical relationship between Stage 5 (pre-mortem) and Stage 6 (confidence calibration)? Why does pre-mortem come first?

Answer each as a brief, precise paragraph. Do not begin analysis. Wait for the case.
```

---

## Step PXX.1 — Case Submission

### Prompt PXX.1.1 — Case Input

```
Here is the case for the Probabilistic Trajectory Pipeline:

[PASTE DE-IDENTIFIED CASE HERE — include:
  - Presenting complaint and timeline of onset
  - Serial vitals or any trend data (even two time points count)
  - Examination findings with any change noted since admission
  - All available investigation results, with timestamps where possible
  - Current medications and any recent changes
  - Active problems list and current management plan
  - Any clinical trajectory notes from handover or nursing observations]

Confirm receipt. Identify:
  A) The three parameters in this case that are currently changing most rapidly
  B) The one trajectory question this case most urgently needs answered
  C) Which pipeline stage will be most diagnostically productive for this case and why

Do not begin the pipeline. Wait for my confirmation to proceed.
```

---

## Step PXX.2 — Pipeline Execution

The pipeline runs in strict sequence across six stages. The AI narrates each stage transition. Do not trigger stages manually — confirm start and the pipeline runs through.

### Prompt PXX.2.1 — Pipeline Start

```
Confirmed. Begin the Probabilistic Trajectory Pipeline now.

Run all six stages in strict sequence:
  Stage 1 → M27 (Time-Series & Velocity Analyzer)
  Stage 2 → M18 (Causal vs. Probabilistic Reasoning)
  Stage 3 → M36 (Bayesian Probability / Likelihood Ratio Engine)
  Stage 4 → M38 (Poly-Crisis & Cascading Failure Simulator)
  Stage 5 → M42 (Clinical Pre-Mortem)
  Stage 6 → M35 (Epistemic Certainty Mapping & Calibration)

Between each stage:
  - Produce a 3–5 bullet summary of what that stage revealed
  - State explicitly how this stage's output changes the input for the next stage
  - Ask me one forward-looking question before proceeding

Do not skip stages. Do not merge stages. If a stage produces no new information for this case, say so explicitly and explain why — do not pad.
```

---

## Stage Reference: The Six-Stage Pipeline

---

### Stage 1 — M27: Time-Series & Velocity Analyzer

**Purpose:** Establish the *velocity* of the case before any prediction is attempted.

**Core principle:** You cannot forecast where a patient is going without knowing the rate at which they are moving. A creatinine of 180 µmol/L means something entirely different depending on whether it was 90 µmol/L six hours ago or 170 µmol/L six days ago. Velocity — rate of change — is the first clinical fact that matters for trajectory.

**What this stage produces:**

- A velocity profile across key parameters (vitals, labs, functional markers, symptom burden)
- A directionality assessment for each: improving / stable / deteriorating / accelerating deterioration
- Identification of the parameter with the fastest adverse rate of change (the "leading indicator")
- A temporal map: where was this patient 6h ago, 24h ago, 48h ago — and what does the slope predict?

**Stage 1 Output Format:**

| Parameter | 48h Value | 24h Value | Current Value | Velocity | Direction |
|-----------|-----------|-----------|---------------|----------|-----------|
| [e.g. Creatinine] | ... | ... | ... | [e.g. +45/day] | ↑ Accelerating |
| [e.g. SpO₂] | ... | ... | ... | [e.g. −2%/8h] | ↓ Deteriorating |
| [e.g. MAP] | ... | ... | ... | [e.g. Stable] | → Stable |

**Leading indicator:** [The parameter driving the trajectory most aggressively]
**Velocity summary:** [One sentence: how fast is this patient moving and in which direction overall?]

---

### Stage 2 — M18: Causal vs. Probabilistic Reasoning

**Purpose:** Map the *directed chain* of the case — how one finding conditionally shifts the probability weight of every other.

**Core principle:** Not all associations are equal. Some findings *cause* others (causal chain). Some findings *predict* others without causing them (probabilistic correlation). Some findings are *effects* of a shared upstream cause (common cause). Stage 2 separates these — because each type of relationship demands a different clinical response.

**What this stage produces:**

- A **causal map**: the sequence of events where one directly produces the next (e.g., sepsis → cytokine release → capillary leak → pulmonary oedema)
- A **probabilistic network**: which findings raise or lower the conditional probability of which others
- Identification of the **pivotal node**: the single finding that, if confirmed or excluded, would most dramatically reorganise the entire map
- The **logical tracks available**: given the causal structure, which trajectories are now possible, which are excluded, and which are partially constrained

**Stage 2 feeds Stage 3 by:** providing the *causal skeleton* onto which Bayesian probability updates will be applied. Without Stage 2's directed structure, Stage 3 would update likelihoods in a flat, uncorrelated way — missing how confirmation of one node propagates through the network.

---

### Stage 3 — M36: Bayesian Probability / Likelihood Ratio Engine

**Purpose:** Apply formal probability updating to produce a *ranked list of probable future clinical states*.

**Core principle:** As each new piece of data arrives, it is not equally informative. Bayesian reasoning formalises this: each finding is a likelihood ratio that updates the pre-test probability of each possible future state. Stage 3 makes this mathematical process explicit rather than intuitive.

**What this stage produces:**

- A **prior probability estimate** for each probable future state, based on the velocity profile (Stage 1) and causal structure (Stage 2)
- A **likelihood ratio** for each key finding — how much more (or less) likely is this finding if Outcome A versus Outcome B is the true trajectory?
- A **posterior probability** for each future state after all current evidence is applied
- A **ranked trajectory list**: the top three to five most probable future clinical states, with estimated probability ranges and the specific evidence chain supporting each

**Stage 3 Output Format:**

| Probable Future State | Prior Probability | Key Finding (LR) | Posterior Probability | Rank |
|----------------------|-------------------|-------------------|-----------------------|------|
| [e.g. AKI → dialysis] | 20% | [Oliguria, LR 6.0] | 55–65% | 1 |
| [e.g. Stabilisation with current Mx] | 50% | [Improving MAP, LR 0.6] | 30–40% | 2 |
| [e.g. Respiratory failure] | 15% | [SpO₂ trend, LR 4.2] | 25–35% | 3 |

**Note:** Probability ranges, not false-precision point estimates, are the output. The goal is calibrated bands, not spurious decimal accuracy.

---

### Stage 4 — M38: Poly-Crisis & Cascading Failure Simulator

**Purpose:** Model how systems might fail together — simulating the compounding, non-linear risks that trajectories generate when multiple organ systems are involved.

**Core principle:** Clinical deterioration is rarely a single-system event. Organ systems are coupled. A failure in one system stresses others. Stage 4 simulates these coupling effects: how infection triggers AKI, how AKI triggers fluid accumulation, how fluid accumulation triggers pulmonary oedema, how pulmonary oedema stresses a borderline cardiac reserve. The cascade is what kills — not the initiating event alone.

**What this stage produces:**

- A **system coupling map**: which organ systems are currently stressed and how they are coupled to each other in this patient
- A **cascade simulation** for each of the top-ranked trajectories from Stage 3: if that future state arrives, which secondary failures does it most probably trigger?
- Identification of **tipping points**: the specific threshold (lab value, vital sign, functional marker) at which each cascade becomes self-sustaining
- A **poly-crisis risk score**: a qualitative assessment (Low / Moderate / High / Critical) of the overall cascading failure risk given the current trajectory

**Cascade Simulation Format (per trajectory):**

```
Trajectory: [e.g. AKI → dialysis]
Primary failure: [e.g. Renal tubular injury from septic vasoconstriction]
  → Secondary failure 1: [Hyperkalaemia → arrhythmia risk]
  → Secondary failure 2: [Fluid overload → pulmonary oedema]
      → Tertiary failure: [Respiratory failure → intubation requirement]
Tipping point: [e.g. K⁺ > 6.5 mmol/L or urine output < 0.3 mL/kg/h for 6h]
Reversibility window: [e.g. 6–12 hours before cascade becomes self-sustaining]
```

---

### Stage 5 — M42: Clinical Pre-Mortem

**Purpose:** Imagine the patient has already failed at some point in the future — then reason backward to identify the specific failure modes currently on their track.

**Core principle:** A pre-mortem inverts prediction. Instead of asking "what might go wrong?", it states: *"This patient has deteriorated significantly [or died] 72 hours from now. What went wrong?"* This forward-failure framing bypasses optimism bias and forces enumeration of concrete, specific failure mechanisms rather than vague "could deteriorate" statements.

**What this stage produces:**

- A **failure narrative** for each top-ranked trajectory: a brief, specific account of how that future arrived — what was missed, what was delayed, what was not appreciated
- A **failure mode inventory**: the specific clinical, cognitive, systems, or communication breakdowns currently on track to produce each failure
- A **pre-mortem action list**: for each identified failure mode, the one clinical action that would most specifically interrupt it
- Identification of the **most preventable failure**: the breakdown that is both most likely and most amenable to current intervention

**Pre-Mortem Format (per trajectory):**

```
Trajectory Failure: [e.g. AKI progressed to dialysis-requiring renal failure]

Failure Narrative:
"The creatinine velocity was noted but its rate of acceleration was underweighted 
at the 24-hour mark. Fluid resuscitation was not adjusted when oliguria persisted 
beyond 6 hours. Nephrology was not involved until the creatinine crossed 300 µmol/L 
— by which point the window for tubular rescue had closed."

Failure Modes Identified:
  1. Velocity underweighted vs. absolute value (cognitive — anchoring on threshold rather than rate)
  2. Fluid strategy not reassessed at 6h oliguria (systems — no trigger for reassessment built into plan)
  3. Specialty referral threshold set too high (communication — team's informal threshold not explicit)

Interrupting Actions:
  1. Document creatinine velocity explicitly at next review; set a 6h reassessment trigger
  2. Define explicit oliguria response protocol: <0.5 mL/kg/h for 6h = mandatory nephrology call
  3. Discuss renal trajectory with nephrology proactively, not reactively
```

---

### Stage 6 — M35: Epistemic Certainty Mapping & Calibration

**Purpose:** Make confidence in the forecasted trajectory explicit — separating what is evidence-grounded from what is speculative, and producing a **Confidence Calibration score** for the overall trajectory.

**Core principle:** A forecast without calibration is an opinion. Stage 6 ends the pipeline by asking not "what do we believe?" but "how justified are we in believing it?" This requires mapping every conclusion from Stages 1–5 onto a certainty spectrum and being honest about where the trajectory forecast rests on solid data versus inference versus assumption chains.

**What this stage produces:**

- An **epistemic map** for the pipeline's key conclusions:

| Conclusion | Evidence Base | Certainty Grade | Grade Rationale |
|------------|---------------|-----------------|-----------------|
| [e.g. Creatinine velocity = AKI Stage 2] | Serial creatinine values × 3 | 🟢 Solid | Direct measurement, consistent trend |
| [e.g. Cascade risk = high] | Physiology + Stage 3 rank | 🟡 Uncertain | Mechanistic reasoning; no RCT for this coupling in this population |
| [e.g. Pre-mortem failure = velocity underweighted] | Cognitive bias literature + pattern match | 🟠 Speculative | Plausible mechanism; no direct evidence in this case |

**Certainty Grades:**
- 🟢 **Solid** — directly supported by objective data in this case; would not change with minor new information
- 🟡 **Uncertain** — supported by physiology or prior evidence but dependent on assumptions about this patient
- 🟠 **Speculative** — plausible inference; could be significantly altered by one new data point
- 🔴 **Unknown** — genuinely no evidence base; flagged for explicit acknowledgment rather than concealment

- A **Confidence Calibration Score** for the overall forecasted trajectory:

```
CONFIDENCE CALIBRATION SCORE

Trajectory forecasted: [Primary trajectory from Stage 3, Rank 1]

Score: [ / 5]

  5/5 — Multiple time-series data points; strong causal chain; cascade mechanism well-established; 
         pre-mortem failure modes specific and verifiable; all key conclusions Solid or Uncertain grade
  4/5 — Good velocity data; causal chain mostly intact; one significant assumption in the cascade 
         or pre-mortem; predominantly Solid/Uncertain with ≤1 Speculative conclusion
  3/5 — Velocity established but trend short; causal chain has one weak link; cascade plausible 
         but not directly evidenced for this population; mixed Solid/Uncertain/Speculative
  2/5 — Velocity inferred from sparse data; causal chain relies on multiple assumptions; 
         cascade is physiologically plausible but untested; significant Speculative components
  1/5 — Trajectory is a hypothesis only; velocity unclear; causal chain weak; forecast is 
         a structured guess requiring urgent data acquisition before acting on it

Assigned Score: [X/5]
Rationale: [2–3 sentences explaining specifically why this score was assigned — 
            what grounds it, what constrains it higher, and what would raise or lower it]

What would move the score UP by 1 point: [One specific data point or investigation]
What would move the score DOWN by 1 point: [One finding that would destabilise the trajectory]
```

---

## Step PXX.3 — Synthesis Stage

### Prompt PXX.3.1 — Cross-Stage Synthesis

After all six pipeline stages are complete, paste this:

```
All six pipeline stages are now complete. Run the synthesis stage:

1. TRAJECTORY STATEMENT — In 3 sentences, state the forecasted trajectory as you would hand it over to a colleague: where this patient is, how fast they are moving, and toward which most probable future state.

2. CRITICAL WINDOW — Is there a time window within which intervention would most effectively alter the trajectory? If yes, specify the window and the intervention. If no, say why.

3. FORECAST COHERENCE CHECK — Do the outputs of all six stages point to the same primary trajectory? If any stage produced a conclusion that conflicts with the others, name it and adjudicate.

4. WHAT THE DATA CANNOT TELL US — What is the single most important unknown that the current dataset cannot resolve — and what would you do to resolve it in the next 6 hours?

5. ONE TEACHING POINT — If this pipeline were presented as a teaching case, what is the single most important lesson it demonstrates about probabilistic clinical reasoning?
```

---

## Step PXX.4 — Closure

### Prompt PXX.4.1 — Session Close

```
Close this Probabilistic Trajectory Pipeline session.

Produce:

A) TRAJECTORY SUMMARY — One structured paragraph: the case velocity, the causal structure, the ranked probable futures, the cascade risk, the pre-mortem failure modes, and the overall Confidence Calibration score.

B) CONFIDENCE CALIBRATION — State the final score (X/5) with the one-line rationale.

C) MOST ACTIONABLE FINDING — Of everything the pipeline produced, what is the single most actionable clinical insight — the one that, if acted on in the next 6 hours, would most meaningfully alter the trajectory?

D) EPISTEMIC HONESTY STATEMENT — What is the most important thing this pipeline does NOT know about this case, and why does it matter for the forecast?

E) NEXT MODULE RECOMMENDATION — Which single VibeRounds module should be run next on this case to deepen the weakest component of the trajectory analysis?

Do not pad. Be direct.
```

---

## Cross-Cutting Frameworks Applied Across All Stages

All four VibeRounds supplementary frameworks run beneath the pipeline throughout:

| Framework | How it is applied in Module PXX |
|-----------|----------------------------------|
| **Framework A — Humanistic Persona** | The pipeline maintains directness appropriate to a time-sensitive, high-stakes forecasting context — clarity over reassurance, precision over comfort |
| **Framework B — Fink's FLINK** | Each stage engages a distinct Fink dimension: Stage 1 (Foundational Knowledge), Stage 3 (Application), Stage 4 (Integration), Stage 5 (Human Dimension — imagining the failure), Stage 6 (Learning-How-to-Learn — calibrating confidence) |
| **Framework C — Bloom's Revised Taxonomy** | The pipeline operates at Bloom's Levels 4–6 throughout (Analyse, Evaluate, Create) — it is not suitable as a first encounter with a case; it builds on a pre-existing clinical picture |
| **Framework D — Critical Awareness** | Stage 6 is the formal expression of Framework D: the pipeline ends by interrogating its own confidence, naming its own speculative components, and refusing to present a forecast as more certain than its evidence base warrants |

---

## Pipeline Logic: Why This Sequence

The six stages are not interchangeable. Each stage's output is the input of the next:

```
M27 (Velocity) → establishes the RATE of movement
      ↓
M18 (Causal Chain) → establishes the DIRECTION and STRUCTURE of movement
      ↓
M36 (Bayesian Ranking) → calculates the PROBABILITY of each destination
      ↓
M38 (Cascade Simulation) → models what happens ALONG each trajectory
      ↓
M42 (Pre-Mortem) → identifies the FAILURE MODES already on track
      ↓
M35 (Confidence Calibration) → rates how JUSTIFIED the entire forecast is
```

Running stages out of sequence degrades output quality. Bayesian updating (Stage 3) without a causal structure (Stage 2) produces a flat probability list with no mechanistic coherence. Pre-mortem (Stage 5) without a ranked trajectory (Stage 3) produces generic risk lists rather than trajectory-specific failure maps. Confidence calibration (Stage 6) without the full pipeline has nothing meaningful to calibrate.

---

## Quick-Reference: Module PXX at a Glance

| Feature | Detail |
|---------|--------|
| **Pipeline stages** | 6 (M27 → M18 → M36 → M38 → M42 → M35) |
| **Primary output** | Ranked forecasted trajectory with Confidence Calibration score |
| **Session length (approx.)** | 30–60 min depending on data richness and case complexity |
| **Case requirement** | De-identified case with minimum two time points of data; serial values strongly preferred |
| **Bloom's level** | Levels 4–6 (Analyse, Evaluate, Create) |
| **Not suitable for** | First encounter with a case; undifferentiated cases with no trend data; replacing clinical assessment |
| **Validated environment** | Designed for Claude, Gemini, GPT-4-class models in long-context mode |

---

## ⚠️ Safety Note

This module handles clinical case data and generates forward-looking clinical predictions. Before running:

- Confirm all case data is fully de-identified
- Do not enter patient names, MRN numbers, dates of birth, or institution-identifying details
- All pipeline outputs — including forecasted trajectories, cascade simulations, and pre-mortem failure maps — are learning observations for educational self-directed reasoning
- Forecasted trajectories do not enter clinical records, handover documents, or inform clinical decisions without independent clinician review and verification against the real patient

---

## Related Modules & Navigation

- **Need a baseline differential first?** → Module 12 (Differential Diagnosis Deepdive), then return here
- **Want to audit your reasoning biases on this trajectory?** → Module 26 (Bias Auditing)
- **Need to present this trajectory to a team?** → Module 4 (Peer-Level Ward Round Preparation)
- **Want to write this case up?** → Module 9 (N-of-1 Case Research Protocol)
- **Need the broader cognition pipeline?** → [Module CC (Clinical Cognition Deep Dive)](https://avi33tbtt.github.io/Prompts/Module-CC-Clinical-Cognition-Deep-Dive.html)
- **Pipeline design reference** → [Lifecycle Coverage Summary](https://avi33tbtt.github.io/Prompts/Lifecycle-Coverage-Summary.html)

---

*Probabilistic Trajectory Pipeline (Module PXX) · VibeRounds Prompt Modules*
*Developed in the VibeRounds Socratic AI Paradigm · June 2026*
*[← Back to Module Index](https://avi33tbtt.github.io/Prompts/Prompts.html)*
