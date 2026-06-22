---
layout: default
title: Module 24 — Global Knowledge Network Diagnostic Matrix
---

[← Back to README](https://avi33tbtt.github.io/Prompts/)

# Module 24 — The "Global Knowledge Network" Diagnostic Matrix

**Objective:** Train the clinician to solve outlier cases not by reasoning harder from the same local knowledge base, but by structuring access to *distributed* global intelligence — international specialist communities, AI-searchable rare-disease databases, crowdsourced diagnostic platforms, research cohorts, and anonymised case registries. The hardest cases are rarely solved by one brain; they are solved by effectively leveraging global, distributed intelligence. This module teaches the modern reality of crowdsourced medicine: how to anonymise, tokenise, and format a patient's data for distribution across international knowledge nodes; how to design a systematic data-mining strategy for outlier cases; and how to critically evaluate what comes back. The AI acts as a query-design architect and critical appraisal partner, not a source of answers.

**Indication:** Any case that has defied standard textbook diagnosis or management after a reasonable period of conventional workup — the "fascinoma," the treatment-refractory rare disease, the multi-system presentation that crosses specialty boundaries, or any scenario where the phrase "we've never seen this before" has been used. Also appropriate as an advanced module for learners preparing for research fellowship, rare disease medicine, or global health collaboration roles. Connects to [Module 9 — N-of-1 Case Research Protocol](https://avi33tbtt.github.io/Prompts/Module-09-Case-Research_Protocol.html) as its natural academic downstream.

> [!IMPORTANT] **Privacy & Data Governance — non-negotiable prerequisite.** Every step in this module involves structuring patient data for external distribution. Before using any prompt in Phase 2, the learner must confirm that (1) all direct identifiers have been removed, (2) the data has been tokenised (pseudonymised) at the level required by the intended external platform, and (3) institutional ethics or data governance approval for external case-sharing has been obtained where applicable. The AI will flag any prompt output that would require patient-identifiable data to execute — in those cases, the output is a query structure only; the learner must apply de-identification before any real data is inserted.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Define the unsolved problem and set the privacy contract

### Step 24.0: Session Setup — Problem Statement & Governance Check

**Prompt:**

```
#VibeRounds You are a query-design architect for this session. Your job
is to help me structure a hard, unsolved clinical case for distributed
expert consultation and data-mining across global knowledge networks —
not to diagnose the case yourself from your training data. Before we
design any query, ask me to state: (1) what has already been tried and
ruled out, (2) what makes this case genuinely outlier rather than
uncommon, and (3) whether I have confirmed that any data I use in this
session is de-identified and cleared for external sharing under my
institution's governance framework. Do not help me design any external
query until I confirm point 3. Confirm you understand this role.
```

> [!NOTE] **Application Note:** The distinction in point (2) — outlier versus uncommon — is clinically important. An uncommon case (e.g. a rare but well-characterised syndrome) should be approached with Module 21's evidence frontier search. An outlier case (one that doesn't fit any known syndrome after systematic workup) is the specific indication for this module's crowdsourced strategy.

### Step 24.1: Case Tokenisation — Building the Privacy-Safe Phenotype

**Prompt:**

```
#VibeRounds Before I share this case with any external network, help
me build a privacy-safe clinical phenotype — a structured representation
of the case that captures everything diagnostically relevant while
removing everything that could identify the patient. Walk me through
tokenisation at four levels:
1. Demographic tokens: replace exact age with age-band (e.g. "fourth
   decade"), replace exact location with geographic tier
   (e.g. "South Asian, urban").
2. Temporal tokens: replace exact dates with disease-timeline offsets
   (e.g. "symptom onset + 14 weeks").
3. Identifier scrub: confirm all names, hospital numbers, referring
   clinician names, and unique diagnostic identifiers are absent.
4. Phenotype compression: reduce the case to the minimum set of
   clinical features that are diagnostically discriminating — strip
   everything that is epidemiologically common background noise.

At the end of this step, produce a tokenised phenotype paragraph I can
use as the base input for all external queries in this session.
```

> [!NOTE] **Application Note:** Phenotype compression — stripping the case down to its discriminating features — is both a privacy measure and a query-quality measure. Flooding a rare-disease database or specialist forum with every clinical detail produces lower-quality responses than submitting a tightly scoped phenotype that forces the query to the unusual features. This step teaches both disciplines simultaneously.

---

## Phase 2 · Execution — Design the data-mining strategy

### Step 24.2: Global Knowledge Node Mapping

**Prompt:**

```
#VibeRounds Given the tokenised phenotype, help me map the relevant
global knowledge nodes for this case — the external intelligence
sources most likely to hold the missing variable. For each node type
below, tell me whether it is likely to be a high-yield or low-yield
source for this specific phenotype, and why:
1. Rare-disease databases (Orphanet, OMIM, NORD, RD-Connect)
2. International specialist forums (NORD physician network,
   specialty society listservs, medically moderated platforms)
3. AI-searchable case databases and preprint servers (PubMed, medRxiv,
   Zenodo case repositories)
4. Research cohorts and patient registries (disease-specific international
   registries, biobank networks)
5. Crowdsourced diagnostic platforms (Human Dx, Figure 1 community,
   specialist Twitter/X networks)

Rank these by expected yield for my case and give me one specific
query strategy for the top two.
```

> [!NOTE] **Application Note:** The node-mapping step is adapted from systematic review methodology (identifying source types before executing search) applied to real-time clinical problem-solving. Requiring the learner to predict yield before querying — and to give a reason — builds the metacognitive skill of source selection rather than undifferentiated information-seeking.

### Step 24.3: Query Design for Rare-Disease Databases

**Prompt:**

```
#VibeRounds Help me design the query I will submit to a rare-disease
database (e.g. Orphanet or OMIM) using my tokenised phenotype. Structure
the query as:
1. Core phenotype string: the 3–5 clinical features most likely to be
   discriminating, expressed in standard medical terminology (HPO terms
   where applicable).
2. Exclusion string: findings that are present but that I want to
   exclude from the match (to avoid swamping results with common
   syndromes that share surface features).
3. Inheritance or aetiology filter: if genetics is relevant, the
   inheritance pattern to constrain on.
4. Expected output format: what I need back — a ranked differential
   list, a gene list, a registry contact, or a clinical guideline.

Do not execute the query — produce the query structure I will submit.
```

> [!NOTE] **Application Note:** HPO (Human Phenotype Ontology) terms are the standard computable phenotype language across rare-disease databases internationally — introducing the learner to this ontology as a query tool, rather than as a purely academic concept, is a key translational contribution of this step.

### Step 24.4: Specialist Forum Query Design

**Prompt:**

```
#VibeRounds Help me design a post for an international specialist forum
or physician network using my tokenised phenotype. The post must:
1. Open with the core clinical puzzle in one sentence — the feature or
   combination that is unexplained after standard workup.
2. Present the phenotype in a structured, scannable format (not a wall
   of prose) so that a specialist with 90 seconds of attention can
   identify whether this is in their domain.
3. State explicitly what the post is asking for: diagnostic hypothesis,
   experience with similar cases, referral to a sub-specialist, or
   knowledge of an ongoing research cohort.
4. Close with the de-identification and ethics statement confirming
   patient consent or IRB waiver for case-sharing.

Produce a draft post. Do not include any real patient data — use the
tokenised phenotype only.
```

> [!NOTE] **Application Note:** Specialist forum posts that fail to get responses are usually failures of framing, not failures of case interest. The post structure taught here — puzzle-first, structured phenotype, explicit ask, governance close — is designed to maximise the probability of engagement from a time-constrained international audience. This is a transferable scientific communication skill as well as a diagnostic strategy.

### Step 24.5: Research Cohort & Registry Contact Strategy

**Prompt:**

```
#VibeRounds This case may belong to a rare disease or phenotype for
which an international patient registry or research cohort exists.
Help me design a contact strategy:
1. How do I identify whether a registry exists for this condition or
   phenotype (search strategy for rare-disease registry directories)?
2. What information does a registry coordinator typically need from me
   to assess whether this patient might be eligible for inclusion?
3. What is the correct channel — clinical inquiry versus research
   collaboration request — and how do I frame the contact accordingly?
4. What does the patient need to have consented to before I make
   contact, and who at my institution needs to be involved?

Structure this as a checklist I can follow sequentially.
```

> [!NOTE] **Application Note:** Registry contact is the step most commonly skipped in rare-disease management not because clinicians are unaware that registries exist, but because the contact pathway feels unclear or institutionally risky. This step demystifies the pathway and surfaces the consent and governance steps that must precede it — making it actionable rather than aspirational.

### Step 24.6: Data-Mining Strategy for Preprint & Case Literature

**Prompt:**

```
#VibeRounds Design a systematic data-mining strategy for finding
published or preprint case reports that match my tokenised phenotype:
1. Construct a PubMed/MEDLINE search string using MeSH terms and
   free-text Boolean logic for the core phenotype features.
2. Extend to preprint servers (medRxiv, bioRxiv) with an equivalent
   search for unpublished cases that may not yet be indexed.
3. Design a Zenodo and institutional repository search for case
   narratives and N-of-1 reports that sit outside traditional journals.
4. For any case report found, identify the corresponding author contact
   as a potential specialist node — case reporters are often the most
   knowledgeable individuals globally about a specific ultra-rare
   phenotype.

Produce the search strings and the contact rationale, not the results
— I will execute the searches myself.
```

> [!NOTE] **Application Note:** Corresponding-author outreach is the most underutilised tool in rare-disease clinical problem-solving — the author of the only published case series on a given phenotype is, by definition, a world expert, and is typically reachable by email. This step makes that contact pathway explicit as a legitimate and productive strategy.

---

## Phase 3 · Closure / Review — Synthesise, appraise, and contribute back

### Step 24.7: Intelligence Synthesis — Integrating Multi-Node Responses

**Prompt:**

```
#VibeRounds I have received responses from the external knowledge nodes
queried in this session. Help me synthesise them:
1. Which responses converge on a common hypothesis — and does that
   convergence represent genuine independent confirmation, or do the
   sources share a common root (e.g. all citing the same original
   case report)?
2. Which responses diverge — and does the divergence reflect genuine
   clinical uncertainty or specialist perspective differences?
3. What is the single most actionable new hypothesis or investigation
   that the global network produced that my local team had not
   considered?
4. What is the one piece of information from my case that the global
   network did not have and that, if shared, might further refine
   their responses?
```

> [!NOTE] **Application Note:** Question 1 — distinguishing independent convergence from shared-source convergence — is the single most important critical appraisal skill in crowdsourced intelligence synthesis. A finding supported by five sources that all derive from the same original case report is a single-source finding, not a robust one. This is the citation-network awareness skill applied to real-time diagnostic reasoning.

### Step 24.8: Reciprocal Contribution — Contributing the Case Back

**Prompt:**

```
#VibeRounds This case has now been enriched by global network input.
Help me plan how to contribute this case back to the knowledge commons:
1. Is this case suitable for a formal case report or case series
   publication (see [Module 9](https://avi33tbtt.github.io/Prompts/Module-09-Case-Research_Protocol.html) for the N-of-1 research protocol)?
2. Is this case suitable for contribution to a disease registry or
   biobank with appropriate patient consent?
3. Is there a specialist forum, preprint server, or rare-disease
   community that should receive a structured summary of the clinical
   outcome — particularly if the case resolved in a way that is
   instructive for future similar presentations?
4. What is the minimum ethically acceptable form of knowledge
   contribution — if full publication is not feasible, what is the
   next best option?
```

> [!NOTE] **Application Note:** The contribution-back step is the ethical and epistemic counterpart to the data-mining strategy — a knowledge network degrades if all participants are consumers and no one contributes. Framing it as a professional obligation, with a pragmatic minimum option for those who cannot publish, models the reciprocity norm that sustains collaborative rare-disease medicine globally.

### Step 24.9: Critical Awareness — Crowdsourcing Bias & Information Cascade

**Prompt:**

```
#VibeRounds Apply a critical awareness check to the global network
strategy used in this session:
1. Is there a risk that the external responses I received reflected a
   geographic or specialty bias — i.e. the network I accessed represents
   high-income, English-language, or specific-subspecialty perspectives
   disproportionately?
2. Is there a risk of information cascade — where early responders'
   hypotheses anchored subsequent responses rather than genuinely
   independent reasoning?
3. For any specific finding produced by the network, was it a genuine
   new variable or a restatement of what local workup had already
   produced in different language?
4. What is the most important thing I would do differently in designing
   the query if I ran this exercise again — in terms of node selection,
   query framing, or phenotype compression?

Be constructive. The goal is to improve the strategy, not abandon it.
```

> [!NOTE] **Application Note:** Information cascade — where early responses in a crowdsourced query bias all subsequent ones — is a well-documented phenomenon in collective intelligence research and is the mechanism behind several high-profile diagnostic errors in crowdsourced medicine platforms. Naming it explicitly as a risk to check for, rather than assuming that more opinions automatically means better answers, is the critical appraisal discipline this step aims to build. Extends [Framework D](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html)'s bias awareness into the crowdsourced-intelligence domain.

---

## Related Frameworks

- [Framework D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) (Domains 2a/2b, Anchoring and Confirmation Bias; Domain 2c, Hallucination Risk in AI-assisted synthesis — Steps 24.7 and 24.9)
- [Framework B — Fink's FLINK Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-B-Finks-FLINK-Taxonomy.html) (Integration and Learning-How-to-Learn dimensions — the dominant Fink dimensions of this module)
- [Module 9 — N-of-1 Case Research Protocol](https://avi33tbtt.github.io/Prompts/Module-09-Case-Research_Protocol.html) (natural downstream — when the global network strategy surfaces a publishable case, Module 9 provides the formal research protocol)
- [Module 21 — Evidence Frontier Search](https://avi33tbtt.github.io/Prompts/Module-21-Evidence-Frontier-Search.html) (precursor — a Module 21 search should be exhausted before this module is needed; Module 24 begins where Module 21's standard literature search runs out)
- [Module 7 — Longitudinal & Cross-Case Learning](https://avi33tbtt.github.io/Prompts/Module-07-Longitudinal-and-Cross-Case-Learning.html) (the local registry equivalent of the global network — this module extends cross-case learning to international scale)

---

## Navigation

**Previous:** [← Module 23 — Operational & Throughput Strategist](https://avi33tbtt.github.io/Prompts/Module-23-Operational-Throughput-Strategist.html)

**Next:** Browse the [Supplementary Frameworks](https://avi33tbtt.github.io/Prompts/) or [Reference Material](https://avi33tbtt.github.io/Prompts/).

[← Back to README](https://avi33tbtt.github.io/Prompts/)
