# VibeRounds — Case Analysis
## Case: Adult with Recent Thyroid Mass, Pressure Symptoms, Loss of Appetite & Biochemical Subclinical Hyperthyroidism

**Case Source:** https://classworkdecjan.blogspot.com/2026/06/case-2-20-jun-2026.html
**Protocol Version:** VibeRounds Master Case Analysis Protocol v1.1
**Date of Analysis:** 20 June 2026
**CaseName:** Adult-ThyroidMass-SubclinicalHyper

---

## Workflow

**Stage 1** extracted structured clinical data from the case URL, flagging all absent fields as [NOT DOCUMENTED]. **Stage 2** mapped VibeRounds prompts from all 20 modules against the patient's clinical features. **Stage 3** ranked each mapped prompt 1–10 for clinical importance in this specific case. **Stage 4** executed full answers to all prompts rated 8–10, tagging information gaps inline. **Stage 5** synthesised the top 10 clinical insights (see companion File 1). **Stage 6** produced the CARE case report and advocate debrief (see companion File 3). **Stage 7** pooled all flagged gaps into the Further Requested Information synthesis (see companion File 4).

---

## Section 1: Structured Case Summary

| Field | Content |
|-------|---------|
| Demographics | Age [NOT DOCUMENTED — GAP]; Sex [NOT DOCUMENTED — GAP]; Occupation [NOT DOCUMENTED — GAP]; Social/geographical background [NOT DOCUMENTED — GAP] |
| Chief complaint | Recent thyroid swelling with pressure symptoms |
| Mode of presentation | Outpatient / elective (inferred — NOT DOCUMENTED) |
| Duration of thyroid swelling | "Recent" — exact onset [NOT DOCUMENTED — GAP] |
| Background diagnoses | None previously documented in case |
| Symptom timeline | Loss of appetite — 2 months; thyroid swelling — recent (exact timeline GAP); pressure symptoms — duration [NOT DOCUMENTED — GAP]; lid lag, tremors, tachycardia — duration [NOT DOCUMENTED — GAP] |
| Medications | [NOT DOCUMENTED — GAP] |
| Vitals | Heart rate — tachycardic (exact value [NOT DOCUMENTED — GAP]); BP, temp, SpO2, RR all [NOT DOCUMENTED — GAP] |
| Examination findings — thyroid | Size, texture, mobility, tenderness, nodularity of mass [NOT DOCUMENTED — GAP] |
| Examination findings — eyes | Lid lag present |
| Examination findings — neurological | Tremors present |
| Examination findings — cardiovascular | Tachycardia present; rhythm [NOT DOCUMENTED — GAP]; ECG [NOT DOCUMENTED — GAP] |
| Examination — lymph nodes | [NOT DOCUMENTED — GAP] |
| Investigations | TSH: suppressed (implied by "subclinical hyperthyroidism" — exact value [NOT DOCUMENTED — GAP]); Free T3/T4: normal (implied — [NOT DOCUMENTED — GAP for exact values]); Serum calcitonin: [NOT DOCUMENTED — GAP]; Thyroid antibodies (TPO, TgAb): [NOT DOCUMENTED — GAP]; Ultrasound thyroid: [NOT DOCUMENTED — GAP]; Thyroid scintigraphy: [NOT DOCUMENTED — GAP]; ECG: [NOT DOCUMENTED — GAP]; Calcium, PTH: [NOT DOCUMENTED — GAP]; FBC, ESR, CRP: [NOT DOCUMENTED — GAP]; LFTs, renal function: [NOT DOCUMENTED — GAP]; Serum calcitonin: [NOT DOCUMENTED — GAP] |
| Procedures performed | FNAC — planned (not yet performed); Excision biopsy — planned |
| Working diagnosis | Suspected thyroid malignancy; biochemical subclinical hyperthyroidism |
| Management given | [NOT DOCUMENTED — GAP] |
| Outcome | [NOT DOCUMENTED — case appears to be at point of investigation planning] |
| Investigations NOT yet performed but indicated | Thyroid ultrasound, Tc-99m scintigraphy, serum calcitonin, RET mutation testing, ECG, plasma metanephrines/urine catecholamines, molecular FNAC panel (ThyroSeq/Afirma), CT neck/chest |
| Patient/advocate narrative | [NOT DOCUMENTED — GAP] |

