---
date: 2026-11-11
tags: [xloop, xlab, product-page, xvision, computer-vision, video-analytics, cctv, banking, site-revamp, seo, aeo]
---

# xVision Product Page · Content v1 (for design handoff)

**URL:** `/xlab/xVision` (keep, already indexed) · **Parent:** xLab
**Replaces:** the live page as read on 11 Nov 2026
**Scope:** xVision, xLoop's video analytics product for existing CCTV. Custom computer vision work (inspection, OCR) belongs to the Computer Vision service page; this page links to it
**Design:** first xLab product page; sets the product page pattern (see internal notes)

---

## Page setup

| Field | Value |
|---|---|
| Title tag | `xVision: AI Video Analytics for Existing CCTV \| xLoop` |
| Meta description | `xVision turns the CCTV you already have into live alerts and dashboards for queues, wait times, customer traffic, ATM status and security events across every site.` |
| H1 | xVision: AI Video Analytics for Existing CCTV |
| Nav label | xVision |
| Breadcrumb | Home › xLab › xVision |
| Schema | `SoftwareApplication` (name xVision, applicationCategory BusinessApplication, operatingSystem: web, description, publisher xLoop) · FAQPage · BreadcrumbList |
| Visible "Last updated" date | Yes |
| Lead form heading | Find Out If xVision Fits Your Sites |

**Build rules:** server rendered, one H1 (the live page has an empty H1 and two duplicates), real tables, anchor IDs, no counters, no typing animation.

---

## 1. Hero · `#top`

**Eyebrow:** xLab · Product

**H1:** xVision: AI Video Analytics for Existing CCTV

**Subhead:** Most CCTV records everything and gets watched for minutes a month. xVision analyzes every feed continuously, flags what matters as it happens, and shows how every site is performing, on the cameras you already have.

**Primary CTA:** Book a 30 Minute Product Fit Call →
**Small line under the CTA:** Tell us about your sites and cameras. We'll tell you whether xVision fits, in 30 minutes.

*Build: hidden `source=xvision` tag. Keep the live video embed, below the hero.*

---

## 2. Answer block · `#what-is`

**H2:** What Is xVision?

xVision is xLoop's AI video analytics product. It connects to existing CCTV, uses computer vision to track queues, wait times, customer traffic, equipment status, staff presence and suspicious activity, and sends live alerts and dashboards to the teams who run each site. It monitors 1,200 bank branches and more than 7,000 cameras across South Asia.

*Plain text, never collapsed.*

---

## 3. The problem · `#problem`

**H2:** Why CCTV Alone Isn't Enough

Cameras record every hour of every day, but people can only review a fraction of it, so problems are found after the fact, if at all.

*Design: three short problem tiles.*

| Tile | Copy |
|---|---|
| **Footage nobody watches** | Manual review covers minutes per site each month. Everything else is recorded and never seen |
| **Problems found too late** | Long queues, broken ATMs and security gaps surface through complaints and incidents, not as they happen |
| **No way to compare sites** | Without data from every location, it's hard to know which sites need attention and why |

---

## 4. What xVision monitors · `#features`

**H2:** What xVision Monitors

xVision tracks six things at every site, from the footage your cameras already record.

*Design: six feature cards, icon + name + one line.*

| Feature | What it does |
|---|---|
| **Queues and wait times** | Measures queue length and how long customers wait, and alerts staff when lines build up |
| **Customer traffic** | Counts visitors and shows busy hours, so staffing matches demand |
| **ATM and equipment status** | Spots equipment that is down or out of service, so it gets fixed sooner |
| **Staff on the floor** | Shows whether service points and counters are staffed when customers are waiting |
| **Suspicious activity** | Flags unusual behavior and unauthorized access as it happens, for security teams to review |
| **Cleanliness and upkeep** | Picks up maintenance and cleanliness issues before customers notice them |

---

## 5. How it works · `#how-it-works`

**H2:** How xVision Works

xVision runs in four steps, on top of the cameras and network you already have.

*Design: four step strip, HTML text.*

| Step | What happens |
|---|---|
| **1. Connect your cameras** | xVision connects to existing CCTV feeds; most modern IP cameras work through standard streams |
| **2. Detect events** | Computer vision models, including convolutional neural networks and YOLO object detection, analyze each feed for the events you choose |
| **3. Alert the right people** | Events trigger alerts to a live control panel, and to email, SMS or your existing systems |
| **4. Compare every site** | A multi KPI dashboard shows wait times, traffic, equipment and service across all locations |

