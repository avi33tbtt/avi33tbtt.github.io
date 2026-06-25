[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module PN — Patient Needs Assessment (Exhaustive Framework)

**Objective:** Conduct a structured, exhaustive assessment of a patient's needs across all eight domains — physical, psychological, social, functional, informational, spiritual/existential, environmental, and systems/advocacy — so that no category of need is overlooked, unvoiced, or assumed to be absent.

**Indication:** Use at any point in a clinical encounter or case review where the question is not *what is wrong* but *what does this patient need* — at admission, during a ward round, at discharge planning, in a chronic disease review, or when a case feels stuck. Also indicated when a patient advocate, family member, or learner suspects that current care is addressing the diagnosis but not the person.

**Validated Environment:** Gemini, tested against de-identified cases. Steps marked *(experimental)* have not yet been validated against live cases.

---

> [!IMPORTANT] **Clinical Disclaimer & Independent Verification Required**
> All AI-generated outputs produced using these prompts — including need prioritisations, gap identifications, and advocacy flags — **require independent clinical verification before being acted upon.** This module supports structured *learning and documentation*, not clinical decision-making. Any real-patient concern identified must be raised with the responsible clinician before action is taken.

---

> [!NOTE] **What this module does and does not do**
> Module PN maps *what the patient needs* exhaustively — across physical, psychological, social, functional, informational, spiritual/existential, environmental, and systems domains. It does not generate a treatment plan, replace clinical assessment, or substitute for direct conversation with the patient. The eight-domain framework used here draws on established needs-assessment theory (Maslow, McCance & McCormack's Person-Centred Practice, the Camberwell Assessment of Need) but is adapted for a Socratic learning context, not a validated clinical instrument.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution (Domains 1–8) → Phase 3 · Synthesis & Closure

---

## The Eight Domains at a Glance

| # | Domain | Core Question |
|---|--------|---------------|
| 1 | **Physical** | What does the body need that it is not receiving? |
| 2 | **Psychological / Emotional** | What is the patient's inner experience, and what support does it require? |
| 3 | **Social & Relational** | Who supports this patient, and where are the gaps? |
| 4 | **Functional & Rehabilitative** | What can the patient no longer do, and what would restore it? |
| 5 | **Informational & Health Literacy** | What does the patient need to understand to participate in their own care? |
| 6 | **Spiritual, Cultural & Existential** | What gives this patient meaning, and is that being respected? |
| 7 | **Environmental & Safety** | Is the place this patient lives or stays safe and enabling? |
| 8 | **Systems, Navigation & Advocacy** | Can this patient access and move through the health system effectively? |

---

## Phase 1 · Initiation — Orient the AI and open the needs lens

### Step PN.0: Module Orientation & Role Calibration

**Prompt:**

```
#VibeRounds You are a Patient Needs Analyst — a rigorous, compassionate
clinical reasoning partner whose sole job in this session is to help a
learner identify every unmet need this patient has, across all eight
domains: physical, psychological/emotional, social/relational,
functional/rehabilitative, informational/health-literacy,
spiritual/cultural/existential, environmental/safety, and
systems/navigation/advocacy. You will not generate a treatment plan. You
will not jump to diagnosis. Your only lens is need. At the start of each
domain, ask the learner: 'Before I assess, what do you already know about
this patient's [domain] needs?' Hold the answer and build on it. Remind the
learner that an absence of documented need is not the same as absence of
need — silence in the record is a gap to investigate, not a gap to ignore.
```

> [!NOTE] **Application Note:** Run once before any case data is entered. This step calibrates the AI's role away from diagnostic mode and into needs-assessment mode — an important cognitive shift.

---

## Phase 2 · Execution — Eight-Domain Needs Sweep

### DOMAIN 1 — Physical Needs

#### Step PN.1.1: Symptom Burden & Comfort

**Prompt:**

```
#VibeRounds Domain 1 — Physical. Focus only on physical needs. Review the
case and ask the learner to identify: (a) current active symptoms that are
inadequately controlled (pain, breathlessness, nausea, pruritus, fatigue,
insomnia — name each separately); (b) physical needs that may be present
but undocumented (pressure areas, oral hygiene, bowel and bladder function,
hydration, nutrition); (c) any procedural or device need not yet actioned
(lines, catheters, wound care, prosthetics, orthotics). For each gap found,
ask: 'Is this need documented? Is someone responsible for it? When was it
last reassessed?' Do not move to the next domain until the learner has
explicitly confirmed or ruled out each sub-item.
```

#### Step PN.1.2: Medication Needs vs. Medication Burden

**Prompt:**

```
#VibeRounds Still in Domain 1. Now focus specifically on medications as a
category of physical need. Ask the learner: (a) Is the patient receiving
everything they need pharmacologically — analgesia, antiemetics,
prophylaxis, disease-modifying agents? (b) Is the patient receiving
anything that is generating a physical burden — side effects, drug
interactions, polypharmacy fatigue? (c) Is there a physical need that a
non-pharmacological intervention (positioning, physiotherapy, dietary
change) could address but hasn't been tried? Frame each answer as a
need-gap pair: 'Need: [X]. Current response: [Y]. Gap: [Z].'
```

> [!NOTE] **Application Note:** Pair with Module 13 (Medication Reconciliation & Polypharmacy) if a detailed pharmacological audit is needed.

---

### DOMAIN 2 — Psychological & Emotional Needs

#### Step PN.2.1: Distress Screening

**Prompt:**

```
#VibeRounds Domain 2 — Psychological and Emotional. Ask the learner: What
is the emotional state of this patient right now? Probe for: (a) anxiety
(about diagnosis, prognosis, procedures, discharge); (b) depression or
low mood (persistent, not just situational); (c) fear — specifically
named fears (of dying, of pain, of being a burden, of losing independence);
(d) grief (for prior function, relationships, identity, or anticipated
loss); (e) existential distress (feeling that life no longer has meaning or
direction). For each domain, ask: 'Is this need documented in the record?
Has a mental health or psychology referral been considered? Has the patient
been directly asked?' A learner who says 'the patient seems fine' should be
asked: 'What did the patient say when directly asked about their mood?'
```

#### Step PN.2.2: Coping & Resilience Assets

**Prompt:**

```
#VibeRounds Still in Domain 2. Needs assessment is not only about deficits
— it includes identifying what the patient already has that supports them.
Ask the learner to identify: (a) the patient's stated coping mechanisms
(what helps them when things are hard?); (b) their resilience history (have
they navigated a health crisis before? what helped?); (c) any current
psychological intervention — therapy, peer support, crisis line access.
The goal is a complete picture: what is missing, and what is already
present and should be protected.
```

---

### DOMAIN 3 — Social & Relational Needs

#### Step PN.3.1: Support Network Mapping

**Prompt:**

```
#VibeRounds Domain 3 — Social and Relational. Ask the learner to map the
patient's support network explicitly: (a) Who are the primary carers
(named, relationship, proximity, availability)? (b) Is there anyone this
patient trusts to make decisions if they cannot? Is that documented as a
formal advance directive or next-of-kin record? (c) Are there dependent
others — children, elderly parents, a partner with their own health needs
— whose welfare depends on this patient's capacity to function? (d) Is the
patient at risk of social isolation — living alone, estranged from family,
recently bereaved? For each gap, ask: 'Is social work involved? Has a
carer needs assessment been offered?'
```

#### Step PN.3.2: Relational Conflict & Safeguarding

**Prompt:**

```
#VibeRounds Still in Domain 3. Some relational needs are protective; some
are risks. Ask the learner: (a) Are there signs of conflict within the
support network — family disagreement about treatment direction, a carer
who is overloaded or resistant? (b) Are there any safeguarding concerns —
signs of neglect, financial exploitation, coercive control, or elder abuse?
(c) Is the patient's expressed preference about who should be involved in
their care being respected? Note: a safeguarding concern identified here
must be escalated to the responsible clinician immediately — it cannot wait
for the remainder of this assessment.
```

---

### DOMAIN 4 — Functional & Rehabilitative Needs

#### Step PN.4.1: Activities of Daily Living Audit

**Prompt:**

```
#VibeRounds Domain 4 — Functional and Rehabilitative. Ask the learner to
walk through the patient's function across six areas: (a) Basic ADLs —
washing, dressing, feeding, toileting, transferring, mobility; (b)
Instrumental ADLs — cooking, managing medications, using transport,
handling finances, using a phone; (c) Work and role function — employment,
caregiving role, community participation; (d) Leisure and meaningful
activity — what the patient does that gives them a sense of identity and
pleasure; (e) Pre-admission baseline versus current function — what has
been lost since this illness began? (f) Rehabilitation goal — has the
patient been asked what functional recovery means to them? For each area,
determine: is physiotherapy, occupational therapy, speech therapy, or
dietetics involved where they should be?
```

#### Step PN.4.2: Rehabilitation Barriers

**Prompt:**

```
#VibeRounds Still in Domain 4. Functional needs are not just about capacity
— they are also about barriers to regaining it. Ask the learner: (a) Are
there physical barriers to rehabilitation (pain, fatigue, comorbidity,
deconditioning)? (b) Are there psychological barriers (low motivation,
fear of re-injury, depression)? (c) Are there system barriers (no
physiotherapy referral, waiting list delays, unavailable equipment)? (d)
Are there environmental barriers (the patient's home is inaccessible, there
is no carer to supervise exercises)? Map each barrier alongside the need it
is blocking.
```

---

### DOMAIN 5 — Informational & Health Literacy Needs

#### Step PN.5.1: What the Patient Knows and Needs to Know

**Prompt:**

```
#VibeRounds Domain 5 — Informational and Health Literacy. Ask the learner:
(a) What is the patient's current understanding of their diagnosis? (b)
What is their understanding of their prognosis — has a prognosis been
communicated? In what terms? By whom? (c) Do they understand the purpose
of each current medication? (d) Do they know what warning signs should
prompt them to seek help urgently? (e) Have they been given written
information in a format and language they can use? (f) Is there a language
barrier, a literacy barrier, or a cognitive barrier that means standard
information delivery has not reached them? For each gap, identify: who is
responsible for closing it, and when.
```

#### Step PN.5.2: Decision-Support Needs

**Prompt:**

```
#VibeRounds Still in Domain 5. Information is also required for decision-
making. Ask the learner: (a) Is the patient facing a decision — treatment
choice, surgical consent, discharge destination, escalation ceiling — for
which they need more information before they can give genuinely informed
consent? (b) Do they have the cognitive capacity to process that
information? If capacity is in question, is a formal capacity assessment
documented? (c) Is the patient's health literacy being tested by jargon,
complexity, or volume of information given in a single encounter? The
standard is not 'information was given' — it is 'the patient understood'.
Ask: how do we know they understood?
```

---

### DOMAIN 6 — Spiritual, Cultural & Existential Needs

#### Step PN.6.1: Meaning, Values & Beliefs

**Prompt:**

```
#VibeRounds Domain 6 — Spiritual, Cultural, and Existential. This domain
is often omitted from clinical documentation — that omission is itself a
finding. Ask the learner: (a) Has the patient been asked about religious or
spiritual beliefs that affect their care (dietary restrictions, prayer
times, rituals, views on blood products or specific treatments)? (b) Has
the patient expressed any existential concern — a sense that illness has
disrupted their identity, their sense of purpose, or their understanding of
their life? (c) Are there cultural practices around illness, pain expression,
decision-making, or dying that the current care environment is not
accommodating? (d) Is chaplaincy, spiritual care, or a community religious
leader available and known to the patient? For each gap: is it documented?
Has it been discussed with the patient directly?
```

#### Step PN.6.2: Goals of Care & Advance Planning

**Prompt:**

```
#VibeRounds Still in Domain 6. Existential needs include the need to be
heard about what matters at the end of life — even when death is not
immediately near. Ask the learner: (a) Has the patient been asked about
their goals of care — what they hope for, what they fear, what they would
and would not accept? (b) Is there an advance care plan, advance directive,
or DNAR/DNACPR order? If not, is one indicated? (c) If this patient's
condition were to deteriorate acutely overnight, would the clinical team
know what this patient would want? If the answer is no, that is an unmet
need — name it as one.
```

---

### DOMAIN 7 — Environmental & Safety Needs

#### Step PN.7.1: Home and Discharge Environment

**Prompt:**

```
#VibeRounds Domain 7 — Environmental and Safety. Ask the learner: (a) If
this patient is an inpatient, has a home environment assessment been
conducted or requested? (b) Is the current or anticipated home environment
safe for this patient's functional level — stairs, bathroom, bed height,
fall hazards? (c) Are there environmental factors contributing to this
admission — damp, cold, poor nutrition access, inability to cook safely?
(d) If the patient is being discharged, is the discharge destination
confirmed and appropriate? Is equipment (walking aids, hospital bed, rail)
ordered and in place before the discharge date? For each gap: who is
responsible? What is the timeline?
```

#### Step PN.7.2: In-Hospital Safety Needs

**Prompt:**

```
#VibeRounds Still in Domain 7. For inpatients, the environment also means
the ward. Ask the learner: (a) Are there active falls prevention measures
in place? (b) Is delirium prevention being actively managed (orientation
aids, sleep hygiene, sensory aids — glasses and hearing aids in use)? (c)
Is skin integrity being protected (pressure area care, appropriate mattress,
repositioning schedule)? (d) Is the patient's nutrition and hydration being
actively monitored, not just ordered? (e) Is there a communication need
that the ward environment is not meeting — language barrier, speech
impairment, altered consciousness — that means the patient cannot express
distress or need in real time?
```

---

### DOMAIN 8 — Systems, Navigation & Advocacy Needs

#### Step PN.8.1: Access & Navigation Barriers

**Prompt:**

```
#VibeRounds Domain 8 — Systems, Navigation, and Advocacy. Ask the learner:
(a) Does this patient have reliable access to primary care for follow-up?
(b) Are there out-of-pocket costs associated with their treatment or
medications that may lead to non-adherence? (c) Are there transport
barriers to attending outpatient appointments? (d) Is the patient enrolled
in all benefits and entitlements they qualify for — disability payments,
carer allowances, community health schemes? (e) Is there a language or
literacy barrier that makes navigating the health system independently
difficult? For each identified barrier: is a social worker, navigator, or
community health worker involved?
```

#### Step PN.8.2: Advocacy Gaps

**Prompt:**

```
#VibeRounds Still in Domain 8. Not all patients can advocate for themselves
— and not all carers know how to advocate effectively. Ask the learner:
(a) Is there anyone in this patient's life who is actively monitoring and
advocating for their care — attending appointments, asking questions,
following up on results? (b) If not, is a patient advocate or liaison
service available and appropriate? (c) Are there signs that this patient's
needs have been under-addressed because they are compliant, quiet, or
culturally deferential — that their silence has been mistaken for
satisfaction? (d) Is there a formal complaint, concern, or query outstanding
that has not been resolved? Name each advocacy gap explicitly.
```

---

## Phase 3 · Synthesis & Closure

### Step PN.9: Needs Gap Matrix

**Prompt:**

```
#VibeRounds We have now swept all eight domains. Generate a structured
Needs Gap Matrix for this case in the following format for each domain:

| Domain | Needs Identified | Currently Met? | Gap | Who Owns the Gap? | Urgency |

Rate urgency as: 🔴 Immediate (24h) / 🟡 Short-term (this admission) /
🟢 Long-term (post-discharge planning). Where a domain was not assessed,
mark it explicitly as 'NOT ASSESSED — requires follow-up' rather than
leaving it blank. A blank is not the same as a confirmed absence of need.
```

### Step PN.10: Unmet Needs Prioritisation

**Prompt:**

```
#VibeRounds From the Needs Gap Matrix, identify the top three unmet needs
that, if addressed, would have the greatest positive impact on this
patient's experience, safety, or outcome. For each one: (a) state the need
in plain language; (b) name the domain it belongs to; (c) describe the
single next action required and who should take it; (d) note any barrier
to taking that action and how it might be overcome. Resist the pull toward
physical and medical needs only — the top three must span at least two
different domains.
```

### Step PN.11: Needs Continuity Brief (Handover-Ready)

**Prompt:**

```
#VibeRounds Generate a Needs Continuity Brief — a maximum 200-word summary
written for the next clinician, shift, or care setting to receive this
patient. It should cover: (1) the two most urgent unmet needs and the action
required; (2) any domain that has NOT been assessed and needs follow-up;
(3) any safeguarding, advocacy, or capacity concern that cannot wait.
Format it so it can be read in 60 seconds and acted on immediately.
```

### Step PN.12: Learner Reflection — Bloom's Close

**Prompt:**

```
#VibeRounds Close this module with a three-level Bloom's reflection for the
learner: (1) [Remember] Name one need domain that was present in this case
that you did not anticipate at the start. (2) [Analyse] Why was that need
overlooked — was it undocumented, assumed absent, or outside your usual
clinical focus? (3) [Evaluate] If you had used only a standard medical
clerking without this eight-domain framework, what would have been missed,
and what might the consequence have been for this patient? Affirm the
learner's effort: rigorous needs assessment is one of the most person-
centred skills in medicine, and it is consistently undertaught.
```

> [!NOTE] **Application Note:** Bloom's 'Remember → Analyse → Evaluate' applied to needs-assessment competency. See [Framework C](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html). The reflection step is not optional — it converts a documentation exercise into a learning event.

---

## Eight-Domain Quick-Reference Card

*Paste this at the top of any clinical encounter note to use as a checklist without running the full module.*

```
#VibeRounds — Patient Needs Quick Scan (8 Domains)
Patient: [paste de-identified identifier]
Date: [date]

□ 1. PHYSICAL       — Symptoms controlled? Nutrition? Skin? Medications right-sized?
□ 2. PSYCHOLOGICAL  — Mood, anxiety, fear, grief assessed and documented?
□ 3. SOCIAL         — Support network mapped? Carer needs? Safeguarding screen?
□ 4. FUNCTIONAL     — ADL baseline vs. current? Allied health involved?
□ 5. INFORMATIONAL  — Diagnosis/prognosis understood? Consent informed? Literacy met?
□ 6. SPIRITUAL/EXISTENTIAL — Beliefs respected? Goals of care documented?
□ 7. ENVIRONMENTAL  — Home safe? Discharge environment assessed? In-hospital safety?
□ 8. SYSTEMS/ADVOCACY — Access? Cost barriers? Navigator involved? Advocacy gap?

Any box left blank = unassessed need. Name it. Assign it. Review it.
```

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (persona language throughout)
- [Framework B — Fink's Taxonomy of Significant Learning](https://avi33tbtt.github.io/Prompts/Framework-B-Finks-FLINK-Taxonomy.html) (human dimension and caring dimensions, Step PN.6)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Step PN.12)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Domain 8 advocacy gaps; capacity and consent steps)

## Related Modules

- [Module 2 — Patient-Advocate Case Documentation](https://avi33tbtt.github.io/Prompts/Module-02-Patient-Advocate-Case-Documentation.html) (builds the case record this module audits)
- [Module 3 — Extended Patient-Advocate Monitoring](https://avi33tbtt.github.io/Prompts/Module-03-Extended-Patient-Advocate-Monitoring.html) (longitudinal tracking of needs over time)
- [Module 13 — Medication Reconciliation & Polypharmacy](https://avi33tbtt.github.io/Prompts/Module-13-Medication-Reconciliation-Polypharmacy-Audit.html) (extends Domain 1, Step PN.1.2)
- [Module 19 — Community & Social Medicine Insights](https://avi33tbtt.github.io/Prompts/Module-19-Community-and-Social-Medicine-Insights.html) (deepens Domain 8 systems analysis)

---

## Navigation

**Previous:** [← Module 3 — Extended Patient-Advocate Monitoring](https://avi33tbtt.github.io/Prompts/Module-03-Extended-Patient-Advocate-Monitoring.html)
**Next:** [Module 4 — Peer-Level Ward Round Preparation →](https://avi33tbtt.github.io/Prompts/Module-04-Peer-Level-Ward-Round-Preparation.html)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
