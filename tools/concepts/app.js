/* ============================================================
   Vibe Rounds — app.js
   Builds every feature purely from window.DISEASE_RELATIONS.
   ============================================================ */

(function(){
"use strict";

const RAW = (typeof DISEASE_RELATIONS !== "undefined") ? DISEASE_RELATIONS : {};

function humanize(id){
  if(!id) return "";
  return id.toString()
    .replace(/-/g," ")
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\bIp\b/,"IP").replace(/\bA1\b/,"A1").replace(/\bMri\b/,"MRI")
    .replace(/\bCt\b/,"CT").replace(/\bGi\b/,"GI").replace(/\bIv\b/,"IV")
    .replace(/\bHiv\b/,"HIV").replace(/\bPcr\b/,"PCR").replace(/\bEcg\b/,"ECG")
    .replace(/\bCgrp\b/,"CGRP").replace(/\bNsaids\b/,"NSAIDs").replace(/\bS1\b/,"S1")
    .replace(/\bL5\b/,"L5");
}
function slugify(name){
  return name.toString().toLowerCase()
    .replace(/\([^)]*\)/g,"")
    .replace(/[^a-z0-9]+/g,"-")
    .replace(/(^-|-$)/g,"");
}

// ---------- normalize dataset ----------
const DISEASES = Object.keys(RAW).map(name=>{
  const d = RAW[name];
  return {
    name,
    slug: slugify(name),
    subject: d.subject||"",
    tier: d.tier||"common",
    system: d.system||"Unclassified",
    labels: d.labels||{},
    riskFactors: d.riskFactors||[],
    symptoms: d.symptoms||[],
    signs: d.signs||[],
    redFlags: d.redFlags||[],
    differentialDiagnoses: d.differentialDiagnoses||[],
    diagnosticCriteria: d.diagnosticCriteria||[],
    investigations: d.investigations||[],
    advancedInvestigations: d.advancedInvestigations||[],
    relatedTopics: d.relatedTopics||{anatomy:[],physiology:[],biochemistry:[],pathology:[]},
    management: d.management||{pharmacology:[],surgery:[],psychology:[],lifestyle:[]},
    contraindications: d.contraindications||[],
    complications: d.complications||[],
    findingSet: new Set([...(d.symptoms||[]), ...(d.signs||[])])
  };
});
const BY_NAME = new Map(DISEASES.map(d=>[d.name,d]));
const BY_SLUG = new Map(DISEASES.map(d=>[d.slug,d]));

// concept id -> humanized label (first-seen wins), plus id -> Set(diseaseNames) for symptoms/signs
const FINDING_LABEL = new Map();
const FINDING_TO_DISEASES = new Map(); // finding id -> [{name, via:'symptom'|'sign'}]
DISEASES.forEach(d=>{
  d.symptoms.forEach(id=>{
    if(!FINDING_LABEL.has(id)) FINDING_LABEL.set(id, humanize(id));
    if(!FINDING_TO_DISEASES.has(id)) FINDING_TO_DISEASES.set(id, []);
    FINDING_TO_DISEASES.get(id).push({name:d.name, via:"symptom"});
  });
  d.signs.forEach(id=>{
    if(!FINDING_LABEL.has(id)) FINDING_LABEL.set(id, humanize(id));
    if(!FINDING_TO_DISEASES.has(id)) FINDING_TO_DISEASES.set(id, []);
    FINDING_TO_DISEASES.get(id).push({name:d.name, via:"sign"});
  });
});
const ALL_FINDING_IDS = Array.from(FINDING_LABEL.keys()).sort((a,b)=>FINDING_LABEL.get(a).localeCompare(FINDING_LABEL.get(b)));

const ALL_SYSTEMS = Array.from(new Set(DISEASES.map(d=>d.system))).sort();

function populateSystemFilters(){
  ["tutorSystemFilter"].forEach(id=>{
    const sel = document.getElementById(id);
    if(!sel) return;
    ALL_SYSTEMS.forEach(s=>{
      const o=document.createElement("option"); o.value=s; o.textContent=s; sel.appendChild(o);
    });
  });
}
populateSystemFilters();

document.getElementById("diseaseCount").textContent = DISEASES.length;
document.getElementById("conceptCount").textContent = FINDING_LABEL.size;

