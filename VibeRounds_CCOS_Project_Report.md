# Project Evaluation Report: VibeRounds & the Clinical Cognition Operating System (CCOS)

**Prepared for:** Review of the VibeRounds ecosystem
**Sites evaluated:**
1. https://avi33tbtt.github.io — Core philosophy, Socratic Learning, Guided Discovery, CCOS Builder
2. https://avi33tbtt.github.io/cc/ — Clinical Cognition, From First Principles (13-lesson course)
3. https://avi33tbtt.github.io/ebm/ — Evidence-Based Medicine, From First Principles (9-lesson course)
4. https://avi33tbtt.github.io/Prompts/ — Prompt Modules directory (57 modules, 4 frameworks)
**Creator:** Dr. Avinash Kumar Gupta, first published June 2026
**Report date:** July 18, 2026
**Perspective:** Expert clinical educator + AI/systems reviewer

---

## Executive Summary

VibeRounds is a self-published, Creative-Commons-licensed educational framework that repositions large language models as **Socratic attendings** rather than answer engines. Instead of a single prompt or app, it is architected as a **five-layer "Learning Stack"**: a philosophy layer, a pedagogical-framework layer, a 57-module prompt library, two structured courses (Clinical Cognition and Evidence-Based Medicine), and an emerging "Clinical Cognition Operating System" (CCOS) that treats modules as composable, sequenceable pipelines rather than one-off prompts.

The project's core insight — that the biggest risk of AI in medical education is **premature cognitive offloading**, and that this can be engineered around with explicit answer-withholding constraints — is pedagogically well-grounded and mapped deliberately onto Stage 3 (Socratic) and Stage 4 (Guided Discovery) of the classic instructor-centered → learner-centered teaching spectrum. The project is real, extensively documented (57 modules, 13+9 lessons, a dozen-plus preprints on ResearchGate, several worked demos), but it is **self-graded and largely unvalidated**: maturity is explicitly self-labeled as "High" for education, "Medium" for research workflow, and "Early/concept" for bedside decision support and EMR/FHIR integration.

---

## 1. Site 1 — avi33tbtt.github.io: Philosophy, Socratic Learning, Guided Discovery, CCOS Builder

### 1.A Socratic Learning
The site anchors itself explicitly at **Stage 3 ("Socratic — The Stress Test")** of a five-stage pedagogical spectrum (Lecture → Dyadic → Socratic → Guided Discovery → Research) borrowed from mainstream educational theory. The core rule — *"AI that questions, not AI that answers"* — is operationalized through ten explicit constraints, including:

- **Forced commitment first** — no hint unlocks until the learner offers an initial answer.
- **The 10-second rule** — a deliberate pause before any guidance is given.
- **Tiered hints** — framework → narrowed direction → partial answer, never the full answer up front.
- **Reasoning grading, not just correctness** — evaluating logic and stated uncertainty, not only the final answer.
- **Answer-withholding policy** — full answers released only after a genuine attempt, or explicit learner surrender.

**Strength:** This directly targets *automation bias* — the well-documented tendency for learners to accept AI output uncritically — by mechanically preventing the AI from shortcutting the learner's own reasoning process.

**Risk:** Socratic AI can degenerate into "guess what the model is thinking." The three-phase lifecycle (Initiation → Execution → Closure) and effort-weighted assistance rule are the stated defenses, but their effectiveness depends entirely on how tightly a given LLM adheres to a persona prompt across a long session — see the "prompt drift" issue in Section 4 below.

### 1.B Guided Discovery
Framed as **Stage 4** of the same spectrum, this component uses a "scaffolded environment" where parameters are set so a learner is *likely* — not guaranteed — to reach the correct conclusion. The site describes it as *"an MRI for clinical thinking"*: instead of asking "what is the diagnosis," it asks "how does clinical thinking move from uncertainty to understanding."

Three building blocks are defined:
- **Modules** — single cognitive lenses (e.g., Observation, Bias Detection).
- **Agents** — orchestrated multi-framework runs (e.g., the Guided Discovery Agent).
- **Pipelines** — ordered chains of modules/agents (worked example: `1 → 12 → 9 → 21 → 35`).

A six-stage "Discovery Journey" is specified: Observation → Pattern Recognition → Hypothesis Generation → Decision Architecture → Bias Detection → Metacognitive Reflection.

**Strength:** Tiered hints map cleanly onto Vygotsky's Zone of Proximal Development — the learner struggles within a bounded, supported space rather than either being told the answer or being left with no scaffolding at all.

**Consideration:** For guided discovery to build durable reasoning, cases need realistic ambiguity — irrelevant findings, imperfect histories. The published worked examples run against real, pre-existing de-identified case reports (e.g., a blogspot-hosted case of "42F with severe regular edema") rather than synthetic vignettes, which is a reasonable way to guarantee natural noise, though it also means case quality is dependent on the source material's completeness.

