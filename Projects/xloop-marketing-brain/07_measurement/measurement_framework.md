---
date: 2026-09-01
tags: [xloop, measurement, framework, release-1]
---

# Measurement Framework

How marketing activity connects to commercial outcome, what xLoop can measure today, and what has
to be built.

---

## 1. Principles

1. **Every metric must connect to qualified pipeline** — directly or through a stated chain. A metric with no path to pipeline is a diagnostic, not a measure of performance.
2. **Measure the buyer, not the audience.** Careers, bootcamp and jobseeker traffic is real traffic and irrelevant traffic. Report it separately.
3. **Honest instrumentation status on every number.** Measured, estimated, or not measurable.
4. **No metric without an owner and a decision it informs.** If nobody would act differently on the number, do not report it.
5. **Leading indicators over lagging ones**, given a 3–9 month cycle for the largest ICP.
6. **Segment by pillar and by ICP.** An aggregate number across three pillars with three different buyers means nothing.

## 2. The measurement stack

| Layer | Question | Tools available | Gap |
|---|---|---|---|
| **Visibility** | Are we present where the buyer looks? | Search Console, LinkedIn, AI-referral tracking | Segment queries by intent bucket |
| **Traffic** | Do the right people arrive? | GA4 | Segment buyer vs recruitment |
| **Engagement** | Do they engage meaningfully? | GA4 | Define what "meaningful" is per pillar |
| **Intent** | Do they signal buying interest? | — | **The diagnostic tool does not exist** |
| **Lead** | Do we capture them? | Website form → spreadsheet | Structure and stage it |
| **Qualification** | Are they real? | — | **No sales handoff process** |
| **Pipeline** | Does it become revenue? | — | **No CRM** |

**The stack has two structural holes: intent capture and the record layer.** Everything else is
tuning.

## 3. What xLoop can measure today, with no new spend

| Metric | Tool | Effort |
|---|---|---|
| Non-brand organic clicks | Search Console | Query classification, ~1 hour/month |
| Commercial-intent query clicks | Search Console | Same |
| AI answer-engine referrals | GA4 referral report | Already being done — 54 GPT-referred sessions in a quarter |
| Pillar page sessions, excluding careers/bootcamp | GA4 segment | One-off setup |
| Page-level CTR from impressions | Search Console | Already available |
| NEPRA page traffic and inbound contacts | GA4 + inbox + phone log | Manual |
| NEPRA letter reply rate | Inbox | Manual |
| Inbound contacts by pillar | Form log | Add one field |
| Content-to-pillar mapping compliance | Content log | Manual, but it enforces the rule |
| Technical site health | Screaming Frog (free) | Already owned |

**That is a genuine measurement programme, buildable this quarter, requiring no purchase.**

## 4. What has to be built

| # | Build | Effort | Unblocks |
|---|---|---|---|
| 1 | **Lead record with stages** — a shared sheet is enough to start | Low | Everything right of "Intent" |
| 2 | **AI Readiness Assessment** | Medium | Intent capture; ICP-1 entry offer; the diagnostic funnel marketing already proposed |
| 3 | **UTM convention** | Low | Attribution |
| 4 | **"What problem are you solving?" form field** | Very low | Qualification Gate 2 |
| 5 | **Weekly marketing/sales handoff review** | Low (10 min) | Qualified-lead confirmation |
| 6 | Query intent classification | Low | The truest available performance signal |
| 7 | Keyword volume tool | Budget | Search prioritisation currently rests on Google Trends relative interest only |
| 8 | CRM | Budget + process | Full pipeline attribution |

**Items 1, 3, 4 and 5 cost nothing but discipline and can be done this month.** They are the
difference between a marketing function that can prove contribution and one that cannot.

## 5. Attribution model — deliberately simple

Multi-touch attribution is not appropriate at this volume; it would create false precision.

| Model | Use |
|---|---|
| **First-touch** | How did they discover xLoop? Informs channel investment |
| **Last-touch** | What converted them? Informs offer and CTA design |
| **Assisted** | Did content play a part? A yes/no flag on the lead record |

Three fields on the lead record — `first_source`, `last_source`, `content_assisted (Y/N)` — deliver
most of the value of a full attribution system at a fraction of the cost.

## 6. Reporting template

Every marketing report should carry these five sections, in this order:

1. **Qualified pipeline** — value, count, by pillar. *(State "not yet measurable" until it is. Do not substitute another number.)*
2. **Leading indicators** — inbound contacts, scoping calls, NEPRA replies, assessment completions, non-brand commercial clicks.
3. **Funnel health** — where leakage is occurring, with the specific page or step.
4. **Diagnostics** — traffic, impressions, reach, followers. **Clearly labelled as diagnostics.**
5. **Decisions requested** — what leadership needs to decide for marketing to progress.

Section 5 is the one most often missing, and it is the one that makes the report useful. Every
report should name the blocked decisions — starting with the twelve in
`01_positioning/positioning_conflicts.md` §F.
