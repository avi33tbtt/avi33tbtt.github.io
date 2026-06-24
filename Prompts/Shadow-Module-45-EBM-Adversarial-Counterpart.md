# Shadow Module 45 — Evidence-Based Medicine Adversarial Counterpart

**Objective:** Run a skeptical, non-flattering reviewer in parallel with [Module 45 — Evidence-Based Medicine Insights](https://avi33tbtt.github.io/Prompts/Module-45-Evidence-Based-Medicine-Insights.html), interrogating each PICO framing, evidence-hierarchy placement, appraisal, GRADE rating, and number translation the moment it is produced — rather than waiting until the consult ends. The site's own [Sackett EBM Cycle Cross-Reference](https://avi33tbtt.github.io/Prompts/EBM-Cycle-Cross-Reference.html) names this exact move — turning the appraisal lens back onto the reasoning process itself, rather than onto external literature — **reflexive appraisal**, and identifies [Module 8](https://avi33tbtt.github.io/Prompts/Module-08-Socratic-Mode-Design-Specification.html) (appraising a teaching prompt) and [Module 12](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html) (appraising a diagnosis) as its two existing instances. This Shadow Module is a third instance, applied live to an EBM consult itself.

**Indication:** Use immediately after any Phase 2 step of Module 45 — especially after an evidence-hierarchy placement made without questioning whether the hierarchy actually fits the question, a GRADE rating delivered fluently but not domain-by-domain, an effect size reported in relative terms only, or a guideline's "strong recommendation" label accepted without checking it against the certainty of the evidence underneath it.

> [!IMPORTANT] **Clinical Disclaimer.** Like Module 45, this is an educational stress-test exercise. A "the shadow's challenge held" verdict is not a methodological certification, and a "the shadow's challenge was overruled" verdict is not a clearance to act on the underlying evidence. Any EBM conclusion intended for real patient use requires independent verification of the primary sources and review by a clinician with appropriate methodological and content expertise.

> [!NOTE] **Authorship note & relationship to "reflexive appraisal."** This module is an original draft, not part of the official avi33tbtt.github.io/Prompts repository. Unlike its sibling **[Shadow Module 44 — Clinical Genetics Adversarial Counterpart](https://avi33tbtt.github.io/Prompts/Shadow-Module-44-Clinical-Genetics-Adversarial-Counterpart.html)**, which had to be justified by analogy because the term "shadow module" appears nowhere on the site, this module sits on firmer site-internal ground: the Cross-Reference document explicitly names the underlying pattern (reflexive appraisal) and explicitly identifies it as the stack's "most original contribution" — this module simply extends that named pattern to a third object (an EBM consult) and to a new cadence (live, step-by-step, rather than only at the end of a session).

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Set the adversarial contract

### Step S45.0: Shadow Activation & Adversarial Contract

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds You are now my Shadow — a skeptical methodologist reviewing my
EBM reasoning live, not a co-author and not a flatterer. Your job is to
take the single most recent claim I produced in Module 45 — a PICO frame,
a hierarchy placement, an appraisal, a GRADE rating, an effect-size
translation, or a guideline-strength reading — and attack its weakest
point. You will not soften a challenge to spare my feelings, and you will
not manufacture a challenge you do not genuinely believe has merit just
to seem thorough. If you, in your role as the Shadow, are unsure whether
a cited number or source is real and accurate, say so explicitly rather
than letting it pass. State the claim you are about to interrogate, then
deliver the challenge. Confirm you understand this contract, then ask me
to paste the specific Module 45 claim I want shadowed.

```
> [!NOTE] **Application Note:** Mirrors the anti-flattery, anti-overreach contract from [Shadow Module 44, Step S44.0](https://avi33tbtt.github.io/Prompts/Shadow-Module-44-Clinical-Genetics-Adversarial-Counterpart.html). The added clause about uncertain citations is specific to EBM work: an adversarial reviewer that confidently "corrects" a number with an equally fabricated one is worse than no review at all, so the contract explicitly permits and expects "I cannot verify this" as a valid Shadow response.

---

## Phase 2 · Execution — Shadow each Module 45 step in turn

> [!NOTE] Run the matching step below immediately after its Module 45 counterpart. The pairing is by number: S45.1 shadows 45.1, and so on.

### Step S45.1: PICO Framing Shadow

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Take the PICO question I just constructed and attack it. Does
the Comparison I chose reflect a realistic alternative actually used in
practice, or a strawman that makes the Intervention look better than it
would against real competition? Is the Outcome I named the
patient-important outcome, or did I quietly substitute a surrogate
because it was easier to find evidence for? Does the Population I
specified match who I actually intend to apply this to, or did I broaden
or narrow it in a way that changes what evidence would even be relevant?
Name the single most consequential framing choice you would challenge,
and ask me to defend it.

```
> [!NOTE] **Application Note:** Framing errors at the PICO stage are the highest-leverage place to catch a flawed EBM consult, because every downstream step inherits them silently — a search, an appraisal, and a GRADE rating can all be executed flawlessly against a PICO question that was the wrong question to ask.

### Step S45.2: Evidence Hierarchy Shadow

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Take the evidence-hierarchy placement I just made and attack
it. Am I treating the CEBM hierarchy as an absolute ranking when it is
actually a default heuristic — for example, ranking a small, high-attrition
RCT above a large, carefully adjusted cohort study purely because RCT
outranks cohort on the chart, even though the specific studies in front
of me don't support that ordering? Is there a confounding-by-indication
or healthy-user bias specific to this question that the hierarchy doesn't
capture? Tell me whether the placement I gave actually reflects the
quality of the specific evidence, or just its design label.

```
> [!NOTE] **Application Note:** This directly targets the gap Module 45, Step 45.2 itself warns about — the Shadow's job here is to verify the caveat was actually applied, not just stated as a disclaimer and then ignored in practice.

### Step S45.3: Search Strategy Shadow

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Take the search briefing I just received and attack it. Did
it account for publication bias — studies with null or negative results
that are less likely to be published at all? Did it account for the
file-drawer problem in industry-funded research on this specific
question? Is there a language bias risk — relevant evidence existing in
a language or regional registry the briefing didn't mention? If the
briefing concluded the evidence base is "thin," ask: thin because it
genuinely hasn't been studied, or thin because the search strategy
proposed wouldn't surface what does exist?

```
> [!NOTE] **Application Note:** The closing distinction — genuinely absent evidence versus a search strategy that would miss existing evidence — is the EBM-specific version of "absence of evidence is not evidence of absence," and is worth making the learner state out loud rather than assume.

### Step S45.4: Critical Appraisal Shadow

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Take the critical appraisal I just produced and attack it on
two fronts. First, methodologically: did I actually walk through the
appraisal tool's domains one at a time, or did I produce a fluent-sounding
paragraph that names the right concepts (randomisation, blinding,
attrition) without verifying whether they actually held in this specific
study? Second, factually: did I, the AI, state any specific number,
quote, or trial detail in that appraisal that you have not independently
verified against the primary source? If you cannot confirm a detail is
accurate, say so plainly rather than assuming it is correct because it
sounded specific.

```
> [!NOTE] **Application Note:** The second front is the highest-stakes check in this entire Shadow Module. A specific, confidently stated number is not more likely to be correct than a vague one — and in LLM-generated appraisal text, specificity can create false confidence in exactly the claims that most need independent verification.

### Step S45.5: GRADE Certainty Shadow

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Take the GRADE certainty rating I just produced and attack it.
For each of the five domains — risk of bias, inconsistency, indirectness,
imprecision, publication bias — ask me: did I actually assess this domain
against this specific evidence, or did I infer the rating from the study
design alone (e.g. assuming an RCT must be low risk of bias without
checking its actual conduct)? Is there a domain I likely underweighted
because it's harder to assess from an abstract alone — indirectness and
publication bias are the two domains most often skipped under time
pressure. Tell me which domain you suspect was rated too generously.

```
> [!NOTE] **Application Note:** Indirectness and publication bias are named explicitly because they are the two GRADE domains hardest to assess without deep familiarity with a field's broader literature — exactly the domains most likely to be skipped or rated by default when an AI or a learner is moving quickly.

### Step S45.6: Effect-Size Framing Shadow

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Take the effect-size translation I just received and attack
it. Was the relative risk reduction presented without the absolute risk
numbers sitting right next to it — making a small absolute effect sound
larger than it is? Is the outcome being translated a true patient-important
outcome, or a surrogate (a biomarker, a tumour-shrinkage measure, a lab
value) being presented with the same confidence as if it were? Is there a
composite outcome in play where the dramatic-sounding components (death)
are doing less work than the boring-sounding components (a minor
procedural endpoint) in driving the headline result? Name the framing
distortion you find most significant.

```
> [!NOTE] **Application Note:** The composite-outcome check is frequently the sharpest catch in this step — composite endpoints can produce an impressive-looking "reduced the primary outcome" headline almost entirely on the strength of a clinically minor component, while the component patients actually care about (mortality, major morbidity) shows no real difference.

### Step S45.7: Patient-Values Integration Shadow

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Take the three-circle integration I just produced for this
patient and attack it. Did the evidence circle get presented first and at
length, with the patient-values circle added almost as an afterthought —
structurally signalling which one actually matters more, regardless of
what was said? Did I, or did the AI, assume this patient's values and
preferences rather than asking what they actually are? Is there a
plausible alternative reading of this same patient's circumstances that
would lead to a different integration than the one given? Tell me
directly whether the patient's voice was genuinely centred here or
nominally included.

```
> [!NOTE] **Application Note:** Structurally parallel to the non-directiveness check in [Shadow Module 44, Step S44.4](https://avi33tbtt.github.io/Prompts/Shadow-Module-44-Clinical-Genetics-Adversarial-Counterpart.html) — assumed patient values are as significant a failure mode in EBM application as assumed inheritance patterns are in genetics, and both are easy to miss because the output still reads as patient-centred prose.

### Step S45.8: Guideline Strength-vs-Certainty Shadow

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Take the guideline appraisal I just received and attack it.
Does the "strong" or "conditional" label on this recommendation actually
match the certainty of the underlying evidence, or is there a mismatch —
a strong recommendation resting on low-certainty evidence, or a
conditional recommendation sitting on high-certainty evidence because
panel members anticipated wide variation in patient preference? Were any
conflicts of interest among the guideline panel disclosed, and if so, do
they plausibly point in the same direction as the recommendation? If COI
disclosure was not mentioned at all in the appraisal, flag that omission
explicitly — its absence is itself a finding.

```
> [!NOTE] **Application Note:** "Its absence is itself a finding" is the step's key teaching move — a learner trained only to look for red flags that are present will miss the more common failure mode, which is simply that a disclosure was never checked for in the first place.

### Step S45.9: Cross-Examination Round

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Now run a single combined cross-examination. Pick the one
claim from this entire consult — the PICO frame, the hierarchy placement,
the appraisal, the GRADE rating, the effect-size translation, the
patient-values integration, or the guideline-strength reading — that you
think is most likely to be wrong or overstated if reviewed by an actual
methodologist tomorrow. Make your case in no more than five sentences.
Let me respond and defend it. Then give your honest verdict: held,
partially held, or failed — stated plainly even if it is uncomfortable.

```
> [!NOTE] **Application Note:** Identical structure to [Shadow Module 44, Step S44.5](https://avi33tbtt.github.io/Prompts/Shadow-Module-44-Clinical-Genetics-Adversarial-Counterpart.html) — forcing the Shadow to commit to its single best objection, rather than spreading thin, recreates the higher-stakes feel of a real journal-club challenge.

---

## Phase 3 · Closure / Review — Reconcile and consolidate

### Step S45.10: Shadow Inventory Summary

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Produce a table of every challenge raised in this shadow
session: Claim challenged | The Shadow's objection | Verdict (held /
partially revised / overturned) | What changed in my final EBM Insight
Brief, if anything. Restrict this to challenges actually raised in this
session — not a generic list of EBM pitfalls.

```

### Step S45.11: Signal-to-Noise Reconciliation

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Looking at the inventory, tell me honestly: which challenges
would actually change what I tell a patient or write in a guideline note,
versus which were technically valid but would not change the bottom line?
Rank from most to least consequential and justify the top ranking. I want
to learn to triage methodological challenges, not treat every one as
equally urgent.

```
> [!NOTE] **Application Note:** Identical rationale to [Shadow Module 44, Step S44.7](https://avi33tbtt.github.io/Prompts/Shadow-Module-44-Clinical-Genetics-Adversarial-Counterpart.html) — an EBM learner who treats every methodological nitpick as equally disqualifying will end up paralysed rather than appropriately calibrated.

### Step S45.12: Forward Commitment & Difficulty Ratchet

**Prompt:**

```
#VibeRounds To close, ask me: which single EBM overreach — relative-risk-
only framing, surrogate-outcome substitution, hierarchy-as-absolute-rule,
or strength-versus-certainty conflation — am I most likely to repeat in my
next consult? What is the one concrete habit that would catch it before a
Shadow has to? Then recommend whether my next Module 45 session should
pair with this Shadow on every step, every other step, or only at the end —
based on how useful tonight's live shadowing actually was.

```

---

## Cross-Module Connections

| Module | Connection |
| --- | --- |
| [Module 45 — Evidence-Based Medicine Insights](https://avi33tbtt.github.io/Prompts/Module-45-Evidence-Based-Medicine-Insights.html) | The module this Shadow exists to interrogate; has no content of its own without it |
| [Module 8 — Socratic-Mode Design Specification](https://avi33tbtt.github.io/Prompts/Module-08-Socratic-Mode-Design-Specification.html) | First named instance of reflexive appraisal in the stack — appraising a teaching prompt |
| [Module 12 — Differential Diagnosis Deepdive](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html) | Second named instance of reflexive appraisal — appraising a diagnostic conclusion |
| [Module 10, Step 10.13](https://avi33tbtt.github.io/Prompts/Module-10-Medical-Journal-Article-Reading.html) | The closest existing single-step analogue — a Devil's-Advocate critical-awareness pass on one article, run once at the end rather than live throughout |
| **Shadow Module 44 — Clinical Genetics Adversarial Counterpart** | Sibling Shadow Module; shares the anti-flattery contract design and case/consult-specific (not generic) inventory constraint |
| [Sackett EBM Cycle Cross-Reference](https://avi33tbtt.github.io/Prompts/EBM-Cycle-Cross-Reference.html) | Names the "reflexive appraisal" pattern this entire module operationalises |

---

## Module Maturity

🔴 **Primitive / Draft** — Newly authored, unvalidated on any LLM platform, and not part of the official avi33tbtt.github.io/Prompts repository. Step S45.4's citation-verification check is the most safety-critical and least proven component and should be treated with particular caution until run and documented.

---

*Shadow Module 45 — Evidence-Based Medicine Adversarial Counterpart.* Drafted in the Vibe Rounds module format · not part of the official avi33tbtt.github.io/Prompts repository · companion to **Module 45 — Evidence-Based Medicine Insights**.
