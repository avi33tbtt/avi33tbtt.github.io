[← Back to Prompt Directory](https://avi33tbtt.github.io/Prompts/Prompts.html)

# Module 22 — Nested Analysis

**Zoom in on each case. Zoom out across all cases. Explain the variance.**

*Coined and developed by Dr. Avinash Kumar Gupta · Vibe Rounds, June 2026*
**#VibeRounds — A Socratic AI Paradigm for Clinical Medicine**

---

> [!IMPORTANT]
> **Clinical Disclaimer** All AI-generated outputs produced using these prompts require independent clinical verification before being acted upon. This module is a learning and synthesis tool, not a clinical decision support system. No output should enter a clinical record or management plan without endorsement by a licensed clinician.

---

## What this module does

Most case series analysis stops at the average. This module does not. It runs a **three-level nested analysis** on any set of cases — medical, educational, organisational, or otherwise — and forces the AI to do the one thing hardest to automate: explain *why each case diverges from the group*.

The output has three mandatory layers. They are not independent. The third layer only earns its place if it draws directly from both layers below it.

| Layer | Name | What it does |
|-------|------|-------------|
| **1** | Individual Profiles | Zoom in. Each case on its own terms. Facts, trajectory, distinctive features. No cross-case comparison. |
| **2** | Group Analysis | Zoom out. What do they share? What is the central tendency? Where does the group cluster? |
| **3** | Synthesis | Connect them. Name the variance. For each case, explain *why* it differs from the group average. |

> [!NOTE]
> **The core principle:** The value of studying a group is not the average — it is the explanation of the variance. A synthesis that only summarises layers 1 and 2 is not a synthesis. The synthesis must account for *why* Case A's trajectory, decision, or outcome differed from the group norm, and what that difference reveals. Don't just list them. Connect them. The key is in the "Discussion."

---

## How this module relates to others

- **Modules 6 & 7** — Registry-level analytics and cross-case learning at scale. Module 22 occupies the space between: a small-to-medium set (2–20 cases), analysed simultaneously at three levels, with the explicit goal of explaining variance.
- **Module 9** — N-of-1 depth on a single case. Use an individual profile from Layer 1 as the index case input for Module 9.
- **Module 8** — Use the Layer 3 synthesis to draft a Socratic prompt for teaching the identified pattern.
- **Module 1** — Use individual profiles as case material for Socratic questioning sessions.

---

## Overview

| Field | Content |
|-------|---------|
| **Objective** | Produce a three-layer nested analysis of a case set: individual profiles, group analysis, and a synthesis that connects them by explaining variance. |
| **Indication** | 2–20 cases sharing a common context (diagnosis, setting, intervention, outcome type) where you want to understand *why* they differ, not just how they average. |
| **Minimum input** | A numbered list of cases. Each case needs at least: identity (who/what), key event or diagnosis, one distinguishing fact. |
| **Not indicated for** | Single-case analysis (use Module 9). Population-scale registries (use Modules 6–7). Real-time patient management. |
| **Status** | 🟣 New — June 2026 |
| **Validated environment** | Claude (claude.ai), tested June 2026 |

---

## Input modes

Module 22 accepts cases in four formats. The prompts below work with all four; simply paste or reference accordingly.

| Mode | How to provide input | When to use |
|------|---------------------|-------------|
| **Inline text** | Paste numbered cases directly into the prompt | 2–10 short cases; ward round; quick synthesis |
| **Single URL** | Provide one URL containing multiple cases | Published case series; registry page; journal article |
| **Multiple URLs** | Provide a numbered list of URLs (one per case or per batch) | Cases spread across multiple pages; different sources |
| **Mixed** | Paste some cases inline and provide URLs for others | Real-world mixed sources |

> [!NOTE]
> When providing URLs, instruct the AI to fetch and read each URL before beginning the analysis. See Step 22.1a for the URL fetch instruction.

---

## Lifecycle

| Phase | Steps |
|-------|-------|
| **1 · Initiation** | Step 22.0 (optional single-run orchestration), Step 22.1 (case structuring), Step 22.1a (URL fetch, if applicable) |
| **2 · Execution** | Steps 22.2, 22.3, 22.4 (three analysis layers) |
| **3 · Closure / Review** | Steps 22.5 (variance interrogation), 22.6 (synthesis quality check and Discussion paragraph) |

---

---

## Phase 1 · Initiation

---

### Step 22.0 — Single-run orchestration *(optional entry point)*

Use this if you want the full three-layer output in one session. For more control over each layer individually, work Steps 22.1–22.5 in order.

```
#VibeRounds I am running a Nested Analysis (Module 22) on the following
case set. You will produce three layered outputs in sequence, pausing for
my confirmation between each layer.

Layer 1 — Individual Profiles: For each case, produce a structured
profile (100–150 words): key facts, trajectory, and the one feature that
makes this case distinctive. Do not compare cases yet. Zoom in on each
one as if it is the only case. End each profile with one sentence
beginning exactly: "The detail most likely to matter later is:" — name
the single feature you predict will explain this case's position relative
to the group.

Layer 2 — Group Analysis: Zoom out. Across all cases, identify:
(a) shared features present in at least two-thirds of cases,
(b) the group's central tendency for the main variable of interest,
described precisely enough that any new case could be measured against it,
(c) the range and any visible clusters or subgroups,
(d) any outlier case whose deviation will require a structural explanation.
Do not explain the variance yet.

Layer 3 — Synthesis: This is the critical layer. Do not summarise layers
1 and 2. Connect them. For each case: state how it compares to the group
central tendency; name the mechanism that drives the deviation; return to
the Layer 1 prediction and confirm, correct, or reframe it; write one
"Discussion implication" sentence naming what this case's deviation reveals
about the phenomenon under study. End with a DISCUSSION PARAGRAPH
(4–6 sentences): the single most important finding that emerges from the
pattern of deviations — something neither any individual case nor the
average alone could have revealed.

After each layer, stop and wait for my confirmation before continuing.
Confirm you understand this structure before I share the cases.
```

> [!NOTE]
> **Application note:** The stop-and-confirm instruction is load-bearing. Without it, an LLM will tend to race ahead and synthesise a single narrative — precisely the premature-closure failure mode the three-layer structure exists to prevent. If using a model that ignores the pause instruction, run each layer as a separate prompt using Steps 22.2–22.4 below.

---

### Step 22.1 — Case list structuring

Before running any analysis, produce a clean structured table. This is extraction only — no interpretation yet.

```
#VibeRounds We are starting a Nested Analysis — Step 22.1, case
structuring. I will paste a case list (or provide URLs — see note below).
Your task: produce a clean structured table with one row per case and
four columns:
(1) Case identifier
(2) Primary variable of interest [I will specify this — e.g. diagnosis,
    outcome, intervention, decision point]
(3) Secondary variables present
(4) One distinguishing feature — the fact about this case most likely to
    explain any deviation from a group norm

Do not interpret or compare yet. Extract and structure only. Flag any case
that lacks enough information to populate all four columns, and tell me
what additional information would complete it.

[paste cases here, or see Step 22.1a for URL input]
```

> [!NOTE]
> **Application note:** This table becomes the shared reference for all three layers. A missing or vague entry in column 4 will produce a flat, uninformative synthesis in Layer 3. Fix thin cases before proceeding.

---

### Step 22.1a — URL fetch instruction *(run before Step 22.1 if cases are at URLs)*

Use this when your cases live at one or more URLs rather than being pasted directly.

**For a single URL containing multiple cases:**

```
#VibeRounds Before we begin the Nested Analysis, fetch and read the
following URL. Extract every case contained on that page. For each case,
identify: (1) a case identifier (use the name, number, or heading the
source uses), (2) the primary clinical or thematic event, (3) any
secondary variables stated, (4) one distinguishing feature.

Present what you extracted as a structured list. Tell me how many cases
you found, and flag any that lacked enough information to characterise.
Once I confirm the extraction is accurate, we will proceed to Step 22.1.

URL: [paste URL here]
```

**For multiple URLs (one or more cases per URL):**

```
#VibeRounds Before we begin the Nested Analysis, I am providing
[N] URLs. Fetch and read each one in sequence. For each URL, extract
all cases it contains. Assign each case a unique identifier using the
format: Source[URL number]-Case[case number within that source]
(e.g. S1-C1, S1-C2, S2-C1).

For each extracted case record: (1) source URL, (2) case identifier,
(3) primary event or variable, (4) secondary variables, (5) one
distinguishing feature.

Present a consolidated table of all cases across all URLs. Tell me the
total case count and flag any URL you could not fetch or any case that
lacked sufficient information. Once I confirm, we proceed to Step 22.1.

URLs:
1. [URL 1]
2. [URL 2]
3. [URL 3]
[add as many as needed]
```

> [!NOTE]
> **Application note:** If using a model with live web access (e.g. Claude with web search enabled, Gemini with Google Search), it can fetch URLs directly. If using a model without live access, copy and paste the relevant text from each URL before running Step 22.1. Record the fetch date in your notes — the PRISMA parallel applies here: a reproducible analysis requires a stated source date.

---

---

## Phase 2 · Execution

---

### Step 22.2 — Layer 1: Individual profiles *(zoom in)*

Each case is treated as if it is the only case. The AI may not compare cases in this layer.

```
#VibeRounds We are running Layer 1 of the Nested Analysis —
Individual Profiles. Using the structured table from Step 22.1,
write a profile for each case.

Rules:
(1) 100–150 words per case.
(2) Structure: key facts → trajectory → one distinctive feature.
(3) You may not compare cases in this layer. Each profile is written
    as if this is the only case in the dataset.
(4) End each profile with one sentence beginning exactly:
    "The detail most likely to matter later is:"
    Name the single feature you predict will explain this case's
    position relative to the group, without yet knowing the group
    analysis.
(5) Use clear case headings matching the identifiers from Step 22.1.

Produce all profiles now, then pause.
```

> [!NOTE]
> **Application note:** The closing sentence in each profile is a commitment. It locks in a hypothesis about which individual feature will drive the variance explanation. In Layer 3, that prediction is confirmed, corrected, or reframed. This is where the module teaches analytical thinking, not just summary. If the AI skips this sentence for any case, ask it to add it before proceeding.

---

### Step 22.3 — Layer 2: Group analysis *(zoom out)*

Now look across all cases together. Describe the group, not the individuals.

```
#VibeRounds We are running Layer 2 — Group Analysis. Look across
all individual profiles and produce four clearly labelled sections:

(a) SHARED FEATURES
List only features present in at least two-thirds of cases.
Be specific — name the feature and the cases it appears in.

(b) CENTRAL TENDENCY
Describe the "typical" or "average" case in 3–5 sentences.
This is the baseline all cases will be measured against in Layer 3.
Make it concrete enough that a new case could be checked against it.

(c) RANGE AND CLUSTERS
What is the spread on the main variable? Are there visible subgroups —
cases that cluster together in a way that separates them from others?
Name the clusters if they exist and list which cases belong to each.

(d) OUTLIER FLAG
Is any case so far from the group pattern that its deviation will
require a structural explanation, not just a nuance? Name it and
state in one sentence why it stands apart.

Do NOT explain the variance yet. That is Layer 3.
Pause after producing this output.
```

---

### Step 22.4 — Layer 3: Synthesis *(connect and explain the variance)*

This is the layer that earns the module its purpose. A synthesis that restates layers 1 and 2 is a failure.

```
#VibeRounds We are running Layer 3 — Synthesis. This is not a
summary. The task is to connect the individual (Layer 1) to the
group (Layer 2) by explaining variance.

For EACH case, write one paragraph containing:

(1) COMPARISON TO GROUP — State explicitly how this case's outcome
    or position compares to the group central tendency from Layer 2.
    Is it above, below, aligned, or structurally different? Quantify
    or qualify the degree of deviation if possible.

(2) MECHANISM — Name the specific mechanism or factor that drives
    this deviation. Be causal, not descriptive. "This case had a
    worse outcome" is description. "This case's deviation is explained
    by X acting through Y" is mechanism.

(3) PREDICTION REVIEW — Return to the Layer 1 sentence "The detail
    most likely to matter later is:". Was it correct? Partially
    correct? Wrong? If wrong, name what actually drove the deviation
    instead, and why the Layer 1 prediction missed it.

(4) DISCUSSION IMPLICATION — One sentence: what does this case's
    deviation from the average teach us about the phenomenon the
    group was assembled to study?

After all individual case paragraphs, produce:

DISCUSSION PARAGRAPH (clearly labelled, 4–6 sentences):
The single most important finding that emerges from the *pattern*
of deviations across the whole group — something that neither any
individual case nor the average alone could have revealed. This is
the finding you would open a case conference with, or the conclusion
of a case series write-up.

The synthesis must reference specific cases by their identifier
and must reference the group central tendency by name.
It may not be generic.
```

> [!NOTE]
> **Application note — quality test:** If any synthesis paragraph could be removed from the response and the remaining paragraphs would still make sense, that paragraph is not doing synthesis — it is doing summary. A true synthesis paragraph is irreplaceable: remove it and you lose the connection between that case and the group. Apply this test before accepting the Layer 3 output.

---

---

## Phase 3 · Closure / Review

---

### Step 22.5 — Variance interrogation

Stress-test the synthesis. Push hardest on the cases where the variance explanation is weakest.

```
#VibeRounds Interrogate the synthesis from Layer 3. For each case
where the variance explanation relied on a single factor:

(a) ALTERNATIVE EXPLANATION — Propose at least one alternative
    mechanism that could account for the same deviation.

(b) DISTINGUISHING EVIDENCE — State what evidence from the case
    data would distinguish between the original explanation and
    the alternative.

(c) MISSING VARIABLE FLAG — If the case data does not contain
    enough information to distinguish between the two explanations,
    say so explicitly and name the missing variable.

This is not a correction of Layer 3. It is a stress test.
We are identifying where the synthesis is fragile.
```

---

### Step 22.6 — Synthesis quality check and closure

Run this last. Produces the citable output and the Discussion paragraph you would carry forward.

```
#VibeRounds We are at closure. Produce a quality check against
three criteria:

(1) COVERAGE — Did every case receive an individual profile and
    a variance explanation? Name any that were thin or incomplete.

(2) SPECIFICITY — Was the group central tendency (Layer 2b) concrete
    enough that each variance explanation could be measured against
    it? If not, restate the central tendency more precisely now.

(3) DISCUSSION VALUE — Write the final Discussion paragraph:
    In 4–6 sentences, state the single most important thing the
    group's variance reveals about the phenomenon under study.
    It must go beyond what any individual case showed.
    It must go beyond what the average showed.
    It must arise from the pattern of deviations.
    This is the sentence you would open a case conference with,
    or the abstract conclusion of a case series submission.
```

> [!NOTE]
> **Application note:** The Discussion paragraph from Step 22.6 is the output that justifies running the full module. It is the finding that emerges from variance — not from any single case, and not from the average. Save it. If it could have been written from Layer 1 or Layer 2 alone, ask the AI to revise it until it could not.

---

---

## Supplementary frameworks active in this module

| Framework | Application in Module 22 |
|-----------|--------------------------|
| [C — Bloom's Revised Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-C-Blooms-Taxonomy.html) | Layer 3 synthesis targets the two highest cognitive levels — Evaluate (judging deviation against group standard) and Create (generating a Discussion finding that did not exist in the input). |
| [D — Critical Awareness Framework](https://avi33tbtt.github.io/Prompts/Framework-D-Critical-Awareness-Framework.html) | Step 22.5 (variance interrogation) is a direct application of Framework D. It trains the learner to hold the synthesis at arm's length and find its weakest point before trusting it. |
| [B — Fink's FLINK Taxonomy](https://avi33tbtt.github.io/Prompts/Framework-B-Finks-FLINK-Taxonomy.html) | The three-layer structure maps directly onto Fink's Integration dimension — connecting discrete facts (Layer 1) to patterns (Layer 2) to meaning (Layer 3). The Discussion paragraph activates the Human Dimension and Caring dimensions if applied to clinical cases. |
| [A — Humanistic Persona](https://avi33tbtt.github.io/Prompts/Framework-A-Humanistic-Persona.html) | When used in a teaching context, apply Framework A framing at the opening of Step 22.0 or 22.2 to ensure the AI role is educational partner, not oracle. |

---

---

## Design guidelines — Module 22 dashboard (HTML implementation)

Use these guidelines when asking an LLM to generate a self-contained HTML file that implements Module 22 as an interactive dashboard. The dashboard accepts cases inline or via URLs and displays the three-layer output with navigation tabs.

---

### D1. Output requirements

- **Single file:** One `.html` file. All CSS, JavaScript, and content inline. No external dependencies except one CDN font import (Inter from Google Fonts) and the Anthropic API endpoint.
- **Theme:** Light theme. White/off-white backgrounds, dark text, subtle grey borders. Dark-mode preference respected via `@media (prefers-color-scheme: dark)` with a defined dark palette.
- **Design:** Minimalist — no gradients, no heavy shadows, no decorative flourishes. Whitespace is the primary layout tool.
- **Input modes supported:** (1) Inline text — paste cases into textarea. (2) Single URL — one field for a URL containing multiple cases. (3) Multiple URLs — dynamic list of URL inputs. (4) Mixed — textarea plus URL list simultaneously.
- **Output:** Three navigable tabs — Layer 1, Layer 2, Layer 3. Each tab streams its content and displays a copy-to-clipboard button on completion.
- **AI backend:** Anthropic `/v1/messages` endpoint, model `claude-sonnet-4-6`, `max_tokens: 1000`.

---

### D2. Technology stack

```
HTML5 (semantic: <main>, <section>, <header>, <footer>)
CSS3 (custom properties for theming; Flexbox and Grid)
Vanilla JavaScript — no frameworks, no jQuery, ES6+
Font: Inter from Google Fonts (single CDN import)
Icons: Unicode symbols only — no icon library
API: Anthropic /v1/messages (fetch, no SDK)
```

---

### D3. Colour palette

```css
:root {
  /* backgrounds */
  --bg-primary:      #ffffff;
  --bg-secondary:    #f8f7f4;
  --bg-tertiary:     #f1efe8;

  /* text */
  --text-primary:    #1a1a18;
  --text-secondary:  #5f5e5a;
  --text-muted:      #888780;

  /* borders */
  --border:          rgba(0, 0, 0, 0.12);
  --border-emphasis: rgba(0, 0, 0, 0.22);

  /* layer accent colours */
  --layer1-fill:     #EEEDFE;   /* purple — individual, unique */
  --layer1-border:   #534AB7;
  --layer1-text:     #3C3489;

  --layer2-fill:     #E1F5EE;   /* teal — group, shared */
  --layer2-border:   #0F6E56;
  --layer2-text:     #085041;

  --layer3-fill:     #FAEEDA;   /* amber — synthesis, insight */
  --layer3-border:   #854F0B;
  --layer3-text:     #633806;

  /* semantic */
  --danger-fill:     #FAECE7;
  --danger-border:   #993C1D;
  --danger-text:     #712B13;

  --radius-md:       8px;
  --radius-lg:       12px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary:      #1e1e1c;
    --bg-secondary:    #252522;
    --bg-tertiary:     #2c2c2a;
    --text-primary:    #f0ede6;
    --text-secondary:  #b4b2a9;
    --text-muted:      #888780;
    --border:          rgba(255, 255, 255, 0.10);
    --border-emphasis: rgba(255, 255, 255, 0.20);
    --layer1-fill:     #26215C;
    --layer1-border:   #AFA9EC;
    --layer1-text:     #CECBF6;
    --layer2-fill:     #04342C;
    --layer2-border:   #5DCAA5;
    --layer2-text:     #9FE1CB;
    --layer3-fill:     #412402;
    --layer3-border:   #EF9F27;
    --layer3-text:     #FAC775;
    --danger-fill:     #4A1B0C;
    --danger-border:   #F0997B;
    --danger-text:     #F5C4B3;
  }
}
```

---

### D4. Typography

```css
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-primary);
  background: var(--bg-primary);
  max-width: 880px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

h1 { font-size: 22px; font-weight: 500; }
h2 { font-size: 18px; font-weight: 500; }
h3 { font-size: 16px; font-weight: 500; }
/* Two weights only: 400 regular, 500 medium. Never 600 or 700. */
/* Sentence case always. Never Title Case or ALL CAPS. */
```

---

### D5. Layout structure

```
┌────────────────────────────────────────────────────────┐
│  HEADER — Module 22 title, back link, status badge     │
├────────────────────────────────────────────────────────┤
│  INPUT PANEL                                           │
│  ┌─────────────────────────────────────────────────┐  │
│  │ Mode selector (radio): Inline / URL / Mixed     │  │
│  │ Input area (textarea or URL list, shown by mode)│  │
│  │ Focus selector (dropdown)                       │  │
│  │ Run button                                      │  │
│  └─────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────┤
│  OUTPUT TABS                                           │
│  [ Layer 1 — Individual profiles ]                     │
│  [ Layer 2 — Group analysis      ]                     │
│  [ Layer 3 — Synthesis           ]                     │
│  ┌─────────────────────────────────────────────────┐  │
│  │  Active tab content (streamed, scrollable)      │  │
│  │  Copy button (appears on completion)            │  │
│  └─────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────┤
│  FOOTER — Disclaimer · #VibeRounds                     │
└────────────────────────────────────────────────────────┘
```

---

### D6. Input mode behaviour

| Mode | UI shown | Prompt construction |
|------|----------|---------------------|
| **Inline text** | Single textarea | Cases pasted directly into system prompt |
| **Single URL** | Single URL input field | Prompt instructs model to fetch URL and extract cases before analysing |
| **Multiple URLs** | Dynamic list — "+ Add URL" button adds fields; "✕" removes | Prompt sends numbered URL list; instructs fetch-then-extract for each |
| **Mixed** | Textarea + URL list both visible | Both sources combined in prompt; model merges and deduplicates before structuring |

**URL fetch instruction to embed in prompt (all URL modes):**

```
Before beginning the analysis, fetch and read each URL below.
For each URL, extract all cases it contains. If a URL is inaccessible,
note this and proceed with the remaining sources.
Assign each extracted case a unique identifier: S[source number]-C[case number]
(e.g. S1-C1 for first case from first source).
Present a brief extraction summary (N cases found, N flagged as incomplete)
before beginning Layer 1.
```

---

### D7. API call structure

The dashboard makes **three sequential API calls** — one per layer. Each call includes the full case data and the outputs of all prior layers in the message content, ensuring continuity without requiring session state.

```javascript
// Call 1 — Layer 1
const layer1 = await callClaude(systemPrompt, buildLayer1Prompt(cases));

// Call 2 — Layer 2 (includes Layer 1 output)
const layer2 = await callClaude(systemPrompt, buildLayer2Prompt(cases, layer1));

// Call 3 — Layer 3 (includes both prior layers)
const layer3 = await callClaude(systemPrompt, buildLayer3Prompt(cases, layer1, layer2));

async function callClaude(system, userMsg) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1000,
      system: system,
      messages: [{ role: 'user', content: userMsg }]
    })
  });
  const data = await res.json();
  if (!data.content) throw new Error(data.error?.message || 'API error');
  return data.content.map(b => b.text || '').join('');
}
```

---

### D8. Tab styling rules

```
Active tab:   border-bottom: 2px solid var(--layer[N]-border)
              color: var(--text-primary)
              background: none

Inactive tab: border-bottom: none
              color: var(--text-muted)
              background: none

Tab row:      border-bottom: 0.5px solid var(--border)
              overflow-x: auto (for narrow viewports)
```

Each tab's active underline colour matches its layer:
- Layer 1 tab active → `var(--layer1-border)` (purple)
- Layer 2 tab active → `var(--layer2-border)` (teal)
- Layer 3 tab active → `var(--layer3-border)` (amber)

---

### D9. Loading state

While each layer is generating:

```html
<div class="loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <span>Generating [layer name]…</span>
</div>
```

```css
.dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--layer[N]-border);
  animation: pulse 1.2s ease-in-out infinite;
}
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes pulse {
  0%, 80%, 100% { opacity: 0.2; transform: scale(0.85); }
  40%           { opacity: 1;   transform: scale(1); }
}
```

Auto-advance to the next tab when a layer completes, so the user sees progress without manual switching.

---

### D10. Output rendering

The AI returns plain text with markdown-style formatting. Apply minimal rendering:

```javascript
function renderOutput(text, el) {
  // Convert **heading** lines to <h4>
  // Convert **bold** inline to <strong>
  // Preserve paragraph breaks
  // Do NOT render full markdown — keep it flat and readable
  const html = text
    .split('\n')
    .map(line => {
      const t = line.trim();
      if (/^\*\*[^*]+\*\*$/.test(t)) return `<h4>${t.slice(2,-2)}</h4>`;
      if (t === '') return '<br>';
      return `<p>${t.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}</p>`;
    })
    .join('');
  el.innerHTML = html;
}
```

---

### D11. Copy-to-clipboard

Each tab shows a copy button after its layer completes:

```javascript
async function copyLayer(idx) {
  const text = document.getElementById('content-' + idx).innerText;
  await navigator.clipboard.writeText(text);
  // briefly change button label to "Copied ✓", then revert after 1800ms
}
```

---

### D12. Error handling

```javascript
try {
  const layer = await callClaude(system, prompt);
  renderOutput(layer, el);
} catch (err) {
  el.innerHTML = `<p style="color:var(--danger-text)">
    Error: ${err.message}. Check your connection and try again.
  </p>`;
}
```

Never expose raw API error objects to the user. Always provide a human-readable message and a clear next step (try again, check connection).

---

### D13. Footer

```html
<footer>
  <p>Module 22 — Nested Analysis · Vibe Rounds Prompt Modules ·
  Dr. Avinash Kumar Gupta · June 2026 · #VibeRounds</p>
  <p>All AI-generated outputs require independent clinical verification
  before being acted upon. This module is a learning tool, not a
  clinical decision support system.</p>
</footer>
```

---

### D14. GitHub Pages deployment checklist

- [ ] File saved as `Module-22-Nested-Analysis.html` in the repository root (same directory as other modules)
- [ ] Jekyll front matter added at top of file if site uses Jekyll layouts (see Section D15)
- [ ] All CSS and JS inline — no local file imports
- [ ] `Module-22-Nested-Analysis.md` in same directory (this file — the prompt reference)
- [ ] Row added to Module Index table in `Prompts.html`
- [ ] Row added to Lifecycle Coverage Summary
- [ ] Row added to Module Maturity table: status `🟣 New`

---

### D15. Jekyll front matter (if needed)

If the repository uses Jekyll to build GitHub Pages, add this block at the very top of both the `.html` and `.md` files:

```yaml
---
layout: default
title: Module 22 — Nested Analysis | VibeRounds
---
```

For the `.html` file, Jekyll will wrap it in the site layout. If you want the `.html` to render standalone without Jekyll wrapping, add:

```yaml
---
layout: none
---
```

---

---

## Worked example — what strong synthesis looks like

The following contrasts a failing and a passing Layer 3 output using a hypothetical set of four DKA/HHS cases.

**Case set used:**
- Case 1: 45F, T2DM, DKA after steroid course for asthma. No prior DKA.
- Case 2: 62M, T2DM, HHS after missing insulin during travel. No prior admission.
- Case 3: 28F, T2DM, third DKA in 18 months. Later disclosed insulin omission for weight control.
- Case 4: 71M, T2DM + CKD3, HHS two weeks after starting SGLT2 inhibitor. Lives alone, limited mobility.

---

> [!CAUTION]
> **Weak synthesis — do not accept this output:**
>
> "Case 1 had DKA due to steroids. Case 2 had HHS due to missed insulin. Case 3 had recurrent DKA due to insulin omission. Case 4 had HHS after a medication change. The group shows that DKA and HHS can occur in T2DM patients for a variety of reasons."
>
> This is summary. It restates Layer 1. The group central tendency is not invoked. No variance is explained. No mechanism is named. No Discussion implication is produced.

---

> [!TIP]
> **Strong synthesis — accept this:**
>
> **Case 3 (structural outlier):**
> The group central tendency (Layer 2) is a patient with established T2DM who develops acute decompensation due to disruption of an otherwise stable equilibrium by an external event — iatrogenic, logistical, or pharmacological. Cases 1, 2, and 4 all conform to this pattern. Case 3 deviates structurally: the disruption was deliberate and repeated, placing it in a different causal class entirely — not equilibrium disruption but equilibrium manipulation. The Layer 1 prediction ("good intercurrent control between episodes") was partially correct as a flag but incorrect about mechanism; it pointed to compliance as a protective factor, when in fact the stable intercurrent HbA1c was itself the consequence of manipulation, not independent evidence of stability. Discussion implication: recurrent DKA in a patient with apparently good between-episode control requires a different initial hypothesis than a first presentation — the management workup must include a direct conversation about insulin omission as a behaviour, not just an oversight.
>
> **DISCUSSION PARAGRAPH:**
> The most important finding from this case set is not the variety of precipitants — that is expected and unremarkable. It is the hidden causal axis that separates Cases 1, 2, and 4 from Case 3: the axis of *intent*. In the first three cases, the patient's own metabolic regulatory behaviour remained stable; the disruption was external. In Case 3, the patient's regulatory behaviour was itself the mechanism. This distinction is invisible to the average and invisible to any individual case read in isolation; it only becomes visible when the pattern of deviations is examined together. The clinical teaching value is this: a case series of acute diabetic decompensations that does not explicitly characterise the intent axis will systematically miscategorise Case 3-type presentations, assign the wrong initial management frame, and fail to address the underlying behaviour.

---

## Reference

| Field | Content |
|-------|---------|
| **Module number** | 22 |
| **Module name** | Nested Analysis |
| **Author** | Dr. Avinash Kumar Gupta |
| **Date** | June 2026 |
| **Status** | 🟣 New |
| **Repository** | [VibeRounds Prompt Modules](https://avi33tbtt.github.io/Prompts/Prompts.html) |
| **Related modules** | 1, 6, 7, 8, 9 |
| **Frameworks active** | A, B, C, D |
| **Validated environment** | Claude (claude.ai), June 2026 |
| **Evidence level** | Expert opinion / case-report level — not peer reviewed |

---

*Vibe Rounds Prompt Modules · #VibeRounds*

[← Back to Prompt Directory](https://avi33tbtt.github.io/Prompts/Prompts.html)
