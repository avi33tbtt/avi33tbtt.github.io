[← Back to Start Here](Start-Here.md)

# Module 0 — Cold-Start Orientation

**Objective:** Give a brand-new user — or a brand-new LLM session — a single entry point that establishes the #VibeRounds framing, identifies which module actually fits the need, and hands off cleanly before any clinical content is exchanged.

**Indication:** The very first message of a new Vibe Rounds session, or whenever onboarding someone unfamiliar with the framework. Not required if you already know which module and step you need — go straight there.

---

## Lifecycle

Phase 1 · Initiation → Phase 2 · Execution → Phase 3 · Closure / Review

---

## Phase 1 · Initiation — Identify who is using Vibe Rounds and why

### Step 0.0: Cold-Start Role & Need Identification

**Prompt:**
```text
#VibeRounds I am new to Vibe Rounds. Before we do anything else, ask me two
things: (1) my role right now — medical student/junior doctor learner,
patient advocate, peer clinician preparing for rounds, or registry/data
analyst; (2) what I am trying to accomplish in this session, in one
sentence. Do not assume which Vibe Rounds module I need until I have
answered both.
```

> [!NOTE]
> **Application Note:** Run once per new user or new device/account. Prevents the AI from defaulting to a Socratic persona when the person is actually a patient advocate, or vice versa.

---

## Phase 2 · Execution — Route to the right module

### Step 0.1: Module Routing

**Prompt:**
```text
#VibeRounds Based on my role and goal, tell me which Vibe Rounds module (0
through 8) best fits this session, and tell me whether I should start at
that module's Step X.0 or a later step if I already have a baseline case
record or registry data. State the module number and name explicitly
before we continue.
```

---

## Phase 3 · Closure / Review — Confirm and hand off

### Step 0.2: Orientation Confirmation & Handoff

**Prompt:**
```text
#VibeRounds Before we move into the module you just recommended, confirm
with me: (1) the exact module and step we are starting at, (2) whether any
patient data I am about to share needs de-identification first per the
Safety & Compliance Note, (3) one sentence on what this module will help me
accomplish today. Once I confirm, begin at that step.
```

> [!NOTE]
> **Application Note:** This closes the loop before clinical content begins — the de-identification check here is deliberately redundant with the Safety & Compliance Note and the Data Security Notes in Modules 2–3, since this is the one point in the document where a brand-new user is least likely to have read them yet.

---

## Related Frameworks

None applied directly in Module 0 — this module exists purely to route users to the module where the relevant frameworks live.

---

## Navigation

**Next:** [Module 1 — Socratic Clinical Reasoning →](Module-01-Socratic-Clinical-Reasoning.md)

[← Back to Start Here](Start-Here.md)
