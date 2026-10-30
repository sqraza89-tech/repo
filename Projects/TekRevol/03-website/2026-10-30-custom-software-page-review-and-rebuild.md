---
date: 2026-10-30
tags: [tekrevol, website, custom-software, service-page, review, premium]
---

# Custom software page: review + on-brand rebuild

File reviewed: `tekrevol-custom-software-page-clean (1) (1).html` (same file as the 28 Oct draft). Companion to [[2026-10-28-homepage-and-custom-software-page-premium-review]]. Homepage mockup set is the visual reference.

## Verdict

- **Content: strongest of the two pages.** Real buyer language, real numbers, a price table, a custom vs off-the-shelf vs in-house comparison, 8 FAQs. Good for SEO and AI answers. Keep most of the substance.
- **Design: same template problem as the homepage, and longer.** 15 sections, every one a rounded-card grid with an orange half-headline, Poppins, navy + legacy orange.
- **Tone: drifts into "offshore vendor".** "Small and mid-sized", "SMBs", "outsourcing", "low-risk", "honest comparison", "overlap with US working hours", "projects other teams left unfinished". Together these position TekRevol as a cheaper outsourced option, not a premium partner.

## What's working (keep)

- "When custom business software makes more sense than another subscription": the 4 signs + Rehkemper story is the best section on the site
- Price table with real ranges: premium firms that show prices read as confident
- Comparison table: answers the buyer's real question
- Case results with 2 numbers each (Kinder Morgan, Schology)
- "Five things move the price"
- FAQ set (8 questions, keyword-rich, fine for SEO)

## Problems

### Content
1. **Keyword stuffing.** "Custom software" appears ~30 times in the page source, including 10+ headings ("Our custom software development process", "Industries we build custom software for", "Technologies and partners behind our custom software developers"). Keep it in H1, title, meta, the first paragraph and FAQs. Headings elsewhere should read like a person wrote them.
2. **Downmarket positioning.** H1 "for small and mid-sized businesses", H2 "Why SMBs choose TekRevol", price table "Growing SMBs". Use "growing companies" (decision still open: SMB vs mid-market).
3. **"Outsourcing".** "How we keep custom software outsourcing low-risk", "Choose custom software outsourcing". Outsourcing = cost play. Say "a partner", "an external team" or just "TekRevol".
4. **Rescue pitch, again.** "We take over projects other teams left unfinished" + "A rebuild or rescue" + FAQ "Can TekRevol take over a project another team started?". Reframe as "Taking a product further". The FAQ can stay (people search it) but answer it forward-looking.
5. **Offshore signals.** "Overlap with US working hours" card is empty (source note: NEEDS CONFIRMATION). Remove the card. "Here's an honest comparison", drop "honest".
6. **Duplicates.** "What our services cover" (4 shapes) and "Custom software development solutions we build" (4 groups) say the same thing twice. Merge.
7. **Broken/empty blocks.** "Engagement models:" row is empty. "Talk to our custom software development team" and "Guides for planning your custom software project" render empty.
8. **Price table gap.** $50K–$120K then $350K+. Nothing between $120K and $350K looks like an error. Confirm ranges with sales before publishing.
9. **Partner claims.** "We're partners with AWS, Microsoft Azure, OpenAI and Anthropic". Confirm each formally. Unconfirmed ones go under "We build on".
10. **Testimonial** "hesitant due to past experiences with remote developers" (Melissa Montes) plants the offshore doubt. Use Keith Cascarelli only.

### Design
1. Retired system: Poppins, navy `#0B2A3F`, legacy orange `#F47B20`. Swap to Host Grotesk + JetBrains Mono, Carbon / Graphite / Pearl / Molten `#FF4F0F`.
2. Orange half-headline on every section. One color only.
3. Every section is a card grid with icon chips (services, why us, process ×8, safeguards ×6, industries ×6, tech ×5). Use hairlines and editorial columns.
4. **Hero form.** A 4-field form next to the H1 makes the first screen a lead-gen page. Premium: one button in the hero, form in the closing section.
5. Pill tags everywhere (service chips, price drivers, tech stack). Replace with mono text lists separated by "·".
6. Case studies in a carousel with arrows hide proof. Show 3 at once.
7. Process: 7 cards + a CTA card. Match the homepage: one hairline timeline.
8. 15 sections is too long. Target 11.

## Rebuild: section by section

Visual reference = the homepage mockups. Sections marked **REUSE** can use the homepage frame with new copy.

