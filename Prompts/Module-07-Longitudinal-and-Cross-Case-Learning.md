# Module 7 — Longitudinal & Cross-Case Learning

**Objective:** Turn the registry itself into a cross-case, cross-time learning system — tracking how patterns, practice, and outcomes shift across the registry as it grows, rather than analyzing it as a single static snapshot.

**Indication:** Use once Module 6's registry-level analytics are established and you want to ask how the registry is changing over time, and what it can teach across cases rather than within one.

**Status:** *Proposed; not yet validated live.*

> [!IMPORTANT]
> This module requires **de-identified data only**, aggregated at the registry level, across multiple time points. See the [Safety & Compliance Note](https://avi33tbtt.github.io/Prompts/Start-Here.md#️-safety--compliance-note). Every output here is a **learning observation about the registry as a whole**, not a clinical decision, a practice-change mandate, or a validated research finding — treat it as hypothesis-generating only.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Load and orient the longitudinal dataset

### Step 7.0: Longitudinal Context Prime

**Prompt:**

```
#VibeRounds You are a clinical learning companion helping me analyze how a
de-identified case registry has evolved over time. Before any analysis,
read the dataset and confirm back to me: (1) the number of time
points/snapshots or the continuous time window covered, (2) what has
changed about data collection itself across that window (new fields,
changed definitions, new sites), (3) whether the cases are the same
patients followed over time, new patients accruing over time, or both. Do
not proceed until I confirm your reading is correct. [paste longitudinal
registry export]
```
> [!NOTE] **Application Note:** Distinguishing "same patients over time" from "new patients accruing" is essential — the two require different analytic approaches and are easy for an AI to conflate.

---

## Phase 2 · Execution — Cross-time and cross-case learning

### Step 7.1: Practice Drift Detection

**Prompt:**

```
#VibeRounds Compare how management of [condition/decision point] has
changed across the time window in this registry. Has practice drifted —
and if so, in what direction? Present the trend and separate genuine
practice change from what could just be case-mix change.
```

### Step 7.2: Outcome Trajectory Over Time

**Prompt:**

```
#VibeRounds Track the outcome I specify: [name outcome] across the full
time window of this registry. Is it improving, worsening, or stable? Give
me the trajectory and your best hypothesis for what is driving it —
labelled clearly as a hypothesis.
```

### Step 7.3: Cross-Case Pattern Replication Check

**Prompt:**

```
#VibeRounds Take the strongest pattern identified in a prior registry
snapshot [paste or describe prior finding] and check whether it still
holds in the current, larger dataset. Tell me whether the pattern
replicated, weakened, strengthened, or disappeared — and what that tells
us about how much to trust it.
```

### Step 7.4: Case-Cluster Comparison Across Cohorts

**Prompt:**

```
#VibeRounds Compare the cohort of cases from [earlier period] against the
cohort from [later period] on the variables I specify. Identify what is
genuinely different between cohorts versus what looks like noise, and
flag anything that suggests the underlying patient population itself has
changed.
```

### Step 7.5: Learning-Curve Mapping

**Prompt:**

```
#VibeRounds Using [outcome/error rate] as the marker, map whether this
registry shows evidence of a team or system learning curve over time —
i.e., the same category of case being managed better as more cases
accrue. Present the curve and one alternative, non-learning explanation
for any improvement you see.
```

### Step 7.6: Recurring Error / Near-Miss Pattern Extraction

**Prompt:**

```
#VibeRounds Scan across all cases and time points in this registry for
recurring errors or near-misses — the same type of mistake or gap
appearing in more than one case. List each recurring pattern, how many
times it appears, and whether the frequency is rising or falling over
time.
```
> [!NOTE] **Application Note:** Complements Step 5.8 (single-case anomaly flagging) by looking for the *same* anomaly recurring across many cases and over time.

### Step 7.7: Cross-Case Teaching Synthesis

**Prompt:**

```
#VibeRounds Take the 3 most instructive cases in this registry — chosen
for how much they teach, not how typical they are — and synthesize a
single cross-case teaching point that links all 3. Ask me first what
connection I see between them before offering your own synthesis.
```

### Step 7.8: Registry Evolution Bias Audit

**Prompt:**

```
#VibeRounds Audit this longitudinal registry for biases specific to change
over time: has the definition of any variable shifted, has who gets
included shifted, has documentation quality itself improved or worsened
in a way that could masquerade as a clinical trend? For each, tell me how
it could distort the trajectories found above.
```
> [!NOTE] **Application Note:** See [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html).

---

## Phase 3 · Closure / Review — Synthesis and action

### Step 7.9: Longitudinal Learning Summary & Priority List

**Prompt:**

```
#VibeRounds Produce a final Longitudinal Learning Summary: (1) the single
most robust trend found across time, with justification, (2) the single
most robust cross-case pattern, with justification, (3) top 3 confounds
that could explain either without a real underlying clinical change, (4)
one specific next step for the team maintaining this registry — including
whether formal statistical analysis is now warranted. End with: 'The most
important thing this registry's evolution teaches us is [one sentence].'
```

### Step 7.10: Exportable Longitudinal Abstract

**Prompt:**

```
#VibeRounds Generate a 200-word structured abstract summarizing this
registry's evolution, suitable for a departmental or QI meeting. Include:
time window and cohort structure, the key trend and key cross-case
pattern, the main confound limiting confidence in each, and one proposed
next step. After the abstract, note explicitly that these are
exploratory, hypothesis-generating observations from an unvalidated
analytic pass — not confirmed epidemiological or QI findings.
```

---

## Related Frameworks

- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step 7.8, registry evolution bias audit)

---

## Navigation

**Previous:** [← Module 6 — Registry-Level Analytics](https://avi33tbtt.github.io/Prompts/Module-06-Registry-Level-Analytics.html)
**Next:** [Module 8 — Socratic-Mode Design Specification →](https://avi33tbtt.github.io/Prompts/Module-08-Socratic-Mode-Design-Specification.html)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
