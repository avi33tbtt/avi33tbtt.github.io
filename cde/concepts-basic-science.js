// concepts-basic-science.js
// Concept pool of related basic-science topics a disease cross-links to,
// grouped by discipline: anatomy, physiology, biochemistry, pathology.
// Each sub-object is id -> label, same rules as the other concept pools.
// TO ADD: reuse an existing id within the right discipline if it already exists;
// otherwise add a new "id": "Label" entry under that discipline.

const BASIC_SCIENCE = {
  anatomy: {
    "vermiform-appendix-position-variants-retrocecal-pelvic": "Vermiform appendix position variants (retrocecal, pelvic)",
    "blood-supply-appendicular-artery": "Blood supply — appendicular artery",
    "coronary-artery-territories-lad-lcx-rca": "Coronary artery territories (LAD, LCx, RCA)",
    "apical-lung-segments-favored-site-high-po2": "Apical lung segments (favored site — high pO2)",
    "pancreatic-islets-of-langerhans-beta-cells": "Pancreatic islets of Langerhans (beta cells)",
    "bronchopulmonary-segments-lobar-consolidation-pattern": "Bronchopulmonary segments (lobar consolidation pattern)",
    "nephron-structure-glomerulus-and-tubules": "Nephron structure — glomerulus and tubules",
    "meninges-dura-arachnoid-pia-and-subarachnoid-space": "Meninges (dura, arachnoid, pia) and subarachnoid space",
    "hepatic-lobule-architecture": "Hepatic lobule architecture",
    "portal-venous-system": "Portal venous system",
    "synovial-joint-structure-small-joints-of-hand-wrist": "Synovial joint structure (small joints of hand/wrist)",
    "circle-of-willis-and-cerebral-vascular-territories": "Circle of Willis and cerebral vascular territories"
  },
  physiology: {
    "visceral-referred-pain-pathway-periumbilical-t10": "Visceral referred pain pathway (periumbilical → T10)",
    "cardiac-conduction-system": "Cardiac conduction system",
    "frank-starling-mechanism": "Frank–Starling mechanism",
    "myocardial-oxygen-supply-demand-balance": "Myocardial oxygen supply-demand balance",
    "ventilation-perfusion-relationships-in-apex-vs-base": "Ventilation-perfusion relationships in apex vs base",
    "insulin-signaling-and-glut4-translocation": "Insulin signaling and GLUT4 translocation",
    "counter-regulatory-hormones": "Counter-regulatory hormones",
    "alveolar-gas-exchange-impairment-shunt-physiology": "Alveolar gas exchange impairment (shunt physiology)",
    "glomerular-filtration-rate-regulation": "Glomerular filtration rate regulation",
    "erythropoietin-production-by-kidney": "Erythropoietin production by kidney",
    "csf-production-circulation-and-blood-brain-barrier": "CSF production/circulation and blood-brain barrier",
    "livers-synthetic-detoxification-functions": "Liver's synthetic/detoxification functions",
    "ammonia-handling": "Ammonia handling",
    "normal-synovial-fluid-function": "Normal synovial fluid function",
    "cerebral-autoregulation-of-blood-flow": "Cerebral autoregulation of blood flow"
  },
  biochemistry: {
    "acute-phase-reactants-crp-raised-neutrophils": "Acute-phase reactants (CRP, raised neutrophils)",
    "cardiac-troponin-i-t-kinetics": "Cardiac troponin I/T kinetics",
    "ck-mb": "CK-MB",
    "atherogenic-lipid-profile-ldl-oxidation": "Atherogenic lipid profile (LDL oxidation)",
    "mycolic-acid-cell-wall-acid-fastness-basis": "Mycolic acid cell wall (acid-fastness basis)",
    "insulin-resistance-mechanisms": "Insulin resistance mechanisms",
    "hba1c-glycation-chemistry": "HbA1c glycation chemistry",
    "advanced-glycation-end-products": "Advanced glycation end-products",
    "inflammatory-mediators-il-6-procalcitonin": "Inflammatory mediators (IL-6, procalcitonin)",
    "urea-creatinine-handling": "Urea/creatinine handling",
    "metabolic-acidosis-and-electrolyte-derangement": "Metabolic acidosis and electrolyte derangement",
    "calcium-phosphate-pth-axis": "Calcium-phosphate-PTH axis",
    "csf-glucose-protein-changes-in-bacterial-vs-viral-meningitis": "CSF glucose/protein changes in bacterial vs viral meningitis",
    "deranged-lfts-albumin-bilirubin-coagulation-factors": "Deranged LFTs (albumin, bilirubin, coagulation factors)",
    "bile-pigment-metabolism": "Bile pigment metabolism",
    "rheumatoid-factor-and-anti-ccp-antibodies": "Rheumatoid factor and anti-CCP antibodies",
    "inflammatory-cytokines-tnf-il-6": "Inflammatory cytokines (TNF-α, IL-6)",
    "excitotoxic-cascade-glutamate-in-ischemic-penumbra": "Excitotoxic cascade (glutamate) in ischemic penumbra"
  },
  pathology: {
    "luminal-obstruction-fecolith-distension-ischemia-gangrene-pe": "Luminal obstruction (fecolith) → distension → ischemia → gangrene → perforation",
    "atherosclerotic-plaque-rupture-thrombus-coronary-occlusion-c": "Atherosclerotic plaque rupture → thrombus → coronary occlusion → coagulative necrosis",
    "caseating-granuloma-formation": "Caseating granuloma formation",
    "ghon-focus-complex": "Ghon focus/complex",
    "post-primary-reactivation": "Post-primary reactivation",
    "progressive-beta-cell-dysfunction": "Progressive beta-cell dysfunction",
    "microvascular-vs-macrovascular-disease": "Microvascular vs macrovascular disease",
    "stages-of-lobar-pneumonia-congestion-red-hepatization-grey-h": "Stages of lobar pneumonia: congestion → red hepatization → grey hepatization → resolution",
    "progressive-nephron-loss-glomerulosclerosis": "Progressive nephron loss → glomerulosclerosis",
    "secondary-hyperparathyroidism-renal-osteodystrophy": "Secondary hyperparathyroidism (renal osteodystrophy)",
    "purulent-exudate-in-subarachnoid-space": "Purulent exudate in subarachnoid space",
    "raised-intracranial-pressure-mechanism": "Raised intracranial pressure mechanism",
    "fibrosis-with-regenerative-nodules-replacing-normal-architec": "Fibrosis with regenerative nodules replacing normal architecture",
    "portal-hypertension-mechanism": "Portal hypertension mechanism",
    "synovial-pannus-formation-eroding-cartilage-and-bone": "Synovial pannus formation eroding cartilage and bone",
    "ischemic-infarction-vs-intracerebral-hemorrhage-mechanisms": "Ischemic infarction vs intracerebral hemorrhage mechanisms"
  }
};
