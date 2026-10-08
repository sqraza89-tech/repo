---
date: 2026-10-08
tags: [tekrevol, website, homepage, competitors, seo, aeo, audit]
---

# TekRevol homepage: competitor, SEO, AEO and agent-readiness audit

Feeds the homepage rewrite: [[2026-10-08-homepage-structure-and-copy]] (`03-website/`).
Sources: live tekrevol.com HTML, robots.txt and llms.txt, fetched 2026-10-08. Competitor homepages fetched the same day. Three sample buyer queries run via web search on 2026-10-08. GA4 and Search Console were **not** accessed (no access set up yet).

Labels: `VERIFIED` = seen on the page or in data · `INFERRED` = reasoned from evidence · `NEEDS DATA` = can't tell without access

## Top 5 actions (ranked by impact on leads ÷ effort)

| # | What | Why | Funnel stage | Impact | Effort | Owner | Metric |
|---|---|---|---|---|---|---|---|
| 1 | Fix the facts AI engines read: rewrite `llms.txt` and schema `foundingDate` to match the site | llms.txt says "founded 2018", "500+ apps", "96% client retention", "200+ engineers", "mobile app and software development company". The homepage says 800+, 98%, 10 years, AI-first. Engines will quote the wrong one | Visibility | H | L | TekRevol dev + Sana (copy) | Same numbers in llms.txt, schema, homepage, About, Clutch |
| 2 | Replace the hero and title tag with keyword-first AI-first positioning | Title is "Digital Transformation Company", which the messaging doc says not to claim. H1 is three abstract nouns | Visibility, engagement | H | L | Sana (copy), dev | Non-brand impressions/CTR for "AI software development company" in GSC |
| 3 | Add a "Where are you starting from?" router and the same field in the form | Four ICPs, one generic "Get a quote" path. The form says "website, SEO, or marketing", which invites the wrong leads | Intent, lead | H | M | Sana (copy), designer, dev, sales (routing) | Share of leads by starting point; lead-to-meeting rate |
| 4 | Ship a homepage FAQ (8 answer-first Q&As) with FAQPage schema, plus Service schema for the pillars | No FAQ or Service schema on the homepage. Azumo and HatchWorks have both | Visibility (AEO) | H | L | Sana, dev | Mentions/citations in the AEO prompt set (re-run monthly) |
| 5 | Build a forwardable one-page security and compliance summary (PDF + HTML) | The mid-market champion needs something to take upstairs. The compliance section is already strong but not portable | Lead, qualified lead | M | M | Sana, designer | Downloads; leads citing it |

## Backlog

| What | Why | Impact | Effort | Owner |
|---|---|---|---|---|
| Dedicated page for finishing stalled builds and AI prototypes | Search results for this need show only small specialists (VERIFIED). TekRevol has none | H | M | Sana + dev |
| Decide whether service pages may name AI-builder tools | Buyers search by tool name; brand rule bans naming tools. Needs Abeer's call (see "Decision needed") | H | L | Abeer |
| Tag the 76 case studies by industry and starting point | Can't route a buyer to matching proof (messaging doc) | M | M | Content team |
| Add "Mid-sized company" to the form's Business Type field | Mid-market can't be claimed in lead copy until it exists (messaging doc) | M | L | Dev |
| Track AI referrals (chatgpt.com, perplexity.ai, gemini, copilot) as a GA4 channel | Can't measure AEO without it | M | L | Dev / analyst |
| Transcript for the testimonial video | Video content is invisible to search and agents | L | L | Content |
| Remove the duplicated "Ideas Engineered Into Impact" H2 | Appears twice in the HTML (VERIFIED) | L | L | Dev |
| Confirm the client spelling: "Rekhempers" (homepage card) vs "Rehkempers" (messaging doc) | Inconsistent name on a named case study | L | L | Sana |
| Remove the unsourced "cuts operational costs by 40%" blog teaser from the homepage | Breaks the "no invented stats" rule; sits next to the real Kinder Morgan 40% | L | L | Content |

## Current homepage: findings

### Message and conversion (VERIFIED unless marked)
- **Title:** "Digital Transformation Company | TekRevol"; meta description repeats it
- **H1:** "Human Vision. Intelligent Technology. Exceptional Products." TekRevol's own messaging doc calls this off-voice
- **Subhead hedges the audience:** "From startups finding product-market fit to enterprises modernizing at scale"
- **Pillars on page:** six services, Blockchain still on the headline set; AI is first, which is the right start
- **RevAI** sits as a separate section; it's stronger as proof inside the AI pillar and the compliance section
- **Proof:** good numbers (800+, 98%, 10 years, 4.8 Clutch) and a full award row. FSK (a game) sits among case studies, off-pillar
- **Compliance section ("How We Build Under Regulation")** is the best copy on the page and close to the target voice. Keep it, tighten it
- **Form:** "Tell us about your project whether it's a website, SEO, or marketing". Wrong offer for an AI-first company, and a banned "whether X, Y, or Z" construction
- **CTAs:** "Let's Work Together", "Get A Quote", "Start a project": three labels, one generic path, nothing for the founder who wants a low-pressure chat or the champion who needs a document

### Technical SEO
- Canonical present, server-rendered HTML with real headings (VERIFIED): good for crawlers and agents
- Schema: Organization, WebSite, WebPage, BreadcrumbList, Person (VERIFIED). Missing: Service/OfferCatalog, FAQPage, ItemList for case studies
- Organization `foundingDate` = 2018 (VERIFIED) conflicts with "10 Years Industry Experience" on the same page

