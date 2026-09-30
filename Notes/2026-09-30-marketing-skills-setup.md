---
date: 2026-09-30
tags: [skills, xloop, tekrevol, marketing, room-parent, setup]
---

# Marketing + room-parent skills setup

## Decisions
- Blog new + refresh = **one skill, two modes** (`blog-writer`; refresh rules in `references/refresh-mode.md`) — shared bar, avoids rule drift
- Built as skills (not subagents) so work stays conversational and reviewable
- Brand-agnostic via `Reference/brands/<brand>.md`; skills ask instead of guessing when a field is TODO
- Analyst: Claude in Chrome for logged-in analytics (read-only), built-in browser for public/competitor pages

## Skills (`.claude/skills/`)
- `blog-writer` — brief → draft → QA → `Notes/YYYY-MM-DD-<brand>-blog-<slug>.md`
- `linkedin-posts` — per-brand, from the calendar; single fixes in chat
- `marketing-analyst` — funnel-mapped report + ranked actions; metrics log in `Projects/marketing-analytics/`
- `room-parent` — WhatsApp drafts; context + tracker in `Projects/room-parent/`

## Brand profiles
- [[xloop]] — routes to the Marketing Brain
- [[tekrevol]] — all TODO
- [[_template]]

## Next steps
- [ ] Share Tekrevol guidelines, ICPs, calendar, approved claims → fill `Reference/brands/tekrevol.md`
- [ ] Fill `Projects/room-parent/context.md` (school, class, greeting, sign-off, language)
- [ ] Give 3–5 xLoop competitors for the brand profile
- [ ] Pilot: next Monday blog, this week's LinkedIn posts (calendar v4), one blog refresh, next school screenshots
