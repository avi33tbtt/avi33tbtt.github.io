# Module 23 — Clinical Workflow Implementation Science

**Objective:** Train the discipline of translating evidence-based interventions into actual clinical practice — closing the well-documented gap between what research shows works and what consistently happens at the bedside. This module addresses the "implementation gap" as a learnable, structured problem: not a matter of individual willingness but a system-design and behaviour-change challenge with its own theory, methods, and failure modes.

**Indication:** Whenever a learner or team knows what the evidence supports but struggles to make it happen reliably; whenever a protocol, guideline, or quality-improvement initiative is being introduced, stalling, or rolling back; whenever variation in practice across providers, shifts, or sites is visible and unexplained; or whenever a clinical outcome audit reveals that the problem is not knowledge but execution.

> [!IMPORTANT] **Scope Clarification.** This module supports clinical reasoning and learning about implementation science as a discipline. It does not replace formal quality-improvement methodology (e.g. a supervised QI project, a PDSA cycle registered with an institutional QI office), institutional change-management processes, or the judgement of clinical leads, nurses, and allied health professionals who have direct operational knowledge of the workflow being changed. Any implementation plan developed using this module requires review and endorsement by those with direct operational authority before being acted upon.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Diagnose the implementation problem

### Step 23.0: Session Setup & Implementation Problem Statement

**Prompt:**

```
#VibeRounds You are an implementation science reasoning partner in the
Vibe Rounds framework. Your job is to help me think through why an
evidence-based practice is not being consistently adopted, and how to
design a practical, context-sensitive plan to close that gap. You are
not here to tell me the practice is wrong — assume the evidence base is
solid. You are here to help me understand the gap between evidence and
execution as a system problem, not a personal failing. Ask me to describe
the specific practice I am trying to implement and the setting in which
I am trying to implement it. Do not suggest solutions before we have
diagnosed the problem. Confirm you understand this framing before we begin.
```

> [!NOTE] **Application Note:** The instruction to "diagnose before prescribing" mirrors the clinical reasoning discipline at the heart of the Vibe Rounds stack — implementation failures are routinely misdiagnosed (attributed to individual resistance when the real barrier is system design, or attributed to resource constraints when the real issue is unclear role ownership). Premature solution-generation is the most common and costly error in clinical quality improvement.

### Step 23.1: Evidence-Practice Gap Mapping

**Prompt:**

```
#VibeRounds Before we discuss solutions, help me map the gap precisely.
Ask me: (1) What does the evidence say should happen, and how specific
is the recommendation (a concrete behaviour vs a broad principle)?
(2) What currently happens in practice, and how do I know — direct
observation, audit data, or assumption? (3) How large is the gap —
is this "never done," "sometimes done," or "done inconsistently across
providers or shifts"? (4) How long has the gap existed, and have there
been previous attempts to close it? Make me answer each question
explicitly before we move on.
```

> [!NOTE] **Application Note:** The distinction between "never done," "sometimes done," and "done inconsistently" is not just descriptive — it implies fundamentally different implementation strategies. A practice that never happens likely has a structural or knowledge barrier; one that happens inconsistently likely has a reliability or reminder-system problem; one that varies across providers likely has a culture or accountability gap. Precise gap mapping prevents applying the wrong strategy.

---

## Phase 2 · Execution — Diagnose barriers, design enablers

### Step 23.2: Barrier Analysis (COM-B Framework)

**Prompt:**

```
#VibeRounds Apply the COM-B behaviour change framework to the
implementation gap. For the specific clinical behaviour I am trying to
make consistent, ask me to reason through: (1) Capability — do
providers have the knowledge and physical/cognitive skill to perform
this? (2) Opportunity — does the physical and social environment make
the behaviour easy or hard (workflow design, prompts, team norms)?
(3) Motivation — are providers automatically inclined toward this
behaviour (habit, identity) or does it require active effortful
decision-making? For each domain, identify the dominant barrier before
naming any intervention. Do not skip to solutions.
```