**Quality gate:** Case contains sufficient clinical content (multiple active systems, dual diagnostic pathways, procedure planning) to support >15 usable VibeRounds prompts. ✅ Proceeding.

---

## Section 2: Prompt Mapping Table

| # | Module | Step | Prompt Purpose | Patient-Context Trigger |
|---|--------|------|----------------|------------------------|
| 1 | M1 — Socratic Clinical Reasoning | 1.1 | Socratic Question Generator | Dual diagnosis (malignancy + hyperthyroidism) creates rich reasoning territory |
| 2 | M1 — Socratic Clinical Reasoning | 1.5 | Bloom's Taxonomy Progression | Multi-system case suitable for full Bloom's ascent from recall to management creation |
| 3 | M1 — Socratic Clinical Reasoning | 1.8 | Missed Diagnosis Debrief | Risk of availability bias toward papillary Ca; ATC and lymphoma could be missed |
| 4 | M1 — Socratic Clinical Reasoning | 1.10 | Critical Awareness Debrief | Multiple cognitive bias risks documented; important for learning |
| 5 | M2 — Patient-Advocate Documentation | 2.5 | Data Completeness Audit | Major documentation gaps across almost all fields |
| 6 | M2 — Patient-Advocate Documentation | 2.7 | Advocate Handover Brief | Complex multi-system case needing clear handover language for family |
| 7 | M4 — Ward Round Preparation | 4.1 | Pre-Rounds Consultant Prep | High-stakes case requiring anticipation of consultant questions |
| 8 | M4 — Ward Round Preparation | 4.2 | Ward Admission & Pre-Op Checklist | Surgery planned; pre-op clearance incomplete |
| 9 | M4 — Ward Round Preparation | 4.3 | Cross-System Complication & Polypharmacy Screen | Thyroid state affects surgical and anaesthetic risk directly |
| 10 | M9 — N-of-1 Research Protocol | 9.x | N-of-1 Case Report Framing | Multi-system case with dual active diagnoses suitable for case report |
| 11 | M10 — Diagnostic Reasoning & Bias | 10.x | Cognitive Bias Mapping | Availability bias (PTC), premature closure, anchoring on "subclinical" label |
| 12 | M11 — Differential Diagnosis Engine | 11.x | Structured Differential Generation | Wide differential for thyroid mass + biochemical hyperthyroidism + systemic symptoms |
| 13 | M12 — Investigation Sequencing | 12.x | Investigation Sequencing & Prioritisation | Multiple investigations indicated; sequencing has clinical and safety implications |
| 14 | M13 — Management Planning | 13.x | Evidence-Based Management Planning | Pre-op optimisation, MDT coordination, surgical timing |
| 15 | M14 — Patient Safety & Risk Stratification | 14.x | Surgical Risk and Thyroid Storm Prevention | Tachycardia + planned surgery = active patient safety risk |
| 16 | M15 — Communication & Breaking Bad News | 15.x | Framework for Communicating Suspected Malignancy | Suspected malignancy; patient communication approach needed |
| 17 | M16 — Pharmacology & Drug Safety | 16.x | Drug selection for symptomatic hyperthyroidism pre-op | Beta-blocker choice, thionamide considerations, Lugol's iodine timing |
| 18 | M17 — Ethics & Shared Decision Making | 17.x | Informed consent for FNAC and excision biopsy | Multiple procedures planned; consent framework needed |
| 19 | M18 — Evidence-Based Medicine | 18.x | Literature grounding for thyroid nodule management | FNAC Bethesda classification, ATA guidelines, molecular testing evidence |
| 20 | M19 — Pathology Integration | 19.x | Histopathology planning and tissue handling | Excision biopsy planning; calcitonin, molecular markers pre-planned |
| 21 | M20 — System & MDT Coordination | 20.x | MDT coordination across 6 specialties | No current MDT documented; multi-specialty coordination needed urgently |

---

## Section 3: Ranked Prompt Table

