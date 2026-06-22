---
layout: default
title: Module 22 — Time-Series & Velocity Analyzer
---

[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module 22 — Time-Series & Velocity Analyzer (Clinical Analytics)

**Objective:** Train the clinician to read a patient's trajectory, not just their current snapshot — by applying time-series thinking and rate-of-change analysis to clinical data. Most bedside teaching focuses on the value at a single time-point: a creatinine of 3.2, an SpO₂ of 88%, a GCS of 14. This module trains the discipline of asking *how fast did we get here*, *is this stabilising or accelerating*, and *what does the velocity of this parameter tell me that the value alone does not*. The AI acts as a clinical trend analyst, prompting the learner to derive trajectory-based clinical reasoning from longitudinal data.

**Indication:** Any case with serial investigations, observations, or scoring data available over time — deteriorating inpatients, step-down monitoring, chronic disease progression reviews, post-operative surveillance, ICU trend analysis, or any point in [Module 5](https://avi33tbtt.github.io/Prompts/Module-05-Real-Time-Case-Review-and-Data-Audit.html) or [Module 7](https://avi33tbtt.github.io/Prompts/Module-07-Longitudinal-and-Cross-Case-Learning.html) where the learner senses something is changing but cannot articulate the pattern precisely.

> [!IMPORTANT] **Data Scope.** This module is designed for anonymised or de-identified time-stamped data only. Before pasting any table, chart, or longitudinal entry into a prompt, confirm all patient identifiers have been removed per your institution's data governance policy. The AI's role is to help the learner reason about a pattern — not to store, transfer, or act on real patient data.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Frame the trajectory question

### Step 22.0: Session Setup

**Prompt:**

```
#VibeRounds You are a clinical trend analyst for this session. Your job
is not to interpret a single data point — it is to help me reason about
how values are changing over time: direction, rate, acceleration, and
pattern. Ask me to paste the longitudinal data I want to analyse (a table
of serial observations, investigation results, or monitoring parameters
with timestamps). Do not offer any interpretation until you have seen the
data and I have confirmed it is de-identified. Confirm you understand
this role before we begin.
```

> [!NOTE] **Application Note:** The explicit instruction to withhold interpretation until data is seen prevents the common failure mode of generic commentary based on a hypothetical — the AI must be anchored to the actual series before reasoning begins.

### Step 22.1: Data Ingestion & Cleaning Check

**Prompt:**

```
#VibeRounds Here is the de-identified longitudinal data for analysis:
[paste de-identified time-stamped table here]

Before interpreting anything, do the following:
1. Confirm the number of data points and the time-span covered.
2. Flag any gaps in the series where data is missing — these absences
   are themselves clinically meaningful.
3. Flag any values that appear to be artefacts or transcription outliers
   rather than true readings.
4. Ask me to confirm the units and whether the time axis is regular
   (fixed intervals) or irregular (as-needed sampling).

Do not interpret trend yet. This step is cleaning only.
```

> [!NOTE] **Application Note:** Data-cleaning before trend interpretation is a discipline borrowed from quantitative research — missing data points in clinical series often correspond to clinical events (discharge, deterioration, patient refusal), and treating them as random noise rather than signal is a common analytical error.

---

## Phase 2 · Execution — Extract, interpret, and challenge

### Step 22.2: Direction & Slope Analysis

**Prompt:**

```
#VibeRounds Now analyse the direction and slope of each parameter in
the series:
- Is each parameter trending up, down, or oscillating?
- Is the trend linear (constant rate of change) or non-linear
  (accelerating or decelerating)?
- For each parameter, give me one sentence describing what this
  direction and slope tells me clinically — and one sentence describing
  what I would need to see in the next 24–48 hours for this trend to be
  considered reassuring versus concerning.
```

> [!NOTE] **Application Note:** The 24–48-hour forward projection is deliberately included as a clinical reasoning anchor — it converts a retrospective description of trend into a prospective clinical decision criterion, which is the operationally useful output.

### Step 22.3: Velocity & Rate-of-Change Analysis

**Prompt:**

```
#VibeRounds For the parameter I am most concerned about, calculate the
average rate of change between each measurement pair (delta per unit
time). Then ask me: is this rate of change faster or slower than what
is typical for this condition or pathophysiology? If I do not know the
typical expected velocity, help me reason about what biological process
could produce this rate — acute versus subacute versus chronic, and
what that implies for the urgency of intervention.
```

> [!NOTE] **Application Note:** Rate-of-change reasoning (e.g. a creatinine rising 0.5 mg/dL per 8 hours versus 0.5 mg/dL per 3 days) is taught in nephrology and cardiology subspecialty training but rarely formalised in general medical education — this step imports that discipline into the general ward reasoning toolkit.

### Step 22.4: Pattern Recognition — Periodicity, Clustering & Lag Effects

**Prompt:**

```
#VibeRounds Look across all parameters for patterns beyond simple
trend:
- Is there a periodicity (values worsening at a regular interval,
  e.g. overnight, post-dose, post-procedure)?
- Is there clustering of abnormal values around a specific event or
  time-window?
- Is there a lag effect visible — one parameter changing before
  another responds, suggesting a causal or physiological sequence?

For any pattern identified, ask me what clinical intervention or
event in the patient's timeline could explain it, before offering
your own hypothesis.
```

> [!NOTE] **Application Note:** The Socratic inversion — asking the learner for an explanation before offering one — is a consistent architectural feature of the VibeRounds stack. In trend analysis, this matters especially because pattern-recognition in time-series data is prone to apophenia (finding patterns in noise). Requiring the learner to propose a causal mechanism forces a plausibility check before the pattern is accepted as real.

### Step 22.5: Early-Warning Signal Detection

**Prompt:**

```
#VibeRounds Based on the full series, identify any parameters that
show early-warning signal characteristics — values that crossed a
threshold before a clinical deterioration event (if visible in the
data), or that are currently trending toward a threshold without
having reached it yet. For each, tell me:
- What threshold (validated or clinical rule-of-thumb) is relevant?
- How many time-steps away from that threshold is the current
  trajectory, at the present rate of change?
- What is the single earliest actionable intervention that should be
  considered now versus at threshold breach?
```

> [!NOTE] **Application Note:** This step operationalises the concept of *lead time* in clinical monitoring — the window between detectable signal and outcome event — which is the core premise of early-warning scoring systems such as NEWS2. Applying it to a real patient's own data, rather than a generic score, develops a more sophisticated and transferable version of the same skill.

### Step 22.6: Cross-Parameter Correlation Analysis

**Prompt:**

```
#VibeRounds Now look across parameters rather than within each one:
Which pairs of parameters appear to be moving in synchrony or in
opposition? For any apparent correlation, help me reason about whether
this is mechanistically plausible (a true pathophysiological coupling)
or coincidental (parallel but unrelated trends). Name one clinical
decision this cross-parameter relationship should influence.
```

> [!NOTE] **Application Note:** Cross-parameter correlation is the analytical step most commonly skipped at the bedside — clinicians typically review each investigation column separately rather than reading across the row. This step trains the more computationally demanding but more informative cross-parameter pattern.

---

## Phase 3 · Closure / Review — Synthesise and calibrate

### Step 22.7: Trajectory Summary for Handover

**Prompt:**

```
#VibeRounds Synthesise the full time-series analysis into a three-part
trajectory summary suitable for a clinical handover or ward round
presentation:
1. Trend headline: one sentence on overall trajectory direction.
2. Critical velocity flag: the single parameter whose rate of change
   is most clinically urgent, and why.
3. Decision trigger: the specific observation, in the next monitoring
   window, that should prompt escalation versus reassurance.

Write this in the terse, information-dense style of a good handover
note — not a paragraph of hedged prose.
```

> [!NOTE] **Application Note:** The handover output format connects directly to [Module 4, Step 4.9](https://avi33tbtt.github.io/Prompts/Module-04-Peer-Level-Ward-Round-Preparation.html) — the goal is that the output of this module is immediately deployable in the clinical context where trend reasoning actually matters.

### Step 22.8: Critical Awareness — Trend Bias & Over-Interpretation

**Prompt:**

```
#VibeRounds Apply a critical awareness check to this session:
1. Is there any risk that I imposed a trend on data that is actually
   within normal biological variability — i.e. read a pattern into
   noise?
2. Was any rate-of-change conclusion driven by two outlier data points
   rather than a true sustained trend?
3. What additional data (a missing time-point, a concurrent clinical
   event log) would most change the interpretation produced in this
   session?
4. If a colleague looked at this series and disagreed with my trend
   reading, what is the most defensible alternative interpretation?

Be constructive but honest about where this analysis could be wrong.
```

> [!NOTE] **Application Note:** Extends [Framework D](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html)'s critical awareness framework to the specific risks of time-series analysis — namely, the tendency toward over-interpretation of noisy biological data and the vulnerability of rate-of-change calculations to outlier sensitivity.

---

## Related Frameworks

- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Domain 2c, over-interpretation risk — Step 22.8)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Analyse and Evaluate levels — the dominant cognitive modes of this module)
- [Module 5 — Real-Time Case Review & Data Audit](https://avi33tbtt.github.io/Prompts/Module-05-Real-Time-Case-Review-and-Data-Audit.html) (natural data source — the live case log that feeds this module)
- [Module 7 — Longitudinal & Cross-Case Learning](https://avi33tbtt.github.io/Prompts/Module-07-Longitudinal-and-Cross-Case-Learning.html) (extends trend analysis from single-patient to cross-case level)
- [Module 23 — Operational & Throughput Strategist](https://avi33tbtt.github.io/Prompts/Module-23-Operational-Throughput-Strategist.html) (the system-level complement — where this module reads individual patient trajectory, Module 23 reads ward-level flow)

---

## Navigation

**Previous:** [← Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html)

**Next:** [Module 23 — Operational & Throughput Strategist →](https://avi33tbtt.github.io/Prompts/Module-23-Operational-Throughput-Strategist.html)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
