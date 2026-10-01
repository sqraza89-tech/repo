---
name: linkedin-posts
description: Write LinkedIn posts — company page and employee/ambassador posts — for xLoop, Tekrevol or any brand with a profile in Reference/brands/, following that brand's content calendar, ICPs, goals and voice. Use this whenever the user asks for LinkedIn content, "this week's posts", "posts from the calendar", a carousel or video script for LinkedIn, an occasion/greeting post, a CEO or ambassador post, a blog teaser, or asks to fix/rewrite a specific post. Also use when they name a date or week and a brand ("xLoop posts for week 3", "Tekrevol Tuesday post").
---

# LinkedIn posts

Each brand gets its own voice, ICPs and plan. The biggest risk when working across two brands in
one session is **bleed**: an xLoop claim, phrase or client showing up in a Tekrevol post (or the
reverse). So load the brand fresh for every batch, and never carry proof or phrasing across.

## Step 1 — Load the brand and the plan

1. Confirm the brand. If the request mixes brands, do them as separate batches.
2. Read `Reference/brands/<brand>.md`, then the claims, proof and voice files it points to.
3. If the brand profile has `TODO` for voice, ICPs, claims or the calendar, ask before writing.
4. Open the calendar file named in the profile and pull the rows for the requested dates or week
   (date, account/ambassador, topic, ICP, format, CTA, linked blog). Excel: read it with Node
   (`xlsx` package in the scratchpad) or ask the user to paste the rows if reading fails.
5. If no calendar row exists for the request, say so and propose one (topic · ICP · format · CTA)
   before writing.

## Step 2 — Pick the format per post

Details and skeletons in `references/formats.md`.

| Post type | Use when | Shape |
|---|---|---|
| Service / offering | selling a service line | hook naming the buyer → one-line business case → 3 offerings, one-line why each → credentials beside the CTA |
| Thought leadership (ambassador) | building a person's authority | first-person opinion or lesson from real work → 3–5 short points → question to the reader |
| Insight / blog teaser | driving to a blog | the sharpest finding from the post → why it matters to the ICP → link in first comment or post |
| Proof / delivery | showing results | anonymised situation → what was done → outcome (approved proof only) |
| Culture / employer brand | hiring, team moments | people first, one concrete detail, light tone |
| Occasion / greeting | holidays, tech days | short, warm, on-brand visual line; no sales CTA |

For carousels and videos, write the slide/scene text plus the caption. One idea per slide.
Video ~25–30s, 5–6 scenes.

## Step 3 — Write

- **First 2 lines decide everything** (that's what shows before "…see more"). Name the buyer or the
  problem in their words. No throat-clearing ("In today's fast-paced world…").
- Short lines, white space, ~120–220 words for text posts. Ambassador posts can run longer if the story earns it.
- Write for the ICP on that row, using phrases from the brand's buyer research.
- **Ambassador voice:** first person, sounds like that person's role (a CEO talks direction and
  decisions; an architect talks trade-offs and what broke; an auditor talks what they see in audits).
  Use the exact title from the profile.
- One CTA per post, matched to intent (follow, read the blog, comment, DM, visit service page).
  Only link to live pages.
- 3–5 hashtags max, specific over generic.
- No engagement bait, no fear-selling, no invented stats, no superlatives unless the brand voice allows them.

## Step 4 — Check

- Claims and proof: approved list only; no never-name clients (check the profile's list)
- Spelling standard of the brand
- Names and titles exactly as in the profile
- No cross-brand bleed: scan for the other brand's names, products, clients and taglines
- Dates written with weekday + full year (e.g. Mon 6 Oct 2026)

## Step 5 — Output

- **Batch (a week or more):** the brand profile's "Where deliverables go" folder (default `Notes/YYYY-MM-DD-<brand>-linkedin-<week-or-range>.md`) with, per post:
  date · account · ICP · format · post text · visual brief for the designer (1–3 lines) · first comment · hashtags · CTA link.
- **One post or a fix:** reply in chat only. Don't regenerate the calendar spreadsheet; the user pastes the changes in.
- Only build or edit an `.xlsx` when the user asks for it.

When a post teases a blog, check the blog-writer output for the same week so the link and the angle match.