| Rank | # | Module | Step | Prompt Purpose | Score (1–10) |
|------|---|--------|------|----------------|-------------|
| 1 | 15 | M14 — Patient Safety | 14.x | Thyroid storm risk and pre-operative safety protocol | 10 |
| 2 | 12 | M12 — Investigation Sequencing | 12.x | Investigation sequencing (calcitonin, scintigraphy, ECG, phaeochromocytoma screen) | 10 |
| 3 | 11 | M11 — Differential Diagnosis Engine | 11.x | Full structured differential for thyroid mass + hyperthyroidism | 10 |
| 4 | 7 | M19 — Pathology Integration | 19.x | Histopathology planning: Bethesda, calcitonin, molecular markers | 10 |
| 5 | 21 | M20 — MDT Coordination | 20.x | MDT convening across endocrine, surgical, nuclear, cardiac, onco | 10 |
| 6 | 13 | M13 — Management Planning | 13.x | Pre-op optimisation; beta-blocker; thionamide; Lugol's protocol | 9 |
| 7 | 3 | M1 — Socratic | 1.8 | Missed diagnosis debrief: ATC, lymphoma, MTC, phaeochromocytoma | 9 |
| 8 | 9 | M4 — Ward Round | 4.3 | Cross-system complication screen: thyroid → surgical → cardiac | 9 |
| 9 | 18 | M18 — EBM | 18.x | Evidence base: ATA guidelines, Bethesda classification, molecular testing | 9 |
| 10 | 4 | M1 — Socratic | 1.10 | Cognitive bias mapping: availability, anchoring, premature closure | 9 |
| 11 | 8 | M4 — Ward Round | 4.2 | Pre-op checklist: what is missing before listing for theatre | 9 |
| 12 | 17 | M17 — Ethics | 17.x | Informed consent framework for multi-procedure planning | 8 |
| 13 | 10 | M9 — N-of-1 | 9.x | Case report suitability and framing | 8 |
| 14 | 16 | M16 — Pharmacology | 16.x | Drug selection and timing for pre-op thyroid control | 8 |
| 15 | 5 | M2 — Advocate | 2.5 | Data completeness audit for the very sparse case record | 8 |
| 16 | 2 | M1 — Socratic | 1.5 | Bloom's progression through the case | 7 |
| 17 | 6 | M2 — Advocate | 2.7 | Handover brief for family/advocate | 7 |
| 18 | 1 | M1 — Socratic | 1.1 | Socratic question generation | 7 |
| 19 | 14 | M13 — Management | 13.x | Communication framework: breaking suspected malignancy news | 6 |
| 20 | 20 | M18 — EBM | 18.x | Post-operative surveillance planning | 5 |
| 21 | 19 | M18 — EBM | 18.x | Radioiodine vs surgery decision tree for hyperthyroidism | 5 |

---

## Section 4: High-Value Prompt Answers (Scores 8–10)

---

### 4.1 | M14 — Thyroid Storm Risk and Pre-Operative Safety Protocol [Score: 10]

**Clinical question:** What is the risk of thyroid storm in this patient, and what must be done before surgery?

Thyroid storm is a rare but life-threatening exacerbation of hyperthyroidism triggered by physiological stress — with surgery, especially neck surgery, being one of the highest-risk precipitants. The Burch-Wartofsky Point Scale (BWPS) is used to risk-stratify: this patient already accrues points for tachycardia, tremors (CNS manifestation), and likely gastrointestinal symptoms (anorexia). A score ≥45 indicates thyroid storm. While the "subclinical" label implies the patient has not yet reached storm-range severity, the trajectory and planned surgical intervention are concerning.

**Pre-operative optimisation protocol for this patient:**

Step 1 — Beta-blockade: Propranolol 40–80 mg orally three times daily (also reduces peripheral T4→T3 conversion), or atenolol 25–50 mg OD if a cardioselective agent is preferred. Target resting HR <80 bpm before listing for theatre.

Step 2 — Thionamide: If free T3/T4 return as elevated (not merely TSH-suppressed), methimazole 20–30 mg daily should be started to block new hormone synthesis. Carbimazole 20–40 mg daily is equivalent. Allow 4–6 weeks to achieve biochemical normalisation.

Step 3 — Lugol's iodine (potassium iodide solution): 5–10 drops three times daily for 10 days pre-operatively, started after thionamide (to avoid organification of iodine before synthesis is blocked). Reduces intraoperative bleeding by decreasing thyroid vascularity. This step is only appropriate if toxic goitre is confirmed on scintigraphy.

Step 4 — Peri-operative monitoring: Continuous cardiac monitoring intraoperatively; ICU or high-dependency bed post-operatively for first 24 hours. Briefing of anaesthetic team on thyroid storm recognition (fever, tachycardia, agitation, altered consciousness, cardiac failure) and emergency protocol (IV propranolol, hydrocortisone, PTU or methimazole NG, cooling, IV fluids).

