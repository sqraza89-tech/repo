---
name: marketing-analyst
description: Analyze a brand's marketing performance — website, SEO and AI-answer visibility (AEO), GA4, Search Console, LinkedIn and other social channels — against competitors and market research, then report findings and a prioritized action list aimed at visibility, engagement, leads and conversions. Works for xLoop, Tekrevol or any brand in Reference/brands/. Use this whenever the user asks to audit, review, analyze or report on the website, a landing page, traffic, rankings, LinkedIn page performance, competitors, "why aren't we getting leads", "what should we fix", a monthly/quarterly marketing report, or connects a browser tab/page and asks what to improve.
---

# Marketing analyst

Goal: tell the user **what's happening, why, and what to do next — ranked by impact on leads**,
not a dump of metrics. Every finding ends in an action with an owner, or it gets cut.

## Step 1 — Scope

1. Brand → read `Reference/brands/<brand>.md` (goals, ICPs, funnel, conversion points, competitors,
   analytics access). For xLoop also read `07_measurement/marketing_funnel.md` and
   `website_search_ai_discovery.md` in the Marketing Brain — but treat the brain's site findings as
   dated and re-check live before repeating any of them.
2. Read the last metrics log `Projects/marketing-analytics/<brand>-metrics-log.md` if it exists,
   so this run can show change over time.
3. Agree the scope in one line if the request is vague. Modules:

| Module | Covers | Reference |
|---|---|---|
| Website & conversion | key pages, CTAs, forms, speed, trust, message–ICP fit | `references/website.md` |
| Search & AEO | Search Console, rankings, CTR, technical SEO, AI-answer presence | `references/search-aeo.md` |
| Social | LinkedIn page + ambassadors (and other channels in the profile) | `references/social.md` |
| Competitors & market | 3–5 competitors' positioning, content, offers, gaps | `references/competitors.md` |
| Full report | all of the above, summarized | all |

## Step 2 — Collect

**Which browser:**
- Logged-in analytics (GA4, Search Console, LinkedIn page admin) → **Claude in Chrome**, since
  that's where the user's sessions are. For xLoop the company Google account is `authuser=1`.
  Load the `chrome-browser` skill first.
- Public pages (the brand's site, competitor sites, search results) → the built-in browser
  (`get_page_text`, `read_page`) or WebFetch/WebSearch. Load the `built-in-browser` skill first.

**Read-only.** Look, filter, change date ranges, export if the user agrees. Don't change settings,
properties, users, page info, or post anything.

Record every number with its **source + date range** (e.g. "GSC, 1 Jul–29 Sep 2026, web, all countries").
A number without a range is useless next month. If a source is unreachable, say so and continue
with what you have — don't estimate the missing number.

Bulk reading (e.g. 50 blog pages, 40 competitor posts) → use the `delegate` skill for the summaries,
after doing 3–5 yourself.

## Step 3 — Analyze

Map findings to the funnel so they add up to leads, not vanity:
**Visibility → relevant traffic → engagement → intent → lead → qualified lead.**
For each stage: what the data says, where it leaks, and why (evidence, not guesses).

Always look for:
- **Quick wins:** pages ranking 3–15 with low CTR; high-traffic pages with weak or missing CTAs; broken links/CTAs
- **Relevance:** is traffic from the ICP, or from careers/students/irrelevant queries? Segment it
- **Message fit:** does each key page say, in the ICP's words, what problem it solves and what to do next?
- **Proof gaps:** claims without evidence, missing case studies, missing credentials near CTAs
- **Competitor gaps:** topics, offers, formats or questions competitors cover that we don't — and the reverse (what only we can credibly say)
- **AI visibility:** does the brand appear when the ICP's questions are asked of answer engines?

Label every finding: `VERIFIED` (seen in data/page), `INFERRED` (reasoned from evidence), or
`NEEDS DATA`. This keeps opinions from reading like facts.

## Step 4 — Recommend

Each action gets: **what** · **why (finding)** · **funnel stage** · **impact (H/M/L)** · **effort (H/M/L)** ·
**owner** (use the brand's team — e.g. xLoop: Sana = strategy/content, Omais = design, Rafay = UI/UX,
production devs = site build) · **metric that will show it worked**.

Rank by impact ÷ effort. Top 5 go at the top of the report. Keep the rest in a backlog table.
Respect constraints in the profile (e.g. xLoop: no paid budget, no events in the calendar,
Sana on 2–3 h/day doing strategy not execution).

## Step 5 — Output

Save `Notes/YYYY-MM-DD-<brand>-marketing-analysis-<scope>.md` using `references/report-template.md`.
Then append the headline numbers to `Projects/marketing-analytics/<brand>-metrics-log.md`
(create it if missing) so the next run can compare.

**Audience matters.** The working report can be candid. If the user asks for a CEO / leadership
version (xLoop): 5–7 points, lead with what improved and what's been delivered, a few numbers,
plan and asks — keep weaknesses in internal notes. Offer to turn it into a deck with the pptx skill.

If the analysis produces blog or LinkedIn actions, phrase them so blog-writer / linkedin-posts can
pick them up directly (topic · ICP · stage · CTA).
