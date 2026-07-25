# Module — Case Lens: Critical Thinking Audit

**Objective:** Take a single clinical case and run it through eight distinct critical-thinking lenses (framing, uncertainty, bias, evidence, testing, treatment, individualization, systems) to generate case-specific questions, each rated 1–5 on potential clinical impact — surfacing what's worth double-checking before it's acted on.

**Indication:** Use after writing up a case, before committing to a plan, when a case "feels settled" but something nags, during case review/teaching, or any time you want a structured second pass on your own reasoning rather than relying on gestalt alone.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Load the case and set the rules

### Step 1.0: Session Setup — Loading the Case

**Prompt:**

```
You are a clinical reasoning auditor. I am going to give you a case
(paste, summary, or excerpt) and I want you to apply an 8-lens critical
thinking framework to it. Your job is not to diagnose or manage the
patient — it is to generate sharp, case-specific questions I should be
asking myself, tied to actual details in this case, not generic textbook
questions. For every question you generate, you will also assign an
impact score from 1-5 (1 = minor/academic, 5 = potentially
decision-changing or safety-critical) with a one-line justification tied
to this specific patient. Confirm you understand, then ask me to paste
the case.

CASE:
[paste case here]
```

> [!NOTE] **Application Note:** The more specific the case (actual values, actual timing, actual meds), the sharper the questions. A vague case produces vague questions regardless of the lens.

---

## Phase 2 · Execution — Run each lens

### Step 2.1: Lens 1 — Framing the Problem

**Prompt:**

```
Apply Lens 1 — Framing the Problem — to this case. Generate 2-4 questions
covering: whether the differential is complete (use a systematic sieve,
not just pattern recognition), whether any "can't-miss" diagnosis has
been adequately excluded, whether one unifying diagnosis truly fits or
multiple concurrent problems are being forced into one story (Occam vs.
Hickam), and whether the history itself is reliable given who gave it and
how. Score each 1-5 for impact on THIS case and justify in one line.
```

### Step 2.2: Lens 2 — Reasoning Under Uncertainty

**Prompt:**

```
Apply Lens 2 — Reasoning Under Uncertainty — to this case. Generate 2-4
questions covering: whether the pre-test probability actually justifies
the tests ordered or planned, whether a negative/positive result is
being over- or under-interpreted given the prior probability, whether a
rare diagnosis is being chased ahead of common ones, and whether any
risk being discussed with the patient is absolute or just relative.
Score each 1-5 for impact on THIS case and justify in one line.
```

### Step 2.3: Lens 3 — Cognitive Biases

**Prompt:**

```
Apply Lens 3 — Cognitive Biases — to this case. Scan the case narrative
itself for signs of anchoring, premature closure, availability bias,
confirmation bias, diagnostic momentum (a label passed uncritically
between notes/providers), or framing effects in how risk was presented.
Generate 2-4 questions that would expose whether any of these are
currently shaping the plan. Score each 1-5 for impact on THIS case and
justify in one line.
```

### Step 2.4: Lens 4 — Evaluating Evidence

**Prompt:**

```
Apply Lens 4 — Evaluating Evidence — to this case. Generate 2-4 questions
covering: whether any guideline being applied here is backed by strong
evidence or expert opinion, whether a treatment's benefit is statistically
significant but clinically marginal, whether any endpoint being chased is
a surrogate rather than a hard outcome, and whether the evidence being
relied on actually generalizes to this patient's age/comorbidity profile.
Score each 1-5 for impact on THIS case and justify in one line.
```

### Step 2.5: Lens 5 — Testing & Diagnostic Strategy

**Prompt:**

```
Apply Lens 5 — Testing & Diagnostic Strategy — to this case. Generate 2-4
questions covering: whether the next test actually changes management,
whether any result is being trusted as a snapshot when a trend would be
more informative, whether a discordant result has been chased down or
dismissed, and whether a "normal" result is being treated as more
reassuring than its sensitivity actually justifies. Score each 1-5 for
impact on THIS case and justify in one line.
```