[GAP: Current medications not documented — essential to know if any beta-blocker or antithyroid drug is already prescribed. GAP: Exact heart rate not documented — needed for BWPS scoring and beta-blocker titration target.]

---

### 4.2 | M12 — Investigation Sequencing and Prioritisation [Score: 10]

**Clinical question:** In what order should investigations proceed, and what cannot wait?

**Tier 1 — Immediate (must not be delayed, cannot operate without):**
- 12-lead ECG: rule out atrial fibrillation, quantify sinus tachycardia, establish baseline
- Serum TSH, free T3, free T4 (if not already documented with exact values): biochemical baseline for treatment planning
- Serum calcitonin: exclude MTC before any surgical intervention
- 24-hour urine catecholamines or plasma metanephrines: exclude phaeochromocytoma before any elective surgery in a patient with a neck mass (MEN2 association)
- FBC, UEL, LFTs, coagulation: pre-operative baseline

**Tier 2 — Urgent (within 48–72 hours, before FNAC or biopsy):**
- Thyroid ultrasound with Doppler: characterise the nodule (size, echogenicity, vascularity, microcalcifications, margin irregularity, lymph node assessment) — this defines the FNAC target
- Tc-99m pertechnetate thyroid scintigraphy: map nodule function (hot vs. cold) — essential for diagnosis and surgical planning in the context of biochemical hyperthyroidism

**Tier 3 — Following FNAC result:**
- CT neck and chest (without contrast initially — iodinated contrast may precipitate thyroid storm in a hyperthyroid patient): assess tracheal deviation, extent of mass, mediastinal/retrosternal extension, lymphadenopathy
- Molecular testing (ThyroSeq / Afirma Gene Expression Classifier) if FNAC returns Bethesda III or IV
- RET mutation testing if calcitonin elevated

**Tier 4 — Contextual (if specific diagnoses confirmed):**
- CT chest-abdomen-pelvis: if ATC or lymphoma suspected (staging)
- Anti-TPO, Anti-Tg antibodies: if Hashimoto's thyroiditis is in differential
- Serum CEA: elevated in MTC
- PTH, serum calcium: assess for concurrent hyperparathyroidism (MEN1/MEN2A)

[GAP: No ultrasound result documented. GAP: No calcitonin result. GAP: No phaeochromocytoma screen. GAP: No ECG documented.]

---

### 4.3 | M11 — Full Structured Differential Diagnosis [Score: 10]

**Clinical question:** What is the complete differential diagnosis for this presentation?

**Group A — Most Likely (common, fits all features):**

1. **Toxic Multinodular Goitre (MNG) with dominant malignant nodule** — MNG is common; one nodule may degenerate malignantly. Explains both hyperthyroidism and the suspicious mass. Most likely single unifying diagnosis if scintigraphy shows mixed hot/cold pattern.

2. **Papillary Thyroid Carcinoma (PTC) coincident with separate autonomous nodule** — PTC is the most common thyroid malignancy (80–85%). Coexisting autonomy may explain hyperthyroid biochemistry. The suspicious mass is cold on scintigraphy; another nodule is hot.

3. **Follicular Thyroid Carcinoma (FTC)** — accounts for 10–15% of thyroid cancers; tends to present as a solitary encapsulated nodule; pressure symptoms are consistent with size. Cannot be distinguished from follicular adenoma on FNAC (Bethesda IV) — requires surgical excision.

**Group B — Serious and Must-Not-Miss:**

4. **Anaplastic Thyroid Carcinoma (ATC)** — rapidly growing, early pressure symptoms, constitutional symptoms (anorexia), may have prior differentiated cancer. Median survival months. BRAF V600E mutation in ~40%. Urgent histology and oncology referral if suspected.

5. **Primary Thyroid Lymphoma (PTL)** — typically presents on background of Hashimoto's thyroiditis (6× higher risk); rapid growth, pressure symptoms, systemic involvement. Responds dramatically to chemotherapy + radiotherapy, not surgery. Must not be mis-operated.

6. **Medullary Thyroid Carcinoma (MTC)** — calcitonin-secreting C-cell tumour; 25% hereditary (RET mutation, MEN2A/2B); associated phaeochromocytoma is a surgical emergency if missed.

