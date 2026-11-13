---
date: 2026-11-13
tags: [xloop, ai-security, assessment-tool, seo, dev-handoff]
---

# AI Security Readiness Assessment · SEO pack (goes live with the homepage, Mon 16 Nov)

Dev asked for title, meta, H1 and a short intro. **Approved tool (Sana, 13 Nov):** `AI_Security_Readiness_Assessment_UpdatedV2.xlsx` on Sana's OneDrive (same as the Downloads copy, checked 13 Nov): **45 questions, 9 domains** (43 scored + 2 open text), 4 tiers: Exposed (0 to 25%), Foundational (26 to 50%), Managed (51 to 75%), Advanced (76 to 100%). The UX addendum's "40 questions, 8 domains" is out of date. Related: [[2026-10-27-xloop-ai-security-page-content-v1]] · [[2026-10-27-xloop-xsecurity-hub-page-content-v1]]

| Element | Copy |
|---|---|
| Title tag | `Free AI Security Readiness Assessment \| xLoop` (use `AI Security Readiness Assessment \| xLoop` if results are gated) |
| Meta description | `Answer 45 questions across nine areas, from governance to prompt injection testing, and get your AI security readiness score, tier and top priorities.` |
| H1 | AI Security Readiness Assessment |
| Intro | xLoop's AI Security Readiness Assessment shows how well your organization protects its AI systems, from governance and data handling to prompt injection testing and incident response. Answer 45 questions across nine areas about how you work today, and get an overall readiness score and tier, a breakdown by area and the first things to fix. You'll see your results straight away, with no account needed. |

## Check with dev before sending
- [ ] Results shown before any form, no account (UX addendum). If not, cut the intro's last sentence and drop "Free" from the title
- [x] Question and domain count: 45 questions, 9 domains (approved workbook, checked 13 Nov)
- [ ] Framework badges: "references OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF, ISO/IEC 42001" is fine; "NIST aligned" badge is blocked (brain C11) until the security lead approves

## Follow-ups
- [ ] AI Security page + xSecurity hub: add a second CTA "Take the AI Security Readiness Assessment →" now that the tool is live (pages were written while the URL was a 404)
- [ ] Confirm the live URL (`/ai-security-assessment` expected)
