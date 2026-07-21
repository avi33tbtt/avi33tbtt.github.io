# VIBE ROUNDS TERMINAL — Case-to-Terminal Generator

## How to use this file (only file you need)
Attach **only this MD file** in a new chat, together with your case (paste the case text, or a link to it). Then say:

> "Using this file, build a Vibe Rounds Terminal for this case: [paste case text or link]."

The assistant should read the instructions and the full reference template below, then output **one new self-contained `.html` file** with the same design, layout, and interactivity — populated with content from your case.

---

## Instructions for the assistant building the terminal

Below is the complete reference implementation, `vibe_rounds_terminal.html`, wrapped in a code block. Treat it as ground truth for **design language, CSS, layout, panel structure, and all JS mechanics**. Do not redesign it.

1. Copy the reference file's `<style>` block, overall HTML skeleton (topbar, ticker, About/Tutorial panels, Must-See panel, the full `#grid` of panels, footer, Gemini-key modal, toast container), and all `<script>` logic **verbatim**, unless a design rule below tells you to change something.
2. Only replace the **JavaScript data arrays/objects and case-specific static strings** with content derived from the new case (see field-by-field list below).
3. Output must be a single standalone `.html` file — inline `<style>` and `<script>` only, no external files (the Google Fonts / Gemini API calls already in the template are fine to keep as-is).
4. Never invent unrelated pathology — every diagnosis, lab, medication, or MCQ must trace back to something stated or reasonably inferable in the supplied case.
5. De-identify: no real names — use age/sex initials only (e.g. "42F", "8M"), as the template does.
6. Keep the Promption (constructive/scaffolding) vs. Provocation (adversarial/stress-testing) framing distinct in Operations modules, ticker items, and case-log Socratic questions.
7. Explanations should read like the template's: concise, evidence-appraisal style (Background → Appraisal of Evidence → comparison table → Bottom line), each ending in an explicit bottom line or stated limitation.
8. MCQs must be answerable from the case + basic underlying science, not obscure trivia.
9. Update page `<title>`, the top-bar "PRIMARY CASE SOURCE" link (or remove it if no source link exists), the ticker content, and the Reasoning Console `CASE_LINK` constant to match the new case.
10. Rename the output file descriptively, e.g. `vibe_rounds_terminal_<short-case-tag>.html`, and deliver the complete file (not a diff).
11. **Desktop-only, always.** The output must render as the full desktop layout on every device, including phones and tablets — there is no mobile-optimized mode. Concretely: keep the `<meta name="viewport" content="width=1280">` tag (fixed pixel width, not `device-width`) exactly as in the reference `<head>`, do not add any `@media` queries, do not make `#grid`'s three-column layout collapse to one column, and do not shrink font sizes, panel padding, or the timeline SVG for small screens. A phone should simply show a zoomed-out version of the same desktop terminal (pinch-to-zoom/horizontal scroll is expected and fine) — never a reflowed single-column "mobile" view.

### Design guidelines (do not deviate)
- **Palette**: pure black paper/panel background, warm amber ink (`--ink:#e8c98a`, `--amber:#ff9900`, `--amber-bright:#ffb733`) as the primary accent, with green (`#5fd35f`/`#39ff6a`) = good/mild/confirmed-benign, yellow (`#e8c020`/`#ffe600`) = moderate/caution, red (`#ff5c4d`/`#ff1744`) = severe/red-flag/critical. Never introduce other hues.
- **Typography**: monospace (`IBM Plex Mono`/`SF Mono`/Consolas) for all UI chrome, data, and body text; serif (`Iowan Old Style`/Georgia) reserved for the brand wordmark and CAT `<h4>` headers only.
- **Tone/voice**: terminal/analytics aesthetic — F-key labeled panel headers (`F1`, `F2`, …), uppercase tracked-out section labels, chip/pill tags, dotted/dashed rule separators, scanline-free "clinical Bloomberg terminal" feel. Never make it look like a friendly consumer app — keep it dense, technical, monospaced.
- **Every panel** must be collapsible via the existing `.toggle-btn` / `collapsed` mechanism and keep its `panel-head` with an `<span class="fn">` F-key badge.
- **Every diagnosis card** (Knowledge Graph) needs: chronic/serious/red-flag tag chips, Risk Factors, Symptoms, Exam Signs, Red Flags, Differential Diagnoses, and a closing note that states what the diagnosis does *not* explain.
- **Every CAT tab** needs a clinical question in a `qbox`, a Background section, an Appraisal of Evidence section, a comparison table (Domain / Supports link / Limits), and a `bl` bottom-line div.
- **Colors are semantic, not decorative** — reuse `sev-badge` (major/moderate/minor), `kg-tag` (chronic/serious/redflag), and `chip` (warn/chronic) classes exactly as defined; don't invent new severity classes.
- **Motion**: keep the existing fade/slide/pulse-glow keyframes and hover transitions; don't add new animation styles.
- **No mobile mode**: this terminal is desktop-view-only by design. Never add responsive breakpoints, collapsing grids, hamburger menus, or font/spacing scaling for narrow viewports. The fixed-width viewport meta tag in the reference `<head>` is what forces phones/tablets to render (and let the user zoom/scroll) the identical desktop layout instead of reflowing it — keep it in every generated file and don't override it.

### Data structures to regenerate per case (keep the same JS shape as the reference)
Populate each of the following with content specific to the new case — field names should mirror the reference file's variables:

1. **Identity panel** (`idf` grid + chips + `gene-row`s) — de-identified demographics, presenting complaint, onset, course, chronic/warning chips, key gene/lab findings, confirmed/working diagnoses, current regimen.
2. **Timeline** (`events` array → `svg#tl`) — chronological life/illness events, each with `age`, `label`, `sev` (1-4 severity driving color/size), rendered across the Years/Months/Weeks/Days zoom levels.
3. **Ticker** (`tweetorial` array) — 6-8 short tagged one-liners (`tag`, `mode: "P"|"V"`, `text`) summarizing the case's key reasoning beats.
4. **Case Logs** (`logs` array) — 3-5 entries: `t` (title), `tag`, `d` (description), `sq` (2-3 Socratic follow-up questions each).
5. **Pre-Appraised CATs** (`cat1..catN` HTML + `.tabs`) — one tab per major clinical question (aim for 2 substantive evidence-appraisal CATs), plus dedicated tabs for Triggers, Social/Mental/Financial Insights, and Lifestyle Modifications, matching the reference's five-tab pattern.
6. **Operations modules** (`ops` array) — two groups, `PROMPTION — SCAFFOLDING` and `PROVOCATION — STRESS-TESTING`, ~5 modules each (`id`, `name`, `out`).
7. **Knowledge Graph** (`kgData` array) — one card per candidate diagnosis with `name`, `sub`, `tags`, `risk`, `symptoms`, `exam`, `redflags`, `diffs`, `note`.
8. **Clinical Pathways** (`pwData` array) — reference pathways relevant to the case, each with `name`, `sub`, `tags`, `recognition`, `diagnosis`, `steps`, `redflags`, `note`.
9. **Basic Science Concepts Explorer** (`basicSciData` array) — mechanistic explainers underpinning each diagnosis (`name`, `sub`, `why`, `points`).
10. **Further Queries to Ask Patient** (`furtherQueries` array) — targeted history questions, each with `q` and `why`.
11. **Required Labs** (`lab-row`s) — test name, order-button affordance, rationale.
12. **Medications/Interventions** (`med-row`s + `alertbox`) — candidate drugs/interventions with dose, rationale, and any safety alert tied to the case's genetics/comorbidities.
13. **Drug/Disease Interactions** (`interactions`) — pairs with `sev-badge` (major/moderate/minor) and explanation.
14. **Future Trajectory** (`traj-row`s) — Weeks / Months / Years / Decades stages with expected findings/actions.
15. **Image-Prompt Summaries** (two `<textarea>`s) — one plain-language de-identified case summary, one focused on the leading mechanistic/pathway hypothesis, both copy-ready for an image-generation AI.
16. **NEET PG MCQ Drill** (`mcqs` array) — 6-10 case-derived MCQs: `q`, `opts` (4), `correct` index, `exp`, `tag`.
17. **Socratic chat bank** (`socraticBank` array + `SOCRATIC_SYSTEM` string) — keyword-routed Socratic question sets per major topic in the new case, plus a rewritten system prompt describing the new case for the Gemini fallback path.
18. **Must-See guide** (`mustSee` array) — curate 6-8 panel IDs with a title and one-line "why", pointing the learner to the highest-value panels for this specific case.

### Reference implementation (copy structure/CSS/JS from this)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=1280">
<title>VIBE ROUNDS TERMINAL — Clinical Analytics</title>
<style>
:root{
  --paper:#000000;
  --panel:#0a0a0a;
  --ink:#e8c98a;
  --ink-dim:#8a8a8a;
  --rule:#333333;
  --amber:#ff9900;
  --amber-bright:#ffb733;
  --green:#5fd35f;
  --yellow:#e8c020;
  --red:#ff5c4d;
  --deepred:#c73a2e;
  --navy:#111111;
  --mono: 'IBM Plex Mono','SF Mono',Consolas,monospace;
  --serif: 'Iowan Old Style','Georgia',serif;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--paper);color:var(--ink);font-family:var(--mono);font-size:15.5px;height:100%;min-width:1280px;}
::-webkit-scrollbar{width:8px;height:8px}
::-webkit-scrollbar-thumb{background:var(--rule);border-radius:4px}

/* ===== TOP BAR ===== */
#topbar{display:flex;align-items:center;background:var(--navy);color:var(--ink);padding:6px 14px;gap:18px;font-size:13.5px;letter-spacing:.04em;border-bottom:1px solid var(--rule);}
#topbar .brand{font-family:var(--serif);font-weight:700;font-size:16px;letter-spacing:.02em;color:var(--amber-bright);}
#topbar .brand span{color:#fff}
#topbar .clock{margin-left:auto;color:var(--ink-dim);font-variant-numeric:tabular-nums;}
#topbar .tag{border:1px solid #46607a;padding:2px 8px;border-radius:2px;color:#e8c98a;}

