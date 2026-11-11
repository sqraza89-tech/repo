---
date: 2026-11-11
tags: [xloop, forms, lead-capture, blog, media-and-mentions, cro, site-revamp]
---

# Blog Sidebar and Footer Banner Forms · Copy v1 (for design and dev)

**Replaces:** the "Tomorrow's Tech & Leadership Insights in Your Inbox" newsletter signup, in two places: the sidebar on blog and media pages, and the footer banner on blog, media and case study pages
**Why:** xLoop doesn't send a newsletter and has no flow behind the signup (Sana, 11 Nov). Both forms become inquiry forms that send to the same place as the Contact page form
**Matches:** [[2026-10-27-xloop-contact-page-audit-and-content-v1]] (same reply promise, same routing, same consent line)

---

## 1. Sidebar form · blog and media pages

*Design: same narrow card as today. Short, because blog readers are early in their research.*

**Eyebrow:** Ask a specialist

**Heading (blog posts):** Questions About Applying This?

**Heading (media and press pages):** Want to Know More About This?

**Line:** Tell us what you're working on. A specialist replies within one business day.

**Fields:**

| Field | Type | Required |
|---|---|---|
| Name | Text | Yes |
| Work email | Email | Yes |
| Company | Text | Yes |
| Your question | Text area, two lines | No |

**Button:** Ask a Specialist →

**Under the button:** By sending, you agree to our [Privacy Policy](/privacy-policy).

---

## 2. Footer banner · blog, media and case study pages

*Design: same banner and illustration. Two columns on desktop: copy left, form right. Form first on mobile.*

**Eyebrow:** Talk to a specialist

**Heading:** Turn What You've Read Into a Plan

**Body:** Tell us about the problem you're working on. A data, AI or security specialist will reply within one business day with a straight answer on whether and how we can help.

**Fields:**

| Field | Type | Required |
|---|---|---|
| Name | Text | Yes |
| Work email | Email | Yes |
| Company | Text | Yes |
| Job title | Text | No |
| Message | Text area | No |
| Privacy consent | Checkbox: "I agree to xLoop's Privacy Policy and to being contacted about my inquiry." | Yes |

**Button:** Send to a Specialist →

**Under the button:** We reply within one business day. Your details are used only to answer your inquiry.

---

## Internal notes (not for design)

### Build notes for dev

- **Both forms send to the same inbox or CRM as the Contact page form**, tagged with where they came from: `form_location=blog-sidebar` or `form_location=footer-banner`, plus the page URL
- **GA4:** fire `generate_lead` with `form_location` and `page_path`, the same event as the Contact page, marked as a key event
- **CAPTCHA:** replace the visible "I'm not a robot" checkbox with invisible reCAPTCHA v3 or Turnstile (same as the Contact page recommendation). The visible box is the first thing in both forms today
- **Required fields:** mark them `required` in the HTML (the Contact page audit found no field is required today)
- **Remove the newsletter wording everywhere:** "Knowledge Hub", "Get Tomorrow's Tech & Leadership Insights in Your Inbox", "Newsletter Signup", "Subscribe". It also appears in the footer of case study pages
- **Existing subscribers:** check whether the current signup has collected any emails. If it has, those people were promised a newsletter; decide whether to send them a one time note or delete the list

### Decisions

- **Sidebar: three required fields plus an optional question.** Sana asked for Name, Company, Job title, Email and Message. Job title and Message are kept on the footer banner, where there's room and the visitor has finished reading. In a narrow sidebar, five fields would turn most readers away
- **Job title optional** on the footer: useful for qualifying, but it's the field people most often abandon on. Message optional, as on the Contact page
- **Heading variants:** blog posts invite a question about the topic; media and press pages invite interest in xLoop. Same form behind both
- **CTA wording names what they get** (a specialist's answer), not "Subscribe" or "Submit", per the value CTA rule

### Open [CONFIRM] items

1. Reply time "within one business day" (same question as the Contact page)
2. Resolved: `/privacy-policy` is live (checked 11 Nov)
3. Has the newsletter signup collected emails? What happens to them?

## Next steps

- [ ] Sana: review
- [ ] Devs: replace both forms, route and track as above
