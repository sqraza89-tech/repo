---
date: 2026-09-01
tags: [xloop, proof, evidence, public, release-1]
---

# Proof Library — public-safe

**Everything in this file is safe to use in public marketing, at the wording given, subject to the
noted conditions.** Anything sensitive, unapproved, incomplete or client-confidential is in
`internal_not_for_public_use.md` and must never be moved here without explicit approval.

**Evidence grades:** A = named client + measured outcome + approved · B = named + measured, not
approved · C = anonymised + described outcome · D = capability only · E = unsourced.

⚠️ **xLoop currently has no grade-A proof point.** Every case study is anonymised. This is the
single biggest constraint on marketing effectiveness, and closing it is the highest-return action
available.

---

## P-01 · Enterprise data migration to Snowflake
| Field | Value |
|---|---|
| Client | **Anonymised** — "a leading South African retailer" |
| Industry | Retail | **Geography** South Africa |
| Problem | Data manually pulled from SAP and disparate databases; delays caused inaccurate Power BI reporting and poor decisions |
| Intervention | Centralised data warehouse on Snowflake using medallion architecture; migration from traditional databases to a cloud lakehouse on Snowflake and AWS; end-to-end pipeline optimisation |
| Technology | Snowflake, AWS, Power BI, medallion architecture |
| Outcome | Real-time Power BI dashboards from a single source of truth |
| Measured result | None stated | **Evidence** C | **Source** Corporate Deck V10 slide 8 |
| Public use | ✅ Anonymised as written |

## P-02 · National immunisation platform at scale
| Field | Value |
|---|---|
| Client | **Anonymised** — "one of Pakistan's leading NGOs" |
| Industry | Healthcare / non-profit | **Geography** Pakistan |
| Problem | Scaling a digital health platform for frontline health workers in zero-connectivity regions, across multiple geographies |
| Intervention | Scaled the immunisation platform; optimised real-time analytics; scaled data infrastructure |
| Technology | Java, DevOps, database administration |
| Measured result | **Over a billion immunisation records** managed and secured; **4,000+ frontline health workers** supported |
| Evidence | C — strongest scale claim xLoop has | **Source** Corporate Deck V10 slide 16 |
| Public use | ✅ Anonymised |

## P-03 · Healthcare platform security assessment
| Field | Value |
|---|---|
| Client | **Anonymised** — "a Canadian healthcare platform" |
| Industry | Healthcare | **Geography** Canada |
| Problem | Infrastructure expanded to multiple IPs hosting 200+ domains; risk of information leakage and PII exposure |
| Intervention | Comprehensive VAPT across the full footprint; prioritised remediation report |
| Measured result | **200+ domains assessed; 25% of findings high-risk; PII exposure confirmed and remediated** |
| Evidence | C | **Source** Corporate Deck V10 slide 29; AI Deck |
| Public use | ✅ Anonymised |

## P-04 · Mobile banking application security
| Field | Value |
|---|---|
| Client | **Anonymised** — "a leading banking institution" |
| Industry | Banking | **Geography** not stated |
| Problem | Customer and administrator mobile apps processing sensitive financial and identity data; compliance and data-privacy exposure |
| Intervention | Reverse-engineering and API assessment; code obfuscation; API authentication and encryption; SAST/DAST integration; secure code review; penetration testing |
| Outcome | Guided to **PCI-DSS and State Bank compliance** |
| Evidence | C | **Source** Corporate Deck V10 slide 30 |
| Public use | ✅ Anonymised |

## P-05 · NEPRA IT/OT compliance audit
| Field | Value |
|---|---|
| Client | **Anonymised** — "a 30 MW wind IPP" |
| Industry | Power generation | **Geography** Pakistan |
| Problem | Statutory obligation under NEPRA IT/OT Regulations 2022 across corporate IT and plant OT |
| Intervention | Full IT and OT compliance audit across head office and two plant sites; governance and policy review; risk and vulnerability assessment; IT/OT segregation review |
| Technology assessed | SCADA, DCS, PLC, RTU, IED, HMI, industrial switching |
| Evidence | C | **Source** ACT Wind proposal + delivery |
| Public use | ⚠️ **Anonymised only, and pending confirmation the reference is permitted under the engagement terms.** Never name the client |

## P-06 · LLM investment assistant
| Field | Value |
|---|---|
| Client | **"A leading asset management firm in Pakistan"** — a related client has a live portfolio page (Alfalah Investments) |
| Industry | Financial services | **Geography** Pakistan |
| Problem | Information overload from 40+ page fund reports; slow research; unclear risk profiling |
| Intervention | LLM-powered investment assistant: natural-language risk profiling, personalised fund suggestions, real-time performance comparison, 24/7 conversational interface |
| Evidence | C | **Source** Corporate Deck V10 slide 10; live case study page |
| Public use | ✅ Already published |

## P-07 · RAG video-transcription search
| Field | Value |
|---|---|
| Client | **Anonymised** — "a Canadian healthcare platform" |
| Problem | Thousands of unprocessed video recordings; insights unreachable at scale |
| Intervention | Transcription engine into searchable text on Amazon S3; RAG over an LLM; natural-language chatbot; React dashboard |
| Technology | Python, FastAPI, React, Amazon S3, RAG, LLM |
| Measured result | Site claims **80% reduction in search time** and **100% archived data utilisation** — ⚠️ the second is consistent with the narrative; **the 80% figure is `EVIDENCE REQUIRED`** |
| Evidence | C (narrative) / E (the 80%) | **Source** live case study page |
| Public use | ✅ Narrative approved. ❌ The 80% figure until sourced |

