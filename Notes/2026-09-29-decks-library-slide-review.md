---
date: 2026-09-29
tags: [xloop, iso-27001, decks, claims-review]
---

# Decks.pptx slide library: slide-by-slide claims review

Related: [[2026-09-29-iso-27001-stage1-marketing-submission]]

- Source: `Decks.pptx` on SharePoint (Omais), 110 slides, reviewed in Viewing mode in Chrome
- Verdicts: **OK** = matches confirmed facts / approved claims · **Fix** = outdated or unsourced · **Internal** = must not go external · **Check** = needs a person to confirm
- Speaker notes not reviewed (not visible in view mode)
- **Coverage:** 110 of 110 slides logged, no gaps or duplicates (checked by script against the status-bar count)
- **Find pass:** attempted, but not completed. In view mode, PowerPoint Online's Find stops at the first match (slide 3) and "Find Next" does not advance. It is not usable without edit mode, which was avoided on the shared file. The visual pass is the only full pass

## Summary

| Verdict | Slides |
|---|---|
| OK | 53 |
| Fix | 16 (incl. 2 mixed) |
| Check (needs a person to confirm) | 39 |
| Internal only | 2 |

### Must fix before the library link goes to the auditor
1. **Company-fact slides contradict the confirmed facts and the ISO submission:** slides **3, 51, 52, 72, 89**. They say 120+ employees/engineers, 7+ / 8 / 10+ countries, 75+ / 50+ solutions and 5 offices. Replace with 90 people (HR figure: includes consultants, excludes interns), 4 offices, and no country count until one is approved (gap G3)
2. **Confidential client names shown:** **IRD Global** + "Zindagi Mehfooz" (slide **77**). **SS&C** logo (slides **17, 48, 72**) has no naming permission. **ACT Wind** logo (slide **48**) conflicts with the NEPRA page, which anonymizes it
3. **"ISO 27001-aligned / ISO 27001 Aligned"** on slides **58 and 71**. Next to an ISO audit, this reads like a certification claim. Remove or reword
4. **Blocked xVision figures** (30% / 25% / 40%) on slides **9, 42, 69**. Slide 69 also claims "facial recognition… across 100+ branches"
5. **Snowflake case (slide 25)** still has the wording the CTO corrected ("manually fetched", "real-time Power BI"). **RPG case (slide 26)** shows an IBM logo, and IBM is unconfirmed
6. **Leadership slide 22:** Daniyal's title is out of date
7. **Cosmetic:** placeholder "Subtext" (73), overlapping text (59, 110), cut-off text (44), typos (9/42 "Persoanalized", 12 "Lanuage", 69 "insecurity", 76 "can no", 81 "Poision", 92 "Jango")

### Needs a person to confirm (Sales / Delivery)
- **Naming permission** for clients not on the website logo wall: Ooredoo, HTAL, Drydocks World, Harmony, AVS, MSHWAA, Travelx, Pipeline, Dragon Fly, Changes on the Fly
- **Unsourced client result figures** (about 15): After5 20%, Gnyan 50%, Govfinder 70%, Octostar 30%, Eatsy 23%/40%, Alfalah 30%, Serefin 40%/15%, Cloud Titans 35%, Dragon Fly 55%/25%, App Pilot HR "50,000+ documents", MetaHuman "nearly 100 languages"
- **Serefin location:** "Health Canada" (slide 74) vs "United Kingdom" (slide 97)
- **Screens with real-looking personal data:** slides 11 (CCTV stills of people), 13/39 (named bank), 37/61 (named person, bank transactions), 62/95 (photos of officials)
- **Shareholder slide 23** (GAEL, ACT Group, Akhtar Group): approved for external decks?
- **Unapproved case studies** (slides 29, 31, 32): confirm with delivery

