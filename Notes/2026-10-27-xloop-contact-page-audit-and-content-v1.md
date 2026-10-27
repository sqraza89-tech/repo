---
date: 2026-10-27
tags: [xloop, contact-page, conversion, cro, lead-form, site-revamp, rebrand, seo]
---

# Contact Page · Audit and Content v1 (for design handoff)

**URL:** `/contact-us` (keep) · **Linked from:** main nav "Contact Us", footer, most "Get in Touch" buttons
**Replaces:** the live page as read on 27 Oct 2026
**Job of the page:** turn a visitor who already wants to talk into a qualified, routed inquiry, and give everyone else (security buyers, candidates, partners, press) the right door
**Design:** two columns on desktop (copy and next steps left, form right); form first on mobile. Rebrand styling as on the service pages

---

## Page setup

| Field | Value |
|---|---|
| Title tag | `Contact xLoop \| Data, AI and Security Consulting` |
| Meta description | `Contact xLoop about data and AI consulting, AI development, cloud, digital engineering or security. A specialist replies within one business day.` |
| H1 | Contact xLoop |
| Breadcrumb | Home › Contact |
| Schema | ContactPage, with Organization `contactPoint` entries (general, security) · BreadcrumbList |
| Visible "Last updated" date | No (not needed on a contact page) |

**Build rules:** server rendered, one H1 (the live page has three), labels above fields, required fields marked in HTML, no typing animation.

---

## 1. Hero and form · `#top`

**Eyebrow:** Contact

**H1:** Contact xLoop

**Subhead:** Tell us what you're working on, from a data platform or an AI use case to a modernization or a security review. A specialist in that area will reply within one business day with a straight answer on whether and how we can help.

**Form heading:** Start the conversation

**Form fields:**

| Field | Type | Required |
|---|---|---|
| Name | Text | Yes |
| Work email | Email | Yes |
| Company | Text | Yes |
| What can we help with? | Dropdown: Data & AI consulting · AI solutions (generative AI, LLMs, agents, computer vision, ML) · Data, cloud and modernization · Web, app and digital engineering · Security (AI security, cybersecurity, NEPRA) · Corporate AI training · Something else | Yes |
| Anything we should know? | Text area, one or two lines | No |
| Privacy consent checkbox | "I agree to xLoop's Privacy Policy and to being contacted about my inquiry." | Yes |

**Button:** Send to a specialist →

**Line under the button:** We reply within one business day. Your details are used only to answer your inquiry.

*Build: the dropdown value routes the lead to the right owner and is sent to GA4 as a parameter on the `generate_lead` event. Phone is removed from the form; we call only if you ask. Replace the visible reCAPTCHA checkbox with invisible reCAPTCHA v3 or Turnstile.*

---

## 2. What happens next · `#next`

**H2:** What Happens After You Get in Touch

*Design: three steps in a row, HTML text.*

| Step | Copy |
|---|---|
| **1. A specialist reads it** | Your message goes to the lead for that area, not a general inbox. |
| **2. We reply within one business day** | With a straight answer: whether we can help, and the best next step. |
| **3. A 30 minute call, if it fits** | We look at your use case, data or systems and tell you what it would take. No obligation. |

---

## 3. Other ways to reach us · `#other`

**H2:** Other Ways to Reach Us

*Design: four small cards.*

| Card | Copy | Link |
|---|---|---|
| **Email** | Prefer email? Write to us directly. | `info@xloopdigital.com` |
| **NEPRA and security** | Power sector licensees and security inquiries can reach our security team directly. | `xsecurity@xloopdigital.com` · `+92 21 3586 9200` |
| **Careers** | Looking for a role at xLoop? See open positions. | `/insights/careers` |
| **Partners and press** | Partnerships, events and media requests. | `info@xloopdigital.com` [CONFIRM: separate address?] |

---

## 4. Offices · `#offices`

**H2:** Our Offices

xLoop has offices in the USA, the UAE and Pakistan, and has served clients in eight countries.

*Design: office cards with city, address and role. Same addresses as the footer.*

| Office | Address |
|---|---|
| **San Mateo, USA (HQ)** | 1825 South Grant St., San Mateo, California, USA |
| **Dubai, UAE (Regional HQ)** | IFZA, Dubai Silicon Oasis, Dubai, UAE |
| **Karachi, Pakistan (Delivery Center)** | 1st Floor, Marine Tower, Block 4 Clifton, Karachi, Pakistan |
| **Doha, Qatar (Regional HQ)** | Tower 1, QFC, West Bay, Doha, Qatar |

*Qatar card: keep or drop to match the footer decision (see internal notes).*

---

## 5. Trust strip · `#trust`

**Line:** Trusted by banks, asset managers, retailers, healthcare platforms and utilities across eight countries.

*Design: the approved logo wall (logos only, no case details), under the line.*

---

## 6. FAQ · `#faq`

**H2:** Before You Get in Touch

*All three go into FAQPage schema only if design shows them as an FAQ block; otherwise plain text.*

