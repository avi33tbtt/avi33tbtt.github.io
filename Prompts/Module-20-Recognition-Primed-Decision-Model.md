[← Back to README](README.md)

# Module 20 — Naturalistic Decision Making / Recognition-Primed Decision Model (Klein)

**Objective:** Train decision-making under real time pressure and incomplete information the way experienced practitioners actually do it — generating one plausible course of action and mentally simulating it forward to check for failure, rather than comparing multiple options side by side before choosing.

**Indication:** Time-critical clinical moments where there is no time for a full differential or a side-by-side option comparison — night-shift deterioration calls, rapid response activations, acute triage, and any scenario in [Module 4, Step 4.4](Module-04-Peer-Level-Ward-Round-Preparation.md) (Night Shift Stat Call Triage). Not a replacement for the slower, more thorough reasoning trained in [Module 1](Module-01-Socratic-Clinical-Reasoning.md) or [Module 18](Module-18-Causal-vs-Probabilistic-Network-Reasoning.md) — this module trains the specific, narrower skill needed when there genuinely is no time for those.

> [!NOTE]
> **Theoretical Basis:** This module operationalises the **Recognition-Primed Decision (RPD) model** (Klein, G., 1998, *Sources of Power: How People Make Decisions*, MIT Press), developed from field studies of experienced decision-makers under time pressure — firefighters, ICU nurses, military commanders, pilots. Klein's central finding, which broke with the classical decision-theory assumption that good decisions require comparing multiple options: experienced practitioners under time pressure typically do **not** generate and compare several options at once. Instead, they recognise a situation as typical of a pattern they have seen before, retrieve a single plausible course of action associated with that pattern, and **mentally simulate it forward** — running the plan in their head to check whether it would work and where it might fail — before committing. If the mental simulation reveals a flaw, the practitioner adjusts the plan or retrieves the next most plausible option; they rarely compare two full options simultaneously. This is a close relative of [Module 15](Module-15-Illness-Script-Acquisition.md)'s illness-script retrieval and shares the System 1 territory of [dual-process theories of clinical reasoning](Module-18-Causal-vs-Probabilistic-Network-Reasoning.md), but RPD is specifically a model of *action selection under time pressure*, not diagnostic pattern-matching — the unit being trained here is "what do I do right now," not "what is this."

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Orient the AI and set the single-option contract

### Step 20.0: Session Setup & Single-Option Framing

**Prompt:**
```text
#VibeRounds You are a clinical reasoning partner helping me practise
recognition-primed decision-making for time-critical scenarios — the way
experienced clinicians actually decide under real time pressure. Do not
ask me to compare multiple options side by side. Instead, when I describe
a deteriorating or urgent scenario, ask me: (1) what is the single most
plausible course of action, based on recognising this situation as similar
to one I have encountered or learned about before? (2) Now mentally
simulate that plan forward — where would it fail, and how would I know?
Only if my mental simulation reveals a serious flaw should we move to a
second option. Keep the pace fast — this is meant to feel like real time
pressure, not a leisurely Socratic dialogue. Confirm you understand before
we begin.
```

> [!NOTE]
> **Application Note:** Run once per RPD session, and explicitly re-orient before each scenario if the AI starts defaulting back to comparative option-listing — this is the most common failure mode, since most LLMs default to enumerating several options when asked for a clinical plan, which is precisely the pattern RPD is designed to train away from.

---

## Phase 2 · Execution — Recognise, commit, simulate, adjust

### Step 20.1: Pattern Recognition Under Time Pressure

**Prompt:**
```text
#VibeRounds Describe a sudden clinical deterioration or abnormal result to
me in the compressed, urgent way it would actually be reported — a phone
call or a glance at a monitor, not a full case write-up. Give me five
seconds' worth of information, no more. Ask me immediately: what does this
situation remind me of, and what is my first instinct for what is
happening? Do not let me ask clarifying questions yet — force the
recognition response first, then open up further information only after I
commit to an initial read.
```

