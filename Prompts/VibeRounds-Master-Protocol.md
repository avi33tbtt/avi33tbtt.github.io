# VibeRounds — Master Case Analysis Protocol
## Complete Workflow: From Case Link to Full Clinical Intelligence Output

**Framework Source:** VibeRounds Combined Modules 1–20
**Protocol Version:** 1.0 — June 2026
**Validated Against:** [60F with Coma, E Coli Sepsis, Cervical Myelopathy, and Albumino-Cytological Dissociation in CSF](https://classworkdecjan.blogspot.com/2016/12/60f-with-coma-e-coli-sepsis-and-upper.html)

---

## How to Use This Protocol

1. **Upload this file** to Claude (or any capable LLM) along with the VibeRounds Modules 1–20 file.
2. **Paste a case link** (public blog, open patient record, or de-identified case narrative URL) in your message.
3. **Send the trigger prompt** at the bottom of this document.
4. The AI will execute all six pipeline stages in sequence and deliver **three output `.md` files**:
   - `VibeRounds-TopInsights-[CaseName].md` — Top 10 clinical insights (standalone, shareable summary)
   - `VibeRounds-CaseAnalysis-[CaseName].md` — Prompt mapping, ranking, and full high-value prompt answers
   - `VibeRounds-CARE-AdvocateDebrief-[CaseName].md` — CARE case report and advocate debrief

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
         │
         ▼
  STAGE 5 — Insight Synthesis
  Extract the top 10 clinical insights from all analysis above
         │
         ▼
  STAGE 6 — CARE Report + Advocate Debrief
  Produce CARE-format case write-up and structured advocate journey analysis
         │
         ▼
OUTPUT
  ├── File 1: VibeRounds-TopInsights-[CaseName].md
  ├── File 2: VibeRounds-CaseAnalysis-[CaseName].md
  └── File 3: VibeRounds-CARE-AdvocateDebrief-[CaseName].md
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
- Footer: VibeRounds disclaimer and reference to companion Files 2 and 3

### File 2: `VibeRounds-CaseAnalysis-[CaseName].md`

Contains:
- Case link on line 3 (immediately after title and subtitle)
- Case summary (structured, from Stage 1)
- Workflow description (one paragraph per stage)
- Section 1: Full case summary table
- Section 2: Prompt mapping table (Stage 2)
- Section 3: Ranked prompt table (Stage 3)
- Section 4: High-value prompt answers (Stage 4) — one named subsection per prompt
- Footer: VibeRounds disclaimer and reference to companion Files 1 and 3

### File 3: `VibeRounds-CARE-AdvocateDebrief-[CaseName].md`

Contains:
- Case link on line 3
- Reference to Files 1 and 2 as companion documents
- Part A: Full CARE case report (all 12 fields)
- Part B: Full advocate debrief (all sections)
- Footer: VibeRounds disclaimer

**Naming convention:**
`[CaseName]` = abbreviated identifier derived from the case (e.g., `60F-EColi-Sepsis`, `45M-DKA-Tropical`, `72F-Dementia-Falls`). Use age + sex + two to three key clinical features, hyphen-separated, no spaces.

---

## Quality Checks Before Delivering Output

Before writing any output file, the AI must confirm:

- [ ] Case link is cited on line 3 of all three files
- [ ] All Stage 1 clinical fields are populated or explicitly marked `[NOT DOCUMENTED]`
- [ ] Minimum 15 prompts mapped for complex cases (8 for simpler cases)
- [ ] All prompts scored 8–10 have been answered in Stage 4
- [ ] No generic textbook answers — every answer references specific case features
- [ ] Top 10 insights in File 1 are case-specific and formatted with Finding / Significance / Correct Response
- [ ] CARE report contains all 12 fields (no field skipped)
- [ ] Advocate debrief contains minimum 5 inflection points
- [ ] "What the advocate did well" section is present and substantive
- [ ] All three files have the VibeRounds disclaimer footer
- [ ] Missing investigations are explicitly named in Files 1 and 2
- [ ] File naming follows the convention above

---

## Trigger Prompt

Copy and send this prompt to Claude (with this protocol file and the VibeRounds Modules 1–20 file uploaded):

---

```
#VibeRounds Run the full Master Case Analysis Protocol on the following case:

[PASTE CASE LINK OR CASE NARRATIVE HERE]

Execute all six pipeline stages in sequence:
Stage 1 — Case ingestion and structured extraction
Stage 2 — Prompt mapping across all 20 modules
Stage 3 — Prompt ranking by clinical importance (1–10)
Stage 4 — Full answers to all prompts scored 8–10
Stage 5 — Top 10 clinical insights
Stage 6 — CARE-format case report (all 12 fields) + Advocate debrief (all sections)

Deliver three output .md files:
File 1: VibeRounds-TopInsights-[CaseName].md
File 2: VibeRounds-CaseAnalysis-[CaseName].md
File 3: VibeRounds-CARE-AdvocateDebrief-[CaseName].md

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

**This protocol IS NOT:**
- A clinical decision support system
- A substitute for licensed clinical judgment
- A diagnostic oracle — the AI generates hypotheses and frameworks, not diagnoses
- A tool to be used with identifiable patient data without appropriate consent and de-identification

---

## Protocol Maintenance Notes

This protocol was developed and validated in June 2026 against one complex multi-system case. As additional cases are run through the pipeline, the following should be updated:

- **Mapping triggers table (Stage 2):** Add new module-to-case-feature mappings as they emerge from novel case types
- **Ranking criteria (Stage 3):** Calibrate score thresholds against clinical outcomes if follow-up data becomes available
- **Quality checklist:** Add new checklist items as output gaps are identified
- **Naming convention:** Extend if case types expand beyond single-admission presentations (e.g., longitudinal monitoring cases from Module 3)

---

*VibeRounds Master Case Analysis Protocol v1.0 — June 2026*
*All outputs generated using this protocol are educational. Independent clinical verification is required before acting on any content. This protocol does not constitute clinical advice, diagnostic guidance, or a substitute for professional medical judgment.*
