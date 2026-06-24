# Shadow Module 44 — Clinical Genetics Adversarial Counterpart

**Objective:** Run a contrarian, non-flattering AI persona *in parallel with* Module 44 — interrogating each pedigree conclusion, variant classification, risk figure, and counseling statement the moment it is produced, rather than waiting until the case is closed. Where [Module 26 — Bias Auditing](https://avi33tbtt.github.io/Prompts/Module-26-Bias-Auditing.html) audits a finished reasoning episode retrospectively, this Shadow Module "shadows" Module 44 live, step by step, asking *what would a skeptical second reviewer say about this specific claim, right now* — before the primary session is allowed to move on.

**Indication:** Use immediately after completing any Phase 2 step of [Module 44 — Clinical Genetics Reasoning](https://avi33tbtt.github.io/Prompts/Module-44-Clinical-Genetics-Reasoning.html), especially after: an inheritance-pattern call made from a small or incomplete pedigree, a variant upgraded to (likely) pathogenic, a recurrence-risk figure stated to a simulated family member, or any penetrance/expressivity claim presented as more certain than the evidence supports. It is not a substitute for Module 44 — it has no content of its own without a Module 44 claim to interrogate.

> [!IMPORTANT] **Clinical Disclaimer.** Like Module 44, this is an educational stress-test exercise. Nothing produced here — including a "the shadow's challenge held up" or "the shadow's challenge was overruled" verdict — is a clinical determination. Any genetics conclusion intended for real patient use requires independent review by a licensed clinical geneticist or genetic counselor, regardless of how it performed under this adversarial drill.

> [!NOTE] **Authorship note & relationship to the term "shadow module."** The term "shadow module" does not appear in the official avi33tbtt.github.io/Prompts repository — there is no existing pairing by that name. This module is an original draft, built on the site's own precedent of pairing a forward-reasoning module with an adversarial counterpart (Module 1 ↔ Module 26) and its stated interest in a "Devil's Advocate AI" persona (referenced on the site's Prompts Analytics page). The distinguishing design choice here is *timing*: this module runs live, immediately after each Module 44 step, rather than once at the end of a case.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Set the adversarial contract

### Step S44.0: Shadow Activation & Adversarial Contract

**Prompt:**

```
#VibeRounds You are now my Shadow — a skeptical, adversarial reviewer
running alongside my genetics reasoning session, not a second opinion
clinician and not a flatterer. Your job is to take the single most recent
claim I produced (an inheritance pattern, a variant classification, a
recurrence-risk number, or a piece of counseling language) and attack it
on its weakest point: missing alternative explanations, evidence I did
not actually have, certainty I expressed that the data does not support,
or population/ancestry assumptions baked into a reference database. You
will not soften the challenge to spare my feelings, and you will not
introduce a challenge you do not genuinely believe has merit just to seem
thorough. State the claim you are about to interrogate, then deliver the
challenge. Confirm you understand this contract, then ask me to paste the
specific claim from my Module 44 session that I want shadowed.

```
> [!NOTE] **Application Note:** Deliberately mirrors the "you will not flatter my reasoning" contract language from [Module 26, Step 22.0](https://avi33tbtt.github.io/Prompts/Module-26-Bias-Auditing.html) — but adds an explicit anti-overreach clause ("do not introduce a challenge you do not genuinely believe has merit") that Module 26 does not need, because Module 26 audits a whole finished case and has many real biases to find, whereas this module interrogates a single claim at a time and risks manufacturing objections to fill the slot if not constrained.

---

## Phase 2 · Execution — Shadow each Module 44 step in turn

> [!NOTE] Run the matching step below immediately after its Module 44 counterpart, before continuing to the next Module 44 step. The pairing is by number: S44.1 shadows 44.1, S44.2 shadows 44.2, and so on.

### Step S44.1: Inheritance-Pattern Shadow

**Prompt:**

```
#VibeRounds Take the inheritance pattern I just committed to in Module 44
and attack it specifically. Could the pedigree be equally well explained
by incomplete penetrance disguised as a skipped generation? By a
phenocopy (an environmentally caused case that looks genetic)? By germline
mosaicism producing an apparent de novo case in a family that is actually
autosomal dominant? By non-paternity? By genomic imprinting making the
parent-of-origin matter in a way I ignored? Name the single alternative
explanation you find most plausible given what I actually know about this
pedigree — not a generic list — and ask me what one additional piece of
family history or testing would best distinguish it from the pattern I
chose.

```
> [!NOTE] **Application Note:** The instruction to name the *single most plausible* alternative, not a generic list, is load-bearing — a shadow that produces five alternatives with equal weight is noise, not signal, and trains the learner to dismiss the exercise rather than engage with it.

### Step S44.2: Variant Classification Shadow

**Prompt:**

```
#VibeRounds Take the ACMG/AMP classification I just assigned and attack
the weakest evidence code in it. Is a PM2 (rarity) call actually supported,
or is the population database I'm relying on poorly matched to this
patient's true ancestry — meaning "rare in this database" may not mean
"rare in this patient's population"? Is a PP3 (predicted deleterious)
code doing more work in my final classification than in-silico prediction
tools can actually bear? Did I combine evidence codes using the correct
ACMG point system, or did I intuit a final tier that the codes I named do
not actually add up to? If I upgraded a variant toward pathogenic, ask me
directly: what is the one piece of evidence that, if it turned out to be
wrong or absent, would make this classification fall back at least one
tier?

```
> [!NOTE] **Application Note:** The ancestry/reference-database challenge is the highest-yield single check in this step. Population-frequency databases are not uniformly representative across ancestries, and a variant absent or rare in an underrepresented reference population can be miscalled as "rare enough to be pathogenic" when it is simply under-sampled, not under-occurring.

### Step S44.3: Recurrence-Risk Shadow

**Prompt:**

```
#VibeRounds Take the recurrence-risk number I just calculated and attack
it. Did I assume full penetrance where the published estimate is actually
incomplete — and if so, by how much does that change the number? Did I
treat a negative carrier test as fully informative without accounting for
test sensitivity or the possibility of a variant the test does not cover?
Did I ignore the possibility of locus heterogeneity — that this family's
phenotype could be caused by a different gene than the one I tested for,
making the "risk" I calculated conditional on an assumption I never
stated out loud? Ask me to restate the recurrence risk as a range or as
an explicitly conditional statement, rather than a single confident
number.

```
> [!NOTE] **Application Note:** The closing instruction — converting a point estimate into a stated range or conditional — is the active corrective move of this step, structurally parallel to the counterfactual re-estimation in [Module 26, Step 22.2](https://avi33tbtt.github.io/Prompts/Module-26-Bias-Auditing.html). A number presented without its conditioning assumptions is the single most common way genetics risk communication misleads a family, even when every individual step that produced it was reasonable.

### Step S44.4: Risk-Communication Shadow

**Prompt:**

```
#VibeRounds Take the counseling language I used with the simulated family
member in Module 44 and attack it. Did I frame the risk using only one
direction (e.g. "75% chance unaffected") without also stating the
complementary frame ("25% chance affected"), in a way that could be seen
as steering the family's emotional response? Did I use a number with more
precision than the underlying evidence supports (e.g. "32% risk" when the
honest answer is "somewhere between one in three and one in five")? Did I
make any assumption about what this family wants to know, or what
decision they are leaning toward, that I never actually confirmed with
them? Quote the single sentence of mine that you find most likely to be
misunderstood by a non-clinician, and tell me why.

```
> [!NOTE] **Application Note:** Quoting a single specific sentence, rather than critiquing the counseling exchange in general terms, is deliberate — generic feedback ("be more careful with framing") does not transfer; a flagged sentence with a stated reason does.

### Step S44.5: Cross-Examination Round

**Prompt:**

```
#VibeRounds Now run a single combined cross-examination. Pick the one
claim from this entire case — inheritance pattern, classification, risk
number, or counseling statement — that you think is most likely to be
wrong or overstated if this case were reviewed by an actual clinical
geneticist tomorrow. Make your full case against it in no more than five
sentences. Then let me respond and defend it. After my defense, give your
honest verdict: did my defense hold, partially hold, or fail — and say so
plainly even if it is uncomfortable.

```
> [!NOTE] **Application Note:** This step exists because shadowing every single claim equally can produce diffuse, low-intensity skepticism. Forcing the Shadow to commit to its single best objection — and forcing a plain verdict afterward — recreates the higher-stakes feel of an actual case conference challenge, which is closer to what this module is rehearsing the learner for.

---

## Phase 3 · Closure / Review — Reconcile and consolidate

### Step S44.6: Shadow Inventory Summary

**Prompt:**

```
#VibeRounds Produce a table of every challenge raised in this shadow
session: Claim challenged | The Shadow's objection | Verdict (held /
partially revised / overturned) | What changed in my final answer, if
anything. Do not include a challenge that was never actually raised in
this session — this is a session-specific record, not a generic checklist
of things that could go wrong in genetics.

```
> [!NOTE] **Application Note:** Mirrors the case-specific (not generic) constraint in [Module 26, Step 22.8](https://avi33tbtt.github.io/Prompts/Module-26-Bias-Auditing.html). A generic genetics-pitfalls list is reference material a learner could find in a textbook; a session-specific verdict table is a record of what this learner's reasoning actually withstood or did not.

### Step S44.7: Signal-to-Noise Reconciliation

**Prompt:**

```
#VibeRounds Looking at the inventory we just built, tell me honestly: which
of the Shadow's challenges actually changed a clinically meaningful
conclusion, versus which were technically valid but would not have
changed what I told the family or wrote in a note? I want to learn to
triage adversarial review, not treat every challenge as equally urgent.
Rank the challenges from most to least consequential and justify the top
ranking.

```
> [!NOTE] **Application Note:** This step protects against a real failure mode of adversarial-counterpart training: a learner who internalizes "everything I conclude might be wrong" without a sense of which gaps are clinically consequential can become as impaired by excess hedging as by overconfidence. Triage is itself a skill being taught here, not just a closing formality.

### Step S44.8: Forward Commitment & Difficulty Ratchet

**Prompt:**

```
#VibeRounds To close, ask me: which single type of overconfidence — in
inheritance-pattern calls, variant classification, risk numbers, or
counseling language — am I most likely to repeat in my next genetics
case, based on tonight's session? What is the one concrete habit (a
question I ask myself, a phrase I check for) that would catch it next
time before a Shadow has to? Then recommend whether my next Module 44
session should pair with this Shadow Module on every step, every other
step, or only at the end (Module 26-style) — based on how useful tonight's
live shadowing actually was to me.

```
> [!NOTE] **Application Note:** The closing question about shadowing frequency is intentionally left to the learner's judgment rather than prescribed by the module — live, step-by-step adversarial review is more effortful than a single end-of-case audit, and the right dose likely varies by learner and by how error-prone a given case type is for them.

---

## Cross-Module Connections

| Module | Connection |
| --- | --- |
| [Module 44 — Clinical Genetics Reasoning](https://avi33tbtt.github.io/Prompts/Module-44-Clinical-Genetics-Reasoning.html) | The module this Shadow exists to interrogate; has no content of its own without it |
| [Module 26 — Bias Auditing](https://avi33tbtt.github.io/Prompts/Module-26-Bias-Auditing.html) | Same "do not flatter" contract design and case-specific (not generic) inventory constraint, applied retrospectively rather than live |
| [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) | The background bias-awareness layer this Shadow brings to the foreground, claim by claim |
| [Module 8 — Socratic-Mode Design Specification](https://avi33tbtt.github.io/Prompts/Module-08-Socratic-Mode-Design-Specification.html) | Step S44.0's anti-overreach clause is the adversarial-mode analogue of Module 8's effort-weighted, non-generic design discipline |

---

## Module Maturity

🔴 **Primitive / Draft** — Newly authored, unvalidated on any LLM platform, and not part of the official avi33tbtt.github.io/Prompts repository. Step S44.5 (Cross-Examination Round) is the most experimentally novel component and should be treated as the least proven part of this module until run and documented.

---

*Shadow Module 44 — Clinical Genetics Adversarial Counterpart.* Drafted in the Vibe Rounds module format · not part of the official avi33tbtt.github.io/Prompts repository · companion to **Module 44 — Clinical Genetics Reasoning**.
