// diseases-data.js
// Companion data for the Prompt Builder's "Build by Disease" mode.
// Source: disease-list.md — 18 subjects, each with Common / Less Common / Rare tiers.
// Keys must match SUBJECTS[i].title exactly (see courseware-data.js) so the
// prompt builder can cross-reference subject -> chapters -> diseases.

const DISEASES = {
  "Anatomy": {
    common: ["Inguinal hernia (indirect/direct)","Varicose veins","Cervical rib","Bicornuate uterus / uterine anomalies","Meckel's diverticulum","Cleft lip and palate","Undescended testis (cryptorchidism)","Spina bifida occulta","Accessory/supernumerary breast (polymastia)","Flat foot (pes planus)"],
    lessCommon: ["Situs inversus","Horseshoe kidney","Polycystic kidney (anatomical correlation)","Klippel-Feil syndrome","Sprengel's deformity","Congenital diaphragmatic hernia","Persistent Mullerian duct syndrome","Coarctation of aorta (anatomical basis)","Double ureter / duplex collecting system","Amelia / phocomelia (limb anomalies)"],
    rare: ["Situs ambiguus","Ectopia cordis","Conjoined twins (anatomical basis)","Sirenomelia","Cyclopia","Rachischisis","Persistent truncus arteriosus (anatomical)","Agenesis of corpus callosum","Dextrocardia with situs solitus","Polydactyly/syndactyly complex variants"]
  },
  "Physiology": {
    common: ["Hypertension (physiological basis)","Anemia (physiological classification)","Hypoxia (types)","Dehydration / fluid imbalance","Fatigue/muscle cramps (electrolyte-related)","Menstrual irregularities (physiological)","Jet lag / circadian rhythm disturbance","Altitude sickness (hypoxia adaptation)","Heat exhaustion","Vasovagal syncope"],
    lessCommon: ["Diabetes insipidus (physiological)","SIADH (physiological)","Decompression sickness","Chronic mountain sickness","Ondine's curse (central hypoventilation)","Familial periodic paralysis","Malignant hyperthermia","Reflex sympathetic dystrophy","Postural orthostatic tachycardia syndrome (POTS)","Exercise-induced bronchospasm"],
    rare: ["Congenital insensitivity to pain","Guillain-Barré related autonomic dysfunction","Central pontine myelinolysis (physiological correlate)","Batten disease (metabolic/physiological)","Familial dysautonomia (Riley-Day syndrome)","Andersen-Tawil syndrome","Brugada syndrome (channelopathy)","Long QT syndrome","Catecholaminergic polymorphic VT","Primary hyperaldosteronism (physiological)"]
  },
  "Biochemistry": {
    common: ["Diabetes mellitus (Type 1 & 2)","Obesity/dyslipidemia","Vitamin D deficiency (rickets/osteomalacia)","Iron deficiency anemia","Vitamin B12 deficiency","Gout (hyperuricemia)","Hypothyroidism (biochemical basis)","Metabolic syndrome","Fatty liver disease","Protein-energy malnutrition (Kwashiorkor/Marasmus)"],
    lessCommon: ["G6PD deficiency","Phenylketonuria (PKU)","Galactosemia","Wilson's disease","Hemochromatosis","Lactose intolerance","Homocystinuria","Maple syrup urine disease","Glycogen storage diseases (von Gierke's, Pompe's)","Familial hypercholesterolemia"],
    rare: ["Tay-Sachs disease","Niemann-Pick disease","Gaucher's disease","Lesch-Nyhan syndrome","Alkaptonuria","Porphyrias (acute intermittent porphyria)","Fabry disease","Hurler syndrome (mucopolysaccharidosis)","Zellweger syndrome","Citrullinemia / urea cycle disorders"]
  },
  "Pathology": {
    common: ["Atherosclerosis","Tuberculosis (pathology)","Ischemic heart disease / myocardial infarction","Chronic inflammation-related fibrosis","Iron deficiency anemia (pathology)","Rheumatic heart disease","Cirrhosis of liver","Chronic kidney disease","Benign prostatic hyperplasia","Common carcinomas (breast, lung, cervix, oral)"],
    lessCommon: ["Amyloidosis","Sarcoidosis","Systemic lupus erythematosus","Hodgkin's and Non-Hodgkin's lymphoma","Multiple myeloma","Wegener's granulomatosis (GPA)","Polyarteritis nodosa","Hemolytic anemias (autoimmune, hereditary spherocytosis)","Nephrotic syndrome (minimal change, FSGS, membranous)","Leukemias (acute and chronic)"],
    rare: ["Langerhans cell histiocytosis","Goodpasture syndrome","Thrombotic thrombocytopenic purpura","Castleman disease","Mycosis fungoides","Kaposi sarcoma","Ewing's sarcoma","Retinoblastoma","Wilms tumor","Burkitt lymphoma"]
  },
  "Pharmacology": {
    common: ["Hypertension (drug therapy contexts)","Type 2 diabetes (drug therapy)","Peptic ulcer disease (drug-induced/treated)","Bronchial asthma (pharmacotherapy)","Bacterial infections (antibiotic contexts)","Pain management contexts (NSAID use)","Depression (antidepressant pharmacology)","Epilepsy (antiepileptic pharmacology)","Allergic rhinitis / anaphylaxis","Drug-induced peptic ulcer/gastritis"],
    lessCommon: ["Drug-induced hepatotoxicity","Steroid-induced Cushing's syndrome","Digoxin toxicity","Warfarin-induced bleeding/skin necrosis","Serotonin syndrome","Neuroleptic malignant syndrome","Aminoglycoside-induced ototoxicity/nephrotoxicity","Methotrexate toxicity","Drug-induced lupus","Stevens-Johnson syndrome / TEN (drug-induced)"],
    rare: ["Chloramphenicol-induced aplastic anemia / gray baby syndrome","Thalidomide-induced phocomelia","Reye's syndrome (aspirin-associated)","Halothane hepatitis","Isoniazid-induced peripheral neuropathy","Fixed drug eruption (severe forms)","Lithium-induced nephrogenic diabetes insipidus","Malignant hyperthermia (anesthetic drugs)","Ergotism","Black cohosh/herbal drug-induced hepatotoxicity"]
  },
  "Microbiology": {
    common: ["Tuberculosis","Typhoid fever","Urinary tract infection (E. coli)","Streptococcal pharyngitis","Staphylococcal skin infections","Malaria","Dengue fever","Viral hepatitis (A, B, C)","HIV/AIDS","Fungal skin infections (dermatophytosis, candidiasis)"],
    lessCommon: ["Leptospirosis","Brucellosis","Diphtheria","Pertussis (whooping cough)","Tetanus","Rabies","Amoebiasis","Giardiasis","Cryptococcal meningitis","Mucormycosis"],
    rare: ["Anthrax","Plague (Yersinia pestis)","Melioidosis","Nipah virus infection","Kyasanur Forest disease","Chikungunya (severe complications)","Cholera (severe outbreak forms)","Actinomycosis","Histoplasmosis","Prion diseases (Creutzfeldt-Jakob disease)"]
  },
  "Forensic Medicine & Toxicology": {
    common: ["Organophosphate poisoning","Alcohol intoxication/dependence","Road traffic accident-related injuries","Burns (medicolegal aspects)","Snake bite (venomous)","Corrosive/acid poisoning","Firearm injuries (medicolegal)","Drowning","Hanging/asphyxial deaths","Domestic violence-related injuries"],
    lessCommon: ["Barbiturate/benzodiazepine poisoning","Opioid overdose","Kerosene/hydrocarbon poisoning","Rodenticide (zinc phosphide) poisoning","Carbon monoxide poisoning","Electrocution injuries","Heat stroke (medicolegal)","Scorpion sting","Aluminium phosphide poisoning","Sexual assault-related injury patterns"],
    rare: ["Arsenic poisoning (chronic)","Lead poisoning (medicolegal)","Mercury poisoning","Thallium poisoning","Cyanide poisoning","Mushroom poisoning","Puffer fish (tetrodotoxin) poisoning","Radiation injury","Munchausen syndrome by proxy","Fetal death/infanticide medicolegal cases"]
  },
  "Community Medicine": {
    common: ["Malnutrition (PEM, stunting, wasting)","Anemia (public health burden)","Diarrheal diseases (childhood)","Acute respiratory infections (childhood)","Tuberculosis (public health)","Vaccine-preventable diseases (measles, polio)","Hypertension (population screening)","Diabetes (population screening)","Maternal mortality-related conditions","Vector-borne diseases (malaria, dengue, filariasis)"],
    lessCommon: ["Iodine deficiency disorders (goiter)","Vitamin A deficiency (xerophthalmia)","Occupational lung diseases (silicosis, byssinosis)","Fluorosis","Leprosy (public health control)","HIV/AIDS (epidemiological)","Lymphatic filariasis","Japanese encephalitis","Rabies (public health control)","Tobacco-related diseases (population level)"],
    rare: ["Guinea worm disease (dracunculiasis) — near eradicated","Yaws","Trachoma (blinding)","Kala-azar (visceral leishmaniasis)","Cholera outbreaks","Nipah virus outbreaks","Anthrax (occupational/zoonotic)","Radiation exposure disorders","Endemic fluorosis-related skeletal deformity","Minamata disease (mercury, environmental)"]
  },
  "Ophthalmology": {
    common: ["Refractive errors (myopia, hypermetropia, astigmatism)","Cataract","Conjunctivitis (bacterial/viral/allergic)","Diabetic retinopathy","Trachoma","Stye (hordeolum)","Dry eye disease","Pterygium","Corneal abrasion/foreign body","Chalazion"],
    lessCommon: ["Glaucoma (primary open angle, angle closure)","Uveitis","Retinal detachment","Central retinal artery/vein occlusion","Squint (strabismus)","Keratoconus","Optic neuritis","Corneal ulcer (bacterial/fungal)","Endophthalmitis","Hypertensive retinopathy"],
    rare: ["Retinoblastoma","Retinitis pigmentosa","Sympathetic ophthalmia","Orbital cellulitis (severe complications)","Congenital glaucoma (buphthalmos)","Marfan syndrome-related lens dislocation","Coats disease","Choroidal melanoma","Fuchs' endothelial dystrophy","Behçet's disease (ocular involvement)"]
  },
  "Otorhinolaryngology (ENT)": {
    common: ["Otitis media (acute/chronic)","Sinusitis","Tonsillitis/pharyngitis","Allergic rhinitis","Epistaxis","Deviated nasal septum","Wax impaction (cerumen)","Foreign body in ear/nose","Hearing loss (conductive/sensorineural, age-related)","Laryngitis"],
    lessCommon: ["Otosclerosis","Ménière's disease","Vocal cord nodules/polyps","Nasal polyposis","Peritonsillar abscess (quinsy)","Mastoiditis","Vestibular neuronitis","Laryngeal papillomatosis","Adenoid hypertrophy","Sudden sensorineural hearing loss"],
    rare: ["Nasopharyngeal carcinoma","Laryngeal carcinoma","Acoustic neuroma","Cholesteatoma (complicated)","Juvenile angiofibroma","Wegener's granulomatosis (ENT presentation)","Ramsay Hunt syndrome","Glomus jugulare tumor","Rhinoscleroma","Necrotizing (malignant) otitis externa"]
  },
  "General Medicine": {
    common: ["Hypertension","Type 2 diabetes mellitus","Ischemic heart disease","Chronic obstructive pulmonary disease (COPD)","Bronchial asthma","Community-acquired pneumonia","Pulmonary tuberculosis","Peptic ulcer disease / GERD","Chronic kidney disease","Anemia (iron deficiency)"],
    lessCommon: ["Congestive heart failure","Stroke (ischemic/hemorrhagic)","Chronic liver disease/cirrhosis","Rheumatoid arthritis","Systemic lupus erythematosus","Hypothyroidism/hyperthyroidism","Nephrotic/nephritic syndrome","Malaria (complicated)","Dengue (with warning signs)","Enteric (typhoid) fever with complications"],
    rare: ["HIV/AIDS with opportunistic infections","Systemic sclerosis (scleroderma)","Guillain-Barré syndrome","Myasthenia gravis","Addison's disease","Pheochromocytoma","Amyloidosis (systemic)","Wilson's disease (clinical)","Hemochromatosis (clinical)","Thrombotic thrombocytopenic purpura"]
  },
  "General Surgery": {
    common: ["Acute appendicitis","Inguinal hernia","Gallstone disease/cholecystitis","Hemorrhoids","Peptic ulcer perforation","Breast lump (fibroadenoma/carcinoma workup)","Thyroid nodule/goiter","Intestinal obstruction","Wound infections/abscess","Varicose veins (surgical)"],
    lessCommon: ["Acute pancreatitis","Diabetic foot/gangrene","Perianal fistula","Peripheral arterial disease","Carcinoma stomach","Carcinoma colon/rectum","Splenic injury/rupture","Hydatid cyst (liver)","Thyroid carcinoma","Umbilical/incisional hernia"],
    rare: ["Carcinoid tumor","Gastrointestinal stromal tumor (GIST)","Pheochromocytoma (surgical)","Retroperitoneal sarcoma","Zollinger-Ellison syndrome","Boerhaave syndrome (esophageal rupture)","Meckel's diverticulitis","Volvulus (sigmoid/cecal)","Necrotizing fasciitis","Pancreatic pseudocyst with complications"]
  },
  "Obstetrics & Gynaecology (OBG)": {
    common: ["Normal pregnancy/antenatal care conditions","Anemia in pregnancy","Pregnancy-induced hypertension/pre-eclampsia","Gestational diabetes","Menstrual disorders (menorrhagia, dysmenorrhea)","Polycystic ovarian syndrome (PCOS)","Uterine fibroids","Vaginal/pelvic infections","Postpartum hemorrhage","Ectopic pregnancy"],
    lessCommon: ["Eclampsia","Placenta previa","Abruptio placentae","Obstructed labour","Ovarian cysts/tumors (benign)","Endometriosis","Infertility (female factor)","Cervical intraepithelial neoplasia","Molar pregnancy (hydatidiform mole)","Rh isoimmunization"],
    rare: ["Choriocarcinoma","Amniotic fluid embolism","Uterine rupture","Vasa previa","HELLP syndrome","Uterine inversion","Ovarian carcinoma","Cervical carcinoma (advanced)","Asherman's syndrome","Placenta accreta/percreta"]
  },
  "Paediatrics": {
    common: ["Acute respiratory infections","Acute diarrheal disease/dehydration","Protein-energy malnutrition","Neonatal jaundice","Vaccine-preventable diseases (measles, chickenpox)","Iron deficiency anemia","Febrile seizures","Bronchiolitis","Worm infestations","Vitamin D deficiency rickets"],
    lessCommon: ["Congenital heart disease","Down syndrome","Nephrotic syndrome (childhood)","Acute rheumatic fever","Cerebral palsy","Neonatal sepsis","Respiratory distress syndrome (preterm)","Autism spectrum disorder","ADHD","Thalassemia"],
    rare: ["Acute lymphoblastic leukemia","Wilms tumor","Neuroblastoma","Kawasaki disease","Duchenne muscular dystrophy","Biliary atresia","Congenital adrenal hyperplasia","SCID (severe combined immunodeficiency)","Reye's syndrome","Hemolytic uremic syndrome"]
  },
  "Orthopaedics": {
    common: ["Fractures (long bone — femur, tibia, radius/ulna)","Osteoarthritis","Low back pain / disc prolapse","Sprains and ligament injuries","Osteoporosis","Fracture clavicle","Dislocation shoulder","Cervical spondylosis","Plantar fasciitis","Frozen shoulder"],
    lessCommon: ["Rheumatoid arthritis (orthopaedic aspects)","Osteomyelitis","Congenital talipes equinovarus (CTEV/clubfoot)","Developmental dysplasia of hip (DDH)","Septic arthritis","Ankylosing spondylitis","Avascular necrosis of femoral head","Rickets/osteomalacia (orthopaedic)","Scoliosis","Compartment syndrome"],
    rare: ["Osteosarcoma","Ewing's sarcoma","Osteogenesis imperfecta","Achondroplasia","Perthes disease","Marfan syndrome (skeletal)","Paget's disease of bone","Giant cell tumor of bone","Chondrosarcoma","Fibrous dysplasia"]
  },
  "Dermatology": {
    common: ["Acne vulgaris","Eczema/atopic dermatitis","Fungal skin infections (tinea)","Scabies","Urticaria","Psoriasis","Contact dermatitis","Viral warts","Vitiligo","Alopecia (androgenetic/areata)"],
    lessCommon: ["Herpes zoster","Lichen planus","Pemphigus vulgaris","Bullous pemphigoid","Leprosy (dermatological)","Syphilis (cutaneous manifestations)","Drug eruptions (fixed drug eruption, Stevens-Johnson)","Seborrheic dermatitis","Rosacea","Melasma"],
    rare: ["Toxic epidermal necrolysis","Mycosis fungoides","Xeroderma pigmentosum","Epidermolysis bullosa","Dermatitis herpetiformis","Necrobiosis lipoidica","Pyoderma gangrenosum","Cutaneous T-cell lymphoma","Acanthosis nigricans (paraneoplastic)","Sweet syndrome"]
  },
  "Psychiatry": {
    common: ["Major depressive disorder","Generalized anxiety disorder","Alcohol use disorder","Insomnia","Somatoform disorders","Panic disorder","Adjustment disorder","Substance use disorder (tobacco/cannabis)","Post-traumatic stress disorder","Obsessive-compulsive disorder"],
    lessCommon: ["Schizophrenia","Bipolar affective disorder","Delirium","Dementia (Alzheimer's type)","Social anxiety disorder / phobias","Somatic symptom disorder","Conversion disorder","ADHD (psychiatric evaluation)","Personality disorders (borderline, antisocial)","Opioid dependence"],
    rare: ["Catatonia","Schizoaffective disorder","Capgras syndrome","Cotard's syndrome","Dissociative identity disorder","Munchausen syndrome","Folie à deux (shared psychotic disorder)","Kleine-Levin syndrome","Neuroleptic malignant syndrome (psychiatric context)","De Clerambault syndrome (erotomania)"]
  },
  "Emergency Medicine": {
    common: ["Acute myocardial infarction","Trauma/polytrauma","Acute severe asthma","Anaphylaxis","Diabetic ketoacidosis","Acute stroke","Status epilepticus","Acute poisoning (organophosphate, drug overdose)","Snake bite envenomation","Acute gastroenteritis with dehydration"],
    lessCommon: ["Cardiac arrest (arrhythmia-related)","Tension pneumothorax","Septic shock","Burns (major)","Hypoglycemic emergency","Acute pulmonary edema","Ectopic pregnancy rupture (emergency)","Heat stroke","Near-drowning","Acute abdomen (perforation/obstruction)"],
    rare: ["Massive pulmonary embolism","Aortic dissection","Amniotic fluid embolism (emergency)","Thyroid storm","Myxedema coma","Addisonian crisis","Malignant hyperthermia (emergency)","Neuroleptic malignant syndrome (emergency)","Mass casualty/disaster trauma","Electrical injury with cardiac arrest"]
  }
};

if (typeof module !== 'undefined' && module.exports) module.exports = DISEASES;
