---
title: Module 59 — Adaptive Pipeline Orchestrator
---

# Module 59 — Adaptive Pipeline Orchestrator (APO)

**Objective:** Given a case and one or more questions that no single module's native format can fully resolve, work out the *right subset* of VibeRounds modules (not all 58), sequence them into a bespoke multi-stage pipeline with explicit dependencies, execute that pipeline stage by stage, and synthesize the outputs into one consolidated answer — without falling back to running the entire directory.

**Indication:** A compound question ("is this a polypharmacy problem, and if so what should the differential look like once the suspect drug is accounted for?"), or a single question whose proper answer requires one module's output to feed another module's input. Also reached by escalation from **Module 58**, Step 58.2 or 58.4, when single-module routing doesn't fit. Not for a full, untargeted case workup — that is the Master Protocol's job.

---

## Where this sits in the four-tier system

```
Module 0  — routes a person, before any case content, to a starting module
Module 58 — routes a single question to a single module, runs it, stops
Module 59 — routes a question to a bespoke PIPELINE of modules, runs it,
            synthesizes one answer                              ← this module
Master Protocol — runs every module on the entire case, exhaustively
```

Module 59 is not a smaller Master Protocol with fewer stages bolted on — the Master Protocol's seven stages are fixed and run on *every* case regardless of what's asked. Module 59's stages are *constructed fresh each time*, sized and ordered by what this specific question actually needs. A two-module pipeline and a six-module pipeline are both normal outputs of the same module; a fixed stage count is not the design.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Confirm this is pipeline-worthy

### Step 59.0: Scope & Pipeline-Worthiness Check

**Prompt:**

```
#VibeRounds Here is a case [paste case details / reference the case already
in this session] and a question (or set of questions): [paste].

Before building anything: (1) restate what I'm actually asking in one or two
sentences, (2) tell me whether this is genuinely pipeline-territory — does it
decompose into 2–6 distinct sub-asks, or does answering it well require one
module's output as another module's input? — or whether it's actually a
single-module question (in which case, say so and stop; run Module 58
instead), or whether it's actually open-ended enough that the whole case
needs working (in which case, say so and recommend the Master Protocol
instead). Only proceed past this step if it's genuinely the middle case.
```

> [!NOTE] **Application Note:** This gate exists because the failure mode of an orchestrator module is *always* over-scoping — building a four-module pipeline for a question one module could have answered, or under-scoping a case that actually needed the full exhaustive workup. Forcing an explicit three-way decision here, before any module selection happens, is cheaper than discovering the mis-scope at Stage 3 of execution.

---

## Phase 2 · Execution — Design, run, and synthesize

### Step 59.1: Pipeline Design — Decomposition, Module Selection, Sequencing

**Prompt:**

```
#VibeRounds Design the pipeline:

1. Decompose my question into its distinct sub-asks (typically 2–6; if you
   find yourself naming more than 6, stop and tell me to use the Master
   Protocol instead).
2. For each sub-ask, select the single best-fit module using Module 58's
   routing table as a subroutine — show the score, same as Module 58 would.
3. For each selected module, state whether it can run independently or
   whether it needs another selected module's output as an input first.
4. Order the modules into stages by that dependency — Stage 1 first, and so
   on — not by module number. Two modules with no dependency between them
   can share a stage.
5. Present the design as a table: Stage | Module | Why selected | Depends on
   stage(s) | What it contributes to the final answer.

Show me this design before running anything.
```

**Worked dependency patterns (reference — not exhaustive):**

| Pattern | Example chain |
|---|---|
| Differential feeds probability | Module 12 (Differential Deepdive) → Module 36 (Bayesian/Likelihood Ratio Engine) |
| Mechanism feeds differential | Module 16 (Basic Science Integration) → Module 12 (Differential Deepdive) |
| Reasoning trace feeds bias check | Module 32 (Clinical Cognition Loop) → Module 26 (Bias Auditing) |
| Polypharmacy finding feeds anchor check | Module 13 (Polypharmacy Audit) → Module 30 (Diagnostic Anchor Extractor) |
| Guideline lookup feeds value audit | Module 53 (Guideline Navigator) → Module 34 (High-Value Care Auditor) |
| Reasoning feeds adversarial stress-test | Module 44 (Genetics Reasoning) → Module 45 (Shadow Module, Genetics Adversarial) |
| Case synthesis feeds teaching distillation | Any clinical-reasoning module → Module 52 (Clinical Pearls Distillation) |

> [!NOTE] **Application Note:** These are illustrative pairings, not a fixed dependency graph — the real dependency for *this* case is whatever Step 59.1.3 determines it to be. Use this table the way the routing table in Module 58 is used: as a sense-check, not a lookup answer.

### Step 59.2: Pipeline Execution

**Prompt:**

```
#VibeRounds Now run the pipeline you designed, one stage at a time. Before
each stage, state which stage and module you're running. Run each module's
relevant step in its own native Lifecycle/output format — do not blend
formats across modules. After each stage, write one line tagged [CARRY]
naming the specific finding or output the next stage needs from this one.
Do not skip ahead, collapse stages, or run a later stage before an earlier
one it depends on has produced its [CARRY] line.
```

> [!NOTE] **Application Note:** The `[CARRY]` tag mirrors the Master Protocol's `[GAP]` tagging convention — lightweight, inline, and written at the moment it's true rather than reconstructed afterward. Stage 3's synthesis step depends on these being logged in real time the same way the Master Protocol's Stage 7 depends on `[GAP]` tags being logged during Stages 1, 4, and 6.

### Step 59.3: Cross-Stage Synthesis

**Prompt:**

