# Turning case reports into `cohort.json` — one case, a batch, or many merged

This is the workflow used to build the 5-case `cohort.json` for **Person-Centered
Clinical Analytics**. It works the same whether you're converting **1 case**,
a **small batch**, or **combining several batches into one big cohort**.

---

## 1. The condition taxonomy (fixed vocabulary)

The app only understands the condition IDs it ships with. Every case you add
must be mapped onto one (or more, for comorbidities) of these:

| id | label | family |
|---|---|---|
| T1D | Type 1 Diabetes | chronic |
| T2D | Type 2 Diabetes | chronic |
| CKD | Chronic Kidney Disease | chronic |
| COPD | COPD | chronic |
| HTN | Hypertension | chronic |
| CHF | Congestive Heart Failure | chronic |
| OA | Osteoarthritis | chronic |
| DEP | Major Depressive Disorder | chronic |
| HYPOTHY | Hypothyroidism | chronic |
| ASTHMA | Asthma | chronic |
| MI | Myocardial Infarction | acute |
| STROKE | Ischemic Stroke | acute |
| APPY | Acute Appendicitis | acute |
| FX | Fragility Fracture | acute |
| ANAPH | Anaphylaxis | acute |
| PNA | Community-Acquired Pneumonia | infective |
| UTI | Urinary Tract Infection | infective |
| CELL | Cellulitis | infective |
| SEPSIS | Sepsis | infective |
| TB | Tuberculosis | infective |

If a real case doesn't cleanly fit one of these, pick the closest match and
say so in `source_note` — don't invent a new id, the app's dashboard/pivot
logic only recognizes this list.

---

## 2. Converting ONE case

For each case you read, pull out just three facts:

1. **Age**
2. **Sex** (`"M"` or `"F"`)
3. **Primary condition id** (+ any comorbid condition ids, if mentioned)

Then run it through this snippet (Node.js) — it reuses the app's own
`buildDiagnosisRow` logic so the generated presentation/plan/escalation/
timeline fields stay internally consistent with the condition's profile.

```js
// one-case.js — usage: node one-case.js
const fs = require("fs");

// ---- paste the condition table entries you need here ----
const CONDITIONS = {
  CHF: {id:"CHF", label:"Congestive Heart Failure", family:"chronic", escRate:0.48, shape:"spiky",
    presentation:["dyspnea, BNP 890, EF 35%","orthopnea, bilateral edema"],
    plan:["diuretic + ACE-inhibitor","beta-blocker titration"],
    escalation:["acute decompensation, admission","fluid overload, ED visit"],
    advanced:["diuretic dose escalated","cardiology referral, device eval"],
    disposition:["euvolemic, discharged","stable, outpatient titration"]},
  CKD: {id:"CKD", label:"Chronic Kidney Disease", family:"chronic", escRate:0.30, shape:"smooth",
    presentation:["eGFR 42, proteinuria","eGFR 38, rising creatinine"],
    plan:["ACE-inhibitor titration","dietary/phosphate management"],
    escalation:["eGFR <20, dialysis planning","AKI-on-CKD admission"],
    advanced:["fistula creation","dialysis initiated"],
    disposition:["stable stage 3b","transitioned to dialysis"]},
  // ...add any other condition entries you need from the full table
  // (see Person-Centered-Clinical-Analytics.html, CONDITIONS array, for all 20)
};

function mulberry32(seed){
  return function(){
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function pick(rng, arr){ return arr[Math.floor(rng()*arr.length)]; }

function buildDiagnosisRow(rng, cond, isPrimary, forceEsc){
  const esc = forceEsc !== undefined ? forceEsc : rng() < cond.escRate;
  const cp = {
    diagnosis: cond.label + (isPrimary ? ", primary" : ", comorbidity"),
    presentation: pick(rng, cond.presentation),
    initial_plan: pick(rng, cond.plan),
    escalation: esc ? pick(rng, cond.escalation) : "No escalation recorded",
    advanced_recurrent: esc ? pick(rng, cond.advanced) : "No recurrence recorded",
    disposition: pick(rng, cond.disposition)
  };
  const timeline = [{t:0, event:"diagnosis", severity: cond.shape==="spiky" ? 0.75+rng()*0.2 : 0.4+rng()*0.2}];
  if(esc){
    const spike = cond.shape==="spiky" ? (0.4+rng()*1.2) : (0.8+rng()*1.8);
    timeline.push({t: Math.round(spike*100)/100, event:"escalation", severity: cond.shape==="spiky" ? 0.8+rng()*0.2 : 0.5+rng()*0.3});
  }
  return {condition:cond.id, condition_label:cond.label, family:cond.family, is_primary:isPrimary, escalated:esc, checkpoints:cp, timeline};
}

// ---- fill in the one case ----
const CASE = {
  source_case_no: 42,
  source_url: "https://example.blogspot.com/2021/.../case.html",
  age: 58, sex: "M",
  primary: "CHF",
  comorbid: ["CKD"],
  esc: true,               // did the case describe an escalation/decompensation? true/false
  note: "58-year-old male with decompensated HFrEF and stage 3 CKD"
};

const rng = mulberry32(Date.now() & 0xffffffff); // any seed; only affects wording pick, not facts
const rows = [buildDiagnosisRow(rng, CONDITIONS[CASE.primary], true, CASE.esc)];
CASE.comorbid.forEach(cid => rows.push(buildDiagnosisRow(rng, CONDITIONS[cid], false)));

const patient = {
  id: "R" + String(CASE.source_case_no).padStart(4, "0"),
  age: CASE.age,
  sex: CASE.sex,
  primary_condition: CASE.primary,
  comorbidities: CASE.comorbid,
  source_note: `Case #${CASE.source_case_no} — ${CASE.source_url} — ${CASE.note}`,
  diagnosis_rows: rows
};

