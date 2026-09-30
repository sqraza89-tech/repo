# Output template

```markdown
---
date: YYYY-MM-DD
tags: [<brand>, blog, <stage>, <icp-id>]
brand: <brand>
icp: <ICP id + name>
stage: TOFU | MOFU | BOFU
status: draft
---

# <H1>

## SEO pack
| Field | Value |
|---|---|
| Title tag | … (≤60) |
| Meta description | … (140–160) |
| Slug | /insights/blogs/… |
| Primary keyword | … |
| Related questions | … |
| Author | Name, exact title |
| CTA → target | "…" → URL (live: yes) |
| Internal links | … |

## Post

**TL;DR** — 2–3 bullet summary

<answer-first opening, 40–60 words>

## <Question H2>
…

> **CTA (mid):** …

## FAQ
### <Question>?
<Answer, 2–4 sentences>

> **CTA (end):** …

## Schema (JSON-LD for dev)
```json
{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ … ] }
```

## Promotion
- LinkedIn teaser (2–3 lines + link)
- Ambassador angle: who should share it and with what one-line take

## Open questions
- …

## Next steps
- [ ] Sana review
- [ ] Technical check by <SME> (if technical)
- [ ] Hand to dev/CMS with schema
```
