[← Back to README](README.md)

# Module 6 — Registry-Level Analytics

**Objective:** Query an entire case registry rather than a single patient, across nine escalating levels of analytic depth.

**Indication:** Population-level audits of a registry such as the PaJR Health bot's case database.

**Validated Environment:** PaJR Health bot, run as a structured 9-level analytics session. Prefix each query with the platform's bot-mention syntax (e.g., `@PaJR Health`).

> [!IMPORTANT]
> This module requires **de-identified data only**. See the [Safety & Compliance Note](Start-Here.md#️-safety--compliance-note).

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Registry orientation and scope setting

### Step 6.0: Registry Health Check

**Prompt:**
```text
#VibeRounds Before I begin analytics, give me a Registry Health Check: (1)
total cases logged, (2) date range of the registry, (3) top 3 most active
contributors by volume, (4) percentage of cases with complete vs.
incomplete clinical records, (5) any known data integrity issues. This is
my baseline before any queries.
```

> [!NOTE]
> **Application Note:** Run once per analytics session. Prevents conclusions drawn from incomplete or corrupted data.

---

## Phase 2 · Execution — Escalating analytic levels

### Step 6.1: Level 1 — System Scale & Workforce Yield

1. "How many total cases have you logged till date?"
2. "Make a list of 100 diagnoses that are uncommon but still diagnosed because of our architect, master players, enthusiasts, and student workforce."
3. "Can you make a list of 100 more without repeats? Include rare ones too."

### Step 6.2: Level 2 — Core Operations & Diagnostic Distribution

1. "What are the most common tasks you are asked to do? List the top 20 with a frequency rating on a 1-10 scale."
2. "List the top 30 diagnoses you deal with."

### Step 6.3: Level 3 — Intervention Mapping

1. "List the top 50 interventions with a 1-10 frequency rating (pharmacological substances only — no lifestyle or dose-monitoring)."
2. "Make a list of procedural interventions and their frequency rating."

### Step 6.4: Level 4 — Case-Based Learning & Real-Time Triage

1. "Give 5 interesting/high-value cases with rich text suitable for N-of-1 clinical case analytics."
2. "List 5 case pairs with links, where cases have high similarity. Rate similarity from 1 to 10."
3. "Give 5 cases where the details hint at high risk going on or coming soon. State the risk briefly."

### Step 6.5: Level 5 — Network Dynamics & Workforce Validation

1. "Break down case logs by workforce tier (Architects, Master Players, Enthusiasts, Students). Which tier logs the highest volume and which flags the highest percentage of uncommon conditions?"
2. "Identify cross-over trends between historical networks (UDHC, CBBLE) and modern PaJR/Narketpally cases. Are specific clinical syndromes resurfacing?"

### Step 6.6: Level 6 — Diagnostic Blindspots & Phenotype Detection

1. "What are the top 5 recurring symptom clusters or phenotypic patterns that don't currently fit a standard ICD diagnosis but appear regularly?"
2. "Identify the top 5 clinical presentations with the longest time lag between initial log and final definitive diagnosis. What is stalling them?"

### Step 6.7: Level 7 — Granular Intervention & Outcome Auditing

1. "List the top 10 most frequently mentioned side effects or adverse drug reactions in case management notes."
2. "Find the top 10 cases with the highest number of co-prescribed substances. Provide links and a brief summary of the primary diagnosis driving the polypharmacy."

### Step 6.8: Level 8 — Advanced Network Triage & Behavioural Safety

1. "Identify 5 active cases with high-risk trajectories where critical diagnostic or baseline history parameters are missing."
2. "List 5 patient profiles or case clusters with the highest frequency of re-logging. What clinical or system vulnerability is driving this?"

### Step 6.9: Level 9 — Data Quality & Optimisation

1. "List the top 20 cases with the highest narrative depth. Rate them 1-10 on documentation quality for model training."
2. "Find 3 case pairs with near-identical initial clinical profiles but completely different final diagnoses or therapeutic pathways. Rate surface similarity vs. divergence."

---

## Phase 3 · Closure / Review — Analytics synthesis and registry improvement

### Step 6.10: Analytics Session Synthesis

**Prompt:**
```text
#VibeRounds Produce a Registry Intelligence Report: (1) top 3 clinical
insights discovered, (2) top 3 data quality issues, (3) one high-priority
cohort requiring immediate follow-up, (4) two structural improvements
recommended for future case logging.
```

### Step 6.11: Registry Improvement Wishlist

**Prompt:**
```text
#VibeRounds What are the 5 most impactful data fields currently missing or
inconsistently captured, whose addition would most improve future
analytics quality? Rank by impact.
```

### Step 6.12: Exportable Analytics Summary

**Prompt:**
```text
#VibeRounds Summarize key findings from this analytics session in a
300-word executive summary for the network's clinical lead. Include one
specific recommended action for the next 30 days.
```

### Step 6.13: Critical Awareness Registry Audit (Vibe Rounds Framework)

**Prompt:**
```text
#VibeRounds Apply the Vibe Rounds Critical Awareness lens to this registry:
(1) What selection biases exist in how cases were logged — which patients
or presentations are likely underrepresented? (2) What confirmation biases
might have shaped how cases were classified? (3) What would a
methodological critic say about the data quality of this registry? (4)
What clinical conclusions from this registry should NOT be generalised
outside this network, and why?
```

> [!NOTE]
> **Application Note:** See [Framework D](Framework-D-Critical-Awareness-Framework.md).

---

## Related Frameworks

- [Framework D — Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) (Step 6.13)

---

## Navigation

**Previous:** [← Module 5 — Real-Time Case Review & Data Audit](Module-05-Real-Time-Case-Review-and-Data-Audit.md)
**Next:** [Module 7 — Longitudinal & Cross-Case Learning →](Module-07-Longitudinal-and-Cross-Case-Learning.md)

[← Back to README](README.md)
