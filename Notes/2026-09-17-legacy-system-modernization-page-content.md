---
date: 2026-09-17
tags: [xloop, seo, aeo, service-page, legacy-modernization, digital-transformation, site-revamp, competitive-analysis]
---

# Legacy System Modernization — Service Page Content (Draft v1)

**URL:** `/services/legacy-system-modernization`
**Cluster:** Digital Transformation (child of `/services/digital-transformation`)
**Status:** Questions answered 2026-09-17. **Current build spec is `Notes/2026-09-17-legacy-system-modernization-page-spec-v1.1.docx`** (v1 superseded) — it supersedes the page copy in Part D below, which is kept as the v1 draft record.
**Spelling:** US throughout (brand rule, `terminology.md` §9). "Legacy System Modernization" is the
entity name — use it identically in title, H1, nav, schema and body.

Related: [[2026-09-16-digital-transformation-pillar-seo-aeo-review]] ·
[[2026-09-01-xloop-marketing-brain-release-1]]

---

## Resolved 2026-09-17 — answers and what changed

| Question | Answer (Sana, via delivery) | Change in the final spec |
|---|---|---|
| RPG client | **SS&C** (Sana corrected "Thyme Bank" later on 2026-09-17); an engineer believes IBM platform — unconfirmed | Descriptor stays "a financial services firm". IBM i / AS/400 not stated. RPG article dropped from cluster |
| AWS ecommerce case | Approve for publication; "no downtime" is probably marketing language | Card published; outcome = "a foundation for scalable operations"; downtime wording banned |
| Legacy stacks delivered | Architect 1: none of .NET / Java / Oracle / COBOL / VB6 / Azure — mostly simple cloud-to-cloud migrations and advisory. Architect 2: PHP migrations | **Capability is narrower than competitors claim.** From→To table limited to 4 delivered rows + a PHP and cloud-to-cloud line. Mainframe/COBOL named as *not a fit*. Paid-search negatives added. GCC core-banking angle removed |
| AI tooling | Yes — Cursor and Claude | §3.8 kept and names the tools. New FAQ: "Will you use AI tools on our codebase?" Launch dependency: AI-use agreement at kickoff + confirm data controls |
| Delivery commitments | Initial 2-week discovery, then planning and implementation | Primary CTA = "Book a 2-Week Legacy Discovery". Process rebuilt as Discovery → Planning → Implementation (prove, then phase) → Handover. Per-phase estimate claim removed. Triage reply has no SLA; needs a named owner |

### Strategic correction to Part B
The v1 draft said GCC financial-services modernization pressure aligns with xLoop's Priority 1 industry.
Given delivered capability, that angle points at core-banking and mainframe programs xLoop cannot serve.
**Withdrawn.** The page targets mid-market application, infrastructure and data modernization, and
competes on discovery-led candor and the AI-readiness argument — not on breadth of stacks.

### New pipeline risk
Sales responsiveness is low. The triage form promises a solutions-architect reply — without a named
owner it will generate dead leads. Launch dependency #1 in the spec.

---

### v1.1 — ICP-targeted revision (2026-09-17, Sana's feedback)

**Feedback:** H1 "Legacy System Modernization Without the Big-Bang Rebuild" read as gimmicky. Write for
xLoop's ICPs; goal is lead gen.

| Change | Detail |
|---|---|
| H1 | **Legacy System Modernization for Data, Cloud and AI** — exact search term + what the buyer is fixing; no wordplay |
| Subhead | Opens with ICP-research symptoms: reports that don't match, integrations that take months, AI pilots stalling at the data |
| Meta | Drops "big-bang"; names data, technology and engineering leaders |
| Role cards (new, below hero) | Card 1 Heads of Data/CDOs (ICP 2, primary) · Card 2 CIOs/CTOs/transformation leads (ICP 1) · Card 3 Engineering/platform leaders (ICP 5). Each: headline in their words, problem, what we do + matched proof, CTA carrying a hidden role tag |
| Discovery per role (new) | What each role leaves the two-week discovery with — the conversion point, in each buyer's terms. Adds a leadership readout for ICP 1 |
| FAQ | +Q14 business case (ICP 1) · +Q15 migrating data sources without breaking reports (ICP 2) |
| Forms and routing | Company size field added; routing by size + role + trigger + timeline; under 50 employees → nurture |
| Content cluster | Each article tagged to a buyer; "Six signs" replaced with a business-case article; new article on migrating data sources without breaking reports |
| Tone | Removed "weekend of hoping", "moved by Friday", "the conversion is the easier half", "the option most vendors won't mention", "no big-bang cutover" |

**Method claims added in v1.1 for delivery review:** role card 1 (parallel pipelines until numbers
reconcile), discovery outputs per role (incl. leadership readout), FAQ Q15.

---

## Part A — Competitive analysis

### Who was compared

