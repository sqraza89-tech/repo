---
date: 2026-09-01
tags: [xloop, icp, qualification, measurement, release-1]
---

# Qualification Framework

The brief defines a qualified lead as a prospect who has a relevant and credible business problem,
fits the target profile, has a problem xLoop can plausibly solve, shows sufficient intent, and
reaches a meaningful conversation with sales.

That definition is directionally right but **not measurable as written** — "credible",
"plausibly" and "meaningful" cannot be scored consistently by a human, let alone by a workflow.
What follows makes it measurable without changing its intent.

---

## 1. The four gates

A lead is **Qualified (MQL→SQL)** only when all four gates pass. Any gate failing means the lead
is Nurture or Disqualified, never Qualified.

### Gate 1 — FIT (who they are)
| Test | Pass condition |
|---|---|
| ICP match | Maps to one of ICP 1–5 |
| Size | Meets the ICP's employee/revenue floor |
| Geography | In a Priority or Emerging market (see `geographic_strategy.md`) |
| Industry | Priority 1–3 industry, or a named exception |
| No disqualifier | See `disqualifiers.md` |

### Gate 2 — PROBLEM (what they need)
| Test | Pass condition |
|---|---|
| Named problem | The prospect has articulated a specific business problem, not a technology interest |
| xLoop capability | The problem maps to an offering at maturity **M3 or above** in the inventory |
| Not a pure price shop | Not exclusively a lowest-cost rate-card request |

**The M3 rule matters.** Qualifying a lead against an M1 capability (e.g. Digital Twin) creates a
deal sales cannot deliver and a reference marketing cannot use.

### Gate 3 — INTENT (how ready they are)
Score 0–10; **≥4 required.**

| Signal | Points |
|---|---|
| Requested a scoping call or demo | 4 |
| Submitted a form on a service or product page | 3 |
| Completed the AI Readiness Assessment | 4 |
| Downloaded a gated asset | 2 |
| Inbound reply to NEPRA letter / outbound | 4 |
| 3+ page views across one pillar in a session | 2 |
| Returned within 14 days | 2 |
| Named a timeframe or budget unprompted | 3 |
| Event or webinar attendance | 1 |
| Blog visit only, single session | 0 |

### Gate 4 — ACCESS (can it progress)
| Test | Pass condition |
|---|---|
| Contactable | Verified business email or phone |
| Role relevance | Buyer, influencer, or a credible route to one |
| Conversation happened or is booked | A real two-way exchange, not a form submission |

---

## 2. Lead stages

| Stage | Definition | Owner | Measurable |
|---|---|---|---|
| **Visitor** | Anonymous session | Marketing | GA4 |
| **Known contact** | Identified via form, download or reply | Marketing | Form log |
| **MQL** | Gates 1 + 2 + intent ≥ 4 | Marketing | Scored |
| **SQL / Qualified lead** | All four gates. **A real conversation has happened.** | Marketing → Sales | Sales confirms |
| **Qualified meeting** | Scheduled discovery meeting held with a Gate-1-passing account | Sales | Calendar |
| **Opportunity** | Scope discussed and a proposal requested or issued | Sales | Proposal log |
| **Won** | Signed | Sales | Contract |

**The critical handoff rule:** an MQL becomes an SQL only when **sales confirms** it, not when
marketing scores it. Without that, the score inflates and the metric stops meaning anything.

---

## 3. Applying the framework to what xLoop has today

`VERIFIED INTERNAL FACT` — there is **no CRM**. Website form submissions live in a single Excel
file. Search Console shows non-brand queries earning **zero clicks**. Direct traffic dominates.

**Consequence: xLoop cannot currently measure its own north-star metric.** Not because the
definition is wrong, but because there is no system that records a lead through to a meeting.

**Minimum viable instrumentation** — the smallest thing that makes this framework real, and the
first thing Release 2 should build:

1. One shared sheet or lightweight CRM with these columns: `date · source · pillar · ICP · gates passed · intent score · stage · owner · next action · outcome`.
2. A UTM convention on every campaign link and every LinkedIn post that drives to site.
3. A single field on every form: **"What problem are you trying to solve?"** — this alone does most of Gate 2's work and costs one input.
4. A weekly ten-minute marketing/sales review to confirm or reject each MQL.

That is achievable inside Teams/Excel without buying anything, and it turns the north star from
aspiration into measurement.

---

## 4. Special case — NEPRA (ICP 4)

The generic framework over-qualifies here. A NEPRA licensee who replies to a letter is already
Gate 1 and Gate 2 by definition: they are on the regulated list and the obligation is statutory.

**NEPRA qualification is simpler and stricter:**

| Gate | NEPRA test |
|---|---|
| Fit | Is the organisation a NEPRA licensee, or a captive generator within scope? (**scope question unresolved — see conflicts**) |
| Problem | Have they had an ISMO reminder, an inspection, a NEPRA direction, or an internal deadline? |
| Intent | Have they asked about scope, duration or cost? |
| Access | Is the conversation with someone who can authorise an audit? |

**One additional blocking gate applies only to NEPRA:**
> **Can xLoop lawfully and credibly perform the Regulation 8 audit for this licensee?**
> The Category-1 / PKCERT question is unresolved. Until it is, every NEPRA opportunity carries a
> delivery risk that qualification must record rather than ignore.

---

## 5. What this framework deliberately does not do

- **It does not score by job title.** Consistent with the ICP research.
- **It does not treat downloads as qualification.** A lead magnet download is intent 2, not a lead.
- **It does not count xCelerate applications.** They are recruitment volume, not pipeline.
- **It does not let marketing self-certify SQLs.**