```
#VibeRounds Synthesize the pipeline's outputs into one consolidated answer
to my original question. This is not a stapled-together summary of each
stage's output — explicitly connect how each stage's finding changed or
confirmed what the next stage produced, and state the single answer that
emerges from the chain as a whole. If the pipeline had 2–3 stages, deliver
this inline. If it had 4–6, deliver it as one consolidated document with a
synthesis section first, followed by each stage's full output as a labeled
subsection.
```

> [!NOTE] **Application Note:** This is where Module 59 earns its place over just running Module 58 multiple times in a row. Running three single-pass modules back to back and reading all three answers is not the same as a synthesis that says *why* Stage 2's finding changed what Stage 3 looked for. If the synthesis section could be deleted without losing anything, the pipeline didn't need orchestrating — it needed three Module 58 calls.

---

## Phase 3 · Closure / Review — Disclose the pipeline and check it

### Step 59.4: Pipeline Disclosure & Calibration Check

**Prompt:**

```
#VibeRounds Before we close: (1) list the constructed pipeline — stage,
module, one-line rationale — as built, (2) pool every [CARRY] tag and any
case-detail gap surfaced at any stage into one short list, (3) ask me
directly — does the synthesized answer actually address what I originally
asked, or did the pipeline over-build (more modules than the question
needed) or under-build (missed a sub-ask)? — and wait for my confirmation,
(4) if it's now clear the case needs full exhaustive coverage beyond this
question, recommend the Master Protocol explicitly rather than trying to
bolt more stages onto this pipeline after the fact.
```

> [!NOTE] **Application Note:** Step 59.4(3) is Framework D applied to orchestration specifically — a pipeline is harder to sanity-check at a glance than a single module's answer, because a wrong stage in the middle can look locally reasonable while still steering the synthesis somewhere the user didn't ask for. The explicit over-build/under-build framing gives the user a concrete axis to check against, rather than a generic "does this look right."

---

## Worked shape (illustrative only — not a real case)

```
User: [case: 74F, recurrent falls, six medications, recent guideline update
      on fall-risk prescribing]
      Question: "Are her meds contributing to the falls, and if so, does
      that change what's actually high-value to keep prescribing?"

Step 59.0 → Confirmed: two chained sub-asks (drug contribution to falls;
            value of continuing each drug given that). Genuinely pipeline-
            territory — not single-module, not full-case.
Step 59.1 → Sub-ask 1 → Module 13 (Polypharmacy Audit), score 3.
            Sub-ask 2 → Module 34 (High-Value Care Auditor), score 3,
            depends on Module 13's output.
            Design: Stage 1 = Module 13 → Stage 2 = Module 34.
Step 59.2 → Stage 1 runs Module 13's drug-disease conflict table against the
            six medications and fall timeline. [CARRY]: two drugs flagged
            as fall-risk-contributory.
            Stage 2 runs Module 34's value audit on those two flagged drugs
            specifically, using the new guideline as the value reference.
Step 59.3 → Synthesis: names which drug is the stronger fall contributor,
            and states — based on that, not generically — which one Module
            34 found to be lower-value to continue.
Step 59.4 → "Pipeline: Module 13 → Module 34. Gap: fall circumstances (time
            of day, post-dose timing) weren't given, which would sharpen
            Stage 1's confidence. Does this answer what you asked, or did
            it under-build by not also checking Module 30 for anchoring on
            medications over other fall causes?"
```

---

## Trigger Prompt

Copy and send this whenever a question needs more than one module chained together, but doesn't warrant the full Master Protocol:

```
#VibeRounds Run Module 59 (Adaptive Pipeline Orchestrator) on the following:

Case: [paste case details, or "the case already discussed in this session"]
Question(s): [your question — note if it's genuinely compound]

Confirm scope, decompose into sub-asks, design a dependency-ordered pipeline
using Module 58's routing table as a subroutine, run it stage by stage with
[CARRY] tags, synthesize one consolidated answer, and close with the pipeline
disclosure and calibration check. Do not run the full Master Protocol unless
I ask for it, and do not force a single-module answer if this is genuinely
multi-stage.
```

---

## What this module is and is not

**Module 59 IS:**
- A way to get a multi-module answer sized to the actual question, not the whole directory
- An explicit alternative to either forcing a compound question into one module, or over-running the full Master Protocol on a narrow ask
- Self-correcting via the over-build/under-build calibration check in Closure

**Module 59 IS NOT:**
- A fixed-stage pipeline — stage count and order are constructed per question, not templated
- A replacement for the Master Protocol when the actual need is full-case, exhaustive coverage
- A clinical decision support system — synthesized output inherits the same educational-only status as every module it draws on
- A guarantee of correct pipeline design — Step 59.4(3) exists because a pipeline can be subtly over- or under-built while still reading as coherent, and the user's confirmation is the real safeguard

---

> [!IMPORTANT] **Clinical Disclaimer:** Output from Module 59 is a learning observation, generated by chaining and synthesizing several educational modules — not a clinical decision. It requires independent clinical verification before being acted upon, in line with the Disclosure Statement governing the full VibeRounds directory.

---

## Related Frameworks

- **Framework D (Critical Awareness)** — applied directly in Step 59.4(3), the over-build/under-build calibration check.
- **Framework B (Fink's FLINK Taxonomy — Integration dimension)** — Step 59.3's synthesis is a direct instance of Fink's "Integration" dimension: connecting separate ideas (here, separate modules' outputs) into one coherent understanding, rather than leaving them as parallel, unconnected findings.

---

## Navigation

**Previous:** [Module 58 — Adaptive Question-to-Module Router ←](https://avi33tbtt.github.io/Prompts/Module-58-Adaptive-Question-Router-Executor.html)
[← Back to README](https://avi33tbtt.github.io/Prompts/)
