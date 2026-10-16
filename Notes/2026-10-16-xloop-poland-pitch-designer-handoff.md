---
date: 2026-10-16
tags: [xloop, poland, pitch-deck, designer-handoff, omais]
---

# Poland pitch deck: designer handoff for Omais

Related: [[2026-10-16-xloop-poland-pitch-sales-brief-deck]] · [[2026-09-29-decks-library-slide-review]] · [[2026-10-13-xloop-poland-vendor-pitch-deck]]

> **Warning (2026-10-16):** the live Decks.pptx now has **104 slides** (was 110 at the 29 Sep review) and the early slides are reordered. The slide numbers below are out of date until they are re-mapped against a fresh copy.

## Brief for Omais

- **Source file:** `Decks.pptx` on SharePoint. Slide numbers below are from the 29 Sep review. Check they still match before copying
- **Length:** 10 slides. Five case studies (slides 5 to 9), with credentials and story around them
- **Look:** modern and premium. Style reference is the Gamma version of Deck B (dark navy, large type, few words per slide): https://gamma.app/docs/gk5p655q5rjxcif
- **Brand:** xLoop palette, Poppins, xLoop logo on every slide
- **Client names:** **no client names or client logos anywhere.** Use the descriptors given below. This includes names inside screenshots
- **Copy rules:** use the text below as written. US spelling. No dashes in sentences. Do not add numbers that are not in this document

## Slide by slide

### Slide 1: Cover (reuse slide 19)
- **Title:** AI Consulting and Data Engineering for Polish Enterprises
- **Subtitle:** Where Impactful AI Begins
- **Footer:** xLoop Digital · October 2026

### Slide 2: Credentials (reuse slide 3, edit)
- **Title:** xLoop at a Glance
- **Stat tiles:**
  - **90** people, engineers and consultants
  - **2022** founded
  - **4** offices: San Mateo, Dubai, Doha, Karachi
  - **Team in Europe:** based in Hungary
- **Tiles waiting on sales (leave a space, do not fill yet):**
  - Countries served: [number, once sales sends the list]
  - Revenue run rate: **$[X]M+** annual revenue run rate, *as of [month] 2026*. Sales asked to show it (2026-10-16); figure, as-of month, and whether "$5M+" is run rate or annual revenue still to confirm
- **Partner logos:** AWS, Microsoft, Snowflake, Databricks, Salesforce
- **Line under the partners:** Certified ISO 42001 and ISO 27001 Lead Auditors on our team
- **Map:** keep it. Add Hungary. Show only the countries on the sales list once it arrives
- **Remove:** 120+ employees, 7+ countries, 75+ solutions, 10+ countries served

### Slide 3: AI First (NEW)
- **Title:** AI First: How We Rebuilt xLoop
- **Subtitle:** We changed how we work before we asked clients to change theirs.
- **Two columns, Then and Now:**

| Then | Now |
|---|---|
| Software and data engineering services | AI native delivery: engineers work with AI coding assistants, and an engineer reviews and tests every change |
| Products built for one client at a time | Our own AI products: xVision, Chat Genie, App Pilot, xServe |
| AI projects as pilots | AI agents built for production on an 11 stage reference architecture, from input guardrails to observability |
| Security as a separate service | AI security built in: red teaming, AI security audits, certified ISO 42001 and ISO 27001 Lead Auditors |

- **Bottom band, three labels:** Data foundation · AI agents in production · AI security and governance
- **Visual:** a small version of the 11 stage architecture graphic from slide 24 can sit behind the Now column

### Slide 4: Industries We Serve (rebuild slide 17 as a sector grid)
- **Title:** Industries We Serve
- **Six tiles. Descriptors only, no logos:**

| Sector | Who | What we did |
|---|---|---|
| Banking and financial services | A leading asset management firm · A UAE commercial bank · A financial services firm | AI investment assistant · Migration to Microsoft Azure · COBOL to Java modernization with AI |
| Retail | A leading South African retailer · A fast food chain in Saudi Arabia · A large retail and real estate group in the Middle East | Single source of truth on Snowflake · AI ordering with xServe · Cloud migration planning |
| Real estate | A leading UAE real estate group | Data platform on Databricks |
| Healthcare | A Canadian healthcare platform · One of Pakistan's leading NGOs | AI search over video recordings, security testing · National immunization platform |
| Maritime and logistics | A global maritime services company · A container depot | Data platform on Databricks · Operations modernization |
| Travel | A travel insurance provider | AI claims app |

- **Mining:** no tile until delivery confirms a project

### Case study layout (slides 5 to 9)
- Use the same structure on every case: **Client** (descriptor) · **Challenge** · **What we did** · **Result** · **Technology**
- No percentages or result numbers unless they appear below

