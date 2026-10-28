---
date: 2026-10-28
tags: [xloop, data-ai-readiness, lead-scoring, lead-capture, release-1]
---

# Data & AI Readiness Assessment v4

Workbook: `Notes/2026-10-28-xloop-data-ai-readiness-assessment-v4.xlsx` (11 tabs).
Updates v3 (`Notes/Data & AI Readiness Tool.xlsx`, left unchanged) after the review in
[[2026-10-27-xloop-ai-questionnaires-review]]. Full changelog is the **Changes v3 to v4** tab.

## What stayed the same
- 18 scored questions, three scores (Data Foundation · AI Delivery · Safe to Scale), the 2×2, routing.
  The Oct 19 blog and homepage copy still hold

## Question changes (from the team 20Q and 24Q)
- **S2.3 rewritten** to cover checks on AI answers before release plus what happens when one is wrong.
  Now a blocker question
- **Fix per question** (Questions v4, column O) for the PDF report, adapted from the 24Q gap map
- **A2.2 helper text**: count a project as live only if it passed agreed checks
- **New unscored P1**: has bad data caused delays, errors or lost deals in the last 12 months?
- **"Not sure" left out of the score** (was scored 0); still flags a blocker on a blocker question
- **Provisional result** at 6+ "Not sure" answers (Scoring Model B12)

## Lead-scoring fixes
- Completion points count at report unlock; MQL needs one more signal (T1 ≤ 6 months, A1.2 = 3, or
  review booked)
- X1 = "Not decided yet" caps the lead at B (Gate 2)
- A1.2 = 3 (budget set aside) = +3 intent and an A-priority path
- ICP 5 floor 50–4,999; Business unit leader and Other get 500+
- Country must be a fit market for A (13 markets from geographic_strategy.md; Qatar kept as fit)
- Rules run in order Exclude → C → A → B; intent capped at 10
- New working calculator (Lead Capture & Scoring, section G)

## Verification
- 76 formulas, 0 errors, recalculated in Excel
- Example still routes the same: Data 39%, AI 72%, Safe 39%, overall 50%, "AI Ahead of the Data",
  4 blockers, Data Trust & Meaning → 30-minute review
- 7 scoring scenarios and 16 lead scenarios tested (all 0, all 3, 6 Not sure, Short mode, learner,
  competitor, personal email, 1–49, India, ICP 5 at 5,000+, budget-only, cap, Starting Out)
- Testing caught one design break: with two Governance blockers, Governance outranked data. Priority
  index now subtracts 1 for *any* blocker in a domain, so the data tie-break holds
- Layout checked from PDF renders of the three changed tabs

## Next steps
- [ ] Sana: confirm "Not sure" is left out of the score (Read Me decision 9)
- [ ] Sana: confirm ICP 5 floor 50–4,999, then update `03_icp/icp_master.md` (decision 8)
- [ ] Sales sign-off on intent points, MQL rule and lead priority (test with the calculator)
- [ ] Send v4 to Farrukh, and to Irfan and the engineers with what was taken from their versions
- [ ] Developers: S2.3 wording, P1 question, "Not sure" scoring and provisional line change the build
- [ ] GA4 events for the tool (still open from v3)

Related: [[2026-10-02-xloop-data-ai-readiness-assessment-v3]] ·
[[2026-10-19-xloop-blog-is-your-data-ready-for-ai-checklist]]