### AEO and agent readiness
- **robots.txt** does not block GPTBot, ClaudeBot, PerplexityBot or Google-Extended (VERIFIED). Good
- **llms.txt exists** (VERIFIED), ahead of LeewayHertz, ScienceSoft and HatchWorks. But its facts contradict the site (see action 1), it positions TekRevol as a mobile app shop, it names clients that aren't on the approved proof list (Subway, Westgate Resorts: **confirm approval before keeping**), and it lists location "offices" that may be virtual addresses (confirm)
- **Sample AI-answer check** (web search, 2026-10-08). TekRevol absent in all three:

| Prompt | TekRevol present | Who shows up | Gap |
|---|---|---|---|
| Company to finish my stalled AI-built app prototype and take it to production | N | ProdMake, Southleft, LowCode Agency, GetDevDone, Protofire | No page for this need |
| Best AI-first software development company USA for startups and SMBs 2026 | N | Apptunix, Azumo, HatchWorks, Devtorium, 75way (mostly listicles) | Not in third-party lists; listicles drive citations |
| HIPAA compliant software development company for home health agencies | N | Arkenea, Dev Technosys, Intellectsoft, Mindbowser, MindInventory, Space-O | Home-based care hub not live |

- ChatGPT and Perplexity were not run (NEEDS DATA). Re-run this set monthly with the full 8 to 12 prompts from the marketing-analyst checklist

## Competitors (homepages, 2026-10-08)

| Competitor | Title / H1 | Proof style | AEO signals |
|---|---|---|---|
| LeewayHertz | "AI Development Company" / "AI development company enabling innovation and rapid development" | Enterprise logos, press | No llms.txt; no FAQ schema |
| Azumo | "Top-Rated Software Development Company" / "AI NATIVE. NEARSHORE. The Software Development Company for AI" | "Building intelligent apps since 2016"; "We build faster with AI augmented developers" | llms.txt; FAQPage, Service, OfferCatalog schema; homepage FAQ |
| Cheesecake Labs | "From legacy systems to production AI" | "13+ years, 300+ products"; **"AI live in SOC 2 and HIPAA environments since 2024"** | llms.txt |
| HatchWorks AI | "Less AI Hype. More Results." / "Everyone is talking about AI. Few are delivering results." | Recognitions, client quotes, "Decide what to build. Build it right. Make it stick." | Service, OfferCatalog, CaseStudy schema |
| ScienceSoft | "AI Transformation and Software Development" | 37 years, 4,300+ projects, key facts block | AggregateRating, Product schema |

### Synthesis
- **Table stakes (don't lead with these):** "AI development company", years in business, project counts, Clutch badges, logo walls
- **White space:** nobody at TekRevol's scale says "we finish what was started". Only small specialist shops own the prototype-to-production need, and none of the five competitors speak to the champion who has to sell the deal internally
- **Our credible edge:** 800+ shipped products and 10 years behind a rescue promise (the specialists can't match that track record), plus a compliance-architecture story that's already more specific than most
- **Threats:** Cheesecake Labs dates its AI-in-regulated-environments proof ("since 2024"). TekRevol has no dated AI proof yet (open item: year AI work started, AI projects shipped, RevAI milestones). Azumo makes a speed claim TekRevol can't make until a measured engagement exists
- **Visual:** four of five are blue, HatchWorks teal. Orange #FF4A1C stays the differentiator (VERIFIED in the brand work)

## Decision needed (Abeer)
1. **Naming AI-builder tools.** Buyers type the tool name when they search for help finishing a prototype. Brand rule: never name a tool in public copy. Options: (a) keep the rule site-wide; (b) allow factual tool names on the one prototype-to-production service page and its FAQ only, never on the homepage. Recommendation: (b), since it's the exact query the ICP types
2. **Founding year.** 2018 (schema, llms.txt) or ~2016 (10 years)? Every engine needs one answer
3. **Pillar names (D01)** still open; the homepage copy uses them as proposed

## Next steps
- [ ] Confirm founding year, team size and whether Subway/Westgate are approved for public use
- [ ] Rewrite llms.txt (draft in the homepage doc) and fix schema `foundingDate`
- [ ] Abeer: decide on naming AI-builder tools on the service page
- [ ] Get GA4 + Search Console access to add traffic, CTR and lead data to this audit
- [ ] Re-run the AEO prompt set (full 8 to 12 prompts, incl. ChatGPT/Perplexity) one month after launch

## Sources
- https://www.tekrevol.com/ · /robots.txt · /llms.txt (fetched 2026-10-08)
- https://www.leewayhertz.com/ · https://www.azumo.com/ · https://www.cheesecakelabs.com/ · https://www.hatchworks.com/ · https://www.scnsoft.com/ (fetched 2026-10-08)
- AEO sample results: https://prodmake.com/ai-prototype-to-production · https://www.southleft.com/services/ai-prototype-to-production · https://www.lowcode.agency/services/ai-app-development/lovable-development · https://xchange.avixa.org/posts/top-10-ai-development-companies-in-usa-for-startups-and-enterprises-2026-updated-list · https://www.freshcodeit.com/blog/top-ai-software-development-companies · https://medcurity.com/best-hipaa-software-home-health/ · https://www.mindinventory.com/hipaa-compliant-software-development/
