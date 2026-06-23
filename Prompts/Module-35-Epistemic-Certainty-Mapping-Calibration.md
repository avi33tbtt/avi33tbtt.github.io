# Module 35 — Epistemic Certainty Mapping & Calibration

**Objective:** Train the discipline of explicitly tracking, labelling, and communicating the certainty level of every clinical claim — distinguishing between what is known, what is inferred, what is assumed, and what is unknown, and doing so with calibrated confidence that matches the actual strength of the underlying evidence. This module addresses a root cause that runs through almost every diagnostic and management error: not knowing what you do not know, or communicating uncertainty as if it were certainty.

**Indication:** Whenever a case has reached a working diagnosis that feels settled but has not been confirmed; whenever a clinical team is acting on an assumption without having explicitly named it as such; whenever a learner or team is using confident language ("the patient has X") about a finding that is actually probabilistic ("the most likely diagnosis is X, but Y remains possible"); whenever a discharge or handover document implies more certainty than the evidence warrants; or whenever a patient or family is about to make a decision based on information whose uncertainty level has not been clearly communicated.

> [!IMPORTANT] **Calibration ≠ Hedging.** Epistemic calibration is not about communicating everything as uncertain to protect oneself from being wrong. It is about matching the language and confidence level of communication to the actual strength of the evidence — including being appropriately confident when confidence is warranted, and appropriately uncertain when it is not. Under-confidence (hedging when the evidence is clear) is as much an epistemic failure as overconfidence, and can cause as much harm.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Frame the epistemic task

### Step 25.0: Session Setup & Calibration Contract

**Prompt:**

```
#VibeRounds You are an epistemic calibration partner in the Vibe Rounds
framework. Your role is to help me explicitly map and label the certainty
levels of claims in a clinical case — distinguishing between what is
established fact, what is well-supported inference, what is working
assumption, and what is openly unknown. You will challenge me when I use
certain language for uncertain claims, and challenge me equally when I
use uncertain language for claims that are well-established and should
be communicated with confidence. This is not about making everything
ambiguous — it is about matching language to evidence. Confirm you
understand this calibration contract before we begin.
```

> [!NOTE] **Application Note:** The explicit warning against over-hedging is the module's most important setup instruction. A common learned response to awareness of uncertainty is reflexive hedging — qualifying everything — which is epistemically lazy in the opposite direction and clinically harmful when it prevents decisive action on well-supported evidence. True calibration requires distinguishing levels of certainty, not collapsing all claims into a uniform grey of "possibly."

### Step 25.1: The Certainty Spectrum — Establishing the Framework

**Prompt:**

```
#VibeRounds Before we apply it to a case, help me internalise the
certainty spectrum I will use in this session. Map out the five levels:
(1) Confirmed — directly observed, measured, or biopsied; not an
inference. (2) Well-supported — multiple consistent findings converge,
the pre-test probability was high, and the findings update strongly in
one direction. (3) Working assumption — the most likely explanation
given available data, but not yet confirmed and alternatives remain
plausible. (4) Speculative — one or two suggestive findings, but the
evidence base is thin or the finding is non-specific. (5) Unknown —
no data available, not assessed, or actively contradicted. Ask me to
give a clinical example of each level from my own experience before
we apply this to the target case.
```

> [!NOTE] **Application Note:** Requiring the learner to generate examples rather than simply receive the spectrum is a Bloom's-level Application step that prevents the framework from remaining abstract. The five-level structure is deliberately more granular than a simple "certain/uncertain" binary — most clinical errors occur in the space between "well-supported" and "working assumption," where the crucial distinction is not whether something is uncertain but whether its uncertainty has been acknowledged and communicated.

---

## Phase 2 · Execution — Map, label, and stress-test

### Step 25.2: Claim Inventory for a Target Case

**Prompt:**

```
#VibeRounds I will now describe a clinical case or case element. As I
present each claim — about the diagnosis, the aetiology, the prognosis,
the response to treatment, or the risk — stop me and ask me to assign
a certainty level to it using the five-level spectrum. Do not let me
move to the next claim until I have explicitly labelled the current one.
If I use language that implies a higher certainty level than my assigned
label justifies (e.g. saying "the patient has heart failure" when I have
labelled it a working assumption), challenge the language. If I use
language that implies lower certainty than my label justifies, challenge
that equally.
```

