# Module RPG — Research ↔ Clinical Practice Gap Finder

**Objective:** Have the AI act as an implementation-science-literate analyst that takes a real case (or a small case series) and systematically surfaces every point where what the published evidence recommends diverges from what was actually done — and, just as importantly, why that divergence may or may not have been reasonable. Where [Module 45 — Evidence-Based Medicine Insights](https://avi33tbtt.github.io/Prompts/Module-45-Evidence-Based-Medicine-Insights.html) rates the certainty of a single piece of evidence, and [Module 53 — Clinical Guideline Intelligence Navigator](https://avi33tbtt.github.io/Prompts/Module-53-Clinical-Guideline-Intelligence-Navigator.html) navigates a guideline on its own terms, Module RPG's job is comparative: line up the case timeline against the evidence base for each decision point and name the gap — evidence-practice gap, practice-ahead-of-evidence gap, or no gap at all — without assuming the guideline is automatically right or the clinician was automatically wrong.

**Indication:** Any moment a learner, patient advocate, or auditor wants to know *where* a specific case's management diverged from what the literature or guidelines would suggest, *how large* that divergence is, and *whether it is defensible* given the patient's specific circumstances, resource setting, or evolving evidence at the time. Useful for case-based learning, morbidity & mortality style review, journal-club-to-bedside translation exercises, and quality-improvement audits of a single case or small registry.

**Status:** 🟡 Draft — authored in the Vibe Rounds module format, not yet validated against a live cohort.

**Design orientation:** This module treats "gap" as a *finding to characterise*, not a verdict to hand down. Three explicit gap types are tracked throughout: (1) **evidence-practice gap** — the evidence recommends X, the case did Y, and no good reason for the divergence is documented; (2) **defensible-deviation** — the case did Y instead of X, but a stated or inferable clinical reason (comorbidity, resource constraint, patient preference, contraindication) explains it; (3) **practice-ahead-of-evidence** — the case did something the evidence base has not yet caught up to (emerging technique, off-label use with reasoning, or a genuinely under-researched scenario). Forcing every divergence into one of these three buckets — rather than a single undifferentiated "gap list" — is what keeps the output usable for learning instead of just being a list of things that look wrong in hindsight.
> [!IMPORTANT] **Clinical Disclaimer.** This module produces educational gap-analysis output, not a clinical audit finding or a judgement on any clinician's care. Every "gap" identified here is a **learning observation** about a mismatch between a documented evidence base and a documented case timeline — not a conclusion that care was substandard, and not something to enter into any real QI, M&M, or personnel record without independent review by a supervising clinician and, where relevant, your institution's formal QI process.
> [!NOTE] **Authorship note.** This module is a draft written in the Vibe Rounds module format and is not part of the official avi33tbtt.github.io/Prompts repository.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Frame the case and the evidence baseline

### Step RPG.0: Session Setup & Analyst Framing

**AI Mode:** Traditional

**Prompt:**
```
#VibeRounds You are an implementation-science-literate analyst. I am
going to give you a de-identified case timeline, and your job is to help
me find every point where the documented evidence base and the
documented case management diverge. For each divergence you find, sort
it into exactly one of three buckets: (1) Evidence-Practice Gap — the
evidence recommends X, the case did Y, no documented reason explains it;
(2) Defensible Deviation — the case did Y, but a stated or inferable
clinical reason justifies departing from X; (3) Practice-Ahead-of-
Evidence — the case did something reasonable that the evidence base
simply has not caught up to yet. Do not default to assuming a divergence
is a problem — some of the most important findings will be reasonable
deviations or areas where practice is ahead of the literature. Confirm
you understand, then ask me to paste the case timeline.


```
> [!NOTE] **Application Note:** Naming all three buckets in the very first prompt is the module's central safeguard. An AI asked only to "find gaps" will over-flag every deviation as a problem — this is a well-documented failure mode of naive gap-analysis prompting. Establishing the three-way sort before any case data is seen forces genuine differentiation rather than a uniform list of complaints.

### Step RPG.1: Case Timeline Intake & Decision-Point Extraction

**AI Mode:** Traditional

**Prompt:**
```
#VibeRounds Here is the case: [paste de-identified case timeline —
presentation, key findings, decisions made, interventions given, and
outcomes]. First, without judging anything yet, extract a clean numbered
list of every distinct clinical decision point in this case — each
moment where a diagnostic, therapeutic, monitoring, or disposition choice
was made. For each decision point, state: what was decided, when
(relative to presentation), and what information was available to the
decision-maker at that moment. Do not yet compare anything to evidence —
this step is pure extraction.


```
> [!NOTE] **Application Note:** "What information was available at that moment" is load-bearing. A gap analysis run with hindsight knowledge the treating team did not have at the time is not a fair comparison — it is Monday-morning quarterbacking. Anchoring each decision point to the information horizon at the time it was made is what keeps later steps honest.

### Step RPG.2: Evidence Baseline Selection per Decision Point

**AI Mode:** Traditional

**Prompt:**
```
#VibeRounds For each decision point you extracted, tell me what the
current evidence base would recommend — cite the specific guideline,
landmark trial, or systematic review you are drawing on, and its
approximate CEBM evidence-hierarchy level (1a highest to 5 lowest). If
more than one guideline or evidence source gives conflicting guidance for
a decision point, say so explicitly rather than picking one silently. If
no adequate evidence exists for a decision point, say that too — an
absent evidence base is itself an important finding, not something to
paper over with a confident-sounding answer.


```
> [!NOTE] **Application Note:** The instruction to flag conflicting guidance or absent evidence, rather than silently picking a side, exists because a fabricated sense of consensus is one of the most common and most misleading failure modes in AI-generated evidence summaries. Treat any specific guideline name, trial name, or numeric finding here as unverified until checked against the primary source.

---

## Phase 2 · Execution — Compare, classify, and weigh each gap

### Step RPG.3: Divergence Detection & Three-Way Classification

**AI Mode:** Traditional

**Prompt:**
```
#VibeRounds Now compare each decision point to its evidence baseline and
classify: does the case timeline match the evidence recommendation, or
diverge from it? For every divergence, classify it as Evidence-Practice
Gap, Defensible Deviation, or Practice-Ahead-of-Evidence per our earlier
definitions, and state your reasoning for that specific classification —
not just the label. If you are genuinely uncertain which bucket a
divergence belongs in, say so and name what additional information would
resolve the uncertainty, rather than forcing a classification you are not
confident in.


```
> [!NOTE] **Application Note:** Allowing — even inviting — an "uncertain, here's what would resolve it" answer is deliberate. A forced classification on every single divergence produces false precision; naming what's actually missing (was there a documented allergy? was the patient asked about preference? was a resource constraint charted?) is often more useful to a learner than a guessed label.

### Step RPG.4: Gap-Size & Consequence Weighting

**AI Mode:** Traditional

**Prompt:**
```
#VibeRounds For each item classified as an Evidence-Practice Gap, weigh
its actual significance: (1) how strong is the underlying evidence being
diverged from — a Grade A recommendation from a large RCT carries more
weight than an expert-opinion-level guideline; (2) how large is the
practical consequence of the divergence for this specific patient — did
it plausibly affect the outcome, or is it a process gap with no
plausible outcome link; (3) how time-sensitive was the decision — was
there realistically time to consult the evidence in the moment, or was
this an acute, seconds-matter decision. Rank the gaps from most to least
significant using these three factors, and justify the ranking.


```
> [!NOTE] **Application Note:** This step exists to prevent the classic quality-improvement trap of an undifferentiated gap list where a missed low-stakes documentation step sits next to a high-stakes missed intervention with equal visual weight. Weighting by evidence strength, consequence, and time-pressure produces a ranked list a learner can actually act on.

### Step RPG.5: Root-Cause Exploration for Evidence-Practice Gaps

**AI Mode:** Socratic

**Prompt:**
```
#VibeRounds For the highest-ranked Evidence-Practice Gap we found, walk
me through possible root causes one at a time rather than listing them
all at once — was this a knowledge gap (the evidence wasn't known),
a systems gap (the evidence was known but the system made it hard to
act on — no order set, no reminder, no resource available), a
judgement call that turned out wrong in hindsight, or something else?
Ask me what I think before offering your own view, and push back if my
first answer is a reflexive "the clinician should have known better" —
that is rarely the most useful or most accurate root cause.


```
> [!NOTE] **Application Note:** Systems-level root causes (missing order sets, absent reminders, resource unavailability) are consistently under-recognised relative to individual-knowledge explanations in informal case review — this step exists specifically to slow that reflex down and make the learner consider the systems layer explicitly, in the spirit of [Module 41 — Clinical Workflow Implementation Science](https://avi33tbtt.github.io/Prompts/Module-41-Clinical-Workflow-Implementation-Science.html).

### Step RPG.6: Practice-Ahead-of-Evidence Deep Dive

**AI Mode:** Traditional

**Prompt:**
```
#VibeRounds For anything classified as Practice-Ahead-of-Evidence, dig
deeper: is this a genuinely emerging area where the literature simply
hasn't caught up (cite the most recent evidence you're aware of, and its
recency), or is it an area where evidence actually exists but wasn't
surfaced in our earlier search — in which case it should be
reclassified? If it holds up as genuinely ahead of the evidence, tell me
what a well-designed study to test this practice would need to look at,
and whether any such study appears to be underway.


```
> [!NOTE] **Application Note:** This step guards against Practice-Ahead-of-Evidence becoming a convenient bucket for anything the AI didn't manage to find literature for. Actively re-checking whether the "ahead of evidence" label is a search failure rather than a genuine research gap keeps the classification honest.

---

## Phase 3 · Closure / Review — Consolidate the gap analysis

### Step RPG.7: Research-Practice Gap Brief (Exportable Summary)

**AI Mode:** Traditional

**Prompt:**
```
#VibeRounds Produce a Research-Practice Gap Brief for this case,
structured exactly as:

Case decision points reviewed: [count]
Evidence-Practice Gaps found: [count, ranked highest to lowest
significance, each with a one-line description and evidence source]
Defensible Deviations found: [count, each with a one-line reason]
Practice-Ahead-of-Evidence findings: [count, each with a one-line note
on evidence recency]
Highest-priority gap and why: [specific]
Most likely root cause of the highest-priority gap: [knowledge / systems
/ judgement / other, per Step RPG.5]
What this case cannot tell us: [specific — the limits of drawing
conclusions from a single case]
Confidence in this brief overall: [stated plainly, not hedged]


```

### Step RPG.8: Critical Awareness Debrief

**AI Mode:** Devil's Advocate

**Prompt:**
```
#VibeRounds Before we close, apply the Vibe Rounds Critical Awareness
lens to this gap analysis specifically: (1) Did I select an evidence
baseline that fit the case, or did I search for evidence that confirmed
a gap I already suspected? (2) Is a single case even a fair test of
whether a "gap" is systemic, or could this be one atypical instance
being over-generalised? (3) Did I, the AI, state any specific guideline,
trial, or numeric finding in this session that you have not
independently verified against a real source? Flag it explicitly if so.
(4) What is the most important uncertainty that remains genuinely
unresolved about whether this was really a gap at all?


```
> [!NOTE] **Application Note:** Question 2 exists because a single n-of-1 case-report gap analysis — this module's own evidentiary basis is exactly this level — cannot, on its own, establish that a divergence is a *systemic* evidence-practice gap rather than one atypical instance. [Module 7 — Longitudinal & Cross-Case Learning](https://avi33tbtt.github.io/Prompts/Module-07-Longitudinal-and-Cross-Case-Learning.html) is the appropriate escalation path if a suspected gap needs testing across a registry rather than one case.

### Step RPG.9: Difficulty Ratchet for Next Analysis

**Prompt:**
```
#VibeRounds Based on this session, recommend the next gap-analysis skill
I should practise: extracting decision points without hindsight bias,
searching for the correct evidence baseline myself before asking for
help, distinguishing systems-level from knowledge-level root causes, or
running this same analysis across a small case series instead of one
case. Justify briefly, and give me one specific thing to practise before
our next analysis.


```

---

## Module RPG Prompt Index

| ID    | Phase      | Prompt purpose                                          | AI Mode           |
| ----- | ---------- | --------------------------------------------------------- | ------------------ |
| RPG.0 | Initiation | Analyst framing & three-bucket contract                   | Traditional        |
| RPG.1 | Initiation | Case timeline intake & decision-point extraction          | Traditional        |
| RPG.2 | Initiation | Evidence baseline selection per decision point             | Traditional        |
| RPG.3 | Execution  | Divergence detection & three-way classification            | Traditional        |
| RPG.4 | Execution  | Gap-size & consequence weighting                          | Traditional        |
| RPG.5 | Execution  | Root-cause exploration for evidence-practice gaps          | Socratic           |
| RPG.6 | Execution  | Practice-ahead-of-evidence deep dive                       | Traditional        |
| RPG.7 | Closure    | Research-Practice Gap Brief (exportable)                   | Traditional        |
| RPG.8 | Closure    | Critical awareness debrief                                 | Devil's Advocate   |
| RPG.9 | Closure    | Difficulty ratchet                                         | Traditional        |

---

## Related Frameworks & Modules

- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step RPG.8)
- [Module 45 — Evidence-Based Medicine Insights](https://avi33tbtt.github.io/Prompts/Module-45-Evidence-Based-Medicine-Insights.html) (use for rating certainty of a single piece of evidence; Module RPG compares evidence to a case timeline instead)
- [Module 53 — Clinical Guideline Intelligence Navigator](https://avi33tbtt.github.io/Prompts/Module-53-Clinical-Guideline-Intelligence-Navigator.html) (use for navigating one guideline on its own terms)
- [Module 41 — Clinical Workflow Implementation Science](https://avi33tbtt.github.io/Prompts/Module-41-Clinical-Workflow-Implementation-Science.html) (natural next step when a gap's root cause is systems-level)
- [Module 7 — Longitudinal & Cross-Case Learning](https://avi33tbtt.github.io/Prompts/Module-07-Longitudinal-and-Cross-Case-Learning.html) (escalation path if a suspected gap needs testing across a registry, not one case)
- [Module 9 — N-of-1 Case Research Protocol](https://avi33tbtt.github.io/Prompts/Module-09-Case-Research_Protocol.html) (if the case itself needs a full seven-stage research protocol rather than a gap comparison)

---

## Module Maturity

🔴 **Primitive / Draft** — Newly authored in the Vibe Rounds format, not yet tested against live cases or any LLM platform.

---

*Module RPG — Research ↔ Clinical Practice Gap Finder.* Drafted in the Vibe Rounds module format · not part of the official avi33tbtt.github.io/Prompts repository.
