[← Back to README](README.md)

# Supplementary Framework D — Vibe Rounds Critical Awareness Framework

### Biases, Risks & Critiques

**Purpose:** To build in systematic critical thinking about the limitations of AI-assisted clinical reasoning, at both individual case and registry levels. This framework should be applied at the Closure phase of any module where clinical conclusions are being drawn.

> [!NOTE]
> **On terminology:** Where this framework or other Vibe Rounds modules reference "hallucination calibration," "claim verification," "trust layer," or "confidence calibration," these are prompt-level instructions that shape how the AI expresses and communicates uncertainty — not a verification, fact-checking, or error-detection system. No claim is checked against an external source unless a module explicitly performs a lookup or citation step. Treat every AI output in this framework as a hypothesis to interrogate, not a checked fact.

---

## Domain 1 — Cognitive biases in AI-assisted clinical reasoning

### 1a. Automation Bias

**Definition:** Over-reliance on AI output, reducing the clinician's independent critical evaluation.

**Vibe Rounds risk:** A learner accepts the AI's reasoning path without interrogating it — particularly dangerous in [Modules 1](Module-01-Socratic-Clinical-Reasoning.md) and [4](Module-04-Peer-Level-Ward-Round-Preparation.md).

**Prompt:**
```text
#VibeRounds For the reasoning path you just presented, what is the single
strongest counter-argument — the reason a senior clinician might reject
this conclusion entirely?
```

### 1b. Anchoring Bias (AI-amplified)

**Definition:** The first diagnosis suggested by the AI becomes the anchor, and subsequent prompts are interpreted through it.

**Vibe Rounds risk:** Early prompts in Module 1 that name a likely diagnosis can anchor the entire session.

**Prompt:**
```text
#VibeRounds If the diagnosis we have been working towards is wrong, what
is the next most likely diagnosis — and what clinical finding would most
powerfully support it?
```

### 1c. Confirmation Bias in Registry Queries

**Definition:** The user frames registry queries to confirm an existing belief about their network.

**Vibe Rounds risk:** Level 1–3 registry queries in [Module 6](Module-06-Registry-Level-Analytics.md) can return results that confirm the querier's existing clinical assumptions.

**Prompt:**
```text
#VibeRounds What query would most effectively challenge my current
assumptions about this registry? Run it.
```

### 1d. Availability Bias (Case Salience)

**Definition:** Vivid or recently logged cases are overrepresented in pattern recognition.

**Vibe Rounds risk:** High-narrative cases dominate registry learning in [Module 7](Module-07-Longitudinal-and-Cross-Case-Learning.md) queries.

**Prompt:**
```text
#VibeRounds What are the 5 most clinically unremarkable cases in this
registry — and what does their ordinariness tell us about
population-level clinical patterns?
```

### 1e. Authority Bias

**Definition:** The AI's confident tone is misread as clinical authority.

**Vibe Rounds risk:** Particularly in [Modules 3](Module-03-Extended-Patient-Advocate-Monitoring.md) and [4](Module-04-Peer-Level-Ward-Round-Preparation.md), where the AI issues monitoring recommendations or triage guidance.

> [!IMPORTANT]
> **Mitigation:** All AI output in Modules 3–5 should include a footer: *"This analysis is for educational and documentation support only. All clinical decisions require review by a qualified healthcare professional."*

---

## Domain 2 — Risks of AI-assisted clinical education

### 2a. Premature Closure Risk

The Socratic AI may inadvertently close the diagnostic space too early by steering questions toward a specific differential.

**Detection prompt:**
```text
#VibeRounds Have your questions so far narrowed the differential
prematurely? What diagnoses have not yet been considered that should be
on the list?
```

### 2b. Rare Diagnosis Overweighting

LLMs have been observed to introduce rare diagnoses before exhausting common ones (known limitation from Gemini Live testing).

**Detection prompt:**
```text
#VibeRounds Before we consider rare diagnoses: have we fully exhausted
the common diagnoses first? Apply the clinical maxim: common things are
common.
```

### 2c. Hallucination Risk in Clinical Contexts

LLMs may generate plausible-sounding but factually incorrect clinical information.

> [!IMPORTANT]
> **Mitigation:** Every Vibe Rounds session should include the following standing instruction: *"If you are uncertain about a clinical fact, say so explicitly. Do not generate confident-sounding approximations."*

### 2d. Context Window Degradation

In long Socratic sessions, the AI may lose coherence with the case details established in earlier turns.

**Mitigation prompt:**
```text
#VibeRounds Before we continue: summarise the key case facts we
established at the start of this session, so I can confirm your working
context is still accurate.
```

### 2e. Empathy Simulation Risk

Humanistic personas ([Framework A](Framework-A-Humanistic-Persona.md)) may generate responses that simulate empathy without genuine understanding — potentially masking a cold or formulaic output beneath warm language.

> [!NOTE]
> **Mitigation:** The confidence-building traits in Framework A are designed to be specific and content-grounded, not generic. Prompts should always require the AI to name the specific reasoning move being affirmed — not just issue praise.

---

