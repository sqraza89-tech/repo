---
date: 2026-09-01
tags: [xloop, governance, privacy, release-1]
---

# Privacy Rules

xLoop marketing holds personal data about identifiable individuals. These rules apply regardless
of jurisdiction, because the data spans Pakistan, the UAE, Qatar, the EU (Poland, Hungary), the UK,
Canada and the USA — and the strictest applicable standard is the safe default.

---

## 1. Personal data currently held

| Dataset | Contents | Classification |
|---|---|---|
| `xLoop Website Leads.xlsx` | Names, emails, companies, enquiry details from website forms | **RESTRICTED** |
| `NEPRA_Companies_CTO_CISO_CEO_Address v2.xlsx` | 87 companies; named executives, roles, LinkedIn URLs, mailing addresses, research confidence | **RESTRICTED** |
| NEPRA follow-up letters | Named individuals at named companies | **RESTRICTED** |
| LinkedIn leads export | Individual profiles | **RESTRICTED** |
| Bootcamp/xCelerate applications | Applicant personal data | **RESTRICTED — HR, not marketing** |
| Testimonial attributions | Named individuals who consented | **PUBLIC — consented** |

## 2. Core rules

1. **Purpose limitation.** Personal data collected for one purpose is not reused for another. A NEPRA compliance-advisory mailing list is not a general marketing list.
2. **Minimisation.** Collect only what the purpose requires.
3. **No enrichment without a basis.** Do not append data from third-party sources to build fuller profiles of individuals.
4. **No public exposure.** Never publish, quote or reference an individual's data without explicit consent.
5. **No AI training or seeding.** Personal data is never used to train, fine-tune, or seed a public asset, and is never pasted into an external model where the vault rules require local-only handling.
6. **Retention.** Delete when the purpose ends. Bootcamp applicant data belongs to HR and should not persist in marketing folders.
7. **Access control.** Restricted files are for marketing and sales only, on a need-to-use basis.

## 3. The NEPRA register — specific handling

This dataset is the most sensitive marketing asset xLoop holds: named senior executives at named
regulated companies, compiled through public research, held for outbound purposes.

| Rule | Detail |
|---|---|
| ❌ Never publish | Any part of it, in any form |
| ❌ Never disclose targeting | Never state or imply that a named company was contacted or is a prospect |
| ❌ Never frame counts as engagement | "87 letters sent" is internal. "87 power companies contacted us" would be false |
| ❌ Never share externally | Not with partners, not with agencies |
| ✅ Aggregate observations permitted | Fully de-identified market observations are fine — e.g. "almost no NEPRA-listed licensee publishes a named CISO" |
| ✅ Retain the confidence levels | The register records HIGH/MEDIUM/LOW research confidence per row. Never present a MEDIUM/LOW row as verified |

**Note on accuracy as a privacy matter:** where a name was inferred (for example, group-level
executives applied to subsidiary entities, or addresses inferred from a parent company's registered
office), that inference is recorded in the register and must be respected. Addressing a letter to
someone who does not hold that role at that entity is both a data-quality problem and a
professional embarrassment.

## 4. Consent

| Data | Basis | Notes |
|---|---|---|
| Website form submissions | The individual initiated contact | Use for the enquiry. **Adding them to a broader marketing list needs a separate basis** |
| Gated asset downloads | The individual provided data for the asset | Same limit |
| Business postal mail to a corporate address | Legitimate business communication | Publicly available business addresses; content is a regulatory advisory |
| Testimonials | Explicit consent | Retain the consent record |
| Bootcamp applications | Provided for a recruitment/training purpose | **Never marketing** |

## 5. Client confidential data

Beyond personal data, xLoop holds client-confidential material: security findings, architecture
detail, project scopes, pricing.

- Security findings are the most sensitive category held. A published vulnerability finding, even anonymised, can expose a client if enough context accompanies it.
- **Anonymisation must actually anonymise.** Combining an industry, a country, a size and a technology stack can identify a client by elimination. The "30 MW wind IPP in Jhimpir with two plant sites" description is close to that line.
- Delivery methodology, asset counts and pricing stay internal.
- When in doubt, ask the account owner. **Never infer permission from the existence of a document.**

## 6. AI-specific rules

1. **Never paste restricted data into an external model.** Client and NDA content uses the local-only route (`--private`, local Ollama) per the vault rules.
2. **Never build individual profiles** from combined sources for marketing purposes.
3. **Never generate outbound content addressed to a named individual** without human review of both the content and the recipient.
4. **Never infer personal attributes** — seniority, decision authority, budget — and record them as fact. Record them as inference, with the basis.
5. **Never store restricted data in this Marketing Brain.** The brain holds *rules about* the data and *pointers to* it. It does not hold the data itself. That separation is deliberate and should be preserved as the system grows.

## 7. Practical hygiene

| Issue | Action |
|---|---|
| Restricted files sitting in general OneDrive folders alongside marketing content | Move to an access-controlled location |
| Multiple duplicate copies of the NEPRA register across Teams and Copilot chat folders | Consolidate to one controlled copy |
| Bootcamp applicant data in marketing folders | Transfer to HR, delete from marketing |
| No documented retention period for the leads file | Set one |
| Personal identity documents found in the shared corpus (passport scans, ID photos) | Not marketing data — remove from any shared marketing location |
