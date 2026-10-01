---
date: 2026-10-01
tags: [xloop, xsecurity, nepra, ot-security, navigation, seo, aeo, dev-handoff, design-handoff]
---

# xSecurity nav + NEPRA / OT Security — dev & design brief

Based on the live site, checked 2026-10-01: `/`, `/services/cyber-security-service`,
`/services/ai-security-service`, `/services/nepra`, `/industries/energy-and-utilities`,
`/llms.txt`.
Related: [[2026-08-25-nepra-homepage-notice-and-landing-page]].

## 1. Mega menu item (dev + design)

**Where:** xSecurity mega menu, "Comprehensive Digital Protection" column, as the **3rd item**
after AI Security Services. Use the same component as the two items already there (icon + heading + one-line description).

| Field | Content |
|---|---|
| Heading | **NEPRA IT/OT Compliance** |
| Description (7 words) | **Audits, VAPT and training for power-sector licensees** |
| Link | `/services/nepra` |
| Link `title` / aria-label | NEPRA IT/OT compliance services for Pakistan's power sector |
| Icon | Same shield icon style as the other two items. Suggest a shield with a lightning bolt (power sector) |
| Mobile menu | Same item, same order, under xSecurity |

**Alternate description** (if design wants the regulation named): *IT/OT security compliance for Pakistan's power sector* (7 words)

**Design notes**
- The two existing descriptions run 10–11 words. A 7-word line will be shorter, which is fine. Don't pad it.
- Leave the right-hand promo cards as they are ("Book an AI Security Consultation", "AI Governance…"). The AI Security featured offer stays.
- Spelling: use **"Cybersecurity Services"** as the nav heading. Today the nav says "Cyber Security Services" while the page says "Cybersecurity Services", so the entity is split in two. Keep the URL as it is.

**Dev note:** the **xSecurity** top-level label currently links to `/services/ai-security-service`.
Either make it non-clickable (menu trigger only) or point it at the cybersecurity page. Right now the
security hub's own link goes to the narrowest page.

## 2. Recommendation: architecture

**Yes, link it. NEPRA becomes the third xSecurity service, as a sibling.** Don't build a standalone OT Security page yet.

```
xSecurity
├── Cybersecurity Services     /services/cyber-security-service   (broad; gets a new OT & SCADA Security card)
├── AI Security Services       /services/ai-security-service      (AI-only)
└── NEPRA IT/OT Compliance     /services/nepra                    (Pakistan power sector; the OT proof page)
```

### Who owns which keywords (prevents cannibalization)
| Page | Owns | Must NOT target |
|---|---|---|
| Cybersecurity | cybersecurity services, VAPT, penetration testing, cloud/app security, SOC, OT security (generic, one section) | prompt injection, AI red teaming, secure MLOps |
| AI Security | AI security, AI red teaming, prompt injection testing, LLM security, AI SOC | VAPT, OT/SCADA |
| NEPRA | NEPRA compliance, NEPRA IT/OT Regulations 2022, NEPRA cybersecurity audit, SCADA security for power sector | generic "cybersecurity services" |
| Energy & Utilities (industry) | AI for energy & utilities | compliance-audit terms. Link out to NEPRA instead |

### Why no standalone OT Security page now
- The only OT proof we can publish is one anonymized engagement ("a 30 MW wind IPP"). IEC 62443 / NIST alignment is **not approved**. A generic OT page would be thin and couldn't make strong claims.
- The OT queries xLoop can realistically win are the Pakistan power-sector ones, and the NEPRA page already covers those in depth (SCADA, DCS, PLCs, RTUs, a clause-by-clause table). A second OT page would compete with it for the same searches.
- **Build `/services/ot-security` later**, once there's a second OT engagement outside power (oil & gas, manufacturing) and the IEC 62443 claim is approved. At that point OT Security becomes the parent page and NEPRA moves under it as a child.

## 3. Cybersecurity page changes (the main cannibalization problem)

The cybersecurity page is currently optimized as an **AI** security page:

