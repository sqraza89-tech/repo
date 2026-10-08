---
date: 2026-10-08
tags: [tekrevol, website, architecture, information-architecture, seo, aeo, geo, ai-agents]
---

# TekRevol site architecture proposal

Follows Sana's feedback on homepage copy v1 (`TekRevol-Homepage-Copy-v1.docx`): the copy needs a distinct architecture behind it, concise and specific like BluTech's, built for SEO, AEO, GEO and AI agents. Related: [[2026-10-08-homepage-structure-and-copy]], `05-reports/2026-10-08-homepage-competitor-seo-aeo-audit.md`.

Sources: competitor sitemaps and homepages fetched 2026-10-08; BluTech read in the browser (it renders with JavaScript). ScienceSoft's sitemap not pulled. No GA4/Search Console data yet.

## The idea in one line
**Organize the site around the buyer's starting point and a published build standard, not around a list of services.** Every competitor is organized by service, industry or technology. TekRevol's own research (523 sales calls) shows buyers arrive with a situation, not a service name. And they're asking AI engines about that situation.

## What competitors built (VERIFIED, 2026-10-08)

| Competitor | Pages in sitemap | How it's organized | What it does well | Gap |
|---|---|---|---|---|
| **BluTech** | small (SPA) | 3 services, each with 4 numbered capabilities, one line each, plus a stage flow (Sources > Ingestion > Processing > Storage > Analytics). Product suite, Impact, About, Connect | Very concise. Case study titles state the outcome | Built as a JavaScript app: the raw HTML is ~1 KB, so most AI crawlers and agents see an empty page. Thin text for search |
| **Cheesecake Labs** | 133 (half Portuguese) | 8 services, 6 industries, 6 partner pages, 1 assessment offer, 39 portfolio pages | Lean and specific. Packaged entry offer (AI readiness assessment). Dated proof ("AI in SOC 2 and HIPAA environments since 2024") | Little content for answer engines |
| **Azumo** | 683 | Deep folders: `/artificial-intelligence/` (112), `/software-staff-augmentation/` (128), `/us/` locations (77), `/industry/`, `/technologies/`, a handbook | Clear hierarchy in URLs. FAQ and Service schema. Assessment offer | Heavy and repetitive. Organized by what Azumo sells |
| **HatchWorks** | 658 | Content first: blog (181), "Talking AI" (85), news, podcast. Only ~7 service pages. Live AI demos, an AI course | Authority through media. Demos prove capability | Services thin and hard to navigate |
| **LeewayHertz** | 488 | Flat URLs, but a huge explainer layer: `ai-in-*` (111), `generative-ai-*` (56), `ai-for-*` (27), `ai-agent-*` (25), `what-is-*` glossary | The strongest play for AI engines: definitional pages that get cited | A content farm. Nothing about the buyer's situation |
| **TekRevol (today)** | 275 + 1,415 blog posts | **156 pages sit flat at the root** with no hierarchy (mobile, game, NFT, SEO, Magento, Unreal, cities…). 80 case studies untagged. ~30 location pages | Big blog. Some useful pages already exist: `/startup-prototype`, `/mvp-development`, `/healthcare-ai-automation`, `/app-cost-calculator` | No hubs, so no topical authority. Nothing in the URLs says AI-first. No answers layer, no pricing page, no facts page |

## Gaps TekRevol can own

1. **Situation-led entry.** Nobody structures the site by "where are you starting from?" These are exactly the questions people put to AI engines ("I built an app with AI and can't launch it", "how do I automate data entry in my business"). That's an open lane
2. **A published build standard.** Everyone claims quality. Nobody publishes what "production-ready" means to them as a versioned, citable spec. It turns "Enterprise in output" into proof. With a public changelog, it also makes "Better with every layer" literal: the standard visibly improves with every build
3. **Pricing a champion can forward.** The champion needs pricing they can explain upstairs. Most competitors hide it behind a call. A clear engagement-models page plus cost guides answers the most-asked buyer question in AI search ("how much does it cost to build…")
4. **A concise answers layer.** LeewayHertz shows that definitional pages get cited. TekRevol can do it tighter: 40 to 60 answer-first pages built from real buyer questions, each linking to a starting point. Quality over a content farm
5. **A machine-readable layer.** Only some competitors have llms.txt, and none have a single facts page. A clean facts page, llms.txt and llms-full.txt, server-rendered HTML and consistent schema make TekRevol the easiest company in the category for an AI agent to read, quote and contact. BluTech's JavaScript-only build is the cautionary tale

## The architecture

### Top level (navigation)
**Start here · Services · Work · Build Standard · Pricing · Answers** · Company · Talk to an engineer

### URL map