**How quickly will you reply?**
Within one business day. Your message goes straight to the lead for the area you choose.

**Can we sign an NDA before sharing details?**
Yes. Tell us in the form and we will send one before any detailed conversation. [CONFIRM: standard practice]

**Do you work with companies outside the countries where you have offices?**
Yes. We have served clients in eight countries and work remotely with teams in other regions, with on site visits where the work needs them.

---

## Internal notes (not for design)

### Audit: what the live page does today (27 Oct)

**What's on the page:** a slogan H1, one paragraph, and a form. Nothing else. Offices are only in the footer.

| Area | Live | Problem | Fix (in the copy above) |
|---|---|---|---|
| **H1** | "Great ideas don't wait. Neither should you." (three H1 tags: the full line plus each half) | Slogan, no search term, and the page has three H1s | One H1: "Contact xLoop" |
| **Positioning** | "exploring AI & Data, driving digital transformation, or seeking top tier tech talent… your innovation journey starts here" | Pre-rebrand: leads with talent supply, which the brain says to stop leading with; "innovation journey" is filler | Subhead names the rebrand offer order: data, AI, modernization, security |
| **Title** | "Contact xLoop Digital \| AI Consulting & Engineering Experts \| xLoop Digital" | Doubled brand (sitewide bug) | `Contact xLoop \| Data, AI and Security Consulting` |
| **Form: fields** | Name, Company, Email, Phone, Message (5 + consent) | Phone adds friction at the most hesitant moment; a free text box only means sales has to triage every lead by hand | 4 required (Name, Work email, Company, topic) + optional note |
| **Form: routing** | None | Every lead lands in one place; security and NEPRA leads wait behind everything else | Topic dropdown routes to an owner and is tracked in GA4 |
| **Form: validation** | No field has `required` in the HTML, including the consent box marked * | Empty or consentless submissions may get through (front end check unknown) | Required fields marked in HTML |
| **Form: CAPTCHA** | Visible reCAPTCHA v2 checkbox | Visible extra step, and image challenges on some networks | Invisible reCAPTCHA v3 or Turnstile |
| **Button** | "Get Started" | Says nothing about what happens | "Send to a specialist →" |
| **Expectations** | No reply time, no next step | Uncertainty is the main reason people abandon a contact form | Reply time under the button + three step "What happens next" |
| **Other routes** | No email, no phone, no careers or partner route on the page | Job seekers and vendors fill the sales form; buyers who prefer email have no option. The NEPRA letter's phone and email aren't here | "Other ways to reach us" cards, including the NEPRA phone and xsecurity@ |
| **Trust** | None | The page asks for contact details without showing who else trusts xLoop | Trust line + logo wall |
| **Schema** | Organization + WebSite only | No ContactPage or contactPoint | ContactPage + contactPoint |
| **Tracking** | GA4 is installed (G-V87ZRKB02H) | Not verified: whether a submit fires a conversion event or reaches a thank-you URL. If it doesn't, the CEO's lead numbers can't come from GA4 | `generate_lead` event with the topic parameter, marked as a key event in GA4 |
| **Privacy** | Cookie banner says continuing to browse is consent; GA4 cookies load before any choice | Same issue as the ISO 27001 website gaps (G1 to G13) | Fix through the ISO privacy and cookie work, not this page |

**Conversion priorities, in order:** (1) the routing dropdown and GA4 event, so leads can be counted and answered fast; (2) reply time and "what happens next"; (3) drop Phone and make the message optional; (4) other routes, so non buyers stop using the sales form; (5) trust strip.

### Decisions

- **Four required fields**, matching the 27 Oct service page convention. The message is optional, not removed: some buyers want to explain
- **The dropdown follows the rebrand structure** (consulting, AI solutions, data and cloud, engineering, security, training), so lead reports line up with the service lines
- **Talent and resource augmentation** is not its own option. It goes under "Something else" until Sana decides whether staffing leads should come through this form (the brain says stop leading with it)
- **Qatar office:** Qatar promotion is no longer Sana's scope. The card mirrors whatever the footer shows; no change proposed here
- **"Eight countries"** is approved (Sana, 27 Oct)
- **Logo wall** follows the anonymity rule: logos only, no case details next to them

### Open [CONFIRM] items

1. Reply time: is "within one business day" realistic for the people receiving leads?
2. `info@xloopdigital.com` as the general address (used in the corporate deck), and who monitors it
3. A separate address for partnerships and press, or info@
4. NDA before detailed discussion: standard practice?
5. Where leads go today (inbox, CRM) and who owns routing per topic
6. Does a form submit currently fire a GA4 event or reach a thank-you page? (Needs a dev check; I didn't submit the live form)

## Next steps

- [ ] Sana: review
- [ ] Devs: form changes (fields, required, invisible CAPTCHA, routing, GA4 `generate_lead` with topic), one H1, title fix, ContactPage schema
- [ ] Sana or sales: answer [CONFIRM] 1 to 5
