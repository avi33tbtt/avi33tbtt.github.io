[← Back to README](README.md)

# Module 18 — Causal vs. Probabilistic (Network) Reasoning

**Objective:** Train reasoning over *networks* of interacting findings — where a finding's diagnostic weight changes depending on what else is already known — rather than treating each finding as an independent, isolated piece of evidence pointing at a single mechanism or diagnosis.

**Indication:** Once a learner can reliably link a single mechanism to a single diagnosis ([Module 16](Module-16-Bidirectional-Basic-Science-Clinical-Integration.md)) and can activate and discriminate between individual scripts ([Module 15](Module-15-Illness-Script-Acquisition.md)), this module trains the next layer: how findings *interact* — how the presence of one piece of evidence changes the diagnostic value of another, and how causal structure (what causes what) differs from simple statistical association (what correlates with what).

> [!NOTE]
> **Theoretical Basis:** This module operationalises **causal and probabilistic network reasoning** in clinical cognition, drawing on Bayesian network models of diagnostic inference (Pearl, J., 1988, *Probabilistic Reasoning in Intelligent Systems*, Morgan Kaufmann) as applied to medicine, and on the broader distinction between *causal* and *associative* reasoning that underlies modern clinical decision-support modelling. The core insight this module trains: clinical findings are not independent pieces of evidence that simply sum toward a diagnosis. A finding's diagnostic weight is *conditional* — it changes depending on what else is already known, sometimes dramatically. Two related distinctions are drilled throughout: (1) **conditional dependence** — how a finding that would normally be weakly diagnostic becomes strongly diagnostic (or vice versa) once another finding is already established; and (2) **causal vs. correlational structure** — distinguishing findings that cause or are caused by a condition from findings that merely co-occur with it for some other (often confounded) reason. [Module 16](Module-16-Bidirectional-Basic-Science-Clinical-Integration.md) trains single mechanism-to-diagnosis *links*; this module trains reasoning about how multiple such links interact, compete, and modify one another within a single case.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Orient the AI and set the network-reasoning contract

### Step 18.0: Session Setup & Conditional Framing

**Prompt:**
```text
#VibeRounds You are a clinical reasoning partner helping me practise
network-style reasoning — how the diagnostic weight of one finding changes
depending on what else is already known, rather than treating findings as
independent. When you give me a case, reveal findings one at a time rather
than all at once. After each new finding, ask me explicitly: does this
finding change how much weight I give to a finding I already have — not
just what new diagnosis it suggests on its own? Push me to state the
direction of the shift (does this finding make an earlier one more or less
diagnostically significant) and not just add it to a growing list. Confirm
you understand before we begin.
```

> [!NOTE]
> **Application Note:** Run once per network-reasoning session. The one-finding-at-a-time delivery is deliberate and structural, not a stylistic choice — conditional reasoning cannot be drilled if all findings are presented simultaneously, because the learner never has to revisit and reweight an earlier finding in light of a later one.

---

## Phase 2 · Execution — Build, reweight, and discriminate causal structure

### Step 18.1: Sequential Finding Reweighting

**Prompt:**
```text
#VibeRounds Give me a case findings one at a time. After each new finding,
ask me two things in order: (1) on its own, what does this finding
suggest? (2) given everything I already know, has this finding changed the
diagnostic weight of any earlier finding — made it more specific, less
specific, or essentially irrelevant now? Only after I answer both, tell me
whether I reweighted correctly, and if not, explain the conditional
relationship I missed.
```

> [!NOTE]
> **Application Note:** This is the core drill of the module. Most learners answer question (1) well and skip question (2) entirely by default — explicitly forcing the second question is what distinguishes this module from ordinary sequential history-taking practice already covered in [Module 1](Module-01-Socratic-Clinical-Reasoning.md).

### Step 18.2: Causal vs. Correlational Discrimination

**Prompt:**
```text
#VibeRounds Give me two findings that commonly co-occur with a condition —
one that is genuinely on the causal pathway (it causes the condition, is
caused by it, or shares a direct mechanistic link) and one that merely
correlates with it for a separate reason (a shared risk factor, a
confounding demographic association, or coincidental co-occurrence in this
population). Do not tell me which is which. Ask me to identify which
finding is causally connected and which is merely correlated, and to state
the actual mechanism — or absence of one — for each.
```

> [!NOTE]
> **Application Note:** This step targets a specific, common reasoning error: treating any statistically associated finding as if it carries causal diagnostic weight. A learner who cannot tell the two apart will systematically misweight evidence even with a strong basic-science foundation (see [Module 16](Module-16-Bidirectional-Basic-Science-Clinical-Integration.md)) — the mechanism knowledge has to be deployed correctly, not just possessed.

### Step 18.3: Explaining Away — Competing Causes

**Prompt:**
```text
#VibeRounds Give me a case where two plausible causes could each explain
the same finding. Ask me to name both candidate causes. Then introduce one
additional piece of evidence that makes one cause significantly more
likely. Ask me: does this new evidence simply add support to the favoured
cause, or does it actively reduce how much I should still be considering
the other cause — even though the other cause hasn't been directly ruled
out? Only after I answer, explain the "explaining away" effect at work.
```

