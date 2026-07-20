// disease-relations-data.js
// THE DATA RELATION MAP.
// Maps each disease name to the concept IDs (from the concepts-*.js pools) that
// describe it. This is what a network graph is built from: each disease is a node,
// each concept id it references is a node, and each reference is an edge.
// 
// SCHEMA (keep this shape when extending):
// {
//   "<Disease name>": {              // must exactly match an entry in diseases-data.js
//     subject, tier, system: string  // subject must match a DISEASES key, tier is
//                                    //   "common" | "lessCommon" | "rare", system should
//                                    //   match a CLINICAL_FINDINGS key
//     labels: {                      // classification badges
//       onset, course, severity, mortality, curable, treatment: string
//       contagious, reversible: boolean
//     },
//     symptoms: [id, ...]            // ids from concepts-symptoms.js
//     signs: [id, ...]               // ids from concepts-signs.js
//     investigations: [id, ...]      // ids from concepts-investigations.js (common/first-line)
//     advancedInvestigations: [id,...] // ids from ADVANCED_INVESTIGATIONS in concepts-investigations.js
//                                    //   (tertiary/high-end-center-only tests; optional, [] if none)
//     relatedTopics: {               // ids from concepts-basic-science.js, per discipline
//       anatomy: [id,...], physiology: [id,...], biochemistry: [id,...], pathology: [id,...]
//     },
//     management: {                  // ids from concepts-management.js, per modality
//       pharmacology: [id,...], surgery: [id,...], psychology: [id,...], lifestyle: [id,...]
//     },
//     complications: [id, ...]       // ids from concepts-complications.js
//   }
// }
// 
// HOW TO ADD A NEW DISEASE (keeps the network graph consistent):
//   1. Pick the concept ids that already apply from the concepts-*.js pools —
//      reuse them as-is. Reusing an id is what creates a shared node/edge in the
//      graph between two diseases (e.g. two diseases both linking to fever).
//   2. If a symptom/sign/investigation/topic/management/complication you need does
//      NOT already exist in the relevant concepts-*.js pool, add ONE new "id": "Label"
//      entry to that pool first, then reference the new id here.
//   3. Never invent an id inline here without also adding it to its pool — every id
//      used below must resolve to a label in one of the concepts-*.js files, or it
//      will render as a broken/blank node in the graph.
//   4. Keep ids kebab-case and reasonably short; they are the graph's node keys.

