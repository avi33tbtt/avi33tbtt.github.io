# Vibe Rounds CAT Bank — Template & Design Guidelines

This file documents the reusable design system used in the *Vibe Rounds Cat Bank* pages (e.g. Anaemia) and provides a fill-in-the-blank HTML template so a new CAT Bank for **any disease** can be produced with an identical look and feel.

---

## 1. Design Guidelines

### Purpose
A single-page, self-contained HTML reference of "Critically Appraised Topics" (CATs) for a clinical topic, organized by evidence category (Diagnosis, Therapy, Prognosis, Harm/Etiology, Screening, etc.), with a short bottom-line answer per card.

### Color Palette (CSS variables)
```css
--ink:#1b1f23;          /* primary text */
--muted:#5b6570;        /* secondary text */
--accent:#0f6e5f;       /* brand green — headers, links, tags */
--accent-light:#e6f3f0; /* pale green — tag backgrounds, how-to box */
--border:#e2e5e8;       /* card & nav borders */
--bg:#fbfaf8;           /* page background */
--card:#ffffff;         /* card background */
```
> To theme a different disease, you may swap `--accent` / `--accent-light` for a different hue while keeping the same structure (e.g. blue for cardiology, maroon for oncology) — optional, not required.

### Typography
- **Headings & body text:** Georgia / Times New Roman (serif) — gives a "journal" feel.
- **UI chrome** (nav, tags, disclaimer, footer, how-to box): `-apple-system, Helvetica, Arial, sans-serif` — smaller, sans-serif, for contrast against the serif reading content.

### Layout Structure
1. **Header** — full-width gradient banner (`135deg,#0f6e5f,#134e42`), centered, white text. Contains:
   - `<h1>` title: `Vibe Rounds Cat Bank - [Disease]`
   - Subtitle describing CATs
   - Small "Compiled [Year] · For learning & personal reference only" line
2. **Container** — max-width `860px`, centered, horizontal padding.
3. **Disclaimer box** — pale yellow (`#fff7e6`, border `#f0dca0`), rounded corners, warns content is for learning only.
4. **Nav / Jump to Section** — white card with border, `<h2>` label in accent color, 2-column list of anchor links, one per section with CAT count.
5. **Section blocks** (`section.section-block`) — one per evidence category:
   - `<h2>` as a green pill/badge (`border-radius:20px`, accent background, white text)
   - Series of `.cat` cards
6. **CAT card** (`.cat`):
   - White card, subtle border, **5px accent-colored left border**
   - `<h3>` = "CAT N — [focused clinical question]"
   - `<p class="bottom-line">` = "**Bottom line:** [1–3 sentence evidence-based answer]"
7. **How-to-use box** (`.howto`) — pale green background box at the end explaining how to use the bank (review interval, version control, PICO framing, etc.)
8. **Footer** — centered, small, muted text with citation/compiled line.

### Responsive Behavior
- Breakpoint at `600px`: header/text sizes shrink, nav list collapses to 1 column, padding tightens.
- Breakpoint at `400px`: further font-size reduction for header and card titles.

### Interaction
- Nav links are in-page anchors (`#diagnosis`, `#therapy`, etc.) jumping to matching `id` on each `section.section-block`.
- No JavaScript required — pure HTML/CSS, single file, easy to open/share/print.

