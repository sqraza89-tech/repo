---
date: 2026-09-01
tags: [xloop, icp, signals, release-1]
---

# Buying Signals

A **trigger** is an event in the account's world. A **signal** is behaviour xLoop can observe.
Triggers create need; signals reveal it.

Specification only. Nothing here is to be built in Release 1.

---

## 1. First-party signals — observable with what xLoop has today

Available now via GA4, Search Console, LinkedIn analytics and the website form log.

| Signal | Strength | Observable in |
|---|---|---|
| Scoping call or demo request | **Very high** | Form log |
| AI Readiness Assessment completed | **Very high** | Assessment tool (**not yet built**) |
| Direct reply to a NEPRA letter | **Very high** | Email |
| Pricing or scope question via email/phone | **Very high** | Inbox, phone log |
| Repeat visit within 14 days | High | GA4 |
| 3+ pages within one pillar in a session | High | GA4 |
| Service page → case study → contact path | High | GA4 path exploration |
| Gated asset download | Medium | Form log |
| Long dwell on a single service page (>2 min) | Medium | GA4 |
| LinkedIn company page follow from a target account | Medium | LinkedIn |
| Repeat engagement with pillar-specific posts | Medium | LinkedIn |
| Blog visit, single session, no further action | **Low — not a signal** | GA4 |

**Reality check.** `VERIFIED INTERNAL FACT` — GA4 shows the top pages are `/`, `/careers/jobs`,
`/bootcamp/artificial-intelligence`, `/careers`, `/contactus`. Three of the top five serve
non-buyers. Any signal model built on undifferentiated traffic will be measuring recruitment.

## 2. Search signals — what the site currently earns

`VERIFIED INTERNAL FACT` — Search Console, period ending 2025-11-11:

| Query type | Clicks | Impressions | Read |
|---|---|---|---|
| Brand (`xloop`, `xloop digital`, `x loop`, `xloopdigital`) | **~227 of ~232 total** | ~1,254 | Brand recall exists |
| Non-brand commercial | **0** | thousands | **The positioning is not being found** |
| Research/long-tail (`agent hospital china`, `cio decision framework e-clinical`) | 0 | high | Content ranks for questions nobody buys from |
| Brand confusion (`xloop loan app`, `xloop loans`) | 0 | ~26 | Different entity |

Two conclusions, both important:

1. **Brand demand is being captured well** — position 1.16 for `xloop digital`, 16% CTR on `xloop`. Nothing is broken technically.
2. **Commercial demand is not being captured at all.** The blog earns impressions for research questions and zero clicks for buying questions. This corroborates the Q3 review's own finding: *"Content is geared towards education and awareness."*

**Signal implication:** organic search is currently a *brand confirmation* channel, not a demand
channel. Treating organic sessions as a demand-gen metric would misrepresent what is happening.

## 3. Third-party signals — Release 2 territory

Specified now so Release 2 has a target, and so nothing gets built that the ICP does not justify.

| Signal | Source | ICP | Feasibility today |
|---|---|---|---|
| Target-account job posts for AI/ML/data roles | LinkedIn, job boards | 1, 2, 5 | Manual now, automatable later |
| New CIO/CTO/CDO/CISO appointment | LinkedIn | 1, 3 | Manual now |
| Company announces an AI initiative | Press, LinkedIn | 1, 3 | Manual now |
| Enterprise Copilot/GenAI rollout | Press, partner announcements | **3** | Manual now |
| Data platform adoption announced | Vendor case studies | 2 | Manual now |
| ISMO/NEPRA enforcement action | Regulator publications, sector press | **4** | **Manual, and worth doing weekly now** |
| New NEPRA licence granted | NEPRA published decisions | 4 | Manual |
| Sector security incident | News | 3, 4 | Manual |
| Target account engages with xLoop LinkedIn content | LinkedIn page analytics | All | **Available today, underused** |

## 4. Negative signals

Behaviour that looks like intent but is not:

- Traffic to careers, bootcamp or xCelerate pages.
- Downloads from IP ranges or domains matching competitors.
- Repeat visits from academic or student domains.
- Long dwell on blog posts with no service-page visit.
- LinkedIn engagement from jobseekers (high volume, given active recruitment posting).
- Impressions growth on research long-tails. `VERIFIED INTERNAL FACT` — the Q3 review celebrates *"growing impressions curve (45.7K in 3 months)"*. Impressions on queries that produce zero clicks are not progress; they are the definition of a vanity metric the brief warns against.

## 5. Signal-to-action mapping

| Signal strength | Action | Owner |
|---|---|---|
| Very high | Human outreach within 24 hours | Sales |
| High | Marketing follow-up with pillar-relevant asset; flag to sales | Marketing |
| Medium | Add to nurture; watch for a second signal | Marketing |
| Low | No action | — |
| Negative | Exclude from pipeline reporting | Marketing |

**Rule:** no autonomous outreach at any level. Every outbound contact is human-approved.
See `08_governance/human_approval_rules.md`.

## 6. The measurement gap that blocks all of this

Signals are only useful if they can be attached to an account and followed to an outcome. Today
they cannot be: there is no CRM, form submissions sit in a spreadsheet, and GA4 is not joined to
any lead record.

**Everything in sections 1–5 is specification until that link exists.** Building signal detection
before the record layer would produce alerts nobody can act on or learn from. That is the
strongest argument for what Release 2 should build first.
