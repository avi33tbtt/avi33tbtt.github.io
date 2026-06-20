[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module 14 — Global Health & Resource-Constrained Clinical Reasoning

**Objective:** Train and support clinical reasoning under genuine investigation, imaging, drug, and referral constraints — reasoning that starts from "what is actually available here" rather than "what is ideal," and that makes the resource ceiling itself part of the differential-diagnosis and management-planning process.

**Indication:** Any setting where the standard textbook or guideline work-up assumes investigations, specialists, or drugs that are not reliably available — district hospitals, rural primary health centres, low-resource tertiary centres, disaster/outreach camps, or any Nepal/India-context bedside or teaching session where the learner must commit to a plan *before* knowing if the "ideal" test will come back, or commit to a plan knowing it never will.

> [!IMPORTANT]
> This module does not encode local drug formularies, essential-medicine lists, or facility-level capability standards — these vary by country, state, and even by week (stock-outs). Always have the learner state the *actual* local resource ceiling at Step 14.0 rather than letting the AI assume one. Treat every AI-generated triage or escalation suggestion as requiring independent clinical verification per the repository [Disclosure Statement](https://avi33tbtt.github.io/Prompts/).

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Declare the real resource ceiling

### Step 14.0: Resource-Ceiling Declaration & Session Setup

**Prompt:**

```
#VibeRounds You are a clinical reasoning partner for resource-constrained
settings. Before we discuss any case, I will tell you exactly what is and
is not available to me right now: which labs, which imaging, which drugs,
which specialists or referral pathway, and the realistic time-to-result or
time-to-referral for each. Do not assume I have access to anything I have
not listed, and do not silently default to a high-resource-setting
work-up. If I later ask for a test or drug I have not listed as available,
remind me it is unavailable here and ask whether I want a plan that
substitutes for it, defers it, or triggers a referral instead. Confirm you
understand before I describe my setting.

```
> [!NOTE] **Application Note:** This step exists because most LLMs default to tertiary-hospital-availability reasoning unless explicitly constrained. Re-run this step at the start of every new session — the AI does not retain the resource ceiling across sessions, and resource availability itself can change week to week (e.g. stock-outs, a generator down, a referral road washed out in monsoon).

### Step 14.1: Local Resource Inventory Prompt

**Prompt:**

```
#VibeRounds Help me build a structured resource inventory for [facility /
setting name] before we use it in any case. Ask me, one category at a
time: (1) point-of-care tests available on-site, (2) labs available on-site
vs sent-out (and turnaround time for sent-out), (3) imaging available
on-site vs referral-only, (4) drugs reliably in stock vs frequently
out-of-stock, (5) realistic referral distance/time and transport
constraints, (6) staffing — who is physically present at night and on
weekends. Summarise it back to me as a single reference table I can reuse
across cases this week.

```
> [!NOTE] **Application Note:** Run once per facility or rotation, then reuse the resulting table as context at the start of each subsequent case (paste it in at Step 14.0). This avoids re-deriving the same inventory every session.

---

## Phase 2 · Execution — Reason within (and around) the ceiling

### Step 14.2: Ceiling-Aware Differential Diagnosis

**Prompt:**

```
#VibeRounds Given the resource ceiling I described, walk me through this
case's differential diagnosis in two layers: (1) the differential a
fully-resourced tertiary centre would pursue, briefly, for orientation
only; (2) the differential as I should actually prioritise it here, given
what I can and cannot confirm. For layer 2, rank each diagnosis by how much
it would change my immediate management even without confirmatory testing,
not by how likely it is in the abstract. Ask me one question at a time
before revealing your own ranking.

```
> [!NOTE] **Application Note:** The "what would change management" reframe is the central move of resource-constrained reasoning — it keeps the differential clinically actionable rather than academically complete. Aligns with the Socratic forced-commitment pattern from [Module 1](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html).

### Step 14.3: Substitution & Workaround Generator

**Prompt:**

```
#VibeRounds For this case, I lack [specific test/imaging/drug, e.g.
troponin / CT head / a specific antibiotic]. Ask me first what I think the
best available clinical or low-cost substitute or workaround is, and what
its known sensitivity/specificity or limitation is compared to the gold
standard. Only after I answer, add anything I missed. Then ask me: at what
point does the absence of this test become dangerous enough that referral
is mandatory regardless of cost or distance?

```
> [!NOTE] **Application Note:** Forces explicit articulation of the safety threshold — the point past which "make do" reasoning must yield to referral, which is the single most safety-critical decision point in resource-constrained practice.

### Step 14.4: Empirical (Test-Negative) Management Reasoning

**Prompt:**

```
#VibeRounds Walk me through how I should manage this case empirically,
assuming the confirmatory test I want will either never be available or
will not return in a clinically useful timeframe. Ask me to commit to a
working diagnosis and a management plan first. Then probe: what is my exit
criterion — the specific clinical sign that tells me this empirical plan
has failed and I need to escalate, refer, or reconsider the diagnosis
entirely?

```
> [!NOTE] **Application Note:** Mirrors the answer-withholding discipline of [Module 1, Step 1.0](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) — the learner commits before the AI weighs in. The "exit criterion" question is deliberately non-optional; empirical treatment without a defined failure threshold is a recognised global-health patient-safety gap.

### Step 14.5: Referral Threshold & Transport-Reality Check

**Prompt:**

```
#VibeRounds Given the referral distance and transport constraints I
described, help me reason through whether this patient should be referred
now, observed and reassessed in [interval], or managed entirely at this
level. Ask me to weigh: the risk of deterioration in transit, the risk of
delay if I wait, what I can realistically monitor here versus what I
cannot, and whether the family can practically undertake the referral
(cost, distance, caregiver availability). Do not assume referral is always
the safer option — ask me to justify whichever way I lean.

```
> [!NOTE] **Application Note:** Deliberately resists the reflex that "refer when in doubt" is always correct — in real low-resource settings, a failed or delayed referral can be more dangerous than competent on-site management, and transport itself carries risk. This step should not be used to talk a learner out of a referral that is genuinely indicated; it is a structured-thinking aid, not a override.

### Step 14.6: Mid-Session Resource-Reasoning Checkpoint

**Prompt:**

```
#VibeRounds Pause. Give me a formative checkpoint on my reasoning so far:
(1) appropriate use of available resources — score out of 10 with one
encouraging note and one improvement note; (2) recognition of when the
ceiling was reached and escalation was needed — score out of 10; (3)
safety-netting and exit-criterion clarity — score out of 10. End with one
sentence on what you think is my strongest resource-reasoning instinct in
this session.

```
> [!NOTE] **Application Note:** Structural analogue of [Module 1, Step 1.4](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html), re-scoped to resource-reasoning competence rather than pure diagnostic logic.

---

## Phase 3 · Closure / Review — Consolidate the resource-reasoning pattern

### Step 14.7: End-of-Case Resource-Reasoning Summary

**Prompt:**

```
#VibeRounds We have reached the end of this case. Produce a closing summary
covering: (1) two moments where I reasoned well specifically *because* of
the resource constraint, not despite it; (2) the single highest-yield
low-cost clinical sign, history question, or bedside test I should
prioritise next time a similar case presents; (3) one thing about this
setting's resource ceiling I should flag to a supervisor or for system-level
improvement, separate from this individual case. Open with a sentence
acknowledging that resource-constrained reasoning is its own skill, not a
lesser version of textbook reasoning.

```

### Step 14.8: Missed Low-Cost Clue Debrief

**Prompt:**

```
#VibeRounds For this case, identify any low-cost clinical sign, history
detail, or point-of-care finding I had available but underused or missed —
not a sign that required unavailable technology. Name the specific clue,
explain why it is easy to overlook under resource pressure, and frame it as
a growth observation rather than a failure.

```
> [!NOTE] **Application Note:** Intentionally scoped to *available* clues only — the goal is sharpening use of what is actually accessible, not relitigating the absence of an unavailable test (already covered in Step 14.3/14.4).

### Step 14.9: System-Level Critical Awareness Debrief

**Prompt:**

```
#VibeRounds Before we close, apply a system-level critical awareness lens:
(1) Did today's resource ceiling lead me toward any reasoning shortcut that
would be unsafe if I later worked somewhere better-resourced and forgot to
adjust? (2) What is the risk of over-relying on empirical/pattern-based
reasoning in this setting specifically — where might it fail silently? (3)
What would a critic of resource-constrained, AI-assisted reasoning say
about this whole approach? (4) What is the most important unresolved
uncertainty in this case that no amount of local resourcefulness can
substitute for? Be honest but constructive.

```
> [!NOTE] **Application Note:** Structural analogue of [Module 1, Step 1.10](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) and [Framework D](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html), re-scoped to the specific failure modes of resource-constrained practice — most notably the risk of reasoning patterns becoming habitual workarounds that go unexamined once resources improve, and the opposite risk of normalising preventable diagnostic blind spots as "just how it is done here."

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (persona language throughout)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step 14.9)
- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) (structural template; forced-commitment pattern)
- [Module 4 — Peer-Level Ward Round Preparation](https://avi33tbtt.github.io/Prompts/Module-04-Peer-Level-Ward-Round-Preparation.html) (complementary for admission/triage rehearsal)

---

## Navigation

[← Back to README](https://avi33tbtt.github.io/Prompts/)

---

> [!NOTE]
> **Status:** 🔴 Primitive / Experimental — not yet validated against any live environment or real case. Drafted to extend the Vibe Rounds module structure to global-health / resource-constrained settings; requires field testing, local resource-list calibration, and review before use with real patients per the repository [Disclosure Statement](https://avi33tbtt.github.io/Prompts/).
