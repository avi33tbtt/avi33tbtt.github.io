# Clinical Case Learning Loop — What / Where / Do

A repeatable 3-step prompt loop for reading a clinical case and pulling out everything you need to actually learn from it: **What is the problem → Where is the problem → What can be done about it.**

Use it with any case (a vignette, a real patient summary, a textbook case, an exam question). Run the three prompts in order. Each one builds on the last.

---

## How to use this loop

1. Paste your clinical case into the chat.
2. Run **Prompt 1 (WHAT)** first. Don't skip ahead — nailing the problem definition makes the next two steps far sharper.
3. Run **Prompt 2 (WHERE)** using the output of Prompt 1 as context.
4. Run **Prompt 3 (DO)** using the output of Prompts 1 and 2 as context.
5. Optional: run the **Self-Check Loop** at the end to test what you retained.

You can run all three back-to-back in one message if you're in a hurry (combined version at the bottom), but running them one at a time forces better reasoning and retention.

---

## STEP 1 — WHAT (identify the problem)

```
Here is a clinical case:

[PASTE CASE]

Act as a clinical tutor. Help me identify WHAT the problem is, step by step:

1. Summarize the case in 2-3 sentences in plain language.
2. List the key positive findings (symptoms, signs, labs, imaging) that matter.
3. List key negative findings (relevant things that are ABSENT and why their absence matters).
4. Identify the primary problem/diagnosis being described, and 2-3 plausible differential diagnoses.
5. For each differential, give one sentence on what makes it more or less likely given this case.
6. State the single most likely "problem statement" in one sentence (e.g. "acute problem X in a patient with risk factor Y presenting with Z").

Keep it concise. Use plain language first, medical terms second (define any jargon you use).
```

---

## STEP 2 — WHERE (localize the problem)

```
Continuing with the same case and the problem statement from Step 1: [PASTE STEP 1 OUTPUT OR PROBLEM STATEMENT]

Now help me identify WHERE the problem is, step by step:

1. Anatomically: which organ/system/structure is most likely affected, and why (link findings to location)?
2. Physiologically/mechanistically: what is going wrong at the functional or pathophysiological level (e.g. ischemia, infection, obstruction, autoimmune, structural)?
3. If relevant, what level of the system is affected (e.g. pre-renal vs renal vs post-renal; upper vs lower motor neuron; central vs peripheral)?
4. What clue(s) in the case specifically point to this location (cite the specific finding)?
5. Are there any findings that argue AGAINST this location, and how do we explain them?

Keep answers grounded in the case data — don't introduce findings that weren't given.
```

---

## STEP 3 — DO (management / next actions)

```
Continuing with the same case, the problem (Step 1) and the location (Step 2): [PASTE PRIOR OUTPUTS OR SUMMARY]

Now help me figure out WHAT CAN BE DONE about it, step by step:

1. Immediate priorities: is this urgent/emergent? What must be checked or stabilized first (if anything)?
2. Confirmatory workup: what test(s) would confirm the diagnosis, in priority order, and why each one?
3. Initial management: first-line treatment or intervention, and the reasoning behind it.
4. Monitoring: what would you track to know if the patient is improving or worsening?
5. Red flags: what findings would change the plan entirely (i.e., make you reconsider the diagnosis or escalate care)?
6. One-line take-home: summarize the whole case (What/Where/Do) in a single memorable sentence I could use for spaced-repetition review.
```

---

## Self-Check Loop (optional, after all 3 steps)

```
Based on everything discussed about this case, quiz me:

1. Ask me 3 short-answer questions covering: the problem (what), the location/mechanism (where), and the management (do).
2. Wait for my answers before revealing the correct ones.
3. After I answer, tell me what I got right, what I missed, and correct any misunderstanding.
4. End with one twist on the case (e.g. a changed lab value or new symptom) and ask how my answer to "what/where/do" would change.
```

---

## Combined single-prompt version (all 3 steps at once)

Use this if you want one fast pass instead of three separate turns.

```
Here is a clinical case:

[PASTE CASE]

Act as a clinical tutor and walk me through this case using a WHAT / WHERE / DO framework:

**WHAT (the problem):**
- Plain-language summary of the case
- Key positive and negative findings
- Most likely diagnosis + 2-3 differentials, with one-line reasoning for each

**WHERE (the location/mechanism):**
- Anatomical and physiological location of the problem
- The specific findings that point to this location
- Any findings that complicate this localization

**DO (the management):**
- Immediate priorities / urgency
- Confirmatory workup, in order
- First-line management and reasoning
- What to monitor, and red flags that would change the plan

Finish with a single-sentence take-home summary I can use for review, and then quiz me with 3 short questions (one per section) before giving me the answers.
```

---

### Tips for better results
- Paste the *raw* case text rather than paraphrasing it — small details often carry diagnostic weight.
- If the case is from a textbook/exam, mention the specialty (e.g. "this is a cardiology case") so the tutor calibrates depth.
- Re-run the loop on the same case a day later using only your own answers as the "case" — this turns it into active recall.
