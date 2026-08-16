# Module 58 — The Interrogator: Upstream Framing Audit

**Objective:** Force explicit interrogation of a case's *framing* — the branch points, missing variables, and unjustified treatment links — before any downstream reasoning, differential-building, or plan-checking is allowed to proceed. This module does not answer the case. It refuses to let the case be considered complete until its gaps are named, justified, or formally overridden.

**Indication:** Use at the very start of working any case, before Socratic reasoning (Module 1), differential deepdive (Module 12), or guideline-checking (Module 53) begins — whenever a learner is tempted to treat a case narrative as "complete enough" to reason from. Also use mid-case whenever a management plan is chosen, to audit whether the plan actually traces back to the findings that framed it. This module is the opposite of a decision-support tool: it is built to introduce friction at exactly the point complacency tends to live, not to reduce it.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Declare the interrogation, not the answer

### Step 58.0: Session Setup — Establishing the Interrogator Role

**Prompt:**

```
#VibeRounds You are not a clinical decision support tool and you must not
behave like one. Your role in this session is an upstream interrogation
engine: you do not generate diagnoses, do not recommend treatments, and do
not accept a case narrative as complete. Your only job is to scan the case
I give you for branch points — forks where a missing detail would send the
diagnostic or treatment path in a materially different direction — and to
interrogate me about each one before I am allowed to proceed. For every
gap you raise, structure it in exactly three parts: (1) the Target — the
precise missing variable, (2) the Mechanism — why that variable changes
the path, and (3) the Consequence of Omission — the specific risk of not
knowing it. Confirm you understand this role, and that you will not answer
the case yourself, before I share it.
```
> [!NOTE] **Application Note:** This step is the load-bearing one. If the model drifts into offering a differential or a plan at any point in this module, redirect it immediately back to interrogation — that drift is exactly the category boundary this module exists to hold. Framework D (Critical Awareness) is useful here to keep the model honest about its own role.
---

## Phase 2 · Execution — Three reasoning types, three distinct interrogations

### Step 58.1: Diagnostic Reasoning — Interrogate the Fork, Don't Guess the Destination

**Prompt:**

```
#VibeRounds Here is my case narrative: [paste de-identified case]. Do not
propose a diagnosis or differential. Instead, scan strictly for missed
branch points — the specific forks where a missing detail would send the
diagnostic path in a different direction. For each gap, name the exact
decision node it affects, and present it as Target / Mechanism /
Consequence of Omission. Stop after each one and require me to either
supply the missing variable or explicitly accept the risk in writing
before you raise the next.
```

### Step 58.2: The Formal Override — Breaking the Illusion of Silent Safety

**Prompt:**

```
#VibeRounds I am choosing not to resolve the branch point you just raised
about [named gap]. Do not let me pass silently. Require me to write, in my
own words, a sentence of the exact form: "I am proceeding without this
data, accepting the risk that [branch point] remains unresolved." Do not
accept a vague acknowledgement, a shrug, or "noted" as a substitute. Log
this override as a formal statement before allowing the case to move
forward, and remind me this is a legitimate judgment call being recorded,
not a failure.
```

### Step 58.3: Treatment Reasoning — Audit the Link, Don't Prescribe the Action

**Prompt:**

```
#VibeRounds I have now chosen this management plan: [state plan]. Do not
evaluate whether the plan is clinically correct, and do not check it
against dosing or guideline logic — that is not your role here. Instead,
audit only whether this plan traces explicitly back to the findings we
established during framing. For each element of the plan, ask me to state
the specific finding that justifies it. Flag, but do not resolve, any
element of the plan that does not connect to an established finding.
```

### Step 58.4: Data Completion Reasoning — Elicit One Gap at a Time, Don't Dump

**Prompt:**

```
#VibeRounds Do not ask me for "more history" or "additional data" in
general terms. Identify the single most critical missing variable required
to resolve the active decision node right now, and ask only for that one,
framed as Target / Mechanism / Consequence of Omission. If I decline to
answer, require the formal override statement from Step 58.2 before you
identify the next single most critical gap. Never present more than one
open gap to me at a time.
```

### Step 58.5: Scarcity Check — Is This Friction Still Earning Its Keep?

**Prompt:**

```
#VibeRounds Review the branch points you have raised with me so far in
this session. For each one, tell me honestly: was this a genuine fork that
would have redirected the case, or a low-stakes detail that should have
passed through quietly? Be self-critical. If you flagged something that
was not a true decision node, say so — friction that isn't scarce stops
being meaningful, and I need to know if you over-triggered.
```

---

## Phase 3 · Closure / Review — What the interrogation actually surfaced

### Step 58.6: Framing Gap vs. Reliability Gap — Naming the Boundary

**Prompt:**

```
#VibeRounds This session is closing. Summarize, in two separate lists:
(1) every framing gap you identified — missing variables that changed how
the case was stated — and how each was resolved (supplied, or formally
overridden); (2) note explicitly that you did not, and should not have,
evaluated the reliability of my downstream reasoning, dosing, or guideline
adherence — that belongs to a different tool entirely. Keep the two
categories separate; do not let them blur into a single "quality" verdict.
```

### Step 58.7: Trust-Building Debrief

**Prompt:**

```
#VibeRounds Tell me plainly: across this session, which single
interrogation caught something that would have otherwise passed silently
into the case as an unstated assumption? Explain briefly why that gap
mattered. This is the value case for tolerating the friction of this
module — I want to see it stated, not just asserted.
```

---

## Related Frameworks

- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (throughout — keeps the model from drifting back into a CDSS role)
- [Framework A — Humanistic Persona & Confidence-Building Trait Set](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) (tone calibration — interrogation should not read as hostile)
- [Module 28 — Diagnostic Time-Out](https://avi33tbtt.github.io/Prompts/Module-28-Diagnostic-Time-Out.html) (complementary — runs *after* framing is settled, pressure-tests the working diagnosis itself)
- [Module 53 — Clinical Guideline Intelligence Navigator](https://avi33tbtt.github.io/Prompts/Module-53-Clinical-Guideline-Intelligence-Navigator.html) (the "reliability stack" this module deliberately hands off to, downstream of framing)
- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) (run after this module, once the case is properly framed)

---

## Navigation

**Previous:** [← Module 57 — Clinical Cognition Deep Dive](https://avi33tbtt.github.io/Prompts/Module-CC-Clinical-Cognition-Deep-Dive.html)
**Next:** *(end of current index — add link when Module 59 is published)*

[← Back to README](https://avi33tbtt.github.io/Prompts/)

---

*Source concept: ["The Case for AI That Interrogates, Not Just Answers"](https://classworkdecjan.blogspot.com/2026/08/the-case-for-ai-that-interrogates-not.html), Avinash Kumar, classwork blog, 16 August 2026 — adapted here into VibeRounds module format. As with all VibeRounds modules, this is a learning exercise, not a validated clinical tool; every AI-generated output requires independent clinical verification.*
