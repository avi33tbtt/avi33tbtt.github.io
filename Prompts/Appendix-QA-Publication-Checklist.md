# Appendix — Quality Assurance & Publication Checklist

*Vibe Rounds Prompt Modules*

- Modules 1–4 contain no patient data and are safe to publish or reuse as-is in any LLM.
- Modules 5–7 were tested against real, de-identified patient logs. Before reuse, confirm every `[paste...]` placeholder is filled with de-identified data only, and that no real patient identifiers remain.
- Known limitations of Socratic-mode prompts: they can suggest rare diagnoses before common ones, sessions can stall after 6–7 turns, and the AI can generate plausible-sounding but incorrect clinical information. These are documented known limitations and should be disclosed wherever these prompts are deployed.
- All personas in this document use non-licensed educational roles. Do not introduce "MBBS intern," "qualified doctor," "attending," "consultant," or any other licensed clinical persona into these prompts — this applies everywhere a `#VibeRounds` persona is surfaced, not only inside this document (website persona cards, demo videos, onboarding copy included).