> [!NOTE]
> **Application Note:** This step deliberately denies the learner the full information-gathering opportunity that [Module 1](Module-01-Socratic-Clinical-Reasoning.md) and [Module 17](Module-17-Semantic-Qualifiers-Problem-Representation.md) encourage — that is the point. Real time-critical recognition happens with incomplete information, and the skill being trained is producing a usable first read under that constraint, not refusing to commit until more data arrives.

### Step 20.2: Single-Plan Generation and Forward Simulation

**Prompt:**
```text
#VibeRounds Based on the scenario, ask me to commit to one course of
action — not a list of options, one plan. Once I state it, ask me to
mentally simulate it forward out loud: what happens in the next 5 minutes
if this plan is right? What is the first sign that would tell me it is
failing? At what point in this simulation would I need to abandon or
escalate the plan? Only after I complete the simulation should you tell me
whether my plan and my failure-detection point were sound.
```

> [!NOTE]
> **Application Note:** This is the core RPD drill. The forward simulation — not the plan itself — is the skill being trained; a learner who states a reasonable plan but cannot name how they would know it was failing has not actually completed the RPD cycle, even if the plan itself is clinically correct.

### Step 20.3: Plan Rejection and Re-Recognition

**Prompt:**
```text
#VibeRounds Continue the scenario from where my forward simulation
revealed a flaw, or introduce a new piece of information that breaks my
original plan. Ask me: does this change require abandoning my recognition
of the situation entirely and re-pattern-matching from scratch, or does it
just require adjusting the plan while keeping the same underlying
read of the situation? Push me to be explicit about which one is
happening — they require different responses.
```

> [!NOTE]
> **Application Note:** Distinguishing "wrong plan, right read of the situation" from "wrong read of the situation entirely" is a higher-order RPD skill than simple plan adjustment — Klein's research found experienced decision-makers are notably better than novices at recognising when they need to abandon their situational read itself, not just tweak the plan within it.

### Step 20.4: Escalation Threshold Under Time Pressure

**Prompt:**
```text
#VibeRounds For the scenario we are working through, ask me to state — as
fast as I can, without deliberation — the single specific finding or
threshold that would make me escalate to a senior right now, regardless of
how confident I feel in my current plan. Then ask me to defend that
threshold in one sentence: why this specific sign and not an earlier or
later one.
```

> [!NOTE]
> **Application Note:** Direct extension of [Module 4, Step 4.4](Module-04-Peer-Level-Ward-Round-Preparation.md) (Night Shift Stat Call Triage), which already asks "at what threshold do we escalate" but without the RPD structure around it — this step adds the speed constraint and forward-simulation discipline that sharpens the threshold question into a trained reflex rather than a reasoned-out answer with time to spare.

### Step 20.5: Compressed Multi-Scenario Drill

**Prompt:**
```text
#VibeRounds Run a rapid sequence of four short deterioration scenarios,
one after another, each delivered in compressed, urgent form as in Step
20.1. For each, force me through the full cycle fast: recognise, commit to
one plan, state the forward-simulation failure point, state the escalation
threshold. Move to the next scenario as soon as I complete the cycle —
do not let me linger. At the end, tell me which scenario I handled with
genuine recognition-based speed versus which one I was visibly working out
analytically in real time, even if I got the right answer either way.
```

> [!NOTE]
> **Application Note:** The closing distinction — genuine recognition speed versus analytical reasoning that merely looks fast — is the most clinically important feedback this step can give. A learner who reasons their way to a correct answer slowly, even if they land on it, has not yet built the pattern library that RPD depends on; that distinction is invisible from outcome alone and only surfaces by comparing pace and confidence across scenarios.

---

## Phase 3 · Closure / Review — Consolidate the recognition-and-simulate habit

### Step 20.6: Mid-Session RPD Checkpoint