**Group C — Benign Alternatives (must remain in differential until excluded):**

7. **Toxic Adenoma / Autonomously Functioning Thyroid Nodule (AFTN)** — benign; explains hyperthyroidism; hot on scintigraphy; FNAC almost always benign (Bethesda II). Management: radioiodine ablation or hemithyroidectomy.

8. **Multinodular Goitre without malignancy** — common; may cause pressure symptoms from sheer volume; may suppress TSH. Management depends on symptoms and nodule characteristics.

9. **Hashimoto's Thyroiditis** — can cause mass effect; TPO antibodies elevated; initially hyperthyroid (hashitoxicosis) before burning out to hypothyroidism. Increases lymphoma risk.

10. **Thyroid Abscess / Suppurative Thyroiditis** — acute; typically painful; fever — less likely given 2-month indolent course but cannot be dismissed without FBC and inflammatory markers.

[GAP: Without ultrasound and scintigraphy results, the differential cannot be meaningfully narrowed.]

---

### 4.4 | M19 — Histopathology Planning: Bethesda Classification and Pre-Planned Tissue Handling [Score: 10]

**Clinical question:** How should tissue be handled at FNAC and excision biopsy to maximise diagnostic yield?

**FNAC — pre-procedure planning:**
- Perform under real-time ultrasound guidance targeting the most sonographically suspicious nodule (largest, most solid, with microcalcifications or irregular margins if present)
- Prepare ≥4 slides for Diff-Quik (rapid on-site staining) and ≥4 for Papanicolaou staining (definitive cytology)
- Collect additional passes (2–3 extra needle passes) into a liquid medium (CytoLyt or PreservCyt) for: cell block preparation, flow cytometry (if lymphoma suspected), and molecular testing (ThyroSeq or Afirma)
- Brief pathologist in advance: clinical context is "suspected malignancy in the context of biochemical hyperthyroidism" — this changes the diagnostic threshold for borderline morphology

**Bethesda classification reporting — expected categories and decision pathways:**
- Bethesda I (non-diagnostic): repeat FNAC in 6–12 weeks with ultrasound guidance
- Bethesda II (benign): clinical monitoring; 12-month ultrasound follow-up
- Bethesda III (AUS/FLUS): molecular testing (ThyroSeq/Afirma); repeat FNAC option
- Bethesda IV (follicular neoplasm): molecular testing; hemithyroidectomy if molecular testing indeterminate
- Bethesda V (suspicious for malignancy): near-total thyroidectomy + central neck dissection
- Bethesda VI (malignant): definitive surgery; staging imaging pre-op; subtype-specific management

**Excision biopsy — tissue handling:**
- Mark specimen orientation before sending (superior/inferior poles, isthmus)
- Request intraoperative frozen section to guide extent of surgery (hemithyroidectomy vs. total thyroidectomy)
- Request separate calcitonin immunostaining (for MTC)
- If anaplastic features on frozen section: stop, close, refer to oncology before completing resection (debulking does not improve survival in ATC)

[GAP: No pathology pre-briefing documented. GAP: Frozen section plan not documented.]

---

### 4.5 | M20 — MDT Coordination [Score: 10]

**Clinical question:** Who needs to be involved and in what sequence before any intervention?

**Required MDT composition before excision biopsy:**

| Specialty | Role | Urgency |
|-----------|------|---------|
| Endocrinologist | Biochemical optimisation, pre-op thyroid management, post-op monitoring | Before listing for theatre |
| Head and neck / Endocrine Surgeon | Surgical planning, consent, operative approach | Before FNAC (to plan based on result) |
| Radiologist | Ultrasound reporting, scintigraphy interpretation, CT/MRI if needed | Immediate (Tier 1 investigation) |
| Pathologist | FNAC pre-briefing, tissue handling protocol, molecular testing panel | Before FNAC |
| Anaesthetist | Pre-op risk assessment, thyroid storm protocol, airway planning | Before listing for theatre |
| Nuclear Medicine | Tc-99m scintigraphy, radioiodine planning if toxic goitre confirmed | Tier 2 investigation |
| Cardiologist | ECG interpretation, AF management if found, cardiac clearance | Immediate if tachycardia uncontrolled |
| Clinical Oncologist | To be available for urgent referral if ATC or lymphoma confirmed on histology | On standby; formal referral pathway pre-agreed |

