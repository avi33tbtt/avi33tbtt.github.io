---
title: Module 58 — Adaptive Question-to-Module Router & Single-Pass Executor
---

# Module 58 — Adaptive Question-to-Module Router & Single-Pass Executor

**Objective:** Take a case (already shared, or pasted fresh) plus one specific question about it, work out — without the user having to know the directory — which single VibeRounds module (0–57) is actually built to answer that kind of question, run that module's relevant step against this case, and return the answer in that module's native output format.

**Indication:** Mid-session, ad hoc use. The user has a case and a question but doesn't want to manually search the Module Index, and doesn't want the full multi-module Master Protocol pipeline run on one narrow question. Use this whenever the question is singular and specific ("is this a polypharmacy problem?", "what's the differential I'm missing?", "why did this happen *now*?") rather than "analyze this whole case."

---

## How Module 58 differs from the other entry points

| | **Module 0** | **Module 58 (this module)** | **Module 59** | **Master Protocol** |
|---|---|---|---|---|
| **Triggered by** | A brand-new user, before any case content | One specific, single-shot question | A compound question, or one question needing several modules' outputs chained together | A request for a full case workup |
| **Routes on** | User's *role* and *session goal* | The question's clinical-cognitive intent | The question's intent, decomposed into sub-asks with dependencies | Every clinical feature in the case, exhaustively |
| **Modules run** | None — recommends one, hands off | Exactly one (occasionally two, for a compound question) | A bespoke, dynamically-sized pipeline (typically 2–6 modules) | All 20+ modules, every prompt scored 8–10 |
| **Output** | A routing recommendation | A single answered question, in the target module's format | One consolidated answer synthesized across the constructed pipeline | Four full `.md` files |

These four are tiers, not alternatives — pick the smallest one that actually fits:

```
Is the question answerable by ONE module's native format?
  ├── YES → Module 58 (single-pass routing — this module)
  └── NO  → Does it decompose into a bounded set of sub-asks (typically
            2–6) with clear dependencies, or does answering it well require
            chaining one module's output into another's input?
              ├── YES → Module 59 (Adaptive Pipeline Orchestrator) — builds
              │         and runs a custom pipeline sized to the question
              └── NO (the whole case needs working, not just this
                   question) → Master Protocol — fixed, exhaustive,
                   all-module pipeline
```

If a single Module 58 answer reveals the question actually needed more than one module chained together, say so in Closure (Step 58.4) and hand off to **Module 59**, not straight to the Master Protocol — escalate one tier at a time.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Capture the case and the question

### Step 58.0: Case-and-Question Intake

**Prompt:**

```
#VibeRounds Here is a case [paste case details / reference the case already in
this session] and a specific question about it: [paste your question].

Before routing, do two things: (1) restate my question back to me in one
sentence to confirm you understood what I am actually asking, (2) tell me if
the case as given has enough detail to answer it, or name the single most
important missing detail if not.
```

> [!NOTE] **Application Note:** This step exists because mis-routing almost always traces back to a misread question, not a bad mapping table. Confirming the question before consulting the routing table in Step 58.1 is the cheapest error-catch in the whole module. If the case is too thin to answer the question at all, stop here and ask for the missing detail rather than guessing and routing anyway.

---

## Phase 2 · Execution — Classify, select, and run

### Step 58.1: Intent Classification

**Prompt:**

```
#VibeRounds Classify my question into one primary clinical-cognitive intent
(and a secondary one only if the question is genuinely compound):
diagnostic reasoning · documentation/tracking · ward-floor rehearsal ·
data/registry analytics · evidence appraisal · pharmacology/safety audit ·
systems/operations · education/explanation · research-protocol structuring.
State the intent(s) before moving to module selection.
```

### Step 58.2: Module Selection — Routing Table

**Prompt:**

