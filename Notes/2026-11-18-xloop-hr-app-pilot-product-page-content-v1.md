---
date: 2026-11-18
tags: [xloop, xlab, product-page, hr-app-pilot, hr-automation, ai-assistant, odoo, site-revamp, seo, aeo]
---

# HR App Pilot Product Page · Content v1 (for design handoff)

**URL:** `/xlab/hr-app-pilot` (keep, already indexed) · **Parent:** xLab
**Replaces:** the live page as read on 18 Nov 2026
**Scope:** HR App Pilot, xLoop's AI assistant for employee HR requests. Works with any HR or ERP system; xLoop runs it on its own Odoo (Sana, 11 Nov). Custom AI agents for other workflows belong to the AI Agents service page
**Design:** the xLab product page pattern set by xVision (11 Nov)

---

## Page setup

| Field | Value |
|---|---|
| Title tag | `HR App Pilot: AI Assistant for Employee HR Requests \| xLoop` |
| Meta description | `HR App Pilot answers policy questions, handles leave, letters, payslips and claims, and takes action in your HR and ERP systems. In daily use at xLoop.` |
| H1 | HR App Pilot: AI Assistant for Employee HR Requests |
| Nav label | HR App Pilot |
| Breadcrumb | Home › xLab › HR App Pilot |
| Schema | `SoftwareApplication` (name HR App Pilot, applicationCategory BusinessApplication, description, publisher xLoop) · FAQPage · BreadcrumbList |
| Visible "Last updated" date | Yes |
| Lead form heading | Find Out If HR App Pilot Fits Your HR Team |

**Build rules:** server rendered, one H1 (the live page has an empty H1 and three extra), real tables, anchor IDs, no counters, no typing animation.

---

## 1. Hero · `#top`

**Eyebrow:** xLab · Product

**H1:** HR App Pilot: AI Assistant for Employee HR Requests

**Subhead:** Most HR requests are the same few questions and forms, asked every day. HR App Pilot answers them in conversation, completes the request in your HR and ERP systems, and passes anything that needs judgment to your HR team.

**Primary CTA:** Book a 30 Minute Product Fit Call →
**Small line under the CTA:** Tell us about your HR team and the systems you use. We'll tell you whether HR App Pilot fits, in 30 minutes.

*Build: hidden `source=hr-app-pilot` tag.*

---

## 2. Answer block · `#what-is`

**H2:** What Is HR App Pilot?

HR App Pilot is xLoop's AI assistant for employee HR requests. Employees ask in plain language, and it answers policy questions, handles leave, generates standard letters, fetches payslips and submits claims and advance requests in your HR or ERP system, escalating anything outside its scope to HR. xLoop uses it every day on its own Odoo ERP, and it connects to the HR and ERP systems other organizations run.

*Plain text, never collapsed.*

---

## 3. The problem · `#problem`

**H2:** Why HR Teams Run Out of Time

A large part of HR's day goes on requests that are predictable and don't need judgment.

*Design: three short problem tiles.*

| Tile | Copy |
|---|---|
| **The same questions, every day** | Leave balances, policy rules and payslip follow ups take HR time but rarely need an HR decision |
| **Letters by hand** | Salary certificates, NOCs and experience letters are prepared one at a time, with back and forth on format and approval |
| **Requests everywhere** | Employees ask by email, chat and in person, so requests get lost and nobody knows the status |

---

## 4. What HR App Pilot does · `#features`

**H2:** What HR App Pilot Handles

HR App Pilot covers the requests employees make most, and completes them in your systems rather than just pointing to a form.

*Design: five feature cards, icon + name + one line. Card 5 lists the ERP requests as tags.*

| Feature | What it does |
|---|---|
| **Policy questions** | Answers questions about your HR policies from your own documented policies |
| **Leave** | Employees check balances, apply for leave and get confirmation in conversation |
| **HR letters** | Generates standard documents such as salary certificates, NOCs and experience letters on request |
| **Help desk tickets** | Creates and tracks HR tickets, so employees see the status and HR works from one queue |
| **Payroll and finance requests** | Fetches payslips and submits advance salary, provident fund loan and medical (OPD) claim requests directly in your ERP |

