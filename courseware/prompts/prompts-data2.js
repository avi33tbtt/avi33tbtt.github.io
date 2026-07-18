// prompts-data.js
// Shared prompt library for the Ward Chart Prompt Builder (index.html)
// and the Prompts page (prompts/index.html).
//
// Each prompt supports these tokens, replaced at build time:
//   {{SUBJECT}}  — selected subject title
//   {{CHAPTER}}  — selected chapter title
//   {{TOPIC}}    — selected topic(s), joined with "; "
//   {{DISEASE}}  — placeholder text until a disease list is wired in
//
// `track` groups prompts into the four learning tracks shown on the
// Prompts page: context, reasoning, recall, media.

const PROMPTS = [

  // ---------- TRACK A — Context & Story ----------
  {
    track: "context",
    category: "Context & Story",
    title: "Patient Story / Illness Narrative",
    blurb: "A patient's journey from first symptom to outcome — builds empathy and memorable context.",
    text: `You are a medical educator writing for an MBBS student.
Subject: {{SUBJECT}} | Chapter: {{CHAPTER}} | Topic(s): {{TOPIC}} | Disease/condition: {{DISEASE}}

Write a realistic first-person or third-person patient story (300-450 words) that follows one patient through:
1. Initial symptom onset (what they noticed, how they described it)
2. The path to seeking care (delay, misattribution, escalation)
3. Clinical presentation on examination
4. Key investigations and what they revealed
5. Diagnosis and the "aha" clinical reasoning moment
6. Treatment course and outcome (including any complications if relevant)

Keep it medically accurate, but written as a narrative, not a list. End with 3 teaching points a student should extract from this story.`
  },
  {
    track: "context",
    category: "Context & Story",
    title: "Mechanism / Pathway Story",
    blurb: "Walks the pathophysiology as a step-by-step causal chain instead of a static list.",
    text: `Explain the pathophysiological mechanism behind {{TOPIC}} (from {{SUBJECT}}, {{CHAPTER}}, condition: {{DISEASE}}) as a step-by-step causal story — "first X happens, which causes Y, which leads to Z."

Requirements:
- Start from the trigger/cause and end at the clinical manifestation
- Make every causal link explicit (no unexplained jumps)
- Use plain language first, then add technical/biochemical terms in brackets
- End with a one-paragraph summary connecting the mechanism directly to the 2-3 most important clinical signs/symptoms`
  },
  {
    track: "context",
    category: "Context & Story",
    title: "Real-World Analogy / Metaphor",
    blurb: "A non-medical analogy that locks in a hard concept.",
    text: `For {{TOPIC}} (Subject: {{SUBJECT}}, Chapter: {{CHAPTER}}), create a clear, non-medical analogy or metaphor that explains the core concept or mechanism to a student who is struggling with it.

Requirements:
- Analogy must be drawn from everyday life (machines, plumbing, economics, sports, cooking, etc.)
- Map each part of the analogy explicitly to the corresponding medical structure/process
- Note where the analogy breaks down (so I don't over-extend it)
- Keep it under 200 words`
  },
  {
    track: "context",
    category: "Context & Story",
    title: "Cross-Subject Correlation",
    blurb: "Views the same topic through Anatomy, Physiology, Pathology, and Pharmacology together.",
    text: `Take {{TOPIC}} (condition: {{DISEASE}}) from {{SUBJECT}} / {{CHAPTER}} and explain it across these lenses in sequence:
1. Anatomy — relevant structures involved
2. Physiology — normal function being disrupted
3. Pathology — what goes wrong at tissue/cell level
4. Pharmacology — how drugs used in treatment interact with the mechanism
5. Clinical Medicine — how this ties together at the bedside

Keep each section to 3-4 sentences. End with one sentence on what understanding all five together adds that studying them separately wouldn't.`
  },

  // ---------- TRACK B — Clinical Reasoning ----------
  {
    track: "reasoning",
    category: "Clinical Reasoning",
    title: "Socratic Case",
    blurb: "A case you reason through — hints on request, full answer only at the end.",
    text: `Act as a Socratic clinical tutor for an MBBS student studying {{TOPIC}} ({{SUBJECT}}, {{CHAPTER}}, condition: {{DISEASE}}).

Present a clinical case/question and DO NOT reveal the answer yet.
Rules:
1. Give the case stem (history + exam findings) and ask me one guiding question at a time.
2. Wait for my response before giving the next hint.
3. If I'm stuck, give a progressively more specific hint (start vague, get more direct only if I ask again).
4. Only after I've attempted reasoning through the case, reveal the full explanation, including diagnosis, reasoning pathway, and key learning points I may have missed.

Start now with the case stem and your first question.`
  },
  {
    track: "reasoning",
    category: "Clinical Reasoning",
    title: "Related / Differential Diseases List",
    blurb: "\"What else could this be?\" — mimics and commonly confused conditions.",
    text: `For {{DISEASE}} (within {{TOPIC}}, {{SUBJECT}} / {{CHAPTER}}), generate a differential diagnosis list.

For each differential, include:
- Condition name
- One key distinguishing clinical/lab feature
- One trap where students commonly confuse the two

Order the list from "most likely to be confused" to "less likely but must-not-miss."`
  },
  {
    track: "reasoning",
    category: "Clinical Reasoning",
    title: "Disease Comparison Table",
    blurb: "Look-alike conditions side by side across symptoms, labs, and treatment.",
    text: `Create a comparison table for {{DISEASE}} (topic: {{TOPIC}}) and its 2-4 closest differentials, from {{SUBJECT}} / {{CHAPTER}}.

Columns: Disease | Key Symptoms | Key Signs | Key Investigation Finding | First-Line Treatment | One Distinguishing Pearl

Keep each cell concise — this is meant to be scanned quickly before an exam, not read as prose.`
  },
  {
    track: "reasoning",
    category: "Clinical Reasoning",
    title: "Red Flags / When to Refer",
    blurb: "Danger signs that change management or trigger urgent escalation.",
    text: `List the red flag signs/symptoms for {{DISEASE}} (within {{TOPIC}}, {{SUBJECT}} / {{CHAPTER}}) that should immediately change management or trigger urgent referral/escalation.

For each red flag:
- What it is
- Why it's dangerous (the underlying complication it signals)
- What immediate action it should prompt

Separate into "requires immediate emergency action" vs "requires urgent but not emergency referral."`
  },
  {
    track: "reasoning",
    category: "Clinical Reasoning",
    title: "Complication Timeline",
    blurb: "What happens if untreated, and in what order.",
    text: `For {{DISEASE}} (topic: {{TOPIC}}, {{SUBJECT}} / {{CHAPTER}}), construct a complication timeline showing what happens if the condition is left untreated or undertreated.

Format as stages: Early (days-weeks) → Intermediate (weeks-months) → Late (months-years), listing complications that typically emerge at each stage and briefly why.

End with which stage is the most critical intervention window and why.`
  },
  {
    track: "reasoning",
    category: "Clinical Reasoning",
    title: "Drug / Treatment Decision Tree",
    blurb: "If-this-then-that clinical decision logic for management.",
    text: `Build a treatment decision tree for {{DISEASE}} (topic: {{TOPIC}}, Subject: {{SUBJECT}}, Chapter: {{CHAPTER}}).

Structure it as branching if/then logic starting from initial presentation/severity assessment, through first-line treatment, to escalation steps if first-line fails or complications arise.

Use indentation or arrows to show branch points clearly. Note any absolute or relative contraindications at each branch.`
  },
  {
    track: "reasoning",
    category: "Clinical Reasoning",
    title: "History-Taking & Examination Script",
    blurb: "A simulated doctor-patient dialogue for practicing clinical skills.",
    text: `Write a simulated doctor-patient dialogue for a patient presenting with {{DISEASE}} (or symptoms consistent with {{TOPIC}}).

Requirements:
- Realistic patient responses (including vague/incomplete answers a real patient might give)
- Show the doctor asking systematic history questions (presenting complaint, history of presenting illness, past history, relevant systems review)
- Include the key examination findings the doctor would elicit, described as observations
- End with a short reflection: which questions were most diagnostically important and why`
  },
  {
    track: "reasoning",
    category: "Clinical Reasoning",
    title: "Investigation & Interpretation Guide",
    blurb: "Which test to order, what a result means, and the next step.",
    text: `For {{DISEASE}} (topic: {{TOPIC}}, Subject: {{SUBJECT}}, Chapter: {{CHAPTER}}), create an investigation guide covering:
1. First-line investigations (and why each is chosen)
2. Expected findings if positive/confirmatory
3. What a normal/negative result would mean instead
4. Second-line/confirmatory investigations if first-line is inconclusive
5. One common interpretation mistake students make with these results`
  },

  // ---------- TRACK C — Recall & Exam Prep ----------
  {
    track: "recall",
    category: "Recall & Exam Prep",
    title: "Clinical Vignette MCQs",
    blurb: "Exam-pattern practice with explanations, not just answers.",
    text: `Generate 5 clinical vignette-style MCQs on {{TOPIC}} (Subject: {{SUBJECT}}, Chapter: {{CHAPTER}}, condition: {{DISEASE}}), matching MBBS exam difficulty.

For each MCQ:
- A clinical stem (2-4 sentences, realistic patient presentation)
- 4-5 options (one correct, plausible distractors)
- Mark the correct answer
- Give a 2-3 sentence explanation of why the correct answer is right and why the top distractor is wrong

Vary difficulty: 2 easy (recall), 2 moderate (application), 1 hard (analysis/integration).`
  },
  {
    track: "recall",
    category: "Recall & Exam Prep",
    title: "Rapid-Recall Flashcards",
    blurb: "Atomic Q/A pairs for spaced repetition.",
    text: `Generate 15 flashcards (Q/A pairs) for {{TOPIC}} (Subject: {{SUBJECT}}, Chapter: {{CHAPTER}}, condition: {{DISEASE}}).

Rules:
- Each card tests exactly ONE atomic fact (no compound questions)
- Questions should be short and unambiguous
- Answers should be as short as possible while still complete
- Mix fact types: definitions, values/numbers, classifications, drug names/doses, associations
- Format as: Q: ... / A: ...`
  },
  {
    track: "recall",
    category: "Recall & Exam Prep",
    title: "Long/Short Answer Q&A",
    blurb: "University exam-format questions with model answers.",
    text: `Generate exam-style questions for {{TOPIC}} (Subject: {{SUBJECT}}, Chapter: {{CHAPTER}}, condition: {{DISEASE}}), matching MBBS university exam pattern:

- 1 long answer question (10 marks) with a model answer structured under clear headings/subheadings, including all keywords an examiner would look for
- 3 short answer questions (5 marks each) with concise model answers (bullet points acceptable)
- 2 short-note questions (3 marks each) with model answers

Label each with its mark value and keep model answers exam-realistic in length (not overly long).`
  },
  {
    track: "recall",
    category: "Recall & Exam Prep",
    title: "Clinical Pearls",
    blurb: "High-yield facts a senior clinician or examiner would specifically test.",
    text: `Generate a list of 10 clinical pearls for {{DISEASE}} (topic: {{TOPIC}}, from {{SUBJECT}} / {{CHAPTER}}).

Each pearl should be:
- A standalone, high-yield fact or tip (not something found in a basic textbook definition)
- The kind of thing a senior clinician or examiner would specifically test or mention
- One line each — no explanations unless the pearl is a counter-intuitive exception

Mix pearl types: exam traps, bedside/examination tips, classic associations, "exception to the rule" facts.`
  },
  {
    track: "recall",
    category: "Recall & Exam Prep",
    title: "Common Exam Trap List",
    blurb: "The mistakes students typically make on this topic, and how to avoid them.",
    text: `List the most common mistakes MBBS students make when answering questions on {{TOPIC}} (Subject: {{SUBJECT}}, Chapter: {{CHAPTER}}, condition: {{DISEASE}}).

For each mistake:
- What the student typically writes/thinks (the wrong answer or misconception)
- Why it's wrong
- The correct concept, stated clearly
- A quick memory trick to avoid the mistake in the future`
  },
  {
    track: "recall",
    category: "Recall & Exam Prep",
    title: "Epidemiology / Public Health Snapshot",
    blurb: "Prevalence, risk factors, and prevention — ties into Community Medicine.",
    text: `Give a public-health snapshot of {{DISEASE}} (topic: {{TOPIC}}, {{SUBJECT}} / {{CHAPTER}}) covering:
- Prevalence/incidence (globally and in India if data differs meaningfully)
- Key risk factors (modifiable vs non-modifiable)
- Primary, secondary, and tertiary prevention strategies
- Any relevant national health programme (if applicable)

Keep it exam-ready — short bullet points, no long paragraphs.`
  },

  // ---------- TRACK D — Passive & Media ----------
  {
    track: "media",
    category: "Passive & Media",
    title: "Case-Based Podcast Script",
    blurb: "A 5-7 minute spoken-narration script for passive revision.",
    text: `Write a 5-7 minute podcast script (spoken narration, conversational tone) covering {{DISEASE}} (topic: {{TOPIC}}, {{SUBJECT}} / {{CHAPTER}}), structured as a case-based story.

Structure:
1. Hook — open with the patient's presenting complaint to draw the listener in
2. Walk through the clinical reasoning out loud, as if thinking through the case with the listener
3. Reveal the diagnosis and explain the mechanism in plain spoken language
4. Cover treatment and outcome
5. Close with 3 key takeaways, stated clearly and slowly for retention

Write it as spoken word (contractions, natural pacing, rhetorical questions) — NOT as a textbook paragraph. Mark [PAUSE] where a natural break should happen.`
  },
  {
    track: "media",
    category: "Passive & Media",
    title: "Case-Based Video Lecture Script",
    blurb: "Narration + on-screen visual cues for a short teaching video.",
    text: `Write a script for a short video lecture (8-10 minutes) on {{DISEASE}} (topic: {{TOPIC}}, {{SUBJECT}} / {{CHAPTER}}), case-based and structured for a whiteboard/slide-style medical education video.

For each segment, provide:
- [NARRATION]: what the presenter says
- [VISUAL CUE]: what should appear on screen (diagram, table, image description, text overlay)

Structure:
1. Opening case scenario (visual: patient vignette on screen)
2. Key anatomy/physiology recap relevant to the case (visual: labeled diagram description)
3. Pathophysiology walkthrough (visual: flow diagram description)
4. Clinical correlation — signs/symptoms mapped to mechanism (visual: table)
5. Investigations and management (visual: decision tree or algorithm)
6. Summary slide with 3-5 key points (visual: bullet list)

Keep narration natural and teaching-oriented, as if presenting to a class.`
  }
];

if (typeof module !== "undefined") { module.exports = PROMPTS; }
