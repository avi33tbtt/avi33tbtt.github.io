# VibeRounds Prompt Directory — Modules 1–9

*Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*

Each prompt is tagged with one or more of four AI reasoning modes:

- **Traditional** — structured output prompts (SOAP notes, checklists, summaries, audits, handovers) with no learner reasoning requirement.
- **Socratic** — prompts that withhold answers, ask one question at a time, and require the learner to reason before the AI reveals anything.
- **Devil's Advocate** — prompts designed to challenge assumptions, surface cognitive biases, stress-test reasoning, or identify what could go wrong.
- **Brainstorming** — generative/expansive prompts (lists, cross-case clusters, hypothesis generation, analytic ideation).

Two prompts carry dual tags where their design genuinely spans two modes.

---

## Summary Statistics

| AI Mode | Prompt count (primary) | % of all prompts | % of all tag assignments |
|---|---|---|---|
| Traditional | 59 | 62.1% | 60.8% |
| Socratic | 17 | 17.9% | 17.5% |
| Brainstorming | 11 | 11.6% | 11.3% |
| Devil's Advocate | 10 | 10.5% | 10.3% |
| **Total prompts** | **95** | | **97 tag assignments** |

> Two prompts carry dual tags (1.1 = Socratic + Brainstorming; 9.0 = Traditional + Socratic), which is why tag assignments (97) exceed prompt count (95).

---

## Per-Module Breakdown

| Module | Total | Traditional | Socratic | Devil's Advocate | Brainstorming |
|---|---|---|---|---|---|
| Module 1 — Socratic Clinical Reasoning | 11 | 4 | 5 | 2 | 1 |
| Module 2 — Patient-Advocate Case Documentation | 9 | 8 | 1 | 0 | 0 |
| Module 3 — Extended Patient-Advocate Monitoring | 8 | 7 | 1 | 0 | 0 |
| Module 4 — Peer-Level Ward Round Preparation | 10 | 5 | 4 | 1 | 0 |
| Module 5 — Real-Time Case Review & Data Audit | 12 | 9 | 3 | 0 | 0 |
| Module 6 — Registry-Level Analytics | 14 | 8 | 0 | 2 | 4 |
| Module 7 — Longitudinal & Cross-Case Learning | 13 | 6 | 1 | 2 | 4 |
| Module 8 — Socratic-Mode Design Specification | 5 | 3 | 1 | 1 | 0 |
| Module 9 — N-of-1 Case Research Protocol | 13 | 9 | 1 | 2 | 2 |
| **Total** | **95** | **59** | **17** | **10** | **11** |

**Key pattern:** Modules 2, 3, and 5 are almost entirely Traditional (documentation and audit workflows). Module 1 is the Socratic core of the system. Modules 6 and 7 are the only modules with zero or near-zero Socratic prompts — registry analytics is a data-querying, not a pedagogy, context. Devil's Advocate prompts are scattered intentionally at closure/debrief steps across all modules.

---

## Full Prompt Index

