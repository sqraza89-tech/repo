---
date: 2026-08-25
tags: [nepra, xloop, website, seo, copywriting, figma]
---

# NEPRA homepage notice + landing page — copy deck & placement brief

Companion to [[2026-08-25-nepra-followup-letters-project]] — this is the *web* side
of the same 87-company mailing.

## Brief
- CEO wants a notice on the xLoop homepage positioning us as NEPRA compliance
  specialists, visible **without scrolling**, so letter recipients see it on arrival.
- Clicking through goes to a NEPRA services page (the four services from the mailed
  flyer + certifications), ending in a call.
- CEO's assumption: the whole thing comes down after 20–30 days. Sana disagrees and
  wants long-term value.

## Deliverables produced
- `Projects/NEPRA Website Campaign/2026-08-25-nepra-website-copy-deck.docx` — all copy
  (homepage, landing page, CTA), metadata, correction log, removal runbook, open items.
- `Projects/NEPRA Website Campaign/2026-08-25-nepra-landing-page-content-spec.docx` —
  **the handoff doc for the design team.** Nine blocks in build order, final copy with
  live character counts, type-role mapping to existing homepage components, layout and
  responsive notes, asset list, "must not happen" rules.
- `Projects/NEPRA Website Campaign/2026-08-25-nepra-landing-page-seo-aeo-content.docx` —
  keyword strategy, competitor landscape, answer capsules per section, full JSON-LD
  (Service / FAQPage / BreadcrumbList), AEO levers, internal linking, alt text,
  measurement plan. **Section 1 carries the Category-1 blocker.**
