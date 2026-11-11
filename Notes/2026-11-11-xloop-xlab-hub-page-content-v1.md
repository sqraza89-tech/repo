---
date: 2026-11-11
tags: [xloop, xlab, hub, ai-products, xvision, xserve, hr-app-pilot, chat-genie, site-revamp, seo, aeo]
---

# xLab Hub · Page Content v1 (for design handoff)

**URL:** `/xlab` (keep). `/xlab/design-studio` shows the same page today; **301 it to `/xlab`** (Sana, 11 Nov: xLab is the design studio, one page only)
**Children:** xVision · xServe · HR App Pilot · Chat Genie. xCrowdIQ, xVoltIQ and Meta Human are not featured (see internal notes)
**Scope:** xLoop's AI products and the product studio behind them. A routing page: what each product does, who it's for, the proof, and a way to find the right fit. Detail lives on the product pages
**Design:** the hub layout used for Applied AI Solutions and xSecurity, in the xLab look. Product cards are the main element

---

## Page setup

| Field | Value |
|---|---|
| Title tag | `xLab: AI Products and Custom AI Solutions \| xLoop` |
| Meta description | `xLab is xLoop's AI product studio: xVision video analytics, xServe AI ordering, HR App Pilot and Chat Genie, or build your own AI product with us.` |
| H1 | AI Products and Custom AI Solutions |
| Nav label | xLab (the top level menu label links here) |
| Breadcrumb | Home › xLab |
| Schema | `ItemList` of the four products, each as a `SoftwareApplication` (name, description, applicationCategory, url) · Service for custom AI product development · FAQPage · BreadcrumbList |
| Visible "Last updated" date | Yes |
| Lead form heading | Find the Right xLab Product |

**Build rules:** server rendered, one H1, real tables, anchor IDs, no counters, no typing animation. The live page repeats several sections twice in the HTML; render each once.

---

## 1. Hero · `#top`

**Eyebrow:** xLab

**H1:** AI Products and Custom AI Solutions

**Subhead:** xLab is where we turn the AI we build for clients into products you can deploy, and where we build new ones with you. Start with a product already working in banks and restaurant chains, or build your own on the same foundations.

**Primary CTA:** Book a 30 Minute Product Fit Call →
**Small line under the CTA:** Tell us the problem you want to solve. We'll tell you which product fits, or whether a custom build makes more sense, in 30 minutes.

*Build: hidden `source=xlab-hub` tag. The form's last field lets the visitor pick a product, so the right team takes the call.*

---

## 2. Answer block · `#what-is`

**H2:** What Is xLab?

xLab is xLoop's AI product studio. It offers four ready AI products, xVision for video analytics, xServe for AI ordering, HR App Pilot for employee services and Chat Genie for conversational data insights. xLab also builds custom AI products together with clients, from first idea to production.

*Plain text, never collapsed.*

---

## 3. Products · `#products`

**H2:** Our AI Products

xLoop's xLab products are built from client work, so each one started as a real problem in a real business.

*Design: four large product cards, equal weight. Each card: product name and logo, one line, who it's for, a proof line in words, two links. No percentages.*

| Product | One line | Built for | Proof line | Links |
|---|---|---|---|---|
| **xVision** | Computer vision that turns existing CCTV into live alerts and dashboards for queues, traffic, equipment and security | Banks, retail and other site networks | Monitoring 1,200 bank branches and more than 7,000 cameras across South Asia | [Explore xVision](/xlab/xVision) · [Computer vision services](/services/computer-vision) |
| **xServe** | An AI ordering agent that takes orders in natural conversation at peak hours, suggests upsells and answers nutrition questions | Quick service restaurant chains | Handling peak hour orders for a leading Saudi Arabian fast food chain, in English, Urdu and Arabic | [Explore xServe](/xlab/xServe) · [AI agents services](/services/ai-agents-and-autonomous-systems) |
| **HR App Pilot** | An AI assistant that answers policy questions, handles leave, documents and claims, and takes action in your HR and ERP systems | HR teams in mid size and large organizations | Handling employee requests, from salary slips to medical claims, for a bank in Pakistan | [Explore HR App Pilot](/xlab/hr-app-pilot) · [AI agents services](/services/ai-agents-and-autonomous-systems) |
| **Chat Genie** | Ask your business data questions in plain language and get answers, charts and summaries, without waiting for a report | Business and operations teams | [CONFIRM: delivered client, in words] | [Explore Chat Genie](/xlab/chat-genie) · [LLM services](/services/large-language-models) |

---

## 4. Which product fits · `#which`

**H2:** Which xLab Product Fits Your Problem?

Start with the problem. If none of these match, xLab builds the product that does.

*Design: a two column "If… then…" list, HTML text.*

