---
date: 2026-10-02
tags: [xloop, xsecurity, nepra, dev-handoff, schema, json-ld, footer, breadcrumb]
---

# NEPRA page: answers to dev questions + ready-to-paste JSON-LD

Follow-up to [[2026-10-01-xsecurity-nav-nepra-ot-security-brief]] (Word v1.0). The dev's
questions came via Omais's design + document handoff.

## Decisions
- **August FINAL content doc is NOT sent to dev.** Its schema is out of date: wrong URL
  (`/services/nepra-it-ot-compliance`), "Regulations 4-11", a breadcrumb pointing at `/services`
  (which redirects to `/ai-consultancy`), and only 1 of 6 FAQ entries written out.
  The corrected JSON-LD below replaces it.
- **Telecom + Banking cards (Cybersecurity page):** keep both and replace the text (copy below).
- **Footer:** yes, add NEPRA under Services, plus Cybersecurity Services, so NEPRA isn't the only security item.
- **Breadcrumb:** Home › Cybersecurity Services › NEPRA IT/OT Compliance. Never label a crumb
  "xSecurity" and link it to the Cybersecurity page; the name and the URL must match.

## Copy: Cybersecurity page industry cards
**Telecommunications**
We secure telecom operators by testing customer portals and mobile apps, protecting subscriber
and billing data, and monitoring network and cloud infrastructure for intrusion and fraud.

**Banking**
We secure banks by testing internet and mobile banking channels, hardening core and cloud
infrastructure, and controlling access to customer and transaction data, with monitoring that
supports regulatory audits.

## Page copy changes so the FAQ schema matches the page word for word
- FAQ 2 answer: replace it with the text in the schema below. It adds the full citation and "coordination with PowerCERT" (Regulation 12)
- FAQ 6 answer: "organised" → "organized"
- Rest of the page: the US-spelling and Reg 4–12 fixes from the v1.0 brief still apply

