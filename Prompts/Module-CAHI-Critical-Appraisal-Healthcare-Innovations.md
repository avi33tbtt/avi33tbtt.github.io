---
title: "Module CAHI — Critical Appraisal of Healthcare Innovations & Ideas"
part_of: "VibeRounds Prompt Modules"
---

# [Dr. Avinash kumar gupta](https://avi33tbtt.github.io/)

[← Back to Module Index](https://avi33tbtt.github.io/Prompts/Prompts.html)

# Module CAHI — Critical Appraisal of Healthcare Innovations & Ideas

> [!IMPORTANT] **Clinical & Innovation Disclaimer**
> This module produces **learning-level, desk-based critical appraisal** of a healthcare idea, product concept, workflow innovation, or digital health tool. It does **not** constitute a regulatory determination, an ethics-committee approval, a health-technology-assessment (HTA) verdict, an investment recommendation, or clearance for human use. Any innovation surfaced or scored favorably here still requires independent review by the relevant institutional review board (IRB/ethics committee), regulatory body, biomedical/clinical safety officer, and — where patient contact is involved — a licensed clinician, before any further development, testing, or deployment step is taken.

---

> [!NOTE] **What this module is and is not**
> This is a **structured skepticism engine** — a repeatable way to stress-test a healthcare idea before time, money, or patient trust is spent on it. It plays the role of a rigorous grant reviewer, a devil's-advocate innovation-committee member, and a implementation scientist, combined.
>
> - It does not tell you whether to build the idea. It tells you **what you don't yet know**, **where the evidence is thin**, and **what would have to be true** for the idea to work.
> - It treats "the idea sounds good" as a hypothesis to be attacked, not a conclusion to be confirmed.
> - It is equally usable for a **clinical innovation** (a new triage protocol, a bedside score), a **digital health tool** (an app, an AI decision-support system), a **service redesign** (a new referral pathway), or a **policy-level idea** (a screening program).

---

## Authorship & Development

Developed by Dr. Avinash Kumar Gupta as part of the *Vibe Rounds Prompt Modules* directory (Module CAHI), companion to Module 34 (High-Value Care Auditor), Module 41 (Clinical Workflow Implementation Science), Module 42 (Clinical Pre-Mortem), Module 43 (Health Economics & Value-Based Care Alignment), and Module 49 (FMEA Analysis).

- **Review Process:** No formal peer review or institutional validation has been performed. Treat every output as a structured learning exercise, not a vetted appraisal.

## Evidence Base

⚠️ This module has not undergone controlled evaluation of appraisal accuracy, inter-rater reliability, or downstream decision quality. It draws its structure from established, published frameworks (cited per step) but the *module itself* — as an AI-orchestrated workflow — sits at the expert-opinion / design-proposal level of evidence.

---

## Objective

To interrogate a healthcare innovation or idea — at any stage from napkin sketch to pilot-ready — across the eight dimensions that determine whether an idea that looks good on paper survives contact with real patients, real clinicians, real budgets, and real regulation: **problem-solution fit, evidence strength, safety/risk, ethics & equity, regulatory pathway, health economics, comparative advantage, and implementation feasibility.**

## Indication

Use this module when:
- You have a healthcare-related idea (device, app, algorithm, protocol, workflow, screening program, care model) and want a rigorous outside-view critique before investing further effort.
- You are preparing to pitch, publish, or submit an innovation for institutional review, a hackathon, a grant, or an incubator, and want to pre-empt the hardest questions a reviewer will ask.
- You are teaching yourself (or a learner) how to think like a skeptical reviewer rather than an enthusiastic inventor.
- You are comparing two or more competing ideas for the same clinical problem and need a like-for-like scorecard.

## Lifecycle

Three phases, run in sequence:

| Phase | Purpose |
| --- | --- |
| **Initiation** | Force the idea into a falsifiable, comparable, precisely-stated form before any critique begins |
| **Execution** | Run the idea through eight independent appraisal lenses, each designed to surface a different failure mode |
| **Closure / Review** | Synthesize all lenses into a single scorecard and a structured, honest verdict |

---

## ⚠️ Safety & Compliance Note

> [!IMPORTANT]
> Do not paste identifiable patient data, proprietary trade-secret code, or unpublished competitor data into any step below. Where an idea involves a named institution, de-identify or generalize it (e.g., "a 300-bed tertiary hospital" rather than the actual name) unless you have explicit authorization to disclose it.

---

## 🗂️ Step Index

| Step | Name | Lifecycle Phase | What it does |
| --- | --- | --- | --- |
| CAHI.0 | Idea Intake & Structured Description | Initiation | Forces the idea into a standard, falsifiable format |
| CAHI.1 | Novelty & Prior-Art Screen | Initiation | Checks whether the idea (or something functionally identical) already exists |
| CAHI.2 | Problem–Solution Fit Audit | Execution | Tests whether the idea actually solves the stated problem, for the stated people |
| CAHI.3 | Evidence Base Appraisal | Execution | Maps every claim behind the idea to its evidentiary strength |
| CAHI.4 | Safety & Risk Audit (FMEA-lite) | Execution | Surfaces failure modes, harms, and unintended consequences |
| CAHI.5 | Ethical & Equity Audit | Execution | Screens for justice, consent, bias, and access concerns |
| CAHI.6 | Regulatory & Compliance Screen | Execution | Identifies the regulatory pathway and compliance gaps |
| CAHI.7 | Health Economics & Value Audit | Execution | Tests cost, value, and payer/reimbursement logic |
| CAHI.8 | Comparative Advantage vs. Standard of Care | Execution | Forces an honest head-to-head against what already exists |
| CAHI.9 | Scalability & Implementation Science Audit | Execution | Tests whether the idea survives contact with real-world adoption barriers |
| CAHI.10 | Stakeholder & Adoption-Barrier Mapping | Execution | Identifies who will resist, why, and what would change their mind |
| CAHI.11 | Composite Appraisal Scorecard | Closure/Review | Converts all prior steps into one comparable scorecard |
| CAHI.12 | Structured Critique Report & Go/No-Go/Iterate | Closure/Review | Produces the final written appraisal with an explicit recommendation |

---

## Phase 1 — Initiation

### Step CAHI.0 — Idea Intake & Structured Description

**Objective:** Convert a loosely-described idea into a precise, falsifiable, comparable statement before any judgment is applied.

**Prompt:**
```
You are a rigorous innovation-committee intake reviewer for healthcare ideas.
I will describe a healthcare idea, product, protocol, or workflow innovation.
Do NOT evaluate it yet. Your only job right now is to restate it back to me
in this exact structured format, flagging any field where my description was
too vague for you to complete confidently:

1. ONE-SENTENCE SUMMARY (what it is, in plain language)
2. TARGET PROBLEM (what specific problem, for whom, in what setting)
3. TARGET USER/POPULATION (who uses it, who benefits, who pays)
4. PROPOSED MECHANISM (how it is supposed to work, step by step)
5. STAGE OF DEVELOPMENT (idea only / prototype / pilot data / published evidence / deployed)
6. KEY CLAIMS (list every claim of benefit being made, as short falsifiable
   statements — e.g. "reduces time-to-diagnosis by X%" — not vague claims like
   "improves care")
7. KNOWN UNKNOWNS (anything the idea's proponent has flagged as unresolved)
8. VAGUE-FIELD FLAGS (list any of the above 7 fields where my input was
   too vague, and ask me one targeted question per flagged field)

Here is my idea: [paste your idea description here]
```

**Application Note:** Do not proceed to CAHI.1 until every vague-field flag is resolved. An idea that cannot survive being restated precisely usually cannot survive appraisal either — that itself is useful information.

---

### Step CAHI.1 — Novelty & Prior-Art Screen

**Objective:** Determine whether the idea, or something functionally equivalent, already exists — and if so, how the new idea differs.

**Prompt:**
```
Using the structured idea description below, act as a prior-art and novelty
reviewer. For the mechanism and target problem described:

1. List the most likely existing solutions, products, protocols, or published
   approaches that address the same problem for the same population (name
   categories of solution even if you cannot name specific commercial
   products with certainty — flag uncertainty explicitly).
2. For each, state in one line how the proposed idea appears to differ
   (mechanism, population, cost, setting, or nothing meaningful).
3. Classify the idea's novelty as one of: TRULY NOVEL MECHANISM / NOVEL
   COMBINATION OF EXISTING PARTS / INCREMENTAL VARIANT / FUNCTIONALLY
   DUPLICATE OF EXISTING SOLUTION.
4. If DUPLICATE or INCREMENTAL, state explicitly what would need to be true
   for this idea to still be worth pursuing (e.g., much lower cost, a
   currently unserved population, regulatory arbitrage, a setting where
   existing solutions fail).

Structured idea description: [paste output from CAHI.0]
```

**Validated Env.:** Treat all "prior art" output as a starting hypothesis only — the model's knowledge of existing products/literature may be incomplete or outdated. A live literature/patent/market search (PubMed, Google Patents, app stores, HTA databases) is required before relying on this step's novelty classification.

**Application Note:** This step exists to prevent the single most common innovation failure: reinventing something that already exists, unaware.

---

## Phase 2 — Execution

### Step CAHI.2 — Problem–Solution Fit Audit

**Objective:** Test whether the mechanism actually addresses the root cause of the stated problem, rather than a symptom or an assumed cause.

**Prompt:**
```
Act as a skeptical human-centered-design reviewer. Using the structured idea
description, perform a problem-solution fit audit:

1. State the root cause(s) of the target problem as currently understood
   (distinguish root cause from symptom).
2. For each proposed mechanism step, state which root cause (if any) it
   actually addresses. Flag any step that addresses a symptom rather than
   a root cause.
3. Identify the single biggest unstated assumption the idea depends on for
   the mechanism to work (e.g., "assumes clinicians will act on the alert,"
   "assumes patients have smartphone + data access").
4. Rate problem-solution fit as: STRONG / PARTIAL / WEAK / MISMATCHED, with
   a one-paragraph justification.
5. Propose the single most useful piece of evidence that would most cheaply
   test the biggest unstated assumption before further investment.

Structured idea description: [paste output from CAHI.0]
```

**Application Note:** This is frequently where innovations quietly fail — not because the mechanism doesn't work, but because it targets the wrong point in the causal chain (see Module 33 — "Why Now?" Precipitant Hunter, and Module 31 — First-Principles Pathophysiology Mapping, for adjacent root-cause techniques applied at the individual-patient level).

---

### Step CAHI.3 — Evidence Base Appraisal

**Objective:** Map every claim behind the idea onto the Oxford CEBM (or equivalent) evidence hierarchy, and separate what is known from what is hoped.

**Prompt:**
```
Act as an evidence-based-medicine appraiser. Using the KEY CLAIMS list from
the structured idea description:

1. For each claim, classify the current supporting evidence using this
   scale: (a) no evidence yet — theoretical only, (b) expert opinion /
   case report, (c) observational / cohort data, (d) controlled trial data
   (single site or small), (e) multi-site RCT or systematic review /
   meta-analysis.
2. For each claim rated (a)–(c), state explicitly: "This is currently an
   assumption, not a demonstrated result."
3. Identify which single claim, if wrong, would most damage the idea's
   overall value proposition (the "load-bearing claim").
4. Propose the minimum viable study design (population, comparator, outcome,
   approximate sample size logic) that could test the load-bearing claim
   most cheaply and most soon.
5. Flag any claim that, if taken to a regulator or an ethics committee
   verbatim, would likely be challenged as overstated.

Structured idea description with KEY CLAIMS: [paste output from CAHI.0]
```

**Application Note:** Pairs directly with Module 21 (Evidence Frontier Search) for pulling the actual current literature once the load-bearing claim is identified, and Module 9 (N-of-1 Case Research Protocol) if the idea is being tested on a single early case.

---

### Step CAHI.4 — Safety & Risk Audit (FMEA-lite)

**Objective:** Surface plausible failure modes, harms, and unintended consequences before they occur in the real world.

**Prompt:**
```
Act as a patient-safety officer running a lightweight Failure Mode and
Effects Analysis (FMEA) on this idea. Using the structured idea description
and proposed mechanism:

1. List the 5-8 most plausible failure modes across three categories:
   (a) technical/mechanistic failure (the tool/protocol doesn't work as
   designed), (b) human-factors failure (misuse, alert fatigue, automation
   bias, workaround behavior), (c) systemic/downstream failure (resource
   diversion, false reassurance, delayed care elsewhere).
2. For each failure mode, rate: Severity (1-5), Likelihood (1-5), 
   Detectability (1-5, where 5 = hardest to detect before harm occurs), 
   and compute a Risk Priority Number (S x L x [6-D]).
3. Rank failure modes by Risk Priority Number, highest first.
4. For the top 3 failure modes, propose one concrete mitigation or design
   change each.
5. Identify any failure mode that alone would be sufficient to justify
   halting deployment ("stop-ship" issues) versus ones that merely need
   monitoring.

Structured idea description: [paste output from CAHI.0]
```

**Validated Env.:** This is a lightweight, single-pass FMEA suitable for early-stage screening. It does not substitute for a formal, multi-stakeholder FMEA workshop required before clinical deployment (see also Module 49 — FMEA Analysis, for the full clinical-case-level version, and Module 29 — The Iatrogenic Domino Effect, for cascading-harm analysis).

**Application Note:** Pay particular attention to human-factors and systemic failure modes — technical failure is usually the easiest category to anticipate and the hardest category to actually cause harm; the other two are the opposite.

---

### Step CAHI.5 — Ethical & Equity Audit

**Objective:** Screen the idea for justice, consent, bias, privacy, and access concerns before they become embedded design defects.

**Prompt:**
```
Act as a healthcare ethics and health-equity reviewer. Using the structured
idea description:

1. Autonomy & consent: Does the idea require informed consent at any stage
   (data collection, algorithmic decision, novel treatment)? Is consent
   currently designed for, or assumed away?
2. Justice & access: Who is most likely to be EXCLUDED from benefiting from
   this idea (by cost, language, literacy, connectivity, disability, geography,
   or existing care-access gaps)? Could the idea widen an existing disparity
   even while helping its direct users?
3. Bias: If the idea involves any algorithm, scoring system, or triage logic,
   what training-data or design biases are plausible, and what population(s)
   would be most harmed by an undetected bias?
4. Privacy & data governance: What sensitive data does the idea collect,
   store, or infer, and what governance gap currently exists?
5. Beneficence/non-maleficence balance: Construct the strongest good-faith
   argument FOR the idea's ethical acceptability, then the strongest
   good-faith argument AGAINST it. Do not resolve the tension — present both.
6. Flag whether this idea, as currently scoped, would likely require formal
   IRB/ethics-committee review before further testing (yes/no/uncertain,
   with reasoning).

Structured idea description: [paste output from CAHI.0]
```

**Application Note:** Step 5's "argument for / argument against" construction deliberately mirrors adversarial/Socratic design (Framework D — Critical Awareness Framework); resist the urge to let the model resolve the tension for you — sitting with genuine ambiguity is the point.

---

### Step CAHI.6 — Regulatory & Compliance Screen

**Objective:** Identify the likely regulatory classification and pathway, and surface compliance gaps early.

**Prompt:**
```
Act as a regulatory-affairs reviewer for healthcare innovations (aware that
you are not a lawyer and your output is a starting orientation only, not
legal or regulatory advice). Using the structured idea description:

1. Classify the likely regulatory category in the most relevant jurisdiction
   the idea will first be deployed in (e.g., medical device — which risk
   class if applicable; clinical decision support software; wellness/
   non-regulated app; laboratory-developed test; health service innovation
   not requiring device clearance). State your reasoning and flag uncertainty.
2. List the 3-5 most likely regulatory or compliance touchpoints (e.g.
   data-protection law, medical device software regulation, clinical trial
   authorization, institutional review board approval, reimbursement/coding
   pathway).
3. For each touchpoint, state in one line what evidence or documentation
   would typically be required.
4. Flag the single compliance step most likely to be underestimated by an
   early-stage innovator.
5. Recommend whether the innovator should consult a regulatory professional
   now, or after further prototyping — with reasoning.

Structured idea description: [paste output from CAHI.0]
```

**Application Note:** Always treat this step's output as an orientation checklist, never as a substitute for actual regulatory counsel — regulatory classification is jurisdiction-specific, changes over time, and carries real legal consequences if misjudged.

---

### Step CAHI.7 — Health Economics & Value Audit

**Objective:** Test whether the idea's cost, financing, and value logic actually work for the people who would have to pay for it.

**Prompt:**
```
Act as a health-economics reviewer. Using the structured idea description:

1. Identify who bears the cost of building/running the idea (developer,
   institution, payer, patient out-of-pocket) and who captures the value
   (patient outcomes, institution efficiency, payer cost avoidance) — 
   state explicitly if these are NOT the same party (a common failure point:
   "the payer benefits but the clinic bears the cost").
2. Estimate, in structured qualitative terms, the cost drivers (development,
   deployment, maintenance, training, ongoing clinician time) and the value
   drivers (time saved, complications avoided, earlier diagnosis, reduced
   admissions) — flag that these are illustrative estimates requiring real
   costing data, not final figures.
3. State what reimbursement or budget pathway would need to exist for this
   idea to be financially sustainable (new billing code, absorbed into
   existing tariff, grant-funded pilot only, subscription/direct-pay model).
4. Identify the most likely "valley of death" point — where the idea has
   technical merit but no sustainable payer, and is likely to stall after
   pilot funding ends.
5. Rate overall financial sustainability as: SELF-SUSTAINING / GRANT-DEPENDENT
   INDEFINITELY / UNCLEAR / LIKELY UNSUSTAINABLE AS SCOPED, with justification.

Structured idea description: [paste output from CAHI.0]
```

**Application Note:** Directly complements Module 43 (Health Economics & Value-Based Care Alignment) and Module 34 (High-Value Care Auditor) for deeper individual-case-level value analysis.

---

### Step CAHI.8 — Comparative Advantage vs. Standard of Care

**Objective:** Force an honest, structured head-to-head comparison against whatever is currently done for this problem, including the (often underrated) option of doing nothing new.

**Prompt:**
```
Act as an impartial comparative-effectiveness reviewer. Using the structured
idea description and the prior-art list from CAHI.1:

1. Name the current standard of care / default approach to this problem
   (including "no formal intervention currently exists" if true).
2. Build a comparison table across these dimensions: Effectiveness
   (theoretical/observed), Safety profile, Cost to implement, Cost to
   patient/user, Time-to-benefit, Equity of access, Evidence maturity.
   Compare: (a) standard of care, (b) nearest existing alternative from
   CAHI.1, (c) this new idea.
3. State plainly whether the new idea is likely to be BETTER, EQUIVALENT,
   or WORSE than standard of care on each dimension, and overall.
4. If overall advantage is unclear or marginal, state what specific
   sub-population or specific setting (if any) the idea might still be
   worth pursuing for.
5. Steelman the case for "do nothing / do not build this" as the best
   current option, in 3-4 sentences.

Structured idea description: [paste output from CAHI.0]
Prior-art list: [paste output from CAHI.1]
```

**Application Note:** Step 5 is deliberately included because "just improve adherence to the existing standard of care" or "do nothing yet" is a legitimate and frequently correct output of a critical appraisal — do not treat it as a failure of the exercise if the module points there.

---

### Step CAHI.9 — Scalability & Implementation Science Audit

**Objective:** Test whether the idea, if proven to work in a small setting, would actually survive being scaled to real-world, heterogeneous conditions.

**Prompt:**
```
Act as an implementation-science reviewer, using the RE-AIM framework
(Reach, Effectiveness, Adoption, Implementation, Maintenance) as your
structure. Using the structured idea description:

1. REACH: Who is realistically reachable by this idea at scale, and who
   would systematically be missed?
2. EFFECTIVENESS: Does effectiveness likely hold up outside the ideal
   conditions of a pilot (different staff skill levels, different resource
   settings, non-research patients)?
3. ADOPTION: What proportion of eligible sites/clinicians/patients would
   realistically adopt this voluntarily? What is the single biggest adoption
   friction point?
4. IMPLEMENTATION FIDELITY: How much does the idea depend on being executed
   exactly as designed, and what happens to its value if executed with
   partial fidelity (a very common real-world scenario)?
5. MAINTENANCE: What is most likely to cause this idea to be abandoned
   12-24 months after initial rollout (champion turnover, alert fatigue,
   funding cliff, workflow drift)?
6. Rate overall scalability readiness as: READY TO SCALE / NEEDS
   IMPLEMENTATION REDESIGN / NOT YET SCALABLE, with reasoning.

Structured idea description: [paste output from CAHI.0]
```

**Application Note:** Directly extends Module 41 (Clinical Workflow Implementation Science) and Module 40 (The Operational & Throughput Strategist); use those modules for a deeper dive on any single RE-AIM dimension flagged as weak here.

---

### Step CAHI.10 — Stakeholder & Adoption-Barrier Mapping

**Objective:** Identify, by name of role (not individual), who is likely to resist the idea, why their resistance may be legitimate rather than merely obstructive, and what would actually change their position.

**Prompt:**
```
Act as an organizational-change and stakeholder-analysis reviewer. Using
the structured idea description:

1. List every stakeholder group who would be affected by this idea being
   adopted (e.g., frontline clinicians, nursing staff, administrators,
   IT/security, patients, payers, competitors, regulators).
2. For each stakeholder group, state: their likely position (champion /
   neutral / resistant), the single most legitimate reason for that
   position (steelman their view — do not assume resistance is irrational),
   and what specific change or evidence would most likely shift their
   position.
3. Identify which single stakeholder group's buy-in is most load-bearing
   for adoption to succeed at all (the "veto player").
4. Propose a minimum-viable engagement step to test that veto player's
   actual (not assumed) reaction, before full build-out.

Structured idea description: [paste output from CAHI.0]
```

**Application Note:** The instruction to steelman resistance is deliberate — the most common innovator failure mode at this step is dismissing legitimate frontline concerns (e.g., alert fatigue, workflow disruption, loss of clinical autonomy) as mere "resistance to change."

---

## Phase 3 — Closure / Review

### Step CAHI.11 — Composite Appraisal Scorecard

**Objective:** Convert the outputs of all preceding steps into a single, comparable scorecard.

**Prompt:**
```
Act as the chair of an innovation-review panel, synthesizing prior appraisal
outputs into one scorecard. Using all the step outputs I paste below,
produce a table with these rows: Problem-Solution Fit, Evidence Strength,
Safety/Risk (inverse-scored — lower risk = higher score), Ethical/Equity
Clearance, Regulatory Clarity, Financial Sustainability, Comparative
Advantage, Scalability Readiness, Stakeholder Buy-in Feasibility.

For each row, assign a score from 1 (major concern) to 5 (strong), with a
one-line justification drawn ONLY from the pasted appraisal outputs (do not
introduce new judgments not grounded in the prior steps). Then compute an
unweighted average, and separately state which 1-2 rows, if they scored low,
should be treated as disqualifying regardless of the average (i.e., which
dimensions are veto-dimensions rather than averageable ones, for a healthcare
idea specifically — e.g., a severe unmitigated safety risk should not be
"averaged away" by strong scores elsewhere).

Paste all prior step outputs (CAHI.0 through CAHI.10) here:
[paste all previous outputs]
```

**Application Note:** The instruction to flag veto-dimensions exists because healthcare appraisal, unlike many other innovation domains, should not simply average scores — a fatal safety or ethics flag should outweigh strength elsewhere, and the composite score must reflect that rather than obscure it.

---

### Step CAHI.12 — Structured Critique Report & Go / No-Go / Iterate Recommendation

**Objective:** Produce the final written appraisal as a document usable for a pitch, a submission, or personal decision-making — with an explicit, honest recommendation.

**Prompt:**
```
Act as the final reviewer producing a written critical appraisal report.
Using the composite scorecard and all prior step outputs, write a structured
report with these sections:

1. EXECUTIVE SUMMARY (3-5 sentences: what the idea is, and the headline
   verdict)
2. STRENGTHS (the 3 strongest points, grounded in prior steps)
3. CRITICAL CONCERNS (the 3 most serious concerns, grounded in prior steps,
   ranked by severity)
4. KEY UNCERTAINTIES (what remains genuinely unknown and would most change
   the verdict if resolved)
5. RECOMMENDATION: choose exactly one of GO (proceed to next development
   stage as scoped) / NO-GO (do not proceed as currently scoped) / ITERATE
   (proceed only after specific named changes) — and if ITERATE, list the
   2-4 specific changes required before re-appraisal.
6. NEXT SINGLE CHEAPEST TEST: the one action that would most cheaply and
   quickly resolve the single biggest uncertainty identified above.

Be direct and unsparing — do not soften the recommendation to spare the
idea's proponent's feelings. This report is only useful if it is honest.

Composite scorecard and prior outputs: [paste output from CAHI.11 and any
other prior steps you want referenced]
```

**Application Note:** This step deliberately asks the model not to hedge the final recommendation. If you are appraising your own idea, read this output once without responding, sit with it for a day, and then decide whether to proceed — a common failure pattern is negotiating with the appraisal in real time rather than absorbing it first (compare Module 42 — Clinical Pre-Mortem, which uses a similar "receive the critique fully before responding" discipline at the individual-case level).

---

## 📁 Suggested repository placement

```
Module-CAHI-Critical-Appraisal-Healthcare-Innovations.md
```

Cross-reference this module from the Module Index table under a new category, e.g. **"Innovation & Evidence Appraisal: CAHI"**, alongside its closest relatives: Module 9 (N-of-1 Case Research Protocol), Module 21 (Evidence Frontier Search), Module 34 (High-Value Care Auditor), Module 40 (Operational & Throughput Strategist), Module 41 (Clinical Workflow Implementation Science), Module 42 (Clinical Pre-Mortem), Module 43 (Health Economics & Value-Based Care Alignment), and Module 49 (FMEA Analysis).

> [!NOTE]
> All links in this document are relative and assume placement in the same repository root as the other VibeRounds modules.

---

*Module CAHI — Critical Appraisal of Healthcare Innovations & Ideas.* [← Back to Module Index](https://avi33tbtt.github.io/Prompts/Prompts.html)
