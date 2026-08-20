[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module — Mapper: Insight-to-Case Anchor

### Anchoring every AI-generated insight to the exact point in the case that justifies it

*Vibe Rounds · Extending the closed self-audit loop (Vibe Rounds Module → Mapper → Validate)*

---

> [!IMPORTANT] **Clinical Disclaimer & Independent Verification Required**
> All AI-generated outputs produced using this module — including citations, anchors, and "unmapped" flags — **require independent clinical verification before being acted upon.** A successful mapping confirms *traceability*, not clinical correctness. This module does not substitute for clinical judgment, professional medical advice, or institutional safety protocols.

> [!NOTE] **What this module is and is not**
> The Mapper is a **reference librarian, not a reasoner.** It does not generate new clinical insight, does not judge whether an insight is *correct*, and does not rank differentials. It only answers one question, mechanically: *where in the case does this claim come from — or does it come from nowhere at all?*
>
> The direction of use matters and is easy to get backwards:
> - This is **not** a tool for a clinician to look up an answer and check it against a case.
> - It is the reverse: a clinician is already thinking *through* a case. A Vibe Rounds module (e.g. Module 1 Socratic Clinical Reasoning, Module 12 Differential Diagnosis Deepdive, Module 30 Diagnostic Anchor Extractor) has produced a Socratic question, a flagged concern, or a differential weighting *as an assistant to that thinking*. The Mapper's job is to keep that AI-generated thread visibly anchored to real case data as the clinician works, not to hand out an answer to be checked afterward.

---

## Objective

Given (1) a raw clinical case — the ground truth timeline, history, labs, and imaging — and (2) the output of any upstream Vibe Rounds module, produce inline citations or anchors that map each discrete AI-generated claim back to the exact text span, timestamp, or data point in the case that justifies it. Any claim that cannot be mapped is surfaced explicitly as **unmapped**, rather than left to blend invisibly into fluent prose.

## Indication

Reach for the Mapper any time a Vibe Rounds module has produced free-text reasoning output that will be read, trusted, or acted on by a learner — a Socratic question, a red flag, a weighted differential, a pattern-recognition note, a bias-audit finding. It is the step that sits *between* "the AI said something" and "the learner trusts it," converting an unauditable claim into a checkable one.

Do not use it as a standalone answer-lookup tool. It has nothing to map without an upstream module's output feeding it.

## Lifecycle

**Initiation → Execution → Closure/Review**, same three-phase structure as every other Vibe Rounds module.

| Phase | What happens |
| --- | --- |
| **Initiation** | Both inputs are assembled and normalized: the case (with a stable line/timestamp reference scheme) and the upstream module's output (broken into discrete, mappable claims). |
| **Execution** | Each claim is matched — or explicitly failed to match — against a specific case anchor. |
| **Closure/Review** | The full case is returned with every claim now inline-cited or flagged unmapped, plus a summary coverage count for quick audit. |

---

## Steps

### Step M.0 — Case Normalization (Initiation)

Before mapping can happen, the case needs stable, citable anchors — otherwise "map this claim to the case" has nothing precise to point at.

**Prompt:**
```
You are preparing a clinical case for citation-mapping. Below is a raw case.
Do not interpret, summarize, or diagnose anything.

Your only task: return the case with every discrete data point given a stable
anchor ID, in the format [C-<section>-<n>], e.g. [C-HX-3], [C-LAB-12], [C-IMG-2].
Sections: HX (history), TL (timeline/events), LAB (labs), IMG (imaging),
MED (medications), EXAM (exam findings).

Preserve the original wording exactly. Do not paraphrase, reorder, or omit
anything. Output the full case back with anchors inserted inline.

[paste de-identified case]
```

**Application Note:** This step should be re-run once per case, not once per module output — the anchored case is reusable across every subsequent Mapper call for that case.

---

### Step M.1 — Claim Extraction (Initiation)

**Prompt:**
```
Below is the output of a Vibe Rounds module (a Socratic question, flagged
concern, or differential weighting). Break it into a numbered list of
discrete, individually-checkable claims. A claim is any statement that
asserts something is true of, or derived from, the case — not a stylistic
transition or a rhetorical question with no factual content.

Do not evaluate whether the claims are correct. Do not add claims that
are not already present in the text.

[paste upstream module output]
```

**Application Note:** Splitting first prevents the common failure mode where one long paragraph gets a single citation covering a claim it doesn't actually support.

---

### Step M.2 — Anchor Mapping (Execution)

**Prompt:**
```
You are acting as a reference librarian, not a clinical reasoner. For each
numbered claim below, search the anchored case and return:

- The anchor ID(s) [C-...] that directly support the claim, if any exist.
- If no anchor directly supports the claim, write: UNMAPPED — no supporting
  data point found in the case.
- If a claim is only partially supported (e.g. the timing is right but the
  value is inferred, not stated), write: PARTIAL — [anchor ID] supports part
  of this claim; the remainder is not present in the case.

Do not infer connections a clinician would have to reason to reach. Only
map claims to anchors that state or directly entail the claim's content.
Do not judge whether the claim is clinically correct — only whether it is
traceable to the case as written.

Anchored case:
[paste anchored case from Step M.0]

Claims to map:
[paste numbered claims from Step M.1]
```

**Application Note:** The instruction *"do not infer connections a clinician would have to reason to reach"* is the load-bearing line in this prompt — it is what keeps the Mapper a librarian rather than a second reasoner quietly re-deriving the insight and then citing itself.

---

### Step M.3 — Coverage Report (Closure/Review)

**Prompt:**
```
Using the mapping results above, produce a short coverage summary:

- Total claims: [n]
- Fully mapped: [n] ([%])
- Partially mapped: [n] ([%])
- Unmapped: [n] ([%])

List every UNMAPPED and PARTIAL claim verbatim with its number, so a learner
can immediately see which parts of the upstream module's output are not
traceable to the case as documented.

Do not editorialize on why a claim is unmapped or suggest what the case
"probably" meant. State only what was found.
```

**Application Note:** This is the built-in hallucination detector referenced in the design rationale: a high unmapped rate on a given module output is itself the signal, surfaced as a number rather than buried inside otherwise-fluent prose.

---

## Worked Example (illustrative, not a real case)

**Upstream module output (Module 1, Socratic):** *"Given the patient's fever pattern and the leukocytosis trending upward over 48 hours, could this represent an evolving intra-abdominal source rather than the presumed pneumonia?"*

**Step M.1 output:**
1. Fever pattern is present in the case.
2. Leukocytosis trended upward over 48 hours.
3. An intra-abdominal source is a plausible alternative to the presumed pneumonia.

**Step M.2 output:**
1. Mapped — [C-TL-4], [C-TL-7]
2. Mapped — [C-LAB-3], [C-LAB-6]
3. UNMAPPED — no supporting data point found in the case. (This is the module's generated hypothesis, not a case fact — expected and correct for a Socratic prompt, which exists to raise questions the case doesn't yet answer.)

This is the expected shape of output for a *good* Socratic question: the factual scaffolding (1, 2) is fully anchored, and the generative leap (3) is correctly identified as unmapped rather than silently presented as if it were case-derived.

---

## Relationship to the Rest of Vibe Rounds

```
Vibe Rounds Module  →  generates reasoning / insight
Mapper Module        →  anchors that insight to case data      ← this module
Validate Module       →  stress-tests the insight against ground truth
```

The Mapper does not close the loop by itself — pair it with the Validate module (adversarial stress-test against ground truth) for the full closed, self-auditing cycle described in the Vibe Rounds architecture writeup.

---

## Validated Env.

Not yet tested in a live environment. Documented here as a design specification, consistent with the rest of the untested, case-report/expert-opinion-level Vibe Rounds module set.

---

> [!NOTE] **Reminder:** Every mapping produced by this module is a **learning observation**, not a clinical decision. An UNMAPPED result flags a traceability gap for a learner to investigate further with a supervising clinician — it is not itself a diagnosis of error in the case or in the upstream module.

---

*Module — Mapper: Insight-to-Case Anchor.* [← Back to README](https://avi33tbtt.github.io/Prompts/)
