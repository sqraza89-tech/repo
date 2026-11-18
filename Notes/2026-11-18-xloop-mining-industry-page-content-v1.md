---
date: 2026-11-18
tags: [xloop, industry-page, mining, resources, data-engineering, legacy-modernization, ibm-datastage, cloud-pak-for-data, site-revamp, seo, aeo]
---

# Mining Industry Page · Content v1 (for design handoff)

**URL:** `/industries/mining` (new page; 404 today). Replaces Manufacturing in the Industries menu; 301 `/industries/manufacturing` → `/industries/mining` [CONFIRM: or to the industries index]
**Scope:** mining and resources companies. Data platforms and legacy modernization first (that's the delivered work), then AI for operations, safety and OT security
**Design:** the industry page pattern set by Banking & Finance (27 Oct)

---

## Page setup

| Field | Value |
|---|---|
| Title tag | `AI and Data Solutions for Mining \| xLoop` |
| Meta description | `Data platform modernization, AI for operations and safety, and OT security for mining companies, from legacy ETL migration to predictive maintenance.` |
| H1 | AI and Data Solutions for Mining |
| Nav label | Mining |
| Breadcrumb | Home › Industries › Mining |
| Schema | Service (`areaServed` + `audience`: mining and resources), each solution as its own `Service` entity in `hasOfferCatalog` · FAQPage · BreadcrumbList |
| Visible "Last updated" date | Yes |
| Lead form heading | Explore AI and Data for Mining |

**Build rules:** server rendered, one H1, real tables, anchor IDs, no counters, no typing animation.

---

## 1. Hero · `#top`

**Eyebrow:** Mining

**H1:** AI and Data Solutions for Mining

**Subhead:** Mines produce data from plant, fleet, geology and safety systems, often on platforms built decades ago. We modernize those data platforms without disrupting operations, then build the AI that runs on them.

**Primary CTA:** Book a 30 Minute AI Use Case Review →
**Small line under the CTA:** Bring one use case, from a legacy data platform to equipment failures. We'll tell you whether your data can support it, in 30 minutes.

*Build: hidden `source=industry-mining` tag. Same booking as the Applied AI pages.*

---

## 2. Answer block · `#what-is`

**H2:** How Is AI Used in Mining?

Mining companies use AI to predict equipment failures, monitor safety on site, plan production, and track processing and environmental data. xLoop helps mining companies modernize the data platforms underneath, such as legacy ETL pipelines, so that reporting and AI can run on data the business trusts.

*Plain text, never collapsed.*

---

## 3. Challenges · `#challenges`

**H2:** Mining Challenges We Solve

In mining, most AI plans run into the same obstacle first: critical data moves through old pipelines that are hard to change and can't be allowed to stop.

*Design: tabs on desktop, accordion on mobile. Each tab has the quote, what's underneath, what we do and its own CTA.*

| You're hearing | What's usually underneath | What we do | CTA |
|---|---|---|---|
| "Our ETL platform is reaching end of support." | Complex jobs, custom routines and dependencies nobody has fully mapped | Catalog the whole estate, flag what won't migrate cleanly, and design the target platform and migration waves | Plan our ETL migration → |
| "We can't risk downtime on production data." | Pipelines that feed daily operations, with no safe way to test a cutover | Migrate in waves, running old and new side by side until the numbers match | Plan a safe cutover → |
| "We don't see pipeline problems until reports are wrong." | Little monitoring of the pipelines themselves | Add monitoring and alerts to the data pipelines, so failures surface before the reports do | Improve pipeline monitoring → |
| "Equipment breaks down at the worst possible time." | Maintenance on fixed schedules, with sensor and fleet data nobody analyzes | Flag equipment likely to fail from sensor, usage and maintenance history | Plan predictive maintenance → |
| "Our plant network is connected to the corporate network." | OT systems reachable from IT, with no OT specific assessment | Assess OT passively, review segregation and close the paths an attacker could use | Assess our OT → |

---

## 4. Solutions · `#solutions`

**H2:** Our Solutions for Mining

xLoop's solutions for mining cover legacy data platform modernization, operational data platforms, predictive maintenance, site safety monitoring with computer vision, and IT and OT security.

*Design: five solution blocks, each linking to its service page. Each is its own `Service` entity in schema.*

| Solution | What we build | Service page |
|---|---|---|
| **Legacy data platform modernization** | Assessment, target architecture and wave by wave migration of legacy ETL platforms such as IBM DataStage to modern, containerized platforms | [Legacy System Modernization](/services/legacy-system-modernization) |
| **Operational data platforms** | Pipelines that bring plant, fleet, processing, safety and ERP data together, with monitoring built in | [Data Analytics & Engineering](/services/data-analytics) |
| **Predictive maintenance** | Models that use sensor, usage and maintenance history to flag haul trucks, crushers and plant equipment likely to fail | [Predictive Analytics](/services/predictive-analytics) |
| **Site safety monitoring** | Computer vision on existing cameras for safety gear, restricted zones and equipment status, processed on site | [Computer Vision](/services/computer-vision) |
| **IT and OT security** | Passive OT assessment, IT and OT VAPT, and network segregation review for plant and processing systems | [Cybersecurity Services](/services/cyber-security-service) |

---

## 5. Proof · `#proof`

**H2:** Our Work in Mining

xLoop assessed the legacy ETL estate of one of the largest gold mining companies in South Africa and designed its move to IBM Cloud Pak for Data.

*Card format: same as the Banking page. Anonymous but specific (Sana, 18 Nov: the client stays anonymous). One card; no filler.*

| Client | The problem | What we did | Result |
|---|---|---|---|
| **One of the largest gold mining companies in South Africa** | Legacy IBM DataStage 11.7 nearing end of support, with complex parallel jobs, sequence dependencies, custom BASIC routines that tools couldn't migrate automatically, and little pipeline monitoring. Mining data couldn't be disrupted during the move | Cataloged the full estate of jobs, sequences and parameter sets; audited routines and connectors for compatibility; designed a containerized target architecture on IBM Cloud Pak for Data and Red Hat OpenShift; sequenced an automated, wave by wave migration; and built an executive roadmap with a total cost of ownership model | A target architecture and a phased migration plan, designed for zero disruption cutover waves and real time pipeline monitoring |

*Design: show the five delivery steps as a small numbered strip inside the card: Estate discovery · Compatibility and routine audit · Containerized architecture · Automated wave migration · Executive roadmap and TCO.*

---

## 6. Built for operations that can't stop · `#continuity`

**H2:** Modernization Without Stopping the Mine

xLoop plans mining data work around one rule: production data keeps flowing while the platform changes underneath it.

- **Know the estate first.** Every job, dependency and custom routine is cataloged before anything moves
- **Move in waves.** Workloads migrate in planned waves, not one big switch
- **Run side by side.** Old and new pipelines run together until their outputs match
- **Watch the pipelines.** Monitoring and alerts are part of the new platform from day one
- **Fund it step by step.** An executive roadmap and cost model show what each phase delivers before it starts

---

## 7. At a glance · `#at-a-glance`

**H2:** Mining at a Glance

| | |
|---|---|
| Who we work with | Mining and resources companies |
| Common triggers | A data platform reaching end of support · fear of downtime during migration · pipelines nobody monitors · equipment failures · IT and OT networks connected |
| Solutions | Legacy data platform modernization · operational data platforms · predictive maintenance · site safety monitoring · IT and OT security |
| Delivered | Legacy ETL assessment and Cloud Pak for Data target architecture for one of the largest gold miners in South Africa |
| Platforms | IBM DataStage · IBM Cloud Pak for Data · Red Hat OpenShift |
| Where to start | 30 minute AI Use Case Review |
| Related | Legacy System Modernization · Data Analytics & Engineering · Energy & Utilities |

---

## 8. FAQ · `#faq`

**H2:** AI and Data in Mining FAQ

*All five go into FAQPage schema, with text identical to the page.*

**How is AI used in mining?**
Mining companies use AI to predict equipment failures, monitor safety through existing cameras, plan production and track processing data. All of it depends on reliable data pipelines, which is usually where xLoop starts.

**Can you migrate IBM DataStage to Cloud Pak for Data?**
Yes. We catalog the existing estate, audit routines and connectors for compatibility, design the target architecture on Cloud Pak for Data and OpenShift, and plan an automated migration in waves. We've done this assessment and design for one of the largest gold miners in South Africa.

**How do you avoid disrupting production data during a migration?**
We migrate in waves and run old and new pipelines side by side until their outputs match, so nothing is switched off until the new version is proven.

**What about custom routines that tools can't migrate?**
We flag them during the compatibility audit and plan how each one is rebuilt or replaced, so they don't surface as surprises halfway through the migration.

**How long does a first project take?**
An assessment and target architecture usually comes first, so the migration can be planned and funded in phases. [CONFIRM: typical length of the assessment phase.]

---

## 9. CTA band · `#start`

**H2:** Find the Right First Step for Your Mining Data

In 30 minutes our team will look at your data platform, the systems that feed it and what you want to do with it. You'll leave knowing whether it can work and what the first step should be.

**Proof line (above the button):** Trusted by one of the largest gold miners in South Africa to plan its data platform modernization.

**CTA:** Book a 30 Minute AI Use Case Review →

**Form fields:** Name · Work email · Company · Describe the use case in one line

*Four fields only (27 Oct convention).*

---

## 10. Related · `#related`

[Legacy system modernization](/services/legacy-system-modernization) · [Data analytics and engineering](/services/data-analytics) · [Predictive maintenance with predictive analytics](/services/predictive-analytics) · [AI for energy and utilities](/industries/energy-and-utilities)

**Resources:** [7 AI Use Cases South African Enterprises Are Investing In](/insights/blogs/ai-use-cases-south-african-enterprises) · [The Role of Generative AI in Accelerating Legacy System Modernization](/insights/blogs/the-role-of-generative-ai-in-accelerating-legacy-system-modernization)

---

## Internal notes (not for design)

**Conventions applied:** the 27 Oct page conventions, the industry pattern from Banking & Finance, yellow highlighted links (4 Nov). Industries plan: Mining replaces Manufacturing.

### Source

`Downloads/Harmony Gold.pptx` (one slide), shared by Sana 18 Nov: "IBM DataStage 11.7 to Cloud Pak for Data Migration & Roadmap". Client: **Harmony Gold, anonymous everywhere** (Sana, 18 Nov). Logo on logo walls only.

### Decisions

- **Descriptor:** "one of the largest gold mining companies in South Africa", anonymous but specific
- **Assessment and plan, not a completed migration.** The slide is titled "Migration & Roadmap" and the delivered steps are discovery, audit, architecture design, migration sequencing and an executive roadmap. So the card says xLoop *designed* and *sequenced* the move, never "migrated". Same rule as the Middle East group's Azure plan. [CONFIRM] if the migration itself was also delivered; if so, the card can say so
- **"30% faster workloads" and "50% lower ops cost"** are on the slide under "Business Value", next to "Quantified operational savings" in the TCO step. They read as projections from the roadmap's business case, not measured results. **Not used** until Sana confirms they were measured after a delivered migration
- **"Zero-disruption waves" and "real-time observability"** are written as design goals of the plan ("designed for…"), not outcomes
- **Solutions beyond modernization** (predictive maintenance, safety monitoring, OT security) are capabilities with proof from other industries, linked to their service pages. No mining delivery is claimed for them
- **Platforms row** names IBM DataStage, Cloud Pak for Data and OpenShift: real technologies in the engagement, useful for search ("DataStage to Cloud Pak for Data migration"). It is not a claim of IBM partnership
- **Resources:** the South Africa blog fits the client's market; the legacy modernization blog fits the delivered work. No mining specific blog exists

### Open [CONFIRM] items

1. Was the migration delivered, or the assessment and roadmap only?
2. Are 30% and 50% measured results or business case projections?
3. Typical length of the assessment phase
4. Manufacturing 301: to `/industries/mining` or to the industries index

## Next steps

- [ ] Sana: review and answer items 1 and 2
- [ ] Devs: build `/industries/mining`, replace Manufacturing in the menu, 301 Manufacturing; add Mining & resources link to the readiness tool's industry list
- [ ] Legacy System Modernization page: add this case as a card (DataStage → Cloud Pak for Data plan)
- [ ] Next: About Us