## JSON-LD (one script tag in `<head>` of `/services/nepra`)
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.xloopdigital.com/services/nepra#service",
    "name": "NEPRA IT/OT Regulatory Compliance Services",
    "serviceType": "Cybersecurity regulatory compliance",
    "url": "https://www.xloopdigital.com/services/nepra",
    "description": "NEPRA compliance audits, IT and OT VAPT, security policy frameworks and training for Pakistan's power sector under the NEPRA (Security of Information Technology and Operational Technology) Regulations, 2022, covering Regulations 4 to 12.",
    "provider": {
      "@type": "Organization",
      "name": "xLoop Digital",
      "url": "https://www.xloopdigital.com",
      "telephone": "+92-21-3586-9200",
      "email": "xsecurity@xloopdigital.com"
    },
    "areaServed": { "@type": "Country", "name": "Pakistan" },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "NEPRA-licensed power generation, transmission and distribution companies"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "NEPRA IT/OT compliance services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NEPRA Compliance Audit (Regulations 4-12)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT & OT VAPT Services (Regulation 6)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Policy Framework (Regulation 4)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity Awareness & Training (Regulation 10)" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who has to comply with NEPRA’s IT/OT security regulations?",
        "acceptedAnswer": { "@type": "Answer", "text": "Every NEPRA licensee in Pakistan’s power sector — generation, transmission and distribution companies. The obligations cover both corporate IT and operational technology, including SCADA, DCS, PLCs and RTUs." }
      },
      {
        "@type": "Question",
        "name": "What are the NEPRA IT/OT regulations?",
        "acceptedAnswer": { "@type": "Answer", "text": "The NEPRA (Security of Information Technology and Operational Technology) Regulations, 2022 (SRO 1708(I)/2022) set the mandatory cybersecurity framework for NEPRA licensees. They cover governance and policy, security controls, risk and vulnerability assessment, data integrity, audit support, monitoring and incident response, training, regulatory reporting, and coordination with PowerCERT." }
      },
      {
        "@type": "Question",
        "name": "How quickly must a cyber incident be reported to NEPRA?",
        "acceptedAnswer": { "@type": "Answer", "text": "Significant incidents must be reported within 72 hours, in addition to quarterly cybersecurity incident reporting to the Authority. Incidents affecting OT are also reported to the National CERT and PowerCERT." }
      },
      {
        "@type": "Question",
        "name": "Will a compliance audit disrupt plant or SCADA operations?",
        "acceptedAnswer": { "@type": "Answer", "text": "It should not. A properly scoped NEPRA audit assesses OT passively — reviewing configurations, segmentation, access and logs rather than actively scanning live control systems. No plant downtime is required." }
      },
      {
        "@type": "Question",
        "name": "How long does a NEPRA IT/OT compliance audit take?",
        "acceptedAnswer": { "@type": "Answer", "text": "For a single-site licensee, roughly three weeks of engagement across scoping, fieldwork, gap analysis and reporting. Multi-site licensees take longer in proportion to the number of plants and the size of the OT estate." }
      },
      {
        "@type": "Question",
        "name": "What happens if NEPRA directs a technical audit?",
        "acceptedAnswer": { "@type": "Answer", "text": "Regulation 8 requires licensees to support an Authority-directed technical audit and produce evidence. In practice, that means having an organized evidence file — policies, asset inventory, access records, patch and backup logs, and incident records — ready before you are asked." }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.xloopdigital.com/" },
      { "@type": "ListItem", "position": 2, "name": "Cybersecurity Services", "item": "https://www.xloopdigital.com/services/cyber-security-service" },
      { "@type": "ListItem", "position": 3, "name": "NEPRA IT/OT Compliance", "item": "https://www.xloopdigital.com/services/nepra" }
    ]
  }
]
```

**Dev notes**
- Render it in the server HTML, not injected after the page loads
- Run it through the Rich Results Test (search.google.com/test/rich-results) before and after launch, and again whenever the FAQ copy changes
- If FAQ 5 ("roughly three weeks") changes after sales confirms, update the schema at the same time
- If a visible breadcrumb is shown on the page, it must match the schema

## Open items for Sana (not for dev)
- [ ] The footer lists 4 offices (Pakistan, USA, Dubai, Qatar), but the NEPRA "Why xLoop" card says "eight countries". Pick one number before the page gets nav traffic
- [ ] "roughly three weeks" is still unconfirmed by sales, but it's live and in the schema
- [ ] Update the Word brief to v1.1 with these answers, if it's going around again

## Design follow-up (Omais, 2 Oct)
- The OT & SCADA card is a **hover card** (no link). The final hover text is: "Passively assess SCADA, PLCs and plant networks without disrupting operations." (10 words)
- The "Power sector in Pakistan?" line was dropped from the OT card. The NEPRA link is now a text link at the end of the **Power & Energy** industry card
- The "Rewrite or remove" table row was replaced with final Telecom/Banking/Power & Energy copy
- The hover text on all 7 service cards is missing from the server HTML. Dev should render it in the HTML and reveal it with CSS
- **Current brief: `Notes/2026-10-02-xsecurity-nav-nepra-ot-security-brief-v1.2.docx`** (supersedes v1.0/v1.1, JSON-LD in Appendix A)

## APPROVED 2026-10-02: Energy & Utilities card replaces Power & Energy (in brief v1.2)
The industry card would be named after the existing Energy & Utilities industry page, and it keeps oil and gas coverage:
> **Energy & Utilities** — We secure power, utility and oil and gas operators across IT and OT, from corporate networks to SCADA and plant controllers. For Pakistan's power sector, we align the work to NEPRA's IT/OT Regulations, 2022. → NEPRA IT/OT compliance (`/services/nepra`)

NEPRA is tied to power only (it doesn't apply to oil and gas). Approved by Sana; now in brief v1.2.
