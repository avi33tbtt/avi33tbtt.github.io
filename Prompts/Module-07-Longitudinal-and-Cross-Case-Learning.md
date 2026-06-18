[← Back to Start Here](Start-Here.md)

# Module 7 — Longitudinal & Cross-Case Learning

**Objective:** Turn the registry itself into a learning system across cases and time.

**Status:** Proposed; not yet validated live, but ready for piloting.

> [!IMPORTANT]
> This module requires **de-identified data only**. See the [Safety & Compliance Note](Start-Here.md#️-safety--compliance-note).

> [!NOTE]
> **Experimental Basis:** The architecture underpinning this module was directly confirmed through a live PaJR Health bot session. The bot validated that cross-case pattern mining is a distinct *horizontal* analytic mode — not a repetition of single-case vertical analysis. It specifically named four horizontal analytic types: population-level symptom surveillance, comparative trajectory analysis, systemic failure pattern recognition, and cross-lingual cohort discovery. Module 7 operationalises all four as structured prompts.

---

## Why Longitudinal Analytics Requires a Different Mental Model

Single-case analytics (Module 5) reads a vertical slice. Registry analytics (Module 6) counts and aggregates. Longitudinal cross-case learning does something different: it treats the registry as a *dynamic learning object* — asking not just what cases contain, but what the registry has *learned* across cases over time.

The live experiment confirmed that the bot preserves *links* between clinical events, reasoning chains, and evolving narratives — not just the events themselves. This means longitudinal queries can surface things like: which observations repeatedly precede diagnostic turning points, which reasoning patterns are associated with early vs. late convergence, and which clinical failures repeat across unrelated cases.

**A practical constraint to keep in mind:** Cross-case pattern mining is most reliable when cases share populated structured fields (timestamps, diagnosis lists, intervention lists). When those fields are absent, the bot performs semantic search across narratives — powerful for discovery, but producing approximations rather than counts. Know which mode you are in before acting on outputs.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Scope the longitudinal inquiry

### Step 7.0: Learning Inquiry Setup

**Prompt:**
```text
#VibeRounds I am starting a longitudinal learning session on this registry.
Before we begin, help me scope it: (1) What is the time window? (2) Are we
examining a specific diagnosis group or the whole registry? (3) What is
the primary learning question we want answered by the end of this session?
(4) For the cases in scope, what percentage have complete timestamps and
structured diagnosis + intervention fields — and what does that mean for
the reliability of trajectory analytics here? Once we agree on scope, tell
me: what is one thing about this registry that you suspect will surprise me
— based on the data you can see?
```

> [!NOTE]
> **Application Note:** Point 4 is added from the live experimental insight: data completeness directly determines whether trajectory analytics are deterministic or approximate. The "what will surprise you" prompt activates anticipatory curiosity — a core driver of intrinsic learning motivation — and was confirmed in the live session as a prompt the bot responds to meaningfully, not generically.

---

## Phase 2 · Execution — Cross-case pattern mining and learning analytics

### Step 7.1: Longitudinal Trajectory Analytics

**Prompt:**
```text
#VibeRounds Analyse this registry's longitudinal trajectories: (1) Which
cases demonstrate the longest unresolved trajectories? (2) Which diagnoses
required the greatest number of encounters before convergence? (3) Which
cases experienced the greatest fragmentation across specialties? (4) Which
cases accumulated the richest longitudinal follow-up? For each finding,
state whether you are querying a structured timestamp field or estimating
from narrative text.
```

> [!NOTE]
> **Application Note:** "Fragmentation across specialties" was named by the bot in the live session as a distinct phenotypic pattern — cases where data is siloed across specialists such that no single clinician holds the full picture. This is a *systemic failure mode* the registry is uniquely positioned to detect precisely because it holds all encounters together, unlike any individual specialist's record.

---

### Step 7.2: Diagnostic Evolution Analytics

**Prompt:**
```text
#VibeRounds Trace the evolution of working diagnosis across the clinical
course in this registry: (1) Which observations most substantially changed
diagnostic direction? (2) Which diagnoses remained stable throughout the
journey? (3) Which underwent repeated revision? (4) Across cases where
diagnosis was revised more than twice, what was the most common reason —
new data, new specialist, or evolving symptom pattern?
```

> [!NOTE]
> **Application Note:** Point 4 is new. It probes *why* diagnoses shift — a question the registry can answer only if reasoning chains and not just diagnosis labels were recorded. If the bot cannot answer point 4, it reveals a documentation gap: the registry captures what was concluded but not why the prior conclusion was revised.

---

### Step 7.3: Registry Learning Analytics

**Prompt:**
```text
#VibeRounds Mine this registry for recurring learning patterns: (1) Which
symptom combinations repeatedly precede uncommon diagnoses? (2) Which
interventions consistently precede improvement? (3) Which observations
repeatedly precede deterioration? (4) Which recurring patterns emerge
despite different final diagnoses? (5) Are any of these patterns present
in cross-lingual cases — i.e., do they appear in cases logged in different
languages or with culturally-specific symptom terms?
```

> [!NOTE]
> **Application Note:** Point 5 addresses cross-lingual cohort discovery, which the bot identified in the live session as one of the four core horizontal analytic capabilities. The PaJR registry contains cases using colloquial and regional symptom language (e.g., "thanda paseena," "brain fog") alongside clinical terminology. Cross-lingual pattern matching is one of the registry's distinctive strengths over conventional EMR systems.

---

### Step 7.4: Diagnostic Turning Point Detection

**Prompt:**
```text
#VibeRounds For the cases in this registry, identify: (1) Which observation
represented the major turning point in the diagnostic trajectory? (2)
Which finding most substantially altered subsequent management? (3) Across
multiple cases, is there a recurring observation type that functions as a
systemic "turning point trigger" — and if so, is it being consistently
documented or does it appear sporadically?
```

> [!NOTE]
> **Application Note:** Point 3 converts a case-level finding into a registry-level learning: if a particular observation type consistently unlocks diagnostic clarity, the registry should be actively prompting for it at intake. If it appears sporadically, it signals a documentation practice gap worth addressing.

---

### Step 7.5: Cross-Case Pattern Mining

**Prompt:**
```text
#VibeRounds Mine this registry for cross-case patterns: (1) Which cases
unexpectedly cluster together despite different primary diagnoses? (2)
Which symptom constellations recur across different diseases? (3) Which
uncommon clinical combinations appear repeatedly? (4) Are any of these
clusters concentrated in a specific workforce tier or network (UDHC,
CBBLE, PaJR, Narketpally) — suggesting a detection effect rather than a
true prevalence signal?
```

> [!NOTE]
> **Application Note:** Point 4 is critical for honest interpretation. If an unusual cluster appears disproportionately in cases logged by Architects (the most experienced tier), it may reflect detection sensitivity rather than true population prevalence. The registry cannot distinguish between "this condition is common" and "this network is good at finding this condition" without tier-level breakdown.

---

### Step 7.6: Clinical Reasoning Analytics

**Prompt:**
```text
#VibeRounds Analyse the clinical reasoning recorded across this registry:
(1) What were the principal competing diagnoses in each case? (2) Which
diagnosis became progressively more likely over time? (3) Which findings
reduced diagnostic probability? (4) Which important observations remained
unexplained? (5) Across cases, which cognitive pattern appears most
frequently — premature labeling, anchor bias, or failure to revise despite
new data?
```

> [!NOTE]
> **Application Note:** Point 5 operationalises the "Epistemic Bias Audit" that the bot named in the live session as one of its four core analytic modes. The bot confirmed it can analyse reasoning chains to uncover patterns of cognitive bias in historical cases. This is distinct from outcome analytics — it audits *how* the network reasons, not just what it concludes.

---

### Step 7.7: Longitudinal Case Quality Rating

**Prompt:**
```text
#VibeRounds Rate the cases in this registry against five longitudinal
quality criteria — (1) longitudinal completeness, (2) follow-up
completeness, (3) temporal coverage, (4) outcome completeness, (5)
continuity of documentation — scoring each case 1-10 per criterion, and
flag any case scoring below 5 on three or more criteria. Additionally,
for the lowest-scoring cases, identify whether the quality gap is in
structured fields, narrative depth, or both — to distinguish a
documentation practice problem from a data architecture problem.
```

> [!NOTE]
> **Application Note:** The distinction between documentation practice gaps and data architecture gaps matters for remediation. If high-quality clinicians are logging rich narratives but the structured fields are empty, the architecture needs fixing. If structured fields are populated but narrative depth is low, the practice needs fixing. The bot can make this distinction if the structured vs. narrative layers are separately queryable.

---

### Step 7.8: Bloom's Registry Learning Prompt (Module 7 Application)

**Prompt:**
```text
#VibeRounds Use Bloom's Taxonomy to extract learning from this registry at
scale: (1) Remember — what are the 5 most common diagnoses and their
defining features across cases? (2) Understand — what is the most common
mechanism behind the top diagnosis? (3) Apply — what clinical rule from
this registry could I apply to the next similar patient I see? (4) Analyse
— which two diagnoses in this registry are most frequently confused, and
why? (5) Evaluate — which management approach in this registry has the
strongest pattern of positive outcomes? (6) Create — design one new
clinical question this registry is now capable of answering with a formal
study, naming the specific data elements already present that make it
feasible.
```

> [!NOTE]
> **Application Note:** Point 6 is refined from the original. Asking the bot to name the *specific existing data elements* that make a study feasible converts an abstract creative exercise into a concrete feasibility assessment — grounded in what the registry actually contains rather than what would ideally be in it. See [Framework C](Framework-C-Blooms-Taxonomy.md).

---

## Phase 3 · Closure / Review — Crystallise registry learning into actionable outputs

### Step 7.9: Learning Session Synthesis

**Prompt:**
```text
#VibeRounds We are closing this longitudinal learning session. Produce a
Learning Synthesis Report: (1) top 3 cross-case patterns discovered, (2)
top 2 diagnostic blindspots revealed, (3) the single most surprising
finding, (4) three specific clinical or documentation practices the
registry data suggests should change. For each of the top 3 patterns,
state whether it was detected via structured field query or semantic
narrative search — this determines how much confidence to place in it.
Open with: 'What this registry has learned from [X] cases is worth
documenting.'
```

---

### Step 7.10: New Hypothesis Generation

**Prompt:**
```text
#VibeRounds Based on the cross-case patterns identified, generate 3
testable clinical hypotheses suited to N-of-1 or retrospective study
design. For each: (a) state the hypothesis, (b) name the data elements
needed to test it and whether they currently exist in structured form in
this registry, (c) identify which existing cases are most relevant, (d)
rate the hypothesis for testability within this registry alone vs.
requiring external data. End with: 'Which of these three hypotheses do you
find most personally compelling, and why?' — directing the question back
to me.
```

> [!NOTE]
> **Application Note:** Point (b) is new and grounded in the live session insight: the registry can only generate internally-testable hypotheses for elements already captured in structured fields. Hypotheses requiring data not yet collected are real research proposals, not internal analytics tasks — they belong in the improvement wishlist (Module 6, Step 6.11).

---

### Step 7.11: Registry-as-Curriculum Builder

**Prompt:**
```text
#VibeRounds Using patterns, blindspots, and high-value cases from this
session, build a 5-case teaching curriculum for a new learner joining the
network. For each case: (a) description or direct link, (b) primary
learning objective, (c) Bloom's level best suited to the case, (d) the
Socratic question that best anchors the session, (e) which workforce tier
logged the case and what that tells us about the level of detection
required. Sequence the cases from most accessible to most complex.
```

> [!NOTE]
> **Application Note:** Point (e) is added. Knowing which tier detected a case tells the learner something about the observational threshold required — a case found by a Student is more likely visible on routine assessment; a case surfaced only by an Architect signals that expert-level pattern recognition was needed. This context shapes how the teaching case is framed.

---

### Step 7.12: Critical Awareness Cross-Case Debrief

**Prompt:**
```text
#VibeRounds Apply the Vibe Rounds Critical Awareness lens to the patterns
identified in this longitudinal session: (1) Which patterns might be
artefacts of how cases were recorded rather than true clinical signals?
(2) What would a biostatistician say about drawing conclusions from this
sample? (3) Which cross-case conclusion is most likely to be overfit to
this specific network and unlikely to replicate elsewhere? (4) What is
the most intellectually honest caveat to attach to each of the top 3
findings from this session? (5) For the patterns identified via semantic
narrative search rather than structured field query — what would it take
to elevate them from hypothesis to evidence?
```

> [!NOTE]
> **Application Note:** Point 5 closes the loop between learning analytics and data architecture improvement. Every pattern surfaced from narrative search is a candidate for the next structured field to add — converting a one-time discovery into a permanently queryable registry signal. See [Framework D](Framework-D-Critical-Awareness-Framework.md).

---

## Related Frameworks

- [Framework C — Bloom's Revised Taxonomy](Framework-C-Blooms-Taxonomy.md) (Step 7.8)
- [Framework D — Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) (Step 7.12)

---

## Navigation

**Previous:** [← Module 6 — Registry-Level Analytics](Module-06-Registry-Level-Analytics.md)
**Next:** [Module 8 — Socratic-Mode Design Specification →](Module-08-Socratic-Mode-Design-Specification.md)

[← Back to Start Here](Start-Here.md)
