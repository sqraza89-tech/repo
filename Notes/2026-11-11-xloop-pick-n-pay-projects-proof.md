---
date: 2026-11-11
tags: [xloop, proof, case-study, pick-n-pay, retail, snowflake, cortex, ai-agents, data-engineering]
---

# Pick n Pay projects · proof for the website and portfolio

**Source:** `Downloads/Pick n Pay - projects (1).pdf`, from Irfan Shaikh (11 Nov 2026), "all the projects we've done with Pick n Pay"
**Public use:** anonymous everywhere, "a leading South African retailer" (case study rule, 23 Oct). The Pick n Pay logo may appear on logo walls only
**Technology:** Snowflake, MySQL, Power BI, Streamlit, Snowflake Cortex, Cortex Analyst, Cortex Agents

Related: [[2026-11-10-xloop-retail-ecommerce-industry-page-content-v1]] · [[2026-10-05-xloop-data-analytics-page-content-v1]] · [[2026-10-23-xloop-ai-agents-page-content-v1]] · [[2026-11-11-xloop-xlab-hub-page-content-v1]]

## The four projects, as anonymous cards

Wording follows the site card format (client · problem · what we built · result). No dashes, US spelling.

| # | Project | The problem | What we built | Result |
|---|---|---|---|---|
| 1 | **Snowflake migration and data platform modernization** | Power BI reports ran heavy transformation logic directly on MySQL source databases. Model refreshes took five to six hours and clashed with each other, holding up operations teams every day | Migrated the MySQL data to Snowflake, built a medallion architecture (bronze, silver and gold layers) and data pipelines, moved the transformations into Snowflake, and built curated views for Power BI and other teams | **Report refresh time cut from five to six hours to 10 to 15 minutes**, with simpler maintenance |
| 2 | **AI data dictionary and completeness checks** | A growing Snowflake inventory with no central documentation, so users couldn't tell what fields meant or how complete the data was | A data dictionary that uses AI to explain tables and columns in business language, field level completeness checks across hundreds of tables, and a Streamlit app inside Snowflake to explore both | Users find data and judge its completeness without digging through database structures |
| 3 | **Executive conversational BI agent** | Executives depended on analysts and prepared reports for every question and follow up | Semantic views defining business metrics, with Cortex Analyst and a Cortex Agent so executives ask questions in plain English: orders and deliveries, revenue, average order value, units per order, perfect order rate, campaigns, driver and store performance. It also explains unusually high or low figures. Access is restricted by identity to authorized executives | Executives get answers and follow ups themselves, without waiting for an analyst or a report |
| 4 | **Conversational data discovery agent** | Analysts and data scientists couldn't find the right datasets across hundreds of tables without engineering help | An agent in a Streamlit app inside Snowflake: users describe the data they need in plain language, and it finds matching datasets and ranks them by fields, completeness and volume | Analysts find suitable data themselves, without searching hundreds of tables or waiting for engineers |

**Words to drop from the source:** "Empowered" (banned word), "instantly" (absolute), "6x" in "Migrated… MySQL data infrastructure 6x to Snowflake" (meaning unclear; see questions).

## Why it matters

- **Project 1 is the strongest measured result xLoop has**: a before and after from the delivery lead, specific and checkable (5 to 6 hours → 10 to 15 minutes). It can be used as a number, unlike the blocked percentages
- **Projects 3 and 4 are delivered agentic AI** on a client's production data platform. Until now the AI Agents page had the reconciliation agent and xServe; these add data and analytics agents
- **Project 2** is a clean, practical example for the data readiness blog and the Data & AI Readiness Assessment (completeness checks across hundreds of tables)

## Where to use it

| Page | Use |
|---|---|
| Data Analytics & Engineering | Project 1 as the lead card, with the refresh time result. Project 2 as a second card |
| AI Agents & Autonomous Systems | Projects 3 and 4 as cards |
| Large Language Models / Generative AI | Project 3 (natural language over business data) |
| Retail & eCommerce industry (10 Nov) | Update the South African retailer card; add project 3 |
| Data & AI Consulting | Project 2 or 4 as readiness examples |
| xLab hub, Chat Genie | Only if project 3 was built as Chat Genie (ask Irfan) |
| Homepage case card | Project 1 result in words and the number |
| Portfolio | One case study page covering all four, anonymous |

## Conflict with what's already published

The site currently says (approved claim A9, CTO 17 Sep): *"Data spread across SAP ERP, SAP BW and application databases… a centralized lakehouse on Snowflake and AWS."* Irfan's document says the source was **MySQL**, with Power BI on top, and doesn't mention SAP or AWS.

These may be two phases of the same program, or the earlier wording may be wrong. Until Irfan confirms, don't change the live cards, and don't publish both versions side by side.

## Questions for Irfan

1. SAP ERP and SAP BW (as on the site) or MySQL (as in this document), or both, at different stages?
2. What does "6x" mean in "Migrated Pick n Pay's existing MySQL data infrastructure 6x to Snowflake"? Six databases? Six times faster?
3. Was the executive conversational BI agent built as Chat Genie, or as a custom build on Cortex?
4. Is the 10 to 15 minute refresh time OK to publish as a number (anonymous)?
5. Dates or duration for each project, for the portfolio page

## Next steps

- [ ] Sana: send the five questions to Irfan
- [ ] After his answers: update the Data Analytics, AI Agents and Retail pages, and the marketing brain (A9, proof library)
- [ ] Portfolio: one anonymous case study page covering all four projects
