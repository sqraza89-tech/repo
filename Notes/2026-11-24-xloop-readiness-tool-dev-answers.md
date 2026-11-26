---
date: 2026-11-24
tags: [xloop, data-ai-readiness, dev-handoff, lead-scoring, emails]
---

# Data & AI Readiness Tool: answers for dev (Zeeshan)

Answers to the five questions and the defaults. Sources: v4 workbook (`2026-10-28-xloop-data-ai-readiness-assessment-v4.xlsx`) and the user flow and emails doc (`2026-11-13-xloop-readiness-tool-user-flow-and-emails.docx`). Related: [[2026-11-13-xloop-readiness-tool-user-flow-and-emails]] · [[2026-11-18-xloop-data-ai-readiness-assessment-seo-pack]]

## 1. Who signs the emails

| Emails | Signed by |
|---|---|
| Data and AI blocks (Data Trust, Data Access, Use Case & Value, Delivery Capability) | **Irfan Shaikh, Senior Solution Architect, xLoop** [Sana to confirm] |
| Safe to Scale blocks (Shadow AI & Data Protection, Governance & Oversight) | **Farrukh Feroze, Head of AI Security, xSecurity**, same as the AI Security tool |

The signer is also the person who answers replies to the P.S. ("Reply with the one question you most want answered").

## 2a. Short names for the 7 blocker questions (results page)

| ID | Question | Short name |
|---|---|---|
| D1.1 | Where does the data your initiative needs live today? | Data is hard to reach |
| D2.1 | If two teams report the same number, do they match? | Numbers don't match across teams |
| A1.2 | If the pilot works, who pays for the rollout? | No funded owner for rollout |
| A2.1 | Who would build and look after it? | No team to build and run it |
| S1.1 | What happens if someone pastes a client contract into a public AI chatbot? | Company data can leak into public AI tools |
| S2.1 | Who can approve a new AI use case going live? | No approval step before go live |
| S2.3 | Before an AI answer reaches a customer, what checks it? | AI answers aren't checked before release |

## 2b. Plain wording for the 8 initiative choices

The question keeps its full options. The `{initiative}` merge field in emails and the report uses the short form.

| X1 option (as asked) | `{initiative}` in emails and report |
|---|---|
| One trusted set of numbers we can report on | one trusted set of numbers |
| Forecasting and decision support from our data | forecasting and decision support |
| Getting off legacy systems that hold us back | moving off your legacy systems |
| Answers and summaries from our own documents | answers from your own documents |
| An assistant that handles customer questions | a customer assistant |
| Agents that complete multi step work across systems | AI agents for multi step work |
| Visual inspection or video analytics | visual inspection and video analytics |
| Not decided yet | your first AI initiative |

## 3. Which page each initiative links to

| Initiative | Page |
|---|---|
| One trusted set of numbers | `/services/data-analytics` |
| Forecasting and decision support | `/services/predictive-analytics` |
| Moving off legacy systems | `/services/legacy-system-modernization` |
| Answers from your own documents | `/services/large-language-models` |
| **Customer assistant** | `/services/large-language-models` (assistants built on your own data; the investment assistant is the proof there) |
| AI agents for multi step work | `/services/ai-agents-and-autonomous-systems` |
| Visual inspection and video analytics | `/services/computer-vision` |
| Not decided yet | `/ai-consultancy` (Data & AI Consulting; the old `/services/ai-consulting-and-development` now redirects here) |

**Priority domain routing (unchanged from the flow doc, URL updated):** Use Case & Value → `/ai-consultancy` (not the old consulting URL). Shadow AI and Governance → the AI Security page.

## 4. Client proof lines (all anonymous)

**For the Data Access & Integration and Delivery Capability blocks:**
- **Legacy RPG:** "We moved a financial services firm off legacy RPG and COBOL applications onto private cloud, migrating COBOL to Java with AI assisted engineering, with minimal operational disruption."
- **10,000+ users:** "We built and scaled a cross border financial wellness platform past 10,000 users at 99.9% uptime."

**One example per initiative (report and emails):**