```
/                                   Homepage: the map of everything below
/start/                             Starting points (one page each, situation-first)
  /start/new-product                 "I have an idea and nothing built yet"
  /start/prototype-to-production     "I have a prototype that needs to be production-ready"
  /start/automate-operations         "My business runs on manual work"
  /start/modernize                   "Our current system is holding us back" (mid-market)
  /start/make-the-case               One-page summary for leadership (forwardable)

/services/                          4 pillars × 4 capabilities (BluTech-style concision)
  /services/ai-native-software-development/
      mobile-apps · web-apps · custom-software · prototype-to-production
  /services/applied-ai-automation/
      ai-agents · generative-ai · process-automation · private-llms (RevAI)
  /services/cloud-data-ai-infrastructure/
      cloud-migration · data-engineering · devops · managed-cloud
  /services/strategy-team-extension/
      ai-strategy · mvp-and-discovery · staff-augmentation · dedicated-teams
  /services/more/                    game, blockchain, digital marketing (kept, not featured)

/industries/                        Only where proof exists
  healthcare · home-based-care (when live) · energy · manufacturing · fintech · logistics

/work/                              Case studies, filterable by starting point, pillar, industry
/build-standard/                    The TekRevol Build Standard (versioned)
  /build-standard/changelog          What changed and why ("better with every layer")
/pricing/                           Engagement models + cost guides + calculator
  /pricing/cost-to-build-an-ai-app · /pricing/cost-to-build-a-mobile-app · …
/answers/                           Answer-first question pages + glossary
/company/                           about · facts · leadership · careers · press · reviews
/locations/                         Existing city/country pages, grouped
/hire/                              Hire-a-developer pages, grouped
/technologies/                      Existing tech pages, grouped
/insights/                          Blog (1,415 posts: prune and tag to pillars)

Machine layer: /llms.txt · /llms-full.txt · /company/facts (+ JSON-LD) · section sitemaps
```

### Page template rules (keeps it concise, like BluTech)
- **Pillar page:** H1 in plain words > one-line promise > 4 numbered capabilities (one line each) > one stage flow > 2 case studies > build-standard layers that apply > 5 FAQs > one CTA. Under 600 words of body copy
- **Capability page:** answer-first opening (what it is, who it's for, what you get) in under 60 words > what we deliver (4 bullets) > how it works (stage flow) > proof > pricing model > FAQs > CTA
- **Starting-point page:** the situation in the buyer's words > what usually goes wrong > what we do first > what you get in week one [CONFIRM] > relevant work > CTA matched to that buyer
- **Answers page:** the question as H1 > a 40 to 60 word direct answer > detail > "related starting point" link > Article + FAQPage schema, author, date updated
- **Case study:** title states the outcome (BluTech does this well) > Challenge, Built, Impact as fixed fields > tags for starting point, pillar, industry

## The signature: the TekRevol Build Standard

The one visual and idea nobody else has. It ties the brand motif (Strata layers, top layer orange) to something real a buyer can check.

**Five layers** (the 5-layer Strata standard from the brand guidelines):

| Layer | What the standard covers [CONFIRM with delivery] |
|---|---|
| 5. Experience | Accessibility, design system, usability testing before launch |
| 4. Product logic | Code review on every change, automated tests, documented architecture |
| 3. AI | Model evaluation, human review where it matters, private models when data can't leave |
| 2. Data | Data model, privacy by design, backups and retention |
| 1. Infrastructure | Cloud setup, monitoring, uptime targets, cost controls |
| **Running through every layer** | Security and compliance: encryption, least-privilege access, secure SDLC, HIPAA / SOC 2 / PCI DSS / GDPR experience |

- **On the site:** `/build-standard/` with version number and date ("v1.0, October 2026"), plus a changelog
- **On the homepage:** replaces the generic "How we work" bullets with the 5-layer Strata diagram, one line per layer, and a link "Read the Build Standard"
- **Why it works for search and AI engines:** a named, versioned, specific standard is easy to quote ("TekRevol's Build Standard requires…"). It gives answer engines a definition to cite and gives the champion a document to forward
- **Rule:** only publish what delivery actually does today. A standard that isn't followed is a liability

## What changes on the homepage
- Section 2 (starting points) becomes the gateway to `/start/`, adding a fifth card for modernization once the mid-market option is in the form
- Section 7 (How we work) becomes **"The TekRevol Build Standard"**: the 5-layer diagram, one line per layer, link to the full standard
- New thin band under the case studies: **Pricing you can explain** (engagement models in one line each, link to `/pricing/`)
- FAQ links each answer to its `/answers/` page
- Navigation switches to the new top level

## Migration: do no harm
Moving 156 ranking URLs is the biggest SEO risk in a rebrand.
- **Phase 1 (new, no moves):** build `/start/`, `/build-standard/`, `/pricing/`, `/answers/`, `/company/facts`, the four pillar hubs, llms.txt. Link the existing flat pages from the hubs
- **Phase 2 (after Search Console review):** move or merge pages with little traffic into the hierarchy with 301 redirects. Keep top-ranking URLs where they are unless the data says otherwise (NEEDS DATA)
- **Phase 3:** prune and tag the 1,415 blog posts; redirect thin duplicates to answers pages

## Next steps
- [ ] Sana: approve the direction (situation-led + Build Standard)
- [ ] Confirm the Build Standard content with TekRevol delivery (only what's done today)
- [ ] Confirm pricing models and whether ranges can be published
- [ ] Get Search Console access before any URL moves
- [ ] Then: homepage copy v2 (Word) with the Build Standard section and new nav
- [ ] Draft the first 20 answers pages from buyer questions (blog-writer)
