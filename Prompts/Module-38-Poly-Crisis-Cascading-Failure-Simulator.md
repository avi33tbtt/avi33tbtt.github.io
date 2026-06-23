# Module 38 — Poly-Crisis & Cascading Failure Simulator

**Objective:** Train the discipline of reasoning through clinical situations in which multiple simultaneous crises interact, amplify, and cascade — not the single-problem case, but the scenario in which two, three, or more deteriorating processes compete for attention, where intervening on one may worsen another, and where the standard sequential reasoning approach breaks down under time, cognitive, and resource pressure. This module is specifically designed to develop robustness under complexity, not competence under ideal conditions.

**Indication:** Whenever a case involves multi-organ involvement, multi-system deterioration, or simultaneous crises in different patients or different domains (clinical, logistical, staffing, family); when a simulation or handover involves a "sick ward" scenario rather than a single case; when preparing for acute care environments (ICU, ED, overnight medicine) where cascading deterioration is the rule rather than the exception; or as a deliberate stress-test of a learner's reasoning architecture to identify where it fractures under load.

> [!IMPORTANT] **Simulation Scope Clarification.** This module generates simulated multi-system crisis scenarios for educational reasoning practice. No clinical action should be taken based on simulated scenario outputs without full re-evaluation of the actual clinical situation by a qualified clinician. The purpose is to train the cognitive and decision-making architecture of the learner, not to provide clinical guidance for a real emergency.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Configure the simulation environment

### Step 24.0: Session Setup & Simulation Contract

**Prompt:**

```
#VibeRounds You are a poly-crisis simulation partner in the Vibe Rounds
framework. Your role is to generate and facilitate multi-system crisis
scenarios in which crises interact and cascade — not single-problem
cases, but complex, simultaneous deterioration scenarios that stress-test
my reasoning under time, resource, and cognitive pressure. During the
simulation, do not rescue me with unsolicited information or hints — let
me navigate the scenario with only what I ask for or what would
realistically be available in that clinical environment. After the
simulation, help me debrief rigorously: where did my reasoning hold,
where did it fracture, and why. Confirm you understand this contract
before we begin.
```

> [!NOTE] **Application Note:** The prohibition on unsolicited rescue is the module's defining pedagogical feature — simulations that provide information automatically train passive reception; simulations that require the learner to actively request information (mirroring the real clinical environment, where data is not pushed to the clinician but must be pulled) train the information-seeking and prioritisation behaviour that determines performance in actual crises.

### Step 24.1: Scenario Configuration

**Prompt:**

```
#VibeRounds Before generating the scenario, ask me to configure the
simulation environment: (1) Clinical setting — ICU, general medicine
ward, emergency department, primary care after-hours, or other? (2)
Staffing level — adequately staffed, short-staffed, or skeleton crew?
(3) My role — junior trainee, senior resident, attending, or nurse in
charge? (4) Number of simultaneous crisis threads — two (entry level),
three (intermediate), or four or more (expert-stress)? (5) Any
specific clinical domains I want tested — respiratory, cardiovascular,
metabolic, neurological, sepsis, obstetric, paediatric, psychiatric,
or a combination? (6) Do I want a logistical/system crisis layered in
alongside the clinical crises — equipment failure, bed shortage, family
escalation? Gather these parameters before generating any scenario.
```

> [!NOTE] **Application Note:** Scenario configuration is not optional — a simulation calibrated to the wrong setting or role level is either too easy to be instructive or too overwhelming to generate learning. The option to add a logistical/system crisis layer is the module's distinguishing feature: real poly-crises routinely involve non-clinical cascades (a missing blood product, a broken ventilator, a family member on the phone during a cardiac arrest) that are systematically absent from standard clinical simulations, even though they are highly predictive of decision-making failure in practice.

---

## Phase 2 · Execution — Run the crisis simulation

### Step 24.2: Crisis Scenario Generation & Initial Briefing

**Prompt:**

```
#VibeRounds Generate the poly-crisis scenario based on my configuration.
Present it as a realistic clinical handover or initial presentation —
give me the minimum information I would have at the moment of inheriting
or encountering this situation. Do not summarise all problems upfront.
Release information the way a real clinical environment would: some
things are immediately visible, some require examination, some require
investigations, some require asking a nurse or reviewing a chart. Begin
with what I would see or hear first. I will drive the scenario from here
by asking questions, ordering investigations, and making decisions. Do
not prompt me unless I have been silent for too long or have made an
error that would cause immediate patient harm.
```