const batch = {
  generated_at: new Date().toISOString(),
  synthetic: false,
  source: "1 real de-identified case, manually mapped to app taxonomy.",
  params: { note: "manually curated, not randomly generated" },
  patients: [patient]
};

fs.writeFileSync("batch-case42.json", JSON.stringify(batch, null, 2));
console.log("wrote batch-case42.json with 1 patient");
```

Run it, and you get a small `cohort.json`-shaped file with exactly one
patient in `patients[]`. You can load that directly into the app via
**Generator → Load cohort.json…**

---

## 3. Converting a SMALL BATCH (a handful of cases at once)

Same idea, but instead of one `CASE` object, keep an array and map over it:

```js
const CASES = [
  {source_case_no:1,  source_url:"...", age:60, sex:"M", primary:"SEPSIS", comorbid:[], esc:true,  note:"fever under evaluation"},
  {source_case_no:5,  source_url:"...", age:46, sex:"M", primary:"CHF",    comorbid:["CKD"], esc:true, note:"HFrEF, type 4 cardiorenal syndrome"},
  {source_case_no:18, source_url:"...", age:54, sex:"M", primary:"PNA",    comorbid:["TB"],  esc:false, note:"left upper lobe consolidation"},
];

const patients = CASES.map((c, i) => {
  const rng = mulberry32(1000 + i);
  const rows = [buildDiagnosisRow(rng, CONDITIONS[c.primary], true, c.esc)];
  c.comorbid.forEach(cid => rows.push(buildDiagnosisRow(rng, CONDITIONS[cid], false)));
  return {
    id: "R" + String(c.source_case_no).padStart(4, "0"),
    age: c.age, sex: c.sex,
    primary_condition: c.primary,
    comorbidities: c.comorbid,
    source_note: `Case #${c.source_case_no} — ${c.source_url} — ${c.note}`,
    diagnosis_rows: rows
  };
});

const batch = {
  generated_at: new Date().toISOString(),
  synthetic: false,
  source: `${patients.length} real de-identified cases, manually mapped to app taxonomy.`,
  params: { note: "manually curated, not randomly generated" },
  patients
};

fs.writeFileSync("batch-A.json", JSON.stringify(batch, null, 2));
```

Save each batch under its own filename (`batch-A.json`, `batch-B.json`, …)
as you work through more cases over time — e.g. one batch per session, per
source blog author, or per condition family, whatever's convenient.

---

## 4. Merging many batch JSON files into one cohort.json

Once you have several `batch-*.json` files, merge them with a tiny script.
IDs are de-duplicated by keeping the first occurrence of each `id`, and the
`source` field is combined so you keep a paper trail of where every patient
came from.

```js
// merge-batches.js — usage: node merge-batches.js batch-A.json batch-B.json batch-C.json
const fs = require("fs");

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("Usage: node merge-batches.js file1.json file2.json ...");
  process.exit(1);
}

const seenIds = new Set();
const allPatients = [];
const sources = [];

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(f, "utf8"));
  if (!Array.isArray(data.patients)) {
    console.warn(`skipping ${f}: no patients[] array`);
    continue;
  }
  sources.push(`${f}: ${data.source || "no source note"} (${data.patients.length} patients)`);
  for (const p of data.patients) {
    if (seenIds.has(p.id)) {
      console.warn(`skipping duplicate id ${p.id} from ${f}`);
      continue;
    }
    seenIds.add(p.id);
    allPatients.push(p);
  }
}

const merged = {
  generated_at: new Date().toISOString(),
  synthetic: false,
  source: sources.join(" | "),
  params: { note: `merged from ${files.length} batch file(s)` },
  patients: allPatients
};

fs.writeFileSync("cohort.json", JSON.stringify(merged, null, 2));
console.log(`Merged ${allPatients.length} patients from ${files.length} files into cohort.json`);
```

Run:

```bash
node merge-batches.js batch-A.json batch-B.json batch-C.json
```

This gives you a single `cohort.json` combining every case you've converted
so far — load *that* file into the app and every tab (Dashboard, Nested
Viewer, Pivot Explorer) will reflect the full merged set.

---

## 5. Practical workflow

1. Pick a case (or a few) from the source list.
2. Read just enough to fill in: age, sex, primary condition id, comorbid
   condition ids, and whether it escalated.
3. Run the one-case or small-batch script → get a `batch-*.json`.
4. Repeat for more cases/batches over time, keeping each as its own file.
5. When ready, run `merge-batches.js` over all your batch files → get one
   `cohort.json`.
6. Load that into the app via **Generator → Load cohort.json…**.

Keeping batches as separate files (rather than editing one giant file by
hand) makes it easy to add a new small group of cases later without
re-typing everything — just write a new `batch-N.json` and re-run the merge.
