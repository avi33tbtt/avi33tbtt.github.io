# Module 43 — Health Economics & Value-Based Care Alignment

**Objective:** Train the discipline of evaluating clinical decisions not only through the lens of efficacy and safety, but through the lens of economic value, resource allocation, and system-level sustainability. This module develops the learner's ability to ask "what does this cost, and is it worth it?" alongside "does this work?" — integrating health-economic literacy into bedside reasoning rather than treating cost as an afterthought or an administrative concern separate from clinical medicine.

**Indication:** Whenever a case involves choosing between multiple effective options that differ substantially in cost; whenever a patient's access to treatment is constrained by payer, geography, or formulary; whenever a new drug, device, or intervention is being considered at the institutional or policy level; or whenever a learner encounters the gap between what is clinically optimal in theory and what is realistically available in practice.

> [!IMPORTANT] **Verification Discipline.** Cost-effectiveness data, QALYs, reimbursement codes, and formulary status change frequently and vary substantially by jurisdiction, payer, and time. Any specific cost figure, ICER threshold, or payer policy cited in this module must be verified against a live, current source before being used in any clinical, administrative, or patient-facing context. AI-generated cost figures presented without a live source are unreliable and potentially misleading — treat them as illustrative estimates only.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Frame the economic question

### Step 22.0: Session Setup & Value Framing Contract

**Prompt:**

```
#VibeRounds You are a health economics reasoning partner in the Vibe
Rounds framework. Your role is to help me integrate economic and value-
based thinking into clinical decision-making — not to replace clinical
judgement, but to add the dimension of cost, access, and resource
stewardship alongside efficacy and safety. When I provide a clinical
scenario, help me reason through both the clinical and economic value of
available options. Always distinguish between what is evidence-based
clinical fact, what is health economics modelling (which involves
assumptions), and what is payer- or context-specific policy. Do not give
me specific cost figures or reimbursement codes as current fact without
flagging that these require live verification. Confirm you understand this
framing before we begin.
```

> [!NOTE] **Application Note:** Run once at the start of every Module 22 session. The explicit separation between clinical evidence, economic modelling, and payer policy is the module's foundational intellectual discipline — conflating these three is the most common error in bedside health economics reasoning.

### Step 22.1: Defining the Value Question (PICO-E Format)

**Prompt:**

```
#VibeRounds Help me frame my clinical question in PICO-E format —
Patient/Population, Intervention, Comparison, Outcome, and Economic
perspective (whose perspective am I taking: the patient paying out-of-
pocket, the payer/insurer, the hospital, or society as a whole?). Ask me
each component one at a time. The economic perspective will shape
everything downstream — a drug that is cost-effective from a societal
perspective may be unaffordable for a specific patient, and I need to be
clear which lens I am using.
```

> [!NOTE] **Application Note:** The addition of "E" (Economic perspective) to the standard PICO framework is this module's structural innovation. Perspective-switching — seeing the same intervention as cost-effective from one vantage point and not from another — is a core health economics literacy skill, and it must be established before any cost-effectiveness data is interpreted.

---

## Phase 2 · Execution — Analyse, compare, and apply

### Step 22.2: Cost-Effectiveness Concepts & ICER Interpretation

**Prompt:**

```
#VibeRounds Explain the concept of incremental cost-effectiveness ratio
(ICER) in the context of my PICO-E question. What is the QALY (quality-
adjusted life year), and what ICER thresholds are commonly used in my
region or internationally (e.g. NICE's £20,000–£30,000/QALY threshold,
WHO's 1–3× GDP per capita threshold) to judge whether an intervention
represents good value? Then apply this framework to the intervention I am
studying — is there published cost-effectiveness data? If so, what was
the ICER and what assumptions drove it? Flag whether any figures you cite
require live verification.
```

> [!NOTE] **Application Note:** Many clinicians have never been taught to interpret an ICER. This step is deliberately didactic — it teaches the concept before asking the learner to apply it, following Bloom's "Understand before Analyse" sequencing. The ICER threshold is context-specific and contested; the step explicitly names this uncertainty rather than presenting a single number as universal.

### Step 22.3: Access, Affordability & Equity Analysis

**Prompt:**

```
#VibeRounds Beyond cost-effectiveness at the population level, help me
reason through the access and equity dimensions of this clinical decision.
For the patient in front of me: (1) What is the likely out-of-pocket cost
and is there evidence of financial toxicity associated with this
treatment? (2) Are there known disparities in access to this intervention
by income, geography, race, or insurance status? (3) Is there a lower-
cost alternative that achieves comparable outcomes for patients with
constrained resources? Ask me to reason through each question rather than
simply providing the answers.
```

> [!NOTE] **Application Note:** Financial toxicity — the measurable harm to patients from the financial burden of treatment, independent of the clinical outcome — is a patient-safety concept, not just a payer concern. This step deliberately frames equity and access as clinical issues, not administrative ones, to position them as within the clinician's scope of reasoning and advocacy.

### Step 22.4: Value-Based Care Framework Application

**Prompt:**

```
#VibeRounds Apply a value-based care framework to this case. In Porter's
definition, value = patient outcomes achieved per dollar spent. Help me
identify: (1) What are the full outcomes that matter to this patient
(not just the disease-specific endpoint, but functional, quality-of-life,
and care-experience outcomes)? (2) Over what time horizon should costs
and outcomes be measured — acute episode, full care cycle, or lifetime?
(3) Where are the high-cost, low-value steps in the care pathway most
likely to occur for a patient like this? Make me reason through each
question actively rather than receiving a summary.
```

