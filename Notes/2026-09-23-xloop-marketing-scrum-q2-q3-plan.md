---
date: 2026-09-23
tags: [xloop, marketing-plan, q2, q3, ceo, team, analytics, aeo]
---

# xLoop Marketing Plan Q2–Q3 (CEO scrum, Fri 25 Sep 2026)

Deck: `Notes/2026-09-23-xloop-marketing-plan-q2-q3.pptx` (10 slides, rendered and checked in PowerPoint).
Build script is in the session scratchpad. To edit, change the deck directly.

Related: [[2026-09-18-xloop-homepage-revamp-review]] · [[2026-09-16-genai-readiness-assessment-v2]] ·
[[2026-09-23-maf-wefi-case-studies-sky47-terminology]]

## Framing Sana asked for

- The CEO is a numbers person: keep it concise and less wordy
- Keep out of the deck: past hire denials, how the AI setup works (Claude and the Marketing Brain
  are on Sana's personal account), and Sana's rate or role terms
- AI covers content, research, SEO/AEO and reports. The focus is lead gen, SEO/AEO and being
  visible to AI engines, to build a lasting pipeline
- xLoop Qatar marketing is **not** Sana's. No Gulf push in the plan
- No paid lead-gen budget. Sales prefers direct outreach and the partner model. The only paid
  campaign was Mari on Meta: 1,500 applications against a 1,000 target

## Facts established on 2026-09-23

- **Team:** Sana, Omais (graphic designer and creative lead), Rafay (UI/UX, shared with client work)
- **Website:** built by 2 developers in production (not marketing). React, served as Next.js.
  Marketing provides content and design
- **Request rules:** content needed → Sana, 2 working days' notice. Content ready, design only →
  straight to Omais, with Sana guiding and reviewing
- **Videos:** a week each. HR brand video waiting on CEO approval. Life at xLoop next
- **Data & AI Readiness tool:** with Farrukh for review. It must ship with the homepage in
  **October**
- **Figma homepage (node 23799:49804) is still the v1 layout:** AI Security featured, 9
  industries, the "Serious enterprises" call to action, placeholder blog cards ("Why we invested
  in synthetic biology"). Cluster pages are not designed yet

## Analytics baseline (company Google account, pulled 2026-09-23)

- **Access:** the real data is on the **company Google account** (`authuser=1` in the same
  browser). Sana's personal account only sees empty properties: non-www GSC and GA4
  G-WLR7WPK9KS. Real GA4 property: account 370513128, property 507616570 ("xLoop")
- **GA4, last 28 days (Aug 26–Sep 22):** 1.4K users, 1.3K new, 1.9K sessions, 46s average
  engagement. Sources: direct 955, Google organic 685, Bing 66, LinkedIn 32, ChatGPT 18.
  Countries: Pakistan 509, **Singapore 488 (likely bots)**, US 145, Qatar 43
- **GA4, 90 days:** 3.1K users, 7.1K views, 4.3K sessions, **86 key events, all
  `form_submission`**. Client, careers and xCelerate forms aren't separated. **Tracking gap: about
  Jul 28 – Aug 23** (near-zero days), so 90-day totals understate traffic
- **Last 30 days:** AI Assistant channel 23 sessions. "Page Not Found" 123 views. Top pages:
  home 1.3K, contact 253, careers 190, about 122, NEPRA 110, xCelerate 108
- **Search Console (www), Jun 21 – Sep 20:** 1.9K clicks, 24.4K impressions, 7.8% CTR, average
  position 16.8. 124 indexed, 56 not indexed. Queries without "xloop": 86 clicks, 6.26K
  impressions, position 38.5. After removing brand variants (x loop, xcelerate, x vision...),
  **about 15 clicks in 3 months were truly non-brand → 99% brand**
- The non-www address uses a **307 temporary** redirect to www (should be 301)
- Sitemap: 131 URLs, including 82 insights/blog pages, 14 service pages and 9 industry pages
- `llms.txt` exists, but still lists smart cities, manufacturing and education → update to
  current services
- Contact page title still repeats the brand: "... | xLoop Digital"

## Plan in brief

- **Q2 (Oct–Dec):** fix analytics + lead tracker (week 1) · Release 1 by Oct 31 (homepage v2,
  Data & AI tool, AI Security tool, title fixes) · Release 2 by Nov 30 (4 cluster pages, Mining,
  case study pages) · AI-search work Oct–Nov · 1 article a week + LinkedIn 2–3 a week · sales kit ·
  both videos in October · tool launch campaign Nov–Dec · Q2 report in December
- **Q3 (Jan–Mar):** set targets from baseline · article series answering buyer questions for
  each service · partner co-marketing (Microsoft, Kore.ai, Emeritus) · 2 new case studies ·
  awards/PR · refresh the top 20 articles
- **Resource gap:** about 125 hours a month needed. Sana covers about 50. Options: A full-time
  Marketing Executive (recommended) · B part-time or intern · C none, with a list of what stops

## Next steps

- [x] Real analytics pulled from the company account and put into slides 2, 4 and 5
- [ ] Ask devs why GA4 went quiet around Jul 28 – Aug 23, add a bot filter (Singapore), and split form_submission by form
- [ ] Check the hours estimates on slide 9 against how Sana actually spends her time
- [ ] Chase Kayali/Huda content
- [ ] Update Figma homepage to v2 by Oct 2
