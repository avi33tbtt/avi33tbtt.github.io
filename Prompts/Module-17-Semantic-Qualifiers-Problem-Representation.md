[← Back to README](README.md)

# Module 17 — Semantic Qualifiers & Problem Representation

**Objective:** Train the compression step that happens *before* differential generation or script activation — restating a raw case as a small set of abstract, paired clinical qualifiers (acute/chronic, progressive/static, focal/diffuse) — rather than letting the learner jump straight from raw findings to a diagnosis list.

**Indication:** Logically prerequisite to [Module 1](Module-01-Socratic-Clinical-Reasoning.md) and [Module 15](Module-15-Illness-Script-Acquisition.md), though numbered to follow them in this repository for cross-reference stability. Best introduced as early as possible in training — ideally before a learner has built much of a script library at all — since a poor problem representation habit, once established, silently degrades every downstream reasoning step regardless of how strong the learner's knowledge base becomes.

> [!NOTE]
> **Theoretical Basis:** This module operationalises **semantic qualifiers and problem representation** (Bordage & Lemieux, 1991, "Semantic Structures and Diagnostic Thinking of Experts and Novices," *Academic Medicine*, 66(9 Suppl), S70–S72). The empirical finding underlying it: expert clinicians, before generating a differential, restate a case using abstract paired qualifiers — transforming "the patient has had a cough for three days that is getting worse" into something like "acute, progressive, respiratory" — and this restatement (the **problem representation**) is what subsequently activates an illness script (see [Module 15](Module-15-Illness-Script-Acquisition.md)). Bordage's research found that diagnostic accuracy correlated more strongly with the *quality* of a learner's problem representation — coherent and abstracted versus sprawling and concrete — than with raw factual knowledge. A novice with a strong knowledge base but a poor (overly literal, overly long, or disorganised) problem representation will still generate a worse differential than an expert with a tight one. This module trains the compression step in isolation, deliberately separated from diagnosis generation, because conflating the two — jumping straight to "what is it" without first asking "how would I describe this abstractly" — is precisely the habit this module exists to interrupt.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Orient the AI and separate representation from diagnosis

### Step 17.0: Session Setup & Representation-First Framing

**Prompt:**
```text
#VibeRounds You are a clinical reasoning partner helping me practise
problem representation — restating a case in abstract semantic qualifiers
before I attempt any diagnosis. A semantic qualifier is a paired,
abstracted descriptor: acute vs chronic, progressive vs static vs
fluctuating, focal vs diffuse, proportionate vs disproportionate, typical
vs atypical, and similar pairs appropriate to the case. When I describe a
case to you, do not let me name a diagnosis yet. First, ask me to restate
the case in 1–2 sentences using only semantic qualifiers — no diagnosis
names, no specific findings restated verbatim. Only once I have produced a
qualifier-based summary should you let the conversation move toward a
differential. If I try to skip ahead to naming a diagnosis, redirect me
once: 'Give me the abstracted summary first — what kind of problem is
this, before what specific problem it is.' Confirm you understand before
we begin.
```

> [!NOTE]
> **Application Note:** Run once per problem-representation session. The redirect-once pattern mirrors [Module 1, Step 1.0](Module-01-Socratic-Clinical-Reasoning.md)'s answer-withholding discipline, but is applied to an earlier point in the reasoning chain — withholding the *diagnosis attempt*, not the *answer*. This is a deliberately narrower and earlier intervention than Module 1's.

---

## Phase 2 · Execution — Build, compare, and stress-test representations

### Step 17.1: Raw Case to Qualifier Summary

**Prompt:**
```text
#VibeRounds Give me a case history in full, ordinary clinical language —
the way it would actually be told by a patient or in a referral note. Ask
me to compress it into a one-sentence semantic qualifier summary before
anything else. Once I produce it, tell me: which qualifiers I chose well,
which raw detail I correctly abstracted away as noise, and which detail I
abstracted away that I actually should have kept as a qualifier in its own
right.
```

> [!NOTE]
> **Application Note:** The third part of the feedback — detail wrongly discarded — is the most instructive failure mode. Over-compression (losing a detail that should have been a qualifier, such as missing that a pain is "exertional" because it got folded into a generic "chronic pain" summary) is as damaging to downstream reasoning as under-compression (failing to abstract at all and just restating the whole history).

### Step 17.2: Representation Comparison — Strong vs. Weak

**Prompt:**
```text
#VibeRounds Give me the same case history twice — once with a strong,
tightly abstracted problem representation already modelled for me, and
once with a weak one (too literal, too long, or missing a key qualifier).
Do not tell me which is which. Ask me to identify which representation is
stronger and explain specifically why, in terms of what it would and
would not successfully narrow the differential toward.
```

> [!NOTE]
> **Application Note:** This step trains recognition before production — useful early in the module, or whenever a learner is struggling to self-generate qualifiers, since judging an existing representation is a lower-effort entry point than building one from scratch.

### Step 17.3: Same Findings, Different Representation, Different Differential

**Prompt:**
```text
#VibeRounds Give me a single set of raw clinical findings that could
honestly be represented two different ways depending on which qualifiers
are emphasised — for example, findings that could be framed as either
"acute, focal, progressive" or "subacute, diffuse, fluctuating" depending
on which details are weighted more heavily. Ask me to produce both
representations, then ask: which differential does each representation
point toward, and which one of the two representations more faithfully
matches the actual case timeline once I look again?
```

> [!NOTE]
> **Application Note:** This is the core insight-generating drill of the module — it demonstrates concretely, with a single case, that the differential is downstream of the representation rather than the raw findings, and that representation is therefore a real source of diagnostic error in its own right, independent of knowledge gaps.

### Step 17.4: Qualifier-Only Script Trigger

