// concepts-symptoms.js
// Concept pool of patient-reported symptoms, keyed by a stable id.
// id -> human-readable label. Referenced by disease-relations-data.js.
// TO ADD A NEW SYMPTOM: add a new "kebab-case-id": "Label" entry below.
// Reuse an existing id whenever the same symptom applies to another disease —
// only add a new entry here if the concept genuinely does not exist yet.

const SYMPTOMS = {
  "periumbilical-pain-migrating-to-right-iliac-fossa": "Periumbilical pain migrating to right iliac fossa",
  "anorexia": "Anorexia",
  "nausea-and-vomiting": "Nausea and vomiting",
  "low-grade-fever": "Low-grade fever",
  "crushing-central-chest-pain-radiating-to-left-arm-jaw": "Crushing central chest pain radiating to left arm/jaw",
  "diaphoresis": "Diaphoresis",
  "breathlessness": "Breathlessness",
  "nausea": "Nausea",
  "chronic-cough-2-weeks": "Chronic cough > 2 weeks",
  "evening-rise-of-temperature": "Evening rise of temperature",
  "night-sweats": "Night sweats",
  "weight-loss": "Weight loss",
  "hemoptysis": "Hemoptysis",
  "polyuria": "Polyuria",
  "polydipsia": "Polydipsia",
  "polyphagia": "Polyphagia",
  "unexplained-weight-loss": "Unexplained weight loss",
  "fatigue": "Fatigue",
  "blurred-vision": "Blurred vision",
  "fever-with-chills": "Fever with chills",
  "productive-cough": "Productive cough",
  "pleuritic-chest-pain": "Pleuritic chest pain",
  "pruritus": "Pruritus",
  "reduced-urine-output": "Reduced urine output",
  "severe-headache": "Severe headache",
  "neck-stiffness": "Neck stiffness",
  "photophobia": "Photophobia",
  "vomiting": "Vomiting",
  "altered-consciousness": "Altered consciousness",
  "abdominal-distension": "Abdominal distension",
  "easy-bruising": "Easy bruising",
  "confusion-late": "Confusion (late)",
  "symmetric-small-joint-pain": "Symmetric small joint pain",
  "morning-stiffness-1-hour": "Morning stiffness > 1 hour",
  "sudden-weakness-one-side-of-body": "Sudden weakness one side of body",
  "slurred-speech": "Slurred speech",
  "facial-droop": "Facial droop",
  "sudden-severe-headache-hemorrhagic": "Sudden severe headache (hemorrhagic)"
};
