---
date: 2026-10-15
tags: [xloop, poland, video, demo, hr-app-pilot, chat-genie, script]
---

# HR App Pilot + Chat Genie: 60-second video for the Poland deck (v2)

Related: [[2026-10-15-xloop-poland-hr-app-pilot-demo-video-script]] (v1, rejected as generic) · [[2026-10-13-xloop-poland-vendor-pitch-deck]]

## Why v2
- Sana: v1 felt generic. Match the GeshidoCon booth videos (`Geshido Video Scripts - Last one.docx`, OneDrive) in vibe, pace, technical depth and value
- GeshidoCon pattern: a recognisable world, then the product acting in it, then what runs under the hood (named stack), then a rapid use-case montage, then an impact frame and a sign-off line (GeshidoCon's "Get Shit Done" is their tagline, not ours: never use it)
- The GeshidoCon Agentic Workflows video already used HR App Pilot for generic orchestration. This one goes deep on HR in a Polish workplace and adds Chat Genie as the analytics layer

## Script

**SCENE 1 (0:00–0:07)**
- Visuals: fast montage of Polish workplaces. A shared-services floor in Kraków, a warehouse night shift in Łódź, a production line near Poznań. Chat bubbles pop above workers, one after another
- On-screen text:
  - 1,200 employees. One HR team.
  - Payslips. Leave. Certificates. L4.
  - The same questions. Every day.

**SCENE 2 (0:08–0:16)**
- Visuals: an employee types *"Potrzebuję zaświadczenia o zarobkach do banku"* (salary certificate for the bank). Intent detected, employee record pulled from Odoo, letter generated, PDF ready to download
- On-screen text:
  - Requested at 09:02. Ready at 09:02.
  - Nobody in HR touched it.

**SCENE 3 (0:17–0:27)**
- Visuals: the chat zooms out into the architecture, each layer lighting up in turn:
  - Intent recognition
  - Policy retrieval (RAG over the company's work rules and HR policies)
  - Tool layer: Odoo APIs for payroll, leave and documents
  - Guardrails
  - Escalation
- On-screen text:
  - Behind every reply:
  - Your policies, retrieved.
  - Your HR system, connected.
  - Real transactions. Not just answers.

**SCENE 4 (0:28–0:35)**
- Visuals: rapid cuts, one second each. On-demand leave booked and the manager notified. September payslip fetched. Employment certificate generated. Advance salary request filed. Help desk ticket opened and tracked
- On-screen text:
  - Leave. Payslips. Certificates. Requests. Tickets.
  - Handled end to end.

**SCENE 5 (0:36–0:41)**
- Visuals: an employee raises a sensitive issue about their manager. The agent stops, routes it to a named HR officer, and the case arrives with its context attached. An audit log line writes itself
- On-screen text:
  - Sensitive cases go to a person. With context.
  - Every action logged.

**SCENE 6 (0:42–0:52)**
- Visuals: the HR director opens Chat Genie and types *"Absence by site, last 6 months."* The generated SQL flashes for a beat, then a chart builds. Chat Genie flags an anomaly: sick leave rising on the Łódź night shift since August. A follow-up question re-cuts the chart by shift
- On-screen text:
  - Then HR asks its own questions.
  - Ask like a manager. Answered like an analyst.
  - Chat Genie spots the pattern before it becomes attrition.

**IMPACT FRAME (0:53–0:57)**
- Visuals: fast montage of the architecture, chats, Odoo transactions and dashboards
- On-screen text (no unsourced figures, see open questions):
  - Built on the HR system you already run.
  - No replacement. Live in weeks.
  - Built with LangChain and LangGraph. Powered by OpenAI and Anthropic.

**FINAL FRAME (0:58–1:00)**
- Visuals: xLoop logo outro, best dashboard shots running behind
- On-screen text:
  - Most AI stays in the pilot.
  - Ours goes to work.

## Claims check
- Every feature shown is on the live HR App Pilot and Chat Genie pages: policy answers, leave, document generation, help desk, Odoo payslips and advance salary, escalation with context logged, NLQ, visualization, anomaly detection
- "No replacement" and "live in weeks" are on the live HR App Pilot page ("a few weeks"). The Poland deck has held back durations, so confirm
- Stack line: LangChain, LangGraph, OpenAI and Anthropic are approved at company level (A18). Confirm HR App Pilot itself runs on them
- **No percentage stats.** The GeshidoCon frames (70%, 95%, 10x) have no recorded source and are blocked for external use. A Polish procurement panel will ask where they come from

## Open questions
- [ ] Stats frame: keep it factual as above, or does delivery have real HR App Pilot numbers from a deployment (requests handled, response time, share resolved without HR)?
- [ ] Polish on screen: needs delivery to confirm both products work in Polish. Fallback: English UI with Polish subtitles
- [x] Sign-off: "Get Shit Done" is GeshidoCon's tagline, so it is out. Replaced with an xLoop-level line (Sana, 2026-10-15): "Most AI stays in the pilot. Ours goes to work." Echoes Deck B slide 2 (why AI stalls after the pilot)
- [ ] Footage: a real demo tenant recording, or animated mock-ups? Chat Genie on HR data is not shown on the site today
- [ ] Generated SQL on screen: delivery to confirm Chat Genie can show the query

## Word doc
- `Notes/2026-10-15-xloop-poland-hr-app-pilot-chat-genie-video-script.docx` (built 2026-10-15): script in GeshidoCon format plus sign-off options A–F. Copy only; claims check and open questions stay in this note

## Next steps
- [ ] Sana: pick the sign-off (options A–F in the Word doc), decide stats frame and language
- [ ] Delivery: confirm stack, Polish support, Chat Genie on HR data; set up demo tenant with dummy data
- [ ] Omais / editor: stock montage of Polish workplaces, architecture animation, edit
