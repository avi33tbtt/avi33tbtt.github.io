# Module 25 — Thematic Analysis

**Objective:** Extract, name, and interrogate the recurring clinical, cognitive, and systemic themes within a case or across a set of cases — moving beyond the individual finding to the pattern that the findings collectively reveal.

**Indication:** Any case with multiple interacting problems or a complex longitudinal course; post-case debrief when the clinician senses "there is something bigger here"; registry-level learning when individual case reviews are complete; educational sessions targeting pattern recognition; cases where the surface diagnosis has been resolved but the underlying clinical story feels incompletely understood.

> [!IMPORTANT] **Clinical Disclaimer**
> Thematic outputs — including named themes, recurrence ratings, and cross-case patterns — are educational constructs, not diagnostic labels. They do not replace problem-based clinical assessment and must not be entered into clinical records or used to guide patient management without independent clinical review.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Framework: Observe → Cluster → Hypothesize → Test → Update

| Phase | Thematic Function |
|---|---|
| **Observe** | Catalogue all findings — clinical, contextual, systemic |
| **Cluster** | Group related findings into emergent thematic families |
| **Hypothesize** | Name the theme and propose what it reveals about the case |
| **Test** | Test whether the theme holds — or is an artefact of framing |
| **Update** | Revise the thematic map; surface the master narrative |

---

## Phase 1 · Initiation — Load case and establish thematic contract

### Step 23.0: Thematic Analysis Session Setup

**Prompt:**

```
#VibeRounds You are entering Thematic Analysis Mode.
Your role is to help me move from a list of individual clinical findings
to a coherent understanding of the patterns — the themes — that run
through this case and give it meaning beyond the immediate diagnosis.

A theme in this context is a recurring or unifying pattern across
findings, decisions, or events that points to something structurally
significant: a physiological trajectory, a cognitive error pattern,
a system vulnerability, a patient-specific risk architecture, or a
missed narrative thread.

For every theme we generate together, you will:
(1) Name the theme in plain language
(2) List the specific findings that constitute it
(3) State what the theme implies — what it reveals that the individual
    findings alone do not
(4) Rate the theme's strength: STRONG (≥3 independent supporting
    findings), MODERATE (2 findings), or TENTATIVE (1 finding,
    requires validation)
(5) Identify whether the theme is clinical, cognitive, systemic, or
    a patient narrative theme

Confirm you understand. Then ask me to present the case.
```

---

## Phase 2 · Execution — Thematic extraction and interrogation

### Step 23.1: Observe — Full Finding Inventory

**Prompt:**

```
#VibeRounds Here is the case:
[PASTE CASE SUMMARY — demographics, presenting complaint, history,
examination findings, investigations, clinical course, decisions,
outcome, any social or contextual information available]

Begin with Observe. List every significant finding in this case —
clinical, investigative, contextual, and systemic. Do not yet group
or interpret. Record each finding as a discrete, single-sentence
observation.

Flag any finding that:
(A) was unexpected or anomalous
(B) was initially overlooked or later re-interpreted
(C) involves the patient's context, narrative, or social circumstances
    rather than their physiology alone
```

> [!NOTE] **Application Note:** The three flag categories in Step 23.1 mark the findings most likely to anchor important themes. Anomalous findings generate the most informative themes; initially-overlooked findings generate the most educationally powerful ones; contextual findings generate themes that biomedical framing alone would miss entirely.

### Step 23.2: Cluster — Group Related Findings

**Prompt:**

```
#VibeRounds Now apply Cluster. Review all the findings you have listed
and organise them into thematic families — groups of findings that
"belong together" in a way that is not explained by the primary diagnosis
alone.

For each cluster:
(1) List the findings in the group
(2) Give the cluster a provisional working name (3–5 words)
(3) State what connects them: shared physiology, shared timeline,
    shared cognitive error, shared systemic factor, or shared patient
    narrative thread

Aim for 3–6 clusters. If fewer than 3 emerge, look harder at the
contextual and systemic findings. If more than 6 emerge, identify
which two are most likely to merge.
```

### Step 23.3: Hypothesize — Name and Propose Each Theme

**Prompt:**

