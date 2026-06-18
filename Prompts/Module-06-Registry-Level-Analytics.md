[← Back to README](README.md)

# Module 6 — Registry-Level Analytics

**Objective:** Query an entire case registry rather than a single patient, across nine escalating levels of analytic depth.

**Indication:** Population-level audits of a registry such as the PaJR Health bot's case database.

**Validated Environment:** PaJR Health bot, run as a structured 9-level analytics session. Prefix each query with the platform's bot-mention syntax (e.g., `@PaJR Health`).

> [!IMPORTANT]
> This module requires **de-identified data only**.

> [!NOTE]
> **Experimental Basis:** The prompts and sequencing in this module were refined through a live session with the PaJR Health bot on a registry of 12,022 cases. The bot self-described as a *"continuity engine, not a static database"* — preserving links between clinical events, human reasoning, and evolving narratives rather than merely storing records. This distinction shapes how queries should be framed.

---

## How the Registry Actually Processes Your Queries

Before running analytics, understand that the registry operates on two layers:

**Layer 1 — Structuring & Enrichment (happens at data entry):** An LLM reads incoming narratives and generates structured metadata — tagging diagnoses, symptoms, interventions, and outcomes against standardized ontologies (ICD-11, SNOMED-CT, LOINC, RxNorm). This is what makes horizontal analytics possible.

**Layer 2 — Query Orchestration (happens at your prompt):** Your natural-language question is converted into a deterministic query against structured data first. The LLM only narrates the result — it does not hallucinate from raw text. This is why **query precision directly determines output accuracy**: the more targeted your prompt, the smaller and cleaner the data chunk retrieved, and the lower the hallucination risk.