### Step 2.6: Lens 6 — Treatment & Response Reasoning

**Prompt:**

```
Apply Lens 6 — Treatment & Response Reasoning — to this case. Generate
2-4 questions covering: whether a symptom improvement is being credited
to treatment when natural history or placebo response could explain it,
whether non-response has been worked through systematically (wrong
diagnosis / wrong dose / non-adherence / true resistance) rather than
jumped to "resistant disease," whether a new symptom could be
iatrogenic, and whether timing/delay itself matters for this condition.
Score each 1-5 for impact on THIS case and justify in one line.
```

### Step 2.7: Lens 7 — Individualizing Care

**Prompt:**

```
Apply Lens 7 — Individualizing Care — to this case. Generate 2-4
questions covering: whether the standard guideline plan actually fits
this patient's comorbidities, frailty, or stated goals, whether the
patient's own explanatory model of their illness has been incorporated
or dismissed, and whether a social or systemic factor (cost, access,
literacy) could be masquerading as "non-adherence." Score each 1-5 for
impact on THIS case and justify in one line.
```

### Step 2.8: Lens 8 — Systems, Communication & Self-Monitoring

**Prompt:**

```
Apply Lens 8 — Systems, Communication & Self-Monitoring — to this case.
Generate 2-4 questions covering: whether the current plan and its
uncertainty have been communicated clearly enough for the next clinician
to re-evaluate rather than anchor, whether any automated output (EHR
alert, auto-read) is being trusted without a manual check, and what a
structured post-hoc review of this case would flag if the outcome were
bad. Score each 1-5 for impact on THIS case and justify in one line.
```

---

## Phase 3 · Closure / Review — Consolidate and act

### Step 3.1: High-Impact Roll-Up

**Prompt:**

```
Collect every question you generated across all 8 lenses that scored 4
or 5. Present them as a single prioritized list, ordered by score
descending, with the lens each came from. For each, state in one line
what answering it would change about the current plan.
```

### Step 3.2: Reflection Debrief

**Prompt:**

```
Now step back. Of everything generated across all 8 lenses: (1) which
single question, if I only had time to answer one, would most change
management for this patient? (2) which lens surfaced the least for this
particular case, and is that because the case genuinely doesn't have
much exposure there, or because the case as written doesn't give you
enough to probe it? (3) what is one thing about my own reasoning on this
case — not the patient — that this audit revealed?
```

> [!NOTE] **Application Note:** Step 3.2's question 2 matters — a lens returning nothing is sometimes a true negative and sometimes a sign the case write-up is missing the details that lens needs (e.g., no evidence-quality discussion because no guideline was mentioned at all).

---

## The 8 Lenses — Quick Reference

| # | Lens | Core focus |
|---|---|---|
| 1 | Framing the Problem | Differential completeness, can't-miss diagnoses, Occam vs. Hickam, history reliability |
| 2 | Reasoning Under Uncertainty | Pre-test probability, Bayesian updating, base rates, absolute vs. relative risk |
| 3 | Cognitive Biases | Anchoring, premature closure, availability, confirmation bias, diagnostic momentum |
| 4 | Evaluating Evidence | Guideline strength, statistical vs. clinical significance, surrogate endpoints, generalizability |
| 5 | Testing & Diagnostic Strategy | Test sequencing, serial data, discordant results, sensitivity/specificity purpose |
| 6 | Treatment & Response Reasoning | Risk/benefit under uncertainty, therapeutic-trial interpretation, non-response workup |
| 7 | Individualizing Care | Guideline vs. patient fit, patient values, explanatory models, social contributors |
| 8 | Systems, Communication & Self-Monitoring | Handoff clarity, cross-checking automation, self-audit, post-hoc reflection |

---

## Navigation

**Source framework:** Critical Thinking Framework for Clinical Medicine (8-lens version)
**Companion asset:** Fillable worksheet version of this module for offline/paper use
