# Module QZ — Case-Based Quiz Generator

*A self-contained prompt module, structured in the Vibe Rounds format (Objective → Indication → Lifecycle → Steps → Application Notes), adapted for general exam preparation across any subject.*

---

## Objective

Turn a topic + question count + format request into a complete, ready-to-attempt, case-based (scenario-driven) quiz — with correct answers and explanations for every item — delivered as either:

- a **Markdown (.md) question bank** importable into quiz/practice-engine apps (Anki, Quizlet-style importers, custom LMS question banks, etc.), or
- a **single self-contained HTML file** that runs as an interactive quiz directly in a browser (select an answer, get instant feedback, see a final score).

**HTML is the default output** unless the user says otherwise.

## Indication

Use this module whenever a learner says something like:
- "Quiz me on [topic]"
- "Give me N case-based MCQs on [topic] with answers"
- "Make a practice test I can use in [app]" or "...that I can open in my browser"

It is domain-agnostic — clinical medicine, law, finance, programming, standardized test prep (USMLE, bar exam, CFA, GATE, etc.) all work the same way, because the module never hardcodes subject content; it only hardcodes the *process*.

---

## Lifecycle

**Initiation → Execution → Closure/Review**

- **Initiation:** Lock in the four contract variables before writing a single question — Topic, Number of Questions, Format(s) wanted, Difficulty/Style. Nothing is generated until this is confirmed.
- **Execution:** Generate case-based stems, options, keyed answers, and explanations; assemble into the chosen deliverable file(s).
- **Closure/Review:** Summarize what was produced (count, difficulty mix, topics covered), flag any weak-coverage areas, and offer a follow-up round (harder set, missed-topic drill, different format export).

---

## Step QZ.0 — Initiation Prompt (Intake)

Use this to open the session with the AI, or copy it as your own mental checklist if you're running the module yourself.

```
You are a case-based quiz generator for exam preparation. Before generating anything, confirm these four things with the user:

1. TOPIC — the exact subject/scope (e.g., "Type 2 Diabetes management", "Contract Law — Offer & Acceptance", "Python list comprehensions", "US History 1900–1950"). If vague, ask one clarifying question about scope/sub-topics.
2. NUMBER OF QUESTIONS — how many items to generate.
3. OUTPUT FORMAT — one of:
   a) Markdown (.md) file, formatted for import into a quiz/practice-engine app
   b) Interactive HTML file to practice in-browser (DEFAULT if the user doesn't specify)
   c) Both
4. STYLE/DIFFICULTY (optional, default = mixed difficulty, single-best-answer MCQ, vignette/case-based stems) — ask only if the user seems to have exam-specific needs (e.g., "USMLE Step 1 style", "case-based short-answer", "true/false rapid-fire").

Do not generate questions until 1–3 are confirmed. If the user has already stated all four in their request, skip straight to confirming assumptions in one line and proceed — don't make them repeat themselves.
```

## Step QZ.1 — Execution Prompt (Generation)

```
Generate exactly {N} case-based questions on {TOPIC}.

Rules for every question:
- Each item opens with a short scenario/case stem (2–5 sentences) that requires applying knowledge, not just recalling a definition — even for non-clinical topics, frame it as a realistic situation, problem, or mini-case.
- Provide 4–5 answer options (A–E) for MCQ-style items, with exactly one best/correct answer, unless the user requested a different question type.
- Vary difficulty across the set (roughly: 30% foundational, 50% applied/intermediate, 20% advanced/tricky) unless the user specified otherwise.
- Avoid "all of the above" / "none of the above" options and avoid grammatical or length cues that give away the answer.
- Distractors (wrong options) should be plausible — common misconceptions or near-miss reasoning, not obviously silly.

For every question, also produce:
- Correct answer (clearly keyed).
- Explanation: why the correct answer is right AND briefly why each distractor is wrong (1 line each is enough).
- Tag: sub-topic label, for coverage review later.

After generating all {N} questions, assemble them into the requested output file(s) using the exact templates in Step QZ.2 (Markdown) and/or Step QZ.3 (HTML).
```

## Step QZ.2 — Markdown Export Template

Use this structure for the `.md` deliverable so it's parseable by most quiz-import tooling (clear delimiters, one question per block):

```markdown
# {TOPIC} — Practice Quiz ({N} Questions)

---

## Q1
**Stem:** {case scenario text}

- A) {option A}
- B) {option B}
- C) {option C}
- D) {option D}
- E) {option E}

**Answer:** C
**Explanation:** {why C is correct; why A, B, D, E are wrong, briefly}
**Tag:** {sub-topic}

---

## Q2
...
```

(Repeat the `## Q{n}` block for every question. Keep the `**Answer:**` line format identical across all items — many import parsers key off that exact prefix.)

## Step QZ.3 — HTML Export Template

Self-contained, single-file, works offline in any browser, no external dependencies. Structure to generate:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>{TOPIC} — Practice Quiz</title>
  <style>/* clean, readable, mobile-friendly styling */</style>
</head>
<body>
  <!-- Quiz shell: -->
  <!-- 1. Title + progress indicator (Question X of N) -->
  <!-- 2. One question rendered at a time, with A–E as clickable options -->
  <!-- 3. On click: immediately highlight correct/incorrect, reveal explanation, enable "Next" -->
  <!-- 4. Running score tracked in memory (JS variable, NOT localStorage) -->
  <!-- 5. Final screen: score, % correct, breakdown by sub-topic tag, "Restart" button -->
  <script>
    // All {N} questions embedded as a JS array of objects:
    // { stem, options: [...], correctIndex, explanation, tag }
    // Vanilla JS only — no external libraries, so the file works fully offline.
  </script>
</body>
</html>
```

**Note:** browser storage APIs (localStorage/sessionStorage) must not be used — keep score state in a plain JS variable so the file works in any environment, including sandboxed viewers.

## Step QZ.4 — Closure/Review Prompt

```
Once the file(s) are generated, summarize for the user:
- Total questions generated and difficulty mix.
- Sub-topics covered (from the tags) and any gaps worth a follow-up set.
- Which file(s) were produced and how to use them (e.g., "open the .html directly in your browser" / "import the .md into [app]").
- Offer one natural next step: a harder follow-up round, a drill focused on weak sub-topics, or the same content in the other format.
```

---

## Application Notes

- **Format detection:** if the user just says "quiz me on X," default silently to HTML output — don't ask about format unless they've signaled they want the .md/import path (e.g., they name an app, or say "importable," "question bank," "for Anki," etc.).
- **Case-based ≠ medical-only:** for non-clinical topics, "case" means a realistic applied scenario (a legal fact pattern, a debugging snippet, a historical decision point) — the module still forces application over recall.
- **Scaling:** works the same at N=5 or N=100; for large N, generate in batches internally but still deliver one assembled file.
- **Reuse:** the intake (QZ.0) and generation (QZ.1) prompts can be copy-pasted directly into any LLM chat as a standalone tool, independent of this file's export templates, if the user only wants the questions inline.