```
#VibeRounds Using the routing table below, select the single best-fit module
for my question's primary intent. If two modules score within one point of
each other AND address genuinely different angles of the same question, name
both, run the higher-scored one in full, and offer the second as an optional
follow-up rather than running both. Show your scoring before announcing the
selection.

Before finalizing: check whether this question actually decomposes into
multiple distinct sub-asks, or whether one candidate module would need
another module's output as an input to answer it properly. If either is
true, stop here and tell me to switch to Module 59 (Adaptive Pipeline
Orchestrator) instead of forcing a single-module fit.
```

**Routing table (reference — score each candidate 0–3 on keyword/intent match, category fit, and specificity to *this* question; highest score wins; ties broken in favor of the narrower, more specific module over the broader one):**

| Category | # | Module | Selects when the question is about… |
|---|---|---|---|
| **Clinical Reasoning & Cognitive** | 1 | Socratic Clinical Reasoning | "Quiz me / make me reason it out" rather than tell me the answer |
| | 12 | Differential Diagnosis Deepdive | A working diagnosis feels contested or premature — stress-test the differential |
| | 14 | Resource-Constrained Reasoning | What changes about the reasoning when key tests/drugs aren't available |
| | 15 | Illness Script Acquisition | "What's the typical/atypical script for X" |
| | 17 | Semantic Qualifiers & Problem Representation | The problem statement itself feels vague or mis-framed |
| | 18 | Causal vs. Probabilistic Reasoning | How findings change the weight of *other* findings, not just the diagnosis |
| | 20 | Recognition-Primed Decision Model | Time-critical, acute, "what do I do right now" |
| | 28 | Diagnostic Time-Out | A structured pause-and-check before committing |
| | 30 | Diagnostic Anchor Extractor | "What did we anchor on early, and was it justified?" |
| | 32 | Clinical Cognition Loop | The reasoning *process* itself, end to end |
| | 33 | "Why Now?" Precipitant Hunter | Why this happened at *this* moment, not earlier or later |
| | 35 | Epistemic Certainty Mapping | "How confident should I actually be here?" |
| | 36 | Bayesian / Likelihood Ratio Engine | Quantifying how much one finding shifts probability |
| | 37 | Red Herring / Signal-to-Noise | Separating a true signal from a distracting finding |
| | 50 | Diagnostic Reasoning Map | Wanting the whole reasoning pathway laid out structurally |
| | 54 | System 1 / System 2 Generator | Exposing fast vs. slow thinking on this case |
| | 56 | Hypothetico-Deductive Reasoning | Classic generate-hypothesis-then-test structure |
| | 57 | Clinical Cognition Deep Dive | A deep dive into the cognitive process, broader than Module 32 |
| **Patient Advocacy & Individual Care** | 2 | Patient-Advocate Documentation | A family member building a case record from scratch |
| | 3 | Extended Advocate Monitoring | Longitudinal tracking of mood/meds/red flags over weeks |
| | 9 | N-of-1 Research Protocol | Turning this case into a formal case report |
| | 11 | Patient Education Query Intelligence | A patient/family member asking what a term or result means |
| | 13 | Medication Reconciliation & Polypharmacy | Drug interactions, 5+ meds, prescribing cascade |
| | 55 | Patient Needs Assessment | A direct, holistic read of what the patient needs right now |
| **Data Analytics & Methods** | 5 | Real-Time Case Review & Data Audit | Cleaning/querying one patient's live data log |
| | 6 | Registry-Level Analytics | Querying a whole registry/dataset, not one patient |
| | 7 | Cross-Case Learning | Patterns across multiple similar cases over time |
| | 22 | Nested Analysis | A question with sub-questions layered inside it |
| | 23 | Counterfactual Analysis | "What if X had been different?" |
| | 24 | Heuristic Analysis | Examining which mental shortcuts were used |
| | 25 | Thematic Analysis | Extracting themes from narrative/qualitative material |
| | 27 | Time-Series & Velocity Analyzer | Rate-of-change across serial measurements |
| **Patient Safety & Systems Failure** | 26 | Bias Auditing | Auditing the case for a specific cognitive bias |
| | 29 | Iatrogenic Domino Effect | One intervention cascading into the next complication |
| | 38 | Poly-Crisis Cascading Failure Simulator | Multiple systems failing at once |
| | 42 | Clinical Pre-Mortem | "What could go wrong before it happens?" |
| | 49 | FMEA Analysis | Formal failure-mode-and-effects breakdown of a process |
| **Medical Education & Literature** | 4 | Ward Round Preparation | Rehearsing the round/admission/handover presentation itself |
| | 10 | Journal & Article Reading | A specific paper relevant to the case |
| | 16 | Basic Science ↔ Clinical Integration | "Why does mechanism X cause finding Y?" |
| | 21 | Evidence Frontier Search | Cutting-edge/most-recent evidence on a narrow question |
| | 31 | First-Principles Pathophysiology Mapping | Building the mechanism chain from scratch |
| | 39 | Global Knowledge Network Matrix | Cross-referencing multiple evidence sources at once |
| | 44 | Clinical Genetics Reasoning | Heritability, genetic testing, family-pattern questions |
| | 45 | Shadow Module 44 (Genetics Adversarial) | Stress-testing a genetics conclusion already reached |
| | 46 | Evidence-Based Medicine Insights | Appraising the evidence behind a specific claim/practice |
| | 47 | Shadow Module (EBM Adversarial) | Stress-testing an EBM appraisal already reached |
| | 48 | Treatment Comparative Analysis & Prognosis | Comparing treatment options and projecting trajectory |
| | 52 | Clinical Pearls Distillation | Distilling the case into memorable teaching points |
| | 53 | Clinical Guideline Intelligence Navigator | "What does the guideline actually say here?" |
| **Health Operations & Economics** | 19 | Community & Social Medicine Insights | Social determinants, occupation, environment |
| | 34 | High-Value Care Auditor | Is this test/treatment low-value or high-value? |
| | 40 | Operational & Throughput Strategist | Flow, beds, wait times, system-level operations |
| | 41 | Clinical Workflow Implementation Science | Changing/implementing a clinical workflow |
| | 43 | Health Economics & Value-Based Care | Cost-effectiveness, value-based-care framing |
| | 51 | Systems-Based Clinical Analysis | The case viewed at the systems level |
| **Framework Architecture & Meta-Design** | 8 | Socratic-Mode Design Specification | Authoring/QA-ing a new Socratic prompt itself |
| | 58 | *(this module)* | Routing a question to the right module |