### Slide 5: Case 1, Banking (reuse slide 27, edit)
- **Title:** AI Investment Assistant for an Asset Management Firm
- **Client:** A leading asset management firm
- **Challenge:** Investors faced 40+ page fund reports, slow research and unclear risk profiles.
- **What we did:** Built an LLM investment assistant with plain language risk profiling, personalized fund suggestions, fund performance comparison and a conversational interface available 24/7.
- **Result:** Investors get answers from long fund reports in plain language.
- **Technology:** LLM, conversational AI
- **Remove:** client name and logo, and any result percentage

### Slide 6: Case 2, Retail (reuse slide 25, rewrite text)
- **Title:** One Source of Truth for a Leading Retailer
- **Client:** A leading South African retailer
- **Challenge:** Data sat in SAP ERP, SAP BW and application databases, with several competing sources of truth and no unified view.
- **What we did:** Built a central data warehouse on Snowflake with a medallion architecture, moved traditional databases to a cloud lakehouse on Snowflake and AWS, and optimized the pipelines end to end.
- **Result:** One trusted source of truth for reporting, data analysis, data science models and AI.
- **Technology:** Snowflake, AWS, Power BI, medallion architecture
- **Remove:** "manually fetched", "data delays", "real-time Power BI", the client name and logo

### Slide 7: Case 3, Healthcare (reuse slide 28, edit)
- **Title:** AI Search Across Thousands of Recordings
- **Client:** A Canadian healthcare platform
- **Challenge:** Thousands of video recordings sat unprocessed, so the insights inside them were out of reach.
- **What we did:** Built a transcription engine that turns recordings into searchable text on Amazon S3, with retrieval augmented generation over an LLM, a natural language chatbot and a React dashboard.
- **Result:** Staff ask a question and get answers from the full archive.
- **Technology:** Python, FastAPI, React, Amazon S3, RAG, LLM
- **Remove:** "80% reduction in search time" if it appears (no source)

### Slide 8: Case 4, Gulf data platforms (NEW, use the slide 6 case layout)
- **Title:** One Source of Truth for Gulf Enterprises
- **Challenge:** Analytics teams could not get full value from data spread across many systems.
- **What we do:** We build one trusted data platform on Databricks and Microsoft Azure, so leadership decides from the same numbers.
- **Three rows:**

| Client | Sector | Engagement |
|---|---|---|
| A UAE commercial bank | Banking | Migration to Microsoft Azure |
| A leading UAE real estate group | Real estate | Data platform on Databricks |
| A global maritime services company | Maritime | Data platform on Databricks |

- **Callout, labeled as industry data:** 331% ROI reported for Azure Databricks deployments
- **Source line under the callout:** Forrester Total Economic Impact study, commissioned by Microsoft
- Sana to check the 331% figure on Forrester's page before the deck goes out: https://tei.forrester.com/go/Microsoft/Databricks

### Slide 9: Case 5, Poland (reuse slide 92, edit)
- **Client:** A Polish fintech company
- **Keep:** the existing challenge and solution text
- **Change:** "ironclad security" and "Fortified Security… trust and compliance" to "Security and compliance built in"
- **Fix:** "Jango" to "Django"
- **Remove:** client name and logo, and any result number

### Slide 10: Why xLoop for Poland (NEW, can reuse the slide 109 quote styling)
- **Title:** Why xLoop for Poland
- **Three points:**
  1. **We already deliver for Polish companies:** a fintech platform, plus application modernization and a SIEM migration for Cloud Titans.
  2. **People in your time zone:** team members based in Hungary.
  3. **AI first, with security built in:** certified ISO 42001 and ISO 27001 Lead Auditors on our team.
- **Quote (word for word, do not edit):** "xLoop architects meticulously planned and executed the migration, ensuring minimal disruption to our operations."
- **Attribution:** John Waterhouse, Founder and CEO, Cloud Titans Ltd
- **Next step line:** Pick one business and one use case. We start with a discovery and show you a working plan.
- **Contact:** sales@xloopdigital.com · www.xloopdigital.com
- Do not reuse slide 110 as is: its title has ghost text behind it

## Kept out on purpose
- 150+ consultants (HR figure is 90), "3 years in business" (founded 2022)
- "30% increase in profitability" for Polish clients and "in the Middle East we salvaged": no source yet
- All client names except Cloud Titans in its own signed testimonial
- Harmony Gold and a Mining tile: no project record

## Next steps
- [ ] Sana: send this file to Omais
- [ ] Sana: ask sales for the list of countries served and whether the CEO approves showing revenue
- [ ] Sana: check the 331% figure on Forrester's page
- [ ] Omais: confirm slide numbers, build the 10 slides, strip all client names and logos
- [ ] Sana: final claims check on Omais's draft before it goes to sales
