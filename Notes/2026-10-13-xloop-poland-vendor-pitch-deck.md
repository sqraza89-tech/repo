---
date: 2026-10-13
tags: [xloop, poland, europe, pitch-deck, government, enterprise]
---

# xLoop: vendor pitch deck for Polish enterprises and government agencies

Related: [[2026-09-07-xloop-bucket-1-region-targeting]] · [[2026-09-29-decks-library-slide-review]]

## Context
- xLoop will pitch to become a vendor for Polish enterprises and government agencies (Sana, 2026-10-13)
- Status: advice given in chat, **nothing decided or built yet**. The outline below is a recommendation

## Update 2026-10-13 (later): brief clarified by Sana
- xLoop applied to be a vendor **enabling Polish businesses in AI** and is **shortlisted in the final two**. The deck is the final pitch
- Who runs the selection is unclear (probably an integrator or program owner). Sales has no more detail. Procurement and contracting questions are **parked**
- Direction from sales: **it has to be AI**. Order: agentic AI first, then security and governance, some data
- This supersedes the pillar order and the 10-slide outline further down

### Revised concept
- The selector is choosing who to put in front of their businesses. Their risk is a vendor whose pilots never reach production, or whose AI causes an incident
- Argument: AI projects stall for three reasons (data not ready, agent not built for production, nobody can show it is safe). xLoop does all three in one team: **we build the agents, then we attack them before anyone else does**
- Format: show first. A short live demo of an agent working in Polish, then one engagement walked through step by step, proof attached to each step

### Revised slide order
| # | Slide | Proof used |
|---|---|---|
| 1 | Title: AI agents for Polish businesses, built for production and tested for safety | |
| 2 | Why AI projects stall after the pilot (three reasons) | |
| 3 | Live demo: an agent working in Polish on Polish documents | Needs delivery to confirm |
| 4 | One team for all three: data, agents, security | |
| 5 | How we build agents | A18 architecture, A12 investment assistant, A13 RAG video search, B5 xServe deployment (no figures) |
| 6 | How we prove they are safe | A4 Lead Auditors, A7 VAPT 200+ domains, A8 mobile banking; B1 red team findings only with client permission |
| 7 | Getting the data ready | A9 Snowflake single source of truth, A10 billion records |
| 8 | Your people can run it after we leave | xCelerate training, Emeritus partnership, A19 Mari cohorts (as training proof only) |
| 9 | Already working in Poland and Europe | Cloud Titans testimonial (verbatim), people in Hungary, Optimaze |
| 10 | The first 30 days with your first business, and the team in the room | Named leads; durations need delivery sign-off |

### Needed from sales and delivery
- [ ] Who is in the room, how long the slot is, and whether a live demo is allowed
- [ ] Delivery: can an existing agent (Chat Genie or App Pilot) be shown working in Polish
- [ ] Client permission for the anonymized AI red team findings (B1). Best single slide for this pitch
- [ ] Naming permission for Pipeline (second Polish client)
- [ ] Delivery: confirm durations for the first 30 days slide
- [ ] Who presents (suggested: COO, Senior Solution Architect, Lead Auditor)

## Decks built 2026-10-13
- Sana liked both approaches and asked for both as editable PPTX. Both are AI led (agents, then security, then data)
- **Deck A, three pillars:** `Notes/2026-10-13-xloop-poland-pitch-A-three-pillars.pptx` (11 slides). Line: "AI that works, and stands up to an audit"
- **Deck B, show first:** `Notes/2026-10-13-xloop-poland-pitch-B-show-first.pptx` (11 slides). Line: "We build the agents. Then we attack them before anyone else does"
- Native shapes and text, Poppins embedded, brand palette, speaker notes on every slide with the claim rules and open checks
- **Polish agent demo:** Sana doubts it can be delivered in time. Deck B slide 3 is a demo slot that works with an existing agent in English or a recorded walkthrough; it can be deleted without breaking the deck
- No performance figures for xServe, no durations on the "how we start" slides, no red team findings (all pending, see list above)
- Team names on Deck B slide 10 (Daniyal Abbasi, Irfan Shaikh, Muhammad Humza) are placeholders until sales confirms who presents
- Images: none needed. Optional GPT image spots are the title and closing slides (replace the circle motif) and the demo panel