// ---------- similarity (Jaccard over symptoms+signs) ----------
function jaccard(a,b){
  if(a.size===0 || b.size===0) return 0;
  let inter=0;
  const [small,big] = a.size<b.size?[a,b]:[b,a];
  small.forEach(x=>{ if(big.has(x)) inter++; });
  const union = a.size + b.size - inter;
  return union===0?0:inter/union;
}
function sharedFindings(a,b){
  const out=[];
  a.findingSet.forEach(x=>{ if(b.findingSet.has(x)) out.push(x); });
  return out;
}
// neighbor cache
const NEIGHBORS = new Map(); // name -> [{name, score}], sorted desc
DISEASES.forEach(d=>{
  const scored = DISEASES.filter(o=>o!==d).map(o=>({name:o.name, score:jaccard(d.findingSet,o.findingSet)}))
    .filter(x=>x.score>0)
    .sort((a,b)=>b.score-a.score);
  NEIGHBORS.set(d.name, scored);
});

// ============================================================
// TAB NAV
// ============================================================
document.getElementById("tabNav").addEventListener("click", e=>{
  const btn = e.target.closest("button[data-tab]");
  if(!btn) return;
  document.querySelectorAll("nav.tabs button").forEach(b=>b.classList.remove("active"));
  document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("panel-"+btn.dataset.tab).classList.add("active");
});

function labelHtml(d){
  const L = d.labels||{};
  const rows = [
    ["Onset",L.onset],["Course",L.course],["Severity",L.severity],
    ["Mortality",L.mortality],["Curable",L.curable],["Treatment",L.treatment],
    ["Contagious", L.contagious===true?"Yes":(L.contagious===false?"No":"—")],
    ["Reversible", L.reversible===true?"Yes":(L.reversible===false?"No":"—")]
  ];
  return `<div class="label-grid">` + rows.map(([k,v])=>`<div><span>${k}:</span> <b>${v||"—"}</b></div>`).join("") + `</div>`;
}

function chipList(ids, cls){
  if(!ids || !ids.length) return `<span style="color:var(--paper-dim);font-size:12px;">none documented</span>`;
  return ids.map(id=>`<span class="chip ${cls||""}">${humanize(id)}</span>`).join("");
}

function diseaseCardHtml(d, opts){
  opts = opts||{};
  const highlight = opts.highlight || new Set();
  const mkChips = (ids)=> (ids&&ids.length) ? ids.map(id=>`<span class="chip ${highlight.has(id)?"match":""}">${humanize(id)}</span>`).join("") : `<span style="color:var(--paper-dim);font-size:12px;">none documented</span>`;
  return `
    <div class="disease-head">
      <div>
        <h3>${d.name}</h3>
        <div class="meta">${d.subject} · ${d.system}</div>
      </div>
      <span class="pill tier-${d.tier}">${d.tier.replace(/([A-Z])/g," $1").trim()}</span>
    </div>
    ${labelHtml(d)}
    <div class="section-label">Symptoms</div><div>${mkChips(d.symptoms)}</div>
    <div class="section-label">Signs</div><div>${mkChips(d.signs)}</div>
    ${d.redFlags.length?`<div class="section-label">Red flags</div><div>${mkChips(d.redFlags)}</div>`:""}
    <div class="section-label">Investigations</div><div>${mkChips(d.investigations)}</div>
    ${d.advancedInvestigations.length?`<div class="section-label">Advanced / tertiary</div><div>${mkChips(d.advancedInvestigations)}</div>`:""}
    <div class="section-label">Management</div>
    <div>${mkChips([...(d.management.pharmacology||[]),...(d.management.surgery||[]),...(d.management.psychology||[]),...(d.management.lifestyle||[])])}</div>
    ${d.complications.length?`<div class="section-label">Complications</div><div>${mkChips(d.complications)}</div>`:""}
  `;
}

// ============================================================
// 01 DIFFERENTIAL EXPLORER
// ============================================================
const diffList = document.getElementById("diffList");
DISEASES.forEach(d=>{ const o=document.createElement("option"); o.value=d.name; diffList.appendChild(o); });

function resolveDiffId(id){
  // try to match a documented differential id to an actual disease in the dataset
  const cleaned = id.replace(/-differential$/,"");
  if(BY_SLUG.has(cleaned)) return BY_SLUG.get(cleaned);
  // fuzzy: find slug that starts with cleaned or vice versa
  for(const [slug, d] of BY_SLUG){
    if(slug===cleaned || slug.startsWith(cleaned) || cleaned.startsWith(slug)) return d;
  }
  return null;
}

