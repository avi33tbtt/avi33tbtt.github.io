[← Back to README](README.md)

# Module 19 — Community & Social Medicine Insights

**Objective:** Train the habit of reasoning about a patient's social, economic, and community context as a clinically active variable — not background colour — across history-taking, differential diagnosis, and management planning, and to connect individual-case social context to population-level community health patterns.

**Indication:** Any case where the working diagnosis, the management plan, or the explanation for non-adherence or recurrence cannot be fully understood from biology alone — chronic disease management, recurrent presentations, paediatric and family cases ([Module 2](Module-02-Patient-Advocate-Case-Documentation.md), [Module 3](Module-03-Extended-Patient-Advocate-Monitoring.md)), resource-constrained settings ([Module 14](Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.md)), and any registry-level review ([Module 6](Module-06-Registry-Level-Analytics.md)) where population patterns may reflect social determinants rather than purely biological ones.

> [!NOTE]
> **Theoretical Basis:** This module operationalises the **WHO Social Determinants of Health (SDOH)** framework — the conditions in which people are born, grow, live, work, and age, and the wider set of forces and systems shaping the conditions of daily life (income, education, housing, food security, employment, social inclusion, gender, race, early-childhood factors, and access to health services). SDOH are estimated to account for a substantial share of health outcomes independent of biology or the healthcare system itself, yet remain the most consistently under-taught and under-elicited domain in clinical history-taking. This module also draws on Engel's **biopsychosocial model** (1977, "The Need for a New Medical Model: A Challenge for Biomedicine," *Science*, 196(4286), 129–136) to keep social context integrated into clinical reasoning rather than treated as a separate, optional add-on, and on the **CanMEDS Health Advocate role** (Royal College of Physicians and Surgeons of Canada) to give the skill a concrete competency structure: identifying patients at risk due to social determinants, knowing strategies and resources to address disparities, and advocating for patient access to those resources. The repeated finding in the literature this module addresses directly: social-determinant content is acknowledged as important by learners but is rarely elicited systematically in practice unless explicitly structured into the history-taking process — good intentions do not reliably produce the behaviour without a scaffold.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Orient the AI and set the social-context contract

### Step 19.0: Session Setup & Social History Framing

**Prompt:**
```text
#VibeRounds You are a clinical reasoning partner helping me practise
integrating social and community context into case reasoning — not as a
separate checklist item, but as something that actively shapes diagnosis,
management, and prognosis. When I describe a case, do not let me move to a
management plan until I have stated at least the core social determinants
relevant to this patient: income/occupation, housing stability, food
security, social support, education, and access to care (which may
include cost, distance, or transport — see Module 14 if resource
constraints are the dominant issue). For each one I have not addressed,
prompt me once before continuing. Then, and only then, ask me how any of
these factors should change — not just complicate — my management plan.
Confirm you understand before we begin.
```

> [!NOTE]
> **Application Note:** Run once per social-context session, or fold into the closing phase of any other module's case when social context has not yet been addressed. The "change, not just complicate" framing is deliberate — the goal is to push the learner past acknowledging a social factor exists toward actually altering the plan because of it, which is the harder and more clinically valuable step.

---

## Phase 2 · Execution — Elicit, integrate, and act on social context

### Step 19.1: Structured Social History Elicitation

**Prompt:**
```text
#VibeRounds Act as a patient or caregiver answering questions about social
circumstances relevant to this case — income and occupation, housing,
household composition, food security, social support, and barriers to
accessing care. I will ask you questions one at a time as if taking a
social history. Answer realistically and specifically, including some
detail I would only learn by asking a good follow-up question, not just
the first obvious answer. After the exchange, tell me which question I
asked elicited the single most clinically useful piece of information, and
which important social domain I never asked about at all.
```

> [!NOTE]
> **Application Note:** Practising the *elicitation* itself, not just receiving a pre-written social history, builds the questioning habit directly — a recognised gap in training is not lack of awareness that SDOH matters, but lack of practised, comfortable phrasing for asking about it without feeling intrusive.

### Step 19.2: Social Determinant to Clinical Pathway