| If you are… | Start with |
|---|---|
| Recording CCTV across many sites that nobody watches | [xVision](/xlab/xVision) |
| Losing orders or upsells at peak hours in restaurants | [xServe](/xlab/xServe) |
| Answering the same HR questions and requests every day | [HR App Pilot](/xlab/hr-app-pilot) |
| Waiting on analysts for every business question | [Chat Genie](/xlab/chat-genie) |
| Facing a problem no product solves yet | [A custom product with xLab](#custom) |

---

## 5. Custom products · `#custom`

**H2:** Build Your Own AI Product With xLab

xLab builds custom AI products together with clients, using the same six step process that produced every xLab product.

*Design: six step strip, HTML text, then one CTA. Step names kept from the live page, in US spelling.*

| Step | What happens |
|---|---|
| **1. Empathize** | Spend time with the people who have the problem, and see how the work is done today |
| **2. Profile** | Define the users, the data available and the result that would count as success |
| **3. Ideate** | Explore approaches with your team and pick the one worth building |
| **4. MVP** | Build a working first version on your own data |
| **5. Test** | Put it in front of real users, measure it and fix what doesn't work |
| **6. Upscale** | Harden it for production, roll it out and keep improving it |

**CTA:** Start a custom AI product → `#start` (same form, "A custom product" option)

---

## 6. Built for production · `#production`

**H2:** What Every xLab Product Has in Common

Every xLab product is built to run inside a real business, not just in a demo.

- **Runs on your systems.** Connects to the cameras, ordering channels, HR and ERP systems and databases you already use
- **Configured to your business.** Your policies, menu, rules and data, not a generic setup
- **People stay in charge.** Products hand over to staff for anything that needs judgment
- **Deploys where you need it.** Cloud, private cloud or on premise, depending on the product and your data rules
- **Security tested.** Each deployment is tested for data leakage and misuse before it goes live

---

## 7. Proof · `#proof`

**H2:** xLab Products in Use

xLab products are running in a bank with 1,200 branches, a leading Saudi Arabian fast food chain, and a bank in Pakistan.

*Card format: same as the Applied AI hub. Anonymous but specific. No percentages. Replaces the live "Some Cool Stuff We've Built" block.*

| Client | Product | The problem | What we deployed | Result |
|---|---|---|---|---|
| **A bank with 1,200 branches across South Asia** | xVision | More than 7,000 cameras, but manual review covered about 20 minutes per branch each month | xVision on the existing CCTV, tracking wait times, customer traffic, ATM status, staff on the floor and suspicious activity | Continuous, automated monitoring across every branch, in place of monthly spot checks |
| **A leading Saudi Arabian fast food chain** | xServe | High order volumes at peak hours | xServe taking orders at peak times in natural conversation, suggesting upsells and providing nutritional information, in English, Urdu or Arabic | Peak hour orders handled by AI, with upsell suggestions and nutrition details built into the ordering flow |
| **A bank in Pakistan** | HR App Pilot | Employees waited on HR for routine services such as salary slips, leave, loans and medical claims | HR App Pilot as a conversational assistant that fetches salary slips, checks eligibility and submits loan, leave and claim requests | Employee services on demand, with less manual work for HR |

---

## 8. At a glance · `#at-a-glance`

**H2:** xLab at a Glance

| | |
|---|---|
| What it is | xLoop's AI product studio |
| Products | xVision · xServe · HR App Pilot · Chat Genie |
| Custom products | Empathize · Profile · Ideate · MVP · Test · Upscale |
| In use at | A bank with 1,200 branches · a leading Saudi Arabian fast food chain · a bank in Pakistan |
| Deployment | Cloud · private cloud · on premise |
| Where to start | 30 minute Product Fit Call |
| Related | Applied AI Solutions · AI Agents · Computer Vision · Data & AI Consulting |

---

## 9. FAQ · `#faq`

**H2:** xLab FAQ

*All five go into FAQPage schema, with text identical to the page.*

**What is xLab?**
xLab is xLoop's AI product studio. It offers ready AI products, xVision, xServe, HR App Pilot and Chat Genie, and builds custom AI products together with clients.

**Should we use an xLab product or build a custom solution?**
If an xLab product matches your problem, start with it: it is already proven in production and faster to deploy. If your problem is different, xLab builds a custom product with the same process and foundations.

**Can xLab products be customized?**
Yes. Each deployment is configured to your systems, data, rules and language, and we extend the product where your process needs it.

**Can xLab products run on our own infrastructure?**
Yes. Depending on the product and your data rules, they can run in the cloud, in your private cloud or on premise. xVision, for example, can process video on site so footage doesn't leave the premises.

**How long does it take to deploy an xLab product?**
[CONFIRM with Irfan: typical deployment time for a configured product, and how it compares with the six to twelve week custom AI pilot.] We agree the timeline once we understand your systems and requirements.

---

## 10. CTA band · `#start`

**H2:** Find the Right xLab Product for Your Problem

In 30 minutes we'll talk through the problem you want to solve and tell you which xLab product fits, or whether a custom build makes more sense.

**Proof line (above the button):** Running in a bank with 1,200 branches, a leading Saudi Arabian fast food chain and a bank in Pakistan.

**CTA:** Book a 30 Minute Product Fit Call →

**Form fields:** Name · Work email · Company · Which product? (xVision · xServe · HR App Pilot · Chat Genie · A custom product · Not sure)

*Four fields only (27 Oct convention).*

---

## 11. Related · `#related`

[All applied AI solutions](/services/applied-ai-solutions) · [AI agents and autonomous systems](/services/ai-agents-and-autonomous-systems) · [Computer vision and video analytics](/services/computer-vision) · [Data and AI consulting](/ai-consultancy)

**Resources:** [CONFIRM: two live blogs about xLab products, if any; otherwise the AI agents and computer vision blogs]

---

## Internal notes (not for design)

**Conventions applied:** the 27 Oct page conventions, yellow highlighted links in the docx (4 Nov). Hub pattern from Applied AI Solutions and xSecurity.

### What's wrong with the live page (11 Nov)

| Live | Problem | In this version |
|---|---|---|
| `/xlab` and `/xlab/design-studio` show the same page (title "xLab Design Studio") | Duplicate content; no hub for the products | One page at `/xlab`: products plus custom builds. 301 `/xlab/design-studio` → `/xlab` (Sana, 11 Nov) |
| xVision "99.7% Detection Rate", "$50M Recalls Prevented" | Blocked (C5) | Removed. Words only |
| Meta Human "40% Increased Visitor Engagement", "60% Higher Query Volume" | Blocked (C8) | Removed, and Meta Human not featured |
| Canadian health "80% Reduction in Search Time", "100% Archived Data Utilization" | 80% evidence required (P-07) | Removed. That case belongs on the LLM page, not here (it's a service build, not a product) |
| xServe "45% Faster Order Processing", "78% Decrease in Order Errors" | Not approved (B5) | Removed. Words only |
| "20% Utilization: Off-the-shelf solutions fall short with clients using only a fraction of their product's potential" | Uncited | Removed |
| "Diversity, equity, and inclusion fuels our innovation. At xoop…" under "Rapid Product Development with Design Thinking" | Off topic, and a typo ("xoop") | Replaced with a description of each step |
| "Empathise" | British spelling | "Empathize" |
| "Collaborative Innovation… Instant Solutions: real-time support from a community" | Vague; implies a community that isn't described anywhere | Removed |
| Sections repeated twice in the HTML | Duplicate content | Render once |
| "cutting-edge", "Unlock", "Leverage", "empower" | Banned words | Removed |

### Decisions

- **Four products featured:** xVision, xServe, HR App Pilot and Chat Genie (Sana confirmed all four as products, 15 Sep). Custom builds are a section on the same page, not a separate Design Studio page (Sana, 11 Nov: xLab is the design studio)
- **Not featured on the hub:** **xCrowdIQ** (experimental; the Qatar plan is internal and no delivery exists) · **xVoltIQ** (likely partner technology; its 15% and 20% figures are blocked, C10) · **Meta Human** (blocked figures; the brain says decide invest or retire). Recommendation: remove all three from the xLab menu, and either noindex the pages or redirect them to `/xlab`, until each has a decision. **Needs Sana's decision**
- **HR App Pilot proof:** the case study (Apr 2026) shows the product inside a Pakistani bank (salary slips, provident fund loans, OPD claims, "Alfalah Kamyab Karobar Account" in a screenshot). Written as "a bank in Pakistan". Its "92% client retention, 98% satisfaction, 75+ projects" block is the blocked sitewide set (C7, C4) and is not used
- **Naming:** the brain flags three things called "App Pilot". This page uses **HR App Pilot** only for the HR product. The Alfalah Investments LLM assistant is described as an investment assistant elsewhere, never as App Pilot
- **Chat Genie proof:** the case study PDF couldn't be read here (no PDF renderer on this machine). [CONFIRM] the delivered client in words. **Possible link:** Irfan's Pick n Pay document describes an executive conversational BI agent and a data discovery agent built on Snowflake Cortex. If those were built as Chat Genie, it would be Chat Genie's strongest proof. Ask Irfan before claiming it
- **CTA:** "Product Fit Call". No demo or "show it working" promise on the first call (Sana, 11 Nov): a custom build doesn't exist yet, and a configured product can't be shown before setup. The call recommends a product or a custom build

### Pick n Pay projects (Irfan, 11 Nov) and where they go

Irfan's document lists four Pick n Pay projects. They are services work, so they belong on the service and industry pages, not this hub. Full notes: [[2026-11-11-xloop-pick-n-pay-projects-proof]].

### Open [CONFIRM] items

1. Sana: remove xCrowdIQ, xVoltIQ and Meta Human from the xLab menu, and noindex or redirect their pages?
2. Chat Genie proof line: ask Irfan if a client has used it (and whether the Pick n Pay executive BI agent was Chat Genie). Fallback until then (Sana may paste it): "Connects to your existing databases and BI tools", or no proof line on that card
3. HR App Pilot client descriptor: "a bank in Pakistan" OK?
4. Irfan: typical deployment time for a configured xLab product
5. Live blogs about xLab products for Resources

## Next steps

- [ ] Sana: review, and decide on xCrowdIQ, xVoltIQ, Meta Human
- [ ] Devs: replace `/xlab` with this page; 301 `/xlab/design-studio` → `/xlab`; remove "Design Studio" from the xLab menu
- [ ] Next: the product pages (xVision, xServe, HR App Pilot, Chat Genie)