```
#VibeRounds Now apply Hypothesize. For each cluster, elevate the working
name into a formal theme statement and propose what it reveals:

For each theme:
(1) THEME NAME — a precise, plain-language label
(2) THEME TYPE — clinical / cognitive / systemic / patient narrative
(3) CONSTITUENT FINDINGS — the specific observations that constitute it
(4) WHAT IT REVEALS — one sentence: what does this theme tell us about
    this case that the diagnosis alone does not?
(5) THEME STRENGTH — STRONG / MODERATE / TENTATIVE

Then: identify the one theme that, if true, most changes how you
would understand and manage a future similar case.
```

### Step 23.4: Test — Challenge the Themes

**Prompt:**

```
#VibeRounds Now apply Test. For each theme rated STRONG or MODERATE,
run the following challenges:

(1) COUNTER-EVIDENCE TEST: Is there any finding in the case that
    contradicts or weakens this theme? If so, can the theme survive
    that contradiction — or must it be revised?
(2) FRAMING ARTEFACT TEST: Is this theme genuinely present in the
    case — or is it an artefact of how the case was presented to me?
    (i.e., would a different narrator describe the same case without
    this theme emerging?)
(3) ALTERNATIVE THEME TEST: Is there an alternative theme that fits
    the same constituent findings equally well but points to a
    different conclusion?

For each theme: return a verdict — CONFIRMED, REVISED (with revised
statement), or WITHDRAWN (with reason).
```

> [!NOTE] **Application Note:** The framing artefact test is the most important and most commonly skipped check in thematic analysis. Clinical cases are narrated — the way a case is presented shapes which themes feel "obvious." Step 23.4 interrupts that automaticity and asks whether the theme lives in the case or in the narrator.

### Step 23.5: Update — Synthesise the Thematic Map

**Prompt:**

```
#VibeRounds Now apply Update. With confirmed and revised themes in hand,
produce the final Thematic Map for this case:

(1) List all confirmed themes in order of clinical significance
(2) For each theme: a one-sentence summary of what it adds to the
    understanding of this case
(3) MASTER NARRATIVE — a 3–4 sentence synthesis: what is the
    overarching story this case is telling, beneath the diagnostic
    facts? What does the thematic architecture reveal about this
    patient's vulnerability, this team's reasoning, or this system's
    structure?
(4) ACTIONABLE THEME — the single theme most likely to inform a
    change in how you approach similar cases in the future
```

### Step 23.6: Clinical Complexities — Thematic Constraints and Hidden Layers

**Prompt:**

```
#VibeRounds Identify the clinical complexities in this case that either:
(A) generated themes — were themselves the source of a thematic pattern
(B) obscured themes — made it harder to see the pattern while it was
    happening

For each complexity:
(1) Name it
(2) State whether it was a theme generator or theme obscurer
(3) Rate its impact on clinical decision-making: Major / Moderate / Minor
(4) Ask: if this complexity had been recognised earlier, which theme
    would have become visible sooner — and what would that have changed?
```

### Step 23.7: Evidence Search — What Does Literature Say About This Case Type?

**Prompt:**

```
#VibeRounds Now guide an evidence search approach for this case.

(A) FOR THE CASE ITSELF:
    (1) What is the best evidence base for the primary clinical scenario
        in this case?
    (2) What search terms would retrieve evidence specifically about
        the ACTIONABLE THEME identified in Step 23.5?
        (Give 3 PICO-formatted searches)
    (3) Are there validated tools, frameworks, or checklists in the
        literature that directly address this theme?

(B) FOR THE COMPLEXITY:
    (1) What evidence addresses the complexity that most obscured
        the themes in this case?
    (2) What are the evidence gaps — where does the literature not
        yet address this complexity adequately?
    (3) Give 2 PICO-formatted searches for the complexity.
```

### Step 23.8: Evidence Search Output

**Prompt:**

```
#VibeRounds Based on the evidence search approach above, produce a
structured Evidence Summary:

FOR THE CASE:
(1) What does best evidence say about the clinical scenario driving
    the primary theme in this case?
(2) Does the evidence acknowledge or address this thematic pattern —
    or is the theme only visible in retrospect?
(3) What level of evidence supports the management approach taken?

FOR THE COMPLEXITY:
(1) What does best evidence say about managing this complexity?
(2) What are the evidence gaps most relevant to this case?
(3) What is the practical implication of those gaps for future cases?

Format each finding as:
Evidence Statement | Level of Evidence | Implication for This Case
```

