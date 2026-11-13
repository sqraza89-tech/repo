---
date: 2026-11-13
tags: [xloop, ai-security, assessment-tool, seo, dev-handoff]
---

# AI Security Readiness Assessment · SEO pack (goes live with the homepage, Mon 16 Nov)

Dev asked for title, meta, H1 and a short intro. Source: `Downloads/AI_Security_Readiness_Assessment_UpdatedV2.xlsx` + `AI_Security_Assessment_UX_Addendum.xlsx` (Aug). Related: [[2026-10-27-xloop-ai-security-page-content-v1]] · [[2026-10-27-xloop-xsecurity-hub-page-content-v1]]

| Element | Copy |
|---|---|
| Title tag | `Free AI Security Readiness Assessment \| xLoop` (use `AI Security Readiness Assessment \| xLoop` if results are gated) |
| Meta description | `See how secure your AI really is. Answer questions on governance, data protection, prompt injection testing and more, and get a readiness score with your top priorities.` |
| H1 | AI Security Readiness Assessment |
| Intro | xLoop's AI Security Readiness Assessment shows how well your organization protects its AI systems, from governance and data handling to prompt injection testing and incident response. Answer a short set of questions about how you work today, and get an overall readiness score, a breakdown by area and the first things to fix. You'll see your results straight away, with no account needed. |

## Check with dev before sending
- [ ] Results shown before any form, no account (UX addendum). If not, cut the intro's last sentence and drop "Free" from the title
- [ ] Final question and domain count: workbook says 9 domains; addendum says 40 questions across 8 domains. Add the confirmed numbers to the intro
- [ ] Framework badges: "references OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF, ISO/IEC 42001" is fine; "NIST aligned" badge is blocked (brain C11) until the security lead approves

## Follow-ups
- [ ] AI Security page + xSecurity hub: add a second CTA "Take the AI Security Readiness Assessment →" now that the tool is live (pages were written while the URL was a 404)
- [ ] Confirm the live URL (`/ai-security-assessment` expected)