| Competitor | Type | Why included |
|---|---|---|
| **Itransition** | Global mid-market dev firm | Ranks for "legacy application modernization services" |
| **Vention** | Global mid-market dev firm | Ranks page one; strongest page in the set |
| **ELEKS** | European engineering firm | Ranks page one for "legacy system modernization services" |
| **Softura** | US mid-market | Most lead-gen-focused page in the set |
| **10Pearls** | Direct regional competitor (Pakistan delivery) | Same talent market, same buyer pitch |
| Hexaware, IBM, NETSOL | Reference | IBM holds the definitional query; NETSOL is regional cloud-modernization |

### Table stakes — every competitor has these, so xLoop must too

- A "What is legacy modernization?" definition
- A list of modernization approaches (rehost, refactor, re-architect, rebuild, replace…)
- A 3–5 step process (assess → decide → modernize → support)
- Case studies and a technology grid
- An FAQ (4–7 questions)

**Having these earns no advantage. Missing them is disqualifying.**

### What the best pages do well — match these

| Pattern | Who does it | Why it works |
|---|---|---|
| **FAQ answers real buyer fears**, not definitions — no documentation, no downtime, keeping legacy skills during migration | Vention | These are the questions a CTO actually has before calling |
| **States assessment duration** (2–4 weeks) | Vention | Lowers the perceived cost of the first step |
| **Names who it's for** ("10+ legacy apps or $5M+ IT spend") | Softura | Self-qualifies leads; improves quality |
| **Answers cost and timeline directly** | Itransition | These are top AI-search queries; pages that dodge them don't get cited |
| **Scenario-led, not service-led** ("undocumented codebase recovery", "phased production migration") | Vention | Buyers recognize their situation, not a service catalog |
| **Tiered lead capture** (cost calculator, ROI breakdown) | Vention, Softura | Captures buyers who aren't ready to book a call |

### Gaps nobody fills — xLoop's openings

1. **Nobody frames modernization around AI as the reason.** Competitors mention AI as a
   *tool* (AI-assisted code conversion) or as a buzzword. None argue that the business case for
   modernizing *now* is that AI can't reach legacy systems. That is xLoop's Pillar 3 thesis — and
   it's unclaimed on every page reviewed.
2. **Nobody tells you what *not* to modernize.** Every page sells modernizing everything. "Retain"
   appears in approach lists but no one recommends it. A page that says "some systems should be
   left alone, and we'll tell you which" is both unique and the most trust-building thing a vendor
   can say.
3. **Nobody is honest about AI in modernization.** The market is loud with conversion-speed
   claims, while analysts are warning that leaders are overestimating what generative AI can do
   for legacy migration. A clear "what AI does / what it doesn't" answer is citable, credible and
   currently absent.
4. **Legacy *data* is underserved.** Competitor pages are application-centric. xLoop's deepest
   proof is data (SAP → Snowflake lakehouse, stored-procedure tuning). "Modernizing legacy data
   for analytics and AI" is an open lane.
