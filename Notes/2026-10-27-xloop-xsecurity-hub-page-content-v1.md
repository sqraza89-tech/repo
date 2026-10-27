---
date: 2026-10-27
tags: [xloop, service-page, xsecurity, hub, ai-security, cybersecurity, nepra, ot-security, site-revamp, seo, aeo]
---

# xSecurity Hub · Page Content v1 (for design handoff)

**URL:** `/xsecurity` (new page; returns Page Not Found today). Same pattern as the `/xcelerate` hub
**Children:** AI Security Services (`/services/ai-security-service`) · Cybersecurity Services (`/services/cyber-security-service`) · NEPRA IT/OT Compliance (`/services/nepra`)
**Scope:** a short routing page. It explains what xSecurity covers, helps a visitor pick the right practice, and shows the proof once. The detail lives on the three child pages
**Design:** the hub layout used for Applied AI Solutions and xCelerate, in the xSecurity look

---

## Page setup

| Field | Value |
|---|---|
| Title tag | `xSecurity: AI Security and Cybersecurity Services \| xLoop` |
| Meta description | `xSecurity is xLoop's security practice: AI security and red teaming, cybersecurity and VAPT, and NEPRA IT/OT compliance for Pakistan's power sector.` |
| H1 | AI Security and Cybersecurity Services |
| Nav label | xSecurity (the top level menu label links here) |
| Breadcrumb | Home › xSecurity |
| Schema | Service, with the three practices as `Service` entities in `hasOfferCatalog` · FAQPage · BreadcrumbList |
| Visible "Last updated" date | Yes |
| Lead form heading | Explore xSecurity for Your Business |

**Build rules:** server rendered, one H1, real tables, anchor IDs, no counters, no typing animation.

---

## 1. Hero · `#top`

**Eyebrow:** xSecurity

**H1:** AI Security and Cybersecurity Services

**Subhead:** Your AI, your applications and your plant networks are now one attack surface. xSecurity is one team that tests and secures all three: the AI you are rolling out, the infrastructure it runs on, and the operational technology your regulator audits.

**Primary CTA:** Book a 30 Minute Security Review →
**Small line under the CTA:** Tell us what you need to secure. Our security team will tell you where the biggest risk is, what to test first, and give you a straight answer in 30 minutes.

*Build: hidden `source=xsecurity-hub` tag.*

---

## 2. Answer block · `#what-is`

**H2:** What Is xSecurity?

xSecurity is xLoop's security practice. It covers three areas: AI security for LLMs, agents and machine learning models; cybersecurity for networks, cloud and applications; and IT/OT compliance audits for Pakistan's power sector under the NEPRA regulations. Our audits are led by certified ISO 27001 and ISO 42001 Lead Auditors.

*Plain text, never collapsed.*

---

## 3. Practices · `#practices`

**H2:** Our Security Practices

xLoop's security work is organized into three practices, each with its own page.

*Design: three large cards, equal weight. Each card: name, who it's for, three services, link. No case studies on the cards.*

| Practice | Card copy | Services | Link |
|---|---|---|---|
| **AI Security Services** | For teams rolling out chatbots, copilots, agents and models faster than security can check them. | AI red teaming and prompt injection testing · AI security audits · AI SOC and ISO 42001 governance | Explore AI security services → `/services/ai-security-service` |
| **Cybersecurity Services** | For organizations that need to know where their networks, cloud and applications are exposed, and close the gaps. | Vulnerability assessment and penetration testing (VAPT) · cloud and application security · SOC services and OT security | Explore cybersecurity services → `/services/cyber-security-service` |
| **NEPRA IT/OT Compliance** | For power generation, transmission and distribution licensees in Pakistan that must meet the NEPRA IT/OT Regulations, 2022. | Compliance audits · IT and OT VAPT · policy frameworks and training | Explore NEPRA IT/OT compliance → `/services/nepra` |

---

## 4. Which do you need · `#which`

**H2:** Which Security Service Do You Need?

Start with what you are worried about. Most organizations begin with one practice and add the others as the findings point to them.

*Design: a two column "If… then…" list, HTML text.*

| If you are… | Start with |
|---|---|
| Launching a chatbot, copilot or AI agent, or worried staff are using AI tools nobody approved | [AI Security Services](/services/ai-security-service) |
| Preparing for an audit, a customer security review or a new product launch | [Cybersecurity Services](/services/cyber-security-service): VAPT and application security |
| Moving workloads to the cloud, or unsure who has access to what | [Cybersecurity Services](/services/cyber-security-service): cloud security and architecture review |
| A NEPRA licensee with IT/OT compliance obligations | [NEPRA IT/OT Compliance](/services/nepra) |
| Running SCADA or plant systems outside the power sector | [Cybersecurity Services](/services/cyber-security-service): OT and SCADA security |
| Not sure | Book the 30 minute review and we will tell you |