const DISEASE_RELATIONS = {
  "Appendicitis (pathology)": {
    "subject": "Pathology",
    "tier": "common",
    "system": "Gastrointestinal & Abdominal",
    "labels": {
      "onset": "Acute",
      "course": "Progressive",
      "severity": "Serious",
      "mortality": "Moderate if untreated",
      "curable": "Curable",
      "treatment": "Definitive treatment",
      "contagious": false,
      "reversible": true
    },
    "symptoms": [
      "periumbilical-pain-migrating-to-right-iliac-fossa",
      "anorexia",
      "nausea-and-vomiting",
      "low-grade-fever"
    ],
    "signs": [
      "mcburneys-point-tenderness",
      "rovsings-sign",
      "psoas-sign",
      "obturator-sign",
      "rebound-tenderness",
      "guarding"
    ],
    "investigations": [
      "total-leukocyte-count-neutrophilia",
      "crp",
      "ultrasound-abdomen",
      "ct-abdomen-if-diagnosis-unclear",
      "alvarado-score"
    ],
    "advancedInvestigations": [
      "mri-abdomen-pregnancy-or-diagnostic-uncertainty",
      "diagnostic-laparoscopy"
    ],
    "relatedTopics": {
      "anatomy": [
        "vermiform-appendix-position-variants-retrocecal-pelvic",
        "blood-supply-appendicular-artery"
      ],
      "physiology": [
        "visceral-referred-pain-pathway-periumbilical-t10"
      ],
      "biochemistry": [
        "acute-phase-reactants-crp-raised-neutrophils"
      ],
      "pathology": [
        "luminal-obstruction-fecolith-distension-ischemia-gangrene-pe"
      ]
    },
    "management": {
      "pharmacology": [
        "empirical-iv-antibiotics-pre-post-op",
        "analgesia"
      ],
      "surgery": [
        "appendicectomy-open-or-laparoscopic-definitive-treatment"
      ],
      "psychology": [],
      "lifestyle": [
        "nil-by-mouth-pre-op",
        "gradual-diet-advancement-post-op"
      ]
    },
    "complications": [
      "perforation",
      "peritonitis",
      "appendicular-abscess-mass",
      "sepsis"
    ]
  },
  "Ischemic heart disease / myocardial infarction": {
    "subject": "Pathology",
    "tier": "common",
    "system": "Cardiovascular",
    "labels": {
      "onset": "Acute",
      "course": "Progressive",
      "severity": "Life-threatening",
      "mortality": "High if untreated",
      "curable": "Not curable",
      "treatment": "Definitive treatment",
      "contagious": false,
      "reversible": false
    },
    "symptoms": [
      "crushing-central-chest-pain-radiating-to-left-arm-jaw",
      "diaphoresis",
      "breathlessness",
      "nausea"
    ],
    "signs": [
      "levines-sign",
      "third-heart-sound-s3-gallop",
      "bradycardia",
      "hypotension",
      "raised-jugular-venous-pressure"
    ],
    "investigations": [
      "12-lead-ecg-st-elevation-depression",
      "serial-troponins",
      "echocardiography-wall-motion",
      "coronary-angiography"
    ],
    "advancedInvestigations": [
      "cardiac-mri-viability-scar-assessment",
      "intravascular-ultrasound-ivus-oct",
      "ct-coronary-angiography-high-resolution"
    ],
    "relatedTopics": {
      "anatomy": [
        "coronary-artery-territories-lad-lcx-rca"
      ],
      "physiology": [
        "cardiac-conduction-system",
        "frank-starling-mechanism",
        "myocardial-oxygen-supply-demand-balance"
      ],
      "biochemistry": [
        "cardiac-troponin-i-t-kinetics",
        "ck-mb",
        "atherogenic-lipid-profile-ldl-oxidation"
      ],
      "pathology": [
        "atherosclerotic-plaque-rupture-thrombus-coronary-occlusion-c"
      ]
    },
    "management": {
      "pharmacology": [
        "aspirin-p2y12-inhibitor-dual-antiplatelet",
        "statins",
        "beta-blockers",
        "ace-inhibitors",
        "thrombolytics-if-pci-unavailable"
      ],
      "surgery": [
        "percutaneous-coronary-intervention-pci-stenting",
        "cabg-multivessel-disease"
      ],
      "psychology": [
        "cardiac-rehabilitation-counseling",
        "screening-for-post-mi-depression"
      ],
      "lifestyle": [
        "smoking-cessation",
        "low-salt-low-fat-diet",
        "supervised-exercise-program",
        "weight-management"
      ]
    },
    "complications": [
      "arrhythmia-vf",
      "cardiogenic-shock",
      "papillary-muscle-rupture",
      "heart-failure",
      "ventricular-aneurysm"
    ]
  },
  "Pulmonary tuberculosis": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "Respiratory",
    "labels": {
      "onset": "Chronic",
      "course": "Progressive",
      "severity": "Serious",
      "mortality": "High if untreated",
      "curable": "Curable",
      "treatment": "Definitive treatment",
      "contagious": true,
      "reversible": true
    },
    "symptoms": [
      "chronic-cough-2-weeks",
      "evening-rise-of-temperature",
      "night-sweats",
      "weight-loss",
      "hemoptysis"
    ],
    "signs": [
      "coarse-crackles",
      "bronchial-breathing",
      "digital-clubbing-respiratory-cause",
      "cachexia",
      "fever"
    ],
    "investigations": [
      "sputum-afb-smear-cbnaat",
      "chest-x-ray-upper-lobe-cavitation",
      "sputum-culture-gold-standard",
      "mantoux-igra-latent-tb"
    ],
    "advancedInvestigations": [
      "genexpert-mtb-rif-ultra-with-resistance-genotyping",
      "whole-genome-sequencing-drug-resistance",
      "bronchoalveolar-lavage-afb-culture"
    ],
    "relatedTopics": {
      "anatomy": [
        "apical-lung-segments-favored-site-high-po2"
      ],
      "physiology": [
        "ventilation-perfusion-relationships-in-apex-vs-base"
      ],
      "biochemistry": [
        "mycolic-acid-cell-wall-acid-fastness-basis"
      ],
      "pathology": [
        "caseating-granuloma-formation",
        "ghon-focus-complex",
        "post-primary-reactivation"
      ]
    },
    "management": {
      "pharmacology": [
        "intensive-phase-isoniazid-rifampicin-pyrazinamide-ethambutol",
        "continuation-phase-isoniazid-rifampicin"
      ],
      "surgery": [],
      "psychology": [
        "adherence-counseling-dots",
        "stigma-psychosocial-support"
      ],
      "lifestyle": [
        "nutritional-supplementation",
        "respiratory-hygiene-isolation-during-infectious-period",
        "contact-tracing-of-household"
      ]
    },
    "complications": [
      "multidrug-resistance-mdr-tb",
      "massive-hemoptysis",
      "pleural-effusion-empyema",
      "miliary-spread"
    ]
  },
  "Type 2 diabetes mellitus": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "General & Vital Signs",
    "labels": {
      "onset": "Chronic",
      "course": "Chronic-stable",
      "severity": "Serious",
      "mortality": "Moderate if untreated",
      "curable": "Manageable (chronic)",
      "treatment": "Supportive/symptomatic only",
      "contagious": false,
      "reversible": false
    },
    "symptoms": [
      "polyuria",
      "polydipsia",
      "polyphagia",
      "unexplained-weight-loss",
      "fatigue",
      "blurred-vision"
    ],
    "signs": [
      "acanthosis-nigricans",
      "delayed-capillary-refill",
      "peripheral-edema",
      "xerosis-dry-skin"
    ],
    "investigations": [
      "fasting-random-plasma-glucose",
      "hba1c",
      "oral-glucose-tolerance-test",
      "urine-microalbumin",
      "lipid-profile",
      "fundus-exam"
    ],
    "advancedInvestigations": [
      "continuous-glucose-monitoring-cgm",
      "c-peptide-insulin-assay",
      "genetic-testing-mody-panel"
    ],
    "relatedTopics": {
      "anatomy": [
        "pancreatic-islets-of-langerhans-beta-cells"
      ],
      "physiology": [
        "insulin-signaling-and-glut4-translocation",
        "counter-regulatory-hormones"
      ],
      "biochemistry": [
        "insulin-resistance-mechanisms",
        "hba1c-glycation-chemistry",
        "advanced-glycation-end-products"
      ],
      "pathology": [
        "progressive-beta-cell-dysfunction",
        "microvascular-vs-macrovascular-disease"
      ]
    },
    "management": {
      "pharmacology": [
        "metformin-first-line",
        "sglt2-inhibitors",
        "glp-1-agonists",
        "sulfonylureas",
        "insulin-advanced-disease"
      ],
      "surgery": [
        "bariatric-surgery-selected-obese-patients"
      ],
      "psychology": [
        "diabetes-distress-self-management-counseling"
      ],
      "lifestyle": [
        "structured-diet-plan-carbohydrate-counting",
        "regular-aerobic-exercise",
        "weight-reduction",
        "self-blood-glucose-monitoring",
        "foot-care-education"
      ]
    },
    "complications": [
      "diabetic-retinopathy",
      "nephropathy",
      "peripheral-neuropathy",
      "diabetic-foot-ulcer",
      "accelerated-atherosclerosis"
    ]
  },
  "Community-acquired pneumonia": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "Respiratory",
    "labels": {
      "onset": "Acute",
      "course": "Self-limiting",
      "severity": "Serious",
      "mortality": "Moderate if untreated",
      "curable": "Curable",
      "treatment": "Definitive treatment",
      "contagious": true,
      "reversible": true
    },
    "symptoms": [
      "fever-with-chills",
      "productive-cough",
      "pleuritic-chest-pain",
      "breathlessness"
    ],
    "signs": [
      "bronchial-breathing",
      "dull-percussion-note",
      "increased-tactile-fremitus",
      "egophony",
      "tachypnea"
    ],
    "investigations": [
      "chest-x-ray-lobar-consolidation",
      "sputum-gram-stain-culture",
      "curb-65-severity-score",
      "blood-cultures-if-severe"
    ],
    "advancedInvestigations": [
      "bronchoscopy-with-bal-severe-non-resolving",
      "multiplex-pcr-respiratory-panel",
      "procalcitonin-guided-therapy"
    ],
    "relatedTopics": {
      "anatomy": [
        "bronchopulmonary-segments-lobar-consolidation-pattern"
      ],
      "physiology": [
        "alveolar-gas-exchange-impairment-shunt-physiology"
      ],
      "biochemistry": [
        "inflammatory-mediators-il-6-procalcitonin"
      ],
      "pathology": [
        "stages-of-lobar-pneumonia-congestion-red-hepatization-grey-h"
      ]
    },
    "management": {
      "pharmacology": [
        "empirical-antibiotics-per-severity-amoxicillin-macrolide-bet",
        "antipyretics",
        "oxygen-if-hypoxic"
      ],
      "surgery": [],
      "psychology": [],
      "lifestyle": [
        "adequate-hydration",
        "smoking-cessation",
        "rest",
        "vaccination-pneumococcal-influenza-for-prevention"
      ]
    },
    "complications": [
      "parapneumonic-effusion-empyema",
      "lung-abscess",
      "sepsis",
      "respiratory-failure"
    ]
  },
  "Chronic kidney disease": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "General & Vital Signs",
    "labels": {
      "onset": "Chronic",
      "course": "Progressive",
      "severity": "Serious",
      "mortality": "High if untreated",
      "curable": "Not curable",
      "treatment": "Supportive/symptomatic only",
      "contagious": false,
      "reversible": false
    },
    "symptoms": [
      "fatigue",
      "anorexia",
      "nausea",
      "pruritus",
      "reduced-urine-output",
      "breathlessness"
    ],
    "signs": [
      "peripheral-edema",
      "pallor",
      "hypertension",
      "uremic-fetor",
      "anasarca"
    ],
    "investigations": [
      "serum-creatinine-egfr",
      "urine-albumin-creatinine-ratio",
      "renal-ultrasound",
      "serum-electrolytes-calcium-phosphate-pth"
    ],
    "advancedInvestigations": [
      "renal-biopsy-histological-diagnosis",
      "genetic-testing-pkd-alport-panel",
      "nuclear-renography-differential-function"
    ],
    "relatedTopics": {
      "anatomy": [
        "nephron-structure-glomerulus-and-tubules"
      ],
      "physiology": [
        "glomerular-filtration-rate-regulation",
        "erythropoietin-production-by-kidney"
      ],
      "biochemistry": [
        "urea-creatinine-handling",
        "metabolic-acidosis-and-electrolyte-derangement",
        "calcium-phosphate-pth-axis"
      ],
      "pathology": [
        "progressive-nephron-loss-glomerulosclerosis",
        "secondary-hyperparathyroidism-renal-osteodystrophy"
      ]
    },
    "management": {
      "pharmacology": [
        "ace-inhibitors-arbs-proteinuria-control",
        "erythropoiesis-stimulating-agents",
        "phosphate-binders",
        "diuretics"
      ],
      "surgery": [
        "renal-replacement-therapy-dialysis-access-av-fistula",
        "renal-transplantation"
      ],
      "psychology": [
        "chronic-illness-dialysis-dependence-counseling"
      ],
      "lifestyle": [
        "salt-and-protein-restriction",
        "fluid-restriction-advanced-stages",
        "blood-pressure-control",
        "avoidance-of-nephrotoxic-drugs"
      ]
    },
    "complications": [
      "end-stage-renal-disease",
      "renal-anemia",
      "renal-osteodystrophy",
      "hyperkalemia",
      "uremic-encephalopathy"
    ]
  },
  "Bacterial meningitis (community-acquired)": {
    "subject": "Microbiology",
    "tier": "lessCommon",
    "system": "General & Vital Signs",
    "labels": {
      "onset": "Acute",
      "course": "Progressive",
      "severity": "Life-threatening",
      "mortality": "High if untreated",
      "curable": "Curable",
      "treatment": "Definitive treatment",
      "contagious": true,
      "reversible": true
    },
    "symptoms": [
      "severe-headache",
      "neck-stiffness",
      "photophobia",
      "vomiting",
      "altered-consciousness"
    ],
    "signs": [
      "kernigs-sign",
      "brudzinskis-sign",
      "fever",
      "altered-mental-status",
      "petechial-rash-meningococcemia"
    ],
    "investigations": [
      "lumbar-puncture-with-csf-analysis",
      "csf-gram-stain-culture",
      "blood-cultures",
      "ct-head-before-lp-if-raised-icp-suspected"
    ],
    "advancedInvestigations": [
      "csf-multiplex-pcr-panel-biofire",
      "csf-lactate-procalcitonin",
      "mri-brain-with-contrast-complications"
    ],
    "relatedTopics": {
      "anatomy": [
        "meninges-dura-arachnoid-pia-and-subarachnoid-space"
      ],
      "physiology": [
        "csf-production-circulation-and-blood-brain-barrier"
      ],
      "biochemistry": [
        "csf-glucose-protein-changes-in-bacterial-vs-viral-meningitis"
      ],
      "pathology": [
        "purulent-exudate-in-subarachnoid-space",
        "raised-intracranial-pressure-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "empirical-iv-antibiotics-e-g-ceftriaxone-start-immediately",
        "dexamethasone-adjunct",
        "chemoprophylaxis-for-close-contacts"
      ],
      "surgery": [],
      "psychology": [
        "support-for-neurological-hearing-sequelae"
      ],
      "lifestyle": [
        "vaccination-meningococcal-pneumococcal-hib-for-prevention"
      ]
    },
    "complications": [
      "raised-intracranial-pressure-herniation",
      "hearing-loss",
      "seizures",
      "hydrocephalus",
      "death"
    ]
  },
  "Cirrhosis of liver": {
    "subject": "Pathology",
    "tier": "lessCommon",
    "system": "Gastrointestinal & Abdominal",
    "labels": {
      "onset": "Chronic",
      "course": "Progressive",
      "severity": "Life-threatening",
      "mortality": "High if untreated",
      "curable": "Not curable",
      "treatment": "Supportive/symptomatic only",
      "contagious": false,
      "reversible": false
    },
    "symptoms": [
      "fatigue",
      "anorexia",
      "abdominal-distension",
      "easy-bruising",
      "confusion-late"
    ],
    "signs": [
      "spider-angiomata",
      "palmar-erythema",
      "jaundice",
      "asterixis",
      "caput-medusae",
      "ascites"
    ],
    "investigations": [
      "liver-function-tests",
      "ultrasound-abdomen-nodular-liver",
      "upper-gi-endoscopy-varices",
      "liver-biopsy-fibroscan",
      "child-pugh-meld-score"
    ],
    "advancedInvestigations": [
      "transient-elastography-with-cap-fibroscan",
      "hepatic-venous-pressure-gradient-hvpg",
      "genetic-autoimmune-liver-panel"
    ],
    "relatedTopics": {
      "anatomy": [
        "hepatic-lobule-architecture",
        "portal-venous-system"
      ],
      "physiology": [
        "livers-synthetic-detoxification-functions",
        "ammonia-handling"
      ],
      "biochemistry": [
        "deranged-lfts-albumin-bilirubin-coagulation-factors",
        "bile-pigment-metabolism"
      ],
      "pathology": [
        "fibrosis-with-regenerative-nodules-replacing-normal-architec",
        "portal-hypertension-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "diuretics-spironolactone-furosemide-for-ascites",
        "lactulose-rifaximin-for-encephalopathy",
        "non-selective-beta-blockers-variceal-bleed-prophylaxis"
      ],
      "surgery": [
        "liver-transplantation-definitive",
        "tips-procedure-for-refractory-ascites-variceal-bleed"
      ],
      "psychology": [
        "alcohol-dependence-counseling-where-relevant"
      ],
      "lifestyle": [
        "strict-alcohol-abstinence",
        "salt-restriction",
        "protein-adequate-diet-avoid-excess-restriction"
      ]
    },
    "complications": [
      "variceal-hemorrhage",
      "hepatic-encephalopathy",
      "spontaneous-bacterial-peritonitis",
      "hepatocellular-carcinoma",
      "hepatorenal-syndrome"
    ]
  },
  "Rheumatoid arthritis": {
    "subject": "General Medicine",
    "tier": "lessCommon",
    "system": "Musculoskeletal & Orthopedic",
    "labels": {
      "onset": "Chronic",
      "course": "Relapsing-remitting",
      "severity": "Serious",
      "mortality": "Low",
      "curable": "Not curable",
      "treatment": "Supportive/symptomatic only",
      "contagious": false,
      "reversible": false
    },
    "symptoms": [
      "symmetric-small-joint-pain",
      "morning-stiffness-1-hour",
      "fatigue",
      "low-grade-fever"
    ],
    "signs": [
      "swan-neck-deformity",
      "boutonniere-deformity",
      "ulnar-deviation",
      "rheumatoid-nodules",
      "joint-swelling-symmetric"
    ],
    "investigations": [
      "rheumatoid-factor",
      "anti-ccp-antibody",
      "esr-crp",
      "x-ray-hands-erosions-joint-space-narrowing"
    ],
    "advancedInvestigations": [
      "mri-hands-wrists-early-erosive-change",
      "musculoskeletal-ultrasound-power-doppler",
      "hla-b27-genetic-panel"
    ],
    "relatedTopics": {
      "anatomy": [
        "synovial-joint-structure-small-joints-of-hand-wrist"
      ],
      "physiology": [
        "normal-synovial-fluid-function"
      ],
      "biochemistry": [
        "rheumatoid-factor-and-anti-ccp-antibodies",
        "inflammatory-cytokines-tnf-il-6"
      ],
      "pathology": [
        "synovial-pannus-formation-eroding-cartilage-and-bone"
      ]
    },
    "management": {
      "pharmacology": [
        "dmards-methotrexate-first-line",
        "biologics-anti-tnf-if-refractory",
        "nsaids-for-symptom-control",
        "short-course-corticosteroids-for-flares"
      ],
      "surgery": [
        "joint-replacement-advanced-deformity",
        "synovectomy-selected-cases"
      ],
      "psychology": [
        "chronic-pain-coping-counseling"
      ],
      "lifestyle": [
        "joint-protection-techniques",
        "physiotherapy-occupational-therapy",
        "regular-low-impact-exercise",
        "smoking-cessation-worsens-disease-activity"
      ]
    },
    "complications": [
      "joint-destruction-deformity",
      "rheumatoid-vasculitis",
      "interstitial-lung-disease",
      "increased-cardiovascular-risk"
    ]
  },
  "Stroke (ischemic/hemorrhagic)": {
    "subject": "General Medicine",
    "tier": "lessCommon",
    "system": "General & Vital Signs",
    "labels": {
      "onset": "Acute",
      "course": "Progressive",
      "severity": "Life-threatening",
      "mortality": "High if untreated",
      "curable": "Not curable",
      "treatment": "Definitive treatment",
      "contagious": false,
      "reversible": false
    },
    "symptoms": [
      "sudden-weakness-one-side-of-body",
      "slurred-speech",
      "facial-droop",
      "sudden-severe-headache-hemorrhagic"
    ],
    "signs": [
      "facial-asymmetry",
      "hemiparesis",
      "babinski-sign-extensor",
      "dysarthria",
      "hypertension"
    ],
    "investigations": [
      "non-contrast-ct-head-urgent-differentiate-bleed-vs-infarct",
      "mri-brain-with-diffusion-weighted-imaging",
      "carotid-doppler",
      "ecg-echocardiogram-cardioembolic-source"
    ],
    "advancedInvestigations": [
      "ct-mr-perfusion-imaging",
      "digital-subtraction-angiography",
      "transesophageal-echocardiogram-cardioembolic-source"
    ],
    "relatedTopics": {
      "anatomy": [
        "circle-of-willis-and-cerebral-vascular-territories"
      ],
      "physiology": [
        "cerebral-autoregulation-of-blood-flow"
      ],
      "biochemistry": [
        "excitotoxic-cascade-glutamate-in-ischemic-penumbra"
      ],
      "pathology": [
        "ischemic-infarction-vs-intracerebral-hemorrhage-mechanisms"
      ]
    },
    "management": {
      "pharmacology": [
        "iv-thrombolysis-alteplase-if-within-window-and-ischemic",
        "antiplatelets-aspirin-after-hemorrhage-excluded",
        "blood-pressure-management"
      ],
      "surgery": [
        "mechanical-thrombectomy-large-vessel-occlusion",
        "decompressive-craniectomy-hematoma-evacuation-selected-hemor"
      ],
      "psychology": [
        "post-stroke-depression-screening",
        "speech-and-cognitive-rehabilitation-support"
      ],
      "lifestyle": [
        "physiotherapy-for-motor-recovery",
        "blood-pressure-diabetes-lipid-control",
        "smoking-and-alcohol-cessation",
        "swallowing-assessment-aspiration-prevention"
      ]
    },
    "complications": [
      "cerebral-edema-herniation",
      "aspiration-pneumonia",
      "permanent-disability",
      "seizures",
      "recurrent-stroke"
    ]
  }
};
