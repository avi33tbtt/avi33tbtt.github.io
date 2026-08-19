# VibeRounds Module DRM — Validation Protocol (Revised v2 — Claude-as-Auditor)

**Purpose:** Pilot validation of Module DRM (Diagnostic Reasoning Map) outputs, run on Claude, across a sample of published cases, with LLM-assisted scoring calibrated against human expert judgment.

**Status of this protocol:** Pilot / feasibility study. This design does **not** produce compliance-grade or publication-grade validation on its own — it produces a calibrated estimate of how much to trust the Claude-rated scores across the full case set. Treat findings as preliminary evidence, not proof of clinical safety or teaching efficacy.

> **v2 change log:** The auditor model was switched from Gemini to Claude (same model family as the generator). See Section 3a for why this matters and what it does and does not let you claim.

---

## 1. Objective

Estimate how accurately Module DRM (run on Claude) reconstructs diagnostic reasoning maps for real cases, and establish how much confidence to place in LLM-based (Claude) scoring of those outputs by calibrating it against independent expert clinician review.

---

## 2. Materials

- **Module:** DRM — Diagnostic Reasoning Map ([Module 50](https://avi33tbtt.github.io/Prompts/Module-50-DRM-Diagnostic-Reasoning-Map.html))
- **Case source:** [case_links.html](https://avi33tbtt.github.io/cases/case_links.html) — published corpus
- **Generation model:** Claude
- **Auditor model:** Claude (fresh, isolated conversation per case — see Section 3a)
- **Human reviewers:** 2 independent clinicians

---

## 3. Known limitation — contamination risk

The case corpus is published/public. Claude may have partial memorized familiarity with some cases, which could produce DRM outputs that look like reasoned step-by-step analysis but are partly pattern-matched recall. **Mitigation:** flag any case where Claude's DRM output shows unusually high specificity or confidence disproportionate to the info given (a soft contamination signal), and report this as a named limitation in the writeup — it cannot be fully ruled out with this design.

### 3a. Additional limitation — same-model auditing (v2)

Using Claude as both generator and auditor is **not an independent check** in the way a second model (or a human) would be. Two specific risks:

1. **Shared blind spots.** If Claude's DRM generation has a systematic failure mode (e.g., over-inferring an unstated diagnosis, or missing the same class of "missing investigation"), a Claude auditor is more likely to share that blind spot than an evaluator built on different training data/architecture would be.
2. **Shared contamination.** If a case is memorized (Section 3), the *auditor* instance may also recognize it and score generation quality against its own memorized answer key rather than against the actual case text — inflating scores on exactly the cases most at risk of contamination in the first place.

**Mitigations applied in this revision:**
- The auditor runs in a **fresh, isolated conversation** per case with no memory of having generated that case's output (Section 9.3 already enforced this structurally; it now matters more).
- The auditor is explicitly instructed to **re-derive findings from the original case link**, not from the DRM output's own claims, before scoring the fabrication-check criterion.
- The **human clinician layer (Section 6, 25-case subset) remains the actual ground truth** for this pilot. Claude-rated scores are only ever reported as "Claude-rated, human-calibrated" — never as independently validated (see Section 8).
- If you want a true independent second-model check, substitute a non-Anthropic model as auditor instead of Claude; the calibration math in Section 7 works identically regardless of which model plays the auditor role.

---

## 4. Rubric (pre-specified, before any case is run)

Score each DRM output against this rubric. Do **not** improvise criteria after seeing outputs.

For each of the 5 nodes (Presenting Complaint, History, Examination, Investigations, Synthesis) and the Bias Audit Overlay, rate:

| Criterion | Scale | Definition |
|---|---|---|
| Decision-point classification accuracy | 0–2 | 0 = miscategorized/fabricated, 1 = partially correct type, 2 = correct type (Pivotal/Bifurcating/Closing/Missed) matching the case data |
| Insight correctness | 0–2 | 0 = pathophysiologically/epidemiologically wrong, 1 = vague or generic but not wrong, 2 = specific and correct |
| Fabrication check | Yes/No | Did the node reference findings, history, or results **not present** in the source case? Any "Yes" is a critical flag regardless of other scores. **Auditor must re-derive this against the original case link, not against the DRM output's own internal claims.** |
| Missed-data flag accuracy | 0–2 | For "missing history/investigation" call-outs — 0 = incorrect or absent when it should exist, 2 = correctly identifies a real gap |

Bias Audit Overlay additionally rated:

| Criterion | Scale | Definition |
|---|---|---|
| Bias correctly identified | Yes/No/Overcalled | Did a named bias (anchoring, availability, premature closure, etc.) actually occur at that node in the source case? |

**Case-level composite score:** sum of node scores (max 40) minus any fabrication flags (each fabrication = automatic critical-fail flag on that case, reported separately from the composite score, not averaged in).

---

## 5. Sampling (fixes applied)

- Total case pool: 100 cases from case_links.html.
- **Random stratified sample of 25 cases** (not hand-picked) drawn for human clinician review — stratified across specialty/case-difficulty categories if the corpus has metadata for this; otherwise simple random sampling with a documented seed.
  - *(Increased from the original 10 to reduce the margin of error on the agreement estimate — at n=10 a single disagreement swings apparent agreement by 10 points; n=25 is still small but materially more stable.)*
- Remaining 75 cases are scored by Claude only, using the same rubric.

---

## 6. Blinding

- Clinicians review DRM outputs **without being told the source is AI-generated**, and without seeing the Claude auditor's scores. Outputs are style-normalized (strip any model-identifying headers/artifacts) before handoff.
- The 2 clinicians score **independently** — no discussion until both have submitted scores.
- The Claude auditor is prompted with the same rubric verbatim as the human reviewers, not a paraphrased or looser instruction — and is not shown any human score.

---

## 7. Calibration step (the core fix)

For the 25 cases reviewed by both clinicians and the Claude auditor:

1. **Human inter-rater reliability:** compute agreement between Clinician A and Clinician B (e.g., Cohen's kappa on composite score bands, or ICC on raw composite scores). If human-human agreement is itself poor, the "ground truth" is fuzzy — report this explicitly, since it caps how meaningful any Claude-vs-human comparison can be.
2. **Claude-vs-human agreement:** compute agreement between the Claude auditor's score and the human consensus (average or adjudicated score) on the same 25 cases — report as % exact/near agreement and/or kappa.
3. **Decision rule:**
   - If Claude-human agreement is high (e.g., kappa ≥ 0.6, or a pre-agreed threshold), treat the Claude auditor's scores on the remaining 75 cases as reasonably trustworthy, clearly labeled as **"Claude-rated, human-calibrated"** — not as independently verified, and with the same-model-auditing caveat from Section 3a repeated alongside any summary figure.
   - If agreement is low, do not extrapolate the Claude auditor's scores to the other 75 cases as if they were validated. Report the 75 as exploratory/unverified only, and consider expanding human review instead.

---

## 8. Reporting language (avoid overclaiming)

Use precise framing in any writeup or summary:

- ✅ "Claude-rated (n=100), calibrated against 25 human-reviewed cases, agreement = X%. Note: auditor and generator are the same model family; this is not an independent-model check."
- ✅ "Human inter-rater agreement on the 25-case subset = Y%"
- ❌ "Validated across 100 cases" — not accurate; only 25 are ground-truthed at all, and even those depend on 2 individual clinicians' judgment, not a broader panel or guideline-anchored standard.
- ❌ "Independently verified by AI" — inaccurate when generator and auditor are the same model; always name same-model auditing explicitly.
- Always report the fabrication-flag rate separately and prominently — a low composite score is different from "the model invented findings that were never in the case," and the latter is the more safety-relevant failure mode.

---

## 9. Execution workflow (per-case loop)

This is the exact operational loop to follow for all 100 cases. Do not batch multiple cases into a single Claude conversation — each case gets its own isolated run at both stages, to avoid cross-case contamination and evaluator attention drift.

### 9.1 Master case log

Before starting, create a running log (spreadsheet or plain text) with these columns:

| Case ID | Case link | Claude ran? (Y/N) | Claude output saved? (Y/N) | Claude auditor evaluated? (Y/N) | In 25-case human subset? (Y/N) |
|---|---|---|---|---|---|
| case_001 | http://ashakiran923.blogspot.com/2021/03/60-years-old-male-fever-under-evaluation.html | Y | Y | Y | N |

Update this after every case. This log is your source of truth for (a) knowing when you've hit 100 successful cases, and (b) drawing the random 25-case subset afterward.

### 9.2 Step A — Generate DRM output (Claude)

For each case, in a **fresh Claude conversation**:

1. Upload the Module DRM prompt file (Module-50-DRM) — or paste its contents — to load the module.
2. Provide the case link / case narrative for this one case only.
3. Run the module through to Step DRM.8 (Map Consolidation & Full Pathway Output) to get the structured, single consolidated output block.
4. Save this output as a text file, named by case ID (e.g., `case_014_output.txt`), including the case link at the top of the file for traceability.
5. Update the master log: mark Claude ran = Y, output saved = Y (or N with a note, if the case failed/was skipped).
6. Close the conversation. Do not carry this case's context into the next case.

**Failure rule:** If Claude fails to produce a usable DRM output for a case (refuses, times out, module breaks down partway, output is unusable), do **not** retry — mark it N in the master log with a one-word reason (e.g., "refused," "incomplete," "malformed"), and move on to the next case link. Keep this rule fixed for all 100 attempts so the attrition rate is comparable and not selectively retried into better results.

### 9.3 Step B — Evaluate output (Claude auditor)

For each case that produced a saved Claude output, in a **fresh Claude conversation with no memory of the generation step**:

1. Provide this protocol .md file (for the rubric in Section 4) and the single case's DRM output file (from 9.2) — both, this one case only.
2. Provide the original case link/source, and instruct the auditor to **re-fetch or re-read the primary source directly** and check the DRM output's claims against that source line-by-line — not against the DRM output's own internal consistency. This is the operational fix for Section 3a's same-model risk.
3. Ask the auditor to score the case strictly using the Section 4 rubric, in the exact format specified there:
   ```
   Case ID | Node scores (5 nodes, 0-2 each) | Bias overlay correct (Y/N/Overcalled) | Fabrication flag (Y/N) | Composite score | One-line justification
   ```
4. Save the auditor's evaluation output, named by case ID (e.g., `case_014_eval.txt`).
5. Update the master log: mark Claude auditor evaluated = Y.
6. Close the conversation before starting the next case's evaluation.

### 9.4 Step C — Combine

Once all 100 cases have both a Claude-generated output and a Claude-audited evaluation:

1. Concatenate all auditor evaluation outputs into a single table (one row per case), matching the rubric format — this becomes your full n=100 Claude-rated dataset.
2. From the master log, confirm exactly which case IDs succeeded (target: 100 successful cases; keep a note of how many total case attempts it took to reach 100, since some will be skipped/failed — this attrition rate is itself worth reporting).

### 9.5 Step D — Draw the 25-case human-review subset

1. Only after the full 100-case list is locked in (Step C complete), randomly draw 25 case IDs using a documented, seeded random method (not manual selection).
2. Mark these 25 in the master log ("In 25-case human subset" = Y).

### 9.6 Step E — Expert review (2 clinicians, per case, independent)

For each of the 25 selected cases:

1. Prepare a blinded packet per case: the original case data + the Claude DRM output, with any model-identifying headers stripped, and **no mention that it is AI-generated**.
2. Send this packet to **Clinician A** and **Clinician B** separately — they must not see each other's review or the Claude auditor's score.
3. Each clinician scores the case independently, using the same Section 4 rubric format.
4. Store each clinician's per-case evaluation, labeled by case ID and reviewer (e.g., `case_014_clinicianA.txt`, `case_014_clinicianB.txt`).
5. Repeat for all 25 cases before comparing any scores.

### 9.7 Step F — Calibration analysis

Once Step E is complete for all 25 cases, follow Section 7: compute human-human agreement (Clinician A vs B), then Claude-vs-human agreement on the same 25, and apply the decision rule on whether to trust the Claude auditor's scores across the remaining 75 cases.

---

## 10. What this protocol still does not establish

Even with the fixes above, be transparent that this pilot does **not** demonstrate:

- That Module DRM improves actual learner diagnostic performance (no outcome/pre-post measure here — this only checks output *accuracy*, not *teaching effect*).
- Long-term reliability across case types not represented in this corpus.
- Performance on real (non-published) clinical cases, where contamination risk from training-data memorization is absent.
- **Independent-model agreement** — because generator and auditor are the same model family (v2 change), any reported Claude-human agreement figure should be read as "how well Claude's self-scoring tracks clinicians," not as "how well an independent AI system tracks clinicians." If that distinction matters for your eventual use of this data (e.g., a publication or a safety claim), swap in a non-Anthropic auditor model instead.

These would require a separate outcome study (e.g., pre/post reasoning-skill assessment on a held-out or synthetic case set) — a natural next step once this pilot establishes basic output accuracy.

---

*Pilot protocol — Module DRM validation · adapted from the Post-Hoc Clinical AI Audit Staged Decision Framework, Stage 4–5.*
