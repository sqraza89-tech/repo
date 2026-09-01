---
date: 2026-09-01
tags: [xloop, nepra, vertical, market, release-1]
---

# NEPRA Market

**Why this is treated separately from cybersecurity:** NEPRA compliance is not a security purchase.
It is a statutory obligation with a named regulator, an enumerable population of obligated
organisations, an active enforcement mechanism, and an executive buyer who has no security
function to delegate to. Nothing else in xLoop's portfolio has that structure.

---

## 1. The regulation

| Field | Value | Class |
|---|---|---|
| Instrument | **NEPRA (Security of Information Technology and Operational Technology) Regulations, 2022** | `VERIFIED EXTERNAL FACT` |
| Made by | **SRO 1708(I)/2022** | `VERIFIED EXTERNAL FACT` — resolved 2026-08-31 from the source advisory letter |
| Regulations 1–3 | Title, commencement, definitions | `VERIFIED EXTERNAL FACT` |
| **Operative obligations** | **Regulations 4–12** | `VERIFIED EXTERNAL FACT` — ⚠️ **the live page says 4–11 and is wrong** |
| Reg. 4 | Security policy and governance | |
| Reg. 5 | Security controls implementation | |
| Reg. 6 | Security risk and vulnerability assessment | |
| Reg. 7 | Data integrity and confidentiality | |
| Reg. 8 | Authority-mandated audit support | **The commercial centre of gravity** |
| Reg. 9 | Monitoring and incident response | |
| Reg. 10 | Awareness and training | |
| Reg. 11 | Regulatory reporting | |
| **Reg. 12** | **PowerCERT coordination** — alignment with PowerCERT guidelines and threat advisories, coordination with National CERT | **Missing from all current xLoop material** |
| Incident reporting | Breaches reported to NEPRA **quarterly**; **major incidents within 72 hours of discovery** | `VERIFIED EXTERNAL FACT` — confirmed 2026-08-31 |

### The two live corrections required

1. 🔴 **Regulations 4–11 → 4–12 everywhere**, and add a PowerCERT row to the coverage table. The live page, the mailed letters and four internal deliverables all carry the wrong range.
2. 🔴 **Category-1 / PKCERT question — unresolved and blocking.** A competitor (Ebryx) publicly claims NEPRA licensees must use a Category-1 audit firm recognised by the National CERT. Checking `pkcert.gov.pk/registered-firms.asp`: **xLoop is not on that register in any category.** Only three firms hold OT Security CAT-I (Phitech Solutions, NECOP, Risk Associates). Two caveats recorded in the prior work log: the PKCERT page describes those firms as supporting "Federal Ministries, Divisions and Departments" and **does not mention NEPRA at all**; and the claim comes from a competitor who is themselves on the list. **This must be settled with NEPRA directly. 87 letters have already gone out selling a "NEPRA Compliance Audit".**

---

## 2. Market size and structure

`VERIFIED INTERNAL FACT` — from `NEPRA_Companies_CTO_CISO_CEO_Address v2.xlsx`, a 87-row researched register.

| Metric | Value |
|---|---|
| Obligated companies on the source list | **87** |
| Mailing addresses found | 79 |
| Companies with a confirmed named **CTO** | **3** (Quaid-e-Azam Thermal Power, HUBCO, LESCO) |
| Companies with a confirmed named **CISO** | **0** |
| Companies where a CEO was the most senior identifiable executive | 68 |
| Companies with no identifiable executive at all | 16 |

**Composition** (from the register): DISCOs (LESCO, GEPCO, HESCO, K-Electric), transmission and
system operation (NTDC/National Grid, ISMO, WAPDA), large IPPs (HUBCO and subsidiaries, Lalpir,
Atlas Power, Engro PowerGen Thar, Attock Generation), renewables SPVs (numerous wind and solar
project companies), and **captive/industrial generators** (Engro Fertilizers, Al Moiz Industries,
Indus Sugar Mills, Gul Ahmed, Nishat Chunian, Artistic Milliners group).

### Three market segments, three different sales