---

## 5. How it works · `#how-it-works`

**H2:** How HR App Pilot Works

HR App Pilot sits on top of the HR and ERP systems you already run.

*Design: four step strip, HTML text.*

| Step | What happens |
|---|---|
| **1. Load your policies** | We add your HR policies and document templates, so answers and letters follow your rules |
| **2. Connect your systems** | HR App Pilot connects to your HRMS or ERP for leave, payroll and claims. We run it on Odoo ourselves and integrate it with the systems you use |
| **3. Employees ask in chat** | Employees make requests in plain language; HR App Pilot answers, completes the request or opens a ticket |
| **4. HR handles the exceptions** | Anything outside its scope goes to the right HR officer, with the full conversation attached |

**Add on:** a digital human interface can sit on top of HR App Pilot, so employees can talk to it face to face.

**Line below:** Need an AI agent for another back office process? See [AI Agents & Autonomous Systems](/services/ai-agents-and-autonomous-systems).

---

## 6. Built for HR data · `#trust`

**H2:** Built for Sensitive HR Data

HR App Pilot handles salaries, leave and claims, so it is built to keep that data where it belongs.

- **Employees see only their own data.** Payslips, balances and requests are tied to the employee asking [CONFIRM: per employee access in the product]
- **Answers come from your policies.** HR App Pilot answers from the policies you load, not from general knowledge
- **HR approves what matters.** Requests that need approval follow your existing approval steps in the ERP
- **Clear handover.** Out of scope requests go to HR with the full context, so nobody asks twice
- **Security tested.** Like every xLab product, HR App Pilot is tested for data leakage and misuse before it goes live

*Copy note: no compliance claims.*

---

## 7. Proof · `#proof`

**H2:** HR App Pilot in Use

xLoop runs HR App Pilot every day for its own employees, on its Odoo ERP.

*Card format: same as the xVision page. Problem and result wording to be confirmed against xLoop's internal use (Sana, 11 Nov).*

| Client | The problem | What we deployed | Result |
|---|---|---|---|
| **xLoop (our own team)** | Our HR team answered the same employee requests every day: policy questions, leave, salary slips, letters and claims | HR App Pilot on our own Odoo ERP, answering policy questions and handling leave, document and claim requests through conversation | Employees get routine HR services on demand, and HR spends less time on repetitive requests |

---

## 8. Where HR App Pilot fits · `#use-cases`

**H2:** Where HR App Pilot Fits

HR App Pilot suits organizations where HR answers the same requests for many employees.

| Organization | Why it fits |
|---|---|
| **Mid size and large organizations** | Enough employees that routine requests take a real share of HR time |
| **Multi location teams** | One place for every employee to get HR answers, whichever office they work in |
| **Organizations on Odoo** | Ready to connect, as on xLoop's own Odoo. *In use today* |
| **Organizations on other HR or ERP systems** | Connected to the system you run, as part of setup |

---

## 9. At a glance · `#at-a-glance`

**H2:** HR App Pilot at a Glance

| | |
|---|---|
| What it is | An AI assistant for employee HR requests, from xLoop's xLab |
| Handles | Policy questions · leave · HR letters · help desk tickets · payslips, advance salary, provident fund loans and medical claims |
| Works with | Odoo (in use at xLoop) and other HR and ERP systems |
| Add on | Digital human interface |
| In use at | xLoop |
| Where to start | 30 minute Product Fit Call |
| Related | AI Agents & Autonomous Systems · xLab · Generative AI |

---

## 10. FAQ · `#faq`

**H2:** HR App Pilot FAQ

*All seven go into FAQPage schema, with text identical to the page.*

**What is HR App Pilot?**
HR App Pilot is xLoop's AI assistant for employee HR requests. It answers policy questions, handles leave, generates standard letters, fetches payslips and submits claims in your HR or ERP system.

**Does HR App Pilot only work with Odoo?**
No. xLoop runs it on its own Odoo ERP, and we connect it to the HR and ERP systems other organizations use as part of setup.