> [!NOTE] **Application Note:** This table is a *reference guide*, the same role the Master Protocol's Stage 2 mapping table plays for full-case analysis — it is not exhaustive of every step inside every module, only of each module's primary intent. When a question sits genuinely between two categories (e.g., a polypharmacy question that is *also* time-critical), Step 58.1's secondary-intent flag is what catches it; don't force a single-category fit if the question doesn't have one.

### Step 58.3: Single-Pass Execution

**Prompt:**

```
#VibeRounds Now run the selected module's most relevant step against my case
and my question. Follow that module's own Objective, Lifecycle phase, and
output format exactly as documented for it — do not improvise a different
structure. State the module number, name, and step you are running before
you answer. If my question was compound and you selected two modules in Step
58.2, label each module's answer as its own clearly headed section.
```

> [!NOTE] **Application Note:** "Single-pass" is the operative constraint here. Module 58 is deliberately not a second Master Protocol — it answers the one question asked, in the depth that module's own format calls for, and stops. If the user wants every applicable module run, that is a Master-Protocol request, not a Module 58 one (see Step 58.4).

---

## Phase 3 · Closure / Review — Disclose the routing and check it

### Step 58.4: Routing Disclosure & Calibration Check

**Prompt:**

```
#VibeRounds Before we close: (1) state in one line which module/step
answered this and why it was the best fit over the next-closest candidate,
(2) name any case-detail gap that limited the answer's depth, (3) ask me
directly — does this actually answer what I was asking, or did the routing
pattern-match to the wrong category? — and wait for my confirmation before
treating this as resolved, (4) if it's now clear this question needed more
than one module chained together, recommend Module 59 (Adaptive Pipeline
Orchestrator); if instead the whole case needs working, not just this
question, recommend the Master Protocol. Don't try to expand this answer
piecemeal either way.
```

