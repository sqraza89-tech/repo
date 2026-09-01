---
date: 2026-09-01
tags: [xloop, website, seo, aeo, ai-discovery, release-1]
---

# Website, Search and AI Discovery

**Recommendations only. No website code was inspected or modified in Release 1.**
The React source is not on this machine, so this audit is based on the live rendered site, the
sitemap, the Screaming Frog crawl export and the internal content documents.

The objective is not "SEO". It is: **make xLoop findable and citable by relevant human buyers,
traditional search engines, AI answer engines, AI agents and enterprise research workflows.**

---

## 1. Current information architecture

`VERIFIED INTERNAL FACT` — 128 URLs in the sitemap:

| Group | Count | Assessment |
|---|---|---|
| `/services/*` | 14 | **11 named after technologies, not outcomes** |
| `/xlab/*` | 8 | Products; `app-pilot` and `hr-app-pilot` both exist |
| `/industries/*` | 9 | **Four have real proof** |
| `/insights/blogs/*` | 56 | Substantial library; almost entirely top-of-funnel |
| `/insights/media-and-mentions/*` | 16 | PR — genuinely useful authority signals |
| `/portfolio/*` | 4 | **The only named-client pages on the site** |
| Root-level case studies | 4 | ⚠️ Orphaned from the portfolio hierarchy |
| Pillar pages | 2 | `/ai-consultancy`, `/digital-engineering` |
| Other | ~15 | About, careers, contact, podcasts, legal |

### Three structural problems

**1. Four case studies live at the root, outside `/portfolio/`.**
`/revolutionizing-service-efficiency-for-saudi-arabias-leading-fast-food-chain`,
`/transforming-patient-interaction-videos-with-ai-for-a-canadian-health-platform`,
`/xvision-where-visual-data-becomes-strategic-advantage`,
`/creating-the-future-of-digital-engagement`.
These are xLoop's best proof assets and they sit outside the hierarchy that would give them
authority. They should be under `/portfolio/` with redirects.

**2. The service layer is a technology taxonomy.**
No buyer searches "Large Language Models" with intent to hire. They search "AI document processing",
"reduce loan processing time", "AI security assessment".

**3. Two products share one name.** `/xlab/app-pilot` and `/xlab/hr-app-pilot` are different
products. This splits search authority and confuses case-study attribution.

---

## 2. Technical findings

`VERIFIED INTERNAL FACT` — from the Screaming Frog crawl (`Tech Audit.xlsx`, dated Sept 2025).
⚠️ **The crawl is roughly a year old. Re-run before acting.** But the three critical findings are
structural SPA problems that rarely fix themselves.

| Issue | URLs | % | Priority |
|---|---|---|---|
| **Page titles: duplicate** | 32 | **100%** | 🔴 Critical |
| **Meta descriptions: duplicate** | 32 | **100%** | 🔴 Critical |
| **Canonicals: missing** | 38 | **100%** | 🔴 Critical |
| H1: multiple per page | 29 | 90.6% | 🟠 |
| H2: multiple | 30 | 93.8% | 🟠 |
| H1: duplicate across pages | 19 | 59.4% | 🟠 |
| Internal 4xx errors | 2 | — | 🟠 High priority in the tool |
| Images over 100 KB | 63 | 17.2% | 🟠 |
| Images missing width/height (CLS risk) | 158 | 43.1% | 🟠 |
| Content: readability "very difficult" | 17 | 44.7% | 🟠 |
| Meta descriptions below 70 characters | 32 | 100% | 🟡 |
| Missing security headers (Referrer-Policy, X-Content-Type-Options, X-Frame-Options) | 463 | 98.9% | 🟡 |
| Missing Content-Security-Policy | 367 | 78.4% | 🟡 |
| Images missing alt text | 10 | 2.7% | 🟡 |

### The three that matter most

**Every page shares a title and a meta description, and no page declares a canonical.**

For a React SPA this usually means one thing: page metadata is not being set per route in the
server-rendered HTML. The consequence is severe and it explains the Search Console data precisely —
Google cannot distinguish 32 pages from one another, so it ranks the brand and nothing else.

**This is very likely the single largest technical cause of zero non-brand clicks**, and it is a
development fix, not a content fix. Nothing in the content strategy will work until it is resolved.

### A note worth passing to the security practice
xSecurity sells security assessments. xLoop's own site is missing X-Frame-Options,
X-Content-Type-Options, Referrer-Policy and CSP headers on ~99% of URLs. A CISO evaluating an AI
security vendor may well check. This is a credibility issue as much as a technical one.

### The pillar brief already found the clearest quick win
`VERIFIED INTERNAL FACT` — the Web & App Development page ranks at **position 3.2 with 2,597
impressions but only 19 clicks (0.7% CTR)**. The ranking is already earned; the title and meta are
not converting it. Described internally as *"the single biggest quick win in this entire pillar"* —
and given that all 32 titles are duplicates, it is probably a symptom of the same root cause.

---

## 3. Recommended architecture