| # | Section | Ground | Layout | Copy direction |
|---|---|---|---|---|
| 1 | Hero | Carbon + molten glass (layered planes, not the homepage Strata) | Left: label, H1, lead, 1 button + text link. Spec row under | Label `CUSTOM SOFTWARE DEVELOPMENT`. H1: **"Custom software built around how your business runs."** Lead: "Quoting tools, client portals, internal systems and the integrations that keep them in sync, for growing companies that have outgrown spreadsheets and off-the-shelf tools." Spec row: SINCE 2018 · 500+ PROJECTS · 4.8 ON CLUTCH · HIPAA, GDPR, PCI DSS |
| 2 | Logo band | Graphite | REUSE homepage band (real logos only) | |
| 3 | When it makes sense | Pearl | Left: H2 + short para. Right: 4 signs as a hairline list. Below: Rehkemper story as a pull-quote row | H2: **"When custom software beats another subscription."** Keep the 4 signs and Rehkemper copy as is |
| 4 | What we build | Carbon | REUSE homepage "What we build" 4 columns. Under each, a mono list instead of chips | 01 Business systems and internal tools: CRM · ERP · workflow automation · order management · inventory. 02 Integration and modernization: system integration · APIs · legacy modernization. 03 Web platforms and SaaS: web apps · SaaS · ecommerce · cloud-native on AWS or Azure. 04 Compliance-ready and AI-powered: HIPAA applications · AI features and automation |
| 5 | Results | Pearl | REUSE homepage results grid, 3 columns, 2 numbers each, "Read the case study →" | Kinder Morgan 46% / 95%. Schology 100+ / 150%. Al Hussaini 40+ outlets synced (confirm a metric). H2: **"Results our clients can measure."** |
| 6 | Why TekRevol | Carbon | 2×2 hairline grid, featured cell with notch + glow | H2: **"What happens before and after the code."** 1 Prove it before you fund it (MVP). 2 Built around the systems you run (Al Hussaini). 3 Modeled on how you work (Rehkemper). 4 **Taking a product further** (Equitrip launched in KSA + UAE; NDE Offshore backend rewrite) |
| 7 | How we work | Pearl | REUSE homepage timeline, 5 steps | Discover · Validate · Design · Build in sprints · Launch and support. Decision: use the **Strata Method** (Explore → Ship Line → Ship) here instead, if delivery has confirmed it |
| 8 | Cost | Pearl | Hairline table, mono numbers, the middle row highlighted with Graphite + notch. Price drivers as one mono line | H2: **"What custom software costs."** Keep the $ ranges (after sales confirms + fill the $120K–$350K gap). "Growing SMBs" → "Growing companies replacing manual processes". Drop the empty engagement-models row |
| 9 | Compare | Carbon | Hairline table, TekRevol column on Graphite with notch. Under it, the 3 "pick this when" lines as text columns. Under that, the commitments as one mono line (REUSE homepage) | H2: **"Custom, off-the-shelf or in-house?"** Sub: "There's no single right answer. Here's how they compare." TekRevol column header: "Custom software with TekRevol". Third "pick" = "Choose a custom build partner". Commitments: YOU OWN THE CODE AND IP · NDA FIRST · HIPAA AND PCI DSS EXPERIENCE · ROLE-BASED ACCESS · SPRINT REVIEWS EVERY TWO WEEKS |
| 10 | Client voice + industries | Pearl | REUSE homepage client voices (1 video + Keith quote). Under it, industries as one hairline row of 6: name + one proof line | Healthcare: HIPAA platforms, 80% fewer no-shows. Manufacturing: quoting for 4 plants. Real estate: 5M+ reels. Finance: risk tools. Education: 100+ schools. Retail: 40+ outlets |
| 11 | Stack | Graphite | 5 mono columns, no chips. Partner logos only if confirmed | H2: **"The stack we build on."** |
| 12 | FAQ | Pearl | REUSE homepage FAQ | Keep the 8 questions. Rewrite the takeover answer forward-looking. H2: **"Custom software development, answered."** |
| 13 | Closing CTA + form | Carbon reeded light | REUSE homepage close, plus the 4-field form on the right in a Graphite panel with the notch | H2: **"Let's build what comes next."** "Share a few details. We reply within 6 hours." Button "Start a project" |

Cut: the separate safeguards grid (merged into 9), the duplicate services section, the empty guides block (move guides to a link list in the footer or Insights), the Melissa quote, the US-hours card.

## GPT mockups: only 4 new frames needed

Everything else reuses a homepage frame. Same method as the homepage: one section per frame, attach the homepage hero image for style, 1440 wide, tall canvas.

Shared style block (paste at the top of each):

```
TekRevol website, custom software development service page. Same style as the attached image. Standalone frame 1440px wide. Premium, quiet, editorial (Linear / Stripe level), not an agency template.
Rules: Host Grotesk (Medium for headlines, tight tracking; Regular for body and buttons). JetBrains Mono uppercase only for small labels and numbers in tables. Colors: Carbon #0C0807, Graphite #1A1413, Pearl #F2F1EF, Chrome #DADAD8 hairlines, Molten Orange #FF4F0F only for one button and tiny accents. Headlines one color only. Square buttons with a 45-degree notch on the top-right. No rounded pills, no icon chips, no cards with shadows, no stock photos, no client logos. 160px empty space top and bottom, 120px side margins, one left edge, 12-column grid. Text crisp and spelled exactly as given.
```

