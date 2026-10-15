---
date: 2026-10-15
tags: [xloop, poland, video, demo, hr-app-pilot, chat-genie, script]
---

# HR App Pilot + Chat Genie: demo video script for the Poland deck (v1)

Related: [[2026-10-13-xloop-poland-vendor-pitch-deck]] (fills Deck B slide 3, the demo slot)

> **Superseded** by [[2026-10-15-xloop-poland-hr-app-pilot-demo-video-script-v2]]. Sana found this version generic; v2 follows the GeshidoCon booth-video format.

## Brief
- Under 60 seconds (this runs about 50), fast cuts, few words, screens carry it
- Grounded in one Polish workplace on one ordinary morning, not features explained in the abstract
- HR App Pilot = the employee side. Chat Genie = the HR director asking questions of the data
- No voiceover. On-screen text and music only, so it works muted and the presenter can talk over it in the room

## Setting (fictional, demo data only)
- Company: **Wisła Logistics**, a mid-size logistics firm, 1,200 staff, Warsaw and Łódź
- Employee: **Kasia**, dispatch coordinator. HR director: **Marek**
- Relatable Polish details: *zaświadczenie o zarobkach* (salary certificate the bank asks for with a mortgage), *urlop na żądanie* (the 4 days of on-demand leave every employee gets), *L4* (sick leave)
- Small "Demo data" tag in a corner of every screen

## Script

| Time | Screen | On-screen text |
|---|---|---|
| 0–3s | Black. Clock flicks to 08:47. Teams/chat window opens | **Monday. 08:47.** |
| 3–7s | HR inbox floods: "Payslip?", "How many leave days left?", "Need a certificate for the bank", "Is my L4 registered?" Counter runs up to 63 | **Every HR team knows this inbox.** |
| 7–13s | Kasia types: *"I need a salary certificate for my mortgage."* Pilot answers and a filled PDF slides in, ready to download | **Certificate. 20 seconds.** |
| 13–18s | Kasia: *"Can I take on-demand leave this Friday?"* Pilot: "You have 2 of 4 days left. Booked. Your manager has been notified." Calendar fills in | **Checked. Booked. Done.** |
| 18–22s | Kasia: *"Send me my September payslip."* Payslip pulled from the HR system (Odoo badge visible) | **Straight from your HR system.** |
| 22–27s | Kasia: *"I'd like to talk to someone about a problem with my manager."* Pilot: "I've passed this to Anna in HR, with your note. She'll contact you today." Ticket card appears | **And it knows when to hand over to a person.** |
| 27–29s | Whip pan to a different desk. Marek, HR director | **Meanwhile, HR has its own questions.** |
| 29–36s | Marek types into Chat Genie: *"Sick leave by department, last 6 months."* Bar chart builds. One bar pulses red: Łódź warehouse | **Ask in plain words. Get the chart.** |
| 36–41s | Chat Genie flag: "L4 in Łódź warehouse is rising since August." Marek: *"Show me by shift."* Chart re-cuts: night shift | **Spot it before it becomes a problem.** |
| 41–46s | Split screen: Kasia's chat on the left, Marek's dashboard on the right | **Answers for every employee. A clear picture for HR.** |
| 46–51s | Both screens shrink into the HR system they sit on | **Built on the systems you already run.** |
| 51–54s | End card: xLoop logo | **HR App Pilot + Chat Genie. By xLoop.** |

## Production notes
- Pace: 2–5 seconds per beat. Typing sped up, answers appear instantly, no loading spinners
- Cursor-led zooms on the answer, not the whole UI. Most screens are cropped to the chat bubble or the chart
- Music: one driving track with hits on each "done" moment
- All names, figures and documents are dummy. No client names or real users on screen (same issue as the AI Capabilities Deck screens)
- Chart figures are illustrative demo data, so no claims. The video makes no performance or time-saved claims

## Open questions (before recording)
- [ ] Language: Polish UI, English UI with Polish context, or English plus Polish subtitles. Polish UI needs delivery to confirm the products work in Polish
- [ ] Real recording on a demo tenant, or Figma mock-ups animated? Chat Genie on HR data is a combination the site does not show today, so delivery should confirm it can be run
- [ ] Is "20 seconds" for the certificate true on the demo? If not, drop the number: "Certificate. Done."
- [ ] Odoo badge: keep (proven integration) or show a generic "your HR system" (many Polish firms run SAP, Comarch or enova)

## Next steps
- [ ] Sana: answer the open questions
- [ ] Delivery: set up a demo tenant with Wisła Logistics dummy data and record the flows
- [ ] Omais: storyboard/edit, end card in brand style
