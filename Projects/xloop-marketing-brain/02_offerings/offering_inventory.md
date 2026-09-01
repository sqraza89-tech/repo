---
date: 2026-09-01
tags: [xloop, offerings, inventory, evidence, release-1]
---

# Offering Inventory

Every offering found in the corpus or on the live site, classified per
`classification_framework.md`. Categories: CAP = capability, SOL = solution, PROD = product,
OFFER = commercial offer, PROVEN = proven implementation, EXP = experimental.

---

## Summary table

| # | Offering | Category | Maturity | Evidence | Public status | Pillar |
|---|---|---|---|---|---|---|
| 1 | NEPRA IT/OT Compliance | OFFER + PROVEN | M3 | C | PUBLIC — ANONYMISED | 2 |
| 2 | AI Security Audit | OFFER | M3 | C | PUBLIC — ANONYMISED | 2 |
| 3 | AI Red Teaming | OFFER | M3 | B | UNKNOWN | 2 |
| 4 | AI SOC / AI Monitoring | OFFER | M2–M3 | C | PUBLIC | 2 |
| 5 | AI Governance as a Service | OFFER | M2 | D | PUBLIC | 2 |
| 6 | Cyber Security (VAPT, AppSec, SOC) | CAP + PROVEN | M4 | C | PUBLIC — ANONYMISED | 2 (support) |
| 7 | AI Consulting & Strategy | OFFER | M4 | D | PUBLIC | 1 |
| 8 | AI Readiness Assessment | OFFER | M1–M2 | E | PUBLIC (CTA live) | 1 |
| 9 | Generative AI | CAP | M4 | C | PUBLIC | 1 |
| 10 | Large Language Models | CAP | M4 | C | PUBLIC | 1 |
| 11 | AI Agents & Autonomous Systems | CAP | M3 | D | PUBLIC | 1 |
| 12 | Machine Learning | CAP | M4 | C | PUBLIC | 1 |
| 13 | Computer Vision | CAP | M4 | C | PUBLIC | 1 |
| 14 | Predictive Analytics | CAP | M3 | D | PUBLIC | 1 |
| 15 | Conversational AI | CAP | M4 | C | PUBLIC | 1 |
| 16 | LLMOps / MLOps | CAP | M3 | D | PUBLIC | 1 |
| 17 | Digital Twin | CAP | M1 | **E** | PUBLIC | — |
| 18 | Data Analytics / Data Engineering | CAP + PROVEN | M4 | B/C | PUBLIC — ANONYMISED | 3 |
| 19 | Cloud & Hyperscaling | CAP + PROVEN | M4 | C | PUBLIC — ANONYMISED | 3 |
| 20 | Web & App Development | CAP + PROVEN | M5 | B/C | PUBLIC — ANONYMISED | 3 |
| 21 | Legacy System Modernization | CAP | M3 | C | **NOT YET LIVE** | 3 |
| 22 | xVision | PROD | M3 | **E** | PUBLIC | xLab |
| 23 | xServe | PROD | M3 | **E** | PUBLIC | xLab |
| 24 | HR App Pilot | PROD | M3 | C | PUBLIC | xLab |
| 25 | Chat Genie | PROD | M3 | C/E | PUBLIC | xLab |
| 26 | App Pilot (asset mgmt LLM assistant) | PROD | M3 | C | PUBLIC | xLab |
| 27 | Meta Human | PROD | M2–M3 | **E** | PUBLIC | xLab |
| 28 | xCrowdIQ | **EXP** | M1–M2 | **D** | PUBLIC (page live) | xLab |
| 29 | xVoltIQ / xVoltaware | **EXP / partner** | M1–M2 | **X** | PUBLIC — **REVIEW URGENTLY** | xLab |
| 30 | Design Studio (xLab) | CAP | M4 | D | PUBLIC | xLab |
| 31 | AI / IT Resource Augmentation | OFFER + PROVEN | M5 | B | PUBLIC — ANONYMISED | xTalent |
| 32 | xCelerate / AI Bootcamp | OFFER + PROVEN | M4 | B | PUBLIC | xCelerate |
| 33 | Graymatics | **partner/resold** | ? | **X** | **REVIEW** | — |
| 34 | Adosterr | **partner/resold** | ? | **X** | **REVIEW** | — |
| 35 | Digitrack | **partner/resold** | ? | **X** | **REVIEW** | — |
| 36 | Knowledge Bot / Knowledge Desk | PROD (MAK) | ? | D | **REVIEW** | — |
| 37 | Vortex AI | unclear | ? | **E** | **REVIEW** | — |

