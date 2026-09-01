---
date: 2026-09-01
tags: [xloop, measurement, metrics, release-1]
---

# North Star Metrics

## 1. The north star

> **Qualified pipeline** — the value of opportunities generated from qualified conversations that
> marketing sourced or materially assisted.

**Current status: not measurable.** `VERIFIED INTERNAL FACT` — there is no CRM. Website form
submissions sit in a spreadsheet. GA4 is not joined to any lead record. There is no win/loss
history.

Stating this plainly matters more than proposing a dashboard. **Until the record layer exists,
every marketing number xLoop reports is an activity metric wearing a performance metric's clothes.**

## 2. The metric ladder

| Level | Metric | Definition | Measurable today? |
|---|---|---|---|
| **North star** | Qualified pipeline value | Σ value of opportunities marketing sourced or assisted | ❌ No CRM |
| **Primary 1** | Qualified leads | Leads passing all four gates, **confirmed by sales** | ❌ No handoff record |
| **Primary 2** | Qualified meetings | Discovery meetings held with a Gate-1 account | ❌ Not tracked |
| **Primary 3** | Opportunities | Proposals requested or issued | ❌ Not tracked |
| **Secondary** | Relevant traffic | Sessions from ICP-matching sources to pillar pages, **excluding careers/bootcamp** | ⚠️ Partially — needs segmentation |
| **Secondary** | Non-brand organic clicks | Search Console clicks excluding brand queries | ✅ **Yes — currently ~0** |
| **Secondary** | Target-account engagement | Named accounts engaging with content | ⚠️ Manual via LinkedIn |
| **Secondary** | AI-search citations | Content cited by AI answer engines | ⚠️ Partially — GPT referrals are already tracked |
| **Secondary** | Content-assisted conversions | Leads whose path included ≥1 content asset | ❌ No attribution |

## 3. The one number that already tells the truth

**Non-brand organic clicks.**

`VERIFIED INTERNAL FACT` — Search Console, period ending 2025-11-11: of roughly 232 total clicks,
about 227 came from brand queries (`xloop`, `xloop digital`, `x loop`, `xloopdigital`,
`xloop digital services`). **Non-brand commercial queries earned zero clicks**, despite thousands
of impressions.

This single metric captures the strategic problem exactly: xLoop is findable by people who already
know it, and invisible to people with a problem to solve. It requires no new tooling and it is
already being collected.

**Recommendation: make non-brand organic clicks the headline marketing metric until the CRM exists.**
It is honest, it is available today, and improving it requires exactly the work the strategy calls for.

## 4. Targets

Deliberately not proposed. Setting targets without a baseline or a record layer produces numbers
that get managed rather than achieved. **Targets should be set once (a) the CRM/tracking sheet
exists and (b) one full quarter of clean data is in it.**

What can be set now are **directional commitments**:

| Commitment | Rationale |
|---|---|
| Non-brand organic clicks must rise from ~0 | The clearest signal that positioning is landing |
| Brand-query dependency must fall as a share of total clicks | Currently ~98% |
| Every reported lead must have a named source and pillar | Makes attribution possible retrospectively |
| Careers and bootcamp traffic reported separately from buyer traffic | Three of the top five pages serve non-buyers |
| Zero unsourced statistics published | Governance, and a leading indicator of trustworthy reporting |

## 5. Metrics that must never be the headline

The brief is explicit that vanity metrics must never be the primary measure. Named here so the
rule is enforceable:

| Metric | Why it misleads |
|---|---|
| **Impressions** | The Q3 review celebrates "45.7K impressions in 3 months". Those impressions produced **zero non-brand clicks**. Impressions on queries nobody buys from are the definition of a vanity metric |
| Total website sessions | Three of the top five pages are careers and bootcamp |
| LinkedIn follower count | No demonstrated relationship to pipeline |
| Post likes and reactions | — |
| **xCelerate applications** | 1,198 from one campaign. These are jobseekers. Reporting them as marketing performance overstates results by an order of magnitude |
| Blog publication count | An output, not an outcome |
| Number of service pages | An output |
| Average Google position | Currently "page 9" — improving it on queries with no commercial intent changes nothing |

**None of these are worthless.** Impressions and followers are useful *diagnostics*. They are
simply not evidence of commercial performance, and must not be reported as such.

## 6. What the Q3 2026 review got right

Worth recording, because the self-diagnosis is accurate and this framework builds on it rather
than replacing it:

- *"High Direct Traffic — people find us by searching our name (brand recall is there, but attribution is weak)."* — corroborated exactly by Search Console.
- *"Content is geared towards education and awareness."* — corroborated by the zero-click non-brand queries.
- *"Marketing is often stuck in delivery rather than growth."* — a capacity constraint that should shape how ambitious any plan is.
- *"Every content piece must be aligned with a service to increase quality leads."* — the correct rule, adopted in the messaging hierarchy.
- *"Improve lead quality through a diagnostic funnel that will filter intent."* — the AI Readiness Assessment. **This is the right idea and it should be built.** It creates the first real intent signal xLoop would have.