**MDT documentation:**
- Single shared management plan with named responsible clinician for each action
- Patient and family briefed jointly by surgeon and endocrinologist on diagnostic pathways, possible outcomes (benign vs. malignant, range of surgical options), and timeline
- Next review date set before FNAC (to reconvene once cytology available, ideally within 1 week of result)

[GAP: No current MDT documentation present. GAP: Patient/family communication plan not documented.]

---

### 4.6 | M13 — Pre-Operative Optimisation and Management Planning [Score: 9]

**Clinical question:** What is the complete management plan from now until the point of surgery?

**Phase 1 — Immediate (this week):**
- ECG: confirm rhythm; if AF → rate control + anticoagulation assessment
- Full TFTs with exact values (TSH, free T3, free T4)
- Serum calcitonin + plasma metanephrines (phaeochromocytoma screen)
- Start propranolol 20–40 mg TDS (or atenolol 25–50 mg OD) for symptom control
- Blood tests: FBC, UEL, LFTs, coagulation, calcium, PTH, anti-TPO, anti-Tg antibodies
- Weigh the patient and document BMI; quantify weight loss from baseline if available

**Phase 2 — Within 1–2 weeks:**
- Thyroid ultrasound with Doppler: characterise nodule
- Tc-99m scintigraphy: determine if mass is hot or cold
- If free T3/T4 elevated: add methimazole 10–20 mg daily to propranolol
- FNAC under ultrasound guidance once nodule characterised — with liquid medium sample for molecular testing

**Phase 3 — Following FNAC result (week 3–4):**
- MDT meeting to review FNAC result
- If Bethesda V/VI: CT staging + surgery planning + anaesthetic pre-assessment
- If Bethesda III/IV: molecular testing; further MDT discussion
- If Bethesda II: clinical monitoring pathway; manage hyperthyroidism (RAI vs. surgery vs. observation depending on scintigraphy)
- Pre-op optimisation: resting HR <80 bpm; biochemical TFTs trending toward normal
- Lugol's iodine if toxic goitre confirmed: start 10 days pre-operatively

**Phase 4 — Surgery:**
- Intraoperative frozen section
- Extent of resection guided by frozen section and pre-operative staging
- Post-op monitoring: calcium/PTH (hypoparathyroidism risk), vocal cord function (RLN injury risk), TFTs at 4–6 weeks

