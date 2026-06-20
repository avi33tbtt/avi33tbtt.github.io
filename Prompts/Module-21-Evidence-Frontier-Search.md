[← Back to README](README.md)

# Module 21 — Evidence Frontier Search (Emerging Innovation, Trials & Public Awareness)

**Objective:** Train the discipline of actively searching out what is new and changing — emerging diagnostics, devices, therapies, ongoing clinical trials, and public health awareness developments — for a specific patient or case, rather than reasoning only from what the learner or the AI already knows. This module's defining feature is that it requires **live, verified search**, not internal recall — every module elsewhere in this stack reasons with existing knowledge; this one is built around the discipline of finding out what has changed since that knowledge was formed.

**Indication:** Whenever a case raises the question "is there something better, newer, or still under investigation that I am not aware of" — a refractory or treatment-resistant case, a condition with a fast-moving evidence base, a patient asking about a trial they heard about, or any point in [Module 5](Module-05-Real-Time-Case-Review-and-Data-Audit.md) or [Module 7](Module-07-Longitudinal-and-Cross-Case-Learning.md) where a case has stalled on the standard pathway. Also appropriate as a standing habit-building exercise independent of any single case — see Step 21.6.

> [!IMPORTANT]
> **Verification Discipline — read before using this module.** This is the one module in this stack where the AI is being asked to retrieve information it cannot reliably know from training alone, which is precisely the condition under which language models are most prone to generating plausible-sounding but fabricated trial names, registry numbers, device names, or citations. Every step in this module requires the AI to use live web search and to cite a real, checkable source (a trial registry ID, a journal article, a regulatory filing) for any specific claim — not to answer from memory. If the AI cannot find a verifiable source, the correct output is "I could not verify this," not a confident-sounding approximation. This is a stricter and non-negotiable version of [Framework D, 2c](Framework-D-Critical-Awareness-Framework.md) (Hallucination Risk), applied specifically to this module because the entire premise of the module — finding what is genuinely new — is the exact scenario where hallucination risk is highest and hardest for a learner to detect, since the learner by definition does not already know the answer.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Frame the question and set the verification contract

### Step 21.0: Session Setup & Verification Contract

**Prompt:**
```text
#VibeRounds You are a clinical evidence-frontier search partner. Your job
is to help me find genuinely current information — emerging diagnostics,
devices, therapies, ongoing clinical trials, and public health awareness
developments — using live web search, not your own training knowledge,
which may be outdated. For every specific claim — a trial name, a device,
a drug, a statistic, a regulatory status — you must search for it and cite
a real, checkable source. If you cannot verify something, say so
explicitly rather than giving me a plausible-sounding answer. Do not
present anything you have not actually searched for and found in this
session as if it were current fact. Confirm you understand this
verification contract before we begin.
```

> [!NOTE]
> **Application Note:** Run once at the start of every Module 21 session — and re-state it if a long session risks the AI drifting back to confident-sounding recall instead of search. This is the module's foundational step; nothing downstream is trustworthy without it being honoured throughout.

### Step 21.1: PICO-Format Question Framing

**Prompt:**
```text
#VibeRounds Before I search for anything, help me turn my question into a
proper searchable clinical question using the PICO framework: Patient/
Population (who specifically), Intervention (what new test, device, drug,
or approach I am asking about), Comparison (what the current standard is),
and Outcome (what I actually want to know — survival, symptom control,
side-effect profile, cost, access). Ask me each component one at a time.
Do not search yet — this step is just to sharpen the question.
```

> [!NOTE]
> **Application Note:** This step operationalises the "Ask" step of the Sackett evidence-based-medicine cycle (Ask → Acquire → Appraise → Apply → Assess). A vague question ("is there anything new for X?") produces unfocused, low-value search results; a PICO-framed question produces a search a learner can actually evaluate.

---

## Phase 2 · Execution — Search, appraise, and apply

### Step 21.2: Emerging Diagnostics & Tests Search