## Domain 3 — Legitimate critiques of Vibe Rounds as a paradigm

### 3a. Critique: AI Socratic teaching lacks the relational scaffolding of a human tutor.

**Response:** Agreed. Vibe Rounds is designed as a practice and preparation tool — not a replacement for human clinical teaching. Modules 1 and 4 explicitly frame the AI as a study partner, not a supervisor. This is precisely why the comparison matters: Bloom's own research on one-to-one tutoring found gains of roughly two standard deviations over group instruction (Bloom, B.S., 1984, "The 2 Sigma Problem," *Educational Researcher*, 13(6), 4–16) — the relational, human tutoring this critique points to is the gold standard Vibe Rounds is trying to approximate in scarce-tutor settings, not a standard it claims to replace.

### 3b. Critique: Registry analytics on unstructured text may generate spurious correlations.

**Response:** Agreed. Module 6 queries should always be treated as hypothesis-generating, not hypothesis-confirming. All findings require formal validation before clinical application. This concern mirrors the documented caveats for secondary use of operational clinical data more broadly — inaccuracy, incompleteness, and unknown provenance routinely undermine naive reuse of such data for research (Hersh, W.R., et al., 2013, "Caveats for the Use of Operational Electronic Health Record Data in Comparative Effectiveness Research," *Medical Care*, 51(8 Suppl 3), S30–S37).

### 3c. Critique: Patients or advocates using Modules 2–3 may develop false confidence in AI-generated clinical guidance.

**Response:** All outputs in Modules 2–3 carry a standing compliance note: this is documentation and education support, not medical advice. The ALERT mechanism in Module 3, Step 3.4 is specifically designed to direct advocates to qualified care — not substitute for it. This risk mirrors the broader, measured literature on automation bias in clinical decision support — over-reliance on automated output is a documented, replicable failure mode independent of the specific tool (Goddard, K., Roudsari, A., & Wyatt, J.C., 2012, "Automation Bias: A Systematic Review of Frequency, Effect Mediators, and Mitigators," *Journal of the American Medical Informatics Association*, 19(1), 121–127).

### 3d. Critique: The humanistic persona layer (Framework A) may be used to soften feedback to the point that errors are inadequately flagged.

**Response:** Framework A explicitly prohibits generic praise and requires all affirmations to be specific and content-grounded. Traits 1 and 2 are designed to affirm reasoning quality — not to avoid naming clinical errors. The framework does not soften accuracy; it scaffolds it. This is a direct, structural countermeasure to documented LLM sycophancy — models trained on human feedback can learn to favour responses that match user expectations over accurate ones (Sharma, M., et al., 2023, "Towards Understanding Sycophancy in Language Models," arXiv:2310.13548) — and the criterion that affirmations must name a specific reasoning move is what prevents the persona layer from collapsing into that failure mode.

### 3e. Critique: Bloom's Taxonomy and Fink's framework may impose artificial structure onto fluid clinical reasoning.

**Response:** Acknowledged. Both frameworks are used as orienting tools, not rigid constraints. Clinicians reason fluidly; the frameworks help learners identify where they are in the learning process — they do not prescribe how thinking must unfold. Both were originally developed as instructional design tools, not as models of cognition itself (Bloom, B.S., 1956, *Taxonomy of Educational Objectives*; Fink, L.D., 2003, *Creating Significant Learning Experiences*, Jossey-Bass) — neither source claims that real-world reasoning unfolds in discrete, ordered steps.

---

## Critical Awareness standing prompt (for use at any module closure)

**Prompt:**
```text
#VibeRounds Apply the Critical Awareness lens to this session: (1) What
cognitive bias most likely affected the reasoning in this session — mine
or the AI's? (2) What is the most important clinical risk of acting on
today's conclusions without further verification? (3) What would the
strongest critic of this session say about its methodology? (4) What
single uncertainty should I hold clearly in mind before applying anything
from this session to a real patient?
```

---

## Where this framework is applied

| Module | Step |
|---|---|
| [Module 1 — Socratic Clinical Reasoning](Module-01-Socratic-Clinical-Reasoning.md) | Step 1.10 |
| [Module 6 — Registry-Level Analytics](Module-06-Registry-Level-Analytics.md) | Step 6.13 |
| [Module 7 — Longitudinal & Cross-Case Learning](Module-07-Longitudinal-and-Cross-Case-Learning.md) | Step 7.12 |
| [Module 8 — Socratic-Mode Design Specification](Module-08-Socratic-Mode-Design-Specification.md) | Step 8.4 |
| All modules | Standing closure prompt (above) |

See the [Lifecycle Coverage Summary](Lifecycle-Coverage-Summary.md) for the full cross-reference across all frameworks.

---

## Navigation

**Other frameworks:** [Framework A — Humanistic Persona](Framework-A-Humanistic-Persona.md) · [Framework B — Fink's FLINK Taxonomy](Framework-B-Finks-FLINK-Taxonomy.md) · [Framework C — Bloom's Taxonomy](Framework-C-Blooms-Taxonomy.md)

[← Back to README](README.md)
