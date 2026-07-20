// concepts-investigations.js
// Concept pool of investigations / diagnostic workup, keyed by id.
// TO ADD: reuse an existing id if the same test applies elsewhere; otherwise add one.

const INVESTIGATIONS = {
  "total-leukocyte-count-neutrophilia": "Total leukocyte count (neutrophilia)",
  "crp": "CRP",
  "ultrasound-abdomen": "Ultrasound abdomen",
  "ct-abdomen-if-diagnosis-unclear": "CT abdomen (if diagnosis unclear)",
  "alvarado-score": "Alvarado score",
  "12-lead-ecg-st-elevation-depression": "12-lead ECG (ST elevation/depression)",
  "serial-troponins": "Serial troponins",
  "echocardiography-wall-motion": "Echocardiography (wall motion)",
  "coronary-angiography": "Coronary angiography",
  "sputum-afb-smear-cbnaat": "Sputum AFB smear/CBNAAT",
  "chest-x-ray-upper-lobe-cavitation": "Chest X-ray (upper lobe cavitation)",
  "sputum-culture-gold-standard": "Sputum culture (gold standard)",
  "mantoux-igra-latent-tb": "Mantoux/IGRA (latent TB)",
  "fasting-random-plasma-glucose": "Fasting/random plasma glucose",
  "hba1c": "HbA1c",
  "oral-glucose-tolerance-test": "Oral glucose tolerance test",
  "urine-microalbumin": "Urine microalbumin",
  "lipid-profile": "Lipid profile",
  "fundus-exam": "Fundus exam",
  "chest-x-ray-lobar-consolidation": "Chest X-ray (lobar consolidation)",
  "sputum-gram-stain-culture": "Sputum Gram stain/culture",
  "curb-65-severity-score": "CURB-65 severity score",
  "blood-cultures-if-severe": "Blood cultures (if severe)",
  "serum-creatinine-egfr": "Serum creatinine/eGFR",
  "urine-albumin-creatinine-ratio": "Urine albumin-creatinine ratio",
  "renal-ultrasound": "Renal ultrasound",
  "serum-electrolytes-calcium-phosphate-pth": "Serum electrolytes, calcium/phosphate/PTH",
  "lumbar-puncture-with-csf-analysis": "Lumbar puncture with CSF analysis",
  "csf-gram-stain-culture": "CSF Gram stain/culture",
  "blood-cultures": "Blood cultures",
  "ct-head-before-lp-if-raised-icp-suspected": "CT head (before LP if raised ICP suspected)",
  "liver-function-tests": "Liver function tests",
  "ultrasound-abdomen-nodular-liver": "Ultrasound abdomen (nodular liver)",
  "upper-gi-endoscopy-varices": "Upper GI endoscopy (varices)",
  "liver-biopsy-fibroscan": "Liver biopsy/FibroScan",
  "child-pugh-meld-score": "Child-Pugh/MELD score",
  "rheumatoid-factor": "Rheumatoid factor",
  "anti-ccp-antibody": "Anti-CCP antibody",
  "esr-crp": "ESR/CRP",
  "x-ray-hands-erosions-joint-space-narrowing": "X-ray hands (erosions, joint space narrowing)",
  "non-contrast-ct-head-urgent-differentiate-bleed-vs-infarct": "Non-contrast CT head (urgent — differentiate bleed vs infarct)",
  "mri-brain-with-diffusion-weighted-imaging": "MRI brain with diffusion-weighted imaging",
  "carotid-doppler": "Carotid Doppler",
  "ecg-echocardiogram-cardioembolic-source": "ECG/echocardiogram (cardioembolic source)"
};

// concepts-investigations-advanced.js (appended below the common-investigations pool)
// Concept pool of ADVANCED / high-end-center investigations, keyed by id.
// These are tests that are not part of routine first-line workup — typically
// only available at tertiary/quaternary centers, used for diagnostic uncertainty,
// research-grade characterization, or specialist decision-making.
// Same rules as INVESTIGATIONS above: reuse an existing id if the same advanced
// test applies elsewhere; otherwise add one. Referenced from DISEASE_RELATIONS
// via the "advancedInvestigations" array, rendered as its own section below
// Complications in the UI.
const ADVANCED_INVESTIGATIONS = {
  "mri-abdomen-pregnancy-or-diagnostic-uncertainty": "MRI abdomen (pregnancy or diagnostic uncertainty)",
  "diagnostic-laparoscopy": "Diagnostic laparoscopy",
  "cardiac-mri-viability-scar-assessment": "Cardiac MRI (viability/scar assessment)",
  "intravascular-ultrasound-ivus-oct": "Intravascular ultrasound (IVUS)/OCT",
  "ct-coronary-angiography-high-resolution": "CT coronary angiography (high-resolution)",
  "genexpert-mtb-rif-ultra-with-resistance-genotyping": "GeneXpert MTB/RIF Ultra with resistance genotyping",
  "whole-genome-sequencing-drug-resistance": "Whole genome sequencing for drug resistance",
  "bronchoalveolar-lavage-afb-culture": "Bronchoalveolar lavage for AFB culture",
  "continuous-glucose-monitoring-cgm": "Continuous glucose monitoring (CGM)",
  "c-peptide-insulin-assay": "C-peptide/insulin assay",
  "genetic-testing-mody-panel": "Genetic testing (MODY panel) if atypical",
  "bronchoscopy-with-bal-severe-non-resolving": "Bronchoscopy with BAL (severe/non-resolving)",
  "multiplex-pcr-respiratory-panel": "Multiplex PCR respiratory panel",
  "procalcitonin-guided-therapy": "Procalcitonin-guided therapy",
  "renal-biopsy-histological-diagnosis": "Renal biopsy (histological diagnosis)",
  "genetic-testing-pkd-alport-panel": "Genetic testing (polycystic kidney/Alport panel)",
  "nuclear-renography-differential-function": "Nuclear renography (differential function)",
  "csf-multiplex-pcr-panel-biofire": "CSF multiplex PCR panel (BioFire)",
  "csf-lactate-procalcitonin": "CSF lactate/procalcitonin",
  "mri-brain-with-contrast-complications": "MRI brain with contrast (complications)",
  "transient-elastography-with-cap-fibroscan": "Transient elastography with CAP (FibroScan)",
  "hepatic-venous-pressure-gradient-hvpg": "Hepatic venous pressure gradient (HVPG) measurement",
  "genetic-autoimmune-liver-panel": "Genetic/autoimmune liver panel",
  "mri-hands-wrists-early-erosive-change": "MRI hands/wrists (early erosive change)",
  "musculoskeletal-ultrasound-power-doppler": "Musculoskeletal ultrasound with power Doppler",
  "hla-b27-genetic-panel": "HLA-B27/genetic panel (where relevant)",
  "ct-mr-perfusion-imaging": "CT/MR perfusion imaging",
  "digital-subtraction-angiography": "Digital subtraction angiography",
  "transesophageal-echocardiogram-cardioembolic-source": "Transesophageal echocardiogram (cardioembolic source)"
};
