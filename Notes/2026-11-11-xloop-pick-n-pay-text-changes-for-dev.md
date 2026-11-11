---
date: 2026-11-11
tags: [xloop, dev-handoff, text-changes, pick-n-pay, south-african-retailer, site-revamp]
---

# South African Retailer Case · Text Changes for Dev and Design

**Why:** the South African retailer case (Pick n Pay, always anonymous) now follows the delivery lead's project document (11 Nov). The old wording, "SAP ERP, SAP BW and application databases… single Snowflake source of truth", is replaced everywhere. Text changes only; no layout changes.
**Source:** [[2026-11-11-xloop-pick-n-pay-projects-proof]]

**Live now (change first):** the data checklist blog and the old Predictive Analytics page. Every other page below is still in design.

---

## Standard replacement text

Use this wherever the case appears as a card.

| Field | New text |
|---|---|
| Client | A leading South African retailer *(keep the descriptor each page already uses)* |
| The problem | Power BI reports ran heavy transformation logic directly on MySQL source databases, so model refreshes took five to six hours and clashed with each other |
| What we built | Migrated the data to Snowflake with a medallion architecture, moved the transformations into Snowflake, and built curated views for Power BI and other teams |
| Result | Report refresh time cut from five to six hours to 10 to 15 minutes, with simpler maintenance |
| Card headline (pages that use "from → to" headlines) | MySQL reporting → a Snowflake medallion platform |

---

## 1. Data checklist blog · LIVE

**Page:** `/insights/blogs/is-your-data-ready-for-ai-checklist` · section "What should I fix before starting an AI project?"

**Find:**
> In practice, the fix that helps most is usually a single source of truth. One retailer we worked with had data spread across SAP ERP, SAP BW and application databases, with no unified view and several competing versions of the same numbers. We consolidated it into a single Snowflake source of truth, built in layers that keep raw, cleaned and business ready data apart. Reporting, data analysis, data science models and AI use cases now run from one trusted source.

**Replace with:**
> In practice, the fix that helps most is usually moving the work into one well built platform. One retailer we worked with ran its Power BI reports directly on MySQL source databases, with heavy transformation logic inside the reports, so refreshes took five to six hours. We moved the data to Snowflake, built in layers that keep raw, cleaned and business ready data apart, and moved the transformations into Snowflake. Refreshes now take 10 to 15 minutes.

---

## 2. Predictive Analytics · new copy in design (old page live)

**Proof card** ("A leading South African retailer"): replace The problem, What we built and Result with the standard text above.

*The live page still says "shifting from SAP and fragmented databases to a Snowflake-based Lakehouse". It goes away when the new page ships; if the new page is weeks away, dev can swap that sentence for the Result line above.*

---

## 3. Data Analytics & Engineering · in design

| Where | Find | Replace with |
|---|---|---|
| Proof card headline | SAP ERP, SAP BW and app databases → one Snowflake source of truth | MySQL reporting → a Snowflake medallion platform |
| Proof card: What we built | Built a centralized lakehouse on Snowflake and AWS with a medallion architecture, and moved every source into it | Migrated the data to Snowflake with a medallion architecture, moved the transformations into Snowflake, and built curated views for Power BI and other teams |
| Proof card: Result | Reporting, data analysis, data science models and AI use cases now run from one trusted source | Report refresh time cut from five to six hours to 10 to 15 minutes, with simpler maintenance |
| At a glance: Delivered | SAP ERP/BW → Snowflake lakehouse | MySQL → Snowflake (report refresh 5 to 6 hours → 10 to 15 minutes) |

---

## 4. Legacy System Modernization · in design

| Where | Find | Replace with |
|---|---|---|
| Proof card headline | SAP ERP, SAP BW and app databases → one Snowflake source of truth | MySQL reporting → a Snowflake medallion platform |
| Proof card: What we did | Brought data from every source into a single governed platform | Migrated the data to Snowflake with a medallion architecture, moved the transformations into Snowflake, and built curated views for Power BI and other teams |
| Proof card: Result | Reporting, analysis, data science and AI now run from one trusted source | Report refresh time cut from five to six hours to 10 to 15 minutes, with simpler maintenance |
| At a glance: Delivered from → to | SAP ERP/BW → Snowflake | MySQL → Snowflake |

---

## 5. Data & AI Consulting · in design

**Proof card** ("One of the largest South African retailers"): replace The problem, What we built and Result with the standard text above.

---

## 6. Homepage · in design

**Case card** (South African retailer):

**Find:**
> Brought data from SAP ERP, SAP BW and application databases into a single Snowflake source of truth, so reporting, data analysis, data science models and AI use cases all run from the same trusted data.

**Replace with:**
> Moved reporting from MySQL to Snowflake and cut report refresh time from five to six hours to 10 to 15 minutes.

---

## 7. Digital Transformation hub · in design

| Where | Find | Replace with |
|---|---|---|
| Case line | Brought a leading South African retailer's SAP ERP, SAP BW and application databases into a single Snowflake source of truth for reporting, analytics, data science and AI. | Moved a leading South African retailer's reporting from MySQL to Snowflake, cutting report refresh time from five to six hours to 10 to 15 minutes. |
| "We work with what you already have" paragraph | …including consolidating SAP ERP, SAP BW and application databases into a single Snowflake source of truth. | …including moving a leading South African retailer's reporting from MySQL to Snowflake and cutting refresh time from hours to minutes. |

---

## Already done

- **Retail & eCommerce industry page** (10 Nov copy): updated 11 Nov, with a second card for the executive AI agent

## Not changed

- The Data Analytics services table line "ETL/ELT from ERP, SAP, application databases and files" describes a general capability, not this case. Left as is

## Next steps

- [ ] Dev: blog paragraph (live) first, then the Predictive Analytics live sentence if the new page is weeks away
- [ ] Design: items 2 to 7 in the files they hold