---

## Detailed records — the offerings that matter commercially

### 1. NEPRA IT/OT Compliance
- **Category:** COMMERCIAL OFFER with PROVEN IMPLEMENTATION
- **Business problem:** NEPRA licensees are under a statutory IT/OT security obligation (Security of Information Technology and Operational Technology Regulations 2022, SRO 1708(I)/2022). ISMO has begun issuing compliance-status reminders and conducting unannounced inspections.
- **Target customer:** NEPRA-licensed generation, transmission and distribution companies in Pakistan — 87 identified.
- **Buyer:** CEO or senior executive. Research on the 87 found **zero publicly identifiable CISOs and only three confirmed CTOs**. This is an executive sale, not a security sale.
- **Capabilities required:** OT/SCADA security assessment, IT VAPT, policy framework development, awareness and SCADA-operator training.
- **Maturity:** M3 — delivered once (30 MW wind IPP: head office plus two plant sites).
- **Evidence:** grade C. Anonymised reference approved; client name restricted.
- **Commercial readiness:** live page, live phone/email CTA, proposal template exists, pricing precedent exists (PKR 350,000 pre-audit phase, per the ACT Wind proposal — **INTERNAL**).
- **Strategic importance:** **Highest.** It is the only offering with a defined market, a named list, a live obligation and a delivery reference.
- **Search / AI-search potential:** **Very high.** No competitor publishes a clause-by-clause regulation table; `nepra.spsnet.com` has no FAQ section at all.
- **Evidence gaps — blocking:**
  - 🔴 **The live page says Regulations 4–11. The correct range is 4–12** (Reg. 12 = PowerCERT Coordination). Publicly wrong today.
  - 🔴 **Category-1 / PKCERT question unresolved** — whether the Reg. 8 audit must be performed by a CERT-recognised Category-1 firm. xLoop is not on that register. 87 letters have already gone out.
  - 🟠 Whether captive power plants at industrial sites fall within licensee obligations (many recipients are textile/cement/sugar mills).
  - 🟠 NIST / IEC 62443 / MITRE ATT&CK alignment drafted but **not approved** for publication.

### 3. AI Red Teaming
- **Category:** COMMERCIAL OFFER
- **Business problem:** models, prompts and agents deployed without adversarial testing.
- **Buyer:** CISO, Head of AI, Head of Risk.
- **Evidence:** grade **B** — the strongest technical proof in the corpus, and it is not published:
  - 87% success rate in controlled model-takeover scenarios against a production vision-based ML/CCTV system, simulating OWASP Top 10 for AI (model evasion, adversarial input injection), followed by model hardening and adversarial training.
  - Prompt-injection attempt detected and contained in a production LLM environment before data exfiltration.
  - Prompt-leakage and role-jailbreak paths closed on a customer-facing chatbot with 10,000+ active users.
- **Why it matters:** these are specific, technical, verifiable-sounding and hard to fake. They are worth more than every percentage on the homepage combined.
- **Evidence gap:** `EVIDENCE REQUIRED` — client permission for each, even anonymised. Source doc notes "Full case study documents will be shared later."

### 22. xVision
- **Category:** PRODUCT
- **Business problem:** physical sites (bank branches, retail floors, plants) generate CCTV nobody watches; operational problems are found after the fact.
- **Target customer:** banks, retail, manufacturing, healthcare facilities, government agencies.
- **Technology:** computer vision, CNNs, YOLO.
- **Maturity:** M3 — a POC with Alfalah is recorded internally; a Meezan demo video exists.
- **Evidence:** grade **E — two mutually exclusive stat sets.** Site says 99.7% detection / $50M recalls prevented. Decks say 30% operational efficiency / 25% wait-time reduction / 40% fewer security incidents. Neither cites a client, period or method.
- **Commercial readiness:** page live, deck exists, demo video exists. **But the proof layer is not publishable as-is.**
- **Strategic importance:** high — the board deck makes xVision the lead platform in its growth projections (Pakistan bank branches → Africa → South America).
- **Action:** resolve the statistics before any campaign. This is the product most likely to be asked "which client?" in a first meeting.

