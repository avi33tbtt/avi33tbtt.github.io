# Module ARC — Adversarial Case Record Audit

**Objective:** Run a full-record, devil's-advocate audit against a case — narrative, shared link, EMR export, or a live EMR feed — to actively argue against the working diagnosis/plan, surface unstated negative constraints, and log the "why I might be wrong" exchange as part of the teaching artifact, rather than leaving it a private aside.

**Indication:** Use any time a working diagnosis or management plan exists and you want the AI to stress-test it instead of confirm it — bedside, on rounds, during a case conference prep, or as a standing habit before closing a case.

**Validated Environment:** Not yet validated live — proposed module, case-report/expert-opinion level (see [Evidence Base](https://avi33tbtt.github.io/Prompts/Prompts.html#evidence-base)).

> [!IMPORTANT]
> De-identified data only. All outputs are **learning observations**, not clinical decisions — see the [Disclosure Statement](https://avi33tbtt.github.io/Prompts/Prompts.html#disclosure-statement). Nothing here is entered into a real record without independent clinician review.

---

## Lifecycle

Phase 1 · Intake → Phase 2 · Adversarial Execution (full-record) → Phase 3 · Closure / Log

The four intake tracks in Phase 1 are entry points, not separate modules — pick the one matching your source, then continue into the same Phase 2 steps regardless of which track you used.

---

## Phase 1 · Intake — Load the full case record

### Step ARC.0a: Narrative Intake

**Prompt:**
```
#VibeRounds You are my adversarial case reviewer, not my confirming
assistant. I am about to give you a case narrative. Before any critique,
read it and confirm back: (1) working diagnosis as I've framed it, (2)
every positive finding, (3) every negative/ruled-out finding I stated, (4)
anything that reads like an assumption rather than a documented fact. Do
not critique yet — just confirm your reading. [paste narrative]
```

### Step ARC.0b: Link Intake

**Prompt:**
```
#VibeRounds I'm sharing a link to a case record. Open it, extract the full
case as written — history, exam, investigations, medications, progress
notes, and any stated diagnosis or plan. Confirm back what you extracted
and flag any section that looks incomplete or unreadable before we
proceed. [paste link]
```
> [!NOTE] **Application Note:** If the platform cannot fetch the link directly, paste the rendered page text instead — do not let the model guess at unseen content.

### Step ARC.0c: EMR Export Intake

**Prompt:**
```
#VibeRounds This is a raw EMR export (may include structured fields, free
text, timestamps, and non-clinical boilerplate). Parse it into: (1)
demographics/context, (2) chief complaint, (3) full history including
negatives, (4) exam findings, (5) investigations with values and dates,
(6) medications with doses/timing, (7) progress/nursing notes
chronologically, (8) stated diagnosis and plan if present. Flag any field
that is empty, contradictory, or duplicated across the export. [paste EMR
export]
```
> [!NOTE] **Application Note:** Exports are often noisy — treat step 1 as a cleaning pass, not an audit pass. Do not let the model draw clinical conclusions yet.

### Step ARC.0d: EMR + LLM Real-Time Audit Intake

**Prompt:**
```
#VibeRounds We are running a live audit alongside active documentation.
Treat this session as continuous: each time I paste a new entry (vitals,
order, note, result), append it to your working record of this case rather
than treating it in isolation. After each addition, tell me in one line
whether it changes, supports, or is neutral to the current working
diagnosis — and whether it opens or closes any negative constraint. [paste
first entry; more will follow]
```
> [!NOTE] **Application Note:** This track is for a live/streaming session with a single running context. Re-paste the full accumulated record periodically to guard against context loss on long sessions.

---

## Phase 2 · Adversarial Execution — Full-record devil's-advocate audit

These steps run against the *whole* record from Phase 1, not just the presenting complaint. Work them in order; do not skip to Step ARC.5 without the preceding steps — premature closure is exactly what this module exists to prevent.

### Step ARC.1: Strongest Competing Differential

**Prompt:**
```
#VibeRounds Do not evaluate whether my working diagnosis is right. Instead:
what is the single most serious diagnosis that would still explain the
findings in this full record, and what specific evidence — already present
or still needed — would rule it out? Argue for it as if you had to defend
it to a skeptical senior, not as a hedge.
```

### Step ARC.2: Unstated Negative Constraints

**Prompt:**
```
#VibeRounds Scan the full record for what has NOT been ruled out — findings,
labs, or history items that are absent from the record but would be
necessary to safely exclude the top 3 differentials. List each missing
negative explicitly (e.g. 'no documented D-dimer/CT to exclude PE' rather
than 'consider PE'). Do not credit the case for ruling something out unless
it is actually documented.
```

### Step ARC.3: Anchor & Premature-Closure Detection

**Prompt:**
```
#VibeRounds Identify anywhere in this record where the diagnosis or plan
appears to have anchored early — i.e. later entries stop actively
questioning the working diagnosis even though new data arrived. Quote the
point (by section/date) where inquiry seems to have narrowed prematurely,
and tell me what question should have been re-asked at that point.
```

### Step ARC.4: Full-Record Consistency Sweep

**Prompt:**
```
#VibeRounds Sweep the entire record — history, exam, investigations,
medications, and every progress note — for internal contradictions: a
symptom documented as absent early and present later without comment, a
medication started with no matching indication, a value that doesn't match
the trend around it, or an intervention with no follow-up documented
outcome. List each contradiction with its location. Do not resolve them —
just surface them.
```

### Step ARC.5: Iatrogenic & Polypharmacy Cross-Check

**Prompt:**
```
#VibeRounds Given the full medication list and the timeline of new findings
in this record, could any of the current clinical picture be iatrogenic —
caused or worsened by a prior intervention, drug interaction, or
polypharmacy — rather than the underlying disease progressing? Argue this
possibility explicitly even if it seems unlikely, then tell me what single
piece of missing data would confirm or refute it.
```

### Step ARC.6: Falsification Loop (Resist Final Answer)

**Prompt:**
```
#VibeRounds Do not give me a final answer. Instead, return me to the
falsification loop: state the current working diagnosis as a hypothesis,
then ask me the single next question whose answer would most change our
confidence in it — either way. Wait for my answer before asking the next
one. Stop only when I say 'close the loop.'
```
> [!NOTE] **Application Note:** This step is intentionally Socratic and can repeat several times — see [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) for the underlying pattern.

---

## Phase 3 · Closure / Log — Make the adversarial exchange part of the record

### Step ARC.7: Adversarial Audit Summary

**Prompt:**
```
#VibeRounds Produce a final Adversarial Audit Summary for this case record:
(1) working diagnosis as stated, (2) strongest competing diagnosis and
what would rule it out, (3) top 3 unstated negative constraints, (4) any
anchoring point identified and when it occurred, (5) any unresolved
internal contradiction, (6) one specific next action that would most
reduce diagnostic uncertainty. End with one sentence starting: 'This
diagnosis could still be wrong because...'
```

### Step ARC.8: Teaching-Artifact Log Entry

**Prompt:**
```
#VibeRounds Format the full adversarial exchange from this session (Steps
ARC.1 through ARC.7) as a single dated log entry suitable for appending to
the case record as a teaching artifact — not a clinical order. Structure
it as: date/session tag, reviewer role ('AI adversarial reviewer —
educational, not clinical'), the challenge raised, the evidence
found/missing, and the resolution or open question at close. Keep it under
250 words.
```
> [!NOTE] **Application Note:** This log entry is the artifact referenced in the source article — it makes 'why I might be wrong' part of the teaching record, not a private aside. It is a learning log, not a clinical note, and is not for entry into a real chart without clinician review.

---

## Related Modules & Frameworks

- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) (falsification-loop pattern, Step ARC.6)
- [Module 5 — Real-Time Case Review & Data Audit](https://avi33tbtt.github.io/Prompts/Module-05-Real-Time-Case-Review-and-Data-Audit.html) (data anomaly flagging, complements Step ARC.4)
- [Module 26 — Bias Auditing](https://avi33tbtt.github.io/Prompts/Module-26-Bias-Auditing.html) (anchoring/premature closure, complements Step ARC.3)
- [Module 42 — Clinical Pre-Mortem](https://avi33tbtt.github.io/Prompts/Module-42-Clinical-Pre-Mortem.html) (adjacent framing, run before a plan is finalized rather than against a full record)
- [Module 49 — FMEA Analysis](https://avi33tbtt.github.io/Prompts/Module-49-FMEA-Analysis-and-Insights.html) (systems-failure framing, complements Step ARC.5)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (biases and legitimate critiques of AI-assisted reasoning)

Source article: [From "Cat" to Clinical Reasoning](https://classworkdecjan.blogspot.com/2026/08/from-cat-to-clinical-reasoning-what-llm.html)

---

*Vibe Rounds Prompt Modules — Module ARC.* [← Back to README](https://avi33tbtt.github.io/Prompts/)