/* ===== TICKER ===== */
#tickerwrap{background:#000;color:#eae2c8;overflow:hidden;white-space:nowrap;border-bottom:2px solid var(--amber);position:relative;height:30px;}
#ticker{display:inline-block;padding-left:100%;animation:scroll 600s linear infinite;font-size:14.5px;line-height:30px;}
#tickerwrap:hover #ticker{animation-play-state:paused;}
@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}
.tick-item{margin-right:48px;}
.tick-tag{color:var(--amber-bright);font-weight:700;margin-right:6px;}
.tick-mode-p{color:#7fd1a4;}
.tick-mode-v{color:#e39a9a;}

/* ===== LAYOUT ===== */
#grid{display:grid;grid-template-columns:270px 1fr 300px;grid-template-rows:auto auto;gap:10px;padding:10px;}
.panel{background:var(--panel);border:1px solid var(--rule);border-radius:2px;display:flex;flex-direction:column;min-height:0;}
.panel-head{display:flex;align-items:center;justify-content:space-between;background:#161616;border-bottom:1px solid var(--rule);padding:6px 10px;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-dim);font-weight:700;}
.panel-head .fn{color:var(--amber);font-weight:700;margin-right:6px;}
.panel-body{padding:10px;overflow:auto;}
.toggle-btn{cursor:pointer;background:none;border:1px solid var(--rule);color:var(--ink-dim);font-family:var(--mono);font-size:11.5px;padding:2px 8px;border-radius:2px;}
.toggle-btn:hover{border-color:var(--amber);color:var(--amber);}
.collapsed .panel-body{display:none;}

/* ===== IDENTITY PANEL ===== */
.idf{display:grid;grid-template-columns:auto 1fr;gap:4px 8px;font-size:13.5px;margin-bottom:10px;}
.idf b{color:var(--amber-bright)}
.chip{display:inline-block;font-size:11.5px;border:1px solid var(--rule);padding:2px 7px;border-radius:10px;margin:2px 3px 0 0;color:var(--ink-dim);}
.chip.warn{border-color:var(--red);color:var(--red);}
.chip.chronic{border-color:var(--amber);color:var(--amber);}
.section-label{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-dim);border-top:1px dashed var(--rule);margin-top:10px;padding-top:8px;}
.gene-row{display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:1px dotted var(--rule);}
.gene-row .g{color:var(--amber-bright);font-weight:700;}

/* ===== TIMELINE ===== */
#timeline-controls{display:flex;gap:6px;align-items:center;margin-bottom:6px;flex-wrap:wrap;}
.zoombtn{cursor:pointer;background:var(--panel);border:1px solid var(--rule);color:var(--ink);font-family:var(--mono);font-size:13px;padding:5px 12px;border-radius:2px;}
.zoombtn.active{background:var(--amber);color:#000;border-color:var(--amber);}
.zoombtn:hover:not(.active){border-color:var(--amber);}
#svgwrap{width:100%;overflow-x:auto;background:#050505;border:1px solid var(--rule);border-radius:2px;}
svg#tl{display:block;}
.event-dot{cursor:pointer;stroke:#050505;stroke-width:1.5;transition:r .12s ease;filter:drop-shadow(0 0 4px currentColor);}
.event-dot:hover{stroke:var(--ink);}
.axis-line{stroke:#666666;stroke-width:1;}
.axis-text{font-family:var(--mono);font-size:12px;fill:var(--ink-dim);}
.mainline{stroke:#fff500;stroke-width:3;filter:drop-shadow(0 0 3px rgba(255,245,0,.5));}
#legend{display:flex;gap:14px;font-size:12px;color:var(--ink-dim);margin-top:6px;flex-wrap:wrap;}
.dot{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;}
#detail{margin-top:8px;padding:8px 10px;background:#161200;border:1px solid var(--rule);border-radius:2px;font-size:13.5px;min-height:52px;}
#detail .dtitle{font-weight:700;color:var(--amber-bright);}
#detail .dsev{float:right;font-size:11.5px;padding:2px 8px;border-radius:8px;color:#fff;}

/* ===== CASE LOGS ===== */
.logitem{padding:7px 0;border-bottom:1px dotted var(--rule);font-size:13px;}
.logitem .lt{color:var(--amber-bright);font-weight:700;cursor:pointer;}
.logitem .ld{display:none;color:var(--ink-dim);margin-top:4px;line-height:1.4;}
.logitem.open .ld{display:block;}
.tagpill{font-size:11px;color:var(--ink-dim);border:1px solid var(--rule);padding:1px 6px;border-radius:8px;margin-left:6px;}

/* ===== CAT / SUMMARIES ===== */
.tabs{display:flex;gap:4px;margin-bottom:8px;}
.tab{cursor:pointer;font-size:13px;padding:6px 14px;border:1px solid var(--rule);background:var(--panel);border-radius:2px 2px 0 0;color:var(--ink-dim);}
.tab.active{background:var(--amber);color:#000;border-color:var(--amber);}
.cat{display:none;font-size:13.5px;line-height:1.6;color:var(--ink);}
.cat.active{display:block;}
.cat h4{margin:10px 0 4px;color:var(--amber-bright);font-family:var(--serif);font-size:14px;}
.cat .qbox{background:#0e1a0e;border-left:3px solid var(--green);padding:7px 11px;margin:7px 0;font-size:13px;}
.cat .bl{background:#1a1305;border-left:3px solid var(--amber);padding:7px 11px;margin:7px 0;font-size:13px;}
.cat table{width:100%;border-collapse:collapse;font-size:12.5px;margin:6px 0;}
.cat td,.cat th{border:1px solid var(--rule);padding:4px 6px;text-align:left;}
.cat th{background:#161616;color:var(--amber-bright);}

/* ===== OPERATIONS / MODULES ===== */
.opgroup{margin-bottom:10px;}
.opgroup-title{font-size:12px;text-transform:uppercase;letter-spacing:.07em;color:var(--ink-dim);margin-bottom:4px;display:flex;align-items:center;gap:6px;}
.opgroup-title.p{color:var(--green);}
.opgroup-title.v{color:var(--red);}
.op-btn{display:block;width:100%;text-align:left;background:var(--panel);border:1px solid var(--rule);color:var(--ink);font-family:var(--mono);font-size:12.5px;padding:6px 9px;margin-bottom:4px;border-radius:2px;cursor:pointer;}
.op-btn:hover{border-color:var(--amber);background:#1a1305;}
.op-btn b{color:var(--amber-bright)}
#console{grid-column:1/4;background:#050505;color:#dfe8dd;border-radius:2px;border:1px solid var(--rule);}
#console .panel-head{background:#161616;color:#8ea78f;border-bottom:1px solid var(--rule);}
#console-body{padding:10px 14px;font-size:13.5px;line-height:1.65;min-height:420px;max-height:1320px;overflow:auto;}
#console-body .cprompt{color:var(--amber-bright);}
#console-body .cline{margin-bottom:8px;}
#console-body .ctag{color:#7fd1a4;font-weight:700;}
#console-body .ctag.v{color:#e39a9a;}

.pw-item{font-size:13px;padding:5px 0;border-bottom:1px dotted var(--rule);cursor:pointer;}
.pw-item:hover .lt{color:var(--amber)}
.small{font-size:12px;color:var(--ink-dim);}
footer{padding:8px 16px;font-size:10px;color:var(--ink-dim);text-align:center;border-top:1px solid var(--rule);}

/* ===== SOCRATIC CHAT ===== */
#chatlog{max-height:1680px;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:10px;}
.msg{max-width:78%;font-size:13.5px;line-height:1.55;padding:8px 12px;border-radius:3px;}
.msg.user{align-self:flex-end;background:#1a1a1a;border:1px solid var(--rule);color:var(--ink);}
.msg.bot{align-self:flex-start;background:#0e1a0e;border:1px solid #2a3d2a;color:#cfe8cf;}
.msg.bot .qmark{color:var(--green);font-weight:700;margin-right:4px;}
.msg .modelabel{display:block;font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-dim);margin-bottom:3px;}
#chatinputrow{display:flex;align-items:center;gap:8px;padding:10px 14px;border-top:1px solid var(--rule);background:#0a0a0a;}
#chatinputrow .cprompt{color:var(--amber-bright);font-weight:700;}
#chatinput{flex:1;background:#000;border:1px solid var(--rule);color:var(--ink);font-family:var(--mono);font-size:13.5px;padding:7px 10px;border-radius:2px;}
#chatinput:focus{outline:none;border-color:var(--amber);}
#chatsend{color:var(--amber-bright);border-color:var(--amber-bright);}
#chathint{color:var(--ink-dim);}

/* ===== KNOWLEDGE GRAPH / PATHWAY EXPLORER CARDS ===== */
.kg-card{border:1px solid var(--rule);border-radius:2px;margin-bottom:8px;background:#0a0a0a;overflow:hidden;}
.kg-head{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;cursor:pointer;background:#141414;}
.kg-head:hover{background:#1a1a05;}
.kg-name{font-weight:700;color:var(--amber-bright);font-size:14px;}
.kg-sub{font-size:11.5px;color:var(--ink-dim);margin-top:2px;}
.kg-caret{color:var(--ink-dim);font-size:12px;transition:transform .15s ease;}
.kg-card.open .kg-caret{transform:rotate(90deg);color:var(--amber);}
.kg-body{display:none;padding:10px 12px 12px;border-top:1px solid var(--rule);}
.kg-card.open .kg-body{display:block;}
.kg-tags{margin-bottom:8px;}
.kg-tag{display:inline-block;font-size:10.5px;border:1px solid var(--rule);padding:2px 8px;border-radius:10px;margin:2px 4px 0 0;color:var(--ink-dim);}
.kg-tag.chronic{border-color:var(--amber);color:var(--amber-bright);}
.kg-tag.serious{border-color:#e8c020;color:#e8c020;}
.kg-tag.redflag{border-color:var(--red);color:var(--red);}
.kg-sec{margin-top:8px;}
.kg-sec-label{font-size:10.5px;text-transform:uppercase;letter-spacing:.07em;color:var(--ink-dim);margin-bottom:4px;}
.kg-chip{display:inline-block;font-size:11.5px;border:1px solid var(--rule);padding:2px 8px;border-radius:3px;margin:2px 4px 2px 0;color:var(--ink);cursor:default;}
.kg-chip.rf{border-color:var(--red);color:#ffb0a8;}
.kg-chip.exam{border-color:#5a8fd6;color:#a9c8ef;}
.kg-note{font-size:12px;color:var(--ink-dim);margin-top:6px;line-height:1.5;}
.pw-steps{margin:6px 0 0;padding-left:18px;font-size:12px;line-height:1.6;color:var(--ink);}
.pw-steps li{margin-bottom:3px;}

/* ===== TOAST ===== */
#toastwrap{position:fixed;bottom:22px;right:22px;z-index:999;display:flex;flex-direction:column;gap:8px;}
.toast{background:#141414;border:1px solid var(--amber);color:var(--amber-bright);font-family:var(--mono);font-size:13px;padding:10px 16px;border-radius:3px;box-shadow:0 4px 18px rgba(0,0,0,.5);opacity:0;transform:translateY(8px);transition:opacity .2s ease,transform .2s ease;}
.toast.show{opacity:1;transform:translateY(0);}
.toast b{color:#fff;}

/* ===== NEET PG MCQ DRILL ===== */
.mcq-card{border:1px solid var(--rule);border-radius:2px;margin-bottom:10px;background:#0a0a0a;padding:10px 12px;}
.mcq-q{font-size:13.5px;color:var(--ink);margin-bottom:8px;line-height:1.5;}
.mcq-q .qn{color:var(--amber-bright);font-weight:700;margin-right:4px;}
.mcq-opts{display:flex;flex-direction:column;gap:6px;}
.mcq-opt{text-align:left;background:#111;border:1px solid var(--rule);color:var(--ink);font-family:var(--mono);font-size:12.5px;padding:7px 10px;border-radius:2px;cursor:pointer;}
.mcq-opt:hover{border-color:var(--amber);}
.mcq-opt.correct{border-color:#39ff6a;color:#39ff6a;background:#0e1a0e;}
.mcq-opt.wrong{border-color:#ff1744;color:#ff8080;background:#1a0a0a;}
.mcq-exp{display:none;margin-top:8px;font-size:12px;color:var(--ink-dim);border-top:1px dashed var(--rule);padding-top:8px;line-height:1.5;}
.mcq-exp.show{display:block;}
.mcq-tag{font-size:10.5px;color:var(--ink-dim);border:1px solid var(--rule);padding:1px 7px;border-radius:8px;margin-left:8px;}
#mcqscore{font-size:12px;color:var(--ink-dim);margin-bottom:10px;}

/* ===== SOCRATIC-IN-LOGS ===== */
.log-sq{margin-top:8px;padding-top:8px;border-top:1px dashed var(--rule);}
.log-sq-label{font-size:10.5px;text-transform:uppercase;letter-spacing:.07em;color:var(--green);margin-bottom:4px;}
.log-sq-item{font-size:12px;color:#cfe8cf;padding:3px 0 3px 14px;position:relative;line-height:1.5;}
.log-sq-item:before{content:"?";position:absolute;left:0;color:var(--green);font-weight:700;}

/* ===== QUERIES / LABS / MEDS ===== */
.qr-row,.lab-row,.med-row{border-bottom:1px dotted var(--rule);padding:8px 0;}
.qr-row:last-child,.lab-row:last-child,.med-row:last-child{border-bottom:none;}
.qr-q{font-size:13px;color:var(--ink);line-height:1.5;}
.qr-why{font-size:11.5px;color:var(--ink-dim);margin-top:3px;}
.lab-top{display:flex;align-items:center;justify-content:space-between;gap:10px;}
.lab-name{font-size:13px;color:var(--amber-bright);font-weight:700;}
.order-btn{cursor:pointer;background:var(--panel);border:1px solid var(--green);color:var(--green);font-family:var(--mono);font-size:11px;padding:4px 10px;border-radius:2px;white-space:nowrap;}
.order-btn:hover{background:#0e1a0e;}
.order-btn.ordered{background:#0e1a0e;border-color:var(--rule);color:var(--ink-dim);cursor:default;}
.lab-why,.med-why{font-size:11.5px;color:var(--ink-dim);margin-top:4px;line-height:1.4;}
.med-name{font-size:13px;color:var(--amber-bright);font-weight:700;}
.med-dose{font-size:11.5px;color:var(--ink-dim);margin-left:6px;}

/* ===== MCQ NAV ===== */
.mcq-next{margin-top:10px;cursor:pointer;background:var(--amber);color:#000;border:none;font-family:var(--mono);font-weight:700;font-size:12.5px;padding:7px 14px;border-radius:2px;}
.mcq-next:hover{background:var(--amber-bright);}
.mcq-progress{font-size:11.5px;color:var(--ink-dim);margin-bottom:8px;}

/* ===== INTERACTIONS SEVERITY ===== */
.sev-badge{display:inline-block;font-size:10.5px;text-transform:uppercase;letter-spacing:.05em;padding:2px 8px;border-radius:8px;margin-left:8px;font-weight:700;}
.sev-badge.major{background:#2a0a08;color:#ff8080;border:1px solid var(--red);}
.sev-badge.moderate{background:#1a1305;color:#e8c020;border:1px solid var(--yellow);}
.sev-badge.minor{background:#0e1a0e;color:#7fd1a4;border:1px solid var(--green);}

/* ===== FUTURE TRAJECTORY TIMELINE ===== */
.traj-row{display:grid;grid-template-columns:110px 1fr;gap:0;margin-bottom:0;}
.traj-stage{position:relative;padding:14px 16px 14px 0;border-right:2px solid var(--rule);text-align:right;}
.traj-stage .tlabel{font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--amber-bright);font-weight:700;}
.traj-stage .tsub{font-size:10.5px;color:var(--ink-dim);margin-top:2px;}
.traj-stage:after{content:"";position:absolute;right:-7px;top:18px;width:12px;height:12px;border-radius:50%;background:var(--amber);box-shadow:0 0 6px var(--amber);}
.traj-content{padding:14px 0 14px 20px;}
.traj-item{font-size:12.5px;line-height:1.55;padding:4px 0;color:var(--ink);}
.traj-item b{color:var(--amber-bright);}
.traj-row:last-child .traj-stage{border-right-color:transparent;}

/* ===== MUST-SEE PANEL ===== */
.mustsee-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px;}
.mustsee-card{border:1px solid var(--amber);border-radius:3px;padding:5px 8px;background:#141105;cursor:pointer;transition:transform .15s ease, box-shadow .15s ease, background .15s ease;text-decoration:none;display:block;}
.mustsee-card:hover{transform:translateY(-2px);box-shadow:0 4px 10px rgba(255,153,0,.18);background:#1c1808;}
.mustsee-card .ms-star{color:var(--amber-bright);font-size:10px;margin-right:3px;}
.mustsee-card .ms-title{color:var(--amber-bright);font-weight:700;font-size:11px;line-height:1.3;}
.mustsee-card .ms-why{display:none;}

/* ===== ANIMATIONS ===== */
html{scroll-behavior:smooth;}
@keyframes fadeInUp{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
@keyframes pulseGlow{0%{box-shadow:0 0 0 rgba(255,153,0,0);}50%{box-shadow:0 0 14px rgba(255,153,0,.55);}100%{box-shadow:0 0 0 rgba(255,153,0,0);}}
@keyframes slideDown{from{opacity:0;max-height:0;}to{opacity:1;max-height:2000px;}}
.panel{animation:fadeInUp .5s ease both;}
.panel:hover{box-shadow:0 4px 14px rgba(0,0,0,.35);}
.panel, .toggle-btn, .op-btn, .mcq-opt, .order-btn, .zoombtn, .kg-card, .logitem, .pw-item, .mustsee-card, .event-dot{transition:all .18s ease;}
.op-btn:active, .mcq-opt:active, .zoombtn:active, .order-btn:active{transform:scale(.97);}
.panel-body{animation:fadeIn .35s ease both;}
.kg-card.open .kg-body, .pw-item .kg-body{animation:fadeIn .25s ease both;}
.logitem.open .ld{animation:fadeIn .25s ease both;}
.msg{animation:fadeInUp .3s ease both;}
.toast{animation:pulseGlow 1.8s ease 1;}
.mainline, .event-dot{transition:r .15s ease, filter .15s ease;}
#ticker{will-change:transform;}
.mustsee-card{animation:fadeInUp .5s ease both;}
</style>
</head>
<body>

<div id="topbar">
  <div class="brand">VIBE ROUNDS <span>TERMINAL</span></div>
  <div class="tag" style="color:#e8c98a;border-color:#7a5c2a;">LEARNING STACK — NOT FOR CLINICAL USE</div>
  <a href="https://classworkdecjan.blogspot.com/2019/05/42-f-with-severe-regular-edema-with_17.html?m=1" target="_blank" rel="noopener" class="tag" style="text-decoration:none;color:var(--amber-bright);border-color:var(--amber);">PRIMARY CASE SOURCE ↗</a>
  <a href="https://avi33tbtt.github.io/" target="_blank" rel="noopener" class="tag" style="text-decoration:none;">SITE ↗</a>
  <a href="https://avi33tbtt.github.io/article.html" target="_blank" rel="noopener" class="tag" style="text-decoration:none;">ARTICLE ↗</a>
  <a href="https://avi33tbtt.github.io/tools/concepts/" target="_blank" rel="noopener" class="tag" style="text-decoration:none;">CONCEPTS ↗</a>
  <a href="https://avi33tbtt.github.io/tools/concepts/reasoning-atlas.html" target="_blank" rel="noopener" class="tag" style="text-decoration:none;">REASONING ATLAS ↗</a>
  <button id="apikeybtn" class="tag" style="cursor:pointer;background:none;font-family:var(--mono);">⚿ GEMINI API KEY</button>
  <div class="clock" id="clock">--:--:--</div>
</div>

<div id="loginwrap" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:1000;align-items:center;justify-content:center;">
  <div style="background:#0a0a0a;border:1px solid var(--amber);border-radius:3px;padding:22px 26px;width:380px;max-width:92vw;font-family:var(--mono);">
    <div style="color:var(--amber-bright);font-weight:700;font-size:15px;margin-bottom:6px;">CONNECT GEMINI API</div>
    <div style="color:var(--ink-dim);font-size:12px;line-height:1.5;margin-bottom:12px;">Paste a Google AI Studio Gemini API key. It's stored only in this browser (localStorage) and used to power the Reasoning Console operations and the Socratic Learning Chat. Leave blank to keep using local canned responses.</div>
    <input id="apikeyinput" type="password" placeholder="AIza..." autocomplete="off" style="width:100%;background:#000;border:1px solid var(--rule);color:var(--ink);font-family:var(--mono);font-size:13px;padding:8px 10px;border-radius:2px;margin-bottom:10px;">
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      <button id="apikeyclear" class="zoombtn">CLEAR</button>
      <button id="apikeyclose" class="zoombtn">CANCEL</button>
      <button id="apikeysave" class="zoombtn active">SAVE &amp; CLOSE</button>
    </div>
    <div id="apikeystatus" style="margin-top:10px;font-size:11.5px;color:var(--ink-dim);"></div>
  </div>
</div>

<div id="tickerwrap"><div id="ticker"></div></div>

<div style="padding:10px 10px 0;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
  <div class="panel collapsed" id="p-about">
    <div class="panel-head"><span><span class="fn">i</span>ABOUT THIS PROJECT</span><button class="toggle-btn" data-target="p-about">SHOW</button></div>
    <div class="panel-body" style="font-size:12.5px;line-height:1.6;">
      Vibe Rounds Terminal is an experimental clinical-reasoning learning stack built by <b style="color:var(--amber-bright);">Dr. Avinash Kumar Gupta</b>. It turns a single de-identified case or case narrative into a structured, multi-panel teaching environment — timeline, knowledge graph, clinical pathways, MCQ drills, and a Socratic chat partner — designed to stress-test diagnostic reasoning rather than hand over answers.
      <div class="small" style="margin-top:6px;">Note: this is a lightweight implementation — a single-file, client-side prototype (no backend, no persistence beyond your browser's local storage). It's meant to demonstrate the reasoning framework, not to serve as production-grade clinical software.</div>
      <div style="margin-top:8px;">
        Explore the broader toolset: <a href="https://avi33tbtt.github.io/" target="_blank" rel="noopener" style="color:var(--amber-bright);">avi33tbtt.github.io</a> ·
        <a href="https://avi33tbtt.github.io/article.html" target="_blank" rel="noopener" style="color:var(--amber-bright);">companion article</a>
      </div>
    </div>
  </div>

  <div class="panel collapsed" id="p-tutorial">
    <div class="panel-head"><span><span class="fn">?</span>TUTORIAL — RUN YOUR OWN CASE</span><button class="toggle-btn" data-target="p-tutorial">SHOW</button></div>
    <div class="panel-body" style="font-size:12.5px;line-height:1.6;">
      <ol style="margin:0;padding-left:18px;">
        <li>Take any case link (blog post, PDF, discharge summary) or raw case text you want to study.</li>
        <li>Open your LLM of choice (Gemini/ChatGPT/Claude) and prompt it: <i>"Add a Vibe Rounds Terminal module for this case: [paste link or text]"</i> — asking it to restructure the material into this terminal's panels (profile, timeline, logs, KG, pathways, MCQs).</li>
        <li>Paste the generated HTML/module back into this terminal, or open it as its own file, to see it rendered live.</li>
        <li>Click <b style="color:var(--amber-bright);">⚿ GEMINI API KEY</b> above and paste a Gemini API key to power the Reasoning Console and Socratic Chat with a live LLM instead of the local canned logic.</li>
      </ol>
    </div>
  </div>
</div>

<div style="padding:10px 10px 0;">
  <div class="panel" id="p-mustsee">
    <div class="panel-head"><span><span class="fn">★</span>MUST-SEE — HIGHEST LEARNING VALUE</span><button class="toggle-btn" data-target="p-mustsee">HIDE</button></div>
    <div class="panel-body" id="mustseebody" style="padding:8px 10px;"></div>
  </div>
</div>

<div id="grid">


  <!-- LEFT: IDENTITY -->
  <div class="panel" id="p-id">
    <div class="panel-head"><span><span class="fn">F1</span>PATIENT PROFILE</span><button class="toggle-btn" data-target="p-id">HIDE</button></div>
    <div class="panel-body">
      <div class="idf">
        <b>Subject</b><span>42F, index case</span>
        <b>Presenting</b><span>Chronic relapsing edema</span>
        <b>Onset</b><span>Birth — lifelong course</span>
        <b>Course</b><span>Multi-system, episodic</span>
      </div>
      <div>
        <span class="chip chronic">CHRONIC</span>
        <span class="chip">EPISODIC</span>
        <span class="chip warn">MULTI-GENE</span>
        <span class="chip">DIAGNOSTIC ODYSSEY</span>
      </div>
      <div class="section-label">Genetic Findings</div>
      <div class="gene-row"><span class="g">G6PD</span><span>Seattle variant — deficiency</span></div>
      <div class="gene-row"><span class="g">AMPD1</span><span>Heterozygous deficiency</span></div>
      <div class="gene-row"><span class="g">MTHFR</span><span>C677T homozygous</span></div>
      <div class="gene-row"><span class="g">WNK1</span><span>Ion transport variant</span></div>
      <div class="gene-row"><span class="g">GSD IX/III</span><span>VUS — under evaluation</span></div>
      <div class="section-label">Confirmed / Working Dx</div>
      <div style="font-size:11.5px;line-height:1.7;">
        Behçet's disease (pathergy + recurrent ulcers) · PCOS · G6PD deficiency · AMPD1 deficiency · suspected glycogen storage disease (VUS, unconfirmed)
      </div>
      <div class="section-label">Current Regimen (self-reported)</div>
      <div style="font-size:11.3px;line-height:1.7;">
        L-serine, ribose, cimetidine, NAC, iron/folate, modified low-carb diet
      </div>
    </div>
  </div>

  <!-- CENTER: TIMELINE -->
  <div class="panel" id="p-tl">
    <div class="panel-head"><span><span class="fn">F2</span>PATIENT TIMELINE — EVENT SEVERITY</span><button class="toggle-btn" data-target="p-tl">HIDE</button></div>
    <div class="panel-body">
      <div id="timeline-controls">
        <button class="zoombtn" data-z="years">YEARS</button>
        <button class="zoombtn" data-z="months">MONTHS</button>
        <button class="zoombtn" data-z="weeks">WEEKS</button>
        <button class="zoombtn" data-z="days">DAYS</button>
        <span class="small" id="rangelabel" style="margin-left:8px;"></span>
      </div>
      <div id="svgwrap"><svg id="tl" height="150"></svg></div>
      <div id="legend">
        <span><i class="dot" style="background:#39ff6a"></i>Mild</span>
        <span><i class="dot" style="background:#ffe600"></i>Moderate</span>
        <span><i class="dot" style="background:#ff5a1f"></i>Severe</span>
        <span><i class="dot" style="background:#ff1744"></i>Critical / hospitalization</span>
      </div>
      <div id="detail">Click any event marker for details.</div>
    </div>
  </div>

  <!-- RIGHT: CASE LOGS -->
  <div class="panel" id="p-logs">
    <div class="panel-head"><span><span class="fn">F3</span>CASE STUDY LOGS</span><button class="toggle-btn" data-target="p-logs">HIDE</button></div>
    <div class="panel-body" id="logbody"></div>
  </div>

  <!-- ROW 2 LEFT+CENTER: CATs -->
  <div class="panel" id="p-cat" style="grid-column:1/3;">
    <div class="panel-head"><span><span class="fn">F4</span>PRE-APPRAISED CLINICAL SUMMARIES (CATs)</span><button class="toggle-btn" data-target="p-cat">HIDE</button></div>
    <div class="panel-body">
      <div class="tabs">
        <div class="tab active" data-cat="cat1">CAT 1 · G6PD &amp; Angioedema-like Swelling</div>
        <div class="tab" data-cat="cat2">CAT 2 · AMPD1, Exercise Intolerance &amp; Sleep</div>
        <div class="tab" data-cat="cat3">TRIGGERS</div>
        <div class="tab" data-cat="cat4">SOCIAL / MENTAL / FINANCIAL</div>
        <div class="tab" data-cat="cat5">LIFESTYLE MODIFICATIONS</div>
      </div>
      <div class="cat active" id="cat1">
        <div class="qbox"><b>Clinical Question:</b> In an adult with G6PD deficiency (Seattle variant) and lifelong recurrent non-histaminergic swelling, does oxidative-stress-driven vascular/membrane dysfunction provide a plausible mechanistic bridge to episodic angioedema-like presentations, independent of classical hereditary angioedema (C1-INH) pathways?</div>
        <h4>Background</h4>
        <p>G6PD is the rate-limiting enzyme of the pentose phosphate pathway and the principal cellular source of NADPH, which regenerates reduced glutathione. Deficiency leaves red cells and other tissues vulnerable to oxidative injury, classically presenting as episodic hemolysis after oxidant triggers (sulfa drugs, antimalarials, fava beans/favism). Muscle and vascular tissue also rely on glutathione-linked antioxidant defense, so severe deficiency could plausibly extend beyond hemolysis into broader tissue stress responses.</p>
        <h4>Appraisal of Evidence</h4>
        <p>Mechanistic literature on the pentose phosphate pathway supports NADPH as the dominant reductive currency for glutathione- and thioredoxin-linked ROS detoxification systemically, not only in erythrocytes. Separate exercise-physiology literature identifies excess exertion, alcohol, tobacco smoke, air pollutants, and psychological stress as established drivers of oxidative stress generally. Neither literature base directly studies G6PD deficiency as a cause of angioedema-type swelling — this remains a patient-generated hypothesis rather than an established clinical entity, and no controlled studies link G6PD status to non-histaminergic edema.</p>
        <table>
          <tr><th>Domain</th><th>Supports link</th><th>Limits</th></tr>
          <tr><td>Biochemical plausibility</td><td>NADPH/glutathione axis is genuinely systemic</td><td>No tissue-edema mechanism specified</td></tr>
          <tr><td>Trigger overlap</td><td>Same oxidant triggers precede both hemolysis and swelling in this patient</td><td>Single-patient correlation, not causation</td></tr>
          <tr><td>Treatment response</td><td>Antioxidant-supportive measures (NAC, ribose) reportedly help</td><td>Unblinded, self-reported, multiple concurrent interventions</td></tr>
        </table>
        <div class="bl"><b>Bottom line:</b> Biologically plausible as a contributing cofactor, but the swelling pattern more likely reflects a separate or overlapping process (see red-herring signal below) than G6PD deficiency acting alone. Should be framed as a hypothesis for further workup, not an established diagnosis.</div>
        <p class="small">Related Provocation prompt: #37 Red Herring / Signal-to-Noise Drill — is oxidative stress the primary driver of the edema, or a bystander finding that co-occurs with the real trigger?</p>
      </div>
      <div class="cat" id="cat2">
        <div class="qbox"><b>Clinical Question:</b> In a patient with heterozygous AMPD1 deficiency and lifelong severe sleep disruption plus exercise intolerance, is there a coherent purine-metabolism mechanism (adenosine/AMP handling) linking the two symptom clusters, and does the reported response to ribose and L-serine support it?</div>
        <h4>Background</h4>
        <p>AMPD1 (myoadenylate deaminase) converts AMP to IMP during muscle work, buffering the adenine nucleotide pool; deficiency classically causes exercise-induced myalgia and fatigue. Adenosine, a purine metabolite in the same pathway, is a well-established sleep-promoting and arousal-suppressing signaling molecule.</p>
        <h4>Appraisal of Evidence</h4>
        <p>Human physiology data support glycine/L-serine's inter-convertibility and a documented hypnotic effect of oral L-serine, acting through a GABA-A-linked mechanism distinct from glycine's own receptor route. Ribose supplementation is separately described as replenishing the adenine nucleotide pool consumed during exertion in metabolic myopathies, consistent with reported improvements in exercise tolerance. Direct controlled evidence connecting AMPD1 heterozygosity specifically to sleep architecture is anecdotal (patient support-group pattern reports) rather than peer-reviewed, so causal claims about dementia risk or systemic adenosine excess remain speculative.</p>
        <table>
          <tr><th>Domain</th><th>Supports link</th><th>Limits</th></tr>
          <tr><td>Muscle/exercise axis</td><td>Ribose response consistent with published AMPD-pathway rationale</td><td>No biopsy/CK confirmation shown</td></tr>
          <tr><td>Sleep axis</td><td>L-serine's hypnotic mechanism is independently documented</td><td>Community-reported AMPD1–sleep link, not a validated association</td></tr>
          <tr><td>Combined hypothesis</td><td>Single purine/one-carbon metabolic axis could plausibly touch both</td><td>Two coincident supplement effects can look connected without being mechanistically unified</td></tr>
        </table>
        <div class="bl"><b>Bottom line:</b> Symptomatic benefit from ribose and L-serine is well-documented for their individual, separate mechanisms; treat the unifying "AMPD1 + G6PD interaction" hypothesis as an interesting patient-generated model worth structured testing, not a settled explanation.</div>
        <p class="small">Related Promption prompt: #12 Differential Diagnosis Deepdive — bridges the patient's own self-tracked supplement response back to testable physiology rather than accepting the causal story outright.</p>
      </div>
      <div class="cat" id="cat3">
        <h4>Identified Triggers</h4>
        <div class="kg-sec">
          <div class="kg-sec-label">Dietary / Metabolic</div>
          <span class="kg-chip">Fasting / prolonged gaps between meals</span>
          <span class="kg-chip">Carbohydrate-rich meals (worsens swelling)</span>
          <span class="kg-chip">Fava beans</span>
        </div>
        <div class="kg-sec">
          <div class="kg-sec-label">Drug / Chemical</div>
          <span class="kg-chip rf">Sulfa-class drugs</span>
          <span class="kg-chip rf">Antimalarials</span>
          <span class="kg-chip">Possible cornstarch-filler effect (cimetidine) — unconfirmed</span>
        </div>
        <div class="kg-sec">
          <div class="kg-sec-label">Physical / Environmental</div>
          <span class="kg-chip">Vigorous or prolonged exertion</span>
          <span class="kg-chip">Tobacco smoke / air pollutants</span>
          <span class="kg-chip">Heat exposure (reported pattern)</span>
        </div>
        <div class="kg-sec">
          <div class="kg-sec-label">Psychological</div>
          <span class="kg-chip">Psychological/emotional stress (self-reported flare association)</span>
        </div>
        <div class="kg-note" style="margin-top:8px;">Trigger list compiled from the case narrative and timeline; overlap between oxidative (G6PD) and metabolic (suspected GSD) triggers is itself a point of diagnostic ambiguity — see CAT 1 and module #37.</div>
      </div>
      <div class="cat" id="cat4">
        <h4>Social, Mental &amp; Financial Insights</h4>
        <div class="kg-sec">
          <div class="kg-sec-label">Social</div>
          <span class="kg-chip">Left school and married at 18, relocated</span>
          <span class="kg-chip">Decades-long diagnostic odyssey across multiple providers/countries</span>
        </div>
        <div class="kg-sec">
          <div class="kg-sec-label">Mental Health</div>
          <span class="kg-chip rf">Suicide attempt at age 15, managed-care admission</span>
          <span class="kg-chip">Anorexia diagnosed at 15 — later re-examined against fasting-sensitive metabolic pattern</span>
          <span class="kg-chip">ADHD / autism spectrum diagnosis at 35</span>
          <span class="kg-chip">Dyslexia diagnosis at 35</span>
        </div>
        <div class="kg-sec">
          <div class="kg-sec-label">Financial / Systemic</div>
          <span class="kg-chip">Implied cumulative cost of a multi-decade, multi-specialist diagnostic odyssey</span>
          <span class="kg-chip">20+ self-funded, self-directed supplement trials in the absence of a settled diagnosis</span>
        </div>
        <div class="kg-note" style="margin-top:8px;">Significant intersection between the psychiatric history (age-15 crisis, later ADHD/autism/dyslexia diagnoses) and the physical picture — worth exploring whether earlier findings were misattributed purely to mental health, delaying metabolic/genetic workup (see module #54).</div>
      </div>
      <div class="cat" id="cat5">
        <h4>Lifestyle Modifications</h4>
        <div class="kg-sec">
          <div class="kg-sec-label">Currently Following</div>
          <span class="kg-chip">Modified low-carbohydrate, high-fat diet</span>
          <span class="kg-chip">Self-directed supplement regimen (L-serine, ribose, NAC, iron/folate)</span>
          <span class="kg-chip">Avoidance of known G6PD-trigger foods/drugs (fava beans, sulfa drugs, antimalarials)</span>
        </div>
        <div class="kg-sec">
          <div class="kg-sec-label">Advisable / Not Yet Adopted</div>
          <span class="kg-chip exam">Dietitian-supervised (not self-directed) structured fasting/feeding protocol</span>
          <span class="kg-chip exam">Formalized, paced exercise program informed by exercise-test results rather than trial-and-error</span>
          <span class="kg-chip exam">Sleep hygiene program alongside/independent of L-serine use</span>
          <span class="kg-chip exam">Mental-health follow-up integrated with the physical workup, not run in parallel silos</span>
          <span class="kg-chip exam">Medical-alert documentation of G6PD status for any future prescriber</span>
        </div>
        <div class="kg-note" style="margin-top:8px;">Distinguishing what she is already doing from what remains advisable-but-unstarted highlights where structured clinical support — not further self-experimentation — would add the most value.</div>
      </div>
    </div>
  </div>

  <!-- ROW 2 RIGHT: OPERATIONS -->
  <div class="panel" id="p-ops">
    <div class="panel-head"><span><span class="fn">F5</span>OPERATIONS — RUN MODULE &lt;GO&gt;</span><button class="toggle-btn" data-target="p-ops">HIDE</button></div>
    <div class="panel-body" id="ops"></div>
  </div>

  <!-- KNOWLEDGE GRAPH + CLINICAL PATHWAYS — 50/50 ROW -->
  <div style="grid-column:1/4;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
    <div class="panel" id="p-kg">
      <div class="panel-head"><span><span class="fn">F8</span>KNOWLEDGE GRAPH — DIAGNOSIS EXPLORER</span><button class="toggle-btn" data-target="p-kg">HIDE</button></div>
      <div class="panel-body" id="kgbody"></div>
    </div>

    <div class="panel" id="p-pw">
      <div class="panel-head"><span><span class="fn">F9</span>CLINICAL PATHWAYS</span><button class="toggle-btn" data-target="p-pw">HIDE</button></div>
      <div class="panel-body" id="pwbody"></div>
    </div>
  </div>

  <!-- BASIC SCIENCE CONCEPTS EXPLORER -->
  <div class="panel" id="p-basicsci" style="grid-column:1/4;">
    <div class="panel-head"><span><span class="fn">F17</span>BASIC SCIENCE CONCEPTS EXPLORER</span><button class="toggle-btn" data-target="p-basicsci">HIDE</button></div>
    <div class="panel-body" id="basicscibody"></div>
  </div>

  <!-- FURTHER QUERIES TO ASK PATIENT -->
  <div class="panel" id="p-queries" style="grid-column:1/3;">
    <div class="panel-head"><span><span class="fn">F11</span>FURTHER QUERIES TO ASK PATIENT</span><button class="toggle-btn" data-target="p-queries">HIDE</button></div>
    <div class="panel-body" id="querybody"></div>
  </div>

  <!-- REQUIRED LABS -->
  <div class="panel" id="p-labs">
    <div class="panel-head"><span><span class="fn">F12</span>REQUIRED LABS</span><button class="toggle-btn" data-target="p-labs">HIDE</button></div>
    <div class="panel-body" id="labsbody"></div>
  </div>

  <!-- MEDICATIONS / INTERVENTIONS -->
  <div class="panel" id="p-meds" style="grid-column:1/4;">
    <div class="panel-head"><span><span class="fn">F13</span>MEDICATIONS / INTERVENTIONS — RATIONALE</span><button class="toggle-btn" data-target="p-meds">HIDE</button></div>
    <div class="panel-body">
      <div id="medsbody"></div>
      <div id="alertbox"></div>
    </div>
  </div>

  <!-- DRUG-DRUG & DRUG-DISEASE INTERACTIONS -->
  <div class="panel" id="p-interactions" style="grid-column:1/4;">
    <div class="panel-head"><span><span class="fn">F15</span>DRUG–DRUG &amp; DRUG–DISEASE INTERACTIONS</span><button class="toggle-btn" data-target="p-interactions">HIDE</button></div>
    <div class="panel-body" id="interactionsbody"></div>
  </div>

  <!-- FUTURE TRAJECTORY -->
  <div class="panel" id="p-trajectory" style="grid-column:1/4;">
    <div class="panel-head"><span><span class="fn">F16</span>FUTURE TRAJECTORY — WEEKS / MONTHS / YEARS / DECADES</span><button class="toggle-btn" data-target="p-trajectory">HIDE</button></div>
    <div class="panel-body" id="trajectorybody"></div>
  </div>

  <!-- CLINICAL SCENARIO IMAGE SUMMARY -->
  <div class="panel" id="p-imgsum" style="grid-column:1/4;">
    <div class="panel-head"><span><span class="fn">F14</span>CLINICAL SCENARIO — IMAGE-PROMPT SUMMARY</span><button class="toggle-btn" data-target="p-imgsum">HIDE</button></div>
    <div class="panel-body">
      <div class="small" style="margin-bottom:8px;">Copy this into Gemini, ChatGPT, or any image-capable AI to generate a visual/infographic overview of the clinical scenario. Contains no real name or identifying details.</div>
      <textarea id="imgsumtext" readonly style="width:100%;min-height:130px;background:#000;border:1px solid var(--rule);color:var(--ink);font-family:var(--mono);font-size:12px;padding:10px;border-radius:2px;line-height:1.5;"></textarea>
      <button id="imgsumcopy" class="zoombtn" style="margin-top:8px;">COPY SUMMARY</button>
    </div>
  </div>

  <!-- METABOLIC PATHWAY HYPOTHESIS — IMAGE PROMPT -->
  <div class="panel" id="p-pathwayimg" style="grid-column:1/4;">
    <div class="panel-head"><span><span class="fn">F18</span>METABOLIC PATHWAY HYPOTHESIS — IMAGE-PROMPT SUMMARY</span><button class="toggle-btn" data-target="p-pathwayimg">HIDE</button></div>
    <div class="panel-body">
      <div class="small" style="margin-bottom:8px;">Copy this into Gemini, ChatGPT, or any image-capable AI to generate a diagram/illustration of the proposed metabolic pathway hypothesis linking this patient's genetic findings to her symptoms.</div>
      <textarea id="pathwayimgtext" readonly style="width:100%;min-height:150px;background:#000;border:1px solid var(--rule);color:var(--ink);font-family:var(--mono);font-size:12px;padding:10px;border-radius:2px;line-height:1.5;"></textarea>
      <button id="pathwayimgcopy" class="zoombtn" style="margin-top:8px;">COPY SUMMARY</button>
    </div>
  </div>

  <!-- NEET PG MCQ DRILL -->
  <div class="panel" id="p-mcq" style="grid-column:1/4;">
    <div class="panel-head"><span><span class="fn">F10</span>NEET PG MCQ DRILL — THIS CASE</span><button class="toggle-btn" data-target="p-mcq">HIDE</button></div>
    <div class="panel-body">
      <div id="mcqscore">Score: <span id="mcqcorrect">0</span> / <span id="mcqtotal">0</span> attempted</div>
      <div id="mcqbody"></div>
    </div>
  </div>

  <!-- CONSOLE + SOCRATIC CHAT — 50/50 ROW -->
  <div style="grid-column:1/4;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
    <div class="panel" id="console" style="grid-column:auto;">
      <div class="panel-head"><span><span class="fn">F6</span>REASONING CONSOLE</span><button class="toggle-btn" data-target="console">HIDE</button></div>
      <div id="console-body">
        <div class="cline"><span class="cprompt">vibe&gt;</span> ready. Select an operation from the right panel to execute a promption or Provocation pass on the case.</div>
      </div>
    </div>

    <div class="panel" id="p-chat" style="grid-column:auto;">
      <div class="panel-head"><span><span class="fn">F7</span>SOCRATIC LEARNING CHAT</span><button class="toggle-btn" data-target="p-chat">HIDE</button></div>
      <div class="panel-body" style="padding:0;">
        <div id="chatlog"></div>
        <div id="chatinputrow">
          <span class="cprompt">you&gt;</span>
          <input id="chatinput" type="text" placeholder="Ask about the case, a symptom, or a differential (e.g. 'why is she edematous?')" autocomplete="off">
          <button id="chatsend" class="zoombtn">ASK</button>
          <button id="chathint" class="zoombtn">HINT</button>
        </div>
      </div>
    </div>
  </div>

</div>

<footer>Vibe Rounds Terminal — The Learning Stack · de-identified educational case reconstruction · not a diagnostic tool · reasoning frameworks only · <a href="https://avi33tbtt.github.io/" target="_blank" rel="noopener" style="color:var(--ink-dim);">avi33tbtt.github.io</a> · <a href="https://avi33tbtt.github.io/article.html" target="_blank" rel="noopener" style="color:var(--ink-dim);">companion article</a> · <a href="https://avi33tbtt.github.io/tools/concepts/" target="_blank" rel="noopener" style="color:var(--ink-dim);">concepts &amp; knowledge graph</a> · <a href="https://avi33tbtt.github.io/tools/concepts/reasoning-atlas.html" target="_blank" rel="noopener" style="color:var(--ink-dim);">reasoning atlas</a></footer>

<div id="toastwrap"></div>

<script>
/* ---------------- GEMINI API INTEGRATION ---------------- */
const GEMINI_KEY_STORAGE = 'vibeRoundsGeminiKey';
function getGeminiKey(){ return localStorage.getItem(GEMINI_KEY_STORAGE) || ''; }
function setGeminiKey(k){ if(k) localStorage.setItem(GEMINI_KEY_STORAGE,k); else localStorage.removeItem(GEMINI_KEY_STORAGE); }

async function callGemini(prompt, systemInstruction){
  const key = getGeminiKey();
  if(!key) return null; // no key set — caller should fall back to local canned logic
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(key)}`;
  const body = {
    contents:[{role:'user', parts:[{text:prompt}]}],
  };
  if(systemInstruction) body.systemInstruction = {parts:[{text:systemInstruction}]};
  try{
    const res = await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
    if(!res.ok){ const errText = await res.text(); throw new Error('Gemini API error '+res.status+': '+errText.slice(0,200)); }
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('') || '';
    return text || null;
  }catch(err){
    console.error('Gemini call failed', err);
    showToast(`<b>Gemini API error</b> — ${err.message.slice(0,120)}. Falling back to local response.`);
    return null;
  }
}

function updateApiKeyUI(){
  const btn = document.getElementById('apikeybtn');
  const has = !!getGeminiKey();
  btn.textContent = has ? '⚿ GEMINI: CONNECTED' : '⚿ GEMINI API KEY';
  btn.style.color = has ? 'var(--green)' : '';
  btn.style.borderColor = has ? 'var(--green)' : '';
}
document.getElementById('apikeybtn').addEventListener('click', ()=>{
  document.getElementById('apikeyinput').value = getGeminiKey();
  document.getElementById('apikeystatus').textContent = getGeminiKey() ? 'A key is currently saved in this browser.' : 'No key saved — using local canned responses.';
  document.getElementById('loginwrap').style.display = 'flex';
});
document.getElementById('apikeyclose').addEventListener('click', ()=>{ document.getElementById('loginwrap').style.display='none'; });
document.getElementById('loginwrap').addEventListener('click', (e)=>{ if(e.target.id==='loginwrap') document.getElementById('loginwrap').style.display='none'; });
document.getElementById('apikeyclear').addEventListener('click', ()=>{
  setGeminiKey(''); updateApiKeyUI();
  document.getElementById('apikeystatus').textContent = 'Cleared. Using local canned responses.';
});
document.getElementById('apikeysave').addEventListener('click', ()=>{
  const val = document.getElementById('apikeyinput').value.trim();
  setGeminiKey(val); updateApiKeyUI();
  document.getElementById('loginwrap').style.display='none';
  showToast(val ? 'Gemini API key saved to this browser.' : 'No key saved — using local canned responses.');
});
updateApiKeyUI();

/* ---------------- TICKER (tweetorial) ---------------- */
const tweetorial = [
  {tag:"#17", mode:"P", text:"Problem representation: 42F with lifelong episodic multi-tissue edema, G6PD (Seattle) + heterozygous AMPD1 deficiency, evolving into a Behçet's-spectrum picture."},
  {tag:"#12", mode:"P", text:"Differential thread: is this one unifying inborn-error phenotype, or three coincidental rare conditions layered in one patient?"},
  {tag:"#30", mode:"V", text:"Anchor check: the 'AMPD1+G6PD interacting' hypothesis is the patient's own model — restate it as a hypothesis to test, not an accepted mechanism."},
  {tag:"#37", mode:"V", text:"Signal vs noise: high salt craving could be a compensatory renal/ion-handling response rather than an incidental habit — worth exploring, not dismissing."},
  {tag:"#28", mode:"V", text:"Diagnostic time-out: before crediting cimetidine for reduced swelling, note it's ~99% cornstarch filler — could a slow-release carbohydrate source, not the drug, be doing the work?"},
  {tag:"#45", mode:"V", text:"Adversarial shadow: 20+ self-tried interventions with variable, unblinded responses — treat single-patient supplement logs as hypothesis-generating only."},
  {tag:"#50", mode:"P", text:"Reasoning map: birth jaundice → hemolytic susceptibility → recurrent infections → adolescent crisis → adult multi-organ episodes → present-day Behçet's + suspected GSD."},
  {tag:"#54", mode:"P", text:"System 1 vs 2 prompt: fast read says 'rare genetic edema syndrome' — slow read demands ruling out endocrine (adrenal), autoimmune, and metabolic-storage causes first."},
];
const tickerEl = document.getElementById('ticker');
function renderTicker(){
  tickerEl.innerHTML = tweetorial.map(t=>`<span class="tick-item"><span class="tick-tag">${t.tag}</span><span class="${t.mode==='P'?'tick-mode-p':'tick-mode-v'}">[${t.mode==='P'?'PROMPTION':'PROVOCATION'}]</span> ${t.text}</span>`).join('');
  // duplicate for seamless loop
  tickerEl.innerHTML += tickerEl.innerHTML;
}
renderTicker();

/* ---------------- CLOCK ---------------- */
function tick(){
  document.getElementById('clock').textContent = new Date().toUTCString().slice(17,25)+' UTC';
}
tick(); setInterval(tick,1000);

/* ---------------- COLLAPSE TOGGLES ---------------- */
document.querySelectorAll('.toggle-btn').forEach(b=>{
  b.addEventListener('click',()=>{
    const p = document.getElementById(b.dataset.target);
    p.classList.toggle('collapsed');
    b.textContent = p.classList.contains('collapsed') ? 'SHOW' : 'HIDE';
  });
});

/* ---------------- TIMELINE DATA ---------------- */
// age-in-years since birth -> approximate day offset; severity 1(mild)-4(critical)
const sevColor = {1:"#39ff6a",2:"#ffe600",3:"#ff5a1f",4:"#ff1744"};
const sevLabel = {1:"Mild",2:"Moderate",3:"Severe",4:"Critical / hospitalization"};
const events = [
  {age:0.0, label:"Severe neonatal jaundice, feeding intolerance, constant swelling episodes", sev:3},
  {age:1.5, label:"Non-verbal to fluent bilingual speech within months", sev:1},
  {age:3, label:"Precocious hair growth (early PCOS-consistent phenotype)", sev:2},
  {age:4, label:"Onset recurrent UTIs, kidney infections, strep, lung infections begins", sev:3},
  {age:12, label:"Cervical degeneration and scoliosis noted incidentally on imaging", sev:2},
  {age:15, label:"Severe headache crisis, suicide attempt, managed-care admission, anorexia diagnosis, forced nasal feeding", sev:4},
  {age:18, label:"Left school, married, relocated", sev:1},
  {age:21, label:"Ectopic pregnancy, emergency surgery, intraoperative awareness episode", sev:4},
  {age:22, label:"Multiple ovarian cysts on CT; PCOS diagnosed", sev:2},
  {age:23, label:"2-week hospitalization: severe kidney infection + pneumonia concurrently; melanoma + precancerous lesions found incidentally", sev:4},
  {age:24, label:"Worsening migraines and ovarian pain, still manageable", sev:2},
  {age:30, label:"Leg fracture during a fall while dancing", sev:3},
  {age:32, label:"Severe antimalarial drug reaction abroad; later same year H1N1 + pneumonia", sev:4},
  {age:34, label:"New neurological cluster: left-sided numbness, positional vertigo, transient vision loss, stuttering episodes over several months", sev:4},
  {age:35, label:"ADHD / autism spectrum diagnosis by therapist and psychiatrist; failed LASIK, dyslexia diagnosis", sev:2},
  {age:41, label:"Genetic testing reveals G6PD Seattle + AMPD1 heterozygous deficiency", sev:2},
  {age:42, label:"Behçet's disease diagnosis confirmed via pathergy testing and ulcer history; GSD (type III/IX) VUS identified, dietary trial begun", sev:3},
];
const maxAge = 43;
const zoomRanges = {
  years:{from:0, to:maxAge, label:"Full lifespan view (birth → present, 42y)"},
  months:{from:32, to:maxAge, label:"Last ~10 years (monthly resolution)"},
  weeks:{from:40, to:maxAge, label:"Last ~3 years (weekly resolution)"},
  days:{from:41.5, to:maxAge, label:"Last ~6 months (daily resolution)"}
};
let currentZoom = 'years';

const svg = document.getElementById('tl');
const svgNS = "http://www.w3.org/2000/svg";
function drawTimeline(zoomKey){
  currentZoom = zoomKey;
  document.querySelectorAll('.zoombtn').forEach(b=>b.classList.toggle('active', b.dataset.z===zoomKey));
  const range = zoomRanges[zoomKey];
  document.getElementById('rangelabel').textContent = range.label;
  const width = Math.max(700, document.getElementById('svgwrap').clientWidth-4);
  const height = 150, padL=40, padR=20, padT=20, padB=30;
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.innerHTML = '';
  const x0=padL, x1=width-padR, y=height/2+6;
  const scaleX = age => x0 + (age-range.from)/(range.to-range.from) * (x1-x0);

  // main line
  const line = document.createElementNS(svgNS,'line');
  line.setAttribute('x1',x0); line.setAttribute('x2',x1);
  line.setAttribute('y1',y); line.setAttribute('y2',y);
  line.setAttribute('class','mainline');
  svg.appendChild(line);

  // axis ticks
  const nTicks = 6;
  for(let i=0;i<=nTicks;i++){
    const age = range.from + (i/nTicks)*(range.to-range.from);
    const xp = scaleX(age);
    const tickLine = document.createElementNS(svgNS,'line');
    tickLine.setAttribute('x1',xp);tickLine.setAttribute('x2',xp);
    tickLine.setAttribute('y1',y-4);tickLine.setAttribute('y2',y+4);
    tickLine.setAttribute('class','axis-line');
    svg.appendChild(tickLine);
    const txt = document.createElementNS(svgNS,'text');
    txt.setAttribute('x',xp);txt.setAttribute('y',height-10);
    txt.setAttribute('text-anchor','middle');
    txt.setAttribute('class','axis-text');
    txt.textContent = "Age "+age.toFixed(1);
    svg.appendChild(txt);
  }

  // events within range
  const visible = events.filter(e=>e.age>=range.from-0.5 && e.age<=range.to+0.5);
  visible.forEach(e=>{
    const xp = Math.min(Math.max(scaleX(e.age), x0), x1);
    const yOffset = (e.sev%2===0)? -18 : 18;
    const cx = xp, cy = y+yOffset;
    const stem = document.createElementNS(svgNS,'line');
    stem.setAttribute('x1',xp);stem.setAttribute('x2',xp);
    stem.setAttribute('y1',y);stem.setAttribute('y2',cy);
    stem.setAttribute('class','axis-line');
    svg.appendChild(stem);
    const circ = document.createElementNS(svgNS,'circle');
    circ.setAttribute('cx',cx);circ.setAttribute('cy',cy);
    circ.setAttribute('r', 5+e.sev*1.3);
    circ.setAttribute('fill', sevColor[e.sev]);
    circ.setAttribute('class','event-dot');
    circ.style.filter = `drop-shadow(0 0 5px ${sevColor[e.sev]})`;
    circ.addEventListener('click',()=>showDetail(e));
    circ.addEventListener('mouseenter',()=>circ.setAttribute('r', 7+e.sev*1.3));
    circ.addEventListener('mouseleave',()=>circ.setAttribute('r', 5+e.sev*1.3));
    svg.appendChild(circ);
  });
  if(visible.length===0){
    const txt = document.createElementNS(svgNS,'text');
    txt.setAttribute('x',(x0+x1)/2);txt.setAttribute('y',y-14);
    txt.setAttribute('text-anchor','middle');txt.setAttribute('class','axis-text');
    txt.textContent = "No discrete events logged at this resolution — zoom out to Years/Months.";
    svg.appendChild(txt);
  }
}
function showDetail(e){
  const d = document.getElementById('detail');
  d.innerHTML = `<span class="dsev" style="background:${sevColor[e.sev]}">${sevLabel[e.sev]}</span>
    <span class="dtitle">Age ${e.age} — event</span><br>${e.label}`;
}
document.querySelectorAll('.zoombtn').forEach(b=>b.addEventListener('click',()=>drawTimeline(b.dataset.z)));
window.addEventListener('resize',()=>drawTimeline(currentZoom));
drawTimeline('years');

/* ---------------- CASE LOGS ---------------- */
const logs = [
  {t:"Chronic Kidney Disease — reference profile", tag:"NEPHRO · KG", d:"General-medicine knowledge-graph entry used as a comparator: chronic, progressive, irreversible course; risk factors include diabetes, hypertension, recurrent UTIs and nephrotoxic drug exposure — relevant given this patient's recurrent childhood kidney infections and adult renal-handling questions (salt craving, oliguria).",
    sq:["What renal function markers, if any, have actually been trended over the years rather than checked once?","If salt craving is compensatory, compensating for what — and how would you distinguish that from habit?","Does her low urine output track with her edema flares, or is it independent of them?"]},
  {t:"Acute Pancreatitis — clinical pathway", tag:"SURGERY · PATHWAY", d:"Reference pathway for acute abdominal presentations; included as a structural template for how a systematic recognition → diagnosis → management → red-flag pipeline is built, applicable to this patient's own recurring abdominal-pain/swelling episodes.",
    sq:["What would make you reach for this template versus assume her abdominal pain is 'just' part of her known syndrome?","Which red flags from this pathway have actually been checked for in her, and which have been assumed absent?"]},
  {t:"48F DKA + pneumonia — anchor-extraction walkthrough", tag:"ARTICLE DEMO", d:"Companion teaching case demonstrating the Promption→Provocation pipeline: an apparently classic DKA-with-pneumonia picture was stress-tested against a near-normal HbA1c, surfacing Metformin-associated lactic acidosis as an underweighted alternative — the same anchor-extraction discipline applied to this patient's 'AMPD1+G6PD' self-hypothesis.",
    sq:["What was the anchor in that DKA case, and what is the equivalent anchor here?","If you stress-tested the 'AMPD1+G6PD interaction' hypothesis the same way HbA1c stress-tested the DKA read, what single data point would you demand first?"]},
  {t:"42F multi-gene interaction case — primary source", tag:"OPEN CASE LOG", d:"The de-identified patient-authored record underlying this terminal: lifelong edema, G6PD Seattle + AMPD1 deficiency, evolving Behçet's diagnosis and suspected glycogen storage disease. Over 30 student differential write-ups were logged against this same case in the original teaching thread.",
    sq:["Across 30+ prior write-ups, what diagnosis do most reviewers converge on — and is that convergence evidence, or just shared anchoring?","If you had to defend the single weakest diagnosis on her list to a skeptical attending, which would you pick and how would you defend it?","What one test, if run today, would most efficiently collapse the largest number of open hypotheses?"]},
];
const logBody = document.getElementById('logbody');
logBody.innerHTML = logs.map((l,i)=>`
  <div class="logitem" id="log${i}">
    <div class="lt" onclick="document.getElementById('log${i}').classList.toggle('open')">${l.t}<span class="tagpill">${l.tag}</span></div>
    <div class="ld">${l.d}
      <div class="log-sq"><div class="log-sq-label">Socratic Questions</div>${(l.sq||[]).map(q=>`<div class="log-sq-item">${q}</div>`).join('')}</div>
    </div>
  </div>`).join('');

/* ---------------- OPERATIONS MODULES ---------------- */
const ops = [
  {group:"PROMPTION — SCAFFOLDING", cls:"p", items:[
    {id:"17", name:"Semantic Qualifiers & Problem Rep", out:"Restates the raw narrative as: a 42-year-old woman with lifelong episodic multi-system edema, biallelic-adjacent oxidative and purine-metabolism gene variants (G6PD Seattle, AMPD1 het), now converging on a Behçet's-spectrum autoinflammatory picture with a suspected glycogen-storage-disease overlay."},
    {id:"12", name:"Differential Diagnosis Deepdive", out:"Bridges findings to candidate drivers: (1) primary autoinflammatory disease (Behçet's) explaining ulcers/pathergy; (2) inborn metabolic disease (GSD III/IX VUS) explaining fasting-sensitive swelling and hepatic findings; (3) G6PD/AMPD1 as oxidative-stress amplifiers rather than sole causes."},
    {id:"15", name:"Illness Script Acquisition", out:"Builds the canonical illness script for GSD type III/IX (fasting hypoglycemia tendency, hepatomegaly-adjacent swelling, myopathy, growth delay) and compares point-by-point against this patient's phenotype."},
    {id:"36", name:"Bayesian Probability Engine", out:"Given the rarity of finding two independent VUS variants that both plausibly explain the same phenotype, prior probability favors a single unifying storage-disease diagnosis over coincidence — but VUS status keeps this provisional pending biopsy."},
    {id:"50", name:"Diagnostic Reasoning Map", out:"Chronological causal chain rendered: neonatal oxidative vulnerability → recurrent infections → adolescent metabolic decompensation misread as an eating disorder → adult autoinflammatory and storage-disease convergence."},
  ]},
  {group:"PROVOCATION — STRESS-TESTING", cls:"v", items:[
    {id:"28", name:"Diagnostic Time-Out", out:"Pause before crediting Cimetidine for reduced swelling — its filler is almost pure cornstarch, a slow-release carbohydrate; in a patient with suspected glycogen-handling disease, the filler itself may be the active variable, not the drug."},
    {id:"30", name:"Diagnostic Anchor Extractor", out:"Identified anchor: the patient and reviewer both gravitate to a single unifying 'AMPD1+G6PD interaction' story. This is a self-generated hypothesis without confirmatory biopsy or controlled data and should be labeled explicitly as provisional in any summary."},
    {id:"37", name:"Red Herring / Signal-to-Noise Drill", out:"Tests whether oxidative stress (G6PD) is a true driver of the edema or a co-traveling bystander that happens to share triggers (fasting, exertion, smoke) with the real metabolic-storage mechanism."},
    {id:"45", name:"Shadow Module — Adversarial Counterpart", out:"An adversarial reviewer would argue: 20+ uncontrolled self-trials with variable, subjective symptom tracking cannot establish which single intervention (if any) is responsible for reported improvement; regression to the mean and placebo response are live alternative explanations."},
    {id:"54", name:"System 1 & 2 Question Generator", out:"System-1 read: 'rare double-gene syndrome.' System-2 questions to force: has 3β-HSD congenital adrenal hyperplasia truly been excluded? Has bleeding/clotting time been tested despite the Von Willebrand-linked variant? Has ICP ever actually been measured despite decades of the patient requesting it?"},
  ]},
];
const opsBody = document.getElementById('ops');
opsBody.innerHTML = ops.map(g=>`
  <div class="opgroup">
    <div class="opgroup-title ${g.cls}">${g.group}</div>
    ${g.items.map(it=>`<button class="op-btn" data-out="${encodeURIComponent(it.out)}" data-mode="${g.cls}"><b>#${it.id}</b> ${it.name}</button>`).join('')}
  </div>`).join('');

const consoleBody = document.getElementById('console-body');
const CASE_LINK = "https://classworkdecjan.blogspot.com/2019/05/42-f-with-severe-regular-edema-with_17.html?m=1";
document.querySelectorAll('.op-btn').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const out = decodeURIComponent(btn.dataset.out);
    const mode = btn.dataset.mode;
    const modeName = mode==='v' ? 'PROVOCATION' : 'PROMPTION';
    const moduleLabel = btn.textContent.trim();
    const prompt =
`CASE: ${CASE_LINK}
MODULE: ${moduleLabel} [${modeName}]

Run ${moduleLabel} on the above case.`;
    const line = document.createElement('div');
    line.className='cline';
    const hasKey = !!getGeminiKey();
    line.innerHTML = `<span class="cprompt">vibe&gt;</span> STRUCTURED PROMPT QUEUED<br>
      <pre style="white-space:pre-wrap;background:#0a0a0a;border:1px solid #333;padding:8px 10px;border-radius:2px;margin:6px 0;color:#e8c98a;">${prompt}</pre>
      <span class="ctag ${mode==='v'?'v':''}">RUN ON CASE →</span> <span class="gemini-out">${hasKey ? '<i>Calling Gemini…</i>' : out}</span>`;
    consoleBody.appendChild(line);
    consoleBody.scrollTop = consoleBody.scrollHeight;
    showToast(`Queued <b>${moduleLabel}</b>${hasKey ? ' — calling Gemini' : ' — check the Reasoning Console'}.`);
    if(hasKey){
      const sys = "You are the reasoning engine inside a clinical-education terminal called Vibe Rounds Terminal. Respond concisely (3-6 sentences), in the analytical register of a case-based teaching tool, applying the named module to the case. This is educational reasoning practice, not real clinical advice.";
      const geminiText = await callGemini(prompt, sys);
      const target = line.querySelector('.gemini-out');
      target.innerHTML = geminiText ? geminiText.replace(/\n/g,'<br>') : out;
      consoleBody.scrollTop = consoleBody.scrollHeight;
    }
  });
});

/* ---------------- TOAST ---------------- */
function showToast(html){
  const wrap = document.getElementById('toastwrap');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = html;
  wrap.appendChild(t);
  requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>{
    t.classList.remove('show');
    setTimeout(()=>t.remove(), 250);
  }, 4200);
}

/* ---------------- CAT TABS ---------------- */
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.cat').forEach(c=>c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.cat).classList.add('active');
  });
});

/* ---------------- SOCRATIC LEARNING CHAT ---------------- */
// A Socratic partner never hands over the answer — it reflects the question back
// as a sharper one, drawing on the case data already on screen. Keyword-routed,
// fully local (no external calls); cycles through follow-ups if asked again.
const socraticBank = [
  {
    kw:["edema","swelling","swollen","fluid"],
    mode:"promption",
    qs:[
      "Before reaching for a cause — what do you notice about *when* her swelling comes on? Look at the timeline: does it cluster with specific triggers, or does it seem random?",
      "If this were pure hereditary angioedema, you'd expect a C1-inhibitor story. What's missing here that should make you hesitate before calling it that?",
      "She says fasting reliably brings the swelling down. What kind of mechanism would predict *fasting* as the thing that fixes fluid retention, rather than worsening it?"
    ]
  },
  {
    kw:["g6pd","hemolysis","hemolytic","oxidative"],
    mode:"promption",
    qs:[
      "G6PD deficiency is a red-cell story in the textbooks. What would you need to see to justify extending it to vascular or muscle tissue in this patient?",
      "Look at CAT 1 in the panel above — what's the single weakest link in the chain from 'NADPH deficiency' to 'she swells up'?",
      "Her triggers — fava beans, sulfa drugs, antimalarials — are classic G6PD triggers. Are they *also* classic triggers for anything else she has? What does that overlap tell you?"
    ]
  },
  {
    kw:["ampd1","muscle","exercise","fatigue","ribose"],
    mode:"promption",
    qs:[
      "AMPD1 deficiency is usually described as exercise myalgia. She also describes lifelong severe sleep disruption. What single metabolite sits at the crossroads of both?",
      "Ribose reportedly changed her ability to function daily. What does *that* response, on its own, actually prove — and what does it not prove?",
      "If you had to design one test to confirm AMPD1 is doing real metabolic work here (not just a lab curiosity), what would it be?"
    ]
  },
  {
    kw:["behcet","behçet","ulcer","pathergy"],
    mode:"provocation",
    qs:[
      "A pathergy test plus a history of ulcers led to a Behçet's diagnosis. What else on this patient's problem list could independently explain recurrent oral/genital ulcers?",
      "Run module #30 in your head: what is the team anchoring on with the Behçet's label, and what did it let them stop looking for?",
      "If Behçet's explains the ulcers, does it also explain the fasting-sensitive swelling — or are you quietly asking one diagnosis to do two jobs?"
    ]
  },
  {
    kw:["gsd","glycogen","cornstarch","cimetidine"],
    mode:"provocation",
    qs:[
      "The patient herself wondered if cornstarch — not cimetidine — was the active ingredient helping her. Why would that distinction matter clinically?",
      "GSD III/IX are both still VUS, not confirmed. What result, specifically, would move them from 'suspected' to 'confirmed' — and has it been done?",
      "If a modified low-carb/high-fat diet improves her symptoms, does that argue for or against a glycogen-storage mechanism? Defend either answer."
    ]
  },
  {
    kw:["salt","sodium","urine","kidney","renal"],
    mode:"provocation",
    qs:[
      "She craves large amounts of salt and urinates very little most days. What renal or hormonal system would produce exactly that pattern?",
      "One commenter suggested her high salt intake is a compensatory response. Compensating for what, specifically — and how would you test that hypothesis rather than just naming it?",
      "Look at the CKD reference profile in the case logs panel — which risk factors or exam signs from that entry does she actually share, and which does she not?"
    ]
  },
  {
    kw:["diagnosis","differential","what does she have","what is wrong","cause"],
    mode:"provocation",
    qs:[
      "Before I hand you a differential — what are the three findings in this case you find hardest to explain with a *single* diagnosis?",
      "If you had to bet on one unifying diagnosis versus 'three rare things stacked in one patient,' what evidence would actually settle that bet?",
      "Which of her problems would still be unexplained even if the GSD biopsy comes back positive?"
    ]
  },
  {
    kw:["hello","hi","hey","help","start"],
    mode:"promption",
    qs:[
      "Welcome to the reasoning console. Rather than answer directly, I'll usually hand a question back — that's the Socratic model this terminal runs on. Try asking about her edema, her genetics, or her diagnoses to start.",
    ]
  }
];
const fallbackQs = [
  "Interesting — before I respond, what in the timeline or profile panel already speaks to that question?",
  "What would change your mind here — what single test result would move this from suspicion to certainty?",
  "Try naming the assumption you're making right now. Is it one this case actually supports?"
];
const usedIdx = {};
function findBank(text){
  const low = text.toLowerCase();
  return socraticBank.find(b=>b.kw.some(k=>low.includes(k)));
}
function nextQuestion(bank,key){
  usedIdx[key] = usedIdx[key]===undefined ? 0 : (usedIdx[key]+1) % bank.qs.length;
  return bank.qs[usedIdx[key]];
}
const chatlog = document.getElementById('chatlog');
function addMsg(text, who, mode){
  const m = document.createElement('div');
  m.className = 'msg '+who;
  if(who==='bot'){
    m.innerHTML = `<span class="modelabel">${mode||'socratic'}</span><span class="qmark">?</span>${text}`;
  } else {
    m.textContent = text;
  }
  chatlog.appendChild(m);
  chatlog.scrollTop = chatlog.scrollHeight;
}
const SOCRATIC_SYSTEM = "You are a Socratic clinical-reasoning partner inside 'Vibe Rounds Terminal', tutoring on a single de-identified case: a 42F with lifelong episodic multi-system edema, G6PD deficiency (Seattle variant), heterozygous AMPD1 deficiency, PCOS, a Behçet's disease diagnosis (pathergy-positive, recurrent ulcers), and a suspected-but-unconfirmed (VUS) glycogen storage disease, on a modified low-carb diet with self-tried L-serine, ribose, cimetidine, NAC, iron/folate. Never hand over a direct diagnosis or answer. Always respond with one sharper, more specific question that reflects the learner's question back at them, grounded in the case details above. Keep it to 1-3 sentences.";
async function respond(userText){
  if(getGeminiKey()){
    const reply = await callGemini(userText, SOCRATIC_SYSTEM);
    if(reply){ addMsg(reply, 'bot', 'gemini · socratic'); return; }
  }
  const bank = findBank(userText);
  if(bank){
    const q = nextQuestion(bank, bank.kw[0]);
    addMsg(q, 'bot', bank.mode);
  } else {
    const q = fallbackQs[Math.floor(Math.random()*fallbackQs.length)];
    addMsg(q, 'bot', 'socratic');
  }
}
function sendChat(){
  const input = document.getElementById('chatinput');
  const val = input.value.trim();
  if(!val) return;
  addMsg(val, 'user');
  input.value='';
  setTimeout(()=>respond(val), 250);
}
document.getElementById('chatsend').addEventListener('click', sendChat);
document.getElementById('chatinput').addEventListener('keydown', e=>{ if(e.key==='Enter') sendChat(); });
document.getElementById('chathint').addEventListener('click', ()=>{
  addMsg("Try: 'why is she edematous?', 'what about her G6PD?', 'is Behçet's right?', 'what about the salt craving?'", 'bot', 'hint');
});
// seed opener
addMsg("This is a Socratic partner, not an answer key — ask about the case and I'll hand the question back sharper. Try 'why is she edematous?'", 'bot', 'promption');

/* ---------------- KNOWLEDGE GRAPH — DIAGNOSIS EXPLORER ---------------- */
const kgData = [
  {
    name:"G6PD Deficiency (Seattle variant)",
    sub:"HEMATOLOGY · X-LINKED ENZYMOPATHY · EPISODIC",
    tags:[["chronic","CHRONIC"],["","EPISODIC"],["serious","TRIGGER-DEPENDENT"],["","NOT CURABLE"]],
    risk:["Male sex (X-linked, though females can be symptomatic)","Mediterranean/African/Asian ancestry","Consanguinity"],
    symptoms:["Fatigue during hemolytic episodes","Jaundice","Dark urine","Abdominal discomfort"],
    exam:["Pallor","Scleral icterus","Splenomegaly (variable)"],
    redflags:["Hemoglobin <7 g/dL with active hemolysis","Acute kidney injury from hemoglobinuria","Neonatal kernicterus risk"],
    diffs:["Autoimmune hemolytic anemia","Hereditary spherocytosis","Pyruvate kinase deficiency"],
    note:"In this patient: explains neonatal jaundice, sulfa/antimalarial/fava-bean reactions, and lifelong oxidative-stress sensitivity — but does not by itself explain the fasting-sensitive tissue edema (see CAT 1)."
  },
  {
    name:"AMPD1 Deficiency (heterozygous)",
    sub:"METABOLIC MYOPATHY · PURINE NUCLEOTIDE CYCLE · AUTOSOMAL",
    tags:[["chronic","CHRONIC"],["","OFTEN ASYMPTOMATIC CARRIERS"],["","SUPPORTIVE ONLY"]],
    risk:["Common polymorphism (~10-20% carrier frequency in some populations)","Homozygosity more often symptomatic than heterozygosity"],
    symptoms:["Exercise-induced myalgia and cramping","Early fatigue on exertion","Post-exertional malaise"],
    exam:["Normal strength at rest","Reduced exercise tolerance on formal testing","Possible mild CK elevation"],
    redflags:["Rhabdomyolysis with very strenuous exertion","Significant CK elevation with myoglobinuria"],
    diffs:["McArdle disease (myophosphorylase deficiency)","Carnitine palmitoyltransferase II deficiency","Mitochondrial myopathy"],
    note:"In this patient: plausibly contributes to lifelong exercise intolerance; ribose response is consistent with the proposed mechanism (see CAT 2), but heterozygous status alone is usually mild — full picture requires the sleep/purine-metabolism link to also hold up."
  },
  {
    name:"Behçet's Disease",
    sub:"AUTOINFLAMMATORY · VASCULITIS SPECTRUM · RELAPSING",
    tags:[["chronic","CHRONIC"],["serious","RELAPSING-REMITTING"],["","NOT CURABLE"],["","IMMUNOSUPPRESSION-RESPONSIVE"]],
    risk:["Higher prevalence along historic Silk Road populations","HLA-B51 association","Young adult onset typical"],
    symptoms:["Recurrent oral ulcers","Genital ulcers","Skin lesions (erythema nodosum-like)","Uveitis / ocular inflammation"],
    exam:["Positive pathergy test","Aphthous-type ulcers on exam","Ocular inflammation on slit-lamp"],
    redflags:["Retinal vasculitis threatening vision","CNS involvement (neuro-Behçet's)","Large-vessel aneurysm or thrombosis"],
    diffs:["Recurrent aphthous stomatitis (isolated)","Inflammatory bowel disease-associated ulcers","Systemic lupus erythematosus","Herpes simplex-related ulceration"],
    note:"In this patient: diagnosed on pathergy positivity plus recurrent ulcer history — explains mucocutaneous findings, but does not obviously account for the fasting-pattern edema or lifelong sleep disruption (see Provocation module #30)."
  },
  {
    name:"Chronic Kidney Disease",
    sub:"GENERAL MEDICINE · COMMON · GENERAL & VITAL SIGNS",
    tags:[["chronic","CHRONIC"],["","PROGRESSIVE"],["serious","SERIOUS"],["redflag","HIGH IF UNTREATED"],["","NOT CURABLE"],["","SUPPORTIVE/SYMPTOMATIC ONLY"]],
    risk:["Diabetes mellitus","Hypertension","Age > 65 years","Recurrent urinary tract infections","Nephrotoxic drug use (NSAIDs, contrast)","Smoking"],
    symptoms:["Fatigue","Anorexia","Nausea","Pruritus","Reduced urine output","Breathlessness"],
    exam:["Peripheral edema","Pallor","Hypertension","Uremic fetor","Anasarca"],
    redflags:["eGFR < 15 mL/min (Stage 5 CKD)","Severe hyperkalemia with ECG changes","Refractory fluid overload/pulmonary edema","Uremic encephalopathy or pericarditis"],
    diffs:["Acute kidney injury","Nephrotic syndrome","Congestive heart failure with renal congestion"],
    note:"Reference profile from the general knowledge graph — used here as a comparator, not a confirmed diagnosis. Her childhood recurrent kidney infections and adult low-urine-output pattern make renal handling worth re-checking, even without a formal CKD label."
  },
  {
    name:"Glycogen Storage Disease (Type III / IX, VUS)",
    sub:"INBORN METABOLIC DISEASE · HEPATIC/MUSCLE · UNCONFIRMED",
    tags:[["chronic","CHRONIC"],["","FASTING-SENSITIVE"],["serious","VARIANT OF UNCERTAIN SIGNIFICANCE"],["","DIET-MODIFIABLE"]],
    risk:["Autosomal recessive inheritance (both copies usually needed for classic disease)","Consanguinity","Family history of unexplained hepatomegaly/myopathy"],
    symptoms:["Fasting-sensitive fatigue and swelling","Poor exercise tolerance","Delayed growth in childhood","Recurrent 'sick' feeling with meals"],
    exam:["Hepatomegaly (variable)","Abdominal distension","Short stature","Elevated transaminases"],
    redflags:["Severe fasting hypoglycemia","Marked lactic acidosis","Progressive liver fibrosis/cirrhosis"],
    diffs:["Non-alcoholic fatty liver disease (isolated)","Congenital adrenal hyperplasia (3β-HSD)","Cushing's syndrome / pseudo-Cushing's"],
    note:"Currently a variant of uncertain significance in this patient — biopsy pending. Diet response (low-carb/high-fat) is suggestive but not diagnostic; treat as the leading unifying hypothesis, not a settled answer (see CAT 2 and module #28)."
  }
];
const kgBody = document.getElementById('kgbody');
kgBody.innerHTML = kgData.map((d,i)=>`
  <div class="kg-card" id="kg${i}">
    <div class="kg-head" onclick="document.getElementById('kg${i}').classList.toggle('open')">
      <div><div class="kg-name">${d.name}</div><div class="kg-sub">${d.sub}</div></div>
      <div class="kg-caret">&#9656;</div>
    </div>
    <div class="kg-body">
      <div class="kg-tags">${d.tags.map(t=>`<span class="kg-tag ${t[0]}">${t[1]}</span>`).join('')}</div>
      <div class="kg-sec"><div class="kg-sec-label">Risk Factors</div>${d.risk.map(r=>`<span class="kg-chip">${r}</span>`).join('')}</div>
      <div class="kg-sec"><div class="kg-sec-label">Symptoms</div>${d.symptoms.map(r=>`<span class="kg-chip">${r}</span>`).join('')}</div>
      <div class="kg-sec"><div class="kg-sec-label">Exam Signs</div>${d.exam.map(r=>`<span class="kg-chip exam">${r}</span>`).join('')}</div>
      <div class="kg-sec"><div class="kg-sec-label">Red Flags</div>${d.redflags.map(r=>`<span class="kg-chip rf">${r}</span>`).join('')}</div>
      <div class="kg-sec"><div class="kg-sec-label">Differential Diagnoses</div>${d.diffs.map(r=>`<span class="kg-chip">${r}</span>`).join('')}</div>
      <div class="kg-note">${d.note}</div>
    </div>
  </div>`).join('');

/* ---------------- CLINICAL PATHWAYS EXPLORER ---------------- */
const pwData = [
  {
    name:"Acute Pancreatitis",
    sub:"GENERAL SURGERY · ICD-10 K85.9 · COMMON",
    tags:[["","ER / WARD / ICU"],["serious","HIGH URGENCY"]],
    recognition:"Sudden severe epigastric pain radiating to the back, often after fatty food or alcohol, with nausea/vomiting; Grey Turner's/Cullen's signs in severe disease.",
    diagnosis:"Requires 2 of 3: characteristic pain, lipase/amylase >3x upper limit, or characteristic CT/MRI/ultrasound findings. Lipase preferred over amylase; CT best performed at 72h if severity assessment needed.",
    steps:[
      "0–1h: IV access, bloods (lipase, FBC, U&E, LFTs, calcium, glucose, triglycerides, CRP)",
      "0–6h: Aggressive isotonic IV fluids titrated to urine output ≥0.5 mL/kg/h",
      "0–6h: IV opioid analgesia, titrated to effect",
      "0–6h: Severity scoring (BISAP/Ranson's/APACHE II) to triage ward vs ICU",
      "Days 1–3: Early enteral feeding once tolerated; antibiotics only for confirmed infection",
      "Escalation: cholecystectomy for gallstone pancreatitis; step-up drainage for infected necrosis"
    ],
    redflags:["Persistent organ failure >48h","Hypotension unresponsive to fluids","Rising CRP with new fever (infected necrosis)","Grey Turner's/Cullen's sign"],
    note:"Included as a structural template, not because this patient has pancreatitis — her recurring abdominal pain/swelling episodes deserve the same systematic recognition → red-flag pipeline before assuming a metabolic cause."
  },
  {
    name:"Recurrent Angioedema-like Swelling — Diagnostic Workup",
    sub:"ALLERGY/IMMUNOLOGY · CONSTRUCTED FOR THIS CASE",
    tags:[["","OUTPATIENT / ER IF SEVERE"],["serious","REQUIRES STEPWISE EXCLUSION"]],
    recognition:"Recurrent, non-pitting, non-urticarial swelling of face/abdomen/limbs, without a clear allergen, often trigger-linked (exertion, smoke, specific foods, emotional stress).",
    diagnosis:"Stepwise exclusion: (1) C1-inhibitor level/function + C4 to rule out hereditary angioedema; (2) tryptase/IgE workup to rule out mast-cell/allergic causes; (3) metabolic screen (lactate, ammonia, glucose response to fasting) if diet-linked; (4) hepatic/glycogen studies if fasting-sensitive.",
    steps:[
      "Step 1: Document trigger pattern and time-course (this terminal's timeline panel is built for exactly this)",
      "Step 2: C4, C1-inhibitor level and function — excludes classic HAE",
      "Step 3: Tryptase, total IgE, specific allergen panel if urticarial component present",
      "Step 4: Fasting challenge under monitoring — glucose, lactate, ammonia, ketones at intervals",
      "Step 5: Hepatic ultrasound + consider biopsy if GSD remains on the differential",
      "Step 6: Reassess G6PD/AMPD1 contribution only after structural and storage causes addressed"
    ],
    redflags:["Laryngeal/airway involvement","Rapid progression over minutes","Hemodynamic instability"],
    note:"Constructed pathway synthesizing this patient's own history — not a validated society guideline. Mirrors the Diagnostic Anchor Extractor (#30): metabolic-storage and mast-cell causes should be excluded before crediting G6PD/AMPD1 as the mechanism."
  },
  {
    name:"Behçet's Disease — Diagnostic Pathway",
    sub:"RHEUMATOLOGY · ISG/ICBD CRITERIA-INFORMED",
    tags:[["","OUTPATIENT"],["serious","CLINICAL DIAGNOSIS"]],
    recognition:"Recurrent oral ulceration (≥3 episodes/year) plus at least two of: genital ulceration, ocular lesions, skin lesions, or a positive pathergy test.",
    diagnosis:"No single confirmatory lab test; diagnosis rests on the clinical criteria above, HLA-B51 supportive but not required, pathergy test supportive if positive.",
    steps:[
      "Confirm ulcer frequency and distribution (oral + genital) over ≥12 months",
      "Pathergy skin-prick test",
      "Ophthalmology referral for uveitis screening even if asymptomatic",
      "Baseline inflammatory markers (CRP, ESR) and vascular imaging if large-vessel symptoms present",
      "Trial of colchicine or immunosuppression per rheumatology, with caution flagged in G6PD deficiency"
    ],
    redflags:["Visual symptoms (urgent ophthalmology)","New neurological signs (neuro-Behçet's)","Chest/back pain suggesting vascular aneurysm"],
    note:"Directly relevant: her doctor wanted to start colchicine, but her G6PD deficiency raises hemolytic-crisis risk with certain agents — a concrete example of one diagnosis constraining another diagnosis's standard treatment."
  },
  {
    name:"Metabolic Myopathy Evaluation (Exercise Intolerance)",
    sub:"NEUROLOGY/METABOLIC · CONSTRUCTED FOR THIS CASE",
    tags:[["","OUTPATIENT"],["","STEPWISE"]],
    recognition:"Exercise-induced myalgia, cramping, or early fatigue disproportionate to exertion level, present since childhood, without baseline weakness.",
    diagnosis:"Forearm/graded exercise testing with lactate and ammonia sampling distinguishes glycolytic defects (McArdle-type, flat lactate) from purine-cycle defects (AMPD1, flat ammonia rise); CK and EMG as adjuncts; genetic panel to confirm AMPD1 zygosity.",
    steps:[
      "Baseline CK, TSH, vitamin D, electrolytes",
      "Forearm or cycle-ergometer exercise test with paired lactate/ammonia sampling",
      "EMG only if weakness (not just fatigue) is present",
      "Targeted genetic testing to confirm AMPD1 zygosity and rule out co-existing McArdle/CPT-II variants",
      "Empiric ribose/CoQ10 trial with structured symptom diary (formalizes what this patient has already been doing informally)"
    ],
    redflags:["Myoglobinuria (dark urine after exertion)","Very high CK with renal impact","Cardiac involvement (arrhythmia, cardiomyopathy)"],
    note:"Turns the patient's own 20+ self-tried supplement log into a structured, testable protocol — directly answers module #45's challenge that uncontrolled self-trials can't isolate what's actually working."
  }
];
const pwBody = document.getElementById('pwbody');
pwBody.innerHTML = pwData.map((p,i)=>`
  <div class="kg-card" id="pw${i}">
    <div class="kg-head" onclick="document.getElementById('pw${i}').classList.toggle('open')">
      <div><div class="kg-name">${p.name}</div><div class="kg-sub">${p.sub}</div></div>
      <div class="kg-caret">&#9656;</div>
    </div>
    <div class="kg-body">
      <div class="kg-tags">${p.tags.map(t=>`<span class="kg-tag ${t[0]}">${t[1]}</span>`).join('')}</div>
      <div class="kg-sec"><div class="kg-sec-label">Recognition</div><div class="kg-note">${p.recognition}</div></div>
      <div class="kg-sec"><div class="kg-sec-label">Diagnosis</div><div class="kg-note">${p.diagnosis}</div></div>
      <div class="kg-sec"><div class="kg-sec-label">Management Steps</div><ol class="pw-steps">${p.steps.map(s=>`<li>${s}</li>`).join('')}</ol></div>
      <div class="kg-sec"><div class="kg-sec-label">Red Flags</div>${p.redflags.map(r=>`<span class="kg-chip rf">${r}</span>`).join('')}</div>
      <div class="kg-note" style="margin-top:8px;">${p.note}</div>
    </div>
  </div>`).join('');

/* ---------------- BASIC SCIENCE CONCEPTS EXPLORER ---------------- */
const basicSciData = [
  {name:"Pentose Phosphate Pathway & NADPH", sub:"BIOCHEMISTRY · REDOX METABOLISM",
   why:"Underpins G6PD deficiency — the rate-limiting enzyme that keeps this pathway running is exactly what's deficient here.",
   points:["G6PD generates NADPH, the main reducing currency for regenerating glutathione.","Reduced glutathione protects red cells (and other tissues) from oxidative damage.","Deficiency leaves cells vulnerable to oxidant stress from drugs, infections, and fava beans."]},
  {name:"Purine Nucleotide Cycle (AMP → IMP)", sub:"BIOCHEMISTRY · MUSCLE ENERGETICS",
   why:"Explains the AMPD1-deficiency component of her exercise intolerance and links to the adenosine/sleep hypothesis.",
   points:["AMPD1 (myoadenylate deaminase) converts AMP to IMP during muscle exertion, helping regenerate ATP.","Deficiency impairs this buffering, causing early fatigue and myalgia on exertion.","Adenosine, a related purine metabolite, is independently a sleep-promoting signaling molecule."]},
  {name:"Glycogenolysis & Gluconeogenesis", sub:"BIOCHEMISTRY · CARBOHYDRATE METABOLISM",
   why:"Central to the suspected glycogen storage disease (GSD III/IX) driving her fasting-sensitive symptoms.",
   points:["Glycogen is broken down (glycogenolysis) to maintain blood glucose between meals.","GSD III/IX involve defective glycogen debranching/branching, impairing glucose release on fasting.","Explains why fasting can paradoxically worsen — or in this patient's case, sometimes improve — symptoms depending on the underlying defect."]},
  {name:"GABA-A Receptor Physiology", sub:"NEUROSCIENCE · SLEEP & SEDATION",
   why:"Explains the reported hypnotic (sleep-promoting) effect of L-serine in this patient's self-directed regimen.",
   points:["GABA-A receptors are the main inhibitory neurotransmitter receptors in the CNS.","L-serine's reported hypnotic effect is proposed to act through a GABA-A-linked mechanism distinct from glycine's own receptor.","Useful for separating a plausible neuropharmacologic mechanism from a purely anecdotal supplement effect."]},
  {name:"Autoinflammatory vs. Autoimmune Disease", sub:"IMMUNOLOGY · MECHANISM DISTINCTION",
   why:"Relevant to correctly framing Behçet's disease, which is autoinflammatory (innate immune) rather than classically autoimmune.",
   points:["Autoinflammatory disease involves dysregulated innate immunity without a clear autoantibody/antigen-specific driver.","Behçet's disease fits this pattern — HLA-B51 associated, pathergy-reactive, without a diagnostic autoantibody.","Distinguishes it mechanistically from antibody-driven diseases like SLE, which enter the same differential."]},
  {name:"Renal Water & Sodium Handling", sub:"PHYSIOLOGY · FLUID BALANCE",
   why:"Relevant to interpreting her salt craving and low urine output alongside a childhood history of recurrent kidney infections.",
   points:["The kidney's countercurrent and hormonal (RAAS, ADH) systems govern sodium and water balance.","Salt craving can be a compensatory response to a renal-losing state, or simply behavioral — the two require different workups.","Chronic childhood pyelonephritis can leave subtle, only-later-apparent tubular or concentrating defects."]},
  {name:"X-linked vs. Autosomal Inheritance", sub:"GENETICS · INHERITANCE PATTERNS",
   why:"Frames why G6PD deficiency (X-linked) and suspected GSD (autosomal recessive) behave differently across her family and future offspring.",
   points:["G6PD is X-linked — hemizygous males are typically more severely affected, but heterozygous females can still be symptomatic via X-inactivation mosaicism.","GSD III/IX are autosomal recessive — usually needs two affected alleles for classic disease, which is why a single VUS is not yet diagnostic.","Matters directly for genetic counseling if pregnancy is considered."]},
  {name:"Variant of Uncertain Significance (VUS)", sub:"GENOMICS · VARIANT INTERPRETATION",
   why:"Central to understanding why the GSD finding is a hypothesis, not a confirmed diagnosis.",
   points:["A VUS is a genetic variant whose effect on protein function/disease risk isn't yet established.","VUS status can be upgraded (pathogenic) or downgraded (benign) as more functional or population data accumulate.","Diagnosing a disease purely from a VUS, without a matching phenotype/biopsy, risks anchoring on an unconfirmed cause."]},
];
document.getElementById('basicscibody').innerHTML = basicSciData.map((d,i)=>`
  <div class="kg-card" id="bs${i}">
    <div class="kg-head" onclick="document.getElementById('bs${i}').classList.toggle('open')">
      <div><div class="kg-name">${d.name}</div><div class="kg-sub">${d.sub}</div></div>
      <div class="kg-caret">&#9656;</div>
    </div>
    <div class="kg-body">
      <div class="kg-note" style="margin-bottom:8px;"><b style="color:var(--amber-bright);">Why it matters here:</b> ${d.why}</div>
      <div class="kg-sec-label">Key Points</div>
      <ul class="pw-steps">${d.points.map(p=>`<li>${p}</li>`).join('')}</ul>
    </div>
  </div>`).join('');

/* ---------------- FURTHER QUERIES TO ASK PATIENT ---------------- */
const furtherQueries = [
  {q:"Does the edema ever occur without a preceding trigger (fasting, exertion, heat, stress), or is it always trigger-linked?", why:"Trigger-free episodes would argue against a metabolic/oxidative mechanism and back toward a fixed structural or hormonal cause."},
  {q:"How many hours of fasting, specifically, before swelling improves — and does it recur on refeeding within a predictable window?", why:"A reproducible fasting/refeeding time-course is the single most useful bedside clue for a glycogen-storage mechanism."},
  {q:"Has she ever measured her own urine output or fluid intake over a 24h period during a flare vs. a well period?", why:"Quantified oliguria vs. edema timing separates a renal-handling story from a third-spacing story."},
  {q:"Family history — does any first-degree relative share edema, ulcers, exercise intolerance, or unexplained liver findings?", why:"Autosomal recessive GSD and X-linked G6PD both carry inheritance patterns worth mapping onto the family tree."},
  {q:"What exactly improved and by how much on cimetidine — and was cornstarch filler ever trialled alone as a control?", why:"Distinguishing drug effect from filler effect directly tests the patient's own alternative hypothesis (module #28)."},
  {q:"Has ICP (intracranial pressure) ever actually been measured, despite decades of headache and requests?", why:"A repeatedly requested but never-performed test is a concrete gap, not a settled negative."},
  {q:"Any history of miscarriage, clotting, or bleeding tendency beyond the noted ectopic pregnancy?", why:"Screens for an unaddressed coagulation or vascular contributor referenced in the reasoning map (module #54)."},
];
const queryBody = document.getElementById('querybody');
queryBody.innerHTML = furtherQueries.map(f=>`
  <div class="qr-row"><div class="qr-q">${f.q}</div><div class="qr-why">Why ask: ${f.why}</div></div>`).join('');

/* ---------------- REQUIRED LABS ---------------- */
const requiredLabs = [
  {name:"C4 + C1-inhibitor level & function", why:"Rules out classic hereditary angioedema before crediting G6PD/AMPD1 for the swelling.",
   interp:["Low C4 + low/dysfunctional C1-INH → supports hereditary angioedema; would redirect the whole workup toward a C1-INH pathway, not G6PD/AMPD1.","Normal C4 and C1-INH → argues against classic HAE, keeps the metabolic/oxidative hypotheses on the table.","Low C4 with normal C1-INH function → consider acquired angioedema or a consumptive complement process instead."]},
  {name:"Fasting challenge panel: glucose, lactate, ammonia, ketones (serial)", why:"Directly tests the fasting-sensitive edema pattern and screens for a glycogen-storage/hypoglycemia mechanism.",
   interp:["Hypoglycemia with blunted ketone rise → suggests a glycogenolysis/gluconeogenesis defect, consistent with GSD III/IX.","Rising lactate disproportionate to glucose drop → points toward a glycolytic or mitochondrial defect rather than classic GSD III/IX.","Normal glucose/lactate/ammonia trajectory → fasting-sensitivity may be symptomatic (e.g. autonomic) rather than a true storage-disease signature."]},
  {name:"Hepatic ultrasound ± biopsy with enzyme/glycogen analysis", why:"Only test that can upgrade GSD III/IX from VUS to a confirmed diagnosis.",
   interp:["Excess glycogen with low debranching/branching enzyme activity → confirms GSD, upgrades VUS to pathogenic.","Normal glycogen content and enzyme activity → argues against GSD, keeps the VUS as likely non-contributory.","Fatty infiltration without glycogen excess → suggests NAFLD as an alternative/co-existing explanation for hepatic findings."]},
  {name:"Forearm/graded exercise test with paired lactate & ammonia sampling", why:"Distinguishes AMPD1 (flat ammonia) from glycolytic defects like McArdle disease (flat lactate).",
   interp:["Flat ammonia rise with normal lactate rise → consistent with AMPD1 deficiency as the exercise-intolerance driver.","Flat lactate rise with normal ammonia → points to a glycolytic defect (e.g. McArdle) instead of/alongside AMPD1.","Both curves blunted → consider a combined or mitochondrial myopathy, prompting broader genetic testing."]},
  {name:"Tryptase + total IgE + specific allergen panel", why:"Excludes a mast-cell or allergic driver as an alternative to the oxidative-stress hypothesis.",
   interp:["Elevated baseline tryptase → raises suspicion for a mast-cell disorder as a co-driver of episodic swelling.","Normal tryptase/IgE → makes a mast-cell or classic allergic mechanism less likely.","Elevated specific IgE to a named trigger → identifies a treatable allergic contributor worth isolating from the metabolic story."]},
  {name:"HLA-B51, CRP/ESR, ophthalmology slit-lamp screen", why:"Supports or refutes the Behçet's label and screens for silent uveitis before starting immunosuppression.",
   interp:["HLA-B51 positive + elevated CRP/ESR → supportive of the Behçet's diagnosis, though not required for it.","Active uveitis found on slit-lamp despite no visual symptoms → escalates urgency and changes the immunosuppression risk/benefit calculus.","HLA-B51 negative, normal inflammatory markers → diagnosis still stands clinically, but strengthens the case for re-examining alternative explanations for the ulcers."]},
  {name:"eGFR/creatinine trend + urine output diary", why:"Establishes whether her childhood renal infections left any lasting glomerular or tubular deficit.",
   interp:["Declining eGFR trend over time → suggests chronic renal scarring from childhood infections, warrants nephrology referral.","Stable eGFR with persistently low urine output → points toward a concentrating/hormonal issue rather than progressive CKD.","Normal eGFR and unremarkable diary → renal handling is currently intact; salt craving likely non-renal in origin."]},
];
const labsBody = document.getElementById('labsbody');
labsBody.innerHTML = requiredLabs.map((l,i)=>`
  <div class="lab-row">
    <div class="lab-top"><span class="lab-name">${l.name}</span><button class="order-btn" id="orderbtn${i}" onclick="interpretLab(${i})">INTERPRET RESULT</button></div>
    <div class="lab-why">${l.why}</div>
    <div class="lab-interp" id="labinterp${i}" style="display:none;"></div>
  </div>`).join('');
function interpretLab(i){
  const box = document.getElementById('labinterp'+i);
  const b = document.getElementById('orderbtn'+i);
  const showing = box.style.display !== 'none';
  if(showing){ box.style.display='none'; b.textContent='INTERPRET RESULT'; return; }
  box.innerHTML = `<div class="log-sq-label" style="margin-top:8px;color:var(--yellow);">Possible Interpretations</div>${requiredLabs[i].interp.map(t=>`<div class="log-sq-item">${t}</div>`).join('')}<div class="small" style="margin-top:6px;">Educational — illustrative interpretations only, not an actual result.</div>`;
  box.style.display='block';
  b.textContent='HIDE INTERPRETATION';
}

/* ---------------- MEDICATIONS / INTERVENTIONS ---------------- */
const medsList = [
  {name:"L-serine", dose:"self-reported oral dosing", why:"Hypnotic effect via a GABA-A-linked mechanism, targeting her lifelong sleep disruption."},
  {name:"D-ribose", dose:"self-reported oral dosing", why:"Replenishes the adenine nucleotide pool consumed during exertion, consistent with the AMPD1 pathway rationale."},
  {name:"Cimetidine", dose:"as prescribed", why:"Reported to reduce swelling — but its near-pure cornstarch filler is an unexamined confound worth isolating."},
  {name:"NAC (N-acetylcysteine)", dose:"self-reported oral dosing", why:"Glutathione precursor, targeting the oxidative-stress axis implicated by G6PD deficiency."},
  {name:"Iron / folate", dose:"as prescribed", why:"Supports erythropoiesis under chronic low-grade hemolytic stress from G6PD deficiency."},
  {name:"Modified low-carb, high-fat diet", dose:"dietary, ongoing", why:"Empirically reduces fasting-sensitive swelling — consistent with (but not diagnostic of) a glycogen-storage mechanism."},
  {name:"Colchicine (proposed, not yet started)", dose:"pending rheumatology", why:"Standard Behçet's therapy, but flagged as a potential hemolytic-crisis trigger given her G6PD deficiency — requires explicit risk discussion first."},
];
const medsBody = document.getElementById('medsbody');
medsBody.innerHTML = medsList.map((m,i)=>`
  <div class="med-row"><span class="med-name">${m.name}</span><span class="med-dose">${m.dose}</span>
    <button class="order-btn" style="margin-left:8px;" onclick="queryEvidence(${i})">EVIDENCE BASIS?</button>
    <div class="med-why">${m.why}</div>
  </div>`).join('');
function queryEvidence(i){
  const m = medsList[i];
  const prompt = `In the context of this patient — 42F, lifelong episodic multi-system edema, G6PD deficiency (Seattle variant), heterozygous AMPD1 deficiency, Behçet's disease, suspected (VUS) glycogen storage disease — what is the actual evidence base and mechanistic rationale for using ${m.name} (${m.dose})? Specifically: what published or mechanistic evidence supports it in a patient with this profile, what evidence is missing or purely anecdotal, and what would need to be true for this to be more than a plausible-sounding intervention?`;
  const line = document.createElement('div');
  line.className='cline';
  const hasKey = !!getGeminiKey();
  line.innerHTML = `<span class="cprompt">vibe&gt;</span> EVIDENCE QUERY QUEUED — <b>${m.name}</b><br>
    <pre style="white-space:pre-wrap;background:#0a0a0a;border:1px solid #333;padding:8px 10px;border-radius:2px;margin:6px 0;color:#e8c98a;">${prompt}</pre>
    <span class="ctag v">EVIDENCE CHECK →</span> <span class="gemini-out">${hasKey ? '<i>Calling Gemini…</i>' : 'No Gemini key set — paste this prompt into your LLM of choice to get an evidence appraisal, or add a key via the ⚿ GEMINI API KEY button above.'}</span>`;
  consoleBody.appendChild(line);
  consoleBody.scrollTop = consoleBody.scrollHeight;
  showToast(`Evidence query queued for <b>${m.name}</b> — see Reasoning Console.`);
  if(hasKey){
    const sys = "You are the reasoning engine inside a clinical-education terminal called Vibe Rounds Terminal, evaluating the evidence basis for an intervention in a specific patient case. Be balanced and specific: cite the type of evidence that exists (mechanistic, case-report, anecdotal, controlled trial) and be explicit about what is NOT established. 4-7 sentences. Educational reasoning practice, not real clinical advice.";
    callGemini(prompt, sys).then(text=>{
      const target = line.querySelector('.gemini-out');
      target.innerHTML = text ? text.replace(/\n/g,'<br>') : 'No Gemini key set — paste this prompt into your LLM of choice to get an evidence appraisal.';
      consoleBody.scrollTop = consoleBody.scrollHeight;
    });
  }
}

/* ---------------- DRUG-DRUG / DRUG-DISEASE INTERACTION INSIGHTS ---------------- */
const interactions = [
  {type:"drug-disease", sev:"major", a:"Colchicine (proposed)", b:"G6PD deficiency (Seattle variant)", note:"Oxidant-stress-associated agents can precipitate a hemolytic crisis in G6PD-deficient patients — flag before starting, monitor Hb/haptoglobin if trialled."},
  {type:"drug-disease", sev:"major", a:"Antimalarials / sulfa-class drugs", b:"G6PD deficiency", note:"Classic hemolysis triggers in G6PD deficiency; already caused a documented severe reaction in this patient — avoid unless no alternative exists."},
  {type:"drug-drug", sev:"moderate", a:"Cimetidine", b:"Other hepatically-cleared drugs (e.g. warfarin, phenytoin)", note:"Cimetidine inhibits CYP450 enzymes and can raise levels of co-administered hepatically-metabolized drugs — review the full medication list before adding new agents."},
  {type:"drug-disease", sev:"minor", a:"NAC (N-acetylcysteine)", b:"Suspected glycogen storage disease / hepatic involvement", note:"Generally hepatically well-tolerated, but any new hepatic-axis supplement warrants baseline LFTs given unresolved GSD workup."},
  {type:"drug-drug", sev:"minor", a:"Iron supplementation", b:"NAC / antioxidant supplements", note:"High-dose antioxidants can theoretically alter iron absorption kinetics; separate dosing times as a precaution rather than co-administering."},
  {type:"drug-disease", sev:"moderate", a:"D-ribose (high dose)", b:"Suspected fasting-sensitive glycogen storage disease", note:"Ribose is itself a carbohydrate substrate; large doses could theoretically blunt the symptomatic benefit reported from her low-carb/fasting pattern — worth tracking against her own diary."},
];
const sevLabelMap = {major:"MAJOR", moderate:"MODERATE", minor:"MINOR"};
const interactionsBody = document.getElementById('interactionsbody');
interactionsBody.innerHTML = interactions.map(x=>`
  <div class="med-row">
    <span class="med-name">${x.a}</span> <span class="med-dose">↔ ${x.b}</span>
    <span class="sev-badge ${x.sev}">${sevLabelMap[x.sev]}</span>
    <span class="tagpill" style="margin-left:6px;">${x.type==='drug-disease'?'DRUG–DISEASE':'DRUG–DRUG'}</span>
    <div class="med-why">${x.note}</div>
  </div>`).join('') +
  `<div class="small" style="margin-top:8px;">Severity grading is illustrative/educational, not a substitute for a pharmacist-reviewed interaction check.</div>`;

/* ---------------- FUTURE TRAJECTORY ---------------- */
const trajectory = [
  {stage:"Weeks", sub:"0–8 weeks", items:[
    "Complete pending confirmatory labs: C4/C1-INH, fasting challenge panel, tryptase/IgE.",
    "Baseline ophthalmology slit-lamp screen before any immunosuppression decision.",
    "Structured symptom diary linking meals, fasting windows, and swelling episodes.",
  ]},
  {stage:"Months", sub:"2–12 months", items:[
    "Hepatic biopsy or upgraded genetic testing to resolve the GSD III/IX VUS one way or the other.",
    "Forearm/graded exercise test to clarify the AMPD1 contribution to exercise intolerance.",
    "Rheumatology follow-up on Behçet's control; revisit colchicine risk/benefit given G6PD status.",
    "Formal sleep study given the multi-year sleep-disruption pattern.",
  ]},
  {stage:"Years", sub:"1–5 years", items:[
    "If GSD confirmed: establish a dietitian-supervised long-term feeding/fasting protocol rather than a self-directed one.",
    "Periodic renal function trending given childhood recurrent infections and adult low-urine-output pattern.",
    "Ongoing dermatology/ophthalmology surveillance for Behçet's-related complications.",
    "Genetic counseling if future pregnancy is considered, given the multi-gene variant profile.",
  ]},
  {stage:"Decades", sub:"5+ years", items:[
    "Long-term surveillance for cumulative organ impact (renal, hepatic, ocular) if any of the suspected chronic processes are confirmed.",
    "Reassessment of the 'unifying diagnosis' hypothesis as genetic and biopsy evidence accumulates over time.",
    "Family-history-informed screening for first-degree relatives given the inherited components (G6PD X-linked, GSD autosomal recessive).",
  ]},
];
document.getElementById('trajectorybody').innerHTML = trajectory.map(t=>`
  <div class="traj-row">
    <div class="traj-stage"><div class="tlabel">${t.stage}</div><div class="tsub">${t.sub}</div></div>
    <div class="traj-content">${t.items.map(i=>`<div class="traj-item">• ${i}</div>`).join('')}</div>
  </div>`).join('') +
  `<div class="small" style="margin-top:8px;">Illustrative projected trajectory built from the case's open questions — not a guarantee of course or outcome.</div>`;

/* ---------------- ALERT: SYMPTOMS & SIDE EFFECTS ---------------- */
const alertSymptoms = [
  "Airway/laryngeal swelling, sudden difficulty breathing or swallowing — treat as an emergency regardless of the presumed cause.",
  "Dark tea-colored urine, sudden severe pallor or jaundice — possible acute hemolytic crisis, especially after any oxidant-drug exposure.",
  "New visual loss, eye pain, or floaters — possible Behçet's-related uveitis; needs same-day ophthalmology review.",
  "Severe fasting-triggered lethargy, confusion, or seizure-like activity — possible severe hypoglycemia from an undiagnosed glycogen-storage process.",
  "New focal neurological signs (weakness, numbness, vision loss, severe headache with vomiting) — rule out neuro-Behçet's or a vascular event urgently.",
  "Dark urine or muscle pain after strenuous exertion — possible rhabdomyolysis in the context of AMPD1 deficiency.",
];
const alertSideEffects = [
  "Colchicine: diarrhea, abdominal cramping, and — specifically in this patient — any sign of hemolysis (fatigue, jaundice, dark urine) given her G6PD status.",
  "Cimetidine: confusion (especially in higher doses), gynecomastia with prolonged use, and drug-level changes in co-administered hepatically-cleared medications.",
  "NAC: nausea, GI upset; rare hypersensitivity reactions with IV forms (not applicable to oral use here).",
  "Iron supplementation: constipation, GI upset, false-reassurance if taken despite an undiagnosed hemolytic process masking true iron status.",
  "L-serine/ribose (high dose, self-directed): GI upset, hypoglycemia-like symptoms with ribose in large doses — worth tracking against her own fasting-sensitivity pattern.",
];
document.getElementById('alertbox').innerHTML = `
  <div class="section-label" style="color:var(--red);border-top-color:var(--red);">⚠ Alert — Symptoms Requiring Urgent Review</div>
  <div style="background:#1a0a0a;border-left:3px solid var(--red);padding:9px 12px;margin:8px 0;font-size:12.5px;line-height:1.6;color:#ffcfc9;">
    ${alertSymptoms.map(s=>`<div style="margin-bottom:5px;">⚠ ${s}</div>`).join('')}
  </div>
  <div class="section-label" style="color:var(--yellow);border-top-color:var(--rule);">Medication / Intervention Side Effects to Watch</div>
  <div style="background:#1a1305;border-left:3px solid var(--yellow);padding:9px 12px;margin:8px 0;font-size:12.5px;line-height:1.6;color:#f2e6b0;">
    ${alertSideEffects.map(s=>`<div style="margin-bottom:5px;">• ${s}</div>`).join('')}
  </div>`;

/* ---------------- CLINICAL SCENARIO IMAGE-PROMPT SUMMARY ---------------- */
const imageSummary = `Create an educational medical infographic/illustration summarizing this de-identified clinical scenario:

A 42-year-old woman with a lifelong (since birth), episodic, multi-system pattern of non-histaminergic edema. Key features: fasting improves the swelling; carbohydrate-rich meals and exertion worsen it. Genetic findings: G6PD deficiency (Seattle variant), heterozygous AMPD1 deficiency, MTHFR C677T homozygous, a WNK1 ion-transport variant, and a variant of uncertain significance suggestive of glycogen storage disease (type III/IX). Confirmed/working diagnoses: Behçet's disease (pathergy-positive, recurrent oral/genital ulcers), PCOS. History includes neonatal jaundice, recurrent childhood kidney/lung infections, an adolescent crisis misread as an eating disorder, an ectopic pregnancy, incidental melanoma, and a later adult cluster of neurological symptoms (numbness, vertigo, transient vision loss). Current self-managed regimen: L-serine, D-ribose, cimetidine, NAC, iron/folate, and a modified low-carbohydrate diet.

Illustrate as a clean, clinical-education style diagram (timeline + body-systems map), no real patient photo, de-identified and schematic only.`;
document.getElementById('imgsumtext').value = imageSummary;
document.getElementById('imgsumcopy').addEventListener('click', async ()=>{
  try{
    await navigator.clipboard.writeText(imageSummary);
    showToast('Summary copied — paste into Gemini or ChatGPT to generate an image.');
  }catch(e){
    document.getElementById('imgsumtext').select();
    document.execCommand('copy');
    showToast('Summary copied.');
  }
});

/* ---------------- METABOLIC PATHWAY HYPOTHESIS — IMAGE PROMPT ---------------- */
const pathwayImageSummary = `Create an educational biochemistry/metabolic-pathway diagram illustrating this patient-specific hypothesis (de-identified, schematic only, no real patient depiction):

Show three interlinked pathways converging on one 42-year-old patient's phenotype:
1) Pentose Phosphate Pathway: G6PD (Seattle variant, deficient) → reduced NADPH → reduced glutathione → impaired antioxidant defense → oxidative stress in red cells and (hypothesized) vascular/muscle tissue → contributes to episodic edema and hemolytic triggers (fava beans, sulfa drugs, antimalarials).
2) Purine Nucleotide Cycle: AMPD1 (heterozygous deficiency) → impaired AMP-to-IMP conversion during exertion → early muscle fatigue/myalgia; adjacent adenosine signaling → hypothesized link to lifelong sleep disruption; supplemented with D-ribose (replenishes adenine nucleotide pool) and L-serine (GABA-A-linked hypnotic effect).
3) Glycogen Metabolism: suspected (VUS, unconfirmed) glycogen storage disease (type III/IX) → impaired glycogenolysis → fasting-sensitive symptoms, improved by a low-carbohydrate/high-fat diet and worsened by carbohydrate-rich meals.

Layer a fourth, separate box for the autoinflammatory Behçet's disease (pathergy-positive, recurrent ulcers) as a parallel but mechanistically distinct process, explicitly not derived from the three metabolic pathways above.

Style: clean biochemical pathway diagram with labeled arrows and boxes, clinical-education infographic style, no real photos, explicitly marked as a patient-generated hypothesis rather than an established mechanism.`;
document.getElementById('pathwayimgtext').value = pathwayImageSummary;
document.getElementById('pathwayimgcopy').addEventListener('click', async ()=>{
  try{
    await navigator.clipboard.writeText(pathwayImageSummary);
    showToast('Metabolic pathway hypothesis prompt copied — paste into Gemini or ChatGPT to generate a diagram.');
  }catch(e){
    document.getElementById('pathwayimgtext').select();
    document.execCommand('copy');
    showToast('Summary copied.');
  }
});

/* ---------------- NEET PG MCQ DRILL ---------------- */
const mcqs = [
  {
    q:"A 42F with lifelong episodic edema is found to have G6PD (Seattle variant) deficiency. Which of the following triggers is classically most associated with acute hemolysis in G6PD deficiency?",
    opts:["Fasting for 24 hours","Ingestion of fava beans","High-protein diet","Vigorous isometric exercise"],
    correct:1,
    exp:"Favism (fava bean-induced hemolysis) is a classic G6PD-deficiency trigger due to oxidant compounds (vicine, convicine) that overwhelm the reduced NADPH/glutathione capacity of deficient red cells. This directly matches the patient's own reported reaction.",
    tag:"G6PD"
  },
  {
    q:"AMPD1 (myoadenylate deaminase) deficiency classically impairs which step of muscle energy metabolism during exertion?",
    opts:["Conversion of AMP to IMP in the purine nucleotide cycle","Beta-oxidation of long-chain fatty acids","Glycogenolysis via myophosphorylase","Oxidative phosphorylation at Complex I"],
    correct:0,
    exp:"AMPD1 deaminates AMP to IMP, releasing ammonia and helping drive the myokinase reaction forward to regenerate ATP during exercise. Deficiency causes exercise-induced myalgia and early fatigue, as in this patient — distinct from McArdle disease (myophosphorylase) or CPT-II deficiency (fatty-acid oxidation).",
    tag:"AMPD1"
  },
  {
    q:"Which criterion is required to support a clinical diagnosis of Behçet's disease in a patient with recurrent oral ulcers?",
    opts:["Elevated ANA titer","Positive pathergy test or genital ulcers/ocular/skin lesions","Low C4 complement level","Positive rheumatoid factor"],
    correct:1,
    exp:"Behçet's is a clinical diagnosis: recurrent oral ulceration plus at least two of genital ulcers, ocular lesions, skin lesions, or a positive pathergy test. There is no single confirmatory serologic test — matching how this patient was diagnosed (pathergy + ulcer history).",
    tag:"Behçet's"
  },
  {
    q:"A patient with suspected Behçet's disease and known G6PD deficiency is being considered for colchicine. What is the primary safety concern?",
    opts:["Colchicine has no interaction with G6PD deficiency","Colchicine can precipitate a hemolytic crisis in G6PD deficiency","Colchicine causes irreversible renal failure in G6PD deficiency","Colchicine is contraindicated only in AMPD1 deficiency"],
    correct:1,
    exp:"Certain oxidant-stress-inducing or hemolysis-associated drugs must be used cautiously in G6PD deficiency; colchicine has been flagged as a potential precipitant of hemolytic crisis in deficient patients, which is exactly the concern raised when this patient's doctor proposed starting it.",
    tag:"Behçet's + G6PD"
  },
  {
    q:"A patient's swelling improves during fasting and worsens with carbohydrate-rich meals, prompting evaluation for glycogen storage disease (GSD) type III/IX. Which diagnostic step provides the most direct evidence for this diagnosis?",
    opts:["Serum G6PD enzyme activity level","Hepatic biopsy with enzyme/glycogen analysis or confirmatory genetic testing beyond VUS","Forearm exercise test with lactate/ammonia sampling","C1-esterase inhibitor level"],
    correct:1,
    exp:"A variant of uncertain significance (VUS) cannot confirm GSD; hepatic biopsy with enzyme assay or upgrading the genetic finding from VUS to pathogenic (or a validated functional study) is needed for definitive diagnosis. The forearm test is more relevant to AMPD1/McArdle-type myopathies, not hepatic GSD.",
    tag:"GSD"
  },
  {
    q:"In a patient with chronic recurrent kidney infections since childhood and low daily urine output, which finding would be a red flag warranting urgent nephrology referral?",
    opts:["Mild pruritus","eGFR < 15 mL/min or severe hyperkalemia with ECG changes","Occasional fatigue","Stable creatinine over several years"],
    correct:1,
    exp:"Per the CKD reference profile used as a comparator in this terminal, eGFR <15 (Stage 5) and severe hyperkalemia with ECG changes are explicit red flags requiring urgent escalation, distinct from the patient's baseline chronic, non-urgent symptoms.",
    tag:"CKD"
  }
];
let mcqCorrectCount = 0, mcqAttempted = 0, mcqIndex = 0;
const mcqBody = document.getElementById('mcqbody');
document.getElementById('mcqtotal').textContent = mcqs.length;

function renderMcq(i){
  if(i >= mcqs.length){
    mcqBody.innerHTML = `<div class="mcq-card">Drill complete — final score <b>${mcqCorrectCount} / ${mcqs.length}</b>. <button class="mcq-next" onclick="mcqIndex=0;mcqAttempted=0;mcqCorrectCount=0;document.getElementById('mcqcorrect').textContent=0;document.getElementById('mcqtotal').textContent=mcqs.length;renderMcq(0);">RESTART DRILL</button></div>`;
    return;
  }
  const m = mcqs[i];
  mcqBody.innerHTML = `
    <div class="mcq-progress">Question ${i+1} of ${mcqs.length}</div>
    <div class="mcq-card" id="mcq${i}">
      <div class="mcq-q"><span class="qn">Q${i+1}.</span>${m.q}<span class="mcq-tag">${m.tag}</span></div>
      <div class="mcq-opts">
        ${m.opts.map((o,j)=>`<button class="mcq-opt" data-i="${i}" data-j="${j}">${String.fromCharCode(65+j)}. ${o}</button>`).join('')}
      </div>
      <div class="mcq-exp" id="mcq-exp-${i}"><b>Explanation:</b> ${m.exp}</div>
    </div>`;
  mcqBody.querySelectorAll('.mcq-opt').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const ii = +btn.dataset.i, jj = +btn.dataset.j;
      const card = document.getElementById('mcq'+ii);
      if(card.classList.contains('answered')) return;
      card.classList.add('answered');
      mcqAttempted++;
      const opts = card.querySelectorAll('.mcq-opt');
      opts.forEach(o=>o.style.pointerEvents='none');
      if(jj===mcqs[ii].correct){
        btn.classList.add('correct');
        mcqCorrectCount++;
      } else {
        btn.classList.add('wrong');
        opts[mcqs[ii].correct].classList.add('correct');
      }
      document.getElementById('mcq-exp-'+ii).classList.add('show');
      document.getElementById('mcqcorrect').textContent = mcqCorrectCount;
      document.getElementById('mcqtotal').textContent = mcqs.length + ' (' + mcqAttempted + ' attempted)';
      const nextBtn = document.createElement('button');
      nextBtn.className = 'mcq-next';
      nextBtn.textContent = (ii+1 < mcqs.length) ? 'NEXT QUESTION →' : 'SEE FINAL SCORE →';
      nextBtn.onclick = ()=>{ mcqIndex = ii+1; renderMcq(mcqIndex); };
      card.appendChild(nextBtn);
    });
  });
}
renderMcq(mcqIndex);

/* ---------------- MUST-SEE — HIGHEST LEARNING VALUE ---------------- */
const mustSee = [
  {id:"p-cat", title:"★ Pre-Appraised Clinical Summaries (CATs)", why:"The core teaching artifact — shows exactly how evidence is appraised, not just cited, plus Triggers/Social/Lifestyle tabs."},
  {id:"p-kg", title:"★ Knowledge Graph — Diagnosis Explorer", why:"Fastest way to compare all candidate diagnoses side-by-side: risk factors, red flags, and where each one falls short."},
  {id:"p-basicsci", title:"★ Basic Science Concepts Explorer", why:"The mechanistic foundation underneath every diagnosis in this case — read this before the Knowledge Graph if the biochemistry feels shaky."},
  {id:"p-chat", title:"★ Socratic Learning Chat", why:"Active-recall practice — forces you to reason instead of just reading; connect a Gemini key for live, dynamic questioning."},
  {id:"p-mcq", title:"★ NEET PG MCQ Drill", why:"Turns the case into testable, scored recall — the highest-yield 5 minutes in this terminal."},
  {id:"p-ops", title:"Operations — Reasoning Console modules", why:"Shows the Promption vs. Provocation framework in action on a real case."},
  {id:"p-trajectory", title:"Future Trajectory", why:"Connects today's open questions to what should actually happen next, over weeks to decades."},
  {id:"p-pathwayimg", title:"Metabolic Pathway Hypothesis (image prompt)", why:"Copy-ready prompt to visualize how the three metabolic hypotheses interlink — great for building intuition fast."},
];
document.getElementById('mustseebody').innerHTML = `<div class="mustsee-grid">` + mustSee.map(m=>`
  <a class="mustsee-card" href="#${m.id}" onclick="revealPanel('${m.id}')" title="${m.why.replace(/"/g,'&quot;')}">
    <div class="ms-title">${m.title}</div>
    <div class="ms-why">${m.why}</div>
  </a>`).join('') + `</div>`;
function revealPanel(id){
  const p = document.getElementById(id);
  if(!p) return;
  if(p.classList.contains('collapsed')){
    p.classList.remove('collapsed');
    const btn = p.querySelector('.toggle-btn');
    if(btn) btn.textContent = 'HIDE';
  }
  setTimeout(()=>{
    p.style.animation = 'none';
    void p.offsetWidth;
    p.style.animation = 'pulseGlow 1.2s ease 2';
  }, 300);
}
</script>
</body>
</html>
```
