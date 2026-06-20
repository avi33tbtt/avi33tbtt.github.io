# VibeRounds Tagging: What the Process Is, and What It's Worth

## The process, briefly

A real case history (4 months of symptoms → first admission → planned spinal surgery) was tagged against a fixed library of VibeRounds prompts — Socratic questioning, Devil's Advocate stress-testing, illness-script triggering, problem-representation compression, causal/network reasoning, resource-ceiling reasoning, and others. At each point in the case timeline, the relevant prompts were run, each producing its own independent output. Those outputs were then screened, and the ones where multiple prompts converged on the same finding from different angles were pulled out as "Top Insights."

So there are two layers: a **breadth layer** (many structured prompts, each forcing a different lens onto the same case at the same point in time) and a **synthesis layer** (a pass that looks across all those outputs for agreement, not just for the single best answer).

---

## 1) Why use fixed prompts instead of free-flow analysis?

Free-flow analysis — "here's the case, tell me what you think" — gives you one reasoning path per run. The model picks a frame (usually the most statistically dominant one) and reasons inside it. That's fast and often right, but it has one structural weakness: **you only find out what one lens shows you.**

The prompt library exists to force multiple lenses on purpose, each with a different failure mode it's designed to catch:

- **17.1 (Qualifier Summary)** forces compression *before* diagnosis — restating the case as abstract pairs (acute/chronic, focal/diffuse) so the model can't jump straight to a diagnosis label and smuggle in assumptions along the way.
- **15.1 (Script Trigger)** checks whether the case truly fits the "obvious" illness script, or only fits it partially — surfacing the features sitting outside the activated script instead of ignoring them.
- **18.1 (Sequential Reweighting)** asks how a single new finding (fever) should shift the probability of the leading hypothesis — a different operation than listing differentials, closer to how the weight of evidence actually moves during a workup.
- **12.1 (Working Diagnosis Attack)** is adversarial by design — it is instructed not to soften the case for the working diagnosis, only to attack it, before any alternative is offered.
- **12.2 (Alternative Differential)** then ranks alternatives two ways at once (most dangerous first, most likely separately) — forcing two risk calculi to be held simultaneously, mirroring real triage logic rather than a single ranked list.

In a free-flow run, the model would likely produce *one* of these views — probably the script-matching one, since "degenerative cervical spine" is the path-of-least-resistance read. The structured library exists specifically to stop the analysis from stopping there. Each prompt is a forced detour around a specific blind spot (anchoring, premature closure, over-compression, under-weighting a non-fitting symptom) that free-flow reasoning has no built-in reason to avoid.

The trade-off is real, though: this is slower, more effortful, and most of the individual outputs at any given point are redundant or low-yield. The method only pays off if something downstream uses the redundancy — which is exactly what the Top Insights layer is for.

---

## 2) What do the Top Insights actually hold — and is "what not to miss, where to look" a fair description?

Yes, that is close to exactly what they are, with one refinement: it isn't *one* prompt flagging something — it's the **rate of independent convergence** across structurally different prompts.

The Top Insight document for Points 1–2 is explicit about this: five prompts — compression (17.1), network-reweighting (18.1), script-matching (15.1), adversarial attack (12.1), and differential-ranking (12.2/15.4) — each arrived at the same underlying gap (fever/vomiting/breathlessness sitting unreconciled outside the "spinal" frame) **by different routes**. None of them were told to look for that gap; it emerged from each prompt doing its own job.

That convergence is the actual product. A single prompt flagging fever as relevant is a hypothesis. Five differently-built prompts independently flagging the same fever, for five different structural reasons, is much closer to a signal — the kind of thing that's worth a clinician's attention *before* the next test result comes in, not after.

So functionally, yes: the Top Insight is a fast-read triage layer — "here is the one thing that kept resurfacing across every method we tried, look at this first." It compresses N outputs into the handful of findings with cross-method support, which is a more disciplined filter than "pick the most interesting-sounding line."