---

## 5. One team · `#one-team`

**H2:** Why AI Security and Cybersecurity Belong Together

xLoop runs AI security and cybersecurity as one practice because attacks don't stay in one layer.

- **AI runs on infrastructure.** A chatbot that leaks data often does it through an over privileged connector or a misconfigured cloud bucket, not just a clever prompt. One team follows the finding wherever it goes
- **One method across both.** Every engagement follows the same four stages: Discover, Assess, Control and Report. Findings from AI and infrastructure testing land in one report with one priority order
- **Governance in one place.** ISO 27001 for information security and ISO 42001 for AI management, led by certified Lead Auditors on the same team
- **We build what we secure.** xLoop builds and runs AI in production, so our testers know how these systems are put together and where they break

---

## 6. Proof · `#proof`

**H2:** Security Work We've Delivered

xLoop has delivered security assessments for a healthcare platform in Canada and a bank in Pakistan, and an IT/OT compliance audit for a wind power producer.

*Card format: same as the Applied AI hub. Anonymous but specific. Three cards.*

| Client | The problem | What we did | Result |
|---|---|---|---|
| **A healthcare platform in Canada** | Infrastructure had grown to many IP addresses hosting more than 200 domains, with a risk of leaking personal data | Vulnerability assessment and penetration testing across more than 200 domains, with a prioritized remediation report | A quarter of the findings were rated high risk, and the confirmed exposure of personal data was fixed |
| **A bank in Pakistan** | Customer and admin mobile apps handling sensitive financial and identity data, with compliance and privacy exposure | Reverse engineering and API assessment, secure code review, penetration testing, API authentication and encryption, code obfuscation, and SAST and DAST in the build pipeline | Apps secured in line with PCI DSS and State Bank of Pakistan requirements |
| **A 30 MW wind power producer in Pakistan** | IT/OT security obligations under the NEPRA regulations, across a head office and two plant sites | An IT and OT compliance audit covering policy, controls, network segregation and a non intrusive OT assessment | A clause by clause compliance report, gap analysis and remediation plan |

*Do not add an AI security case until client permission is documented (see the AI Security page notes).*

---

## 7. At a glance · `#at-a-glance`

**H2:** xSecurity at a Glance

| | |
|---|---|
| Who it's for | CISOs, heads of security, risk and compliance, CTOs, and the executives of regulated companies |
| Practices | AI Security · Cybersecurity · NEPRA IT/OT Compliance |
| Method | Discover · Assess · Control · Report |
| Credentials | Certified ISO 27001 and ISO 42001 Lead Auditors |
| Delivered | VAPT across 200+ domains for a healthcare platform · mobile banking app security for a bank in Pakistan · IT/OT compliance audit for a 30 MW wind power producer |
| Where to start | 30 minute Security Review |
| Related | Data & AI Consulting · Applied AI Solutions · Cloud & Hyperscaling |

---

## 8. FAQ · `#faq`

**H2:** xSecurity FAQ

*All five go into FAQPage schema, with text identical to the page. Kept short: each child page has its own full FAQ.*

**What is the difference between AI security and cybersecurity?**
Cybersecurity protects networks, cloud, applications and data. AI security protects the AI systems themselves: what a model can be talked into, what data it reveals and what its tools can be made to do. Most organizations using AI need both, and xLoop can run them together.

**Can you test our AI systems and our infrastructure in one engagement?**
Yes. We scope both together, test with one team, and deliver one report with a single priority order, so an AI finding that leads into your cloud or identity setup is followed through.

**Does xLoop help with NEPRA IT/OT compliance?**
Yes. We deliver compliance audits, IT and OT vulnerability assessments, policy frameworks and training for NEPRA licensees under the NEPRA (Security of Information Technology and Operational Technology) Regulations, 2022. See [NEPRA IT/OT Compliance](/services/nepra).

**What certifications does your security team hold?**
Our audits are led by certified ISO 27001 and ISO 42001 Lead Auditors. ISO 27001 covers information security management and ISO 42001 covers AI management systems.

**How do we get started?**
Book a 30 minute Security Review. Tell us what you need to secure, and we will tell you where the biggest risk is, what to test first and which practice fits.

---

## 9. CTA band · `#start`

**H2:** Find Out What to Secure First