---

## Phase 3 · Closure / Review

### Step 23.9: Thematic Analysis Report

**Prompt:**

```
#VibeRounds Produce the full Thematic Analysis Closure Report:

(1) THEMATIC MAP — all confirmed themes with type, strength, and
    one-sentence summary
(2) MASTER NARRATIVE — the 3–4 sentence overarching story of this case
(3) ACTIONABLE THEME — the theme most likely to change future practice
(4) WITHDRAWN THEMES — themes that were generated and then refuted,
    with a note on why they were plausible but did not hold
(5) EVIDENCE ANCHORS — the strongest pieces of literature that
    support or challenge the key themes
(6) CROSS-CASE FLAG — if this case is part of a registry, which theme
    is most worth tracking across other cases to test whether it
    is case-specific or systemic?
```

### Step 23.10: Difficulty Ratchet & Next Session Calibration

**Prompt:**

```
#VibeRounds Based on this thematic session:
(1) Which phase of Observe → Cluster → Hypothesize → Test → Update
    was most productive for me, and which most difficult?
(2) Recommend next session complexity: same (single case, 3–6 themes),
    harder (two related cases, cross-case theme comparison), or easier
    (single case with guided theme prompts).
(3) Give me one pattern-recognition practice I can apply to the next
    case I encounter in clinical practice — something I can do in real
    time, not just in debrief.
```

---

## Quick-Start Reference Card

| Step | One-line purpose | Phase |
|---|---|---|
| 23.0 | Set the thematic contract | Initiation |
| 23.1 | Observe — full finding inventory with flags | Execution |
| 23.2 | Cluster — group findings into thematic families | Execution |
| 23.3 | Hypothesize — name and propose each theme | Execution |
| 23.4 | Test — challenge and validate each theme | Execution |
| 23.5 | Update — synthesise the thematic map and master narrative | Execution |
| 23.6 | Clinical complexities as theme generators and obscurers | Execution |
| 23.7 | Evidence search approach for case and complexity | Execution |
| 23.8 | Evidence search output — structured summary | Execution |
| 23.9 | Thematic Analysis Report — full closure output | Closure |
| 23.10 | Difficulty ratchet + next session calibration | Closure |

---

## Module 23 Maturity Level

| Module | Status | Description |
|---|---|---|
| **Module 23** | 🟡 In Progress | Proposed structure — designed for integration with Modules 6, 7, and 22. Not yet validated in a live educational environment. |

---

## Prompt Analytics Tags

| Step | AI Mode |
|---|---|
| 23.0 | Traditional |
| 23.1 | Traditional |
| 23.2 | Brainstorming |
| 23.3 | Brainstorming · Socratic |
| 23.4 | Devil's Advocate |
| 23.5 | Traditional |
| 23.6 | Socratic |
| 23.7 | Traditional |
| 23.8 | Traditional |
| 23.9 | Traditional |
| 23.10 | Socratic |

---

## Related Modules & Frameworks

- [Module 6 — Registry-Level Analytics](Module-06-Registry-Level-Analytics.md) — registry analytics surfaces numerical patterns; thematic analysis surfaces narrative patterns; run together for full-spectrum case learning
- [Module 7 — Longitudinal & Cross-Case Learning](Module-07-Longitudinal-and-Cross-Case-Learning.md) — the CROSS-CASE FLAG in Step 23.9 feeds directly into Module 7's cross-case tracking infrastructure
- [Module 22 — Counterfactual Analysis](Module-22-Counterfactual-Analysis.md) — counterfactuals cluster around recurrent themes; run Module 23 after Module 22 to name what the counterfactuals reveal collectively
- [Framework D — Vibe Rounds Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) — the framing artefact test in Step 23.4 is a direct operationalisation of Framework D's bias interrogation mandate

---

*VibeRounds Prompt Modules · Module 23 — Thematic Analysis*
*Developed within the Vibe Rounds framework · June 2026*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*
