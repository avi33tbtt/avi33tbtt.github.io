# VibeRounds Directory 2: Lightweight Disease-Specific Protocol
### Tuberculosis as the Index Disease — From Acute Decision-Making to Critical Appraisal

> **The core idea:** Rather than running all 20 modules on every case, a lightweight model serialises only the high-yield modules in a fixed sequence — starting with rapid action selection (Module 20: RPD), then cross-matching against guidelines and research, and ending with adversarial stress-testing to prevent anchoring bias.

---

## 1. Why Build a Lightweight Model?

The full VibeRounds 20-module pipeline produces deep, comprehensive clinical knowledge — but at significant analytical cost. For a disease-specific directory, a streamlined pathway is needed that:

- Preserves clinical rigour without requiring full-stack analysis on every case
- Moves from fast action to slow verification in a structured sequence
- Can be deployed across the scale of a real PubMed corpus (hundreds of thousands of records)
- Remains teachable for students while remaining useful for clinicians

The proposed model — **Directory 2: Disease-Specific Scaffolds** — serialises five targeted modules into a fast-to-slow reasoning loop.

---

## 2. Selecting the Index Disease: Why Tuberculosis?

TB is an optimal choice for the index disease in a medicine-focused directory. While CKD is the primary tutorial example in the VibeRounds protocol, TB offers superior clinical complexity across multiple framework dimensions.

