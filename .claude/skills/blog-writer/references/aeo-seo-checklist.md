# AEO + SEO checklist

Why both: search engines rank pages, answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews,
Copilot) lift *passages* and cite them. A post that ranks but has no quotable passage gets
paraphrased without credit; a post with clean passages but no ranking signals rarely gets retrieved.

## Retrieval (can it be found?)
- [ ] Title tag ≤ 60 chars, primary keyword first, brand at the end
- [ ] Meta description 140–160 chars, states the answer + who it's for
- [ ] Slug: short, keyword-only, lowercase, hyphens
- [ ] One H1. Logical H2/H3 nesting, no skipped levels
- [ ] Primary keyword in H1, first 100 words, one H2, meta
- [ ] 3–5 internal links (service page + related posts), descriptive anchors
- [ ] 1–3 outbound links to authoritative primary sources (regulator, standard body, vendor docs)
- [ ] Images: descriptive alt text, and no information that exists *only* in an image

## Extraction (can a passage be lifted cleanly?)
- [ ] Opening 40–60 words answer the title question with no preamble
- [ ] Each H2 is a question or a clear claim; its first 1–2 sentences answer it standalone
- [ ] Paragraphs ≤ 4 sentences; each makes one point
- [ ] Lists for steps and criteria; a table for any comparison
- [ ] Definitions written as "X is …" sentences
- [ ] Specific nouns and numbers over adjectives
- [ ] No pronoun-only sentences at the start of a section ("This is why…") — a lifted passage loses its antecedent

## Trust (will an engine choose to cite it?)
- [ ] Named author with role (ambassador where possible) and a short bio line
- [ ] Published and "last updated" dates visible
- [ ] Company facts identical to the About page and brand profile (entity consistency)
- [ ] Claims sourced; no statistic without a source
- [ ] First-hand angle: what the brand has actually seen/done (anonymised where required)

## Structured data (hand to dev)
- [ ] `Article` / `BlogPosting` (headline, author, datePublished, dateModified, publisher)
- [ ] `FAQPage` for the FAQ block
- [ ] `BreadcrumbList`
- [ ] `HowTo` only if the post really is step-by-step

## Conversion
- [ ] CTA matches the funnel stage (see SKILL.md table)
- [ ] One mid-post CTA placed right after the most useful section, one at the end
- [ ] CTA target is live and relevant to this ICP
- [ ] "Next read" link to the next funnel stage post

## Agent-readability
- [ ] Content is in HTML text, not in a PDF or image
- [ ] Key facts appear in a summary box or TL;DR near the top
- [ ] Robots/llms policy not blocking AI crawlers (flag to the user if the site blocks GPTBot, ClaudeBot, PerplexityBot)
