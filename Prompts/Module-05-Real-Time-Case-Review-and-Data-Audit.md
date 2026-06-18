[← Back to README](README.md)

# Module 5 — Real-Time Case Review & Data Audit

**Objective:** Query and clean a single patient's live case log — diet diaries, insulin logs, prescriptions — during active management.

**Validated Environment:** PaJR Health bot, against real case logs.

> [!IMPORTANT]
> This module requires **de-identified data only**. See the [Safety & Compliance Note](Start-Here.md#️-safety--compliance-note).

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Load and orient the case

### Step 5.0: Case Context Prime

**Prompt:**
```text
#VibeRounds You are a clinical learning companion helping me review a live
patient case log. Before any analysis, read the log and confirm back to
me: (1) the patient's primary diagnosis, (2) the time window covered, (3)
the three most active clinical issues visible. Do not proceed until I
confirm your reading is correct. [paste case log]
```

> [!NOTE]
> **Application Note:** Prevents downstream analytic errors caused by the AI misreading the case framing.

---

## Phase 2 · Execution — Targeted queries and audits

### Step 5.1: Drug Interaction & Prescription Audit

**Prompt:**
```text
#VibeRounds Review this medication and meal/timing log for drug
interactions and prescription concerns. Present findings clearly. For each
concern, tell me what I should look for clinically — turning the audit
into a learning moment. [paste medication + meal/timing log]
```

### Step 5.2: Recent Interventions Recap

**Prompt:**
```text
#VibeRounds List the 5 most recent clinical interventions for this
patient. For each, give a one-line note on what outcome or response we
should have seen — so I can assess whether the intervention achieved its
goal.
```

### Step 5.3: Reformat a Raw Log Clearly

**Prompt:**
```text
#VibeRounds Present this data in a cleaner, more readable format. After
reformatting, highlight any single data point that stands out to you as
clinically significant and tell me why. [paste raw glycemic/insulin/diet
log]
```

### Step 5.4: Two-Week Case Refresh

**Prompt:**
```text
#VibeRounds Summarize the last 2 weeks of this patient's case to help me
re-engage. After the summary, ask me: 'Based on this trajectory, what do
you think the key clinical question is going into the next two weeks?' —
giving me a chance to reason before you offer your view.
```

### Step 5.5: Patient Journey Summary

**Prompt:**
```text
#VibeRounds Summarize this patient's full journey. Structure it as a
narrative arc: how the case presented, how the clinical picture evolved,
what the key turning points were, and where we stand now.
```

### Step 5.6: Masterclass Follow-Up

**Prompt:**
```text
#VibeRounds I want to understand the clinical principle behind the
management of this case at a deeper level. Teach me the masterclass — but
do it Socratically: ask me what I already understand, build on my answer,
and fill the gaps.
```

> [!NOTE]
> **Application Note:** Used after a well-managed case to turn outcome observation into structured learning.

### Step 5.7: Patient Voice-in-Their-Own-Words

**Prompt:**
```text
#VibeRounds In plain, warm, conversational language the patient themselves
would use, ask them to reflect on: their experience of managing [condition,
e.g. diet and diabetes], the challenges they face, where they see
opportunity for improvement, and a brief summary of what they are
committing to going forward.
```

### Step 5.8: Data Anomaly Flagging

**Prompt:**
```text
#VibeRounds Scan this case log for data anomalies: impossible values (e.g.
glucose <2 or >30 mmol/L), timestamp inconsistencies, missing mandatory
fields, or entries that directly contradict a previous entry. List each
anomaly with its timestamp and a one-line explanation. After listing, tell
me which anomaly — if real and not a recording error — would have the most
significant clinical consequence. [paste log]
```

### Step 5.9: Fink FLINK Deep Case Reflection (Module 5 Application)

**Prompt:**
```text
#VibeRounds Use Fink's six dimensions to help me extract maximum learning
from this case: (1) Foundational Knowledge — what are the 3 core facts I
must remember about this condition? (2) Application — what will I do
differently in practice because of this case? (3) Integration — how does
this case connect to another condition or system I already understand
well? (4) Human Dimension — what does this case tell me about the
experience of being this patient? (5) Caring — what professional value is
most activated by this case? (6) Learning How to Learn — what is the
single best learning strategy for cases like this? Ask me each one; affirm
my response before continuing.
```

> [!NOTE]
> **Application Note:** See [Framework B](Framework-B-Finks-FLINK-Taxonomy.md).

---

## Phase 3 · Closure / Review — Synthesis and action

### Step 5.10: Case Audit Summary & Action List

**Prompt:**
```text
#VibeRounds Produce a final Case Audit Summary: (1) data quality rating out
of 10 with justification, (2) top 3 clinical concerns in the log, (3) top 3
data gaps to fill before the next clinical decision, (4) one specific
follow-up action for the managing team. End with: 'The most important
thing this log teaches us is [one sentence].'
```

### Step 5.11: Exportable Case Abstract

**Prompt:**
```text
#VibeRounds Generate a 200-word structured case abstract suitable for case
conference presentation. Include: chief complaint, key clinical findings,
working diagnosis, management summary, and one unresolved clinical
question. After the abstract, suggest the Bloom's level at which this case
is best taught — and why.
```

> [!NOTE]
> **Application Note:** Recommended Bloom's-level tagging — see [Framework C](Framework-C-Blooms-Taxonomy.md).

---

## Related Frameworks

- [Framework B — Fink's FLINK Taxonomy](Framework-B-Finks-FLINK-Taxonomy.md) (Step 5.9)
- [Framework C — Bloom's Revised Taxonomy](Framework-C-Blooms-Taxonomy.md) (Step 5.11, case-level tagging)

---

## Navigation

**Previous:** [← Module 4 — Peer-Level Ward Round Preparation](Module-04-Peer-Level-Ward-Round-Preparation.md)
**Next:** [Module 6 — Registry-Level Analytics →](Module-06-Registry-Level-Analytics.md)

[← Back to README](README.md)