> [!NOTE] **Application Note:** The COM-B (Capability–Opportunity–Motivation–Behaviour) model is one of the most widely used and validated frameworks in implementation science; it is the structural foundation of the NHS Behaviour Change Wheel. The critical discipline here is domain-specific diagnosis before intervention selection — a capability barrier requires education; an opportunity barrier requires environment redesign; a motivation barrier requires reframing or incentive alignment. Applying the wrong intervention type to the wrong barrier domain is the single most common cause of failed QI initiatives.

### Step 23.3: Contextual & Cultural Factor Analysis

**Prompt:**

```
#VibeRounds Beyond individual behaviour, help me analyse the contextual
and cultural factors shaping this implementation gap. Ask me: (1) Is
this a "top-down" initiative (management-driven) or a "bottom-up"
one (frontline-driven), and how does that affect buy-in? (2) Are there
professional or hierarchical dynamics affecting who is willing to
change — and who has the informal authority to model the new behaviour?
(3) Has there been a previous failed attempt to implement something
similar, and if so, what is the residual cultural memory of that failure?
(4) Is this change happening in a high-pressure, time-constrained
environment where cognitive load is already high? Make me reason through
each question rather than summarising the situation abstractly.
```

> [!NOTE] **Application Note:** Contextual factors — particularly the memory of previous failed initiatives — are rarely surfaced in formal barrier analyses but are among the most powerful predictors of implementation failure. "Initiative fatigue" is a real and well-described phenomenon in clinical settings; a new implementation effort that ignores the graveyard of previous attempts will reliably inherit their credibility problems.

### Step 23.4: Implementation Strategy Selection

**Prompt:**

```
#VibeRounds Based on the barrier analysis and contextual factors, help
me match implementation strategies to identified barriers. For each
dominant barrier, ask me to choose from the following evidence-based
strategy categories and reason through why it fits: (1) Education and
training (capability barrier), (2) Environmental restructuring —
checklists, reminders, defaults, workflow redesign (opportunity barrier),
(3) Modelling and social learning — champions, peer observation
(motivation-social barrier), (4) Enablement and goal-setting —
feedback loops, audit and report-back (motivation-reflective barrier),
(5) Persuasion and framing — case narratives, patient stories
(motivation-automatic barrier). Make me defend each choice. Do not
recommend a strategy that does not match a diagnosed barrier.
```

> [!NOTE] **Application Note:** The strategy-to-barrier matching discipline prevents the most expensive implementation error: choosing a strategy based on what is familiar or convenient (e.g. "we'll do a training session") rather than what the diagnosis indicates is needed. A training session is the right answer when the barrier is capability; it is actively counterproductive when the barrier is opportunity or motivation, because it signals to frontline staff that the problem is attributed to their knowledge rather than to the system they work in.

### Step 23.5: Change Package Design & Pilot Framing

**Prompt:**

```
#VibeRounds Help me design a minimal, testable "change package" — the
smallest, most focused set of interventions that addresses the dominant
barriers identified. For each element of the package, ask me: (1) What
specifically will change and for whom? (2) How will I know if the change
is happening (a measurable process metric, not just an outcome metric)?
(3) What is the smallest unit I can test this in — one ward, one shift,
one provider group — before scaling? (4) What is the failure mode I
should watch for in the pilot, and how will I know if the change is
causing harm or unintended disruption rather than improvement? Frame
this as a testable hypothesis, not a final solution.
```

> [!NOTE] **Application Note:** The PDSA (Plan-Do-Study-Act) cycle logic is embedded in this step without naming it explicitly — small, testable, observable, reversible. The instruction to define a process metric (not just an outcome metric) matters because outcome metrics in clinical settings lag behind process changes by weeks or months and cannot provide rapid-cycle learning feedback. The failure-mode question guards against the optimism bias that is endemic to change initiatives.

### Step 23.6: Sustainability & Scale Planning

**Prompt:**

