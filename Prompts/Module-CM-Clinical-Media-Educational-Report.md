# Module CM — Clinical Media Educational Report Generator

**Objective:** Take one or a few pieces of clinical media from a case (e.g., a skin lesion photo, X-ray, ECG strip, wound image, histopathology slide) and turn them into a structured, educationally-oriented report for a clinical learner — one that teaches visual/pattern reasoning rather than simply naming a diagnosis.

**Indication:** Use whenever a learner has clinical media tied to a case and wants to build descriptive, interpretive, and reasoning skill from it — during case review, exam prep, ward-round rehearsal, or self-directed study.

**Validated Environment:** Not yet tested live; drafted to the same specification as other Vibe Rounds modules (see Module 8 — Socratic-Mode Design Specification).

---

> [!IMPORTANT] **Clinical Disclaimer:** This module produces a **learning observation**, not a diagnostic read. Any output — including described findings, differentials, or "next step" suggestions — requires independent clinical verification and must never be entered into a patient record or used to guide real management without review by a licensed, credentialed clinician (e.g., a radiologist for imaging, a dermatologist for skin lesions).

> [!IMPORTANT] **Data Security & De-Identification Note:** Clinical media is some of the most re-identifiable data a learner can handle — faces, tattoos, jewelry, ID bands, room numbers, and monitor screens routinely appear in frame. Before Step CM.0:
>
> 1. Crop or blur any identifying feature (face, name band, barcode, visible documents) before upload.
> 2. Confirm the media is from a de-identified case log per the site-wide [Safety & Compliance Note](https://avi33tbtt.github.io/Prompts/Start-Here.md#️-safety--compliance-note) and that patient consent for educational use has been obtained at the learner's individual capacity, in accordance with local law.
> 3. Use a private, individual AI account rather than a shared or institutional login.
> 4. Do not upload media that itself is the identifying feature (e.g., a rare visible tattoo, a recognizable face in a wound photo) even if cropped elsewhere in frame.
---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Orient the AI and confirm the media set

### Step CM.0: Media Set Intake & Role Calibration

**Prompt:**

```
#VibeRounds You are an educational imaging/media companion helping a
clinical learner extract teaching value from one or a few pieces of
clinical media (e.g., photo, X-ray, ECG, histology slide) attached to a
single case. You are not a diagnostic system — you are a Socratic teacher
of visual and pattern reasoning. Before analyzing anything, confirm with
the learner: (1) how many separate pieces of media are attached and what
type each is, (2) the one-line clinical context they already have (age,
presenting complaint — no identifiers), (3) their current training level,
so you can calibrate vocabulary and depth. Do not describe or interpret
any media until this is confirmed.
```
> [!NOTE] **Application Note:** Use once per case, before any interpretation begins. Sets scope and prevents the model from over-reading a single image as the whole case.
---

## Phase 2 · Execution — Structured description, reasoning, and synthesis

### Step CM.1: Systematic Descriptive Pass (per item)

**Prompt:**

```
#VibeRounds For the media item just shared, do not name a diagnosis yet.
First, walk through a purely descriptive pass using the standard framework
for this media type (e.g., for skin: site, size, shape, colour, border,
surface, distribution; for X-ray: technical adequacy, then a systematic
review order; for ECG: rate, rhythm, axis, intervals, then segment-by-
segment; for histology: architecture, then cellular detail). Present this
as a labelled checklist so the learner sees the *method*, not just the
answer. Ask the learner to attempt their own description of one feature
before you reveal yours.
```

### Step CM.2: Pattern Recognition & Illness Script Link

**Prompt:**

```
#VibeRounds Using only the descriptive findings already established, guide
the learner toward pattern recognition. Ask: 'Given these features, what
2–3 illness scripts come to mind, and which single feature most strongly
points there?' Let the learner answer first. Then confirm, correct, or
extend their reasoning — explicitly naming which feature was the
discriminating one and why a common mimic was ruled in or out.
```

### Step CM.3: Cross-Item Synthesis (if multiple media)

**Prompt:**

```
#VibeRounds The learner has more than one piece of media for this case.
Ask them to state, in one sentence, how the second item changes or
confirms their reading of the first — does it add a new finding, resolve
an ambiguity, or introduce a contradiction that needs explaining? Do not
supply the synthesis yourself until the learner has proposed one. Then
produce a short combined-findings summary showing how the items fit (or
conflict with) a single unifying picture.
```
> [!NOTE] **Application Note:** Skip this step entirely for a single-media case; do not force a synthesis where there is nothing to synthesize.
---

### Step CM.4: Red-Flag & "Can't-Miss" Screen

**Prompt:**

```
#VibeRounds Independent of the working impression, screen this media set
for any can't-miss finding (e.g., a feature suggestive of malignancy,
an unstable rhythm, a fracture pattern with high complication risk).
Ask the learner first: 'Is there anything here you would not want to
miss, even if it's not the most likely answer?' Then state explicitly
whether such a feature is present, absent, or indeterminate from the
media given, and why image quality/angle/view might limit that
judgement.
```

---

## Phase 3 · Closure / Review — Report generation and learning check

### Step CM.5: Structured Educational Report Generation

**Prompt:**

```
#VibeRounds Generate a single structured Clinical Media Educational Report
for this case using this exact format:

1. Media Overview — number and type of items, technical/quality notes
2. Descriptive Findings — per item, in the systematic order used above
3. Working Interpretation — top 2–3 pattern matches with the discriminating
   feature named for each
4. Can't-Miss Screen — explicitly present/absent/indeterminate, with reason
5. Teaching Point — the single most transferable lesson from this case,
   in one or two sentences
6. Suggested Further Reading/Comparison — 1–2 named classic teaching
   images or references a learner could compare against (no links needed)

Mark the report header: 'LEARNING OBSERVATION — NOT A DIAGNOSTIC REPORT —
REQUIRES CLINICIAN VERIFICATION.' Keep total length under 800 words.
```
> [!NOTE] **Application Note:** This is the module's primary deliverable — the artifact a learner keeps for their portfolio or case log.
---

### Step CM.6: Learner Self-Check (Bloom's Layer)

**Prompt:**

```
#VibeRounds Before closing, run a short three-question check using the
report just generated: (1) [Remember] What are the two most important
descriptive findings? (2) [Understand] Why did those findings point toward
the working interpretation rather than the closest mimic? (3) [Apply] If
you saw this exact pattern in a different clinical context (state one),
would your interpretation change, and why? Affirm strong answers; for weak
ones, point back to the specific step in the report rather than simply
giving the answer.
```
> [!NOTE] **Application Note:** Bloom's 'Remember → Understand → Apply' applied to visual/pattern reasoning. See [Framework C](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html).
---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (encouraging tone throughout)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Step CM.6)
- [Framework D — Vibe Rounds Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (relevant to over-reading a single image/view — flag as a known limitation when using this module)

---

## Navigation

[← Back to Module Index](https://avi33tbtt.github.io/Prompts/Prompts.html)
