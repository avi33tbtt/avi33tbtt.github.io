# Module 9 — N-of-1 Case Research Protocol (Vibe Rounds Core Method)

*A standalone companion to `VibeRounds_Prompt_Modules_v4.txt`*

**Drafted from:** *Vibe Rounds — N-of-1 Protocol & Worked Case* (Extended Preprint, June 2026), Section 2 ("Protocol Description: The Seven Stages of Vibe Rounds") and Table 1.

---

## How This Module Relates to v4

Modules 0–8 in `VibeRounds_Prompt_Modules_v4.txt` cover teaching (Module 1), patient-advocate documentation and monitoring (Modules 2–3), ward-round prep (Module 4), single-case auditing (Module 5), registry-level analytics (Modules 6–7), and Socratic-prompt design QA (Module 8). None of them implement the seven-stage research protocol that is actually the subject of the Vibe Rounds preprint — the workflow a clinician runs alone, on one complex case, from raw narrative to a fixed, publication-ready output package. This module fills that gap.

**Numbering:** This file is written as "Module 9" so it can be appended to v4 without renumbering anything that already exists. If merged, it should slot in after Module 8 and before the Supplementary Frameworks, and the Module Index, Lifecycle Coverage Summary, and Appendix checklist in v4 should each gain a Module 9 line — see [Merge Notes](#merge-notes-ifwhen-appended-to-v4) at the end of this file.

**Two ways to use this module:**

- **Chunked (Steps 9.1–9.7):** work one stage at a time, in your own words, pasting your case material fresh at each stage. Recommended — each stage's output becomes the next stage's input, and reviewing each output before moving on is exactly the discipline the preprint describes the protocol as enforcing (Section 5.2; the point is better organised reasoning, not speed).
- **Single-session (Step 9.0):** one orchestration prompt that asks the AI to run all seven stages in one conversation, pausing for your confirmation between each. Faster, but offers fewer natural checkpoints to catch the AI drifting off-stage. Use when you already know the case well and want a single working session rather than a multi-day protocol run.

---

## Module 9 Overview

**Objective:** Take a clinician from raw, unstructured case narrative to the protocol's fixed output package (severity rating, priority rating, condensed journey timeline, intervention-symptom correlation table) via seven explicit stages, using an LLM as a Socratic interlocutor — expanding the option space and structuring evidence — rather than a diagnostic oracle.

**Indication:** A single clinician, working alone, with one complex patient and an unstructured personal or clinical health record, who wants a disciplined alternative to writing a single synthesized narrative straight from memory. Works equally on a rare, multisystem case (depth) or a routine ward presentation (scale) — the protocol's value does not depend on disease rarity (preprint Section 4).

**Not indicated for:** Population-scale or cohort-level analysis (see v4 Modules 6–7 instead), or as a substitute for clinical judgment — at every stage, diagnostic and management decisions remain with the clinician, never the AI (preprint Section 2, Section 5.4).

### Lifecycle

| Phase | Steps |
|---|---|
| **1 · Initiation** | Step 9.0 (optional single-session orchestration) and Step 9.1 (Stage 1: index case structuring) |
| **2 · Execution** | Steps 9.2–9.6 (Stages 2 through 6) |
| **3 · Closure/Review** | Step 9.7 (Stage 7: convergence to fixed outputs), plus Step 9.8 (manuscript/CARE export) and Step 9.9 (Critical Awareness debrief, cross-linked to v4 Framework D) |

A note on rigor, carried through every step below: the preprint frames each stage as exposed to a specific kind of reviewer challenge (Table 1) — this module's prompts are written to produce that documentation as a byproduct of running the stage, not as an afterthought bolted on at the end.

---

## Step 9.0 — Single-Session Orchestration (Optional Entry Point)

Use this only if you want one continuous session rather than working the seven stages separately over Steps 9.1–9.7. It produces the same outputs, just compressed into one conversation with built-in pause points.

> **Prompt:** "#VibeRounds I am running the full seven-stage Vibe Rounds n-of-1 case research protocol on one patient case in a single session. You will act as a Socratic interlocutor throughout — expanding the option space and structuring evidence, not concluding a diagnosis. The seven stages, in order, are: (1) Index case structuring — extract two clean term lists from my case narrative: all diagnosis-related terms, and all intervention-related terms. (2) Comparator identification — using those terms as search seeds, help me identify a small set of comparable published cases; state which sources you are drawing on and on what basis you judge something comparable. (3) Aggregation and cross-comparison — compare the comparator cases against my index case and surface shared features and points of divergence; ask me to confirm which of three match criteria is doing the work in any similarity claim — shared gene, shared phenotype cluster, or shared intervention response. (4) Two-tier analysis — analyse my case twice: once restricted only to the coded diagnosis/intervention terms from Stage 1 with no narrative context, and once using the full narrative; present both tiers separately, not merged. (5) Open-ended analytic ideation — ask me 'what else would you analyze?' and generate candidate analyses for me to accept, reject, or modify; do not converge on conclusions at this stage. (6) Selection of an analytic menu — once I have told you which Stage 5 candidates I want to pursue, help me build a working menu of the analyses I will actually run. (7) Convergence to fixed outputs — regardless of which Stage 6 analyses we ran, produce: a severity rating per diagnosis, a priority rating per diagnosis, a condensed patient-journey timeline, and an intervention-symptom correlation table. After each stage, stop and ask me to confirm before moving to the next — do not collapse stages or skip ahead. Confirm you understand this structure before I share my case material."

**Application Note:** This is a compression of Steps 9.1–9.7 below into one prompt. The built-in stop-and-confirm instruction is the load-bearing part — without it, an LLM will tend to race ahead and synthesize a single narrative, which is precisely the premature-closure failure mode the two-tier split (Stage 4) and the ideation stage (Stage 5) exist to prevent (preprint Sections 1.2, 2.4, 2.5).

---

## Phase 1 · Initiation

### Step 9.1 — Stage 1: Index Case Structuring

**Maps onto:** CARE guideline case-description fields — patient information, clinical findings, diagnostic assessment, interventions (preprint Table 1, Section 2.1).

> **Prompt:** "#VibeRounds We are starting Stage 1 of the Vibe Rounds protocol: index case structuring. I am going to paste my case narrative — it may be a patient-reported history, a clinical record, a longitudinal blog, or notes I have taken myself. Your task is narrow: extract two clean, de-duplicated term lists, and nothing else yet. List A: every diagnosis-related term mentioned or implied (confirmed diagnoses, suspected diagnoses, ruled-out diagnoses — label which is which). List B: every intervention-related term mentioned (medications, procedures, dietary or lifestyle interventions, self-trialed or informal interventions — label source where stated, e.g. prescribed vs. self-trialed). Do not interpret, rank, or synthesize anything yet — this stage is extraction only. Where a term is ambiguous, list it and flag the ambiguity rather than resolving it yourself. [paste case narrative]"

**Application Note:** Resist the temptation to let the AI synthesize at this stage even if it offers to. The preprint is explicit that this stage's value is in producing two clean term lists reusable in later stages without re-extraction (Section 2.1) — synthesis belongs to Stage 4 onward, and pulling it forward here is exactly the kind of premature closure the protocol is designed to prevent.

#### Step 9.1a — Stage 1 Completeness Check *(sub-step, run immediately after 9.1)*

> **Prompt:** "#VibeRounds Before we move to Stage 2, check your own Stage 1 output against my original text: did you miss any diagnosis or intervention term, including ones mentioned only once, mentioned as ruled-out, or mentioned in an appendix or aside? List anything you may have missed on a second pass, even tentatively."

**Application Note:** A second-pass check here is cheap and catches the single most consequential failure mode of this stage — a missed term silently narrows every downstream comparator search (Stage 2) and analysis (Stage 4) without anyone noticing until much later.

---

## Phase 2 · Execution

### Step 9.2 — Stage 2: Comparator Identification

**Maps onto:** A PRISMA-style search note — databases, seed terms, inclusion criteria (preprint Table 1, Section 2.2). This is, by the preprint's own account, the stage most exposed to a reviewer's reproducibility challenge.

> **Prompt:** "#VibeRounds We are starting Stage 2: comparator identification. Using the diagnosis and intervention terms from Stage 1 as search seeds, help me identify a small set of comparable published cases — aim for roughly five unless the case is unusually rare or unusually common. Before you give me results, state explicitly: (1) which sources you are searching or drawing on, (2) what seed terms you are using, drawn directly from the Stage 1 lists, (3) what criteria a case must meet to count as a comparator — be explicit about whether you mean shared gene, shared phenotype cluster, or shared intervention response, since these are different criteria and I need to know which one you are using for each comparator you propose. Present the comparator list with, for each case, one sentence on why it qualifies under your stated criterion."

**Application Note:** The preprint frames a defensible version of this stage as stating which databases were searched, on what date, with what seed terms, and by what inclusion criteria (Section 2.2) — treat the AI's answer to the three-part question above as the raw material for that documentation, not as optional color. If you are using a model with live web search, have it actually search rather than recall from memory, and record the search date.

#### Step 9.2a — Search-Strategy Note Export *(sub-step)*

> **Prompt:** "#VibeRounds Convert what we just did in Stage 2 into a short, PRISMA-style search-strategy note I could drop into a methods section: databases/sources searched, date, seed terms used, inclusion criteria applied, and number of comparators identified versus considered and excluded. Keep it under 150 words."

**Application Note:** Run this even if you have no immediate plan to publish. Producing the note forces the search criteria to be stated precisely enough to defend, which is the actual point of the stage (Section 2.2) — the manuscript-readiness is a side benefit.

### Step 9.3 — Stage 3: Aggregation and Cross-Comparison

**Maps onto:** Explicit match criteria — shared gene / phenotype cluster / intervention response (preprint Table 1, Section 2.3).

> **Prompt:** "#VibeRounds We are starting Stage 3: aggregation and cross-comparison. Pool the full text of the Stage 2 comparator cases into a single working set and compare it against my index case. Surface: (1) features shared between my case and the comparators, (2) points of clear divergence, (3) for every claim of similarity you make, state explicitly which one of the three match criteria — shared gene, shared phenotype cluster, or shared intervention response — is doing the work. If a similarity claim mixes more than one criterion, separate them rather than presenting it as a single match. Flag anywhere you are uncertain which criterion applies."

**Application Note:** This is the stage where comparator cases get conflated most easily — two cases can look alike on phenotype while sharing nothing genetically, or vice versa. The preprint singles this out as something "a reviewer will reasonably probe" (Section 2.3); pressing the AI to name its criterion per-claim, rather than once for the whole comparison, is what keeps the output defensible.

### Step 9.4 — Stage 4: Two-Tier Analysis

**Maps onto:** The protocol's most original methodological contribution — not a standard CARE/PRISMA reporting field (preprint Table 1, Section 2.4).

> **Prompt:** "#VibeRounds We are starting Stage 4: two-tier analysis — the protocol's central methodological move. Run two separate analyses of my case and present them as two distinct, clearly labeled outputs; do not merge them into one synthesized narrative. Tier 1 (coded view): analyse using only the Stage 1 diagnosis and intervention term lists, stripped of all narrative context — this should approximate what a structured registry or database entry would capture. Tier 2 (narrative view): analyse using the full unstructured case text, preserving sequencing, context, and clinical reasoning that the coded view strips away. After presenting both, tell me explicitly: what does Tier 2 surface that Tier 1 misses, and is there anything Tier 1's stripped-down view makes clearer by removing narrative noise?"

**Application Note:** The preprint is explicit that the two tiers "answer different questions" (Section 2.4) and that collapsing them defeats the stage's purpose. If the AI's first response merges the tiers — a common failure mode, since most models default to synthesis — ask it directly to redo the stage with the tiers kept separate before moving on.

### Step 9.5 — Stage 5: Open-Ended Analytic Ideation

**Maps onto:** The Socratic/option-generation step proper (preprint Table 1, Section 2.5).

> **Prompt:** "#VibeRounds We are starting Stage 5: open-ended analytic ideation. This stage is Socratic, not conclusive — your job here is to expand the option space, not narrow it. Given everything from Stages 1–4, answer one open question as expansively as you can: what else would you analyze about this case that we have not yet done? Generate as many distinct candidate analyses as you can — do not pre-filter for what you think I will choose, and do not rank them yet. For each candidate, give one sentence on what question it would answer. I will decide what to keep in the next stage."

**Application Note:** Resist closing this stage early. The preprint frames Stage 5 as the point where "the AI's role is most clearly Socratic: it is not concluding anything, it is generating candidate questions and analyses for the clinician to accept, reject, or modify" (Section 2.5) — a short or pre-filtered list here quietly collapses the stage back into Stage 4's synthesis instead of genuinely expanding the option space.

### Step 9.6 — Stage 6: Selection of an Analytic Menu

**Maps onto:** A transferable menu of candidate analyses other clinicians could adapt (preprint Table 1, Section 2.6). The worked example's menu comprised six items: a symptom-trigger-intervention timeline, a gene-interaction network map, an intervention-response scoring scheme, a literature-gap analysis, a risk-trajectory model, and a lab-value pattern analysis.

> **Prompt:** "#VibeRounds We are starting Stage 6: selection of an analytic menu. From the Stage 5 candidates, I am going to tell you which ones I want to actually run — [list your chosen candidates, e.g.: a symptom-trigger-intervention timeline, a literature-gap analysis, a risk-trajectory model]. For each one I select, restate it as a concrete, runnable task specific to my case — not the generic description from Stage 5 — so I have a working menu I can execute one item at a time. If any of my selections overlaps heavily with another, tell me now, before we run them separately."

**Application Note:** The preprint frames this menu as something "intended to be transferable — a starting point other clinicians could adapt to their own case" (Section 2.6). If you want a generic version of your own menu to reuse on a future case, ask for that as a follow-up: *"Strip the case-specific detail from this menu and give me the generic version."*

#### Step 9.6a — Running an Individual Menu Item *(repeatable sub-step)*

> **Prompt:** "#VibeRounds Run the next item from our Stage 6 menu: [name the specific item, e.g. 'the literature-gap analysis']. Use everything established in Stages 1–4. Where your finding is a negative claim — for example, 'no published report describes this combination' — state plainly that this is a search-coverage-limited claim, not a settled fact, and that it requires independent verification before being treated as a finding of novelty."

**Application Note:** Repeat this sub-step once per menu item. The explicit hedge on negative/novelty claims is drawn directly from the preprint's own treatment of its literature-gap finding (Section 5.1: *"Any claim that 'no existing combination has been found' ... should be treated as a provisional finding requiring independent verification, not a settled fact"*) — bake that caveat into the prompt rather than relying on the AI to add it unprompted.

---

## Phase 3 · Closure / Review

### Step 9.7 — Stage 7: Convergence to Fixed Outputs

**Maps onto:** The standard output package — severity rating, priority rating, condensed timeline, correlation table (preprint Table 1, Section 2.7). This is the protocol's mandatory deliverable set, independent of how many or which Stage 6 analyses were run, and independent of whether the case turns out to be publishable as a novel finding (Section 5.2).

> **Prompt:** "#VibeRounds We are converging to Stage 7 — the fixed output package. Regardless of which Stage 6 analyses we ran, produce all four of the following: (1) Severity rating per diagnosis — a qualitative severity level for each diagnosis or suspected diagnosis identified in Stage 1, with one sentence of justification per rating, and an explicit note where a rating is contingent on a pending confirmation (e.g. a VUS awaiting biopsy) versus already confirmed. (2) Priority rating per diagnosis — a qualitative clinical-action priority for each diagnosis, distinct from severity (a high-severity but already well-managed condition may be lower priority for new action than a moderate-severity one with an unaddressed risk). (3) Condensed patient-journey timeline — a compressed, chronological timeline of the case suitable for someone seeing the case for the first time. (4) Intervention-symptom correlation table — every intervention identified in Stage 1, paired with its reported or observed effect on symptoms, explicitly labeled as patient-reported, clinician-observed, or unblinded/uncontrolled n-of-1 observation as appropriate — do not present these as if they were controlled trial evidence."

**Application Note:** This step is the protocol's non-negotiable floor. Reaching it on a case that turns out to have nothing novel about it is not a failure of the protocol — the preprint argues directly that "the expected outcome of running Vibe Rounds on an arbitrary complex case is that it produces better-organized, more complete clinical reasoning, not a publishable novel syndrome" (Section 5.2), and that this is itself a meaningful, organizational contribution rather than a disappointing one.

### Step 9.8 — Manuscript / CARE-Field Export *(Optional)*

Run this only if you intend to write the case up formally.

> **Prompt:** "#VibeRounds Take everything produced across Stages 1–7 and map it onto the CARE guideline's case-description fields: patient information, timeline, diagnostic assessment, therapeutic interventions, follow-up and outcomes. For each field, either pull directly from our Stage outputs or flag explicitly what is still missing and needs to be gathered before this could be submitted. Separately, attach the Stage 2 search-strategy note (Step 9.2a) as the search-reproducibility appendix. Do not invent any detail not already established in Stages 1–7 to fill a CARE field — leave it marked as a gap instead."

**Application Note:** The explicit instruction not to invent detail to fill a field gap matters — an LLM under instruction to "produce a CARE-mapped summary" will sometimes smooth over a genuine gap rather than flag it, which is the opposite of what a methods-honest write-up needs.

### Step 9.9 — Critical Awareness Debrief *(Cross-Linked to v4 Framework D)*

If you are using this module alongside `VibeRounds_Prompt_Modules_v4.txt`, this step is the same Critical Awareness Standing Prompt defined there — included here in full so this file is usable on its own without v4.

> **Prompt:** "#VibeRounds Apply the Critical Awareness lens to this protocol run: (1) What cognitive bias most likely affected the reasoning across these seven stages — mine or the AI's? (2) What is the most important clinical risk of acting on today's Stage 7 outputs without further verification? (3) What would the strongest critic of this case research say about its methodology — particularly about the Stage 2 comparator search and any Stage 6 novelty or literature-gap claim? (4) What single uncertainty should I hold clearly in mind before treating anything from this run as more than a provisional hypothesis?"

**Application Note:** Run this once at the close of every protocol pass, chunked or single-session. It is deliberately the same prompt structure as v4's standing Critical Awareness prompt so that a case run through Module 9 and a teaching session run through Modules 1–7 produce comparably self-critical closures.

---

## Quick Reference — All Nine Steps at a Glance

| Step | Stage | Description |
|---|---|---|
| 9.0 | — | Single-session orchestration *(optional alternative to 9.1–9.7)* |
| 9.1 | 1 | Index case structuring *(+ 9.1a completeness check)* |
| 9.2 | 2 | Comparator identification *(+ 9.2a search-strategy export)* |
| 9.3 | 3 | Aggregation and cross-comparison |
| 9.4 | 4 | Two-tier analysis (coded vs. narrative) |
| 9.5 | 5 | Open-ended analytic ideation |
| 9.6 | 6 | Selection of an analytic menu *(+ 9.6a run-an-item, repeatable)* |
| 9.7 | 7 | Convergence to fixed outputs (severity, priority, timeline, correlation table) |
| 9.8 | — | Manuscript / CARE-field export *(optional)* |
| 9.9 | — | Critical Awareness debrief |

---

## Safety & Compliance Note *(Consistent with v4)*

This module, like v4's Modules 5–7, is designed for use against real case material. Before Step 9.1: confirm the case narrative you are about to paste is de-identified, consistent with the de-identification requirement in the v4 Safety & Compliance Note and the Data Security Notes in v4 Modules 2–3. At every stage, the AI's role is Socratic and structuring, not diagnostic — diagnostic interpretation, clinical judgment, and decisions about which AI-suggested lead to pursue remain with the clinician throughout (preprint Section 2, Section 5.4, Section 5.6). Treat all Stage 2/3/6 literature-gap or novelty claims as provisional and search-coverage-limited until independently verified (Section 5.1) — this applies whether or not the case is ultimately written up for publication.

---

## Merge Notes *(If/When Appended to v4)*

If this file is folded into `VibeRounds_Prompt_Modules_v4.txt` as Module 9, the following updates to v4's front matter and back matter would keep the document internally consistent:

- **Module Index:** add "9. N-of-1 Case Research Protocol (Vibe Rounds Core Method)" after Module 8.
- **How to Use This Document:** add a line — "Running the seven-stage research protocol on your own complex case, alone? → Module 9."
- **Lifecycle Coverage Summary:** Module 9 carries Framework D (Step 9.9) as its Critical Awareness application; it does not currently carry Frameworks A, B, or C (Humanistic Persona, FLINK, Bloom's) since the preprint's seven stages are evidence-structuring and search-discipline stages rather than learner-facing teaching stages — these could be layered in later (e.g. a Bloom's pass over Stage 7's outputs) if a teaching use case for Module 9 emerges.
- **Appendix — Quality Assurance & Publication Checklist:** Module 9 contains no patient data and is template-safe as written, same as Modules 1–4; add it to that line. Add a second note alongside the existing "known limitations" bullet: Stage 2/6 novelty and literature-gap claims carry the same search-coverage-limitation caveat already disclosed in the preprint (Section 5.1) and should be disclosed wherever Module 9 output is reused.