**Prompt:**
```text
#VibeRounds Pause. Give me a formative checkpoint: (1) recognition speed —
am I committing to a plausible first read quickly, or hesitating until I
have gathered more information than the scenario allows? Score out of 10
with one specific strength and one targeted gap; (2) forward-simulation
quality — am I genuinely simulating the plan's failure points, or just
stating a plan and moving on? Score out of 10, same format. End with one
sentence on whether my biggest current limitation is recognition (not
having the pattern) or simulation (having the pattern but not stress-
testing it).
```

> [!NOTE]
> **Application Note:** Separating recognition limitations from simulation limitations matters because the fix for each is different — a recognition gap is addressed by more case exposure and pattern-building (see [Module 15](Module-15-Illness-Script-Acquisition.md)), while a simulation gap is addressed by more deliberate forward-checking practice, which is what this module trains directly.

### Step 20.7: RPD vs. Deliberative Reasoning Debrief

**Prompt:**
```text
#VibeRounds Looking back at this session, identify any moment where I
should have used fast recognition-primed decision-making but instead
defaulted to slow, deliberative comparison of options — costing time the
real scenario would not have allowed. Also identify the reverse: any
moment where I committed to a fast plan via recognition when the situation
actually had enough time and ambiguity to warrant slower, more
deliberative reasoning instead. Name the specific cue that should have
told me which mode the situation called for.
```

> [!NOTE]
> **Application Note:** This is the RPD-specific analogue of [Module 15, Step 15.7](Module-15-Illness-Script-Acquisition.md) and [Module 18, Step 18.7](Module-18-Causal-vs-Probabilistic-Network-Reasoning.md) — all three audit *which reasoning mode was used*, not just the outcome, on the premise that mode-selection error is more instructive and more dangerous in practice than a single wrong answer within the right mode.

### Step 20.8: Critical Awareness — Limits of Recognition-Primed Decisions

**Prompt:**
```text
#VibeRounds Apply a critical awareness lens to recognition-primed
decision-making specifically: (1) What is the risk of pattern-matching to
the wrong prior experience under time pressure, and how would I know it
happened, given that RPD by design does not involve comparing alternative
explanations at the moment of decision? (2) How is this risk different
from the premature closure risk already named for illness scripts? (3)
What is the single best safeguard against a fast, confident,
wrong recognition-primed decision in a genuinely time-critical scenario,
given that there usually isn't time to fully verify before acting? Be
honest but constructive.
```

> [!NOTE]
> **Application Note:** This step extends [Framework D](Framework-D-Critical-Awareness-Framework.md)'s bias taxonomy to a risk domain that is structurally harder to safeguard than the others in this stack — by design, RPD does not build in the option-comparison step that would normally catch a wrong pattern match, because there usually isn't time for it. The honest answer to point (3) is typically institutional and structural (a second clinician's parallel read, a fixed escalation threshold set in advance as in Step 20.4, post-event debrief as in Step 20.7) rather than something the individual decision-maker can reliably self-correct for in the moment — the prompt should surface that limitation rather than imply a purely individual fix exists.

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](Framework-A-Humanistic-Persona.md) (persona language throughout; note Trait 5's calibrated-difficulty framing applies well to escalating scenario speed across Step 20.5)
- [Framework D — Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) (Step 20.8)
- [Module 4 — Peer-Level Ward Round Preparation](Module-04-Peer-Level-Ward-Round-Preparation.md) (Step 4.4 is the direct precursor this module sharpens with RPD structure)
- [Module 15 — Illness Script Acquisition](Module-15-Illness-Script-Acquisition.md) (shares System 1 pattern-retrieval territory; RPD adds the action-selection and forward-simulation layer on top of script recognition)
- [Module 18 — Causal vs. Probabilistic (Network) Reasoning](Module-18-Causal-vs-Probabilistic-Network-Reasoning.md) (the slower, comparative reasoning mode this module is explicitly contrasted against in Step 20.7)

---

## Navigation

**Previous:** [← Module 19 — Community & Social Medicine Insights](Module-19-Community-and-Social-Medicine-Insights.md)

This is currently the final module. **Up next:** browse the [Supplementary Frameworks](README.md) or [Reference Material](README.md).

[← Back to README](README.md)