## Next steps
- [ ] Omais: fix the "Must fix" slides, starting with 3, 51, 52, 72, 77, 89 and the ISO-aligned tags on 58/71
- [ ] Sales/Delivery: confirm client naming permissions and source each result figure, or remove it
- [ ] Only then share the library link with the audit team

## Log

| # | Section | Content | Verdict | Issue |
|---|---|---|---|---|
| 1 | Company Deck | Cover "Company Decks" | OK | |
| 2 | AI Capabilities Deck | Cover "Transforming Businesses with Advanced AI Solutions" | OK | |
| 3 | AI Capabilities Deck | xLoop At a Glance: 120+ employees, 7+ countries, 75+ solutions delivered, 10+ countries served; map (US HQ, Canada, UK, Poland, Pakistan, Qatar, UAE RHQ, South Africa); industries | **Fix** | 120+ vs HR figure of 90; 7+ / 10+ countries and 75+ solutions are blocked claims (C2–C4); Hungary missing from map |
| 4 | AI Capabilities Deck | AI Capabilities & Offerings; tech stack (PyTorch, TensorFlow, AWS, Azure, Google Cloud, NVIDIA, OpenAI, ElevenLabs, Unity, etc.) | OK | Tools listed are tools, not partnerships. Keep it that way |
| 5 | AI Capabilities Deck | AI Framework (use cases, data mgmt, tools, infrastructure) | OK | |
| 6 | AI Capabilities Deck | xLoop MetaHuman: "nearly 100 languages", 24/7 avatars | **Check** | "nearly 100 languages" unverified |
| 7 | AI Capabilities Deck | Intelligence behind MetaHuman: OpenAI, Whisper, ElevenLabs, Unity; "Companies deploying digital humans report a significant increase in engagement and retention" | **Check** | Industry claim with no source |
| 8 | AI Capabilities Deck | MetaHuman potential use cases | OK | Framed as potential |
| 9 | AI Capabilities Deck | xVision: 30% operational efficiency, 25% wait-time reduction, 40% fewer security incidents | **Fix** | Blocked claim C6, no source. Typo "Persoanalized" |
| 10 | AI Capabilities Deck | xVision bank-branch scene (aggression, suspicious activity, high-value customer ID) | OK | |
| 11 | AI Capabilities Deck | xVision dashboard + CCTV stills | **Check** | CCTV stills show identifiable people, possibly at a client site. Confirm it is demo footage or that consent exists |
| 12 | AI Capabilities Deck | HR App Pilot features | OK | Typo "Lanuage" |
| 13 | AI Capabilities Deck | HR App Pilot screens | **Check** | Screens show a named bank's product questions and a named user. Confirm the client approved use |
| 14 | AI Capabilities Deck | Chat Genie features | OK | |
| 15 | AI Capabilities Deck | Chat Genie screens | OK | |
| 16 | AI Capabilities Deck | Value chain ("internationally certified engineers") | OK | Same wording as website |
| 17 | AI Capabilities Deck | Client logo wall: adds Ooredoo, HTAL, Drydocks World; shows SS&C | **Check** | Ooredoo, HTAL, Drydocks World are not on the website logo wall; SS&C has no naming permission. Confirm permission for each |
| 18 | AI Capabilities Deck | Versatile Engagement Models | OK | |
| 19 | Corporate Deck | Cover "AI Consulting / Digital Engineering / Where Impactful AI Begins" | OK | Older positioning, still accurate |
| 20 | Corporate Deck | Digital Core Capabilities (xTend, xLab, xCelerate, xSecurity) | **Check** | "IT managed services" is not in the offering inventory |
| 21 | Corporate Deck | xTend: 4 service areas + tech stack | OK | "Disaster recovery management": confirm delivered |
| 22 | Corporate Deck | Leadership team | **Fix** | Daniyal Abbasi shown as Head of AI Solutions & Consulting (now Chief Operating Officer); check Sarosh Syed shows Chief Growth Officer; "Wasay" vs website "Wasey" |
| 23 | Corporate Deck | Shareholders: GAEL, ACT Group, Akhtar Group | **Internal / Check** | "Our Edge" board-deck content; confirm shareholder details are approved for external decks |
| 24 | Corporate Deck | Agentic Architecture & AI Workflows (11 stages; LangChain, LangGraph, AutoGen, CrewAI, OpenAI, Pinecone, FastAPI, Kubernetes, Anthropic, Chroma) | OK | Approved (A18) |
| 25 | Corporate Deck | Case: Data Strategy and Migration to Snowflake (South African retailer) | **Fix** | Says data was "manually fetched", "data delays" and "real-time Power BI". CTO corrected all three (A9): the problem was no unified view, and the result is not real-time |
| 26 | Corporate Deck | Case: Deploying RPG Applications to Private Cloud; IBM + RPG logos | **Fix** | IBM platform is unconfirmed; never show IBM. Descriptor should be "a financial services firm". Could add the approved COBOL-to-Java wording (A14) |
| 27 | Corporate Deck | Case: AI-Powered Funds Information Discovery (App Pilot) | OK | Approved (A12) |
| 28 | Corporate Deck | Case: Canadian healthcare platform, RAG over video recordings | OK | Approved (A13) |
| 29 | Corporate Deck | Case: Digitizing food ordering for "a leading financial institution" | **Check** | Not in approved claims list; confirm with delivery. Typo "Browse" capitalized |
| 30 | Corporate Deck | Case: Water utility data pipelines | OK | Known delivered work |
| 31 | Corporate Deck | Case: AI project-management tool for a software company (screen capture, time tracking) | **Check** | Not in approved claims list; confirm with delivery |
| 32 | Corporate Deck | Case: Container depot operations modernization | **Check** | Not in approved claims list; confirm with delivery |
| 33 | Corporate Deck | Case: Infrastructure modernization for a leading NGO (billion records, 4,000+ health workers) | OK | Approved (A10). Typo "NGO's" |
| 34 | Corporate Deck | Case: Power BI reporting for "one of our clients" | OK | Generic, no figures |
| 35 | Corporate Deck | App Engineering: After5 (Netherlands), "20% increase in customer engagement and user signups" | **Check** | After5 is on the logo wall, but the 20% figure has no recorded source |
| 36 | Corporate Deck | App Engineering: Travelx (AI travel insurance/claims app) | **Check** | Named client not on website logo wall; confirm naming permission |
| 37 | Corporate Deck | App Engineering: MSHWAA earned wage access; screen shows a person's name and bank transaction rows | **Check** | Confirm naming permission and that the screen uses dummy data (a real-looking name is visible) |
| 38 | xLab | Section cover "We create products for our customers, not customers for our products" | OK | |
| 39 | xLab | HR App Pilot (Odoo integrations); screen shows a named bank's product questions | **Check** | Same as slide 13 |
| 40 | xLab | xLoop MetaHuman ("nearly 100 languages") | **Check** | Same as slide 6 |
| 41 | xLab | xServe (Agentic Serve ordering screens) | OK | No figures. Confirm menu screens are not a client's branded material |
| 42 | xLab | xVision: 30% / 25% / 40% figures | **Fix** | Same as slide 9 (blocked C6). Typo "Persoanalized" |
| 43 | xSecurity | Section cover "end-to-end AI security services" | OK | |
| 44 | xSecurity | AI Security Services: training, AI security audit, AI red teaming | **Fix** | Minor: AI Security Audit text is cut off ("ensuring strong") |
| 45 | xSecurity | Case: VAPT for a Canadian healthcare platform, 200+ domains, 25% high-risk, PII exposure | OK | Approved (A7) |
| 46 | xSecurity | Case: Mobile app security for a leading banking platform, PCI-DSS and State Bank | OK | Approved (A8) |
| 47 | xSecurity | Value chain | OK | |
| 48 | xSecurity | Expanded client logo wall: adds HTAL, Drydocks World, Harmony, AVS, MSHWAA, Travelx, ACT Wind, HBL AM; shows SS&C | **Check / Fix** | **ACT Wind logo conflicts with the NEPRA page, which anonymizes it as "a 30 MW wind IPP"**. Harmony: no record on file. SS&C: no naming permission. HTAL, Drydocks World, AVS, Travelx, MSHWAA: confirm permission |
| 49 | xSecurity | Versatile Engagement Models (global talent, creative, teams, training) | OK | |
| 50 | Development Deck | Closing: sales@xloopdigital.com, www.xloopdigital.com | OK | Placed at start of Development Deck section. Check ordering |
| 51 | Development Deck | Company Overview: "Presence in 8 countries" then lists 9 (US, Canada, SA, Qatar, UK, UAE, Poland, Hungary, Pakistan) | **Fix** | Count contradicts its own list; country count is a blocked claim (C3) |
| 52 | Development Deck | Who We Are: "120+ engineers across 5 offices" | **Fix** | HR figure is 90 (incl. consultants, excl. interns); 4 offices on record |
| 53 | Development Deck | AI Engineering Capabilities (GPT-4 / Claude / Gemini, AWS/Azure/GCP, etc.) | OK | Tools, not partnerships |
| 54 | Development Deck | Agentic Architecture (steps 1–4) | OK | |
| 55 | Development Deck | Agentic Architecture (steps 5–8) | OK | |
| 56 | Development Deck | Agentic Architecture (steps 9–11) | OK | |
| 57 | Development Deck | Agentic architecture principles + stack | OK | Approved (A18) |
| 58 | Development Deck | What We Deliver: "Information Security & QA: **ISO 27001-aligned** security, penetration testing…" | **Check** | "ISO 27001-aligned" is not an approved claim. Next to an ISO audit it reads like a certification claim. Remove, or align with the approved wording (individual Lead Auditors) |
| 59 | Development Deck | App Engineering: Pipeline (fintech, Poland), real-time transactions | **Fix / Check** | Title text overlaps the body text (layout bug). Confirm naming permission for Pipeline |
| 60 | Development Deck | App Engineering: Gnyan.ai, "50% reduction in time to create tickets" | **Check** | Gnyan is on the logo wall; the 50% figure has no recorded source |
| 61 | Development Deck | App Engineering: MSHWAA (duplicate of 37) | **Check** | Same as slide 37 |
| 62 | Development Deck | App Engineering: Govfinder, "10,000 personnel", "reduced research time by 70%"; screen shows photos of real officials | **Check** | Govfinder is on the logo wall; the 70% figure has no recorded source |
| 63 | Development Deck | App Engineering: Travelx (duplicate of 36) | **Check** | Same as slide 36 |
| 64 | Development Deck | App Engineering: After5 20% (duplicate of 35) | **Check** | Same as slide 35 |
| 65 | Development Deck | App Engineering: Octostar (Italian cybersecurity firm), "reduced case analysis by up to 30%" | **Check** | On the logo wall; the 30% figure has no recorded source |
| 66 | Development Deck | App Engineering: Eatsy + Bank Alfalah logos, "23% increase in payment gateway growth", "40% reduction in staff contact" | **Check** | Both on the logo wall and Eatsy has a public portfolio page, but the 23% and 40% figures have no recorded source. Probably the same project as slide 29 ("a leading financial institution"), which is anonymized there but named here |
| 67 | Development Deck | App Engineering: Abhi (Pakistan, UAE, Bangladesh), 10,000+ users, 99.9% uptime | OK | Matches A11 (named here; Abhi is on the logo wall) |
| 68 | Development Deck | xLab Co-creation Studio: xServe drive-thru menu board | OK | No figures |
| 69 | Development Deck | xLab: xVision "Elevated Customer Experience in Branch Banking"; "facial recognition… across **100+ branches**"; 30% / 25% / 40% | **Fix** | 30/25/40 blocked (C6). "100+ branches" has no evidence. xVision is recorded as a POC. "Facial recognition" is sensitive to claim in an ISO/privacy context. Typo "insecurity" (should be "in security") |
| 70 | Development Deck | xLab: App Pilot HR, "RAG-powered assistant for **a major bank**… **50,000+ document** knowledge base" | **Check** | 50,000+ has no recorded source |
| 71 | Development Deck | How We Work: Discover → Evolve; tags "Secure SDLC", "**ISO 27001 Aligned**", "2-Week Prototype" | **Check** | Same issue as slide 58 |
| 72 | Development Deck | Clients & Partners: "**50+ solutions delivered in 10+ countries**"; logos include Ooredoo, SS&C, Dragonfly, FitLynk, Pipeline; Cloud Titans logo appears twice | **Fix** | 50+ and 10+ are blocked claims (C3/C4). SS&C has no naming permission. Ooredoo and Dragonfly: confirm permission. Duplicate logo |
| 73 | Resource Deck | Cover "Resource Deck / Subtext" | **Fix** | Placeholder "Subtext" left on the slide |
| 74 | Resource Deck | xTend case: Serefin Health Canada (Salesforce Service Cloud, Amazon Connect, Twilio) | OK | Serefin is a named client with a testimonial. Salesforce logo icon overlaps text (cosmetic) |
| 75 | Resource Deck | xTend case: Changes on the Fly, legacy single server moved to AWS | **Check** | Approved anonymized (A21) as "an ecommerce brand". Named here: confirm naming permission |
| 76 | Resource Deck | xTend case: Changes on the Fly, Power BI dashboards ("real time visibility") | **Check** | Same naming question as slide 75. Typo "can no make" |
| 77 | Resource Deck | xTend case: **IRD Global**, "Zindagi Mehfooz" immunization platform, 4,000+ workers, billion records | **Internal / Fix** | **IRD must never be named** (A25: public descriptor is "one of Pakistan's leading NGOs"). The platform name also identifies the client. Anonymize |
| 78 | AI Security | Cover "AI Security Solutions / Building Intelligent Systems for a Risk-Free Tomorrow" | **Check** | "Risk-Free" is an absolute claim; soften |
| 79 | AI Security | Risk Impacts of AI: 97% GenAI orgs reported incidents (ITPro), $4.88M breach cost, etc., with sources named | **Check** | Sources are named, but "97%" is the figure the homepage review said to trace to its original report. Add full citations |
| 80 | AI Security | Famous AI attacks: Tesla, Microsoft Tay, Meta LLaMA leak, SolarWinds, with sources | OK | Public incidents, sources cited. Using third-party logos in an attack context is a mild brand risk |
| 81 | AI Security | AI Attack Surface diagram | OK | Typos "Poision", "EXFil" |
| 82 | AI Security | Our Offerings: AI Architecture Review, AI Security Audit, AI Red Teaming, AI Monitoring, AI Security & Governance (as a service) | OK | Matches offering inventory. "AI security Audit" capitalization |
| 83 | AI Security | AI Security Considerations (6 areas) | OK | |
| 84 | AI Security | Adversarial Acts diagram (altering, query manipulation, stealing) | OK | |
| 85 | AI Security | Frameworks for AI Security Risks: NIST SP 800-53, ISO/IEC 23894, EU Ethics Guidelines, OECD, NIST AI RMF, MITRE ATLAS, SAIDL, OWASP | **Check** | Framed as industry frameworks, not xLoop compliance, which is fine. But "NIST / MITRE alignment" is a blocked claim (C11). Make sure presenters don't say "we're aligned to" |
| 86 | AI Security | Tools (ART, TextAttack, Garak, LLM Guard, etc.) | OK | Tools, not partnerships |
| 87 | AI Security | Target industries: Healthcare, Banking, Fintech, Textile, eCommerce | OK | |
| 88 | Use Case | Cover "AI Excellence Portfolio / Strategic AI for Sustainable Enterprise Growth" | OK | |
| 89 | Use Case | Company Introduction: 120+ employees, 7+ countries, 75+ solutions, 10+ countries served; "Partnering with clients from Fortune 500 companies" | **Fix** | Same as slide 3 (C2–C4 blocked, 120+ vs HR figure of 90). Fortune 500 claim: confirm which client |
| 90 | Use Case | Section cover "Transforming Financial Services & Fintech" | OK | |
| 91 | Use Case | Abhi Platform, 10,000+ users, 99.9% uptime | OK | Same as slide 67 (A11) |
| 92 | Use Case | Pipeline Fintech Platform (Poland), "ironclad security", "Fortified Security… trust and compliance" | **Check** | Naming permission as slide 59. "Ironclad" is an absolute security claim. Tech tag typo "Jango" (should be Django) |
| 93 | Use Case | App Pilot for Alfalah Investments: "30% increase in resolution rates" | **Check** | Named client with public portfolio page (A16). The 30% figure has no recorded source; the approved A12 wording has no number |
| 94 | Use Case | Section cover "Driving Efficiency in Government & Public Services" | OK | |
| 95 | Use Case | Gov Finder Platform (USA): 10,000+ officials, "reduced research time by 70%"; screens show photos of real officials | **Check** | Same as slide 62 |
| 96 | Use Case | Section cover "Enhancing Engagement in Mental Health & Wellness" | OK | |
| 97 | Use Case | Serefin's Conversational AI (UK): "40% increase in user engagement", "15% reduction in bounce rates" | **Check** | Named client (testimonial), but the 40% and 15% figures have no recorded source. Serefin is described as "Health Canada" on slide 74 and "United Kingdom" here. Confirm which |
| 98 | Use Case | Section cover "Pioneering AI & Platform Solutions" | OK | |
| 99 | Use Case | Gnyan.ai Prompt Engineering, "50% reduction in time to create tickets" | **Check** | Same as slide 60 |
| 100 | Use Case | Section cover "Advancing Investigative Intelligence & Cybersecurity Posture" | OK | |
| 101 | Use Case | Octostar's Timeline Tool (Italy), "estimated… up to 30%" | **Check** | Same as slide 65. At least worded as an estimate |
| 102 | Use Case | Cloud Titans (Poland) website, "35% rise in lead generation" | **Check** | Named client with a signed testimonial, but the 35% figure has no recorded source |
| 103 | Use Case | Section cover "Building Communities in Lifestyle & Social Networking" | OK | |
| 104 | Use Case | After 5 (Netherlands), "20% increase" | **Check** | Same as slide 35 |
| 105 | Use Case | Section cover "Driving Sustainability in Waste Management" | OK | |
| 106 | Use Case | Dragon Fly (Canada) website, "organic web traffic +55%", "direct inquiries +25%" | **Check** | Not on website logo wall (only in deck logo wall, slide 72). Confirm naming permission; 55% and 25% have no recorded source |
| 107 | Use Case | Section cover "Revolutionizing Food & Beverage" | OK | |
| 108 | Use Case | Eatsy's Revolution (Pakistan), "23% increase in payment gateway growth", "40% reduction in staff contact" | **Check** | Same as slide 66. Eatsy has a public portfolio page; the figures have no recorded source |
| 109 | Use Case | Client Endorsements: Skillforte, Beythak, Serefin, FitLynk, Cloud Titans | OK | Approved testimonials (A15). Two quotes use "…" cuts, so confirm the cuts don't change meaning against the signed document |
| 110 | Use Case | Closing: "Partner with Us to Disrupt Your Industry"; Karachi, USA, UAE addresses; sales@xloopdigital.com | **Fix** | Cosmetic: title renders with ghost duplicate text behind it. Qatar office omitted (fine if deliberate) |
