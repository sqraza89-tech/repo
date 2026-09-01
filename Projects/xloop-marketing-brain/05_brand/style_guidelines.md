---
date: 2026-09-01
tags: [xloop, brand, style, release-1]
---

# Style Guidelines

Visual identity is quoted from the official `xLoop - Brand Guidelines_v1e.pdf`. Content style
beyond that document is marked as an extension.

---

## 1. Visual identity — official

### Colour palette
`VERIFIED INTERNAL FACT`

| Name | Hex | CMYK |
|---|---|---|
| **Bright Blue** | `#0061F6` | C82 M63 Y0 K0 |
| **Indigo** | `#22205D` | C100 M100 Y32 K25 |
| **Electric Blue** | `#0098D8` | C77 M26 Y0 K0 |
| **Blizzard Blue** | `#50BFE6` | C60 M4 Y3 K0 |
| Supporting blue | `#3D67B1` | — |
| **Aquamarine** | `#5CC3AE` | C60 M0 Y40 K0 |
| Light grey | `#E6E6E6` | — |

Official rules: use only these colours; do not lighten, darken or saturate them; keep
accessibility in mind; do not mix colours within a paragraph.

### Typefaces
`VERIFIED INTERNAL FACT`
- **Poppins** — primary. "Geometric form and friendly appearance."
- **Avenir** — secondary. "Clean and professional."

### Logo
`VERIFIED INTERNAL FACT`
- Master logotype and master icon logo.
- Clear space equal to the height of the "o".
- Minimum width **100 px** digital, **1.5 inches** print.
- Never stretch, rotate, recolour, add effects, add strokes, use the wordmark without the icon, or place on a low-contrast or distracting background.

### Name usage
- **xLoop Digital** / **xLoop** — small `x`, capital `L`. Never abbreviated or altered publicly.

---

## 2. Content structure — official, for service pages

`VERIFIED INTERNAL FACT` — `Content Structure Guidelines for Service Pages.docx`:

1. **H1** — clear, keyword-focused, incorporating the service.
2. **Intro summary** — 3–5 sentences, main benefits.
3. **Problem statement** — the challenge the service addresses.
4. **What we offer (H2, phrased as a question)** — e.g. "What Generative AI Services Does xLoop Provide?"
5. **How it works** — stepwise.
6. **Use cases / benefits** — industry-specific.
7. **FAQs** — real user questions, wrapped in FAQ schema.
8. **Case studies** (optional).
9. **Call to action**.

Technical rules from the same document: semantic H1/H2/H3 hierarchy; FAQ and Article schema; short
paragraphs, bullets and tables for extractability; natural keywords in headings, body and metadata;
internal linking; concise direct answers.

**This guidance is good and it is already written.** The gap is enforcement — most existing service
pages do not follow it.

---

## 3. Writing style — extension

### Structure
- **Answer first.** First 40–60 words answer the page's implicit question. This is how the NEPRA page works, and it is why that page is extractable by AI answer engines.
- One idea per paragraph; 2–4 sentences.
- Headings are questions or statements, never labels ("Our Services", "Why Choose Us").
- Tables for anything comparative or enumerable.
- Bullets for lists, prose for arguments. Do not bullet an argument.

### Sentences
- Active voice, present tense.
- Under 22 words on average.
- No sentence whose only content is an adjective.

### Numbers
- Always attach a source or drop the number.
- Spell out one to nine in prose; numerals for 10+ and all measurements, percentages and currency.
- Currency: state it (`PKR 350,000`, `$50M`) — never a bare symbol in a multi-market document.
- Dates: `2026-09-01` in documents, "1 September 2026" in prose.

### Links
- Descriptive anchor text. Never "click here" or "read more".
- Every service page links to at least one case study and one related pillar page.

---

## 4. Formats

| Asset | Length | Structure |
|---|---|---|
| Service page | 800–1,500 words | Per §2 |
| Pillar page | 1,200–2,000 words | Hero → what's included → why it matters → proof → FAQ → CTA |
| Blog (thought leadership) | 1,200–1,800 words | Answer-first, subheads every 250–300 words, FAQ block |
| Case study | 400–700 words | Client context → problem → solution → outcome → technologies |
| LinkedIn post | 120–250 words | Hook, one idea, one link or CTA |
| Lead magnet | 4–10 pages | One framework, usable standalone |

---

## 5. Accessibility

- Colour contrast to WCAG AA against the palette above (the guidelines already say "keep accessibility in mind").
- Descriptive alt text on every image.
- **Never publish text as an image.** Already a locked decision for the NEPRA flyer, and it should be a general rule: image-only text is invisible to search engines, AI answer engines and screen readers.
- Real HTML headings, not styled divs.
- Descriptive link text (also an accessibility requirement, not only an SEO one).

---

## 6. Known style debt

| Issue | Evidence |
|---|---|
| Mixed UK/US spelling within single documents | "optimise/optimize", "personalised/personalized" |
| Inconsistent business-line capitalisation | "XSecurity" vs "xSecurity" on the same deck layout |
| Company name written three ways in one proposal | "XLoop", "Xloop", "xLoop" |
| Official tagline unused | "Exceeding Expectations" appears on no public surface |
| Service pages not following the firm's own structure guidance | Most `/services/*` pages |
| Text-as-image assets in circulation | The NEPRA flyer |
