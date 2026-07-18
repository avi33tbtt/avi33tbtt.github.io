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
     "Surface anatomy and applied anatomy of the lower limb"
    ]
   },
   {
    "num": 4,
    "title": "Gross Anatomy of the Thorax",
    "topics": [
     "Thoracic wall: ribs, intercostal spaces, and muscles",
     "Pleura and pleural cavity: parietal and visceral layers",
     "Lungs: lobes, fissures, bronchopulmonary segments",
     "Mediastinum: subdivisions and contents",
     "Heart: chambers, valves, and great vessels",
     "Coronary circulation and conduction system of the heart",
     "Pericardium: layers and clinical significance",
     "Oesophagus: course, relations, and constrictions",
     "Thoracic duct and lymphatic drainage of the thorax",
     "Surface anatomy of the thorax and clinical correlations"
    ]
   },
   {
    "num": 5,
    "title": "Gross Anatomy of the Abdomen and Pelvis",
    "topics": [
     "Anterior abdominal wall: layers and inguinal canal",
     "Peritoneum: reflections, mesenteries, and omenta",
     "Stomach, duodenum, and small intestine: anatomy and relations",
     "Large intestine: caecum, colon, and rectum",
     "Liver, gallbladder, and biliary apparatus",
     "Pancreas and spleen: anatomy and relations",
     "Kidneys, ureters, and adrenal glands",
     "Pelvic organs: bladder, rectum, and reproductive organs",
     "Blood supply of abdominal viscera: coeliac trunk, mesenteric arteries",
     "Inguinal hernia: anatomical basis and clinical relevance"
    ]
   },
   {
    "num": 6,
    "title": "Gross Anatomy of the Head and Neck",
    "topics": [
     "Skull: bones, sutures, and cranial fossae",
     "Scalp: layers and clinical significance",
     "Face: muscles of facial expression and sensory innervation",
     "Triangles of the neck: boundaries and contents",
     "Salivary glands: parotid, submandibular, sublingual",
     "Thyroid and parathyroid glands: anatomy and relations",
     "Cranial nerves: origin, course, and distribution overview",
     "Temporomandibular joint and muscles of mastication",
     "Blood supply of the head and neck: carotid and vertebral arteries",
     "Lymphatic drainage of the head and neck"
    ]
   },
   {
    "num": 7,
    "title": "Neuroanatomy — Central and Peripheral Nervous System",
    "topics": [
     "Organisation of the nervous system: CNS and PNS overview",
     "Spinal cord: gross anatomy and internal structure",
     "Brainstem: medulla, pons, midbrain — structure and functions",
     "Cerebellum: anatomy and functional divisions",
     "Cerebrum: lobes, gyri, sulci, and functional areas",
     "Ventricular system and cerebrospinal fluid circulation",
     "Blood supply of the brain: circle of Willis",
     "Ascending and descending tracts of the spinal cord",
     "Autonomic nervous system: sympathetic and parasympathetic divisions",
     "Peripheral nerves: brachial and lumbosacral plexus overview"
    ]
   },
   {
    "num": 8,
    "title": "Histology — Epithelial, Connective, Muscle, and Nerve Tissues",
    "topics": [
     "Epithelial tissue: classification and functions",
     "Connective tissue: types and composition",
     "Cartilage: hyaline, elastic, and fibrocartilage",
     "Bone histology: compact and spongy bone structure",
     "Muscle tissue: skeletal, cardiac, and smooth muscle histology",
     "Nervous tissue: neurons and neuroglia",
     "Blood: histological composition and cell types",
     "Lymphoid tissue: lymph nodes, spleen, thymus histology",
     "Skin histology: epidermis and dermis",
     "Glands: exocrine and endocrine gland histology"
    ]
   },
   {
    "num": 9,
    "title": "Embryology — Early Development and Organogenesis",
    "topics": [
     "Gametogenesis: spermatogenesis and oogenesis",
     "Fertilisation and early cleavage divisions",
     "Implantation and formation of the bilaminar and trilaminar germ disc",
     "Gastrulation and formation of the three germ layers",
     "Neurulation and development of the neural tube",
     "Development of the cardiovascular system",
     "Development of the gastrointestinal system",
     "Development of the urogenital system",
     "Placenta and fetal membranes: development and function",
     "Common congenital anomalies and their embryological basis"
    ]
   },
   {
    "num": 10,
    "title": "Surface and Radiological Anatomy",
    "topics": [
     "Surface landmarks of the thorax and abdomen",
     "Surface anatomy of the upper and lower limb",
     "Surface anatomy of the head and neck",
     "Principles of plain radiography and normal anatomy",
     "Basics of ultrasound anatomy",
     "Basics of CT anatomy: cross-sectional correlation",
     "Basics of MRI anatomy: cross-sectional correlation",
     "Radiological anatomy of the chest",
     "Radiological anatomy of the abdomen",
     "Clinical correlation of surface and radiological anatomy"
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
    "topics": [
     "Cell membrane structure and transport: diffusion, osmosis, active transport",
     "Resting membrane potential and its ionic basis",
     "Body fluid compartments: ICF, ECF, plasma, interstitial fluid",
     "Homeostasis: negative and positive feedback mechanisms",
     "Genetic control of cell function: transcription and translation overview",
     "Cell organelles and their physiological roles",
     "Transport across cell membranes: channels, carriers, pumps",
     "Acid-base balance: buffers and pH regulation basics",
     "Physiological variations: age, sex, and environmental influences",
     "Introduction to feedback control systems in the body"
    ]
   },
   {
    "num": 2,
    "title": "Blood and Lymph — Composition, Haemopoiesis, Haemostasis",
    "topics": [
     "Composition and functions of blood plasma",
     "Erythropoiesis: formation, maturation, and regulation of RBCs",
     "Haemoglobin structure, synthesis, and oxygen transport",
     "White blood cells: types, functions, and life span",
     "Platelets: structure and role in haemostasis",
     "Blood groups: ABO and Rh systems; transfusion reactions",
     "Mechanism of blood coagulation: intrinsic and extrinsic pathways",
     "Anticoagulants and fibrinolysis",
     "Anaemia: classification and physiological effects",
     "Lymphatic system: formation and circulation of lymph"
    ]
   },
   {
    "num": 3,
    "title": "Cardiovascular System — Cardiac Cycle, Heart Sounds, ECG",
    "topics": [
     "Properties of cardiac muscle: excitability, conductivity, rhythmicity",
     "Origin and spread of cardiac impulse: SA node to Purkinje fibres",
     "Cardiac cycle: systole, diastole, and pressure-volume changes",
     "Heart sounds: origin, characteristics, and auscultation areas",
     "Electrocardiogram: waves, intervals, and normal patterns",
     "Cardiac output: definition, regulation, and measurement methods",
     "Arterial blood pressure: determinants and regulation",
     "Venous return and factors affecting it",
     "Microcirculation: capillary exchange and regulation",
     "Regulation of cardiovascular system: neural and hormonal control"
    ]
   },
   {
    "num": 4,
    "title": "Respiratory System — Mechanics of Breathing, Gas Exchange",
    "topics": [
     "Mechanics of breathing: inspiration and expiration",
     "Lung volumes and capacities",
     "Pulmonary ventilation and alveolar ventilation",
     "Gas exchange: diffusion of oxygen and carbon dioxide across membrane",
     "Oxygen transport and the oxygen-haemoglobin dissociation curve",
     "Carbon dioxide transport in blood",
     "Regulation of respiration: neural and chemical control",
     "Hypoxia and its types",
     "Artificial respiration and oxygen therapy basics",
     "Respiratory function tests: spirometry overview"
    ]
   },
   {
    "num": 5,
    "title": "Digestive System — Secretion, Motility, Absorption",
    "topics": [
     "Salivary secretion: composition, regulation, and functions",
     "Gastric secretion: phases and regulation of acid secretion",
     "Gastric motility and emptying",
     "Pancreatic secretion: composition and regulation",
     "Bile secretion and its role in digestion",
     "Small intestinal motility and secretion",
     "Digestion and absorption of carbohydrates, proteins, and fats",
     "Large intestinal functions: absorption and defecation reflex",
     "Gastrointestinal hormones: gastrin, secretin, CCK",
     "Physiology of vomiting and common GI reflexes"
    ]
   },
   {
    "num": 6,
    "title": "Excretory System — Renal Function, Urine Formation",
    "topics": [
     "Functional anatomy of the nephron",
     "Glomerular filtration: rate and regulating factors",
     "Tubular reabsorption: mechanisms and transport maxima",
     "Tubular secretion and its physiological role",
     "Concentration and dilution of urine: counter-current mechanism",
     "Regulation of body fluid osmolarity and volume",
     "Renal regulation of acid-base balance",
     "Micturition reflex and its control",
     "Renal function tests: clearance and GFR estimation",
     "Role of kidney in blood pressure regulation"
    ]
   },
   {
    "num": 7,
    "title": "Nervous System — Neurophysiology, Reflexes, Special Senses",
    "topics": [
     "Structure and function of the neuron; resting and action potentials",
     "Synaptic transmission: excitatory and inhibitory synapses",
     "Neurotransmitters and their physiological roles",
     "Reflex arc: components and classification of reflexes",
     "Sensory receptors and general sensations",
     "Physiology of pain and referred pain",
     "Motor pathways: pyramidal and extrapyramidal systems",
     "Cerebellum and basal ganglia: functions in motor control",
     "Autonomic nervous system: sympathetic and parasympathetic divisions",
     "Special senses: vision, hearing, taste, and smell overview"
    ]
   },
   {
    "num": 8,
    "title": "Endocrine System — Hormones and Regulation",
    "topics": [
     "General principles of hormone action and receptor mechanisms",
     "Hypothalamo-pituitary axis and its regulation",
     "Thyroid hormones: synthesis, action, and regulation",
     "Parathyroid hormone and calcium homeostasis",
     "Adrenal cortex hormones: glucocorticoids and mineralocorticoids",
     "Adrenal medulla: catecholamines and stress response",
     "Endocrine pancreas: insulin and glucagon regulation of glucose",
     "Growth hormone: actions and regulation",
     "Hormonal control of metabolism",
     "Physiology of stress and adaptation"
    ]
   },
   {
    "num": 9,
    "title": "Reproductive Physiology — Male and Female",
    "topics": [
     "Male reproductive physiology: spermatogenesis and hormonal control",
     "Physiology of testosterone: synthesis and functions",
     "Female reproductive physiology: oogenesis and ovarian cycle",
     "Menstrual cycle: hormonal regulation and phases",
     "Physiology of fertilisation and implantation",
     "Hormonal changes during pregnancy",
     "Physiology of parturition: mechanism of labour",
     "Lactation: mammary gland development and milk secretion",
     "Puberty: hormonal basis and physiological changes",
     "Physiology of menopause"
    ]
   },
   {
    "num": 10,
    "title": "Muscle Physiology — Skeletal, Cardiac, and Smooth Muscle",
    "topics": [
     "Structure of skeletal muscle: sarcomere and myofilaments",
     "Molecular basis of muscle contraction: sliding filament theory",
     "Excitation-contraction coupling in skeletal muscle",
     "Neuromuscular junction: structure and transmission",
     "Types of muscle contraction: isotonic and isometric",
     "Types of skeletal muscle fibres and their properties",
     "Physiology of cardiac muscle: unique properties",
     "Smooth muscle: structure, types, and contraction mechanism",
     "Muscle fatigue and rigor mortis",
     "Motor unit and gradation of muscle contraction"
    ]
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
    "topics": [
     "Classification of carbohydrates: monosaccharides, disaccharides, polysaccharides",
     "Structure and functions of glucose, fructose, and galactose",
     "Glycosidic bonds; structure of starch, glycogen, and cellulose",
     "Classification of lipids: simple, compound, and derived lipids",
     "Fatty acids: saturated, unsaturated, and essential fatty acids",
     "Structure of triglycerides, phospholipids, and cholesterol",
     "Amino acids: classification, structure, and properties",
     "Protein structure: primary, secondary, tertiary, and quaternary",
     "Nucleotides and nucleosides: structure and nomenclature",
     "Structure of DNA and RNA; Watson-Crick base pairing"
    ]
   },
   {
    "num": 2,
    "title": "Enzymes — Structure, Kinetics, and Regulation",
    "topics": [
     "Enzyme classification and nomenclature (IUBMB system)",
     "Mechanism of enzyme action; active site and specificity",
     "Michaelis-Menten kinetics; Km and Vmax",
     "Lineweaver-Burk plot and its significance",
     "Enzyme inhibition: competitive, non-competitive, uncompetitive",
     "Allosteric enzymes and cooperative kinetics",
     "Isoenzymes and their clinical significance",
     "Coenzymes and cofactors",
     "Regulation of enzyme activity: covalent modification, feedback inhibition",
     "Diagnostic enzymology: clinically important plasma enzymes"
    ]
   },
   {
    "num": 3,
    "title": "Carbohydrate Metabolism — Glycolysis, TCA Cycle, Gluconeogenesis",
    "topics": [
     "Glycolysis: steps, enzymes, and energetics",
     "Regulation of glycolysis; rate-limiting enzymes",
     "Fate of pyruvate: aerobic and anaerobic pathways",
     "TCA cycle: reactions, enzymes, and energy yield",
     "Regulation of the TCA cycle",
     "Gluconeogenesis: pathway and regulation",
     "Glycogenesis and glycogenolysis",
     "HMP shunt (pentose phosphate pathway) and its significance",
     "Galactose and fructose metabolism",
     "Disorders of carbohydrate metabolism: diabetes mellitus, glycogen storage diseases"
    ]
   },
   {
    "num": 4,
    "title": "Lipid Metabolism — Beta-Oxidation, Ketogenesis, Lipoprotein Metabolism",
    "topics": [
     "Digestion and absorption of dietary lipids",
     "Beta-oxidation of fatty acids",
     "Ketogenesis and ketone body utilisation",
     "Fatty acid synthesis (lipogenesis)",
     "Cholesterol synthesis and regulation (HMG-CoA reductase)",
     "Lipoprotein metabolism: chylomicrons, VLDL, LDL, HDL",
     "Bile acid synthesis and enterohepatic circulation",
     "Phospholipid and sphingolipid metabolism",
     "Eicosanoids: prostaglandins, thromboxanes, leukotrienes",
     "Disorders of lipid metabolism: dyslipidaemias, atherosclerosis"
    ]
   },
   {
    "num": 5,
    "title": "Protein Metabolism — Amino Acid Catabolism, Urea Cycle",
    "topics": [
     "Digestion and absorption of dietary proteins",
     "Transamination and deamination reactions",
     "Urea cycle: steps, enzymes, and regulation",
     "Metabolism of individual amino acids (glycine, phenylalanine, tyrosine)",
     "Inborn errors of amino acid metabolism (PKU, alkaptonuria, MSUD)",
     "One-carbon metabolism and the folate cycle",
     "Metabolism of sulfur-containing amino acids (methionine, cysteine)",
     "Creatine and creatinine metabolism",
     "Plasma proteins: synthesis and functions",
     "Protein-energy malnutrition: kwashiorkor and marasmus"
    ]
   },
   {
    "num": 6,
    "title": "Nucleotide Metabolism — Purine and Pyrimidine Synthesis",
    "topics": [
     "Purine synthesis: de novo and salvage pathways",
     "Pyrimidine synthesis",
     "Purine catabolism and uric acid formation",
     "Gout and hyperuricemia",
     "Lesch-Nyhan syndrome",
     "Pyrimidine catabolism",
     "Deoxyribonucleotide synthesis; ribonucleotide reductase",
     "Regulation of nucleotide biosynthesis",
     "Antimetabolites targeting nucleotide synthesis",
     "Nucleotide-related disorders"
    ]
   },
   {
    "num": 7,
    "title": "Vitamins and Minerals — Deficiency Diseases and Functions",
    "topics": [
     "Fat-soluble vitamins: A, D, E, K — functions and deficiency",
     "Water-soluble vitamins: the B-complex group — functions and deficiency",
     "Vitamin C: functions and scurvy",
     "Macrominerals: calcium, phosphorus, and magnesium",
     "Trace elements: iron, zinc, copper, iodine, and selenium",
     "Vitamin B12 and folate deficiency: megaloblastic anaemia",
     "Vitamin D and calcium homeostasis",
     "Antioxidant vitamins and free-radical damage",
     "Hypervitaminosis: vitamin toxicity",
     "Deficiency disorders: rickets, beriberi, pellagra, night blindness"
    ]
   },
   {
    "num": 8,
    "title": "Molecular Biology — DNA Replication, Transcription, Translation",
    "topics": [
     "DNA replication: enzymes and mechanism",
     "DNA damage and repair mechanisms",
     "Transcription: RNA polymerases and mechanism",
     "Post-transcriptional modification of RNA",
     "The genetic code and its properties",
     "Translation: initiation, elongation, and termination",
     "Post-translational modification of proteins",
     "Regulation of gene expression: the operon concept",
     "Basics of recombinant DNA technology",
     "PCR and molecular diagnostic techniques"
    ]
   },
   {
    "num": 9,
    "title": "Genetics — Mendelian Genetics, Mutations, Genetic Disorders",
    "topics": [
     "Mendelian inheritance patterns",
     "Chromosomal basis of inheritance",
     "Types of mutations and their consequences",
     "Autosomal dominant and recessive disorders",
     "X-linked inheritance disorders",
     "Chromosomal disorders: Down, Turner, and Klinefelter syndromes",
     "Multifactorial and polygenic inheritance",
     "Genetic counselling and prenatal diagnosis",
     "Cancer genetics and oncogenes",
     "Pharmacogenetics"
    ]
   },
   {
    "num": 10,
    "title": "Clinical Biochemistry — Liver Function, Kidney Function Tests",
    "topics": [
     "Liver function tests: interpretation and clinical significance",
     "Kidney function tests: urea, creatinine, and GFR",
     "Plasma proteins in disease states",
     "Cardiac markers: troponin and CK-MB",
     "Lipid profile interpretation",
     "Blood glucose tests: FBS, PPBS, and HbA1c",
     "Thyroid function tests",
     "Acid-base balance and blood gas analysis",
     "Electrolyte disturbances",
     "Tumour markers and their clinical use"
    ]
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
    "topics": [
     "Causes and mechanisms of cell injury: hypoxia, chemical, physical, immunologic",
     "Reversible vs irreversible cell injury; ultrastructural changes",
     "Cellular adaptations: atrophy, hypertrophy, hyperplasia, metaplasia",
     "Necrosis: types — coagulative, liquefactive, caseous, fat, fibrinoid, gangrenous",
     "Apoptosis: mechanism, morphology, and physiological/pathological roles",
     "Free radical injury and antioxidant mechanisms",
     "Intracellular accumulations: fatty change, hyaline change, pigments",
     "Pathologic calcification: dystrophic and metastatic",
     "Cellular ageing: mechanisms and morphological features",
     "Amyloidosis: classification, pathogenesis, and staining methods"
    ]
   },
   {
    "num": 2,
    "title": "Inflammation — Acute and Chronic; Healing and Repair",
    "topics": [
     "Acute inflammation: vascular and cellular events",
     "Chemical mediators of inflammation: histamine, prostaglandins, cytokines",
     "Cellular events: margination, rolling, adhesion, transmigration, chemotaxis",
     "Morphologic patterns of acute inflammation: serous, fibrinous, purulent",
     "Chronic inflammation: causes and cellular composition",
     "Granulomatous inflammation: types and examples (TB, sarcoidosis, leprosy)",
     "Systemic effects of inflammation: fever, acute phase response, leukocytosis",
     "Wound healing: healing by first and second intention",
     "Factors affecting wound healing; complications of healing",
     "Fibrosis and its regulation by growth factors"
    ]
   },
   {
    "num": 3,
    "title": "Haemodynamic Disorders — Oedema, Thrombosis, Embolism, Infarction",
    "topics": [
     "Oedema: pathogenesis and types (inflammatory, non-inflammatory)",
     "Hyperaemia and congestion: acute and chronic passive venous congestion",
     "Haemorrhage: types and clinical significance",
     "Haemostasis: platelet function and coagulation cascade overview",
     "Thrombosis: Virchow's triad and pathogenesis",
     "Fate of a thrombus; arterial vs venous thrombosis",
     "Embolism: types — thromboembolism, fat, air, amniotic fluid",
     "Infarction: types (red and white) and factors influencing development",
     "Shock: types — hypovolemic, cardiogenic, septic, anaphylactic",
     "Disseminated intravascular coagulation (DIC): causes and features"
    ]
   },
   {
    "num": 4,
    "title": "Neoplasia — Benign and Malignant Tumours; Carcinogenesis",
    "topics": [
     "Nomenclature and classification of tumours",
     "Characteristics differentiating benign from malignant neoplasms",
     "Local invasion and metastasis: routes and mechanisms",
     "Grading and staging of tumours (TNM system)",
     "Molecular basis of cancer: oncogenes and tumour suppressor genes",
     "Carcinogenic agents: chemical, physical, and biological (oncogenic viruses)",
     "Multistep carcinogenesis and the cell cycle",
     "Host defence against tumours: immune surveillance",
     "Laboratory diagnosis of cancer: cytology, biopsy, tumour markers",
     "Paraneoplastic syndromes"
    ]
   },
   {
    "num": 5,
    "title": "Immunopathology — Hypersensitivity, Autoimmunity, Immunodeficiency",
    "topics": [
     "Overview of innate and adaptive immunity",
     "Type I hypersensitivity: mechanism and clinical examples (anaphylaxis, atopy)",
     "Type II hypersensitivity: antibody-mediated cytotoxicity",
     "Type III hypersensitivity: immune complex-mediated disease",
     "Type IV hypersensitivity: delayed-type (cell-mediated) reactions",
     "Autoimmunity: mechanisms of self-tolerance breakdown",
     "Systemic lupus erythematosus: pathogenesis and features",
     "Primary immunodeficiency disorders",
     "Acquired immunodeficiency: HIV/AIDS pathogenesis",
     "Transplant rejection: types and mechanisms"
    ]
   },
   {
    "num": 6,
    "title": "Infectious Diseases — Bacterial, Viral, Fungal, and Parasitic Pathology",
    "topics": [
     "General principles of host-pathogen interaction",
     "Pathology of bacterial infections: pyogenic and granulomatous patterns",
     "Tuberculosis: pathogenesis and morphological patterns",
     "Viral pathology: cytopathic effects and examples",
     "Fungal infections: opportunistic vs primary pathogenic fungi",
     "Parasitic infections: protozoal and helminthic pathology",
     "Sexually transmitted infections: pathological features",
     "Nosocomial and opportunistic infections in immunocompromised hosts",
     "Sepsis and septic shock: pathophysiology",
     "Laboratory diagnosis of infectious disease"
    ]
   },
   {
    "num": 7,
    "title": "Systemic Pathology — Cardiovascular System",
    "topics": [
     "Atherosclerosis: risk factors and pathogenesis",
     "Ischaemic heart disease: angina, myocardial infarction",
     "Hypertensive heart disease",
     "Rheumatic fever and rheumatic heart disease",
     "Infective endocarditis",
     "Cardiomyopathies: dilated, hypertrophic, restrictive",
     "Congenital heart disease: common defects",
     "Pericardial disease: pericarditis and effusion",
     "Cardiac tumours: myxoma and others",
     "Vasculitis: classification and examples"
    ]
   },
   {
    "num": 8,
    "title": "Systemic Pathology — Respiratory System",
    "topics": [
     "Atelectasis: types and causes",
     "Chronic obstructive pulmonary disease: emphysema and chronic bronchitis",
     "Bronchial asthma: pathogenesis",
     "Pneumonia: lobar and bronchopneumonia patterns",
     "Pulmonary tuberculosis: primary and secondary pathology",
     "Restrictive lung diseases: pneumoconiosis and interstitial fibrosis",
     "Pulmonary embolism and infarction",
     "Bronchogenic carcinoma: types and staging",
     "Pleural diseases: effusion, empyema, mesothelioma",
     "Acute respiratory distress syndrome (ARDS)"
    ]
   },
   {
    "num": 9,
    "title": "Systemic Pathology — GIT, Liver, and Pancreas",
    "topics": [
     "Peptic ulcer disease: pathogenesis and complications",
     "Inflammatory bowel disease: ulcerative colitis and Crohn's disease",
     "Gastrointestinal tumours: adenoma-carcinoma sequence",
     "Viral hepatitis: types and pathological features",
     "Cirrhosis of the liver: causes and morphological patterns",
     "Hepatocellular carcinoma and other liver tumours",
     "Cholelithiasis and cholecystitis",
     "Acute and chronic pancreatitis",
     "Carcinoma of the pancreas",
     "Malabsorption syndromes"
    ]
   },
   {
    "num": 10,
    "title": "Systemic Pathology — Kidney, Haematopoietic System, and Endocrine",
    "topics": [
     "Glomerulonephritis: classification and mechanisms",
     "Nephrotic and nephritic syndromes",
     "Acute and chronic renal failure: causes and pathology",
     "Renal tumours: Wilms tumour and renal cell carcinoma",
     "Anaemia: classification and morphological approach",
     "Leukaemias: acute and chronic classification",
     "Lymphomas: Hodgkin and non-Hodgkin classification",
     "Bleeding disorders: platelet and coagulation defects",
     "Thyroid disorders: goitre, thyroiditis, and neoplasms",
     "Pituitary and adrenal gland pathology"
    ]
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
    "topics": [
     "Routes of drug administration and their pharmacokinetic implications",
     "Drug absorption: factors affecting bioavailability",
     "Drug distribution: plasma protein binding, volume of distribution",
     "Drug metabolism: phase I and phase II reactions",
     "Drug excretion: renal and biliary elimination",
     "Pharmacodynamics: mechanisms of drug action, receptor theory",
     "Dose-response relationships; agonists, antagonists, partial agonists",
     "Drug interactions: pharmacokinetic and pharmacodynamic",
     "Adverse drug reactions: types and mechanisms",
     "Factors modifying drug action: age, genetics, disease states"
    ]
   },
   {
    "num": 2,
    "title": "Autonomic Nervous System Drugs — Cholinergic and Adrenergic",
    "topics": [
     "Organisation of the autonomic nervous system: sympathetic and parasympathetic",
     "Cholinergic transmission and receptor subtypes (muscarinic, nicotinic)",
     "Cholinergic agonists and their clinical uses",
     "Anticholinesterase agents and their uses in myasthenia gravis",
     "Anticholinergic (antimuscarinic) drugs: atropine and derivatives",
     "Adrenergic transmission and receptor subtypes (alpha, beta)",
     "Sympathomimetic drugs: direct, indirect, and mixed acting agents",
     "Adrenergic antagonists: alpha-blockers and beta-blockers",
     "Ganglion blocking agents and neuromuscular blockers",
     "Drugs used in glaucoma and organophosphate poisoning management"
    ]
   },
   {
    "num": 3,
    "title": "Central Nervous System Drugs — Sedatives, Antipsychotics, Antidepressants",
    "topics": [
     "General anaesthetics: inhalational and intravenous agents",
     "Sedative-hypnotics: benzodiazepines and barbiturates",
     "Antiepileptic drugs: classification and mechanisms",
     "Antiparkinsonian drugs: levodopa and dopamine agonists",
     "Antipsychotic drugs: typical and atypical agents",
     "Antidepressants: SSRIs, TCAs, and MAO inhibitors",
     "Mood stabilisers: lithium and its monitoring",
     "Opioid analgesics: mechanism, uses, and dependence",
     "CNS stimulants and drugs of abuse",
     "Local anaesthetics: mechanism and clinical use"
    ]
   },
   {
    "num": 4,
    "title": "Cardiovascular Drugs — Antihypertensives, Antiarrhythmics, Diuretics",
    "topics": [
     "Antihypertensive drugs: classification and mechanisms",
     "ACE inhibitors and angiotensin receptor blockers",
     "Calcium channel blockers: classification and clinical use",
     "Diuretics: loop, thiazide, and potassium-sparing agents",
     "Antianginal drugs: nitrates, beta-blockers, calcium channel blockers",
     "Antiarrhythmic drugs: Vaughan Williams classification",
     "Drugs for heart failure: digoxin and inotropic agents",
     "Antihyperlipidaemic drugs: statins and fibrates",
     "Anticoagulants and antiplatelet drugs in cardiovascular disease",
     "Drugs used in shock and cardiogenic emergencies"
    ]
   },
   {
    "num": 5,
    "title": "Autacoids and Anti-inflammatory Drugs — NSAIDs, Corticosteroids",
    "topics": [
     "Histamine and antihistamines: H1 and H2 receptor blockers",
     "Serotonin and 5-HT receptor agonists/antagonists",
     "Prostaglandins and their therapeutic applications",
     "NSAIDs: mechanism of action and classification",
     "Selective COX-2 inhibitors and their adverse effects",
     "Disease-modifying antirheumatic drugs (DMARDs)",
     "Drugs for gout: colchicine, allopurinol, uricosurics",
     "Corticosteroids: mechanism, uses, and adverse effects",
     "Antihistamines used in allergic disorders",
     "Drugs for bronchial asthma: bronchodilators and anti-inflammatory agents"
    ]
   },
   {
    "num": 6,
    "title": "Antimicrobial Agents — Antibiotics, Antifungals, Antivirals",
    "topics": [
     "General principles of antimicrobial chemotherapy",
     "Beta-lactam antibiotics: penicillins and cephalosporins",
     "Aminoglycosides, macrolides, and tetracyclines",
     "Fluoroquinolones and sulfonamides",
     "Antitubercular drugs: first-line and second-line agents",
     "Antileprotic drugs",
     "Antifungal agents: classification and mechanisms",
     "Antiviral drugs: including antiretroviral therapy for HIV",
     "Antimalarial drugs: classification and drug resistance",
     "Antimicrobial resistance and rational antibiotic use"
    ]
   },
   {
    "num": 7,
    "title": "Chemotherapy — Anticancer Drugs",
    "topics": [
     "General principles of cancer chemotherapy",
     "Alkylating agents: mechanism and examples",
     "Antimetabolites: folate, purine, and pyrimidine analogues",
     "Anti-tumour antibiotics",
     "Plant-derived anticancer agents: vinca alkaloids, taxanes",
     "Hormonal agents in cancer therapy",
     "Targeted therapy and monoclonal antibodies",
     "Immunotherapy in cancer treatment",
     "Combination chemotherapy protocols",
     "Toxicities of anticancer drugs and their management"
    ]
   },
   {
    "num": 8,
    "title": "Endocrine Pharmacology — Insulin, Thyroid, Sex Hormones",
    "topics": [
     "Insulin: types, mechanism of action, and regimens",
     "Oral hypoglycaemic agents: classification and mechanisms",
     "Thyroid hormones and antithyroid drugs",
     "Corticosteroids in endocrine replacement therapy",
     "Oestrogens and progestins: clinical uses",
     "Androgens and anabolic steroids",
     "Oral contraceptives: types and mechanisms",
     "Drugs affecting calcium and bone metabolism",
     "Growth hormone and its analogues",
     "Drugs used in obesity and metabolic disorders"
    ]
   },
   {
    "num": 9,
    "title": "GIT Drugs — Antacids, Antiemetics, Laxatives",
    "topics": [
     "Antacids and their mechanism of acid neutralisation",
     "Proton pump inhibitors and H2 receptor antagonists",
     "Drugs for peptic ulcer disease and H. pylori eradication",
     "Antiemetic drugs: classification and mechanisms",
     "Prokinetic agents and drugs for GERD",
     "Laxatives: classification and mechanisms of action",
     "Antidiarrhoeal agents",
     "Drugs for inflammatory bowel disease",
     "Drugs affecting biliary function",
     "Digestive enzyme replacement and antispasmodics"
    ]
   },
   {
    "num": 10,
    "title": "Haematological Drugs — Anticoagulants, Thrombolytics, Iron Therapy",
    "topics": [
     "Iron preparations and treatment of iron deficiency anaemia",
     "Vitamin B12 and folic acid therapy in megaloblastic anaemia",
     "Heparin and low molecular weight heparins",
     "Oral anticoagulants: vitamin K antagonists and DOACs",
     "Antiplatelet drugs: aspirin, clopidogrel, and others",
     "Thrombolytic (fibrinolytic) agents",
     "Haematopoietic growth factors: erythropoietin, colony-stimulating factors",
     "Drugs used in bleeding disorders and haemophilia",
     "Blood products and plasma expanders",
     "Drug-induced blood dyscrasias"
    ]
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
    "topics": [
     "History and scope of medical microbiology",
     "Classification of microorganisms",
     "Bacterial structure: cell wall, membrane, capsule, flagella",
     "Sterilisation: physical methods — heat, filtration, radiation",
     "Sterilisation: chemical methods — gases and liquid sterilants",
     "Disinfectants and antiseptics: classification and uses",
     "Methods for testing efficacy of sterilisation and disinfection",
     "Hospital sterilisation practices and quality control",
     "Biosafety levels and laboratory safety practices",
     "Culture media: types and preparation principles"
    ]
   },
   {
    "num": 2,
    "title": "Immunology — Innate and Adaptive Immunity, Vaccines",
    "topics": [
     "Overview of innate immunity: barriers, phagocytes, complement",
     "Adaptive immunity: humoral and cell-mediated responses",
     "Antigens and antibodies: structure and classification of immunoglobulins",
     "Major histocompatibility complex (MHC) and antigen presentation",
     "T lymphocytes and B lymphocytes: development and function",
     "Complement system: classical, alternative, and lectin pathways",
     "Hypersensitivity reactions: overview and clinical relevance",
     "Immunological tolerance and autoimmunity basics",
     "Vaccines: types — live attenuated, killed, subunit, toxoid",
     "National immunisation schedule and vaccine-preventable diseases"
    ]
   },
   {
    "num": 3,
    "title": "General Bacteriology — Morphology, Staining, Culture",
    "topics": [
     "Bacterial morphology and classification",
     "Gram staining: principle and procedure",
     "Special staining techniques: acid-fast, capsule, spore staining",
     "Bacterial growth curve and factors affecting growth",
     "Culture media types: simple, enriched, selective, differential",
     "Methods of bacterial identification: biochemical reactions",
     "Bacterial genetics: transformation, transduction, conjugation",
     "Bacteriophages and their significance",
     "Normal microbial flora of the human body",
     "Antibiotic susceptibility testing methods"
    ]
   },
   {
    "num": 4,
    "title": "Systemic Bacteriology — Gram-positive and Gram-negative Organisms",
    "topics": [
     "Staphylococcus: pathogenesis and laboratory diagnosis",
     "Streptococcus: classification and clinical syndromes",
     "Corynebacterium diphtheriae and diphtheria",
     "Clostridium species: tetanus, gas gangrene, botulism",
     "Enterobacteriaceae: E. coli, Klebsiella, Proteus",
     "Salmonella and Shigella: enteric fever and dysentery",
     "Vibrio cholerae and cholera",
     "Pseudomonas and other non-fermenting gram-negative bacilli",
     "Neisseria: gonorrhoeae and meningitidis",
     "Haemophilus influenzae and Bordetella pertussis"
    ]
   },
   {
    "num": 5,
    "title": "Mycobacteriology — Tuberculosis and Leprosy",
    "topics": [
     "Mycobacterium tuberculosis: morphology and pathogenesis",
     "Laboratory diagnosis of tuberculosis: smear, culture, molecular methods",
     "Anti-tubercular drug susceptibility testing",
     "Directly observed treatment short-course (DOTS) strategy",
     "Atypical mycobacteria and their clinical significance",
     "Mycobacterium leprae: morphology and transmission",
     "Classification of leprosy: paucibacillary and multibacillary",
     "Laboratory diagnosis of leprosy",
     "Lepra reactions and their management",
     "National programmes for TB and leprosy control"
    ]
   },
   {
    "num": 6,
    "title": "Virology — DNA and RNA Viruses; HIV",
    "topics": [
     "General properties and classification of viruses",
     "Viral replication cycle",
     "Laboratory diagnosis of viral infections",
     "DNA viruses: Herpesviruses, Poxviruses, Adenoviruses",
     "RNA viruses: Orthomyxoviruses, Paramyxoviruses",
     "Hepatitis viruses: A, B, C, D, E",
     "Human immunodeficiency virus: structure and pathogenesis",
     "Laboratory diagnosis and monitoring of HIV infection",
     "Arboviruses: dengue, chikungunya, Japanese encephalitis",
     "Antiviral chemotherapy and vaccine development"
    ]
   },
   {
    "num": 7,
    "title": "Mycology — Pathogenic Fungi and Antifungal Sensitivity",
    "topics": [
     "General properties and classification of fungi",
     "Laboratory diagnosis of fungal infections",
     "Superficial mycoses: dermatophytoses and tinea",
     "Subcutaneous mycoses: mycetoma, sporotrichosis",
     "Systemic mycoses: histoplasmosis, cryptococcosis",
     "Opportunistic mycoses: candidiasis, aspergillosis, mucormycosis",
     "Pneumocystis jirovecii infection",
     "Antifungal drugs and susceptibility testing",
     "Mycotoxins and their health effects",
     "Fungal infections in immunocompromised patients"
    ]
   },
   {
    "num": 8,
    "title": "Parasitology — Protozoa, Helminths, Arthropods",
    "topics": [
     "Classification of medically important parasites",
     "Entamoeba histolytica: life cycle and pathogenesis",
     "Plasmodium species: life cycle and malaria pathogenesis",
     "Laboratory diagnosis of malaria",
     "Intestinal protozoa: Giardia, Cryptosporidium",
     "Cestodes: Taenia species and hydatid disease",
     "Nematodes: Ascaris, hookworm, Filaria",
     "Trematodes: Schistosoma and liver flukes",
     "Medical entomology: mosquitoes, flies, and disease vectors",
     "Laboratory diagnosis of parasitic infections"
    ]
   },
   {
    "num": 9,
    "title": "Clinical Microbiology — Specimen Collection and Interpretation",
    "topics": [
     "Principles of specimen collection, transport, and processing",
     "Blood culture: collection technique and interpretation",
     "Urine culture: collection and significant bacteriuria",
     "CSF examination in suspected meningitis",
     "Stool examination for enteric pathogens and parasites",
     "Sputum examination for respiratory pathogens",
     "Wound and pus specimen processing",
     "Interpretation of antimicrobial susceptibility reports",
     "Microbiological diagnosis of sepsis",
     "Point-of-care and rapid diagnostic tests in microbiology"
    ]
   },
   {
    "num": 10,
    "title": "Hospital Infection Control and Antimicrobial Resistance",
    "topics": [
     "Hospital-acquired (nosocomial) infections: sources and prevention",
     "Standard precautions and personal protective equipment",
     "Hand hygiene: WHO guidelines and practices",
     "Isolation precautions: contact, droplet, airborne",
     "Sterilisation and disinfection practices in hospital settings",
     "Surveillance of hospital-acquired infections",
     "Mechanisms of antimicrobial resistance",
     "Multidrug-resistant organisms: MRSA, VRE, carbapenem-resistant Enterobacteriaceae",
     "Antimicrobial stewardship programmes",
     "Biomedical waste management in healthcare settings"
    ]
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
    "topics": [
     "Definition and scope of forensic medicine and medical jurisprudence",
     "Courts in India and their relevance to medical practice",
     "Medical evidence: dying declaration and dying deposition",
     "Rights and duties of a registered medical practitioner",
     "Medical negligence: civil and criminal aspects",
     "Consent in medical practice: types and legal validity",
     "Professional secrecy and privileged communication",
     "Medical certification: birth, death, and disability certificates",
     "Consumer Protection Act and its relevance to medical practice",
     "Telemedicine and its medicolegal implications"
    ]
   },
   {
    "num": 2,
    "title": "Death and Post-mortem Changes — Time Since Death",
    "topics": [
     "Definitions: somatic death, cellular death, brain death",
     "Signs of death: immediate and presumptive",
     "Post-mortem cooling (algor mortis) and its estimation of time since death",
     "Post-mortem lividity (livor mortis): distribution and significance",
     "Rigor mortis: mechanism, onset, and factors affecting it",
     "Post-mortem decomposition and putrefaction",
     "Adipocere and mummification",
     "Estimation of time since death: combined methods",
     "Exhumation: procedure and medicolegal significance",
     "Preservation of body and viscera for medicolegal examination"
    ]
   },
   {
    "num": 3,
    "title": "Medicolegal Autopsy — Procedure and Documentation",
    "topics": [
     "Types of autopsy: medicolegal vs clinical",
     "Legal requirements and authorisation for medicolegal autopsy",
     "External examination: general principles and documentation",
     "Internal examination: systematic approach to organs",
     "Collection and preservation of viscera for chemical analysis",
     "Chain of custody of evidence",
     "Special autopsy situations: decomposed and skeletal remains",
     "Post-mortem report: structure and medicolegal importance",
     "Negative autopsy and its interpretation",
     "Role of the medical witness in court"
    ]
   },
   {
    "num": 4,
    "title": "Injuries — Mechanical, Thermal, Chemical, and Electrical",
    "topics": [
     "Classification of injuries: definitions under law",
     "Mechanical injuries: abrasions, contusions, lacerations",
     "Incised wounds, stab wounds, and their differentiation",
     "Firearm injuries: entry and exit wound characteristics",
     "Thermal injuries: burns and scalds — classification and estimation",
     "Chemical burns and their medicolegal significance",
     "Electrical injuries and lightning injuries",
     "Regional injuries: head injury and its medicolegal aspects",
     "Age of injury and wound healing",
     "Grievous hurt under criminal law"
    ]
   },
   {
    "num": 5,
    "title": "Sexual Offences — Examination and Evidence Collection",
    "topics": [
     "Medicolegal definitions of sexual offences under law",
     "Examination of the survivor of sexual assault",
     "Examination of the accused in sexual offence cases",
     "Collection and preservation of biological evidence",
     "Medical evidence of virginity and its limitations",
     "Pregnancy and its medicolegal significance in assault cases",
     "Unnatural sexual offences",
     "Protection of Children from Sexual Offences (POCSO) Act",
     "DNA fingerprinting in sexual offence investigation",
     "Ethical and legal considerations in survivor examination"
    ]
   },
   {
    "num": 6,
    "title": "Identification — Age, Sex, Stature, Fingerprints",
    "topics": [
     "Medicolegal importance of identification",
     "Estimation of age from teeth and ossification centres",
     "Determination of sex from skeletal remains",
     "Estimation of stature from long bones",
     "Fingerprint, palm print, and sole print identification",
     "Identification from soft tissue features: scars, tattoos, moles",
     "Superimposition technique and facial reconstruction",
     "Forensic odontology in identification",
     "DNA profiling in personal identification",
     "Identification in mass disasters"
    ]
   },
   {
    "num": 7,
    "title": "General Toxicology — Absorption, Distribution, Elimination of Poisons",
    "topics": [
     "Definition and classification of poisons",
     "Routes of poison absorption and factors modifying action",
     "Distribution and elimination of poisons in the body",
     "Medicolegal aspects of poisoning: accidental, suicidal, homicidal",
     "General principles of treatment of poisoning",
     "Antidotes: classification and mechanism of action",
     "Collection and preservation of samples in suspected poisoning",
     "Chemical analysis of viscera: principles",
     "Post-mortem artefacts and diagnosis of poisoning",
     "Common signs and autopsy findings in poisoning deaths"
    ]
   },
   {
    "num": 8,
    "title": "Corrosive and Irritant Poisons",
    "topics": [
     "Classification of corrosive poisons: acids and alkalies",
     "Sulfuric, nitric, and hydrochloric acid poisoning",
     "Alkali poisoning and its effects on the gastrointestinal tract",
     "Carbolic acid (phenol) poisoning",
     "Irritant poisons of inorganic origin: arsenic, mercury, lead",
     "Irritant poisons of organic origin: castor seeds, abrus precatorius",
     "Metallic poisons: copper and thallium",
     "Clinical features and management of corrosive poisoning",
     "Autopsy findings in corrosive poisoning deaths",
     "Medicolegal considerations in corrosive poison cases"
    ]
   },
   {
    "num": 9,
    "title": "Neurological Poisons — Narcotics, Sedatives, Organophosphates",
    "topics": [
     "Opium and its derivatives: pharmacology and toxicology",
     "Barbiturate and benzodiazepine poisoning",
     "Organophosphate compound poisoning: mechanism and management",
     "Cyanide poisoning: mechanism and antidotal treatment",
     "Alcohol poisoning: acute and chronic effects",
     "Cannabis and its medicolegal significance",
     "Datura and other plant-derived neurotoxic poisons",
     "Snake venom poisoning: types and clinical features",
     "Carbon monoxide poisoning",
     "Deliriant and hallucinogenic poisons"
    ]
   },
   {
    "num": 10,
    "title": "Medicolegal Aspects of Substance Abuse and Alcohol",
    "topics": [
     "Definitions: drug dependence, tolerance, and withdrawal",
     "Classification of drugs of abuse",
     "Alcohol: absorption, metabolism, and estimation of blood alcohol",
     "Medicolegal aspects of drunkenness and driving under influence",
     "Narcotic Drugs and Psychotropic Substances (NDPS) Act",
     "Chronic alcoholism and its medical complications",
     "Opioid dependence and de-addiction management",
     "Testing methods for drugs of abuse",
     "Occupational and forensic toxicology of substance abuse",
     "Rehabilitation and legal frameworks for substance abuse"
    ]
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
    "topics": [
     "Definitions and dimensions of health and well-being",
     "Concept of disease: natural history and iceberg phenomenon",
     "Levels of prevention: primordial, primary, secondary, tertiary",
     "Determinants of health: biological, environmental, socioeconomic",
     "Health indicators: mortality, morbidity, and disability indicators",
     "Concept of well-being and quality of life",
     "Social and behavioural sciences in health",
     "Health education: principles and methods",
     "Primary health care: principles and components",
     "Millennium Development Goals and Sustainable Development Goals in health"
    ]
   },
   {
    "num": 2,
    "title": "Epidemiology — Descriptive, Analytical, and Experimental",
    "topics": [
     "Definition, scope, and uses of epidemiology",
     "Measures of disease frequency: incidence and prevalence",
     "Descriptive epidemiology: person, place, time distribution",
     "Analytical epidemiology: cohort studies",
     "Analytical epidemiology: case-control studies",
     "Experimental epidemiology: randomised controlled trials",
     "Screening for disease: criteria and validity",
     "Investigation of an epidemic: steps and methodology",
     "Concepts of causation in epidemiology",
     "Epidemiology of communicable and non-communicable diseases"
    ]
   },
   {
    "num": 3,
    "title": "Biostatistics — Data Collection, Analysis, and Interpretation",
    "topics": [
     "Definition and scope of biostatistics in public health",
     "Types of data and methods of data collection",
     "Presentation of data: tables, graphs, and diagrams",
     "Measures of central tendency: mean, median, mode",
     "Measures of dispersion: range, standard deviation, variance",
     "Normal distribution and its properties",
     "Sampling techniques and sample size determination",
     "Tests of significance: chi-square, t-test",
     "Correlation and regression analysis",
     "Vital statistics: birth and death rates"
    ]
   },
   {
    "num": 4,
    "title": "Environment and Health — Water, Air, Food, Housing",
    "topics": [
     "Safe water supply: sources and standards of quality",
     "Water purification: methods at community and household level",
     "Waterborne diseases and their prevention",
     "Air pollution: sources, effects, and control measures",
     "Ventilation and indoor air quality standards",
     "Food hygiene and food safety standards",
     "Housing standards and their relation to health",
     "Solid waste management: collection and disposal methods",
     "Excreta disposal: sanitary methods in rural and urban areas",
     "Climate change and its impact on public health"
    ]
   },
   {
    "num": 5,
    "title": "Nutrition and Health — Assessment, Deficiency Diseases, Programmes",
    "topics": [
     "Nutritional requirements: macronutrients and micronutrients",
     "Assessment of nutritional status: anthropometry and clinical methods",
     "Protein-energy malnutrition: classification and management",
     "Micronutrient deficiency disorders: vitamin A, iron, iodine",
     "Balanced diet and dietary guidelines",
     "Nutrition during pregnancy, lactation, and childhood",
     "Nutritional surveillance and growth monitoring",
     "National nutrition programmes and supplementation schemes",
     "Food fortification strategies",
     "Obesity and nutrition-related non-communicable diseases"
    ]
   },
   {
    "num": 6,
    "title": "Communicable Disease Control — Immunisation, Surveillance",
    "topics": [
     "Chain of infection and modes of disease transmission",
     "Universal Immunisation Programme: schedule and cold chain",
     "Vaccine-preventable diseases: control strategies",
     "Surveillance systems for communicable diseases",
     "Vector-borne disease control: malaria, dengue, filariasis",
     "Water and foodborne disease control programmes",
     "Respiratory disease control: tuberculosis and ARI programmes",
     "Zoonotic disease control: rabies and other zoonoses",
     "Outbreak investigation and response",
     "International Health Regulations and disease notification"
    ]
   },
   {
    "num": 7,
    "title": "Non-communicable Diseases — Cardiovascular, Cancer, Diabetes",
    "topics": [
     "Epidemiological transition and burden of non-communicable diseases",
     "Risk factors for cardiovascular disease: modifiable and non-modifiable",
     "Prevention and control of hypertension and coronary heart disease",
     "Epidemiology and prevention of diabetes mellitus",
     "Epidemiology and screening for common cancers",
     "Prevention of chronic respiratory diseases",
     "Tobacco control programmes and legislation",
     "Mental health in the community: burden and interventions",
     "National Programme for Prevention and Control of NCDs",
     "Injury and accident prevention in public health"
    ]
   },
   {
    "num": 8,
    "title": "Maternal and Child Health — Reproductive and Child Health Programme",
    "topics": [
     "Maternal health indicators: maternal mortality ratio",
     "Antenatal care: components and schedule of visits",
     "Intranatal and postnatal care services",
     "Child health indicators: infant and under-five mortality rate",
     "Integrated Management of Neonatal and Childhood Illness (IMNCI)",
     "Family planning methods: temporary and permanent",
     "Reproductive and Child Health (RCH) programme components",
     "School health services and adolescent health",
     "Care of the newborn: essential newborn care practices",
     "Janani Suraksha Yojana and other maternal health schemes"
    ]
   },
   {
    "num": 9,
    "title": "Health Management and Administration — Health Systems in India",
    "topics": [
     "Health care delivery system in India: structure and levels",
     "Primary health centre and sub-centre: functions and staffing",
     "District health system and referral services",
     "National Health Mission: components and objectives",
     "Health planning: five-year plans and health policy",
     "Health information system and management information system",
     "Health financing and health insurance schemes",
     "Human resource management in health systems",
     "Quality assurance in health care delivery",
     "Role of non-governmental and international health organisations"
    ]
   },
   {
    "num": 10,
    "title": "Occupational Health and Disaster Management",
    "topics": [
     "Occupational hazards: physical, chemical, biological, ergonomic",
     "Occupational diseases: pneumoconiosis and other examples",
     "Prevention of occupational diseases: engineering and administrative controls",
     "Occupational health services and legislation",
     "Ergonomics and its application in the workplace",
     "Concept and classification of disasters: natural and man-made",
     "Disaster management cycle: prevention, preparedness, response, recovery",
     "Public health response in disaster situations",
     "Mass casualty management principles",
     "National Disaster Management Authority and policy framework"
    ]
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
    "topics": [
     "Orbit and its contents: bony walls and relations",
     "Eyelids: structure and function",
     "Conjunctiva: anatomy and normal flora",
     "Cornea: layers, nutrition, and transparency",
     "Sclera and episclera: structure and function",
     "Uveal tract: iris, ciliary body, and choroid",
     "Lens: structure, biochemistry, and accommodation",
     "Retina: layers and photoreceptor physiology",
     "Aqueous humour: formation and drainage",
     "Extraocular muscles and visual pathway overview"
    ]
   },
   {
    "num": 2,
    "title": "Diseases of the Conjunctiva — Conjunctivitis, Trachoma",
    "topics": [
     "Classification of conjunctivitis: infective and non-infective",
     "Bacterial conjunctivitis: clinical features and management",
     "Viral conjunctivitis: adenoviral and herpetic",
     "Allergic conjunctivitis: vernal and atopic keratoconjunctivitis",
     "Trachoma: aetiology, staging, and WHO grading",
     "Complications of trachoma and their management",
     "Ophthalmia neonatorum: causes and prevention",
     "Dry eye disease and its management",
     "Pterygium and pinguecula",
     "Conjunctival tumours: benign and malignant"
    ]
   },
   {
    "num": 3,
    "title": "Diseases of the Cornea and Sclera",
    "topics": [
     "Corneal ulcer: classification and aetiology",
     "Bacterial and fungal keratitis: clinical features",
     "Viral keratitis: herpes simplex and herpes zoster",
     "Corneal dystrophies and degenerations",
     "Keratoconus: features and management",
     "Corneal trauma and foreign bodies",
     "Corneal transplantation: types and indications",
     "Interstitial keratitis",
     "Episcleritis and scleritis",
     "Xerophthalmia and vitamin A deficiency effects on the cornea"
    ]
   },
   {
    "num": 4,
    "title": "Diseases of the Uveal Tract — Uveitis",
    "topics": [
     "Classification of uveitis: anatomical and aetiological",
     "Anterior uveitis: clinical features and complications",
     "Intermediate and posterior uveitis",
     "Panuveitis and its systemic associations",
     "Granulomatous vs non-granulomatous uveitis",
     "Sympathetic ophthalmia",
     "Investigations in uveitis workup",
     "Medical management of uveitis: corticosteroids and immunosuppressants",
     "Complications of uveitis: cataract, glaucoma",
     "Uveal tumours: melanoma and other lesions"
    ]
   },
   {
    "num": 5,
    "title": "Glaucoma — Types, Diagnosis, and Management",
    "topics": [
     "Aqueous humour dynamics and intraocular pressure regulation",
     "Primary open-angle glaucoma: pathogenesis and features",
     "Primary angle-closure glaucoma: mechanism and presentation",
     "Secondary glaucomas: causes and classification",
     "Congenital and developmental glaucoma",
     "Clinical examination: tonometry, gonioscopy, perimetry",
     "Optic disc changes in glaucoma",
     "Medical management: anti-glaucoma drugs",
     "Laser and surgical management of glaucoma",
     "Glaucoma screening and follow-up strategies"
    ]
   },
   {
    "num": 6,
    "title": "Diseases of the Lens — Cataract",
    "topics": [
     "Classification of cataract: congenital and acquired",
     "Senile cataract: stages and morphology",
     "Aetiology of cataract: metabolic, traumatic, drug-induced",
     "Clinical features and diagnosis of cataract",
     "Pre-operative assessment for cataract surgery",
     "Surgical techniques: extracapsular extraction, phacoemulsification",
     "Intraocular lens implantation and power calculation",
     "Complications of cataract surgery",
     "Posterior capsular opacification",
     "Congenital cataract and its management considerations"
    ]
   },
   {
    "num": 7,
    "title": "Diseases of the Retina — Diabetic Retinopathy, Detachment",
    "topics": [
     "Diabetic retinopathy: classification and staging",
     "Management of diabetic retinopathy: laser and anti-VEGF therapy",
     "Hypertensive retinopathy",
     "Retinal detachment: types and mechanisms",
     "Clinical features and management of retinal detachment",
     "Retinitis pigmentosa",
     "Age-related macular degeneration",
     "Retinal vascular occlusions: artery and vein occlusion",
     "Retinopathy of prematurity",
     "Retinoblastoma: features and management"
    ]
   },
   {
    "num": 8,
    "title": "Disorders of Ocular Motility — Squint and Amblyopia",
    "topics": [
     "Extraocular muscles and their actions",
     "Classification of squint: concomitant and incomitant",
     "Comitant squint: aetiology and clinical evaluation",
     "Paralytic squint: causes and clinical features",
     "Amblyopia: classification and mechanisms",
     "Management of amblyopia: occlusion therapy",
     "Diplopia: evaluation and causes",
     "Nystagmus: types and clinical significance",
     "Orthoptic evaluation and cover tests",
     "Surgical management of squint"
    ]
   },
   {
    "num": 9,
    "title": "Refractive Errors and Low Vision",
    "topics": [
     "Optics of the eye and emmetropia",
     "Myopia: types, features, and correction",
     "Hypermetropia: types, features, and correction",
     "Astigmatism: types and correction",
     "Presbyopia and its management",
     "Contact lenses: types, fitting, and complications",
     "Refractive surgery: LASIK and other procedures",
     "Low vision: definition and causes",
     "Low vision aids and rehabilitation",
     "Community screening for refractive errors"
    ]
   },
   {
    "num": 10,
    "title": "Ophthalmic Emergencies and Surgical Procedures",
    "topics": [
     "Chemical injuries to the eye: acid and alkali burns",
     "Ocular trauma: blunt and penetrating injuries",
     "Foreign body in the eye: removal techniques",
     "Acute angle-closure glaucoma as an emergency",
     "Central retinal artery occlusion: emergency management",
     "Endophthalmitis: features and management",
     "Orbital cellulitis: features and management",
     "Sudden visual loss: differential diagnosis and approach",
     "Basic ophthalmic surgical instruments and procedures",
     "Principles of eye banking and corneal donation"
    ]
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
    "topics": [
     "External ear: anatomy and clinical relevance",
     "Middle ear: cavity, ossicles, and Eustachian tube",
     "Inner ear: cochlea and vestibular apparatus",
     "Nose: external framework and nasal cavity anatomy",
     "Paranasal sinuses: anatomy and drainage pathways",
     "Pharynx: nasopharynx, oropharynx, and hypopharynx",
     "Larynx: cartilaginous framework and muscles",
     "Physiology of hearing and the auditory pathway",
     "Physiology of the vestibular system and balance",
     "Physiology of smell, taste, and voice production"
    ]
   },
   {
    "num": 2,
    "title": "Diseases of the External and Middle Ear",
    "topics": [
     "Congenital anomalies of the external ear",
     "Otitis externa: types and management",
     "Impacted wax and foreign bodies in the ear canal",
     "Acute otitis media: aetiology and management",
     "Chronic suppurative otitis media: types and complications",
     "Otitis media with effusion (glue ear)",
     "Complications of otitis media: intratemporal and intracranial",
     "Tympanic membrane perforation and myringoplasty",
     "Mastoiditis and mastoid surgery",
     "Facial nerve palsy in ear disease"
    ]
   },
   {
    "num": 3,
    "title": "Sensorineural Hearing Loss and Tinnitus",
    "topics": [
     "Classification of hearing loss: conductive, sensorineural, mixed",
     "Pure tone audiometry and tympanometry",
     "Causes of congenital sensorineural hearing loss",
     "Presbycusis and noise-induced hearing loss",
     "Sudden sensorineural hearing loss: evaluation and management",
     "Ototoxicity: drugs causing hearing loss",
     "Tinnitus: classification and evaluation",
     "Management strategies for tinnitus",
     "Meniere's disease: features and management",
     "Cochlear implants and hearing aids"
    ]
   },
   {
    "num": 4,
    "title": "Otosclerosis and Otological Surgeries",
    "topics": [
     "Otosclerosis: pathophysiology and clinical features",
     "Audiometric findings in otosclerosis",
     "Stapedectomy and stapedotomy: indications and technique",
     "Complications of ear surgery",
     "Tympanoplasty: types and indications",
     "Mastoidectomy: types and indications",
     "Cochlear implant surgery: candidacy and procedure",
     "Middle ear reconstruction techniques",
     "Vestibular schwannoma and its management",
     "Post-operative care in ear surgery"
    ]
   },
   {
    "num": 5,
    "title": "Diseases of the Nose and Paranasal Sinuses",
    "topics": [
     "Deviated nasal septum: features and correction",
     "Allergic rhinitis: pathogenesis and management",
     "Nasal polyps: aetiology and management",
     "Acute and chronic sinusitis",
     "Fungal sinusitis: types and management",
     "Adenoid hypertrophy and its effects",
     "Nasal trauma and fractures",
     "Rhinoscleroma and atrophic rhinitis",
     "Tumours of the nose and paranasal sinuses",
     "Functional endoscopic sinus surgery (FESS)"
    ]
   },
   {
    "num": 6,
    "title": "Epistaxis — Causes and Management",
    "topics": [
     "Blood supply of the nose and Little's area",
     "Local causes of epistaxis",
     "Systemic causes of epistaxis",
     "First aid management of epistaxis",
     "Anterior nasal packing techniques",
     "Posterior nasal packing and balloon catheters",
     "Endoscopic cauterisation and vessel ligation",
     "Epistaxis in specific populations: children and elderly",
     "Hereditary haemorrhagic telangiectasia",
     "Prevention of recurrent epistaxis"
    ]
   },
   {
    "num": 7,
    "title": "Diseases of the Pharynx and Tonsils",
    "topics": [
     "Acute pharyngitis and tonsillitis",
     "Chronic tonsillitis: indications for tonsillectomy",
     "Peritonsillar abscess (quinsy): features and management",
     "Adenotonsillar hypertrophy and obstructive sleep apnoea",
     "Retropharyngeal and parapharyngeal abscess",
     "Nasopharyngeal carcinoma",
     "Oropharyngeal and hypopharyngeal tumours",
     "Globus pharyngeus and dysphagia evaluation",
     "Diphtheria of the pharynx",
     "Tonsillectomy and adenoidectomy: technique and complications"
    ]
   },
   {
    "num": 8,
    "title": "Diseases of the Larynx — Hoarseness, Croup, Cancer",
    "topics": [
     "Acute laryngitis: causes and management",
     "Vocal cord nodules, polyps, and Reinke's oedema",
     "Vocal cord palsy: causes and management",
     "Laryngeal papillomatosis",
     "Croup and acute epiglottitis in children",
     "Laryngeal trauma",
     "Laryngomalacia and congenital laryngeal anomalies",
     "Carcinoma of the larynx: staging and management",
     "Laryngectomy: types and voice rehabilitation",
     "Videolaryngostroboscopy and voice assessment"
    ]
   },
   {
    "num": 9,
    "title": "Tracheostomy — Indications and Technique",
    "topics": [
     "Indications for tracheostomy",
     "Surgical technique of tracheostomy",
     "Percutaneous tracheostomy: technique and indications",
     "Types of tracheostomy tubes",
     "Immediate complications of tracheostomy",
     "Late complications of tracheostomy",
     "Post-operative care of a tracheostomy patient",
     "Decannulation: criteria and technique",
     "Emergency airway management: cricothyroidotomy",
     "Difference between tracheostomy and intubation"
    ]
   },
   {
    "num": 10,
    "title": "Head and Neck Tumours and ENT Emergencies",
    "topics": [
     "Classification of head and neck tumours",
     "Neck swellings: differential diagnosis and evaluation",
     "Salivary gland tumours: parotid and submandibular",
     "Thyroid swellings in ENT practice",
     "Airway obstruction: causes and emergency management",
     "Foreign bodies in the airway and oesophagus",
     "Ludwig's angina and deep neck space infections",
     "Angioedema and anaphylaxis affecting the airway",
     "Facial and neck trauma in ENT emergencies",
     "Principles of neck dissection in head and neck cancer"
    ]
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
    "topics": [
     "Ischaemic heart disease: angina and myocardial infarction",
     "ECG interpretation in acute coronary syndromes",
     "Heart failure: classification and pathophysiology",
     "Management of acute and chronic heart failure",
     "Hypertension: classification and evaluation",
     "Management of hypertension and hypertensive emergencies",
     "Valvular heart disease: clinical features and management",
     "Infective endocarditis: diagnosis and treatment",
     "Cardiac arrhythmias: recognition and management",
     "Cardiomyopathies and pericardial disease"
    ]
   },
   {
    "num": 2,
    "title": "Respiratory Diseases — Pneumonia, COPD, Asthma, TB",
    "topics": [
     "Community-acquired and hospital-acquired pneumonia",
     "Chronic obstructive pulmonary disease: diagnosis and staging",
     "Management of stable and exacerbated COPD",
     "Bronchial asthma: diagnosis and step-wise management",
     "Pulmonary tuberculosis: diagnosis and treatment regimens",
     "Drug-resistant tuberculosis",
     "Interstitial lung disease",
     "Pleural effusion: causes and evaluation",
     "Pulmonary embolism: diagnosis and management",
     "Respiratory failure: types and management"
    ]
   },
   {
    "num": 3,
    "title": "Gastrointestinal Diseases — Peptic Ulcer, IBD, Liver Diseases",
    "topics": [
     "Peptic ulcer disease and H. pylori-related disease",
     "Gastroesophageal reflux disease",
     "Inflammatory bowel disease: ulcerative colitis and Crohn's disease",
     "Irritable bowel syndrome",
     "Viral hepatitis: clinical features and management",
     "Cirrhosis of the liver and its complications",
     "Portal hypertension and variceal bleeding",
     "Acute and chronic pancreatitis",
     "Malabsorption syndromes",
     "Gastrointestinal bleeding: upper and lower GI approach"
    ]
   },
   {
    "num": 4,
    "title": "Renal Diseases — Nephritis, Nephrotic Syndrome, CKD",
    "topics": [
     "Acute glomerulonephritis: clinical features and management",
     "Nephrotic syndrome: causes and management",
     "Acute kidney injury: causes and staging",
     "Chronic kidney disease: staging and management",
     "Renal replacement therapy: dialysis modalities",
     "Urinary tract infections and pyelonephritis",
     "Renal calculi: evaluation and management",
     "Electrolyte and acid-base disorders in renal disease",
     "Hypertension in renal disease",
     "Renal transplantation: overview and complications"
    ]
   },
   {
    "num": 5,
    "title": "Endocrine Disorders — Diabetes Mellitus, Thyroid, Adrenal",
    "topics": [
     "Diabetes mellitus: classification and diagnostic criteria",
     "Management of type 1 and type 2 diabetes mellitus",
     "Acute complications of diabetes: DKA and HHS",
     "Chronic complications of diabetes mellitus",
     "Thyrotoxicosis: causes and management",
     "Hypothyroidism: causes and management",
     "Adrenal insufficiency and Addison's disease",
     "Cushing's syndrome: diagnosis and management",
     "Pituitary disorders: acromegaly and hypopituitarism",
     "Disorders of calcium and parathyroid function"
    ]
   },
   {
    "num": 6,
    "title": "Neurological Disorders — Stroke, Epilepsy, Meningitis",
    "topics": [
     "Stroke: classification and acute management",
     "Transient ischaemic attack and stroke prevention",
     "Epilepsy: classification and antiepileptic drug therapy",
     "Status epilepticus: management",
     "Meningitis: bacterial, viral, and tuberculous",
     "Encephalitis: causes and management",
     "Parkinson's disease and movement disorders",
     "Peripheral neuropathy: causes and evaluation",
     "Headache disorders: migraine and tension headache",
     "Myasthenia gravis and Guillain-Barré syndrome"
    ]
   },
   {
    "num": 7,
    "title": "Infectious Diseases — Malaria, Typhoid, Dengue, HIV/AIDS",
    "topics": [
     "Malaria: clinical features and antimalarial treatment",
     "Enteric fever (typhoid): diagnosis and management",
     "Dengue fever: clinical spectrum and management",
     "Chikungunya and other arboviral infections",
     "HIV/AIDS: staging and antiretroviral therapy",
     "Opportunistic infections in HIV",
     "Sepsis and septic shock: recognition and management",
     "Leptospirosis and rickettsial infections",
     "Infective diarrhoeal diseases",
     "Healthcare-associated infections and antimicrobial stewardship"
    ]
   },
   {
    "num": 8,
    "title": "Haematological Disorders — Anaemia, Leukaemia, Coagulopathy",
    "topics": [
     "Approach to anaemia: classification and evaluation",
     "Iron deficiency and megaloblastic anaemia",
     "Haemolytic anaemias",
     "Acute and chronic leukaemias: features and diagnosis",
     "Lymphomas: Hodgkin and non-Hodgkin",
     "Multiple myeloma",
     "Bleeding disorders: platelet and coagulation defects",
     "Disseminated intravascular coagulation",
     "Blood transfusion: indications and complications",
     "Myeloproliferative and myelodysplastic syndromes"
    ]
   },
   {
    "num": 9,
    "title": "Rheumatological Disorders — Rheumatoid Arthritis, SLE",
    "topics": [
     "Rheumatoid arthritis: diagnosis and management",
     "Systemic lupus erythematosus: clinical features and management",
     "Seronegative spondyloarthropathies",
     "Gout and other crystal arthropathies",
     "Osteoarthritis: features and management",
     "Systemic sclerosis and scleroderma",
     "Vasculitis syndromes",
     "Sjögren's syndrome",
     "Polymyalgia rheumatica and giant cell arteritis",
     "Approach to joint pain and connective tissue disease"
    ]
   },
   {
    "num": 10,
    "title": "Clinical Skills — History Taking, Examination, ECG, Radiology",
    "topics": [
     "Principles of history taking in internal medicine",
     "General physical examination: systematic approach",
     "Cardiovascular system examination",
     "Respiratory system examination",
     "Abdominal examination",
     "Central nervous system examination",
     "Basic ECG interpretation",
     "Chest X-ray interpretation: systematic approach",
     "Interpretation of common laboratory investigations",
     "Clinical case presentation and documentation"
    ]
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
    "topics": [
     "Classification of wounds and types of wound closure",
     "Phases of wound healing: inflammation, proliferation, remodelling",
     "Factors affecting wound healing",
     "Healing by first, second, and third intention",
     "Surgical site infections: classification and prevention",
     "Principles of asepsis and antisepsis in surgery",
     "Cellulitis, abscess, and necrotising fasciitis",
     "Gas gangrene and tetanus in surgical practice",
     "Sutures and suture materials",
     "Wound dressings and drains in surgery"
    ]
   },
   {
    "num": 2,
    "title": "Fluid, Electrolyte, and Acid-Base Balance in Surgery",
    "topics": [
     "Body fluid compartments and their composition",
     "Assessment of fluid and electrolyte status in surgical patients",
     "Perioperative fluid therapy: crystalloids and colloids",
     "Sodium and potassium imbalances in surgical patients",
     "Metabolic acidosis and alkalosis: causes and correction",
     "Respiratory acid-base disturbances in surgery",
     "Nutritional assessment and support in surgical patients",
     "Parenteral and enteral nutrition",
     "Fluid management in burns and trauma",
     "Post-operative fluid and electrolyte complications"
    ]
   },
   {
    "num": 3,
    "title": "Shock — Types, Pathophysiology, and Management",
    "topics": [
     "Classification of shock: hypovolemic, cardiogenic, septic, neurogenic",
     "Pathophysiology of hypovolemic shock",
     "Pathophysiology of septic shock",
     "Clinical staging and recognition of shock",
     "Monitoring the patient in shock",
     "Fluid resuscitation strategies in shock",
     "Vasopressor and inotropic support in shock",
     "Multi-organ dysfunction syndrome",
     "Anaphylactic shock: recognition and management",
     "Shock in trauma patients"
    ]
   },
   {
    "num": 4,
    "title": "Trauma — Polytrauma, Burns, and Fracture Management",
    "topics": [
     "Primary and secondary survey in trauma (ATLS approach)",
     "Management of polytrauma patients",
     "Head injury: assessment and initial management",
     "Chest trauma: pneumothorax and haemothorax",
     "Abdominal trauma: blunt and penetrating injuries",
     "Classification and assessment of burns",
     "Fluid resuscitation in burns: Parkland formula",
     "Burn wound management and skin grafting",
     "Principles of fracture management",
     "Compartment syndrome and its management"
    ]
   },
   {
    "num": 5,
    "title": "Principles of Anaesthesia and Pre-operative Assessment",
    "topics": [
     "Pre-operative assessment and optimisation of the surgical patient",
     "ASA physical status classification",
     "Informed consent and pre-operative counselling",
     "General anaesthesia: stages and agents",
     "Regional and local anaesthesia techniques",
     "Airway management in anaesthesia",
     "Monitoring during anaesthesia",
     "Post-operative pain management",
     "Common anaesthetic complications",
     "Day-care surgery and its selection criteria"
    ]
   },
   {
    "num": 6,
    "title": "Diseases of the Breast",
    "topics": [
     "Clinical examination of the breast",
     "Benign breast diseases: fibroadenoma, fibrocystic disease",
     "Breast abscess and mastitis",
     "Gynaecomastia",
     "Breast cancer: risk factors and screening",
     "Clinical staging of breast cancer (TNM)",
     "Diagnostic workup of a breast lump: triple assessment",
     "Surgical management of breast cancer",
     "Adjuvant therapy in breast cancer",
     "Breast reconstruction and rehabilitation"
    ]
   },
   {
    "num": 7,
    "title": "Diseases of the Thyroid and Parathyroid",
    "topics": [
     "Clinical evaluation of a thyroid swelling",
     "Simple and multinodular goitre",
     "Thyrotoxicosis: surgical indications and management",
     "Thyroiditis: types and management",
     "Thyroid neoplasms: benign and malignant",
     "Surgical management of thyroid carcinoma",
     "Complications of thyroid surgery",
     "Primary and secondary hyperparathyroidism",
     "Surgical management of parathyroid disease",
     "Post-thyroidectomy hypocalcaemia and its management"
    ]
   },
   {
    "num": 8,
    "title": "Abdominal Surgery — Appendix, Intestine, Hernia, Peritonitis",
    "topics": [
     "Acute appendicitis: diagnosis and management",
     "Intestinal obstruction: causes and management",
     "Peritonitis: classification and management",
     "Peptic ulcer perforation",
     "Inguinal and femoral hernia: anatomy and repair",
     "Umbilical and incisional hernia",
     "Intestinal tuberculosis and its surgical implications",
     "Colorectal carcinoma: staging and management",
     "Inflammatory bowel disease: surgical indications",
     "Acute abdomen: differential diagnosis and approach"
    ]
   },
   {
    "num": 9,
    "title": "Hepatobiliary and Pancreatic Surgery",
    "topics": [
     "Cholelithiasis and its complications",
     "Acute and chronic cholecystitis",
     "Choledocholithiasis and cholangitis",
     "Carcinoma of the gallbladder",
     "Liver abscess: amoebic and pyogenic",
     "Hepatocellular carcinoma: surgical management",
     "Portal hypertension: surgical considerations",
     "Acute and chronic pancreatitis: surgical management",
     "Carcinoma of the pancreas",
     "Pancreatic pseudocyst and its management"
    ]
   },
   {
    "num": 10,
    "title": "Surgical Oncology and Transplant Surgery Principles",
    "topics": [
     "General principles of surgical oncology",
     "Staging systems in cancer surgery",
     "Principles of tumour resection margins",
     "Sentinel lymph node biopsy",
     "Palliative surgery in advanced malignancy",
     "Principles of organ transplantation",
     "Immunosuppression in transplant surgery",
     "Renal transplantation: overview",
     "Liver transplantation: overview",
     "Organ donation and ethical considerations in transplantation"
    ]
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
    "topics": [
     "Anatomy of the vulva, vagina, and perineum",
     "Anatomy of the uterus, fallopian tubes, and ovaries",
     "Pelvic bones and pelvic floor anatomy",
     "Blood supply and lymphatic drainage of pelvic organs",
     "Menstrual cycle: hormonal regulation",
     "Ovarian cycle and folliculogenesis",
     "Physiology of fertilisation and implantation",
     "Puberty: physiology and Tanner staging",
     "Menopause: physiology and hormonal changes",
     "Pelvic examination technique"
    ]
   },
   {
    "num": 2,
    "title": "Normal Pregnancy — Diagnosis, Antenatal Care, Fetal Development",
    "topics": [
     "Diagnosis of pregnancy: clinical and biochemical",
     "Physiological changes in pregnancy",
     "Antenatal care: schedule and components",
     "Antenatal screening tests and their timing",
     "Fetal development: embryology overview by trimester",
     "Placenta: structure and function",
     "Amniotic fluid: formation and assessment",
     "Nutrition and supplementation during pregnancy",
     "Ultrasound in pregnancy: uses and timing",
     "High-risk pregnancy: identification and management"
    ]
   },
   {
    "num": 3,
    "title": "Normal Labour — Stages, Mechanisms, and Conduct of Delivery",
    "topics": [
     "Physiology of onset of labour",
     "Stages of labour and their management",
     "Mechanism of normal labour in vertex presentation",
     "Partograph: use and interpretation",
     "Pain relief in labour",
     "Conduct of normal vaginal delivery",
     "Fetal monitoring during labour",
     "Episiotomy: indications and technique",
     "Management of the third stage of labour",
     "Immediate care of the newborn at birth"
    ]
   },
   {
    "num": 4,
    "title": "Abnormal Labour — Dystocia, Obstructed Labour",
    "topics": [
     "Dystocia: causes and classification",
     "Abnormalities of uterine action",
     "Malpresentations: breech and other presentations",
     "Malpositions: occipito-posterior position",
     "Cephalopelvic disproportion",
     "Obstructed labour: recognition and management",
     "Prolonged labour: causes and management",
     "Precipitate labour",
     "Preterm labour: recognition and management",
     "Induction and augmentation of labour"
    ]
   },
   {
    "num": 5,
    "title": "Obstetric Complications — APH, PPH, Pre-eclampsia, Eclampsia",
    "topics": [
     "Antepartum haemorrhage: placenta praevia",
     "Antepartum haemorrhage: abruptio placentae",
     "Postpartum haemorrhage: causes and management",
     "Hypertensive disorders of pregnancy: classification",
     "Pre-eclampsia: pathophysiology and management",
     "Eclampsia: recognition and emergency management",
     "Gestational diabetes mellitus",
     "Rh isoimmunisation and its management",
     "Multiple pregnancy: complications and management",
     "Intrauterine growth restriction"
    ]
   },
   {
    "num": 6,
    "title": "Operative Obstetrics — Forceps, Vacuum, Caesarean Section",
    "topics": [
     "Indications for instrumental delivery",
     "Forceps delivery: types and technique",
     "Vacuum extraction: technique and complications",
     "Indications for caesarean section",
     "Types of caesarean section and technique overview",
     "Complications of caesarean section",
     "Vaginal birth after caesarean (VBAC)",
     "Destructive operations: indications (historical context)",
     "Anaesthesia considerations in operative delivery",
     "Post-operative care following operative delivery"
    ]
   },
   {
    "num": 7,
    "title": "Puerperium — Normal and Abnormal",
    "topics": [
     "Physiological changes during the puerperium",
     "Normal involution of the uterus",
     "Lactation: physiology and initiation of breastfeeding",
     "Puerperal pyrexia: causes and management",
     "Puerperal sepsis: recognition and management",
     "Secondary postpartum haemorrhage",
     "Deep vein thrombosis and pulmonary embolism in puerperium",
     "Postpartum psychiatric disorders",
     "Contraceptive counselling in the postpartum period",
     "Postnatal care and follow-up"
    ]
   },
   {
    "num": 8,
    "title": "Gynaecological Disorders — Menstrual Disorders, Fibroids, PCOS",
    "topics": [
     "Abnormal uterine bleeding: causes and evaluation",
     "Amenorrhoea: primary and secondary causes",
     "Dysmenorrhoea: types and management",
     "Polycystic ovary syndrome: features and management",
     "Uterine fibroids: clinical features and management",
     "Endometriosis and adenomyosis",
     "Pelvic organ prolapse",
     "Urinary incontinence in women",
     "Infertility: evaluation of the couple",
     "Assisted reproductive techniques: overview"
    ]
   },
   {
    "num": 9,
    "title": "Infections of the Female Genital Tract",
    "topics": [
     "Vulvovaginitis: causes and management",
     "Bacterial vaginosis and candidiasis",
     "Trichomoniasis",
     "Pelvic inflammatory disease: features and management",
     "Sexually transmitted infections in gynaecology",
     "Tuberculosis of the genital tract",
     "Human papillomavirus infection and its consequences",
     "TORCH infections in pregnancy",
     "HIV in pregnancy: management considerations",
     "Prevention of mother-to-child transmission of infections"
    ]
   },
   {
    "num": 10,
    "title": "Gynaecological Oncology and Family Planning",
    "topics": [
     "Cervical cancer: screening and staging",
     "Cervical cancer: management overview",
     "Endometrial carcinoma: risk factors and management",
     "Ovarian tumours: classification and evaluation",
     "Ovarian cancer: staging and management overview",
     "Gestational trophoblastic disease",
     "Family planning methods: barrier and hormonal",
     "Intrauterine contraceptive devices",
     "Permanent sterilisation methods",
     "Emergency contraception"
    ]
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
     "Normal growth parameters: weight, height, head circumference",
     "Growth charts and their interpretation",
     "Developmental milestones: gross motor, fine motor, language, social",
     "Denver developmental screening test",
     "Factors affecting growth and development",
     "Failure to thrive: causes and evaluation",
     "Assessment of nutritional status in children",
     "Puberty: normal timing and Tanner staging",
     "Developmental delay: recognition and approach",
     "Anthropometric assessment techniques"
    ]
   },
   {
    "num": 2,
    "title": "Neonatology — Care of Newborn, LBW, Prematurity, Birth Asphyxia",
    "topics": [
     "Normal newborn examination and assessment",
     "APGAR score and its significance",
     "Neonatal resuscitation: basic steps",
     "Low birth weight and prematurity: classification and complications",
     "Birth asphyxia: recognition and management",
     "Neonatal jaundice: causes and management",
     "Respiratory distress syndrome in neonates",
     "Neonatal sepsis: recognition and management",
     "Kangaroo mother care",
     "Common congenital anomalies in newborns"
    ]
   },
   {
    "num": 3,
    "title": "Infant Feeding and Nutritional Disorders",
    "topics": [
     "Breastfeeding: physiology and techniques",
     "Advantages of breastfeeding and contraindications",
     "Complementary feeding: timing and principles",
     "Protein-energy malnutrition in children: kwashiorkor and marasmus",
     "Vitamin A deficiency in children",
     "Iron deficiency anaemia in children",
     "Rickets in children",
     "Growth monitoring and nutritional counselling",
     "Infant formula feeding: indications and preparation",
     "Obesity in children"
    ]
   },
   {
    "num": 4,
    "title": "Immunisation Schedule and Vaccine-preventable Diseases",
    "topics": [
     "National immunisation schedule for children",
     "Cold chain maintenance for vaccines",
     "BCG vaccine: administration and complications",
     "DPT and pentavalent vaccine",
     "Oral and injectable polio vaccine",
     "Measles, mumps, rubella vaccine",
     "Hepatitis B vaccination in children",
     "Adverse events following immunisation",
     "Contraindications to vaccination",
     "Vaccine-preventable diseases: clinical overview"
    ]
   },
   {
    "num": 5,
    "title": "Respiratory Disorders in Children — Pneumonia, Bronchiolitis, Asthma",
    "topics": [
     "Acute respiratory infections in children: classification",
     "Pneumonia in children: diagnosis and management",
     "Bronchiolitis: clinical features and management",
     "Childhood asthma: diagnosis and step-wise management",
     "Croup: recognition and management",
     "Foreign body aspiration in children",
     "Tuberculosis in children",
     "Whooping cough (pertussis)",
     "Respiratory distress in children: assessment",
     "Oxygen therapy in paediatric respiratory illness"
    ]
   },
   {
    "num": 6,
    "title": "Gastrointestinal Disorders — Diarrhoea, Dehydration, Malabsorption",
    "topics": [
     "Acute diarrhoea in children: causes and management",
     "Assessment and classification of dehydration",
     "Oral rehydration therapy: principles and use",
     "Persistent and chronic diarrhoea in children",
     "Malabsorption syndromes in children",
     "Coeliac disease in children",
     "Constipation in children",
     "Vomiting in infants and children: approach",
     "Worm infestations in children",
     "Acute abdomen in paediatric patients"
    ]
   },
   {
    "num": 7,
    "title": "Paediatric Infections — Measles, Chickenpox, Meningitis, Typhoid",
    "topics": [
     "Measles: clinical features and complications",
     "Chickenpox (varicella): clinical features and management",
     "Mumps: clinical features and complications",
     "Bacterial meningitis in children",
     "Viral meningitis and encephalitis in children",
     "Enteric fever in children",
     "Dengue fever in children",
     "Urinary tract infection in children",
     "Sepsis in children: recognition and management",
     "Common exanthematous fevers of childhood"
    ]
   },
   {
    "num": 8,
    "title": "Genetic and Chromosomal Disorders",
    "topics": [
     "Down syndrome: clinical features and diagnosis",
     "Turner syndrome: clinical features",
     "Klinefelter syndrome: clinical features",
     "Inborn errors of metabolism: overview and screening",
     "Congenital hypothyroidism",
     "Cystic fibrosis: clinical features",
     "Muscular dystrophies in children",
     "Approach to a dysmorphic child",
     "Genetic counselling in paediatric practice",
     "Newborn screening programmes"
    ]
   },
   {
    "num": 9,
    "title": "Haematological and Oncological Conditions in Children",
    "topics": [
     "Anaemia in children: classification and evaluation",
     "Iron deficiency anaemia: diagnosis and treatment",
     "Thalassaemia: clinical features and management",
     "Sickle cell disease in children",
     "Acute lymphoblastic leukaemia in children",
     "Idiopathic thrombocytopenic purpura",
     "Haemophilia in children",
     "Wilms tumour",
     "Neuroblastoma",
     "Approach to a child with lymphadenopathy"
    ]
   },
   {
    "num": 10,
    "title": "Paediatric Emergencies and Developmental Paediatrics",
    "topics": [
     "Paediatric basic life support",
     "Febrile seizures: recognition and management",
     "Status epilepticus in children",
     "Acute severe asthma: emergency management",
     "Shock in children: recognition and management",
     "Poisoning in children: general approach",
     "Drowning and near-drowning in children",
     "Developmental disabilities: cerebral palsy",
     "Autism spectrum disorder: recognition",
     "Attention-deficit/hyperactivity disorder in children"
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
     "Classification of fractures: open, closed, complete, incomplete",
     "Fracture healing: stages of bone repair",
     "Factors affecting fracture healing",
     "Principles of fracture management: reduction, immobilisation",
     "Types of fracture fixation: internal and external",
     "Complications of fractures: early and late",
     "Delayed union, non-union, and malunion",
     "Compartment syndrome: recognition and management",
     "Open fractures: classification and management",
     "Principles of splinting and casting"
    ]
   },
   {
    "num": 2,
    "title": "Fractures of Upper Limb",
    "topics": [
     "Clavicle fracture: management",
     "Fractures of the proximal humerus",
     "Fractures of the shaft of humerus",
     "Supracondylar fracture of humerus in children",
     "Fractures around the elbow",
     "Fractures of the radius and ulna shaft",
     "Colles' fracture and Smith's fracture",
     "Scaphoid fracture: diagnosis and management",
     "Fractures of the hand and phalanges",
     "Nerve injuries associated with upper limb fractures"
    ]
   },
   {
    "num": 3,
    "title": "Fractures of Lower Limb",
    "topics": [
     "Fractures of the neck of femur",
     "Intertrochanteric and subtrochanteric fractures",
     "Fractures of the shaft of femur",
     "Fractures around the knee",
     "Fractures of the tibia and fibula shaft",
     "Ankle fractures: classification and management",
     "Fractures of the foot: calcaneum and talus",
     "Pelvic fractures: classification and management",
     "Acetabular fractures",
     "Stress fractures of the lower limb"
    ]
   },
   {
    "num": 4,
    "title": "Dislocations — Shoulder, Hip, Knee, and Other Joints",
    "topics": [
     "Shoulder dislocation: anterior and posterior",
     "Recurrent shoulder dislocation",
     "Elbow dislocation",
     "Hip dislocation: types and management",
     "Knee dislocation and ligament injuries",
     "Patellar dislocation",
     "Ankle dislocation",
     "Temporomandibular joint dislocation",
     "Complications of joint dislocations",
     "Principles of reduction of dislocated joints"
    ]
   },
   {
    "num": 5,
    "title": "Spine — Disc Prolapse, Spinal Injuries, Deformities",
    "topics": [
     "Anatomy and biomechanics of the spine",
     "Cervical spondylosis",
     "Prolapsed intervertebral disc: lumbar region",
     "Spinal cord injury: assessment and initial management",
     "Spinal fractures: classification",
     "Scoliosis: assessment and management",
     "Kyphosis and other spinal deformities",
     "Spinal tuberculosis (Pott's disease)",
     "Cauda equina syndrome",
     "Low back pain: approach and evaluation"
    ]
   },
   {
    "num": 6,
    "title": "Bone Infections — Osteomyelitis and Septic Arthritis",
    "topics": [
     "Acute haematogenous osteomyelitis",
     "Chronic osteomyelitis: features and management",
     "Septic arthritis: recognition and management",
     "Tuberculosis of bones and joints",
     "Tuberculosis of the hip and knee joint",
     "Diabetic foot infections",
     "Implant-related infections",
     "Investigations in bone and joint infections",
     "Antibiotic therapy in osteomyelitis",
     "Surgical management of bone infections"
    ]
   },
   {
    "num": 7,
    "title": "Bone Tumours — Benign and Malignant",
    "topics": [
     "Classification of bone tumours",
     "Osteoma and osteoid osteoma",
     "Osteochondroma and enchondroma",
     "Giant cell tumour of bone",
     "Osteosarcoma: clinical features and management",
     "Ewing's sarcoma",
     "Chondrosarcoma",
     "Metastatic bone tumours",
     "Multiple myeloma: skeletal manifestations",
     "Principles of limb salvage surgery"
    ]
   },
   {
    "num": 8,
    "title": "Arthritis — Osteoarthritis, Rheumatoid, Gout",
    "topics": [
     "Osteoarthritis: pathogenesis and clinical features",
     "Management of osteoarthritis: conservative and surgical",
     "Rheumatoid arthritis: orthopaedic manifestations",
     "Gouty arthritis: clinical features and management",
     "Ankylosing spondylitis: orthopaedic aspects",
     "Septic arthritis vs inflammatory arthritis",
     "Total joint replacement: indications",
     "Arthroscopy in joint disease",
     "Juvenile idiopathic arthritis",
     "Approach to a patient with joint pain"
    ]
   },
   {
    "num": 9,
    "title": "Congenital and Developmental Disorders — CTEV, DDH, CDH",
    "topics": [
     "Congenital talipes equinovarus (CTEV): diagnosis and management",
     "Developmental dysplasia of the hip (DDH)",
     "Screening tests for DDH: Ortolani and Barlow tests",
     "Congenital scoliosis",
     "Limb length discrepancy",
     "Polydactyly and syndactyly",
     "Osteogenesis imperfecta",
     "Achondroplasia",
     "Perthes disease",
     "Slipped capital femoral epiphysis"
    ]
   },
   {
    "num": 10,
    "title": "Orthopaedic Surgeries — Arthroplasty, Arthroscopy, Amputation",
    "topics": [
     "Principles of total hip arthroplasty",
     "Principles of total knee arthroplasty",
     "Complications of joint arthroplasty",
     "Arthroscopic surgery: principles and applications",
     "Indications and levels of amputation",
     "Post-amputation care and prosthetics",
     "External fixation techniques",
     "Bone grafting: types and indications",
     "Principles of orthopaedic rehabilitation",
     "Physiotherapy in orthopaedic practice"
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
     "Structure of the epidermis and its layers",
     "Structure of the dermis and subcutaneous tissue",
     "Functions of the skin: barrier, thermoregulation, sensation",
     "Skin appendages: hair, nails, sweat and sebaceous glands",
     "Skin colour: role of melanin and melanocytes",
     "Vascular supply of the skin",
     "Immunological functions of the skin",
     "Age-related changes in skin structure",
     "Wound healing in skin",
     "Skin biopsy: indications and technique"
    ]
   },
   {
    "num": 2,
    "title": "Approach to a Skin Patient — Lesion Morphology and Terminology",
    "topics": [
     "History taking in dermatology",
     "Primary skin lesions: macule, papule, vesicle, pustule",
     "Secondary skin lesions: scale, crust, erosion, ulcer",
     "Distribution and configuration of skin lesions",
     "Diagnostic techniques: Wood's lamp, KOH mount",
     "Dermoscopy: basic principles",
     "Patch testing for allergic contact dermatitis",
     "Skin scraping and microscopy",
     "Photography and documentation in dermatology",
     "General principles of topical therapy"
    ]
   },
   {
    "num": 3,
    "title": "Eczema and Dermatitis — Atopic, Contact, Seborrhoeic",
    "topics": [
     "Atopic dermatitis: clinical features and management",
     "Allergic contact dermatitis: causes and diagnosis",
     "Irritant contact dermatitis",
     "Seborrhoeic dermatitis: clinical features and management",
     "Nummular eczema",
     "Stasis dermatitis",
     "Lichen simplex chronicus",
     "Pompholyx (dyshidrotic eczema)",
     "Management principles of eczema: emollients and steroids",
     "Differential diagnosis of eczematous conditions"
    ]
   },
   {
    "num": 4,
    "title": "Psoriasis and Papulosquamous Disorders",
    "topics": [
     "Psoriasis: pathogenesis and clinical features",
     "Types of psoriasis: plaque, guttate, pustular",
     "Psoriatic arthritis",
     "Management of psoriasis: topical and systemic",
     "Lichen planus: clinical features and variants",
     "Pityriasis rosea",
     "Pityriasis rubra pilaris",
     "Nail changes in papulosquamous disorders",
     "Koebner phenomenon",
     "Differential diagnosis of scaly lesions"
    ]
   },
   {
    "num": 5,
    "title": "Acne Vulgaris and Rosacea",
    "topics": [
     "Pathogenesis of acne vulgaris",
     "Clinical grading of acne severity",
     "Topical treatment of acne",
     "Systemic treatment of acne: antibiotics and isotretinoin",
     "Acne scarring and its management",
     "Rosacea: clinical features and subtypes",
     "Management of rosacea",
     "Perioral dermatitis",
     "Hidradenitis suppurativa",
     "Hormonal acne and its management"
    ]
   },
   {
    "num": 6,
    "title": "Skin Infections — Bacterial, Fungal, and Viral",
    "topics": [
     "Impetigo: clinical features and management",
     "Folliculitis, furuncle, and carbuncle",
     "Cellulitis and erysipelas",
     "Dermatophytosis (tinea): clinical types",
     "Candidiasis of the skin and mucosa",
     "Pityriasis versicolor",
     "Herpes simplex virus infection of the skin",
     "Herpes zoster: clinical features and management",
     "Viral warts: clinical types and treatment",
     "Molluscum contagiosum"
    ]
   },
   {
    "num": 7,
    "title": "Sexually Transmitted Infections — Syphilis, Gonorrhoea, Herpes",
    "topics": [
     "Syphilis: stages and clinical features",
     "Laboratory diagnosis of syphilis",
     "Treatment of syphilis",
     "Gonorrhoea: clinical features and management",
     "Genital herpes: clinical features",
     "Chancroid",
     "Lymphogranuloma venereum",
     "Genital warts (condyloma acuminata)",
     "Syndromic management of STIs",
     "Prevention and counselling in STIs"
    ]
   },
   {
    "num": 8,
    "title": "Leprosy — Classification, Treatment, Reactions",
    "topics": [
     "Mycobacterium leprae and mode of transmission",
     "Ridley-Jopling classification of leprosy",
     "Clinical features of paucibacillary leprosy",
     "Clinical features of multibacillary leprosy",
     "Diagnosis of leprosy: slit-skin smear",
     "Multidrug therapy for leprosy",
     "Type 1 (reversal) lepra reaction",
     "Type 2 (erythema nodosum leprosum) reaction",
     "Deformities in leprosy and their prevention",
     "National leprosy eradication programme"
    ]
   },
   {
    "num": 9,
    "title": "Skin Tumours — BCC, SCC, Melanoma",
    "topics": [
     "Benign skin tumours: seborrhoeic keratosis, dermatofibroma",
     "Actinic keratosis and its malignant potential",
     "Basal cell carcinoma: clinical features and management",
     "Squamous cell carcinoma: clinical features and management",
     "Malignant melanoma: ABCDE criteria",
     "Staging and prognosis of melanoma",
     "Cutaneous lymphoma overview",
     "Kaposi's sarcoma",
     "Skin biopsy techniques for suspected malignancy",
     "Prevention: sun protection and screening"
    ]
   },
   {
    "num": 10,
    "title": "Drug Reactions and Dermatological Emergencies",
    "topics": [
     "Classification of cutaneous adverse drug reactions",
     "Fixed drug eruption",
     "Stevens-Johnson syndrome and toxic epidermal necrolysis",
     "Drug reaction with eosinophilia and systemic symptoms (DRESS)",
     "Urticaria and angioedema",
     "Erythroderma: causes and management",
     "Pemphigus vulgaris: clinical features",
     "Bullous pemphigoid",
     "Anaphylaxis with cutaneous manifestations",
     "Approach to a dermatological emergency"
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
     "History taking in psychiatry",
     "Mental status examination: components",
     "Classification systems: ICD and DSM overview",
     "Psychiatric interview techniques",
     "Insight and judgement assessment",
     "Cognitive assessment in psychiatric patients",
     "Risk assessment in psychiatric practice",
     "Ethical issues in psychiatric evaluation",
     "Formulation of a psychiatric case",
     "Overview of psychiatric investigations"
    ]
   },
   {
    "num": 2,
    "title": "Schizophrenia and Other Psychotic Disorders",
    "topics": [
     "Schizophrenia: diagnostic criteria and subtypes",
     "Positive and negative symptoms of schizophrenia",
     "Aetiology of schizophrenia: biological and psychosocial factors",
     "Course and prognosis of schizophrenia",
     "Antipsychotic drug treatment of schizophrenia",
     "Brief psychotic disorder and schizophreniform disorder",
     "Delusional disorder",
     "Schizoaffective disorder",
     "Management of treatment-resistant schizophrenia",
     "Psychosocial rehabilitation in psychotic disorders"
    ]
   },
   {
    "num": 3,
    "title": "Mood Disorders — Depression and Bipolar Disorder",
    "topics": [
     "Major depressive disorder: diagnostic criteria",
     "Aetiology of depression: biological and psychosocial models",
     "Pharmacological treatment of depression",
     "Bipolar disorder: diagnostic criteria and subtypes",
     "Mania: clinical features and management",
     "Mood stabilisers in bipolar disorder",
     "Dysthymia and cyclothymia",
     "Postpartum depression",
     "Suicide risk assessment in mood disorders",
     "Electroconvulsive therapy: indications and procedure"
    ]
   },
   {
    "num": 4,
    "title": "Anxiety Disorders — Phobias, OCD, PTSD, Panic Disorder",
    "topics": [
     "Generalised anxiety disorder: features and management",
     "Panic disorder: clinical features and treatment",
     "Specific phobias and social anxiety disorder",
     "Obsessive-compulsive disorder: features and treatment",
     "Post-traumatic stress disorder: features and management",
     "Acute stress reaction and adjustment disorder",
     "Somatic symptom disorder",
     "Pharmacological treatment of anxiety disorders",
     "Cognitive behavioural therapy in anxiety disorders",
     "Differential diagnosis of anxiety symptoms"
    ]
   },
   {
    "num": 5,
    "title": "Substance Use Disorders — Alcohol, Drugs, Tobacco Dependence",
    "topics": [
     "Concepts of dependence, tolerance, and withdrawal",
     "Alcohol use disorder: clinical features",
     "Alcohol withdrawal syndrome and delirium tremens",
     "Management of alcohol dependence",
     "Opioid use disorder and withdrawal",
     "Cannabis use disorder",
     "Tobacco dependence and cessation strategies",
     "Sedative and stimulant use disorders",
     "De-addiction treatment approaches",
     "Relapse prevention in substance use disorders"
    ]
   },
   {
    "num": 6,
    "title": "Organic Mental Disorders — Delirium, Dementia",
    "topics": [
     "Delirium: clinical features and causes",
     "Differentiating delirium from dementia",
     "Dementia: classification and clinical features",
     "Alzheimer's disease: clinical features and management",
     "Vascular dementia",
     "Management of behavioural symptoms in dementia",
     "Mild cognitive impairment",
     "Amnestic disorders",
     "Investigations in organic mental disorders",
     "Caregiver support in dementia care"
    ]
   },
   {
    "num": 7,
    "title": "Personality Disorders",
    "topics": [
     "Definition and classification of personality disorders",
     "Cluster A personality disorders: paranoid, schizoid, schizotypal",
     "Cluster B personality disorders: antisocial, borderline, histrionic, narcissistic",
     "Cluster C personality disorders: avoidant, dependent, obsessive-compulsive",
     "Borderline personality disorder: clinical features",
     "Antisocial personality disorder and conduct disorder link",
     "Aetiology of personality disorders",
     "Psychotherapeutic approaches to personality disorders",
     "Differential diagnosis of personality disorders",
     "Course and prognosis of personality disorders"
    ]
   },
   {
    "num": 8,
    "title": "Child and Adolescent Psychiatry — ADHD, Autism, Learning Disorders",
    "topics": [
     "Attention-deficit/hyperactivity disorder: diagnosis and management",
     "Autism spectrum disorder: clinical features",
     "Specific learning disorders",
     "Intellectual disability: classification and assessment",
     "Conduct disorder and oppositional defiant disorder",
     "Childhood anxiety disorders",
     "Separation anxiety disorder",
     "Enuresis and encopresis",
     "Adolescent substance use",
     "School refusal and its management"
    ]
   },
   {
    "num": 9,
    "title": "Psychiatric Emergencies — Suicidality, Aggression, Acute Psychosis",
    "topics": [
     "Assessment of suicide risk",
     "Management of a suicidal patient in emergency settings",
     "Management of the aggressive or violent patient",
     "Acute psychotic episode: emergency management",
     "Neuroleptic malignant syndrome",
     "Serotonin syndrome",
     "Acute dystonia and other drug-induced emergencies",
     "Catatonia: recognition and management",
     "Alcohol and drug intoxication emergencies",
     "Legal aspects of psychiatric emergency care"
    ]
   },
   {
    "num": 10,
    "title": "Psychotherapy, Psychopharmacology, and Legal Aspects of Psychiatry",
    "topics": [
     "Principles of supportive psychotherapy",
     "Cognitive behavioural therapy: basic principles",
     "Psychoanalytic concepts: overview",
     "Family therapy approaches",
     "Classification of psychotropic drugs",
     "Antipsychotics: typical and atypical agents",
     "Antidepressants: classes and mechanisms",
     "Mental Healthcare Act: key provisions",
     "Informed consent and confidentiality in psychiatry",
     "Involuntary admission and patient rights"
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
     "Principles of triage in emergency care",
     "START triage system",
     "SALT triage system",
     "Triage categories and colour coding",
     "Triage in mass casualty incidents",
     "Re-triage and dynamic reassessment",
     "Triage documentation",
     "Paediatric triage considerations",
     "Resource allocation in triage",
     "Ethical considerations in triage decisions"
    ]
   },
   {
    "num": 2,
    "title": "Airway Management — BVM, Intubation, Surgical Airway",
    "topics": [
     "Airway assessment: recognising a difficult airway",
     "Basic airway manoeuvres: head tilt-chin lift, jaw thrust",
     "Bag-valve-mask ventilation technique",
     "Oropharyngeal and nasopharyngeal airways",
     "Endotracheal intubation: indications and technique",
     "Rapid sequence intubation",
     "Supraglottic airway devices",
     "Surgical airway: cricothyroidotomy",
     "Confirmation of airway placement",
     "Complications of airway management"
    ]
   },
   {
    "num": 3,
    "title": "Cardiopulmonary Resuscitation (CPR) and ACLS",
    "topics": [
     "Basic life support: chest compressions and ventilation",
     "Chain of survival in cardiac arrest",
     "Advanced cardiac life support algorithm",
     "Defibrillation and cardioversion",
     "Management of shockable rhythms",
     "Management of non-shockable rhythms (PEA, asystole)",
     "Drugs used in cardiac arrest",
     "Post-resuscitation care",
     "Recognising reversible causes of cardiac arrest (Hs and Ts)",
     "Ethical aspects of resuscitation decisions"
    ]
   },
   {
    "num": 4,
    "title": "Shock Management — Fluid Resuscitation Protocols",
    "topics": [
     "Recognition of shock in the emergency setting",
     "Classification of shock and initial assessment",
     "Fluid resuscitation: crystalloids vs colloids",
     "Massive transfusion protocol",
     "Vasopressor use in shock management",
     "Monitoring response to resuscitation",
     "Permissive hypotension in trauma",
     "Septic shock: early recognition and bundle care",
     "Cardiogenic shock: emergency management",
     "Reassessment strategies in shock"
    ]
   },
   {
    "num": 5,
    "title": "Polytrauma — Primary and Secondary Survey (ATLS Approach)",
    "topics": [
     "Primary survey: ABCDE approach",
     "Airway and cervical spine control in trauma",
     "Breathing assessment and chest injuries",
     "Circulation and haemorrhage control",
     "Disability: rapid neurological assessment",
     "Exposure and environmental control",
     "Secondary survey: head-to-toe examination",
     "Trauma imaging: FAST scan",
     "Damage control resuscitation principles",
     "Trauma team roles and communication"
    ]
   },
   {
    "num": 6,
    "title": "Burns — Assessment, Resuscitation, and Wound Care",
    "topics": [
     "Assessment of burn depth and extent",
     "Rule of nines for burn surface area estimation",
     "Fluid resuscitation in burns: Parkland formula",
     "Airway management in burn patients",
     "Escharotomy: indications and technique",
     "Burn wound dressing and care",
     "Electrical burns: special considerations",
     "Chemical burns: initial management",
     "Inhalation injury: recognition and management",
     "Referral criteria to burn centres"
    ]
   },
   {
    "num": 7,
    "title": "Toxicological Emergencies — Poisoning and Overdose",
    "topics": [
     "General approach to the poisoned patient",
     "Gastrointestinal decontamination methods",
     "Activated charcoal: indications and contraindications",
     "Common antidotes and their use",
     "Organophosphate poisoning: emergency management",
     "Paracetamol overdose: management protocol",
     "Opioid overdose: recognition and naloxone use",
     "Benzodiazepine overdose",
     "Toxidromes: recognition patterns",
     "Enhanced elimination techniques in poisoning"
    ]
   },
   {
    "num": 8,
    "title": "Environmental Emergencies — Heat Stroke, Hypothermia, Drowning",
    "topics": [
     "Heat exhaustion and heat stroke: recognition and management",
     "Cooling techniques in heat stroke",
     "Hypothermia: classification and management",
     "Rewarming techniques in hypothermia",
     "Drowning: initial management and resuscitation",
     "Near-drowning complications",
     "High-altitude illness",
     "Electrical injury and lightning strikes",
     "Envenomation: snake bite management",
     "Scorpion sting management"
    ]
   },
   {
    "num": 9,
    "title": "Paediatric Emergencies — Febrile Seizures, Croup, Anaphylaxis",
    "topics": [
     "Paediatric assessment triangle",
     "Febrile seizures: management in the emergency department",
     "Croup: emergency management",
     "Anaphylaxis: recognition and adrenaline administration",
     "Paediatric basic and advanced life support differences",
     "Paediatric fluid resuscitation",
     "Foreign body airway obstruction in children",
     "Dehydration assessment in children",
     "Non-accidental injury: recognition",
     "Paediatric trauma considerations"
    ]
   },
   {
    "num": 10,
    "title": "Disaster Medicine and Mass Casualty Incident Management",
    "topics": [
     "Definition and classification of disasters",
     "Disaster preparedness planning in hospitals",
     "Incident command system",
     "Mass casualty triage principles",
     "Surge capacity planning",
     "Communication during disaster response",
     "Chemical, biological, radiological, nuclear (CBRN) emergencies overview",
     "Search and rescue coordination",
     "Psychological first aid in disasters",
     "Post-disaster recovery and evaluation"
    ]
   }
  ]
 }
];
