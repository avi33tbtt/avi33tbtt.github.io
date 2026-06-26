# Module 49 — Disease Velocity & Treatment Velocity: The Temporal Picture Ahead

*Part of the VibeRounds Prompt Module Library · Dr. Avinash Kumar Gupta · [avi33tbtt.github.io/Prompts](https://avi33tbtt.github.io/Prompts/) · DOI: [10.5281/zenodo.20622693](https://doi.org/10.5281/zenodo.20622693)*

> [!IMPORTANT] **Clinical Disclaimer**
> This module produces a **learning artifact**, not a clinical decision. All outputs — velocity assessments, harm timelines, benefit projections, trajectory maps — are structured reasoning exercises for a learner or patient advocate to bring *to* a supervising clinician. No output should be entered into a clinical record or used to alter a real patient's management without independent review by a licensed clinician treating that patient. All case data pasted into prompts must be de-identified before use.

---

## Objective

Train the clinician to think in **temporal force vectors**, not static snapshots.

Most clinical assessment captures *where a patient is*. This module trains the discipline of asking *how fast are they getting worse* (disease velocity), *what is pushing them faster toward harm* (accelerators / catalysts), *what is slowing that movement* (brakes / decelerators), and *how fast are the treatments working* (treatment velocity / benefit timeline). Together, these four dimensions produce a **temporal clinical picture**: not just a current status, but a forward projection of what is likely ahead and when — enabling anticipatory reasoning, pre-emptive intervention, and honest prognostic conversations.

The concept of velocity applied to clinical medicine draws on the established framework of rate-of-change reasoning used in intensive care, nephrology, and oncology — but extends it beyond single-parameter deterioration into a full multi-force, multi-timeline model. Module 27 (Time-Series & Velocity Analyzer) quantifies parameter velocity from serial data. Module 49 frames *why* that velocity exists, *what drives and moderates it*, and *how treatment velocity intersects with disease velocity over time*.

---

## Indication

Use this module when:

- A patient's trajectory feels more important than their current snapshot — deteriorating ward patients, chronic disease progressors, post-treatment surveillance
- A learner or advocate needs to articulate *why* a patient is moving fast or slow toward a bad outcome, beyond naming the diagnosis
- Preparing for a prognostic conversation: shared decision-making, goals-of-care, treatment escalation or de-escalation
- A treatment has been started and the question is: *when should we expect benefit, and what should we see first?*
- Constructing a case narrative for [Module 9 — N-of-1 Case Research Protocol](https://avi33tbtt.github.io/Prompts/Module-09-Case-Research_Protocol.html) that needs a temporal backbone
- Any point in [Module 3 — Extended Patient-Advocate Monitoring](https://avi33tbtt.github.io/Prompts/Module-03-Extended-Patient-Advocate-Monitoring.html) where the family senses things are moving fast but cannot name the forces driving it

> **Module 27 vs. Module 49:** Module 27 reads velocity from data — it calculates how fast a parameter is changing from a time-stamped series. Module 49 reasons about the *forces* behind that velocity — it identifies what is accelerating or braking the disease, and what the treatment timeline looks like in response. Use Module 27 first if you have serial data; use Module 49 to interpret the forces behind what Module 27 reveals. They are complementary, not redundant.

---

## Core Conceptual Framework

Before running any step, the learner should understand the four analytic objects this module works with:

| Object | Clinical meaning | Analogy |
|---|---|---|
| **Disease Velocity** | The rate at which the underlying pathological process is advancing toward harm | Speed of a vehicle heading toward a cliff |
| **Accelerators / Catalysts** | Patient, biological, or contextual factors that increase disease velocity — driving faster harm | Foot on the accelerator; downhill gradient |
| **Brakes / Decelerators** | Factors that reduce disease velocity — existing or potential — regardless of whether they are treatments | Foot on the brake; friction; uphll resistance |
| **Treatment Velocity** | The rate at which the therapeutic intervention is producing benefit — onset, peak, and duration of effect along a timeline | A second vehicle dispatched to intercept: how fast does it travel and when does it arrive? |

The temporal picture ahead is the intersection of all four: a disease moving at a certain speed, pushed by forces, braked by others, and a treatment whose benefit arrives along its own timeline. The critical clinical question this module answers is: **does the treatment velocity arrive before the disease velocity reaches the cliff?**

---

## Lifecycle

**Phase 1 · Initiation** → **Phase 2 · Execution** → **Phase 3 · Closure / Review**

---

## Phase 1 · Initiation — Frame the temporal question

### Step 49.0: Session Setup — Enter Disease & Treatment Velocity Mode

**Prompt:**

```
#VibeRounds You are a clinical trajectory analyst for this session.
Your job is to help me reason about TIME and FORCE, not just status.
I will give you: (1) the diagnosis and relevant clinical context
[paste de-identified summary — age, sex, comorbidities, current
severity, key labs, current treatment]; (2) any available sense of
how quickly things have changed recently — even a qualitative
description ("deteriorated over 48 hours", "slowly worsening over
6 months") is enough to start. Your role is to help me map:
  · Disease velocity — how fast is this pathology advancing?
  · Accelerators — what is making it faster?
  · Brakes — what is slowing it, or could slow it?
  · Treatment velocity — along what timeline does the current or
    proposed treatment produce benefit?
Do not begin analysis yet. Confirm this role, then ask me for the
two pieces of information above. If I have serial data I can paste,
ask for that too — it will sharpen the velocity estimate in later steps.
```

> [!NOTE] **Application Note:** The qualitative velocity descriptor is explicitly accepted here because most learners and advocates will not have serial timestamped data at hand. The module is designed to function on clinical narrative alone and upgrade to quantitative analysis if Module 27 data is available. Do not gatekeep on data completeness — a narrative is a legitimate starting dataset.

---

### Step 49.1: Baseline Velocity Estimation — How Fast Is This Disease Moving?

**Prompt:**

```
#VibeRounds Based on the information I have given you, help me
estimate the current disease velocity. Think across three time-scales:

1. ACUTE velocity (hours to days): Is there evidence of rapid
   deterioration, acute decompensation, or crisis-level progression?
   What clinical parameters or events signal this?

2. SUBACUTE velocity (days to weeks): Is the trend one of steady
   progression, a plateau with intermittent dips, or gradual worsening
   with no acute peaks?

3. CHRONIC velocity (weeks to months or years): Is the underlying
   disease one that typically moves quickly, slowly, or variably —
   and does this patient appear to be tracking with the typical
   trajectory or diverging from it?

For each time-scale, give me: (a) your best estimate of current
velocity — fast, moderate, slow, or uncertain — and (b) the single
most important piece of data I could obtain that would upgrade
"uncertain" to a more confident estimate. Do not over-certify
velocity where the data does not support it.
```

> [!NOTE] **Application Note:** The three-timescale structure mirrors the clinical distinction between acute deterioration (ICU/emergency logic), subacute progression (ward-level logic), and chronic disease trajectory (outpatient/long-term planning logic). A single patient may have velocities operating simultaneously at all three levels — for example, a chronic fibrosing lung disease patient (slow chronic velocity) who develops an acute infective exacerbation (fast acute velocity). The module is designed to hold all three simultaneously.

---

## Phase 2 · Execution — Map the forces and the treatment timeline

### Step 49.2: Accelerators and Catalysts — What Is Making the Disease Move Faster?

**Prompt:**

```
#VibeRounds Now identify the ACCELERATORS and CATALYSTS that are
increasing this patient's disease velocity — making the underlying
pathology advance faster than it would in their absence. Work through
four domains:

1. BIOLOGICAL accelerators: comorbidities, organ impairment, immune
   status, genetic or epigenetic factors, age-related physiology —
   anything intrinsic to the patient that amplifies disease progression.

2. DISEASE-STATE accelerators: features of this specific disease
   episode that predict faster progression — staging, biomarker
   levels, histological or imaging findings, known high-risk phenotypes.

3. TREATMENT-RELATED accelerators: is any current medication,
   intervention, or iatrogenic exposure paradoxically accelerating
   harm? This includes steroid-induced immunosuppression, nephrotoxic
   drug combinations, procedural risks now active, or treatments that
   are absent but should be present.

4. CONTEXTUAL accelerators: social, environmental, or systems-level
   factors — delayed diagnosis, access gaps, adherence barriers,
   nutritional deficiency, housing instability — that are increasing
   velocity by removing the conditions in which recovery is possible.

For each accelerator identified, rate its likely contribution to
velocity as HIGH / MODERATE / LOW and state whether it is:
FIXED (cannot be changed) or MODIFIABLE (an intervention could
reduce or remove this accelerator). Flag the modifiable ones clearly —
they are action targets.
```

> [!NOTE] **Application Note:** The FIXED / MODIFIABLE distinction is the most clinically actionable output of this step. A high-velocity patient with mostly fixed accelerators (advanced age, multi-organ impairment, late-stage disease) has a very different clinical trajectory from a high-velocity patient with mostly modifiable accelerators (missed diagnosis, absent treatment, correctable metabolic derangement). This distinction directly informs the prognosis conversation and the treatment decision in Steps 49.4 and 49.6.

---

### Step 49.3: Brakes and Decelerators — What Is Slowing the Disease, or Could?

**Prompt:**

```
#VibeRounds Now identify the BRAKES and DECELERATORS — factors that
are currently reducing disease velocity, or that could do so if
activated. Work through four domains, mirroring the accelerator map:

1. BIOLOGICAL brakes: preserved organ reserve, compensatory
   physiology, immune responses, nutritional status, fitness —
   anything intrinsic to the patient that is currently buffering
   against faster progression.

2. TREATMENT brakes already in place: existing medications, monitoring
   protocols, procedural interventions currently active — and
   specifically, which of these has the strongest evidence of
   velocity-reducing effect in this disease and this patient profile?

3. POTENTIAL brakes not yet activated: treatments, monitoring
   escalations, supportive care measures, or risk-factor modifications
   that are not currently in place but have evidence of decelerating
   this disease. These are the intervention opportunities.

4. CONTEXTUAL brakes: care environment quality, family / advocate
   engagement, specialist access, nutritional support, psychological
   coping — the systems-level factors that slow disease by creating
   the conditions for treatment to work.

For each brake, state: (a) is it currently ACTIVE or INACTIVE?
(b) if inactive, what would it take to activate it? (c) what is
the expected magnitude of deceleration if it were activated — large,
modest, or uncertain based on current evidence?
```

> [!NOTE] **Application Note:** The "potential brakes not yet activated" category is where this step does its most important clinical teaching. It converts prognosis from a passive observation into an active agenda: the question is not only "what will happen?" but "what velocity would we see if we activated every available brake?" This reframes prognostic discussion as a decision about intervention rather than a forecast about fate.

---

### Step 49.4: Net Velocity Assessment — The Disease Force Balance

**Prompt:**

```
#VibeRounds Synthesise the accelerator and brake maps into a NET
VELOCITY ASSESSMENT for this patient. I want four outputs:

1. CURRENT NET VELOCITY: Given the accelerators currently active
   and the brakes currently in place, is the disease advancing fast,
   moderately, slowly, or is it approximately stable? Express this
   as a directional statement: "Currently advancing at [rate] toward
   [anticipated outcome] with a rough expected horizon of [timeframe
   — give a range if a point estimate is not justified by evidence]."

2. VELOCITY TRAJECTORY: Is current net velocity increasing
   (the disease is accelerating despite current brakes), stable
   (holding pattern), or decelerating (current brakes are outpacing
   accelerators)? What is the evidence for this trajectory direction?

3. TIPPING-POINT IDENTIFICATION: Is there a foreseeable threshold
   — biological, functional, or organ-reserve — beyond which velocity
   becomes self-sustaining and increasingly difficult to brake?
   If yes, where is this patient relative to that threshold, and
   roughly how much time exists before it is reached at current
   velocity?

4. LEVERAGE POINT: Based on the accelerator and brake maps, what is
   the single intervention — biological, pharmacological, or contextual
   — that would most change the net velocity calculation if applied now?
   Explain the force-balance logic behind this choice.

Do not present any timeline as more certain than its evidence base
justifies. Where genuine uncertainty exists, name it explicitly and
give the plausible range.
```

> [!NOTE] **Application Note:** The tipping-point concept maps to well-established clinical thresholds: the point of irreversible acute kidney injury, the threshold of hepatic synthetic failure, the loss of ventilatory reserve below which non-invasive support fails. Naming these thresholds explicitly — and the estimated time to reach them at current velocity — is the kind of temporal reasoning that separates anticipatory from reactive clinical management.

---

### Step 49.5: Treatment Velocity — The Benefit Timeline

**Prompt:**

```
#VibeRounds Now map the TREATMENT VELOCITY for the current or proposed
treatment. I want a benefit timeline that answers not just "will this
work?" but "WHEN will it work, at what rate, and for how long?"

For the treatment(s) in use or under consideration, trace the benefit
timeline across five waypoints:

1. ONSET OF ACTION: When does the first measurable or clinically
   detectable effect of this treatment appear? What is the biological
   mechanism of this onset — is it a rapid receptor-level effect,
   a cellular-level effect with a slower time-constant, or a
   population-level effect (e.g. immunosuppression, tissue remodelling)
   that takes weeks to months?

2. EARLY SIGNAL WINDOW: What is the first thing I should see change
   if this treatment is working — and by when? Give me a specific,
   observable clinical or laboratory signal and a rough timeframe.
   This is the earliest checkpoint for "is this working?"

3. PEAK EFFECT: When does maximum benefit typically occur? Is peak
   effect maintained (sustained plateau), does it plateau then wane,
   or does benefit compound over time? What trial or registry data
   anchors this estimate?

4. MAINTENANCE AND DURABILITY: For how long is benefit maintained
   under continued treatment? Are there known patterns of secondary
   failure, tolerance, or disease escape? At what point should
   maintenance be reassessed?

5. VELOCITY INTERSECTION POINT: Given the disease velocity from
   Step 49.4 and the treatment onset from this step, does the
   treatment benefit timeline arrive BEFORE, AT, or AFTER the
   disease reaches its next critical threshold? State this
   intersection plainly — this is the central prognostic question
   this module is designed to answer.

Grade each waypoint estimate by the quality of evidence behind it:
RCT/meta-analysis, observational/registry, case-series, or
mechanism-based extrapolation.
```

> [!NOTE] **Application Note:** The velocity intersection point in waypoint 5 is the conceptual core of the module. If treatment benefit arrives after the tipping point identified in Step 49.4, the treatment may be evidence-supported in general but functionally too slow for this patient at this stage of disease. This is a critical reasoning step that directly informs escalation decisions, goals-of-care conversations, and the rationale for bridging or combination strategies — all of which are teachable from this framework without requiring the learner to have memorised specific guidelines.

---

### Step 49.6: Comparative Velocity Scenarios — What Happens Under Different Paths?

**Prompt:**

```
#VibeRounds Construct three forward scenarios, each projecting the
temporal picture ahead over the next SHORT (weeks), MEDIUM (months),
and LONG (multi-year, where evidence exists) horizon. For each
scenario, describe the expected net velocity and the likely clinical
milestones or outcomes along the timeline:

SCENARIO A — Current path unchanged: existing treatment, current
accelerators and brakes in place, no new interventions. Where does
this patient track?

SCENARIO B — Maximum brake activation: all modifiable accelerators
addressed, all inactive brakes activated, treatment optimised.
What is the revised velocity and revised temporal picture?

SCENARIO C — Treatment failure or non-response: the current or
proposed treatment does not achieve expected velocity reduction.
What is the disease velocity then, and at what point in the
timeline does non-response become detectable? What is the
decision trigger for switching or escalating?

For each scenario, state: (1) the velocity direction (accelerating /
stable / decelerating); (2) the anticipated clinical state at each
time-horizon; (3) the single most critical monitoring signal that
distinguishes this scenario from the others in real time.

Anchor every scenario segment to evidence where it exists; label
extrapolated segments plainly.
```

> [!NOTE] **Application Note:** Scenario C — the treatment failure scenario — is the one most often omitted in prognostic conversations, because it feels pessimistic. This module deliberately requires it, because "when do we know this isn't working, and what do we do then?" is the most practically important prognostic question for the team at the bedside. Without naming the detection window for non-response, treatment inertia becomes the default — and treatment inertia is itself an accelerator.

---

### Step 49.7: Temporal Narrative — The Picture Ahead in Plain Language

**Prompt:**

```
#VibeRounds Synthesise the full velocity analysis into a TEMPORAL
NARRATIVE — a forward-looking clinical story that could be told to
a patient, family, or multidisciplinary team. It should cover:

1. Where this patient is now on the disease trajectory, expressed
   as a position and a direction — not just a diagnosis.

2. The forces currently pushing them forward (top 2 accelerators)
   and the forces currently holding them back (top 2 active brakes).

3. The one intervention that, if implemented, would most change
   the trajectory — and roughly what that change would look like
   in the next 4–8 weeks.

4. The treatment benefit timeline in plain language: "If this
   treatment is working, the first thing we expect to see is
   [X], roughly by [timeframe]."

5. The honest range: a best-case and a worst-case temporal picture,
   stated without false precision — "somewhere between [A] and [B]
   is the range the evidence supports."

Write this in language that a patient advocate or intelligent
non-specialist could follow, while keeping the clinical logic intact.
Avoid hedging that drains the narrative of meaning, but flag genuine
uncertainty with honest language rather than false confidence.
```

> [!NOTE] **Application Note:** The Temporal Narrative is deliberately positioned as a communication artifact, not just an analytic one. This step connects directly to [Module 11 — Patient Education Query Intelligence](https://avi33tbtt.github.io/Prompts/Module-11-Patient-Education-Query-Intelligence.html) and [Module 2 — Patient-Advocate Case Documentation](https://avi33tbtt.github.io/Prompts/Module-02-Patient-Advocate-Case-Documentation.html) — the velocity analysis produced in this module becomes the backbone for patient-centred communication, not only for clinical decision-making. The best-case / worst-case framing is consistent with evidence on how patients process prognostic uncertainty most usefully.

---

## Phase 3 · Closure / Review — Calibrate and stress-test

### Step 49.8: Critical Awareness — Velocity Reasoning Failure Modes

**Prompt:**

```
#VibeRounds Before I act on or present this velocity analysis, run
a critical awareness pass. Check this analysis against the four
most common velocity reasoning failure modes:

1. VELOCITY ANCHORING: Did I — or did you, the AI — anchor the
   velocity estimate to the most recent data point and
   underweight the longer historical trend? A patient who has
   been deteriorating slowly for six months and acutely fast
   for 48 hours has both velocities operating simultaneously.
   Did the analysis hold both?

2. ACCELERATOR OMISSION: Were any modifiable accelerators in the
   clinical picture likely missed — particularly contextual or
   systems-level ones (delayed treatment initiation, diagnostic
   lag, adherence barriers) that are easy to overlook when focused
   on biology?

3. TREATMENT OPTIMISM BIAS: Did the treatment velocity benefit
   timeline in Step 49.5 rely on trial populations that differ
   meaningfully from this patient — younger, less comorbid,
   earlier disease stage — such that the expected onset or
   magnitude of benefit may be slower or smaller in this case?

4. TIPPING-POINT OVERCONFIDENCE: Did any scenario in Step 49.6
   treat the tipping-point threshold as a known fixed line rather
   than a probabilistic zone? Named thresholds (a creatinine,
   a GCS, an FEV₁) are population-level medians, not patient-level
   certainties.

For each failure mode, state whether it applies to this analysis
and — if it does — what specific conclusion should be held more
loosely as a result.
```

> [!NOTE] **Application Note:** Extends [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) to the specific epistemological vulnerabilities of temporal and velocity reasoning: anchoring, omission, optimism bias, and false precision around probabilistic thresholds. These are the failure modes that produce the most consequential prognostic errors in clinical practice.

---

### Step 49.9: Velocity Summary Card — Handover-Ready Output

**Prompt:**

```
#VibeRounds Produce a VELOCITY SUMMARY CARD formatted for clinical
handover or ward round presentation. It should be terse,
information-dense, and contain:

DISEASE VELOCITY: [Fast / Moderate / Slow / Uncertain] — direction
[accelerating / stable / decelerating]

TOP ACCELERATORS (modifiable flagged with *):
· [Accelerator 1]
· [Accelerator 2]
· [Accelerator 3]

TOP BRAKES (inactive ones flagged with †):
· [Brake 1]
· [Brake 2]
· [Brake 3]

TIPPING POINT: [Threshold name] — estimated [timeframe at current
velocity] away

TREATMENT VELOCITY: First detectable signal expected by [timeframe].
Peak benefit expected by [timeframe].

VELOCITY INTERSECTION: Treatment benefit arrives [BEFORE / AT / AFTER]
next critical threshold at current velocity.

LEVERAGE POINT: [Single highest-impact intervention] — expected
velocity change: [large / moderate / uncertain]

MONITORING TRIGGER: [Single observation that signals trajectory is
changing — for better or worse — requiring team review]

Write this as a card that a clinician encountering this patient for
the first time could read in under 90 seconds and know both where
the patient is and where they are heading.
```

> [!NOTE] **Application Note:** The Velocity Summary Card format connects directly to [Module 4 — Peer-Level Ward Round Preparation](https://avi33tbtt.github.io/Prompts/Module-04-Peer-Level-Ward-Round-Preparation.html), Step 4.9, and mirrors the handover output format from [Module 27, Step 22.7](https://avi33tbtt.github.io/Prompts/Module-27-Time-Series-Velocity-Analyzer.html). The explicit intersection verdict — does treatment arrive before the tipping point — is the single most decision-relevant output of this module and should never be omitted from handover communication.

---

## Related Frameworks

- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) — velocity reasoning failure modes (Step 49.8)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) — Analyse (force-balance), Evaluate (net velocity, scenario comparison), Create (Temporal Narrative) — the dominant cognitive modes of this module
- [Framework B — Fink's Taxonomy (FLINK)](https://avi33tbtt.github.io/Prompts/Framework-B-Finks-FLINK-Taxonomy.html) — Human Dimension and Caring dimensions engaged through Step 49.7 (plain-language temporal narrative for patients and families)
- [Framework A — Humanistic Persona](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) — clinical confidence-building through the anticipatory posture: the learner who can name forces and timelines is less overwhelmed by clinical uncertainty than one who can only name the diagnosis

---

## Related Modules

- [Module 27 — Time-Series & Velocity Analyzer](https://avi33tbtt.github.io/Prompts/Module-27-Time-Series-Velocity-Analyzer.html) — the quantitative complement: run Module 27 first to extract velocity from serial data, then Module 49 to reason about the forces behind it
- [Module 33 — The "Why Now?" (Precipitant) Hunter](https://avi33tbtt.github.io/Prompts/Module-33-Why-Now-Precipitant-Hunter.html) — accelerators identified in Step 49.2 are often precipitants in the Module 33 sense; the two modules cross-validate when run on the same case
- [Module 38 — Poly-Crisis & Cascading Failure Simulator](https://avi33tbtt.github.io/Prompts/Module-38-Poly-Crisis-Cascading-Failure-Simulator.html) — when multiple accelerators interact, the cascade dynamics of Module 38 extend the velocity model into non-linear failure territory
- [Module 48 — Treatment Comparative Analysis & Evidence-Informed Prognosis Trajectory](https://avi33tbtt.github.io/Prompts/Module-48-Treatment-Comparative-Analysis-and-Prognosis-Trajectory.html) — Module 49's treatment velocity layer (Step 49.5) provides the temporal substrate that Module 48's prognosis trajectory builds on; run Module 49 before Module 48 when temporal force-balance is the primary clinical question
- [Module 42 — Clinical Pre-Mortem](https://avi33tbtt.github.io/Prompts/Module-42-Clinical-Pre-Mortem.html) — Scenario C (treatment failure) in Step 49.6 pairs naturally with Module 42's pre-mortem reasoning; together they build both the failure-detection and failure-prevention logic for the case
- [Module 3 — Extended Patient-Advocate Monitoring](https://avi33tbtt.github.io/Prompts/Module-03-Extended-Patient-Advocate-Monitoring.html) — the Velocity Summary Card (Step 49.9) provides a longitudinal monitoring anchor for a patient advocate running Module 3's ongoing domain tracking
- [Module 9 — N-of-1 Case Research Protocol](https://avi33tbtt.github.io/Prompts/Module-09-Case-Research_Protocol.html) — Module 49's temporal narrative (Step 49.7) forms a high-quality temporal backbone for the N-of-1 case report built in Module 9

---

## Pipeline Suggestions

| Clinical context | Recommended pipeline |
|---|---|
| Acutely deteriorating inpatient | Module 27 → Module 49 → Module 42 |
| Chronic disease progression review | Module 49 → Module 48 → Module 35 |
| Prognostic / goals-of-care conversation | Module 49 → Module 11 → Module 2 |
| Treatment escalation decision | Module 49 → Module 48 → Module 34 |
| Complex N-of-1 case with temporal complexity | Module 27 → Module 49 → Module 9 |
| Patient advocate monitoring a loved one | Module 3 → Module 49 → Module 2 |

---

## Navigation

**Previous:** [← Module 48 — Treatment Comparative Analysis & Evidence-Informed Prognosis Trajectory](https://avi33tbtt.github.io/Prompts/Module-48-Treatment-Comparative-Analysis-and-Prognosis-Trajectory.html)

[← Back to Prompt Directory](https://avi33tbtt.github.io/Prompts/Prompts.html) · [← Back to README](https://avi33tbtt.github.io/Prompts/)

---

*VibeRounds Prompt Module 49 — Disease Velocity & Treatment Velocity: The Temporal Picture Ahead · Dr. Avinash Kumar Gupta · Coined and developed June 2026 · DOI: [10.5281/zenodo.20622693](https://doi.org/10.5281/zenodo.20622693) · #VibeRounds — A Socratic AI Paradigm for Clinical Medicine*
