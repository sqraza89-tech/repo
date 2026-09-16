---
date: 2026-09-16
tags: [xloop, ai-readiness-assessment, lead-capture, competitive-analysis]
---

# GenAI Readiness Assessment v2: competitive review and redesign

Workbook: `Notes/2026-09-16-genai-readiness-assessment-v2.xlsx` (9 tabs). It replaces
`Downloads/Gen_AI_Readiness_Assessment_FINAL.xlsx` (v1), which is left unchanged.

## Verdict on v1
- Well built (anchored answers, results shown before any form), but it doesn't stand out: its 8 domains
  line up almost one-for-one with Augmentry's 8 dimensions, and the tiers are a standard maturity ladder
- Scoring bug: every answer scores at least 1, so the lowest total is 25% and the "Exploring 0–25%" tier is
  practically unreachable. The bands also leave gaps
- Titled GenAI but asks classic-ML questions (historical data, bias, drift). No shadow AI, document
  readiness or output checking
- No context questions, so leads can't be routed to service pages or qualified

## v2 concept: "Ready to Build, Safe to Scale"
- Two scores (Build / Safe) instead of one. No competitor reviewed scores security separately
- 4 profiles: Laying the Groundwork · Guardrails First · Moving Faster Than Guardrails · Ready to Scale
- One blocker question per domain; a blocker changes the CTA to that domain's service page
- 18 scenario-based questions scored 0–3, plus "Not sure"; 12-question core version for A/B testing
- 4 context questions (use case, role, industry, timeline) route to live service pages and map to ICPs
- 3-question starter embeds on 7 service page types, with answers carried into the full assessment
- Results before any form; unlock form is 5 fields (10Pearls asks 7 before starting)

## Market takeaways
- Ungated results are now standard (Microsoft, Cisco, Kudo). They are not a differentiator
- Pakistani peers (Folio3, tkxel) sell the assessment only as consulting; no self-serve tool found
- UAE is crowded (Kudo, HEMOdata, Orange Club, Avanade); HEMOdata leads on GCC regulation
- Accenture already uses a 2×2 in its research, so xLoop's axes must stay different (Build vs Safe does)

## Next steps
- [ ] Practice leads confirm 4 entry offers: use-case prioritisation session, Data & Infrastructure Review, technical scoping call, production readiness review
- [ ] Confirm an ISO 42001 Lead Auditor can take "Talk to a Lead Auditor" calls
- [ ] Marketing and sales sign off on the proposed intent points and lead priority rules
- [ ] Hold the Legacy System Modernization link until that page is live
- [ ] Don't repoint sitewide "AI Readiness Score" CTAs until the tool ships (claim B4)
- [ ] After 50 completions: recalibrate thresholds, blocker rates, "Not sure" rates
