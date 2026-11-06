---
date: 2026-11-06
tags: [tekrevol, website, roadmap, smb, mid-market, lead-gen]
---

# TekRevol website rebuild: roadmap

Goal: finish content and design for the full site (beyond the healthcare landing page) so the developer gets one complete, build-ready package. Team: Sana + Claude now, developer once assets are done.

First deliverable (started today): [[2026-11-06-website-blueprint-v1]] (sitemap, launch set, page templates, conversion paths, messaging for SMB and mid-market).

## What changes in direction

- **Audience:** SMB and mid-market companies, not founders. Founder pages (MVP, startup prototype) stay live for SEO but leave the navigation and the core story
- **Business goal:** a steady pipeline of qualified leads, then more closed deals. So the site is judged on qualified leads, not traffic
- **Buying group:** SMB owner-operators decide fast. Mid-market deals need a champion who forwards material upstairs and an approver who checks risk. The site has to serve all three
- Replaces the founder-leaning parts of [[2026-10-08-site-architecture-proposal]] (the `/start/` "I have an idea" pages). The Build Standard, Strata Method, answers layer and "do no harm" migration still apply

## How we'll measure it

| KPI | Target | Note |
|---|---|---|
| Qualified leads per month (company fits SMB/mid-market size band) | Baseline first, then +50% in 6 months after launch | No baseline exists: conversion tracking was never installed (see ChatGPT Ads audit) |
| Visit to lead rate, service and industry pages | 1.5 to 2% | Site-wide average is lower; judge by page type |
| Paid landing page click to lead | 5% | Existing target from the ads audit |
| Share of leads in the ICP size band | 60%+ | Needs a company size field on every form |
| Lead to sales call booked | Track from launch | Needs CRM source tracking |

**Do first, before the rebuild:** ask the developer for one small job now: GA4 form events + thank-you pages + source fields into the CRM on the current site. Without it there is no "before" number and no way to prove the new site works.

## The process

Rule: **templates, not pages.** ~30 launch pages share ~12 templates. We design and approve each template once, then fill it with copy. This is what keeps two people fast.

Rule: **copy before design.** Each page starts as a short brief, then copy (markdown), then design. Design never waits on placeholder text.

### Phase 1: Foundations (week of Nov 9)
- [ ] Sana approves the blueprint: ICP size bands, sitemap, launch set, CTAs
- [ ] Messaging framework for SMB/mid-market signed off (draft is in the blueprint)
- [ ] Proof inventory: every number, logo, award and partner claim marked confirmed or not
- [ ] Send the confirmation list (below) to TekRevol sales/delivery
- [ ] Get access: GA4, Search Console, CRM. Search Console drives which old URLs to keep
- [ ] Ask the developer which CMS/stack the site runs on (shapes the handoff format)

### Phase 2: Design system + pilot templates (weeks of Nov 9 to Nov 20)
- [ ] Build the design system in Figma directly (Claude can create it through the Figma connector): tokens, type, buttons with notch, hairline tables, timeline, FAQ, forms, nav, footer
- [ ] Pull in the approved homepage mockup frames
- [ ] Pilot two templates end to end: **capability page** (custom software, copy already rebuilt) and **service pillar page**
- [ ] Sana reviews look and feel on these two before anything else is designed

### Phase 3: Content and design production (weeks of Nov 16 to Dec 4)
In priority order (revenue first):
1. Homepage (final copy for the new audience)
2. Service pillars (5) and priority capability pages (8)
3. Pricing and engagement models
4. Security and compliance (the approver page)
5. Industry pages: healthcare (from the landing page), manufacturing, energy, retail
6. Work: case study template + 6 rewritten case studies
7. How we work (Strata Method + Build Standard), About, Contact / Start a project, Facts page
8. Champion pack: one-page business case PDF

Each page: brief > copy > Sana review > design. Claude drafts, checks claims against the proof inventory, and keeps a running CONFIRM list.

### Phase 4: Developer handoff package (week of Dec 7)
- [ ] Figma file: every template, desktop 1440 + mobile 390, with component specs
- [ ] Copy deck per page (final, no placeholders)
- [ ] SEO spec: URL, title, meta, H1, schema type, internal links per page
- [ ] Redirect map (from Search Console data; ranking URLs stay put)
- [ ] Tracking spec: every form, CTA and thank-you page with its GA4 event and CRM fields
- [ ] Machine layer: llms.txt, facts page, sitemap structure
- [ ] Kickoff with the developer

### Phase 5: Build, QA, launch (developer, ~4 to 6 weeks)
- Claude QAs each built template against Figma and the copy deck, checks SEO/schema and tracking
- Launch in early to mid January (avoid launching over the holidays), then a 30-day review of leads by page

## Confirmation list for TekRevol (send in week 1)

1. Price ranges for custom software, apps, modernization, team extension; fill the $120K to $350K gap
2. Project count: 500+ or 800+ (both appear today)
3. Partner status: AWS, Microsoft Azure, OpenAI, Anthropic (partner vs "we build on")
4. Case study numbers allowed in public: Kinder Morgan, Rehkemper, Al Hussaini, Schology, Libido Health, Equitrip, NDE Offshore
5. Which client logos may appear on the logo wall
6. Reply time promise on forms ("within 6 hours"?)
7. Build Standard items delivery actually follows today
8. Security facts for the approver page: certifications held vs experience, NDA, IP ownership, data handling
9. Support and maintenance plans offered after launch
10. Sales: what company size and deal size closes best today

## Who does what

| Sana | Claude |
|---|---|
| Decisions and approvals at each gate | Briefs, copy, SEO spec, proof checks |
| Gets confirmations and access from TekRevol | Figma design system and templates |
| Final look-and-feel call | Handoff package, tracking spec, redirect map |
| Developer relationship | QA of the build |

## Risks

- **Unconfirmed claims block launch.** Mitigation: send the confirmation list in week 1; anything unconfirmed ships without the claim
- **SEO loss from URL changes.** Mitigation: phase 1 adds pages, no moves; moves only with Search Console data
- **Design drift back to the old template look.** Mitigation: approve two pilot templates before producing the rest
- **Founder leads keep coming.** That's fine; forms capture company size so sales can sort them

## Next steps
- [ ] Sana: review and approve [[2026-11-06-website-blueprint-v1]]
- [ ] Sana: send the confirmation list to TekRevol and request GA4, Search Console, CRM access
- [ ] Sana: ask the developer for the tracking fix on the current site and the CMS name
- [ ] Claude: start the Figma design system and the two pilot templates once the blueprint is approved