> [!NOTE] **Application Note:** The instruction to challenge mismatched language — in both directions — is the module's active learning mechanism. Most clinical communication errors are language-level errors: the evidence is correctly assessed internally but communicated with a certainty level that does not match that assessment. The step trains the habit of aligning internal assessment with external language, which is the practical skill the module is building.

### Step 25.3: Assumption Surfacing

**Prompt:**

```
#VibeRounds For the case I have described, help me surface the assumptions
I am making that I have not yet labelled. Ask me: (1) What am I treating
as confirmed that has not actually been directly verified — what am I
inferring from proxy findings? (2) What am I assuming about the patient's
history, adherence, baseline, or prior workup that I have not actually
confirmed from a primary source? (3) What am I assuming about the
trajectory of this condition — that it will progress, stabilise, or
respond — that is a prediction, not a fact? (4) What negative assumptions
am I making — what have I implicitly concluded is "ruled out" based on
absence of findings, when absence of evidence is not evidence of absence?
```

> [!NOTE] **Application Note:** Assumption surfacing is the epistemic equivalent of a medication reconciliation — it goes looking for hidden claims that are operating as if confirmed when they have never been explicitly labelled or verified. The final question about "absence of evidence" assumptions is particularly important: a classic and well-documented diagnostic error pattern is treating a negative test result as a ruled-out diagnosis without accounting for the test's sensitivity limitations.

### Step 25.4: Uncertainty Quantification — Probability Language Calibration

**Prompt:**

```
#VibeRounds For the working assumptions and speculative claims I have
identified, help me calibrate my probability language. For each one,
ask me: (1) If I say "likely," what probability range do I actually mean
— and is that consistent with how other clinicians use the same word?
(2) If I say "possible" or "cannot exclude," am I saying 5% or 40% —
and does that difference matter for the next decision? (3) For
probabilistic claims, is there a validated risk score or pre-test
probability estimate I should be using rather than intuitive frequency
language? Make me assign a numerical probability range to my top two
or three working claims and defend it.
```

> [!NOTE] **Application Note:** The variability of verbal probability language is well-documented in the clinical communication literature — different clinicians map "likely" to probability ranges that can differ by 30–40 percentage points — making it one of the most consistent sources of communication failure in handovers, referrals, and family conversations. Requiring a numerical probability range for key working claims is a calibration discipline, not a demand for false precision: a stated range of "I think this is 60–80% likely" is more communicatively useful than "likely" even if the boundaries are approximate.

### Step 25.5: The "Unknown Unknowns" Exercise

**Prompt:**

```
#VibeRounds Beyond what I know I do not know, help me actively search for
what I have not thought to ask about in this case — the unknown unknowns.
Ask me: (1) What would a subspecialist in the most relevant domain see
in this case that I have not asked about? (2) What historical information
about this patient am I missing that, if present, would change my
certainty levels substantially? (3) What investigation, if it came back
abnormal in a specific way, would most change the diagnosis I am working
with — and have I ordered it? (4) What is the most dangerous alternative
diagnosis I have not explicitly reasoned through and assigned a probability
to — not because I think it is likely, but because if I am wrong about it,
the harm is irreversible?
```

> [!NOTE] **Application Note:** The final question — about the most dangerous alternative diagnosis — is the module's most clinically critical step. It operationalises the concept of "diagnostic safety netting": ensuring that the most harmful-if-missed alternative has been explicitly considered and either assigned a low enough probability to justify non-pursuit, or added to the active monitoring plan. This is distinct from the most probable alternative diagnosis — it specifically targets the low-probability, high-consequence scenario that is most commonly missed because it is cognitively subordinated to the working diagnosis.

### Step 25.6: Handover & Communication Certainty Audit

**Prompt:**

```
#VibeRounds Audit the language I would use to communicate this case in a
handover, referral, or patient conversation. I will draft the
communication now — ask me to do so, then apply the certainty-level
framework to every claim in my draft. Flag: (1) Any claim communicated
as confirmed that is actually a working assumption, (2) Any claim whose
certainty level is not clear from the language used, (3) Any critical
uncertainty I have not explicitly communicated to the recipient, and
(4) Any place where I have over-hedged — communicated uncertainty about
something that is actually well-established, which may inappropriately
undermine the recipient's confidence in the management plan.
```