**Prompt:**
```text
#VibeRounds Using my PICO question, search for emerging or recently
approved diagnostic tests or technologies relevant to this condition —
point-of-care tests, novel biomarkers, imaging techniques, or AI-assisted
diagnostics. For each one you find, tell me: what stage it is at
(research only, in trials, approved in some regions, widely available),
how it compares to the current standard test on sensitivity/specificity
if that data exists, and cite your source. Flag clearly anything that is
still investigational versus something I could realistically order today.
```

> [!NOTE]
> **Application Note:** The stage-of-development flag is the single most important output of this step — confusing "promising early research" with "available and validated" is the most common and clinically consequential error a learner could make from a frontier search, and the prompt structure exists specifically to prevent that conflation.

### Step 21.3: Active Clinical Trials Search

**Prompt:**
```text
#VibeRounds Search clinical trial registries for actively recruiting or
ongoing trials relevant to my PICO question. For each trial you find, give
me: the trial registry identifier (e.g. NCT number), phase, what
intervention is being tested, the eligibility criteria in brief, and
whether it is recruiting near [my location/region] or is relevant
regardless of location. If you cannot confirm a trial's current status,
say so rather than guessing. Do not present any trial without a real,
checkable registry identifier.
```

> [!NOTE]
> **Application Note:** The registry-identifier requirement is the module's hardest anti-hallucination guardrail — a fabricated trial name without an identifier is easy to generate convincingly and hard for a learner to catch; a fabricated identifier is checkable in seconds against the actual registry, which is precisely why the prompt insists on it. Treat any trial result presented without an identifier as unverified, regardless of how plausible it sounds.

### Step 21.4: Emerging Therapy & Off-Label / Compassionate-Use Landscape

**Prompt:**
```text
#VibeRounds Search for emerging or recently studied therapies for this
condition — new drug classes, repurposed existing drugs, combination
approaches, or non-pharmacological interventions under active study. For
each, tell me: the evidence level (case reports, small trials, large RCTs,
approved standard of care), and cite your source. Separately, ask me:
given what you found, is this something to mention to the treating team as
a genuine option, or is it premature to raise with a patient at this
stage? Make me reason through that distinction rather than assuming
"newer" means "worth raising now."
```

> [!NOTE]
> **Application Note:** The closing question is deliberately not rhetorical — a real and common failure mode is a learner (or an enthusiastic family member) raising an early-stage finding with a patient as if it were a viable option, which can create false hope or distract from effective standard care. This step trains the judgement layer on top of the search itself, not just the search.

### Step 21.5: Public Health & Awareness Landscape Search

**Prompt:**
```text
#VibeRounds Search for current public health awareness developments
relevant to this condition — recent guideline updates, public health
campaigns, screening recommendation changes, or notable epidemiological
shifts (rising incidence, new risk-factor findings, outbreak patterns if
relevant). Cite sources for each. Then ask me: is there a specific,
low-cost awareness or screening action relevant to this patient or their
community that this search surfaced — something beyond the individual
case in front of me?
```

> [!NOTE]
> **Application Note:** This step deliberately widens the lens beyond the single patient to the public-health and community layer, connecting back to [Module 19](Module-19-Community-and-Social-Medicine-Insights.md)'s community-level reasoning — a genuinely current awareness finding (a new screening recommendation, a local outbreak pattern) can be more immediately actionable than an early-stage trial or therapy.

### Step 21.6: Standing Currency Check (Independent of Any Single Case)

**Prompt:**
```text
#VibeRounds Independent of any specific patient, search for what has
changed in the last [3 / 6 / 12] months in the management of [named
condition] — new trial results, guideline updates, newly approved
therapies, or notable retracted or downgraded evidence. Summarise what is
genuinely new versus what is incremental or still preliminary. Cite
sources throughout.
```

> [!NOTE]
> **Application Note:** This is the habit-building, non-case-triggered version of the module — intended to be run periodically as a standing practice (see the EBM lifelong-learning literature on targeted, question-driven literature review as more sustainable than routine journal browsing) rather than only reactively when a case stalls. Explicitly including "retracted or downgraded evidence" matters — currency includes finding out that something once promising no longer holds up, not just finding new positive results.

---

## Phase 3 · Closure / Review — Appraise, apply, and audit