| Element | Live now | Change to |
|---|---|---|
| Title | AI Cybersecurity Services \| Threat Intelligence & Secure MLOps \| xLoop Digital \| xLoop Digital | **Cybersecurity Services: VAPT, SOC & OT Security \| xLoop Digital** |
| Meta description | "…prompt injection testing, AI threat intelligence, red teaming, secure MLOps…" | **xLoop Digital's cybersecurity services: VAPT, cloud and application security, SOC services, and OT security for SCADA and plant networks.** |
| Hero rotating word | Prompt Injection Testing | Penetration Testing / OT Security (prompt injection belongs to AI Security) |
| H1 | Empty in the HTML; several H1s on the page | One H1: **Cybersecurity Services**. Section titles become H2 |
| Telecom / Banking / Oil & Gas industry cards | Copied word for word from the AI Security page, and all about AI | Rewrite for general cyber, or remove. Replace Oil & Gas with the Power & Energy card below |

### New service card: OT & SCADA Security (adds a 7th card to the services grid)
> **OT & SCADA Security**
> Security assessment for operational technology: SCADA, DCS, PLCs, RTUs, and the links between
> the plant and the corporate network. We assess OT passively, so plant availability is never put
> at risk, and we map findings to the regulations you report against.
> **Power sector in Pakistan? See NEPRA IT/OT compliance →** `/services/nepra`

### Industry card: Power & Energy (replaces the copied Oil & Gas card)
> **Power & Energy**
> Power producers and utilities run IT and OT side by side. We assess both, from the corporate
> network to SCADA and plant controllers, and align the work to NEPRA's IT/OT Regulations, 2022.
> **NEPRA IT/OT compliance →** `/services/nepra`

## 4. NEPRA page fixes, needed before it gets a sitewide nav link

A nav link gives the page more weight and sends more traffic to it, so the errors below will be seen more often.

- [ ] **Regulations 4–11 → 4–12** everywhere: the stat tile, the H2 "Regulation 4 to 11", the service card, the capsule. Add a table row for **Regulation 12: PowerCERT coordination**. *This has been wrong publicly since August.*
- [ ] **US spelling**: 11 British forms are live (organisation ×3, programme(s) ×3, organised ×2, prioritised ×2, licence). Exception: keep "licence" only where it quotes NEPRA's official term
- [ ] Use the full citation once, in the first section: *NEPRA (Security of Information Technology and Operational Technology) Regulations, 2022 (SRO 1708(I)/2022)*
- [ ] **Schema**: only Organization + WebSite are live. Ship the Service + FAQPage + BreadcrumbList JSON-LD from the FINAL content doc. Breadcrumb: Home › xSecurity › NEPRA IT/OT Compliance
- [ ] **H1 is empty in the server HTML.** It's filled in by an animation, so crawlers and AI agents that don't run JavaScript see no H1. Render the text in the HTML and animate it visually only. *This is sitewide: every service page has the same issue*
- [ ] "Inside a digital engineering firm operating across **eight countries**" conflicts with the letter (four offices). Confirm the number before the page gets more traffic
- [ ] Still unconfirmed: "roughly three weeks" (sales) and permission to use the anonymized 30 MW wind IPP reference
- [ ] Optional, stronger hook: ISMO has started issuing compliance reminders and doing unannounced inspections

## 5. Internal links + AI-agent visibility

Today the NEPRA page's only inbound links are the homepage ribbon and the sitemap.

- [ ] Mega menu item (section 1). This is the sitewide link
- [ ] Cybersecurity page: the OT card + the Power & Energy card (section 3)
- [ ] Energy & Utilities page: in the "Cybersecurity & Grid Resilience" and "Regulatory Compliance & Sustainability" cards, add *NEPRA IT/OT compliance →*
- [ ] A "Related xSecurity services" strip at the bottom of all three xSecurity pages, linking the other two
- [ ] Footer xSecurity column: add NEPRA IT/OT Compliance
- [ ] **`/llms.txt`**: NEPRA is missing. Add under services:
  `- [NEPRA IT/OT Compliance](https://www.xloopdigital.com/services/nepra): Compliance audits, IT/OT VAPT, policy frameworks and training for Pakistan's power sector under the NEPRA IT/OT Regulations, 2022`
  and update the Cyber Security line to: `Cybersecurity services: VAPT, cloud and application security, SOC, and OT/SCADA security`
- [ ] Sitewide: fix the doubled title suffix ("| xLoop Digital | xLoop Digital")

## Next steps
- [ ] Send sections 1 + 3 to design (mega menu item, OT card, Power & Energy card)
- [ ] Send sections 1, 3, 4, 5 to dev
- [ ] Ask the security practice to confirm the Regulation 12 row wording, and whether the IEC 62443 claim can be approved (this decides when OT gets its own page)
- [ ] Confirm the office/country count for the NEPRA "Why xLoop" card