> [!NOTE] **Application Note:** The "minimum information at handover" framing mirrors the real cognitive challenge of acute clinical care — the full picture is never available at the outset, and the discipline of prioritising information-gathering under uncertainty is precisely what breaks down first under poly-crisis conditions. Releasing information in layers, rather than presenting a complete case summary, is what differentiates this from a case-based reasoning exercise.

### Step 24.3: Cascading Trigger Injection

**Prompt:**

```
#VibeRounds [To be run mid-simulation by the facilitator, not the
learner.] Inject a cascading trigger into the active scenario — a new
development that arises as a consequence of either the original crises
or of the learner's interventions so far. This trigger should: (1) Be
clinically plausible as a consequence of what has already happened,
(2) Compete with rather than complement the current priority (i.e.
it should force a re-triage decision, not make things easier), and
(3) Arrive through a realistic information channel — a nurse's verbal
report, a deteriorating observation, a new lab result, an alarm. Do
not announce it as a "new development" — simply present it as it would
arrive in the real environment.
```

> [!NOTE] **Application Note:** This step is designed to be run by the facilitator (or by the learner role-playing the facilitator in self-directed use) to introduce the cascade element that the module is named for. The key design principle is that the trigger is consequence-linked — it arises from the scenario's internal logic rather than arriving as a random additional problem. Consequence-linked cascades are more cognitively demanding and more realistic: they test not just the learner's ability to handle multiple problems but their ability to anticipate and prevent downstream consequences of their own decisions.

### Step 24.4: Resource Constraint & Triage Forcing Function

**Prompt:**

```
#VibeRounds [Mid-simulation.] Introduce a resource constraint that
forces explicit triage between the competing crisis threads. This
constraint should be: (1) Realistic for the configured setting —
a single available ICU bed, one senior available for consultation,
one operating theatre, one pharmacist on call, or a maximum of ten
minutes before another patient codes, (2) Clearly communicated as
a hard constraint, not a preference, and (3) Positioned so that
optimal management of one crisis thread is incompatible with optimal
management of another at the same moment. Do not resolve the
constraint for the learner — make them make the triage decision and
state it explicitly.
```

> [!NOTE] **Application Note:** The explicit triage-forcing function is this module's hardest cognitive demand — it requires the learner to make a value judgement under uncertainty and time pressure, not just a clinical reasoning judgement. The instruction to make the learner "state it explicitly" is deliberate: under real poly-crisis conditions, the cognitive failure mode is often not wrong prioritisation but failure to consciously acknowledge that a triage decision is being made, which prevents learning from the outcome.

### Step 24.5: Communication & Escalation Stress-Test

**Prompt:**

```
#VibeRounds Within the active simulation, stress-test my communication
and escalation behaviour. Present a moment where I need to communicate
one of the following: (1) A clinical concern to a resistant or
unavailable senior, (2) A change in a patient's condition to a family
member who is distressed or adversarial, (3) A safety concern to a
colleague whose practice is contributing to the crisis, or
(4) A deteriorating patient to a receiving team for urgent transfer.
Ask me to actually construct the communication — the specific words,
the structure, the urgency framing — rather than just saying "I would
escalate." Evaluate whether the communication I produce would be
effective in the simulated scenario.
```

> [!NOTE] **Application Note:** Communication failure is the most commonly identified contributory factor in serious adverse events and never-events — and is almost universally undertested in clinical simulations that focus on technical decision-making. This step explicitly surfaces communication as a performance domain alongside clinical reasoning, not as an afterthought. The instruction to produce the actual words rather than describe the intention mirrors the difference between knowing ISBAR (Identify–Situation–Background–Assessment–Recommendation) and being able to use it fluently under pressure.

---

## Phase 3 · Closure / Review — Debrief and extract learning

### Step 24.6: Post-Simulation Structured Debrief

**Prompt:**

