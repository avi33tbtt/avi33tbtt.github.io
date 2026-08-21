# Module 6 — Registry-Level Analytics

**Objective:** Query an entire case registry — not a single patient — across nine escalating levels of analytic depth, from simple counts to registry-wide pattern detection.

**Indication:** Use when you (or your unit/team) hold a de-identified registry of multiple cases and want to interrogate it as a dataset, rather than review any one patient's log.

**Validated Environment:** Not yet validated live against a real multi-case registry; structure proposed by analogy to Module 5's single-case audit workflow.

> [!IMPORTANT]
> This module requires **de-identified data only**, aggregated at the registry level. See the [Safety & Compliance Note](https://avi33tbtt.github.io/Prompts/Start-Here.md#️-safety--compliance-note). Registry-level outputs are **learning observations about patterns in a dataset**, not clinical decisions, and must not be used to guide care for any individual patient without independent clinical verification.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Load and orient the registry

### Step 6.0: Registry Context Prime

**Prompt:**

```
#VibeRounds You are a clinical learning companion helping me analyze a
de-identified case registry. Before any analysis, read the dataset and
confirm back to me: (1) the number of cases, (2) the time window covered,
(3) the fields/variables available, (4) any obvious data-quality issues
you notice on first pass. Do not proceed to analysis until I confirm your
reading is correct. [paste registry export]
```
> [!NOTE] **Application Note:** Mirrors Step 5.0's case-context prime, but scoped to a dataset rather than a single log — prevents downstream errors from a misread schema.

---

## Phase 2 · Execution — Nine escalating levels of analytic depth

### Step 6.1: Level 1 — Descriptive Counts

**Prompt:**

```
#VibeRounds At the simplest level, give me descriptive counts across this
registry: total cases, cases by primary diagnosis, cases by outcome
category, and any obvious missingness by field. Present as a clean table.
[paste registry export]
```

### Step 6.2: Level 2 — Distribution & Spread

**Prompt:**

```
#VibeRounds For each numeric/continuous variable in this registry, give me
the distribution: mean, median, range, and any visible skew. Flag any
variable whose spread looks clinically implausible and explain why.
```

### Step 6.3: Level 3 — Subgroup Comparison

**Prompt:**

```
#VibeRounds Split this registry into the subgroups I specify: [define
subgroups, e.g. by age band / comorbidity / treatment arm]. Compare key
outcomes across subgroups and tell me which differences look large enough
to be clinically interesting, versus differences you'd expect from chance
alone in a dataset this size.
```

### Step 6.4: Level 4 — Temporal Trend Detection

**Prompt:**

```
#VibeRounds Look for temporal trends across this registry: is any
diagnosis, complication, or outcome becoming more or less frequent over
the time window covered? Present the trend and one plausible explanation
for it — clearly labelled as a hypothesis, not a conclusion.
```

### Step 6.5: Level 5 — Co-Occurrence & Association Mapping

**Prompt:**

```
#VibeRounds Identify the strongest co-occurrence patterns in this
registry — which variables, conditions, or events tend to appear together
more often than you'd expect by chance? List the top 5, and for each, one
sentence on whether this is likely to reflect a real clinical relationship
or a data-collection artefact.
```

### Step 6.6: Level 6 — Outlier & Extreme-Case Identification

**Prompt:**

```
#VibeRounds Identify the 3 most statistically unusual cases in this
registry — cases whose values or trajectory sit furthest from the norm.
For each, tell me what makes it an outlier and whether it looks like a
genuine clinical extreme, a rare presentation, or a likely data-entry
error.
```

### Step 6.7: Level 7 — Risk-Factor Signal Extraction

**Prompt:**

```
#VibeRounds Based on this registry alone, which variables show the
strongest association with the outcome I specify: [name outcome]? Rank
them, and for each, state your confidence level and the biggest
limitation of drawing a risk-factor conclusion from a dataset this size
and structure.
```

### Step 6.8: Level 8 — Registry-Wide Bias Audit

**Prompt:**

```
#VibeRounds Audit this registry for likely sources of bias: selection bias
in who got included, missing-data patterns that aren't random, measurement
inconsistency across cases, and any signal that certain subgroups are
under- or over-represented. For each bias you flag, tell me how it could
distort the conclusions above.
```
> [!NOTE] **Application Note:** See [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html).

### Step 6.9: Level 9 — Registry-Wide Pattern Synthesis

**Prompt:**

```
#VibeRounds Synthesize everything found across Levels 1–8 into a single
coherent picture of this registry: the 3 most robust patterns, the 3
least trustworthy patterns, and the one question this registry cannot
answer but that its patterns suggest we should be asking. Ask me what I
think the answer to that question is before offering your own view.
```

---

## Phase 3 · Closure / Review — Synthesis and action

### Step 6.10: Registry Audit Summary & Priority List

**Prompt:**

```
#VibeRounds Produce a final Registry Audit Summary: (1) data quality rating
out of 10 with justification, (2) top 3 findings worth escalating for
further (formal, statistically rigorous) investigation, (3) top 3 data
gaps to close before the registry can support any of those findings, (4)
one specific next step for the team maintaining this registry. End with:
'The most important thing this registry teaches us is [one sentence].'
```

### Step 6.11: Exportable Registry Abstract

**Prompt:**

```
#VibeRounds Generate a 200-word structured registry abstract suitable for
a departmental or QI meeting. Include: registry scope and size, key
descriptive findings, the single most actionable pattern identified, its
main limitation, and one proposed next step. After the abstract, note
explicitly that these are exploratory, hypothesis-generating observations
from an unvalidated analytic pass — not confirmed epidemiological
findings.
```

---

## Related Frameworks

- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step 6.8, registry-wide bias audit)

---

## Navigation

**Previous:** [← Module 5 — Real-Time Case Review & Data Audit](https://avi33tbtt.github.io/Prompts/Module-05-Real-Time-Case-Review-and-Data-Audit.html)
**Next:** [Module 7 — Longitudinal & Cross-Case Learning →](https://avi33tbtt.github.io/Prompts/Module-07-Longitudinal-and-Cross-Case-Learning.html)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
