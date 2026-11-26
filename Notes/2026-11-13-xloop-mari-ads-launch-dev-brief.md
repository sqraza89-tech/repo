---
date: 2026-11-13
tags: [xloop, xcelerate, mari, paid, linkedin, facebook, dev-brief, launch]
---

# Mari Testimonial Ads · Launch Brief (go live Mon 16 Nov)

Plan: [[2026-11-06-xloop-mari-testimonial-linkedin-ads-plan]] · approved doc `Notes/Mari Testimonial Ad Campaign.docx` (LinkedIn USD 420 + Facebook USD 80)

## Landing page decision (needs Ali's OK)

- The approved plan says ads link to the **xCelerate page**. On 13 Nov the live `/xcelerate` page:
  - has no Mari content at all
  - shows "Next Cohort Starts: TBD" and broken "0+" counters
  - is written for individual job seekers, not sponsors
- **Recommended landing:** the Mari graduation press page, which already tells the whole story (44 graduates, 100% placement, Mir Nasir quote):
  `https://www.xloopdigital.com/insights/media-and-mentions/mari-energies-xloop-ai-digital-skills-bootcamp-graduation`
- Its one gap: **no CTA** (only a newsletter signup). Devs add one today
- Switch to `/xcelerate/sponsored-talent-programs` once the new pages are live

## Dev team · today (Fri 13 Nov)

1. **CTA block on the Mari press page.** Add it twice, after the opening paragraph and before "About the Author":
   - Heading: Planning a training or CSR program?
   - Line: We design programs that end in careers. 44 graduates of Cohort I, all placed into internships and employment.
   - Button: Plan your training program → Contact page, with `?source=mari-ads` so the form records where the lead came from
2. **Embed the testimonial video** at the top of the press page, under the headline. Sana sends the file. Host it on YouTube (unlisted is fine) or the site's video host. No autoplay with sound
3. **Keep UTM tags intact.** Make sure redirects (www / trailing slash) don't strip `?utm_...` parameters. Test with a tagged link below
4. **Form tracking in GA4.** The contact form submission should carry the `source` value, so ad leads can be told apart from other enquiries
5. **No new tracking pixels for now.** Don't add the LinkedIn Insight Tag or Meta Pixel this round:
   - the campaigns optimize for video views and clicks, so they don't need them
   - the site has no cookie consent banner yet (open ISO 27001 gap), so new ad cookies would widen that gap

## Dev team · Monday (16 Nov, before 10 am)

1. **End-to-end test on phone and desktop** using the tagged links:
   - the page loads fast
   - the video plays
   - the CTA opens the form
   - a test submission arrives in the inbox
   - GA4 Realtime shows `utm_source=linkedin` / `facebook`