**Does it replace our HRMS or ERP?**
No. It works on top of your existing systems and completes requests in them, so there is nothing to replace.

**How does it keep answers accurate?**
It answers from the HR policies you load. When a policy changes, you update it once and every answer follows the new version.

**What happens when a request is outside its scope?**
It passes the request to the right HR officer, with the full conversation attached, so the employee doesn't have to explain it again.

**Can employees see other people's data?**
[CONFIRM: "No. Each employee sees only their own payslips, balances and requests."]

**How long does it take to deploy?**
[CONFIRM with the product owner: typical time to go live, including connecting a non Odoo system. The live page says "a few weeks".]

---

## 11. CTA band · `#start`

**H2:** Find Out How Much of HR's Day It Could Take Back

In 30 minutes we'll talk through the requests your HR team handles most and the systems you use, and tell you whether HR App Pilot fits.

**Proof line (above the button):** In daily use at xLoop, on our own Odoo ERP.

**CTA:** Book a 30 Minute Product Fit Call →

**Form fields:** Name · Work email · Company · Which HR or ERP system do you use?

*Four fields only (27 Oct convention).*

---

## 12. Related · `#related`

[All xLab products](/xlab) · [AI agents for back office work](/services/ai-agents-and-autonomous-systems) · [Generative AI for documents and answers](/services/generative-ai) · [AI security for internal assistants](/services/ai-security-service)

**Resources:** [The Rise of AI Agents: How Enterprises Are Moving Beyond Chatbots](/insights/blogs/the-rise-of-ai-agents-how-enterprises-are-moving-beyond-chatbots) · [Human in the Loop: Why the Best AI Still Needs You](/insights/blogs/human-in-the-loop-why-the-best-ai-still-needs-you)


---

## Internal notes (not for design)

**Conventions applied:** the 27 Oct page conventions, yellow highlighted links (4 Nov), light first call promise with no demo (11 Nov), Resources chosen by topic (11 Nov), xLab product page pattern (11 Nov).

### What's wrong with the live page (18 Nov)

| Live | Problem | In this version |
|---|---|---|
| Title "AI-Powered HR Automation & Odoo ERP Integration", "Odoo-based organizations" as a target | Reads as Odoo only; Odoo is just xLoop's own system (Sana, 11 Nov) | Works with any HR or ERP system, proven on our own Odoo |
| "reducing turnaround from days to seconds", "instantly and accurately" | No measurement | Removed |
| "The Impact We've Created… measurable across HR workload, response times, and employee satisfaction", "Improved ESAT", "Faster SLA resolution" | Implies measured client results; none exist | Replaced by the xLoop internal use card |
| "enforce policy… without increasing headcount" | Overclaim | Removed |
| "Most implementations are operational within a few weeks" | No source | [CONFIRM] |
| Empty H1, three headings as H1 | No usable H1 | One H1 |
| "Request a demo", "Book a Demo", "Talk to our team" | Demo promise (11 Nov) and passive CTA rule | Product Fit Call |
| xVision case card, generic blogs | Off topic | Internal use card, agent blogs |

### Decisions

- **Proof = xLoop's own use** (Sana, 11 Nov). No external client confirmed. The Alfalah Investments work was App Pilot (an investment assistant), not HR App Pilot, and is never used here
- **ERP features** (salary slips, advance salary, provident fund loan, OPD claims) come from the live page and the case study image, and match how xLoop uses it on Odoo
- **Meta Human** appears only as an add on line (Sana, 11 Nov: an interface, not a product)
- **Resources:** both blog titles checked against the live site (18 Nov)

### Open [CONFIRM] items (HR App Pilot owner)

1. Per employee data access (employees see only their own payslips and requests)
2. Typical time to deploy, including a non Odoo system
3. Problem and result wording on the proof card match xLoop's internal use
4. Security testing done before go live

## Next steps

- [ ] Sana: review, and ask the HR App Pilot owner the four items
- [ ] Next: Data & AI Readiness tool SEO pack