> [!NOTE]
> **Application Note:** This drills the network-reasoning phenomenon sometimes called "explaining away" — where confirming one cause of a finding can legitimately lower the probability of a separate, otherwise-unrelated cause, even without any new evidence directly against that second cause. This is counter-intuitive for most learners and is a recognised source of diagnostic error when handled wrong in either direction — over-anchoring on the favoured cause, or failing to deprioritise the competing one at all.

### Step 18.4: Network Reasoning Under a Surprising Negative

**Prompt:**
```text
#VibeRounds Give me a case where a finding I would expect to be present,
given the working diagnosis, is instead absent or negative. Ask me first:
does this absence rule out the working diagnosis, make it less likely but
not impossible, or does it not actually matter much because the finding
was never that specific in the first place? Then ask me what else in the
case network should now be reweighted as a result of this surprising
negative.
```

> [!NOTE]
> **Application Note:** A negative or absent finding is frequently under-weighted by learners relative to its actual network effect — this step trains treating absence as informative evidence that ripples through the rest of the case, not as a non-event to be set aside.

### Step 18.5: Build the Case Network

**Prompt:**
```text
#VibeRounds Based on a case I describe, help me build a simple network map:
list each major finding, and for each pair of findings that meaningfully
interact, state the direction of the relationship — does knowing A make B
more diagnostically significant, less significant, or unrelated? Keep it
to the most clinically important 4–6 findings, not an exhaustive list.
Once built, ask me: which single finding in this network, if it turned out
to be wrong or misrecorded, would do the most damage to the rest of my
reasoning?
```

> [!NOTE]
> **Application Note:** The closing question is a deliberate fragility check — identifying the single most load-bearing finding in the network surfaces where the learner's reasoning has a hidden single point of failure, which is a different and more advanced skill than simply listing findings and their individual diagnostic weights.

---

## Phase 3 · Closure / Review — Consolidate network-reasoning habits

### Step 18.6: Mid-Session Network Reasoning Checkpoint

**Prompt:**
```text
#VibeRounds Pause. Give me a formative checkpoint: (1) conditional
reweighting — am I correctly updating earlier findings as new ones arrive,
or treating each finding independently? Score out of 10 with one specific
strength and one targeted gap; (2) causal vs. correlational discrimination —
score out of 10, same format. End with one sentence on which kind of
network relationship — reweighting, explaining away, or causal
discrimination — is my strongest instinct in this session.
```

> [!NOTE]
> **Application Note:** Structural analogue of [Module 1, Step 1.4](Module-01-Socratic-Clinical-Reasoning.md), re-scoped to network-reasoning competence specifically rather than overall diagnostic logic.

### Step 18.7: Network Reasoning vs. Linear Reasoning Debrief

**Prompt:**
```text
#VibeRounds Looking back at this session, identify any moment where I
reasoned about a finding in isolation when I should have reweighted an
earlier finding because of it — a moment where linear, list-building
reasoning produced a different (and worse) conclusion than network
reasoning would have. Name the specific reweighting I missed and what it
would have changed about my differential.
```

> [!NOTE]
> **Application Note:** This is the network-reasoning analogue of [Module 15, Step 15.7](Module-15-Illness-Script-Acquisition.md) (Script vs. Stepwise debrief) — both steps audit which *mode* of reasoning was used, not just which diagnosis was reached, on the premise that the mode of error is more instructive to the learner than the outcome alone.

### Step 18.8: Critical Awareness — Limits of Network Reasoning

**Prompt:**
```text
#VibeRounds Apply a critical awareness lens to network-style reasoning
specifically: (1) What is the risk of over-fitting a network — seeing
conditional relationships between findings that are not actually there,
or are coincidental rather than mechanistic? (2) How does this differ from
ordinary confirmation bias — what makes a false network connection harder
to notice than a simple anchoring error? (3) What is the single best
safeguard against a confidently-reasoned but wrong network of findings
steering the whole case? Be honest but constructive.
```

> [!NOTE]
> **Application Note:** This step extends [Framework D](Framework-D-Critical-Awareness-Framework.md)'s bias taxonomy to a risk specific to this module — network reasoning is more powerful than linear reasoning when the relationships are real, but more dangerous when they are imagined, because a fabricated network of interlocking "evidence" can feel more rigorously reasoned than a simple wrong guess, making it harder for the learner (or a senior reviewer) to spot the error.

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](Framework-A-Humanistic-Persona.md) (persona language throughout)
- [Framework D — Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) (Step 18.8)
- [Module 15 — Illness Script Acquisition](Module-15-Illness-Script-Acquisition.md) (prerequisite single-script activation and discrimination skills)
- [Module 16 — Bidirectional Basic Science ↔ Clinical Integration](Module-16-Bidirectional-Basic-Science-Clinical-Integration.md) (prerequisite single mechanism-to-diagnosis links; this module trains how multiple such links interact)
- [Module 17 — Semantic Qualifiers & Problem Representation](Module-17-Semantic-Qualifiers-Problem-Representation.md) (complementary: Module 17 trains compressing a case into qualifiers before reasoning begins; this module trains reasoning about how multiple findings interact once the case is underway)

---

## Navigation

**Previous:** [← Module 17 — Semantic Qualifiers & Problem Representation](Module-17-Semantic-Qualifiers-Problem-Representation.md)

This is currently the final module. **Up next:** browse the [Supplementary Frameworks](README.md) or [Reference Material](README.md).

[← Back to README](README.md)
