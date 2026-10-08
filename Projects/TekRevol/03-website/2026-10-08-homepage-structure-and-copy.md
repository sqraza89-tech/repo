---
date: 2026-10-08
tags: [tekrevol, website, homepage, copy, seo, aeo, rebrand]
---

# TekRevol homepage: structure and copy (v1 draft)

Built on: the AI-first Messaging and Positioning doc, the Buyer Personas, brand guidelines v7 (Cyan/Mono) and the audit in `05-reports/2026-10-08-homepage-competitor-seo-aeo-audit.md`.

**Status:** draft for Sana's review. Pillar names are proposed (D01 open). Items marked **[CONFIRM]** must be checked before launch.

## Feedback log
- 2026-10-08, Sana: rejected the "we finish what others started" pitch as not premium or elegant. Options offered: (1) "engineered to enterprise standard" + "Young in approach. Enterprise in output." (recommended), (2) "built for production, not the demo", (3) "architectural truth, not a pitch", (4) "better with every layer", (5) "products your business can depend on". Section 4 H2 to become "A working demo is a beginning. We build what comes next." Sana liked 4 and 5, asked to see 1; hero mockups of 1/4/5 shown. Suggested hybrid: eyebrow "BETTER WITH EVERY LAYER" + H1 "AI-first software development for products your business can depend on" + option 4 lead. Then she asked for 1+5: Combo A (recommended) = eyebrow "YOUNG IN APPROACH. ENTERPRISE IN OUTPUT." + H1 "AI-first software development for products your business can depend on" + lead "We build AI-native apps and custom software to enterprise standard, with security and compliance designed in from the first sprint." Combo B = H1 "Engineered to the standard your business depends on" (keep for closing CTA / About / decks). Awaiting her pick; then replace the rescue phrasing in hero, meta, FAQ, footer sentence and llms.txt

## The strategy in five lines
- **Category first, differentiator second.** "AI-first software development company" carries the search demand; "we finish what others started" is the edge nobody at TekRevol's scale owns
- **Let buyers self-sort.** Four starting points map to the four ICPs and feed the form, so sales knows who they're talking to before the call
- **Proof sits next to every ask.** Numbers, named case studies and compliance near each CTA
- **Every fact appears once, the same way, everywhere:** page, schema, llms.txt, Clutch. That's what AI engines quote
- **The champion gets something to carry.** A one-page summary they can forward, so deals don't stall upstairs

## Section map

| # | Section | Job | Main ICP | Theme / pattern (v7) |
|---|---|---|---|---|
| 0 | Navigation | One primary action | All | White bar, charcoal logo, orange "Talk to an engineer" |
| 1 | Hero | Say what TekRevol is and why it's different | All | Light, Layer planes pattern, one orange focal layer |
| 2 | Starting points (router) | Self-segment into four paths | All four | Light cards, cyan on hover, orange on the active path |
| 3 | Proof band | Trust in three seconds | Founder, approver | Charcoal band, white award marks at 60% |
| 4 | Finish what was started | The rescue story and process | Founder, SMB | Light, Iteration lines, 4-step flow with one orange path |
| 5 | What we build (4 pillars) | Service navigation + internal links | All | Light, 4 cards, featured pillar with notch |
| 6 | Work (case studies) | Results first | Champion, SMB | Light, challenge > solution > impact cards |
| 7 | How we work | Answer the "burned before" worry | Founder, SMB | Charcoal, Experiment field pattern |
| 8 | Built to your industry's standard | Compliance for the approver | Champion, approver | Charcoal, forwardable summary CTA |
| 9 | Industries | Route to vertical proof | Champion | Light, 4 to 6 tiles |
| 10 | FAQ | Answer engines + objections | All | Light, accordion (all answers in HTML) |
| 11 | Insights | Freshness + topical authority | Founder, champion | Light, 3 cards |
| 12 | Closing CTA + form | Convert, with routing | All | Charcoal, Strata, one button |
| 13 | Footer | Facts, NAP, links | All | Charcoal |

