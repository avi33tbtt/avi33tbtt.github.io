const SUBJECTS = [
 {
  "title": "Anatomy",
  "slug": "anatomy",
  "chip": "Pre-clinical",
  "chapters": [
   {
    "num": 1,
    "title": "General Anatomy — Terminology, Planes, and Body Organization",
    "topics": [
     "Anatomical position, terminology (superior, inferior, medial, lateral, proximal, distal)",
     "Body planes: sagittal, coronal (frontal), transverse (horizontal)",
     "Body cavities: thoracic, abdominal, pelvic, cranial, spinal",
     "Regions of the body: abdominal quadrants and nine-region division",
     "Structural organisation: cells → tissues → organs → systems",
     "Types of tissues: epithelial, connective, muscular, nervous",
     "Joints: classification (fibrous, cartilaginous, synovial), movements",
     "Bone types, markings, and surface features",
     "Fasciae: superficial and deep fasciae; clinical significance",
     "Introduction to anatomical variation and clinical anatomy"
    ]
   },
   {
    "num": 2,
    "title": "Gross Anatomy of the Upper Limb",
    "topics": [
     "Bones of the upper limb: clavicle, scapula, humerus, radius, ulna, carpals, metacarpals, phalanges",
     "Joints: sternoclavicular, acromioclavicular, shoulder (glenohumeral), elbow, wrist, hand joints",
     "Muscles: pectoral region, rotator cuff, arm (anterior and posterior compartments), forearm flexors and extensors",
     "Brachial plexus: roots, trunks, divisions, cords, terminal branches",
     "Axillary artery and its branches; brachial, radial, ulnar arteries",
     "Veins: cephalic, basilic, median cubital - clinical importance (venepuncture)",
     "Dermatomes and myotomes of the upper limb",
     "Lymphatics: axillary lymph nodes and their drainage",
     "Clinical: carpal tunnel syndrome, cubital tunnel syndrome, common nerve injuries (wrist drop, claw hand, ape thumb)",
     "Surface anatomy and applied anatomy of the upper limb"
    ]
   },
   {
    "num": 3,
    "title": "Gross Anatomy of the Lower Limb",
    "topics": [
     "Bones: hip (ilium, ischium, pubis), femur, patella, tibia, fibula, tarsals, metatarsals, phalanges",
     "Hip joint: structure, movements, blood supply, relations; hip dislocation",
     "Knee joint: menisci, cruciate and collateral ligaments, bursae; clinical (ACL injury, McMurray test)",
     "Ankle and foot joints: subtalar, midtarsal joints; arches of the foot",
     "Muscles: gluteal region, thigh (anterior, medial, posterior compartments), leg (anterior, lateral, posterior), foot",
     "Femoral triangle, adductor canal - contents and clinical significance",
     "Nerves: lumbar plexus (femoral, obturator), sacral plexus (sciatic, common peroneal, tibial)",
     "Arteries: femoral, popliteal, anterior tibial, posterior tibial, dorsalis pedis",
     "Venous drainage: great and small saphenous veins; varicose veins",
     "Dermatomes, myotomes; common injuries - foot drop, meralgia paraesthetica"
    ]
   },
   {
    "num": 4,
    "title": "Gross Anatomy of the Thorax",
    "topics": [
     "Thoracic skeleton: ribs, sternum, costal cartilages, vertebrae; typical and atypical ribs",
     "Thoracic wall: intercostal muscles, intercostal neurovascular bundle; intercostal nerve block",
     "Pleura: parietal and visceral layers, pleural cavity, recesses; pneumothorax and pleural effusion",
     "Lungs: lobes, fissures, bronchopulmonary segments (clinical importance for surgery)",
     "Mediastinum: superior, anterior, middle, posterior compartments and their contents",
     "Heart: external features, chambers, valves, conducting system, coronary arteries and veins",
     "Pericardium: layers, sinuses; pericardial effusion and cardiac tamponade",
     "Great vessels: aorta and its branches, superior/inferior vena cava, pulmonary vessels",
     "Diaphragm: attachments, openings, nerve supply; hiatus hernia",
     "Thoracic duct, azygos system of veins, sympathetic chain in thorax"
    ]
   },
   {
    "num": 5,
    "title": "Gross Anatomy of the Abdomen and Pelvis",
    "topics": [
     "Anterior abdominal wall: layers, rectus sheath, inguinal canal; hernia types",
     "Peritoneum: parietal and visceral, mesenteries, omenta, ligaments, peritoneal recesses",
     "Stomach: relations, blood supply (gastric arteries), lymphatics, vagal innervation",
     "Small intestine: duodenum (four parts, relations, blood supply), jejunum, ileum",
     "Large intestine: caecum, appendix, colon, rectum, anal canal - blood supply, relations",
     "Liver: lobes, ligaments, porta hepatis, hepatic artery, portal vein, hepatic veins",
     "Gallbladder, bile ducts, biliary tree; Calot's triangle; cholecystectomy relevance",
     "Pancreas: head, neck, body, tail; duct of Wirsung; blood supply; relations",
     "Kidneys, ureters, suprarenal glands: position, relations, blood supply",
     "Pelvis: male and female differences, pelvic floor muscles, pelvic organs and their relations"
    ]
   },
   {
    "num": 6,
    "title": "Gross Anatomy of the Head and Neck",
    "topics": [
     "Skull: bones, sutures, fontanelles; norma verticalis, lateralis, basalis; foramina and contents",
     "Meninges: dura mater (folds, venous sinuses), arachnoid, pia mater; CSF circulation",
     "Scalp: layers (SCALP mnemonic); danger area of scalp; extradural haematoma",
     "Face: muscles of facial expression (VII nerve), sensory supply (trigeminal branches)",
     "Parotid region: parotid gland, facial nerve, parotid duct; parotidectomy",
     "Neck: triangles (anterior and posterior), contents; thyroid and parathyroid glands",
     "Cranial nerves: origin, course, distribution, and clinical testing of all 12 cranial nerves",
     "Eye and orbit: extraocular muscles, ophthalmic artery, oculomotor nerve palsy",
     "Ear: external, middle, inner ear; Eustachian tube; cochlear and vestibular apparatus",
     "Pharynx, larynx, trachea: structure, muscles, nerve supply; tracheostomy anatomy"
    ]
   },
   {
    "num": 7,
    "title": "Neuroanatomy — Central and Peripheral Nervous System",
    "topics": [
     "Spinal cord: external features, grey and white matter organisation; laminae of Rexed",
     "Ascending tracts: dorsal column-medial lemniscal, spinothalamic (anterior and lateral), spinocerebellar",
     "Descending tracts: corticospinal (pyramidal), rubrospinal, vestibulospinal, reticulospinal",
     "Brainstem: medulla oblongata, pons, midbrain - internal structure, cranial nerve nuclei",
     "Cerebellum: lobes, nuclei, connections, functions; cerebellar syndromes",
     "Diencephalon: thalamus (nuclei and connections), hypothalamus (functions, nuclei)",
     "Cerebral cortex: functional areas (motor, sensory, speech areas); cortical lesions",
     "Basal ganglia: components, circuitry; Parkinson's disease and Huntington's disease",
     "Limbic system: hippocampus, amygdala, cingulate gyrus - memory and emotion",
     "Blood supply of the brain: circle of Willis, watershed areas; stroke territories"
    ]
   },
   {
    "num": 8,
    "title": "Histology — Epithelial, Connective, Muscle, and Nerve Tissues",
    "topics": [
     "Epithelial tissue: classification (simple, stratified, pseudostratified, transitional), cell junctions",
     "Glandular epithelium: exocrine (merocrine, apocrine, holocrine) and endocrine glands",
     "Connective tissue: cells (fibroblasts, mast cells, macrophages) and fibres (collagen, elastic, reticular)",
     "Connective tissue types: loose (areolar), dense regular, dense irregular, adipose, reticular",
     "Cartilage: hyaline, fibrocartilage, elastic - structure, distribution, clinical significance",
     "Bone: compact and cancellous; osteon (Haversian system); osteoblasts, osteoclasts, osteocytes",
     "Blood: red cells, white cells (differential), platelets - histological features",
     "Skeletal muscle: sarcomere structure, types of fibres (I, IIa, IIb), neuromuscular junction",
     "Cardiac and smooth muscle: distinguishing features, intercalated discs, gap junctions",
     "Nervous tissue: neurons (structure, types), glial cells (astrocytes, oligodendrocytes, microglia, Schwann cells), myelination"
    ]
   },
   {
    "num": 9,
    "title": "Embryology — Early Development and Organogenesis",
    "topics": [
     "Gametogenesis: spermatogenesis and oogenesis; meiosis and fertilisation",
     "First week: fertilisation, cleavage, morula, blastocyst formation, implantation",
     "Second week: bilaminar germ disc; trophoblast differentiation (cytotrophoblast, syncytiotrophoblast)",
     "Third week: gastrulation, trilaminar germ disc; primitive streak, notochord; neurulation",
     "Folding of the embryo; formation of gut tube, coelom, body wall",
     "Cardiovascular development: heart tube formation, septation, fetal circulation; congenital heart defects",
     "Development of the gut and its derivatives: foregut, midgut, hindgut; rotation of the gut",
     "Urogenital development: pronephros, mesonephros, metanephros; bladder, urethra",
     "Development of the face and palate; branchial arches, pouches, clefts and their derivatives",
     "Placenta and fetal membranes: structure, functions, umbilical cord; placental abnormalities"
    ]
   },
   {
    "num": 10,
    "title": "Surface and Radiological Anatomy",
    "topics": [
     "Surface landmarks of the thorax: angle of Louis, cardiac and lung borders, surface projections of valves",
     "Surface anatomy of the abdomen: planes (transpyloric, transtubercular), surface projections of organs",
     "Clinically important surface landmarks: McBurney's point, Murphy's point, Erb's point",
     "Introduction to plain radiograph interpretation: PA chest X-ray (RIPE mnemonic), abdominal X-ray",
     "CT and MRI anatomy: cross-sectional identification of major structures at key levels",
     "Ultrasound anatomy: liver, gallbladder, kidneys, aorta - normal appearances",
     "Vascular anatomy for catheterisation: femoral triangle, cubital fossa, internal jugular vein",
     "Anatomical basis of lumbar puncture: L3-L4/L4-L5 level, structures traversed",
     "Anatomical basis of thoracocentesis and paracentesis: safe zones, structures at risk",
     "Applied anatomy of common surgical incisions: midline, paramedian, Pfannenstiel, Kocher's"
    ]
   }
  ]
 },
 {
  "title": "Physiology",
  "slug": "physiology",
  "chip": "Pre-clinical",
  "chapters": [
   {
    "num": 1,
    "title": "General Physiology — Cell, Body Fluids, and Homeostasis",
    "topics": null
   },
   {
    "num": 2,
    "title": "Blood and Lymph — Composition, Haemopoiesis, Haemostasis",
    "topics": null
   },
   {
    "num": 3,
    "title": "Cardiovascular System — Cardiac Cycle, Heart Sounds, ECG",
    "topics": null
   },
   {
    "num": 4,
    "title": "Respiratory System — Mechanics of Breathing, Gas Exchange",
    "topics": null
   },
   {
    "num": 5,
    "title": "Digestive System — Secretion, Motility, Absorption",
    "topics": null
   },
   {
    "num": 6,
    "title": "Excretory System — Renal Function, Urine Formation",
    "topics": null
   },
   {
    "num": 7,
    "title": "Nervous System — Neurophysiology, Reflexes, Special Senses",
    "topics": null
   },
   {
    "num": 8,
    "title": "Endocrine System — Hormones and Regulation",
    "topics": null
   },
   {
    "num": 9,
    "title": "Reproductive Physiology — Male and Female",
    "topics": null
   },
   {
    "num": 10,
    "title": "Muscle Physiology — Skeletal, Cardiac, and Smooth Muscle",
    "topics": null
   }
  ]
 },
 {
  "title": "Biochemistry",
  "slug": "biochemistry",
  "chip": "Pre-clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Biomolecules — Carbohydrates, Lipids, Proteins, Nucleic Acids",
    "topics": null
   },
   {
    "num": 2,
    "title": "Enzymes — Structure, Kinetics, and Regulation",
    "topics": null
   },
   {
    "num": 3,
    "title": "Carbohydrate Metabolism — Glycolysis, TCA Cycle, Gluconeogenesis",
    "topics": null
   },
   {
    "num": 4,
    "title": "Lipid Metabolism — Beta-Oxidation, Ketogenesis, Lipoprotein Metabolism",
    "topics": null
   },
   {
    "num": 5,
    "title": "Protein Metabolism — Amino Acid Catabolism, Urea Cycle",
    "topics": null
   },
   {
    "num": 6,
    "title": "Nucleotide Metabolism — Purine and Pyrimidine Synthesis",
    "topics": null
   },
   {
    "num": 7,
    "title": "Vitamins and Minerals — Deficiency Diseases and Functions",
    "topics": null
   },
   {
    "num": 8,
    "title": "Molecular Biology — DNA Replication, Transcription, Translation",
    "topics": null
   },
   {
    "num": 9,
    "title": "Genetics — Mendelian Genetics, Mutations, Genetic Disorders",
    "topics": null
   },
   {
    "num": 10,
    "title": "Clinical Biochemistry — Liver Function, Kidney Function Tests",
    "topics": null
   }
  ]
 },
 {
  "title": "Pathology",
  "slug": "pathology",
  "chip": "Para-clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Cell Injury, Adaptation, and Death — Necrosis, Apoptosis",
    "topics": null
   },
   {
    "num": 2,
    "title": "Inflammation — Acute and Chronic; Healing and Repair",
    "topics": null
   },
   {
    "num": 3,
    "title": "Haemodynamic Disorders — Oedema, Thrombosis, Embolism, Infarction",
    "topics": null
   },
   {
    "num": 4,
    "title": "Neoplasia — Benign and Malignant Tumours; Carcinogenesis",
    "topics": null
   },
   {
    "num": 5,
    "title": "Immunopathology — Hypersensitivity, Autoimmunity, Immunodeficiency",
    "topics": null
   },
   {
    "num": 6,
    "title": "Infectious Diseases — Bacterial, Viral, Fungal, and Parasitic Pathology",
    "topics": null
   },
   {
    "num": 7,
    "title": "Systemic Pathology — Cardiovascular System",
    "topics": null
   },
   {
    "num": 8,
    "title": "Systemic Pathology — Respiratory System",
    "topics": null
   },
   {
    "num": 9,
    "title": "Systemic Pathology — GIT, Liver, and Pancreas",
    "topics": null
   },
   {
    "num": 10,
    "title": "Systemic Pathology — Kidney, Haematopoietic System, and Endocrine",
    "topics": null
   }
  ]
 },
 {
  "title": "Pharmacology",
  "slug": "pharmacology",
  "chip": "Para-clinical",
  "chapters": [
   {
    "num": 1,
    "title": "General Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topics": null
   },
   {
    "num": 2,
    "title": "Autonomic Nervous System Drugs — Cholinergic and Adrenergic",
    "topics": null
   },
   {
    "num": 3,
    "title": "Central Nervous System Drugs — Sedatives, Antipsychotics, Antidepressants",
    "topics": null
   },
   {
    "num": 4,
    "title": "Cardiovascular Drugs — Antihypertensives, Antiarrhythmics, Diuretics",
    "topics": null
   },
   {
    "num": 5,
    "title": "Autacoids and Anti-inflammatory Drugs — NSAIDs, Corticosteroids",
    "topics": null
   },
   {
    "num": 6,
    "title": "Antimicrobial Agents — Antibiotics, Antifungals, Antivirals",
    "topics": null
   },
   {
    "num": 7,
    "title": "Chemotherapy — Anticancer Drugs",
    "topics": null
   },
   {
    "num": 8,
    "title": "Endocrine Pharmacology — Insulin, Thyroid, Sex Hormones",
    "topics": null
   },
   {
    "num": 9,
    "title": "GIT Drugs — Antacids, Antiemetics, Laxatives",
    "topics": null
   },
   {
    "num": 10,
    "title": "Haematological Drugs — Anticoagulants, Thrombolytics, Iron Therapy",
    "topics": null
   }
  ]
 },
 {
  "title": "Microbiology",
  "slug": "microbiology",
  "chip": "Para-clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Introduction to Microbiology — Sterilisation and Disinfection",
    "topics": null
   },
   {
    "num": 2,
    "title": "Immunology — Innate and Adaptive Immunity, Vaccines",
    "topics": null
   },
   {
    "num": 3,
    "title": "General Bacteriology — Morphology, Staining, Culture",
    "topics": null
   },
   {
    "num": 4,
    "title": "Systemic Bacteriology — Gram-positive and Gram-negative Organisms",
    "topics": null
   },
   {
    "num": 5,
    "title": "Mycobacteriology — Tuberculosis and Leprosy",
    "topics": null
   },
   {
    "num": 6,
    "title": "Virology — DNA and RNA Viruses; HIV",
    "topics": null
   },
   {
    "num": 7,
    "title": "Mycology — Pathogenic Fungi and Antifungal Sensitivity",
    "topics": null
   },
   {
    "num": 8,
    "title": "Parasitology — Protozoa, Helminths, Arthropods",
    "topics": null
   },
   {
    "num": 9,
    "title": "Clinical Microbiology — Specimen Collection and Interpretation",
    "topics": null
   },
   {
    "num": 10,
    "title": "Hospital Infection Control and Antimicrobial Resistance",
    "topics": null
   }
  ]
 },
 {
  "title": "Forensic Medicine & Toxicology",
  "slug": "forensic-medicine-toxicology",
  "chip": "Para-clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Medical Jurisprudence — Law and Medical Practice",
    "topics": null
   },
   {
    "num": 2,
    "title": "Death and Post-mortem Changes — Time Since Death",
    "topics": null
   },
   {
    "num": 3,
    "title": "Medicolegal Autopsy — Procedure and Documentation",
    "topics": null
   },
   {
    "num": 4,
    "title": "Injuries — Mechanical, Thermal, Chemical, and Electrical",
    "topics": null
   },
   {
    "num": 5,
    "title": "Sexual Offences — Examination and Evidence Collection",
    "topics": null
   },
   {
    "num": 6,
    "title": "Identification — Age, Sex, Stature, Fingerprints",
    "topics": null
   },
   {
    "num": 7,
    "title": "General Toxicology — Absorption, Distribution, Elimination of Poisons",
    "topics": null
   },
   {
    "num": 8,
    "title": "Corrosive and Irritant Poisons",
    "topics": null
   },
   {
    "num": 9,
    "title": "Neurological Poisons — Narcotics, Sedatives, Organophosphates",
    "topics": null
   },
   {
    "num": 10,
    "title": "Medicolegal Aspects of Substance Abuse and Alcohol",
    "topics": null
   }
  ]
 },
 {
  "title": "Community Medicine",
  "slug": "community-medicine",
  "chip": "Para-clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Concepts of Health, Disease, and Preventive Medicine",
    "topics": null
   },
   {
    "num": 2,
    "title": "Epidemiology — Descriptive, Analytical, and Experimental",
    "topics": null
   },
   {
    "num": 3,
    "title": "Biostatistics — Data Collection, Analysis, and Interpretation",
    "topics": null
   },
   {
    "num": 4,
    "title": "Environment and Health — Water, Air, Food, Housing",
    "topics": null
   },
   {
    "num": 5,
    "title": "Nutrition and Health — Assessment, Deficiency Diseases, Programmes",
    "topics": null
   },
   {
    "num": 6,
    "title": "Communicable Disease Control — Immunisation, Surveillance",
    "topics": null
   },
   {
    "num": 7,
    "title": "Non-communicable Diseases — Cardiovascular, Cancer, Diabetes",
    "topics": null
   },
   {
    "num": 8,
    "title": "Maternal and Child Health — Reproductive and Child Health Programme",
    "topics": null
   },
   {
    "num": 9,
    "title": "Health Management and Administration — Health Systems in India",
    "topics": null
   },
   {
    "num": 10,
    "title": "Occupational Health and Disaster Management",
    "topics": null
   }
  ]
 },
 {
  "title": "Ophthalmology",
  "slug": "ophthalmology",
  "chip": "Clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Anatomy and Physiology of the Eye",
    "topics": null
   },
   {
    "num": 2,
    "title": "Diseases of the Conjunctiva — Conjunctivitis, Trachoma",
    "topics": null
   },
   {
    "num": 3,
    "title": "Diseases of the Cornea and Sclera",
    "topics": null
   },
   {
    "num": 4,
    "title": "Diseases of the Uveal Tract — Uveitis",
    "topics": null
   },
   {
    "num": 5,
    "title": "Glaucoma — Types, Diagnosis, and Management",
    "topics": null
   },
   {
    "num": 6,
    "title": "Diseases of the Lens — Cataract",
    "topics": null
   },
   {
    "num": 7,
    "title": "Diseases of the Retina — Diabetic Retinopathy, Detachment",
    "topics": null
   },
   {
    "num": 8,
    "title": "Disorders of Ocular Motility — Squint and Amblyopia",
    "topics": null
   },
   {
    "num": 9,
    "title": "Refractive Errors and Low Vision",
    "topics": null
   },
   {
    "num": 10,
    "title": "Ophthalmic Emergencies and Surgical Procedures",
    "topics": null
   }
  ]
 },
 {
  "title": "Otorhinolaryngology (ENT)",
  "slug": "ent",
  "chip": "Clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Anatomy of the Ear, Nose, and Throat",
    "topics": null
   },
   {
    "num": 2,
    "title": "Diseases of the External and Middle Ear",
    "topics": null
   },
   {
    "num": 3,
    "title": "Sensorineural Hearing Loss and Tinnitus",
    "topics": null
   },
   {
    "num": 4,
    "title": "Otosclerosis and Otological Surgeries",
    "topics": null
   },
   {
    "num": 5,
    "title": "Diseases of the Nose and Paranasal Sinuses",
    "topics": null
   },
   {
    "num": 6,
    "title": "Epistaxis — Causes and Management",
    "topics": null
   },
   {
    "num": 7,
    "title": "Diseases of the Pharynx and Tonsils",
    "topics": null
   },
   {
    "num": 8,
    "title": "Diseases of the Larynx — Hoarseness, Croup, Cancer",
    "topics": null
   },
   {
    "num": 9,
    "title": "Tracheostomy — Indications and Technique",
    "topics": null
   },
   {
    "num": 10,
    "title": "Head and Neck Tumours and ENT Emergencies",
    "topics": null
   }
  ]
 },
 {
  "title": "General Medicine",
  "slug": "general-medicine",
  "chip": "Clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Cardiovascular Diseases — IHD, Heart Failure, Hypertension",
    "topics": null
   },
   {
    "num": 2,
    "title": "Respiratory Diseases — Pneumonia, COPD, Asthma, TB",
    "topics": null
   },
   {
    "num": 3,
    "title": "Gastrointestinal Diseases — Peptic Ulcer, IBD, Liver Diseases",
    "topics": null
   },
   {
    "num": 4,
    "title": "Renal Diseases — Nephritis, Nephrotic Syndrome, CKD",
    "topics": null
   },
   {
    "num": 5,
    "title": "Endocrine Disorders — Diabetes Mellitus, Thyroid, Adrenal",
    "topics": null
   },
   {
    "num": 6,
    "title": "Neurological Disorders — Stroke, Epilepsy, Meningitis",
    "topics": null
   },
   {
    "num": 7,
    "title": "Infectious Diseases — Malaria, Typhoid, Dengue, HIV/AIDS",
    "topics": null
   },
   {
    "num": 8,
    "title": "Haematological Disorders — Anaemia, Leukaemia, Coagulopathy",
    "topics": null
   },
   {
    "num": 9,
    "title": "Rheumatological Disorders — Rheumatoid Arthritis, SLE",
    "topics": null
   },
   {
    "num": 10,
    "title": "Clinical Skills — History Taking, Examination, ECG, Radiology",
    "topics": null
   }
  ]
 },
 {
  "title": "General Surgery",
  "slug": "general-surgery",
  "chip": "Clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Wounds, Wound Healing, and Surgical Infections",
    "topics": null
   },
   {
    "num": 2,
    "title": "Fluid, Electrolyte, and Acid-Base Balance in Surgery",
    "topics": null
   },
   {
    "num": 3,
    "title": "Shock — Types, Pathophysiology, and Management",
    "topics": null
   },
   {
    "num": 4,
    "title": "Trauma — Polytrauma, Burns, and Fracture Management",
    "topics": null
   },
   {
    "num": 5,
    "title": "Principles of Anaesthesia and Pre-operative Assessment",
    "topics": null
   },
   {
    "num": 6,
    "title": "Diseases of the Breast",
    "topics": null
   },
   {
    "num": 7,
    "title": "Diseases of the Thyroid and Parathyroid",
    "topics": null
   },
   {
    "num": 8,
    "title": "Abdominal Surgery — Appendix, Intestine, Hernia, Peritonitis",
    "topics": null
   },
   {
    "num": 9,
    "title": "Hepatobiliary and Pancreatic Surgery",
    "topics": null
   },
   {
    "num": 10,
    "title": "Surgical Oncology and Transplant Surgery Principles",
    "topics": null
   }
  ]
 },
 {
  "title": "Obstetrics & Gynaecology (OBG)",
  "slug": "obg",
  "chip": "Clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Anatomy and Physiology of the Female Reproductive System",
    "topics": null
   },
   {
    "num": 2,
    "title": "Normal Pregnancy — Diagnosis, Antenatal Care, Fetal Development",
    "topics": null
   },
   {
    "num": 3,
    "title": "Normal Labour — Stages, Mechanisms, and Conduct of Delivery",
    "topics": null
   },
   {
    "num": 4,
    "title": "Abnormal Labour — Dystocia, Obstructed Labour",
    "topics": null
   },
   {
    "num": 5,
    "title": "Obstetric Complications — APH, PPH, Pre-eclampsia, Eclampsia",
    "topics": null
   },
   {
    "num": 6,
    "title": "Operative Obstetrics — Forceps, Vacuum, Caesarean Section",
    "topics": null
   },
   {
    "num": 7,
    "title": "Puerperium — Normal and Abnormal",
    "topics": null
   },
   {
    "num": 8,
    "title": "Gynaecological Disorders — Menstrual Disorders, Fibroids, PCOS",
    "topics": null
   },
   {
    "num": 9,
    "title": "Infections of the Female Genital Tract",
    "topics": null
   },
   {
    "num": 10,
    "title": "Gynaecological Oncology and Family Planning",
    "topics": null
   }
  ]
 },
 {
  "title": "Paediatrics",
  "slug": "paediatrics",
  "chip": "Clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Growth and Development — Milestones and Assessment",
    "topics": [
     "Normal growth parameters: weight, height, head circumference — charts and percentiles",
     "Developmental milestones: gross motor, fine motor, language, and social domains",
     "Denver Developmental Screening Test and other assessment tools",
     "Factors affecting growth: genetic, nutritional, hormonal, and environmental",
     "Failure to thrive — causes and clinical approach",
     "Puberty and adolescent growth spurt — Tanner staging",
     "Assessment of nutritional status — anthropometry and clinical signs",
     "Red flags in developmental delay and when to refer",
     "Bone age and skeletal maturation",
     "Growth hormone axis and disorders of growth"
    ]
   },
   {
    "num": 2,
    "title": "Neonatology — Care of Newborn, LBW, Prematurity, Birth Asphyxia",
    "topics": [
     "Normal newborn examination and transitional physiology",
     "APGAR scoring and immediate care at birth",
     "Low birth weight and prematurity — classification and complications",
     "Birth asphyxia and hypoxic-ischaemic encephalopathy",
     "Neonatal resuscitation — NRP protocol",
     "Respiratory distress syndrome and surfactant therapy",
     "Neonatal jaundice — physiological vs pathological, kernicterus",
     "Neonatal sepsis — early and late onset",
     "Kangaroo mother care and thermoregulation",
     "Common congenital anomalies presenting in the neonatal period"
    ]
   },
   {
    "num": 3,
    "title": "Infant Feeding and Nutritional Disorders",
    "topics": [
     "Breastfeeding — physiology, technique, and advantages",
     "Complementary feeding — timing and principles (WHO guidelines)",
     "Protein-energy malnutrition — kwashiorkor and marasmus",
     "Vitamin A deficiency and other micronutrient deficiencies",
     "Rickets and vitamin D deficiency",
     "Iron deficiency anaemia in infants and children",
     "Formula feeding — indications and preparation",
     "Weaning and common feeding problems",
     "Obesity in children — assessment and management",
     "Integrated Management of Neonatal and Childhood Illness (IMNCI) — nutrition component"
    ]
   },
   {
    "num": 4,
    "title": "Immunisation Schedule and Vaccine-preventable Diseases",
    "topics": [
     "National Immunisation Schedule — vaccines and timing",
     "Cold chain maintenance and vaccine storage",
     "BCG, OPV, and IPV — indications and administration",
     "DPT, Pentavalent, and Hepatitis B vaccination",
     "Measles, MMR, and rubella vaccination",
     "Adverse events following immunisation (AEFI)",
     "Contraindications and precautions in immunisation",
     "Pulse polio and disease eradication programmes",
     "Newer vaccines — rotavirus, pneumococcal, HPV",
     "Vaccine-preventable disease surveillance"
    ]
   },
   {
    "num": 5,
    "title": "Respiratory Disorders in Children — Pneumonia, Bronchiolitis, Asthma",
    "topics": [
     "Acute respiratory infections — classification (IMNCI approach)",
     "Pneumonia in children — aetiology, diagnosis, and management",
     "Bronchiolitis — clinical features and supportive care",
     "Childhood asthma — diagnosis and step-wise management",
     "Croup and acute epiglottitis",
     "Whooping cough (pertussis)",
     "Tuberculosis in children — diagnosis and DOTS therapy",
     "Foreign body aspiration",
     "Chronic cough — differential diagnosis in children",
     "Oxygen therapy and respiratory support in paediatric practice"
    ]
   },
   {
    "num": 6,
    "title": "Gastrointestinal Disorders — Diarrhoea, Dehydration, Malabsorption",
    "topics": [
     "Acute diarrhoea — aetiology and assessment of dehydration",
     "ORS therapy and WHO plans A, B, and C",
     "Persistent and chronic diarrhoea",
     "Malabsorption syndromes — coeliac disease, cystic fibrosis",
     "Acute abdomen in children — intussusception, appendicitis",
     "Vomiting in infancy — pyloric stenosis and GERD",
     "Constipation and Hirschsprung disease",
     "Viral hepatitis in children",
     "Worm infestations and their management",
     "Nutritional rehabilitation in children with GI disease"
    ]
   },
   {
    "num": 7,
    "title": "Paediatric Infections — Measles, Chickenpox, Meningitis, Typhoid",
    "topics": [
     "Measles — clinical features, complications, and management",
     "Chickenpox and herpes zoster in children",
     "Mumps and rubella",
     "Acute bacterial meningitis — diagnosis and management",
     "Viral encephalitis in children",
     "Enteric (typhoid) fever in children",
     "Dengue and other arboviral infections in children",
     "Scarlet fever and streptococcal infections",
     "Diphtheria — clinical features and management",
     "Fever without a focus — approach in infants and children"
    ]
   },
   {
    "num": 8,
    "title": "Genetic and Chromosomal Disorders",
    "topics": [
     "Patterns of inheritance — autosomal, X-linked, mitochondrial",
     "Down syndrome — features, diagnosis, and management",
     "Turner and Klinefelter syndromes",
     "Inborn errors of metabolism — screening and presentation",
     "Congenital hypothyroidism and newborn screening",
     "Muscular dystrophies in children",
     "Dysmorphology — approach to the child with congenital anomalies",
     "Genetic counselling and prenatal diagnosis",
     "Common single-gene disorders in paediatric practice",
     "Multifactorial and teratogenic causes of congenital malformation"
    ]
   },
   {
    "num": 9,
    "title": "Haematological and Oncological Conditions in Children",
    "topics": [
     "Anaemia in childhood — classification and approach",
     "Thalassaemia and haemoglobinopathies",
     "Sickle cell disease in children",
     "Haemophilia and other bleeding disorders",
     "Immune thrombocytopenic purpura",
     "Acute lymphoblastic leukaemia — presentation and principles of treatment",
     "Lymphomas and solid tumours of childhood (Wilms tumour, neuroblastoma)",
     "Bone marrow failure syndromes",
     "Blood transfusion in paediatric practice",
     "Supportive and palliative care in paediatric oncology"
    ]
   },
   {
    "num": 10,
    "title": "Paediatric Emergencies and Developmental Paediatrics",
    "topics": [
     "Paediatric basic and advanced life support",
     "Febrile seizures and status epilepticus in children",
     "Shock in children — recognition and fluid resuscitation",
     "Acute severe asthma and respiratory failure",
     "Anaphylaxis — recognition and emergency management",
     "Poisoning and accidental ingestion in children",
     "Diabetic ketoacidosis in children",
     "Autism spectrum disorder and developmental delay",
     "Attention-deficit hyperactivity disorder (ADHD) — recognition and approach",
     "Child abuse and neglect — recognition and reporting"
    ]
   }
  ]
 },
 {
  "title": "Orthopaedics",
  "slug": "orthopaedics",
  "chip": "Clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Fractures — Classification, Healing, and Principles of Management",
    "topics": [
     "Definition and classification of fractures — closed, open, complete, incomplete",
     "Describing a fracture — site, pattern, displacement, angulation",
     "Stages of fracture healing — haematoma, callus, remodelling",
     "Factors affecting fracture union — local and systemic",
     "Principles of fracture management — reduction, retention, rehabilitation",
     "Methods of immobilisation — casts, splints, traction",
     "Open fractures — Gustilo-Anderson classification and management",
     "Complications of fractures — early and late",
     "Delayed union, non-union, and mal-union",
     "Pathological fractures — causes and approach"
    ]
   },
   {
    "num": 2,
    "title": "Fractures of Upper Limb",
    "topics": [
     "Clavicle fractures — types and management",
     "Fractures of the proximal humerus",
     "Shaft of humerus fractures and radial nerve injury",
     "Supracondylar fracture of the humerus in children",
     "Fractures of the radius and ulna shaft — Monteggia and Galeazzi",
     "Colles' fracture and Smith's fracture",
     "Scaphoid fractures — diagnosis and complications",
     "Fractures of the metacarpals and phalanges",
     "Elbow dislocation and associated injuries",
     "Nerve injuries associated with upper limb fractures"
    ]
   },
   {
    "num": 3,
    "title": "Fractures of Lower Limb",
    "topics": [
     "Fractures of the neck of femur — classification and management",
     "Intertrochanteric and subtrochanteric fractures",
     "Shaft of femur fractures — management principles",
     "Fractures around the knee — supracondylar and tibial plateau",
     "Shaft of tibia and fibula fractures",
     "Ankle fractures — classification (Weber, Lauge-Hansen)",
     "Fractures of the calcaneus and talus",
     "Fractures of the metatarsals — including Jones fracture",
     "Compartment syndrome of the leg",
     "Complications specific to lower limb fractures — fat embolism, DVT"
    ]
   },
   {
    "num": 4,
    "title": "Dislocations — Shoulder, Hip, Knee, and Other Joints",
    "topics": [
     "Shoulder dislocation — anterior and posterior, and recurrent instability",
     "Hip dislocation — traumatic anterior and posterior",
     "Knee dislocation and associated vascular injury",
     "Elbow dislocation — mechanism and reduction",
     "Patellar dislocation",
     "Acromioclavicular joint injuries",
     "Sternoclavicular joint dislocation",
     "Temporomandibular joint dislocation",
     "Principles of closed reduction and post-reduction care",
     "Complications of joint dislocation — recurrent instability, avascular necrosis"
    ]
   },
   {
    "num": 5,
    "title": "Spine — Disc Prolapse, Spinal Injuries, Deformities",
    "topics": [
     "Anatomy and biomechanics of the vertebral column relevant to injury",
     "Cervical spine injuries — classification and management",
     "Thoracolumbar spine fractures",
     "Spinal cord injury — assessment (ASIA scale) and management",
     "Prolapsed intervertebral disc — clinical features and management",
     "Low back pain — approach and red flag signs",
     "Scoliosis — classification and management",
     "Kyphosis and Scheuermann's disease",
     "Spondylolisthesis and spondylolysis",
     "Tuberculosis of the spine (Pott's disease)"
    ]
   },
   {
    "num": 6,
    "title": "Bone Infections — Osteomyelitis and Septic Arthritis",
    "topics": [
     "Acute haematogenous osteomyelitis — pathogenesis and clinical features",
     "Chronic osteomyelitis — sequestrum, involucrum, and management",
     "Septic arthritis — clinical features and joint aspiration",
     "Tuberculous osteomyelitis and tuberculous arthritis",
     "Brodie's abscess",
     "Investigations in bone and joint infection — imaging and microbiology",
     "Antibiotic principles in bone infection",
     "Surgical management — sequestrectomy and drainage",
     "Complications of osteomyelitis — growth disturbance, pathological fracture",
     "Diabetic foot infections and osteomyelitis"
    ]
   },
   {
    "num": 7,
    "title": "Bone Tumours — Benign and Malignant",
    "topics": [
     "Approach to a bone tumour — clinical and radiological features",
     "Benign bone tumours — osteoma, osteochondroma, enchondroma",
     "Giant cell tumour of bone",
     "Osteosarcoma — presentation and management principles",
     "Ewing's sarcoma",
     "Chondrosarcoma",
     "Metastatic bone disease",
     "Multiple myeloma — skeletal involvement",
     "Imaging in bone tumours — plain radiograph, MRI, bone scan",
     "Principles of limb-salvage surgery and amputation in bone tumours"
    ]
   },
   {
    "num": 8,
    "title": "Arthritis — Osteoarthritis, Rheumatoid, Gout",
    "topics": [
     "Osteoarthritis — pathogenesis, clinical features, and management",
     "Rheumatoid arthritis — orthopaedic manifestations and management",
     "Gout and pseudogout — clinical features and management",
     "Ankylosing spondylitis — musculoskeletal features",
     "Juvenile idiopathic arthritis",
     "Septic vs inflammatory vs degenerative arthritis — differentiating features",
     "Investigations in arthritis — synovial fluid analysis, imaging",
     "Medical management of arthritis — DMARDs and analgesics",
     "Surgical management — synovectomy, arthroplasty, arthrodesis",
     "Rehabilitation and physiotherapy in chronic arthritis"
    ]
   },
   {
    "num": 9,
    "title": "Congenital and Developmental Disorders — CTEV, DDH, CDH",
    "topics": [
     "Congenital talipes equinovarus (CTEV) — clinical features and Ponseti method",
     "Developmental dysplasia of the hip (DDH) — screening and Pavlik harness",
     "Congenital dislocation of the hip — late presentation",
     "Perthes disease — clinical features and management",
     "Slipped capital femoral epiphysis",
     "Genu varum and genu valgum in children",
     "Limb length discrepancy — assessment and management",
     "Torticollis — congenital muscular type",
     "Spina bifida and myelomeningocele — orthopaedic aspects",
     "Skeletal dysplasias — an overview"
    ]
   },
   {
    "num": 10,
    "title": "Orthopaedic Surgeries — Arthroplasty, Arthroscopy, Amputation",
    "topics": [
     "Principles of total hip arthroplasty",
     "Principles of total knee arthroplasty",
     "Arthroscopy — diagnostic and therapeutic applications",
     "External fixation — principles and indications",
     "Internal fixation — plates, screws, and intramedullary nails",
     "Principles and levels of amputation",
     "Prosthetics and orthotics — an overview",
     "Bone grafting — types and indications",
     "Tendon transfer surgery — principles",
     "Post-operative rehabilitation in orthopaedic surgery"
    ]
   }
  ]
 },
 {
  "title": "Dermatology",
  "slug": "dermatology",
  "chip": "Clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Structure and Functions of Skin",
    "topics": [
     "Layers of the epidermis and dermis — histological organisation",
     "Skin appendages — hair follicles, sebaceous and sweat glands, nails",
     "Functions of skin — barrier, thermoregulation, sensation, vitamin D synthesis",
     "Skin pigmentation — melanocytes and melanin synthesis",
     "Blood supply and innervation of the skin",
     "Skin changes with age — intrinsic and photoageing",
     "Wound healing in the skin — phases and factors affecting healing",
     "Immunological functions of the skin",
     "Racial and regional variation in skin structure",
     "Skin as a diagnostic window to systemic disease"
    ]
   },
   {
    "num": 2,
    "title": "Approach to a Skin Patient — Lesion Morphology and Terminology",
    "topics": [
     "History taking in a dermatology patient",
     "Primary lesions — macule, papule, plaque, nodule, vesicle, bulla, pustule",
     "Secondary lesions — scale, crust, erosion, ulcer, scar, lichenification",
     "Describing distribution and configuration of skin lesions",
     "Colour changes in skin lesions and their significance",
     "Examination technique — palpation, Darier's sign, Nikolsky's sign",
     "Dermoscopy — basic principles and uses",
     "Skin biopsy — indications and techniques",
     "Patch testing and other diagnostic procedures",
     "Documentation and photography of skin lesions"
    ]
   },
   {
    "num": 3,
    "title": "Eczema and Dermatitis — Atopic, Contact, Seborrhoeic",
    "topics": [
     "Atopic dermatitis — clinical features and diagnostic criteria",
     "Pathogenesis of atopic dermatitis — barrier dysfunction and atopy",
     "Allergic contact dermatitis — mechanism and common allergens",
     "Irritant contact dermatitis",
     "Seborrhoeic dermatitis — clinical features and management",
     "Nummular (discoid) eczema",
     "Lichen simplex chronicus",
     "Stasis dermatitis",
     "Management of eczema — emollients, topical steroids, calcineurin inhibitors",
     "Complications of eczema — secondary infection, eczema herpeticum"
    ]
   },
   {
    "num": 4,
    "title": "Psoriasis and Papulosquamous Disorders",
    "topics": [
     "Psoriasis — pathogenesis and clinical features",
     "Types of psoriasis — plaque, guttate, pustular, erythrodermic",
     "Nail changes and psoriatic arthritis",
     "Koebner phenomenon and Auspitz sign",
     "Lichen planus — clinical features and variants",
     "Pityriasis rosea",
     "Pityriasis rubra pilaris",
     "Topical and systemic treatment of psoriasis",
     "Phototherapy in papulosquamous disorders",
     "Biologic agents in psoriasis management"
    ]
   },
   {
    "num": 5,
    "title": "Acne Vulgaris and Rosacea",
    "topics": [
     "Pathogenesis of acne vulgaris — sebum, follicular hyperkeratinisation, bacteria",
     "Grading and clinical types of acne",
     "Topical and systemic treatment of acne",
     "Isotretinoin — indications, dosing, and side effects",
     "Acne scarring — types and management",
     "Rosacea — clinical subtypes and triggers",
     "Perioral dermatitis",
     "Hidradenitis suppurativa",
     "Hormonal acne and its evaluation",
     "Cosmetic camouflage and skincare counselling in acne"
    ]
   },
   {
    "num": 6,
    "title": "Skin Infections — Bacterial, Fungal, and Viral",
    "topics": [
     "Impetigo and ecthyma",
     "Cellulitis and erysipelas",
     "Staphylococcal scalded skin syndrome",
     "Dermatophyte infections — tinea corporis, cruris, capitis, unguium",
     "Candidiasis of the skin and mucosa",
     "Pityriasis versicolor",
     "Viral warts and molluscum contagiosum",
     "Herpes simplex and varicella-zoster skin infections",
     "Scabies and pediculosis",
     "Principles of antimicrobial therapy in skin infection"
    ]
   },
   {
    "num": 7,
    "title": "Sexually Transmitted Infections — Syphilis, Gonorrhoea, Herpes",
    "topics": [
     "Primary, secondary, and tertiary syphilis — clinical features",
     "Serological tests for syphilis — VDRL, TPHA, FTA-ABS",
     "Gonorrhoea — clinical features and management",
     "Genital herpes — clinical features and management",
     "Chlamydial infection and non-gonococcal urethritis",
     "Genital warts (condyloma acuminata)",
     "Chancroid and lymphogranuloma venereum",
     "Syndromic management of sexually transmitted infections",
     "HIV and its cutaneous manifestations",
     "Prevention and partner notification in STIs"
    ]
   },
   {
    "num": 8,
    "title": "Leprosy — Classification, Treatment, Reactions",
    "topics": [
     "Aetiology and transmission of leprosy",
     "Ridley-Jopling classification and WHO classification",
     "Clinical features — skin lesions and nerve involvement",
     "Diagnosis — slit-skin smear and histopathology",
     "Multidrug therapy (MDT) — regimens for paucibacillary and multibacillary leprosy",
     "Type 1 (reversal) and Type 2 (erythema nodosum leprosum) reactions",
     "Deformities in leprosy and their prevention",
     "Neuritis in leprosy — recognition and management",
     "Rehabilitation and disability care in leprosy",
     "National Leprosy Eradication Programme"
    ]
   },
   {
    "num": 9,
    "title": "Skin Tumours — BCC, SCC, Melanoma",
    "topics": [
     "Basal cell carcinoma — clinical features and management",
     "Squamous cell carcinoma — risk factors and management",
     "Actinic keratosis as a precursor lesion",
     "Malignant melanoma — ABCDE criteria and staging",
     "Benign skin tumours — seborrhoeic keratosis, dermatofibroma",
     "Naevi — types and features of atypical naevi",
     "Kaposi's sarcoma",
     "Cutaneous lymphoma — mycosis fungoides",
     "Principles of skin biopsy in suspected malignancy",
     "Sun protection and prevention of skin cancer"
    ]
   },
   {
    "num": 10,
    "title": "Drug Reactions and Dermatological Emergencies",
    "topics": [
     "Morbilliform and urticarial drug eruptions",
     "Fixed drug eruption",
     "Stevens-Johnson syndrome and toxic epidermal necrolysis",
     "Drug reaction with eosinophilia and systemic symptoms (DRESS)",
     "Erythroderma — causes and management",
     "Angioedema and anaphylaxis — cutaneous emergency",
     "Erythema multiforme",
     "Pemphigus vulgaris and bullous pemphigoid",
     "Necrotising fasciitis — recognition as a dermatological emergency",
     "Principles of emergency management in severe cutaneous adverse reactions"
    ]
   }
  ]
 },
 {
  "title": "Psychiatry",
  "slug": "psychiatry",
  "chip": "Clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Introduction to Psychiatry — History and Mental Status Examination",
    "topics": [
     "Psychiatric history taking — chief complaint, history of present illness, past history",
     "Family history and personal history in psychiatric assessment",
     "Mental status examination — appearance, behaviour, and speech",
     "Assessment of mood and affect",
     "Assessment of thought — form, content, and possession of thought",
     "Assessment of perception — hallucinations and illusions",
     "Cognitive assessment — orientation, memory, attention",
     "Insight and judgement assessment",
     "Classification systems in psychiatry — ICD and DSM",
     "Biopsychosocial model of mental illness"
    ]
   },
   {
    "num": 2,
    "title": "Schizophrenia and Other Psychotic Disorders",
    "topics": [
     "Aetiology of schizophrenia — genetic, neurodevelopmental, and dopamine hypothesis",
     "Positive and negative symptoms of schizophrenia",
     "Subtypes and course of schizophrenia",
     "Diagnostic criteria for schizophrenia",
     "Delusional disorder",
     "Brief psychotic disorder and schizophreniform disorder",
     "Schizoaffective disorder",
     "Antipsychotic drugs — typical and atypical, mechanism and side effects",
     "Management of acute psychosis",
     "Rehabilitation and long-term management of schizophrenia"
    ]
   },
   {
    "num": 3,
    "title": "Mood Disorders — Depression and Bipolar Disorder",
    "topics": [
     "Major depressive disorder — clinical features and diagnostic criteria",
     "Aetiology of depression — biological and psychosocial factors",
     "Dysthymia and persistent depressive disorder",
     "Bipolar disorder — manic and depressive episodes",
     "Diagnostic criteria for mania and hypomania",
     "Antidepressant drugs — classes, mechanism, and side effects",
     "Mood stabilisers — lithium and anticonvulsants",
     "Electroconvulsive therapy — indications and procedure",
     "Suicide risk assessment in mood disorders",
     "Postpartum depression and peripartum mood disorders"
    ]
   },
   {
    "num": 4,
    "title": "Anxiety Disorders — Phobias, OCD, PTSD, Panic Disorder",
    "topics": [
     "Generalised anxiety disorder — clinical features and management",
     "Panic disorder and agoraphobia",
     "Specific phobia and social anxiety disorder",
     "Obsessive-compulsive disorder — clinical features",
     "Post-traumatic stress disorder — clinical features and management",
     "Acute stress reaction and adjustment disorder",
     "Somatoform disorders",
     "Anxiolytic drugs — benzodiazepines and their use",
     "Cognitive behavioural therapy in anxiety disorders",
     "Differentiating anxiety disorders from medical causes of anxiety"
    ]
   },
   {
    "num": 5,
    "title": "Substance Use Disorders — Alcohol, Drugs, Tobacco Dependence",
    "topics": [
     "Concepts of dependence, tolerance, and withdrawal",
     "Alcohol use disorder — clinical features and complications",
     "Alcohol withdrawal and delirium tremens",
     "Opioid use disorder — intoxication and withdrawal",
     "Cannabis and stimulant use disorders",
     "Tobacco dependence and cessation approaches",
     "Screening tools — CAGE and AUDIT",
     "Pharmacological management of substance dependence",
     "De-addiction and rehabilitation services",
     "Wernicke-Korsakoff syndrome"
    ]
   },
   {
    "num": 6,
    "title": "Organic Mental Disorders — Delirium, Dementia",
    "topics": [
     "Delirium — clinical features and causes",
     "Differentiating delirium from dementia and depression",
     "Alzheimer's disease — clinical features and management",
     "Vascular dementia",
     "Other causes of dementia — Lewy body, frontotemporal",
     "Investigations in a case of cognitive decline",
     "Management of behavioural and psychological symptoms of dementia",
     "Amnesic syndromes",
     "Organic personality change due to a general medical condition",
     "Caregiver support in dementia care"
    ]
   },
   {
    "num": 7,
    "title": "Personality Disorders",
    "topics": [
     "Definition and general features of personality disorders",
     "Cluster A personality disorders — paranoid, schizoid, schizotypal",
     "Cluster B personality disorders — antisocial, borderline, histrionic, narcissistic",
     "Cluster C personality disorders — avoidant, dependent, obsessive-compulsive",
     "Aetiology of personality disorders",
     "Assessment approach to suspected personality disorder",
     "Management principles — psychotherapy and pharmacotherapy",
     "Dialectical behaviour therapy in borderline personality disorder",
     "Differentiating personality disorder from Axis I illness",
     "Prognosis and course of personality disorders"
    ]
   },
   {
    "num": 8,
    "title": "Child and Adolescent Psychiatry — ADHD, Autism, Learning Disorders",
    "topics": [
     "Attention-deficit hyperactivity disorder — clinical features and diagnosis",
     "Management of ADHD — behavioural and pharmacological",
     "Autism spectrum disorder — clinical features",
     "Specific learning disorders",
     "Intellectual disability — classification and assessment",
     "Conduct disorder and oppositional defiant disorder",
     "Separation anxiety disorder in children",
     "Enuresis and encopresis",
     "Childhood emotional disorders",
     "Approach to a child with developmental concerns"
    ]
   },
   {
    "num": 9,
    "title": "Psychiatric Emergencies — Suicidality, Aggression, Acute Psychosis",
    "topics": [
     "Assessment and management of suicidal risk",
     "Management of the acutely aggressive or violent patient",
     "Acute psychotic emergency — assessment and initial management",
     "Neuroleptic malignant syndrome",
     "Serotonin syndrome",
     "Acute dystonia and other drug-induced emergencies",
     "Catatonia — recognition and management",
     "Rapid tranquillisation — principles and drugs used",
     "Legal and ethical considerations in psychiatric emergencies",
     "Crisis intervention and referral pathways"
    ]
   },
   {
    "num": 10,
    "title": "Psychotherapy, Psychopharmacology, and Legal Aspects of Psychiatry",
    "topics": [
     "Principles of psychotherapy — supportive, psychodynamic, cognitive behavioural",
     "Group therapy and family therapy",
     "Classes of psychotropic drugs — an overview",
     "Pharmacokinetics and drug interactions in psychopharmacology",
     "Informed consent and capacity assessment in psychiatry",
     "Mental Health Act — provisions relevant to clinical practice",
     "Involuntary admission and patient rights",
     "Confidentiality and its limits in psychiatric practice",
     "Forensic psychiatry — an overview",
     "Stigma and community mental health programmes"
    ]
   }
  ]
 },
 {
  "title": "Emergency Medicine",
  "slug": "emergency-medicine",
  "chip": "Clinical",
  "chapters": [
   {
    "num": 1,
    "title": "Triage — Principles and Systems (START, SALT)",
    "topics": [
     "Principles and purpose of triage in emergency care",
     "Triage categories — colour coding and priority levels",
     "START (Simple Triage and Rapid Treatment) system",
     "SALT (Sort, Assess, Lifesaving Interventions, Treatment/Transport) system",
     "Mass casualty triage vs single-patient emergency triage",
     "Re-triage and dynamic reassessment",
     "Documentation in triage",
     "Triage in paediatric and special populations",
     "Role of triage officer and team communication",
     "Common pitfalls and errors in triage decision-making"
    ]
   },
   {
    "num": 2,
    "title": "Airway Management — BVM, Intubation, Surgical Airway",
    "topics": [
     "Assessment of the airway — signs of obstruction",
     "Basic airway manoeuvres — head tilt-chin lift, jaw thrust",
     "Airway adjuncts — oropharyngeal and nasopharyngeal airway",
     "Bag-valve-mask ventilation — technique and troubleshooting",
     "Rapid sequence intubation — indications and drugs used",
     "Endotracheal intubation — technique and confirmation of placement",
     "Supraglottic airway devices — laryngeal mask airway",
     "Difficult airway assessment and algorithms",
     "Surgical airway — cricothyroidotomy, indications and technique",
     "Complications of airway management procedures"
    ]
   },
   {
    "num": 3,
    "title": "Cardiopulmonary Resuscitation (CPR) and ACLS",
    "topics": [
     "Chain of survival and early recognition of cardiac arrest",
     "Basic life support — chest compressions and rescue breathing",
     "Automated external defibrillator — use and indications",
     "Advanced cardiac life support algorithm",
     "Shockable vs non-shockable rhythms",
     "Drugs used in ACLS — adrenaline, amiodarone, and others",
     "Post-resuscitation care and targeted temperature management",
     "Reversible causes of cardiac arrest — the Hs and Ts",
     "Special circumstances in resuscitation — pregnancy, hypothermia",
     "Ethical considerations — when to stop resuscitation, DNR orders"
    ]
   },
   {
    "num": 4,
    "title": "Shock Management — Fluid Resuscitation Protocols",
    "topics": [
     "Classification of shock — hypovolaemic, cardiogenic, distributive, obstructive",
     "Clinical recognition of shock — compensated vs decompensated",
     "Initial assessment and monitoring in shock",
     "Principles of fluid resuscitation — crystalloids vs colloids",
     "Massive transfusion protocol",
     "Vasopressor and inotrope use in shock",
     "Septic shock — recognition and early management bundle",
     "Cardiogenic shock — recognition and management",
     "Anaphylactic shock — management approach",
     "Monitoring response to resuscitation — lactate clearance, urine output"
    ]
   },
   {
    "num": 5,
    "title": "Polytrauma — Primary and Secondary Survey (ATLS Approach)",
    "topics": [
     "Primary survey — Airway, Breathing, Circulation, Disability, Exposure (ABCDE)",
     "Airway with cervical spine control in trauma",
     "Breathing assessment — pneumothorax, haemothorax, flail chest",
     "Circulation assessment and control of external haemorrhage",
     "Disability — rapid neurological assessment (AVPU, GCS)",
     "Exposure and environmental control in trauma",
     "Secondary survey — head-to-toe examination",
     "Trauma imaging — FAST scan and its role",
     "Damage control resuscitation and surgery principles",
     "Trauma scoring systems — an overview"
    ]
   },
   {
    "num": 6,
    "title": "Burns — Assessment, Resuscitation, and Wound Care",
    "topics": [
     "Classification of burns by depth — superficial, partial, full thickness",
     "Estimating burn surface area — rule of nines and Lund-Browder chart",
     "Fluid resuscitation in burns — Parkland formula",
     "Airway management in burns — inhalational injury",
     "Initial wound care and dressing of burns",
     "Escharotomy — indications and technique",
     "Electrical and chemical burns — special considerations",
     "Systemic complications of major burns",
     "Pain management in burn patients",
     "Referral criteria to a burns centre"
    ]
   },
   {
    "num": 7,
    "title": "Toxicological Emergencies — Poisoning and Overdose",
    "topics": [
     "General approach to the poisoned patient",
     "Decontamination — gastric lavage, activated charcoal, and their limitations",
     "Organophosphate poisoning — clinical features and management",
     "Paracetamol overdose and N-acetylcysteine therapy",
     "Opioid overdose and naloxone use",
     "Benzodiazepine overdose",
     "Corrosive poisoning — acids and alkalis",
     "Carbon monoxide poisoning",
     "Toxidromes — recognition and clinical clues",
     "Role of poison control centres and antidote availability"
    ]
   },
   {
    "num": 8,
    "title": "Environmental Emergencies — Heat Stroke, Hypothermia, Drowning",
    "topics": [
     "Heat exhaustion and heat stroke — recognition and management",
     "Hypothermia — classification and rewarming strategies",
     "Frostbite — assessment and management",
     "Drowning — pathophysiology and resuscitation approach",
     "High altitude illness — acute mountain sickness and its complications",
     "Decompression sickness",
     "Electrical injury and lightning strike",
     "Envenomation — snake bite management",
     "Scorpion sting and other arthropod envenomation",
     "Near-drowning — post-resuscitation care and complications"
    ]
   },
   {
    "num": 9,
    "title": "Paediatric Emergencies — Febrile Seizures, Croup, Anaphylaxis",
    "topics": [
     "Differences in paediatric physiology relevant to emergency care",
     "Paediatric basic and advanced life support",
     "Febrile seizures — assessment and management",
     "Croup — recognition and severity assessment",
     "Anaphylaxis in children — recognition and adrenaline dosing",
     "Foreign body airway obstruction in children",
     "Dehydration assessment and fluid management in children",
     "Diabetic ketoacidosis in the paediatric emergency setting",
     "Non-accidental injury — recognition in the emergency department",
     "Paediatric trauma — special considerations"
    ]
   },
   {
    "num": 10,
    "title": "Disaster Medicine and Mass Casualty Incident Management",
    "topics": [
     "Definitions and classification of disasters",
     "Incident command system in disaster response",
     "Hospital disaster preparedness planning",
     "Mass casualty incident triage and resource allocation",
     "Communication and coordination during disaster response",
     "Search and rescue principles",
     "Chemical, biological, radiological, and nuclear (CBRN) incident response",
     "Field hospitals and surge capacity planning",
     "Psychological first aid in disaster settings",
     "Post-disaster recovery and lessons-learned review"
    ]
   }
  ]
 }
];