> [!NOTE] **Application Note:** Porter's value equation reframes the cost conversation from "spending less" to "achieving more per unit of cost" — a distinction that matters clinically because it legitimises higher spending when it delivers proportionally higher outcome value. The "full care cycle" time horizon question is particularly important: many interventions appear expensive at the point of care but reduce downstream costs substantially.

### Step 22.5: Formulary, Payer & Real-World Access Constraints

**Prompt:**

```
#VibeRounds Help me reason through the real-world access constraints on
the optimal intervention identified so far. What formulary tier is this
drug or device likely to occupy? What prior authorisation requirements
are commonly associated with it? Are there known gaps between what payers
cover and what evidence supports? If the first-line, highest-value option
is not accessible to this patient, what is the next-best option that
balances clinical effectiveness and real-world feasibility? Remind me
throughout that any specific formulary or coverage information requires
live verification — do not present historical payer policies as currently
accurate.
```

> [!NOTE] **Application Note:** The gap between evidence-based "best" and payer-approved "accessible" is one of the most practically important and pedagogically under-taught dimensions of clinical decision-making. This step trains the learner to navigate that gap constructively rather than ignoring it or treating it purely as an administrative obstacle.

### Step 22.6: Budget Impact & Institutional Stewardship Reasoning

**Prompt:**

```
#VibeRounds Shift perspective from the individual patient to the
institutional or system level. If this intervention were adopted for all
eligible patients in my facility or health system: (1) What would the
approximate budget impact be, and what assumptions does that estimate
rest on? (2) Does adopting this intervention displace resources from
another part of the care pathway, and is that displacement justified by
comparative value? (3) What is the clinician's appropriate role in
resource stewardship — where does individual patient advocacy end and
population-level fairness begin? Help me reason through the tension
rather than resolving it artificially.
```

> [!NOTE] **Application Note:** The final question — about where individual advocacy ends and stewardship begins — is deliberately unresolved. It reflects a genuine ethical tension in health economics that has no clean answer. The goal is to build the learner's comfort with holding that tension, not to give them a formula. This connects to Framework B (Fink's Human Dimension and Caring dimensions) and Framework D (ethical awareness).

---

## Phase 3 · Closure / Review — Synthesise and critically appraise

### Step 22.7: Value Summary & Clinical Decision Integration

**Prompt:**

```
#VibeRounds Synthesise what this session surfaced: (1) What is the
highest-value option for this patient given both clinical evidence and
economic considerations? (2) Where does the evidence base support that
conclusion, and where did we rely on modelling assumptions or estimates
that need verification? (3) Is there a gap between what is technically
optimal and what is actually accessible, and if so, what is the
appropriate next step — advocacy, alternative selection, or a hybrid
approach? Write this as a concise value-oriented clinical decision note,
clearly separating established evidence from economic inference.
```

> [!NOTE] **Application Note:** The explicit separation of "established evidence" from "economic inference" in the output mirrors the epistemological distinction in Step 22.0's setup. This closing note format is designed to be portable — it could inform a conversation with a pharmacist, an insurer, or a hospital formulary committee without misrepresenting the certainty level of its claims.

### Step 22.8: Critical Awareness — Bias in Health Economic Reasoning

**Prompt:**

```
#VibeRounds Apply a critical awareness lens to this health economics
session: (1) Who funded the cost-effectiveness studies I relied on, and
does that create a risk of industry-favourable ICER framing? (2) Did I
conflate cost reduction with value creation at any point — are there
places where the "cheaper" option may not actually be the higher-value
option? (3) Did the equity and access analysis reflect the actual patient
population this decision affects, or did it default to an assumed
"average" patient? (4) What is the single most important assumption in the
economic reasoning I used today, and what happens to the conclusion if
that assumption is wrong? Be honest and constructive.
```

> [!NOTE] **Application Note:** Industry funding of pharmacoeconomic studies is well-documented as a source of systematic bias toward favourable ICERs — this is not a theoretical concern but a consistent finding in the health economics literature. This step extends Framework D's critical awareness discipline into the specific bias landscape of health economic evidence, where the learner is arguably less well-trained to detect distortion than in clinical trial evidence.

---

## Related Frameworks

- [Framework B — Fink's Taxonomy of Significant Learning](https://avi33tbtt.github.io/Prompts/Framework-B-Finks-FLINK-Taxonomy.html) (Human Dimension and Caring dimensions — the equity and stewardship reasoning in Steps 22.3 and 22.6)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Understand → Analyse → Evaluate sequencing across Steps 22.2–22.7)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (funding bias and industry influence — Step 22.8)
- [Module 14 — Resource-Constrained Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.html) (natural complement — that module reasons under resource scarcity; this one evaluates the economic value of choices made under any resource environment)
- [Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html) (when a new intervention is identified in Module 21, Module 22 provides the framework for evaluating whether it is worth adopting)

---

## Navigation

**Previous:** [← Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html)

**Next:** [Module 23 — Clinical Workflow Implementation Science →](./Module-23-Clinical-Workflow-Implementation-Science.md)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