What it is *not*: proof, a diagnosis, or a substitute for the underlying workup. The convergence tells you where the disagreement-with-the-leading-frame is concentrated; it doesn't resolve it. In this case, the value was demonstrated retrospectively — the systemic/infective thread flagged at Point 1 is exactly what derailed the surgical plan at Point 3 (low counts, gastric ulcer "due to infection"). That's a strong validation in this one case, but it's an N-of-1 confirmation, not a guarantee the convergence signal will always be load-bearing.

---

## 3) How close is this to an expert clinician's reasoning, and how does it compare to a clinician's own self-generated questions?

**Where it tracks expert reasoning closely:**

The module library isn't arbitrary — several modules are direct implementations of named cognitive-science findings about expert clinical reasoning:

- Module 17 operationalizes Bordage & Lemieux's finding that diagnostic accuracy tracks the *quality of problem representation* (the compression into semantic qualifiers) more than raw knowledge — and that experts do this compression step automatically, before script activation.
- Module 15 (illness scripts) and Module 20 (Recognition-Primed Decision-making, after Klein) model System-1 pattern recognition under uncertainty and time pressure — the fast read experienced clinicians do that novices can't.
- Module 12 (Devil's Advocate) operationalizes formal red-teaming against anchoring and premature closure — the known failure mode of expert pattern-matching when it goes wrong.
- Module 18 (causal/network reasoning) models the slower, deliberative System-2 layer that's supposed to sit alongside System-1 recognition, not replace it.

Running all of these against one case at one timepoint is, in effect, simulating a clinician who deliberately cycles through compression, pattern-match, adversarial doubt, and probabilistic reweighting on the same case — rather than just doing whichever one comes naturally. That's a real structural echo of how expert reasoning is taught to be checked (and how it's audited after the fact when something is missed).

**Where it doesn't replicate an expert's brain:**

An expert clinician doesn't run all twenty modules on every case. They run **one or two, fast, and know which ones to skip** — because their compressed pattern library already tells them where the case is ambiguous and where it isn't. That selective triggering, not the exhaustive multi-lens sweep, is what expertise actually looks like in real time. The framework substitutes breadth (run everything, then filter) for the judgment an expert uses to *not* need to run everything.

This is also where the comparison to a clinician's own self-generated questions matters most. A clinician's own questions will usually be:

- **More precise**, because they're conditioned on tacit context the prompts can't see — the patient's affect, what the referral letter left unsaid, what similar cases in their own experience looked like.
- **Faster to converge**, because expert pattern recognition prunes the search space immediately instead of exploring it exhaustively.
- **But narrower** — exactly because that pruning is fast, it's also where anchoring happens. The expert's own first question is a good question, but it's *one* question, generated from inside one frame.

So the honest comparison is: this framework is not a substitute for an expert's self-generated questions, and it isn't trying to out-precise them. Its value is as an **external, structurally-forced second pass** — closer to what a second clinician's parallel read, or a formal M&M case review, is for. It's most useful exactly where an expert is most likely to be wrong: not on the easy 80% of the case the pattern-match nails immediately, but on the part sitting outside the activated script, which by definition the expert's own fast question is least likely to ask about unprompted.

**The realistic framing**, then, is: precise self-generated clinical questions remain the better *first* tool — faster, more targeted, more context-aware. This framework is a better *audit* tool — slower, broader, and specifically built to catch what a single good question, asked from inside one frame, structurally cannot.

---

## Summary

| Aspect | What the process delivers |
|---|---|
| Why structured prompts over free-flow | Forces multiple independent reasoning lenses (compression, pattern-match, adversarial attack, probabilistic reweighting) that free-flow analysis has no inherent reason to all visit |
| What Top Insights hold | A convergence filter — findings flagged independently by structurally different methods, surfaced as "look here first," not a diagnosis |
| How close to expert reasoning | Implements named components of real expert cognition (problem representation, illness scripts, RPD, red-teaming) but as an exhaustive sweep, not the selective fast triggering real expertise uses |
| Vs. a clinician's own questions | Self-generated questions are faster and more precise but narrower (one frame); this framework is slower and broader, built to catch what sits outside whichever frame a clinician's first question came from |