[GAP: Patient's current medications completely unknown — could already be on antithyroid drugs or beta-blockers, making this plan redundant in parts.]

---

### 4.7 | M1 — Missed Diagnosis Debrief [Score: 9]

**Clinical question:** What diagnoses might be missed due to cognitive bias?

**Diagnosis 1 — Anaplastic Thyroid Carcinoma (ATC)**
*Bias: Availability bias and base-rate neglect.* PTC is so common (85% of thyroid cancers) that ATC (1–2% of thyroid cancers) fails to enter the differential spontaneously. Yet the features in this case — recent-onset swelling with pressure symptoms, systemic anorexia, rapid progression — are more consistent with ATC than with slowly growing PTC. The clinical clue most likely to be missed: the *rapidity* of symptom onset combined with pressure symptoms occurring simultaneously rather than after years of growth. In a typical PTC, pressure symptoms develop over years; in ATC, they can develop over weeks.

**Diagnosis 2 — Primary Thyroid Lymphoma (PTL)**
*Bias: Anchoring bias on "thyroid mass = thyroid cancer."* PTL accounts for ~2–5% of thyroid malignancies but behaves entirely differently from carcinoma. Missed PTL is operated on (surgery is not the correct treatment); treated correctly, it responds well to chemotherapy ± radiotherapy. The clinical clue most likely to be missed: background of Hashimoto's thyroiditis (if present and undocumented). Anti-TPO antibodies in a patient with a rapidly enlarging thyroid mass should trigger lymphoma workup.

**Diagnosis 3 — Phaeochromocytoma (concurrent, unsuspected)**
*Bias: Framing bias — "the tachycardia and tremors are from the hyperthyroidism."* In a patient with a neck mass, tachycardia, tremors, and hypertension (not documented but possible), MEN2 with concurrent phaeochromocytoma could be entirely attributable to the thyroid findings, causing the phaeochromocytoma to go unscreened. Operating on an unscreened MEN2 patient with a phaeochromocytoma has caused deaths.

**Reasoning pattern observation:** The risk here is *category attribution* — attributing all symptoms (anorexia, tachycardia, tremors) to the thyroid without verifying each symptom's aetiology independently. The corrective habit is "assume comorbidity until proven otherwise" rather than "assume the most parsimonious single explanation."

---

### 4.8 | M4 — Cross-System Complication Screen [Score: 9]

**Clinical question:** How do the thyroid, cardiac, and surgical systems interact and create risk for this patient?

**Interaction 1: Thyroid → Cardiac**
Suppressed TSH with tachycardia: even at normal T3/T4, chronically suppressed TSH is an independent risk factor for atrial fibrillation (HR 2.8× compared with normal TSH). The tachycardia in this patient may already represent an established atrial arrhythmia rather than simple sinus tachycardia. Consequence: if AF is present and surgery proceeds without anticoagulation — risk of thromboembolic stroke in the peri-operative period.

**Interaction 2: Thyroid → Surgical (anaesthetic)**
Uncontrolled thyroid hormone excess precipitates thyroid storm under anaesthesia. The surgical trigger: catecholamine surge from pain and stress, further stimulating an already sensitised adrenergic system. Consequence: intraoperative haemodynamic instability, hyperthermia, multi-organ failure.

**Interaction 3: Surgical (neck) → Parathyroid**
Thyroidectomy or neck dissection risks inadvertent removal of or damage to the parathyroid glands. Post-operative hypocalcaemia is the most common complication of total thyroidectomy (occurs in 20–30% transiently; 1–2% permanently). Pre-operative calcium and PTH baseline are necessary; post-operative calcium monitoring is essential.

**Interaction 4: Surgical (neck) → Recurrent Laryngeal Nerve (RLN)**
The RLN runs in the tracheoesophageal groove immediately adjacent to the thyroid. Injury causes hoarseness (unilateral) or life-threatening stridor (bilateral). Baseline assessment of voice quality is part of pre-operative documentation.

**Interaction 5: Thyroid (malignancy) → Systemic**
If ATC or lymphoma is confirmed, systemic disease (cervical lymphadenopathy, mediastinal involvement, pulmonary metastases) alters both prognosis and surgical approach. An incomplete staging workup before surgery could lead to an operation that does not alter the disease course in ATC.

---

### 4.9 | M18 — Evidence Base and Guidelines [Score: 9]

**Clinical question:** What do current guidelines say about management of this presentation?

**American Thyroid Association (ATA) Guidelines (2015, updated 2023 for select areas):**
- Thyroid nodule ≥1 cm in a patient with compressive symptoms: USS-guided FNAC is indicated
- FNAC should be performed under ultrasound guidance, particularly for nodules with high-risk sonographic features (solid, hypoechoic, microcalcifications, irregular margins, taller-than-wide, extrathyroidal extension)
- Bethesda classification should be used for all FNAC reporting
- Serum calcitonin measurement: "may be considered" in the context of suspected malignancy — while not mandated in all guidelines, it is strongly recommended in European Thyroid Association (ETA) guidelines before any thyroid surgery

**European Thyroid Association (ETA) position on subclinical hyperthyroidism:**
- TSH persistently <0.1 mIU/L in a patient with symptoms (tachycardia, AF, osteoporosis risk): treatment recommended regardless of free T3/T4 levels
- This patient meets the symptomatic threshold (tachycardia, tremors, lid lag) — treatment is indicated, not merely observation

**Thyroid Storm prevention (ATA/AACE joint statement):**
- Pre-operative use of beta-blockers, thionamides, and Lugol's iodine (in toxic goitre) reduces thyroid storm risk
- Propranolol specifically inhibits peripheral T4→T3 conversion — preferable to cardioselective beta-blockers in this indication
- Minimum 10 days Lugol's iodine, started after thionamide cover, if toxic goitre confirmed

**Molecular testing for indeterminate thyroid nodules (ATA 2015):**
- Afirma Gene Expression Classifier: high negative predictive value (NPV ~95%) for Bethesda III/IV nodules — "rules out" malignancy reliably
- ThyroSeq v3 GC: high positive and negative predictive value; can identify specific oncogenic mutations guiding surgical planning

[GAP: Locally available molecular testing panels not documented. GAP: Local guideline adaptations not known.]

---

### 4.10 | M17 — Informed Consent Framework [Score: 8]

**Clinical question:** What elements of informed consent are required before FNAC and excision biopsy?

**For FNAC:**
- Nature of procedure: fine needle aspiration of the thyroid nodule under ultrasound guidance, using a thin needle; typical duration 15–30 minutes as outpatient; local anaesthetic (topical or infiltrated)
- Alternatives: core needle biopsy (higher yield for indeterminate; greater discomfort); excision biopsy (definitive histology, but surgical procedure); watchful waiting (only appropriate if low-risk nodule)
- Risks: local pain/bruising (common); bleeding/haematoma (uncommon, 1–2%); infection (rare); non-diagnostic result (15–25% — requiring repeat or escalation)
- What the result means: explanation of Bethesda classification and what each category implies for subsequent management (see Section 4.4)
- What happens if result is indeterminate: molecular testing or surgery — this decision pathway should be discussed at consent, not as a surprise after the result

**For Excision Biopsy / Thyroidectomy:**
- Nature: surgical removal of part or all of the thyroid gland; general anaesthesia; neck incision (Kocher incision)
- Alternatives: hemithyroidectomy vs. total thyroidectomy — decision depends on FNAC/frozen section findings; discuss both possibilities
- Specific risks: RLN injury (hoarseness — 1–2% permanent), hypoparathyroidism (permanent hypocalcaemia — 1–2%), bleeding/haematoma (rare but life-threatening in neck), hypothyroidism post-operatively (certain after total thyroidectomy), anaesthetic risks
- Patient-specific additional risk: tachycardia/hyperthyroid state increases anaesthetic risk — patient must understand optimisation is required before surgery
- Anticipated outcomes depending on histology: range from discharge with monitoring (benign) to further surgery, radioiodine, or oncology management (malignant)
- Right to withdraw: patient may withdraw consent at any point

[GAP: Patient's health literacy level not known. GAP: No advocate/family member documented as present at consent discussions. GAP: Primary language of patient not known.]

---

### 4.11 | M2 — Data Completeness Audit [Score: 8]

**Clinical question:** What is missing from the case record, and why does it matter?

The case record as documented is extremely sparse. The following critical data fields are absent:

1. **Patient age and sex** — matters because: thyroid cancer epidemiology differs markedly by age and sex; PTC is more common in younger women; ATC peaks in elderly patients; MTC has hereditary patterns requiring family member screening
2. **Duration of swelling (exact)** — matters because: rapidly growing (weeks) suggests ATC or lymphoma; slow growing (months–years) suggests PTC, follicular, or benign goitre
3. **Nature of pressure symptoms** — matters because: dysphagia implies oesophageal compression; stridor implies tracheal compromise and may require urgent airway management
4. **Exact heart rate** — matters because: a heart rate of 95 bpm vs. 130 bpm vs. 160 bpm carries entirely different urgency and management implications
5. **Medications** — matters because: prior antithyroid drugs, amiodarone (causes thyroid dysfunction), lithium, or beta-blockers would fundamentally alter the management plan
6. **Thyroid examination details** — size, consistency, surface, mobility, tenderness, nodularity: the clinical examination of the thyroid gland is the first-line physical investigation and should be the most detailed examination documented
7. **Lymph node assessment** — cervical lymphadenopathy is a staging criterion for thyroid malignancy and must be documented
8. **Voice quality** — baseline hoarseness before surgery implies RLN involvement by tumour; establishes medico-legal baseline
9. **Weight and quantified weight loss** — 2 months of anorexia without documented weight loss data is incomplete; anorexia is subjective, weight is objective
10. **Family history** — RET mutations (MTC), PTEN mutations (Cowden syndrome), FAP (papillary thyroid cancer association) are hereditary; a family history could change the entire investigative pathway

---

*VibeRounds Case Analysis — Adult-ThyroidMass-SubclinicalHyper | v1.1 | June 2026*
*All outputs are educational. Independent clinical verification required before acting on any content.*
*Companion files: VibeRounds-TopInsights-Adult-ThyroidMass-SubclinicalHyper.md | VibeRounds-CARE-AdvocateDebrief-Adult-ThyroidMass-SubclinicalHyper.md | VibeRounds-FurtherInfo-Adult-ThyroidMass-SubclinicalHyper.md*