> [!NOTE] **Application Note:** Step 58.4(3) is a direct application of Framework D (Critical Awareness) — the one risk specific to an *auto-routing* module is that it can pattern-match on surface keywords in the question rather than the underlying intent, and the user is in the best position to catch that, but only if asked explicitly rather than assuming silence means correct routing.

---

## Worked shape (illustrative only — not a real case)

```
User: [case: 68M, three weeks post-op, now on seven medications, new confusion]
      Question: "Could this confusion be coming from a drug interaction?"

Step 58.0 → Confirmed question: "is the new confusion plausibly pharmacological?"
            Case has enough detail (med list + timeline present) to proceed.
Step 58.1 → Primary intent: pharmacology/safety audit
Step 58.2 → Candidate scores: Module 13 (Polypharmacy) = 3, Module 26 (Bias
            Auditing) = 1, Module 1 (Socratic) = 1 → Module 13 selected.
Step 58.3 → Runs Module 13's drug-disease/drug-drug conflict table against
            the seven-medication list and the confusion timeline.
Step 58.4 → "Answered via Module 13, Step 13.X — chosen over Module 1 because
            the question named a specific mechanism (drug interaction), not
            a request to reason through the differential generally. Gap:
            exact medication start dates relative to confusion onset weren't
            given. Did this answer what you were actually asking?"
```

---

## Trigger Prompt

Copy and send this whenever you have a case in hand and one specific question about it:

```
#VibeRounds Run Module 58 (Adaptive Question Router) on the following:

Case: [paste case details, or "the case already discussed in this session"]
Question: [your specific question]

Confirm the question, classify its intent, select the single best-fit module
from the Module 0–57 directory using the routing table, run that module's
relevant step against this case, and close with the routing disclosure and
calibration check. Do not run the full Master Protocol unless I ask for it.
```

---

## What this module is and is not

**Module 58 IS:**
- A lightweight dispatcher for one question at a time, mid-session
- A way to get a module's native output format without manually browsing the index
- Self-correcting, via the mandatory calibration check in Closure

**Module 58 IS NOT:**
- A replacement for the Master Protocol's full, exhaustive case workup
- A clinical decision support system — its output inherits the same educational-only status as every other module
- A guarantee of correct routing — Step 58.4(3) exists precisely because it can mis-route, and the user's confirmation is the actual safeguard, not the scoring table

---

> [!IMPORTANT] **Clinical Disclaimer:** Output from Module 58 is a learning observation, generated by routing to and running an educational module — not a clinical decision. It requires independent clinical verification before being acted upon, in line with the Disclosure Statement governing the full VibeRounds directory.

---

## Related Frameworks

- **Framework D (Critical Awareness)** — applied directly in Step 58.4(3); the calibration check is this module's load-bearing safety mechanism.
- **Framework C (Bloom's Taxonomy)** — inherited indirectly, since whichever module is selected carries its own Bloom's-level targeting; Module 58 does not add a separate cognitive-level layer of its own.

---

## Navigation

**Previous:** [Module 57 — Clinical Cognition Deep Dive ←](https://avi33tbtt.github.io/Prompts/Module-CC-Clinical-Cognition-Deep-Dive.html)
**Next:** [Module 59 — Adaptive Pipeline Orchestrator →](https://avi33tbtt.github.io/Prompts/Module-59-Adaptive-Pipeline-Orchestrator.html)
[← Back to README](https://avi33tbtt.github.io/Prompts/)
