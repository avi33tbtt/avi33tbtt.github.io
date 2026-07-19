# VibeRounds Prompts Index — Minor Corrections List

**Source reviewed:** https://avi33tbtt.github.io/Prompts/Prompts.html
**Scope:** Index/table-level audit only (titles, filenames, links, categorization, repo-structure tree). Individual module pages were not opened for internal content review.

---

## Modules 21–57

1. **Module 29 — typo in title**
   "he Iatrogenic Domino Effect" → should be **"The Iatrogenic Domino Effect"** (missing "T"). Appears in both the module-name column and the "what it does" column.

2. **Module 45/46 numbering mismatch**
   Row numbered **46** ("Evidence-Based Medicine Insights") links to `Module-45-Evidence-Based-Medicine-Insights.html` — filename says 45, row says 46.

3. **Module 47 filename mismatch**
   Row **47** ("Shadow Module 47 — EBM Adversarial Counterpart") links to `Shadow-Module-45-EBM-Adversarial-Counterpart.html` — filename says 45, not 47.

4. **Category tag list is stale**
   The topic-tag summary block only accounts for modules up to ~44; modules 22–43 and 45–57 are not assigned to any category.

5. **Repository structure tree outdated**
   The `.md` file tree stops at roughly Module 23 and a few named files. Modules 24–57, Shadow Modules, and other later table entries are missing from the tree.

6. **Duplicate rows**
   - "Top Insight — Points 1 & 2" appears twice with identical link.
   - "Clinical Importance Ranking" and "Clinical Case Analysis" both point to the same file (`Clinical-Importance-Ranking.html`), despite being distinct titled entries.

7. **"NON TESTED YET" vs. Safety Note contradiction**
   Section header states the repository is "Non-tested," while the Safety & Compliance Note says "All modules tested on de-identified case logs." These contradict each other.

8. **"21 modules" claim is stale**
   Intro text says the repo "contains 21 modules," but the table lists content through Module 57 plus Shadow Modules and unnumbered HDM/CC modules.

9. **Inconsistent framework coverage range**
   Frameworks A–D are described as covering "Modules 0–28" in one place and "Modules 0–21" in another (Reading Order note). Needs a single consistent range.

---

## Modules 1–20

10. **Module 20 — title/filename mismatch**
    Table title "Naturalistic Decision Making" vs. filename `Module-20-Recognition-Primed-Decision-Model.html`. RPD is one specific model within naturalistic decision-making, not a synonym — pick one consistent name.

11. **Module 9 — inconsistent filename convention**
    `Module-09-Case-Research_Protocol.html` uses an underscore where every other filename uses hyphens throughout.

12. **Module 4 — questionable category placement**
    Tagged under "Medical Education, Literature & Basic Science" alongside journal-reading/basic-science modules, but its content (rounds rehearsal, polypharmacy screening, triage) fits a clinical-reasoning/workflow-prep category better.

13. **Module 14 — title truncation**
    Table title "Resource-Constrained Clinical Reasoning" drops "Global Health" relative to the filename `Module-14-Global-Health-Resource-Constrained-Clinical-Reasoning.html`.

*(Note: repository structure tree and category tags correctly account for Modules 1–20, aside from item 12 above.)*

---

## Frameworks (A–D), Reference Material, and Unnumbered ("–") Entries

14. **Duplicate — "Top Insight — Points 1 & 2"**
    (Same as item 6, listed here for completeness — identical title and link appear twice in the full table.)

15. **Duplicate/mislabeled — "Clinical Case Analysis"**
    Explicitly labeled "VibeRounds Clinical Case Analysis" in the contents column but links to `Clinical-Importance-Ranking.html`, the same file as the separate "Clinical Importance Ranking" row. Likely meant to link to a distinct file.

16. **"Patient Needs Assessment" — duplicate title, inconsistent file type**
    Appears as both Module 55 (`Module-55-Patient-Needs-Assessment.html`) and an unnumbered entry (`Module-PN-Patient-Needs-Assessment.md`). The second links to a raw `.md` file instead of `.html` (inconsistent with every other entry) and duplicates the module's title without explanation — likely an orphaned draft.

17. **Repository structure tree omits most unnumbered files**
    Missing from the tree despite appearing in the table: `VibeRounds-Research-Article.md`, `VibeRounds-GlobalHealthOptimizationMethodology-v1.0.md`, `VibeRounds_How_This_Can_Happen.md`, `VibeRounds_Guided_Discovery_Agent.md`, `Module-PN-Patient-Needs-Assessment.md`, `Socratic_Question_Generator.md`, `Module-HDM-Hypothetico-Deductive-Model.md`, `Module-CC-Clinical-Cognition-Deep-Dive.md`, both Shadow Modules, and Modules 21–57 individually beyond ~23.

18. **Orphaned filename in tree, absent from table**
    `VibeRounds-Methodology-and-Value.md` appears in the repository structure tree but has no corresponding row in the table above — either needs a table entry or should be removed from the tree.

19. **Frameworks A–D coverage range inconsistency**
    (Same underlying issue as item 9, relevant specifically to the Frameworks section) — "Modules 0–21" vs. "Modules 0–28" stated in two different places.

20. **"Combined Module Reference" scope likely stale**
    `VibeRounds-Combined-Modules-01-20.html` is explicitly scoped to Modules 1–20; with the module set now extending to 57, this reference may need updating or a renamed/expanded successor.

---

## Not Yet Reviewed

- Internal content, step numbering, and in-page links of the 21+ individual module pages (Modules 1–57, Shadow Modules, HDM, CC).
- Internal content of Frameworks A–D pages.
- Internal content of unnumbered reference/case-walkthrough pages.

These would require fetching each page individually for a full content-level (not just index-level) review.
