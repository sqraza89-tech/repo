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

## Next steps

- [ ] Ali: OK the landing page switch (press page now, Sponsored page later)
- [ ] Devs: today's 5 items; Monday test and fixes
- [ ] Sana: ad accounts, campaigns, submit for review by Saturday
- [ ] Mon 23 Nov: first weekly numbers to Ali