5. **No machine-readable offer summary.** No competitor publishes a structured "at a glance" block
   (who it's for, triggers, entry offer, deliverables, not-a-fit). For AI agents shortlisting
   vendors, that is the single most useful thing on a page.
6. **"API layer first" as a middle path.** Wrapping a sound legacy system in APIs so AI and new
   apps can use it — without migrating it — is standard architecture but no competitor presents it
   as an option to the buyer. It's the cheapest answer to "our AI can't reach the core system."

### Where xLoop is weaker — and how the page handles it

| Weakness | Competitor strength | Page strategy |
|---|---|---|
| **Proof volume** — 3–4 anonymized cases, 1 named testimonial | 8–15 named cases with metrics | **Depth over breadth.** Each case written with technical specificity (from → to, method, what didn't break). Specific beats numerous for AI citation |
| **No company-level certifications, no analyst recognition** | ISO 27001/9001, Gartner, Forrester, Stevie | Don't compete on badges. Compete on candor — the "leave it alone" and "what AI can't do" sections |
| **Tenure** — founded 2022 | "20–30 years" | Never mention tenure. Lead with method and recent AI-era relevance |
| **No published metrics** | "36% lower infra cost", "3× faster delivery" | **Do not invent or import numbers.** Precision about method is the substitute |
| **No cost calculator** | Vention | Tiered capture instead (Part C) — triage form does the same qualifying job |

### Do NOT copy from competitors

- Long named-logo walls xLoop can't use
- Unsourced percentage outcomes (every competitor uses them; xLoop's governance prohibits them)
- 80-technology grids implying experience with every stack
- "ISO 27001-certified" (xLoop's certification is individual Lead Auditor level only)
- Published price ranges (confidential commercial information under `prohibited_claims.md` §6)
- "Top 1% of talent" and similar unfalsifiable claims

---

## Part B — Keyword and AI-discovery strategy

⚠️ No keyword volume tool exists at xLoop, so priority below is reasoned from SERP composition and
intent, not measured volume.

### Primary
`legacy system modernization services` — URL, title, H1 and schema all carry it.

### Secondary
`legacy application modernization services` · `legacy software modernization` ·
`application modernization consulting` · `modernize legacy systems`

### Question queries (AI-search and featured-snippet targets — each is an H2 or FAQ)
- what is legacy system modernization
- how to choose between rehost, refactor, re-architect and replace
- how to modernize a legacy system without downtime
- how long does legacy system modernization take
- how much does legacy system modernization cost
- should we modernize legacy systems before AI
- how to modernize a legacy system with no documentation
- can AI convert legacy code automatically
- which legacy systems should not be modernized

### Owned-angle queries (low competition, high fit)
`modernize legacy systems for AI` · `legacy system blocking AI` · `API layer for legacy systems` ·
`legacy data modernization for analytics` · `RPG to cloud migration` **[CONFIRM platform]**

### Regional long-tail (GCC and Pakistan)
`legacy system modernization UAE` · `legacy modernization Saudi Arabia` ·
`legacy system modernization Pakistan` — handled in the at-a-glance block and schema `areaServed`,
not with separate thin pages. GCC financial services is under active regulator-driven
modernization pressure (open banking mandates), which aligns with xLoop's Priority 1 industry.

### Optimizing for AI agents (not just answer engines)

AI agents doing vendor research read pages to shortlist, compare and sometimes fill in contact
forms on a buyer's behalf. They need facts they can extract and match.

1. **"At a glance" facts table** (section 9) — who it's for, triggers, entry offer, deliverables,
   approaches, partners, offices, industries, not-a-fit. Real HTML `<table>`.
2. **"From → To" table** (section 8) — lets an agent match "vendors who have migrated X to Y."
3. **Stable anchor IDs** on every section (`#approaches`, `#for-ai`, `#at-a-glance`, `#faq`) so
   answers can deep-link.
4. **Forms agents can read** — every field has a real `<label>`, dropdown options are plain text,
   the form works without client-side JavaScript.
5. **`llms.txt` at the site root** (sitewide) listing core service pages with one-line descriptions.
6. **Schema** — Service (with `hasOfferCatalog` and an `Offer` for the assessment, no price),
   FAQPage, BreadcrumbList, Organization. Spec in Part E.
7. **No content in tabs, carousels, accordions-injected-on-click or images.** Everything in
   server-rendered HTML.

---

## Part C — Lead capture and pipeline design

The goal is a *sustainable* pipeline, so the page captures three intent levels instead of one.

| Intent | Buyer state | Capture | Ask | What they get |
|---|---|---|---|---|
| **High** | Has a system in mind, has budget or a deadline | **Book a Legacy Modernization Assessment** | Name, work email, company, role, system summary | A scoped assessment **[CONFIRM offer]** |
| **Medium** | Knows there's a problem, not ready to scope | **Get a Legacy System Triage** | 7-field form (below) | A senior engineer's first view on approach **[CONFIRM turnaround]** |
| **Low** | Researching, building a business case | **Download the Modernization Decision Guide** | Work email | The page's decision content as a steering-committee PDF **[TO BUILD]** |

### Triage form — doubles as lead qualification

| Field | Type | Options |
|---|---|---|
| What does the system do? | Short text | — |
| Platform / language | Short text | e.g. IBM i RPG, .NET Framework, Java EE, Oracle Forms |
| Roughly how old is it? | Dropdown | Under 5 years · 5–10 · 10–20 · 20+ |
| What's forcing the decision? | Dropdown | Vendor support ending · Can't integrate new systems · Data is hard to access · AI or analytics initiative blocked · Security or audit finding · Cost to maintain · Other |
| Timeline | Dropdown | Already started · Within 6 months · 6–12 months · Exploring |
| Your role | Dropdown | CIO/CTO · Head of Data · Head of Engineering/Platform · Business owner · Other |
| Work email | Email | — |

**Routing rule for sales:** "AI or analytics initiative blocked" or "Vendor support ending" +
timeline "Within 6 months" or sooner → priority follow-up. Everything else → nurture.

### Why the guide is a PDF but the content isn't gated

All decision content lives **ungated on the page** — that's what search engines and AI engines
index and cite. The PDF is a *convenience* version for a buyer taking it into a steering committee.
Gating the substance would trade AI visibility for a few emails.

### Supporting content cluster — the pipeline engine

Each article links to this page with descriptive anchor text, and this page links back from a
Resources block.

| # | Article | Captures | Links with anchor |
|---|---|---|---|
| 1 | Rehost, Replatform, Refactor or Re-architect? How to Choose for Each Legacy System | Evaluation-stage searches | legacy system modernization services |
| 2 | How to Modernize a Legacy System Without Downtime | Risk-averse CTOs | phased legacy modernization |
| 3 | What AI Can — and Can't — Do in Legacy Code Modernization | AI-curious buyers; highly citable | AI in legacy modernization |
| 4 | Six Signs a Legacy System Is Blocking Your AI Roadmap | ICP 1 sponsors | modernize legacy systems for AI |
| 5 | Should You Modernize Before You Start an AI Project? | Links the existing "why AI projects stall" post, which already ranks #1 with 0 clicks | legacy modernization assessment |
| 6 | From SAP Extracts to a Lakehouse: Modernizing Legacy Data for Analytics and AI | ICP 2 data owners; uses approved proof A9 | legacy data modernization |
| 7 | RPG to Cloud: What Changes and What Doesn't **[CONFIRM]** | Niche, low competition, very high intent | RPG modernization |

Check whether "The Impact of AI on Data Migration" (drafted Nov 2024) is live — if so, link it.

---

## Part D — Page content

Copy under each heading is final draft copy. *Italic lines* are instructions.

### Page setup

| Field | Value |
|---|---|
| URL | `/services/legacy-system-modernization` |
| Title tag | `Legacy System Modernization Services \| xLoop` (44 chars) |
| Meta description | `Modernize legacy systems in phases, not with a big-bang rebuild. Assessment, migration and re-architecture that make core systems ready for data and AI.` (152 chars) |
| H1 | Legacy System Modernization Without the Big-Bang Rebuild |
| Canonical | Self-referencing, absolute |
| Breadcrumb | Home › Services › Digital Transformation › Legacy System Modernization |
| Schema | Service · FAQPage · BreadcrumbList · Organization |
| Last updated | Visible on page |

---

### 1. Hero `#top`

**Eyebrow:** Digital Transformation

**H1:** Legacy System Modernization Without the Big-Bang Rebuild

**Subhead:** We modernize the systems your business still runs on — in phases, with the old system
running until the new one has proven itself — so they can be maintained, integrated, secured and
reached by data and AI again.

**Primary CTA:** Book a Legacy Modernization Assessment →
**Secondary CTA:** Get a free legacy system triage →

**Trust line (plain text, not an image):** Technology partners: AWS · Microsoft · Snowflake ·
Databricks · Salesforce

---

### 2. Definition `#what-is`

**H2:** What Is Legacy System Modernization?

Legacy system modernization is the process of updating or replacing aging software and
infrastructure — core applications, databases and the platforms they run on — so they can be
maintained, secured, integrated and scaled again. It ranges from moving a system to new
infrastructure unchanged, to re-architecting it, to retiring it entirely.

Modernization isn't the same as replacement. Most programs combine several approaches across a
portfolio: some systems move as they are, some are restructured, some are replaced with
off-the-shelf software — and some are left exactly where they are.

*Plain body text, readable size. Not a graphic, not a pull-quote.*

---

### 3. Signs `#signs`

**H2:** When Does a Legacy System Need Modernizing?

Age alone isn't the reason. These are:

- **Every change depends on one or two people** who still understand the code.
- **Connecting anything new means a custom, point-to-point build**, every time.
- **Your data team works from exports** because there's no reliable feed or API.
- **The platform, language or hardware is out of vendor support** — or will be soon.
- **Security patches can't be applied** without breaking something else.
- **An AI or analytics initiative stalled** because it couldn't reach the data or trigger the
  process it needed.

One of these is a maintenance problem. Several at once is a strategic one.

---

### 4. Approaches `#approaches`

**H2:** Which Modernization Approach Is Right for Your System?

Choose by what the system needs to do next — not by how old it is.

*Real HTML table. Most extractable content on the page after section 9.*

| Approach | What changes | Choose it when | Watch out for |
|---|---|---|---|
| **Retain** | Nothing, for now | The system is stable, supported and not blocking anything | Revisit on a schedule; "for now" shouldn't become "forever" |
| **Retire** | The system is switched off | Its functions are duplicated elsewhere or no longer used | Data retention and audit obligations |
| **Rehost** | Where it runs — code is unchanged | Infrastructure is the problem: hardware end-of-life, data-center exit | Technical debt moves with it; no new integration capability |
| **Replatform** | The runtime or database, with targeted changes | You want cloud operations benefits without rewriting | Scope creep into a refactor |
| **Refactor** | Internal code structure — behavior stays the same | The design holds, but the code is slow, fragile or hard to change | Needs strong test coverage first |
| **Re-architect** | The system's structure — e.g. services, APIs, event streams | The structure itself prevents scaling or integration | The highest-risk option; phase it |
| **Rebuild** | Everything, from scratch | Business rules are well understood and the platform is a dead end | Hidden rules in old code get lost |
| **Replace** | Swapped for off-the-shelf software | The function is a commodity — HR, CRM, standard finance | Customizations that made the old system fit |

**The option most vendors won't mention:** if a system is sound but simply hard to reach, wrap it
in an API layer. New applications and AI can use it immediately, and you migrate behind that layer
at your own pace — or never.

---

### 5. What to leave alone `#leave-alone`

**H2:** Which Legacy Systems Should You Not Modernize?

Not every old system is a problem. Modernizing one that works spends budget and adds risk without
buying a new capability.

Leave a system where it is when all of these are true:

- It's **stable** and rarely needs to change
- It's **within vendor support** and can be patched
- **Nothing new needs to integrate** with it
- The **data it holds is already accessible** to the people and systems that need it

If a system passes every test but one — usually "nothing needs to integrate with it" — the answer
is typically an API layer, not a migration.

**We'll tell you this in the assessment.** If an assessment recommends modernizing everything,
question it.

---

### 6. For AI `#for-ai`

**H2:** Why Modernize Legacy Systems for AI?

AI can only use what it can reach. A model needs clean, current data. An AI agent needs functions
it can call to take action. Both need systems that respond reliably at the volume automation
creates. Most legacy systems were built for human operators and overnight batches — not for any of
that.

| What AI needs | Typical legacy blocker | Modernization move |
|---|---|---|
| **Data it can read** | Batch exports, siloed databases, no single source of truth | Migrate to a modern data platform with governed pipelines |
| **Actions it can take** | Business logic trapped behind screens, no APIs | Add an API layer, then re-architect if needed |
| **Reliable response at machine volume** | Single server, fixed capacity, overnight batch jobs | Rehost or replatform to scalable cloud infrastructure |

The fastest route is often not a migration at all. Exposing a sound core system through APIs can
unblock an AI initiative in a fraction of the time — and leaves the bigger modernization decision
for when you have evidence.

*Links: "AI initiative" → Applied AI Solutions pillar · "modern data platform" →
`/services/data-analytics` · section footer → `/services/digital-transformation` with anchor
"the infrastructure underneath AI".*

---

### 7. Process `#process`

**H2:** How Does a Legacy Modernization Project Work?

We modernize in phases, so the business never waits on a single cutover.

| Stage | What happens | What you get |
|---|---|---|
| **1. Assess** | Inventory the systems, map dependencies and data flows, reconstruct undocumented business rules, score each system on business criticality, change frequency and risk | System inventory · dependency and data-flow map · documented business rules · risk register |
| **2. Decide** | Choose an approach per system — including "leave it alone" — and sequence by value and risk | Per-system recommendation · phased roadmap · estimate per phase **[CONFIRM]** |
| **3. Prove** | Modernize one bounded slice first, in production | A working first phase, and evidence the approach holds before larger budget is committed |
| **4. Migrate in phases** | Old and new run in parallel; users or transactions move across in controlled stages; results are reconciled between both; every phase has a tested rollback | Incremental releases with no big-bang cutover |
| **5. Hand over** | Documentation, knowledge transfer and support options | Your team owns and runs the modernized system |

---

### 8. AI in modernization `#ai-assisted` — **[CONFIRM: publish only if delivery uses AI tooling]**

**H2:** What Can AI Actually Do in Legacy Modernization?

AI speeds up the parts of modernization that are about *understanding* — reading unfamiliar code,
documenting business rules, drafting tests and producing first-pass translations. It doesn't
remove the need to prove the new system behaves exactly like the old one. That proof is still where
modernization succeeds or fails.

| Where AI helps | What still needs engineers |
|---|---|
| Reading and summarizing undocumented legacy code | Confirming which behavior the business actually depends on |
| Drafting documentation of business rules | Validating those rules with the people who use the system |
| Generating test cases from existing behavior | Deciding what "equivalent" means, and signing it off |
| First-pass code translation | Architecture, security review, performance under real load |

Treat any promise of fully automatic conversion with caution. The conversion is the easier half.

---

### 9. Proof `#proof`

**H2:** Legacy Systems We've Modernized

*Case cards. Each uses the same four-part structure — it's what makes them extractable.*

**Legacy RPG applications to private cloud**
- **Client:** A financial services firm **[CONFIRM descriptor — see Questions]**
- **Starting point:** On-premise legacy infrastructure with limited scalability, high maintenance
  cost and security exposure
- **What we did:** Migrated the RPG applications and their data to a private cloud platform
- **Outcome:** Completed with minimal operational disruption

**Single-server ecommerce platform to AWS** **[CONFIRM public use]**
- **Client:** An ecommerce brand
- **Starting point:** A legacy single-server setup that couldn't scale with the business
- **What we did:** Migrated to AWS, decoupled the application layers and updated the codebase
- **Outcome:** A foundation for scalable operations **[CONFIRM before adding "uninterrupted
  performance"]**

**SAP extracts and fragmented databases to a Snowflake lakehouse**
- **Client:** A leading South African retailer
- **Starting point:** Data pulled manually from SAP and disparate databases, delaying and
  undermining Power BI reporting
- **What we did:** Migrated to a Snowflake medallion lakehouse on AWS and optimized end-to-end
  pipelines
- **Outcome:** Real-time Power BI dashboards from a single source of truth

**Legacy data pipelines for a utility**
- **Client:** A water utility
- **Starting point:** Slow, unreliable processing across PySpark, SQL and stored procedures
- **What we did:** Root-cause analysis and performance tuning across the pipeline code
- **Outcome:** Reliable, curated datasets for operational monitoring

**Testimonial**
> "Delivered complex projects on time and within budget."
> — **John Waterhouse, Cloud Titans** · core application modernization and SIEM migration

*Do not add percentages to any card. The water utility "30%" figure is unsourced and prohibited.
Do not name the utility or the RPG client.*

---

### 10. From → To `#stacks`

**H2:** What We Modernize From, and To

*Only rows delivery has confirmed. Adding an unconfirmed stack is a false capability claim.*

| From | To | Delivered |
|---|---|---|
| RPG applications on on-premise infrastructure **[CONFIRM: IBM i / AS/400?]** | Private cloud | ✓ Financial services |
| Single-server web application | AWS, with decoupled application layers | ✓ Ecommerce **[CONFIRM]** |
| SAP extracts and fragmented databases | Snowflake medallion lakehouse on AWS | ✓ Retail |
| SQL, stored procedures and PySpark pipelines | Performance-tuned, reliable data pipelines | ✓ Utilities |

**[CONFIRM — add rows only if delivered]:** .NET Framework · Java EE · PHP monoliths · Oracle
Forms / PL/SQL · COBOL / mainframe · VB6 / Access / Delphi · on-premise SQL Server

**Target platforms:** AWS · Snowflake · Databricks · private cloud · Microsoft Azure **[CONFIRM
delivered]**

---

### 11. At a glance `#at-a-glance`

**H2:** Legacy System Modernization at a Glance

*The AI-agent block. Real HTML table, server-rendered, no collapsing.*

| | |
|---|---|
| **Who it's for** | CIOs, CTOs and heads of data or platform engineering at mid-to-large organizations running business-critical systems that are hard to change, integrate or secure |
| **Common triggers** | Vendor support ending · data-center or hardware exit · an AI or analytics initiative blocked by a legacy system · integration backlog · security or audit findings · rising maintenance cost |
| **Where to start** | Legacy Modernization Assessment **[CONFIRM]** |
| **Assessment outputs** | System inventory · dependency and data-flow map · documented business rules · per-system recommendation · phased roadmap |
| **Approaches** | Retain · Retire · Rehost · Replatform · Refactor · Re-architect · Rebuild · Replace · API layer |
| **Delivery method** | Phased migration with parallel running, reconciliation and a rollback path per phase |
| **Engagement models** | Scope-based project · Embedded specialists · Retainer advisory |
| **Technology partners** | AWS · Microsoft · Snowflake · Databricks · Salesforce |
| **Offices** | Karachi · San Mateo · Dubai · Doha — serving clients across Asia, the Middle East, Africa, Europe and North America |
| **Industries** | Financial services · Energy and utilities · Healthcare · Retail · Transport and logistics |
| **Not a fit** | Systems that are stable, supported and not blocking anything — we'll recommend leaving them alone |

---

### 12. FAQ `#faq`

**H2:** Legacy System Modernization FAQ

*All 12 in FAQPage schema. All in server-rendered HTML.*

**What is legacy system modernization?**
Legacy system modernization is the process of updating or replacing aging software and
infrastructure so it can be maintained, secured, integrated and scaled again. It covers everything
from moving a system to new infrastructure unchanged, to re-architecting it, to retiring it. Most
programs mix several approaches across a portfolio — including leaving some systems alone.

**How do you decide whether to rehost, refactor, re-architect or replace a legacy system?**
By what the system needs to do next, not how old it is. If only the infrastructure is the problem,
rehost or replatform. If the design holds but the code is fragile, refactor. If the structure
itself blocks scaling or integration, re-architect. If the function is a commodity, replace it. We
score each system on business criticality, change frequency, risk and what it's blocking.

**How do you modernize a legacy system without downtime?**
By never switching everything over at once. The new system runs alongside the old one, users or
transactions move across in controlled stages, results are reconciled between the two, and every
phase has a tested rollback. Short, scheduled cutover windows are sometimes still needed — but not a
weekend of hoping. It's how we migrated legacy RPG applications to private cloud with minimal
operational disruption.

**How long does legacy system modernization take?**
It depends on the approach and how tightly the system is connected to everything around it.
Rehosting a well-understood application can take weeks. Re-architecting a core system that many
processes depend on can take a year or more, delivered in phases that each produce something
usable. The assessment answers this for your systems specifically, before you commit budget.

**How much does legacy system modernization cost?**
Five things drive cost: the size and complexity of the codebase, how well it's documented, the
approach chosen for each system, the volume and quality of data to migrate, and how much parallel
running the business needs. That's why a credible estimate comes after an assessment, not before
it. We estimate each phase separately, so you can stop, adjust or reprioritize between phases.
**[CONFIRM: per-phase estimates]**

**Should we modernize legacy systems before starting an AI project?**
Only the parts the AI needs to reach. An AI initiative needs data it can read and, for agents,
actions it can call. If a legacy system blocks either, fix that first — often with an API layer
rather than a migration. If it doesn't, leave it and start the AI work. Modernizing everything
first delays value for no reason.

**What if our legacy system has no documentation and the original developers have left?**
That's the normal case, not the exception. We reconstruct how the system works from its code, its
data and how people actually use it, document the business rules before anything changes, and
confirm them with the people who rely on the system. Undocumented behavior is the biggest source of
modernization risk, so it's surfaced during the assessment — not discovered mid-migration.

**Can AI tools convert our legacy code automatically?**
Partly. AI is genuinely useful for reading unfamiliar code, documenting business rules, drafting
tests and producing first-pass translations. It doesn't prove the new system behaves exactly like
the old one, and that proof is where modernization projects succeed or fail. Treat any promise of
fully automatic conversion with caution. **[CONFIRM: add one sentence on how xLoop uses AI in
delivery, if it does]**

**What happens to our existing team during modernization?**
They stay central. Your team knows how the business actually uses the system, and they'll run the
modernized version afterwards. We work alongside them, plan how the legacy system stays supported
while migration runs, and build knowledge transfer into every phase rather than leaving it to the
end.

**How do you keep data secure and compliant during migration?**
Migration is when data is most exposed — it's copied, transformed and running in two places at
once. We define data classification, access controls and reconciliation checks before the first
transfer, and keep both environments under the same controls during parallel running. Where
regulated data is involved, our security practice — which includes certified ISO 27001 and ISO
42001 Lead Auditors — is part of the engagement.

**Can you modernize onto our existing cloud platform?**
Yes. We've delivered migrations to AWS, to private cloud and to Snowflake on AWS, and our
technology partners are AWS, Microsoft, Snowflake, Databricks and Salesforce. The target platform
should follow your existing contracts, data residency requirements and team skills — the
architecture decisions carry across platforms.

**Which legacy systems should we not modernize?**
The ones that are stable, supported, rarely changed and not blocking anything. Modernizing them
costs budget and adds risk without adding capability. If a sound system is simply hard to reach,
wrap it in an API layer and leave the core alone. A good assessment should recommend leaving some
systems untouched — if one recommends modernizing everything, question it.

---

### 13. Lead capture band `#start`

**H2:** Start With the Systems That Are Actually in the Way

Tell us what you're running and what it's blocking. We'll tell you what to modernize, what to wrap,
and what to leave alone.

*Three columns, equal visual weight, left to right by intent:*

| Book an Assessment | Get a Legacy System Triage | Take the Decision Guide |
|---|---|---|
| For teams ready to scope a program. A structured review of your systems, dependencies and risks, ending in a phased roadmap. **[CONFIRM]** | Seven questions about one system. A senior engineer replies with a first view on the right approach. **[CONFIRM turnaround]** | The approaches, the leave-it-alone rules and the AI-readiness checks from this page, formatted for your steering committee. **[TO BUILD]** |
| **Book an Assessment →** | **Get My Triage →** | **Download the Guide →** |

**Small print under the band:** We don't start a migration without an assessment first. If you
need a system moved by Friday with no questions asked, we're probably not the right firm.

---

### 14. Related `#related`

**H2:** Related Services
- Digital Transformation → `/services/digital-transformation`
- Cloud & Hyperscaling → `/services/cloud-and-hyperscaling`
- Data Analytics → `/services/data-analytics`
- AI Security → `/services/ai-security-service`

**Resources:** *Supporting articles from Part C, as they publish.*

---

## Part E — Build specification

### Schema (JSON-LD outline)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://xloopdigital.com/services/legacy-system-modernization#service",
      "name": "Legacy System Modernization",
      "serviceType": "Legacy system modernization",
      "description": "Phased modernization of legacy applications, data and infrastructure — assessment, rehosting, replatforming, refactoring, re-architecture and replacement — so core systems can be maintained, integrated, secured and used by data and AI.",
      "provider": { "@id": "https://xloopdigital.com/#organization" },
      "areaServed": ["United States", "United Arab Emirates", "Qatar", "Saudi Arabia", "Pakistan", "South Africa", "Europe"],
      "audience": { "@type": "BusinessAudience", "audienceType": "CIOs, CTOs, heads of data and platform engineering" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Legacy modernization approaches",
        "itemListElement": ["Retain","Retire","Rehost","Replatform","Refactor","Re-architect","Rebuild","Replace","API layer"]
          .map(n => ({ "@type": "Offer", "itemOffered": { "@type": "Service", "name": n } }))
      },
      "offers": {
        "@type": "Offer",
        "name": "Legacy Modernization Assessment",
        "url": "https://xloopdigital.com/services/legacy-system-modernization#start"
      }
    },
    { "@type": "FAQPage", "mainEntity": ["…12 Question/Answer pairs, text identical to page…"] },
    { "@type": "BreadcrumbList", "itemListElement": ["Home","Services","Digital Transformation","Legacy System Modernization"] }
  ]
}
```

*Dev note: the `.map()` above is shorthand — emit expanded JSON. Do not add `price` to the Offer.
`areaServed` must be reviewed against approved geography before publish (country count is still a
Tier-3 blocked claim — list regions where delivery is confirmed, don't publish a count).*

### Development requirements

- Server-render all content, including FAQ answers and all tables
- Stable anchor IDs as listed on each section heading
- One H1; H2 per section; no skipped levels
- Partner names as HTML text, not only logos
- Forms: real `<label>` per field, plain-text options, work without client JS
- Fix the sitewide doubled title suffix (`| xLoop Digital | xLoop Digital`) before launch
- Add `llms.txt` at site root including this page
- Hub page `/services/digital-transformation` must not link here until this page is live

---

## Part F — Governance checks

| Check | Status |
|---|---|
| All proof uses approved wording (A9, A14, P-09 narrative, A15) | ✅ |
| No unsourced statistics anywhere | ✅ — none on the page |
| No client named except Cloud Titans (signed testimonial) | ✅ |
| No company-level ISO claim | ✅ — individual Lead Auditors only |
| No pricing | ✅ — cost drivers only |
| No Microsoft Fabric, no Solutions Partner implication | ✅ |
| No country count, headcount or founding year | ✅ |
| US spelling throughout | ✅ |
| Method claims (reconciliation, rollback, classification) | ⚠️ Standard practice — **delivery lead should read sections 7 and 12 before publish** |

**Side finding, outside this page:** the live `/services/cloud-and-hyperscaling` page shows four
case cards carrying prohibited statistics — xVision 99.7% / $50M, Meta Human 40% / 60%, xServe
45% / 78%, and the Canadian health platform's 80% — and none of the four are cloud cases. The
revamp should replace them with the RPG and AWS migration cases.

---

## Questions for Sana (asked 2026-09-17)

1. **RPG case — who and what?** The project register lists **Thyme Bank** for "RPG applications to
   private cloud"; the proof library describes the client as "a financial services firm
   specializing in asset management." Which is right? And if known: was it **IBM i / AS/400**, how
   many applications, and which private cloud? Draft uses "a financial services firm" (true either
   way).
2. **AWS ecommerce migration** — the "single-server to AWS" case is in the Oct 2025 case-card copy
   but not on the approved claims list. OK to publish? And did it genuinely run without downtime?
3. **Legacy stacks** — beyond RPG, single-server web apps, SAP data and SQL/stored procedures, has
   xLoop delivered on .NET Framework, Java EE, PHP, Oracle, COBOL/mainframe, VB6/Access, or Azure
   as a target? Only confirmed rows go in the From → To table.
4. **AI tooling in delivery** — do engineers actually use AI on modernization work (code
   comprehension, documentation, test generation, translation)? If yes, which parts — section 8
   becomes a differentiator. If no, section 8 is cut and the FAQ answer stays general.
5. **Entry offers** — can delivery commit to (a) a **Legacy Modernization Assessment** with a stated
   duration and the outputs listed, and (b) a **triage reply** within a stated number of business
   days? Is per-phase estimating how you actually price?

## Next steps

- [x] ~~Get answers to the five questions~~ — answered 2026-09-17
- [x] ~~Update draft and produce design/dev .docx~~ — `2026-09-17-legacy-system-modernization-page-spec.docx`
- [ ] Assign triage-reply owner and internal response target
- [ ] Seek SS&C permission to name them on the RPG-to-private-cloud case — would be the strongest proof on the page
- [ ] Add AI-tool use agreement to engagement kickoff; confirm Cursor/Claude data controls for client code

- [ ] Delivery lead reviews method claims in sections 7 and 12
- [ ] Build the Decision Guide PDF from sections 4, 5, 6 and 11
- [ ] Set up triage form routing rule in CRM
- [ ] Publish this page **before** the Digital Transformation hub links to it
- [ ] Add `llms.txt` sitewide
- [ ] Commission supporting articles 1–6 (article 7 only if RPG details confirmed)
- [ ] Replace prohibited stats on `/services/cloud-and-hyperscaling` during the revamp
