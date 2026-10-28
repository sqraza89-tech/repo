---
date: 2026-10-27
tags: [xloop, data-ai-readiness, lead-scoring, review]
---

# Review: two new Data & AI questionnaires vs the v3 tool

Files reviewed (Downloads, 27 Oct 2026):
- `Data_AI_Gap_Questionnaire_20Q  (2).xlsx` — 20 questions, 7 dimensions, one sheet, **no scoring**
- `Xloop_AI_Readiness_Diagnostic_24Q.xlsx` — 24 questions, 7 dimensions, A–D scale + Not sure, live scoring, gap map
- Compared against our v3: `Notes/Data & AI Readiness Tool.xlsx` ([[2026-10-02-xloop-data-ai-readiness-assessment-v3]])

## Verdict
- **Don't replace v3 with either.** v3 already merges what both do well, and it is the only one with
  lead scoring, routing to live pages and approved proof
- The Oct 19 blog ([[2026-10-19-xloop-blog-is-your-data-ready-for-ai-checklist]]) already promises
  "18 questions, three scores". Swapping tools means re-editing published copy
- If one of the two must be picked: **the 24Q** is the better base (scoreable, consistent scale). The 20Q
  is easier to read but can't be scored as built
- Take 6 specific items from them into v3 (below)

## 20Q Gap Questionnaire
**Good**
- Plain business language; a CEO can answer it
- Strong sales-signal questions: Q1 business goal, Q4 use-case maturity, Q7 what happened to past
  projects, Q14 **budget**, Q17 data problems in the last 12 months, Q20 report turnaround

**Problems**
- No scoring, no results, no lead scoring. It is a question list, not a tool
- Five answer types mixed (single, multi-select, 1–5 rating, Yes/No); can't be scored on one scale
- Answer order flips: Q11 and Q9 put the best answer first, most others put it last
- Multi-select tool/storage counts (Q12, Q18) reward owning tools, not maturity
- Q2 and Q10 are 1–5 self-ratings: vague, everyone picks 3
- Q15 is Yes/No; no middle ground
- **No AI security or shadow AI at all**, so nothing routes to the AI Security Assessment
- No role, industry, size or timeline; leads can't be qualified or routed
- "Not sure" missing on most questions

## 24Q Readiness Diagnostic
**Good**
- Same A–D scale on every question, plus "Not sure"
- "Not sure" excluded from the score and counted separately (formulas check out)
- Gap & Action Map gives a next step per question: good raw material for the PDF report
- Covers pilot acceptance, output checks and AI cost: three things v3 dropped
- Sensible implementation notes (results before contact details, flag risk-critical gaps separately)

**Problems**
- Written for engineers: "least privilege", "lineage", "rollback", "observability", "RACI". A website
  visitor won't follow it
- 8–12 minutes (their own estimate); v3 is about 6
- 8+ questions assume AI is already live (Q06, Q07, Q14, Q22–Q24). An early-stage company answers A on
  all of them: a deflating result that tells sales nothing new
- Data is only 4 of 24 questions, though xLoop leads with data (ICP 2)
- Called "AI Readiness"; positioning and the blog say "Data & AI Readiness"
- Gap map unfinished: all 24 gap descriptions are the same placeholder text, and no formula outputs them
- Next steps are generic consulting tasks, not xLoop offers or pages
- Risk-critical flags are described in the notes but not built
- No context questions and **no lead scoring**
- British spelling: "Cataloguing"

## What to take into v3
- [ ] **Budget signal (20Q Q14):** use v3's A1.2 answer = 3 ("budget set aside") as the "named budget"
      signal, +3 intent. No new question needed
- [ ] **Recent pain (20Q Q17):** "In the last 12 months, has bad data caused delays, errors or lost
      deals?" Add as unscored context; it gives sales an opener
- [ ] **Output checks (24Q Q17):** restore as a Safe to Scale question, or as a blocker inside S2.3
- [ ] **Per-question fixes (24Q Gap & Action Map):** reuse the "recommended next step" lines as fix text
      in the PDF report, rewritten in plain language
- [ ] **Not sure handling (24Q):** decide whether "Not sure" scores 0 (v3 today) or is left out of the
      score (24Q). Left out is fairer, but someone can then score high by answering "Not sure" to
      every weak area. Suggested: leave out of the score, keep the "low visibility" line at 3+
- [ ] **Credit the engineers:** pilot acceptance criteria (24Q Q06) as helper text under A2.2

## Lead scoring (v3 "Lead Capture & Scoring" tab): fixes needed
Neither new file has lead scoring, so v3's is the only one to check.

1. **Intent score does nothing for this tool.** Completing the assessment = 4 points, which alone clears
   the MQL bar. Every completer becomes an MQL. Fix: count only "unlocked report" (we know who they
   are), and require one more signal (timeline, budget or booking) for MQL
2. **Gate 2 (named problem) not applied.** X1 = "Not decided yet" means no named problem; per the
   qualification framework it can't be an MQL. Cap those at B
3. **Size bands don't match ICP 5.** ICP 5 floor is 50–2,000 but the band is 1,000–4,999, so a
   1,500-person company can't be judged. Change ICP 5 to 50–4,999 or split the band
4. **No floor for some roles.** "Business unit or operations leader" and "Other" have no ICP, so rule A
   can't be evaluated for them. Give them a default floor (suggest 500+)
5. **Geography ignored.** Country is asked but no rule uses it. Gate 1 needs Priority/Emerging markets
6. **Rules overlap.** Size 1–49 with a 3-month timeline matches both B and C. State the order:
   Exclude → C → A → B
7. **Points exceed the 0–10 scale.** 4 + 3 + 4 + 2 = 13. Cap at 10
8. **Budget unused.** Add A1.2 = 3 as an A-priority path (see above)
9. Still open from Oct 2: sales sign-off on intent points and priority rules; GA4 events for the tool

## Next steps
- [ ] Sana: confirm v3 stays the website tool (blog already promises 18 questions, three scores)
- [ ] Reply to Irfan and the engineers: thanks, and which of their items go into v3
- [x] Apply the 6 question changes and 9 lead-scoring fixes: done in v4 ([[2026-10-28-xloop-data-ai-readiness-assessment-v4]])
- [ ] Get sales sign-off on the updated lead priority rules