| Segment | Count (approx.) | Characteristics | Sales motion |
|---|---|---|---|
| **State-owned utilities & system operators** | ~12 | ISMO, NTDC, WAPDA, DISCOs. Largest estates, public procurement, longest cycles | Tender + relationship. Long |
| **Large IPPs and groups** | ~25 | HUBCO group, Engro, Atlas, Lalpir. Have IT functions, budget authority, real board pressure | **Best commercial fit.** Direct executive sale |
| **Small renewables SPVs & captive generators** | ~50 | Wind/solar project companies, textile and sugar mills. Often no IT staff, minimal public presence, 8 with no findable address | High volume, low value. Productise or partner |

**Commercial implication:** the 87 are not one market. Concentrating on the ~25 large IPPs and
groups gives the best ratio of deal value to sales effort, and they are the segment most likely to
have already received an ISMO reminder.

### Scope question — unresolved and commercially material
Many recipients are textile, cement and sugar mills with **captive** power plants. Whether captive
generation at an industrial site falls within licensee obligations is **not confirmed**. If it
does not, a meaningful share of the 87 are not addressable. `EVIDENCE REQUIRED`.

---

## 3. Enforcement — the demand driver

`VERIFIED INTERNAL FACT`, from the source advisory letter:

> **ISMO has begun issuing formal compliance-status reminders and conducting unannounced inspections.**

This is the strongest, most current urgency hook available and **it is not yet used in the live
page copy.** It is materially better than a generic non-compliance statistic because it is
happening now and this audience can verify it among themselves.

Enforcement pathway: NEPRA may direct a technical audit under Reg. 8 → licensee must support it →
non-conformities must be remediated. The commercial opportunity sits either side of that direction.

---

## 4. Competitive landscape

`VERIFIED EXTERNAL FACT` — from competitor research recorded in the prior work log.

| Competitor | Position | Strength | Weakness |
|---|---|---|---|
| **SPS** (`nepra.spsnet.com`) | "NEPRA Compliance as a Service" on a dedicated subdomain, productised at $1k/$3k per month | Productised, priced, dedicated subdomain | **No FAQ section at all** |
| **Catalyic Security** | Ranking explainer content; IT Security CAT-I | On the PKCERT register | Generic security firm framing |
| **Ebryx** | Actively claims the Category-1 requirement | On the register; strong technical brand | Incentive to overstate the Cat-1 claim |
| **INTECH Automation** | "NEPRA-Compliant OT Cybersecurity" | Genuine OT/industrial automation heritage | Automation vendor, not an audit firm |
| **Phitech Solutions, NECOP, Risk Associates** | Hold **OT Security CAT-I** | The only three with that credential | Little visible marketing |
| Supersecure, Cyberisk | Present in the space | — | — |

**An earlier internal note said there was "very little strong Pakistani competition". That was too
optimistic and has been corrected.** The competition is real.

**But the gap is real and precisely defined:** *none of them publish a clause-by-clause
Regulation 4–12 table, and the market leader's page has no FAQ at all.* Everyone sells the
service; **nobody has published the requirement.** That is the entire search and AI-answer strategy,
and it is defensible because it requires reading the regulation rather than buying ads.

---

## 5. Why this vertical matters disproportionately

| Factor | NEPRA | Everything else xLoop sells |
|---|---|---|
| Target list | **Finite and named (87)** | Undefined |
| Trigger | **Statutory + active enforcement** | Discretionary budget |
| Sales cycle | **1–3 months** | 3–9 months |
| Buyer | Reachable by post and phone | Multi-stakeholder |
| Competition | Real but shallow content | Crowded and well-funded |
| Content moat | **Reading the regulation** | Undifferentiated thought leadership |
| xLoop proof | **One delivered audit** | Mostly anonymised |
| AI-search opportunity | **High — an unanswered question** | Low |

## 6. Market risks

1. **The Category-1 question resolving badly.** Mitigations already identified: partner with a listed OT Security CAT-I firm and say so, or reposition from "audit" to readiness/gap assessment/policy/VAPT/training — all of which xLoop can deliver regardless. A third option worth weighing: **apply to the PKCERT register.** "CERT-recognised" would be the strongest differentiator available in this market.
2. **A compliance deadline passing and demand collapsing.** Mitigated by the recurring obligations — quarterly reporting, annual review, training — which make this a retainer rather than a one-off.
3. **Price compression from the productised competitor.** SPS at $1k–3k/month sets an anchor.
4. **Reputational risk if xLoop audits and the regulator disagrees with the finding.**
5. **Scope ambiguity on captive generators** shrinking the addressable list.
