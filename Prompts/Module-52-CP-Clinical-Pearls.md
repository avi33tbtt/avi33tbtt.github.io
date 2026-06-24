---
layout: default
title: Module CP — Clinical Pearls Distillation
---

# [Dr. Avinash kumar gupta](https://avi33tbtt.github.io/)

[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module CP — Clinical Pearls Distillation

**Objective:** Translate high-level research findings, guideline updates, or complex clinical evidence into concise, bedside-ready clinical pearls — statements a clinician can carry into a ward round, a patient encounter, or a teaching moment without losing accuracy or nuance.

**Indication:** Post-journal-club consolidation, post-conference debriefing, teaching round preparation, self-directed learning after reading Module 10, or any moment when a body of evidence needs to be distilled into actionable, memorable clinical statements for immediate bedside use.

**Status:** 🟢 Mature — Ready for self-directed learning use.

**Design orientation:** This module does not generate oversimplified catch-phrases. The AI's job is to perform the *compression without distortion* that separates a genuine clinical pearl from a dangerous over-generalisation — preserving the caveats, the patient-type specificity, and the evidence-quality signal inside a statement short enough to actually use at the bedside.

> [!IMPORTANT]
> All AI-generated pearls — including diagnostic thresholds, treatment triggers, risk stratification statements, and dosing rules — require independent clinical verification before being acted upon. A pearl is a learning tool and an aide-mémoire, not a substitute for clinical judgment or institutional protocols.

---

## Design rationale

The failure mode of clinical pearl generation is not brevity — it is false precision. A pearl that drops the NNT, ignores the study population, or smooths over a key subgroup difference may be memorable but is no longer reliable. Used at the bedside, it becomes a cognitive shortcut to the wrong answer.

Module CP addresses this by treating pearl generation as a two-stage act: **first, full evidence deconstruction** (what the finding actually says, for whom, with what certainty); **then, controlled compression** (what a clinician needs to carry in working memory, with the caveat encoded into the pearl itself rather than appended as a footnote). Pearls produced by this module are *self-limiting* — they state their own scope.

Five steps in the Execution phase are **patient-anchored**: the learner pastes a brief de-identified vignette and the AI tests whether a pearl genuinely applies, partially applies, or must be withheld for that patient. This prevents the most common pearl failure: applying a population-level statement to an individual patient who was not in the source population.

**AI mode profile:** This module is predominantly Traditional (for distillation and synthesis) and Devil's Advocate (for pearl stress-testing and scope-limitation). Brainstorming mode appears at the teaching step, where the goal is generating multiple mnemonic framings rather than a single answer.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution — Layered Distillation → Phase 3 · Closure / Pearl Crystallisation

---

## Phase 1 · Initiation — Load the evidence and anchor it to a patient

### Step CP.0: Evidence Load & Core Finding Extraction

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds You are a clinical knowledge distillation companion. I am
going to give you a research finding, guideline update, or body of
clinical evidence. Your first job is to extract the single most
clinically important finding — the one a clinician absolutely must know
— and state it in two sentences of plain language. No statistical
notation. No jargon. Then tell me: (1) what type of evidence this is
(RCT, meta-analysis, observational, guideline, expert consensus), (2)
for which patient population this finding was established, and (3) the
single condition that most limits how widely this finding can be applied.
[paste article, guideline section, abstract, or brief summary of the
finding]
```

> [!NOTE] **Application Note:** This is the entry gate. The core finding extraction sets the raw material for everything that follows. Resist the temptation to move to pearl generation here — the compression comes later, after the finding has been properly deconstructed.

---

### Step CP.1: Patient Anchor — Clinical Question Check

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Here is a patient I am thinking about: [paste a brief
de-identified patient vignette — diagnosis, key history, relevant
comorbidities, and the clinical decision you are facing]. Read this
patient alongside the evidence I just loaded. Before we generate any
pearls: does this evidence directly bear on a decision for this patient?
In two or three sentences, tell me what clinical question the evidence
raises for this specific patient — and flag immediately if there is any
feature of this patient that would put them outside the source
population.
```

> [!NOTE] **Application Note:** The patient anchor is not a quiz. The AI answers its own question; the learner reads and calibrates. If the patient is flagged as outside the source population at this step, the learner should carry that caveat into every pearl that follows. Use de-identified vignettes only — remove name, date of birth, and any identifying information before pasting.

---

## Phase 2 · Execution — Layered distillation

*The distillation phase works in five layers. Run them in sequence. Each layer refines what the final pearl can legitimately say.*

---

### Layer 1 — What the finding actually claims (Evidence boundary mapping)

#### Step CP.2: Evidence Boundary Map

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Before we compress this finding into a pearl, map its exact
boundaries. Tell me: (1) the precise patient population in which the
finding holds — age range, diagnosis criteria, exclusions, and any
important subgroup where the finding did not hold, (2) the clinical
setting in which the study was conducted and whether that setting matches
where I practise, (3) the comparator — what was the intervention tested
against, and whether that comparator is what I actually use in practice,
and (4) the outcome that was measured — and whether that outcome is the
one I actually care about for my patients. Conclude with a single
sentence: given these boundaries, for what fraction of the patients I
see every week does this finding actually apply?
```

---

#### Step CP.3: Evidence Boundary — Patient 2 Scope Check

**AI Mode:** Traditional · Devil's Advocate

**Prompt:**

```
#VibeRounds Now test these evidence boundaries against this patient:
[paste de-identified patient vignette]. Tell me directly: does this
patient sit inside or outside the evidence boundary? If inside, which
boundary conditions are comfortably met and which are marginal? If
outside, name the specific exclusion criterion or population mismatch.
End with one sentence: for this patient, can I use a pearl from this
evidence, and if so with what qualifier?
```

> [!NOTE] **Application Note:** This is the step most likely to reveal that a pearl which sounds universally applicable in fact applies to a narrow subgroup. Naming a real patient makes that boundary concrete rather than theoretical.

---

### Layer 2 — What the numbers permit (Effect calibration)

#### Step CP.4: Effect Size Calibration for Pearl Use

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Translate the effect size of this finding into language that
can be encoded into a clinical pearl without distortion. Tell me:
(1) what the effect magnitude actually is — in absolute terms, not
relative risk alone — and whether it is clinically meaningful as well
as statistically significant, (2) what the confidence interval says
about how certain I should be — specifically whether the lower bound
of the interval would still change my practice, (3) if an NNT applies,
what it means in the context of my typical caseload, and (4) what
word or qualifier belongs in the pearl to convey the strength of this
evidence — for example: "consistently shown," "suggested by one RCT,"
"observed in a post-hoc subgroup," or "supported by meta-analysis with
moderate heterogeneity." The qualifier is part of the pearl, not a
footnote.
```

---

#### Step CP.5: What the Numbers Cannot Warrant

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Play devil's advocate on the numbers behind this finding.
Tell me what the statistics do not permit a clinical pearl to claim:
(1) if the result was driven by a large sample making a small effect
statistically significant, name that explicitly, (2) if subgroup results
contradict the headline finding, name the subgroup and the direction of
the contradiction, (3) if the primary outcome and the patient-important
outcome diverge — for example, a surrogate endpoint versus mortality —
name that gap, and (4) complete this sentence: "A clinician who uses
this evidence to justify [specific action] without knowing [specific
limitation] is at risk of [specific error]." That completed sentence
is the guardrail that must be embedded in or accompany any pearl from
this data.
```

---

### Layer 3 — Generating and stress-testing the pearl (Compression)

#### Step CP.6: First Pearl Draft — Controlled Compression

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Based on the evidence boundary, effect calibration, and
guardrail we have now established, draft three candidate clinical pearls
from this finding. Each pearl must: (1) be twenty-five words or fewer,
(2) name the patient type it applies to, (3) state the clinical action
or threshold, (4) encode the single most important caveat or scope
limit inside the statement — not as a footnote, and (5) include one
evidence-strength qualifier (e.g. "in RCT evidence," "across
observational data," "per meta-analysis"). After the three drafts,
tell me which one is the most accurate and which is the most bedside-
usable — and whether those are the same pearl or different ones.
```

> [!NOTE] **Application Note:** Three candidate pearls are generated deliberately. Clinical pearls often live on a spectrum between accuracy and memorability — forcing three versions surfaces that trade-off explicitly and lets the learner choose with awareness of what each version sacrifices.

---

#### Step CP.7: Pearl Stress Test — Patient 3

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Take the most accurate pearl from Step CP.6 and stress-test
it against this patient: [paste de-identified patient vignette]. Tell
me: (1) does the pearl apply to this patient as written, partially
apply, or not apply — and why? (2) if a clinician applied this pearl to
this patient without checking its scope, what specific error could
result? (3) what one-word qualifier or patient-type flag, if added to
the pearl, would prevent that error? Produce a revised version of the
pearl that would be safe to apply to this patient without additional
context.
```

> [!NOTE] **Application Note:** This is the most important stress-test step. If the pearl does not survive contact with a real patient without modification, the original pearl was over-broad. The revised pearl produced here is often the more useful clinical tool.

---

### Layer 4 — Teaching and retention (Pedagogy layer)

#### Step CP.8: Teaching Pearl — Bloom's Levels

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Apply Bloom's Revised Taxonomy to the pearl we have
developed. Tell me: (1) Remember — what is the single fact a trainee
must memorise from this pearl? (2) Understand — what is the conceptual
reason this pearl is true — the pathophysiology or mechanism that makes
the clinical statement follow from the biology? (3) Apply — in what
three clinical scenarios would a trainee correctly use this pearl?
(4) Analyse — what distinguishes the patient this pearl applies to from
a similar patient it does not apply to? (5) Evaluate — how confident
should a clinician be in acting on this pearl, and what would increase
that confidence? (6) Create — write a one-sentence clinical vignette
that could be used to teach this pearl to a first-year resident, where
applying the pearl correctly changes the management.
```

> [!NOTE] **Application Note:** See Framework C. The 'Analyse' level (step 4) is the most practically valuable for pearl use — it trains the clinician to recognise the boundary case where the pearl does not apply, which is where errors occur.

---

#### Step CP.9: Mnemonic and Recall Architecture — Patient 4

**AI Mode:** Brainstorming

**Prompt:**

```
#VibeRounds Generate three different memory architectures for this pearl
— three ways to encode it so that it survives a busy ward round and
surfaces at the right moment: (1) a clinical rule of thumb phrased as
an if-then statement, (2) a contrast anchor — a pair of patient types,
one for whom the pearl applies and one for whom it does not, stated
as a single memorable phrase, and (3) a flag phrase — a patient
characteristic or clinical trigger word that, when encountered, fires
the recall of this pearl. Then apply all three to this patient:
[paste de-identified patient vignette] — tell me which recall
architecture would most naturally fire when this patient presents,
and why.
```

---

### Layer 5 — Contextualisation and system fit (Integration layer)

#### Step CP.10: Guideline Alignment Check

**AI Mode:** Traditional · Devil's Advocate

**Prompt:**

```
#VibeRounds Check this pearl against the current evidence landscape.
Tell me: (1) does this pearl align with, extend, challenge, or
contradict current guideline consensus — and name the specific
guideline and its recommendation grade, (2) are there other published
studies that reach a different conclusion, and if so, what explains the
disagreement, (3) has this finding been superseded by more recent
evidence that a clinician reading the original paper would not know
about, and (4) complete this sentence: "A clinician who treats this
pearl as settled should monitor the literature for [specific type of
study or update] because [specific reason the current evidence might
shift]."
```

---

#### Step CP.11: Resource-Context Translation — Patient 5

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds This pearl was generated from evidence produced in a
specific healthcare setting. Translate it for this patient and context:
[paste de-identified patient vignette — include any relevant
information about resource availability, setting (primary care,
district hospital, tertiary centre), or geographic context]. Tell me:
(1) does the clinical action the pearl recommends require resources,
investigations, or drugs that may not be available in this patient's
setting? (2) if the full recommendation is not actionable, what is the
highest-fidelity version of this pearl that can be applied with the
resources available? (3) what is the risk of applying the pearl in a
resource-constrained setting where the full workup the study assumed
is not possible?
```

> [!NOTE] **Application Note:** See Module 14 for a full resource-constrained reasoning workflow. This step is placed last in the execution phase deliberately — resource adaptation should happen after full accuracy has been established, not before. A pearl adapted too early may lose its evidence-grounded core.

---

## Phase 3 · Closure — Pearl crystallisation

### Step CP.12: Critical Awareness Debrief (Framework D)

**AI Mode:** Devil's Advocate

**Prompt:**

```
#VibeRounds Before I finalise these pearls, apply the Vibe Rounds
Critical Awareness lens: (1) what publication bias, funding influence,
or framing choices in the source evidence might have made this finding
seem stronger than it is? (2) what assumptions about patient
demographics, healthcare access, or disease prevalence does the
source study make that may not hold in my setting? (3) what is the
single weakest link in the chain from original evidence to the pearl
I am about to use at the bedside? (4) if this pearl became widely
adopted and was applied without the caveat we identified, what patient
harm scenario is most plausible? Give me honest, targeted answers —
not a generic limitations disclaimer.
```

> [!NOTE] **Application Note:** See Framework D. Step 4 is not hypothetical catastrophising — it is the concrete harm model that determines whether the pearl needs a built-in stop sign or can be used freely. A pearl that fails this test should be carried with a verbal caveat every time it is used.

---

### Step CP.13: Final Pearl Set — Exportable Output

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Produce the final Clinical Pearl Set from this session.
Structure it exactly as follows for each pearl (generate one primary
pearl and up to two secondary pearls if the evidence warrants):

Pearl statement: [≤25 words; patient type + action/threshold +
caveat + evidence qualifier]
Evidence base: [one sentence — study type, population, effect size
in clinical terms]
Applies to: [specific patient profile — include the inclusion
criteria that matter]
Does NOT apply to: [the one exclusion or boundary condition most
likely to be overlooked]
Strength rating: [Strong / Moderate / Preliminary — one word with
a one-sentence justification]
Bedside trigger: [the clinical moment or patient feature that should
fire recall of this pearl]
Guardrail: [the single check a clinician must make before acting
on this pearl]
Guideline alignment: [Aligned / Extends / Challenges — one word
and one sentence]
Last-evidence date: [the most recent study or guideline informing
this pearl and its date]

After the pearl set, add one sentence: the condition under which
this pearl should be retired or revised.
```

> [!NOTE] **Application Note:** The final pearl set is the exportable output of this module — designed to be saved to a personal learning log, shared at a teaching round, or linked to a patient case in a registry. The 'Does NOT apply to' field carries equal weight to the pearl statement itself: a pearl without its boundary is a hazard.

---

### Step CP.14: Fink FLINK — Significant Learning from Pearl Generation

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Apply Fink's six dimensions of significant learning to what
we have developed in this pearl session: (1) Foundational Knowledge —
what are the two facts a clinician must now know that they may not have
known before this session? (2) Application — how will a clinician who
has worked through this module use the evidence differently at the
bedside compared with a clinician who read only the abstract?
(3) Integration — how does this pearl connect to or reframe something
the clinician already knew about this condition or system?
(4) Human Dimension — what does the evidence behind this pearl mean
for the patient's experience — does it change the conversation a
clinician should have with them, or what a patient can expect?
(5) Caring — does the evidence behind this pearl activate any value
tension — for example, around resource allocation, patient autonomy,
or whose outcomes were measured in the source study? (6) Learning
How to Learn — what does the process of generating this pearl teach
about how to critically compress evidence more efficiently next time?
```

> [!NOTE] **Application Note:** See Framework B. Dimension 5 (Caring) surfaces the ethical assumptions embedded in any evidence-based pearl — including whose values were prioritised in the choice of outcome measure and whose were not.

---

### Step CP.15: Difficulty Ratchet — Next Pearl Session

**AI Mode:** Traditional

**Prompt:**

```
#VibeRounds Based on the complexity of the evidence we distilled and
the accuracy of the pearls we generated, recommend what evidence I
should engage with next to deepen understanding on this clinical topic:
(1) a more methodologically rigorous paper I should read before treating
the current pearl as settled, (2) a contrasting study that would force
a revision of or qualification to the pearl, or (3) a guideline or
systematic review that would either validate or supersede the pearl.
Then name one pearl-generation skill to develop before the next session
— for example: distinguishing surrogate from patient-important outcomes,
reading heterogeneity in a forest plot, or identifying when an NNT
applies to my caseload versus a trial population.
```

---

## Module CP Prompt Index

| ID    | Phase      | Layer   | Prompt purpose                                                       | AI mode                          |
| ----- | ---------- | ------- | -------------------------------------------------------------------- | -------------------------------- |
| CP.0  | Initiation | —       | Evidence load & core finding extraction — entry scaffold             | Traditional                      |
| CP.1  | Initiation | —       | Patient anchor — clinical question check                             | Traditional                      |
| CP.2  | Execution  | Layer 1 | Evidence boundary map — population, setting, comparator, outcome     | Traditional                      |
| CP.3  | Execution  | Layer 1 | Evidence boundary — Patient 2 scope check                            | Traditional · Devil's Advocate   |
| CP.4  | Execution  | Layer 2 | Effect size calibration — absolute terms, CI, NNT, qualifier         | Traditional                      |
| CP.5  | Execution  | Layer 2 | What the numbers cannot warrant — statistical guardrail              | Devil's Advocate                 |
| CP.6  | Execution  | Layer 3 | First pearl draft — three candidates, controlled compression         | Traditional                      |
| CP.7  | Execution  | Layer 3 | Pearl stress test — Patient 3 — safety and scope revision            | Devil's Advocate                 |
| CP.8  | Execution  | Layer 4 | Teaching pearl — Bloom's levels, vignette generation                 | Traditional                      |
| CP.9  | Execution  | Layer 4 | Mnemonic and recall architecture — Patient 4                         | Brainstorming                    |
| CP.10 | Execution  | Layer 5 | Guideline alignment check — evidence landscape                       | Traditional · Devil's Advocate   |
| CP.11 | Execution  | Layer 5 | Resource-context translation — Patient 5                             | Traditional                      |
| CP.12 | Closure    | —       | Critical awareness debrief — Framework D                             | Devil's Advocate                 |
| CP.13 | Closure    | —       | Final pearl set — exportable structured output                       | Traditional                      |
| CP.14 | Closure    | —       | Fink FLINK — significant learning from pearl generation              | Traditional                      |
| CP.15 | Closure    | —       | Difficulty ratchet — next pearl session                              | Traditional                      |

---

## Patient anchoring — how to use the five patient slots

Five steps in this module ask the learner to paste a patient vignette. The slots are placed at the evidence-boundary check (CP.3), the pearl stress test (CP.7), the mnemonic recall step (CP.9), the resource-context translation (CP.11), and the initial clinical question check (CP.1). Each slot serves a different purpose:

**CP.1** — establishes whether the evidence bears on this patient at all.
**CP.3** — tests whether the evidence boundary includes or excludes this patient.
**CP.7** — stress-tests the pearl against a real patient to catch over-broad compression.
**CP.9** — anchors the mnemonic to a real clinical trigger rather than an abstract one.
**CP.11** — tests whether the pearl is actionable in this patient's specific context.

The same patient can be used at all five slots (tracking one patient through the full distillation) or different patients at each slot (testing the pearl's generalisability across patient types). Use de-identified vignettes at every step — remove name, date of birth, hospital number, and any other identifying detail before pasting.

---

## AI Mode Summary

| Mode                           | Steps                                      |
| ------------------------------ | ------------------------------------------ |
| Traditional                    | CP.0, CP.1, CP.2, CP.4, CP.6, CP.8, CP.11, CP.13, CP.14, CP.15 |
| Devil's Advocate               | CP.5, CP.7, CP.12                          |
| Traditional + Devil's Advocate | CP.3, CP.10                                |
| Brainstorming                  | CP.9                                       |

*No Socratic prompts in this module by design. This module distils evidence into the clinician; it does not test the clinician's prior knowledge of the evidence. If Socratic-mode engagement with the clinical topic is the goal, use Module 1 on a case derived from the same clinical area before running Module CP.*

---

## What makes a pearl bedside-ready vs bedside-dangerous

A **bedside-ready pearl** meets all four of the following:

1. **Patient type is named** — the pearl specifies, at minimum, the diagnosis or clinical context for which it holds.
2. **Action or threshold is concrete** — the pearl prompts a specific decision, not a general awareness.
3. **Caveat is internal** — the most important limitation is inside the statement, not appended as a footnote that will not survive a busy ward round.
4. **Evidence strength is signalled** — a single qualifier tells the clinician how much weight to put on the pearl before independent verification.

A **bedside-dangerous pearl** does any of the following:

- States an absolute ("always," "never") where the evidence shows a conditional.
- Drops the patient-type qualifier to make the statement more broadly applicable.
- Uses relative risk where the absolute risk difference is small enough to matter.
- Presents a subgroup finding as if it were the primary finding.
- Omits the comparator — making a treatment sound effective without saying "compared to what."

Module CP is designed to produce pearls of the first type and explicitly fail pearls of the second type at Step CP.7.

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (persona language throughout)
- [Framework B — Fink's FLINK Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-B-Finks-FLINK-Taxonomy.html) (Step CP.14)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Step CP.8)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Step CP.12)
- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) (for Socratic engagement with the clinical topic before distillation)
- [Module 10 — Medical Journal & Article Reading](https://avi33tbtt.github.io/Prompts/Module-10-Medical-Journal-Article-Reading.html) (run before Module CP when the source is a single article requiring full critical appraisal)
- [Module 14 — Resource-Constrained Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.html) (for full resource-adaptation workflow beyond Step CP.11)
- [Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html) (for locating counter-evidence and updates referenced at Step CP.10)
- [Module 4 — Peer-Level Ward Round Preparation](https://avi33tbtt.github.io/Prompts/Module-04-Peer-Level-Ward-Round-Preparation.html) (for deploying finalised pearls in a ward-round context)

---

## Suggested entry paths

| You have… | Start at… |
| --- | --- |
| A single journal article you want to distil | Run Module 10 first, then bring the Step 10.14 crystallisation summary into CP.0 |
| A guideline recommendation you want to pearl-ify | CP.0 directly — paste the recommendation text |
| A conference summary or lecture note | CP.0 — paste key findings; the boundary mapping (CP.2) is especially important for secondary sources |
| A pearl you already use but want to validate | CP.7 directly — paste your existing pearl as the "first draft" and stress-test it |
| A teaching session to prepare | Run full module, then export CP.13 + CP.8 (Bloom's vignette) as teaching materials |

---

## Navigation

**See also:** [Module 10 — Medical Journal & Article Reading](https://avi33tbtt.github.io/Prompts/Module-10-Medical-Journal-Article-Reading.html) · [Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html) · [Module 4 — Peer-Level Ward Round Preparation](https://avi33tbtt.github.io/Prompts/Module-04-Peer-Level-Ward-Round-Preparation.html)

[← Back to README](https://avi33tbtt.github.io/Prompts/)

---

*Vibe Rounds Prompt Modules — Module CP. Drafted June 2026.*
*Authored in alignment with the VibeRounds paradigm — Dr. Avinash Kumar Gupta.*
