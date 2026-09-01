---
date: 2026-09-01
tags: [xloop, nepra, signals, release-1]
---

# NEPRA Buying Signals

Specification only. No detection or outreach automation is to be built in Release 1.

---

## 1. Regulatory signals — strongest, and monitorable now

| Signal | Source | Strength | Feasible today? |
|---|---|---|---|
| **ISMO issues a compliance-status reminder** | Reaches the licensee directly; surfaces in conversation | **Highest** | Only via conversation — ask on every call |
| **ISMO conducts an unannounced inspection** | Same | **Highest** | Same |
| **NEPRA directs a technical audit under Reg. 8** | NEPRA published decisions/directions | Very high | **Yes — monitor NEPRA publications weekly** |
| A licensee is penalised or publicly named | NEPRA decisions, sector press | Very high | **Yes** |
| A significant cyber incident at any licensee | News, disclosure | Very high | **Yes** |
| Quarterly breach-reporting deadline approaching | Calendar | Moderate, recurring | **Yes — build the calendar** |
| New PowerCERT advisory issued | PowerCERT | Moderate | Yes |
| New licence granted or renewed | NEPRA published decisions | Moderate | **Yes** |
| Regulation amended | Gazette | High | Yes |

**Two of these are free, public and actionable this week:** NEPRA's published decisions and
directions, and the quarterly reporting calendar. Neither requires tooling.

## 2. Organisational signals

| Signal | Source | Strength |
|---|---|---|
| Licensee posts an IT security or OT security role | LinkedIn, job boards | High — they have recognised the gap |
| New Head of IT or CTO appointed at a licensee | LinkedIn | High — 6-month buying window |
| Licensee announces a SCADA or plant modernisation | Press, vendor announcements | High — IT/OT convergence creates exposure |
| Licensee publishes an ISO 27001 or security certification ambition | Website, press | Moderate |
| Parent group experiences a security incident | News | Moderate |
| New plant commissioned or acquired | Press, NEPRA filings | Moderate — new assets, new scope |

## 3. Direct engagement signals

| Signal | Strength | Action |
|---|---|---|
| **Reply to the mailed advisory letter** | **Highest** | Call within 24 hours |
| Inbound call to `+92 21 3586 9200` | **Highest** | Immediate |
| Email to `xsecurity@xloopdigital.com` | **Highest** | Immediate |
| Visit to `/services/nepra` from a licensee domain | High | Flag to sales |
| Repeat visits to the page | High | Flag |
| Time on the coverage table / FAQ section | Moderate–high | They are checking applicability |
| Search arriving on "NEPRA compliance audit", "NEPRA IT OT regulations" | High | Commercial intent |
| Licensee follows or engages with xLoop LinkedIn content | Moderate | Add to watch list |

**Note on attribution:** 87 letters point at one page. Traffic to `/services/nepra` is therefore
unusually interpretable — it is very likely a recipient. This is the one place where xLoop can
attribute web behaviour to a known audience without a CRM, and it should be watched closely.

## 4. Negative signals

- Traffic from security vendors and consultancies researching the market (the page is designed to rank; competitors will read it).
- Students and researchers on regulatory queries.
- Licensees who have already appointed a PKCERT-registered Cat-1 firm.
- Companies on the list that have since ceased operation or transferred their licence.

## 5. Signal-to-action map

| Signal | Action | Owner | Timing |
|---|---|---|---|
| Letter reply / call / email | Scoping call | Sales | 24 hours |
| NEPRA direction published for a named licensee | Human-approved, tailored outreach | Sales, marketing drafts | Same week |
| Enforcement action against a peer | Sector-wide content, not individual outreach | Marketing | Same week |
| Job post for OT security at a licensee | Add to watch list; light-touch relationship | Sales | Within 2 weeks |
| Page visit from a licensee domain | Note against the account | Marketing | Weekly review |
| Quarterly reporting deadline | Reminder content, published not sent | Marketing | 3 weeks before |

**Governance:** every outbound action above is drafted by marketing and **sent by a human**.
No autonomous contact with any licensee. See `08_governance/human_approval_rules.md`.

## 6. What a "NEPRA account watch list" should hold

Specification for Release 2:

```
company · NEPRA segment (utility / IPP / SPV / captive) · licence status ·
named executive + role + confidence (HIGH / MEDIUM / LOW) · mailing address ·
letter sent (Y/N + date) · response (Y/N + date + channel) ·
enforcement events observed + date + source ·
page visits observed · current stage · owner · next action · delivery-risk note (Cat-1)
```

The 87-row register already holds most of the left-hand columns, including a documented
confidence level per row. **It is the single best-structured asset in the corpus and should be
the seed record for any future account intelligence system** — under the restricted-data handling
in `08_governance/privacy_rules.md`.