Keep all existing URLs, redirect where consolidating, and add the pillar layer.

```
/                                  Positioning + 3 pillars + proof
├── /services/ai-implementation    PILLAR 1 — Make AI work        [NEW]
│     └── existing 8 AI service pages, retitled to outcomes
├── /services/ai-security          PILLAR 2 — Make AI safe        [promote existing]
│     ├── /services/ai-security-service
│     ├── /services/cyber-security-service
│     └── /services/nepra                      ← highest-value page on the site
├── /services/digital-transformation PILLAR 3 — Make AI possible  [DRAFTED, not shipped]
│     ├── /services/data-analytics
│     ├── /services/cloud-and-hyperscaling
│     ├── /services/web-and-app-development
│     └── /services/legacy-system-modernization [NEW — build before linking]
├── /xlab/*                         Products
├── /services/ai-talent             xTalent                        [NEW]
├── /industries/*                   Reduce 9 → 5
├── /portfolio/*                    Consolidate the 4 orphaned case studies here
└── /insights/*                     Blogs, media, podcasts
```

**Sequencing rule from the pillar brief, worth repeating:** if Legacy System Modernization is
confirmed as real scope, **the leaf page must be live before the pillar page references it** — not
after.

---

## 4. AI discoverability (AEO / GEO)

This is where xLoop has a genuine, near-term opportunity — and it already has evidence that it works.

`VERIFIED INTERNAL FACT` — **54 sessions referred by GPT in one quarter**, and content
*"quoted by GPT multiple times"*. Small, but it is a real, measured channel that most competitors
of this size are not tracking at all.

### What makes content citable by an answer engine

1. **Answer-first structure.** State the answer in 40–60 words under a question-shaped heading, then explain. **The NEPRA page already does this and it is the best page on the site.**
2. **Real HTML text, never images.** Already a locked decision for the NEPRA flyer; make it a sitewide rule.
3. **Structured data.** FAQPage, Service, Organization, BreadcrumbList, Article. The JSON-LD for the NEPRA page is already written internally.
4. **Entity consistency.** The same company facts everywhere. ⚠️ **This is xLoop's biggest AEO weakness** — an answer engine reading xLoop's site, decks and proposals finds four founding-year/headcount/country combinations and lowers confidence in all of them.
5. **Specificity.** "Regulations 4–12", "SRO 1708(I)/2022", "ISO 42001" are extractable; "comprehensive solutions" is not.
6. **Unanswered questions.** The strongest AEO position is a question with real search demand and no good published answer. **"What do the NEPRA IT/OT Regulations require?" is exactly that** — no competitor publishes a clause-level table, and the market-leading competitor page has no FAQ at all.

### robots.txt — a decision that is still open
`VERIFIED INTERNAL FACT` — current robots.txt is `User-agent: * / Allow: /`.

That permits GPTBot, ClaudeBot, PerplexityBot and Google-Extended today. **Recommendation: keep it
open.** Blocking AI crawlers makes xLoop uncitable by the assistants that are already sending it
traffic. This was flagged as an open decision in prior work; the evidence now favours leaving it open.

### Server-side rendering
The count-up animation flag in the Aug 2026 revamp asks developers to *"confirm the count up
animation's final resting state is present in server-rendered HTML, not just client side so it
can't be mis-captured by any crawler."* **That instinct is exactly right and should be generalised:**
any content that only exists after client-side JavaScript may be invisible to both search crawlers
and AI answer engines. Given the duplicate-title finding, this is worth a full render audit.

---

## 5. Priority actions

### 🔴 Do first — technical, blocks everything else
1. **Unique title and meta description per route, server-rendered.** 100% duplication today.
2. **Canonical URL on every page.** 100% missing.
3. Fix the two internal 4xx errors.
4. Single H1 per page; logical H2–H6 hierarchy.
5. **Fix "Regulations 4–11" → "4–12" on `/services/nepra`.** Publicly wrong.
6. Re-run the crawl — the audit is a year old.

### 🟠 Do next — architecture and proof
7. Ship the Digital Transformation pillar page (already drafted).
8. Move the four orphaned case studies under `/portfolio/` with redirects.
9. Retitle the technology-named service pages to outcome-led titles; keep URLs.
10. Add FAQPage and Service schema to every service page.
11. Reduce nine industry pages to five with real proof; redirect the rest.
12. **Source or remove every unsourced statistic.** Also an AEO fix — inconsistent facts reduce citation confidence.
13. Rename `app-pilot` / `hr-app-pilot`.

### 🟡 Then — performance and content
14. Compress the 63 oversized images; add width/height to 158 images.
15. Add security headers.
16. Improve readability on the 17 "very difficult" pages.
17. Build the AI Readiness Assessment behind its already-live CTA.
18. Location pages for Qatar and Pakistan; update Google Business Profiles.
19. Internal linking between pillar pages, service pages and case studies.

**Note on ordering:** items 1–5 are development work worth more than the next fifty blog posts.
Publishing more content onto a site where every page shares a title is pouring water into a bucket
with no bottom.
