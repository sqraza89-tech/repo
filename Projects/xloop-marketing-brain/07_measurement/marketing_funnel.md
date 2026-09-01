---
date: 2026-09-01
tags: [xloop, measurement, funnel, release-1]
---

# Marketing Funnel

The brief's chain — Visibility → Relevant traffic → Engagement → Intent → Lead → Qualified lead →
Meeting → Opportunity → Revenue — mapped to what xLoop can actually observe today.

---

## 1. The funnel, with honest instrumentation status

| Stage | Definition | Measured by | Status today |
|---|---|---|---|
| **Visibility** | xLoop appears where the buyer is looking | Search Console impressions; AI-answer citations; LinkedIn reach | ⚠️ Present but **misdirected** — impressions on non-commercial queries |
| **Relevant traffic** | ICP-matching visitors reach pillar/service pages | GA4 segmented by page group, excluding careers/bootcamp | ⚠️ Available, **not segmented** |
| **Engagement** | Multiple pages, return visits, meaningful dwell | GA4 | ⚠️ Available, unused |
| **Intent** | A signal of buying interest | Intent score (`qualification_framework.md`) | ❌ **No scoring exists** |
| **Lead** | Identified contact | Website form → spreadsheet | ⚠️ Captured, not structured |
| **Qualified lead** | All four gates, **sales-confirmed** | — | ❌ No handoff process |
| **Meeting** | Discovery meeting held | Calendar / Outlook | ❌ Not tracked as a marketing outcome |
| **Opportunity** | Proposal requested or issued | Proposal documents | ❌ Not linked to source |
| **Revenue** | Signed | Contracts | ❌ Not linked to marketing |

**The funnel breaks at "Intent".** Everything left of it is observable; everything right of it is
invisible. That single break is why marketing cannot currently demonstrate commercial contribution.

## 2. The three real entry paths

Marketing should stop modelling one generic funnel and model these three, because they behave
completely differently.

### Path A — Regulated outbound (NEPRA)
```
Advisory letter (87) → landing page → phone or email → scoping call → proposal → audit
```
- **Shortest path xLoop has.** No form, no nurture, no scoring.
- Uniquely attributable: 87 letters point at one page, so traffic to `/services/nepra` is very likely a recipient.
- **Measure:** letters sent → page visits → inbound contacts → scoping calls → proposals → wins.
- This path can be measured **today**, with no new tooling.

### Path B — Search and content (Pillars 1–3)
```
Search or AI answer → blog or service page → pillar page → assessment or contact → lead
```
- Currently broken at step one: non-brand queries earn zero clicks.
- **Measure:** non-brand clicks → pillar page sessions → assessment starts → contacts.
- Fixing this is the medium-term work.

### Path C — Relationship and referral (xTalent, large accounts)
```
Network, event, partner or alumni relationship → conversation → scoping → proposal
```
- **Content does not generate this path; it confirms it.** A prospect who has heard of xLoop checks the website before the meeting.
- **Measure:** meetings sourced by relationship, and whether the prospect engaged with content beforehand.
- **Implication:** the website's job for Path C is *credibility*, not conversion. That is an argument for fixing the proof layer ahead of adding more content.

## 3. Conversion points that need to exist

| Point | Status | Priority |
|---|---|---|
| **AI Readiness Assessment** | CTA is live; the tool is **not confirmed built** | **1** — creates the first real intent signal |
| "What problem are you trying to solve?" on every form | Missing | **2** — one field, does most of qualification Gate 2 |
| UTM convention on every outbound link | Missing | **3** — makes attribution possible retrospectively |
| Pillar pages | 2 of 3 exist (`/ai-consultancy`, `/digital-engineering`); the Digital Transformation pillar is drafted, not shipped | 4 |
| Gated assets tied to pillars | Lead magnets exist but are not mapped to pillars or offers | 5 |
| A tracked lead sheet with stages | Missing | **1 (equal)** |

## 4. Leakage — where value is currently lost

| Leak | Evidence | Fix |
|---|---|---|
| **Impressions not converting to clicks** | Web & App Development ranks 3.2 with 2,597 impressions and 19 clicks (0.7% CTR) | Title/meta rewrite. **Already identified internally as "the single biggest quick win"** |
| **Non-brand queries earning zero clicks** | Search Console | Content aligned to commercial intent, not research questions |
| **Content not aligned to a service** | Q3 review states it | Every piece maps to one pillar and one offer |
| **No intent capture** | No assessment tool | Build the diagnostic |
| **No lead-to-sales handoff** | No CRM | A shared sheet, this quarter |
| **Buyer traffic mixed with recruitment traffic** | GA4 top pages | Segment reporting |
| **Direct traffic dominating with no attribution** | Q3 review | UTMs, and internal linking |

## 5. What to fix first

If only three things happen this quarter, they should be:

1. **A tracked lead record with stages.** Nothing else in this framework works without it. A shared sheet inside Teams is enough to start.
2. **The Web & App Development CTR fix.** Free visibility already earned, currently wasted.
3. **The AI Readiness Assessment.** It is the only mechanism that converts anonymous traffic into a scored, self-identified intent signal — and marketing has already proposed it.

None of these require budget. All three are prerequisites for the Growth Engine.