### Step 21.7: Critical Appraisal of What Was Found

**Prompt:**
```text
#VibeRounds Take everything found in this session and help me appraise it:
for the single most promising finding, what is the evidence quality (study
size, design, whether it has been replicated), what is the realistic time-
to-availability if it is not yet approved, and what would have to be true
for this to actually change management for a patient like mine. Be honest
about how preliminary or how solid each piece of evidence actually is.
```

> [!NOTE]
> **Application Note:** This operationalises the "Appraise" step of the EBM cycle and is the direct counterweight to the excitement of finding something new — search results biased toward novelty (a documented tendency in both AI search and human literature-scanning behaviour) need an explicit appraisal pass before anything found is treated as clinically meaningful.

### Step 21.8: Apply & Communicate — What This Means for the Patient or Team

**Prompt:**
```text
#VibeRounds Based on the appraisal, help me draft how I would actually
raise this with the treating team or, where appropriate, the patient or
advocate — in plain language, clearly separating what is established from
what is still investigational. If nothing found in this session is
mature enough to raise yet, say so directly rather than padding the
conversation with premature options.
```

> [!NOTE]
> **Application Note:** Operationalises the "Apply" step of the EBM cycle, and connects directly to [Module 2, Step 2.7](Module-02-Patient-Advocate-Case-Documentation.md) (Advocate Handover Brief) and [Module 4, Step 4.9](Module-04-Peer-Level-Ward-Round-Preparation.md) (Formal Handover Generation) in tone — the explicit instruction to say nothing was found rather than pad the output guards against the temptation to manufacture a take-home finding when the search was genuinely inconclusive.

### Step 21.9: Critical Awareness — Search, Novelty Bias & Verification Failure

**Prompt:**
```text
#VibeRounds Apply a critical awareness lens to this frontier-search
session: (1) Is there a risk that I — or you — over-weighted a finding
simply because it was novel, rather than because it was strong evidence?
(2) For every specific claim made in this session, was it actually backed
by a verified, checkable source, or did anything slip through as a
confident-sounding but unverified statement? Re-check now. (3) What would
a critic of AI-assisted frontier search say about the risk of hallucinated
trials or findings being presented to a patient as real options? (4) What
is the single most important verification step I should repeat with a
human expert or librarian before acting on anything found today? Be
honest but constructive.
```

> [!NOTE]
> **Application Note:** Point (2) is a literal re-audit instruction, not a rhetorical question — the AI is being asked to go back through its own outputs from this session and confirm each specific claim was genuinely sourced, which functions as a second verification pass beyond the standing contract in Step 21.0. This step extends [Framework D](Framework-D-Critical-Awareness-Framework.md)'s hallucination-risk mitigation (Domain 2c) into a mandatory closing ritual specific to this module, given that this is the one module in the stack where unverified output is most likely to be mistaken for genuine new information rather than recognised as a possible error.

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](Framework-A-Humanistic-Persona.md) (persona language throughout)
- [Framework D — Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) (Domain 2c, Hallucination Risk — this module's central, non-negotiable concern; Step 21.9)
- [Module 5 — Real-Time Case Review & Data Audit](Module-05-Real-Time-Case-Review-and-Data-Audit.md) and [Module 7 — Longitudinal & Cross-Case Learning](Module-07-Longitudinal-and-Cross-Case-Learning.md) (natural trigger points — a stalled or refractory case)
- [Module 10 — Medical Journal Article Reading](Module-10-Medical-Journal-Article-Reading.md) (complementary: that module trains close reading of a single article once found; this module trains the search and discovery step that precedes it)
- [Module 19 — Community & Social Medicine Insights](Module-19-Community-and-Social-Medicine-Insights.md) (Step 21.5 connects individual-case search to the public-health and community awareness layer)

---

## Navigation

**Previous:** [← Module 20 — Naturalistic Decision Making / Recognition-Primed Decision Model](Module-20-Recognition-Primed-Decision-Model.md)

This is currently the final module. **Up next:** browse the [Supplementary Frameworks](README.md) or [Reference Material](README.md).

[← Back to README](README.md)
