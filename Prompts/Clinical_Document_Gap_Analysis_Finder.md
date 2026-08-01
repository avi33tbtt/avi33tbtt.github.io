# Clinical Document Gap Analysis Finder

## Module Purpose
This module reviews a clinical case record (e.g., patient chart, case note, discharge summary, progress note) and identifies gaps, missing elements, or areas needing improvement for **documentation completeness**. It supports two modes of operation:

1. **Standalone Completeness Review** — Case record only, evaluated against general clinical documentation standards.
2. **Reference-Based Gap Analysis** — Case record evaluated against a supplied educational/insight file (e.g., guideline excerpt, teaching notes, best-practice checklist), identifying where the record falls short of what the reference material recommends.

---

## Inputs

| Input | Required? | Description |
|---|---|---|
| Case Record | Yes | The clinical document to be analyzed (case note, H&P, SOAP note, discharge summary, etc.) |
| Educational Insight File | Optional | Reference material — guideline, textbook excerpt, teaching point, checklist, protocol — used as the benchmark for comparison |

**Behavior switch:**
- If only the case record is provided → run **Mode 1: General Completeness Analysis**.
- If both case record and insight file are provided → run **Mode 2: Reference-Based Gap Analysis**.

---

## Mode 1: General Completeness Analysis

When no reference file is supplied, evaluate the case record against standard clinical documentation completeness domains:

1. **Identification & Context**
   - Patient demographics, encounter date/time, provider identification
   - Chief complaint / reason for visit clearly stated

2. **History**
   - History of present illness (onset, duration, character, aggravating/relieving factors)
   - Relevant past medical/surgical/family/social history
   - Medication list and allergies

3. **Examination / Objective Findings**
   - Vital signs
   - Relevant system-based examination findings
   - Pertinent positives and negatives documented

4. **Assessment**
   - Clear problem list or differential diagnosis
   - Clinical reasoning linking findings to assessment
   - Severity/staging noted where applicable

5. **Plan**
   - Diagnostic workup ordered (labs, imaging) with rationale
   - Treatment plan (medications, dosing, procedures)
   - Follow-up plan and safety-netting advice
   - Patient education/counseling documented

6. **Legal & Administrative Completeness**
   - Consent documentation (where applicable)
   - Signature, credentials, and timestamp
   - Legible abbreviations / no ambiguous shorthand

**Output format for Mode 1:**
```
### Gap Analysis Summary
- Overall Completeness Score: [X/10 or %]

### Identified Gaps
| Domain | Missing/Weak Element | Why It Matters | Suggested Addition |
|---|---|---|---|
| ... | ... | ... | ... |

### Strengths
- [List well-documented elements]

### Priority Recommendations
1. [Most critical fix]
2. [Next priority]
3. [...]
```

---

## Mode 2: Reference-Based Gap Analysis

When an educational/insight file is supplied, use it as the **benchmark** rather than generic standards.

**Process:**
1. Extract key teaching points, required elements, or checklist items from the insight file.
2. Map each point against the case record to check presence/absence/adequacy.
3. Classify each mapped point as:
   - ✅ **Present & Adequate**
   - ⚠️ **Present but Incomplete**
   - ❌ **Missing**
4. For each ⚠️ or ❌ item, explain the gap and suggest the specific documentation needed to close it, using language consistent with the insight file.

**Output format for Mode 2:**
```
### Reference-Based Gap Analysis

Reference Source: [Insight file name/topic]

| Insight File Requirement | Status | Finding in Case Record | Recommended Addition |
|---|---|---|---|
| ... | ✅/⚠️/❌ | ... | ... |

### Summary
- Alignment Score: [X/10 or %]
- Key Gaps vs. Reference Material: [bullet list]
- Educational Note: [brief explanation of why these gaps matter, tied to the insight file's teaching intent]
```

---

## Operating Guidelines
- Always base findings strictly on what is explicitly written in the case record — do not assume unstated information was performed.
- Do not fabricate patient details, diagnoses, or findings.
- When flagging a gap, be specific about **what** is missing and **why** it matters clinically or administratively.
- Keep tone constructive and educational — this is a documentation-improvement tool, not a clinical-competency judgment of the provider.
- If the insight file conflicts with general best practice, prioritize the insight file's framework since Mode 2 is reference-driven, but note the discrepancy if clinically significant.
- If the case record is illegible, fragmented, or missing large sections, state this clearly rather than guessing.

---

## Example Trigger Phrases
- "Run a gap analysis on this case record."
- "Check this note for documentation completeness."
- "Compare this case record against this teaching file and tell me what's missing."
- "What should be added to make this chart complete?"

---

## Disclaimer
This module supports documentation training and quality-improvement review. It does not provide clinical diagnosis, treatment recommendations, or legal/compliance certification. Outputs should be reviewed by a qualified clinician or health information professional before use in real patient records.
