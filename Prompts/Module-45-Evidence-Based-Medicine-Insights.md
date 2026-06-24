# Module 45 — Evidence-Based Medicine Insights (Expert EBM Advisor)

**Objective:** Have the AI act as an expert evidence-based-medicine consultant who delivers structured EBM insight on demand — framing a clinical question, placing the available evidence on the hierarchy, applying the correct critical-appraisal tool for that study design, rating certainty with GRADE, and translating the result into numbers a clinician can actually use at the bedside. Where [Module 10 — Medical Journal & Article Reading](https://avi33tbtt.github.io/Prompts/Module-10-Medical-Journal-Article-Reading.html) deep-digests *one already-acquired article*, and [Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html) runs an open-ended literature search, Module 45 is the general-purpose consult: "I have a clinical question — give me the EBM expert's read," whether the underlying evidence is a single trial, a guideline, a body of conflicting literature, or nothing acquired yet at all.

**Indication:** Any moment a learner or clinician needs an EBM-literate second voice — framing a vague clinical question into something answerable, deciding what study design would actually settle it, appraising evidence already in hand, rating how much confidence to place in a finding, or translating a relative-risk headline into a number that means something for the patient in front of them.

**Status:** 🟡 Draft — authored in the Vibe Rounds module format, not yet validated against a live cohort.

**Design orientation:** This module is built around Sackett's five-step EBM cycle — Ask → Acquire → Appraise → Apply → Assess — and explicitly around his **three-circle model**: best research evidence, clinician expertise, and the patient's values and circumstances, integrated, not the first one alone. A persona that recites evidence hierarchies without ever returning to the patient in front of the user has only done one-third of the job EBM actually asks for.

> [!IMPORTANT] **Clinical Disclaimer.** This module produces educational EBM insight, not clinical decisions. Evidence-hierarchy placements, GRADE certainty ratings, effect-size translations, and guideline appraisals generated here are **learning observations**, not endorsements to act on. Any application to a real patient requires independent verification of the underlying sources — including checking that a cited trial or guideline actually exists and says what it is claimed to say — and review by a supervising clinician.

> [!NOTE] **Authorship note.** This module is a draft written in the Vibe Rounds module format and is not part of the official avi33tbtt.github.io/Prompts repository. It pairs with **Shadow Module 45 — Evidence-Based Medicine Adversarial Counterpart**, which is a live, claim-by-claim instance of the pattern the site's own [Sackett EBM Cycle Cross-Reference](https://avi33tbtt.github.io/Prompts/EBM-Cycle-Cross-Reference.html) names **reflexive appraisal** — the same move Modules 8 and 12 make, turning the appraisal lens back onto the AI's own reasoning rather than only onto external literature.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Frame the question and set the consultant contract

### Step 45.0: Session Setup & EBM Consultant Framing

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds You are an expert evidence-based-medicine consultant. I am
going to bring you a clinical question, a piece of evidence, or a vague
clinical uncertainty, and your job is to give me an EBM-literate expert
read using Sackett's cycle (Ask, Acquire, Appraise, Apply, Assess) and his
three-circle model (research evidence, clinical expertise, patient values
and circumstances). Do not just recite evidence-hierarchy rankings at me —
always loop back to what this means for an actual patient's decision.
State plainly when you are confident in the evidence and plainly when you
are not — calibrated language, not reflexive hedging and not false
confidence either. Confirm you understand, then ask me to describe my
clinical question or paste the evidence I have in hand.

```
> [!NOTE] **Application Note:** The instruction against "reflexive hedging and false confidence either" is deliberate. EBM consultation has two opposite failure modes: an AI that hedges every sentence into uselessness, and an AI that states evidence-hierarchy facts with more confidence than the underlying appraisal supports. Naming both failure modes in the contract upfront reduces drift toward either one.

### Step 45.1: PICO Question Construction

**AI Mode:** Socratic

**Prompt:**

```
#VibeRounds Help me convert my clinical uncertainty into a focused,
answerable PICO question. Ask me one question at a time: Who is the
Population I actually care about (be specific — age, condition,
setting)? What is the Intervention or exposure in question? What is the
realistic Comparison — not a strawman, the alternative actually available
in practice? What Outcome actually matters to the patient, as opposed to
a convenient surrogate outcome? Push back if my answer to any of these is
vague, and do not let me move to the next letter until the current one is
specific enough to search on.

```
> [!NOTE] **Application Note:** "Outcome that actually matters to the patient, as opposed to a convenient surrogate" is the single most consequential phrase in this step. A huge share of EBM misapplication starts at this point — answering a question about a surrogate (LDL lowered, tumour shrinkage, biomarker change) when the patient-important outcome (death, stroke, quality of life) was never actually asked about.

---

## Phase 2 · Execution — Acquire, appraise, rate, and translate

### Step 45.2: Evidence Hierarchy Placement

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Given this PICO question, tell me: what study design would
actually be best positioned to answer it, and why? Place the evidence I
already have (if any) on the Oxford CEBM hierarchy (1a meta-analysis of
RCTs, 1b individual RCT, 2a systematic review of cohort studies, 2b
individual cohort study, 3a/3b case-control, 4 case series, 5 expert
opinion). Then tell me honestly: for this specific question, is the
hierarchy actually the right lens, or is there a reason a well-conducted
lower-tier design (e.g. a large, well-adjusted cohort study) might be more
informative here than a poorly conducted higher-tier one?

```
> [!NOTE] **Application Note:** The closing question is load-bearing. The CEBM hierarchy is a useful default, not an absolute ranking — a small, underpowered, high-attrition RCT can be less trustworthy than a large, carefully adjusted cohort study on the same question. An EBM "expert" persona that applies the hierarchy mechanically, without this caveat, is giving a weaker answer than the framework itself supports.

### Step 45.3: Search Strategy Expert Briefing

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Brief me on how to search for evidence on this PICO question
as an EBM expert would: which databases or sources are most appropriate
(Cochrane Library, PubMed Clinical Queries, guideline repositories,
specialty registries), what search terms and filters I should use, and
what kind of evidence I should expect to find if it exists (a Cochrane
review, a single landmark trial, only observational data, or nothing
adequate at all). Tell me honestly if you suspect this is a question
where the evidence base is likely to be thin or absent, so I calibrate my
expectations before I search.

```
> [!NOTE] **Application Note:** This is a lighter-weight Acquire step than [Module 21](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html)'s full frontier search — it is a quick expert briefing on *how and where to look*, not the search itself. Route to Module 21 if the question warrants an actual systematic search.

### Step 45.4: Critical Appraisal Checklist Selection & Application

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds I am going to give you a study or piece of evidence. First,
tell me which critical-appraisal tool actually fits this study design —
CONSORT/RoB 2 for an RCT, PRISMA/AMSTAR-2 for a systematic review,
Newcastle-Ottawa for a cohort or case-control study, STARD/QUADAS-2 for a
diagnostic-accuracy study, or AGREE II if this is a guideline rather than
a primary study. Then walk me through the appraisal domain by domain —
not a single gestalt 'looks fine' judgement — naming what you find for
each domain before moving to the next. [paste study, abstract, or
citation]

```
> [!NOTE] **Application Note:** "Domain by domain, not a single gestalt judgement" exists because an LLM under light prompting will produce a fluent-sounding appraisal paragraph without actually working through the checklist's component domains — which is exactly the failure mode [Shadow Module 45, Step S45.4](https://avi33tbtt.github.io/Prompts/Shadow-Module-45-EBM-Adversarial-Counterpart.html) is built to catch. If you are pasting a citation rather than full text, treat any specific numeric findings the AI produces as unverified until you check the primary source yourself.

### Step 45.5: GRADE Certainty-of-Evidence Rating

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Rate the certainty of evidence for this finding using GRADE.
Go through each downgrading domain explicitly — risk of bias,
inconsistency across studies, indirectness to my actual PICO question,
imprecision (wide confidence intervals, few events), and publication
bias — and tell me whether each applies and by how much. If this is
observational evidence, tell me whether any upgrading factors apply
(large effect size, dose-response gradient, plausible confounding working
against the observed effect). Give me a final certainty rating — High,
Moderate, Low, or Very Low — and state which single domain did the most
work in determining that rating.

```
> [!NOTE] **Application Note:** Asking which single domain "did the most work" forces a non-generic answer — it is the difference between a learner who can recite GRADE's five domains and one who can actually use them to explain why *this particular* finding lands where it does.

### Step 45.6: Effect-Size & Number Communication Translation

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Translate this finding's effect size into language I could
use with an actual patient. Tell me: (1) the effect measure reported —
RR, OR, HR, or MD — and what it means in plain words, (2) the absolute
risk reduction or increase, not just the relative one, (3) the NNT or NNH
if calculable, stated as 'out of every X patients treated, Y experienced
this outcome', and (4) whether the outcome measured is the patient-
important outcome from my PICO question or a surrogate standing in for
it. If it is a surrogate, say so explicitly and tell me what is and is
not established about the link between the surrogate and the
patient-important outcome.

```
> [!NOTE] **Application Note:** Relative-risk-only framing ("a 50% reduction") without the absolute numbers is one of the most common and most consequential ways evidence gets oversold — a 50% relative reduction can mean a drop from 2% to 1% absolute risk, or from 40% to 20%. This step exists specifically to force the absolute number into the room every time.

### Step 45.7: Three-Circle Integration — Evidence, Expertise, and Patient Values

**AI Mode:** Traditional · Socratic

**Prompt:**

```
#VibeRounds Now integrate Sackett's three circles for this specific
patient: [paste a brief de-identified patient vignette, including what
you know of their values, preferences, and circumstances]. Ask me: given
the evidence's certainty and effect size, and given clinical judgement
about this specific patient's situation, what do this patient's own
values and circumstances add or change? Do not let the evidence circle
silently override the patient-values circle — if a high-certainty finding
exists but this patient's values point a different way, name that
tension explicitly rather than resolving it for me.

```
> [!NOTE] **Application Note:** "Do not let the evidence circle silently override the patient-values circle" is the step's core teaching point. The most common EBM misapplication in practice is treating "the evidence says X" as automatically meaning "therefore do X" — Sackett's own model never licenses that move; the patient's values circle has equal standing, not subordinate standing.

### Step 45.8: Guideline Appraisal & Strength-of-Recommendation Briefing

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds I am going to give you a clinical practice guideline or
recommendation. Brief me, AGREE-II-informed, on: (1) who developed it and
whether conflicts of interest are disclosed, (2) what evidence base the
recommendation rests on and at what GRADE or equivalent certainty level,
(3) whether the recommendation is labelled strong or conditional/weak,
and (4) whether the strength of the recommendation actually matches the
certainty of the underlying evidence — these are not the same thing, and
guideline panels sometimes issue strong recommendations on lower-certainty
evidence when the stakes of inaction are high, or conditional
recommendations despite strong evidence when patient preference is
expected to vary widely. Tell me which of these patterns applies here.
[paste guideline excerpt or citation]

```
> [!NOTE] **Application Note:** The strength-versus-certainty distinction is one of the most frequently collapsed concepts in how guidelines get communicated downstream — a "strong recommendation" gets heard as "strong evidence," when GRADE explicitly allows strong recommendations on low-certainty evidence (e.g. epinephrine in anaphylaxis) and conditional recommendations on high-certainty evidence (e.g. many shared-decision-making scenarios where patient preference legitimately varies). This step is also the natural hand-off into [Shadow Module 45, Step S45.8](https://avi33tbtt.github.io/Prompts/Shadow-Module-45-EBM-Adversarial-Counterpart.html), which interrogates exactly this conflation live.

---

## Phase 3 · Closure / Review — Consolidate the consult

### Step 45.9: EBM Insight Brief (Exportable Summary)

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Produce an EBM Insight Brief for this consult, structured
exactly as:

Clinical question (PICO): [...]
Best available evidence and its CEBM level: [...]
GRADE certainty: [High / Moderate / Low / Very Low, with the dominant
downgrading or upgrading factor named]
Effect size in plain numbers: [absolute risk difference, NNT/NNH]
What it changes for this patient: [specific]
What it does not resolve: [specific — the remaining gap between evidence
and this patient's values/circumstances]
Confidence in this brief overall: [stated plainly, not hedged]

```

### Step 45.10: Critical Awareness Debrief

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Before we close, apply the Vibe Rounds Critical Awareness
lens to this EBM consult specifically: (1) What framing choices in how I
posed my PICO question may have already biased which evidence looked
relevant? (2) What would a rigorous methodologist say is the weakest link
in this entire consult — from question, to search, to appraisal, to
GRADE rating, to translation? (3) Did I, the AI, state any specific
numeric finding, citation, or trial result in this session that you have
not independently verified against a real source? Flag it explicitly if
so. (4) What is the most important uncertainty that remains genuinely
unresolved?

```
> [!NOTE] **Application Note:** Question 3 exists because of a specific, well-documented risk with LLM-generated EBM content: confident-sounding citations or numeric results that are subtly wrong or entirely fabricated. Naming this risk explicitly inside the module — rather than only in a disclaimer banner — is the closure-phase equivalent of [Shadow Module 45](https://avi33tbtt.github.io/Prompts/Shadow-Module-45-EBM-Adversarial-Counterpart.html)'s entire function, run once at the end rather than live throughout.

### Step 45.11: Difficulty Ratchet for Next Consult

**Prompt:**

```
#VibeRounds Based on this session, recommend the next EBM skill I should
practise: framing tighter PICO questions, reading forest plots and
heterogeneity statistics, distinguishing strength-of-recommendation from
certainty-of-evidence, or calculating NNT/NNH from raw study data myself
rather than asking for the translation. Justify briefly, and give me one
specific thing to practise before our next consult.

```

---

## Module 45 Prompt Index

| ID | Phase | Prompt purpose | AI Mode |
| --- | --- | --- | --- |
| 45.0 | Initiation | Consultant framing & contract | Traditional |
| 45.1 | Initiation | PICO question construction | Socratic |
| 45.2 | Execution | Evidence hierarchy placement | Traditional |
| 45.3 | Execution | Search strategy briefing | Traditional |
| 45.4 | Execution | Critical appraisal tool selection & application | Traditional |
| 45.5 | Execution | GRADE certainty rating | Traditional |
| 45.6 | Execution | Effect-size & number translation | Traditional |
| 45.7 | Execution | Three-circle integration with patient values | Traditional · Socratic |
| 45.8 | Execution | Guideline appraisal & strength-vs-certainty briefing | Traditional |
| 45.9 | Closure | EBM Insight Brief (exportable) | Traditional |
| 45.10 | Closure | Critical awareness debrief | Devil's Advocate |
| 45.11 | Closure | Difficulty ratchet | Traditional |

---

## Related Frameworks & Modules

- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step 45.10)
- [Module 10 — Medical Journal & Article Reading](https://avi33tbtt.github.io/Prompts/Module-10-Medical-Journal-Article-Reading.html) (use for deep single-article digestion; Module 45 is the broader, on-demand consult)
- [Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html) (use for full systematic search; Step 45.3 is a lighter briefing only)
- [Module 12 — Differential Diagnosis Deepdive](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html) and [Module 8 — Socratic-Mode Design Specification](https://avi33tbtt.github.io/Prompts/Module-08-Socratic-Mode-Design-Specification.html) (the repository's other two instances of reflexive appraisal)
- [Sackett EBM Cycle Cross-Reference](https://avi33tbtt.github.io/Prompts/EBM-Cycle-Cross-Reference.html) (this module is intended to run the full five-step cycle explicitly, alongside Module 13 and Module 21)
- **Shadow Module 45 — Evidence-Based Medicine Adversarial Counterpart** (companion module; runs alongside any step in Phase 2)

---

## Module Maturity

🔴 **Primitive / Draft** — Newly authored in the Vibe Rounds format, not yet tested against live cases or any LLM platform.

---

*Module 45 — Evidence-Based Medicine Insights.* Drafted in the Vibe Rounds module format · not part of the official avi33tbtt.github.io/Prompts repository · companion to **Shadow Module 45**.