- Design/placement brief (Artifact, mockups in xLoop's dark style):
  https://claude.ai/code/artifact/bef0ec0e-1a13-4c03-b944-73b711e1139f

## ⚠ BLOCKER found during SEO research (2026-08-25)
- A competitor (Ebryx, on LinkedIn) claims **NEPRA licensees must use a Category-1 audit
  firm recognised by the National CERT** for the third-party audit.
- Checked `pkcert.gov.pk/registered-firms.asp`: **xLoop is NOT on that register in any
  category.** Only 3 firms hold **OT Security CAT-I**: Phitech Solutions, NECOP,
  Risk Associates. IT Security CAT-I includes Catalyic Security and Ebryx.
- Two caveats: the PKCERT page says those firms support "Federal Ministries, Divisions
  and Departments" and **does not mention NEPRA at all**; and the Category-1 claim comes
  from a competitor who is themselves on the list (incentive to overstate).
- **Unverified but high-stakes** — it goes to whether the headline "NEPRA Compliance
  Audit" can be sold as advertised, and 87 letters have already gone out saying it.
- If true, honest options: partner with a listed OT Security CAT-I firm and say so, or
  reposition the page from "audit" to readiness / gap assessment / policy / VAPT /
  training (all deliverable regardless). If false, consider applying to the register —
  "CERT-recognised" would be the strongest differentiator available.

## Correction to earlier competitive claim
- I earlier wrote "very little strong Pakistani competition". **That was too optimistic.**
  Real competitors: **SPS** (`nepra.spsnet.com` — dedicated subdomain, "NEPRA Compliance
  as a Service", productised at $1k/$3k/month), **Catalyic Security** (ranking explainer),
  **Ebryx**, **INTECH Automation** ("NEPRA-Compliant OT Cybersecurity"), **Supersecure**,
  **Cyberisk**.
- **The gap is still real and now precisely defined:** none of them publish a
  clause-by-clause Regulation 4–11 table, and nepra.spsnet.com has **no FAQ section at
  all**. Everyone sells the service; nobody has published the requirement. That is the
  entire SEO/AEO strategy.

## Revisions after first review (2026-08-25)
- **Removed the letter-recipient acknowledgement** ("Received our letter? You're in the
  right place") from the landing page — Sana's call.
- **Removed the "How the audit runs" seven-stage section** — stays in the proposal only.
- Consequence flagged and handled: that cut also removed the **"non-intrusive by design"**
  callout, which is the first objection a plant manager raises. The assurance was folded
  into the VAPT service copy (block 03) and it is already answered in the FAQ (block 08).
  **Do not let either line get edited away.**
- **Fixed an inconsistency:** the hero CTA said "Book a scoping call", contradicting the
  phone-and-email-only decision. Hero buttons are now the phone and email themselves.
- Final landing page = 9 blocks: Hero / The obligation (+ 3 stat tiles) / Four services /
  Coverage table / Mid-page CTA / What you receive / Why xLoop / FAQ / Closing CTA.

## Decisions
- **Add three components, replace nothing.**
  - **A — Announcement ribbon** above the hero. Temporary, deleted on day 30.
  - **B — NEPRA band**, a clone of the existing AI Security band component, placed
    directly after it. Permanent; carries the internal link to the landing page.
  - **C — Capability chip**: AI Security card's service list gains
    "NEPRA IT/OT Compliance". Permanent.
- **Do NOT replace the "97% of Organizations Using GenAI" AI Security band.** It serves
  an unlimited audience, is permanent, and is the homepage's only conversion path for a
  buyer who arrives without a named service in mind.
- **Do NOT rewrite the hero H1** for a 30-day campaign — strongest SEO signal on the site.
- **Regulation numbering corrected on the web** (Sana approved): flyer says
  "Section 1–9 / Clause 4 / 6 / 10"; the operative obligations are **Regulations 4–11**
  of the Security of IT & OT Regulations, 2022. Regs 1–3 are title/commencement/definitions.
- **CTA = clickable phone + email only**, matching the flyer: `tel:+922135869200` and
  `xsecurity@xloopdigital.com` (with pre-filled subject). No booking link, no form.
- **Landing page URL:** `/services/nepra-it-ot-compliance` (matches the existing
  `/services/cyber-security-service` pattern).
- **Landing page stays permanent** even after the ribbon is removed — 87 letters point
  at that URL and get acted on months later.
- Band headline uses the **72-hour significant-incident reporting deadline** (Reg 11)
  rather than an invented non-compliance statistic — this audience would catch a fake number.

## Approved public claims (do not exceed)
- ISO 27001 / ISO 42001 Lead Auditor certification at the **individual** level only.
  Never "xLoop is ISO 27001 certified" unless the company certificate exists.
- ACT Wind engagement referenced **anonymised** as "a 30 MW wind IPP".
- NIST / IEC 62443 / MITRE ATT&CK alignment was **not** approved, despite appearing in
  xLoop's own ACT Wind proposal.

## Key findings
- **The audience is CEOs, not security people.** Of the 87 companies: zero publicly
  identifiable CISOs, only 3 confirmed CTOs, 84 letters addressed to a CEO/senior exec,
  16 using "Dear Sir/Madam". Copy therefore leads executive-legible, clause detail below.
- **The flyer's four bundles omit Regulation 5** (security controls) **and Regulation 7**
  (data integrity) — which the audit actually covers. The landing page coverage table
  closes the gap; sales needs to know the audit is broader than the four headline blocks.
- **Never publish the flyer as an image** — invisible to Google, AI answer engines and
  screen readers. Everything ships as real HTML text.
- Very little strong Pakistani competition for "NEPRA IT OT compliance",
  "NEPRA compliance audit", "SCADA security audit Pakistan", "OT penetration testing
  Pakistan" — the real argument for keeping the page permanently.

## Source material used
- Flyer image (NEPRA IT/OT Regulatory Compliance Services — four services, tagline,
  (021) 35869200, xsecurity@xloopdigital.com).
- `Downloads/NEPRA-ACT-Wind-IT-OT-Audit-Proposal-17-11-2025.docx` — regulation scope,
  methodology (7 stages), deliverables, credentials, pricing (350,000 PKR pre-audit phase).
- `NEPRA_Companies_CTO_CISO_CEO_Address v2.xlsx` — audience research.
- Figma `xLoop-HomePage-Rewamp`, file key `SnnAGvSInCiPoeNzgH3uEH`, page `12:4`.

## Gotchas hit (for next time)
- **Figma MCP needs edit access** — a prototype link alone returns
  "you don't have edit access". Viewing the proto in logged-in Chrome worked instead.
- The exported `Homepage (1).pdf` (1920×6445, 35 MB) has **broken embedded font names**,
  so both raw stream parsing and pdf.js return no readable text. Screenshotting the
  Figma prototype was the only route to the design.
- No Python, pandoc, LibreOffice or poppler on this machine. Node is at
  `C:\Program Files\nodejs\node.exe` but not on the Git Bash PATH. Word docs were
  generated with the `docx` npm package.

## Next steps
- [ ] **FIRST: confirm with NEPRA whether the Regulation 8 audit must be done by a
      CERT-recognised Category-1 firm** — supersedes everything else below
- [ ] Decide whether AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are
      allowed in robots.txt — blocking them makes the page uncitable by assistants
- [ ] Run the four primary keywords through Ahrefs/Semrush for real volumes (none of my
      figures are volume-based; I had no keyword tool)
- [ ] Confirm the gazetted short title of the regulations and use it consistently
- [ ] Confirm the 72-hour significant-incident reporting deadline against the gazetted text
- [ ] Confirm the anonymised "30 MW wind IPP" reference is permitted under ACT Wind's engagement terms
- [ ] Decide whether to state NIST / IEC 62443 / MITRE ATT&CK methodology alignment
- [ ] Confirm whether captive power plants at industrial sites fall within licensee obligations (many recipients are textile/cement/sugar mills)
- [ ] Decide whether to publish an audit duration at all
- [ ] Produce a purpose-built 1200×630 OG image — do not reuse the flyer
- [ ] Set a calendar reminder to remove the ribbon on the agreed date
- [ ] Get the Figma file shared with edit access if further design work is needed