### 1.C CCOS Builder — Running in Analytics Mode (Case + Module/Pipeline)
The site includes an interactive **Module Order Builder**: a "Requisition"-style form where a learner selects modules in the order they intend to run them against a case, and the tool returns a plain-language read on the likely "analytic yield" of that specific chain, plus a copy-ready prompt referencing the module directory.

Three worked usage patterns are demonstrated with linked Claude.ai transcripts:
1. **Analytics Mode** — a single module (e.g., Module 42, "Clinical Pre-Mortem") run against one case.
2. **Targeted Clinical Pipeline** — multiple modules chained in sequence (`1 → 12 → 9 → 21 → 35`).
3. **Full Guided Discovery Agent** — the complete orchestrated agent run in one pass.

This is described as the architectural evolution from **Gen I (flat prompt library)** through **Gen V — CCOS**, a "full clinical cognition operating system" organized into six cognitive layers: clinical reasoning, workflow engine, metacognitive monitoring, an "epistemic trust layer" (hallucination calibration, prioritized claim verification, a conservative→maximal decision spectrum, and multi-domain confidence calibration), decision architecture, and longitudinal learning/documentation.

**Strength:** Separating *diagnosis generation* from *analysis of the reasoning trace* is structurally sound — it creates something like a cognitive audit trail that can, in principle, be stress-tested against population-level analytics (Module 6, "Analytics at Scale") and engineering-style Failure Mode and Effects Analysis (Module 7, "Safety & Systems Thinking").

**Risk:** The site itself labels **bedside clinical decision support** — i.e., the domain where FHIR/EMR integration and a "multimodal AI layer" would live — as **"Early stage… pre-implementation."** Until a structured data layer exists, chained pipelines depend on the underlying LLM outputting clean, consistently-structured text at the end of each module so the next module receives a usable input; there is currently no evidence of enforced schema validation between steps, only prompt-level instruction.

---

## 2. Site 4 — avi33tbtt.github.io/Prompts/: The Module Library and Frameworks

*(Presented out of numeric order here because it is the tooling layer that the CCOS Builder above depends on.)*

The Prompts site hosts **57 reasoning modules**, each following the same Initiation → Execution → Closure lifecycle, organized under **four cross-cutting pedagogical frameworks**:

| Framework | Function |
|---|---|
| **A — Humanistic Persona & Confidence-Building** | Six traits for building clinical confidence alongside competence; key rule is *specific affirmation before challenge* — naming the exact reasoning move, not generic praise, since challenge without affirmation triggers defensive cognition. |
| **B — Fink's Taxonomy (FLINK)** | Six non-hierarchical learning dimensions (foundational knowledge, application, integration, human dimension, caring, learning-how-to-learn) applied at closure to produce durable, transferable insight. |
| **C — Bloom's Revised Taxonomy** | Six cognitive levels (Remember → Create) mapped to clinical reasoning tasks, used to calibrate difficulty between sessions. |
| **D — Critical Awareness Framework** | A standing closing prompt naming the biases the framework *itself* is susceptible to — automation bias, anchoring, hallucination risk, rare-diagnosis overweighting — the protocol auditing itself by design. |

Modules are grouped by audience entry point (medical students, family caregivers/advocates, practicing clinicians, educators/prompt authors) and there is a **Module 0 "Cold-Start Orientation"** that routes new users before any clinical content is entered.

**Strength — self-auditing design:** Framework D is a notable design choice: rather than simply claiming safety, the stack builds in a recurring, structural prompt that forces the AI (and by extension the learner) to interrogate the framework's own failure modes at the end of every session. This is a more defensible posture than most prompt libraries, which rarely audit themselves.

**Strength — layered rather than flat:** The explicit separation of "what a prompt teaches" (frameworks) from "when/how it fires" (module lifecycle) from "what topic it covers" (the 57 modules) is a genuinely more maintainable architecture than a single mega-prompt, and aligns with how modern prompting practice (task decomposition, single-objective steps) tends to outperform monolithic instructions.

**Risk — coverage axis:** The library's stated coverage is organized around *learner moments* (single-case depth, ward-floor practicality, formal research, ongoing literature engagement) rather than clinical breadth (organ systems, specialties). This is a reasonable design decision but means completeness should be judged by moment-type coverage, not by how many diseases or specialties are represented.

**Risk — maturity is uneven by the project's own admission:** The Prompts site states directly that "some components are mature and ready for self-directed use; others are explicitly experimental," and flags gaps rather than glossing over them.

---

## 3. Site 2 — avi33tbtt.github.io/cc/: Clinical Cognition, From First Principles