Removed from the homepage: the standalone RevAI band (folded into section 5 and 8), the leadership trio (moves to About), Blockchain from the pillars, FSK from the case studies, the podcast block (moves into Insights).

---

## 0. Navigation
- Links: **Services** · **Work** · **Industries** · **Insights** · **About**
- Primary button: **Talk to an engineer** [CONFIRM: sales can put an engineer, or a technical lead, on first calls. If not, use "Book a call"]
- Mega-menu: the four pillars as column heads; off-pillar services (game, blockchain, digital marketing) under "More services"

## 1. Hero

**Eyebrow (mono):** AI-FIRST SOFTWARE DEVELOPMENT

**H1 (recommended):**
> AI-first software development for products that have to ship

**Lead:**
> We build AI-native apps and custom software from a blank page. We also take stalled builds and AI prototypes the rest of the way to production. One team from kickoff to launch, with compliance designed in from the first sprint.

**Primary button:** Talk to an engineer
**Secondary button:** See shipped work
**Microcopy under buttons:** 30 minutes, no pitch deck. You'll leave with a straight answer on what it takes.

**H1 alternates for testing**
- B (rescue-led): "AI-first software development that finishes what others started"
- C (brand line): "Young in approach. Enterprise in output." Use as the eyebrow-to-H2 brand line further down, not as the H1, since it carries no search keyword

**Visual:** Layer planes stacking upward, top layer orange (Strata). The page's one big motion moment; respect `prefers-reduced-motion`.

## 2. Starting points (router)

**Eyebrow:** START HERE
**H2:** Where are you starting from?

| Card | Title | One line | Link label → destination |
|---|---|---|---|
| Founder, blank page | I have an idea and nothing built yet | We'll help you decide what to build first, then build it with you. | Plan my first build → `/contact?start=idea` |
| Founder, rescue | I have a prototype or a build that stalled | An AI prototype got you 80% of the way? We read what exists, keep what works and finish the rest. | Get a code review → `/contact?start=rescue` (later: the prototype-to-production page) |
| SMB | My business runs on manual work | Your business is already running. Your software should keep up. We automate the busywork your team repeats every day. | Automate a process → `/contact?start=automate` |
| Champion | I need to make the case to my leadership | Get a one-page summary of scope, approach, security and pricing structure, built to forward. | Get the one-pager → `/contact?start=summary` |

**Why:** each card passes `start=` into the form's "Starting point" field. Sales sees the ICP before the first call; GA4 sees which path converts.

## 3. Proof band

**Numbers (mono data style):**
- **800+** apps and digital products delivered
- **98%** client satisfaction
- **4.8/5** on Clutch
- **10 years** building software [CONFIRM: matches the founding year in schema and llms.txt, currently 2018]

**Award row:** Clutch Top 1000 · Inc. 5000 · Right Firms · Top Developers · Expertise · Horizon Award Gold and Silver · Software World

## 4. Finish what was started

**Eyebrow:** PROTOTYPE TO PRODUCTION
**H2:** The last team, or the last AI tool, got you this far. We take it the rest of the way.

**Lead:**
> Most of our clients don't arrive with a blank page. They arrive with a build that stalled, a freelancer who went quiet, or a prototype that works in a demo and breaks with real users. We've seen that situation hundreds of times. Here's how we handle it.

**Four steps (one orange path through them):**
1. **Audit.** We read the code, the data model and the infrastructure, then tell you in plain language what's solid and what isn't.
2. **Stabilize.** We fix what's breaking now: security gaps, failing integrations, data that isn't where it should be.
3. **Rebuild what needs it.** Only the parts that won't carry real users. Not the whole thing by default.
4. **Scale.** Production infrastructure, monitoring and a release rhythm your users can count on.