> [!NOTE] **Application Note:** The handover audit is the module's most practically applicable step — the most direct translation of epistemic calibration training into daily clinical behaviour. The instruction to flag over-hedging as well as under-hedging completes the calibration discipline introduced in Step 25.0: a handover that communicates everything as uncertain is as epistemically impoverished as one that communicates everything as confirmed, and creates a different but equally real set of patient safety risks.

---

## Phase 3 · Closure / Review — Consolidate and internalise

### Step 25.7: Calibration Summary & Case Epistemic Map

**Prompt:**

```
#VibeRounds Produce a structured epistemic map of the case we worked
through: a table or list in which every major clinical claim about
this patient — diagnosis, aetiology, prognosis, response to treatment,
key risk factors — is assigned its certainty level from the five-level
spectrum, with a one-sentence justification for each assignment. Flag
which claims drive the current management plan and what would need to
change — in terms of new evidence — to shift any of them to a higher or
lower certainty level. This map is a living document: it should be
re-evaluated at every significant clinical update.
```

> [!NOTE] **Application Note:** The "living document" framing is deliberate: the epistemic map is not a conclusion but a snapshot of current certainty that is explicitly expected to change as new information arrives. Treating a diagnostic assessment as a conclusion rather than a current best estimate is one of the primary cognitive mechanisms behind anchoring bias and diagnostic closure — framing it as a map that is regularly re-evaluated counters that tendency structurally.

### Step 25.8: Critical Awareness — Overconfidence, Anchoring & Calibration Failure

**Prompt:**

```
#VibeRounds Apply a critical awareness lens to this calibration session:
(1) At which points in this case did I show overconfidence — using
confirmed-level language for working-assumption-level evidence — and
what cognitive mechanism was driving it (anchoring on an early finding,
pattern-matching too quickly, social pressure from a senior's stated
diagnosis)? (2) Were there moments where I defaulted to under-confidence
— hedging to avoid commitment — rather than genuinely assessing
uncertainty? (3) Did the act of assigning probability numbers to my
claims surface any inconsistencies — places where my stated probabilities
for a differential did not sum to a coherent whole? (4) What is the
single epistemic habit — a specific language practice, a moment of
pause, a checklist item — that would most improve my calibration in
daily clinical practice?
```

> [!NOTE] **Application Note:** The probability-coherence check in question (3) is a practical calibration test derived from decision theory: if a learner assigns "likely" (70%) to their leading diagnosis and "cannot rule out" (40%) to the top three alternatives, the probability mass exceeds 100%, revealing that the stated confidences are inconsistent with each other even if each one individually sounds reasonable. Making this inconsistency visible is one of the most efficient ways to reveal overconfidence in a learner's probability reasoning.

---

## Related Frameworks

- [Framework C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) (Analyse → Evaluate throughout; metacognitive dimension of Create in Step 25.7)
- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (anchoring bias, overconfidence, and hallucination risk — all epistemic calibration issues — Step 25.8; Domain 2c)
- [Module 1 — Socratic Clinical Reasoning](https://avi33tbtt.github.io/Prompts/Module-01-Socratic-Clinical-Reasoning.html) (active reasoning through a single case; Module 25 adds the explicit certainty-labelling layer to the reasoning process developed in Module 1)
- [Module 12 — Differential Diagnosis Deepdive](https://avi33tbtt.github.io/Prompts/Module-12-Differential-Diagnosis-Deepdive.html) (Module 12 generates the differential; Module 25 calibrates the probability assignments across it)
- [Module 18 — Causal vs. Probabilistic Network Reasoning](https://avi33tbtt.github.io/Prompts/Module-18-Causal-vs-Probabilistic-Network-Reasoning.html) (the probabilistic reasoning framework in Module 18 is the complementary technical skill; Module 25 adds the metacognitive calibration layer)
- [Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html) (when frontier evidence is uncertain by definition, Module 25's calibration discipline prevents it from being communicated with false authority)

---

## Navigation

**Previous:** [← Module 24 — Poly-Crisis & Cascading Failure Simulator](./Module-24-Poly-Crisis-Cascading-Failure-Simulator.md)

**Next:** Browse the [Supplementary Frameworks](https://avi33tbtt.github.io/Prompts/) or [Reference Material](https://avi33tbtt.github.io/Prompts/).

[← Back to README](https://avi33tbtt.github.io/Prompts/)