### Content Conventions
- CATs are numbered **sequentially across the whole document** (CAT 1, CAT 2 … CAT N), not reset per section.
- Each CAT question should be phrased as a focused, answerable clinical question (ideally PICO-style: Population, Intervention, Comparison, Outcome).
- Bottom lines are short (1–3 sentences), evidence-based, and hedge appropriately (mention caveats, thresholds, exceptions).
- Section order is flexible but commonly: Diagnosis → Therapy/Intervention → Prognosis → Harm/Etiology → Screening (add/remove sections as the disease's evidence base warrants — e.g., Prevention, Pathophysiology).
- Section header in nav includes CAT count in parentheses, e.g. `1. Diagnosis (10)`.

---

## 2. Reusable HTML Template

Copy the block below into a new `.html` file, then:
1. Replace all `[DISEASE]`, `[Year]`, and bracketed placeholders.
2. Duplicate the `.cat` block for each CAT, and the `section.section-block` for each evidence category.
3. Keep numbering sequential across the whole page.
4. Update the nav list to match your sections/counts.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vibe Rounds Cat Bank - [DISEASE]</title>
<style>
  :root{
    --ink:#1b1f23;
    --muted:#5b6570;
    --accent:#0f6e5f;
    --accent-light:#e6f3f0;
    --border:#e2e5e8;
    --bg:#fbfaf8;
    --card:#ffffff;
  }
  *{box-sizing:border-box;}
  html{ -webkit-text-size-adjust:100%; }
  body{
    overflow-x:hidden;
    font-family: Georgia, 'Times New Roman', serif;
    background:var(--bg);
    color:var(--ink);
    margin:0;
    padding:0 0 60px 0;
    line-height:1.55;
  }
  header{
    background:linear-gradient(135deg,#0f6e5f,#134e42);
    color:#fff;
    padding:40px 20px 30px;
    text-align:center;
  }
  header h1{
    margin:0 0 8px;
    font-size:2rem;
    letter-spacing:0.5px;
  }
  header p{
    margin:4px 0;
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    font-size:0.95rem;
    color:#d8ece8;
  }
  .container{
    max-width:860px;
    margin:0 auto;
    padding:0 20px;
  }
  .disclaimer{
    background:#fff7e6;
    border:1px solid #f0dca0;
    border-radius:8px;
    padding:14px 18px;
    margin:24px 0;
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    font-size:0.88rem;
    color:#6b5510;
  }
  nav{
    background:var(--card);
    border:1px solid var(--border);
    border-radius:10px;
    padding:18px 22px;
    margin:24px 0;
    font-family: -apple-system, Helvetica, Arial, sans-serif;
  }
  nav h2{
    font-size:0.95rem;
    text-transform:uppercase;
    letter-spacing:1px;
    color:var(--accent);
    margin:0 0 10px;
  }
  nav ul{
    columns:2;
    margin:0;
    padding-left:18px;
    font-size:0.88rem;
  }
  nav a{
    color:var(--ink);
    text-decoration:none;
  }
  nav a:hover{ color:var(--accent); text-decoration:underline; }

  section.section-block{
    margin-top:38px;
  }
  section.section-block > h2{
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    color:#fff;
    background:var(--accent);
    display:inline-block;
    padding:6px 16px;
    border-radius:20px;
    font-size:1rem;
    letter-spacing:0.3px;
    margin-bottom:18px;
  }
  .cat{
    background:var(--card);
    border:1px solid var(--border);
    border-left:5px solid var(--accent);
    border-radius:8px;
    padding:16px 20px;
    margin-bottom:14px;
  }
  .cat h3{
    margin:0 0 8px;
    font-size:1.02rem;
    color:var(--ink);
  }
  .cat .tag{
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    font-size:0.72rem;
    color:var(--accent);
    background:var(--accent-light);
    padding:2px 8px;
    border-radius:10px;
    margin-right:8px;
    vertical-align:middle;
  }
  .cat .bottom-line{
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    font-size:0.92rem;
    color:var(--muted);
    margin:0;
  }
  .cat .bottom-line strong{
    color:var(--ink);
  }
  .howto{
    margin-top:44px;
    background:var(--accent-light);
    border-radius:10px;
    padding:20px 24px;
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    font-size:0.92rem;
  }
  .howto h2{
    color:var(--accent);
    font-size:1rem;
    margin-top:0;
  }
  .howto ol{ padding-left:20px; }
  footer{
    text-align:center;
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    font-size:0.78rem;
    color:var(--muted);
    margin-top:50px;
  }
  @media (max-width:600px){
    body{ padding-bottom:40px; }
    header{ padding:28px 16px 22px; }
    header h1{ font-size:1.4rem; letter-spacing:0.2px; }
    header p{ font-size:0.85rem; }
    .container{ padding:0 14px; }
    .disclaimer{ padding:12px 14px; font-size:0.82rem; margin:18px 0; }
    nav{ padding:14px 16px; margin:18px 0; }
    nav ul{ columns:1; font-size:0.9rem; padding-left:16px; }
    section.section-block{ margin-top:28px; }
    .cat{ padding:14px 16px; }
    .howto{ padding:16px 18px; }
    .howto ol{ padding-left:18px; }
    footer{ font-size:0.72rem; padding:0 14px; margin-top:36px; }
  }

  @media (max-width:400px){
    header h1{ font-size:1.2rem; }
    .cat h3{ font-size:0.92rem; }
  }
</style>
</head>
<body>

<header>
  <h1>Vibe Rounds Cat Bank - [DISEASE]</h1>
  <p>Critically Appraised Topics — focused clinical questions with short evidence-based bottom lines</p>
  <p>Compiled [Year] · For learning &amp; personal reference only</p>
</header>

<div class="container">

  <div class="disclaimer">
    <strong>Disclaimer:</strong> These are short, generalized summaries for learning purposes only — not a substitute for full appraisal of primary literature, current guidelines, or individualized clinical judgment. Evidence quality varies by topic; verify before applying to practice.
  </div>

  <nav>
    <h2>Jump to Section</h2>
    <ul>
      <li><a href="#diagnosis">1. Diagnosis ([N])</a></li>
      <li><a href="#therapy">2. Therapy / Intervention ([N])</a></li>
      <li><a href="#prognosis">3. Prognosis ([N])</a></li>
      <li><a href="#harm">4. Harm / Etiology ([N])</a></li>
      <li><a href="#screening">5. Screening ([N])</a></li>
      <!-- Add/remove <li> entries to match your sections -->
    </ul>
  </nav>

  <section class="section-block" id="diagnosis">
    <h2>1 · Diagnosis</h2>

    <div class="cat">
      <h3>CAT 1 — [Focused clinical question]</h3>
      <p class="bottom-line"><strong>Bottom line:</strong> [1–3 sentence evidence-based answer, with caveats/thresholds.]</p>
    </div>

    <!-- Repeat .cat block for each CAT in this section -->

  </section>

  <section class="section-block" id="therapy">
    <h2>2 · Therapy / Intervention</h2>

    <div class="cat">
      <h3>CAT [N] — [Focused clinical question]</h3>
      <p class="bottom-line"><strong>Bottom line:</strong> [Answer.]</p>
    </div>

    <!-- Repeat -->

  </section>

  <section class="section-block" id="prognosis">
    <h2>3 · Prognosis</h2>

    <div class="cat">
      <h3>CAT [N] — [Focused clinical question]</h3>
      <p class="bottom-line"><strong>Bottom line:</strong> [Answer.]</p>
    </div>

    <!-- Repeat -->

  </section>

  <section class="section-block" id="harm">
    <h2>4 · Harm / Etiology</h2>

    <div class="cat">
      <h3>CAT [N] — [Focused clinical question]</h3>
      <p class="bottom-line"><strong>Bottom line:</strong> [Answer.]</p>
    </div>

    <!-- Repeat -->

  </section>

  <section class="section-block" id="screening">
    <h2>5 · Screening</h2>

    <div class="cat">
      <h3>CAT [N] — [Focused clinical question]</h3>
      <p class="bottom-line"><strong>Bottom line:</strong> [Answer.]</p>
    </div>

    <!-- Repeat -->

  </section>

  <div class="howto">
    <h2>How to Use This CAT Bank</h2>
    <ol>
      <li>Each entry is a <strong>starting point</strong>, not a final answer — trace back to primary literature or current guidelines before applying to a specific patient.</li>
      <li><strong>Review interval:</strong> re-appraise every 12–24 months, or sooner if practice-changing evidence emerges.</li>
      <li><strong>Version control:</strong> date every edit; track what changed and why rather than silently overwriting conclusions.</li>
      <li>Use consistent PICO framing for any new CATs added, to keep the bank searchable and comparable.</li>
    </ol>
  </div>

</div>

<footer>
  CAT Bank — [DISEASE] · Compiled [Year] · For personal learning use only, not a clinical decision tool
</footer>

</body>
</html>
```

---

## 3. Checklist for a New Disease CAT Bank

- [ ] Replace `[DISEASE]` in `<title>`, `<h1>`, and footer.
- [ ] Set the compile year.
- [ ] Define 3–6 sections relevant to the disease's evidence base (Diagnosis, Therapy, Prognosis, Harm/Etiology, Screening, Prevention, Pathophysiology, etc.).
- [ ] Update the nav list to match section ids, order, and CAT counts.
- [ ] Number CATs sequentially across the whole document.
- [ ] Keep each bottom line concise (1–3 sentences), evidence-based, with numeric thresholds/caveats where relevant.
- [ ] Validate all in-page anchor links (`#id`) resolve to a matching `id` on a `section.section-block`.
- [ ] Preserve the CSS exactly (or only swap `--accent`/`--accent-light` if a topic-specific color is desired) to keep visual consistency across the CAT Bank series.