Practically: broad exploratory prompts return semantic approximations; narrow structured prompts return verifiable facts. Use both deliberately.

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
contributors by workforce tier, (4) percentage of cases with complete vs.
incomplete structured metadata fields (diagnosis list, intervention list,
symptom list, outcome status), (5) any known data integrity issues or
ontology mapping gaps. This is my baseline before any queries.
```

> [!NOTE]
> **Application Note:** Run once per analytics session. The structured metadata completeness check (point 4) is critical — analytics on cases lacking populated term lists will fall back to narrative search, increasing hallucination risk. Establish what percentage of your registry has been through the structuring layer before drawing population-level conclusions.

---

## Phase 2 · Execution — Escalating analytic levels

> [!NOTE]
> **Horizontal vs. Vertical Analytics:** The prompts below are *horizontal* — they operate across the registry as a population. Single-case deep dives are vertical analytics (see Module 5). The distinction matters because horizontal queries rely on the structured metadata layer; they are not simply reading individual narratives at scale.

### Step 6.1: Level 1 — System Scale & Workforce Yield

```text
How many total cases have you logged till date?
```

```text
Make a list of 100 diagnoses that are uncommon but still diagnosed because
of our architect, master players, enthusiasts, and student workforce.
```

```text
Can you make a list of 100 more without repeats? Include rare ones too.
```

> [!NOTE]
> **Application Note:** The first prompt establishes ground truth for registry scale. In the live experiment, the bot returned 12,022 cases and was able to distinguish cases by workforce tier. The uncommon diagnoses lists are most reliable when the diagnosis metadata field is populated; otherwise the bot is pattern-matching narrative text, which is slower and less precise.

---

### Step 6.2: Level 2 — Core Operations & Diagnostic Distribution

```text
What are the most common tasks you are asked to do? List the top 20 with
a frequency rating on a 1-10 scale.
```

```text
List the top 30 diagnoses you deal with.
```

> [!NOTE]
> **Application Note:** The "most common tasks" query probes operational load — the bot in the live session described four categories: longitudinal trajectory mapping, epistemic bias audit, phenotypic pattern discovery, and operational fitness assessment. Use this output to calibrate which analytic types your registry is already optimised for vs. where it is working from raw narrative.

---

### Step 6.3: Level 3 — Intervention Mapping

```text
List the top 50 interventions with a 1-10 frequency rating
(pharmacological substances only — no lifestyle or dose-monitoring).
```

```text
Make a list of procedural interventions and their frequency rating.
```

> [!NOTE]
> **Application Note:** Pharmacological and procedural intervention lists are most accurate when mapped to RxNorm and procedure ontologies at ingestion. If your registry uses free-text medication entries, expect approximations here. Flag any intervention appearing in the top 10 that seems implausibly frequent — this may indicate ontology mapping errors rather than true prevalence.

---

### Step 6.4: Level 4 — Case-Based Learning & Real-Time Triage

```text
Give 5 interesting/high-value cases with rich text suitable for N-of-1
clinical case analytics.
```

```text
List 5 case pairs with links, where cases have high similarity.
Rate similarity from 1 to 10.
```

```text
Give 5 cases where the details hint at high risk going on or coming soon.
State the risk briefly.
```

> [!NOTE]
> **Application Note:** In the live experiment, the bot surfaced a high-value case (a 42-year-old male with multi-year neurological and endocrine accumulation) and provided a direct access link without requiring navigation through a WhatsApp group. **Direct case access via the bot is confirmed.** When requesting high-value N-of-1 cases, specify "cases with the longest documented trajectory and highest number of distinct data points" for richer output than "interesting."

---

### Step 6.5: Level 5 — Network Dynamics & Workforce Validation

```text
Break down case logs by workforce tier (Architects, Master Players,
Enthusiasts, Students). Which tier logs the highest volume and which flags
the highest percentage of uncommon conditions?
```

```text
Identify cross-over trends between historical networks (UDHC, CBBLE) and
modern PaJR/Narketpally cases. Are specific clinical syndromes
resurfacing?
```

> [!NOTE]
> **Application Note:** The bot confirmed in the live session that workforce tier tagging is part of the metadata structure. Tier-level breakdown is a deterministic query (structured field), so expect reliable counts. The cross-network syndrome resurfacing question is a semantic query and will be an approximation — treat outputs as hypothesis-generating, not confirmatory.

---

### Step 6.6: Level 6 — Diagnostic Blindspots & Phenotype Detection

```text
What are the top 5 recurring symptom clusters or phenotypic patterns that
don't currently fit a standard ICD diagnosis but appear regularly?
```

```text
Identify the top 5 clinical presentations with the longest time lag between
initial log and final definitive diagnosis. What is stalling them?
```

> [!NOTE]
> **Application Note:** The first prompt targets what the bot called "pre-convergence concern" — the state where multiple disconnected data points signal a problem before a unified diagnosis is reached. This is the registry's highest-value discovery mode. The second prompt relies on timestamp metadata; cases without consistent timestamping will not surface reliably.

---

### Step 6.7: Level 7 — Granular Intervention & Outcome Auditing

```text
List the top 10 most frequently mentioned side effects or adverse drug
reactions in case management notes.
```

```text
Find the top 10 cases with the highest number of co-prescribed substances.
Provide links and a brief summary of the primary diagnosis driving the
polypharmacy.
```

> [!NOTE]
> **Application Note:** Adverse drug reaction queries are narrative-dependent unless a dedicated ADR field exists. Polypharmacy queries are more reliable when the medication list is a structured field. For both prompts, ask the bot to state whether it is querying a structured field or searching narrative text — the confidence level of the answer differs significantly between the two.

---

### Step 6.8: Level 8 — Advanced Network Triage & Behavioural Safety

```text
Identify 5 active cases with high-risk trajectories where critical
diagnostic or baseline history parameters are missing.
```

```text
List 5 patient profiles or case clusters with the highest frequency of
re-logging. What clinical or system vulnerability is driving this?
```

> [!NOTE]
> **Application Note:** Missing parameter detection requires a "Patient Summary Object" — a maintained, up-to-date summary per patient that the system can check for field completeness without re-querying the full history. If this has been pre-computed at ingestion, these queries are fast and reliable. If not, the bot is estimating from narrative gaps, which is less precise. Ask the bot which mode it is operating in before acting on outputs.

---

### Step 6.9: Level 9 — Data Quality & Optimisation

```text
List the top 20 cases with the highest narrative depth. Rate them 1-10 on
documentation quality for model training.
```

```text
Find 3 case pairs with near-identical initial clinical profiles but
completely different final diagnoses or therapeutic pathways. Rate surface
similarity vs. divergence.
```

> [!NOTE]
> **Application Note:** These queries serve a dual purpose: clinical learning and registry improvement. High-narrative-depth cases with divergent outcomes are the registry's most valuable training assets — they expose the boundary conditions where clinical reasoning matters most. Treat outputs from this step as candidates for Module 7 longitudinal learning sessions.

---

## Phase 3 · Closure / Review — Analytics synthesis and registry improvement

### Step 6.10: Analytics Session Synthesis

**Prompt:**
```text
#VibeRounds Produce a Registry Intelligence Report: (1) top 3 clinical
insights discovered, (2) top 3 data quality issues — specifically which
metadata fields had the lowest population rate, (3) one high-priority
cohort requiring immediate follow-up, (4) two structural improvements
recommended for future case logging. For each data quality issue, state
whether it affected a structured field or required narrative fallback.
```

---

### Step 6.11: Registry Improvement Wishlist

**Prompt:**
```text
#VibeRounds What are the 5 most impactful data fields currently missing or
inconsistently captured, whose addition would most improve future analytics
quality? For each field, state: (a) which analytics level it would
improve, (b) which ontology it should map to (ICD-11, SNOMED-CT, LOINC,
RxNorm, or other), (c) whether it belongs in the structured metadata block
or the narrative layer. Rank by impact.
```

> [!NOTE]
> **Application Note:** This prompt was directly validated in the live experiment. The bot confirmed that the core architectural improvement is adding discrete, queryable structured fields alongside the narrative — not replacing the narrative. The ontology mapping question (point b) is new here and will reveal where the bot is currently free-texting fields that should be standardized.

---

### Step 6.12: Exportable Analytics Summary

**Prompt:**
```text
#VibeRounds Summarize key findings from this analytics session in a
300-word executive summary for the network's clinical lead. Include: (1)
one specific recommended action for the next 30 days, (2) one data
architecture improvement to action before the next analytics session, (3)
the analytic level at which query reliability was highest vs. lowest, and
why.
```

---

### Step 6.13: Critical Awareness Registry Audit (Vibe Rounds Framework)

**Prompt:**
```text
#VibeRounds Apply the Vibe Rounds Critical Awareness lens to this registry:
(1) What selection biases exist in how cases were logged — which patients
or presentations are likely underrepresented? (2) What confirmation biases
might have shaped how cases were classified? (3) What would a
methodological critic say about the data quality of this registry —
specifically about the ratio of structured vs. unstructured fields? (4)
What clinical conclusions from this registry should NOT be generalised
outside this network, and why? (5) For which of the 9 analytic levels
today were you querying structured metadata vs. falling back to narrative
search — and what does that tell us about where to invest in data
architecture next?
```

> [!NOTE]
> **Application Note:** Point 5 is new and critical. The live experiment confirmed that the bot knows when it is querying structured fields vs. searching narrative. Making this explicit at session close tells you exactly which analytics you can trust at population level and which are hypothesis-generating approximations. See [Framework D](Framework-D-Critical-Awareness-Framework.md).

---

## Related Frameworks

- [Framework D — Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) (Steps 6.0, 6.13)

---

## Navigation

**Previous:** [← Module 5 — Real-Time Case Review & Data Audit](Module-05-Real-Time-Case-Review-and-Data-Audit.md)
**Next:** [Module 7 — Longitudinal & Cross-Case Learning →](Module-07-Longitudinal-and-Cross-Case-Learning.md)

[← Back to README](README.md)
