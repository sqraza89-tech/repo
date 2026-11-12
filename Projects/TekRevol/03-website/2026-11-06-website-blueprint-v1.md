---
date: 2026-11-06
tags: [tekrevol, website, sitemap, information-architecture, messaging, conversion, smb, mid-market]
---

# TekRevol website blueprint v1 (SMB + mid-market)

Step 1 of [[2026-11-06-website-rebuild-roadmap]]. Updates [[2026-10-08-site-architecture-proposal]] for the new audience: SMB and mid-market companies, not founders. Software development first, AI as a capability, premium tone ([[2026-10-28-homepage-and-custom-software-page-premium-review]]).

**Update 2026-11-12:** AI services move to a separate sister brand. TekRevol = software development company; the "AI and automation" pillar is dropped and AI becomes a feature under custom software, so the site has **four pillars**. US first for geography. See [[2026-11-12-homepage-copy-v3]].

Status: **draft for Sana's approval.** Items marked [CONFIRM] need TekRevol.

## 1. Who the site is for

| | SMB owner-operator | Mid-market champion | Mid-market approver |
|---|---|---|---|
| Company size (proposed) [CONFIRM with sales] | 20 to 199 employees, about $5M to $50M revenue | 200 to 2,000 employees, about $50M to $1B revenue | same company as the champion |
| Typical role | Owner, CEO, COO, GM | Ops, IT, digital or product director | CFO, CEO, CIO, CISO, procurement |
| What they're dealing with | Spreadsheets and off-the-shelf tools that no longer fit; quotes that balloon | A system holding the business back; needs to win internal approval | Vendor risk, security, compliance, cost control |
| What they need from the site | Clear price ranges, timeline, one accountable team | Something to forward: business case, cost, proof, process | Security and compliance facts, IP ownership, contracts, references |
| Main pages | Capability pages, Pricing, Work | Service pillars, How we work, Champion pack | Security and compliance, Company facts |
| Primary action | Get a project estimate | Business case kit, then project estimate | Read security page (no direct form) |

**Founders:** no longer targeted. `/mvp-development` and `/startup-prototype` stay live for search traffic, linked from "Product development" but not in the main navigation or homepage story.

## 2. Messaging framework (draft)

**Positioning:** TekRevol builds custom software, apps and AI automation for growing and mid-sized companies whose operations have outgrown their tools. Young in approach. Enterprise in output.

**Core promise:** Software built around how your business runs, held to an enterprise standard, and owned by you.

| Pillar | What we say | Proof [CONFIRM numbers] |
|---|---|---|
| 1. Built around your operations | We model your workflows first, then build the system around them | Rehkemper (quoting across 4 plants), Al Hussaini (40+ outlets synced) |
| 2. Enterprise standard | Every release passes the Ship Line: five layers checked, with a named owner | Build Standard, HIPAA / PCI DSS experience, Kinder Morgan |
| 3. Clear cost, one accountable team | Price ranges in public, a fixed quote after scoping, one point of contact | Pricing page, sprint reviews every two weeks |
| 4. AI where it pays off | AI added where it saves time or money, never as decoration | Libido Health (AI coach, 80% fewer no-shows) |
| 5. A partner after launch | Support and evolution plans; you own the code and IP | Support plans [CONFIRM], long-running clients |

**Use:** growing companies, mid-sized companies, operations, systems, integrations, ownership, compliance, fixed quote, your team, after launch.
**Avoid:** founder, startup, "your idea", "launch your app", small, cheap, affordable, outsourcing, offshore, rescue, "free consultation", "honest", "from startups to enterprises".
**SEO note:** "SMB" and "small business" may appear in meta titles and one body line where the keyword matters, never in H1s.

## 3. Navigation

**Services · Industries · Work · How we work · Pricing · Company** · [Get an estimate]

Footer adds: Insights, Security and compliance, Careers, Facts, Contact, legacy hubs (Locations, Hire developers, Technologies).

## 4. Sitemap

```
/                                     Homepage
/services/                            Services hub
  /services/custom-software-development/        PILLAR (copy rebuilt 10-30)
      business-systems · internal-tools · client-portals · erp-crm
  /services/web-and-mobile-apps/                PILLAR
      web-app-development · mobile-app-development · saas-platforms · product-development (MVP lives here)
  /services/modernization-and-integration/      PILLAR (mid-market lead)
      legacy-modernization · system-integration · cloud-migration · data-engineering
  /services/ai-and-automation/                  PILLAR
      ai-integration · process-automation · ai-agents · private-llms
  /services/teams-and-support/                  PILLAR
      dedicated-teams · staff-augmentation · support-and-maintenance
/industries/
  healthcare (+ /industries/healthcare/ai-operations = current landing page)
  manufacturing · energy · retail-and-restaurants
  (phase 2: education · real-estate · finance · logistics)
/work/                                Case studies, filter by service and industry
  /work/<case>                         Challenge · Built · Impact
/how-we-work/                         Strata Method + Ship Line + engagement steps
  /how-we-work/build-standard          Versioned standard (v1.0) + changelog
/pricing/                             Engagement models + price ranges + what moves the price
/security/                            Security and compliance (approver page)
/company/                             About · leadership · careers · facts · contact
/get-an-estimate/                      Project estimate form (+ /thank-you/)
/systems-review/                       Systems review form (+ /thank-you/)
/business-case-kit/                    Business case kit (+ /thank-you/)
/insights/                            Blog (existing)

Legacy, kept live, not in nav: 156 root pages, /locations, /hire-*, /technologies
Machine layer: /llms.txt · /company/facts (+ JSON-LD) · section sitemaps
```

