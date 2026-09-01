---
date: 2026-09-01
tags: [xloop, nepra, solution-map, release-1]
---

# NEPRA Solution Map

Regulation → obligation → xLoop offering → deliverable. Everything in the "offering" and
"deliverable" columns is `VERIFIED INTERNAL FACT` from the ACT Wind proposal scope and the live
service page, unless marked.

---

## 1. Coverage table

| Reg. | Obligation | xLoop offering | Deliverable | On the live page? |
|---|---|---|---|---|
| **4** | Security policy and governance | Governance and policy framework review; development of missing policies | Policy set, SOPs, governance structure | ✅ (service 3) |
| **5** | Security controls implementation | Control assessment; network security, access control, IT/OT segregation review | Control gap register, remediation roadmap | ⚠️ **Omitted from the flyer's four bundles** |
| **6** | Security risk and vulnerability assessment | IT & OT VAPT — controlled testing of the IT perimeter; non-intrusive OT exposure assessment | Risk register, vulnerability report | ✅ (service 2) |
| **7** | Data integrity and confidentiality | Data protection and integrity review | Findings and controls | ⚠️ **Omitted from the flyer's four bundles** |
| **8** | Authority-mandated audit support | **NEPRA Compliance Audit** — clause-by-clause assessment | Compliance audit report, Statement of Applicability, non-conformity register | ✅ (service 1) |
| **9** | Monitoring and incident response | IR mechanism development; monitoring design | Incident response plan, monitoring recommendations | Partially |
| **10** | Awareness and training | Cybersecurity awareness for corporate IT; targeted training for **SCADA operators** | Training programme, materials, attendance record | ✅ (service 4) |
| **11** | Regulatory reporting | Compliance reporting templates; quarterly reporting and 72-hour major-incident process | Reporting templates and process | ✅ |
| **12** | **PowerCERT coordination** — alignment with PowerCERT guidelines and advisories, coordination with National CERT | **Not currently in any xLoop material** | **To be defined** | ❌ **MISSING** |

### Two structural gaps

1. 🔴 **Regulation 12 is absent everywhere** — the live page, the flyer, the letters and the proposal all stop at 11. This is both a factual error and, more usefully, **an unclaimed differentiator**: no competitor publishes a Reg. 12 answer either, because most have not read that far.
2. 🟠 **The flyer's four service bundles omit Regulations 5 and 7**, which the audit actually covers. The coverage table on the page closes the gap for readers — but **sales must know the audit is broader than the four headline blocks**, or they will under-scope and under-price.

---

## 2. The four public service blocks

As published on `/services/nepra`:

| # | Service | What it is | Maps to |
|---|---|---|---|
| 1 | **NEPRA Compliance Audit** | Clause-by-clause assessment of IT and OT environments against every operative regulation | 4–12 (all) |
| 2 | **IT & OT VAPT Services** | Controlled penetration testing of the IT perimeter, plus a **non-intrusive** OT exposure assessment | 6 |
| 3 | **Security Policy Framework** | The approved policies, SOPs and governance structure the regulations require | 4 |
| 4 | **Cybersecurity Awareness & Training** | Awareness for corporate IT staff; targeted training for SCADA operators | 10 |

---

## 3. Methodology — the seven stages

`VERIFIED INTERNAL FACT` from the ACT Wind proposal. **Deliberately kept in the proposal and off
the landing page** (decision recorded 2026-08-25). Stated here so sales and marketing share one
version.

1. Opening meeting
2. Policy and documentation review
3. Interviews and process validation
4. Evidence verification and technical sampling
5. Configuration and log review
6. **Non-intrusive OT assessment**
7. Closing meeting and reporting

**Stage 6 is the commercial answer to the single most common objection.** It should appear in every
conversation even though it is not on the page.

---

## 4. Scope precedent — what a real engagement looks like

`VERIFIED INTERNAL FACT` from the ACT Wind proposal. **INTERNAL — do not publish.**

| Field | Value |
|---|---|
| Client | ACT Wind Power (30 MW) — **publicly referenced only as "a 30 MW wind IPP"** |
| Sites | Head office (Karachi) + two wind farm sites (Jhimpir, Thatta) |
| IT assets | 8–12 (servers, switches, firewalls, workstations, engineering laptops) |
| OT assets | 15–20 (SCADA servers, PLCs, RTUs, IEDs, HMIs, industrial switches) |
| Environments assessed | Corporate IT; SCADA, DCS, RTU, SAS, PCS, gateways, engineering workstations; communication links to **ISMO/NGC** |
| Duration published | "roughly three weeks" for a single-site audit — `EVIDENCE REQUIRED`, still unconfirmed by sales |
| Pricing precedent | PKR 350,000 for the pre-audit phase — **INTERNAL** |

**Sizing rule of thumb** (`SUPPORTED INFERENCE` from this single data point): a small renewables
SPV is roughly 10 IT + 20 OT assets across three locations. A DISCO or large IPP is an order of
magnitude larger. Do not quote the ACT Wind duration or price to a DISCO.

---

## 5. Standards positioning — handle with care

The ACT Wind **proposal** states alignment with **ISO 27001, NIST, IEC 62443 and MITRE ATT&CK**.

⚠️ **That alignment was explicitly NOT approved for the website** (decision recorded 2026-08-25),
and remains an open item.

**This is an internal inconsistency worth resolving:** the same claim is being made to clients in
proposals but withheld from the public page. Either it is substantiable — in which case publish
it, because it is a genuine differentiator in a market where competitors say "best practices" —
or it is not, in which case it should come out of the proposal too.

**Approved credential, both channels:** *"Certified ISO 27001 and ISO 42001 Lead Auditors"* —
individual level only.

---

## 6. Productisation opportunity

The market leader (`nepra.spsnet.com`) sells "NEPRA Compliance as a Service" at $1k/$3k per month.
xLoop currently sells a project. Three tiers worth evaluating:

| Tier | Contents | Buyer |
|---|---|---|
| **Readiness** — fixed price, fixed scope | Gap assessment against Regs 4–12, prioritised remediation list, no audit opinion | Small SPVs, and **any licensee if the Cat-1 question resolves badly** |
| **Compliance Audit** — project | Full clause-by-clause audit, SoA, non-conformity register, remediation roadmap | Large IPPs, DISCOs |
| **Compliance Retained** — annual | Quarterly reporting support, 72-hour incident readiness, annual reassessment, training refresh, PowerCERT advisory monitoring | Anyone post-audit |

**The Readiness tier is strategically important**: it is deliverable regardless of how the
Category-1 question resolves, and it protects the 87-company audience if the audit framing has to
change.