## Deck B design versions (2026-10-13)
- Gamma: https://gamma.app/docs/gk5p655q5rjxcif (10 of 11 slides; closing slide missing; Gamma credits at 0)
- Figma Slides: https://www.figma.com/slides/dAaUXCGpK4YhIvTJtT2pmz (all 11 slides, in "Sana Qazi's team" drafts)
- Same approved copy in both. Sana to pick one; then Deck A in the same style and a PowerPoint export

## Core recommendation (first pass, superseded above)
- Do not present the company. Make one narrow argument: **AI that survives an audit** (working line, not approved copy)
- Poland is a supply market with strong local IT firms, so capacity and headcount will not register
- Spine = the three existing pillars: Make AI possible / Make AI work / Make AI safe
- "Make AI safe" is the differentiator: ISO 42001 + 27001 Lead Auditors (individual level), AI red teaming, against NIS2, DORA and EU AI Act pressure

## Recommended deck (about 10 slides + appendix)
| # | Slide | Content |
|---|---|---|
| 1 | Title | One plain line: what we do, for whom |
| 2 | Their problem | AI pressure, legacy systems, new regulation |
| 3 | What we do | Three pillars, one line each |
| 4 | Proof: possible | COBOL to Java with AI (A14) or Snowflake single source of truth (A9) |
| 5 | Proof: work | Immunization platform (A10) for government; LLM investment assistant (A12) for enterprise |
| 6 | Proof: safe | VAPT 200+ domains (A7) or mobile banking security (A8) |
| 7 | Poland and Europe | Cloud Titans testimonial (A15), team members in Hungary, Optimaze partnership |
| 8 | How we work with you | Contracting entity, data location, named lead, language |
| 9 | First step | Two-week discovery (A23), fixed scope, named lead |
| 10 | About | 90 people, founded 2022, four offices, technology partners |

- Appendix: team CVs, 11-stage agent architecture (A18), one-page compliance sheet
- One shared core; swap slides 2 and 5 per audience. Polish-language version for government, English for enterprise

## Polish proof on file
- **Cloud Titans (Poland)**: named, signed testimonial (John Waterhouse), core application modernization + SIEM migration. Strongest asset for this market
- **Pipeline (fintech, Poland)**: delivered, but naming permission unconfirmed
- The "35% rise in lead generation" figure for Cloud Titans has no recorded source. Do not use

## Keep out of the deck
- Country counts, 120+ staff, 50+/75+ solutions, unsourced percentage results
- Company-level ISO 27001 claim or "ISO-aligned" wording (Stage 1 audit still in progress)
- Client names: SS&C, IRD, Majid Al Futtaim; Pipeline until permission is confirmed

## Open risks (unverified, need checking)
- Government agencies buy through tenders (PZP): documented references and often bidder-level ISO 27001 are typically required
- Poland may restrict bidders from countries outside the EU procurement agreements. Would affect a Pakistani entity, likely not the US entity. **Confirm with Polish counsel**
- Sub-threshold route: a small discovery may fall under the PZP threshold (recalled as about PLN 170,000 net, unconfirmed)
- Data transfer: Pakistan has no EU adequacy decision; SCCs + TIA needed
- Realistic government route may be subcontracting to a Polish integrator, which makes the integrator the deck's real audience

## Next steps
- [ ] Sana: confirm first audience (enterprise, agency, or Polish prime integrator)
- [ ] Confirm which entity contracts (US HQ, or via an EU/Polish partner)
- [ ] Decide which pillar leads (suggested: AI security and governance for agencies and regulated enterprises; legacy modernization for the rest)
- [ ] Sales: confirm naming permission for Pipeline
- [ ] Check the procurement points above with Polish counsel
- [ ] Then: write slide-by-slide copy
