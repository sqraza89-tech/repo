---
date: 2026-10-02
tags: [xloop, data-ai-readiness, lead-capture, competitive-analysis, release-1]
---

# Data & AI Readiness Assessment v3

Workbook: `Notes/2026-10-02-xloop-data-ai-readiness-assessment-v3.xlsx` (9 tabs).
Supersedes [[2026-09-16-genai-readiness-assessment-v2]] (GenAI only) and the 24-question v1.
For Release 1, shipping with homepage v2 by Fri 31 Oct 2026.

## Why it was redone
The positioning moved to data and AI together; the tool was still GenAI-only. A GenAI quiz leaves out
ICP 2 (Data Modernization Owner), the buyer xLoop has the most proof for.

## What changed
- **Three scores instead of two:** Data Foundation · AI Delivery · Safe to Scale
- **The 2×2 is now Data against AI.** Safe to Scale sits beside it as its own score plus the blocker rule
- **Data goes from 3 questions to 6,** across Data Access & Integration and Data Trust & Meaning
- **New questions:** "If two teams report the same number this month, do they match?" and "Could an
  assistant on your documents respect who is allowed to see what?"
- **Initiative question now includes data outcomes** (trusted numbers, forecasting, getting off legacy)
- **Only two next steps, both live:** the 30-minute Data & AI Readiness Review and the AI Security
  Assessment. v2 named four offers that needed defining first — a risk against Oct 31
- **Dropped as scored questions:** output quality checks, drift/cost monitoring, red-team testing (kept in
  the report and the paid review) to hold at 18 questions
- **Ties break toward data** — set by row order in Service Routing
- US spelling applied throughout (v2 used British forms)

## Still true from the earlier reviews
- v1's scoring floor bug (lowest possible score 25%, "Exploring" tier unreachable) stays fixed by the 0–3 scale
- Ungated results are now standard (Microsoft, Cisco, Kudo, Eunoia) — keep it, don't call it the differentiator
- Market gap confirmed: AI tools treat data as one pillar of six; data tools treat AI as one dimension.
  Closest competitors are HEMOdata and Eunoia (data-only, regional) and DataCamp (sells training)

## Verification
All 103 formulas checked with an independent formula engine, including Short mode, all-0, all-3 and the
boundary cases. Layout not visually checked — no Excel on this machine.

## Next steps
- [ ] Send v3 to Farrukh — he is reviewing the earlier design
- [ ] Update homepage v2 Section III Version B copy: it promises "two scores"
- [ ] Update the W2 (Mon 12 Oct) LinkedIn announcement to the three scores
- [ ] Confirm whether the homepage shows all three scores or the 2×2 with Safe to Scale underneath
- [ ] Decide weights: Data/AI/Safe are equal today; data could carry more
- [ ] Keep the Legacy System Modernization and Mining links off until Release 2 (Nov 30)
- [ ] Give the assessment its own GA4 events — today every form is one `form_submission` key event
- [ ] Sign off intent points and lead priority rules (feeds the week-1 lead tracker)
- [ ] Recalibrate thresholds after 50 completions

Related: [[2026-09-18-xloop-homepage-revamp-review]] ·
[[2026-09-23-xloop-marketing-scrum-q2-q3-plan]] · [[2026-09-28-xloop-linkedin-thought-leadership-plan-q2]]