## P-08 · Container depot modernisation
| Field | Value |
|---|---|
| Client | **Anonymised** — "a container depot" |
| Industry | Logistics & supply chain |
| Intervention | Cloud-native platform: 3D container inspection, automated repair job management, workforce scheduling, rule-based invoicing, dynamic capacity tracking; cross-platform mobile app with job assignment, container scanning and digital approvals |
| Outcome | Operational efficiency increased; data silos eliminated |
| Evidence | C — no measured figure | **Source** Corporate Deck V10 slide 15 |
| Public use | ✅ Anonymised |

## P-09 · Water utility data platform
| Field | Value |
|---|---|
| Client | **Anonymised** — "a water utility company" ⚠️ **do not name** |
| Industry | Government & utilities |
| Intervention | Root-cause analysis and performance tuning of PySpark, SQL and stored procedures; curated dataset delivery |
| Outcome | Improved data efficiency and low latency; reliable datasets for operational monitoring |
| Measured result | An internal card claims "**boost efficiency by 30%**" — `EVIDENCE REQUIRED` |
| Evidence | C (narrative) / E (the 30%) | **Source** Corporate Deck V10 slide 13 |
| Public use | ✅ Narrative. ❌ The 30% figure |

## P-10 · Legacy RPG to private cloud
| Field | Value |
|---|---|
| Client | **Anonymised** — "a financial services firm specialising in asset management" |
| Problem | Legacy on-premise infrastructure: limited scalability, high maintenance cost, security exposure |
| Intervention | Migrated RPG applications and data to a private cloud platform with minimal operational disruption |
| Evidence | C | **Source** Corporate Deck V10 slide 9 |
| Public use | ✅ Anonymised |

## P-11 · Cross-border financial wellness platform
| Field | Value |
|---|---|
| Client | **ABHI** — appears on the public logo wall |
| Industry | Financial services | **Geography** Pakistan, UAE, Bangladesh |
| Intervention | Cross-border mobile platform for earned-wage access, meeting multi-jurisdiction compliance requirements |
| Technology | React Native, Node.js |
| Measured result | **Scaled to 10,000+ users at 99.9% uptime** |
| Evidence | C — the strongest measured technical claim available | **Source** internal project register |
| Public use | ✅ ABHI is on the public logo wall. ⚠️ Confirm permission before making it a written case study |

## P-12 · Agri-fintech lending platform
| Field | Value |
|---|---|
| Client | **Beythak × Abhi** — both public; Beythak has a live portfolio page and a signed testimonial |
| Industry | Agri-fintech | **Geography** Pakistan |
| Intervention | Mobile-first collateral-free lending: digital onboarding and KYC, proprietary credit scoring, bank integration for approval/disbursement/repayment, crop advisory, marketplace |
| Outcome | Described as designed to improve access and repayment; **no measured results stated** |
| Evidence | C | **Source** case-study document; live portfolio page |
| Public use | ✅ Already published |

## P-13 · Client testimonials
| Client | Quote | Public use |
|---|---|---|
| **Cloud Titans** (John Waterhouse, named) | Core application modernisation and SIEM migration with compliance standardisation; "delivered complex projects on time and within budget" | ✅ |
| **Skillforte** | "Deep project understanding, timely delivery and professional approach have exceeded our expectations." | ✅ |
| **FitLynk** | Chose xLoop over other providers for "exceptional quality of final products & strong project management" | ✅ |
| **Beythak** | "Willingness to learn about our industry and adapt their approach" | ✅ |
| **Serefin** | "Instrumental in our digital transformation journey... a trusted and reliable partner" | ✅ |

**These are the closest thing xLoop has to grade-A proof.** They are named, attributed and
already public — and they are currently underused relative to the unsourced statistics.

## P-14 · Partnerships (publicly announced)
AWS, Microsoft, Snowflake, Databricks, Salesforce · TPL Trakker · Sidat Hyder Morshed Associates ·
RTW (AI in ERP for supply chains) · Itiner Digital · Optimaze (Europe) · Bridgers · Mari Energies
(training). **Evidence** B–C, all with live PR pages. **Public use** ✅

## P-15 · Capability evidence (not client outcomes)
| Item | Use |
|---|---|
| 11-stage multi-agent reference architecture with named production stack | ✅ — strongest technical credibility asset |
| ISO 27001 / ISO 42001 Lead Auditor certification, **individual level** | ✅ |
| Published clause-level NEPRA guidance with FAQ | ✅ |
| AI Security service set: red teaming, security audit, AI SOC, governance | ✅ |

---

## Proof gaps — ranked by commercial cost

| # | Gap | Cost |
|---|---|---|
| 1 | **No grade-A proof anywhere** | Every claim is one step weaker than a competitor's named case study |
| 2 | **No AI security case study published** | The best evidence xLoop has (the red-team findings) is invisible |
| 3 | **No measured outcome on any xLab product** that can be sourced | Products cannot be sold on results |
| 4 | **No named client for AI/GenAI delivery** | The pillar with the biggest market has the least proof |
| 5 | **No ROI figures anywhere** | ICP 1 requires ROI projections before buying |
| 6 | **No Microsoft Fabric evidence** | ICP 2 names it as required evidence; absent from the entire corpus |

**Recommended first action:** obtain client permission for **two** references — one AI security
(the red-team engagement) and one applied AI. Even anonymised-but-specific, these would do more
for marketing effectiveness than any campaign.