A 13-lesson course (plus 5 elective modules) built from the 57-module library, explicitly dual-tracked for clinicians and technical readers. Structure:

- **Lessons 1–9 (core loop):** What is clinical cognition → the Socratic loop's constraint set → building a differential (four stages, from raw findings to a stress-tested, probability-weighted differential, ending in a self-critique pass) → bias & failure modes (commitment point, load-bearing findings, signal vs. noise, handoff distortion, retrospective audit) → patient advocacy documentation → analytics at scale (single-record vs. population reasoning) → safety & systems thinking (FMEA applied to clinical process) → evidence & calibration (multi-domain, shadow-reviewed confidence reporting) → a full case run end-to-end using the Master Protocol.
- **Lessons 10–13 (extension):** reasoning beyond diagnosis (meta-cognition, multi-axis confidence), healthcare systems & operations (multi-agent, organization-level workflows, structured handoffs), precision medicine (applicability checks, conflicting-evidence resolution, patient preference weighting), and clinical wisdom/mastery (capturing tacit knowledge, telling real expertise apart from a shortcut that merely resembles it, and periodically "uncompressing" one's own intuition to check it for drift).

**Pedagogical assessment:**
- The move from **pattern recognition** (what a diagnosis looks like) to **making the reasoning process itself visible and auditable** is the correct diagnosis of the actual bottleneck in clinical training, and is more ambitious than most digital case-based learning tools, which optimize for content recall.
- Applying engineering rigor (FMEA, borrowed from reliability engineering) to clinical reasoning is a genuinely useful cross-disciplinary transplant — it reframes diagnostic error as a systems-reliability problem rather than a purely individual cognitive failure.
- The explicit complementarity with the EBM course — internal validity ("did I synthesize the data correctly?") vs. external validity ("can I trust the data?") — is a coherent way to avoid the common failure of EBM training feeling disconnected from actual ward reasoning.
- Lesson 13's instruction to periodically "uncompress" one's expert intuition is a mature, non-obvious teaching point: expert shortcuts are efficient precisely because they are compressed, and compression is also how bias hides.

**Caveat for users:** As the course site itself states, its frameworks are cognitive tools, not sources of clinical truth — all clinical content still needs verification against current, gold-standard guidelines, and the course is explicitly a rehearsal environment, not a reference text to be read passively.

---

## 4. Site 3 — avi33tbtt.github.io/ebm/: Evidence-Based Medicine, From First Principles

A 9-lesson course teaching critical appraisal "the way a clinician actually thinks — starting with a patient, not a p-value." Lessons run: the patient at the centre (history, exam, SOAP notes, spotting misinformation) → forming a PICO question and building a real search → appraising an RCT by hand (ARR, RRR, NNT, confidence intervals) → systematic reviews and meta-analysis (forest plots, I² heterogeneity, funnel plots, AMSTAR-2) → diagnostic test studies (sensitivity/specificity, PPV/NPV, likelihood ratios, ROC, prevalence effects) → prognosis and harm studies (cohort/case-control design, hazard ratios, confounding) → clinical practice guidelines (GRADE, spotting industry influence) → a statistics deep-dive for skeptics (p-values vs. confidence intervals, p-hacking, surrogate endpoints) → a single full patient case tying the whole course together.

Supplementary resources include a **"Techie Summary"** that translates EBM concepts into software-engineering language (PICO as a search schema, RCTs as A/B tests, likelihood ratios as Bayesian updates, GRADE as test-coverage-vs-ship-decision), an **LLM prompt library** for using an AI as a research assistant at each appraisal stage, and a curated set of **"Eight Moments Where the Numbers Surprise You."**

**Pedagogical assessment:**
- Starting with the patient rather than the statistic is exactly the sequencing that keeps EBM training from feeling abstract, and the course structure (each lesson's homework feeding the next) enforces active practice rather than passive reading.
- The Techie Summary is a genuinely effective cross-disciplinary bridge — translating clinical-trial concepts into a vocabulary a technical (non-medical) reader already has is a well-chosen device for the stated "for techies" audience.
- The single hard operational rule for LLM use — **"the LLM drafts, you verify every number and citation against the source"** — is the correct safeguard against a well-known failure mode: hallucinated statistics or citations being taken at face value in evidence appraisal.
- The course's own **surrogate-endpoint teaching point** (Lesson 8) targets a specific, common technical-audience error: mistaking a statistically significant change in a surrogate marker (e.g., a lab value) for a change in a patient-oriented outcome (e.g., mortality). This is one of the more valuable single lessons in the whole ecosystem, since it's a mistake technical teams handling clinical data make routinely.

---

## 5. Cross-Cutting Architectural Assessment (AI/Systems Perspective)

### 5.1 Task decomposition over mega-prompts
Breaking clinical reasoning into 57 single-objective modules rather than one large prompt is consistent with how modern prompting practice avoids the "lost in the middle" problem, where instructions buried deep in a long context window get under-attended to by a transformer's attention mechanism. This is effectively a manual, human-in-the-loop analogue of chain-of-thought/tree-of-thought prompting.

### 5.2 The core vulnerability: prompt drift across a session
If a learner runs several modules sequentially inside a single chat thread, the growing context window increases the risk that the model's attention shifts toward more recent turns (recency bias) and gradually drifts away from the strict Socratic constraints set at the start of the session — reverting toward the model's default, more "helpful," answer-first behavior. The published defenses (module-level constraint restatement, the Critical Awareness Framework's closing audit) mitigate but do not structurally eliminate this risk, since they still rely on the underlying model continuing to honor a natural-language instruction rather than an enforced state machine.

### 5.3 Overriding RLHF-driven helpfulness bias
Instructing a model *not* to simply answer runs against the grain of typical RLHF-tuned behavior, which optimizes toward immediately resolving the user's request. The tiered-hint and answer-withholding constraints function as a persona-level override of that default. This is a real and reasonably well-recognized alignment challenge, and the project's response — explicit persona framing plus procedural gating (forced commitment, minimum-effort threshold, delayed rescue) — is a sound practical mitigation, though its reliability will vary by which underlying model is used to run a given persona prompt.

### 5.4 Data-layer maturity gap
The transition from qualitative Socratic dialogue to the "analytics mode" pipeline (chaining modules programmatically) requires each module's output to be clean, structured, and machine-parseable so the next module in a chain receives usable input. The project's own maturity map places FHIR/EMR integration at "Early/Concept" stage, meaning today's pipelines are still running on free-text LLM output passed between steps rather than validated structured data — a source of potential output drift as chains lengthen.

---

## 6. Consolidated Strengths

1. Correctly identifies premature cognitive offloading / automation bias as the central risk of AI in clinical education, and engineers concrete countermeasures rather than treating it as a vague concern.
2. Deliberate, theory-grounded placement on a recognized pedagogical spectrum (Socratic = Stage 3, Guided Discovery = Stage 4), rather than an ad hoc claim to be "Socratic."
3. Layered architecture (frameworks → modules → lifecycle → courses → CCOS pipelines) is more maintainable and auditable than a flat prompt collection.
4. A framework that explicitly audits its own failure modes (Framework D) is an uncommon and valuable design choice.
5. The EBM course's "LLM drafts, human verifies" rule and its emphasis on surrogate endpoints directly target two of the most common and consequential errors technical, non-clinical teams make with medical data.
6. Extensive self-documentation: 57 modules, 22 lessons across two courses, multiple demos with linked AI transcripts, and a growing set of preprints describing the architecture's own evolution.

## 7. Consolidated Risks / Open Questions

1. **Unvalidated at scale.** Nearly all supporting evidence (worked demos, "pilot protocol," transcripts) is small-N and self-run; the project's own maturity map rates most of it "Medium" or "Early" maturity outside the education domain.
2. **Prompt drift** in multi-module chat sessions is a structural risk that natural-language constraints alone cannot fully close.
3. **No enforced data schema** between chained modules yet — pipelines depend on the underlying LLM's discipline in following formatting instructions, not on validated structured output.
4. **Self-graded rigor.** Claims of "hallucination-aware," "epistemic calibration," and similar trust-layer features are architectural design goals described in the site's own materials; independent verification of how reliably they function in practice was not available in the sites reviewed.
5. **Explicitly not a clinical tool.** Both the main site and the CCOS Builder repeatedly and correctly disclaim clinical use — this is a learning/rehearsal system for de-identified or synthetic cases, not decision support, and every generated output is stated to require independent clinical verification.

---

## 8. Overall Verdict

VibeRounds is a structurally ambitious, well-documented, and pedagogically literate attempt to formalize what an expert clinical teacher does implicitly — question rather than tell — into a reusable, prompt-based system, and then to extend that system from a single Socratic conversation into a composable "operating system" for clinical reasoning. Its strongest layer is the education/Socratic-questioning domain, which the project itself rates as its most mature. Its most speculative layer is the analytics/pipeline "CCOS" vision, which is architecturally coherent on paper but still dependent on unvalidated data-structuring assumptions and on the underlying LLM's willingness to sustain a persona across a long session. As a self-directed learning stack for clinicians, medical students, and technical teams working alongside clinical data, it is a genuinely differentiated resource; as a claim to be an "operating system," it is currently better described as an actively-evolving architecture with a working prompt library at its center.

---

*Report compiled from direct review of the four cited sites as of July 18, 2026. All source material is Creative Commons CC BY 4.0, attributed to Dr. Avinash Kumar Gupta, June 2026.*