### 28. xCrowdIQ
- **Category:** **EXPERIMENTAL / EMERGING** — despite having a live product page.
- **What exists:** a detailed Qatar market analysis (TAM $500–600M, SAM $150–200M, SOM $7.5–20M ARR at 5–10%), a government-first GTM plan, a pricing model ($500k–2M annual SaaS), a competitive set (Axis, Hikvision/Dahua, NEC, IBM/Splunk), and an 18-month milestone plan.
- **What does not exist:** any delivery evidence. The page's "The Impact We've Created" section has no case studies behind it in the corpus.
- **Status check needed:** the plan projected an MoU by Q1 2026, commercial launch and $3–5M ARR by Q2 2026, and $8–12M ARR by Q3 2026. **It is now Q3 2026.** Actual status unknown from this machine.
- **Public status:** the market analysis is **INTERNAL — CONFIDENTIAL**. Named target venues (Lusail Stadium, Hamad International Airport, Doha Metro, Msheireb) and named target ministries must never appear in public material.

### 29. xVoltIQ / xVoltaware — ⚠️ REVIEW URGENTLY
- **Category:** appears to be **partner / white-label technology**, not xLoop IP.
- **What the internal doc says:** "patented AI-based energy disaggregation technology", sensors "standardized to IEC 63297", and under **"Impact We've Created"**: **BP Retail, Morgan Sindall, Electronic Arts**. Those are Voltaware's customers.
- **What the live page says:** correctly anonymised ("a major UK utility", "multinational retailers") — but still publishes **"15% reduction in residential energy waste"** and **"20% reduction in peak load"** as xLoop outcomes with **no attribution to the underlying technology partner**.
- **Evidence grade: X.**
- **Action:** establish what xLoop owns, what it resells, and what may be claimed. Until then, treat every xVoltIQ outcome claim as unpublishable. Apply the same check to Graymatics, Adosterr, Digitrack and Vortex AI.

### 31. AI / IT Resource Augmentation (xTalent)
- **Category:** COMMERCIAL OFFER with PROVEN IMPLEMENTATION
- **Business problem:** engineering roadmaps slipping; specialist AI/data hiring too slow.
- **Buyer:** CTO / VP Engineering / Head of Product.
- **Evidence:** grade B — multiple long-running embedded engagements are recorded internally.
- **Note against the brief:** this is listed as commercial priority #1 by the marketing owner. It is real revenue, but it is a **procurement motion, not a demand motion** — it converts relationships and referrals far more than inbound. See `commercial_architecture.md` §3.
- **Language:** the ICP research is explicit that "staff augmentation" is the wrong phrase. Use "specialist engineering capacity".

### 32. xCelerate / AI Bootcamp
- **Category:** COMMERCIAL OFFER with PROVEN IMPLEMENTATION
- **Evidence:** grade B — strong. Mari Energies cohorts I and II delivered; 1,198 applications from one campaign; named alumni testimonials; PR coverage; an inauguration ceremony.
- **Commercial truth:** this is the highest-*volume* marketing activity xLoop runs and the lowest-*value* in pipeline terms, because applicants are jobseekers, not buyers.
- **Its real commercial value is relationship access.** The Mari Energies programme is a route into a large energy enterprise — the same sector as NEPRA. **That is an account-development asset that is currently being measured as a marketing campaign.**
- **Recommendation:** measure separately from pipeline. Never report application counts as marketing performance.

---

## Offerings recommended for retirement or demotion

| Offering | Why | Recommendation |
|---|---|---|
| **Digital Twin** | One service page, one partner doc, zero delivery evidence | Demote from nav. Keep as a capability mention inside Pillar 1 until there is a project |
| **Meta Human** | Two unsourced statistics; absent from the entire 2026 regional marketing plan | Decide: invest or retire. Do not leave it as a half-supported product page |
| **Cyber Security (non-AI)** as a headline | Commodity; dilutes the AI Security position | Keep as delivery capability, stop leading with it |
| **Separate CV / ML / Predictive Analytics / LLM / GenAI service pages** | Technology-named pages nobody searches with buying intent | Consolidate under Pillar 1 with outcome-led titles; keep the URLs and redirect |
| **App Pilot vs HR App Pilot vs App Pilot (Alfalah)** | Three different things, one name | Rename. One name each |

---

## Cross-cutting evidence gaps

1. **No offering has a grade-A proof point** — that is, a named client with a measured outcome approved for public use. Every case study is anonymised. This is the single biggest constraint on marketing effectiveness.
2. **Eleven public statistics have no traceable source.**
3. **Four to five offerings may be partner technology presented as xLoop's.**
4. **No offering has a published price or a defined commercial scope** except NEPRA (internally).
5. **No offering has a documented win/loss record**, so there is no evidence of which ones actually convert.
