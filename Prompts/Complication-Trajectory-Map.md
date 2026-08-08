# Module 58 — Complication & Trajectory Map Generator

*Vibe Rounds · Clinical Reasoning & Cognitive Frameworks · Draft, untested*

---

> [!IMPORTANT] **Clinical Disclaimer**
> This module produces **learning observations**, not a clinical decision, care plan, or monitoring order set. Every item generated requires independent verification against a toxicology/specialty reference or the treating team before it informs any action. Do not enter output from this module into a patient record, handover note, or care plan without review and endorsement by a licensed clinician.

---

## Objective

Given a diagnosis or case narrative, generate a structured, source-attributed map of the complications, syndromes, and risks that could unfold ahead — organized by timing and by physiological system — so a learner or clinician can pre-load vigilance rather than being surprised by a late, treatment-related, or system-specific complication.

This module does **not** produce a deterministic, checkable-against-ground-truth output the way a guideline or interaction check does (see Modules 13, 53). Its reliability comes instead from a fixed output taxonomy, mandatory mechanism justification, and mandatory source-tagging of every item — the goal is *grounded synthesis*, not *free-generation dressed as fact*.

## Indication

- After a diagnosis is reached (working or confirmed) and the immediate crisis is stabilized — to build a forward-looking risk map for the days/weeks ahead.
- Before signing out or handing over a case, to check the receiving team has a shared picture of what to watch for.
- As a teaching tool: given a case, have a learner build their own map first, then compare against the module's output and identify what they missed and why.
- Explicitly **not** indicated as a real-time monitoring trigger or an autonomous background check — this is a one-off synthesis exercise run by a person on a specific case, not a recurring unattended process.

---

## Lifecycle

**Initiation → Execution → Closure/Review**

---

### Step 58.0 — Initiation: Structure the input

Before generating anything, the case must be entered in a fixed format — this alone removes most of the variance in what the module surfaces.

**Prompt:**
```
I am going to give you a diagnosis/case for a complication and trajectory map.
Case:
- Diagnosis (working or confirmed): [X]
- Key exposure/timeline so far: [what happened, when]
- Interventions already given/avoided: [drugs, doses, notable choices — e.g. "succinylcholine avoided for intubation"]
- Current status: [stable/unstable, on what support]

Do not generate the map yet. First, confirm you have enough information, or ask
me for the minimum additional detail you need (e.g. renal function, airway
management specifics) before you can produce a mechanism-justified map.
```

**Application Note:** If the model asks a clarifying question here, answer it before moving to Step 58.1. A map built on an underspecified case (e.g. "poisoning, unknown agent, unknown time since exposure") will default toward generic literature rather than case-specific trajectory.

---

### Step 58.1 — Execution: Generate the map

**Prompt:**
```
Using the case above, generate a complication/trajectory map using EXACTLY this taxonomy — do not add or rename categories:

## Timing-based
- Immediate (0–24h): ...
- Early (24–96h): ...
- Delayed (days–weeks): ...
- Late (weeks–months, if applicable): ...

## System-based
- Neurological: ...
- Cardiovascular: ...
- Respiratory: ...
- Renal/metabolic: ...
- Infectious/secondary: ...
- Psychiatric/long-term: ...
(omit any system with nothing relevant — do not pad)

## Treatment-related (iatrogenic)
- Complications caused by the antidote/intervention itself, or that would
  have occurred under a different (avoided) intervention choice: ...

## Conditional branches
- If [specific treatment/finding] → watch for [X]
- If [specific treatment/finding was avoided] → this branch does not apply

Rules for every single item:
1. State the mechanism in ≤1 line (e.g. "irreversible enzyme binding," not
   just "aging").
2. Tag every item as either [from case] — directly grounded in what was
   given above — or [general literature] — standard knowledge for this
   diagnosis not confirmed against this specific case.
3. For [general literature] items, search for and cite a source rather than
   relying on memory alone if you have that capability. If you cannot
   verify a claim, label it [unverified] instead of stating it as fact.
4. Do not include anything you cannot mechanistically justify.
5. Do not repeat the same complication under two categories — cross-reference
   instead (e.g. "see Respiratory — Immediate").
```

**Validated Env.:** Not yet tested on a live platform against ground truth. Treat as case-report/expert-opinion tier per the repository's stated evidence base until validated.

**Application Note:** If the case is high-stakes/rare (e.g. an uncommon toxin, an unusual genetic condition), explicitly ask the model to flag its own confidence as low and to recommend the specific type of specialist/reference to consult — do not accept a confidently flat list for an area where training data is likely thin.

---

### Step 58.2 — Closure/Review: Audit the map before use

**Prompt:**
```
Before I use this map:
1. List every item tagged [general literature] separately from every item
   tagged [from case] — I want to review the two groups independently.
2. Of the [general literature] items, which ones did you search/cite a
   source for, and which are from memory only?
3. Identify the single complication on this map that, if missed, would be
   most dangerous to the patient — and why detecting it early matters more
   than the others.
4. Name what this map does NOT cover (e.g. complications outside the
   systems/timing categories used, rare presentations, population-specific
   risk factors not in the case).
```

**Application Note:** Step 58.2 is not optional. This is the step that turns a plausible-sounding list into something a clinician can actually weigh — separating searched claims from memory claims, and forcing the module to name its own blind spots, is what keeps this a *reasoning aid* rather than a source of quiet overconfidence.

---

## Worked micro-example (organophosphate poisoning, abbreviated)

```
## Timing-based
- Early (24–96h): Intermediate syndrome — sudden return of respiratory,
  neck-flexor, and proximal-limb weakness from prolonged AChE inhibition
  at the neuromuscular junction. [general literature — search: "intermediate
  syndrome organophosphate poisoning"]
- Delayed (1–3 weeks): OPIDN — progressive weakness/sensory loss from
  neuropathy target esterase inhibition, distinct mechanism from acute
  cholinergic crisis. [general literature]

## Treatment-related
- "Aging" — irreversible phosphorylation of AChE beyond which pralidoxime
  cannot reactivate the enzyme; time-critical. [general literature]
- Prolonged paralysis — risk specifically IF succinylcholine used for
  intubation (avoided in this case, per input). [from case + general
  literature — conditional branch does not apply here]

## Conditional branches
- If succinylcholine avoided (as in this case) → prolonged paralysis risk
  from that specific cause does not apply.
- If atropine/pralidoxime infusion titrated down too early → recrudescence
  of secretions/wheeze/respiratory distress. [general literature]
```

---

## Category

Clinical Reasoning & Cognitive Frameworks (companion to Modules 1, 12, 28, 30, 50)

## Related modules

- **Module 42 — Clinical Pre-Mortem**: run before this one, to stress-test the current plan; this module runs after, to map what could unfold regardless of plan.
- **Module 53 — Clinical Guideline Intelligence Navigator**: for checking a specific intervention against a guideline threshold — deterministic, unlike this module.
- **Module 35 — Epistemic Certainty Mapping & Calibration**: pairs well with Step 58.2 for a deeper confidence audit across the whole map.

---

*Draft module — not yet peer-reviewed, not yet validated against ground truth. Evidence base for this module's own design: case-report/expert-opinion tier. Treat every generated map as a learning exercise requiring specialist/reference verification, not a monitoring order set.*