function renderDifferential(name){
  const d = BY_NAME.get(name);
  const out = document.getElementById("diffOutput");
  if(!d){ out.innerHTML = `<div class="empty">Type a condition name to explore its differentials</div>`; return; }
  const docDiffs = d.differentialDiagnoses.map(id=>{
    const match = resolveDiffId(id);
    return {id, match};
  });
  const computed = (NEIGHBORS.get(d.name)||[]).slice(0,8);

  out.innerHTML = `
    <div class="grid-2">
      <div class="card">${diseaseCardHtml(d)}</div>
      <div>
        <div class="card" style="margin-bottom:16px;">
          <div class="section-label" style="margin-top:0;">Documented differentials</div>
          ${docDiffs.length ? docDiffs.map(x=>`
            <div class="chip ${x.match?"click":""}" ${x.match?`data-jump="${x.match.name}"`:""} style="margin-bottom:6px;">
              ${x.match ? x.match.name : humanize(x.id)}
            </div>`).join("") : `<div class="empty" style="padding:8px 0;">None documented</div>`}
        </div>
        <div class="card">
          <div class="section-label" style="margin-top:0;">Algorithmically similar (shared symptoms/signs)</div>
          ${computed.length? computed.map(n=>{
            const nd = BY_NAME.get(n.name);
            const shared = sharedFindings(d, nd);
            return `<div style="margin-bottom:12px;">
              <div class="chip click" data-jump="${n.name}" style="font-weight:500;">${n.name} · ${(n.score*100).toFixed(0)}%</div>
              <div style="margin-top:5px;">${shared.map(id=>`<span class="chip match">${humanize(id)}</span>`).join("")}</div>
            </div>`;
          }).join("") : `<div class="empty" style="padding:8px 0;">No strong matches found</div>`}
        </div>
      </div>
    </div>
  `;
}
document.getElementById("diffOutput").addEventListener("click", e=>{
  const jump = e.target.closest("[data-jump]");
  if(jump){ document.getElementById("diffSearch").value = jump.dataset.jump; renderDifferential(jump.dataset.jump); }
});
document.getElementById("diffSearch").addEventListener("input", e=>{
  const v = e.target.value.trim();
  if(BY_NAME.has(v)) renderDifferential(v);
  else document.getElementById("diffOutput").innerHTML = `<div class="empty">Keep typing or pick an exact match from the list…</div>`;
});

// ============================================================
// 02 SYMPTOM CHECKER
// ============================================================
const selectedFindings = new Set();
function renderSymptomPool(filter){
  const pool = document.getElementById("symptomPool");
  const f = (filter||"").toLowerCase();
  const ids = ALL_FINDING_IDS.filter(id=> !f || FINDING_LABEL.get(id).toLowerCase().includes(f));
  pool.innerHTML = ids.slice(0,400).map(id=>{
    const sel = selectedFindings.has(id);
    return `<span class="chip click ${sel?"selected":""}" data-id="${id}">${FINDING_LABEL.get(id)}</span>`;
  }).join("");
}
document.getElementById("symptomPool").addEventListener("click", e=>{
  const chip = e.target.closest("[data-id]");
  if(!chip) return;
  const id = chip.dataset.id;
  if(selectedFindings.has(id)) selectedFindings.delete(id); else selectedFindings.add(id);
  renderSymptomPool(document.getElementById("checkerSearch").value);
  renderSelectedAndResults();
});
document.getElementById("checkerSearch").addEventListener("input", e=>renderSymptomPool(e.target.value));
document.getElementById("clearSel").addEventListener("click", ()=>{
  selectedFindings.clear();
  renderSymptomPool(document.getElementById("checkerSearch").value);
  renderSelectedAndResults();
});

