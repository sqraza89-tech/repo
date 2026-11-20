---
date: 2026-11-21
tags: [xloop, live-audit, data-ai-consulting, xcelerate, dev-handoff, qa]
---

# Live audit: Data & AI Consulting and xCelerate hub (21 Nov 2026)

Checked the live pages against the approved copy after Zeeshan's launch note. Related: [[2026-10-14-xloop-data-ai-consulting-page-content-v1.1]] · [[2026-10-13-xloop-xcelerate-training-pages-content-v1]] · [[2026-11-11-xloop-pick-n-pay-text-changes-for-dev]]

## What's working (both pages)

- Titles, meta, canonical, one H1 rendered in the server HTML, Open Graph title
- Schema: Service entities in an OfferCatalog, FAQPage, BreadcrumbList
- `/services/ai-consulting-and-development` redirects permanently (308) to `/ai-consultancy`
- No uncited statistics, no banned words, anonymous case cards

## Data & AI Consulting (`/ai-consultancy`)

| # | Issue | Fix | Priority |
|---|---|---|---|
| 1 | Proof card "Snowflake Lakehouse" still says "SAP ERP, SAP BW and application databases… lakehouse on Snowflake and AWS" | Item 5 of the Pick n Pay change list: problem, what we did, result. Retitle the card "Snowflake Reporting Platform" | High |
| 2 | Hero: "Most AI programs don't fail on the model, they stall because…" (comma splice, open since Oct) | "Most AI programs don't fail on the model. They stall because…" | Medium |
| 3 | xServe card: "A popular Saudi Arabian fast food chain" | "A leading Saudi Arabian fast food chain", as on every other page | Low |
| 4 | Form has 6 required fields (adds Role and Company size) | Four fields: Name, Work email, Company, the one line question. Role and size can be asked on the call | Medium |
| 5 | "See Applied AI Solutions" has no link (the hub is still a 404) | Link it to `/services/applied-ai-solutions` when that page ships | Medium |
| 6 | Creatio logo is already in the partner strip | Check with Huzaifa that Creatio's logo guidelines allow it; if yes, add "Creatio" to the "Technology partners" text in At a glance too | Medium |
| 7 | No visible "Last updated" date | Small grey line under the hero or above the FAQ, matching `dateModified` | Low |
| 8 | H2 "Find Out If Your Data is Ready for AI" | "…Data Is Ready…" (title case) | Low |

## xCelerate hub (`/xcelerate`)

The live page has the 19 Nov hub update, but **not the later changes from Misbah's answers** (same day). Send `Notes/2026-11-19-xloop-xcelerate-pages-content-v1.2.docx` again.

| # | Live text | Fix (from v1.2) | Priority |
|---|---|---|---|
| 1 | Meta: "…Online, on site or hybrid." | "…in AI and data engineering, on site or as agreed with you." | High |
| 2 | Answer block: "Programs run online, on premise or hybrid." | "Programs run on site at the employer's offices or where agreed with the sponsor." | High |
| 3 | FAQ "Is the training online or on site?": "Both. Programs run online, on premise at your offices, or hybrid…" | "On site. Corporate programs run at the employer's offices, and sponsored programs run where we agree with the sponsor, including xLoop's training facility in Karachi. Online or hybrid sessions can be added when a program needs them." | High |
| 4 | FAQ "Who is xCelerate for?": "…Individuals can register for open bootcamp cohorts." | "Organizations: employers upskilling their teams, companies funding CSR programs, and employers who want job ready hires. Individuals can register their interest, and we'll tell them when a program they can join opens." | High |
| 5 | FAQ "How do individuals apply?": "…when the next open cohort is scheduled." | "Through the Bootcamps page. Register your interest and we'll write to you when a program you can join opens." | High |
| 6 | Bootcamps card label "EMPLOYERS AND INDIVIDUALS" | "EMPLOYERS AND TEAMS" (who it's for: employers building a talent pipeline, and teams moving into AI or data roles) | Medium |
| 7 | Form option "Applying as an individual" | "Registering as an individual" | Low |
| 8 | Why Train With xLoop: "A branch manager, a data analyst and a security engineer need different things from AI." | "A developer, a data engineer and a team lead need different things from a program." (business and security courses were dropped) | Medium |
| 9 | "See AI Consulting…" and "AI Consulting" in Explore related services | "Data & AI Consulting" (renamed 14 Oct) | Low |
| 10 | Program cards' "See corporate training / sponsored programs / bootcamps" jump to the table, and the three inner pages return 404 | Fine for now. Build `/xcelerate/corporate-ai-training`, `/sponsored-talent-programs`, `/bootcamps` from v1.2, then point the cards there | Next |
| 11 | `/xcelerate/performance` (old "AI Bootcamp II" link) returns 404 | 301 it to `/xcelerate` now, then to `/xcelerate/bootcamps` once that exists | Medium |
| 12 | Form has 6 fields | Four is the convention; "Number of people" and "I'm interested in" can stay if sales needs them for routing | Low |
| 13 | No visible "Last updated" date | As on the other pages | Low |

## Sitewide, seen on both pages

- **Menu still pre revamp:** "AI Consulting & Development" (should be "Data & AI Consulting"), Digital Twin, Chat Genie, xCrowdIQ, xVoltIQ, Design Studio, Smart Cities, Manufacturing, EdTech, Telco/ICT, "Transports & Logistics", and "Accelerate Your Career In Tech" as the xCelerate label. All decided already; they need one menu update
- **"Let's Talk AI"** button in the header: passive CTA (value CTA rule). Suggest "Book a 30 Minute Review" or point it to `/contact-us` as "Contact Us" only

## Next steps

- [ ] Sana: send Zeeshan this list, plus the v1.2 xCelerate docx and the Pick n Pay change list (item 5)
- [ ] Dev: xCelerate fixes 1 to 5 first (they describe programs that don't exist), then Data & AI Consulting 1
- [ ] Huzaifa: Creatio logo guidelines (logo is already live)
