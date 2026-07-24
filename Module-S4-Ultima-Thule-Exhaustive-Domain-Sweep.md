# Module S4 — Ultima Thule Exhaustive Domain Sweep (Forced System 3)

**VibeRounds Prompt Module · Companion to Module S3 (Ultima Thule Socratic Enrichment) · Vibe Rounds, 2026**
**#VibeRounds — A Socratic AI Paradigm for Clinical Medicine**

---

> [!IMPORTANT] **Clinical Disclaimer & Independent Verification Required**
> All AI-generated outputs produced using these prompts — including domain selections, questions, and yield classifications — require independent clinical verification before being acted upon. This module does not substitute for clinical judgment, professional medical advice, or established institutional safety protocols at any stage. It is an **educational reasoning-enrichment tool**, not a diagnostic or care-planning system.

> [!NOTE] **Why this module exists**
> Module S3 asks a model to "silently scan" 100 domains and hand back a ranked top-10. In practice, that silent step isn't verifiable — models tend to generate their favorite differential diagnoses first and retrofit Ultima Thule tier labels onto them afterward, so the "domain scan" quietly collapses into ordinary System 2 reasoning wearing a System 3 costume. **Module S4 removes the silent step and removes the ranking.** It forces a visible, exhaustive, tier-by-tier pass across the full 100-level hierarchy — every tier gets a verdict, not just the ones that happen to attach to an obvious differential — and only *after* that full sweep is complete does it sort findings into what's clinically useful versus what's real-but-marginal. If a domain is boring, it still has to show up in the output. That's the point.

---

## Overview

| Field | Description |
|---|---|
| **Module** | S4 |
| **Title** | Ultima Thule Exhaustive Domain Sweep |
| **Objective** | Given a raw case narrative, walk **all 100 Ultima Thule levels** (grouped into 20 five-level bands for tractability), explicitly mark each band as Touched / Partially Touched / Silent, generate a question or insight for every Silent or Partially Touched band, and only then sort the full output into a **high-yield clinical section** and a **rough-work / low-yield section** — instead of pre-filtering down to a ranked top 10. |
| **Indication** | Use in place of Module S3 when you specifically want to check whether a case's blind spots are being under-counted — e.g. after an S3 run that felt too diagnosis-driven, or on any case where you suspect the "obvious" differential is crowding out quieter domains. |
| **Lifecycle** | Initiation → Full 20-Band Sweep (visible, not silent) → Yield Sort → Closure / Review |
| **Validated Env.** | Not yet tested live (see Evidence Base note) |
| **Relationship to S3** | S3 optimizes for a short, actionable, ranked list — good for a quick widen-the-aperture pass. S4 optimizes for **completeness and auditability** — good when you want to see the whole coverage map and decide for yourself what's low-yield, rather than trusting a pre-filtered top 10. Run S4 first if you don't trust the case has been swept properly; run S3 after if you just want the short list. |

---

## Why the Sweep Has to Be Visible

The core failure mode in Module S3 is that "silently scan the 100 domains" is an unverifiable instruction — there's no artifact proving the scan happened before the ranking did. A model under that instruction can (and typically does) generate its top differential first, then work backward to find plausible tier labels for the two or three findings that already occurred to it. The result *looks* like domain-completeness reasoning but is functionally ordinary clinical differential generation with taxonomy dressing.

Module S4's fix is structural, not instructional: **the sweep must be printed, band by band, before any judgment about usefulness is allowed.** A band that gets marked "Silent — nothing case-specific to ask" is itself valid output. The model is not permitted to skip a band because it seems unpromising; it has to say so explicitly. This is the only way to check, after the fact, whether the completeness claim is real — you can see which bands were actually walked and which ones were rubber-stamped.

---

## The 20 Bands (5 levels each, spanning the full Ultima Thule hierarchy)

