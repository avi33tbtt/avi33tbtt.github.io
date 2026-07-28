# NotebookLM Case-Based Analytics — Tiered by Training Level

**Purpose:** A single clinical case (uploaded to NotebookLM as your "source") queried at three escalating levels of clinical reasoning — Intern, Resident, Attending — so the same data produces depth-appropriate learning output at each stage.

---

## 0. NotebookLM Setup (do this once per case)

1. Create a new notebook. Upload the case as your source: admission note, progress notes, labs/imaging reports, discharge summary — whatever you have, de-identified.
2. Open the Chat panel. Paste the **Step 0 orientation prompt** below first, so NotebookLM grounds every later answer in the uploaded source rather than general knowledge.

**Step 0 — Source Grounding**
```
Using only the uploaded case documents as your source, confirm: (1) patient
age/sex/presenting complaint, (2) date range covered by the notes, (3)
which data types are present (history, exam, labs, imaging, medications,
progression notes), (4) any obvious gaps in the documentation. Flag
anything you infer versus anything explicitly stated in the source.
```
This mirrors the "Registry Health Check" habit of establishing what the source can and can't answer before you query it — narrow, source-grounded queries are lower-hallucination-risk than open-ended ones.

> **Note on gaps:** If a prompt below asks for something your uploaded source doesn't contain — timestamps for a lag calculation, a medication list if you only uploaded an admission note, follow-up data if the case is still open — NotebookLM should say so rather than invent it. A "not documented in source" answer is the correct output in that case, not a failed prompt. If it fills the gap anyway, treat that answer as unverified and re-check against the actual notes.

---

## 1. INTERN LEVEL — Recall, Organize, Recognize

**Cognitive aim:** Reproduce and structure what's in the chart. Build the illness script. No leaps beyond the data.

**Studio tool pairing:** After the chat prompts below, use the Studio panel's **Flashcards** and **Quiz** generators on this notebook for spaced, self-timed recall drilling on the same facts — one-click, no prompt needed.

```
From the uploaded case only: (1) Summarize the history of presenting
illness in 3 sentences. (2) List all active problems as a problem list.
(3) List all current medications with dose/route/frequency as documented.
(4) Pull out the 5 most abnormal lab or vital sign values and state the
normal range for each. (5) In one sentence each, state what a "textbook"
illness script for the leading diagnosis looks like, and note where this
case matches or deviates from it.
```

```
Quiz me: ask me one question at a time about this case's key facts (chief
complaint, timeline, vitals trend, medication list). Wait for my answer
before giving the next question. Tell me if I got it right before moving
on.
```

**Self-check:**
- [ ] Problem list and medication list match the source exactly — nothing added, nothing dropped
- [ ] Abnormal values are correctly flagged against their stated normal range
- [ ] The illness-script comparison identifies a real match or deviation, not just a restatement of the case
- [ ] No diagnosis is asserted or implied beyond what plain recall requires

---

## 2. RESIDENT LEVEL — Differential, Mechanism, Management Reasoning

**Cognitive aim:** Move from *what* to *why* and *what next*. Build and prioritize a differential; connect pathophysiology to the data; justify next steps.

**Studio tool pairing:** Generate a **Mind Map** from the notebook to visualize how each differential branches from specific findings and mechanisms — useful for spotting where two diagnoses share a root finding but diverge downstream.

```
Based only on the uploaded case: (1) Generate a ranked differential
diagnosis (top 5) with one supporting and one refuting data point for
each, drawn from the source. (2) For the leading diagnosis, explain the
underlying pathophysiological mechanism and map it to at least 3 specific
findings in this patient. (3) Identify the single most useful next
investigation to narrow the differential, and explain why it discriminates
better than the alternatives. (4) Flag any drug-drug or drug-disease
interaction risk in the current medication list, using only what's in the
source.
```

```
Play devil's advocate: challenge my leading diagnosis. Give me the
strongest argument, drawn from this case's actual data, for why an
alternative diagnosis on the list could be right instead. Make me defend
my choice before agreeing or disagreeing.
```

```
If this patient deteriorated overnight based on the trajectory in the
notes, walk me through: (1) what bedside check I'd do first, (2) what
immediate step I'd take, (3) at what point I'd escalate — reasoning only
from what's documented, not hypotheticals outside the source.
```

**Self-check:**
- [ ] Differential is ranked with an explicit supporting *and* refuting data point for each entry, not just listed
- [ ] The mechanism explanation ties to at least 3 specific findings in this patient, not generic pathophysiology
- [ ] The chosen next investigation is justified by discriminating value, not just "standard workup"
- [ ] Interaction and escalation risks are flagged from the actual medication list and trajectory, not assumed

---

## 3. ATTENDING LEVEL — Systems, Evidence, Judgment, Teaching

**Cognitive aim:** Step back from the single case to evidence quality, systems factors, cost/value, and what the case teaches others.

**Studio tool pairing:** Use **Reports** to generate a polished teaching document (e.g. a briefing doc or case report) from the notebook, and **Data Table** if you want a structured, exportable comparison of findings vs. guideline-recommended thresholds.

```
Acting as a senior clinician reviewing this case for teaching purposes:
(1) Critically appraise the management plan in the notes against current
evidence-based practice — where does it align, where might it lag? (2)
Identify any high-value-care issue: an investigation or intervention that
may be low-yield or a necessary one that appears delayed or missing. (3)
Run a brief pre-mortem: if this case had a bad outcome, what is the most
plausible failure point in the diagnostic or management pathway? (4)
State one clinical pearl this case teaches that would be worth passing to
a junior trainee.
```

```
Apply a critical-awareness lens to this case as documented: (1) What
anchoring or premature-closure risk is visible in how the diagnosis was
reached? (2) What confirmation bias might have shaped which follow-up
tests were ordered? (3) What would a methodological critic say about gaps
in this documentation? (4) What, if anything, in this case's reasoning
should NOT be generalized to other patients?
```

```
Write a 200-word case summary suitable for a morning report or M&M-style
discussion: the clinical problem, the key decision point, what went well,
and one system-level or educational takeaway — grounded only in the
uploaded source.
```

**Self-check:**
- [ ] Evidence appraisal names a specific point of alignment or lag, not a vague "seems reasonable"
- [ ] The high-value-care issue identifies one concrete low-yield or missing step, not a general comment on cost
- [ ] The pre-mortem names a plausible, case-specific failure point, not a generic "communication breakdown"
- [ ] The teaching pearl is specific enough to hand to a junior trainee as-is

---

## 4. Cross-Level Synthesis (optional closing step)

Run once, after all three tiers, to consolidate the session:

```
Compare how the answers changed across the Intern, Resident, and Attending
prompts I ran on this case. (1) What did each level add that the previous
one didn't? (2) Where did earlier-level reasoning turn out to be
incomplete or need revision at a higher level? (3) What's the one thing a
learner at each level should take away from this case?
```

