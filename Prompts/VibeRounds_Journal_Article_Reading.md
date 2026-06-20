[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Vibe Rounds — Journal & Article Reading

*Five reusable prompt setups for digesting a medical article with AI — not as a quiz, but as a knowledge absorption tool*

> **Disclaimer:** All AI-generated appraisal outputs — including effect-size interpretations, bias ratings, and applicability assessments — require independent verification before clinical adoption. These prompts are learning tools, not clinical decision aids.

---

## What this is for

Reading a paper and retaining nothing beyond the headline result is the default failure mode of medical literature reading. These prompts flip the AI's role: instead of testing whether you understood the paper, **the AI does the intellectual processing** — translating statistics, mapping findings onto a patient, surfacing what the paper does not say — so you leave with layered understanding that sticks.

Five versions are provided, from a quick single-run digest to a deep multi-layer appraisal session. All work with any article — paste the abstract, paste the full text, or paste a link to a publicly accessible page.

---

## Version 1 — Plain-Language First Read

Use this when you have just picked up a paper and want to understand what it is actually saying before reading the methods in detail. The AI reads the article and gives you a human-readable explanation — no statistics yet, no jargon, just the clinical story.

### Prompt Template

```
#VibeRounds I am going to give you a medical journal article. Read it and
give me a plain-language explanation of: (1) the clinical problem being
studied and why it matters, (2) what the researchers did and why they
chose that approach, (3) what they found — in one or two sentences, no
statistical notation, (4) why a clinician should care about this finding.
Write it the way you would explain it to a colleague in the corridor who
has not read the paper. [paste article, abstract, or link]
```

*Best for: first encounter with an unfamiliar paper, pre-reading before journal club, or orienting yourself before going deeper.*

---

## Version 2 — Full Evidence Digest (Single Run)

Use this when you want to go beyond the headline and actually understand what the paper is worth. The AI runs through the whole evidence chain in one pass: what the study did, what the numbers mean in clinical terms, what could be wrong, and what it means for practice. You read the output and absorb it.

### Prompt Template

```
#VibeRounds Read this article and give me a full evidence digest in the
following layers — do not skip any:

1. Study design in plain English — what type of study, what it means for
   evidence strength, and one key methodological limitation stated as a
   practical note (not a textbook caveat list).

2. The main result in clinical language — what the effect measure means
   in words, what the confidence interval tells me about uncertainty as a
   practical range, and whether the effect size is clinically meaningful
   separate from whether it is statistically significant. If an NNT is
   calculable, give it.

3. Bias map — the two most likely sources of bias in this study, which
   direction each probably pushed the result, and your bias-adjusted read
   of how reliable the main finding is.

4. What the paper does not say — the two most important clinical questions
   this paper raises but cannot itself answer.

5. Practice implication — one specific, patient-type-anchored sentence on
   what this evidence changes or supports in clinical practice, and one
   sentence on what it does not change. Be direct, not hedged.

[paste article, abstract, or link]
```

*Best for: structured independent reading, building an evidence summary before a clinical decision, or preparing a journal club presentation efficiently.*

---

## Version 3 — Patient-Anchored Reading

Use this when you have a real patient in mind — or a de-identified case log from an active patient — and you want to know what a paper actually means for that person specifically. The AI reads the article and the case together and tells you directly whether the evidence supports, challenges, or is silent on the decisions you have made.

### Prompt Template

```
#VibeRounds I am going to give you a medical article and a patient case.
Read both together.

First, tell me: what specific clinical question does this article raise
for this patient? Is there anything in the paper that directly bears on a
decision that has already been made in this case — and if so, does the
evidence support, challenge, or remain silent on that decision? Be direct.

Then tell me: would this patient have been eligible for enrolment in this
study? If not, what does that exclusion mean for whether I can apply this
paper's finding to their care?

Finally, give me one sentence — a plain-language recommendation for the
next clinical decision point for this patient, based on what this paper
does and does not show.

Article: [paste article, abstract, or link]

Patient: [paste de-identified case details — diagnosis, key history,
current management, the specific decision or question you are facing]
```

> **Note:** Use de-identified data only. Remove name, date of birth, hospital number, and any other identifying detail before pasting.

*Best for: evidence-based case review, ward-based reading, post-round literature lookup, or Module 5 case audit sessions.*

---

## Version 4 — Layered Deep Read (Multi-Step)

Use this when you want maximum absorption from a paper — the equivalent of a thorough journal club prep session compressed into a structured AI-assisted workflow. Run each step in sequence in the same conversation, building depth with each layer.

### Step 1 — Load and orient

```
#VibeRounds You are a clinical knowledge companion. I am going to work
through a medical article with you in layers. Start by reading the paper
and giving me a plain-language summary — what the study did, what it
found, and why it matters clinically. Do not give me the methods or
statistics yet. [paste article, abstract, or link]
```

### Step 2 — Methods and population

```
#VibeRounds Now go deeper into the methods. Tell me: who the participants
were and whether they represent patients I typically see, exactly what
was done to them and to the comparator group, what outcome was measured
and why that outcome was chosen, and the single most important
methodological limitation for everyday clinical use — stated practically,
not as an academic caveat.
```

### Step 3 — Statistics in clinical language

```
#VibeRounds Now translate the main statistical result for me. What is the
effect measure, what does it mean in words, what does the confidence
interval tell me as a practical range of uncertainty, and is the effect
size clinically meaningful — separate from statistical significance?
If there is a secondary outcome that tells a different story from the
primary, flag it.
```

### Step 4 — Bias and what could be wrong

```
#VibeRounds Now play devil's advocate. Tell me the two most likely sources
of bias in this study, which direction each probably pushed the result,
and your honest overall read of how much I should trust this finding given
the methodology. Then tell me the two most important questions this paper
leaves unanswered — and whether existing evidence elsewhere fills those
gaps.
```

### Step 5 — Bloom's and FLINK integration

```
#VibeRounds Apply two frameworks to this article as a teaching object:

Bloom's Taxonomy — give me: (1) the two facts I must remember, (2) the
conceptual insight beyond the result, (3) the clinical scenario where I
would use this finding, (4) one sentence I could add to a local guideline
based on this evidence, and for which patient type exactly.

Fink FLINK — give me: (1) what I now know that I did not before,
(2) what I will do differently at the bedside, (3) how this connects to
something I already know, (4) what this means for the experience of being
this patient, (5) any value conflict or ethical tension this evidence
activates, (6) what this paper teaches me about how to read the next
paper on this topic more efficiently.
```

### Step 6 — Crystallisation summary

```
#VibeRounds Produce a Knowledge Crystallisation Summary for this article:

The finding in one sentence: [plain language, no jargon]
Who it applies to: [specific patient profile]
Effect in clinical terms: [NNT / ARR / practical magnitude — not raw statistics]
Strongest caveat: [single most important limitation]
What it changes in practice: [specific, patient-type-anchored]
What it does not change: [equally specific]
Biggest remaining gap: [one unanswered question]
Best next read: [one specific type of paper or guideline to pursue before acting]
```

*Best for: journal club preparation, building a personal evidence library, or deep reading of a high-stakes paper before a clinical decision.*

---

## Version 5 — Article Read From a Link, Patient-Staged

Same layered digest as Version 4, but built directly from a published case report or research article at a URL — and staged against a patient case you provide. The AI fetches the article, builds the evidence digest layer by layer, and presses each layer against your patient at the relevant step.

### Prompt Template

```
#VibeRounds I am going to work through a published article with you,
pressed against a patient case I will provide. Fetch and read the article
at this URL: [PASTE LINK HERE — must be publicly accessible, e.g. PubMed
Central, open-access journal, or preprint server. Content behind logins
cannot be fetched.]

Here is my patient: [paste de-identified case details]

Work through the following layers in sequence — one at a time, pausing
after each so I can read before you continue:

Layer 1 — Plain-language summary of what the paper did and found.
Then: what specific clinical question does this article raise for my
patient?

Layer 2 — Methods and population.
Then: would my patient have been eligible for enrolment in this study?
What does that mean for applying this finding to their care?

Layer 3 — Statistics in clinical language.
Then: does this effect size change anything about the management of my
patient?

Layer 4 — Bias and gaps.
Then: what is the strongest counter-argument against applying this
finding to my patient specifically?

Layer 5 — Knowledge Crystallisation Summary.
Then: one plain-language sentence I could say to my patient about what
this research means for their care.

After completing all five layers, flag one further reading step before
I act on this evidence.
```

> **Note:** Publicly accessible sources only — PubMed Central, open-access journals, preprints (medRxiv, bioRxiv). Paywalled content cannot be fetched.

*Best for: evidence-based ward rounds, post-call reading on a specific clinical question, or preparing to discuss evidence with a patient.*

---

## Quick Reference

| Version | What the AI does | Best for |
|---|---|---|
| 1 — Plain-language first read | Summarises article in human language | First encounter with a paper |
| 2 — Full evidence digest | One-pass: design, stats, bias, practice implication | Independent reading, journal club prep |
| 3 — Patient-anchored reading | Presses article against your patient directly | Ward-based evidence lookup |
| 4 — Layered deep read | Six sequential steps building depth | Maximum absorption, high-stakes papers |
| 5 — From link, patient-staged | Fetches article + presses each layer against patient | Evidence-based case review from a URL |

---

## A note on what these prompts are not

These are **not** question-and-answer sessions. The AI does not quiz you, wait for your answer, or withhold information until you perform. The AI's job in this demo is to do the heavy processing — translating, mapping, surfacing, crystallising — so that you read the output and build understanding. If you want Socratic-mode article reading (where you are asked to reason before the AI reveals anything), that is a different use case better served by [Module 1](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) applied to an article-based case.

---

*Vibe Rounds — A Socratic AI Paradigm for Clinical Medicine · Dr. Avinash Kumar Gupta · June 2026*

[← Back to README](https://avi33tbtt.github.io/Prompts/)
