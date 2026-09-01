---
date: 2026-09-01
tags: [xloop, icp, services, release-1]
---

# ICP by Service

Which buyer buys which offering, what they need to see, and where the evidence gap is.
Use this to brief any content or campaign: it prevents the most common failure mode —
writing pillar-1 content for a pillar-3 buyer.

---

## Pillar 1 — Make AI work

| Offering | Primary ICP | Secondary | Entry offer | Evidence they need | Gap |
|---|---|---|---|---|---|
| AI Consulting & Strategy | 1 Sponsor | 2 Data | AI Readiness Assessment | Roadmap, ROI projection, industry examples, governance framework | **All four missing publicly** |
| Generative AI | 1 Sponsor | 5 Builder | Use-case workshop | Named deployment with measured outcome | No grade-A proof |
| Large Language Models | 5 Builder | 1 Sponsor | Technical scoping | Architecture, stack, RAG track record | Canadian health RAG case exists but is anonymised |
| AI Agents & Autonomous Systems | 1 Sponsor | 5 Builder | Agentic readiness review | Reference architecture + a production agent | **Architecture is strong; no production reference** |
| Machine Learning | 2 Data | 5 Builder | Model/data assessment | Model lifecycle, MLOps | Partial |
| Computer Vision | LoB owner | 1 Sponsor | xVision pilot | Deployment + measured outcome | **Two conflicting stat sets** |
| Predictive Analytics | 2 Data | LoB owner | Data assessment | Forecast accuracy evidence | None found |
| Conversational AI | LoB owner | 1 Sponsor | Chat Genie / App Pilot pilot | Deployment + adoption metrics | Anonymised only |
| LLMOps / MLOps | 5 Builder | 2 Data | Platform review | Pipeline and monitoring evidence | Content exists, proof does not |

**Pattern:** Pillar 1 is where demand is largest and proof is thinnest. Content here should lead
with *method* (how xLoop prevents the stall) rather than *outcome* (which cannot yet be evidenced).

---

## Pillar 2 — Make AI safe

| Offering | Primary ICP | Secondary | Entry offer | Evidence they need | Gap |
|---|---|---|---|---|---|
| AI Security Audit | 3 Security | 1 Sponsor | Assessment | Findings, methodology, credentials | Findings exist, unpublished |
| AI Red Teaming | 3 Security | 5 Builder | Scoped engagement | Attack classes tested, success rates, remediation | **Strongest evidence in the corpus — publish it (with permission)** |
| AI SOC / Monitoring | 3 Security | — | Monitoring pilot | Detection examples | One prompt-injection detection example |
| AI Governance as a Service | 3 Security | 1 Sponsor | Governance workshop | Framework, standards alignment | Framework not published |
| **NEPRA IT/OT Compliance** | **4 Compliance** | 3 Security | **Scoping call** | Sector precedent, non-intrusiveness, duration, credentials | **All present — the only complete offer xLoop has** |
| Cyber Security (VAPT/AppSec/SOC) | 3 Security | 5 Builder | Assessment | Track record | Healthcare 200+ domain VAPT, banking mobile app — both anonymised |

**Pattern:** Pillar 2 is where proof is strongest and publication is weakest. The bottleneck is
permission, not capability. **Obtaining client permission for two AI-security references is
probably the single highest-return marketing action available.**

---

## Pillar 3 — Make AI possible

| Offering | Primary ICP | Secondary | Entry offer | Evidence they need | Gap |
|---|---|---|---|---|---|
| Data Analytics / Engineering | 2 Data | 1 Sponsor | Architecture review | Platform examples, governance, Fabric | **Microsoft Fabric named as required evidence, absent from the entire corpus** |
| Cloud & Hyperscaling | 2 Data | 5 Builder | Migration assessment | Migration track record | Strong: Snowflake/AWS lakehouse, RPG→private cloud, AWS ecommerce migration |
| Web & App Development | 5 Builder | LoB owner | Scoping | Delivery velocity, uptime | Strong: 10,000+ users at 99.9% uptime |
| Legacy System Modernization | 2 Data | 1 Sponsor | Legacy assessment | Phased migration approach | **Page not yet built** — the pillar brief flags it must exist before it is referenced |

**Pattern:** the most proof, the least differentiation. Its job is to make Pillar 1 believable and
to convert ICP 2, not to win on its own merits.

**Quick win, already identified internally:** the Web & App Development page ranks at position 3.2
with 2,597 impressions but only 19 clicks (0.7% CTR). The ranking work is done; the title and meta
are not converting it. `VERIFIED INTERNAL FACT`, from the pillar brief.

---

## xLab products

| Product | Primary ICP | Buyer's actual job title | Gap |
|---|---|---|---|
| xVision | LoB — retail/branch operations | Head of Branch Ops, Head of Retail Ops, Plant Manager | Conflicting statistics |
| xServe | LoB — QSR operations | Operations Director | Unsourced 45%/78% |
| HR App Pilot | LoB — HR | CHRO, Head of HR Ops | No published outcomes |
| Chat Genie | LoB — customer service / legal ops | Head of CX, Head of Legal Ops | Unsourced figures |
| App Pilot (asset mgmt) | LoB — investment/wealth | Head of Distribution, Head of Digital | Anonymised |
| Meta Human | Marketing / CX | CMO, Head of Digital | Unsourced; absent from 2026 plan |
| xCrowdIQ | Government / critical infrastructure | Director General, Head of Ops | **Experimental** |
| xVoltIQ | Utilities / energy retail | Head of Customer, Head of Metering | **Ownership unresolved** |

**Important distinction:** xLab products are **not** bought by ICPs 1–3. They are bought by
line-of-business owners with a named operational problem. That is a fifth buying motion, and
marketing them through the same content as AI consulting will not reach the buyer.

---

## xTalent — resource augmentation

Sole ICP: **5 Product & Platform Builder.**
Entry offer: team scoping call.
Evidence needed: delivery velocity, technical depth, integration, architecture experience.
Channel reality: referral and network, not content. See `buyer_personas.md` §5.

---

## Content allocation implied by this map

If content effort followed differentiation and readiness rather than habit:

| Pillar / line | Suggested share | Rationale |
|---|---|---|
| Pillar 2 (AI security + NEPRA) | **40%** | Highest differentiation, best proof, shortest cycle, an ownable AI-search category |
| Pillar 1 (Applied AI) | 25% | Biggest market, weakest proof — lead with method |
| Pillar 3 (Foundation) | 20% | Best proof, converts ICP 2, rescues four weak pages |
| xLab products | 10% | LoB buyers, different channel, needs proof first |
| xTalent | 5% | Confirmation content only |

Compare with today: the blog inventory is dominated by broad AI thought leadership
(Pillar 1 and general), with AI security a minority and NEPRA a single page. **The allocation is
close to inverted relative to where xLoop can actually win.**