| ID | Module | Phase | Prompt purpose | AI mode tags |
|---|---|---|---|---|
| 1.0 | Module 1 | Initiation | Session setup — Socratic contract, answer-withholding, curiosity hook | Socratic |
| 1.1 | Module 1 | Execution | Generate a long list of Socratic questions around the case | Socratic · Brainstorming |
| 1.2 | Module 1 | Execution | Socratic teacher on interventions — one question per intervention | Socratic |
| 1.3 | Module 1 | Execution | Knowledge-scoped examination guide (textbook-restricted) | Traditional |
| 1.4 | Module 1 | Execution | Mid-session reasoning checkpoint — grade logic, prioritisation, uncertainty | Traditional |
| 1.5 | Module 1 | Execution | Bloom's Taxonomy progression — six levels of clinical reasoning | Socratic |
| 1.6 | Module 1 | Execution | Fink FLINK engagement — six significant-learning dimensions | Socratic |
| 1.7 | Module 1 | Closure | End-of-case teaching summary — pearls, strengths, reading rec | Traditional |
| 1.8 | Module 1 | Closure | Missed diagnosis debrief — cognitive bias, growth framing | Devil's Advocate |
| 1.9 | Module 1 | Closure | Difficulty ratchet — next session level and practice task | Traditional |
| 1.10 | Module 1 | Closure | Critical awareness debrief — biases, risks, unresolved uncertainty | Devil's Advocate |
| 2.0 | Module 2 | Initiation | Case opening — compassionate documentation companion onboarding | Traditional |
| 2.1 | Module 2 | Execution | Symptom & classifier capture by narrative method | Traditional |
| 2.2 | Module 2 | Execution | Clinical examination guidance in plain language for advocate | Traditional |
| 2.3 | Module 2 | Execution | Prescription transcription & dosage capture | Traditional |
| 2.4 | Module 2 | Execution | SOAP note generation from case record | Traditional |
| 2.5 | Module 2 | Execution | Data completeness audit — friendly gap checklist | Traditional |
| 2.6 | Module 2 | Closure | Case record sign-off checklist | Traditional |
| 2.7 | Module 2 | Closure | Advocate handover brief — 150-word read-aloud note | Traditional |
| 2.8 | Module 2 | Closure | Bloom's layer — advocate learning check (Remember → Apply) | Socratic |
| 3.0 | Module 3 | Initiation | Baseline domain snapshot across four monitoring domains | Traditional |
| 3.1 | Module 3 | Execution | Lifestyle monitoring — diet, sleep, mobility, fluid compliance | Traditional |
| 3.2 | Module 3 | Execution | Mood & coping monitoring — emotional state, stressors, resilience | Traditional |
| 3.3 | Module 3 | Execution | Medication monitoring & adherence — current vs discontinued table | Traditional |
| 3.4 | Module 3 | Execution | Critical alert & red-flag triage — ALERT block generation | Traditional |
| 3.5 | Module 3 | Execution | Fink FLINK monitoring reflection — six dimensions at checkpoint | Socratic |
| 3.6 | Module 3 | Closure | Monthly domain review — Improved/Stable/Deteriorated per domain | Traditional |
| 3.7 | Module 3 | Closure | Monitoring closure or escalation decision | Traditional |
| 4.0 | Module 4 | Initiation | Study partner context load — peer framing, drug/investigation flags | Traditional |
| 4.1 | Module 4 | Execution | Pre-rounds consultant prep — anticipate top 3 senior questions | Socratic |
| 4.2 | Module 4 | Execution | Ward admission & pre-op checklist — monitoring, clearance, blood products | Traditional |
| 4.3 | Module 4 | Execution | Cross-system complication & polypharmacy screen | Devil's Advocate |
| 4.4 | Module 4 | Execution | Night shift stat call triage — step-by-step deterioration reasoning | Socratic |
| 4.5 | Module 4 | Execution | Bloom's taxonomy round prep — six levels on most complex patient | Socratic |
| 4.6 | Module 4 | Execution | Fink FLINK ward round reflection — six dimensions post-round | Socratic |
| 4.7 | Module 4 | Closure | End-of-round patient status update — two-sentence progress notes | Traditional |
| 4.8 | Module 4 | Closure | Ward round learning debrief — stakes, gap, reading rec | Traditional |
| 4.9 | Module 4 | Closure | Formal SBAR handover generation | Traditional |
| 5.0 | Module 5 | Initiation | Case context prime — confirm AI reading before analysis | Traditional |
| 5.1 | Module 5 | Execution | Drug interaction & prescription audit with clinical learning angle | Traditional |
| 5.2 | Module 5 | Execution | Recent interventions recap — 5 most recent + expected outcomes | Traditional |
| 5.3 | Module 5 | Execution | Reformat raw log — cleaner layout + flag clinically significant datum | Traditional |
| 5.4 | Module 5 | Execution | Two-week case refresh + reasoning question before AI reveals view | Socratic |
| 5.5 | Module 5 | Execution | Patient journey summary — narrative arc from presentation to now | Traditional |
| 5.6 | Module 5 | Execution | Masterclass follow-up — Socratic deep-dive on clinical principle | Socratic |
| 5.7 | Module 5 | Execution | Patient voice — plain-language patient self-reflection prompt | Traditional |
| 5.8 | Module 5 | Execution | Data anomaly flagging — impossible values, timestamps, contradictions | Traditional |
| 5.9 | Module 5 | Execution | Fink FLINK deep case reflection — six dimensions | Socratic |
| 5.10 | Module 5 | Closure | Case audit summary & action list — quality rating, concerns, gaps | Traditional |
| 5.11 | Module 5 | Closure | Exportable case abstract — 200 words + Bloom's level tag | Traditional |
| 6.0 | Module 6 | Initiation | Registry health check — totals, completeness, known integrity issues | Traditional |
| 6.1 | Module 6 | Execution | Level 1 — system scale & workforce yield; uncommon diagnosis lists | Brainstorming |
| 6.2 | Module 6 | Execution | Level 2 — core operations & top diagnostic distribution | Traditional |
| 6.3 | Module 6 | Execution | Level 3 — intervention mapping (pharmacological & procedural) | Traditional |
| 6.4 | Module 6 | Execution | Level 4 — case-based learning: high-value N-of-1s, similar pairs, high-risk | Brainstorming |
| 6.5 | Module 6 | Execution | Level 5 — network dynamics & workforce tier breakdown | Traditional |
| 6.6 | Module 6 | Execution | Level 6 — diagnostic blindspots & pre-convergence phenotype detection | Devil's Advocate |
| 6.7 | Module 6 | Execution | Level 7 — granular ADR and polypharmacy auditing | Traditional |
| 6.8 | Module 6 | Execution | Level 8 — advanced network triage: missing parameters, re-logging cases | Traditional |
| 6.9 | Module 6 | Execution | Level 9 — data quality, narrative depth rating, divergent-outcome pairs | Brainstorming |
| 6.10 | Module 6 | Closure | Analytics session synthesis — Registry Intelligence Report | Traditional |
| 6.11 | Module 6 | Closure | Registry improvement wishlist — top 5 missing fields + ontology mapping | Brainstorming |
| 6.12 | Module 6 | Closure | Exportable analytics summary — 300-word executive report | Traditional |
| 6.13 | Module 6 | Closure | Critical awareness registry audit — selection bias, methodology critique | Devil's Advocate |
| 7.0 | Module 7 | Initiation | Learning inquiry setup — scope, time window, data completeness check | Traditional |
| 7.1 | Module 7 | Execution | Longitudinal trajectory analytics — unresolved, fragmented, richest cases | Traditional |
| 7.2 | Module 7 | Execution | Diagnostic evolution analytics — stable vs revised diagnoses, reasons | Traditional |
| 7.3 | Module 7 | Execution | Registry learning analytics — symptom clusters preceding rare dx, cross-lingual | Brainstorming |
| 7.4 | Module 7 | Execution | Diagnostic turning point detection — recurring trigger observations | Traditional |
| 7.5 | Module 7 | Execution | Cross-case pattern mining — unexpected clusters, recurring constellations | Brainstorming |
| 7.6 | Module 7 | Execution | Clinical reasoning analytics — cognitive bias patterns across registry | Devil's Advocate |
| 7.7 | Module 7 | Execution | Longitudinal case quality rating — five criteria, 1–10 per case | Traditional |
| 7.8 | Module 7 | Execution | Bloom's registry learning prompt — six levels at scale | Socratic |
| 7.9 | Module 7 | Closure | Learning session synthesis — top patterns, blindspots, practice changes | Traditional |
| 7.10 | Module 7 | Closure | New hypothesis generation — 3 testable N-of-1 hypotheses | Brainstorming |
| 7.11 | Module 7 | Closure | Registry-as-curriculum builder — 5-case teaching sequence | Brainstorming |
| 7.12 | Module 7 | Closure | Critical awareness cross-case debrief — artefacts, biostatistician challenge | Devil's Advocate |
| 8.0 | Module 8 | Initiation | Spec activation — review 12-point design criteria before authoring | Socratic |
| 8.1 | Module 8 | Closure | Prompt peer review — score against 12-point spec, top 2 revisions | Traditional |
| 8.2 | Module 8 | Closure | Regression test — simulate 'idk' for 3 turns, flag min-effort failures | Devil's Advocate |
| 8.3 | Module 8 | Closure | Difficulty calibration check — Year-1 vs senior resident side-by-side | Traditional |
| 8.4 | Module 8 | Closure | Humanistic criteria audit — test criteria 11 & 12 with average-performing learner | Traditional |
| 9.0 | Module 9 | Initiation | Single-session orchestration — all 7 stages in one prompt with pause points | Traditional · Socratic |
| 9.1 | Module 9 | Initiation | Stage 1: index case structuring — extract diagnosis & intervention term lists | Traditional |
| 9.1a | Module 9 | Initiation | Stage 1a: completeness check — second-pass scan for missed terms | Traditional |
| 9.2 | Module 9 | Execution | Stage 2: comparator identification — search seeds, match criteria, source declaration | Traditional |
| 9.2a | Module 9 | Execution | Stage 2a: PRISMA-style search-strategy note export | Traditional |
| 9.3 | Module 9 | Execution | Stage 3: aggregation & cross-comparison — shared features vs divergence per criterion | Traditional |
| 9.4 | Module 9 | Execution | Stage 4: two-tier analysis — coded (registry) view vs full narrative view, kept separate | Devil's Advocate |
| 9.5 | Module 9 | Execution | Stage 5: open-ended analytic ideation — expand option space, no pre-filtering | Brainstorming |
| 9.6 | Module 9 | Execution | Stage 6: selection of analytic menu — restate chosen items as runnable tasks | Brainstorming |
| 9.6a | Module 9 | Execution | Stage 6a: run an individual menu item (repeatable) | Traditional |
| 9.7 | Module 9 | Closure | Stage 7: convergence — severity rating, priority rating, timeline, correlation table | Traditional |
| 9.8 | Module 9 | Closure | Manuscript/CARE-field export — map outputs to CARE fields, flag gaps | Traditional |
| 9.9 | Module 9 | Closure | Critical awareness debrief — bias, clinical risk, methodological critique | Devil's Advocate |

---

## Tagging rationale

**Traditional** was assigned when the AI's primary role is to produce a structured deliverable (note, checklist, summary, table, report) and the user is a recipient, not a reasoning participant.

**Socratic** was assigned when the prompt explicitly withholds the answer, requires learner commitment before any hint, and advances only after the learner responds — the defining criteria from Module 8's 12-point spec (criteria 1, 2, 10).

**Devil's Advocate** was assigned when the prompt's explicit goal is to surface what could be wrong, biased, or challenged — including cognitive bias audits, critical awareness debriefs, and stress-tests of the AI's own outputs.

**Brainstorming** was assigned when the prompt's explicit goal is *expansion* of the option space — generating lists, clusters, hypotheses, or analytic candidates without premature filtering or ranking.

*VibeRounds Prompt Modules · Dr. Avinash Kumar Gupta · June 2026*