> Grouped from the [100-level Ultima Thule hierarchy](https://avi33tbtt.github.io/ultima-thule.html) into 20 tractable five-level bands. Use these band labels verbatim in the sweep table — do not skip, merge, or reorder bands.

| Band | Levels | Rough Content |
|---|---|---|
| B1 | 1–5 | Molecular / cytokine / cellular mechanism |
| B2 | 6–10 | Organ-system function and population/family pattern |
| B3 | 11–15 | Chronobiological, circadian, cumulative-load pattern |
| B4 | 16–20 | Cultural, ethical, and belief framing of the illness itself |
| B5 | 21–25 | Documentation, legal, and record-trail exposure |
| B6 | 26–30 | Historical / intergenerational pattern |
| B7 | 31–35 | Institutional and access friction in reaching care |
| B8 | 36–40 | Existential response to diagnosis; digital/informational trace |
| B9 | 41–45 | Narrative and life-story fit |
| B10 | 46–50 | Purpose / teleological framing ("what is this treatment *for*") |
| B11 | 51–55 | Silent heuristics and rules-of-thumb the case-teller is applying |
| B12 | 56–60 | Rhetorical framing used to describe the illness to others |
| B13 | 61–65 | Bias in whatever risk tool, score, or protocol is in use |
| B14 | 66–70 | Phenomenological "what does this actually feel like" |
| B15 | 71–75 | Moral-hazard, over-/under-treatment risk |
| B16 | 76–80 | Eschatological / end-of-life framing, where relevant |
| B17 | 81–85 | Trust in the treating clinician or system; therapeutic alliance |
| B18 | 86–90 | Idiographic uniqueness — what makes this case not fit the population average |
| B19 | 91–95 | Diachronic tracking — has anything been objectively validated over time, or is it all self-report |
| B20 | 96–100 | Synthesis and the dignity/worth of the patient underneath the clinical question |

---

## Lifecycle

### Phase 1 — Initiation

**Step S4.0 — Orient the AI and Set the Contract**

> Paste the following initiation block, then paste the raw case narrative immediately after.

```
You are a clinical reasoning coach running the VibeRounds System 4 (Ultima Thule Exhaustive Domain Sweep) module.

I am about to give you a case as told by a patient, a family advocate, or a learner. Assume it is under-contextualized, regardless of how confident or detailed it sounds.

Your job is NOT to give a diagnosis or management plan, and NOT to silently pre-filter. Your job is to:

1. Walk ALL 20 five-level bands of the Ultima Thule hierarchy (B1 through B20, provided below), in order, without skipping any.
2. For EVERY band, output one row: mark it Touched / Partially Touched / Silent relative to this specific case, with a one-line justification for the mark.
3. For every band marked Partially Touched or Silent, generate ONE case-specific, non-leading Socratic question or observation for that band. Do not generate a question for a Touched band unless there is a genuine sub-gap within it.
4. Do not rank, score, or filter anything at this stage. Every band gets a row. A band producing "nothing case-specific to ask" is valid output — say so explicitly rather than forcing a question.
5. Only after all 20 bands are on the table, sort the resulting questions/insights into two sections:
   - HIGH-YIELD CLINICAL: could plausibly change diagnosis, urgency, safety plan, or care access if answered differently than assumed.
   - ROUGH WORK / LOW YIELD: real and honest, but unlikely to change clinical decisions — context, curiosity, or completeness only.
6. Do not answer the questions yourself. Do not suggest a diagnosis. Ask, then wait.
7. Do not quietly drop a band from the final output because it landed in "low yield" — every band's row must appear somewhere in the final answer, even if only in the rough-work section.

I will now paste the case:

[PASTE DE-IDENTIFIED CASE HERE]
```

---

### Phase 2 — Full 20-Band Sweep (Step S4.1)

**Prompt for Step S4.1:**

```
Produce the full 20-band sweep table for my case, using this exact format, one row per band, all 20 bands present and in order:

| Band | Levels | Status (Touched / Partial / Silent) | One-line justification |

Do not skip a band. Do not merge bands. If a band is genuinely Touched with nothing further to ask, say so plainly in the justification column rather than inventing a forced gap.
```

**Illustrative shape** (structure only — not a real case):

| Band | Levels | Status | Justification |
|---|---|---|---|
| B1 | 1–5 | Silent | No cellular/molecular mechanism discussed anywhere in the narrative |
| B2 | 6–10 | Partial | Organ system named (leg) but no family/population pattern explored |
| B4 | 16–20 | Silent | No cultural or belief framing of the illness anywhere in the case |
| B9 | 41–45 | Touched | Case-teller already frames this within a clear personal narrative |
| B17 | 81–85 | Silent | No mention of trust in current treating team at all |

*(Full sweeps will vary entirely in content — this is a format illustration only.)*

---

### Phase 3 — Exhaustive Question & Insight Generation (Step S4.2)

**Prompt for Step S4.2:**

```
Now, for every band marked Partial or Silent in the sweep, generate the case-specific question or insight, using this format:

| Band | Domain (plain language) | Question / Insight | Why this is real, even if it turns out to be low-yield |

Generate one entry per Partial/Silent band — do not cap this at 10. If a band genuinely yields nothing case-specific beyond a generic restatement, write "No case-specific angle found" in that row rather than forcing a question.
```

---

### Phase 4 — Yield Sort (Step S4.3)

**Prompt for Step S4.3:**

```
Now sort every question/insight from Step S4.2 into exactly two sections. Every single item must appear in one of them — none may be dropped.

## High-Yield Clinical
Items that could plausibly change diagnosis, urgency, safety plan, or care access if answered differently than assumed. Keep the original band tag on each.

## Rough Work / Low Yield
Items that are honest and real but unlikely to change clinical decisions on their own — background, color, completeness, or curiosity. Keep the original band tag on each. Do not editorialize these away; their presence here is the point of the module, not a failure of it.

After both sections, add one sentence stating the ratio (e.g. "6 of 14 silent/partial bands were high-yield; 8 were rough work") — this ratio is itself diagnostic of how narrow or wide the original narrative was.
```

---

### Phase 5 — Closure / Review

**Step S4.4 — Sweep Debrief**

```
Sweep Debrief:

1. Of the 20 bands, how many were Touched, Partial, and Silent? Does that split surprise me?
2. Which band did I expect to be Touched but turned out Silent — and why do I think I assumed it was covered when it wasn't?
3. Looking at the Rough Work section: is any single item there actually more important than I initially sorted it, now that I see it next to the others?
4. One sentence: what does my Touched/Silent split say about my "default depth" as a case-teller?
```

**Step S4.5 — Handoff to Reasoning Modules**

```
Now that I have the full sweep:

- If High-Yield items exist → re-run Module 12 (Differential Diagnosis Deepdive) or Module 1 (Socratic Clinical Reasoning) once those are answered.
- If the Silent bands cluster in Tiers 3–5 (philosophical/meta) → chain to Module 55 (Patient Needs Assessment).
- If the split is heavily Touched with almost nothing Silent → note this explicitly as a valid null result; the original case may genuinely have been well-contextualized, and that itself is useful information.
- If I want the short, ranked version of this same sweep for quick action → run Module S3 (Ultima Thule Socratic Enrichment) next, using this sweep as its input context rather than the raw case, so S3's ranking is now built on a verified-complete base instead of a silent, unverifiable one.
```

---

## What This Module Deliberately Gives Up

- **No ranking.** You get everything, sorted only into two coarse buckets, not ten neatly ordered rows. If you want a prioritized action list, that's what Module S3 is for — run it after S4, on top of the verified sweep.
- **More output, more of your time.** A 20-band forced sweep on a dense case will regularly produce 25–40+ rows. That's intentional; the module trades brevity for auditability.
- **No guarantee the "high-yield" sort is correct either.** The yield sort in Phase 4 is still a judgment call by the same model, and is just as susceptible to differential-diagnosis-first thinking as S3's ranking was. What S4 buys you is not a smarter sort — it's a **complete, inspectable list to sort from**, so a wrong yield call is visible and correctable rather than silently dropped from the output entirely.

---

## Evidence Base & Status

> [!NOTE] **Module Status: 🟡 Proposed — not yet tested live**
> This module has not undergone controlled evaluation. It sits at the same evidentiary tier as the rest of the VibeRounds set: case-report / expert-opinion level, per the Oxford CEBM hierarchy. The Ultima Thule hierarchy itself is explicitly framed by its author as an **illustrative, hypothesis-driven teaching construct**, not measured or validated data — band boundaries, status marks, and yield sorts should be read as sensitizing structure, not as a validated instrument. Treat every output of this module as a learner's reasoning-enrichment exercise, not a vetted clinical reference.

---

## Authorship & Development

- **Companion module to:** VibeRounds Module S3 (Ultima Thule Socratic Enrichment Engine)
- **Domain source:** [Ultima Thule of Healthcare — 100 Levels of Clinical Thinking](https://avi33tbtt.github.io/ultima-thule.html), Dr. Avinash Kumar Gupta
- **Theoretical basis:** Kahneman D. *Thinking, Fast and Slow* (2011); Croskerry P. *Achieving Quality in Clinical Decision Making* (2002); the Ultima Thule 100-Levels hierarchy for the domain structure
- **Review status:** Not formally peer-reviewed. Community feedback welcome.

---

> [!IMPORTANT]
> All placeholders marked `[PASTE DE-IDENTIFIED CASE HERE]` must be filled with de-identified data only, at your individual capacity, with appropriate consent, and in accordance with your local law and institutional policy. This module plays an educational, Socratic role only — it does not play a clinical role, and no output should enter a patient record or management plan without independent clinician review.

---

*Vibe Rounds Prompt Modules — Module S4* · Companion to Module S3