function renderSelectedAndResults(){
  document.getElementById("selCount").textContent = selectedFindings.size;
  const chipsWrap = document.getElementById("selectedChips");
  chipsWrap.innerHTML = Array.from(selectedFindings).map(id=>
    `<span class="chip selected click" data-id="${id}">${FINDING_LABEL.get(id)} ✕</span>`).join("");
  const results = document.getElementById("checkerResults");
  if(selectedFindings.size===0){ results.innerHTML = `<div class="empty">Select findings to see ranked results</div>`; return; }
  const ranked = DISEASES.map(d=>{
    let hits=0;
    selectedFindings.forEach(id=>{ if(d.findingSet.has(id)) hits++; });
    return {d, hits, pct: hits/selectedFindings.size};
  }).filter(x=>x.hits>0).sort((a,b)=> b.hits-a.hits || b.pct-a.pct);

  results.innerHTML = ranked.slice(0,25).map(r=>`
    <div class="rank-row">
      <div class="bar-wrap">
        <div class="name" data-jump="${r.d.name}">${r.d.name} <span style="color:var(--paper-dim);font-family:var(--mono);font-size:11px;">· ${r.d.system}</span></div>
        <div class="bar-bg"><div class="bar-fill" style="width:${(r.pct*100).toFixed(0)}%"></div></div>
      </div>
      <div class="pct">${r.hits}/${selectedFindings.size}</div>
    </div>
  `).join("");
}
document.getElementById("selectedChips").addEventListener("click", e=>{
  const chip = e.target.closest("[data-id]");
  if(!chip) return;
  selectedFindings.delete(chip.dataset.id);
  renderSymptomPool(document.getElementById("checkerSearch").value);
  renderSelectedAndResults();
});
document.getElementById("checkerResults").addEventListener("click", e=>{
  const jump = e.target.closest("[data-jump]");
  if(!jump) return;
  document.querySelectorAll("nav.tabs button").forEach(b=>b.classList.remove("active"));
  document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
  document.querySelector('nav.tabs button[data-tab="differential"]').classList.add("active");
  document.getElementById("panel-differential").classList.add("active");
  document.getElementById("diffSearch").value = jump.dataset.jump;
  renderDifferential(jump.dataset.jump);
});
renderSymptomPool("");

// ============================================================
// 03 REVERSE DIAGNOSIS  ("show diseases causing hematuria")
// ============================================================
const EXAMPLES = ["hematuria","photophobia","koilonychia","jaundice","dyspnea","hemoptysis","dysphagia"];
document.getElementById("exampleChips").innerHTML = EXAMPLES.map(x=>`<span class="chip click" data-ex="${x}">${x}</span>`).join("");
document.getElementById("exampleChips").addEventListener("click", e=>{
  const c = e.target.closest("[data-ex]"); if(!c) return;
  document.getElementById("reverseSearch").value = c.dataset.ex;
  runReverseSearch(c.dataset.ex);
});

function runReverseSearch(query){
  const out = document.getElementById("reverseOutput");
  const q = query.trim().toLowerCase().replace(/^show (diseases|conditions) (causing|with|that cause)\s*/,"");
  if(!q){ out.innerHTML = `<div class="empty">Try “show diseases causing hematuria”, or just type a finding</div>`; return; }

  const matchedFindingIds = ALL_FINDING_IDS.filter(id => FINDING_LABEL.get(id).toLowerCase().includes(q) || id.includes(q.replace(/\s+/g,"-")));
  if(matchedFindingIds.length===0){
    out.innerHTML = `<div class="empty">No documented finding matches “${query}”. Try a shorter or different term.</div>`;
    return;
  }
  // gather diseases per matched finding id
  const grouped = matchedFindingIds.map(id=>{
    const diseaseHits = FINDING_TO_DISEASES.get(id)||[];
    return {id, diseaseHits};
  }).filter(g=>g.diseaseHits.length);

  out.innerHTML = grouped.map(g=>`
    <div class="section-label" style="margin-top:22px;">${FINDING_LABEL.get(g.id)} <span style="color:var(--paper-dim);">— ${g.diseaseHits.length} condition${g.diseaseHits.length>1?"s":""}</span></div>
    ${g.diseaseHits.map(h=>{
      const d = BY_NAME.get(h.name);
      return `<div class="rd-result">
        <h4 class="chip click" data-jump="${d.name}" style="display:inline-block;">${d.name}</h4>
        <span class="pill tier-${d.tier}" style="margin-left:6px;">${d.tier}</span>
        <div class="hitline">${d.system} · appears as <b>${h.via}</b></div>
      </div>`;
    }).join("")}
  `).join("");
}
document.getElementById("reverseSearch").addEventListener("input", e=>runReverseSearch(e.target.value));
document.getElementById("reverseOutput").addEventListener("click", e=>{
  const jump = e.target.closest("[data-jump]"); if(!jump) return;
  document.querySelector('nav.tabs button[data-tab="differential"]').click();
  document.getElementById("diffSearch").value = jump.dataset.jump;
  renderDifferential(jump.dataset.jump);
});