| Criterion | Why TB Excels |
|-----------|---------------|
| **Differential complexity** | TB is the "great mimicker" — it can present identically to malignancy, autoimmune disease, sarcoidosis, or lymphoma, making Module 12 (Devil's Advocate) essential rather than optional |
| **Multisystem network reasoning** | TB involves interacting systems — pulmonary, renal, neurological, disseminated — making Module 18 (Causal Networks) deeply applicable |
| **Conditional weighting** | The significance of a single finding (e.g., night sweats) is conditional on other factors (geographic exposure, HIV status, contact history), which trains probabilistic thinking |
| **Social determinants** | TB is inseparable from poverty, overcrowding, malnutrition, and healthcare access — making Module 19 (Social Medicine) structurally necessary, not supplementary |
| **Resource constraints** | TB management often requires decision-making under resource ceilings, directly testing Module 14 |
| **Acute emergencies** | Massive haemoptysis and TB meningitis triage require the RPD model (Module 20) for time-critical action selection |
| **Guideline complexity** | Rapidly evolving drug-resistant TB regimens (e.g., BPaLM) mean the evidence frontier is active and contested |

---

## 3. The Data Corpus for TB in Directory 2

| Source Type | Volume | Notes |
|-------------|--------|-------|
| TB case reports (PubMed free full-text) | 36,950 | High value for understanding atypical presentations |
| All TB research publications | 319,050 | Requires strategic pruning; cannot be processed uniformly |
| TB-specific guidelines | 6,934 | Many likely outdated; requires evidence frontier filtering |

**Processing priority:** Given this volume, the lightweight protocol focuses on *clinical utility* over *comprehensiveness*. The goal is to identify the highest-yield items at each stage and discard the rest.

---

## 4. The Lightweight Protocol: Five-Step Sequence

### Step 1 — Sorting and Pattern Recognition *(Module 6: Registry-Level Analytics)*

**Purpose:** With 319,050 research items, the first task is to identify which TB phenotypes are clinically most relevant. Processing everything uniformly is neither feasible nor useful.

**Task:**
- Perform horizontal analytics to identify recurring TB phenotypes: Multi-Drug Resistant TB (MDR-TB), TB Meningitis, Miliary TB, Extrapulmonary TB, TB-HIV co-infection
- Match these clusters against local de-identified patient logs to determine which phenotypes most commonly present in the target clinical environment
- Use this as the primary filter for which case reports and research papers enter the deeper pipeline

**Module:** 6 (Level 6 — Phenotype Detection)

---

### Step 2 — Acute Action Selection *(Module 20: Recognition-Primed Decision)*

**Purpose:** TB produces time-critical emergencies that cannot wait for systematic analysis. This step trains rapid, pattern-driven decision-making for acute presentations.

**Task:**
- For each high-risk phenotype identified in Step 1, define the critical recognition pattern (e.g., "patient with known TB contact, fever, worsening headache, neck stiffness" → TB meningitis)
- Retrieve one plausible immediate course of action — not a differential list — and simulate it forward to identify failure points
- Example failure point check: *"If I give a fluid bolus to this patient with possible TB-related cor pulmonale, what happens to right heart function?"*

**The RPD discipline here is deliberate:** the learner is not given a menu of options. They must commit to one action and defend it against simulated failure — the same cognitive demand placed on a senior clinician in an emergency.

**Module:** 20 (RPD — Naturalistic Decision-Making)

---

### Step 3 — Guideline and Evidence Frontier Pruning *(Module 21: Evidence Frontier Search)*

**Purpose:** Of the 6,934 TB guidelines in the corpus, many will be outdated. This step retrieves the *current* frontier, not the historical archive.

**Task:**
- Formulate a PICO question anchored to the acute decision made in Step 2
- Example: *"In adults with MDR-TB (P), does a 6-month BPaLM regimen (I) compared to standard 18–24 month care (C) achieve non-inferior treatment success and lower toxicity (O)?"*
- Use live, verified search to identify the most recent WHO or national guidelines and active clinical trials relevant to that PICO question
- Flag any conflicts between retrieved guidelines (e.g., national protocol versus WHO recommendation)

**Module:** 21 (Steps 21.1 and 21.3 — Frontier Identification and Trial Mapping)

---

### Step 4 — Deep Case Report Digestion *(Module 10: Layered Article Reading)*

**Purpose:** The 36,950 TB case reports are the highest-value source for understanding TB as the great mimicker — but only if analysed against a real clinical anchor, not read in isolation.

**Task:**
- Take a de-identified patient vignette from the local clinical environment
- Apply layered digestion: first extract the methods and presentation from a matched case report, then compare findings to the local patient
- Focus specifically on atypical features — presentations that do not fit the standard TB illness script and which required a diagnostic detour before the correct diagnosis was reached
- Document which "mimicker" diagnoses were considered and how TB was ultimately confirmed

**Module:** 10 (Layer 1 — Methods Translation; Layer 2 — Findings Mapping)

---

### Step 5 — Adversarial Stress-Testing *(Module 12 + Framework D)*

**Purpose:** In a TB-endemic environment, clinicians are at high risk of "anchoring" — defaulting to a TB diagnosis without adequately excluding other serious diseases. This step structurally forces the opposite.

**Task:**
- Apply Devil's Advocate mode: generate three arguments *against* the TB diagnosis and demand a clinical rebuttal for each
- Example challenges:
  - *"Why is this not sarcoidosis? The lymphadenopathy pattern, the calcium level, and the chest imaging are all consistent."*
  - *"Why is this not lymphoma? The B symptoms, the age, and the absence of contact history support it."*
  - *"Why is this not a fungal infection? The patient is immunocompromised and the culture takes weeks."*
- Apply Framework D (Critical Awareness) to audit for automation bias — the risk of trusting the guideline or the AI output without interrogating the underlying assumptions

**Module:** 12 (Step 12.1 — First Assault); **Framework D** (Bias and Hallucination Audit)

---

## 5. The Full Protocol at a Glance

| Priority | Step | Task | Module | Reasoning Mode |
|----------|------|------|--------|----------------|
| 1 — Fast | Phenotype Sorting | Identify which TB subtypes are locally relevant | Module 6 | Analytical |
| 2 — Action | Acute Triage | RPD simulation for time-critical emergencies | Module 20 | Naturalistic / Intuitive |
| 3 — Verify | Guideline Pruning | PICO-structured evidence frontier search | Module 21 | Traditional / Systematic |
| 4 — Digest | Case Report Anchoring | Layered digestion of atypical presentations | Module 10 | Slow / Comparative |
| 5 — Audit | Adversarial Stress-Test | Devil's Advocate + bias check | Module 12 + Framework D | Adversarial |

---

## 6. Design Principles of This Lightweight Model

### Fast-to-Slow Sequencing

The protocol is deliberately sequenced so that fast, intuitive reasoning (RPD) happens *before* slow, systematic reasoning (article digestion, critical appraisal). This mirrors how expert clinicians actually reason under time pressure — and makes the pedagogical sequence more realistic than starting with a literature review.

### Socratic Constraint Throughout

At no step does the protocol give the learner an answer directly. Each module forces the learner to:
- Construct their own pattern recognition (Step 1)
- Commit to their own action and simulate it (Step 2)
- Formulate their own PICO question (Step 3)
- Apply evidence to their own patient (Step 4)
- Attack their own conclusion (Step 5)

This prevents automation bias — the risk that a powerful knowledge system produces passive, uncritical users.

### Manageable at Scale

Because the protocol runs only five targeted modules rather than all twenty, it can realistically be applied to:
- Every TB phenotype cluster identified in Step 1
- High-priority case reports in the 36,950-item corpus
- Emerging guideline conflicts as new evidence arrives

The full 20-module pipeline remains available for complex index cases. The lightweight model handles the high-volume, disease-specific layer.

---

## 7. Suggested Extension Diseases by Specialty

Once the TB model is validated, the lightweight protocol can be adapted by specialty using the same five-step sequence:

| Specialty | Case Reports Available | Suggested Index Disease |
|-----------|----------------------|------------------------|
| Medicine | 745,738 | Tuberculosis (index) |
| Surgery | 283,585 | Acute abdomen with diagnostic uncertainty |
| Paediatrics | 66,278 | Kawasaki disease (great mimicker; acute decision critical) |
| Gynaecology | 21,947 | Ectopic pregnancy with atypical presentation |
| Psychiatry | 14,453 | First-episode psychosis with organic cause |
| Otorhinolaryngology | 12,737 | Neck mass with malignancy versus infection differential |

---

*Framework: VibeRounds Master Case Analysis Protocol v1.0 | Dr. Avinash Kumar Gupta | June 2026*
*Directory 2 Concept: Lightweight Disease-Specific Scaffolds — TB as Index Disease*