**CTA:** Get a code review → `/contact?start=rescue` [CONFIRM: offer exists and what it includes. Don't call it "free" unless it is]

## 5. What we build

**Eyebrow:** SERVICES
**H2:** Four ways we build with AI
**Lead:** Every engagement sits in one of these. Most use two.

| Pillar (proposed, D01) | One line | Links (internal SEO) |
|---|---|---|
| **AI-Native Software Development** (featured, notch) | Mobile, web and custom software designed around AI from the first sprint, plus finishing builds that stalled. | Mobile app development · Web app development · Custom software · AI prototype to production |
| **Applied AI and Intelligent Automation** | AI agents and automation that take repetitive work off your team, running on private models when your data can't leave. Delivered through RevAI, our AI division. | AI agent development · Generative AI · Process automation · RevAI |
| **Cloud, Data and AI Infrastructure** | The cloud, data pipelines and DevOps that AI products need to run reliably at scale. | Cloud migration · Data engineering · DevOps |
| **Strategy and Team Extension** | Product strategy when you're deciding what to build, and senior engineers when you need more hands on your own team. | AI strategy consulting · Staff augmentation · Dedicated teams |

**Link under the cards:** See all services

## 6. Work

**Eyebrow:** SHIPPED WORK
**H2:** Results first. Then how we got there.

| Client | Challenge | What we built | Impact |
|---|---|---|---|
| **Kinder Morgan** | Oil and gas teams buried in complex datasets | A data platform that turns those datasets into instant insights | 40% lift in operational efficiency |
| **Rehkempers** [CONFIRM spelling: homepage shows "Rekhempers"] | Truss pricing, freight and tariffs done by hand for 50 years | A dual-sided quoting platform across 4 manufacturing plants | A 50-year manual process replaced |
| **Pure Plank** | Helping people build a daily fitness habit | An app with interactive plank tutorials and challenges | 20,000+ users guided |
| **Rise Up Kings** | Turning personal-development goals into progress | A goal-tracking platform | 1,000+ users past 100+ growth goals |

**Filter chips:** Energy · Manufacturing · Health and fitness · Personal development (expand as the 76 case studies get tagged)
**Link:** See all work

## 7. How we work

**Eyebrow:** YOUNG IN APPROACH. ENTERPRISE IN OUTPUT.
**H2:** You've been burned before. Here's what's different.

- **One point of contact, kickoff to launch.** The person you meet in week one is still your contact at launch. [CONFIRM operationally true]
- **A fixed communication rhythm.** You know when you'll hear from us, and what you'll see when you do.
- **Pricing you can explain.** A clear structure you can compare and defend, not a number that grows after signing.
- **Better with every layer.** We moved to AI-native delivery early. Every build teaches us something, and the next one starts from there.

**CTA:** Talk to an engineer

## 8. Built to your industry's standard

**Eyebrow:** SECURITY AND COMPLIANCE
**H2:** Built to the standard your industry already requires
**Lead:** Compliance is an architecture decision we make in the first sprint, not a checklist before launch.

| Card | Line |
|---|---|
| **Privacy by design** · GDPR · CCPA | Data collection is minimized and consent is explicit. Access, deletion and portability are built into the schema. |
| **Secure delivery** · Encryption · Least-privilege access · Secure SDLC | Data is encrypted in transit and at rest. Security checks run through the whole development lifecycle. |
| **AI that keeps your data in** · Private LLMs · PII redaction | RevAI deploys private models, strips personal data before it reaches a model, and keeps audit logs. |
| **Regulated-industry experience** · HIPAA · SOC 2 · PCI DSS | We've shipped products in regulated sectors. Your requirements won't be new to us. |
| **Regional rules** · US · EU · Middle East | We plan for data residency up front, so expanding to a new region doesn't mean re-engineering. |

**CTA:** Download the security and compliance summary (one page, built to forward)
Wording note: say "experience with" HIPAA/SOC 2/PCI DSS, never "certified", unless a certificate exists. [CONFIRM]

## 9. Industries

**Eyebrow:** INDUSTRIES
**H2:** Software for how your industry actually works

Show only industries with proof behind them: Healthcare · Energy · Manufacturing · Fintech · Logistics · eCommerce, each one line plus a link to its page.

**When `/home-based-care` goes live**, make it the first, wider tile:
> **Home-based care.** Software for home health, home care and behavioral health operators. Built for HIPAA from the first sprint.
(No product names until the Rivana/CareOS naming is settled.)

## 10. FAQ (answer engines read this first)

**H2:** Questions buyers ask us

**What does TekRevol do?**
TekRevol is an AI-first software development company. We build AI-native mobile apps, web platforms and custom software, and we take stalled builds and AI prototypes to production. We've delivered 800+ apps and digital products over 10 years, with a 4.8/5 rating on Clutch.

**What does "AI-first software development" mean?**
It means AI is part of the product design from the first sprint, not a feature added later. We decide early where AI earns its place, such as automating a workflow or answering customer questions, and build the data and infrastructure it needs.

**Can you take over an app or AI prototype another team started?**
Yes. It's one of the most common ways clients start with us. We audit the existing code, keep what works, fix what's breaking and rebuild only what won't hold up with real users.

**How do you handle HIPAA, SOC 2 and other compliance requirements?**
We design for compliance in the first sprint. That covers encryption, least-privilege access, a secure development lifecycle and, for AI features, private models with personal data redacted before it reaches the model. We have direct experience with HIPAA, SOC 2, PCI DSS, GDPR and CCPA.

**How does pricing work?**
[CONFIRM engagement models] We scope each project before quoting and give you a clear structure you can compare and explain internally. Common models are fixed-scope projects, monthly dedicated teams and staff augmentation.

**How long does a project take?**
It depends on scope and where you're starting from. You get a timeline in the first proposal, before you sign. [Don't add a number until there's measured data]

**Who owns the code?**
[CONFIRM] You do. Code, designs and documentation transfer to you as the project is paid.

**Where is TekRevol based?**
TekRevol is headquartered in Houston, Texas, with offices in Dubai, London and Doha [CONFIRM list matches the footer and llms.txt]. We build for clients in the US, Europe and the Middle East.

## 11. Insights
**H2:** What we're learning
Three latest posts, AI-first topics only. Drop teasers with unsourced stats (the current "cuts operational costs by 40%" teaser).
**Link:** All insights

## 12. Closing CTA and form

**H2 (display):** Tell us where you're starting. We'll tell you what it takes.
**Button:** Talk to an engineer

**Form fields (short):**
1. Name
2. Work email
3. **Starting point** (pre-filled from the router): I have an idea · I have a prototype or stalled build · I want to automate a process · I need a summary for my leadership · Something else
4. **Business type:** Startup or founder · Small business · Mid-sized company · Enterprise (adding "Mid-sized company" unlocks mid-market copy)
5. What are you trying to solve? (one box)
6. Budget range (optional)

**Confirmation message:** Thanks. An engineer will read this and reply within one business day with next steps. [CONFIRM response time]
**Delete:** "Tell us about your project whether it's a website, SEO, or marketing"

## 13. Footer
- One-line description (same sentence as schema and llms.txt): **"TekRevol is an AI-first software development company that builds AI-native software and takes stalled builds to production."**
- Offices with full addresses (identical to llms.txt and Google Business Profiles)
- Pillar links, Work, Industries, Insights, About, Careers, Privacy, Cookie settings
- Clutch, LinkedIn, and other profile links (also in schema `sameAs`)

---

## SEO spec

| Element | Copy |
|---|---|
| Title (≤60) | AI-First Software Development Company \| TekRevol |
| Meta description (≤155) | TekRevol builds AI-native apps and custom software, and takes stalled builds and AI prototypes to production. 800+ products shipped. 4.8/5 on Clutch. |
| H1 | AI-first software development for products that have to ship |
| Canonical | https://www.tekrevol.com/ |
| OG title / description | Same as title / meta |

- One H1. H2 per section as written above; eyebrows are styled text, not headings
- Primary keyword: AI software development company. Secondary: AI app development company, custom software development company, AI prototype to production, HIPAA compliant software development
- Every pillar card links to its pillar page; every case study links to its page; FAQ answers link to the relevant service page

## AEO and AI-agent readiness spec

**Structured data (JSON-LD on the homepage)**
- `Organization`: name, url, logo, description (the footer sentence), `foundingDate` [CONFIRM], address list, `sameAs` (Clutch, LinkedIn), contactPoint
- `WebSite` with SearchAction (keep)
- `OfferCatalog` with four `Service` items (the pillars), each with a URL
- `FAQPage` matching section 10 word for word
- `ItemList` of the four case studies with URLs
- Don't add self-served `AggregateRating` for the Organization: Google ignores it and it can look manipulative

**Agent-friendly build**
- All text in HTML, nothing in images or video. Accordion answers present in the DOM when collapsed
- Form fields with real `<label>`s and plain names, so an AI agent can fill and submit for a user
- Stable, readable URLs for every path: `/contact?start=rescue` etc.
- A plain-text contact route alongside the form (email and phone)
- Transcript under the testimonial video

**llms.txt: replace the top block with this** [CONFIRM every bracket]
```
# TekRevol

> TekRevol is an AI-first software development company headquartered in Houston, Texas. It builds AI-native mobile apps, web platforms and custom software, and takes stalled builds and AI prototypes to production. TekRevol has delivered 800+ apps and digital products over 10 years [founded CONFIRM], with 98% client satisfaction and a 4.8/5 rating on Clutch.

## Services
- AI-Native Software Development: mobile, web and custom software built around AI, plus finishing stalled builds. [URL]
- Applied AI and Intelligent Automation: AI agents, generative AI and automation, delivered through RevAI. [URL]
- Cloud, Data and AI Infrastructure: cloud migration, data engineering and DevOps. [URL]
- Strategy and Team Extension: product and AI strategy, staff augmentation. [URL]

## Proof
- Kinder Morgan: data platform, 40% operational efficiency lift. [URL]
- Rehkempers: quoting platform across 4 manufacturing plants, replacing a 50-year manual process. [URL]
- Pure Plank: fitness app, 20,000+ users. [URL]
- Rise Up Kings: personal-development platform, 1,000+ users. [URL]

## Compliance
Experience with HIPAA, SOC 2, PCI DSS, GDPR and CCPA. Private LLMs with PII redaction via RevAI.
```
Remove from the current file until confirmed: "founded in 2018", "500+ apps", "96% client retention", "200+ engineers", Subway and Westgate Resorts.

## Pipeline: what to wire up with the homepage
- Router `start=` value → hidden field → CRM lead source, so each ICP gets its own follow-up
- GA4 events: router card clicks, CTA clicks, form start, form submit, one-pager download
- GA4 channel for AI referrals (chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com)
- Champion path: the one-pager download asks only for work email, then sales follows up with the full proposal template

## Next steps
- [ ] Sana: review structure and pick the H1 (A or B)
- [ ] Resolve every [CONFIRM]: founding year, engineer on first calls, one point of contact, code review offer, engagement models, code ownership, office list, response time, client spelling
- [ ] Abeer: close D01 (pillar names) and decide on naming AI-builder tools on the prototype page
- [ ] Designer: homepage layout in v7 (light-first, Layer planes hero, one orange path in section 4)
- [ ] Write the security and compliance one-pager
- [ ] Dev: schema, llms.txt rewrite, form fields, GA4 events
- [ ] Next page: AI prototype to production service page (blog-writer can draft the supporting cluster)