// ============================================================
// 04 CLINICAL REASONING TUTOR
// ============================================================
let score = {correct:0, total:0};
let currentCase = null;
let answered = false;

function pickDistractors(correct, n){
  let pool = DISEASES.filter(d=>d!==correct && d.system===correct.system);
  if(pool.length < n) pool = DISEASES.filter(d=>d!==correct);
  const out = [];
  const shuffled = pool.slice().sort(()=>Math.random()-0.5);
  for(const d of shuffled){ if(out.length>=n) break; out.push(d); }
  return out;
}

function newCase(){
  const sysFilter = document.getElementById("tutorSystemFilter").value;
  const tierFilter = document.getElementById("tutorTierFilter").value;
  let pool = DISEASES.filter(d => (!sysFilter||d.system===sysFilter) && (!tierFilter||d.tier===tierFilter) && (d.symptoms.length||d.signs.length));
  if(pool.length===0) pool = DISEASES;
  const d = pool[Math.floor(Math.random()*pool.length)];
  const distractors = pickDistractors(d, 3);
  const options = [d, ...distractors].sort(()=>Math.random()-0.5);
  currentCase = {d, options};
  answered = false;
  renderCase();
}

function renderCase(){
  const stage = document.getElementById("tutorStage");
  const d = currentCase.d;
  const clues = [];
  if(d.riskFactors.length) clues.push(`<b>Risk factors:</b> ${d.riskFactors.map(humanize).join(", ")}`);
  clues.push(`<b>System:</b> ${d.system} &nbsp; <b>Tier:</b> ${d.tier}`);
  if(d.symptoms.length) clues.push(`<b>Presenting symptoms:</b> ${d.symptoms.map(humanize).join(", ")}`);
  if(d.signs.length) clues.push(`<b>Examination findings:</b> ${d.signs.map(humanize).join(", ")}`);

  stage.innerHTML = `
    <div>${clues.map(c=>`<div class="clue">${c}</div>`).join("")}</div>
    <div class="section-label">What is the diagnosis?</div>
    <div class="options" id="optionsWrap">
      ${currentCase.options.map(o=>`<button class="opt-btn" data-name="${o.name}">${o.name}</button>`).join("")}
    </div>
    <div id="revealWrap"></div>
  `;
}

document.getElementById("tutorStage").addEventListener("click", e=>{
  const btn = e.target.closest(".opt-btn");
  if(btn && !answered){
    answered = true;
    score.total++;
    const chosen = btn.dataset.name;
    const correct = currentCase.d.name;
    if(chosen===correct) score.correct++;
    document.querySelectorAll(".opt-btn").forEach(b=>{
      b.disabled = true;
      if(b.dataset.name===correct) b.classList.add("correct");
      else if(b.dataset.name===chosen) b.classList.add("wrong");
    });
    document.getElementById("scoreVal").textContent = score.correct;
    document.getElementById("scoreTotal").textContent = score.total;
    revealCase();
  }
});

function revealCase(){
  const d = currentCase.d;
  document.getElementById("revealWrap").innerHTML = `
    <div class="reveal-block">
      <div class="reveal-title">${d.name}</div>
      <div class="meta" style="color:var(--paper-dim);font-family:var(--mono);font-size:12px;margin-bottom:10px;">${d.subject} · ${d.system}</div>
      ${labelHtml(d)}
      ${d.redFlags.length?`<div class="section-label">Red flags</div><div>${chipList(d.redFlags)}</div>`:""}
      <div class="section-label">Investigations</div><div>${chipList(d.investigations)}</div>
      <div class="section-label">Documented differentials</div><div>${chipList(d.differentialDiagnoses)}</div>
      <div class="section-label">Management</div>
      <div>${chipList([...(d.management.pharmacology||[]),...(d.management.surgery||[]),...(d.management.psychology||[]),...(d.management.lifestyle||[])])}</div>
      ${d.complications.length?`<div class="section-label">Complications</div><div>${chipList(d.complications)}</div>`:""}
      <div style="margin-top:20px;"><button class="btn" id="nextCase">Next case →</button></div>
    </div>
  `;
  document.getElementById("nextCase").addEventListener("click", newCase);
}
document.getElementById("newCase").addEventListener("click", newCase);

// initial state for other tabs
document.getElementById("diffOutput").innerHTML = `<div class="empty">Type a condition name above to explore its differentials</div>`;
runReverseSearch("");

})();