```
#VibeRounds The simulation is now complete. Run a structured debrief
using the following framework: (1) What happened — a neutral timeline
of the key decision points and my responses, without evaluation yet.
(2) Why it happened — the cognitive and situational factors that drove
each key decision (what information was available, what was prioritised,
what was missed). (3) What I would do differently — specific,
behavioural changes, not abstract resolutions ("I would check the
potassium before starting the diuretic" not "I would be more systematic").
(4) What I did well that I should preserve — poly-crisis debriefs that
focus only on errors train avoidance; I also need to identify what
cognitive patterns held up under stress and should be reinforced.
```

> [!NOTE] **Application Note:** The four-part debrief structure (What happened / Why it happened / What differently / What to preserve) is adapted from the PEARLS (Promoting Excellence And Reflective Learning in Simulation) debriefing framework, one of the most validated structures in simulation-based medical education. The explicit requirement to identify preserved competencies — not just errors — is based on research showing that pure error-focused debriefs produce avoidance learning (what not to do) without building the positive pattern recognition that expert performance depends on.

### Step 24.7: Cognitive Architecture Failure Analysis

**Prompt:**

```
#VibeRounds Analyse where my reasoning architecture fractured under the
poly-crisis load: (1) Did I fall into premature closure — anchoring on
one crisis and failing to maintain adequate attention on the others?
(2) Did I lose situation awareness — focusing so deeply on a task that
I stopped monitoring the broader environment? (3) Did I experience task
saturation — a point where new information stopped being integrated
because my cognitive load was at capacity? (4) Did I fail to delegate —
attempting to manage more threads personally than was sustainable?
(5) Where did the cascade I did not see coming first become visible
in retrospect, and what would I need to monitor routinely to catch it
earlier? Be specific about which step or moment each failure occurred.
```

> [!NOTE] **Application Note:** The five failure modes named here — premature closure, loss of situation awareness, task saturation, failure to delegate, cascade blindness — are the five most consistently identified cognitive failure patterns in high-fidelity multi-patient simulation research and in serious event analysis across aviation, intensive care, and emergency medicine. Naming them explicitly rather than using generic feedback ("you missed things") gives the learner a vocabulary for self-monitoring in future high-pressure scenarios.

### Step 24.8: Transfer & Preparation for Real-World Application

**Prompt:**

```
#VibeRounds Translate the debrief findings into specific preparations for
the next time I face a real poly-crisis scenario: (1) What cognitive
habits or mental models should I build in lower-acuity situations to
make them available under pressure — and how specifically would I
practise those? (2) What environmental or team-based strategies
(checklists, role assignments, communication norms) would reduce the
cognitive load that contributed to the failures I identified? (3) What
is the single most important thing I would tell my future self at the
moment a poly-crisis begins — the orientation cue that would set me up
best for what follows?
```

> [!NOTE] **Application Note:** Transfer from simulation to real performance is not automatic — it requires explicit bridging between the simulated experience and the conditions under which the skill will actually be needed. The "single most important thing I would tell my future self" question is a compression exercise: it forces prioritisation over completeness, mirroring the cognitive constraint of the actual crisis moment where a learner cannot recall a list of debriefs but can anchor on one orienting principle.

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (maintaining clinical confidence under high-stakes simulation stress — Step 24.6)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Apply and Evaluate levels throughout the simulation; Create in Step 24.5's communication exercise)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (cognitive bias under pressure — premature closure and anchoring — Step 24.7)
- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) (single-case reasoning competence is the prerequisite; this module stress-tests it under multi-crisis load)
- [Module 4 — Peer-Level Ward Round Preparation](https://avi33tbtt.github.io/Prompts/Module-04-Peer-Level-Ward-Round-Preparation.html) (overnight triage rehearsal in Module 4 is the entry-level version of the poly-crisis competence this module develops)
- [Module 20 — Naturalistic Decision Making](https://avi33tbtt.github.io/Prompts/Module-20-Recognition-Primed-Decision-Model.html) (the Recognition-Primed Decision model is the cognitive science substrate for the expert performance that this module trains toward)

---

## Navigation

**Previous:** [← Module 23 — Clinical Workflow Implementation Science](./Module-23-Clinical-Workflow-Implementation-Science.md)

**Next:** [Module 25 — Epistemic Certainty Mapping & Calibration →](./Module-25-Epistemic-Certainty-Mapping-Calibration.md)

[← Back to README](https://avi33tbtt.github.io/Prompts/)