2. **Quick fixes on `/xcelerate`** (people may click through from the press page's menu):
   - hide the "0+" counters
   - hide "Next Cohort Starts: TBD"
   - remove the dead "AI Bootcamp II" link
3. **Stay on call Monday** for any landing page issue after launch

## Sana · today (Fri 13 Nov)

- [ ] Finance adds the new card to the **LinkedIn Campaign Manager** and **Meta** ad accounts. Set spending limits: USD 420 on LinkedIn, USD 80 on Meta
- [ ] Confirm admin access to the xLoop LinkedIn page and Facebook page in both ad tools
- [ ] Get the video files from the editor: full video A plus cutdowns B1 and B2 (4:5, burned-in captions). B3 can follow next week
- [ ] Build the campaigns with start date **Mon 16 Nov**:
  - LinkedIn Campaign 1: video views, USD 10/day, corporate HR / L&D / CSR targeting
  - LinkedIn Campaign 2 (retargeting, USD 10/day): create now as a draft that starts week 3. Build the "50%+ video viewers" audience now so it fills up
  - Meta: ThruPlay, USD 2.85/day, Facebook feed + Reels, targeting as in the plan
- [ ] **Submit ads for review today or Saturday.** Both platforms can take up to 24 hours to approve
- [ ] Send devs the video file and the landing decision once Ali agrees

## Tagged links

- **LinkedIn:** `https://www.xloopdigital.com/insights/media-and-mentions/mari-energies-xloop-ai-digital-skills-bootcamp-graduation?utm_source=linkedin&utm_medium=paid_social&utm_campaign=mari-testimonials&utm_content=full-video`
- **Facebook:** same link with `utm_source=facebook`
- **Cutdowns:** change `utm_content` to `b1`, `b2`, `b3` per ad

## LinkedIn audience settings (17 Nov)

- **Location:** Pakistan · **Language:** English
- **Industries AND box:** removed. Using it would exclude HR/CSR people outside those industries
- **Job titles (OR group):**
  - HR Manager, Head of HR, HR Director, CHRO
  - L&D Specialist / Manager, Head of L&D
  - CSR Manager / Lead, Sustainability Manager, Corporate Communications Manager
  - CEO, MD, Founder
- **+ OR Industries:** Non-profit Organizations · Philanthropic Fundraising Services · Civic and Social Organizations · International Trade and Development
- **Energy / power CSR buyers (added 17 Nov):**
  - Titles: HSE Manager, Director HSE, Head of HSE, Community Relations Manager, Social Investment Manager, Community Development Manager
  - **+ OR Company names:**
    - Oil and gas: OGDCL, PPL, POL, Mari Energies, United Energy Pakistan, Shell Pakistan, PSO, Attock Petroleum, Attock Refinery, Pakistan Refinery, Cnergyico, SSGC, SNGPL
    - Power: K-Electric, HUBCO, KAPCO, Engro Energy, Lucky Electric, Nishat Power
    - Nearby sectors: Engro Corp, Fauji Fertilizer
  - Company names, not industries: targeting the "Oil and Gas" industry would also reach engineers and finance staff
  - CSR framing only, never energy-delivery framing
- **AND Seniority:** Manager, Director, VP, CXO, Owner, Partner
- **Optional AND:** company size 201+. Drop it if the audience falls under ~15k
- **Audience Expansion:** OFF
- **Target audience size:** ~20k to 100k
- **17 Nov setup check:**
  - First build came to 1.1M+, because it included the industries Oil, Gas & Mining / Wind / Hydro and had no seniority filter
  - Fix: remove those industries, add seniority, drop the HSE Supervisor and Project HSE Manager titles
- **Second build (310k, CPM forecast USD 103 to 206):**
  - Seniority had been added as literal Job Titles ("Manager", "Director"…). It must use Job Experience → Job Seniorities
  - The energy industries were still in. Use video views with per-view billing
  - If CPM stays above ~USD 40, tell Ali before launch and correct the LinkedIn forecast
- **Final structure (LinkedIn won't AND Job Seniorities with Job Titles):**
  - Any of:
    - Job Functions: Human Resources, Community and Social Services, Media and Communication
    - OR NGO industries
    - OR energy company names
  - AND Job Seniorities: Manager, Director, VP, CXO, Owner, Partner
  - Job Titles dropped. Energy industries removed. Expected size ~30k to 120k
- **Built 17 Nov:** 160k+ audience
  - LinkedIn's "cost per 1,000 reached" (USD 130 to 260) ÷ frequency (6.7 to 13) gives a real CPM of about USD 20
  - USD 280 awareness ≈ 14k impressions, plus retargeting ≈ 19k to 21k total, in line with the approved doc. **No forecast correction needed**
  - The earlier CPM worry was a misread
  - OGDCL had dropped out of the company list and needs adding back
  - Bidding: maximum delivery
- **Schedule (LinkedIn campaign budget USD 420):**
  - Awareness ad set: 17 Nov to 14 Dec, USD 10/day = USD 280, optimization goal Video views (not Reach)
  - Retargeting ad set: ~1 Dec to 14 Dec, USD 10/day = USD 140
  - The campaign was built with the Brand Awareness objective (goal = Reach, billed per impression). Kept rather than rebuilt, to launch on time. Video views still reported
  - The campaign end date must also be set to 14 Dec, or the ad set dates conflict
  - **Final (17 Nov):** LinkedIn errored once on the campaign date edit, but it then saved
    - The campaign runs 17 Nov to 14 Dec, so the original plan stands: awareness USD 10/day to 14 Dec, retargeting 1 to 14 Dec at USD 10/day
    - The 8 Dec / USD 12.70 fallback was **not** used
  - LinkedIn Audience Network: untick it (off-LinkedIn placements give low-quality views)
  - UTMs:
    - Account level already adds `utm_id={{AD_SET_ID}}&utm_source=linkedin&utm_medium=paid-social`
    - Ad set adds only `utm_campaign=mari-testimonials`
    - Ad level: `utm_content=full-video` / `b1` / `b2` / `b3`
    - GA4 medium is `paid-social` (hyphen) on LinkedIn; use the same on Meta
- **Cost watch (superseded by the line above):** LinkedIn forecast USD 30 to 60 CPM. At USD 10/day that's only ~5k to 9k impressions in a month, below the approved doc's 15k to 25k. Re-check after 3 days of data and correct Ali's forecast if needed

## LinkedIn ad as built (17 Nov)

- **Campaign:** "Mari Testimonial Brand Awareness" (Brand Awareness objective, goal Reach, maximum delivery)
- **Ad set:** 17 Nov to 14 Dec, USD 10/day = USD 280. Campaign group lifetime budget USD 420. Audience Network off
- **Ad:** `Ad_1_17Nov2026`
  - Video: "Testimonial Ad - 3rd Draft.mp4"
  - Intro text: Ad 1 copy from the approved doc
  - Headline: **"44 Graduates. 100% Placement. Skills That Lead to Real Careers."** Sana's first version said "Guaranteed Jobs", changed under the no-guarantee rule
  - CTA: Learn more
  - Link: the Mari press page
- **Status:** submitted for LinkedIn review on 17 Nov (live on approval; LinkedIn emails within 24 to 48 h if there's a problem)
- **Still to do:**
  - Create the LinkedIn video audience "Mari video viewers 50%" (Plan › Audiences › Video) so it fills before 1 Dec
  - Facebook ad set (USD 80, 17 Nov to 14 Dec, `utm_source=facebook`)

## Facebook setup (18 Nov)

- **Account:** spending limit USD 80
- **Campaign:** "Mari Testimonials - FB"
  - Objective: Awareness. No special ad category. Advantage campaign budget off
- **Ad set:**
  - Goal: maximize ThruPlay views. Lifetime budget USD 80, runs 18 Nov to 14 Dec
  - Audience (original audience options, not Advantage+):
    - Locations: Karachi, Lahore, Islamabad, Rawalpindi · age 25 to 55
    - Interests: HR, training and development, CSR, nonprofit, education, entrepreneurship
    - Exclude past Mari applicants if that audience exists
  - Placements: manual, **Facebook only** (Feeds, Video feeds, Reels). No Instagram, Audience Network, Messenger or Threads
- **Ad:** "Mari - Full video A - FB"
  - Page: xLoop. Same video, text and headline as LinkedIn. CTA: Learn more
  - URL parameters: `utm_source=facebook&utm_medium=paid-social&utm_campaign=mari-testimonials&utm_content=full-video`
  - Advantage+ creative enhancements off
  - Destination: Website (it defaulted to Messaging apps). Multi-advertiser ads off. Display link: xloopdigital.com
  - Video is landscape, 60 s:
    - Kept at full length, not trimmed in Meta
    - Vertical crop: Original (no 9:16 cut)
    - Square 1:1 only if the captions and end card fit
  - **Editor follow-up:** future cutdowns should be 4:5 or 1:1 masters, so platforms don't have to crop
- **Status (18 Nov):** the FB ad was **published** and is "Processing" (in review), USD 80 lifetime
  - "Review and publish (2)" still shows 2 old student-campaign drafts. Leave them unpublished
  - Ad: "Mari - Full video A - FB", landscape full video, URL params set
  - It won't deliver until billing is added. Set the USD 80 account spending limit once the card is on
- **Meta account watch-out:**
  - The xCelerate ad account (1747502385935873) still holds the old student campaigns ("Mari & xCelerate…"). One has unpublished edits; 2 drafts are pending
  - When publishing, tick only the new "Mari Testimonials - FB" so the old ones don't restart
  - Billing to be set up after the campaign is built
  - Facebook Page: only "XCelerate Bootcamps" is connected to this ad account, so it's used for now
    - Follow-up: connect the xLoop Facebook page to ad account 1747502385935873 for future campaigns
  - Audience: switch from Advantage+ to the original audience options
    - Cities instead of all of Pakistan; age 25 to 55; Advantage detailed targeting off
    - **Actual (18 Nov):** Meta had no "original audience" switch, so Advantage+ stays on, with hard controls of 4 cities and minimum age 25
    - "Reach more people" location expansion unticked
    - Detailed targeting:
      - Human resources (field of study), Community and Social Services (industry)
      - Job titles: Entrepreneurship, Training and Development Manager
      - Nonprofit organization, Sustainability, HR Director, HR Manager
      - Meta no longer offers a "Corporate social responsibility" interest, so Sustainability stands in for it
    - The estimate stays ~23M because Advantage+ shows the wider pool; cities and age 25+ are the hard limits
    - Saved as Meta audience **"xCelerate - Mari awareness"** (reusable)
    - The Controls minimum age must be set to 25; the 25 to 55 range alone is only a suggestion
    - "Education (social concept)" removed as too broad. City-expansion suggestion not applied
  - Frequency cap 3 per 7 days
  - LinkedIn retargeting ad set from 1 Dec
  - Confirm the devs added the CTA to the press page

## Results log

| Date | Platform | Spend | Reach | Cost / 1k reached | Eng. rate | CTR | Note |
|---|---|---|---|---|---|---|---|
| 20 Nov (day 3 to 4) | LinkedIn | USD 34 | 8.9k | USD 3.79 | 0.35% | 0.26% | Far cheaper than the forecast (USD 20 to 40). Check professional demographics for audience quality. No changes yet |

**20 Nov LinkedIn detail:**

- ~18k impressions, ~47 clicks, 7,096 video views (view rate ~39%), frequency ~2
- **By job function:**
  - HR is the top function: 10.8% of impressions, 14.9% of clicks, CTR 0.36%
  - HR + Media & Communication + Community & Social Services ≈ 22% of impressions but ≈ 36% of clicks (CTR 0.36 to 0.5%)
  - Business Development / Operations (from the NGO and energy-company groups) have a lower CTR (0.2%)
- Verdict: audience quality is good
- Completions and view rate are in the Advertise table, Columns › Video (not in the performance chart)
- **Seniority:**
  - Manager 14.9%, Director 10.5%, Owner 3.8%, CXO 2.7%, VP 2.7%, Partner 0.9%
  - Only 4 impressions at "Senior". The ~36% reported is LinkedIn's privacy minimum. The seniority filter works
- **Video columns (ad set):**
  - 18,074 impressions · 20,822 plays · 7,099 views · view rate 39.28%
  - 47 clicks · CTR 0.26% · **avg dwell 4.91 s on a 60 s video**
- **Implication:** most people drop off early, so the 15 to 20 s cutdowns B1 to B3 are a priority for week 2 (chase the editor)
- **Watch-through (20 Nov):**
  - Avg watch 7.34 s, total watch time 4 h 34 m
  - Views at 25%: 574 · at 50%: 215 · at 75%: 142 · completions: **108** (1.5% of views)
  - The big drop is between 25% and 50% (−63%). Of people who reach 50%, half finish
- **Read:** the content holds people who get past ~30 s, but the opening doesn't hook. The cutdowns must lead with the outcome ("44 graduates, all placed") in the first 3 s
- **Decision (20 Nov):**
  - Don't change the approved full video; it keeps running
  - Cutdowns B1 to B3 are already in Ali's approved plan, so they're framed as delivery of approved items (trims of approved footage, approved line, same end card)
  - Format: 4:5, 15 to 20 s, the graduate's strongest line first
  - All 3 go to Ali in one approval round. Editor deadline Tue 24 Nov; skip if not approved by Mon 30 Nov

**23 Nov (week 1, 17 to 23 Nov), LinkedIn:**

- 10,463 video views total
- Daily views peaked at ~2.6k on 18 Nov, then ~1k/day on 21 and 22 Nov (weekend dip)
- Watch Tue/Wed: if views stay ~1k/day, the audience is saturating → cutdowns matter
- **Week 1 LinkedIn totals (to 23 Nov):**
  - Spend USD 60.80 (slightly under the USD 10/day pace)
  - Reach 15,543 (USD 3.91 per 1k) · impressions 26,500 (frequency ~1.7) · plays 30,245
  - Views 10,466 · view rate 39.49% · CPV USD 0.01
  - Clicks 67 · CTR 0.25% · dwell 4.75 s · avg watch 6.84 s · total watch 17 h 33 m
  - Views at 25%: 833 · 50%: 297 · 75%: 186 · completions 140 (0.53%) · full-screen plays 16
- **Already above the approved doc's LinkedIn full-month forecast** (15 to 25k impressions, 3 to 6k views)
- Retargeting audience (50%+ viewers) is at 297, needs 300
- Week 1 update drafted for Ali (23 Nov)

**Facebook, 18 to 22 Nov:**

- Spend USD 14.78 of 80 (on pace)
- Reach 47,680 · impressions 69,862 (frequency ~1.5) · **9,222 ThruPlays** at USD 0.002 each
- Rankings: quality above average; engagement below average (bottom 35%); conversion ranking not relevant
- **Already above the approved FB full-month forecast** (25 to 50k impressions, 4 to 10k ThruPlays)
- **Combined to 23 Nov:** ~96k impressions, ~19.7k views/ThruPlays, USD ~76 spent of 500
- **Cutdowns B1 to B3:** approved by Ali/Nasir (23 Nov). Upload Tue 24 Nov as new ads in the existing ad sets
- Meta banner: add contact info so rejection and limit alerts reach Sana
- **25 Nov:** cutdown files = `Downloads/Ad Snippet 1.mp4`, `2`, `3` (= B1–B3, one graduate each, 54–63 MB). Upload to LinkedIn awareness ad set + FB "Mari Testimonials - FB" ad set, full video keeps running. Intro text needs each graduate's first name + strongest line (Sana to send). `utm_content=b1/b2/b3`
- **26 Nov:** snippets are landscape 16:9 (1920×1080), 28–33 s, not the planned 4:5 / 15–20 s. OK on both platforms; keep crop "Original" in Meta. Sana uploads them herself (step guide given): LinkedIn = new video ads in the existing awareness ad set, `Ad_B1_[Name]_26Nov2026`, same headline as Ad 1; FB = duplicate "Mari - Full video A - FB", swap video, Advantage+ enhancements off, publish only the 3 new ads. Retargeting ad set (1 Dec) should use cutdowns, not the full video. Mon 30 Nov: pause the weakest by view rate / avg watch (benchmark ~39% / ~7 s)
- Correction: the cutdowns Sana is uploading are **4:5 (1080×1350), ~26 s**, not the landscape "Ad Snippet" files in Downloads
- B1 graduate = **Laiba** (LinkedIn ad `Ad_B1_Laiba_26Nov2026`, being built 26 Nov). B2/B3 names still to confirm

## Next steps

- [ ] Ali: OK the landing page switch (press page now, Sponsored page later)
- [ ] Devs: today's 5 items; Monday test and fixes
- [ ] Sana: ad accounts, campaigns, submit for review by Saturday
- [ ] Mon 23 Nov: first weekly numbers to Ali