**Why five pillars, not four:** modernization and team extension are what mid-market companies buy most often; giving them their own pillars puts them one click from the homepage. "AI-first" pillar names from the old plan are retired with the software-first positioning.

## 5. Launch set (~31 pages, 12 templates)

| Priority | Page | Template | Copy status |
|---|---|---|---|
| P1 | Homepage | Home | v2 exists, needs audience update |
| P1 | Custom software development | Capability (pilot) | Rebuilt 10-30, needs confirmations |
| P1 | 5 service pillars | Pillar (pilot) | New |
| P1 | Get an estimate + systems review + thank-you pages | Form | New |
| P1 | Pricing | Pricing | Ranges from custom page, needs sales |
| P1 | Security and compliance | Trust | New |
| P2 | 7 more capability pages: web apps, mobile apps, legacy modernization, system integration, process automation, dedicated teams, support and maintenance | Capability | New, reuse existing page content |
| P2 | Healthcare industry + AI operations | Industry | From landing page v2 |
| P2 | Manufacturing, energy, retail | Industry | New |
| P2 | Work index + 6 case studies | Work index, Case study | Rewrite existing |
| P3 | How we work + Build Standard | Method | Strata v2 doc exists |
| P3 | About, Facts, Contact | Company | Update existing |
| P3 | Business case kit (PDF + template) | Document | New |
| P3 | Insights index + post | Blog | Restyle existing |

Not at launch: answers layer (40 to 60 pages), cost guides, phase 2 industries, legacy URL moves.

## 6. Page templates

| Template | Sections (in order) | Based on |
|---|---|---|
| Home | Hero + spec row · logo band · what we build (5 pillars) · results · Ship Line / Build Standard · how we work · pricing band · client voice · FAQ · close + form | Homepage mockups |
| Pillar | Hero · who it's for (situations in buyer words) · 4 capabilities, one line each · results (2 cases) · how it works · cost band · FAQ (5) · close | 10-08 proposal rules, under 600 words |
| Capability | Hero · when it makes sense · what we build · results · why TekRevol · how we work · cost table · compare · client voice + industries · stack · FAQ · close + form | Custom software rebuild (10-30), 11 to 13 sections |
| Industry | Hero · what's hard in this industry · what we build for it · compliance · results · FAQ · close | Healthcare landing page v2 |
| Case study | Outcome as title · client type (anonymized if needed) · Challenge · Built · Impact (2 numbers) · stack · related cases · CTA | New |
| Work index | Filter by service and industry · 3-across grid | New |
| Pricing | Engagement models · price ranges table · what moves the price · how quoting works · FAQ · CTA | Custom page cost section |
| Trust (security) | Plain summary · how we handle data · compliance experience vs certifications · IP and contracts · Build Standard link · downloadable overview | New |
| Method | Strata Method diagram · Explore / Ship Line / Ship · Build Standard layers · roles and sign-offs | Strata v2 doc |
| Company | About story · leadership · facts in mono · careers link | Existing |
| Form | Short promise · multi-step brief · what happens next · reply time | Homepage v2 project brief |
| Blog | Restyled post and index | Existing |

## 7. Conversion paths

**Update 2026-11-12:** "Start a project" is retired as too vague. Every CTA now names a deliverable and a date. Full spec in the "Offers and calls to action" section of [[2026-11-12-homepage-copy-v3]].

One primary CTA everywhere: **Get a project estimate** (header: "Get an estimate"). Secondary actions are text links.

| Intent | Offer | Where it appears | Capture |
|---|---|---|---|
| Has a project | **Project estimate:** written cost range, timeline, team shape and phased plan within 3 business days [CONFIRM] | Hero, mid-page, close on every page | Name, work email, company, company size, what you need, project details, timeline, budget band (optional) |
| Has a problem | **Systems review:** 45 minutes with a senior architect on one system, then a written report (keep, fix, connect or rebuild, with cost ranges) within 5 business days [CONFIRM] | Pillar and capability pages, industry pages, closing form tab | Name, work email, company, company size, system, what's going wrong |
| Building the case (champion) | **Business case kit:** one-page business case template, cost ranges, ROI worksheet, security overview, vendor checklist | Pillars, pricing, how we work | Work email + company size |
| Pillar versions | Modernization roadmap · Team plan (within 2 business days) · App estimate | Matching pillar and capability pages | Same as estimate |
| Checking risk (approver) | Security and compliance page + downloadable overview | Footer, pricing, form page | No form |
| Early research | Pricing page, cost table, insights | Everywhere | No form |

**Rules:**
- Company size field on every form, so leads can be sorted SMB / mid-market / other
- Every form ends on its own thank-you URL with a GA4 event and CRM source
- No form in the hero (premium); forms live in the closing section and on the offer pages
- Paid landing pages (like healthcare AI ops) keep their own focused form

## 8. Decisions for Sana

1. Approve the ICP size bands (or adjust after asking sales what closes best)
2. Approve five pillars and their names
3. Approve the launch set and priority order
4. Primary CTA: "Get a project estimate" (decided 2026-11-12; "Start a project" was too vague)
5. Offer names and turnaround: "Systems review" (5 days) and "Business case kit" OK?

## Next steps
- [ ] Sana: decisions 1 to 5
- [ ] Claude: once approved, Figma design system + pilot templates (capability, pillar)
- [ ] Claude: homepage copy v3 for the SMB/mid-market audience
- [ ] Claude: briefs for the 5 pillar pages