**Line below:** Need computer vision beyond CCTV, such as visual inspection or document OCR? See [Computer Vision services](/services/computer-vision).

---

## 6. Privacy · `#privacy`

**H2:** Video Analytics Designed for Privacy

xVision counts, measures and flags events; it doesn't need to know who people are.

- **No identification by default.** xVision tracks movement, queues and events without identifying individuals
- **Anonymize what you store.** Faces and number plates can be blurred in stored footage and dashboards
- **Process on site.** Video can be analyzed at the edge, so raw footage doesn't have to leave the premises
- **Keep less, for less time.** Store events and measures, not hours of footage, with retention periods you set
- **Control access.** Role based access and logs for everyone who views footage or alerts

*Copy note: describes how we design, not a compliance claim. Do not add "GDPR compliant" or similar. Facial recognition and "high value client recognition" are not offered on this page (see internal notes).*

---

## 7. Proof · `#proof`

**H2:** xVision in Use

xVision monitors 1,200 bank branches and more than 7,000 cameras across South Asia.

*Card format: same as the Computer Vision page. No percentages.*

| Client | The problem | What we deployed | Result |
|---|---|---|---|
| **A bank with 1,200 branches across South Asia** | More than 7,000 cameras, but manual review covered about 20 minutes per branch each month. Security gaps, long waits and branch upkeep issues went unseen | xVision on the existing CCTV, tracking wait times, customer traffic, ATM status, staff on the floor and suspicious activity, with alerts to a live control panel and dashboards | Continuous, automated monitoring across every branch, in place of monthly spot checks |

**H3:** Before and After xVision

| Before | After |
|---|---|
| About 20 minutes of monitoring per branch each month | Continuous coverage across 1,200 branches |
| Manual oversight only | Automated monitoring with live alerts |
| Limited security coverage | Security events flagged as they happen |
| Inconsistent service across branches | Wait times and service tracked at every branch |

---

## 8. Where xVision fits · `#use-cases`

**H2:** Where xVision Fits

xVision suits any business that runs many sites with cameras and needs to know what happens at each one.

| Sector | How it's used |
|---|---|
| **Banking** | Branch queues, wait times, ATM status, staffing and security, across the whole branch network. *In use today* |
| **Retail** | Store traffic, checkout queues, staffing at peak times and loss prevention |
| **Healthcare and public services** | Waiting areas, patient flow and busy hours at clinics, hospitals and service centers |
| **Other site networks** | Any multi site operation, such as service centers, depots or offices, that needs the same view across locations |

---

## 9. At a glance · `#at-a-glance`

**H2:** xVision at a Glance

| | |
|---|---|
| What it is | AI video analytics for existing CCTV, from xLoop's xLab |
| Monitors | Queues and wait times · customer traffic · ATM and equipment status · staff on the floor · suspicious activity · cleanliness and upkeep |
| Cameras | Existing CCTV; most modern IP cameras |
| Technology | Computer vision: convolutional neural networks and YOLO object detection |
| Deployment | Edge · cloud · hybrid |
| Outputs | Live control panel · alerts by email, SMS or API · multi KPI dashboard |
| In use at | A bank with 1,200 branches and 7,000+ cameras across South Asia |
| Where to start | 30 minute Product Fit Call |
| Related | Computer Vision services · xLab · Banking & Finance |

---

## 10. FAQ · `#faq`

**H2:** xVision FAQ

*All seven go into FAQPage schema, with text identical to the page.*

**What is xVision?**
xVision is xLoop's AI video analytics product. It connects to existing CCTV and tracks queues, wait times, customer traffic, equipment status, staff presence and suspicious activity, with live alerts and dashboards across every site.

**Does xVision work with our existing cameras?**
Usually, yes. xVision runs on existing CCTV, and most modern IP cameras work through standard streams. That is how it monitors 1,200 bank branches. We check camera positions, resolution and lighting first, and say where an extra camera would help.

**Does xVision use facial recognition?**
Not by default. xVision counts people, measures queues and flags events without identifying individuals, and faces can be blurred in stored footage.

**Does video have to leave our sites?**
No. xVision can analyze video at the edge, on site, so raw footage stays on the premises and only events and measures are sent to the dashboard.

**Where do alerts go?**
To a live control panel, and by email, SMS or API to the systems your teams already use. Every alert is logged with the clip that caused it.

**How is xVision different from your computer vision services?**
xVision is a ready product for monitoring sites through CCTV. Our computer vision services build custom models for other problems, such as visual inspection on a production line or reading documents.

