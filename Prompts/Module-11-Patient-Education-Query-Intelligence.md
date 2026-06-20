[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module 11 — Patient Education Query Intelligence

**Objective:** Help medical students discover, anticipate, and respond to the real questions patients and families carry about an illness — so that students learn to see the clinical picture through the patient's eyes, not just through the medical record.

**Indication:** Use when a student has a diagnosis, a short history, or a full clinical picture and wants to prepare for meaningful patient conversations, discharge counselling, or bedside communication practice. Can also be used to surface information gaps the patient has not yet articulated but almost certainly holds.

> [!IMPORTANT] **Clinical Disclaimer & Independent Verification Required**
> All AI-generated outputs produced using this module — including patient concern summaries, lay explanations, red-flag lists, and counselling scripts — **require independent clinical verification before being acted upon or shared with a patient.** This module is an educational scaffold for students, not a substitute for clinical judgment, institutional communication protocols, or the clinician–patient relationship.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Load the clinical picture and set the educational contract

### Step 11.0: Context Upload & Module Orientation

**Prompt:**

```
#VibeRounds I am a medical student using Module 11 — Patient Education Query Intelligence.
My goal is to understand the questions, fears, and information needs that a real patient
(or their family) is likely to carry about this case — and to learn how to address those
needs clearly, accurately, and humanely.

Here is the clinical input [choose what you have]:
- OPTION A — Diagnosis only: [e.g., Type 2 Diabetes Mellitus, newly diagnosed]
- OPTION B — Short history: [paste a 2–5 sentence summary]
- OPTION C — Full clinical picture: [paste history, examination findings, investigations,
  medications, and management plan]

Please confirm you have received the clinical input and understand your role: you are
an AI educational assistant helping me learn about patient information needs — you are
NOT directly advising the patient. Confirm before we begin.
```

> [!NOTE] **Application Note:** The module accepts any level of clinical detail. A diagnosis alone is sufficient for Step 11.1–11.3; the full clinical picture unlocks medication-specific, lifestyle-specific, and red-flag steps (11.4–11.7). Paste the richest input you have.

---

## Phase 2 · Execution — Surfacing patient information needs

### Step 11.1: The Patient's Inner Question List

*Validated Environment: Claude*

**Prompt:**

```
#VibeRounds Based on the clinical input I provided, generate the 10–15 questions
a patient in this situation is most likely to be silently carrying — questions they
may not know how to ask their doctor, or may feel embarrassed to raise.

Organise them under these headings:
1. "What is happening to my body?" — disease understanding questions
2. "What will happen to me?" — prognosis and trajectory questions
3. "What do I need to do?" — self-management and lifestyle questions
4. "What can go wrong?" — worry and safety questions
5. "What does this mean for my life?" — impact on work, family, daily function

For each question, add one sentence explaining *why* patients commonly hold this
concern but often do not voice it.
```

> [!NOTE] **Application Note:** This step is the entry point for empathic clinical communication training. The "why they don't voice it" column builds student insight into health literacy gaps, shame, and power dynamics in the clinical encounter.

### Step 11.2: Lay Language Explainer

*Validated Environment: Claude*

**Prompt:**

```
#VibeRounds For this clinical picture, produce a plain-language explanation of:
(a) What the diagnosis is and what it means in the body — using an analogy a
    patient with no medical background would find memorable
(b) What the key investigation findings mean in one sentence each
(c) What the current treatment is doing and why it matters

Use language a person with a Grade 8 reading level can understand. Avoid jargon;
where a medical term is unavoidable, define it in brackets immediately after.
Do NOT simplify so much that clinical accuracy is lost.
```

> [!NOTE] **Application Note:** Evaluating the AI's lay explanation is itself a learning task — students should compare it against their own knowledge and identify any inaccuracy, over-simplification, or missing nuance. This builds both communication skill and critical AI literacy.

### Step 11.3: The Family Member Perspective

**Prompt:**

```
#VibeRounds Now adopt the perspective of a close family member or primary caregiver
of this patient. Generate:
(a) The 5 most urgent questions this family member would want answered before leaving
    the hospital or clinic
(b) The 2–3 fears they are most likely carrying that they may not express to the
    medical team
(c) One practical concern about the home environment or caregiver capacity that the
    medical team might not have asked about

Frame each item as a direct quote from the family member's point of view
(first-person voice).
```

> [!NOTE] **Application Note:** This step trains students to extend their communication beyond the patient to the family system — a critical competency for complex chronic illness, paediatrics, geriatrics, and palliative care.

### Step 11.4: Medication Literacy Check

*Use when medications are included in the clinical picture.*

**Prompt:**

```
#VibeRounds For each medication in this patient's regimen, generate the 3 questions
a patient is most likely to ask about it:

Format as a table:
| Medication | Patient Question | Plain-Language Answer | Why This Question Matters |

Include at least one question per medication that relates to a common patient
misconception or adherence barrier (e.g., "Can I stop this once I feel better?",
"Will this make me dependent?", "Does this interact with my herbal supplement?").
```

> [!NOTE] **Application Note:** Medication literacy is one of the highest-yield domains for preventing readmission and adverse events. Students often know pharmacology but have not practised translating it into the language a patient can act on.

### Step 11.5: Red Flag Teaching — The Patient's Warning Signs

**Prompt:**

```
#VibeRounds Based on this clinical picture, generate a patient-facing red-flag
awareness guide. Structure it as:

**"When to seek help immediately" (Emergency — go to hospital now):**
- [List 3–5 signs specific to this patient's condition]

**"When to call your doctor within 24 hours" (Urgent — do not wait):**
- [List 3–5 signs]

**"What to monitor at home" (Watch and record):**
- [List 3–5 parameters with simple instructions, e.g., BP reading threshold,
  weight gain per day, urine output, symptom diary]

After the guide, add a teaching note for me (the student): explain WHY each
red flag is physiologically significant and what clinical event it is warning against.
```

> [!NOTE] **Application Note:** The dual-output design (patient guide + student teaching note) is intentional. Students learn the clinical reasoning behind red flags while simultaneously producing something useful for the actual patient encounter.

### Step 11.6: Lifestyle, Diet & Daily Living — Patient Questions

**Prompt:**

```
#VibeRounds For this patient's condition, generate the most common lifestyle
questions patients ask — questions that are often inadequately addressed during
a time-pressured clinical encounter:

Cover all relevant domains from this list (include only those applicable to the case):
- Diet and nutrition (what to eat, what to avoid, portion size, meal timing)
- Physical activity (how much, what type, what to avoid)
- Sleep and rest
- Work and occupational capacity
- Sexual activity (if relevant)
- Travel (including air travel, altitude, or heat if applicable)
- Alcohol and recreational substances
- Driving (especially relevant for epilepsy, syncope, diabetes on insulin, sedative medications)
- Monitoring at home (devices, apps, symptom diaries)

For each question, provide a concise evidence-informed answer AND note if the answer
is individualized (i.e., needs to be tailored to this specific patient's situation
rather than given as a blanket recommendation).
```

> [!NOTE] **Application Note:** Students frequently under-counsel on lifestyle because these topics feel outside the "medical" domain or because training has not given them confident, evidence-anchored answers. This step builds that fluency.

### Step 11.7: The Unasked Question — Patient Insight Mining

**Prompt:**

```
#VibeRounds Based on the full clinical picture, identify 2–3 important things
this patient needs to know — insights they would want if they understood their
condition as well as a doctor does — but which patients almost never think to ask.

These should be non-obvious, clinically important, and actionable. Examples of
the type of insight this step is looking for (do NOT repeat these — generate
new ones specific to this case):
- "The symptom you are most worried about is actually benign; the symptom you
  have been ignoring is the one that needs watching."
- "This medication works better if taken at a specific time of day — here is why."
- "One common behaviour patients do when they feel better actually undermines
  their recovery — here is what it is."

For each insight, explain:
(a) What the insight is, in plain language
(b) Why patients typically miss it
(c) How a student or clinician can proactively introduce it in a brief consultation
```

> [!NOTE] **Application Note:** This is the highest-yield step in Module 11. It trains proactive communication — the skill of giving the patient the knowledge they did not know to ask for. It also surfaces clinically important "hidden" adherence risks, safety gaps, and self-management pitfalls.

---

## Phase 3 · Closure / Review — Consolidation and reflection

### Step 11.8: Student Self-Assessment — Communication Readiness

**Prompt:**

```
#VibeRounds Before I close this session, ask me three questions to check whether
I am genuinely ready to counsel this patient:

Question 1: Ask me to explain the diagnosis in my own words, as if I am talking
to the patient — without using any medical terminology.

Question 2: Ask me to name the single most important thing this patient needs to
understand about their medications or self-management before discharge.

Question 3: Ask me to identify one question from the patient's likely inner list
(from Step 11.1) that I would find most difficult to answer honestly, and
explain why.

After I respond to all three, give me formative feedback: what I communicated
well, and one specific thing to improve in my next patient conversation.
```

> [!NOTE] **Application Note:** This Socratic closure loop links Module 11 back to the Vibe Rounds pedagogic spine. It prevents the student from passively consuming AI output without internalising it. Aligns with Module 1 Step 1.4 (Mid-Session Reasoning Checkpoint) and Framework C (Bloom's Apply level).

### Step 11.9: Patient Education Summary Card (Printable Draft)

**Prompt:**

```
#VibeRounds Generate a brief patient-facing education summary for this case,
formatted as a take-home information card. Structure:

**Your Diagnosis:** [plain-language name + one sentence explanation]

**What This Means for Your Body:** [2–3 sentences, lay language]

**Your Medicines:** [table: Medicine name | What it does | When to take it | One thing to remember]

**Watch for These Warning Signs — Seek Help Immediately If:**
- [3–5 red flags]

**What You Can Do at Home:**
- [3–5 self-management actions]

**Your Next Steps:**
- [Follow-up appointment, monitoring, referrals]

**Questions to Ask Your Doctor Next Time:**
- [3 questions drawn from the patient's likely inner list]

Label this clearly as a STUDENT-GENERATED DRAFT requiring clinician review
before it is shared with any patient.
```

> [!NOTE] **Application Note:** The output is a learning artefact, not a finished patient document. It should be reviewed by a supervising clinician before any real-world use. The act of producing it teaches students to synthesise clinical knowledge into communicable form — a core clinical competency.

### Step 11.10: Critical Awareness Debrief — Patient Education Lens

**Prompt:**

```
#VibeRounds Before we close, apply the Vibe Rounds Critical Awareness lens
to what we have produced in this module:

(1) What health literacy assumptions did the AI make about this patient?
    Are they justified given what we know about the case?

(2) What cultural, linguistic, or socioeconomic factors could alter how this
    patient receives and acts on the information we generated?

(3) Where might the AI's patient education output be overconfident, incomplete,
    or insufficiently individualised?

(4) What is the most important thing I, as the student, still do not know about
    this patient's information needs that no amount of AI analysis can tell me?

Be honest and constructive. End with one sentence on what the best next step
is for me as a learner.
```

> [!NOTE] **Application Note:** See [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html). This step guards against over-reliance on AI-generated patient education and ensures students return to the individual patient as the irreplaceable primary source.

---

## Flexible Input Reference

| Input Type | Steps Unlocked | Notes |
|---|---|---|
| Diagnosis only | 11.0, 11.1, 11.2, 11.3, 11.5, 11.8, 11.10 | Core query and communication steps fully functional |
| Short history (2–5 sentences) | All above + 11.6, 11.7, 11.9 | Lifestyle and insight steps benefit from clinical context |
| Full clinical picture (H+E+Ix+Rx) | All steps | Medication step (11.4) and red-flag step (11.5) are richest at this input level |

---

## Module Maturity

| Module | Status | Description |
|---|---|---|
| **Module 11** | 🟡 In Progress | Structured; individual steps untested against live student cohorts. Suitable for self-directed use. |

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (persona warmth throughout)
- [Framework B — Fink's FLINK Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-B-Finks-FLINK-Taxonomy.html) (Human Dimension & Caring dimensions activated by Steps 11.3 and 11.7)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Step 11.8 targets Apply and Evaluate levels)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step 11.10)
- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) (Step 11.8 mirrors Step 1.4 formative checkpoint structure)
- [Module 2 — Patient-Advocate Case Documentation](https://avi33tbtt.github.io/Prompts/Module-02-Patient-Advocate-Case-Documentation.html) (Step 11.3 family perspective complements Module 2 workflow)

---

## Navigation

**Previous:** [← Module 9 — N-of-1 Case Research Protocol](https://avi33tbtt.github.io/Prompts/VibeRounds_Module9_Research_Protocol.html)

[← Back to README](https://avi33tbtt.github.io/Prompts/)

---

*Vibe Rounds Prompt Modules — Module 11 · Patient Education Query Intelligence*
*Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*
*#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*