**A. Hero (1440 × 1000)**
```
Carbon background. Left 6 columns: mono label "CUSTOM SOFTWARE DEVELOPMENT"; white headline in 3 lines "Custom software built around how your business runs."; one muted grey line "Quoting tools, client portals, internal systems and the integrations that keep them in sync."; a notched orange button "Start a project" and a white text link "See our work →". Right 5 columns: abstract render of layered translucent glass planes stacked at an angle like interface layers, glowing molten orange from within, chrome edges, dark carbon environment. Top nav: white TEKREVOL wordmark, links Services, Work, Industries, Insights, About, notched orange button "Start a project". Bottom: thin hairline, then a spec row of four mono label/value pairs: SINCE / 2018 · PROJECTS / 500+ · CLUTCH / 4.8 rating · COMPLIANCE / HIPAA · GDPR · PCI DSS.
```

**B. When it makes sense (1440 × 1100)**
```
Pearl background. Left 5 columns: mono label "WHEN IT MAKES SENSE"; near-black headline "When custom software beats another subscription."; grey paragraph "A tool that worked at 20 people starts to creak at 80, and the workarounds pile up faster than anyone can document them." Right 6 columns: "You've probably hit that point if:" then four lines separated by thin hairlines, each with a small mono number 01 to 04: "Your team types the same data into two or more systems every day." / "Reports take days because your tools don't share data." / "You pay for features you never use and still can't get the one workflow you need." / "Adding a location or product line means another round of manual fixes." Bottom, full width after a hairline: mono label "REHKEMPER & SON · MANUFACTURING" and a large near-black quote-style line "Quoting by phone and spreadsheet couldn't keep up with four plants in three states. That's when custom software starts to make financial sense."
```

**C. Cost table (1440 × 1100)**
```
Pearl background. Mono label "COST"; near-black headline "What custom software costs."; grey line "Most mid-complexity projects cost $50,000 to $120,000 and take 4 to 9 months. Your exact number comes from a fixed quote after scoping." A table with only thin horizontal hairlines, no fills, columns: PROJECT TYPE · TIMELINE · PLANNING RANGE · TYPICALLY FITS (headers in mono). Rows: "First version, or MVP · 8–16 weeks · $35,000–$50,000 · Testing a new product or internal tool" / "Mid-complexity custom software · 4–9 months · $50,000–$120,000 · Growing companies replacing manual processes" / "Full enterprise software · 9–18 months · $350,000+ · Mid-market companies with complex operations". The middle row sits on a Graphite panel with white text and a 45-degree notch on its top-right corner. Under the table, mono label "WHAT MOVES THE PRICE" and one grey line: Scope and user roles · Integrations · Web, iOS or Android · Compliance such as HIPAA or PCI DSS · Data migration. Then a notched orange button "Get a fixed quote".
```

**D. Compare (1440 × 1200)**
```
Carbon background. Mono label "COMPARE"; white headline "Custom, off-the-shelf or in-house?"; grey line "There's no single right answer. Here's how they compare." A table with thin hairlines, columns: (blank) · OFF-THE-SHELF · IN-HOUSE TEAM · CUSTOM WITH TEKREVOL. The last column sits on a Graphite panel with a 45-degree notch top-right and a thin molten orange top edge. Rows (label · off-the-shelf · in-house · TekRevol): Upfront cost · Lowest · Highest, from hiring · Quoted per project / Time to start · Days · Months to hire · Weeks / Fit to your workflow · You adapt to the tool · Full fit · Full fit / Ownership · You rent it · You own it · You own the code and IP / Integrations · Vendor-limited · Whatever you build · Built for your systems / Ongoing cost · Rises with users · Payroll · Support plan you choose. Below, three text columns: "Pick off-the-shelf — when a standard tool covers most of what you need." / "Hire in-house — when software is your core product." / "Choose a custom build partner — when you need software built around your business without building an engineering team." Bottom: thin hairline and one mono line in muted grey: YOU OWN THE CODE AND IP · NDA FIRST · HIPAA AND PCI DSS EXPERIENCE · SPRINT REVIEWS EVERY TWO WEEKS.
```

## Next steps

- [ ] Confirm price ranges with sales and fill the $120K–$350K gap
- [ ] Confirm AWS / Azure / OpenAI / Anthropic partner status
- [ ] Decide: SMB vs mid-market wording; Strata Method vs 5-step process on this page
- [ ] Get a metric for Al Hussaini (or swap for Libido Health in the results row)
- [ ] Run GPT frames A–D, assemble with reused homepage frames in Figma (same method as homepage)
- [ ] Team: rewrite headings (keyword only in H1, intro, FAQ), remove outsourcing / honest / rescue / US-hours language, remove empty blocks
