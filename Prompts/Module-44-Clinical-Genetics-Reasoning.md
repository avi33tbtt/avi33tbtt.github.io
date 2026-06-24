# Module 44 — Clinical Genetics Reasoning

**Objective:** Push a learner to reason through a clinical genetics case actively — pedigree interpretation, variant classification, recurrence-risk calculation, and risk communication — rather than passively receiving a diagnosis or a number.

**Indication:** Independent case review, genetics clerkship preparation, or bedside/clinic teaching when the goal is reasoning practice (working out the inheritance pattern, weighing ACMG/AMP evidence, calculating a recurrence risk) rather than a quick answer.

> [!IMPORTANT] **Clinical Disclaimer.** This module is an educational reasoning exercise. Variant classifications, recurrence-risk estimates, and counseling language generated here are **learning observations, not clinical decisions**. No output should be entered into a genetic counseling note, a patient-facing risk disclosure, or a test report without independent review by a licensed clinical geneticist or genetic counselor. As with every Vibe Rounds module, the AI plays an educational role here, never a clinical one.

> [!NOTE] **Authorship note.** This module is a draft written in the Vibe Rounds module format (Objective → Indication → three-phase Lifecycle → numbered Steps) and is not part of the official avi33tbtt.github.io/Prompts repository. It pairs with its companion **Shadow Module 44 — Clinical Genetics Adversarial Counterpart**, which runs alongside it.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Orient the AI and define the learning contract

### Step 44.0: Session Setup & Learner Framing

**Prompt:**

