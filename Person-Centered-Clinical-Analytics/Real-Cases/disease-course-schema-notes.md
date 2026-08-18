# Disease Course Schema — Design Notes

*Working notes from a design discussion on generalizing the Nested Analysis View
(Person-Centered Clinical Analytics) checkpoint model to arbitrary diseases,
recurrent events, temporality, and comorbidities.*

---

## 1. Starting point

The [Nested Analysis View](https://avi33tbtt.github.io/Person-Centered-Clinical-Analytics/nested-analysis-view.html)
overlays T1D and T2D patient trajectories on one alluvial network using six shared
checkpoints:

**Diagnosis → Presentation → Initial plan → Escalation → Advanced/recurrent → Disposition**

Patients landing on the same checkpoint value are routed through a shared node
instead of parallel lines, so hub size becomes a literal patient count. The page
already self-flags a real limitation: T1D's Escalation/Advanced columns are densely
populated (irregular acute events recur over years) while T2D's read mostly "—",
and this is called out as a corpus/event-density artifact rather than a rendering
bug (see Step 7, Issue 2).

## 2. Problem 1 — Escalation is not a single event

The current schema hard-codes one `escalation` slot and one `advanced/recurrent`
slot per patient. Clinically, escalation is repeatable (steroid taper failure,
DKA episode, hypoglycemia readmission), so collapsing it into one node loses the
recurrence pattern itself — which is often the clinically interesting part of a
T1D-type trajectory.

**Options considered:**

- **A — Repeatable checkpoint type.** Change `escalation: value` to
  `escalations: [value, value, ...]`; render as a self-referential/looping edge
  with a count badge. More faithful, touches Step 2 (graph builder) and Step 3
  (dashboard).
- **B — Fixed slots + derived count.** Keep the alluvial map's fixed shape, add
  an `escalation_count` field surfaced only in the case-by-case table/tooltip.
  Cheaper, doesn't change the map's topology.

## 3. Problem 2 — Temporality is missing

The six checkpoints are ordinal (this happens before that), not temporal — no way
to tell if Escalation→Advanced was 3 days or 3 years apart, or whether two patients
sharing a node actually had very different tempos. This compounds Problem 1: once
escalation can recur, *when* and *how far apart* becomes the clinically meaningful
part, not just *that* it happened again.

Consequences:

- The T1D/T2D density asymmetry already flagged on the page may partly reflect
  different observation windows, not just different disease shape, once time
  enters the picture.
- A shared node currently implies "same value," not "same time" — two patients
  hitting "Escalation: DKA" merge into one node whether it happened at week 2 or
  year 5 post-diagnosis.

**Options considered**, cheapest to most invasive:

1. Add a `days_since_diagnosis` / date field per checkpoint, surfaced in the
   table and tooltip only — no topology change.
2. Encode elapsed time as edge length/style in the alluvial map (extends the
   existing "hub size = patient count" encoding to a second variable).
3. A separate **temporal swimlane view** (patients as rows, checkpoints
   positioned by actual elapsed time) as a companion to the map, reading the
   same `cohort_graph.json` differently — consistent with the existing pattern
   of Steps 3–7 as separate lenses on one underlying graph. Proposed as
   "Step 8."

## 4. Generalizing to "all diseases"

Proposed core model: fixed narrative spine + a repeatable, timestamped event
array in the middle.

```json
{
  "patient_id": "P001",
  "condition": "T1D",
  "diagnosis": { "value": "...", "date": "2019-03-01" },
  "presentation": { "value": "...", "date": "2019-03-01" },
  "initial_plan": { "value": "...", "date": "2019-03-05" },
  "events": [
    { "type": "escalation",         "value": "DKA admission",       "date": "2020-06-12" },
    { "type": "advanced_recurrent", "value": "recurrent DKA",       "date": "2021-01-04" },
    { "type": "escalation",         "value": "insulin pump switch", "date": "2022-09-30" }
  ],
  "disposition": { "value": "...", "date": "2023-11-01" }
}
```

Key design decisions:

1. `events` is a **flat, ordered, typed array**, not two separate arrays — allows
   any number of events in any order, rather than forcing an artificial
   escalation/advanced alternation.
2. **Every node carries a date**, including Diagnosis and Disposition, so elapsed
   time can be computed for the first and last legs too, not just the middle.
3. Two render modes over the same JSON: the existing ordinal alluvial view
   ("what path did people take") and a new temporal swimlane ("how fast").
4. **Condition-level applicability flags** (e.g. `has_recurrent_events: false`)
   so the schema doesn't silently misrepresent conditions it doesn't fit — a
   renderer can skip an empty events lane instead of implying "no escalation
   happened" when actually "escalation isn't a concept for this disease."

### Diseases that stress-test a linear 6-step spine

- **Screening-only / asymptomatic conditions** (e.g. subclinical hypothyroidism)
  — no real Presentation or Escalation.
- **One-shot acute/surgical conditions** (e.g. appendicitis) — Diagnosis→
  Disposition in 48 hours, nothing recurs.
- **Relapsing-remitting conditions without a monotonic endpoint** (e.g. MS) —
  "Advanced" implies steady worsening, but relapse→remission→relapse isn't
  strictly advancing each cycle.

## 5. Does this already exist?

- **"Disease trajectory analysis"** is an established academic field studying
  temporal clinical event sequences — not a fixed schema.
- **OMOP CDM** (OHDSI's Observational Medical Outcomes Partnership Common Data
  Model) is the closest existing standard: a common format for transforming
  disparate EHR databases into standardized vocabularies. It's a raw
  interoperability schema (conditions/drug eras/procedures as generic events),
  not a clinician-readable narrative model. Notably, most trajectory tools built
  on OMOP consider only the *first* occurrence of any event per patient,
  treating same-event repeats as a known open limitation — the same gap
  identified above in Section 2.
- **Recurrent-event models exist per-disease** (e.g. a recurrent-event RNN for
  heart failure onset prediction; repeated-event landmarking models for
  colorectal liver metastases recurrence) but these are statistical/ML models
  for one disease, not a general-purpose narrative schema.
- **Conclusion:** the specific combination — fixed narrative checkpoints +
  repeatable timestamped events + clinician-legible visualization, generalized
  across arbitrary diseases — doesn't have an existing name. Fair to coin a
  name, citing OMOP CDM and disease trajectory analysis as lineage/prior art
  rather than presenting it as inventing the field from nothing.

### Candidate names

| Direction | Name |
|---|---|
| Structural (checkpoint + event) | Clinical Trajectory Schema (CTS), Checkpoint-Event Model |
| Temporal / generalizability | Temporal Illness Trajectory Model (TITM) |
| Clinically familiar terminology | **Disease Course Schema** / Clinical Course Model — leans on "disease course," a term already used in clinical texts |
| Care-pathway terminology | Longitudinal Care Pathway Schema |
| Brandable | Universal Disease Trajectory Schema (UDTS), Nosograph, CarePath Schema |

**Recommendation:** *Disease Course Schema* — signals familiarity to a clinical
audience ("the natural course of X disease") without inventing new vocabulary,
and pairs naturally with describing the repeatable escalation/advanced pair as
"recurring course events."

## 6. Extending to comorbidities

A patient with multiple conditions (e.g. T2D + CKD + HTN) isn't multiple
patients — one patient has multiple concurrent course-lines whose events can
causally influence each other (e.g. a T2D escalation precipitating a CKD event).

**Schema change:**

```json
{
  "patient_id": "P001",
  "conditions": [
    {
      "condition": "T2D",
      "diagnosis": {}, "presentation": {}, "initial_plan": {},
      "events": [],
      "disposition": {}
    },
    {
      "condition": "CKD_stage3",
      "diagnosis": {}
    }
  ],
  "cross_condition_links": [
    {
      "from": { "condition": "T2D", "event_id": "e2" },
      "to":   { "condition": "CKD_stage3", "event_id": "e1" },
      "relation": "precipitated"
    }
  ]
}
```

`cross_condition_links` is the genuinely new piece — without it, comorbidities
are just parallel trajectories sharing a patient ID, not interacting conditions,
which is usually the clinically interesting part.

**Effect on the map:**

1. **Alluvial view** — condition becomes a lane/color dimension *within* one
   highlighted patient's path (braided lines) rather than only across the
   cohort.
2. **Temporal swimlane** — natural fit: multiple rows (or a stacked row) per
   patient on one time axis, with cross-links drawn as connecting arrows
   between lanes.
3. **Hub/convergence semantics** — needs an explicit decision: does a shared
   node mean "same value, same condition, across patients" (current) or could
   it also mean "same patient, multiple conditions converging on one event"
   (e.g. one admission that's simultaneously a T2D and CKD escalation)? These
   are different concepts and conflating them would blur the current clean
   semantics.

**Risk flagged:** comorbidity graphs get combinatorially messy fast. 18 patients
with 1 condition each stays readable; 18 patients with 2–4 conditions and
cross-links is closer to a multi-layer network than a simple alluvial diagram.
Suggested to prototype with 2 conditions per patient max before generalizing
further, and to build the cross-condition rendering on the swimlane first
(more tractable than the alluvial view).

## 7. Open threads / next steps

- [ ] Decide Option A vs B for repeatable escalation events (Section 2)
- [ ] Decide how deep temporal encoding goes: tooltip-only vs. edge geometry vs.
      full swimlane companion view (Section 3)
- [ ] Draft condition-applicability flag set, stress-tested against a
      relapsing-remitting disease and a one-shot surgical disease (Section 4)
- [ ] Decide final naming — "Disease Course Schema" pending write-up
- [ ] Prototype cross-condition rendering on the swimlane view before touching
      the alluvial map (Section 6)
