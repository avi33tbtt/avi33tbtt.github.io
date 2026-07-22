# Vibe Rounds — Clinical Decision Lab: Build Spec

Paste this file into an LLM along with a case (a link, a transcript, or raw case notes) and the prompt at the bottom. It reproduces the "Vibe Rounds" interactive clinical decision teaching tool: a single self-contained HTML file with two modes — an interactive **Active Mode** (decision lab) and a lightweight **Passive Mode** (flow-diagram map set).

---

## 1. What this tool is (concept)

Not a static case summary. It treats the case as a **sequence of real forks the clinician faced**, each one a small mystery the learner has to solve, not a fact to memorize. Every decision point:

- Is framed narratively first ("mystery"), then as a question.
- Offers 3–4 clickable options, only one clearly "correct," at least one "reasonable/context-dependent," and one or two clear pitfalls.
- Reveals **rationale** (why the right answer is right), **pitfall** (why a wrong one is tempting but wrong), or **context-dependent** framing (why an option is defensible only in certain conditions) — never a bare "correct/incorrect."
- Is rated on two 1–5 scales: **Clinical importance** and **Time urgency**, shown as small bar indicators, not just numbers.
- Where relevant, carries an **evidence** callout (numbers, named indices, guideline logic — grounding, not decoration).
- Where relevant, carries a **shared decision-making / patient autonomy** callout (the patient's comfort, privacy, preference — especially for sensitive history-taking).
- Where relevant, carries a **low-resource adaptation** callout (what to do when labs/imaging/blood bank/specialists aren't available) — toggled on/off globally.

A **live differential/tracker panel** updates as the learner (or "Solve for me") makes choices, so the case reads as a mystery unfolding, not a form being filled in.

---

## 2. Information architecture

### Top chrome (persistent across both modes)
1. **Disclaimer bar** — thin strip, monospace, small caps feel: "For learning clinical reasoning and educational purpose use only — not a diagnostic or clinical decision-support tool."
2. **Site bar** — dark strip below it: brand name (serif) + tagline (sans, muted) on the left; links (case source, portfolio/site) on the right, monospace, dotted underline, open in new tab.

### Hero (per mode)
- Eyebrow label (monospace, uppercase, bordered pill): e.g. "Clinical Decision Science · Interactive Decision Lab"
- H1 title (serif, large, one word in italic/gold accent allowed)
- Subtitle (one sentence framing the *task*, not the disease)
- **Mode switcher**: two large side-by-side cards right under the title — "Active Mode" (tagged "Live") vs "Passive Mode" — each with a one-line description of what it offers. This is a primary UI element, not a small tab strip.
- **Case strip**: a thin horizontal band of key facts as label/value pairs (age/sex, presenting complaint, key exam findings, relevant history, final diagnosis) — compact, scannable, always visible for orientation.

### Active Mode body
1. **Control bar** (sticky top): category tabs (`All decisions` + one per category), a spacer, a **Low-resource setting** toggle switch, and a **Solve entire case for me** button.
2. **Legend band**: dot-key for the two rating axes + one plain-text line explaining the interaction model (click to reveal, Solve for me, low-resource toggle).
3. **Two-column lab layout**:
   - Sticky left/side **tracker panel**: running differential or key-variables list, each item shows a status (open / ruled-out / confirmed / pending) that updates live, plus a reset button.
   - Main column: sections grouped by category, each with a category header (title + one-line sub-framing), then decision cards in sequence.
4. **Decision card** structure:
   - Eyebrow with importance/urgency bar-rating pair.
   - Mystery framing (1-2 sentences, scene-setting).
   - Explicit question.
   - 3-4 clickable options (letter + label). Clicking reveals the feedback text inline (rationale/pitfall/context-dependent), styled by outcome class (`correct` / `wrong` / `reasonable`).
   - Solve-for-me + Reset buttons per card.
   - Optional Evidence box / SDM box / Resource box, each visually distinct (colored left-border card, small caps label).
5. **Closing "decision spine"**: full case restated as one linear ordered list, for revision — ties every category's decisions into a single sequence.

### Passive Mode body
- Same hero/case-strip pattern, lighter framing ("Learner Map Set").
- A set of small/large flow-diagram "maps" (paired small maps + full-width ones), each box labeled with clinical-importance and time-urgency (1-5), plus a short teaching-point note. No click-to-reveal — pure fast-scan reference.

---

## 3. Visual design system (reuse exactly, or restyle consistently)

```
Color tokens (dark clinical-editorial theme):
  --bg:#14232c        --bg-deep:#0e1a21     (near-black teal, header/chrome backgrounds)
  --paper:#ffffff      --panel:#f4f6f5       (light content background)
  --ink:#1b2a30        --ink-soft:#526670    (body text, light-mode)
  --line:#dde3e1                              (hairline borders on light panels)
  --teal:#0f7c88       --teal-deep:#0b5a63    (primary accent — importance axis, active states)
  --rust:#c1622f                              (secondary accent — urgency axis, hero border)
  --amber:#c9922f      --sage:#3f7a63
  --crit:#b03a3a       --gold:#d99a52         (solve-all button, italic emphasis in h1)
  --cream:#f2ede1      --cream-soft:#b7c6c3   (text on dark backgrounds)

Fonts:
  --sans:  'IBM Plex Sans', Helvetica Neue, Arial, sans-serif   → body text, UI labels
  --serif: 'Source Serif Pro', Georgia, serif                    → headings, case-strip values, brand
  --mono:  'IBM Plex Mono', Courier New, monospace                → eyebrows, tabs, evidence labels, disclaimer, links
```

Design rules:
- Dark, editorial "clinical journal" hero with a subtle radial teal glow, bordered on the bottom by a thick rust accent line.
- Light panel body for the working content (cards on `--panel`/`--paper`), so the eye shifts from "case framing" (dark) to "working area" (light).
- Monospace is reserved for structural/UI chrome (tabs, eyebrows, evidence labels, links) — never for body prose. Serif is reserved for headings and emphasis values. Sans is everything else.
- Rounded pill buttons/tabs (`border-radius:20px`+) for interactive controls; small border-radius (~9px) for cards.
- Outcome coloring: correct = teal/sage family, wrong = rust/crit family, reasonable = amber/gold family — consistent everywhere (options, borders, boxes).
- Rating bars: 5 small blocks, filled left-to-right up to the score, one color for importance (teal) and one for urgency (rust).
- Sticky control bar and sticky tracker panel so orientation never gets lost while scrolling a long case.
- Fully responsive: case-strip/vitals-strip wrap into stacked rows, mode-switcher cards stack, two-column lab layout collapses to one column on mobile.
- Everything in **one self-contained HTML file** — inline `<style>` and `<script>`, no external dependencies, no build step, opens directly in a browser.

### Known pitfall to avoid
Do not use `display:inline-flex` on any element that mixes plain text nodes with inline child tags (like `<b>`) — flexbox collapses the whitespace between text and child elements and glues words together (e.g. "revealrationale"). Use a plain `inline` or `inline-block` display for any text-with-embedded-tags element; reserve `inline-flex` for icon+label chips only.

---

## 4. Data schema (drives the JS render — keep this shape)

```js
const DECISIONS = [
  {
    id: "d1",                    // unique id, referenced by tracker updates
    cat: "triage",                // one of the category keys below
    ci: 4,                        // clinical importance, 1-5
    tu: 3,                        // time urgency, 1-5
    mystery: "...",               // 1-2 sentence scene-setting, present tense, puts learner in the room
    question: "...",              // the explicit decision question
    options: [
      { letter:"A", label:"...", cls:"wrong",       text:"<b>Pitfall:</b> ...",
        diffUpdates:[{id:"gi", status:"open", note:"..."}] }, // optional tracker side-effects
      { letter:"B", label:"...", cls:"correct",     text:"<b>Rationale:</b> ..." },
      { letter:"C", label:"...", cls:"reasonable",  text:"<b>Context-dependent:</b> ..." },
      { letter:"D", label:"...", cls:"wrong",       text:"<b>Pitfall:</b> ..." }
    ],
    evidence: "...",              // optional — numbers/indices/guideline logic
    sdm: "...",                   // optional — shared decision-making / patient autonomy note
    resource: "..."               // optional — low-resource-setting adaptation
  },
  // ...one object per decision point, ideally 7-10 for a case of this size
];

const CATS = {
  triage:     { title:"Category I — Red-Flag & Triage Decisions", sub:"..." },
  history:    { title:"Category II — History-Taking & Shared Decision-Making", sub:"..." },
  diagnostic: { title:"Category III — Diagnostic Reasoning", sub:"..." },
  treatment:  { title:"Category IV — Treatment & Monitoring", sub:"..." },
  resource:   { title:"Category V — Resource-Constrained Care", sub:"..." }
};
```

Tracker panel: a small array of "items being tracked" (differentials, key variables), each with a `status` (`open` / `ruled-out` / `confirmed` / `pending`) that specific option choices update via `diffUpdates`. Reset button restores all to initial state.

Category set should be adapted per case, but the five-category pattern (Triage/Red-flags → History & Shared Decision-Making → Diagnostic Reasoning → Treatment & Monitoring → Resource-Constrained Care) is a good default skeleton for most clinical teaching cases.

---

## 5. Interaction behavior (JS logic to replicate)

- Category tabs filter which sections render; `all` shows everything grouped by category with headers.
- Clicking an option toggles a "revealed" state showing its `text` feedback inline, styled by `cls`.
- **Solve for me** (per card): auto-reveals the `correct` option's feedback and applies its `diffUpdates` to the tracker.
- **Solve entire case for me**: runs solve-for-me across every card in sequence.
- **Reset** (per card): clears revealed state and any tracker updates that card caused.
- **Low-resource toggle**: when on, every card's `resource` box becomes visually emphasized/primary (or the only guidance shown) — represents "same logic, adapted for constrained settings," not a separate case.
- **Mode switcher**: pure client-side show/hide between Active Mode and Passive Mode containers, no reload, state (tracker progress, revealed cards) can reset on mode switch — that's acceptable.
- No backend, no external calls — everything is inline JS driving inline data.

---

## 6. Tone / writing guidelines for content generation

- Write the "mystery" line like a clinical vignette moment, second person ("You have thirty seconds to decide...") — puts the learner in the scene.
- "Rationale" text should cite the *actual case data* (vitals, exam findings, timeline) as the justification, not generic textbook statements.
- "Pitfall" text should explain *why the wrong answer is tempting*, not just that it's wrong — that's what makes it a teaching tool instead of a quiz.
- "Context-dependent" options should state the specific condition under which they'd become correct.
- Evidence callouts should include a real number, named index/rule, or guideline logic where possible (e.g. absorption %, a named diagnostic index) — avoid vague "studies show."
- SDM callouts should specifically address the patient's comfort, privacy, consent, or preference — treat the patient as a person with agency, especially for sensitive topics (menstrual/sexual history, mental health, body image, family dynamics).
- Resource callouts should give a concrete low-cost/no-lab alternative action, not just "refer to a higher center."

---

## 7. Template file — use this, don't rebuild from scratch

`vibe-rounds-template.html` (attached alongside this spec) is the actual reference build — a complete, working file for the 15F iron-deficiency-anemia case. It's the fastest and most reliable path to a consistent output, because it removes all styling/layout guesswork: the LLM just edits data, not design.

**Preferred workflow — give the LLM both files and this instruction:**

> Here is the build spec and a working template HTML file. Keep the template's HTML structure, all CSS, and all JS logic exactly as-is — do not restyle, do not rename classes, do not change layout. Only replace the *content*: the site-bar case link, the hero title/subtitle/case-strip facts, the `DECISIONS` array, the `CATS` object (adapt category keys/titles/subs to fit the new case if needed), the tracker's differential/variable list, the closing decision-spine list, and the Passive Mode map content — using the new case below. Output one complete HTML file.

What to swap per new case (everything else stays untouched):
- `<title>` and site-bar case link (`href` + link text).
- Hero `h1`, `.subtitle`, and `.case-strip` items.
- The `DECISIONS` array — new content per the schema in Section 4 and the writing guidelines in Section 6.
- The `CATS` object — reuse the five-category skeleton unless the case needs different categories; keep the same object shape if changed.
- Tracker panel's tracked-items list and each `diffUpdates` reference (ids must match between `DECISIONS` options and the tracker's item list).
- The closing decision-spine `<ol>`.
- Passive Mode's map boxes/teaching-point notes.

Do **not** touch: CSS `:root` tokens, class names, the sticky control-bar/tracker layout, mode-switcher markup, or the JS render/event-handling functions — that's what keeps every case looking and behaving identically.

**Fallback prompt** (if only the spec is available, no template file):

> Act as a clinical decision science analyst. Using the attached case and the build spec above, generate a single self-contained HTML file implementing the Vibe Rounds Clinical Decision Lab exactly as specified: dark editorial hero with disclaimer bar, site bar, prominent Active/Passive mode switcher, case strip; Active Mode with category tabs, sticky tracker, low-resource toggle, solve-for-me, and 7-10 decision cards (mystery → question → 3-4 options with rationale/pitfall/context-dependent feedback, rated 1-5 on importance and urgency, plus evidence/SDM/resource boxes where relevant) grouped into the five-category skeleton (or an adapted version fitting this case); Passive Mode with a lightweight flow-diagram map set covering the same decisions. Use the exact color tokens, fonts, and component patterns from the spec. Output one complete HTML file, inline CSS/JS only, no external dependencies.

---

## 8. Reference implementation

`vibe-rounds-template.html` — a complete 15-year-old female iron-deficiency-anemia case build. This is both the design reference and the literal starting file for new cases (see Section 7).

## 9. Full template HTML (embedded)

Copy everything between the fences below into a new `.html` file to use it directly, or point the LLM at this fenced block as "the template."

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vibe Rounds - Clinical Decision Science · Interactive Decision Lab</title>
<style>
:root{
  --bg:#14232c; --bg-deep:#0e1a21; --paper:#ffffff; --panel:#f4f6f5; --ink:#1b2a30; --ink-soft:#526670;
  --line:#dde3e1; --teal:#0f7c88; --teal-deep:#0b5a63; --rust:#c1622f; --amber:#c9922f;
  --sage:#3f7a63; --crit:#b03a3a; --gold:#d99a52; --cream:#f2ede1; --cream-soft:#b7c6c3;
  --sans:'IBM Plex Sans','Helvetica Neue',Arial,sans-serif;
  --serif:'Source Serif Pro',Georgia,serif;
  --mono:'IBM Plex Mono','Courier New',monospace;
}
*{box-sizing:border-box;}
body{margin:0;background:var(--panel);color:var(--ink);font-family:var(--sans);font-size:16px;line-height:1.5;}
.wrap{max-width:1180px;margin:0 auto;padding:0 28px 100px;}
a{color:inherit;}

/* ===== TOP DISCLAIMER + SITE BAR ===== */
.disclaimer-bar{
  background:var(--teal-deep);color:#eaf6f5;text-align:center;font-family:var(--mono);font-size:12.5px;
  letter-spacing:.03em;padding:9px 16px;border-bottom:1px solid var(--bg-deep);
}
.site-bar{background:var(--bg-deep);border-bottom:1px solid #253c44;padding:14px 28px;}
.site-bar-inner{max-width:1180px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;}
.site-brand{font-family:var(--serif);font-size:18px;color:var(--cream);font-weight:600;}
.site-brand-sub{font-family:var(--sans);font-size:13.5px;color:var(--cream-soft);font-weight:400;margin-left:4px;}
.site-links{display:flex;gap:18px;}
.site-links a{
  font-family:var(--mono);font-size:12.5px;color:#9fd8db;text-decoration:none;border-bottom:1px dotted #3a5e63;
  padding-bottom:1px;transition:.15s;
}
.site-links a:hover{color:#c9f0f2;border-color:#9fd8db;}

/* ===== HEADER / CASE STRIP (shared by both modes) ===== */
header.hero{
  background:radial-gradient(1100px 380px at 12% -10%,rgba(15,124,136,.35),transparent),
             linear-gradient(180deg,var(--bg-deep),#17282f);
  color:var(--cream);padding:52px 28px 36px;border-bottom:6px solid var(--rust);
}
.hero-inner{max-width:1180px;margin:0 auto;}
.eyebrow{font-family:var(--mono);letter-spacing:.16em;text-transform:uppercase;font-size:12.5px;
  color:#9fd8db;border:1px solid #2c464d;padding:5px 11px;border-radius:3px;display:inline-block;}
h1{font-family:var(--serif);font-size:clamp(27px,3.6vw,41px);line-height:1.18;margin:18px 0 12px;max-width:900px;}
h1 em{font-style:italic;color:var(--gold);}
.subtitle{font-size:16px;color:var(--cream-soft);max-width:760px;line-height:1.65;}
.case-strip{display:flex;flex-wrap:wrap;gap:0;margin-top:28px;border-top:1px solid #2c464d;}
.cs-item{flex:1 1 150px;padding:13px 16px;border-right:1px solid #2c464d;}
.cs-item:last-child{border-right:none;}
.cs-item .k{font-family:var(--mono);font-size:11px;letter-spacing:.08em;color:#83b5b9;text-transform:uppercase;}
.cs-item .v{font-family:var(--serif);font-size:18.5px;margin-top:3px;color:var(--cream);}

.vitals-strip{display:flex;flex-wrap:wrap;gap:0;margin-top:30px;border-top:1px solid #2c464d;}
.vital{flex:1 1 140px;padding:14px 18px;border-right:1px solid #2c464d;}
.vital:last-child{border-right:none;}
.vital .k{font-family:var(--mono);font-size:11px;letter-spacing:.08em;color:#83b5b9;text-transform:uppercase;}
.vital .v{font-family:var(--serif);font-size:20px;color:var(--cream);margin-top:3px;}
.vital .v.flag{color:#e59a6d;}

/* ===== MODE SWITCHER (prominent cards below title) ===== */
.mode-switcher{display:flex;gap:14px;margin:24px 0 26px;flex-wrap:wrap;}
.mode-switcher .mode-tab{
  flex:1 1 260px;text-align:left;background:#18293060;border:1.5px solid #2c464d;border-radius:9px;
  padding:17px 19px;cursor:pointer;transition:.15s;display:flex;flex-direction:column;gap:6px;color:inherit;
}
.mode-switcher .mode-tab:hover{border-color:var(--teal);background:#1a2f36;}
.mode-switcher .mode-tab.active{border-color:var(--teal);background:#1c343b;box-shadow:0 0 0 1px var(--teal) inset;}
.mode-tab-title{font-family:var(--serif);font-size:17.5px;font-weight:600;color:var(--cream);display:flex;align-items:center;gap:8px;}
.mode-tab-desc{font-family:var(--sans);font-size:13.5px;color:#a9c2c5;line-height:1.55;}
.mode-switcher .mode-tab .mtag{background:var(--teal);color:#04222b;font-family:var(--mono);font-size:9.5px;padding:2px 8px;border-radius:9px;letter-spacing:.03em;}

/* legacy top mode-bar (unused but kept safe) */
.mode-bar{background:var(--bg-deep);border-bottom:1px solid #2c464d;padding:0 28px;display:flex;gap:0;}
.mode-bar-inner{max-width:1180px;margin:0 auto;display:flex;gap:0;}
.mode-tab{
  font-family:var(--mono);font-size:13px;letter-spacing:.06em;text-transform:uppercase;
  color:#83b5b9;background:transparent;border:none;border-bottom:3px solid transparent;
  padding:16px 22px;cursor:pointer;transition:.15s;
}
.mode-tab:hover{color:var(--cream);}
.mode-tab.active{color:var(--cream);border-bottom-color:var(--rust);}
.mode-tab .mtag{display:inline-block;margin-left:8px;font-size:10px;background:var(--rust);color:#fff;padding:1px 8px;border-radius:9px;letter-spacing:.03em;}

/* ===== CONTROL BAR ===== */
.control-bar{
  position:sticky;top:0;z-index:50;background:var(--bg-deep);border-bottom:1px solid #253c44;
  padding:13px 28px;display:flex;gap:12px;align-items:center;flex-wrap:wrap;
}
.cb-inner{max-width:1180px;margin:0 auto;display:flex;gap:14px;align-items:center;flex-wrap:wrap;width:100%;}
.tabs{display:flex;gap:7px;flex-wrap:wrap;}
.tab{
  font-family:var(--mono);font-size:12.5px;letter-spacing:.02em;color:#a9c2c5;
  background:transparent;border:1px solid #2c464d;padding:8px 14px;border-radius:20px;
  cursor:pointer;transition:.15s;
}
.tab:hover{border-color:var(--teal);color:var(--cream);}
.tab.active{background:var(--teal);border-color:var(--teal);color:#fff;}
.spacer{flex:1;}
.resource-toggle{display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:12.5px;color:#a9c2c5;}
.switch{position:relative;width:46px;height:24px;background:#243a3f;border-radius:14px;cursor:pointer;border:1px solid #3a5257;}
.switch .knob{position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#a9c2c5;transition:.2s;}
.switch.on{background:var(--rust);border-color:var(--rust);}
.switch.on .knob{left:24px;background:#fff;}
.solve-all-btn{
  font-family:var(--mono);font-size:12.5px;background:var(--gold);color:#2a1c04;border:none;
  padding:9px 16px;border-radius:20px;cursor:pointer;font-weight:600;letter-spacing:.02em;
}
.solve-all-btn:hover{background:#e6ac6f;}

/* ===== LEGEND ===== */
.legend-band{background:var(--panel);border-bottom:1px solid var(--line);padding:16px 28px;}
.legend-inner{max-width:1180px;margin:0 auto;display:flex;gap:28px;flex-wrap:wrap;font-size:13.5px;color:var(--ink-soft);align-items:center;}
.legend-title{font-family:var(--mono);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;font-weight:600;color:var(--ink);}
.legend-scale{display:flex;align-items:center;gap:6px;}
.chip{display:inline-flex;align-items:center;gap:5px;}
.chip .dot,.dot{width:9px;height:9px;border-radius:50%;}
.ci-dot{background:var(--teal);}
.tu-dot{background:var(--rust);}
.rating-demo{display:flex;gap:2px;}
.rating-demo span{width:14px;height:6px;background:var(--line);border-radius:1px;}
.rating-demo span.on.ci{background:var(--teal);}
.rating-demo span.on.tu{background:var(--rust);}
.chip-text{display:inline;}
.chip-text b{color:var(--ink);}

/* ===== SECTION HEADS ===== */
section.cat-block, section.block{padding-top:48px;}
.cat-head, .block-head{display:flex;align-items:baseline;gap:12px;border-bottom:1px solid var(--line);padding-bottom:11px;margin-bottom:20px;}
.cat-icon, .block-num{font-family:var(--mono);color:var(--rust);font-size:13px;}
.cat-head h2, .block-head h2{font-family:var(--serif);color:var(--ink);font-size:22px;margin:0;font-weight:600;}
.cat-sub, .block-desc{color:var(--ink-soft);font-size:14px;max-width:700px;margin:0 0 22px;line-height:1.6;}

/* ===== DECISION CARD ===== */
.dcard{
  background:var(--paper);border:1px solid var(--line);border-radius:7px;
  padding:0;margin-bottom:26px;overflow:hidden;box-shadow:0 16px 36px -26px rgba(20,35,44,.35);
}
.dcard-top{padding:22px 24px 16px;border-bottom:1px solid var(--line);}
.dcard-eyebrow{font-family:var(--mono);font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-soft);
  display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;}
.ratings-inline{display:flex;gap:14px;}
.rmini{display:flex;align-items:center;gap:4px;}
.rmini .bars{display:flex;gap:2px;}
.rmini .bars span{width:10px;height:7px;background:#e4ddc9;border-radius:1px;}
.rmini .bars span.on-ci{background:var(--teal);}
.rmini .bars span.on-tu{background:var(--rust);}
.mystery{
  font-family:var(--serif);font-style:italic;color:var(--ink-soft);font-size:15.5px;
  margin:11px 0 7px;line-height:1.6;border-left:3px solid var(--gold);padding-left:13px;
}
.question{font-family:var(--serif);font-size:20.5px;font-weight:600;color:var(--teal-deep);margin:11px 0 0;}

.options{padding:18px 24px 6px;display:flex;flex-direction:column;gap:11px;}
.opt{
  border:1.5px solid var(--line);border-radius:6px;padding:13px 15px;cursor:pointer;background:#fff;
  transition:.15s;position:relative;
}
.opt:hover{border-color:var(--teal);}
.opt .opt-label{font-size:15px;font-weight:600;color:var(--ink);display:flex;justify-content:space-between;gap:10px;}
.opt .opt-letter{font-family:var(--mono);color:var(--ink-soft);margin-right:6px;}
.opt .feedback{
  display:none;margin-top:10px;padding-top:10px;border-top:1px dashed var(--line);
  font-size:14px;line-height:1.65;color:var(--ink-soft);
}
.opt .feedback b{color:var(--ink);}
.opt.picked .feedback{display:block;}
.opt.correct{border-color:var(--sage);background:#f2f6ef;}
.opt.correct .opt-label::after{content:"✓ best choice";font-family:var(--mono);font-size:10.5px;color:var(--sage);font-weight:700;}
.opt.wrong{border-color:var(--crit);background:#fdf3f2;}
.opt.wrong .opt-label::after{content:"✕ pitfall";font-family:var(--mono);font-size:10.5px;color:var(--crit);font-weight:700;}
.opt.reasonable{border-color:var(--amber);background:#fffaf0;}
.opt.reasonable .opt-label::after{content:"~ context-dependent";font-family:var(--mono);font-size:10.5px;color:var(--amber);font-weight:700;}

.solve-row{padding:8px 24px 20px;display:flex;gap:10px;flex-wrap:wrap;}
.solve-btn{
  font-family:var(--mono);font-size:12.5px;background:var(--teal-deep);color:#fff;border:none;
  padding:9px 15px;border-radius:5px;cursor:pointer;
}
.solve-btn:hover{background:var(--teal);}
.reset-btn{
  font-family:var(--mono);font-size:12.5px;background:transparent;color:var(--ink-soft);
  border:1px solid var(--line);padding:9px 15px;border-radius:5px;cursor:pointer;
}

.evidence-box, .sdm-box, .resource-box{
  margin:0 24px 18px;padding:14px 16px;border-radius:5px;font-size:14px;line-height:1.65;display:none;
}
.evidence-box{background:#eef4f2;border-left:3px solid var(--teal);}
.sdm-box{background:#fbf0e4;border-left:3px solid var(--gold);}
.resource-box{background:#fdeee9;border-left:3px solid var(--rust);}
.evidence-box.show, .sdm-box.show{display:block;}
.box-label{font-family:var(--mono);font-size:10.5px;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-soft);margin-bottom:6px;display:block;}
body.resource-on .resource-box{display:block;}
body.resource-on .dcard{border-color:#e0a98f;}

/* ===== SUMMARY SPINE ===== */
.spine-card{background:var(--paper);border:1px solid var(--line);border-radius:7px;padding:23px 24px;margin-top:16px;}
.spine-list{list-style:none;margin:0;padding:0;counter-reset:step;}
.spine-list li{
  counter-increment:step;position:relative;padding:9px 0 9px 36px;font-size:14.5px;color:var(--ink-soft);
  border-left:2px solid var(--line);margin-left:8px;
}
.spine-list li::before{
  content:counter(step);position:absolute;left:-14px;top:7px;width:26px;height:26px;border-radius:50%;
  background:var(--teal-deep);color:#fff;font-family:var(--mono);font-size:12px;display:flex;align-items:center;justify-content:center;
}
.spine-list li b{color:var(--ink);}
.spine-list li:last-child{border-left:2px solid transparent;}

footer{margin-top:60px;padding:26px 0;border-top:1px solid var(--line);color:var(--ink-soft);font-family:var(--mono);font-size:12px;line-height:1.75;}
@media(max-width:760px){.ratings-inline{flex-direction:column;gap:4px;align-items:flex-start;}}

/* ===== PASSIVE MODE: MAP CARDS / FLOW DIAGRAM ===== */
#mapsMode{background:var(--panel);}
#mapsMode, #activeMode{display:none;}
#mapsMode.show, #activeMode.show{display:block;}

.map-card{
  background:var(--paper);border:1px solid var(--line);border-radius:6px;
  padding:27px 27px 23px;margin-bottom:28px;position:relative;
  box-shadow:0 18px 40px -28px rgba(20,35,44,.4);
}
.map-card.large{padding-bottom:28px;}
.map-topline{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:18px;flex-wrap:wrap;}
.map-title{font-family:var(--serif);font-size:19px;font-weight:600;color:var(--teal-deep);max-width:560px;}
.map-title .tag{
  display:block;font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;
  color:var(--ink-soft);margin-bottom:5px;
}
.ratings{display:flex;gap:16px;flex-shrink:0;}
.rating-box{border:1px solid var(--line);border-radius:4px;padding:7px 11px;min-width:120px;background:#fff;}
.rating-box .label{
  font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-soft);
  display:flex;justify-content:space-between;
}
.rating-box .num{font-weight:700;}
.rating-box .bars{display:flex;gap:2.5px;margin-top:6px;}
.rating-box .bars span{flex:1;height:8px;border-radius:1px;background:#e4ddc9;}
.rating-box .bars span.on-ci{background:var(--teal);}
.rating-box .bars span.on-tu{background:var(--rust);}
.rating-box.ci .num{color:var(--teal);}
.rating-box.tu .num{color:var(--rust);}

.flow{display:flex;flex-direction:column;gap:0;}
.flow-row{display:flex;align-items:stretch;gap:14px;flex-wrap:wrap;}
.node{
  background:#fff;border:1.5px solid var(--teal-deep);border-radius:5px;padding:11px 14px;
  font-size:14px;line-height:1.5;flex:1 1 240px;color:var(--ink);position:relative;
}
.node.start{border-color:var(--teal);background:#f3f8f7;}
.node.decision{border-color:var(--amber);background:#fffaf0;}
.node.action{border-color:var(--sage);background:#f3f8f2;}
.node.critical{border-color:var(--crit);background:#fdf3f2;font-weight:600;}
.node.endpoint{background:var(--teal-deep);border-color:var(--teal-deep);color:#fff;font-weight:600;}
.node .n-tag{
  display:block;margin-top:6px;font-family:var(--mono);font-size:10.5px;letter-spacing:.03em;
  color:var(--ink-soft);font-weight:400;
}
.node.endpoint .n-tag{color:#cfe8e6;}
.node .n-tag.mid{color:var(--amber);}
.node .n-tag.warn{color:var(--crit);font-weight:600;}
.arrow-down{text-align:center;font-size:19px;color:var(--ink-soft);padding:5px 0;line-height:1;}
.split{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
@media(max-width:600px){.split{grid-template-columns:1fr;}}

.map-card.small .flow-row{gap:10px;}
.map-card.small .node{font-size:13px;padding:9px 12px;min-width:140px;}
.clin-note{
  margin-top:16px;padding-top:14px;border-top:1px dashed var(--line);font-size:13.5px;color:var(--ink-soft);line-height:1.6;
}
.clin-note b{color:var(--ink);}

.pair-grid{display:grid;grid-template-columns:1fr 1fr;gap:26px;}
@media (max-width:820px){
  .pair-grid{grid-template-columns:1fr;}
  .vitals-strip{border-top:none;}
  .vital{border-right:none;border-top:1px solid #2c464d;}
}

/* ===== DIFFERENTIAL TRACKER SIDEBAR ===== */
.lab-layout{display:flex;gap:26px;align-items:flex-start;}
.lab-main{flex:1;min-width:0;}
.tracker{
  width:260px;flex-shrink:0;position:sticky;top:80px;
  background:var(--bg-deep);border:1px solid #2c464d;border-radius:8px;padding:17px 17px 15px;color:#dfe9eb;
}
.tracker h3{font-family:var(--mono);font-size:11.5px;letter-spacing:.09em;text-transform:uppercase;margin:0 0 5px;color:#9fd8db;}
.tracker .tracker-sub{font-size:12.5px;color:#a9c2c5;line-height:1.55;margin:0 0 12px;}
.diff-item{border-top:1px solid #2c464d;padding:11px 0;}
.diff-item:first-of-type{border-top:none;}
.diff-name{font-size:13.5px;font-weight:600;color:var(--cream);}
.diff-status{
  display:inline-block;margin-top:6px;font-family:var(--mono);font-size:10px;letter-spacing:.05em;
  text-transform:uppercase;padding:2px 9px;border-radius:9px;background:#243a44;color:#a9c2c5;
}
.diff-status.st-open{background:#2a3d47;color:#aab9bf;}
.diff-status.st-considering{background:#4a3a1a;color:#e3bd6f;}
.diff-status.st-ruled-out{background:#1a3a2b;color:#83d9ab;}
.diff-status.st-confirmed{background:#0e454f;color:#7fe0e6;}
.diff-status.st-misclassified{background:#4a1c1c;color:#f19a9a;}
.diff-note{font-size:11.5px;color:#a9c2c5;line-height:1.55;margin-top:6px;display:none;}
.diff-item.updated .diff-note{display:block;}
.tracker-reset{
  margin-top:12px;width:100%;font-family:var(--mono);font-size:11px;background:transparent;
  border:1px solid #3a5760;color:#a9c2c5;padding:7px 8px;border-radius:5px;cursor:pointer;
}
.tracker-reset:hover{border-color:var(--teal);color:var(--cream);}
.tracker-mobile-toggle{display:none;}

/* ===== MOBILE ===== */
@media(max-width:860px){
  .lab-layout{flex-direction:column;}
  .tracker{position:relative;top:0;width:100%;order:-1;}
}
@media(max-width:720px){
  .disclaimer-bar{font-size:10.5px;padding:7px 10px;}
  .site-bar{padding:10px 14px;}
  .site-bar-inner{flex-direction:column;align-items:flex-start;}
  .site-links{gap:12px;}
  .mode-switcher{flex-direction:column;margin:16px 0 20px;}
  .mode-switcher .mode-tab{flex:1 1 auto;}
  header.hero{padding:38px 18px 26px;}
  .wrap{padding:0 16px 60px;}
  .case-strip{flex-direction:column;border-top:none;}
  .cs-item{border-right:none;border-top:1px solid #2c464d;padding:10px 4px;}
  .mode-bar{padding:0 10px;overflow-x:auto;}
  .mode-tab{padding:13px 14px;white-space:nowrap;}
  .control-bar{padding:10px 14px;position:static;}
  .cb-inner{flex-direction:column;align-items:stretch;gap:10px;}
  .tabs{overflow-x:auto;flex-wrap:nowrap;-webkit-overflow-scrolling:touch;padding-bottom:4px;}
  .tab{white-space:nowrap;}
  .spacer{display:none;}
  .resource-toggle{justify-content:space-between;}
  .solve-all-btn{width:100%;}
  .legend-band{padding:12px 14px;}
  .legend-inner{gap:12px;font-size:12.5px;}
  .dcard-top{padding:16px 16px 12px;}
  .dcard-eyebrow{flex-direction:column;align-items:flex-start;gap:8px;}
  .question{font-size:18px;}
  .options{padding:14px 16px 4px;}
  .opt{padding:11px 13px;}
  .opt .opt-label{flex-direction:column;gap:4px;}
  .opt .opt-label::after{margin-top:2px;}
  .solve-row{padding:6px 16px 14px;flex-direction:column;}
  .solve-btn,.reset-btn{width:100%;text-align:center;}
  .evidence-box,.sdm-box,.resource-box{margin:0 16px 14px;}
  .map-topline{flex-direction:column;align-items:flex-start;}
  .ratings{width:100%;}
  .rating-box{min-width:0;flex:1;}
  .flow-row{flex-direction:column;}
  .node{min-width:0;}
  .vitals-strip{flex-direction:column;}
  .vital{border-right:none;border-top:1px solid #2c464d;}
}
</style>
</head>
<body>
<div class="disclaimer-bar">For learning clinical reasoning and educational purpose use only — not a diagnostic or clinical decision-support tool.</div>
<div class="site-bar">
  <div class="site-bar-inner">
    <span class="site-brand">Vibe Rounds <span class="site-brand-sub">— Clinical Decision Science · Interactive Decision Lab</span></span>
    <div class="site-links">
      <a href="https://sruthi995.blogspot.com/2021/04/a-15yr-old-female-came-with-complaints.html" target="_blank" rel="noopener">Case source ↗</a>
      <a href="https://avi33tbtt.github.io/" target="_blank" rel="noopener">avi33tbtt.github.io ↗</a>
    </div>
  </div>
</div>
<div id="activeMode" class="show">

<header class="hero">
  <div class="hero-inner">
    <span class="eyebrow">Clinical Decision Science &middot; Interactive Decision Lab</span>
    <h1>Unfold the mystery: <em>why is this 15-year-old running out of iron?</em></h1>

    <div class="mode-switcher">
      <button class="mode-tab active" data-mode="active">
        <span class="mode-tab-title">Active Mode <span class="mtag">Live</span></span>
        <span class="mode-tab-desc">Interactive — click through decisions, get rationale, pitfalls, and a live differential tracker</span>
      </button>
      <button class="mode-tab" data-mode="maps">
        <span class="mode-tab-title">Passive Mode</span>
        <span class="mode-tab-desc">Read-only — quick-scan flow diagrams of the same decision pathways</span>
      </button>
    </div>

    <p class="subtitle">Every box below is a real fork the clinician faced. Click an option to test your reasoning against the expert rationale, the common pitfall, the evidence behind it, and — where it applies — how the patient's own voice and the realities of resource-limited care should shape the choice.</p>
    <div class="case-strip">
      <div class="cs-item"><div class="k">Age / Sex</div><div class="v">15F, Std IX</div></div>
      <div class="cs-item"><div class="k">Presenting complaint</div><div class="v">Fatigue + giddiness, 5–6 mo</div></div>
      <div class="cs-item"><div class="k">Exam</div><div class="v">Pallor ++, Koilonychia +</div></div>
      <div class="cs-item"><div class="k">Menstrual</div><div class="v">Irregular cycles, 1 yr</div></div>
      <div class="cs-item"><div class="k">Past history</div><div class="v">Transfusion, age ~9</div></div>
      <div class="cs-item"><div class="k">Final diagnosis</div><div class="v">Iron deficiency anemia</div></div>
    </div>
  </div>
</header>

<div class="control-bar">
  <div class="cb-inner">
    <div class="tabs" id="tabs">
      <button class="tab active" data-cat="all">All decisions</button>
      <button class="tab" data-cat="triage">Red-Flag &amp; Triage</button>
      <button class="tab" data-cat="history">History &amp; Shared Decisions</button>
      <button class="tab" data-cat="diagnostic">Diagnostic Reasoning</button>
      <button class="tab" data-cat="treatment">Treatment &amp; Monitoring</button>
      <button class="tab" data-cat="resource">Resource-Constrained Care</button>
    </div>
    <div class="spacer"></div>
    <div class="resource-toggle">
      <span>Low-resource setting</span>
      <div class="switch" id="resourceSwitch"><div class="knob"></div></div>
    </div>
    <button class="solve-all-btn" id="solveAll">Solve entire case for me</button>
  </div>
</div>

<div class="legend-band">
  <div class="legend-inner">
    <span class="legend-title">Legend</span>
    <span class="chip"><span class="dot" style="background:var(--teal)"></span>Clinical importance</span>
    <span class="chip"><span class="dot" style="background:var(--rust)"></span>Time urgency</span>
    <span class="chip chip-text">Click any option to reveal <b>rationale + pitfall</b>. Use <b>Solve for me</b> for the expert path. Toggle <b>Low-resource setting</b> to see the pragmatic alternative when labs/imaging/blood bank aren't available.</span>
  </div>
</div>

<div class="wrap">
  <div class="lab-layout">
    <div class="tracker" id="tracker">
      <h3>Differential tracker</h3>
      <p class="tracker-sub">Updates live as you (or "Solve for me") make choices — this is the mystery unfolding across the whole case, not just one card.</p>
      <div id="trackerList"></div>
      <button class="tracker-reset" id="trackerReset">Reset tracker</button>
    </div>
    <div class="lab-main" id="app"></div>
  </div>
</div>

<footer>
  <div class="wrap" style="padding:0;">
    Case source: sruthi995.blogspot.com, "A 15yr old female came with complaints of Easy fatiguibility..." (E-log, April 2021) &middot;
    Built as an interactive teaching aid for case-based learning. Ratings and rationale reflect educational judgment, not a validated clinical algorithm — always follow local protocols and supervising clinician guidance.
  </div>
</footer>

<script>
const DECISIONS = [
{
  id:"d1", cat:"triage", ci:4, tu:3,
  mystery:"She walks in tired, a little giddy on exertion, nothing dramatic. The room is busy. You have thirty seconds to decide how fast this needs to move.",
  question:"How do you triage this presentation right now?",
  options:[
    {letter:"A", label:"Reassure and discharge — fatigue in a teenager is usually benign", cls:"wrong",
     text:"<b>Pitfall:</b> this is exactly how a treatable anemia goes unrecognized for months — which is what already happened here (5–6 months of symptoms before presentation). Fatigue is nonspecific, but pallor and koilonychia on exam are not 'usually benign' findings — they need explaining.",
     diffUpdates:[{id:"gi",status:"open",note:"Never screened — carried forward unexamined."},{id:"malig",status:"open",note:"Never screened — carried forward unexamined."}]},
    {letter:"B", label:"Screen for red flags (cardiac decompensation, active bleeding, marrow failure), then work up as stable outpatient", cls:"correct",
     text:"<b>Rationale:</b> her vitals are normal (BP 110/70, PR 84, RR 18), there's no pedal edema or dyspnea, no PR bleed or melena, and the fever 10 days ago was brief and self-limited. A structured red-flag screen — not a gut feeling — is what justifies treating this as routine rather than emergent. This is the decision that sets the pace for everything downstream.",
     diffUpdates:[{id:"gi",status:"ruled-out",note:"No PR bleed, dark stools, or hemodynamic instability on screen."},{id:"malig",status:"ruled-out",note:"No bone pain, lymphadenopathy, bruising, or persistent fever pattern."}]},
    {letter:"C", label:"Admit for observation and inpatient work-up", cls:"reasonable",
     text:"<b>Context-dependent:</b> defensible if she were tachycardic, hypotensive, or symptomatic at rest — none of which apply here. Admitting a hemodynamically stable adolescent for a chronic-onset anemia uses an inpatient bed that could serve a more urgent patient, and delays nothing that outpatient work-up can't achieve."},
    {letter:"D", label:"Send for emergency transfusion immediately", cls:"wrong",
     text:"<b>Pitfall:</b> transfusion without a confirmed Hb and without knowing the cause treats a number you don't have yet, exposes her to transfusion risk she may not need, and skips the diagnostic step that would actually explain — and let you correct — the problem."}
  ],
  evidence:"Chronic, gradually-progressive anemia is generally better tolerated hemodynamically than acute blood loss of the same Hb drop, because of compensatory plasma volume and cardiovascular adaptation — this is why stable vitals despite months of symptoms is reassuring, not reassuring enough to skip work-up.",
  resource:"In a setting without immediate lab access, the same logic still applies: a careful bedside red-flag screen (pulse, postural BP, capillary refill, conjunctival pallor severity) is what determines whether she needs referral to a higher center today, or can be worked up at the next available lab slot."
},
{
  id:"d2", cat:"history", ci:5, tu:2,
  mystery:"She says her cycles are 'irregular' for a year, no clots, no menorrhagia. You could take that at face value and move on to the next question.",
  question:"How do you handle the menstrual history?",
  options:[
    {letter:"A", label:"Accept 'no menorrhagia' as reported and move on", cls:"wrong",
     text:"<b>Pitfall:</b> adolescents frequently under-report menstrual blood loss because they have no comparison point for what's 'normal,' and because the topic can feel embarrassing to discuss in detail, especially with an unfamiliar clinician or in front of a parent. Taking the label at face value can hide the single most common cause of iron loss at this age."},
    {letter:"B", label:"Re-ask with concrete anchors — pad count/day, number of bleeding days, whether pads are soaked through, presence of clots — in a private, comfortable moment", cls:"correct",
     text:"<b>Rationale:</b> quantifying (not labeling) menstrual loss is what actually distinguishes clinically significant blood loss from normal variation. A year of irregular cycles, even without overt menorrhagia, is enough cumulative loss in a growing teenager to sustain iron deficiency — this reframes menstrual loss from a footnote to the leading contributing cause."},
    {letter:"C", label:"Order a pelvic ultrasound immediately", cls:"reasonable",
     text:"<b>Context-dependent:</b> reasonable if bleeding is heavy/prolonged or if structural pathology is suspected, but as a first move here it skips the history that would tell you whether imaging is even needed — and adds cost/anxiety without changing the immediate anemia work-up."},
    {letter:"D", label:"Refer to gynaecology before completing the anemia work-up", cls:"wrong",
     text:"<b>Pitfall:</b> premature referral without first confirming the anemia and its severity fragments her care and delays the more urgent decision (starting iron repletion), for a symptom that on quantification may not need specialist input at all."}
  ],
  evidence:"Adolescent menstrual blood loss is consistently under-recognized as a driver of iron deficiency anemia; structured questioning (pad counts, flooding, clot size) correlates better with true loss than self-labeling as 'heavy' or 'normal.'",
  sdm:"This is a shared-decision-making moment, not just a data-gathering one. Ask whether she'd prefer to answer menstrual questions with or without a parent present, use a chaperone if examining is needed, and explain <i>why</i> you're asking — many teenagers are more forthcoming once they understand the question is diagnostic, not judgmental. Her comfort disclosing this accurately is itself part of getting the history right.",
  resource:"Where ultrasound or gynaecology referral isn't readily available, a good quantified menstrual history plus response to iron therapy (does Hb hold once repleted, or does it fall again after normal-appearing cycles?) becomes your practical substitute for imaging in low-resource settings."
},
{
  id:"d3", cat:"history", ci:3, tu:1,
  mystery:"'Mixed diet, good appetite, eats fruit, no pica.' On paper that sounds reassuring. Does it actually rule out a dietary contribution?",
  question:"How do you interpret a 'good' dietary history?",
  options:[
    {letter:"A", label:"Conclude diet is not a factor and don't discuss it further", cls:"wrong",
     text:"<b>Pitfall:</b> 'good appetite' and 'mixed diet' describe quantity and variety, not iron bioavailability. A diet can be varied and still be low in absorbable (heme) iron, especially in regions where non-heme, phytate-rich staples dominate."},
    {letter:"B", label:"Probe the composition — how much of the diet is actually flesh foods vs. cereals/legumes/vegetables — before concluding anything", cls:"correct",
     text:"<b>Rationale:</b> only about 5% of dietary iron is typically absorbed in a predominantly non-heme diet, and adolescent growth increases iron requirements. A 'good' diet by report can still be nutritionally insufficient for her current needs — this is worth naming as a correctable contributing factor even though it's not the whole story."},
    {letter:"C", label:"Order serum iron studies before discussing diet at all", cls:"reasonable",
     text:"<b>Context-dependent:</b> useful for confirming iron deficiency biochemically, but doesn't replace the counseling conversation — diet is something you can act on with her today regardless of what the labs eventually show."},
    {letter:"D", label:"Assume pica must be present and re-interrogate until she admits to it", cls:"wrong",
     text:"<b>Pitfall:</b> pica is a recognized association with iron deficiency, but its absence doesn't exclude the diagnosis, and pushing a patient to 'confirm' a symptom she's already denied damages trust rather than adding diagnostic value."}
  ],
  evidence:"Non-heme iron absorption is low (roughly 5% in typical regional diets) and further reduced by phytate-rich staples; heme iron from flesh foods is absorbed far more efficiently — which is why 'mixed diet' needs unpacking rather than accepting as reassurance.",
  resource:"In settings without easy access to iron-rich flesh foods, practical counseling shifts to enhancing non-heme absorption: pairing iron-containing foods with vitamin-C sources (citrus, tomato) and avoiding tea/coffee with meals — a low-cost intervention that doesn't depend on lab confirmation."
},
{
  id:"d4", cat:"diagnostic", ci:5, tu:3,
  mystery:"Pallor and koilonychia are visible right now, before a single test is back. It's tempting to just start iron. Should you?",
  question:"What's the right first diagnostic step?",
  options:[
    {letter:"A", label:"Start empirical oral iron now, without any blood test", cls:"wrong",
     text:"<b>Pitfall:</b> treating on exam findings alone risks masking an alternate or coexisting diagnosis (thalassemia trait, anemia of chronic disease, early marrow pathology) and removes your ability to confirm the diagnosis or track a meaningful response later."},
    {letter:"B", label:"Order CBC with red cell indices and a peripheral smear", cls:"correct",
     text:"<b>Rationale:</b> this single, inexpensive step gives you the Hb (severity), MCV/MCH (microcytic/hypochromic pattern), and smear morphology (anisopoikilocytosis, pencil cells) that together confirm the anemia type and point toward — or away from — iron deficiency as the cause. Everything downstream depends on getting this pattern right.",
     diffUpdates:[{id:"ida",status:"considering",note:"Awaiting red cell indices."},{id:"thal",status:"considering",note:"Awaiting red cell indices."},{id:"acd",status:"considering",note:"Awaiting red cell indices."}]},
    {letter:"C", label:"Go straight to serum ferritin and iron studies", cls:"reasonable",
     text:"<b>Context-dependent:</b> ferritin is the most specific single test for iron deficiency, but it's an acute-phase reactant (falsely elevated in inflammation/infection) and is often less available/more expensive than a CBC — best used to confirm, not replace, the initial CBC/smear."},
    {letter:"D", label:"Proceed directly to bone marrow biopsy", cls:"wrong",
     text:"<b>Pitfall:</b> invasive, costly, and unnecessary for a first presentation with a classic microcytic hypochromic picture — reserved for when simpler tests fail to explain the anemia or when marrow pathology is specifically suspected."}
  ],
  evidence:"CBC with indices and peripheral smear remain the recommended first-line, low-cost investigation for anemia of unclear cause, with iron studies reserved as a confirmatory second step when the picture is microcytic/hypochromic.",
  resource:"Where a full automated CBC isn't available, a manual hemoglobin estimation plus peripheral smear examination by microscopy can still establish the microcytic hypochromic pattern and guide a trial of therapy — this is often the realistic first-line test in resource-limited primary care."
},
{
  id:"d5", cat:"diagnostic", ci:4, tu:2,
  mystery:"The smear comes back microcytic and hypochromic. Case closed — it's iron deficiency... or is it? A quiet second question needs answering before you commit.",
  question:"Microcytic hypochromic anemia confirmed. What's the next reasoning step?",
  options:[
    {letter:"A", label:"Diagnose iron deficiency anemia and move straight to treatment", cls:"reasonable",
     text:"<b>Context-dependent:</b> reasonable as a working diagnosis given her age, sex, and menstrual/dietary history, which make IDA the most likely explanation — but committing to it without at least considering the differential is how thalassemia trait gets missed."},
    {letter:"B", label:"Deliberately consider thalassemia trait and anemia of chronic disease before finalizing the diagnosis, using smear clues and history as discriminators", cls:"correct",
     text:"<b>Rationale:</b> microcytic hypochromic anemia has more than one cause. Her history (menstrual loss, dietary pattern, prior transfusion with an unexplained cause) makes IDA most likely, but a deliberate two-second differential check — rather than pattern-matching to the first plausible diagnosis — is what protects against anchoring bias, especially given a childhood transfusion history that was never explained.",
     diffUpdates:[{id:"ida",status:"considering",note:"Most likely given history — pending confirmation."},{id:"thal",status:"considering",note:"Not excluded — Mentzer index / HPLC pending."},{id:"acd",status:"ruled-out",note:"No chronic illness history to support this."}]},
    {letter:"C", label:"Assume thalassemia trait because of the childhood transfusion history and start iron chelation instead", cls:"wrong",
     text:"<b>Pitfall:</b> jumping to thalassemia without hemoglobin electrophoresis/HPLC confirmation is just as much an anchoring error in the opposite direction, and starting chelation in a patient who is actually iron-deficient could cause harm.",
     diffUpdates:[{id:"thal",status:"misclassified",note:"Assumed without confirmatory testing — anchoring error."},{id:"ida",status:"ruled-out",note:"Dismissed prematurely without justification."}]},
    {letter:"D", label:"Ignore the smear findings and rely on clinical impression alone", cls:"wrong",
     text:"<b>Pitfall:</b> discards the most objective data you have; clinical impression alone cannot reliably distinguish IDA from thalassemia trait or chronic disease."}
  ],
  evidence:"Iron deficiency anemia and thalassemia trait can look similar on CBC (both microcytic hypochromic); the Mentzer index (MCV divided by RBC count) is a widely used bedside discriminator — a value under ~13 favors thalassemia trait, over ~13 favors iron deficiency — pending confirmatory testing.",
  resource:"Where hemoglobin electrophoresis or HPLC is unavailable, the Mentzer index calculated from a basic CBC, combined with response to a therapeutic trial of iron (thalassemia trait won't correct with iron), is a pragmatic way to keep the differential open without expensive testing."
},
{
  id:"d6", cat:"treatment", ci:5, tu:3,
  mystery:"Diagnosis: iron deficiency anemia. Now comes the decision that actually changes her day-to-day life for the next three months.",
  question:"How do you choose the treatment route?",
  options:[
    {letter:"A", label:"Oral iron (e.g. ferrous salt combination), with counseling on adherence and side effects", cls:"correct",
     text:"<b>Rationale:</b> she is hemodynamically stable with a chronic-onset anemia and no red flags — oral iron is effective, low-cost, and appropriate first-line therapy here. The real decision isn't just 'which drug' but committing to the adherence counseling (GI upset, dark stools, timing away from tea/coffee/calcium) that determines whether it actually works.",
     diffUpdates:[{id:"ida",status:"confirmed",note:"Treatment initiated on working diagnosis — response will confirm it."}]},
    {letter:"B", label:"IV iron infusion as first-line", cls:"reasonable",
     text:"<b>Context-dependent:</b> appropriate if oral iron is not tolerated, malabsorption is suspected, correction is needed faster than oral therapy allows, or adherence is expected to be very poor — not the default first step for a stable, tolerant patient, but worth discussing as an option if her school schedule or exam timing makes daily oral dosing impractical."},
    {letter:"C", label:"Blood transfusion", cls:"wrong",
     text:"<b>Pitfall:</b> transfusion is reserved for symptomatic severe anemia or hemodynamic compromise, neither of which is present — it carries transfusion-reaction and infection-transmission risk that isn't justified when oral repletion will work over weeks."},
    {letter:"D", label:"No pharmacologic treatment — dietary correction alone", cls:"wrong",
     text:"<b>Pitfall:</b> diet alone is very unlikely to correct an established, symptomatic deficiency within a reasonable timeframe, and delays resolution of her fatigue and giddiness for months longer."}
  ],
  evidence:"Oral iron therapy remains first-line for uncomplicated iron deficiency anemia in stable patients; IV iron and transfusion are reserved for intolerance/malabsorption or hemodynamic compromise respectively.",
  sdm:"This is where her voice matters most. Discuss the trade-off honestly: oral iron is cheap and low-risk but has GI side effects and takes weeks to feel better; IV iron corrects faster but needs infusion visits and cost. Ask about her school schedule, exam calendar, and tolerance for side effects — a 15-year-old who understands <i>why</i> she's taking a tablet twice a day, and who chose the plan with you, is far more likely to complete three months of therapy than one who was just handed a prescription.",
  resource:"If IV iron or transfusion capacity isn't available at this facility, oral iron plus dietary counseling and a realistic follow-up plan (even if the interval has to stretch to match transport/clinic access) remains effective — the key resource-conscious move is setting expectations honestly rather than promising a faster fix you can't deliver locally."
},
{
  id:"d7", cat:"treatment", ci:4, tu:2,
  mystery:"She's on iron. The prescription is written. Most students consider the case finished here — but the plan isn't complete without one more decision.",
  question:"What do you decide before she leaves the clinic?",
  options:[
    {letter:"A", label:"Nothing further — the treatment is started, follow-up as needed", cls:"wrong",
     text:"<b>Pitfall:</b> 'as needed' follow-up is how partial responders, non-adherence, and missed alternate diagnoses go unnoticed for months, exactly as happened before she first presented."},
    {letter:"B", label:"Set a specific recheck (Hb and symptom review at ~2–4 weeks) and explicitly plan what happens if the response is inadequate", cls:"correct",
     text:"<b>Rationale:</b> the follow-up interval is where under-dosing, poor adherence, ongoing menstrual loss, or a missed alternate diagnosis actually gets caught. Planning the 'what if it doesn't work' branch now — not improvising it later — is what closes the loop on this case."},
    {letter:"C", label:"Tell her to come back only if symptoms worsen", cls:"wrong",
     text:"<b>Pitfall:</b> symptom improvement can lag behind or mismatch true hematologic response; relying on her to self-detect treatment failure removes the objective check (repeat Hb) that actually confirms the diagnosis was right."},
    {letter:"D", label:"Repeat the full investigation panel (smear, ferritin) at 2 weeks regardless of response", cls:"reasonable",
     text:"<b>Context-dependent:</b> reasonable if resources allow, but a simple Hb/reticulocyte check is usually sufficient to confirm response before repeating more extensive (and costly) testing."}
  ],
  evidence:"A rise in Hb of roughly 1 g/dL over 2–4 weeks is a commonly used marker of adequate response to oral iron therapy; failure to respond should prompt review of adherence, ongoing losses, or alternate diagnosis before escalating investigations.",
  resource:"Where lab access is infrequent, aligning the recheck date with an already-planned clinic visit or outreach camp — rather than an ideal-but-unreachable 2-week mark — keeps the follow-up realistic without abandoning the principle of planned, not improvised, monitoring."
},
{
  id:"d8", cat:"resource", ci:4, tu:2,
  mystery:"Picture the same patient presenting at a rural sub-center: no automated CBC analyzer, no ferritin assay, no HPLC, no transfusion service on-site, and the nearest referral hospital is four hours away.",
  question:"How do you restructure this entire work-up under real resource constraints?",
  options:[
    {letter:"A", label:"Defer any action until she can be sent to the referral hospital", cls:"wrong",
     text:"<b>Pitfall:</b> delaying all care for a stable, chronic-onset anemia over a four-hour referral adds months of untreated symptoms and transport burden for a condition that can largely be managed locally."},
    {letter:"B", label:"Build a stepwise pragmatic pathway: manual Hb + smear microscopy to confirm microcytic pattern &rarr; structured history (menstrual/dietary) as the main diagnostic lever &rarr; empirical oral iron trial &rarr; Hb response as the de facto confirmatory test &rarr; refer only if red flags or non-response", cls:"correct",
     text:"<b>Rationale:</b> this reorders the same clinical logic used at a full-resource center around what's actually available: history and a basic smear do most of the diagnostic work, a therapeutic trial substitutes for expensive confirmatory labs, and referral is reserved for the minority who don't fit the expected pattern. Nothing about the reasoning changes — only which tools carry the weight.",
     diffUpdates:[{id:"thal",status:"considering",note:"Kept open via Mentzer index even without HPLC access."}]},
    {letter:"C", label:"Treat everyone presenting with pallor as iron deficient without any confirmatory step at all", cls:"wrong",
     text:"<b>Pitfall:</b> skipping even the basic smear/history discrimination step means thalassemia trait, chronic disease, or a bleeding source could be missed entirely — resource constraints justify simplifying the pathway, not abandoning it."},
    {letter:"D", label:"Transfer every anemia case regardless of severity to preserve diagnostic accuracy", cls:"wrong",
     text:"<b>Pitfall:</b> this overwhelms referral capacity that should be reserved for genuinely complex or severe cases, and is not what the evidence for stepwise, resource-adapted anemia care supports."}
  ],
  evidence:"WHO and national anemia-control guidance in resource-limited settings support a pragmatic pathway of clinical/hematocrit screening plus therapeutic iron trial where full biochemical work-up is unavailable, reserving referral for treatment failure or red-flag features.",
  resource:"This card <i>is</i> the resource-optimized pathway — the point being taught is that resource limitation should change the tools you use to answer each question, not the sequence of questions themselves: still triage red flags first, still take a targeted history, still confirm a pattern before treating, still plan a check on response."
}
];

const app = document.getElementById('app');
const CATS = {
  triage:{title:"Category I — Red-Flag &amp; Triage Decisions", sub:"The decisions that determine how fast this case needs to move, before any diagnosis is known."},
  history:{title:"Category II — History-Taking &amp; Shared Decision-Making", sub:"Decisions about what to ask, how to ask it, and how much weight to give a patient's own account — including her right to shape how those questions are asked."},
  diagnostic:{title:"Category III — Diagnostic Reasoning", sub:"The decisions that turn exam findings into a confirmed diagnosis, including the anchoring traps along the way."},
  treatment:{title:"Category IV — Treatment &amp; Monitoring", sub:"Decisions about route, dose, and — critically — what happens if the first plan doesn't work."},
  resource:{title:"Category V — Resource-Constrained Care", sub:"The same clinical logic, rebuilt for a setting where the usual tools aren't available."}
};

function render(filter){
  app.innerHTML = "";
  const order = ["triage","history","diagnostic","treatment","resource"];
  order.forEach(cat=>{
    if(filter!=="all" && filter!==cat) return;
    const items = DECISIONS.filter(d=>d.cat===cat);
    if(!items.length) return;
    const sec = document.createElement('section');
    sec.className = "cat-block";
    sec.innerHTML = `<div class="cat-head"><span class="cat-icon">${cat.toUpperCase()}</span><h2>${CATS[cat].title}</h2></div><p class="cat-sub">${CATS[cat].sub}</p>`;
    items.forEach(d=>sec.appendChild(buildCard(d)));
    app.appendChild(sec);
  });

  if(filter==="all"){
    const spine = document.createElement('section');
    spine.className = "cat-block";
    spine.innerHTML = `
      <div class="cat-head"><span class="cat-icon">SPINE</span><h2>The whole case as one decision sequence</h2></div>
      <div class="spine-card">
        <ol class="spine-list">
          <li><b>Triage:</b> screen for red flags &rarr; treat as stable outpatient</li>
          <li><b>History:</b> quantify menstrual loss and dietary composition rather than accepting labels</li>
          <li><b>Exam:</b> pallor and koilonychia prompt a hematologic work-up</li>
          <li><b>First test:</b> CBC with indices + peripheral smear</li>
          <li><b>Pattern check:</b> confirm microcytic hypochromic, actively consider — not just assume — the differential</li>
          <li><b>Diagnosis:</b> iron deficiency anemia, most consistent with history and smear</li>
          <li><b>Treatment choice:</b> oral iron, chosen together with the patient given her stability and preferences</li>
          <li><b>Follow-up plan:</b> Hb recheck at 2–4 weeks with a pre-decided escalation path</li>
          <li><b>Resource lens:</b> the same nine steps, re-tooled for a setting without full lab access</li>
        </ol>
      </div>`;
    app.appendChild(spine);
  }
}

function buildCard(d){
  const card = document.createElement('div');
  card.className = "dcard";
  card.id = d.id;

  const ciBars = Array.from({length:5},(_,i)=>`<span class="${i<d.ci?'on-ci':''}"></span>`).join('');
  const tuBars = Array.from({length:5},(_,i)=>`<span class="${i<d.tu?'on-tu':''}"></span>`).join('');

  // Shuffle option order per session/render so the "answer key" position can't be memorized.
  const options = shuffle(d.options.map(o=>({...o})));
  options.forEach((o,i)=>{ o.letter = String.fromCharCode(65+i); });

  card.innerHTML = `
    <div class="dcard-top">
      <div class="dcard-eyebrow">
        <span>Decision ${d.id.toUpperCase()}</span>
        <div class="ratings-inline">
          <div class="rmini">Importance <div class="bars">${ciBars}</div></div>
          <div class="rmini">Urgency <div class="bars">${tuBars}</div></div>
        </div>
      </div>
      <p class="mystery">${d.mystery}</p>
      <p class="question">${d.question}</p>
    </div>
    <div class="options">
      ${options.map((o,i)=>`
        <div class="opt" data-idx="${i}">
          <div class="opt-label"><span><span class="opt-letter">${o.letter}</span>${o.label}</span></div>
          <div class="feedback">${o.text}</div>
        </div>
      `).join('')}
    </div>
    <div class="solve-row">
      <button class="solve-btn" data-solve="${d.id}">Solve for me</button>
      <button class="reset-btn" data-reset="${d.id}">Reset</button>
    </div>
    ${d.evidence?`<div class="evidence-box" data-box="evidence"><span class="box-label">Evidence</span>${d.evidence}</div>`:""}
    ${d.sdm?`<div class="sdm-box" data-box="sdm"><span class="box-label">Shared decision-making / patient autonomy</span>${d.sdm}</div>`:""}
    ${d.resource?`<div class="resource-box" data-box="resource"><span class="box-label">Low-resource setting adaptation</span>${d.resource}</div>`:""}
  `;

  card.querySelectorAll('.opt').forEach(optEl=>{
    optEl.addEventListener('click', ()=>{
      const idx = +optEl.dataset.idx;
      const o = options[idx];
      card.querySelectorAll('.opt').forEach(e=>e.classList.remove('picked','correct','wrong','reasonable'));
      optEl.classList.add('picked', o.cls);
      const ev = card.querySelector('[data-box="evidence"]');
      const sd = card.querySelector('[data-box="sdm"]');
      if(ev) ev.classList.add('show');
      if(sd) sd.classList.add('show');
      if(o.diffUpdates) applyDiffUpdates(o.diffUpdates);
    });
  });

  card.querySelector('[data-solve]').addEventListener('click', ()=>{
    const correctIdx = options.findIndex(o=>o.cls==='correct');
    const o = options[correctIdx];
    const optEl = card.querySelectorAll('.opt')[correctIdx];
    card.querySelectorAll('.opt').forEach(e=>e.classList.remove('picked','correct','wrong','reasonable'));
    optEl.classList.add('picked','correct');
    const ev = card.querySelector('[data-box="evidence"]');
    const sd = card.querySelector('[data-box="sdm"]');
    if(ev) ev.classList.add('show');
    if(sd) sd.classList.add('show');
    if(o.diffUpdates) applyDiffUpdates(o.diffUpdates);
    optEl.scrollIntoView({behavior:'smooth', block:'center'});
  });

  card.querySelector('[data-reset]').addEventListener('click', ()=>{
    card.querySelectorAll('.opt').forEach(e=>e.classList.remove('picked','correct','wrong','reasonable'));
    const ev = card.querySelector('[data-box="evidence"]');
    const sd = card.querySelector('[data-box="sdm"]');
    if(ev) ev.classList.remove('show');
    if(sd) sd.classList.remove('show');
  });

  return card;
}

/* ===== Differential tracker ===== */
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

const DIFF_META = [
  {id:"ida", name:"Iron deficiency anemia"},
  {id:"thal", name:"Thalassemia trait"},
  {id:"acd", name:"Anemia of chronic disease"},
  {id:"gi", name:"Active GI bleeding source"},
  {id:"malig", name:"Hematologic malignancy / marrow failure"}
];
const STATUS_LABEL = {
  "open":"Open", "considering":"Considering", "ruled-out":"Ruled out",
  "confirmed":"Confirmed", "misclassified":"Misclassified"
};
let diffState = {};
function resetDiffState(){
  diffState = {};
  DIFF_META.forEach(m=> diffState[m.id] = {status:"open", note:"", updated:false});
  renderTracker();
}
function applyDiffUpdates(updates){
  updates.forEach(u=>{
    diffState[u.id] = {status:u.status, note:u.note||"", updated:true};
  });
  renderTracker();
}
function renderTracker(){
  const list = document.getElementById('trackerList');
  if(!list) return;
  list.innerHTML = DIFF_META.map(m=>{
    const s = diffState[m.id] || {status:"open", note:"", updated:false};
    return `
      <div class="diff-item ${s.updated?'updated':''}">
        <div class="diff-name">${m.name}</div>
        <span class="diff-status st-${s.status}">${STATUS_LABEL[s.status]}</span>
        ${s.note?`<div class="diff-note">${s.note}</div>`:""}
      </div>`;
  }).join('');
}
resetDiffState();
document.getElementById('trackerReset')?.addEventListener('click', resetDiffState);

render("all");

document.getElementById('tabs').addEventListener('click', e=>{
  const btn = e.target.closest('.tab');
  if(!btn) return;
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  render(btn.dataset.cat);
});

document.getElementById('resourceSwitch').addEventListener('click', function(){
  this.classList.toggle('on');
  document.body.classList.toggle('resource-on');
});

document.getElementById('solveAll').addEventListener('click', ()=>{
  document.querySelectorAll('.dcard').forEach(card=>{
    card.querySelector('[data-solve]')?.click();
  });
  window.scrollTo({top: document.querySelector('.control-bar').offsetTop, behavior:'smooth'});
});
</script>
</div><div id="mapsMode">

<header class="hero">
  <div class="hero-inner">
    <span class="eyebrow">Clinical Decision Science &middot; Learner Map Set</span>
    <h1>The tired 9th-grader: mapping the decisions behind <em>koilonychia and a falling Hb</em></h1>

    <div class="mode-switcher">
      <button class="mode-tab" data-mode="active">
        <span class="mode-tab-title">Active Mode <span class="mtag">Live</span></span>
        <span class="mode-tab-desc">Interactive — click through decisions, get rationale, pitfalls, and a live differential tracker</span>
      </button>
      <button class="mode-tab active" data-mode="maps">
        <span class="mode-tab-title">Passive Mode</span>
        <span class="mode-tab-desc">Read-only — quick-scan flow diagrams of the same decision pathways</span>
      </button>
    </div>
    <p class="subtitle">A 15-year-old girl, 5–6 months of easy fatiguability and exertional giddiness, pallor and koilonychia on exam, irregular heavy-ish cycles for a year, and a transfusion six years ago. Each map below isolates one decision point a clinician (or clerking student) actually has to make, and rates it for teaching purposes.</p>

    <div class="vitals-strip">
      <div class="vital"><div class="k">Age / Sex</div><div class="v">15F, Std IX</div></div>
      <div class="vital"><div class="k">Core complaint</div><div class="v">Fatigue + giddiness, 5–6 mo</div></div>
      <div class="vital"><div class="k">Exam</div><div class="v flag">Pallor ++, Koilonychia +</div></div>
      <div class="vital"><div class="k">Vitals</div><div class="v">BP 110/70, PR 84, RR 18</div></div>
      <div class="vital"><div class="k">Menstrual</div><div class="v flag">Irregular cycles, 1 yr</div></div>
      <div class="vital"><div class="k">Final Dx</div><div class="v">Iron deficiency anemia</div></div>
    </div>
  </div>
</header>

<div class="legend-band">
  <div class="legend-inner">
    <span class="legend-title">How to read each map</span>
    <span class="legend-scale"><span class="dot ci-dot"></span> Clinical Importance (1–5) — how much this decision changes management or outcome</span>
    <span class="legend-scale"><span class="dot tu-dot"></span> Time Urgency (1–5) — how quickly the decision must be acted on</span>
    <span class="legend-scale">Node colors: <b style="color:#1f6f78">teal</b> = action/data-gather, <b style="color:#c9922f">amber</b> = decision branch, <b style="color:#a63a3a">red</b> = red-flag/critical check, <b style="color:#5c7a5e">green</b> = endpoint</span>
  </div>
</div>

<div class="wrap">

<!-- ============ SECTION 1: TRIAGE ============ -->
<section class="block">
  <div class="block-head"><span class="block-num">MAP 01</span><h2>First 5 minutes — triaging "fatigue + giddiness" in an adolescent</h2></div>
  <p class="block-desc">Before chasing anemia, the student must decide whether this presentation could be something time-critical masquerading as simple tiredness.</p>

  <div class="map-card large">
    <div class="map-topline">
      <div class="map-title"><span class="tag">Large map — initial triage logic</span>Is this anemia, or something that looks like it?</div>
      <div class="ratings">
        <div class="rating-box ci"><div class="label">Importance <span class="num">4/5</span></div><div class="bars"><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span></span></div></div>
        <div class="rating-box tu"><div class="label">Urgency <span class="num">3/5</span></div><div class="bars"><span class="on-tu"></span><span class="on-tu"></span><span class="on-tu"></span><span></span><span></span></div></div>
      </div>
    </div>

    <div class="flow">
      <div class="flow-row"><div class="node start" style="flex:0 1 320px;margin:0 auto;">PATIENT ENTERS: fatigue + exertional giddiness x 5–6 mo</div></div>
      <div class="arrow-down">&#8595;</div>
      <div class="flow-row">
        <div class="node critical"><span class="n-label">Red-flag screen</span>Chest pain, syncope (not just giddiness), pedal edema, SOB at rest?<span class="n-tag warn">Rule out cardiac/decompensation</span></div>
        <div class="node critical"><span class="n-label">Bleeding screen</span>PR bleed, dark stools, hematemesis, menorrhagia (true, not just irregularity)?<span class="n-tag warn">Rule out active hemorrhage</span></div>
        <div class="node critical"><span class="n-label">Infection/marrow screen</span>Fever pattern, bone pain, lymphadenopathy, bruising, recurrent infections?<span class="n-tag warn">Rule out leukemia/aplasia</span></div>
      </div>
      <div class="arrow-down">&#8595;</div>
      <div class="flow-row">
        <div class="node decision" style="flex:0 1 100%;">This case: no SOB/edema (cardiac decompensation unlikely), no PR bleed/dark stools (no overt GI loss), fever was self-limiting 10 days prior (unlikely ongoing marrow suppression) &rarr; <b>proceed down the anemia work-up track</b>, but keep these on the differential until Hb/smear return.</div>
      </div>
      <div class="arrow-down">&#8595;</div>
      <div class="flow-row">
        <div class="node endpoint">Decision: manage as outpatient anemia work-up (stable vitals, no red flags) rather than emergency referral</div>
      </div>
    </div>
    <div class="clin-note"><b>Teaching point:</b> the urgency here is moderate, not low — a normal-looking BP/PR in a compensated anemic adolescent can mask significant Hb drop. The importance is high because misclassifying this as "just tiredness" delays a treatable diagnosis for months (as it already has, at 5–6 months).</div>
  </div>
</section>

<!-- ============ SECTION 2: HISTORY DECISION FORKS (paired small maps) ============ -->
<section class="block">
  <div class="block-head"><span class="block-num">MAP 02–03</span><h2>Two history forks that decide the differential</h2></div>
  <p class="block-desc">Small, focused maps — each is a single fork a student must recognize while taking history.</p>

  <div class="pair-grid">

    <div class="map-card small">
      <div class="map-topline">
        <div class="map-title"><span class="tag">Small map — menstrual history</span>Irregular cycles x 1 year: cause or coincidence?</div>
        <div class="ratings">
          <div class="rating-box ci"><div class="label">Importance <span class="num">5/5</span></div><div class="bars"><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span></div></div>
          <div class="rating-box tu"><div class="label">Urgency <span class="num">2/5</span></div><div class="bars"><span class="on-tu"></span><span class="on-tu"></span><span></span><span></span><span></span></div></div>
        </div>
      </div>
      <div class="flow">
        <div class="flow-row"><div class="node start" style="flex:0 1 100%;">Menarche 12y, regular x 2y, then irregular x 1y, 5 days flow, no clots/menorrhagia by report</div></div>
        <div class="arrow-down">&#8595;</div>
        <div class="flow-row">
          <div class="node decision">Quantify pad count and days, not just "irregular" — patient self-report of "no menorrhagia" is often unreliable in teens<span class="n-tag mid">Ask again, specifically</span></div>
        </div>
        <div class="arrow-down">&#8595;</div>
        <div class="flow-row">
          <div class="node action">Even "normal" volume + irregular timing, sustained a full year in a growing adolescent, is enough cumulative loss to explain/worsen IDA<span class="n-tag">Treat as contributing cause</span></div>
        </div>
        <div class="arrow-down">&#8595;</div>
        <div class="flow-row"><div class="node endpoint">Decision: menstrual blood loss = leading driver to correct alongside iron repletion; consider gynae referral if it doesn't regularize after Hb correction</div></div>
      </div>
      <div class="clin-note"><b>Why it matters most:</b> in a 15-year-old, ongoing menstrual loss is the single most common reason iron therapy fails to hold — miss this fork and the anemia relapses after treatment stops.</div>
    </div>

    <div class="map-card small">
      <div class="map-topline">
        <div class="map-title"><span class="tag">Small map — dietary history</span>"Good appetite, mixed diet" — does that rule out nutritional cause?</div>
        <div class="ratings">
          <div class="rating-box ci"><div class="label">Importance <span class="num">3/5</span></div><div class="bars"><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span></span><span></span></div></div>
          <div class="rating-box tu"><div class="label">Urgency <span class="num">1/5</span></div><div class="bars"><span class="on-tu"></span><span></span><span></span><span></span><span></span></div></div>
        </div>
      </div>
      <div class="flow">
        <div class="flow-row"><div class="node start" style="flex:0 1 100%;">Mixed diet, 3 meals/day, fruits regularly, no pica reported</div></div>
        <div class="arrow-down">&#8595;</div>
        <div class="flow-row">
          <div class="node decision">"Mixed diet" does not equal adequate heme-iron intake — ask what fraction is actually flesh foods vs. cereal/vegetable-based (phytate-rich)<span class="n-tag mid">Probe composition, not just variety</span></div>
        </div>
        <div class="arrow-down">&#8595;</div>
        <div class="flow-row">
          <div class="node action">Typical regional diet + ~5% non-heme iron bioavailability + adolescent growth demand = plausible dietary insufficiency even without pica or poor appetite</div>
        </div>
        <div class="arrow-down">&#8595;</div>
        <div class="flow-row"><div class="node endpoint">Decision: counsel on heme-iron/vitamin-C pairing; diet is a contributing, correctable factor — not the sole explanation given menstrual loss also present</div></div>
      </div>
      <div class="clin-note"><b>Teaching point:</b> a "good" diet history should never fully close the nutritional differential in a menstruating teenager — treat it as low urgency but still worth correcting.</div>
    </div>

  </div>
</section>

<!-- ============ SECTION 3: EXAM -> INVESTIGATION LARGE MAP ============ -->
<section class="block">
  <div class="block-head"><span class="block-num">MAP 04</span><h2>From exam findings to confirmed microcytic hypochromic anemia</h2></div>
  <p class="block-desc">The core diagnostic decision map — what to order, in what order, and how to interpret it.</p>

  <div class="map-card large">
    <div class="map-topline">
      <div class="map-title"><span class="tag">Large map — investigation pathway</span>Pallor + koilonychia &rarr; confirming iron deficiency anemia</div>
      <div class="ratings">
        <div class="rating-box ci"><div class="label">Importance <span class="num">5/5</span></div><div class="bars"><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span></div></div>
        <div class="rating-box tu"><div class="label">Urgency <span class="num">3/5</span></div><div class="bars"><span class="on-tu"></span><span class="on-tu"></span><span class="on-tu"></span><span></span><span></span></div></div>
      </div>
    </div>

    <div class="flow">
      <div class="flow-row"><div class="node start" style="flex:0 1 380px;margin:0 auto;">EXAM: pallor ++, koilonychia +, no organomegaly, CVS/CNS normal</div></div>
      <div class="arrow-down">&#8595;</div>
      <div class="flow-row">
        <div class="node action"><span class="n-label">First-line</span>CBC with red cell indices (Hb, MCV, MCH, MCHC) + peripheral smear<span class="n-tag">Order first</span></div>
      </div>
      <div class="arrow-down">&#8595;</div>
      <div class="flow-row">
        <div class="node decision" style="flex:1 1 100%;">MCV/MCH low (microcytic, hypochromic)?</div>
      </div>
      <div class="arrow-down">&#8595;</div>
      <div class="split">
        <div>
          <div class="node action">YES — microcytic hypochromic pattern<span class="n-tag">Consistent with this patient</span></div>
          <div class="arrow-down">&#8595;</div>
          <div class="node decision">Differentiate IDA vs. thalassemia trait vs. anemia of chronic disease</div>
          <div class="arrow-down">&#8595;</div>
          <div class="node action">Correlate with smear morphology (anisopoikilocytosis, pencil cells favor IDA) &plusmn; serum ferritin/iron studies if available<span class="n-tag">Confirms IDA</span></div>
          <div class="arrow-down">&#8595;</div>
          <div class="node endpoint">DIAGNOSIS: Iron deficiency anemia</div>
        </div>
        <div>
          <div class="node action">NO — normocytic/macrocytic instead<span class="n-tag mid">Branch not taken here</span></div>
          <div class="arrow-down">&#8595;</div>
          <div class="node decision">Reconsider: hemolysis, marrow suppression, B12/folate deficiency, chronic disease</div>
          <div class="arrow-down">&#8595;</div>
          <div class="node critical">Would change management entirely — do not force-fit into IDA<span class="n-tag warn">Escalate work-up</span></div>
          <div class="arrow-down">&#8595;</div>
          <div class="node endpoint" style="background:#f4efe3;">Alternate pathway (not this patient)</div>
        </div>
      </div>
    </div>
    <div class="clin-note"><b>Teaching point:</b> the decision that carries the most weight in the whole case is confirming the anemia is truly microcytic-hypochromic before anchoring on "iron deficiency" — this is rated 5/5 importance because every downstream decision (treatment, need for further GI/gynae work-up) depends on it.</div>
  </div>
</section>

<!-- ============ SECTION 4: PAST HISTORY (transfusion) small map + treatment small map ============ -->
<section class="block">
  <div class="block-head"><span class="block-num">MAP 05–06</span><h2>Context that changes the plan</h2></div>
  <p class="block-desc">A past transfusion and the treatment choice itself are each small but consequential decisions.</p>

  <div class="pair-grid">

    <div class="map-card small">
      <div class="map-topline">
        <div class="map-title"><span class="tag">Small map — past history</span>Blood transfusion 6 years ago "due to low Hb" — how far back to dig?</div>
        <div class="ratings">
          <div class="rating-box ci"><div class="label">Importance <span class="num">4/5</span></div><div class="bars"><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span></span></div></div>
          <div class="rating-box tu"><div class="label">Urgency <span class="num">2/5</span></div><div class="bars"><span class="on-tu"></span><span class="on-tu"></span><span></span><span></span><span></span></div></div>
        </div>
      </div>
      <div class="flow">
        <div class="flow-row"><div class="node start" style="flex:0 1 100%;">H/o blood transfusion at age ~9 for "low Hb," cause not detailed</div></div>
        <div class="arrow-down">&#8595;</div>
        <div class="flow-row">
          <div class="node decision">Was that episode ever explained, or just treated? A second severe anemia episode years later raises the question of a recurring/chronic driver<span class="n-tag mid">Don't accept "low Hb" as a diagnosis</span></div>
        </div>
        <div class="arrow-down">&#8595;</div>
        <div class="flow-row">
          <div class="node action">Ask specifically about prior records, any thalassemia/hemoglobinopathy screening, family history of anemia or transfusions</div>
        </div>
        <div class="arrow-down">&#8595;</div>
        <div class="flow-row"><div class="node endpoint">Decision: treat as first-episode-per-history, but flag for hemoglobinopathy screening if response to iron is poor or MCV is disproportionately low for the Hb</div></div>
      </div>
      <div class="clin-note"><b>Why this is easy to miss:</b> students often log the transfusion as a throwaway past-history line rather than a clue that this may not be a purely nutritional, one-off problem.</div>
    </div>

    <div class="map-card small">
      <div class="map-topline">
        <div class="map-title"><span class="tag">Small map — treatment &amp; follow-up</span>Starting oral iron: what decision comes next?</div>
        <div class="ratings">
          <div class="rating-box ci"><div class="label">Importance <span class="num">4/5</span></div><div class="bars"><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span></span></div></div>
          <div class="rating-box tu"><div class="label">Urgency <span class="num">2/5</span></div><div class="bars"><span class="on-tu"></span><span class="on-tu"></span><span></span><span></span><span></span></div></div>
        </div>
      </div>
      <div class="flow">
        <div class="flow-row"><div class="node start" style="flex:0 1 100%;">Start Tab Orofer-XT (oral iron) BD</div></div>
        <div class="arrow-down">&#8595;</div>
        <div class="flow-row">
          <div class="node decision">Counsel on adherence (GI upset, stool color) — decide follow-up interval for Hb recheck (~2–4 weeks for reticulocyte/Hb response)<span class="n-tag mid">Plan the recheck now</span></div>
        </div>
        <div class="arrow-down">&#8595;</div>
        <div class="flow-row">
          <div class="node decision" style="flex:1 1 100%;">At recheck: adequate Hb rise?</div>
        </div>
        <div class="split">
          <div><div class="node action">YES<span class="n-tag">Continue 3 months to replete stores</span></div></div>
          <div><div class="node critical">NO / poor response<span class="n-tag warn">Reassess: adherence, ongoing loss (menstrual), malabsorption, wrong diagnosis</span></div></div>
        </div>
        <div class="arrow-down">&#8595;</div>
        <div class="flow-row"><div class="node endpoint">Decision: don't treat "start iron" as the end of the case — the follow-up check is where under-dosing or a missed diagnosis gets caught</div></div>
      </div>
    </div>

  </div>
</section>

<!-- ============ SECTION 5: CONSOLIDATED SUMMARY MAP ============ -->
<section class="block">
  <div class="block-head"><span class="block-num">MAP 07</span><h2>The whole case as one decision spine</h2></div>
  <p class="block-desc">A single large map stringing the prior decisions together in sequence, for revision.</p>

  <div class="map-card large">
    <div class="map-topline">
      <div class="map-title"><span class="tag">Large map — full case spine</span>Presentation to management, in one line of decisions</div>
      <div class="ratings">
        <div class="rating-box ci"><div class="label">Importance <span class="num">5/5</span></div><div class="bars"><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span><span class="on-ci"></span></div></div>
        <div class="rating-box tu"><div class="label">Urgency <span class="num">3/5</span></div><div class="bars"><span class="on-tu"></span><span class="on-tu"></span><span class="on-tu"></span><span></span><span></span></div></div>
      </div>
    </div>
    <div class="flow">
      <div class="flow-row">
        <div class="node start">1. Triage for red flags</div>
        <div class="node start">2. Targeted history (menstrual + diet + past)</div>
        <div class="node start">3. Exam (pallor, koilonychia)</div>
        <div class="node start">4. CBC + smear</div>
        <div class="node start">5. Confirm microcytic hypochromic pattern</div>
      </div>
      <div class="arrow-down">&#8595;</div>
      <div class="flow-row">
        <div class="node endpoint" style="flex:1 1 100%;">6. Diagnose IDA &rarr; 7. Start oral iron &rarr; 8. Counsel on menstrual/dietary contributors &rarr; 9. Plan Hb recheck &rarr; 10. Escalate work-up only if response fails</div>
      </div>
    </div>
    <div class="clin-note"><b>How to use this map:</b> each numbered step corresponds to one of Maps 01–06 above. A student who can independently rate why step 5 (confirming the anemia pattern) is more important than step 2 in isolation, but why step 2 is what determines whether treatment actually holds long-term, has understood the case.</div>
  </div>
</section>

</div>

<footer>
  <div class="wrap" style="padding:0;">
    Case source: sruthi995.blogspot.com, "A 15yr old female came with complaints of Easy fatiguibility..." (E-log, April 2021) &middot;
    Built as a teaching aid — ratings reflect educational judgment for case-based learning, not a validated clinical scoring system.
  </div>
</footer>

</div>
<script>
document.addEventListener('DOMContentLoaded', function(){
  var tabs = document.querySelectorAll('.mode-tab');
  tabs.forEach(function(t){
    t.addEventListener('click', function(){
      tabs.forEach(function(x){x.classList.remove('active');});
      t.classList.add('active');
      document.getElementById('activeMode').classList.remove('show');
      document.getElementById('mapsMode').classList.remove('show');
      document.getElementById(t.dataset.mode==='active' ? 'activeMode' : 'mapsMode').classList.add('show');
      window.scrollTo({top:0, behavior:'smooth'});
    });
  });
});
</script>
</body>
</html>

```
