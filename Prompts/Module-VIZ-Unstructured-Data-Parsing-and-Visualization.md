---
canonical: https://avi33tbtt.github.io/Prompts/Module-VIZ-Unstructured-Data-Parsing-and-Visualization.html
title: Dr. Avinash kumar gupta | Avinash Kumar Gupta
---

# [Dr. Avinash kumar gupta](https://avi33tbtt.github.io/)

[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module VIZ — Unstructured Health-Log Parsing & Visualization

**Objective:** Help a patient advocate turn loose, free-text health notes — the kind typed into a phone or a diary app — into clean, chartable entries inside the *Vibe Rounds Home Monitoring Assistant*'s **Visualize → Parse & visualize unstructured data** tool, and then read the resulting chart correctly rather than over-interpreting it.

**Indication:** Use whenever an advocate has narrative notes (not a clean table) they want turned into a trend — e.g. a running WhatsApp-style log of "weight, mood, BP" jotted down across several days — before or after they run it through the Home Monitoring Assistant's parser.

**Validated Environment:** Not yet tested against a real advocate session; proposed workflow only. Treat as a case-report/expert-opinion-level draft, consistent with the rest of this repository's evidence base.

---

> [!IMPORTANT] **What this module does not do**
> This module never assigns clinical meaning to a parsed value, never tells the advocate whether a number is "concerning," and never substitutes for the safe-range bands or guidance already built into the Home Monitoring Assistant itself. Its only job is (1) helping notes get written so the parser reads them correctly, and (2) helping the advocate describe what a resulting chart shows in plain language. Any interpretation of whether a trend matters clinically belongs to the treating team, not this module.

> [!NOTE] **Why this module exists**
> The Home Monitoring Assistant's unstructured-text parser is a heuristic, regex-based reader — it looks for patterns like `label: number unit` or `label 120/80` on their own line or clause. It cannot infer meaning from ordinary prose, cannot tell two different things called "pain" apart, and will silently miss or mis-split anything phrased unusually. This module exists to sit *around* that tool: coaching cleaner input beforehand, and a sober read of the output afterward — so the eventual chart is trustworthy rather than a coincidence of phrasing.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Prepare notes the parser can actually read

### Step VIZ.0: Advocate Onboarding for the Parser

**Prompt:**

```
#VibeRounds You are a calm, encouraging documentation companion helping a
patient advocate use a home-monitoring tool's "parse unstructured data"
feature. Explain in plain language, in three sentences or fewer, that this
feature looks for short "label: number unit" style phrases (like "Weight
70.2 kg" or "Mood 6/10") and will miss anything written as a long sentence.
Ask the advocate to paste one recent day's raw notes so you can help them
see the difference between what the parser will catch and what it will
miss — do not rewrite anything yet.
```
> [!NOTE] **Application Note:** Use once, before the advocate opens the Visualize tab for the first time.

### Step VIZ.1: Note Normalization Coach

**Prompt:**

```
#VibeRounds The advocate has shared raw notes. Rewrite each health-related
observation as its own short line in "label: value unit" form (e.g. "Weight:
70.2 kg", "Mood: 6/10", "BP: 118/76"), preserving every number exactly as
given — never estimate, round, or invent a value that was not stated.
Anything that is not a number (a symptom description, a feeling, a
sentence) should be left out of this rewritten block and listed separately
under "Not parseable as a number — keep in the Narrative diary instead."
Show the advocate both blocks side by side.
```
> [!IMPORTANT] Never let the model fill in a plausible-sounding number for something the advocate did not actually report. If a value is unclear, it goes in the "not parseable" list, not a guess.

### Step VIZ.2: Label Consistency Check

**Prompt:**

```
#VibeRounds Review the normalized notes across multiple days/entries the
advocate has prepared. Flag any case where the same thing appears to have
been logged under two different labels (e.g. "Weight" on Monday and
"Bodyweight" on Tuesday) — these will chart as two separate one-off values
instead of a single trend line. Suggest the advocate pick one consistent
label per parameter and reuse it every time, and note this once each label
choice.
```
> [!NOTE] **Application Note:** This directly addresses the parser's grouping behaviour — it groups repeated mentions into a trend only when the label text matches exactly (case-insensitive).

---

## Phase 2 · Execution — Run the parser, then audit what it caught

### Step VIZ.3: Pre-Parse Prediction Check

**Prompt:**

```
#VibeRounds Before the advocate pastes the normalized notes into the tool,
predict which lines will be caught and charted, and which (if any) still
look ambiguous to a simple pattern-matcher — for example, a blood-pressure
reading written as "BP 120 over 80" instead of "120/80". List anything you
expect the parser to miss or mis-split so the advocate can watch for it in
the output.
```

### Step VIZ.4: Post-Parse Sanity Audit

**Prompt:**

```
#VibeRounds The advocate has run the parser and pasted back the extracted
table (label, value(s), unit). Compare it line-by-line against the original
normalized notes from Step VIZ.1. Confirm: (1) every intended value appears
exactly once with the correct number, (2) no value was split, merged, or
mislabeled, (3) nothing was silently dropped. List any discrepancy as
"Check this: [label] — expected [X], tool shows [Y]." Do not comment on
whether any value looks clinically normal or abnormal.
```
> [!IMPORTANT] This step is mandatory before the advocate treats any chart as reliable. A heuristic parser will occasionally mis-split or drop an entry, and the only backstop is a human line-by-line check against the source text.

### Step VIZ.5: Trend Description in Plain Language

**Prompt:**

```
#VibeRounds Looking only at the shape of the chart the advocate describes
(e.g. "the weight line goes down for five days then flattens"), describe
what is visually happening in one or two neutral sentences — direction,
rough steadiness, and any obvious gap in dates. Do not use words like
"improving," "worsening," "safe," or "concerning," and do not compare it to
a reference range. End with: "This is a description of the shape of the
data, not a clinical read — that's for your care team."
```

---

## Phase 3 · Closure / Review — Hand the trend to the care team

### Step VIZ.6: Visualized-Trend Handover Note

**Prompt:**

```
#VibeRounds Generate a short handover note (maximum 100 words) the advocate
could show a clinician alongside the chart from the Home Monitoring
Assistant. State: which parameter, the date range covered, how many data
points, and the plain-language shape described in Step VIZ.5. Explicitly
label it "Advocate-logged, unverified data — chart generated from a
heuristic text parser." Do not offer an assessment or recommendation.
```

### Step VIZ.7: Advocate Learning Check — Reading a Heuristic Chart Critically

**Prompt:**

```
#VibeRounds Ask the advocate three short questions in sequence to check
their understanding, affirming each correct answer warmly before moving on:
(1) [Remember] What phrase format does the parser look for in a line of
text? (2) [Understand] Why might two real entries of the same thing end up
as two separate bars instead of one trend line? (3) [Apply] Before showing
this chart to a clinician, what is the one check you will always do first?
```
> [!NOTE] **Application Note:** Bloom's "Remember → Understand → Apply" applied to parser literacy, not clinical content. See [Framework C](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html).

---

## Known Parser Behaviours Worth Knowing (Reference)

| Behaviour | What it means for the advocate |
| --- | --- |
| Matches `label: number unit` or `label number unit` per line/clause | Short, one-fact-per-line notes parse far more reliably than paragraphs |
| `label 120/80` style readings auto-split into "(systolic)" / "(diastolic)" | Useful for BP, but only for genuine `x/y` number pairs — anything else with a slash may mis-split |
| Repeated identical labels (case-insensitive) are grouped into a trend line | Inconsistent labelling silently produces several one-off bars instead of one trend |
| Anything without a clear number is dropped from this parser entirely | Symptom descriptions and free narrative belong in the tool's separate Narrative diary, not this parser |
| Output is a heuristic best-effort read, never validated against the source automatically | A human line-by-line check (Step VIZ.4) is the only safeguard against silent misreads |

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (persona language throughout)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Step VIZ.7)
- [Framework D — Vibe Rounds Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (limitations of heuristic parsing, Steps VIZ.3–VIZ.4)

---

## Navigation

**Related:** [Module 3 — Extended Patient-Advocate Monitoring →](https://avi33tbtt.github.io/Prompts/Module-03-Extended-Patient-Advocate-Monitoring.html)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