**Prompt:**
```text
#VibeRounds Give me a single social determinant — for example food
insecurity, precarious housing, informal/unsafe employment, or limited
health literacy. Ask me to trace, step by step, at least two distinct
clinical pathways by which this determinant could plausibly worsen a
named chronic condition or increase risk of a named acute presentation.
Push me past the first obvious pathway to a second, less obvious one.
Then ask: which pathway would most change what I actually do in clinic
today, versus which is more relevant to long-term population health.
```

> [!NOTE]
> **Application Note:** This is the social-medicine analogue of [Module 16](Module-16-Bidirectional-Basic-Science-Clinical-Integration.md)'s mechanism-to-diagnosis drill — instead of basic-science mechanism to diagnosis, it trains social-determinant to clinical-pathway, with the same discipline of forcing the learner to generate the connection rather than receive it.

### Step 19.3: Adherence and Non-Adherence Through a Social Lens

**Prompt:**
```text
#VibeRounds Present me with a case of a patient who is not adhering to a
treatment plan. Before I am allowed to label this as "non-compliance," ask
me to generate at least three distinct social or structural explanations
that could produce the same observed behaviour — for example cost,
conflicting work hours, transport, competing caregiving duties, or health
literacy. For each, ask what a change to the plan itself — not a change to
the patient — could address it.
```

> [!NOTE]
> **Application Note:** This step deliberately interrupts a common and clinically costly framing error — attributing non-adherence to patient motivation or character before structural explanations have been considered. The closing instruction (changing the plan, not the patient) keeps the exercise solution-oriented rather than purely diagnostic of blame.

### Step 19.4: Community-Level Pattern Recognition

**Prompt:**
```text
#VibeRounds Give me a short description of a community or population
context — for example a specific neighbourhood, occupational group, or
displaced/migrant population. Ask me what condition patterns I would
expect to see at elevated rates in this population specifically because
of their social and environmental context, before any individual case is
given. Then present an individual case from that context and ask whether
the case fits the expected community pattern or represents something the
community pattern would have caused me to overlook.
```

> [!NOTE]
> **Application Note:** This step bridges individual-case reasoning to the registry-level, population-scale thinking in [Module 6](Module-06-Registry-Level-Analytics.md) — and trains the discipline of using a community pattern as a prior to sharpen attention, not as a substitute for individually assessing the patient in front of you. The closing question guards specifically against the latter failure mode.

### Step 19.5: Health System and Access Barriers

**Prompt:**
```text
#VibeRounds Present me with a case where the medically ideal plan and the
practically achievable plan diverge because of a health-system or access
barrier — cost of medication, distance to follow-up, time off work needed
for appointments, or insurance/coverage gaps. Ask me first what the ideal
plan is, then ask me to redesign it as the best plan that is actually
achievable given the barrier, without simply abandoning the clinical goal.
Affirm explicitly where my redesigned plan preserves the core clinical
intent despite the constraint.
```

> [!NOTE]
> **Application Note:** Structurally similar to [Module 14](Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.md)'s substitution-and-workaround drills, but the constraint here originates in the patient's social and economic circumstances rather than facility-level resource availability — the two are related but distinct categories of constraint and a learner should be able to reason through both.

### Step 19.6: Advocate's Perspective — Health Advocacy in Practice

**Prompt:**
```text
#VibeRounds Based on the social barriers identified in this case, ask me
to name one concrete health-advocacy action available to me as the
treating clinician or learner — beyond documenting the barrier — that
could meaningfully help this specific patient (for example: a referral to
a social worker or community resource, a prescription substitution for
cost, or a letter supporting workplace accommodation). Ask me to be
specific to this patient, not generic. Then ask: is there a second,
separate action that addresses the system-level pattern rather than just
this one patient?
```

> [!NOTE]
> **Application Note:** Directly operationalises the CanMEDS Health Advocate competency at two levels — the individual-patient action and the system-level action — which the literature identifies as commonly conflated or collapsed into "raising awareness" alone without a concrete next step at either level.

---

## Phase 3 · Closure / Review — Consolidate social-context reasoning

### Step 19.7: Mid-Session Social Reasoning Checkpoint

**Prompt:**
```text
#VibeRounds Pause. Give me a formative checkpoint: (1) elicitation —
am I asking specific, non-generic questions about social context, or
defaulting to a checklist tone? Score out of 10 with one specific strength
and one targeted gap; (2) integration — am I actually changing my plan
because of social factors, or just noting them? Score out of 10, same
format. End with one sentence on which social domain (income, housing,
food security, support, access) I engage with most naturally, and which
one I tend to skip.
```