In 30 minutes our security team will look at what you are running, from AI tools and applications to cloud and plant systems, and tell you where the biggest risk is and what to test first.

**Proof line (above the button):** VAPT across 200+ domains for a healthcare platform, mobile app security for a bank, and an IT/OT compliance audit for a wind power producer.

**CTA:** Book a 30 Minute Security Review →

**Form fields:** Name · Work email · Company · What do you need to secure? (AI systems · Networks, cloud and applications · OT and NEPRA compliance · Not sure)

*Four fields only (27 Oct convention). The last field is a dropdown, so leads route to the right practice.*

---

## 10. Related · `#related`

[AI security services: red teaming, audits and AI SOC](/services/ai-security-service) · [Cybersecurity services: VAPT, cloud and SOC](/services/cyber-security-service) · [NEPRA IT/OT compliance for the power sector](/services/nepra) · [Data and AI consulting](/ai-consultancy)

**Resources:** Is Your AI Actually Secure? What Enterprise Leaders Need to Know in 2026 · Why OT and IT Security Can't Be an Afterthought in Digital Transformation · AI Governance and Cybersecurity Strategies for Modern Enterprises · Launching xSecurity: Pioneering AI Security Services for Digital Trust (Media & Mentions)

*Use each item's published title as the link text. All four are live (sitemap, 27 Oct).*

---

## Internal notes (not for design)

**Conventions applied:** the 27 Oct page conventions (answer first sentence under each H2 naming xLoop, four field form, each practice as its own schema entity, visible last updated date, CTA line ending "a straight answer in 30 minutes", words only proof line, descriptive Related links).

### Live state (27 Oct)

- **No hub exists.** `/xsecurity` and `/services/xsecurity` return 404. The **xSecurity** menu label links to `/services/ai-security-service`, so the security pillar's own link lands on its narrowest page (flagged in the 1 Oct brief). **Dev:** point the menu label at `/xsecurity`
- **AI Security Assessment** (`/ai-security-assessment`) returns 404. The August hub doc made "Get Your Free AI Security Score" the dominant CTA. Not usable until the tool is built; the 30 minute Security Review stands in. When the tool goes live, add it as a band under the hero for AI visitors only
- The August hub doc's hook "97% of organizations using GenAI reported a security incident" has no source on file. Not used

### Decisions

- **H1 "AI Security and Cybersecurity Services"**: keyword first, as with the other hubs. The children own the narrower terms (AI red teaming, prompt injection, VAPT, NEPRA compliance); the hub owns the brand term "xSecurity" and the combined query, and links down to each child
- **Thin by design**, as the August doc asked, but with a short FAQ (5) and one proof section, because the hub is the page AI answer engines will cite for "what is xSecurity". The August doc said no FAQ; the 27 Oct conventions favor a short one. Each answer is unique to the hub, not copied from a child
- **NEPRA card** links to the NEPRA page only. NEPRA's own page keeps its phone and email contact (no form), per the NEPRA campaign rules. The hub form has an "OT and NEPRA compliance" option for visitors who use it
- **Proof** uses approved claims A7 (healthcare VAPT, 200+ domains, 25% high risk, PII exposure fixed; written as "a quarter" and "personal data") and A5 (30 MW wind IPP, written as "wind power producer" for readers who don't know "IPP"). A5 is still "pending confirmation the reference is permitted", but it is already live on the NEPRA page in the same anonymous form
- **Banking card** uses P-04 ("a leading banking institution"). "Leading" dropped as a vague superlative; "in Pakistan" inferred from the State Bank compliance outcome. [CONFIRM] it is a Pakistani bank. "Guided to PCI DSS and State Bank compliance" rewritten as "secured in line with"
- **No country count, no headcount** (blocked C2, C3)

### Open [CONFIRM] items

1. Final hub URL: `/xsecurity` (matches `/xcelerate`) or `/services/xsecurity`. Recommended: `/xsecurity`
2. P-04: confirm the bank is in Pakistan (inferred from "State Bank compliance")
3. A5: the account owner's confirmation that the anonymous wind IPP reference is permitted (open since August, already live on the NEPRA page)

## Next steps

- [ ] Sana: review
- [ ] Devs: build `/xsecurity`, point the xSecurity menu label at it, add it to the footer xSecurity column and `/llms.txt`
- [ ] Devs: add a "Back to xSecurity" link or breadcrumb on the three child pages
- [ ] Cybersecurity page: its own refresh (the live page still has 0% counters, a repeated technique ticker and an uncited "Market Intelligence" band). Not in the original list; suggest after Industries
- [ ] Next: Industries (9 → 6)
