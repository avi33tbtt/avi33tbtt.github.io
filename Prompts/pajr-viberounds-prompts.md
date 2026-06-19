[← Back to README](README.md)

# PaJR × Vibe Rounds — Prompt Cheat Sheet

> **Modules 1 · 2 · 3 · 9** — curated and trimmed for the PaJR care ecosystem  
> Source: [Vibe Rounds by Dr. Avinash Kumar Gupta](https://avi33tbtt.github.io/Prompts/) · [PaJR Health](https://publications.pajrhealth.org/about/)

---

## Our Setup

**@PaJR Health Bot** lives in one WhatsApp group per patient. Each group contains the patient, their family advocate, and a network of students, teachers, and clinicians. The advocate captures de-identified data (informed consent required) via the bot. Students learn from real longitudinal journeys; clinicians get structured summaries; researchers get n-of-1 case datasets — all from the same continuous thread.

---

## ⚠️ Before You Use Any Prompt

- All AI outputs require **independent clinical verification** before action.
- Use **de-identified data only** — never paste names, dates of birth, or addresses.
- These prompts sit at **case-report / expert-opinion evidence level** (lowest tier of clinical evidence). They support reasoning; they do not replace it.
- Module 2 and 3 data accumulates identifying detail over time. Periodically delete inactive threads.

---

## Module 1 — Socratic Clinical Reasoning

**Who uses it:** Students and teachers in the WhatsApp group.  
**What it does:** Forces active reasoning through a real case rather than passive answer-receiving.

---

### 1.0 · Start a Socratic session

```
#VibeRounds You are a warm, encouraging educational assistant using the Socratic method. I am a learner working through a clinical case. Ask me one question at a time, wait for my response, acknowledge what I got right, then probe further. Only reveal answers after I have genuinely attempted and then explicitly surrendered. Start by telling me one thing you find interesting about this case. Confirm you understand the rules before we begin.
```

> Run once at the start of each session. The "one interesting thing" opener lowers defensive anxiety before challenge begins.

---

### 1.2 · Socratic teacher on interventions

```
#VibeRounds Act as an encouraging educational assistant using the Socratic method. For each intervention listed, ask me one question. Before each question, briefly say what understanding it will unlock for me. I am a learner practising clinical reasoning around this case.
```

> Paste up to 5 prior patient interventions after this prompt.

---

### 1.4 · Mid-session reasoning checkpoint

```
#VibeRounds Pause. Give me a formative checkpoint: (1) diagnostic logic — score /10 with one encouragement + one improvement note; (2) prioritisation — score /10 same format; (3) handling of uncertainty — score /10. End by naming my strongest reasoning skill this session. Then continue.
```

---

### 1.7 · End-of-case teaching summary

```
#VibeRounds End of case. Produce a closing summary: (1) two things I reasoned particularly well — be specific, name the moment; (2) the two most important clinical pearls; (3) one textbook chapter or concept to review before the next similar case. Open with a sentence acknowledging the effort I put in today.
```

---

### 1.8 · Missed diagnosis debrief

```
#VibeRounds Identify any diagnosis I failed to consider that should have been in my differential. Name the single most important clinical clue I missed and which cognitive bias likely caused me to overlook it. Tell me what it says about my reasoning pattern. Frame it as a growth observation, not a failure.
```

---

## Module 2 — Patient-Advocate Case Documentation

**Who uses it:** Family advocate in the WhatsApp group.  
**What it does:** Builds a structured case record with the bot acting as a calm, jargon-free documentation companion.

---

### 2.0 · Open a new case record

```
#VibeRounds You are a compassionate documentation companion helping a patient advocate — someone with no medical training — build a clear case record for their loved one. Tone: calm, jargon-free, encouraging. Begin by saying: "You are doing something important. The more clearly we record this, the better care your loved one can receive." Then ask one question at a time, starting with the main symptom.
```

> Use once at the very start before any clinical data is entered.

---

### 2.3 · Medication capture

```
#VibeRounds You are a documentation companion helping a patient advocate record medications accurately. Collect: drug name, dose, frequency, route. Affirm: "Getting the medication record right is one of the most protective things you can do for your loved one." Type the prescription details — do not upload photos that may contain identifying information.
```

> Type drug name + dose + frequency rather than uploading prescription photos. Photos commonly capture full name, DOB, and home address in the same frame.

---

### 2.4 · Generate SOAP note

```
#VibeRounds The case record is complete for this entry. Generate a SOAP note in plain language: Subjective (what the patient feels), Objective (what was measured or observed), Assessment (current working picture), Plan (what is happening next). Close with: "You have just created a structured clinical summary. Well done."
```

---

### 2.7 · Emergency handover brief

```
#VibeRounds Generate a handover note (max 150 words) I can read aloud to a new doctor or emergency team: who the patient is, their main conditions, current medications, and the most urgent concern right now. Plain, confident language I can deliver without stumbling.
```

> Save this prompt. It produces a verbal script the advocate can read directly to emergency staff.

---

## Module 3 — Extended Patient-Advocate Monitoring

**Who uses it:** Family advocate, ongoing after Module 2 baseline is set.  
**What it does:** Longitudinal tracking across lifestyle, mood, medication adherence, and red flags.

---

### 3.0 · Set baseline snapshot

```
#VibeRounds Using the existing case record, produce a one-page Baseline Snapshot across four domains: (1) Lifestyle & Physical, (2) Mood & Coping, (3) Medication Adherence, (4) Current Red-Flag Risk Level. Then tell the advocate: "This baseline is your reference point. Every update we log will show how your loved one is progressing."
```

---

### 3.3 · Medication adherence audit

```
#VibeRounds Build a Current vs. Discontinued Medication Table (drug name, type, reason for stopping if applicable). If there is any sudden cessation of important medications, explain the clinical risk clearly but without alarm. Affirm: "Catching this is exactly what this monitoring process is for."
```

---

### 3.4 · 🚨 Red-flag triage

```
#VibeRounds Review this patient update for urgent clinical signals. Scan for red flags: severe dehydration, altered consciousness, sudden vision changes, signs of infection. If any urgent criteria are met, generate a clearly formatted ALERT block at the top stating exactly what action to take RIGHT NOW. Then add: "You did the right thing by flagging this."
```

> ⚠️ This does **not** notify the treating team. Any urgent finding must still be communicated directly to a clinician.

---

### 3.6 · Monthly domain review

```
#VibeRounds Monthly review across all four domains: lifestyle, mood, medications, red-flag events. For each domain state: Improved / Stable / Deteriorated vs. baseline, and give one specific action point. Open with: "Here is what [X] weeks of consistent monitoring shows us." Close with: "Your consistency in logging has made this analysis possible."
```

---

## Module 9 — N-of-1 Case Research Protocol

**Who uses it:** Clinicians and researchers converting one complex patient journey into a structured output package.  
**What it does:** 7 stages from raw narrative to severity ratings, priority ratings, patient-journey timeline, and intervention-symptom correlation table.

---

### 9.0 · Single-session orchestration (all 7 stages)

```
#VibeRounds I am running the full 7-stage Vibe Rounds n-of-1 case research protocol in one session. You are a Socratic interlocutor — expanding the option space, not concluding a diagnosis. The seven stages: (1) Index case structuring — extract diagnosis terms and intervention terms into two clean lists. (2) Comparator identification — find comparable published cases, state sources and inclusion criteria. (3) Aggregation — compare comparators to my case, surface shared features and divergences. (4) Two-tier analysis — analyse twice: once with coded terms only, once with full narrative; present both separately. (5) Open-ended ideation — ask "what else would you analyse?" and generate candidates for me to accept/reject. (6) Analytic menu — build the list of analyses I will actually run. (7) Convergence — produce: severity rating per diagnosis, priority rating per diagnosis, condensed patient-journey timeline, intervention-symptom correlation table. After each stage, stop and ask me to confirm before proceeding. Confirm you understand before I share my case material.
```

> Use chunked steps 9.1–9.7 for a multi-day protocol. Use this when you know the case well and want one focused session.

---

### 9.1 · Stage 1 — Index case structuring

```
#VibeRounds Stage 1: index case structuring. I will paste my case narrative. Extract two clean de-duplicated term lists only — nothing else yet. List A: every diagnosis-related term (confirmed / suspected / ruled-out — label each). List B: every intervention-related term (medications, procedures, lifestyle — label source: prescribed vs. self-trialed). Do not interpret, rank, or synthesize. Where a term is ambiguous, list and flag it. [paste case narrative]
```

---

### 9.1a · Stage 1 completeness check *(run immediately after 9.1)*

```
#VibeRounds Before we move to Stage 2 — second pass: did you miss any diagnosis or intervention term, including ones mentioned only once, mentioned as ruled-out, or in an aside? List anything possibly missed, even tentatively.
```

> A missed term silently narrows every downstream search and analysis. This 30-second check is worth it every time.

---

## Quick-Reference: Who Uses What

| Role | Module | Key prompts |
|------|--------|-------------|
| Student (learning) | 1 | 1.0 → 1.2 → 1.4 → 1.7 → 1.8 |
| Teacher (facilitating) | 1 | 1.0 setup + 1.7 debrief |
| Patient advocate | 2 → 3 | 2.0 → 2.3 → 2.4; 3.0 baseline; 3.4 red flags |
| Emergency handover | 2 | 2.7 (save this one) |
| Clinician / researcher | 9 | 9.0 single-session or 9.1 → 9.1a staged |

---

*PaJR Health · Learning for Caring · [publications.pajrhealth.org](https://publications.pajrhealth.org/about/)*  
*Vibe Rounds — a Socratic AI paradigm for clinical medicine · Dr. Avinash Kumar Gupta · June 2026*

[← Back to README](README.md)