> [!NOTE]
> **Application Note:** Structural analogue of [Module 1, Step 1.4](Module-01-Socratic-Clinical-Reasoning.md). Naming the consistently-skipped domain is the most actionable part of this checkpoint — most learners have one or two SDOH categories they reliably under-elicit, and that pattern is more useful feedback than an aggregate score.

### Step 19.8: Case-to-Community Closing Synthesis

**Prompt:**
```text
#VibeRounds We have reached the end of this case. Produce a closing
summary covering: (1) the single social determinant that most changed this
case's management, and how; (2) one community-level insight this case
suggests — something that, if true of other patients in this context,
would be worth flagging beyond this individual case; (3) one specific
thing I should ask about earlier next time a similar case presents. Open
with a sentence acknowledging that social-context reasoning is a distinct
clinical skill, not a "soft" add-on to the real diagnostic work.
```

> [!NOTE]
> **Application Note:** Structural analogue of [Module 1, Step 1.7](Module-01-Socratic-Clinical-Reasoning.md) and [Module 14, Step 14.7](Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.md) — the opening line is deliberate; social-determinant reasoning is sometimes implicitly treated by learners as lower-status than biomedical reasoning, and the framing should actively counter that, consistent with the literature's finding that SDOH content is often acknowledged as important in principle but deprioritised in practice.

### Step 19.9: Critical Awareness — Bias, Stereotyping, and the Limits of Social Inference

**Prompt:**
```text
#VibeRounds Apply a critical awareness lens to the social-context reasoning
in this session: (1) Did any inference I made about this patient's social
circumstances rely on a demographic or community-level stereotype rather
than something actually elicited from this specific patient? (2) What is
the risk of over-attributing a clinical presentation to social context and
under-investigating a biological cause as a result? (3) What is the risk
of the reverse — treating a socially-patterned presentation as purely
biological and missing the structural driver entirely? (4) What would a
critic say about using community-level patterns (Step 19.4) to inform
individual-patient reasoning? Be honest but constructive.
```

> [!NOTE]
> **Application Note:** This step extends [Framework D](Framework-D-Critical-Awareness-Framework.md)'s bias taxonomy to a risk domain specific to this module and arguably more consequential than the cognitive biases named in Domain 1 — community-level pattern reasoning (Step 19.4) is clinically useful but sits directly adjacent to demographic stereotyping if not handled with discipline; point (1) exists specifically to force the learner to distinguish information actually elicited from this patient (Step 19.1) from an assumption imported from the community pattern. Point (3) guards against the literature's documented critique that social-determinant framing can itself become a way of explaining away a missed biomedical diagnosis if applied uncritically.

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](Framework-A-Humanistic-Persona.md) (persona language throughout)
- [Framework D — Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) (Step 19.9; extends the bias taxonomy to stereotyping and over/under-attribution risk specific to social-context reasoning)
- [Module 2 — Patient-Advocate Case Documentation](Module-02-Patient-Advocate-Case-Documentation.md) and [Module 3 — Extended Patient-Advocate Monitoring](Module-03-Extended-Patient-Advocate-Monitoring.md) (longitudinal social context is frequently where chronic-disease monitoring gaps originate)
- [Module 6 — Registry-Level Analytics](Module-06-Registry-Level-Analytics.md) (Step 19.4 bridges individual-case reasoning to population-level registry patterns)
- [Module 14 — Global Health & Resource-Constrained Clinical Reasoning](Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.md) (complementary constraint category: facility-level resource ceiling vs. this module's patient-level social/economic constraint)
- [Module 16 — Bidirectional Basic Science ↔ Clinical Integration](Module-16-Bidirectional-Basic-Science-Clinical-Integration.md) (Step 19.2 mirrors its mechanism-to-diagnosis drilling pattern, applied to social determinants instead of basic science)

---

## Navigation

**Previous:** [← Module 18 — Causal vs. Probabilistic (Network) Reasoning](Module-18-Causal-vs-Probabilistic-Network-Reasoning.md)

This is currently the final module. **Up next:** browse the [Supplementary Frameworks](README.md) or [Reference Material](README.md).

[← Back to README](README.md)
