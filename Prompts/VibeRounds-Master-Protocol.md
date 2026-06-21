# VibeRounds — Master Case Analysis Protocol
## Complete Workflow: From Case Link to Full Clinical Intelligence Output

**Framework Source:** VibeRounds Combined Modules 1–20
**Protocol Version:** 1.1 — June 2026
**Validated Against:** [60F with Coma, E Coli Sepsis, Cervical Myelopathy, and Albumino-Cytological Dissociation in CSF](https://classworkdecjan.blogspot.com/2016/12/60f-with-coma-e-coli-sepsis-and-upper.html)
**Changelog (v1.0 → v1.1):** Added Stage 7 — Further Requested Information Synthesis, and a new fourth output file (`VibeRounds-FurtherInfo-[CaseName].md`) that consolidates every history, examination, and investigation gap surfaced anywhere in Stages 1–6 into one prioritized, actionable list. See **Protocol Maintenance Notes** at the end of this file for the full rationale.

---

## How to Use This Protocol

1. **Upload this file** to Claude (or any capable LLM) along with the VibeRounds Modules 1–20 file.
2. **Paste a case link** (public blog, open patient record, or de-identified case narrative URL) in your message.
3. **Send the trigger prompt** at the bottom of this document.
4. The AI will execute all seven pipeline stages in sequence and deliver **four output `.md` files**:
   - `VibeRounds-TopInsights-[CaseName].md` — Top 10 clinical insights (standalone, shareable summary)
   - `VibeRounds-CaseAnalysis-[CaseName].md` — Prompt mapping, ranking, and full high-value prompt answers
   - `VibeRounds-CARE-AdvocateDebrief-[CaseName].md` — CARE case report and advocate debrief
   - `VibeRounds-FurtherInfo-[CaseName].md` — **(New in v1.1)** Consolidated, prioritized list of further history, examination, and investigation details that would be high-value to obtain, with the reasoning for each

> **Data Safety Note:** Only use de-identified or consent-obtained public case records. Do not paste identifying information (full name, date of birth, address, hospital number) into any LLM session. This protocol is an educational tool, not a clinical decision-making service. All outputs require independent clinical verification before any action is taken.

---

## Pipeline Overview

```
INPUT
  ├── VibeRounds Modules 1–20 (uploaded file)
  └── Case link or narrative (provided by user)
         │
         ▼
  STAGE 1 — Case Ingestion
  Read and extract structured clinical details from the case source
  (flags information gaps as [NOT DOCUMENTED] — these feed Stage 7)
         │
         ▼
  STAGE 2 — Prompt Mapping
  Match VibeRounds prompts from all 20 modules to the patient's clinical features
         │
         ▼
  STAGE 3 — Prompt Ranking
  Rank all matched prompts 1–10 on clinical importance for this specific case
         │
         ▼
  STAGE 4 — High-Value Prompt Execution
  Answer all prompts rated 8–10 in full clinical depth
  (each answer may surface its own information gaps — tag inline, feed Stage 7)
         │
         ▼
  STAGE 5 — Insight Synthesis
  Extract the top 10 clinical insights from all analysis above
         │
         ▼
  STAGE 6 — CARE Report + Advocate Debrief
  Produce CARE-format case write-up and structured advocate journey analysis
  (CARE 5c "missing investigations" and debrief inflection points feed Stage 7)
         │
         ▼
  STAGE 7 — Further Requested Information Synthesis  (NEW in v1.1)
  Pool every flagged gap from Stages 1, 4, and 6 into one deduplicated,
  prioritized, actionable request list
         │
         ▼
OUTPUT
  ├── File 1: VibeRounds-TopInsights-[CaseName].md
  ├── File 2: VibeRounds-CaseAnalysis-[CaseName].md
  ├── File 3: VibeRounds-CARE-AdvocateDebrief-[CaseName].md
  └── File 4: VibeRounds-FurtherInfo-[CaseName].md          (NEW in v1.1)
```

---

## Stage Specifications

---

### STAGE 1 — Case Ingestion

**Objective:** Extract a complete, structured summary of the clinical case from the provided source.

**Instructions for AI:**
- Fetch the case from the provided URL using web_fetch or read the pasted narrative
- Extract and structure the following fields, leaving any field explicitly marked `[NOT DOCUMENTED]` if absent:

```
Patient demographics: age, sex, occupation, social/geographical background
Chief complaint and mode of presentation
Background history (duration, prior diagnoses, prior treatments)
Symptom timeline (chronological — when each symptom appeared or changed)
Medications (name, dose, frequency, route, duration, any self-modifications)
Examination findings (vitals, systemic, neurological, others)
Investigations (results, dates where available, units)
Procedures performed
Working diagnoses at presentation
Management given
Outcome
Investigations NOT performed but clinically indicated
Patient/advocate narrative (if present)
```

**Quality gate before proceeding:** Confirm the case has enough clinical content to support at least 8 usable VibeRounds prompts. If not, flag this and ask the user for additional case detail before continuing.

**Stage 7 hand-off (NEW in v1.1):** Every field marked `[NOT DOCUMENTED]` in this stage is a candidate entry for the Stage 7 information request list. Do not discard these — carry the field name and a one-line note on why it matters forward into a running "gap log" that Stage 7 will consolidate. This running gap log is *internal working scratch*, not a deliverable in itself — it only needs to persist within the session/context so Stage 7 can pool it.

---

### STAGE 2 — Prompt Mapping

**Objective:** Identify every VibeRounds prompt across Modules 1–20 that is directly applicable to this patient's clinical features.

**Instructions for AI:**
- Review all 20 modules systematically
- For each module, identify which specific steps/prompts are triggered by features present in this case
- A prompt is "usable" if it would generate clinically meaningful output specific to this patient — not generic educational content
- Present as a table with columns: `# | Module | Step | Prompt Purpose | Patient-Context Trigger`
- Minimum 15 usable prompts expected for a complex multi-system case
- For single-system or simpler cases, minimum 8 prompts

**Mapping triggers by module (reference guide):**

| Module | Triggered when case has... |
|--------|--------------------------|
| M1 — Socratic Clinical Reasoning | Any diagnostic uncertainty; reasoning gaps; learning context |
| M2 — Patient-Advocate Documentation | Family/caregiver narrative present; non-medical documentation of course |
| M3 — Extended Monitoring | Longitudinal deterioration over weeks/months documented |
| M4 — Ward Round Preparation | Acute admission; multi-system complexity; handover moments |
| M5 — Real-Time Case Review | Longitudinal data (glucose logs, medication logs, serial bloods) |
| M6 — Registry Analytics | Population-level patterns implied; case belongs to a known registry |
| M7 — Cross-Case Learning | Similar cases exist or are mentioned; registry context |
| M8 — Socratic Design QA | Session being designed for teaching; prompt quality review needed |
| M9 — N-of-1 Research Protocol | Complex, multi-system, unusual case suitable for case report |
| M10 — Article Reading | Specific paper directly relevant to case findings |
| M11 — Patient Education | Patient/family information needs visible in narrative |
| M12 — Differential Diagnosis Deepdive | Working diagnosis formed but contested; anchoring risk present |
| M13 — Polypharmacy Audit | 5+ medications; drug-disease conflicts; prescribing cascade risk |
| M14 — Resource-Constrained Reasoning | Investigations unavailable; transport limitations; low-resource setting |
| M15 — Illness Script Acquisition | Typical/atypical presentation; script mismatch visible |
| M16 — Basic Science Integration | Mechanism-to-diagnosis link important for this case |
| M17 — Semantic Qualifiers | Problem representation needs to be corrected or sharpened |
| M18 — Causal Network Reasoning | Multiple findings interact conditionally; one finding changes weight of another |
| M19 — Community & Social Medicine | Social determinants of health visible; occupation/environment relevant |
| M20 — Recognition-Primed Decision | Time-critical moment present; acute deterioration; stat call scenario |

---

### STAGE 3 — Prompt Ranking

**Objective:** Rank all mapped prompts by clinical importance for this specific case.

**Instructions for AI:**
- Score each prompt 1–10 using the following criteria:
  - **10** — Directly addresses the central diagnostic or management failure in the case; answering this prompt would change what a clinician does
  - **8–9** — Addresses a high-stakes clinical question, safety risk, or major cognitive error present in this case
  - **6–7** — Adds meaningful clinical context; addresses a secondary diagnostic or management question
  - **4–5** — Useful for teaching or learning; does not directly alter management
  - **1–3** — Applicable in principle but low additional yield for this specific patient
- Present as a table with columns: `Rank | Score | Prompt | Justification`
- Sort descending by score
- All prompts scored 8–10 are automatically promoted to Stage 4 execution

---

### STAGE 4 — High-Value Prompt Execution

**Objective:** Answer every prompt scored 8–10 in full clinical depth, applied specifically to this patient.

**Instructions for AI:**
- Address each high-value prompt as a named section with the prompt title, score, and module reference
- Each answer must be patient-specific — no generic textbook answers
- Use tables, structured differentials, clinical reasoning chains, and mechanism explanations where they add clarity
- Where the prompt requires adversarial reasoning (Module 12), apply the full devil's advocate frame
- Where the prompt requires causal network reasoning (Module 18), explicitly map how each finding conditionally changes the weight of others
- Where the prompt involves pharmacology (Module 13), produce a structured drug-disease conflict table
- Where the prompt involves time-critical decision-making (Module 20), produce the recognition → plan → forward simulation → escalation threshold structure

**Minimum answer length per high-value prompt:** Sufficient to be clinically actionable. A bulleted list of five words is not an answer. A paragraph that names the mechanism, the clinical consequence, and the action is the minimum standard.

**Stage 7 hand-off (NEW in v1.1):** Many high-value answers will, in the course of full clinical reasoning, surface a piece of missing history, an examination step that was never documented as performed, or an investigation that would resolve a stated uncertainty (this is most likely from Module 12 differential challenges, Module 13 polypharmacy audits, Module 14 resource-reasoning, Module 18 network reasoning, and Module 20 escalation-threshold answers). Whenever this happens, append one line to the running gap log in the format:
```
[GAP] <Module.Step> | <what is missing> | <why it would change the answer>
```
This tagging is lightweight and internal — it does not change the formatting of the Stage 4 answer itself, it just marks the gap for Stage 7 pooling.

---

### STAGE 5 — Insight Synthesis

**Objective:** Extract the top 10 clinical insights from all analysis above.

**Instructions for AI:**
- Insights must be case-specific — not general medical knowledge
- Each insight should be one of: a diagnostic finding that was missed or underweighted, a cognitive bias that operated, a pharmacological risk that was unrecognised, a clinical signal that was misinterpreted, a system-level failure, or a decision point where investigation or management should have pivoted
- Number 1–10; order from most clinically important to least
- Each insight: 3–5 sentences — name the finding, explain why it was significant, state what the correct response would have been

---

### STAGE 6 — CARE Report + Advocate Debrief

**Objective:** Produce two structured documents — a CARE-format case report and a structured advocate journey debrief.

---

#### 6A — CARE-Format Case Report

Follow all 12 CARE guideline fields in sequence:

**1. Title**
Format: `[Age][Sex] with [chief complaint(s)] and [key investigation finding]: [educational contribution of case]`

**2. Abstract**
Four paragraphs: Background (why this case matters clinically) | Case Summary (≤150 words) | Key Learning Points (numbered, minimum 3) | Conclusion (one sentence on the educational contribution)

**3. Introduction**
Why this case is clinically and educationally important. What gap in practice it exposes. What it contributes that existing literature does not.

**4. Patient Information**
Structured table: demographics, occupation, social/geographical background, comorbidities, prior diagnoses.

**5. Clinical Findings**
Two sub-sections:
- 5a: Presenting symptoms (bulleted, with duration)
- 5b: Examination findings (table: parameter | finding | clinical significance)
- 5c: Investigations (table: investigation | result | interpretation; explicitly flag missing investigations)

**6. Timeline**
Chronological flow diagram or structured timeline from first symptoms to outcome, with each major clinical event, decision point, and missed pivot labelled.

**7. Diagnostic Assessment**
- Working diagnoses at time of death/discharge
- Unestablished diagnoses — differential table (diagnosis | supporting evidence | against | investigation required)
- The central diagnostic question: what remained unanswered, and why

**8. Therapeutic Interventions**
Table: intervention | timing | rationale | outcome. Include a separate row for each intervention that was NOT initiated but was indicated, with justification.

**9. Follow-Up and Outcomes**
What happened. If fatal: what post-mortem data was or was not obtained, and what that means for learning.

**10. Discussion**
Three to four named teaching points, each structured as: what happened → what should have happened → why the gap occurred → what would prevent it.

**11. Patient Perspective**
Reconstructed from any patient or advocate narrative in the case source. If none exists, mark as `[Not documented — patient perspective unavailable]`.

**12. Informed Consent Statement**
Source and consent status of the case material.

---

#### 6B — Advocate Debrief

Structure:

**Opening:** What is an advocate debrief? One paragraph defining its purpose — not criticism of the family, but clinical systems analysis of what healthcare encounters failed to provide.

**The Advocate's Role:** What specific roles did the family caregiver play in this case? (Historian, medication administrator, wound care coordinator, decision-maker, etc.)

**Inflection Point Analysis:**
For each major clinical turning point in the case (minimum 5 inflection points), produce:
```
### Inflection Point [N] — [Name of moment]
**What happened:** [clinical event]
**What the advocate understood:** [their likely interpretation]
**What the advocate needed to know:** [specific information, in plain language]
**The question the advocate needed to ask:** [exact wording they could have used]
**VibeRounds module applied:** [Module X, Step Y]
[Module 11-style red flag table or Module 2-style information brief where applicable]
```

**What the Advocate Did Well:**
Explicit acknowledgement of what the family managed correctly — this section is mandatory and must not be omitted.

**Advocate Learning Summary:**
Apply Module 2 Step 2.8 (Bloom's Remember → Understand → Apply) as three questions and model answers the advocate should have been able to answer at discharge.

**Recommendations for Future Similar Cases:**
Four to six specific, actionable recommendations — for the clinical team, for the prescribing clinician, for the discharge process, and for the healthcare system.

**Stage 7 hand-off (NEW in v1.1):** Two specific elements of Stage 6 are required Stage 7 inputs, not optional ones:
- CARE field **5c** (investigations) flags every missing investigation explicitly — each one is a candidate Stage 7 entry.
- Every Inflection Point's **"What the advocate needed to know"** field often names a specific history or examination detail that was never elicited at the time — each one is a candidate Stage 7 entry.

Add both to the running gap log using the same `[GAP]` tag format as Stage 4, e.g. `[GAP] CARE-5c | <investigation> | <why>` or `[GAP] Inflection-3 | <history detail> | <why>`.

---

### STAGE 7 — Further Requested Information Synthesis *(NEW in v1.1)*

**Objective:** Consolidate every history detail, examination finding, and investigation that is missing from the case but would be high clinical value to obtain — pooled from across the entire pipeline — into one deduplicated, prioritized, actionable request list.

**Why this stage exists:** Stages 1, 4, and 6 each surface information gaps independently and for different reasons (Stage 1 — simple absence from the source record; Stage 4 — a gap that blocks full resolution of a high-value clinical question; Stage 6 — a gap named explicitly in CARE 5c or needed by the advocate at a specific inflection point). Without a synthesis stage, these gaps stay scattered across three different files in three different formats, and the single most clinically actionable output of the whole pipeline — *"if I could ask one more thing, what would move this case forward most"* — never gets assembled. Stage 7 closes that loop.

**Instructions for AI:**

1. **Pool.** Collect every `[GAP]` tag logged during Stages 1, 4, and 6, plus every field marked `[NOT DOCUMENTED]` in the Stage 1 structured extraction, plus every "investigation required" entry from the CARE 7 differential table.
2. **Deduplicate.** Where the same underlying missing item was flagged from multiple stages (e.g. a missing CSF culture flagged in both Stage 4's Module 12 differential challenge and CARE 5c), merge into a single entry and retain all contributing reasons.
3. **Classify** each pooled gap into exactly one of three categories:
   - **History** — symptom detail, timeline clarification, exposure/occupational/travel history, medication history, family history, prior-episode history
   - **Examination** — a physical or neurological examination component not documented as performed, or performed but with an undocumented result
   - **Investigation** — a laboratory test, imaging study, procedure, or specialist referral not performed or pending
4. **Score** each gap 1–10 on the same clinical-importance scale used in Stage 3, with this Stage-7-specific anchor:
   - **10** — Obtaining this would likely resolve the central unanswered diagnostic question in CARE field 7
   - **8–9** — Obtaining this would materially change risk stratification, treatment choice, or escalation decision
   - **6–7** — Obtaining this would strengthen confidence in the working diagnosis or rule out a credible differential
   - **4–5** — Useful for completeness or longitudinal tracking; unlikely to change current management
   - **1–3** — Low yield; included for completeness only
5. **For each gap, state:**
   - The specific item requested, phrased as something a clinician could actually ask or order (not vague — "ask about recent antibiotic exposure in the 4 weeks prior to admission," not "more history needed")
   - Which stage(s)/module(s) flagged it (traceability back to Stages 1, 4, or 6)
   - What specific question this would answer or what differential it would help resolve/exclude
   - Who is best placed to obtain it (bedside clinician, family/advocate, specialist referral, laboratory)
6. **Sort** descending by score within each of the three categories (History / Examination / Investigation).
7. **Cap and prioritize.** If the pooled, deduplicated list exceeds 20 items, retain all items scored 8–10 in full, and group items scored below 8 into a shorter "Lower-yield / completeness" appendix list rather than dropping them.

**Output format — table per category:**

```
| Score | Item Requested | Flagged By (Stage/Module) | Resolves/Excludes | Best Placed To Obtain |
```

**Quality gate before proceeding to file writing:** Confirm every item in CARE field 5c ("explicitly flag missing investigations") and every Stage 4 `[GAP]` tag has a corresponding row in this stage's output. If any flagged gap from an earlier stage is missing here, go back and add it before writing File 4 — Stage 7 must be a complete pool, not a re-summary.

---

## Output File Specifications

### File 1: `VibeRounds-TopInsights-[CaseName].md`

**Purpose:** A standalone, shareable summary of the most important clinical learning from this case. Designed to be read independently — without needing to open the full analysis file.

Contains:
- Case link on line 3 (immediately after title and subtitle)
- One-sentence case identifier (age, sex, key diagnoses)
- Top 10 clinical insights from Stage 5, numbered 1–10 in order of clinical importance
- Each insight formatted as:
  - **Insight [N]: [Short title]**
  - Finding: what was observed or missed
  - Significance: why it mattered clinically
  - Correct response: what should have happened
- Footer: VibeRounds disclaimer and reference to companion Files 2, 3, and 4

### File 2: `VibeRounds-CaseAnalysis-[CaseName].md`

Contains:
- Case link on line 3 (immediately after title and subtitle)
- Case summary (structured, from Stage 1)
- Workflow description (one paragraph per stage, now seven paragraphs)
- Section 1: Full case summary table
- Section 2: Prompt mapping table (Stage 2)
- Section 3: Ranked prompt table (Stage 3)
- Section 4: High-value prompt answers (Stage 4) — one named subsection per prompt
- Footer: VibeRounds disclaimer and reference to companion Files 1, 3, and 4

### File 3: `VibeRounds-CARE-AdvocateDebrief-[CaseName].md`

Contains:
- Case link on line 3
- Reference to Files 1, 2, and 4 as companion documents
- Part A: Full CARE case report (all 12 fields)
- Part B: Full advocate debrief (all sections)
- Footer: VibeRounds disclaimer

### File 4: `VibeRounds-FurtherInfo-[CaseName].md` *(NEW in v1.1)*

**Purpose:** A standalone, actionable "what to ask/examine/order next" reference — the single file a clinician or advocate would consult if the case were still live and they wanted to know what to do next to close the most important information gaps. Designed to be read independently.

Contains:
- Case link on line 3 (immediately after title and subtitle)
- One-sentence case identifier (same as File 1)
- One-paragraph framing: what Stage 7 pooled and from where (Stages 1, 4, 6)
- Section 1: Further History Required (table, sorted by score)
- Section 2: Further Examination Required (table, sorted by score)
- Section 3: Further Investigations Required (table, sorted by score)
- Section 4: "If you could only obtain three things" — the top 3 items across all categories combined, expanded to 2–3 sentences each on why they take priority over everything else in the list
- Section 5 (only if list exceeded 20 items): Lower-yield / completeness appendix
- Footer: VibeRounds disclaimer and reference to companion Files 1, 2, and 3

**Naming convention:**
`[CaseName]` = abbreviated identifier derived from the case (e.g., `60F-EColi-Sepsis`, `45M-DKA-Tropical`, `72F-Dementia-Falls`). Use age + sex + two to three key clinical features, hyphen-separated, no spaces. The same `[CaseName]` is used across all four output files.

---

## Quality Checks Before Delivering Output

Before writing any output file, the AI must confirm:

- [ ] Case link is cited on line 3 of all four files
- [ ] All Stage 1 clinical fields are populated or explicitly marked `[NOT DOCUMENTED]`
- [ ] Minimum 15 prompts mapped for complex cases (8 for simpler cases)
- [ ] All prompts scored 8–10 have been answered in Stage 4
- [ ] No generic textbook answers — every answer references specific case features
- [ ] Top 10 insights in File 1 are case-specific and formatted with Finding / Significance / Correct Response
- [ ] CARE report contains all 12 fields (no field skipped)
- [ ] Advocate debrief contains minimum 5 inflection points
- [ ] "What the advocate did well" section is present and substantive
- [ ] Missing investigations are explicitly named in Files 2 and 3
- [ ] **(NEW)** Every `[GAP]` tag logged during Stages 1, 4, and 6 has a corresponding row in Stage 7's output — no flagged gap is dropped silently
- [ ] **(NEW)** File 4 contains all three category tables (History / Examination / Investigation), each sorted descending by score
- [ ] **(NEW)** File 4's "top 3 priority" section is populated and each item is justified in 2–3 sentences, not just restated
- [ ] All four files have the VibeRounds disclaimer footer
- [ ] File naming follows the convention above, with consistent `[CaseName]` across all four files

---

## Trigger Prompt

Copy and send this prompt to Claude (with this protocol file and the VibeRounds Modules 1–20 file uploaded):

---

```
#VibeRounds Run the full Master Case Analysis Protocol (v1.1) on the following case:

[PASTE CASE LINK OR CASE NARRATIVE HERE]

Execute all seven pipeline stages in sequence:
Stage 1 — Case ingestion and structured extraction (log all [NOT DOCUMENTED] fields)
Stage 2 — Prompt mapping across all 20 modules
Stage 3 — Prompt ranking by clinical importance (1–10)
Stage 4 — Full answers to all prompts scored 8–10 (tag any [GAP] surfaced along the way)
Stage 5 — Top 10 clinical insights
Stage 6 — CARE-format case report (all 12 fields) + Advocate debrief (all sections; tag any [GAP] from CARE 5c or inflection points)
Stage 7 — Pool all logged gaps into a prioritized Further Requested Information synthesis

Deliver four output .md files:
File 1: VibeRounds-TopInsights-[CaseName].md
File 2: VibeRounds-CaseAnalysis-[CaseName].md
File 3: VibeRounds-CARE-AdvocateDebrief-[CaseName].md
File 4: VibeRounds-FurtherInfo-[CaseName].md

Follow all quality checks in the protocol before writing the output files.
State which stage you are in before beginning each one.
Do not collapse stages or skip ahead.
```

---

## What This Protocol Is and Is Not

**This protocol IS:**
- A structured educational framework for deep clinical case analysis
- A tool for applying the full VibeRounds cognitive library to individual patient cases
- A method for producing publishable-quality case reports and caregiver education briefs
- A system for surfacing cognitive biases, diagnostic gaps, and missed clinical pivots in retrospective case review
- **(NEW)** A system for consolidating, across an entire multi-stage analysis, exactly what additional history, examination, or investigation detail would be most valuable to obtain next

**This protocol IS NOT:**
- A clinical decision support system
- A substitute for licensed clinical judgment
- A diagnostic oracle — the AI generates hypotheses and frameworks, not diagnoses
- A tool to be used with identifiable patient data without appropriate consent and de-identification
- **(NEW)** A request to obtain or re-contact a real patient for additional information — File 4 is an educational synthesis of what would be clinically valuable in principle, applied retrospectively to a case source; it is not an instruction to pursue contact with any individual

---

## Protocol Maintenance Notes

This protocol was developed and validated in June 2026 against one complex multi-system case. As additional cases are run through the pipeline, the following should be updated:

- **Mapping triggers table (Stage 2):** Add new module-to-case-feature mappings as they emerge from novel case types
- **Ranking criteria (Stage 3):** Calibrate score thresholds against clinical outcomes if follow-up data becomes available
- **Quality checklist:** Add new checklist items as output gaps are identified
- **Naming convention:** Extend if case types expand beyond single-admission presentations (e.g., longitudinal monitoring cases from Module 3)
- **(NEW) Stage 7 gap-tagging discipline:** The `[GAP]` tagging convention introduced in Stages 1, 4, and 6 depends on the AI consistently logging gaps as it goes, rather than retrospectively reconstructing them at Stage 7. If early runs of v1.1 show Stage 7 outputs missing gaps that were clearly visible in Stage 4 or CARE 5c text, tighten the Stage 4/6 hand-off instructions further (e.g., require the `[GAP]` tag to be emitted inline immediately, not deferred to "end of stage" summarization) rather than asking Stage 7 to re-read and re-mine the entire prior output from scratch.
- **(NEW) Stage 7 scope discipline:** Watch for Stage 7 drifting into generating *new* clinical questions not actually grounded in a gap surfaced earlier in the pipeline. Stage 7 is a pooling and prioritization stage, not a new analysis stage — if this drift is observed, add an explicit instruction that every File 4 row must cite a specific upstream stage/module as its source.

### Rationale for v1.1 Change

The original six-stage pipeline produced excellent retrospective analysis (what happened, what it meant, what should have happened) but left "what should be asked/examined/ordered next" scattered as a side-effect across three different files in three different formats (Stage 1's `[NOT DOCUMENTED]` tags, CARE field 5c, and individual advocate inflection points). For an educational tool whose stated purpose includes surfacing diagnostic gaps, this scattering meant the single most actionable output — a prioritized list of what would move the case forward — was never actually assembled anywhere. Stage 7 and File 4 close that gap by treating "further requested information" as a first-class pipeline output with its own dependency chain, rather than an incidental by-product of other stages. See the companion file `VibeRounds-Dependency-Network-Map.md` for the full inter-stage dependency structure this introduces.

---

*VibeRounds Master Case Analysis Protocol v1.1 — June 2026*
*All outputs generated using this protocol are educational. Independent clinical verification is required before acting on any content. This protocol does not constitute clinical advice, diagnostic guidance, or a substitute for professional medical judgment.*
