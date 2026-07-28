# [Dr. Avinash kumar gupta](https://avi33tbtt.github.io/)

[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module AP — The Avinash Principle: Critical Hub-Node Navigation

**Objective:** Train the learner to stop treating a clinical case as an exhaustive decision tree and instead find the small number of critical hub nodes — phase-transition boundaries, high-leverage explainable and experiencable nodes — that actually determine whether the patient reaches a safe outcome. Where other modules in this stack target a specific reasoning skill (the Observe→Cluster→Hypothesize→Test→Update cycle in [Module 32](https://avi33tbtt.github.io/Prompts/Module-32-Clinical-Cognition-Loop.html), differential generation in [Module 12](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html), failure-mode mapping in [Module 49](https://avi33tbtt.github.io/Prompts/Module-49-FMEA-Analysis-and-Insights.html)), Module AP provides the *pruning layer* that sits above all of them — a discipline for deciding which ~1% of a case's decision space deserves the learner's full attention, and which ~99% is safely left to routine, guideline-driven management.

**Indication:** Any case where the theoretical decision space is too large to reason through exhaustively — multi-stage clinical trajectories (pre-hospital through discharge), resource-constrained settings where guidelines cannot cover every branch, cases with a narrow but decisive time window (golden hour, reperfusion window, envenomation progression), or any teaching session where the goal is to build the specific habit of separating "managerial noise" from "load-bearing" decisions rather than reviewing case content itself.

> [!NOTE] **Framework context.** The principle formalizes something experienced clinicians already do intuitively but rarely name: expert cognition does not calculate every branch of a decision tree, it prunes toward a small number of scale-free hub nodes sitting at phase-transition boundaries. This borrows structurally from power-law dynamics in scale-free networks, self-organized criticality (Bak, Tang & Wiesenfeld), and Bejan's Constructal Law — three ways of describing why a handful of nodes carry almost all of a system's leverage. The goal is not that learners memorize this theory — it is that they internalize the pruning habit until node-spotting becomes instinct rather than calculation.

> [!IMPORTANT] **Complexity and evidence output — scope boundary.** Every node, weighting, red flag, and trajectory produced by this module is an educational reasoning observation, not a clinical decision or a verdict on the case. Any high-leverage node, bifurcation risk, or referral trigger identified here must be reviewed by a supervising clinician before it informs actual patient management. Qualitative High/Medium/Low weightings are context-anchored judgment aids, not calibrated probabilities.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## The Pruning Loop at a Glance

```
SIZE THE MAZE → FIND THE PHASE BOUNDARY → MAP THE ~1% HUBS → STRESS-TEST
     |                    |                        |               |
Combinatorial       Golden-hour /          Explainable +      Bifurcation
scale of the         reperfusion /          experiencable      risk matrix:
unconstrained        deterioration           hub nodes,         red flag +
decision space        threshold             comorbidity-        circuit
(context only)                              weighted            breaker
```

Each pass through the loop narrows a theoretically vast decision space down to the two or three moments that actually decide whether the patient reaches Point B — and then, critically, asks what could go wrong with pulling each of those levers.

---

## Phase 1 · Initiation — Size the problem and set the pruning contract

### Step AP.0: Session Setup

**Prompt:**

```
#VibeRounds You are an expert clinical strategist operating under the
"Avinash Principle." Your goal is to help me navigate a patient's
trajectory by identifying the top ~1% critical hub nodes that dictate
systemic gravity — not by mapping exhaustive decision trees. You will
process the case in controlled "zoom" layers, one level at a time, and
treat every high-leverage node as a bifurcation point with both an
intended effect and a possible dark side. Confirm you understand this
contract, then ask me to describe the case.
```

> [!NOTE] **Application Note:** The explicit "one zoom layer at a time" commitment is the module's core anti-overload move — dumping system gravity, node mapping, and bifurcation risk all at once just recreates the original problem of cognitive overload. Hold this discipline even when the learner asks for everything at once.

### Step AP.1: Sizing the Unconstrained Decision Space

**Prompt:**

```
#VibeRounds Before narrowing anything, help me see the size of the maze
I'm about to skip. Ask me to roughly estimate: how many realistic
decision stages does this case pass through end to end (pre-hospital
through final disposition), and roughly how many plausible choices exist
at each stage? Multiply it out for me as a rough order of magnitude. Then
ask: what happens to that number if we restrict the decision-maker to one
role and the setting to the actual resource level of this case? This step
is context only — it is not the analysis itself.
```

> [!NOTE] **Application Note:** This step is deliberately theatrical — the combinatorial explosion (often in the tens or hundreds of millions of theoretical paths) is what makes the subsequent pruning feel earned rather than arbitrary. Do not skip it even when time-pressured; it is what stops the learner from silently reverting to exhaustive-tree thinking later in the session.

---

## Phase 2 · Execution — Zoom Layers

### Step AP.2: Preliminary Scan — Phase Boundary Identification

**Prompt:**

```
#VibeRounds Run a Preliminary Scan only. First, Phase Boundary
Identification: help me name the immediate, non-linear time window in
this case — the golden hour, reperfusion window, septic escalation
threshold, envenomation progression window, or equivalent — where acting
inside versus outside the window changes the underlying physics of the
case. Rate Phase Criticality as High, Medium, or Low. Then give me only a
one-line trajectory statement and the top hub nodes at a glance — do not
expand further. Ask me which direction I want to zoom next.
```

> [!NOTE] **Application Note:** Never deliver more than the Preliminary Scan unprompted. This is the depth-control rule that keeps the module usable at the bedside rather than becoming a document nobody reads mid-case.

### Step AP.3: High-Leverage Node Mapping (the ~1%)

**Prompt:**

```
#VibeRounds Now map the high-leverage nodes — roughly the top 1% of this
case's decision space. Split them into two categories: Explainable Hubs
(grounded in established pathophysiology — mechanism-based intersections)
and Experiencable Hubs (narrative, biographical, or behavioral realities
that only surface through slow, unhurried history-taking, even without a
clean mechanistic explanation). For each node, note whether overlapping
conditions or circumstances multiply its criticality rather than just
add to it — comorbidity weighting is multiplicative, not additive. Push
me to name at least one experiencable node, not just explainable ones.
```

> [!NOTE] **Application Note:** The instruction to push for at least one experiencable node exists because learners trained in pure pathophysiology systematically under-weight narrative and biographical nodes — a wage-loss anxiety, a prior early self-discharge, a family dynamic can carry as much leverage toward Point B as any lab value. Treating "soft" context as a measurable, high-leverage input is the module's central departure from a flat Pareto (80/20) framing.

### Step AP.4: Bifurcation & Risk Matrix — the Dark Side of Every Lever

**Prompt:**

```
#VibeRounds For every node identified in Step AP.3, run the mandatory
Bifurcation & Risk Matrix. For each node, ask me to state: Effect (High/
Medium/Low), Uncertainty (High/Medium/Low), the Red Flag — the specific,
catastrophic, unexpected way pulling this lever could go wrong — and the
Safety Preparation — the circuit breaker that must be ready BEFORE
acting, not after. Do not let me list a high-leverage node without also
naming its dark side; a lever with no stated failure mode has not been
fully analyzed.
```

> [!NOTE] **Application Note:** This is the module's non-negotiable step. The same antivenom that saves a patient can trigger anaphylaxis; the same fluid resuscitation that stabilizes one patient can drown another. A high-leverage node identified without its bifurcation risk is *acting*, not *acting with intent* — the distinction this module exists to teach.

### Step AP.5: Macro Trajectory Alignment

**Prompt:**

```
#VibeRounds Now help me align the macro trajectory. Ask me to state: the
Status Quo Trajectory (what happens if the identified hub nodes are left
unaddressed), the Aligned Trajectory (what happens once those hub nodes
are secured, and how routine "managerial" decisions self-organize around
that new baseline), and 1-3 Minimal High-Yield Interventions targeted
only at the critical hubs — not a comprehensive management plan. Ask me
to justify why each intervention is genuinely high-yield rather than
just routine care relabeled.
```

> [!NOTE] **Application Note:** The self-organization framing — securing the critical nodes and letting routine care fall into place around them — is what separates this from a checklist. The learner should leave this step believing they've found the two or three moves that matter, not a ten-point plan that quietly recreates the original overload.

---

## Phase 3 · Closure — Zoom Commands, Depth Control, and Apprentice Mode

### Step AP.6: Zoom Out — System Gravity

**Prompt:**

```
#VibeRounds [ZOOM OUT: SYSTEM GRAVITY] Drop the clinical node detail.
Map the structural life/clinical domains currently shaping this patient's
overall trajectory — geography and transport constraints, economic
pressure, household or family support, and health-system supply
constraints (drug stock, staffing, equipment ceilings). For each domain,
ask me how it shapes the attractor state the patient is being pulled
toward. Then ask me to name the dominant "safe attractor" and the
dominant "failure attractor" — and whether either failure mode is
actually a structural problem rather than a clinical error.
```

> [!NOTE] **Application Note:** This is not root-cause analysis, which looks backward. System Gravity looks forward — at the forces currently shaping where the trajectory is heading. The reminder that failure modes are often structural (geography, economics) rather than clinical error is deliberate; it keeps the exercise from turning into blame-finding.

### Step AP.7: Zoom In — Bifurcation Tactics on One Node

**Prompt:**

```
#VibeRounds [ZOOM IN: BIFURCATION TACTICS] Drop the system map entirely.
Focus on exactly one node I name. Ask me: what is the expected outcome
of acting on this node? What is the classic trap — the way teams
typically get the timing or execution of this node wrong? What is the
circuit breaker — the concrete, pre-agreed trigger or preparation that
must be in place before this node is acted on, not after? Keep this
narrow — this is not a full FMEA across every node, it is one node,
examined completely.
```

> [!NOTE] **Application Note:** The referral-timing example in the Avinash Principle's worked snakebite case is the archetype here — a node where guidelines have already "locked" most of the algorithm, leaving judgment about *when* to act as the one genuine discretionary lever left. This step is where that kind of judgment gets rehearsed explicitly.

### Step AP.8: Lock — Hold Resolution, Refine Weighting Only

**Prompt:**

```
#VibeRounds [LOCK: CRITICAL NODES] Hold the current resolution steady.
Do not add new nodes or zoom to a different layer. Instead, ask me to
re-examine the weighting of the nodes already identified — has new
information changed any node's Effect, Uncertainty, or comorbidity
multiplier? Should any node be promoted or demoted in priority? This
step exists to refine judgment, not to reopen the case.
```

> [!NOTE] **Application Note:** LOCK is the module's discipline against scope creep — a case reviewed over hours or days should periodically re-weight its existing nodes rather than re-litigating the whole map from scratch every time new data arrives.

### Step AP.9: Grandmaster's Apprentice Mode (on request)

**Prompt:**

```
#VibeRounds Activate Grandmaster's Apprentice Mode. Present the case to
me without revealing your own node analysis. Ask me to name the top ~1%
hub nodes myself first, along with the phase boundary. Compare my answer
to the structural analysis: if I match, move forward together. If I miss
a node, ask me to reason out loud why I might have missed it before you
reveal why it matters. The goal is calibrating my own node-spotting
instinct over repeated cases, not replacing my judgment with yours.
```

> [!NOTE] **Application Note:** This is the module's actual endpoint. The Avinash Principle is not meant to be run as a permanent crutch — the target state is a learner who has done this enough times that node-spotting has become instinct, at which point the module has done its job and stops being necessary.

---

## Cross-Module Connections

| Module | Connection |
| --- | --- |
| [Module 32 — Clinical Cognition Loop](https://avi33tbtt.github.io/Prompts/Module-32-Clinical-Cognition-Loop.html) | Module 32 provides the Observe→Cluster→Hypothesize→Test→Update engine that runs *within* a case; Module AP decides which parts of that engine's output are actually worth full attention |
| [Module 12 — Differential Diagnosis Deepdive](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html) | Explainable hub nodes in Step AP.3 often surface as the pivotal entries in a Module 12 differential |
| [Module 14 — Resource-Constrained Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.html) | System Gravity (Step AP.6) frequently surfaces resource-constraint domains that Module 14 is built to reason through in depth |
| [Module 49 — FMEA Analysis](https://avi33tbtt.github.io/Prompts/Module-49-FMEA-Analysis-and-Insights.html) | Module AP's Bifurcation & Risk Matrix (Step AP.4) is a deliberately narrow cousin of a full FMEA — one node at a time, not every failure mode across the case |
| [Module 53 — Clinical Guideline Intelligence Navigator](https://avi33tbtt.github.io/Prompts/Module-53-Clinical-Guideline-Intelligence-Navigator.html) | Guidelines are the mechanism that "locks" most nodes before this module ever runs — Module AP's leverage typically lives in the discretionary gaps guidelines leave open |

---

## Module Maturity

🟡 **In Progress** — Derived from a single worked case example (district-hospital snakebite management) and not yet validated across other case types. The combinatorial framing (Step AP.1) and the mandatory Bifurcation & Risk Matrix (Step AP.4) are the most load-bearing components and benefit most from facilitator guidance in early use.

---

*Vibe Rounds Prompt Modules — Module AP.* *Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026* *#VibeRounds — A Socratic AI Paradigm for Clinical Medicine*

[← Back to README](https://avi33tbtt.github.io/Prompts/)