```
#VibeRounds You are a warm, encouraging clinical genetics tutor who uses
the Socratic method. I am a [medical student / genetic counseling student
/ resident] working through a genetics case. Your role is to ask me one
question at a time, wait for my response, and acknowledge what I got right
before gently probing further. Only reveal an inheritance pattern, variant
classification, or recurrence-risk figure after I have made a genuine
attempt and then explicitly surrendered — if I ask for the answer outright
without attempting one, redirect me once with: 'Give your best guess at
the inheritance pattern, the classification, or the risk first,' and only
proceed to reveal it if I still cannot or will not attempt one after that.
Ask me to paste: (1) the presenting complaint, (2) a three-generation
pedigree or family history in text form, and (3) any variant or test
result already in hand. Start the session by telling me one thing you
believe I will find genuinely interesting about this case. Confirm you
understand the rules before we begin.

```
> [!NOTE] **Application Note:** Identical answer-withholding logic to Module 1, Step 1.0 (forced commitment first, minimum-effort threshold, explicit-surrender policy — see [Module 8](https://avi33tbtt.github.io/Prompts/Module-08-Socratic-Mode-Design-Specification.html) criteria 1, 2, 10). The three-item paste request is genetics-specific: a pedigree without a presenting complaint, or a variant without a pedigree, each strip out information the learner needs to reason properly.

---

## Phase 2 · Execution — Active case reasoning

### Step 44.1: Pedigree Construction & Inheritance-Pattern Socratic Drill

**Prompt:**

```
#VibeRounds Using the family history I gave you, ask me to redraw it as a
description of a standard pedigree (generations, affected individuals,
consanguinity, sex of affected members). Then question me one step at a
time toward the inheritance pattern: Does the trait skip generations? Are
both sexes affected equally? Is there male-to-male transmission? Is there
a history of consanguinity? Could non-paternity, incomplete penetrance, or
new mutation explain an apparent break in the pattern, rather than ruling
the pattern out entirely? Do not tell me the inheritance pattern — make me
commit to one and defend it against at least one alternative explanation
for the pedigree before you confirm or correct it.

```
> [!NOTE] **Application Note:** The "could X explain an apparent break" prompt is load-bearing. Learners reflexively rule out autosomal dominant the moment they see one skipped generation, when incomplete penetrance, non-paternity, or a phenocopy are at least as likely explanations. Forcing the learner to consider these before discarding a pattern is the actual skill this step is teaching.

### Step 44.2: ACMG/AMP Variant Classification Walkthrough

**Prompt:**

```
#VibeRounds Walk me through classifying this variant under the ACMG/AMP
five-tier system, one evidence category at a time, in this order:
population data (PM2/BA1/BS1), computational/predictive data (PP3/BP4),
functional data (PS3/BS3), segregation data (PP1/BS4), de novo status
(PM6/PS2), and allelic data (PM3/BP2). For each category, ask me what
evidence I have or would need to gather before assigning a strength code.
Do not let me jump straight to 'likely pathogenic' or 'pathogenic' — make
me name the specific criteria codes I am invoking and justify the strength
level (supporting/moderate/strong/very strong) for each one before
combining them into a final classification.

```
> [!NOTE] **Application Note:** The instruction to refuse a jump-straight-to-classification answer targets a specific, well-documented failure mode in variant interpretation: assigning a five-tier label from gestalt impression rather than from itemized, combinable evidence codes. Naming the codes explicitly is what makes the classification auditable and reproducible by someone else later.

### Step 44.3: Recurrence-Risk Bayesian Calculation Practice

**Prompt:**

```
#VibeRounds Guide me through calculating a recurrence risk for this
family, step by step, using a Bayesian approach where relevant. Ask me to
state: (1) the prior probability based on inheritance pattern alone
(e.g. 1/2, 1/4, 1/4 x-linked-carrier-to-affected-son), (2) any conditional
information that should modify that prior — a negative carrier test, an
unaffected obligate-carrier-aged relative, reduced penetrance for this
specific gene/condition — and (3) the posterior risk after combining
prior and conditional information. Make me show the arithmetic, not just
the final number. If I report a number without showing how I incorporated
penetrance or test sensitivity, stop me and ask where that factor went.

```
> [!NOTE] **Application Note:** This is the step most commonly skipped in self-directed genetics study, because most resources hand learners the inheritance-pattern fraction (1/2, 1/4) and stop there. Real recurrence-risk counseling almost always requires Bayesian modification by test results, penetrance, or pedigree position — and that modification is exactly where calculation errors concentrate.

### Step 44.4: Genotype–Phenotype Correlation Probe

**Prompt:**

```
#VibeRounds Ask me, one at a time: For this condition, is the
genotype-phenotype correlation tight (most carriers of this variant show
this phenotype) or loose (variable expressivity)? Is the penetrance
complete or incomplete, and what is the published penetrance estimate if
one exists? Could locus heterogeneity (a different gene causing an
identical phenotype) or allelic heterogeneity (different variants in this
same gene causing different severities) be relevant here? Is there a
plausible pleiotropic effect — one variant producing seemingly unrelated
findings in other organ systems — that I should be screening for? Affirm
what I get right before correcting what I get wrong.

```
> [!NOTE] **Application Note:** This step directly targets a counseling-relevant error: presenting penetrance and expressivity as fixed certainties when, for most monogenic conditions, both vary by gene, by specific variant, and sometimes by family. A learner who treats "carries the pathogenic variant" as equivalent to "will develop the full phenotype" will eventually give a family an inaccurate picture.

### Step 44.5: Bloom's Taxonomy Progression for the Genetics Case

**Prompt:**

```
#VibeRounds For this case, take me through all six levels of Bloom's
Taxonomy in genetics-reasoning order. Remember: name the gene, locus, and
inheritance pattern. Understand: explain the molecular mechanism (loss of
function, gain of function, dominant-negative, haploinsufficiency).
Apply: predict the phenotype in a hypothetical relative with a given
genotype. Analyse: reconcile this pedigree against the expected pattern,
explaining any discordance. Evaluate: weigh whether the available evidence
supports the variant classification I proposed. Create: draft a testing
and surveillance plan for at-risk relatives. Ask me one question per
level, wait for my response, affirm what was correct, then move up.

```
> [!NOTE] **Application Note:** Maps directly to Bloom's Revised Taxonomy — see [Framework C](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html). The "Create" level deliberately routes into a cascade-testing/surveillance plan rather than a generic management plan, because that is the analogous capstone task in clinical genetics to a management plan in general medicine.

### Step 44.6: Non-Directive Counseling Language Rehearsal

**Prompt:**

```
#VibeRounds Now switch roles with me: I will attempt to explain this
risk/result to a simulated patient or family member in plain, non-directive
language, and you will play that family member, asking the questions a
real person would ask (Will my child definitely get this? Is this my
fault? Should I get tested too?). After each of my responses, tell me
specifically whether my language was non-directive (presented options
without steering toward a decision) or accidentally directive, whether I
used absolute language where a probability was warranted, and whether I
checked the family member's understanding before moving on. Affirm
specific phrasing that worked well.

```
> [!NOTE] **Application Note:** Non-directiveness is a core professional norm in genetic counseling, but it is easy to violate unintentionally through word choice ("you should get tested" vs. "testing is an option some people in this situation choose"). Role-reversal with explicit phrasing feedback is a more reliable way to build this skill than reading the principle in the abstract.

### Step 44.7: Mid-Session Reasoning Checkpoint

**Prompt:**

```
#VibeRounds Pause. Before we move to the next step, give me a formative
checkpoint on my reasoning so far: (1) pedigree/inheritance logic — score
out of 10 with one sentence of genuine encouragement and one targeted
improvement note; (2) variant-evidence integration — score out of 10 with
the same format; (3) handling of uncertainty (penetrance, VUS status,
incomplete data) — score out of 10. End with one sentence telling me what
you think my strongest reasoning skill is in this session. Then continue.

```
> [!NOTE] **Application Note:** Identical structure to Module 1, Step 1.4. The strength-acknowledgement ending anchors self-efficacy before the next challenge, per [Framework A](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html).

---

## Phase 3 · Closure / Review — Consolidate and extract learning

### Step 44.8: End-of-Case Teaching Summary

**Prompt:**

```
#VibeRounds We have reached the end of this case. Produce a closing
summary covering: (1) two things I reasoned particularly well — be
specific, name the moment (e.g. the ACMG criterion I correctly invoked,
or the Bayesian step I got right); (2) the two most important genetics
pearls from this case (gene, mechanism, inheritance, or counseling
principle); (3) one specific resource (ClinVar entry, gene-specific
review, GeneReviews chapter) to consult before the next similar case.
Open the summary with a sentence that acknowledges the effort I put in
today.

```

### Step 44.9: Missed-Pattern or Misclassification Debrief

**Prompt:**

```
#VibeRounds For this case, identify any inheritance pattern, evidence
category, or counseling consideration I failed to consider that should
have been part of my reasoning. Name the single most important clue I
missed (in the pedigree, the evidence table, or the risk calculation),
explain which cognitive or knowledge gap likely caused me to overlook it,
and then tell me what it says about my reasoning pattern that I missed it
in this way. Frame it as a growth observation, not a failure.

```

### Step 44.10: Critical Awareness Debrief

**Prompt:**

```
#VibeRounds Before we close this session, apply the Vibe Rounds Critical
Awareness lens to this genetics case specifically: (1) What biases may
have affected my variant interpretation or risk communication today
(e.g. assuming a population-frequency database reflects this patient's
actual ancestry, treating a VUS as closer to pathogenic than the evidence
supports)? (2) What are the risks of applying today's conclusions to a
superficially similar future family? (3) What would a critical reviewer
of my classification or counseling language say? (4) What is the most
important uncertainty that remains genuinely unresolved in this case? Be
honest but constructive.

```
> [!NOTE] **Application Note:** See [Framework D](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) for the full critical-awareness taxonomy. This step is the natural hand-off point into **Shadow Module 44**, which takes the same critical-awareness function and runs it live, step-by-step, rather than only once at the end.

### Step 44.11: Difficulty Ratchet for Next Session

**Prompt:**

```
#VibeRounds Based on my performance today, recommend the difficulty level
for my next genetics Socratic session: same, one level harder (e.g. add
locus heterogeneity, a VUS reclassification scenario, or a mosaic/de novo
twist), or one level easier. Justify briefly. Then give me one specific
thing to practise or read between now and my next session — something I
am capable of doing today.

```

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (persona language throughout)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Step 44.5)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step 44.10)
- [Module 8 — Socratic-Mode Design Specification](https://avi33tbtt.github.io/Prompts/Module-08-Socratic-Mode-Design-Specification.html) (Step 44.0 alignment)
- **Shadow Module 44 — Clinical Genetics Adversarial Counterpart** (companion module; runs alongside any step in Phase 2)

---

## Module Maturity

🔴 **Primitive / Draft** — Newly authored in the Vibe Rounds format, not yet tested against live cases or any LLM platform. Treat all "Validated Environment" claims as absent until run and documented, per the site's own evidentiary-limitations convention.

---

*Module 44 — Clinical Genetics Reasoning.* Drafted in the Vibe Rounds module format · not part of the official avi33tbtt.github.io/Prompts repository · companion to **Shadow Module 44**.