**How long does it take to roll out xVision?**
[CONFIRM with the delivery lead: typical time to go live at a first site, and how sites are added after that.] We agree the rollout plan once we've reviewed your cameras and sites.

---

## 11. CTA band · `#start`

**H2:** Find Out What Your Cameras Could Tell You

In 30 minutes we'll talk through your sites, your cameras and the problems you want to catch, and tell you whether xVision fits or whether you need something custom.

**Proof line (above the button):** Monitoring 1,200 bank branches and more than 7,000 cameras across South Asia.

**CTA:** Book a 30 Minute Product Fit Call →

**Form fields:** Name · Work email · Company · Roughly how many sites?

*Four fields only (27 Oct convention).*

---

## 12. Related · `#related`

[All xLab products](/xlab) · [Computer vision and video analytics services](/services/computer-vision) · [AI for banking and finance](/industries/banking-and-finance) · [AI security for vision systems](/services/ai-security-service)

**Resources:** [How AI-Powered Visual Intelligence is Transforming Modern Industries](/insights/blogs/how-ai-powered-visual-intelligence-is-transforming-modern-industries) · [AI in Banking: Where It Works, What It Takes, and Why Getting It Right Matters](/insights/blogs/ai-in-banking-where-it-works-what-it-takes-and-why-it-matters)

---

## Internal notes (not for design)

**Conventions applied:** the 27 Oct page conventions, yellow highlighted links (4 Nov), light first call promise with no demo (11 Nov), Resources chosen by topic (11 Nov).

### What's wrong with the live page (11 Nov)

| Live | Problem | In this version |
|---|---|---|
| Title "AI-Powered Surveillance Solutions", meta "intelligent surveillance" | "Surveillance" frames it as watching people; buyers search for video analytics | `xVision: AI Video Analytics for Existing CCTV` |
| Empty H1, plus "Cutting-Edge Algorithms…" and "Elevating Enterprise Surveillance" (twice) as H1s | No usable H1, three extra | One H1 |
| "High-Value Client Recognition: facial recognition and behavior analysis to identify high-value clients upon entry" and "Customer Recognition" under Banking | Facial recognition of customers is a privacy and regulatory risk, and it's been left out of every revamped page (Applied AI hub, Computer Vision) | Removed. FAQ says "not by default" |
| "Prevent fraud with real-time suspicious behavior detection" | Promise we can't guarantee | "Flags unusual behavior… for security teams to review" |
| "Cutting-Edge", "Leverage", "Seamless Integration", "stay ahead of the curve" | Banned words and filler | Removed |
| Core benefits section (six generic benefits) | Repeats the features in vaguer words | Replaced by "Where xVision fits" |
| "Join Leading Enterprises…" and "Some Cool Stuff We've Built" case card | Implies several enterprise clients; the card links out | One proof card on the page, plus before and after |
| Generic blogs (data checklist, quality control, South Africa) | Not about video analytics | Two topic blogs |
| "Schedule a Demo" and "Try xVision" | Demo promise on the first call (Sana, 11 Nov) | Product Fit Call |

### Decisions

- **Product page pattern (for xServe, HR App Pilot, Chat Genie):** hero with "Product Name: what it does" H1 → "What is [product]?" answer block → the problem (three tiles) → what it does (features) → how it works (steps) → one trust section (privacy, accuracy or control, whichever matters most for the product) → proof → where it fits → at a glance → FAQ → CTA band → Related
- **Proof:** the bank card and the before and after strip, word for word as on the Computer Vision page (from the xVision case study PDF, Jul 2025). The case study's 90%, 25% and 20x figures, and the old 99.7% and $50M (C5) and 30/25/40% (C6) sets, are never used
- **Sectors:** banking is marked "in use today"; retail, healthcare and other site networks are capabilities. The healthcare row ties in with the queue challenge added to the Healthcare page (11 Nov)
- **Technology:** CNNs and YOLO are named because the live page already names them; it helps technical evaluators and AI answers. No accuracy figure
- **The "Small vs Large Language Models… 2025" blog** mentions xVision was first built for a bank, but it's not about video analytics, and its title is dated. Not used

### Open [CONFIRM] items

1. Typical rollout time for a first site, and how sites are added after (FAQ)
2. Alert channels (email, SMS, API): confirm all three exist in the product today
3. Edge processing and face blurring: confirm both are available in the product (both are on the Computer Vision page as design principles)

## Next steps

- [ ] Sana: review
- [ ] Delivery lead: [CONFIRM] items 1 to 3
- [ ] Next product page: xServe