```
#VibeRounds If the pilot shows the change package works, what would
sustainability and scale require? Ask me to reason through: (1) What
infrastructure or resources would need to be permanent (not dependent on
a champion's personal effort)? (2) How will new staff be onboarded into
the changed practice — what prevents reversion when key people leave?
(3) What measurement system will detect early drift back toward the
old practice before it becomes entrenched? (4) What is the difference
between "implemented" and "embedded in culture" — and which of those am
I actually aiming for here?
```

> [!NOTE] **Application Note:** The distinction between "implemented" and "embedded" is this step's central concept: many QI initiatives achieve compliance during active monitoring and revert once attention moves elsewhere, because they achieved the behaviour without changing the underlying system. Sustainability requires that the new behaviour becomes the path of least resistance — environmentally, socially, and cognitively — not just the rule.

---

## Phase 3 · Closure / Review — Reflect and consolidate

### Step 23.7: Implementation Readiness Assessment

**Prompt:**

```
#VibeRounds Before I take any action, help me assess implementation
readiness. On a structured scale, help me rate: (1) Leadership support
— is there active sponsorship or passive tolerance? (2) Frontline
readiness — is the clinical staff aware of, and broadly bought into, the
need for change? (3) Infrastructure readiness — are the tools, time,
and workflow supports needed for the change package actually available?
(4) Measurement readiness — is there a system in place to track whether
the change is happening and whether it is helping? For any dimension
rated low, name the specific action needed to raise it before launch.
```

> [!NOTE] **Application Note:** Launching before readiness is adequate is one of the most reliable predictors of implementation failure — not because the intervention is wrong, but because the context cannot yet absorb it. This step functions as a go/no-go check: it may correctly identify that the right immediate action is not to launch but to build readiness infrastructure first.

### Step 23.8: Critical Awareness — Implementation Bias & Failure Modes

**Prompt:**

```
#VibeRounds Apply a critical awareness lens to this implementation
science session: (1) Did I attribute the gap to individual behaviour
(knowledge or motivation) when the dominant barrier may actually be
systemic (workflow or environment)? (2) Did I design for the "average"
provider in ideal conditions, or for the actual range of people and
conditions in my specific setting? (3) Is there a risk that the
measurement system I chose will produce reassuring data without
reflecting genuine behaviour change — a Goodhart's Law risk? (4) Whose
voices are missing from this analysis — specifically, frontline staff
most affected by the change who were not consulted in this session?
Be honest about the limits of reasoning through implementation without
direct observation and consultation with those affected.
```

> [!NOTE] **Application Note:** Goodhart's Law — "when a measure becomes a target, it ceases to be a good measure" — is endemic in healthcare quality improvement and must be named explicitly as a risk. The final question about missing voices is the module's most important critical awareness point: implementation science conducted entirely through top-down analysis without frontline engagement is a well-documented pathway to resistance and failure. This session is a reasoning preparation tool, not a substitute for that engagement.

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (the change-leadership disposition required for Step 23.3's cultural analysis)
- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Analyse → Evaluate → Create across Steps 23.2–23.5)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (attribution bias, measurement gaming — Step 23.8)
- [Module 4 — Peer-Level Ward Round Preparation](https://avi33tbtt.github.io/Prompts/Module-04-Peer-Level-Ward-Round-Preparation.html) (workflow constraints surfaced in ward rounds are natural triggers for an implementation science analysis)
- [Module 22 — Health Economics & Value-Based Care Alignment](./Module-22-Health-Economics-Value-Based-Care-Alignment.md) (an intervention identified as high-value in Module 22 needs Module 23's implementation science to actually reach patients consistently)

---

## Navigation

**Previous:** [← Module 22 — Health Economics & Value-Based Care Alignment](./Module-22-Health-Economics-Value-Based-Care-Alignment.md)

**Next:** [Module 24 — Evidence Frontier Search (Advanced) →](./Module-21-Evidence-Frontier-Search.html) *(see also Module 21)*

[← Back to README](https://avi33tbtt.github.io/Prompts/)
