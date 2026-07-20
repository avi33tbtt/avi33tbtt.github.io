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
  "Trigger thumb (congenital)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Musculoskeletal & Orthopaedic",
    "labels": {
      "onset": "Congenital",
      "course": "Static (may progress if untreated)",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Supportive/symptomatic (surgery if persistent)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "family-history-of-trigger-thumb"
    ],
    "symptoms": [
      "thumb-fixed-in-flexion-at-interphalangeal-joint",
      "painless-nodule-at-base-of-thumb"
    ],
    "signs": [
      "palpable-nodule-notta-node-at-a1-pulley",
      "fixed-flexion-deformity-of-thumb-ip-joint"
    ],
    "redFlags": [],
    "differentialDiagnoses": [
      "congenital-clasped-thumb-differential",
      "thumb-joint-contracture-other-cause"
    ],
    "diagnosticCriteria": [
      "clinical-diagnosis-of-fixed-thumb-flexion-with-palpable-nodule"
    ],
    "investigations": [
      "clinical-examination-of-thumb-range-of-motion"
    ],
    "advancedInvestigations": [
      "ultrasound-of-a1-pulley-and-flexor-tendon"
    ],
    "relatedTopics": {
      "anatomy": [
        "flexor-pollicis-longus-tendon-and-a1-pulley-anatomy"
      ],
      "physiology": [
        "tendon-gliding-through-pulley-system-mechanism"
      ],
      "biochemistry": [],
      "pathology": [
        "thickening-of-a1-pulley-and-flexor-tendon-nodule-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "a1-pulley-release-surgery"
      ],
      "psychology": [],
      "lifestyle": [
        "observation-and-stretching-exercises-first-line"
      ]
    },
    "contraindications": [
      "avoid-surgery-before-observation-period-in-young-children"
    ],
    "complications": [
      "persistent-flexion-contracture-if-untreated"
    ]
  },
  "Bifid rib": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Musculoskeletal & Orthopaedic",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Not applicable (normal variant)",
      "treatment": "No treatment required",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "gorlin-syndrome-association"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding"
    ],
    "signs": [],
    "redFlags": [
      "multiple-bifid-ribs-with-jaw-cysts-suspect-gorlin-syndrome"
    ],
    "differentialDiagnoses": [
      "rib-fracture-differential",
      "gorlin-syndrome-differential"
    ],
    "diagnosticCriteria": [
      "incidental-radiographic-finding-of-bifid-rib"
    ],
    "investigations": [
      "chest-x-ray-incidental-rib-finding"
    ],
    "advancedInvestigations": [
      "ct-chest-for-rib-anatomy-delineation"
    ],
    "relatedTopics": {
      "anatomy": [
        "costal-cartilage-and-rib-ossification-embryology"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "failure-of-normal-rib-fusion-during-development"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [],
      "psychology": [
        "genetic-counseling-if-syndromic"
      ],
      "lifestyle": []
    },
    "contraindications": [],
    "complications": [
      "associated-jaw-keratocysts-if-gorlin-syndrome",
      "increased-basal-cell-carcinoma-risk-if-gorlin-syndrome"
    ]
  },
  "Sacralization of lumbar vertebra": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Musculoskeletal & Orthopaedic",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild (may cause back pain)",
      "mortality": "Very low",
      "curable": "Not applicable (normal variant)",
      "treatment": "Supportive/symptomatic (if symptomatic)",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "family-history-of-lumbosacral-transitional-vertebra"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding",
      "lower-back-pain"
    ],
    "signs": [
      "reduced-lumbosacral-segment-mobility"
    ],
    "redFlags": [
      "neurological-deficit-with-transitional-vertebra"
    ],
    "differentialDiagnoses": [
      "lumbarization-of-s1-differential"
    ],
    "diagnosticCriteria": [
      "radiographic-identification-of-transitional-lumbosacral-vertebra"
    ],
    "investigations": [
      "lumbosacral-spine-x-ray"
    ],
    "advancedInvestigations": [
      "mri-lumbar-spine-if-neurological-symptoms"
    ],
    "relatedTopics": {
      "anatomy": [
        "lumbosacral-transitional-vertebra-anatomy-bertolotti-syndrome"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "fusion-of-l5-transverse-process-with-sacrum-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "analgesia",
        "nsaids-for-symptom-control"
      ],
      "surgery": [
        "surgical-resection-of-pseudoarticulation-rare-cases"
      ],
      "psychology": [],
      "lifestyle": [
        "physiotherapy-occupational-therapy"
      ]
    },
    "contraindications": [],
    "complications": [
      "bertolotti-syndrome-chronic-low-back-pain",
      "adjacent-segment-degeneration"
    ]
  },
  "Simian crease (anatomical variant)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Pediatric",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild (may indicate underlying syndrome)",
      "mortality": "Very low",
      "curable": "Not applicable (normal variant)",
      "treatment": "No treatment required",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "down-syndrome-association",
      "family-history-of-simian-crease"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding"
    ],
    "signs": [
      "single-transverse-palmar-crease"
    ],
    "redFlags": [
      "other-dysmorphic-features-with-simian-crease"
    ],
    "differentialDiagnoses": [
      "down-syndrome-differential",
      "normal-variant-single-palmar-crease-isolated"
    ],
    "diagnosticCriteria": [
      "clinical-visual-inspection-of-palmar-crease-pattern"
    ],
    "investigations": [
      "clinical-examination-of-palm",
      "karyotyping-if-down-syndrome-suspected"
    ],
    "advancedInvestigations": [],
    "relatedTopics": {
      "anatomy": [
        "palmar-crease-embryological-formation"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "altered-palmar-flexion-crease-formation-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [],
      "psychology": [
        "genetic-counseling-if-syndromic"
      ],
      "lifestyle": []
    },
    "contraindications": [],
    "complications": []
  },
  "Accessory nipple": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Pediatric",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Manageable (cosmetic)",
      "treatment": "Supportive/symptomatic (excision optional)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "family-history-of-polymastia"
    ],
    "symptoms": [
      "extra-nipple-like-lesion-along-milk-line",
      "cyclical-tenderness-with-menstrual-cycle"
    ],
    "signs": [
      "pigmented-papule-or-nodule-along-milk-line",
      "may-mimic-nevus-or-skin-tag"
    ],
    "redFlags": [
      "rapidly-enlarging-or-firm-mass-in-accessory-tissue",
      "skin-changes-suspicious-for-malignancy"
    ],
    "differentialDiagnoses": [
      "melanocytic-nevus-differential",
      "skin-tag-differential"
    ],
    "diagnosticCriteria": [
      "clinical-identification-along-embryological-milk-line"
    ],
    "investigations": [
      "breast-ultrasound-accessory-tissue"
    ],
    "advancedInvestigations": [
      "mammography-if-diagnostic-uncertainty"
    ],
    "relatedTopics": {
      "anatomy": [
        "embryological-milk-line-and-mammary-ridge"
      ],
      "physiology": [
        "hormonal-responsiveness-of-ectopic-mammary-tissue"
      ],
      "biochemistry": [],
      "pathology": [
        "persistence-of-mammary-ridge-remnants"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "excision-of-accessory-breast-tissue-cosmetic-or-symptomatic"
      ],
      "psychology": [
        "body-image-counseling-if-distress"
      ],
      "lifestyle": []
    },
    "contraindications": [
      "avoid-unnecessary-excision-if-asymptomatic-and-benign"
    ],
    "complications": [
      "same-pathology-as-normal-breast-fibroadenoma-carcinoma-risk",
      "cosmetic-psychosocial-distress"
    ]
  },
  "Duplex kidney (mild)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Renal & Urological",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild (serious if obstruction/reflux)",
      "mortality": "Very low",
      "curable": "Not applicable (structural variant, treat complications)",
      "treatment": "Supportive/symptomatic only (surgery if complicated)",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "abnormal-ureteric-bud-metanephric-blastema-interaction",
      "family-history-of-duplex-kidney"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding",
      "vague-flank-discomfort-duplex-kidney",
      "recurrent-urinary-symptoms-ectopic-kidney"
    ],
    "signs": [
      "continuous-urinary-dribbling-incontinence-ectopic-ureter"
    ],
    "redFlags": [
      "signs-of-hydronephrosis-obstruction",
      "recurrent-febrile-urinary-tract-infections"
    ],
    "differentialDiagnoses": [
      "horseshoe-kidney-differential",
      "ectopic-kidney-differential",
      "pelvic-mass-other-cause"
    ],
    "diagnosticCriteria": [
      "imaging-confirmation-of-duplicated-collecting-system"
    ],
    "investigations": [
      "renal-ultrasound"
    ],
    "advancedInvestigations": [
      "nuclear-renography-differential-function",
      "voiding-cystourethrogram-vcug-for-reflux"
    ],
    "relatedTopics": {
      "anatomy": [
        "ureteric-bud-duplication-and-weigert-meyer-rule"
      ],
      "physiology": [
        "glomerular-filtration-rate-regulation"
      ],
      "biochemistry": [],
      "pathology": [
        "incomplete-or-complete-ureteric-bud-duplication-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "pyeloplasty-or-ureteric-reimplantation-if-obstruction-reflux"
      ],
      "psychology": [],
      "lifestyle": [
        "avoidance-of-nephrotoxic-drugs"
      ]
    },
    "contraindications": [],
    "complications": [
      "hydronephrosis-ectopic-kidney",
      "vesicoureteral-reflux-ectopic-kidney",
      "urinary-tract-infection-ectopic-kidney"
    ]
  },
  "Retrocecal appendix (anatomical variant)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Gastrointestinal",
    "labels": {
      "onset": "Congenital (positional variant)",
      "course": "Static",
      "severity": "Mild (serious if appendicitis develops)",
      "mortality": "Very low",
      "curable": "Not applicable (normal variant)",
      "treatment": "No treatment required (relevant to atypical appendicitis presentation)",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [],
    "symptoms": [
      "asymptomatic-incidental-finding",
      "atypical-flank-or-back-pain-if-appendicitis"
    ],
    "signs": [
      "atypical-tenderness-in-right-flank-or-loin"
    ],
    "redFlags": [
      "high-fever-with-tachycardia-appendicitis",
      "signs-of-perforation-peritonitis"
    ],
    "differentialDiagnoses": [
      "mesenteric-adenitis",
      "urinary-tract-infection-differential"
    ],
    "diagnosticCriteria": [
      "alvarado-score-7-or-more-high-probability"
    ],
    "investigations": [
      "ultrasound-abdomen",
      "ct-abdomen-if-diagnosis-unclear",
      "alvarado-score"
    ],
    "advancedInvestigations": [
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
      "biochemistry": [],
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
    "contraindications": [
      "avoid-laxatives-enemas-if-suspected-appendicitis"
    ],
    "complications": [
      "perforation",
      "peritonitis",
      "appendicular-abscess-mass",
      "sepsis"
    ]
  },
  "Mallet finger (anatomical)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Musculoskeletal & Orthopaedic",
    "labels": {
      "onset": "Acquired (traumatic)",
      "course": "Static once healed",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Supportive/symptomatic (splinting; surgery if bony/unstable)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "sports-participation-ball-sports",
      "occupational-finger-trauma-risk"
    ],
    "symptoms": [
      "inability-to-actively-extend-distal-fingertip",
      "finger-pain-and-swelling-after-trauma"
    ],
    "signs": [
      "flexed-resting-posture-of-distal-interphalangeal-joint",
      "extensor-lag-at-dip-joint"
    ],
    "redFlags": [
      "open-mallet-finger-injury",
      "large-bony-fragment-with-joint-subluxation"
    ],
    "differentialDiagnoses": [
      "boutonniere-deformity-differential",
      "dip-joint-dislocation-differential",
      "flexor-digitorum-profundus-avulsion-jersey-finger-differential"
    ],
    "diagnosticCriteria": [
      "clinical-diagnosis-of-dip-extensor-lag-after-trauma"
    ],
    "investigations": [
      "x-ray-finger-ap-lateral-view-assess-bony-avulsion"
    ],
    "advancedInvestigations": [],
    "relatedTopics": {
      "anatomy": [
        "extensor-tendon-mechanism-of-the-finger-dip-insertion"
      ],
      "physiology": [
        "extensor-tendon-terminal-slip-function"
      ],
      "biochemistry": [],
      "pathology": [
        "extensor-tendon-rupture-or-bony-avulsion-at-dip-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "analgesia"
      ],
      "surgery": [
        "surgical-fixation-if-large-bony-fragment-or-subluxation"
      ],
      "psychology": [],
      "lifestyle": [
        "continuous-dip-splinting-6-8-weeks"
      ]
    },
    "contraindications": [
      "avoid-early-discontinuation-of-splinting-risk-of-recurrent-deformity"
    ],
    "complications": [
      "chronic-extensor-lag-persistent-deformity",
      "swan-neck-deformity-complication"
    ]
  },
  "Congenital hip dislocation (anatomical)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Pediatric",
    "labels": {
      "onset": "Congenital",
      "course": "Progressive if untreated",
      "severity": "Moderate",
      "mortality": "Very low",
      "curable": "Curable if treated early",
      "treatment": "Definitive treatment",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "female-sex",
      "breech-presentation",
      "first-born-child",
      "family-history-of-hip-dysplasia",
      "oligohydramnios"
    ],
    "symptoms": [
      "asymmetric-leg-length-or-skin-folds",
      "hip-clicking-or-clunking-sensation",
      "asymptomatic-incidental-finding"
    ],
    "signs": [
      "positive-barlow-test",
      "positive-ortolani-test",
      "limited-hip-abduction-in-flexion",
      "asymmetric-thigh-skin-folds"
    ],
    "redFlags": [
      "delayed-walking-or-abnormal-gait",
      "bilateral-hip-dislocation-missed-late-presentation"
    ],
    "differentialDiagnoses": [
      "septic-arthritis-of-hip-differential",
      "transient-synovitis-of-hip",
      "cerebral-palsy-hip-subluxation"
    ],
    "diagnosticCriteria": [
      "positive-barlow-ortolani-in-neonate",
      "graf-classification-on-hip-ultrasound"
    ],
    "investigations": [
      "hip-ultrasound-graf-method",
      "pelvic-x-ray-after-4-6-months-age"
    ],
    "advancedInvestigations": [
      "mri-hip-for-complex-or-late-presenting-cases"
    ],
    "relatedTopics": {
      "anatomy": [
        "hip-joint-acetabulum-and-femoral-head-anatomy"
      ],
      "physiology": [
        "normal-hip-joint-stability-and-development"
      ],
      "biochemistry": [],
      "pathology": [
        "shallow-acetabulum-and-femoral-head-instability-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "open-reduction-of-hip-selected-cases"
      ],
      "psychology": [],
      "lifestyle": [
        "pavlik-harness-bracing"
      ]
    },
    "contraindications": [
      "avoid-delaying-pavlik-harness-beyond-6-months-of-age"
    ],
    "complications": [
      "avascular-necrosis-of-femoral-head",
      "early-osteoarthritis-of-hip",
      "leg-length-discrepancy-complication",
      "abnormal-gait-complication"
    ]
  },
  "Rectal prolapse (anatomical)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Gastrointestinal",
    "labels": {
      "onset": "Variable (pediatric or adult)",
      "course": "Progressive if untreated",
      "severity": "Moderate",
      "mortality": "Very low",
      "curable": "Curable (surgical)",
      "treatment": "Definitive treatment",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "low-fiber-diet",
      "chronic-cough-risk-factor",
      "chronic-constipation-and-straining",
      "multiparity-vaginal-delivery",
      "pelvic-floor-weakness"
    ],
    "symptoms": [
      "protruding-rectal-mass-on-defecation",
      "mucous-discharge-per-rectum",
      "fecal-incontinence-symptom",
      "minor-rectal-bleeding"
    ],
    "signs": [
      "visible-full-thickness-rectal-protrusion-on-straining",
      "concentric-mucosal-folds-on-prolapsed-rectum",
      "reduced-anal-sphincter-tone"
    ],
    "redFlags": [
      "irreducible-incarcerated-rectal-prolapse",
      "strangulated-rectal-prolapse-signs"
    ],
    "differentialDiagnoses": [
      "prolapsed-internal-hemorrhoids",
      "rectal-polyp-differential",
      "intussusception-differential"
    ],
    "diagnosticCriteria": [
      "clinical-diagnosis-full-thickness-rectal-protrusion-on-straining"
    ],
    "investigations": [
      "clinical-examination-on-straining-or-defecation",
      "defecating-proctogram"
    ],
    "advancedInvestigations": [
      "anorectal-manometry",
      "colonoscopy-to-exclude-lead-point"
    ],
    "relatedTopics": {
      "anatomy": [
        "rectal-anal-canal-and-pelvic-floor-support-anatomy"
      ],
      "physiology": [
        "anal-sphincter-and-pelvic-floor-continence-mechanisms"
      ],
      "biochemistry": [],
      "pathology": [
        "weakening-of-rectal-support-structures-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "rectopexy-abdominal-or-perineal",
        "perineal-proctectomy-altemeier-procedure"
      ],
      "psychology": [],
      "lifestyle": [
        "treat-chronic-cough-constipation-risk-factors",
        "high-fiber-diet-and-stool-softeners",
        "pelvic-floor-exercises"
      ]
    },
    "contraindications": [
      "avoid-forceful-reduction-if-strangulation-suspected"
    ],
    "complications": [
      "incarceration",
      "strangulation",
      "fecal-incontinence-complication",
      "mucosal-ulceration-and-bleeding"
    ]
  },
  "Diastasis recti": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Musculoskeletal & Orthopaedic",
    "labels": {
      "onset": "Congenital or acquired (pregnancy)",
      "course": "Static",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Manageable (chronic)",
      "treatment": "Supportive/symptomatic (surgery if severe)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "pregnancy-risk-factor",
      "obesity",
      "multiparity-diastasis",
      "multiple-gestation-pregnancy"
    ],
    "symptoms": [
      "midline-abdominal-bulge-on-straining",
      "lower-back-pain",
      "abdominal-wall-weakness-sensation"
    ],
    "signs": [
      "palpable-inter-recti-gap-on-abdominal-crunch",
      "visible-midline-doming-on-straining"
    ],
    "redFlags": [
      "associated-ventral-hernia-with-diastasis"
    ],
    "differentialDiagnoses": [
      "epigastric-hernia",
      "ventral-hernia-differential"
    ],
    "diagnosticCriteria": [
      "clinical-diagnosis-inter-recti-distance-2cm-or-more"
    ],
    "investigations": [
      "clinical-examination-supine-with-head-raise",
      "ultrasound-abdominal-wall-inter-recti-distance"
    ],
    "advancedInvestigations": [],
    "relatedTopics": {
      "anatomy": [
        "umbilical-ring-and-linea-alba-anatomy",
        "rectus-abdominis-and-linea-alba-anatomy"
      ],
      "physiology": [
        "increased-intra-abdominal-pressure-mechanisms"
      ],
      "biochemistry": [],
      "pathology": [
        "linea-alba-stretching-and-thinning-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "abdominoplasty-or-rectus-plication-selected-cases"
      ],
      "psychology": [],
      "lifestyle": [
        "core-strengthening-physiotherapy"
      ]
    },
    "contraindications": [
      "avoid-core-strengthening-exercise-until-fascial-gap-improves"
    ],
    "complications": [
      "cosmetic-psychosocial-distress",
      "abdominal-wall-hernia-risk"
    ]
  },
  "Tongue tie (ankyloglossia)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Pediatric",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Definitive treatment (if symptomatic)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "family-history-of-ankyloglossia"
    ],
    "symptoms": [
      "difficulty-breastfeeding-poor-latch",
      "speech-articulation-difficulty",
      "asymptomatic-incidental-finding"
    ],
    "signs": [
      "short-thick-lingual-frenulum",
      "restricted-tongue-tip-protrusion-heart-shaped-tongue"
    ],
    "redFlags": [
      "significant-maternal-nipple-pain-poor-infant-weight-gain"
    ],
    "differentialDiagnoses": [
      "normal-variant-short-frenulum-asymptomatic"
    ],
    "diagnosticCriteria": [
      "clinical-examination-of-lingual-frenulum-and-tongue-mobility"
    ],
    "investigations": [
      "clinical-oral-examination-tongue-mobility-assessment"
    ],
    "advancedInvestigations": [],
    "relatedTopics": {
      "anatomy": [
        "lingual-frenulum-and-tongue-embryology"
      ],
      "physiology": [
        "tongue-mobility-in-suck-swallow-and-speech"
      ],
      "biochemistry": [],
      "pathology": [
        "abnormally-short-or-anteriorly-attached-frenulum-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "frenotomy-or-frenuloplasty"
      ],
      "psychology": [],
      "lifestyle": [
        "lactation-support-and-feeding-assessment",
        "speech-therapy"
      ]
    },
    "contraindications": [
      "avoid-unnecessary-frenotomy-if-asymptomatic-and-feeding-well"
    ],
    "complications": [
      "breastfeeding-difficulty-complication",
      "speech-and-language-delay",
      "dental-and-gum-irritation"
    ]
  },
  "Webbed neck (anatomical)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Pediatric",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild-moderate (cosmetic; may indicate syndrome)",
      "mortality": "Very low",
      "curable": "Manageable (surgical if desired)",
      "treatment": "Supportive/symptomatic (surgery optional)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "turner-syndrome-association",
      "noonan-syndrome-association"
    ],
    "symptoms": [
      "loose-skin-folds-on-lateral-neck",
      "asymptomatic-incidental-finding",
      "cosmetic-concern-neck-appearance"
    ],
    "signs": [
      "bilateral-skin-webbing-from-mastoid-to-acromion",
      "low-posterior-hairline"
    ],
    "redFlags": [
      "associated-cardiac-anomaly-coarctation-turner",
      "short-stature-with-webbed-neck"
    ],
    "differentialDiagnoses": [
      "turner-syndrome-differential",
      "noonan-syndrome-differential",
      "cystic-hygroma-residual-webbing-differential"
    ],
    "diagnosticCriteria": [
      "clinical-identification-of-lateral-neck-skin-webbing"
    ],
    "investigations": [
      "karyotyping-if-turner-syndrome-suspected",
      "echocardiogram-to-screen-for-associated-cardiac-anomaly"
    ],
    "advancedInvestigations": [
      "genetic-testing-for-noonan-syndrome"
    ],
    "relatedTopics": {
      "anatomy": [
        "cervical-lymphatic-and-jugular-lymph-sac-embryology"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "persistent-jugular-lymphatic-sac-distension-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "z-plasty-or-surgical-neck-web-release"
      ],
      "psychology": [
        "body-image-counseling-if-distress"
      ],
      "lifestyle": []
    },
    "contraindications": [],
    "complications": [
      "cosmetic-psychosocial-distress",
      "recurrence-after-surgical-correction"
    ]
  },
  "Flat foot (pes planus)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Musculoskeletal & Orthopaedic",
    "labels": {
      "onset": "Congenital or acquired",
      "course": "Static (progressive in adults if tendon dysfunction)",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Manageable (chronic)",
      "treatment": "Supportive/symptomatic only",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "obesity",
      "age-over-65",
      "ligamentous-laxity-hypermobility"
    ],
    "symptoms": [
      "foot-and-arch-pain-worse-with-standing-walking",
      "medial-ankle-swelling",
      "leg-fatigue-with-prolonged-walking"
    ],
    "signs": [
      "loss-of-medial-longitudinal-arch-on-standing",
      "too-many-toes-sign",
      "single-heel-raise-test-abnormal"
    ],
    "redFlags": [
      "rigid-flat-foot-non-correctable",
      "sudden-onset-flat-foot-with-pain-adult"
    ],
    "differentialDiagnoses": [
      "tarsal-coalition",
      "posterior-tibial-tendon-rupture",
      "charcot-foot-neuropathic"
    ],
    "diagnosticCriteria": [
      "clinical-diagnosis-loss-of-arch-on-weight-bearing"
    ],
    "investigations": [
      "clinical-examination-standing-and-supine",
      "weight-bearing-foot-x-ray"
    ],
    "advancedInvestigations": [
      "foot-pressure-mapping-pedobarography",
      "mri-foot-tendon-dysfunction"
    ],
    "relatedTopics": {
      "anatomy": [
        "medial-longitudinal-arch-and-supporting-structures",
        "tibialis-posterior-tendon-anatomy"
      ],
      "physiology": [
        "foot-arch-biomechanics-during-gait"
      ],
      "biochemistry": [],
      "pathology": [
        "tibialis-posterior-tendon-dysfunction-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "analgesia",
        "nsaids-for-symptom-control"
      ],
      "surgery": [
        "tendon-transfer-or-arthrodesis-severe-cases"
      ],
      "psychology": [],
      "lifestyle": [
        "orthotic-arch-support-insoles",
        "physiotherapy-occupational-therapy",
        "weight-management"
      ]
    },
    "contraindications": [
      "surgical-caution-growth-plate-injury-risk-in-children"
    ],
    "complications": [
      "progressive-tendon-dysfunction",
      "secondary-osteoarthritis-foot-ankle",
      "chronic-foot-pain-and-disability"
    ]
  },
  "Pectus excavatum": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Musculoskeletal & Orthopaedic",
    "labels": {
      "onset": "Congenital",
      "course": "Progressive during growth spurts, then static",
      "severity": "Mild-moderate (serious if cardiopulmonary compromise)",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Definitive treatment (if symptomatic)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "male-sex",
      "family-history-of-pectus-deformity",
      "connective-tissue-disorder-marfan-ehlers-danlos"
    ],
    "symptoms": [
      "exertional-dyspnea-reduced-exercise-tolerance",
      "chest-wall-self-consciousness-cosmetic-concern",
      "palpitations-with-exertion"
    ],
    "signs": [
      "depressed-sternum-and-costal-cartilages",
      "displaced-apex-beat"
    ],
    "redFlags": [
      "severe-cardiac-compression-symptoms",
      "significant-haller-index-3-25-or-more"
    ],
    "differentialDiagnoses": [
      "poland-syndrome",
      "marfan-syndrome-associated-chest-deformity"
    ],
    "diagnosticCriteria": [
      "haller-index-3-25-or-more-on-ct-for-surgical-candidacy"
    ],
    "investigations": [
      "chest-x-ray-lateral-view-sternal-depression"
    ],
    "advancedInvestigations": [
      "cardiopulmonary-exercise-testing",
      "ct-chest-with-haller-index-and-cardiac-compression"
    ],
    "relatedTopics": {
      "anatomy": [
        "sternocostal-anatomy-and-chest-wall-development"
      ],
      "physiology": [
        "cardiopulmonary-mechanics-in-chest-wall-deformity"
      ],
      "biochemistry": [],
      "pathology": [
        "overgrowth-of-costal-cartilage-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "nuss-procedure-or-ravitch-procedure"
      ],
      "psychology": [
        "body-image-counseling-if-distress"
      ],
      "lifestyle": [
        "chest-wall-bracing-vacuum-bell-therapy",
        "supervised-exercise-program"
      ]
    },
    "contraindications": [
      "nuss-procedure-caution-in-connective-tissue-fragility"
    ],
    "complications": [
      "cardiac-compression-arrhythmia",
      "restrictive-lung-physiology",
      "cosmetic-psychosocial-distress"
    ]
  },
  "Pectus carinatum": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Musculoskeletal & Orthopaedic",
    "labels": {
      "onset": "Congenital",
      "course": "Progressive during growth spurts, then static",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Definitive treatment (if symptomatic/cosmetic)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "male-sex",
      "family-history-of-pectus-deformity",
      "connective-tissue-disorder-marfan-ehlers-danlos"
    ],
    "symptoms": [
      "chest-wall-self-consciousness-cosmetic-concern",
      "chest-wall-tenderness-over-protrusion"
    ],
    "signs": [
      "protruding-sternum-and-costal-cartilages"
    ],
    "redFlags": [
      "rapidly-progressive-deformity-during-growth-spurt"
    ],
    "differentialDiagnoses": [
      "costochondritis",
      "marfan-syndrome-associated-chest-deformity"
    ],
    "diagnosticCriteria": [
      "clinical-and-ct-assessment-of-sternal-protrusion-severity"
    ],
    "investigations": [
      "chest-x-ray-lateral-view-sternal-protrusion"
    ],
    "advancedInvestigations": [
      "ct-chest-for-severity-assessment"
    ],
    "relatedTopics": {
      "anatomy": [
        "sternocostal-anatomy-and-chest-wall-development"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "overgrowth-of-costal-cartilage-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "compressive-bracing-or-surgical-correction-severe-cases"
      ],
      "psychology": [
        "body-image-counseling-if-distress"
      ],
      "lifestyle": []
    },
    "contraindications": [
      "bracing-caution-in-skin-fragility-or-poor-compliance"
    ],
    "complications": [
      "cosmetic-psychosocial-distress",
      "chest-wall-pain-chronic"
    ]
  },
  "Umbilical hernia": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Gastrointestinal & Abdominal",
    "labels": {
      "onset": "Congenital (or acquired in adults)",
      "course": "Static (progressive if enlarging)",
      "severity": "Mild (serious if incarcerated/strangulated)",
      "mortality": "Low (high if strangulated and untreated)",
      "curable": "Curable",
      "treatment": "Definitive treatment (if persistent/symptomatic)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "prematurity",
      "obesity",
      "increased-intra-abdominal-pressure-pregnancy-ascites"
    ],
    "symptoms": [
      "umbilical-swelling-reducible-on-lying-down",
      "umbilical-swelling-increases-with-crying-straining"
    ],
    "signs": [
      "cough-impulse-positive",
      "reducible-umbilical-swelling"
    ],
    "redFlags": [
      "signs-of-strangulation-irreducible-tender-hernia",
      "bowel-obstruction-features"
    ],
    "differentialDiagnoses": [
      "epigastric-hernia",
      "umbilical-granuloma",
      "omphalocele-differential"
    ],
    "diagnosticCriteria": [
      "clinical-diagnosis-reducible-umbilical-swelling-with-cough-impulse"
    ],
    "investigations": [
      "clinical-examination-standing-and-supine",
      "ultrasound-abdomen"
    ],
    "advancedInvestigations": [
      "mri-ct-for-occult-hernia"
    ],
    "relatedTopics": {
      "anatomy": [
        "umbilical-ring-and-linea-alba-anatomy"
      ],
      "physiology": [
        "increased-intra-abdominal-pressure-mechanisms"
      ],
      "biochemistry": [],
      "pathology": [
        "failure-of-umbilical-ring-closure-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "analgesia"
      ],
      "surgery": [
        "umbilical-hernia-repair-open-or-laparoscopic"
      ],
      "psychology": [],
      "lifestyle": [
        "avoid-heavy-lifting-straining",
        "treat-chronic-cough-constipation-risk-factors"
      ]
    },
    "contraindications": [
      "avoid-forceful-reduction-if-strangulation-suspected"
    ],
    "complications": [
      "incarceration",
      "strangulation",
      "bowel-obstruction",
      "bowel-ischemia-gangrene"
    ]
  },
  "Hydrocele": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Renal & Urological",
    "labels": {
      "onset": "Congenital (or acquired)",
      "course": "Static",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Definitive treatment (if persistent/symptomatic)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "prematurity",
      "low-birth-weight"
    ],
    "symptoms": [
      "painless-scrotal-swelling",
      "scrotal-swelling-fluctuates-with-activity-crying"
    ],
    "signs": [
      "transillumination-positive",
      "able-to-get-above-the-scrotal-swelling"
    ],
    "redFlags": [
      "sudden-painful-scrotal-swelling-possible-torsion",
      "rapidly-enlarging-tense-hydrocele"
    ],
    "differentialDiagnoses": [
      "inguinal-hernia-differential",
      "testicular-torsion-differential",
      "epididymo-orchitis",
      "testicular-tumor"
    ],
    "diagnosticCriteria": [
      "transillumination-positive-with-ultrasound-confirmation"
    ],
    "investigations": [
      "scrotal-inguinal-ultrasound"
    ],
    "advancedInvestigations": [],
    "relatedTopics": {
      "anatomy": [
        "tunica-vaginalis-and-processus-vaginalis-anatomy"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "persistent-patent-processus-vaginalis-fluid-accumulation"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "hydrocelectomy-or-observation-if-resolves-spontaneously"
      ],
      "psychology": [],
      "lifestyle": []
    },
    "contraindications": [
      "avoid-hydrocelectomy-before-age-2-many-resolve-spontaneously"
    ],
    "complications": [
      "secondary-infection-of-hydrocele",
      "testicular-compression-rare",
      "inguinal-hernia-association"
    ]
  },
  "Cervical rib": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Musculoskeletal & Orthopaedic",
    "labels": {
      "onset": "Congenital",
      "course": "Static (progressive if compressive symptoms develop)",
      "severity": "Mild (serious if vascular complications)",
      "mortality": "Very low",
      "curable": "Curable (with surgery if symptomatic)",
      "treatment": "Supportive/symptomatic only",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "female-sex"
    ],
    "symptoms": [
      "neck-and-shoulder-pain-radiating-to-arm",
      "arm-paresthesia-ulnar-distribution",
      "hand-weakness-and-wasting",
      "arm-fatigue-with-overhead-activity"
    ],
    "signs": [
      "palpable-supraclavicular-bony-mass",
      "adsons-test-positive",
      "radial-pulse-diminished-on-arm-abduction",
      "supraclavicular-bruit"
    ],
    "redFlags": [
      "signs-of-vascular-compromise-pallor-coldness-diminished-pulse",
      "progressive-neurological-deficit-arm"
    ],
    "differentialDiagnoses": [
      "cervical-spondylosis",
      "pancoast-tumor",
      "brachial-plexopathy-other-cause"
    ],
    "diagnosticCriteria": [
      "radiological-confirmation-of-cervical-rib-with-compatible-symptoms"
    ],
    "investigations": [
      "x-ray-cervical-spine-and-chest-cervical-rib",
      "nerve-conduction-studies-emg"
    ],
    "advancedInvestigations": [
      "ct-mr-angiography-thoracic-outlet",
      "duplex-ultrasound-subclavian-vessels"
    ],
    "relatedTopics": {
      "anatomy": [
        "cervical-rib-and-thoracic-outlet-anatomy",
        "brachial-plexus-and-subclavian-vessel-relations"
      ],
      "physiology": [
        "positional-compression-of-neurovascular-bundle"
      ],
      "biochemistry": [],
      "pathology": [
        "thoracic-outlet-syndrome-mechanism-neurogenic-vascular"
      ]
    },
    "management": {
      "pharmacology": [
        "analgesia",
        "nsaids-for-symptom-control"
      ],
      "surgery": [
        "cervical-rib-excision-first-rib-resection"
      ],
      "psychology": [],
      "lifestyle": [
        "physiotherapy-occupational-therapy",
        "activity-modification-avoid-overhead-repetitive-strain"
      ]
    },
    "contraindications": [
      "surgical-caution-brachial-plexus-injury-risk-during-excision"
    ],
    "complications": [
      "subclavian-artery-aneurysm",
      "subclavian-vein-thrombosis-paget-schroetter-syndrome",
      "permanent-brachial-plexus-injury"
    ]
  },
  "Cleft lip and palate": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Pediatric",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild-moderate (serious if feeding/airway compromise)",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Definitive treatment",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "maternal-smoking-pregnancy",
      "maternal-alcohol-use-pregnancy",
      "folate-deficiency-pregnancy",
      "family-history-of-cleft-lip-palate",
      "anticonvulsant-use-in-pregnancy"
    ],
    "symptoms": [
      "feeding-difficulty-nasal-regurgitation",
      "nasal-speech-hypernasality"
    ],
    "signs": [
      "visible-cleft-of-lip-and-or-palate",
      "recurrent-otitis-media-eustachian-dysfunction"
    ],
    "redFlags": [
      "airway-obstruction-feeding-difficulty-severe",
      "failure-to-thrive-poor-weight-gain"
    ],
    "differentialDiagnoses": [
      "pierre-robin-sequence",
      "van-der-woude-syndrome",
      "22q11-deletion-syndrome-cleft"
    ],
    "diagnosticCriteria": [
      "clinical-and-antenatal-ultrasound-diagnosis-of-cleft"
    ],
    "investigations": [
      "clinical-examination-of-oral-cavity-antenatal-ultrasound"
    ],
    "advancedInvestigations": [
      "genetic-testing-syndromic-association"
    ],
    "relatedTopics": {
      "anatomy": [
        "palatal-and-lip-embryological-fusion-planes"
      ],
      "physiology": [
        "swallowing-and-speech-mechanics-in-cleft"
      ],
      "biochemistry": [],
      "pathology": [
        "failure-of-fusion-of-facial-processes-embryology"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "cleft-lip-repair-cheiloplasty-and-palate-repair-palatoplasty"
      ],
      "psychology": [
        "counseling-for-caregiver-and-body-image-support"
      ],
      "lifestyle": [
        "specialized-feeding-techniques-obturators",
        "speech-therapy"
      ]
    },
    "contraindications": [
      "avoid-early-repair-if-medically-unstable-or-active-infection"
    ],
    "complications": [
      "feeding-and-growth-failure",
      "recurrent-otitis-media-hearing-loss",
      "speech-and-language-delay",
      "dental-and-occlusal-abnormalities"
    ]
  },
  "Undescended testis (cryptorchidism)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Pediatric",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild (serious if malignancy/torsion)",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Definitive treatment",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "prematurity",
      "low-birth-weight",
      "family-history-of-cryptorchidism"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding"
    ],
    "signs": [
      "non-palpable-or-palpable-undescended-testis-in-inguinal-canal",
      "hypoplastic-scrotum-on-affected-side"
    ],
    "redFlags": [
      "non-palpable-testis-after-6-months-refer-urgently",
      "acute-scrotal-pain-possible-torsion"
    ],
    "differentialDiagnoses": [
      "retractile-testis",
      "testicular-torsion-differential",
      "inguinal-hernia-differential",
      "anorchia"
    ],
    "diagnosticCriteria": [
      "clinical-palpation-confirming-non-palpable-or-ectopic-testis"
    ],
    "investigations": [
      "scrotal-inguinal-ultrasound"
    ],
    "advancedInvestigations": [
      "laparoscopy-for-non-palpable-testis",
      "hormonal-stimulation-test-hcg-lh"
    ],
    "relatedTopics": {
      "anatomy": [
        "testicular-descent-pathway-and-gubernaculum"
      ],
      "physiology": [
        "hormonal-control-of-testicular-descent"
      ],
      "biochemistry": [],
      "pathology": [
        "arrested-testicular-descent-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "hormonal-therapy-hcg-selected-cases"
      ],
      "surgery": [
        "orchidopexy"
      ],
      "psychology": [],
      "lifestyle": []
    },
    "contraindications": [
      "avoid-delaying-orchidopexy-beyond-12-18-months-of-age"
    ],
    "complications": [
      "infertility",
      "testicular-malignancy-risk",
      "testicular-torsion",
      "inguinal-hernia-association"
    ]
  },
  "Spina bifida occulta": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Musculoskeletal & Orthopaedic",
    "labels": {
      "onset": "Congenital",
      "course": "Static (usually asymptomatic)",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Curable (if surgery needed)",
      "treatment": "Supportive/symptomatic only",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "folate-deficiency-pregnancy",
      "family-history-of-neural-tube-defects",
      "anticonvulsant-use-in-pregnancy"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding",
      "lower-back-pain",
      "leg-weakness-or-gait-disturbance",
      "bladder-bowel-dysfunction-tethered-cord"
    ],
    "signs": [
      "midline-lumbosacral-skin-stigmata-dimple-hair-tuft-lipoma",
      "foot-deformity-in-tethered-cord"
    ],
    "redFlags": [
      "progressive-neurological-deficit-tethered-cord",
      "new-bladder-bowel-dysfunction"
    ],
    "differentialDiagnoses": [
      "spina-bifida-cystica-meningocele-myelomeningocele",
      "sacral-dimple-benign-variant",
      "filum-terminale-lipoma"
    ],
    "diagnosticCriteria": [
      "imaging-confirmation-of-vertebral-arch-defect"
    ],
    "investigations": [
      "spine-x-ray-incidental-finding",
      "spinal-ultrasound-infants"
    ],
    "advancedInvestigations": [
      "mri-spine-for-tethered-cord"
    ],
    "relatedTopics": {
      "anatomy": [
        "vertebral-arch-and-neural-tube-closure"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "incomplete-fusion-of-vertebral-arch-neural-tube-defect-spect"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "surgical-untethering-if-symptomatic"
      ],
      "psychology": [],
      "lifestyle": [
        "folic-acid-supplementation-preconception-prevention"
      ]
    },
    "contraindications": [
      "avoid-lumbar-puncture-at-level-of-vertebral-defect"
    ],
    "complications": [
      "tethered-cord-syndrome",
      "neurogenic-bladder",
      "progressive-scoliosis"
    ]
  },
  "Accessory/supernumerary breast (polymastia)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Obstetric & Gynecological",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Definitive treatment",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "female-sex",
      "family-history-of-polymastia"
    ],
    "symptoms": [
      "swelling-along-milk-line-axilla-or-chest-wall",
      "cyclical-tenderness-with-menstrual-cycle",
      "lactation-from-accessory-tissue-postpartum"
    ],
    "signs": [
      "accessory-nipple-or-glandular-tissue-along-milk-line"
    ],
    "redFlags": [
      "rapidly-enlarging-or-firm-mass-in-accessory-tissue",
      "skin-changes-suspicious-for-malignancy"
    ],
    "differentialDiagnoses": [
      "lipoma-differential",
      "axillary-lymphadenopathy-differential",
      "fibroadenoma-differential"
    ],
    "diagnosticCriteria": [
      "clinical-identification-along-embryological-milk-line"
    ],
    "investigations": [
      "clinical-examination-standing-and-supine",
      "breast-ultrasound-accessory-tissue"
    ],
    "advancedInvestigations": [
      "mammography-if-diagnostic-uncertainty"
    ],
    "relatedTopics": {
      "anatomy": [
        "embryological-milk-line-and-mammary-ridge"
      ],
      "physiology": [
        "hormonal-responsiveness-of-ectopic-mammary-tissue"
      ],
      "biochemistry": [],
      "pathology": [
        "persistence-of-mammary-ridge-remnants"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "excision-of-accessory-breast-tissue-cosmetic-or-symptomatic"
      ],
      "psychology": [
        "body-image-counseling-if-distress"
      ],
      "lifestyle": []
    },
    "contraindications": [
      "avoid-unnecessary-excision-if-asymptomatic-and-benign"
    ],
    "complications": [
      "same-pathology-as-normal-breast-fibroadenoma-carcinoma-risk",
      "cosmetic-psychosocial-distress"
    ]
  },
  "Inguinal hernia (indirect/direct)": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Gastrointestinal & Abdominal",
    "labels": {
      "onset": "Insidious",
      "course": "Progressive",
      "severity": "Mild-moderate (serious if strangulated)",
      "mortality": "Low (high if strangulated and untreated)",
      "curable": "Curable",
      "treatment": "Definitive treatment",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "male-sex",
      "age-over-65",
      "obesity",
      "chronic-cough-risk-factor",
      "heavy-lifting-occupational",
      "low-fiber-diet"
    ],
    "symptoms": [
      "groin-swelling-reducible-on-lying-down",
      "groin-swelling-increases-with-straining-coughing",
      "dragging-groin-discomfort"
    ],
    "signs": [
      "cough-impulse-positive",
      "reducible-groin-swelling",
      "unable-to-get-above-the-swelling",
      "deep-ring-occlusion-test"
    ],
    "redFlags": [
      "signs-of-strangulation-irreducible-tender-hernia",
      "bowel-obstruction-features"
    ],
    "differentialDiagnoses": [
      "femoral-hernia",
      "hydrocele-differential",
      "lipoma-of-groin",
      "inguinal-lymphadenopathy"
    ],
    "diagnosticCriteria": [
      "clinical-diagnosis-cough-impulse-and-reducibility"
    ],
    "investigations": [
      "clinical-examination-standing-and-supine",
      "ultrasound-groin-hernia"
    ],
    "advancedInvestigations": [
      "mri-ct-for-occult-hernia"
    ],
    "relatedTopics": {
      "anatomy": [
        "inguinal-canal-and-hesselbachs-triangle",
        "deep-and-superficial-inguinal-rings"
      ],
      "physiology": [
        "increased-intra-abdominal-pressure-mechanisms"
      ],
      "biochemistry": [],
      "pathology": [
        "patent-processus-vaginalis-indirect-vs-transversalis-fascia-"
      ]
    },
    "management": {
      "pharmacology": [
        "analgesia"
      ],
      "surgery": [
        "hernia-repair-open-or-laparoscopic-mesh-or-non-mesh"
      ],
      "psychology": [],
      "lifestyle": [
        "avoid-heavy-lifting-straining",
        "treat-chronic-cough-constipation-risk-factors"
      ]
    },
    "contraindications": [
      "avoid-forceful-reduction-if-strangulation-suspected"
    ],
    "complications": [
      "incarceration",
      "strangulation",
      "bowel-obstruction",
      "bowel-ischemia-gangrene"
    ]
  },
  "Varicose veins": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Cardiovascular",
    "labels": {
      "onset": "Insidious",
      "course": "Progressive",
      "severity": "Mild-moderate",
      "mortality": "Low",
      "curable": "Curable",
      "treatment": "Definitive treatment",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "female-sex",
      "obesity",
      "age-over-45",
      "prolonged-standing-occupation",
      "pregnancy-risk-factor",
      "family-history-of-varicose-veins"
    ],
    "symptoms": [
      "leg-heaviness-aching-worse-on-standing",
      "leg-swelling-ankle-edema",
      "itching-over-varicose-veins",
      "night-leg-cramps"
    ],
    "signs": [
      "dilated-tortuous-superficial-veins",
      "trendelenburg-test-positive",
      "varicose-eczema-hyperpigmentation",
      "saphena-varix"
    ],
    "redFlags": [
      "signs-of-deep-vein-thrombosis",
      "bleeding-from-varix-red-flag"
    ],
    "differentialDiagnoses": [
      "deep-vein-thrombosis-differential",
      "chronic-venous-insufficiency-other-cause",
      "lymphedema",
      "bakers-cyst"
    ],
    "diagnosticCriteria": [
      "clinical-exam-plus-duplex-confirmation-of-reflux"
    ],
    "investigations": [
      "clinical-examination-standing-and-supine",
      "duplex-ultrasound-venous-reflux"
    ],
    "advancedInvestigations": [
      "venography"
    ],
    "relatedTopics": {
      "anatomy": [
        "great-and-small-saphenous-veins-and-perforators"
      ],
      "physiology": [
        "venous-return-calf-muscle-pump-and-valve-function"
      ],
      "biochemistry": [],
      "pathology": [
        "venous-valve-incompetence-and-venous-hypertension"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "evla-sclerotherapy-or-vein-stripping"
      ],
      "psychology": [],
      "lifestyle": [
        "compression-stockings",
        "leg-elevation",
        "avoid-prolonged-standing",
        "weight-management",
        "regular-aerobic-exercise"
      ]
    },
    "contraindications": [
      "compression-contraindicated-in-peripheral-arterial-disease"
    ],
    "complications": [
      "venous-ulceration",
      "superficial-thrombophlebitis",
      "deep-vein-thrombosis",
      "lipodermatosclerosis-chronic-venous-insufficiency",
      "hemorrhage-from-varix"
    ]
  },
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
    "riskFactors": [
      "low-fiber-diet",
      "age-10-30-years-peak-incidence"
    ],
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
    "redFlags": [
      "signs-of-perforation-peritonitis",
      "generalized-guarding-rigidity",
      "high-fever-with-tachycardia-appendicitis"
    ],
    "differentialDiagnoses": [
      "ectopic-pregnancy",
      "ovarian-cyst-torsion",
      "mesenteric-adenitis",
      "urinary-tract-infection-differential"
    ],
    "diagnosticCriteria": [
      "alvarado-score-7-or-more-high-probability"
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
    "contraindications": [
      "avoid-laxatives-enemas-if-suspected-appendicitis"
    ],
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
    "riskFactors": [
      "smoking",
      "diabetes-mellitus",
      "hypertension",
      "hyperlipidemia",
      "obesity",
      "age-over-45",
      "sedentary-lifestyle"
    ],
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
    "redFlags": [
      "st-elevation-on-ecg-stemi",
      "hemodynamic-instability-cardiogenic-shock",
      "life-threatening-arrhythmia-vf-vt"
    ],
    "differentialDiagnoses": [
      "aortic-dissection",
      "pericarditis",
      "pulmonary-embolism",
      "gastroesophageal-reflux-disease"
    ],
    "diagnosticCriteria": [
      "universal-definition-of-mi-troponin-rise-plus-clinical-criteria"
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
    "contraindications": [
      "thrombolysis-contraindicated-in-hemorrhage-recent-surgery-anticoagulation",
      "beta-blocker-caution-acute-heart-failure-asthma"
    ],
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
    "riskFactors": [
      "immunosuppression-hiv-chemotherapy-steroids",
      "malnutrition",
      "crowded-living-conditions",
      "diabetes-mellitus",
      "smoking",
      "alcohol-use-disorder"
    ],
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
    "redFlags": [
      "significant-hemoptysis",
      "suspected-multidrug-resistant-tb",
      "hiv-coinfection-immunocompromise",
      "signs-of-miliary-disseminated-tb"
    ],
    "differentialDiagnoses": [
      "lung-cancer",
      "sarcoidosis",
      "lung-abscess-differential",
      "fungal-lung-infection",
      "non-tuberculous-mycobacterial-infection"
    ],
    "diagnosticCriteria": [
      "microbiological-confirmation-afb-smear-culture-or-genexpert-positive",
      "who-clinico-radiological-case-definition-if-microbiology-negative"
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
    "contraindications": [
      "isoniazid-rifampicin-hepatotoxicity-monitor-lfts",
      "rifampicin-cyp450-induction-drug-interactions",
      "ethambutol-caution-visual-toxicity"
    ],
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
    "riskFactors": [
      "obesity",
      "family-history-of-type-2-diabetes",
      "sedentary-lifestyle",
      "age-over-45",
      "gestational-diabetes-history",
      "polycystic-ovary-syndrome"
    ],
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
    "redFlags": [
      "diabetic-ketoacidosis-features",
      "hyperosmolar-hyperglycemic-state-features",
      "severe-hypoglycemia-unawareness",
      "foot-ulcer-with-signs-of-infection-ischemia"
    ],
    "differentialDiagnoses": [
      "type-1-diabetes-mellitus",
      "mody-maturity-onset-diabetes-of-young",
      "secondary-diabetes-steroid-pancreatic",
      "impaired-fasting-glucose-prediabetes"
    ],
    "diagnosticCriteria": [
      "fasting-plasma-glucose-126-or-more",
      "hba1c-6-5-percent-or-more",
      "random-plasma-glucose-200-with-symptoms",
      "ogtt-2h-glucose-200-or-more"
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
    "contraindications": [
      "metformin-contraindicated-in-severe-renal-impairment",
      "sglt2-inhibitor-caution-dka-risk-and-genital-infections",
      "sulfonylurea-caution-hypoglycemia-elderly"
    ],
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
    "riskFactors": [
      "age-over-65",
      "smoking",
      "copd",
      "alcohol-use-disorder",
      "recent-viral-upper-respiratory-infection",
      "aspiration-risk-dysphagia-reduced-consciousness",
      "immunosuppression-hiv-chemotherapy-steroids"
    ],
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
    "redFlags": [
      "curb-65-score-3-or-more",
      "respiratory-rate-30-or-more",
      "systolic-bp-below-90-or-diastolic-below-60",
      "confusion-new-onset",
      "spo2-below-92-percent-on-room-air",
      "multilobar-involvement-on-imaging"
    ],
    "differentialDiagnoses": [
      "acute-bronchitis",
      "pulmonary-tuberculosis-differential",
      "pulmonary-embolism",
      "acute-heart-failure-pulmonary-edema",
      "covid-19-viral-pneumonia",
      "lung-cancer"
    ],
    "diagnosticCriteria": [
      "new-infiltrate-on-chest-x-ray-plus-clinical-features",
      "at-least-2-of-fever-cough-sputum-dyspnea-pleuritic-pain",
      "curb-65-score-for-severity-classification"
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
    "contraindications": [
      "penicillin-allergy-avoid-beta-lactams",
      "macrolide-caution-qt-prolongation",
      "fluoroquinolone-caution-tendon-rupture-qt",
      "renal-impairment-dose-adjustment-required"
    ],
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
    "riskFactors": [
      "diabetes-mellitus",
      "hypertension",
      "age-over-65",
      "recurrent-urinary-tract-infections",
      "nephrotoxic-drug-use",
      "smoking"
    ],
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
    "redFlags": [
      "egfr-below-15-stage-5-ckd",
      "severe-hyperkalemia-ecg-changes",
      "refractory-fluid-overload-pulmonary-edema",
      "uremic-encephalopathy-or-pericarditis"
    ],
    "differentialDiagnoses": [
      "acute-kidney-injury",
      "nephrotic-syndrome-differential",
      "obstructive-uropathy",
      "glomerulonephritis-differential"
    ],
    "diagnosticCriteria": [
      "egfr-below-60-for-3-months-or-more",
      "markers-of-kidney-damage-persisting-3-months"
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
    "contraindications": [
      "avoid-nephrotoxic-drugs-nsaids-contrast",
      "ace-inhibitor-arb-caution-hyperkalemia-and-monitor-creatinine",
      "renal-impairment-dose-adjustment-required"
    ],
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
    "riskFactors": [
      "age-under-2",
      "age-over-65",
      "immunosuppression-hiv-chemotherapy-steroids",
      "crowded-living-conditions",
      "alcohol-use-disorder",
      "diabetes-mellitus"
    ],
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
    "redFlags": [
      "confusion-new-onset",
      "septic-shock-features",
      "signs-of-raised-icp-herniation",
      "reduced-consciousness-gcs-decline"
    ],
    "differentialDiagnoses": [
      "viral-aseptic-meningitis",
      "encephalitis-differential",
      "subarachnoid-hemorrhage-differential",
      "brain-tumor-or-abscess"
    ],
    "diagnosticCriteria": [
      "csf-neutrophilic-pleocytosis-low-glucose-high-protein",
      "positive-csf-gram-stain-or-culture-for-organism"
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
    "contraindications": [
      "lp-contraindicated-if-raised-icp-signs-coagulopathy-or-focal-deficit",
      "penicillin-allergy-avoid-beta-lactams",
      "renal-impairment-dose-adjustment-required"
    ],
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
    "riskFactors": [
      "alcohol-use-disorder",
      "chronic-viral-hepatitis-b-or-c",
      "obesity",
      "diabetes-mellitus"
    ],
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
    "redFlags": [
      "signs-of-hepatic-encephalopathy",
      "variceal-bleeding-hematemesis",
      "spontaneous-bacterial-peritonitis-features"
    ],
    "differentialDiagnoses": [
      "non-alcoholic-fatty-liver-disease",
      "autoimmune-hepatitis",
      "primary-biliary-cholangitis",
      "budd-chiari-syndrome"
    ],
    "diagnosticCriteria": [
      "histological-fibrosis-nodular-regeneration-on-biopsy"
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
    "contraindications": [
      "avoid-hepatotoxic-drugs-and-nsaids-in-cirrhosis",
      "avoid-sedatives-precipitating-encephalopathy"
    ],
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
    "riskFactors": [
      "female-sex",
      "smoking",
      "family-history-of-autoimmune-disease",
      "hla-dr4-genetic-susceptibility"
    ],
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
    "redFlags": [
      "extra-articular-disease-vasculitis-lung-involvement",
      "rapidly-progressive-erosive-disease",
      "atlantoaxial-subluxation-neck-symptoms"
    ],
    "differentialDiagnoses": [
      "osteoarthritis-differential",
      "systemic-lupus-erythematosus",
      "psoriatic-arthritis",
      "gout-and-pseudogout",
      "viral-reactive-arthritis"
    ],
    "diagnosticCriteria": [
      "acr-eular-2010-classification-criteria-score-6-or-more",
      "symmetric-polyarthritis-of-small-joints-6-weeks-or-more"
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
    "contraindications": [
      "methotrexate-contraindicated-in-pregnancy-and-liver-disease",
      "nsaid-caution-peptic-ulcer-renal-impairment",
      "anti-tnf-caution-active-infection-tb-screening-required"
    ],
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
    "riskFactors": [
      "hypertension",
      "atrial-fibrillation",
      "diabetes-mellitus",
      "smoking",
      "hyperlipidemia",
      "age-over-65",
      "chronic-heart-disease"
    ],
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
    "redFlags": [
      "fast-positive-face-arm-speech-time-critical",
      "reduced-consciousness-gcs-decline",
      "onset-within-thrombolysis-window-4-5h",
      "signs-of-raised-icp-herniation"
    ],
    "differentialDiagnoses": [
      "hypoglycemia-stroke-mimic",
      "todds-paralysis-post-seizure",
      "brain-tumor-or-abscess",
      "migraine-with-aura-stroke-mimic",
      "bells-palsy-differential"
    ],
    "diagnosticCriteria": [
      "acute-focal-neurological-deficit-with-vascular-territory-pattern",
      "imaging-confirmation-of-infarct-or-hemorrhage"
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
    "contraindications": [
      "thrombolysis-contraindicated-in-hemorrhage-recent-surgery-anticoagulation",
      "avoid-antihypertensive-overcorrection-acute-ischemic-stroke"
    ],
    "complications": [
      "cerebral-edema-herniation",
      "aspiration-pneumonia",
      "permanent-disability",
      "seizures",
      "recurrent-stroke"
    ]
  },
  "Thyroglossal duct cyst": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Pediatric",
    "labels": {
      "onset": "Congenital",
      "course": "Static (may present later in childhood)",
      "severity": "Mild (serious if infected/malignant)",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Definitive treatment",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [],
    "symptoms": [
      "midline-neck-swelling-moves-with-tongue-protrusion-swallowing",
      "asymptomatic-incidental-finding"
    ],
    "signs": [
      "midline-neck-mass-elevates-with-tongue-protrusion"
    ],
    "redFlags": [
      "rapid-painful-enlargement-of-neck-mass-suspicious-malignancy"
    ],
    "differentialDiagnoses": [
      "branchial-cleft-cyst-differential",
      "dermoid-cyst-of-neck",
      "ectopic-thyroid-tissue",
      "cervical-lymphadenopathy-differential"
    ],
    "diagnosticCriteria": [
      "clinical-midline-mass-plus-ultrasound-confirmation-of-cystic-tract"
    ],
    "investigations": [
      "ultrasound-neck-with-thyroid-assessment",
      "thyroid-function-tests"
    ],
    "advancedInvestigations": [
      "radionuclide-thyroid-scan"
    ],
    "relatedTopics": {
      "anatomy": [
        "thyroglossal-duct-and-foramen-cecum-anatomy"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "persistence-of-thyroglossal-duct-remnant-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "sistrunk-procedure-excision-of-cyst-and-tract-hyoid"
      ],
      "psychology": [],
      "lifestyle": []
    },
    "contraindications": [
      "avoid-incision-and-drainage-of-infected-thyroglossal-cyst",
      "confirm-normal-orthotopic-thyroid-before-excision"
    ],
    "complications": [
      "recurrent-infection-of-thyroglossal-cyst",
      "fistula-formation-after-incomplete-excision",
      "thyroglossal-duct-carcinoma-rare"
    ]
  },
  "Ectopic kidney": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Renal & Urological",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild (serious if obstruction/reflux)",
      "mortality": "Very low",
      "curable": "Not applicable (structural variant, treat complications)",
      "treatment": "Supportive/symptomatic only (surgery if complicated)",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "abnormal-ureteric-bud-metanephric-blastema-interaction",
      "family-history-of-cryptorchidism"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding",
      "vague-flank-or-abdominal-discomfort",
      "recurrent-urinary-symptoms-ectopic-kidney"
    ],
    "signs": [
      "palpable-abdominal-or-pelvic-mass-ectopic-kidney"
    ],
    "redFlags": [
      "signs-of-hydronephrosis-obstruction",
      "recurrent-febrile-urinary-tract-infections"
    ],
    "differentialDiagnoses": [
      "horseshoe-kidney-differential",
      "renal-agenesis",
      "duplex-kidney-differential",
      "pelvic-mass-other-cause"
    ],
    "diagnosticCriteria": [
      "imaging-confirmation-of-abnormal-renal-location"
    ],
    "investigations": [
      "renal-ultrasound"
    ],
    "advancedInvestigations": [
      "nuclear-renography-differential-function",
      "ct-mr-urography-anatomical-delineation"
    ],
    "relatedTopics": {
      "anatomy": [
        "renal-ascent-pathway-pelvis-to-lumbar-region"
      ],
      "physiology": [
        "glomerular-filtration-rate-regulation"
      ],
      "biochemistry": [],
      "pathology": [
        "arrested-renal-ascent-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "pyeloplasty-or-ureteric-reimplantation-if-obstruction-reflux"
      ],
      "psychology": [],
      "lifestyle": [
        "avoidance-of-nephrotoxic-drugs"
      ]
    },
    "contraindications": [
      "avoid-unnecessary-excision-if-asymptomatic-and-benign"
    ],
    "complications": [
      "hydronephrosis-ectopic-kidney",
      "renal-calculi-ectopic-kidney",
      "vesicoureteral-reflux-ectopic-kidney",
      "urinary-tract-infection-ectopic-kidney"
    ]
  },
  "Bifid uvula": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Pediatric",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild (usually asymptomatic; marker for submucous cleft)",
      "mortality": "Very low",
      "curable": "Not applicable (structural variant)",
      "treatment": "Supportive/symptomatic only (surgery if VPI present)",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "family-history-of-cleft-lip-palate"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding",
      "nasal-speech-hypernasality"
    ],
    "signs": [
      "bifid-or-cleft-uvula-on-oral-examination",
      "zona-pellucida-notch-in-posterior-hard-palate"
    ],
    "redFlags": [
      "signs-of-submucous-cleft-palate-nasal-regurgitation-vpi"
    ],
    "differentialDiagnoses": [
      "submucous-cleft-palate",
      "isolated-bifid-uvula-normal-variant",
      "22q11-deletion-syndrome-cleft"
    ],
    "diagnosticCriteria": [
      "clinical-visualization-of-bifid-uvula-on-oral-examination"
    ],
    "investigations": [
      "clinical-oral-and-palatal-examination"
    ],
    "advancedInvestigations": [
      "nasendoscopy-velopharyngeal-function-assessment"
    ],
    "relatedTopics": {
      "anatomy": [
        "uvula-and-soft-palate-musculature",
        "palatal-and-lip-embryological-fusion-planes"
      ],
      "physiology": [
        "velopharyngeal-closure-mechanism"
      ],
      "biochemistry": [],
      "pathology": [
        "incomplete-fusion-of-palatal-musculature-minor-cleft-form"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "surgical-correction-if-velopharyngeal-insufficiency-symptomatic"
      ],
      "psychology": [],
      "lifestyle": [
        "speech-therapy-for-velopharyngeal-insufficiency"
      ]
    },
    "contraindications": [],
    "complications": [
      "speech-and-language-delay",
      "velopharyngeal-insufficiency-speech-complication"
    ]
  },
  "Branchial cleft cyst": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Head & Neck / ENT",
    "labels": {
      "onset": "Congenital (often presents in childhood/young adulthood)",
      "course": "Static (may enlarge with infection)",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Surgical excision",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [],
    "symptoms": [
      "lateral-neck-swelling-anterior-to-sternocleidomastoid",
      "intermittent-discharge-from-neck-sinus-opening"
    ],
    "signs": [
      "smooth-fluctuant-lateral-neck-swelling",
      "sinus-opening-with-mucoid-discharge-lateral-neck"
    ],
    "redFlags": [
      "rapid-painful-enlargement-of-neck-mass-suspicious-malignancy"
    ],
    "differentialDiagnoses": [
      "dermoid-cyst-of-neck",
      "cervical-lymphadenopathy-differential",
      "cystic-hygroma-residual-webbing-differential",
      "ectopic-thyroid-tissue"
    ],
    "diagnosticCriteria": [
      "clinical-and-ultrasound-diagnosis-of-branchial-cleft-cyst"
    ],
    "investigations": [
      "ultrasound-neck-with-thyroid-assessment"
    ],
    "advancedInvestigations": [
      "mri-neck-for-fistula-tract-delineation"
    ],
    "relatedTopics": {
      "anatomy": [
        "branchial-apparatus-arches-pouches-clefts-embryology"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "persistence-of-branchial-cleft-remnant-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "surgical-excision-of-branchial-cleft-cyst-and-tract"
      ],
      "psychology": [],
      "lifestyle": []
    },
    "contraindications": [
      "avoid-incision-and-drainage-of-infected-branchial-cyst"
    ],
    "complications": [
      "recurrent-infection-of-branchial-cyst",
      "fistula-formation-after-incomplete-excision"
    ]
  },
  "Preauricular sinus/tag": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Head & Neck / ENT",
    "labels": {
      "onset": "Congenital",
      "course": "Static (may become recurrently infected)",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Observation, or surgical excision if symptomatic",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "family-history-of-preauricular-sinus"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding",
      "discharge-from-pit-in-front-of-ear"
    ],
    "signs": [
      "small-pit-or-tag-anterior-to-helix-of-ear"
    ],
    "redFlags": [
      "rapid-painful-enlargement-of-neck-mass-suspicious-malignancy"
    ],
    "differentialDiagnoses": [
      "accessory-tragus-differential",
      "branchial-cleft-cyst-differential"
    ],
    "diagnosticCriteria": [
      "clinical-visual-diagnosis-of-preauricular-pit-or-tag"
    ],
    "investigations": [
      "clinical-examination-of-external-ear",
      "renal-ultrasound"
    ],
    "advancedInvestigations": [],
    "relatedTopics": {
      "anatomy": [
        "first-and-second-pharyngeal-arch-hillocks-of-his-embryology"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "failure-of-fusion-of-auricular-hillocks-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "surgical-excision-of-preauricular-sinus-tract"
      ],
      "psychology": [],
      "lifestyle": []
    },
    "contraindications": [
      "avoid-elective-surgery-during-active-infection-of-sinus"
    ],
    "complications": [
      "recurrent-infection-of-preauricular-sinus",
      "secondary-infection-of-hydrocele"
    ]
  },
  "Horseshoe kidney": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Renal & Urology",
    "labels": {
      "onset": "Congenital",
      "course": "Static (usually asymptomatic)",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Not applicable (structural variant)",
      "treatment": "Observation; surgery only if complications arise",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "turner-syndrome-association"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding",
      "vague-flank-or-abdominal-discomfort",
      "recurrent-urinary-symptoms-ectopic-kidney"
    ],
    "signs": [
      "palpable-abdominal-or-pelvic-mass-ectopic-kidney",
      "midline-abdominal-mass-crossing-vertebral-column"
    ],
    "redFlags": [
      "signs-of-hydronephrosis-obstruction",
      "recurrent-febrile-urinary-tract-infections"
    ],
    "differentialDiagnoses": [
      "ectopic-kidney-differential",
      "renal-agenesis",
      "duplex-kidney-differential",
      "pelvic-mass-other-cause"
    ],
    "diagnosticCriteria": [
      "imaging-confirmation-of-fused-renal-masses-with-isthmus"
    ],
    "investigations": [
      "renal-ultrasound"
    ],
    "advancedInvestigations": [
      "ct-mr-urography-anatomical-delineation",
      "nuclear-renography-differential-function"
    ],
    "relatedTopics": {
      "anatomy": [
        "renal-fusion-and-isthmus-anatomy-horseshoe-kidney",
        "renal-ascent-pathway-pelvis-to-lumbar-region"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "fusion-of-renal-poles-across-midline-mechanism",
        "arrested-renal-ascent-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "pyeloplasty-or-ureteric-reimplantation-if-obstruction-reflux"
      ],
      "psychology": [],
      "lifestyle": []
    },
    "contraindications": [],
    "complications": [
      "hydronephrosis-horseshoe-kidney",
      "renal-calculi-ectopic-kidney",
      "urinary-tract-infection-ectopic-kidney",
      "vesicoureteral-reflux-ectopic-kidney",
      "increased-risk-of-wilms-tumor-horseshoe-kidney"
    ]
  },
  "Torus palatinus": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Head & Neck / ENT",
    "labels": {
      "onset": "Congenital/develops during adolescence-adulthood",
      "course": "Slowly progressive, then static",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Not applicable (benign bony variant)",
      "treatment": "Observation; surgery only if symptomatic",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "family-history-of-torus-palatinus",
      "female-sex"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding"
    ],
    "signs": [
      "bony-midline-hard-palate-swelling"
    ],
    "redFlags": [],
    "differentialDiagnoses": [
      "torus-mandibularis-differential",
      "odontogenic-cyst-of-palate-differential"
    ],
    "diagnosticCriteria": [
      "clinical-palpation-of-bony-midline-palatal-swelling"
    ],
    "investigations": [
      "clinical-oral-examination-of-hard-palate"
    ],
    "advancedInvestigations": [
      "ct-maxillofacial-if-diagnostic-uncertainty"
    ],
    "relatedTopics": {
      "anatomy": [
        "hard-palate-bony-anatomy-and-median-palatine-suture"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "exostotic-bone-overgrowth-at-palatine-suture-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "surgical-reduction-of-torus-if-symptomatic-denture-fitting"
      ],
      "psychology": [],
      "lifestyle": []
    },
    "contraindications": [
      "avoid-unnecessary-excision-if-asymptomatic-and-benign"
    ],
    "complications": [
      "denture-fitting-difficulty",
      "mucosal-ulceration-over-torus"
    ]
  },
  "Bicuspid aortic valve": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Cardiovascular",
    "labels": {
      "onset": "Congenital",
      "course": "Progressive (valve degeneration/aortopathy over decades)",
      "severity": "Mild to moderate (variable)",
      "mortality": "Low if monitored; increases with complications",
      "curable": "Not curable (manageable with surveillance/surgery)",
      "treatment": "Surveillance; valve/aortic surgery when indicated",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "family-history-of-bicuspid-aortic-valve",
      "male-sex"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding",
      "exertional-dyspnea-reduced-exercise-tolerance",
      "exertional-chest-discomfort",
      "syncope-with-exertion"
    ],
    "signs": [
      "ejection-systolic-murmur-aortic-area",
      "ejection-click-aortic"
    ],
    "redFlags": [
      "exertional-syncope-red-flag",
      "hemodynamic-instability-cardiogenic-shock"
    ],
    "differentialDiagnoses": [
      "aortic-stenosis-degenerative-differential",
      "aortic-regurgitation-differential",
      "hypertrophic-cardiomyopathy-differential"
    ],
    "diagnosticCriteria": [
      "echocardiographic-visualization-of-bicuspid-aortic-valve-morphology"
    ],
    "investigations": [
      "transthoracic-echocardiography",
      "chest-x-ray-cardiac-silhouette-and-aorta",
      "12-lead-ecg-st-elevation-depression"
    ],
    "advancedInvestigations": [
      "cardiac-mri-for-aortopathy-assessment",
      "ct-coronary-angiography-high-resolution",
      "exercise-stress-echocardiography"
    ],
    "relatedTopics": {
      "anatomy": [
        "aortic-valve-cusp-anatomy-and-development"
      ],
      "physiology": [
        "aortic-valve-flow-dynamics-in-bicuspid-valve"
      ],
      "biochemistry": [],
      "pathology": [
        "abnormal-cusp-fusion-during-valvulogenesis-mechanism",
        "accelerated-valve-calcification-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "beta-blockers",
        "blood-pressure-management"
      ],
      "surgery": [
        "aortic-valve-repair-or-replacement",
        "aortic-root-replacement-if-aneurysmal"
      ],
      "psychology": [],
      "lifestyle": [
        "blood-pressure-control",
        "avoidance-of-strenuous-isometric-exercise-if-aortopathy"
      ]
    },
    "contraindications": [
      "avoid-strenuous-competitive-sports-if-significant-aortopathy",
      "endocarditis-prophylaxis-caution-per-current-guidelines"
    ],
    "complications": [
      "progressive-aortic-stenosis",
      "progressive-aortic-regurgitation",
      "infective-endocarditis-complication",
      "aortic-dissection-complication",
      "aortic-root-dilation-aneurysm",
      "heart-failure"
    ]
  },
  "Meckel's diverticulum": {
    "subject": "Anatomy",
    "tier": "lessCommon",
    "system": "Gastrointestinal",
    "labels": {
      "onset": "Congenital (usually presents in childhood)",
      "course": "Static (complications may arise acutely)",
      "severity": "Mild to moderate (severe if bleeding/obstruction)",
      "mortality": "Low (higher with unrecognized complications)",
      "curable": "Curable",
      "treatment": "Surgical resection if symptomatic",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [],
    "symptoms": [
      "painless-lower-gi-bleeding",
      "recurrent-abdominal-pain-periumbilical",
      "vomiting"
    ],
    "signs": [
      "melena-or-hematochezia-on-examination",
      "guarding"
    ],
    "redFlags": [
      "signs-of-perforation-peritonitis",
      "bowel-obstruction-features"
    ],
    "differentialDiagnoses": [
      "intussusception-differential",
      "mesenteric-adenitis",
      "peptic-ulcer-disease-differential"
    ],
    "diagnosticCriteria": [
      "technetium-99m-pertechnetate-scan-meckel-scan-positive"
    ],
    "investigations": [
      "meckel-scan-technetium-99m-pertechnetate",
      "ultrasound-abdomen"
    ],
    "advancedInvestigations": [
      "ct-abdomen-with-contrast-meckel",
      "capsule-endoscopy-obscure-gi-bleed",
      "diagnostic-laparoscopy"
    ],
    "relatedTopics": {
      "anatomy": [
        "vitelline-duct-omphalomesenteric-duct-embryology"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "incomplete-obliteration-of-vitelline-duct-mechanism",
        "ectopic-gastric-mucosa-acid-secretion-ulceration-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "surgical-resection-of-meckels-diverticulum"
      ],
      "psychology": [],
      "lifestyle": []
    },
    "contraindications": [
      "avoid-laxatives-enemas-if-suspected-appendicitis"
    ],
    "complications": [
      "gi-hemorrhage-meckel",
      "diverticulitis-of-meckels",
      "volvulus-around-vitelline-band",
      "bowel-obstruction",
      "perforation"
    ]
  },
  "Persistent urachus": {
    "subject": "Anatomy",
    "tier": "lessCommon",
    "system": "Renal & Urology",
    "labels": {
      "onset": "Congenital (presents in infancy)",
      "course": "Static (may become recurrently infected)",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Surgical excision",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [],
    "symptoms": [
      "urine-leakage-from-umbilicus",
      "umbilical-discharge-persistent"
    ],
    "signs": [
      "moist-umbilicus-with-urine-discharge"
    ],
    "redFlags": [
      "high-fever-with-tachycardia-appendicitis"
    ],
    "differentialDiagnoses": [
      "umbilical-granuloma",
      "urachal-cyst-differential",
      "omphalitis-differential"
    ],
    "diagnosticCriteria": [
      "urine-biochemistry-of-umbilical-discharge-confirms-urachal-patency",
      "ultrasound-confirmation-of-patent-urachal-tract"
    ],
    "investigations": [
      "ultrasound-abdomen-umbilical-urachal-tract"
    ],
    "advancedInvestigations": [
      "voiding-cystourethrogram-for-urachal-patency",
      "fistulogram-of-urachal-tract"
    ],
    "relatedTopics": {
      "anatomy": [
        "urachus-and-allantois-embryology",
        "umbilical-ring-and-linea-alba-anatomy"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "failure-of-urachal-obliteration-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "surgical-excision-of-urachal-remnant"
      ],
      "psychology": [],
      "lifestyle": []
    },
    "contraindications": [],
    "complications": [
      "recurrent-urachal-infection",
      "urachal-carcinoma-rare"
    ]
  },
  "Tracheoesophageal fistula (anatomical types)": {
    "subject": "Anatomy",
    "tier": "lessCommon",
    "system": "Respiratory",
    "labels": {
      "onset": "Congenital (presents at birth)",
      "course": "Requires urgent surgical correction",
      "severity": "Severe",
      "mortality": "Moderate (depends on associated anomalies/prematurity)",
      "curable": "Curable with surgery",
      "treatment": "Surgical repair",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "prematurity"
    ],
    "symptoms": [
      "excessive-frothy-oral-secretions-newborn",
      "choking-coughing-cyanosis-with-feeding-newborn"
    ],
    "signs": [
      "inability-to-pass-nasogastric-tube-into-stomach",
      "abdominal-distension-with-air-tef"
    ],
    "redFlags": [
      "airway-obstruction-feeding-difficulty-severe",
      "failure-to-thrive-poor-weight-gain"
    ],
    "differentialDiagnoses": [
      "isolated-esophageal-atresia-differential",
      "laryngeal-cleft-differential"
    ],
    "diagnosticCriteria": [
      "failure-to-pass-ng-tube-plus-xray-coiling-in-esophageal-pouch"
    ],
    "investigations": [
      "chest-abdominal-x-ray-with-ng-tube-coiled-in-pouch",
      "echocardiogram-to-screen-for-associated-cardiac-anomaly"
    ],
    "advancedInvestigations": [
      "contrast-esophagram-tef",
      "bronchoscopy-for-fistula-delineation"
    ],
    "relatedTopics": {
      "anatomy": [
        "tracheoesophageal-septum-embryology"
      ],
      "physiology": [
        "swallowing-and-speech-mechanics-in-cleft"
      ],
      "biochemistry": [],
      "pathology": [
        "failure-of-tracheoesophageal-septation-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "surgical-repair-of-tracheoesophageal-fistula-and-esophageal-anastomosis"
      ],
      "psychology": [],
      "lifestyle": [
        "swallowing-assessment-aspiration-prevention"
      ]
    },
    "contraindications": [
      "avoid-early-elective-repair-of-tef-if-severe-prematurity-or-comorbidity"
    ],
    "complications": [
      "anastomotic-stricture-post-tef-repair",
      "recurrent-fistula-post-repair",
      "gastroesophageal-reflux-post-tef-repair",
      "aspiration-pneumonia"
    ]
  },
  "Choanal atresia": {
    "subject": "Anatomy",
    "tier": "lessCommon",
    "system": "Head & Neck / ENT",
    "labels": {
      "onset": "Congenital (presents at birth if bilateral)",
      "course": "Requires urgent management if bilateral",
      "severity": "Severe if bilateral; mild if unilateral",
      "mortality": "Low with timely intervention",
      "curable": "Curable with surgery",
      "treatment": "Surgical repair (urgent if bilateral)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [],
    "symptoms": [
      "cyclical-cyanosis-relieved-by-crying-newborn",
      "difficulty-breathing-at-rest-improves-with-crying"
    ],
    "signs": [
      "inability-to-pass-catheter-through-nostril"
    ],
    "redFlags": [
      "airway-obstruction-feeding-difficulty-severe"
    ],
    "differentialDiagnoses": [
      "nasal-septal-deviation-differential",
      "pyriform-aperture-stenosis-differential"
    ],
    "diagnosticCriteria": [
      "failure-to-pass-catheter-per-nostril-plus-ct-confirmation"
    ],
    "investigations": [
      "nasal-catheter-patency-test"
    ],
    "advancedInvestigations": [
      "ct-nasal-passages-choanal-atresia"
    ],
    "relatedTopics": {
      "anatomy": [
        "nasal-cavity-and-choanae-embryology"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "persistence-of-bucconasal-membrane-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "surgical-transnasal-repair-of-choanal-atresia"
      ],
      "psychology": [],
      "lifestyle": []
    },
    "contraindications": [
      "avoid-delaying-choanal-atresia-repair-if-bilateral-and-symptomatic"
    ],
    "complications": [
      "restenosis-after-choanal-atresia-repair",
      "feeding-and-growth-failure"
    ]
  },
  "Sprengel's deformity": {
    "subject": "Anatomy",
    "tier": "lessCommon",
    "system": "Musculoskeletal & Orthopaedic",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild to moderate",
      "mortality": "Very low",
      "curable": "Improvable with surgery (not fully curable)",
      "treatment": "Observation or surgical repositioning if severe",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "family-history-of-sprengels-deformity"
    ],
    "symptoms": [
      "shoulder-asymmetry-and-restricted-abduction",
      "neck-shortening-appearance"
    ],
    "signs": [
      "elevated-and-medially-rotated-scapula"
    ],
    "redFlags": [],
    "differentialDiagnoses": [
      "klippel-feil-syndrome-differential",
      "congenital-scoliosis-differential"
    ],
    "diagnosticCriteria": [
      "clinical-and-radiographic-diagnosis-of-elevated-scapula-omovertebral-bone"
    ],
    "investigations": [
      "shoulder-and-cervical-spine-x-ray-sprengel"
    ],
    "advancedInvestigations": [
      "mri-spine-to-assess-omovertebral-bone-and-associated-anomalies"
    ],
    "relatedTopics": {
      "anatomy": [
        "scapular-descent-embryology"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "failure-of-scapular-descent-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "woodward-or-green-procedure-scapular-repositioning"
      ],
      "psychology": [
        "counseling-for-caregiver-and-body-image-support"
      ],
      "lifestyle": [
        "physiotherapy-occupational-therapy"
      ]
    },
    "contraindications": [
      "surgical-caution-growth-plate-injury-risk-in-children"
    ],
    "complications": [
      "restricted-shoulder-range-of-motion-persistent",
      "cosmetic-deformity-of-shoulder-neck"
    ]
  },
  "Situs inversus": {
    "subject": "Anatomy",
    "tier": "lessCommon",
    "system": "Cardiovascular",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild (usually asymptomatic unless syndromic)",
      "mortality": "Very low",
      "curable": "Not applicable (structural variant)",
      "treatment": "Observation; manage associated ciliary/cardiac anomalies if present",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "family-history-of-situs-inversus",
      "primary-ciliary-dyskinesia-association"
    ],
    "symptoms": [
      "asymptomatic-incidental-finding",
      "recurrent-respiratory-infections-situs-inversus"
    ],
    "signs": [
      "apex-beat-palpable-on-right-side-dextrocardia",
      "liver-dullness-on-left-spleen-on-right"
    ],
    "redFlags": [],
    "differentialDiagnoses": [
      "isolated-dextrocardia-differential",
      "kartagener-syndrome-differential"
    ],
    "diagnosticCriteria": [
      "chest-abdominal-imaging-showing-mirror-image-organ-arrangement"
    ],
    "investigations": [
      "chest-x-ray-showing-dextrocardia-and-organ-reversal",
      "ultrasound-abdomen"
    ],
    "advancedInvestigations": [
      "ct-chest-abdomen-for-situs-and-ciliary-disease-workup",
      "nasal-nitric-oxide-testing-pcd",
      "ciliary-biopsy-electron-microscopy-pcd"
    ],
    "relatedTopics": {
      "anatomy": [
        "visceral-lateralization-and-body-axis-embryology"
      ],
      "physiology": [
        "nodal-cilia-and-left-right-patterning-mechanism"
      ],
      "biochemistry": [],
      "pathology": [
        "disordered-left-right-axis-determination-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [],
      "psychology": [
        "genetic-counseling-if-syndromic"
      ],
      "lifestyle": []
    },
    "contraindications": [
      "avoid-relying-on-standard-anatomical-landmarks-during-surgery-situs-inversus"
    ],
    "complications": [
      "infertility",
      "recurrent-sinopulmonary-infections-complication",
      "impaired-mucociliary-clearance-complication"
    ]
  },
  "Cystic hygroma (anatomical)": {
    "subject": "Anatomy",
    "tier": "lessCommon",
    "system": "Head & Neck / ENT",
    "labels": {
      "onset": "Congenital (often detected prenatally or at birth)",
      "course": "Static or slowly enlarging",
      "severity": "Mild to moderate (severe if airway compromise)",
      "mortality": "Low",
      "curable": "Curable (sclerotherapy/surgery)",
      "treatment": "Sclerotherapy or surgical excision",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "turner-syndrome-association",
      "down-syndrome-association"
    ],
    "symptoms": [
      "large-soft-compressible-neck-swelling-present-at-birth",
      "swelling-may-cause-feeding-or-breathing-difficulty"
    ],
    "signs": [
      "soft-compressible-transilluminant-neck-mass",
      "transillumination-positive"
    ],
    "redFlags": [
      "airway-obstruction-feeding-difficulty-severe"
    ],
    "differentialDiagnoses": [
      "branchial-cleft-cyst-differential",
      "dermoid-cyst-of-neck",
      "cervical-lymphadenopathy-differential"
    ],
    "diagnosticCriteria": [
      "prenatal-or-postnatal-ultrasound-showing-multiloculated-cystic-neck-mass"
    ],
    "investigations": [
      "ultrasound-neck-with-thyroid-assessment",
      "karyotyping-if-turner-syndrome-suspected"
    ],
    "advancedInvestigations": [
      "mri-neck-for-extent-of-lymphatic-malformation"
    ],
    "relatedTopics": {
      "anatomy": [
        "cervical-lymphatic-and-jugular-lymph-sac-embryology"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "persistent-jugular-lymphatic-sac-distension-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "sclerotherapy-of-lymphatic-malformation",
        "surgical-excision-of-cystic-hygroma"
      ],
      "psychology": [
        "counseling-for-caregiver-and-body-image-support"
      ],
      "lifestyle": []
    },
    "contraindications": [
      "sclerotherapy-caution-near-airway-structures"
    ],
    "complications": [
      "airway-compression-cystic-hygroma",
      "recurrent-infection-of-cystic-hygroma",
      "disfigurement-cystic-hygroma"
    ]
  },
  "Accessory spleen": {
    "subject": "Anatomy",
    "tier": "common",
    "system": "Hepatobiliary & Splenic",
    "labels": {
      "onset": "Congenital",
      "course": "Static",
      "severity": "Mild",
      "mortality": "Very low",
      "curable": "Not applicable (benign variant)",
      "treatment": "Observation; excision only if symptomatic or hematologically indicated",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [],
    "symptoms": [
      "asymptomatic-incidental-finding",
      "left-upper-quadrant-discomfort-rare-accessory-spleen"
    ],
    "signs": [
      "palpable-left-upper-quadrant-mass-rare"
    ],
    "redFlags": [
      "sudden-severe-abdominal-pain-torsion-of-accessory-spleen"
    ],
    "differentialDiagnoses": [
      "splenunculus-vs-splenosis-differential",
      "pancreatic-tail-mass-differential",
      "lipoma-differential"
    ],
    "diagnosticCriteria": [
      "imaging-identification-of-well-defined-splenic-tissue-nodule-separate-from-main-spleen"
    ],
    "investigations": [
      "ultrasound-abdomen"
    ],
    "advancedInvestigations": [
      "technetium-99m-sulfur-colloid-spleen-scan",
      "ct-abdomen-for-accessory-spleen-characterization"
    ],
    "relatedTopics": {
      "anatomy": [
        "splenic-embryological-development-from-dorsal-mesogastrium"
      ],
      "physiology": [],
      "biochemistry": [],
      "pathology": [
        "failure-of-fusion-of-splenic-primordia-mechanism"
      ]
    },
    "management": {
      "pharmacology": [],
      "surgery": [
        "splenectomy-of-accessory-spleen-if-symptomatic-or-hematologic-indication"
      ],
      "psychology": [],
      "lifestyle": []
    },
    "contraindications": [
      "avoid-unnecessary-excision-if-asymptomatic-and-benign"
    ],
    "complications": [
      "torsion-of-accessory-spleen",
      "recurrence-of-hematologic-disease-after-splenectomy-due-to-missed-accessory-spleen"
    ]
  },
  "Bronchial asthma": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "Respiratory",
    "labels": {
      "onset": "Variable (childhood or adult)",
      "course": "Chronic-relapsing",
      "severity": "Variable (mild to life-threatening)",
      "mortality": "Low (with treatment)",
      "curable": "Manageable (chronic)",
      "treatment": "Pharmacological (reliever + controller)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "atopy-personal-or-family-history",
      "allergen-exposure",
      "childhood-onset-wheeze",
      "family-history-of-autoimmune-disease",
      "smoking",
      "obesity"
    ],
    "symptoms": [
      "episodic-wheeze",
      "chest-tightness",
      "nocturnal-or-early-morning-cough",
      "breathlessness-worse-with-triggers"
    ],
    "signs": [
      "expiratory-wheeze-widespread",
      "prolonged-expiratory-phase",
      "hyperinflated-chest",
      "tachypnea"
    ],
    "redFlags": [
      "silent-chest-on-auscultation",
      "inability-to-complete-sentences",
      "peak-flow-below-33-percent-predicted",
      "spo2-below-92-percent-asthma"
    ],
    "differentialDiagnoses": [
      "copd-differential",
      "vocal-cord-dysfunction",
      "foreign-body-aspiration-differential",
      "heart-failure-cardiac-asthma",
      "gastroesophageal-reflux-disease"
    ],
    "diagnosticCriteria": [
      "spirometry-fev1-fvc-reduced-with-reversibility-12-percent",
      "peak-flow-variability-20-percent-or-more",
      "clinical-diagnosis-of-episodic-symptoms-plus-variable-airflow-limitation"
    ],
    "investigations": [
      "spirometry-with-bronchodilator-reversibility",
      "peak-expiratory-flow-rate-monitoring",
      "chest-x-ray-exclude-other-causes"
    ],
    "advancedInvestigations": [
      "fractional-exhaled-nitric-oxide-feno",
      "bronchial-challenge-test-methacholine",
      "allergy-skin-prick-testing"
    ],
    "relatedTopics": {
      "anatomy": [
        "bronchial-tree-and-smooth-muscle-anatomy"
      ],
      "physiology": [
        "bronchial-smooth-muscle-tone-regulation",
        "ventilation-perfusion-relationships-in-apex-vs-base"
      ],
      "biochemistry": [
        "ige-mediated-type-1-hypersensitivity",
        "mast-cell-degranulation-histamine-leukotrienes"
      ],
      "pathology": [
        "chronic-airway-inflammation-and-bronchoconstriction-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "short-acting-beta-agonist-saba-reliever",
        "inhaled-corticosteroids-ics-controller",
        "long-acting-beta-agonist-laba",
        "leukotriene-receptor-antagonist",
        "oral-corticosteroids-for-exacerbation"
      ],
      "surgery": [],
      "psychology": [
        "asthma-action-plan-education"
      ],
      "lifestyle": [
        "trigger-avoidance-allergens-smoke-cold-air",
        "smoking-cessation",
        "weight-management",
        "vaccination-pneumococcal-influenza-for-prevention"
      ]
    },
    "contraindications": [
      "avoid-non-selective-beta-blockers-in-asthma",
      "long-term-corticosteroid-caution-osteoporosis-and-other-effects"
    ],
    "complications": [
      "status-asthmaticus",
      "airway-remodeling",
      "pneumothorax-complication",
      "respiratory-failure"
    ]
  },
  "Peptic ulcer disease / GERD": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "Gastrointestinal & Abdominal",
    "labels": {
      "onset": "Chronic",
      "course": "Chronic-relapsing",
      "severity": "Mild to serious (if complicated)",
      "mortality": "Low (higher if bleeding/perforated)",
      "curable": "Curable (if H. pylori eradicated)",
      "treatment": "Pharmacological ± lifestyle",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "helicobacter-pylori-infection",
      "nsaid-use-risk-factor",
      "smoking",
      "alcohol-use-disorder",
      "obesity"
    ],
    "symptoms": [
      "epigastric-pain-burning",
      "epigastric-pain-related-to-meals",
      "heartburn-retrosternal-burning",
      "regurgitation-of-food-or-acid",
      "bloating-and-early-satiety",
      "nausea"
    ],
    "signs": [
      "epigastric-tenderness",
      "pallor"
    ],
    "redFlags": [
      "gi-bleeding-hematemesis-melena",
      "unintentional-weight-loss-with-dyspepsia",
      "dysphagia-with-dyspepsia",
      "signs-of-perforation-peritonitis"
    ],
    "differentialDiagnoses": [
      "gastritis",
      "gastric-cancer-differential",
      "biliary-colic-differential",
      "functional-dyspepsia",
      "acute-coronary-syndrome-differential"
    ],
    "diagnosticCriteria": [
      "endoscopic-visualization-of-ulcer-or-erosive-esophagitis",
      "positive-h-pylori-test-urea-breath-stool-antigen-biopsy"
    ],
    "investigations": [
      "upper-gi-endoscopy-oesophagogastroduodenoscopy",
      "h-pylori-testing-urea-breath-stool-antigen",
      "liver-function-tests"
    ],
    "advancedInvestigations": [
      "ct-abdomen-for-complicated-or-refractory-peptic-ulcer",
      "24h-esophageal-ph-monitoring"
    ],
    "relatedTopics": {
      "anatomy": [
        "gastric-mucosa-and-duodenal-anatomy"
      ],
      "physiology": [
        "gastric-acid-secretion-regulation",
        "lower-esophageal-sphincter-function"
      ],
      "biochemistry": [
        "mucosal-defense-vs-acid-injury-balance",
        "urease-production-by-h-pylori"
      ],
      "pathology": [
        "mucosal-erosion-from-acid-pepsin-imbalance-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "proton-pump-inhibitors",
        "h2-receptor-antagonists",
        "h-pylori-eradication-triple-therapy",
        "antacids-symptomatic-relief"
      ],
      "surgery": [
        "surgical-repair-of-perforated-or-refractory-ulcer",
        "nissen-fundoplication-for-refractory-gerd"
      ],
      "psychology": [],
      "lifestyle": [
        "avoid-nsaids-alcohol-spicy-food-gastric-irritants",
        "small-frequent-meals-avoid-late-meals",
        "elevate-head-of-bed-for-reflux",
        "weight-reduction",
        "smoking-cessation"
      ]
    },
    "contraindications": [
      "caution-nsaid-use-in-active-peptic-ulcer",
      "nsaid-caution-peptic-ulcer-renal-impairment"
    ],
    "complications": [
      "peptic-ulcer-perforation",
      "upper-gi-bleeding",
      "gastric-outlet-obstruction",
      "barretts-esophagus"
    ]
  },
  "Urinary tract infection": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "Renal & Urological",
    "labels": {
      "onset": "Acute",
      "course": "Acute (may recur)",
      "severity": "Mild to serious (if upper tract/urosepsis)",
      "mortality": "Very low (higher if urosepsis)",
      "curable": "Curable",
      "treatment": "Pharmacological (antibiotics)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "female-anatomy-short-urethra",
      "sexual-activity-risk-factor",
      "urinary-catheterization",
      "diabetes-mellitus",
      "recurrent-urinary-tract-infections",
      "pregnancy-risk-factor"
    ],
    "symptoms": [
      "dysuria",
      "urinary-frequency-and-urgency",
      "suprapubic-pain",
      "cloudy-or-malodorous-urine",
      "loin-pain-if-upper-tract-involved"
    ],
    "signs": [
      "suprapubic-tenderness",
      "renal-angle-tenderness",
      "fever"
    ],
    "redFlags": [
      "fever-with-flank-pain-pyelonephritis",
      "urosepsis-features",
      "recurrent-febrile-urinary-tract-infections"
    ],
    "differentialDiagnoses": [
      "pyelonephritis-differential",
      "vaginitis-differential",
      "sexually-transmitted-urethritis",
      "interstitial-cystitis",
      "renal-calculus-differential"
    ],
    "diagnosticCriteria": [
      "positive-urine-culture-with-significant-colony-count",
      "positive-urinalysis-leukocyte-esterase-nitrites"
    ],
    "investigations": [
      "urinalysis-dipstick-and-microscopy",
      "midstream-urine-culture-and-sensitivity",
      "serum-creatinine-egfr"
    ],
    "advancedInvestigations": [
      "renal-ultrasound-if-recurrent-or-complicated-uti",
      "ct-urogram-if-recurrent-uti-with-suspected-anomaly"
    ],
    "relatedTopics": {
      "anatomy": [
        "lower-urinary-tract-anatomy-urethra-bladder"
      ],
      "physiology": [
        "normal-urine-flow-and-antimicrobial-defenses-of-urinary-tract"
      ],
      "biochemistry": [
        "bacterial-adherence-via-p-fimbriae"
      ],
      "pathology": [
        "ascending-bacterial-infection-of-urinary-tract-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "empirical-oral-antibiotics-per-local-guidelines",
        "iv-antibiotics-if-pyelonephritis-or-urosepsis",
        "analgesia"
      ],
      "surgery": [
        "urological-referral-for-correction-of-underlying-anomaly"
      ],
      "psychology": [],
      "lifestyle": [
        "adequate-fluid-intake-and-regular-voiding",
        "cranberry-products-limited-evidence"
      ]
    },
    "contraindications": [
      "nitrofurantoin-avoid-in-renal-impairment-or-near-term-pregnancy",
      "pregnancy-avoid-fluoroquinolones-tetracyclines",
      "renal-impairment-dose-adjustment-required"
    ],
    "complications": [
      "pyelonephritis-complication",
      "urosepsis",
      "renal-scarring",
      "urinary-tract-infection-ectopic-kidney"
    ]
  },
  "Hypothyroidism": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "Endocrine & Metabolic",
    "labels": {
      "onset": "Insidious",
      "course": "Chronic-progressive",
      "severity": "Mild to serious (if myxedema coma)",
      "mortality": "Low (with treatment)",
      "curable": "Manageable (chronic)",
      "treatment": "Pharmacological (hormone replacement)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "autoimmune-thyroiditis-hashimotos",
      "iodine-deficiency-or-excess",
      "female-sex",
      "family-history-of-autoimmune-disease",
      "age-over-45"
    ],
    "symptoms": [
      "fatigue",
      "cold-intolerance",
      "weight-gain-unexplained",
      "constipation-symptom",
      "dry-skin-and-hair-thinning",
      "menstrual-irregularity"
    ],
    "signs": [
      "bradycardia-hypothyroid",
      "non-pitting-edema-myxedema",
      "coarse-dry-skin-and-hair-loss",
      "delayed-relaxation-of-ankle-reflex",
      "diffuse-goiter"
    ],
    "redFlags": [
      "myxedema-coma-features"
    ],
    "differentialDiagnoses": [
      "depression-differential",
      "chronic-fatigue-syndrome-differential",
      "anemia-differential",
      "nephrotic-syndrome-differential"
    ],
    "diagnosticCriteria": [
      "raised-tsh-with-low-free-t4-primary-hypothyroidism",
      "positive-anti-tpo-antibodies"
    ],
    "investigations": [
      "tsh-and-free-t4",
      "anti-tpo-antibody-testing",
      "lipid-profile"
    ],
    "advancedInvestigations": [
      "thyroid-ultrasound-if-nodule-or-goiter"
    ],
    "relatedTopics": {
      "anatomy": [
        "thyroid-gland-anatomy-and-hpt-axis"
      ],
      "physiology": [
        "thyroid-hormone-synthesis-and-negative-feedback",
        "basal-metabolic-rate-regulation-by-thyroid-hormone"
      ],
      "biochemistry": [
        "thyroid-hormone-t3-t4-synthesis-biochemistry"
      ],
      "pathology": [
        "autoimmune-lymphocytic-infiltration-of-thyroid-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "levothyroxine-replacement"
      ],
      "surgery": [],
      "psychology": [
        "chronic-illness-dialysis-dependence-counseling"
      ],
      "lifestyle": [
        "regular-thyroid-function-monitoring"
      ]
    },
    "contraindications": [
      "levothyroxine-caution-in-cardiac-disease-start-low-titrate"
    ],
    "complications": [
      "myxedema-coma",
      "infertility-hypothyroid",
      "dyslipidemia-hypothyroid",
      "heart-failure"
    ]
  },
  "Osteoarthritis (clinical)": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "Musculoskeletal & Orthopaedic",
    "labels": {
      "onset": "Insidious",
      "course": "Chronic-progressive",
      "severity": "Mild to moderate (disabling if severe)",
      "mortality": "Very low",
      "curable": "Manageable (chronic)",
      "treatment": "Supportive/symptomatic (surgery if severe)",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "age-related-joint-degeneration",
      "obesity",
      "previous-joint-injury",
      "repetitive-joint-stress-occupational",
      "female-sex"
    ],
    "symptoms": [
      "joint-pain-worse-with-activity-better-with-rest",
      "joint-stiffness-short-lived-morning",
      "reduced-range-of-joint-movement",
      "joint-pain-in-knee-hip-hand"
    ],
    "signs": [
      "bony-swelling-of-joint-heberden-bouchard-nodes",
      "crepitus-on-joint-movement",
      "joint-line-tenderness",
      "antalgic-gait"
    ],
    "redFlags": [
      "rapidly-progressive-erosive-disease"
    ],
    "differentialDiagnoses": [
      "rheumatoid-arthritis-differential",
      "gout-and-pseudogout",
      "septic-arthritis-differential",
      "psoriatic-arthritis"
    ],
    "diagnosticCriteria": [
      "clinical-and-radiographic-diagnosis-of-osteoarthritis-kellgren-lawrence"
    ],
    "investigations": [
      "x-ray-affected-joint-weight-bearing",
      "esr-crp"
    ],
    "advancedInvestigations": [
      "mri-joint-for-early-or-atypical-osteoarthritis",
      "joint-aspiration-synovial-fluid-analysis"
    ],
    "relatedTopics": {
      "anatomy": [
        "articular-cartilage-and-synovial-joint-anatomy"
      ],
      "physiology": [
        "articular-cartilage-load-bearing-physiology",
        "normal-synovial-fluid-function"
      ],
      "biochemistry": [
        "cartilage-matrix-degradation-mmp-mediated"
      ],
      "pathology": [
        "progressive-cartilage-loss-and-osteophyte-formation-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "paracetamol-first-line-analgesia",
        "topical-nsaids-for-joint-pain",
        "nsaids-for-symptom-control",
        "intra-articular-corticosteroid-injection"
      ],
      "surgery": [
        "total-joint-replacement-arthroplasty",
        "arthroscopic-debridement-selected-cases"
      ],
      "psychology": [
        "chronic-pain-and-mobility-coping-counseling"
      ],
      "lifestyle": [
        "weight-loss-and-joint-protection",
        "low-impact-exercise-and-quadriceps-strengthening",
        "assistive-devices-walking-aids",
        "physiotherapy-occupational-therapy"
      ]
    },
    "contraindications": [
      "nsaid-caution-peptic-ulcer-renal-impairment",
      "surgical-caution-growth-plate-injury-risk-in-children"
    ],
    "complications": [
      "joint-instability-and-deformity",
      "reduced-mobility-and-disability",
      "chronic-foot-pain-and-disability"
    ]
  },
  "Hypertension": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "General & Vital Signs",
    "labels": {
      "onset": "Insidious",
      "course": "Chronic-progressive",
      "severity": "Mild to serious (if emergency)",
      "mortality": "Low (higher if untreated/complicated)",
      "curable": "Manageable (chronic)",
      "treatment": "Pharmacological + lifestyle",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "high-salt-diet",
      "family-history-of-hypertension",
      "obesity",
      "excess-alcohol-intake",
      "sedentary-lifestyle",
      "age-over-45"
    ],
    "symptoms": [
      "asymptomatic-often-incidental-bp-finding",
      "occipital-headache",
      "dizziness-nonspecific"
    ],
    "signs": [
      "elevated-blood-pressure-reading",
      "fourth-heart-sound-s4",
      "hypertensive-retinopathy-on-fundoscopy",
      "displaced-apex-beat"
    ],
    "redFlags": [
      "hypertensive-emergency-bp-with-end-organ-damage",
      "severe-headache-with-hypertension",
      "signs-of-raised-icp-herniation"
    ],
    "differentialDiagnoses": [
      "secondary-hypertension-renal-endocrine-cause",
      "white-coat-hypertension",
      "pulmonary-hypertension-differential"
    ],
    "diagnosticCriteria": [
      "office-bp-140-90-or-more-on-2-occasions",
      "ambulatory-or-home-bp-monitoring-confirms-diagnosis"
    ],
    "investigations": [
      "office-and-home-blood-pressure-measurement",
      "urinalysis-and-renal-function-hypertension-workup",
      "12-lead-ecg-lvh-assessment",
      "lipid-profile"
    ],
    "advancedInvestigations": [
      "ambulatory-24h-bp-monitoring-abpm",
      "renal-artery-doppler-or-angiography",
      "echocardiography-lvh-assessment"
    ],
    "relatedTopics": {
      "anatomy": [
        "arterial-wall-structure-and-baroreceptor-location"
      ],
      "physiology": [
        "renin-angiotensin-aldosterone-system",
        "baroreceptor-reflex-and-bp-regulation"
      ],
      "biochemistry": [
        "sodium-and-fluid-retention-mechanisms"
      ],
      "pathology": [
        "arteriolar-wall-thickening-and-hyaline-arteriolosclerosis-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "ace-inhibitors-arbs-first-line-hypertension",
        "calcium-channel-blockers",
        "thiazide-diuretics",
        "beta-blockers"
      ],
      "surgery": [],
      "psychology": [
        "stress-management-and-relaxation-techniques"
      ],
      "lifestyle": [
        "dash-diet-low-sodium",
        "regular-aerobic-exercise-hypertension",
        "weight-management",
        "alcohol-moderation",
        "smoking-cessation"
      ]
    },
    "contraindications": [
      "ace-inhibitor-arb-contraindicated-in-pregnancy",
      "ace-inhibitor-arb-caution-hyperkalemia-and-monitor-creatinine",
      "beta-blocker-caution-acute-heart-failure-asthma"
    ],
    "complications": [
      "hypertensive-nephropathy",
      "left-ventricular-hypertrophy",
      "hypertensive-retinopathy-complication",
      "aortic-dissection-hypertension-complication",
      "heart-failure"
    ]
  },
  "Chronic obstructive pulmonary disease (COPD)": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "Respiratory",
    "labels": {
      "onset": "Insidious (usually > 40 years)",
      "course": "Chronic-progressive",
      "severity": "Mild to serious (severe in exacerbations)",
      "mortality": "Moderate (higher with severe disease)",
      "curable": "Manageable (not curable)",
      "treatment": "Pharmacological + pulmonary rehabilitation",
      "contagious": false,
      "reversible": false
    },
    "riskFactors": [
      "smoking",
      "occupational-dust-or-chemical-exposure",
      "alpha-1-antitrypsin-deficiency",
      "age-over-65",
      "recent-viral-upper-respiratory-infection"
    ],
    "symptoms": [
      "chronic-productive-cough-copd",
      "progressive-exertional-breathlessness",
      "wheeze-copd",
      "reduced-exercise-tolerance"
    ],
    "signs": [
      "barrel-chest-copd",
      "pursed-lip-breathing-sign",
      "use-of-accessory-muscles-of-respiration",
      "reduced-breath-sounds-copd",
      "digital-clubbing-respiratory-cause"
    ],
    "redFlags": [
      "acute-copd-exacerbation-features",
      "cor-pulmonale-features",
      "spo2-below-92-percent-on-room-air"
    ],
    "differentialDiagnoses": [
      "asthma-differential",
      "bronchiectasis-differential",
      "lung-cancer",
      "heart-failure-cardiac-asthma"
    ],
    "diagnosticCriteria": [
      "post-bronchodilator-fev1-fvc-below-0-7-copd"
    ],
    "investigations": [
      "spirometry-post-bronchodilator-copd",
      "chest-x-ray-hyperinflation-copd",
      "pulse-oximetry-copd"
    ],
    "advancedInvestigations": [
      "ct-chest-high-resolution-copd-phenotyping",
      "alpha-1-antitrypsin-level"
    ],
    "relatedTopics": {
      "anatomy": [
        "alveolar-and-airway-structure-in-emphysema"
      ],
      "physiology": [
        "elastic-recoil-and-airway-collapse-in-copd",
        "alveolar-gas-exchange-impairment-shunt-physiology"
      ],
      "biochemistry": [
        "protease-antiprotease-imbalance-emphysema"
      ],
      "pathology": [
        "chronic-inflammation-and-airway-remodeling-copd-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "short-acting-bronchodilator-saba-sama",
        "long-acting-bronchodilator-laba-lama",
        "inhaled-corticosteroids-copd-selected",
        "oxygen-if-hypoxic"
      ],
      "surgery": [
        "lung-volume-reduction-surgery-selected-copd"
      ],
      "psychology": [],
      "lifestyle": [
        "smoking-cessation-copd",
        "pulmonary-rehabilitation",
        "long-term-oxygen-therapy-if-hypoxemic",
        "vaccination-pneumococcal-influenza-for-prevention"
      ]
    },
    "contraindications": [
      "beta-blocker-caution-in-copd-relative",
      "avoid-sedating-antihistamines-in-severe-copd"
    ],
    "complications": [
      "cor-pulmonale",
      "respiratory-failure",
      "recurrent-exacerbations-copd",
      "pneumothorax-complication"
    ]
  },
  "Anemia (iron deficiency)": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "Hematological",
    "labels": {
      "onset": "Insidious",
      "course": "Chronic (unless acute blood loss)",
      "severity": "Mild to serious (if severe/symptomatic)",
      "mortality": "Very low",
      "curable": "Curable",
      "treatment": "Pharmacological (iron replacement)",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "chronic-blood-loss-menstrual-gi",
      "poor-dietary-iron-intake",
      "increased-iron-demand-pregnancy-growth",
      "female-sex",
      "malnutrition"
    ],
    "symptoms": [
      "fatigue-anemia",
      "pica-craving-non-food-items",
      "brittle-nails-koilonychia-symptom",
      "restless-legs-symptom",
      "breathlessness"
    ],
    "signs": [
      "pallor",
      "koilonychia-sign",
      "angular-stomatitis",
      "atrophic-glossitis",
      "tachycardia-anemia"
    ],
    "redFlags": [
      "severe-anemia-symptomatic",
      "gi-bleeding-source-suspected-anemia"
    ],
    "differentialDiagnoses": [
      "megaloblastic-anemia-differential",
      "anemia-of-chronic-disease-differential",
      "thalassemia-trait-differential"
    ],
    "diagnosticCriteria": [
      "low-serum-ferritin-confirms-iron-deficiency",
      "microcytic-hypochromic-red-cells-on-smear"
    ],
    "investigations": [
      "complete-blood-count-anemia-workup",
      "serum-ferritin-iron-studies",
      "peripheral-blood-smear"
    ],
    "advancedInvestigations": [
      "upper-gi-endoscopy-for-anemia-source",
      "colonoscopy-for-anemia-source"
    ],
    "relatedTopics": {
      "anatomy": [
        "bone-marrow-erythropoiesis-anatomy"
      ],
      "physiology": [
        "oxygen-carrying-capacity-of-hemoglobin"
      ],
      "biochemistry": [
        "iron-metabolism-and-hepcidin-regulation"
      ],
      "pathology": [
        "impaired-hemoglobin-synthesis-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "oral-iron-supplementation",
        "iv-iron-if-intolerant-or-malabsorption"
      ],
      "surgery": [
        "blood-transfusion-if-severe-symptomatic-anemia"
      ],
      "psychology": [],
      "lifestyle": [
        "iron-rich-diet",
        "vitamin-c-to-enhance-iron-absorption"
      ]
    },
    "contraindications": [
      "iron-supplementation-caution-in-hemochromatosis-or-thalassemia"
    ],
    "complications": [
      "high-output-cardiac-failure-severe-anemia",
      "impaired-cognitive-development-child-iron-deficiency"
    ]
  },
  "Migraine": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "Neurological",
    "labels": {
      "onset": "Episodic (often begins in adolescence/young adulthood)",
      "course": "Chronic-relapsing",
      "severity": "Mild to serious (disabling during attacks)",
      "mortality": "Very low",
      "curable": "Manageable (chronic)",
      "treatment": "Pharmacological (acute + prophylactic) + lifestyle",
      "contagious": false,
      "reversible": true
    },
    "riskFactors": [
      "family-history-of-migraine",
      "female-sex-migraine",
      "known-migraine-triggers-stress-hormonal-food"
    ],
    "symptoms": [
      "unilateral-throbbing-headache",
      "photophobia-and-phonophobia",
      "visual-aura",
      "nausea-and-vomiting-with-headache"
    ],
    "signs": [
      "normal-neurological-examination-between-attacks"
    ],
    "redFlags": [
      "thunderclap-headache-red-flag",
      "new-onset-neurological-deficit-with-headache",
      "headache-with-fever-and-neck-stiffness"
    ],
    "differentialDiagnoses": [
      "tension-type-headache",
      "cluster-headache",
      "medication-overuse-headache",
      "subarachnoid-hemorrhage-differential",
      "brain-tumor-or-abscess"
    ],
    "diagnosticCriteria": [
      "ichd-3-criteria-for-migraine-without-aura"
    ],
    "investigations": [
      "clinical-history-based-diagnosis-migraine"
    ],
    "advancedInvestigations": [
      "mri-brain-if-atypical-migraine-features"
    ],
    "relatedTopics": {
      "anatomy": [
        "trigeminovascular-system-anatomy"
      ],
      "physiology": [
        "cortical-spreading-depression-migraine-mechanism"
      ],
      "biochemistry": [
        "calcitonin-gene-related-peptide-cgrp-in-migraine"
      ],
      "pathology": [
        "neurovascular-inflammation-mechanism-migraine"
      ]
    },
    "management": {
      "pharmacology": [
        "nsaids-or-triptans-for-acute-migraine",
        "antiemetics-for-migraine",
        "migraine-prophylaxis-beta-blockers-topiramate"
      ],
      "surgery": [],
      "psychology": [
        "stress-management-and-relaxation-techniques"
      ],
      "lifestyle": [
        "migraine-trigger-diary-and-avoidance",
        "regular-sleep-and-meal-schedule",
        "adequate-hydration"
      ]
    },
    "contraindications": [
      "triptans-contraindicated-in-ischemic-heart-disease"
    ],
    "complications": [
      "status-migrainosus"
    ]
  },
  "Acute gastroenteritis (clinical, adult)": {
    "subject": "General Medicine",
    "tier": "common",
    "system": "Gastrointestinal & Abdominal",
    "labels": {
      "onset": "Acute",
      "course": "Acute self-limiting (usually)",
      "severity": "Mild to serious (if severe dehydration)",
      "mortality": "Very low (higher with severe dehydration, untreated)",
      "curable": "Curable",
      "treatment": "Supportive/symptomatic ± antibiotics",
      "contagious": true,
      "reversible": true
    },
    "riskFactors": [
      "contaminated-food-or-water-exposure",
      "recent-travel-risk-factor",
      "close-contact-with-infected-individual",
      "immunosuppression-hiv-chemotherapy-steroids"
    ],
    "symptoms": [
      "watery-diarrhea",
      "vomiting-gastroenteritis",
      "abdominal-cramps",
      "low-grade-fever",
      "signs-of-dehydration-symptom"
    ],
    "signs": [
      "dry-mucous-membranes",
      "reduced-skin-turgor",
      "sunken-eyes-dehydration",
      "diffuse-abdominal-tenderness-mild",
      "tachycardia-anemia"
    ],
    "redFlags": [
      "severe-dehydration-features-gastroenteritis",
      "bloody-diarrhea-red-flag",
      "signs-of-perforation-peritonitis"
    ],
    "differentialDiagnoses": [
      "viral-gastroenteritis-differential",
      "bacterial-gastroenteritis-differential",
      "food-poisoning-differential",
      "inflammatory-bowel-disease-differential",
      "mesenteric-adenitis"
    ],
    "diagnosticCriteria": [
      "clinical-diagnosis-of-acute-watery-diarrhea-under-14-days"
    ],
    "investigations": [
      "stool-examination-and-culture-if-indicated",
      "serum-electrolytes-dehydration-assessment"
    ],
    "advancedInvestigations": [
      "stool-multiplex-pcr-panel-gastroenteritis"
    ],
    "relatedTopics": {
      "anatomy": [
        "small-intestinal-mucosal-anatomy-and-absorption"
      ],
      "physiology": [
        "intestinal-fluid-and-electrolyte-absorption-secretion"
      ],
      "biochemistry": [
        "bacterial-enterotoxin-mechanisms"
      ],
      "pathology": [
        "mucosal-invasion-or-toxin-mediated-injury-mechanism"
      ]
    },
    "management": {
      "pharmacology": [
        "oral-rehydration-solution",
        "antiemetics-for-gastroenteritis",
        "empirical-oral-antibiotics-per-local-guidelines"
      ],
      "surgery": [],
      "psychology": [],
      "lifestyle": [
        "continued-feeding-and-early-refeeding",
        "hand-hygiene-and-food-safety-education",
        "adequate-hydration"
      ]
    },
    "contraindications": [
      "antimotility-agents-caution-in-bloody-diarrhea"
    ],
    "complications": [
      "dehydration-complication",
      "electrolyte-imbalance-gastroenteritis",
      "acute-kidney-injury-dehydration"
    ]
  }
};