**Prompt:**
```text
#VibeRounds Give me a semantic qualifier summary only — no raw findings, no
history, just the abstracted qualifiers (e.g. "acute, focal, painful,
disproportionate to exam findings"). Ask me what diagnoses this
representation alone should activate, before any further detail is given.
Then reveal the raw case and ask whether the additional detail confirmed,
refined, or contradicted what the qualifiers alone suggested.
```

> [!NOTE]
> **Application Note:** This step is the direct bridge to [Module 15, Step 15.1](Module-15-Illness-Script-Acquisition.md) (Enabling-Conditions-Only Script Trigger) — run this step first if a learner is struggling with Module 15's drill, since weak qualifier formation is a common hidden cause of weak script activation that looks, on the surface, like a knowledge gap.

### Step 17.5: Representation Repair — Diagnosing a Bad Representation

**Prompt:**
```text
#VibeRounds Give me a case along with a flawed problem representation
someone might plausibly produce — one that is too literal (just restates
findings with no abstraction), too narrow (drops a clinically important
qualifier), or internally inconsistent (qualifiers that don't actually fit
the case as described). Ask me to identify what specifically is wrong
with the representation before I attempt to fix it. Then ask me to produce
a corrected version.
```

> [!NOTE]
> **Application Note:** Naming the *category* of flaw (too literal / too narrow / inconsistent) before fixing it builds a transferable diagnostic vocabulary for the learner's own future self-correction — the goal is for the learner to eventually catch their own weak representations mid-case, not just in retrospective drills.

---

## Phase 3 · Closure / Review — Consolidate the representation habit

### Step 17.6: Mid-Session Representation Checkpoint

**Prompt:**
```text
#VibeRounds Pause. Give me a formative checkpoint: (1) abstraction quality —
am I compressing appropriately or just restating findings verbatim? Score
out of 10 with one specific strength and one targeted gap; (2) qualifier
selection — am I choosing qualifiers that actually narrow the differential,
or generic ones that don't discriminate? Score out of 10, same format. End
with one sentence on which qualifier pair I use most skilfully and which
one I tend to default to inappropriately.
```

> [!NOTE]
> **Application Note:** The "default to inappropriately" framing is intentional — learners often over-rely on one familiar qualifier pair (acute/chronic is the most common) and under-use others (proportionate/disproportionate, typical/atypical) regardless of case fit. Naming the default tendency explicitly is more useful than a generic accuracy score.

### Step 17.7: Representation-to-Reasoning Handoff Debrief

**Prompt:**
```text
#VibeRounds Looking back at this session, identify any moment where a weak
or rushed problem representation led downstream to a weaker differential
than my knowledge base should have produced — in other words, a case
where I "knew enough" but represented the problem poorly enough that I
still reasoned my way to the wrong place. Name the specific representation
choice that caused the downstream miss, separate from any knowledge gap.
```

> [!NOTE]
> **Application Note:** This step exists to keep representation and knowledge errors analytically separate — without it, a representation failure tends to get misdiagnosed by the learner as a knowledge failure ("I didn't know enough about X") when the actual fix is a different one (representing the case better, not learning more facts).

### Step 17.8: Critical Awareness — Limits of Abstraction

**Prompt:**
```text
#VibeRounds Apply a critical awareness lens to problem representation
specifically: (1) What is the risk of abstracting a case too early or too
aggressively — what specific, case-defining detail could be lost in
translation to qualifiers, and in what kind of case is that most
dangerous? (2) How would over-confident early representation differ from
the premature closure risk already named for script-based reasoning? (3)
What is the single best safeguard against a confidently-stated but wrong
problem representation steering the whole rest of the case? Be honest but
constructive.
```

> [!NOTE]
> **Application Note:** This step extends [Framework D](Framework-D-Critical-Awareness-Framework.md)'s bias taxonomy to the earliest possible point of failure in the reasoning chain — a flawed problem representation is in some ways a more dangerous error than a flawed differential, because everything generated downstream of it (scripts, mechanisms, the differential itself) inherits the error silently and the learner may never trace a wrong final answer back to this first step. See also [Module 15, Step 15.4](Module-15-Illness-Script-Acquisition.md) for the related but distinct risk of script mismatch at a later stage of reasoning.

---

## Related Frameworks

- [Framework A — Humanistic Persona & Confidence-Building Trait Set](Framework-A-Humanistic-Persona.md) (persona language throughout)
- [Framework D — Critical Awareness Framework](Framework-D-Critical-Awareness-Framework.md) (Step 17.8; extends Domain 2's premature-closure risk to the representation stage)
- [Module 1 — Socratic Clinical Reasoning](Module-01-Socratic-Clinical-Reasoning.md) (this module is the logical prerequisite step; shares the forced-commitment pattern at Step 17.0)
- [Module 15 — Illness Script Acquisition](Module-15-Illness-Script-Acquisition.md) (Step 17.4 is the direct bridge into Step 15.1's script-trigger drill)
- [Module 16 — Bidirectional Basic Science ↔ Clinical Integration](Module-16-Bidirectional-Basic-Science-Clinical-Integration.md) (complementary: Module 16 trains the mechanism link once a diagnosis is reached; this module trains the compression step that occurs before a diagnosis is reached)

---

## Navigation

**Previous:** [← Module 16 — Bidirectional Basic Science ↔ Clinical Integration](Module-16-Bidirectional-Basic-Science-Clinical-Integration.md)

This is currently the final module. **Up next:** browse the [Supplementary Frameworks](README.md) or [Reference Material](README.md).

> [!NOTE]
> **Sequencing Note:** Although numbered 17 for cross-reference stability, this module is conceptually a *prerequisite* to Module 1, not a capstone. If introducing the full stack to a new learner from scratch, consider running Module 17 first, before Module 1.

[← Back to README](README.md)