| Initiative | Proof line |
|---|---|
| One trusted set of numbers | We moved a leading South African retailer's reporting from MySQL to Snowflake and cut report refresh time from five to six hours to 10 to 15 minutes. |
| Forecasting and decision support | We built an executive AI agent for a leading South African retailer, so leaders ask questions about orders, revenue and store performance in plain English. |
| Moving off legacy systems | We migrated a financial services firm's COBOL code to Java with AI assisted engineering and moved its applications to private cloud. |
| Answers from your own documents | We made a Canadian healthcare platform's entire video archive searchable in plain language, with transcription and RAG search. |
| Customer assistant | We built an AI assistant for a leading asset management firm in Pakistan that answers investor questions and recommends suitable funds. |
| AI agents for multi step work | We deployed xServe, our AI ordering agent, to handle peak hour orders for a leading Saudi Arabian fast food chain, in English, Urdu and Arabic. |
| Visual inspection and video analytics | Our xVision product monitors 1,200 bank branches and more than 7,000 cameras across South Asia. |
| Not decided yet | Our engineers have taken AI from pilot to production for banks, asset managers, retailers and health platforms. |

**Fix in the workbook's nurture track (section E):** the Data Trust & Meaning case still says "SAP and fragmented databases to a Snowflake medallion lakehouse". Use the South African retailer line above instead.

## 5a. Lead priority: A or B

Check in this order: **Exclude → C → A → B.** Anything left over is B.

| Priority | Rule | What happens |
|---|---|---|
| **Exclude** | Competitor or vendor email domain | Results only, no follow-up email. Never counted as a lead |
| **C** | Personal email, or company size under 50, or result "Starting Out" with no timeline | Automated nurture only |
| **A** | Work email **and** company size at or above the role's floor **and** a fit market **and** initiative is not "Not decided yet" **and** (timeline within 6 months **or** budget set aside for rollout (A1.2 = 3) **or** review booked) | Sales follows up within 1 business day |
| **B** | Everything else with a work email | Nurture by priority domain; SDR checks fit |

**Size floors by role:** CEO, MD, founder, CIO, CTO, CDO, head of digital: 1,000+ · Head of data, CISO, business unit leader, Other: 500+ · Engineering, product or platform lead: 50 to 4,999.

**Fit markets:** Pakistan, UAE, Saudi Arabia, Qatar, USA, Canada, South Africa, UK, Poland, Hungary, Kuwait, Bahrain, Oman.

## 5b. No learner option, no xCelerate email (Sana, 25 Nov 2026)

The tool is for senior professionals who buy services, not students or career starters. xCelerate serves a different market (students, early career people entering IT, CSR programs), so the tool never routes to it.

- **Remove "Individual learner, or exploring an AI career"** from the role question (X2). The remaining options stay as they are
- **Drop the learner email** and any xCelerate link from the tool, results page, report and emails
- Students who take it anyway: personal email → **C** (automated nurture only), same as any other personal email

## Defaults: what's fine, and one change

| Default | Answer |
|---|---|
| Booking buttons go to the contact page until there's a calendar link; drop "30 minute" from the review name | Fine. Use **"Book a Data & AI Readiness Review"**, linking to `/contact-us` with "Data & AI consulting" preselected |
| Drop "Your full report is attached" until the PDF is ready | Fine. Replace it with: "Your results are summarized below." |
| **Company size options: 1–10, 11–50, 51–200, 201–500, 501–1,000, 1,001–5,000, 5,000+** | **Please don't.** The lead rules use floors at 50, 500 and 1,000, and these bands straddle them (11–50 includes 50; 201–500 includes 500). Use the workbook's bands: **Under 50 · 50–499 · 500–999 · 1,000–4,999 · 5,000+** |
| Title "Free Data & AI Readiness Assessment \| xLoop"; description "Is your data ready for AI? Answer 18 questions in about 6 minutes…" | Fine. The full SEO pack (meta and intro) is in `2026-11-18-xloop-data-ai-readiness-assessment-seo-pack.md` |
| "Email sent" screen says "your data and AI roadmap" | Correct. Good catch on "AI security roadmap" |

## Next steps
- [ ] Sana: confirm Irfan as the Data & AI signer, then send this to Zeeshan
- [ ] Update the workbook nurture track (section E) case to the South African retailer line

## Second noun form per initiative (26 Nov, approved for PDF template sentences only)
trusted_numbers: your trusted reporting · forecasting: your forecasting and decision support work · legacy: your legacy modernization · documents: your document assistant · customer_assistant: your customer assistant · agents: your AI agent project · visual: your computer vision project · not_decided: your first AI initiative. Must be singular ("…to its data sources", "The data [form] needs").
