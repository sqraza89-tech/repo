const { fs, d, H, B, M, INK, MUTED, OR, ORINK, P, h1, h2, label, note, field, bullets, nums, table, pb } = require('./helpers.js');
const { Document, Packer, Paragraph, TextRun, BorderStyle, AlignmentType, LevelFormat, Footer, PageNumber } = d;

const C = [];
C.push(new Paragraph({ spacing: { before: 2400, after: 120 }, children: [new TextRun({ text: 'TEKREVOL · WEBSITE REBRAND', font: M, size: 18, color: ORINK, characterSpacing: 30 })] }));
C.push(new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: 'Homepage structure and copy', font: H, size: 64, color: INK })] }));
C.push(new Paragraph({ spacing: { after: 600 }, border: { bottom: { style: BorderStyle.SINGLE, size: 24, color: OR, space: 8 } }, children: [new TextRun({ text: 'Version 2 · Draft for review · 12 October 2026', font: B, size: 24, color: MUTED })] }));
C.push(P('**New in version 2:** the Strata Method is now the centerpiece of the page, and there is a lead capture system built for people and for AI assistants acting on their behalf.'));
C.push(P('**Status:** draft. Anything marked [CONFIRM] must be checked with TekRevol before launch. The Strata Method details depend on the 13 questions sent to delivery.'));
C.push(P('**How to read the copy:** small orange capitals are field labels (eyebrow, H1, lead, button). Text with an orange rule beside it is the copy that goes on the page.'));
C.push(pb());

C.push(h1('1. Structure at a glance'));
C.push(table(['#', 'Section', 'Job', 'Change from v1'], [
  ['0', 'Navigation', 'One primary action', 'Adds "Strata Method"'],
  ['1', 'Hero', 'What TekRevol is and the promise', 'Button now opens the project brief'],
  ['2', 'Starting points', 'Buyers pick their path', 'Same'],
  ['3', 'Proof band', 'Trust in three seconds', 'Same'],
  ['4', 'The Strata Method', 'The differentiator: how TekRevol delivers', '**New.** Replaces "How we work" and moves up'],
  ['5', 'Prototype to production', 'The method applied to the most common starting point', 'Shortened, tied to the Ship Line'],
  ['6', 'What we build', 'Four pillars, service links', 'Same'],
  ['7', 'Shipped work', 'Results first', 'Same'],
  ['8', 'Security and compliance', 'Proof for the approver', 'Tied to the Ship Line checks'],
  ['9', 'Industries', 'Route to vertical proof', 'Same'],
  ['10', 'FAQ', 'Answer engines and objections', 'Two new questions'],
  ['11', 'Insights', 'Freshness and authority', 'Same'],
  ['12', 'Project brief', 'Lead capture for people and AI assistants', '**New.** Replaces the closing form'],
  ['13', 'Footer', 'Facts and links', 'Adds the brief link'],
], [500, 2300, 3460, 3100]));
C.push(note('Why this order: promise, then self-sorting, then proof, then the one thing competitors do not have (the method), then services and evidence, then the ask.'));
C.push(pb());

C.push(h1('2. Homepage copy'));
C.push(h2('0. Navigation'));
C.push(...bullets(['Links: Services · Work · Strata Method · Industries · Insights · About', 'Primary button: **Start a project brief** (scrolls to section 12)', 'Secondary text link: Talk to an engineer [CONFIRM: an engineer or technical lead joins first calls. If not, use "Book a call"]']));

C.push(h2('1. Hero'));
C.push(...field('Eyebrow', 'YOUNG IN APPROACH. ENTERPRISE IN OUTPUT.'));
C.push(...field('H1', 'AI-first software development for products your business can depend on', true));
C.push(...field('Lead', 'We build AI-native apps and custom software to enterprise standard, with security and compliance designed in from the first sprint.'));
C.push(...field('Primary button', 'Start a project brief'));
C.push(...field('Secondary button', 'See shipped work'));
C.push(...field('Microcopy under buttons', 'Six questions, about two minutes. An engineer reads every brief.'));
C.push(note('Visual: Layer planes stacking upward with the top layer in orange (Strata). The same layers return in section 4 as the method.'));

C.push(h2('2. Starting points'));
C.push(...field('Eyebrow', 'START HERE'));
C.push(...field('H2', 'Where are you starting from?', true));
C.push(table(['Card title', 'One line', 'Link'], [
  ['I have an idea and nothing built yet', 'We\'ll help you decide what to build first, then build it with you.', 'Plan my first build'],
  ['I have a prototype that needs to be production-ready', 'You\'ve explored. We help you cross the Ship Line.', 'Get a code review'],
  ['My business runs on manual work', 'Your business is already running. Your software should keep up.', 'Automate a process'],
  ['I need to make the case to my leadership', 'A one-page summary of scope, approach, security and pricing structure, built to forward.', 'Get the one-pager'],
], [2700, 4560, 2100]));
C.push(note('Each card opens the project brief (section 12) with the starting point already filled in.'));

C.push(h2('3. Proof band'));
C.push(...bullets(['**800+** apps and digital products delivered', '**98%** client satisfaction', '**4.8/5** on Clutch', '**10 years** building software [CONFIRM: must match the founding year in schema and llms.txt, currently 2018]']));
C.push(P('Award row: Clutch Top 1000 · Inc. 5000 · Right Firms · Top Developers · Expertise · Horizon Award Gold and Silver · Software World'));

C.push(h2('4. The Strata Method'));
C.push(...field('Eyebrow', 'THE STRATA METHOD'));
C.push(...field('H2', 'Explore fast. Ship deliberately.', true));
C.push(...field('Lead', 'AI makes exploring nearly free. Production still takes engineering. Our method keeps the two apart, with one line between them.'));
C.push(table(['Block', 'Title', 'One line'], [
  ['Explore (cyan)', 'Learn · Ideate · Iterate', 'AI does the heavy lifting: research, options, prototypes. Cheap to try, cheap to throw away.'],
  ['The Ship Line (orange)', 'One gate', 'Nothing becomes production work until it passes our Build Standard, with a written sign-off you can see.'],
  ['Ship (orange)', 'Incubate · Scale', 'Engineers own every decision. Built layer by layer, each one production-grade before the next goes on top.'],
], [2300, 2300, 4760]));
C.push(...field('Line under the diagram', 'Every build makes the next one better.'));
C.push(...field('Link', 'How the Strata Method works'));
C.push(note('Visual: cyan Explore field with three stages, an orange vertical Ship Line, then Strata layers for Ship, and a loop arrow back to Learn. Stage details and the sign-off line are [CONFIRM] with delivery. The link goes to /strata-method.'));

C.push(h2('5. Prototype to production'));
C.push(...field('Eyebrow', 'PROTOTYPE TO PRODUCTION'));
C.push(...field('H2', 'A working demo is a beginning. We build what comes next.', true));
C.push(...field('Lead', 'If you already have a prototype, you\'ve done the exploring. We start at the Ship Line: review what exists, keep what works, and rebuild only what won\'t carry real users.'));
C.push(...field('Button', 'Get a code review'));
C.push(note('[CONFIRM] the code review offer exists and what it includes. Don\'t call it free unless it is.'));

C.push(h2('6. What we build'));
C.push(...field('Eyebrow', 'SERVICES'));
C.push(...field('H2', 'Four ways we build with AI', true));
C.push(table(['Pillar (proposed, D01)', 'One line', 'Links'], [
  ['**AI-Native Software Development** (featured card)', 'Mobile, web and custom software designed around AI from the first sprint.', 'Mobile apps · Web apps · Custom software · Prototype to production'],
  ['**Applied AI and Intelligent Automation**', 'AI agents and automation that take repetitive work off your team, on private models when your data can\'t leave.', 'AI agents · Generative AI · Process automation · RevAI'],
  ['**Cloud, Data and AI Infrastructure**', 'The cloud, data pipelines and DevOps that AI products need to run reliably at scale.', 'Cloud migration · Data engineering · DevOps'],
  ['**Strategy and Team Extension**', 'Product strategy when you\'re deciding what to build, and senior engineers when you need more hands.', 'AI strategy · Staff augmentation · Dedicated teams'],
], [2600, 4160, 2600]));

C.push(h2('7. Shipped work'));
C.push(...field('Eyebrow', 'SHIPPED WORK'));
C.push(...field('H2', 'Results first. Then how we got there.', true));
C.push(table(['Client', 'Challenge', 'What we built', 'Impact'], [
  ['**Kinder Morgan**', 'Oil and gas teams buried in complex datasets', 'A data platform that turns those datasets into instant insights', '40% lift in operational efficiency'],
  ['**Rehkempers** [CONFIRM spelling]', 'Truss pricing, freight and tariffs done by hand for 50 years', 'A dual-sided quoting platform across 4 manufacturing plants', 'A 50-year manual process replaced'],
  ['**Pure Plank**', 'Helping people build a daily fitness habit', 'An app with interactive plank tutorials and challenges', '20,000+ users guided'],
  ['**Rise Up Kings**', 'Turning personal-development goals into progress', 'A goal-tracking platform', '1,000+ users past 100+ growth goals'],
], [1900, 2500, 2760, 2200]));

C.push(h2('8. Security and compliance'));
C.push(...field('Eyebrow', 'WHAT THE SHIP LINE CHECKS'));
C.push(...field('H2', 'Built to the standard your industry already requires', true));
C.push(...field('Lead', 'Compliance is an architecture decision we make in the first sprint, not a checklist before launch.'));
C.push(table(['Card', 'Line'], [
  ['**Privacy by design** · GDPR · CCPA', 'Data collection is minimized and consent is explicit. Access, deletion and portability are built into the schema.'],
  ['**Secure delivery** · Encryption · Least-privilege access', 'Data is encrypted in transit and at rest. Security checks run through the whole development lifecycle.'],
  ['**AI that keeps your data in** · Private LLMs · PII redaction', 'RevAI deploys private models, strips personal data before it reaches a model, and keeps audit logs.'],
  ['**Regulated-industry experience** · HIPAA · SOC 2 · PCI DSS', 'We\'ve shipped products in regulated sectors. Your requirements won\'t be new to us.'],
], [3600, 5760]));
C.push(...field('Button', 'Download the security and compliance summary'));
C.push(note('Say "experience with", never "certified", unless a certificate exists. [CONFIRM]'));

C.push(h2('9. Industries'));
C.push(...field('H2', 'Software for how your industry actually works', true));
C.push(P('Only industries with proof: Healthcare · Energy · Manufacturing · Fintech · Logistics · eCommerce. Home-based care becomes the first tile when /home-based-care is live.'));

C.push(h2('10. FAQ'));
C.push(...field('H2', 'Questions buyers ask us', true));
const faq = [
  ['What does TekRevol do?', 'TekRevol is an AI-first software development company. We build AI-native mobile apps, web platforms and custom software to enterprise standard, and we turn prototypes into production software. We\'ve delivered 800+ apps and digital products over 10 years, with a 4.8/5 rating on Clutch.'],
  ['What is the Strata Method?', 'The Strata Method is TekRevol\'s AI-native delivery framework: explore fast with AI, cross the Ship Line only when the work meets production standard, and build in layers that make every next build better.'],
  ['What does "AI-first software development" mean?', 'AI is part of the product design from the first sprint, not a feature added later. We decide early where AI earns its place and build the data and infrastructure it needs.'],
  ['Can you work with an app or prototype we\'ve already started?', 'Yes. We review the existing code, keep what works, fix what\'s breaking and rebuild only what won\'t hold up with real users.'],
  ['How do you handle HIPAA, SOC 2 and other compliance requirements?', 'We design for compliance in the first sprint: encryption, least-privilege access, a secure development lifecycle and, for AI features, private models with personal data redacted. We have direct experience with HIPAA, SOC 2, PCI DSS, GDPR and CCPA.'],
  ['How does pricing work?', '[CONFIRM engagement models] We scope each project before quoting and give you a clear structure you can compare and explain internally.'],
  ['Who owns the code?', '[CONFIRM] You do. Code, designs and documentation transfer to you as the project is paid.'],
  ['Can my AI assistant contact TekRevol for me?', 'Yes. Point it to tekrevol.com/brief. The page lists the six things we need to scope a project, in plain text. We confirm every brief by email with the person it was sent for before we act on it.'],
  ['Where is TekRevol based?', 'TekRevol is headquartered in Houston, Texas, with offices in Dubai, London and Doha [CONFIRM office list]. We build for clients in the US, Europe and the Middle East.'],
];
faq.forEach(([q, a]) => { C.push(new Paragraph({ spacing: { before: 160, after: 60 }, children: [new TextRun({ text: q, font: B, size: 22, color: INK, bold: true })] })); C.push(P(a)); });

C.push(h2('11. Insights'));
C.push(...field('H2', 'What we\'re learning', true));
C.push(P('Three latest posts on AI-first topics. No teasers with unsourced statistics.'));

C.push(h2('12. Project brief (lead capture)'));
C.push(...field('Eyebrow', 'START A PROJECT BRIEF'));
C.push(...field('H2', 'Tell us where you\'re starting. We\'ll tell you what it takes.', true));
C.push(...field('Lead', 'Six questions, about two minutes. An engineer reads every brief and replies within one business day. [CONFIRM response time]'));
C.push(label('The six questions (one per step, contact details last)'));
C.push(...nums([
  '**Where are you starting from?** An idea · A prototype · A manual process to automate · A system to modernize · I need a summary for my leadership',
  '**What are you trying to solve?** One open box',
  '**What kind of business are you?** Startup or founder · Small business · Mid-sized company · Enterprise',
  '**Any compliance needs?** HIPAA · SOC 2 · PCI DSS · GDPR · None · Not sure',
  '**Timeline and budget range** (optional)',
  '**Where should we reply?** Name and work email',
], 'n1'));
C.push(...field('Submit button', 'Send my brief'));
C.push(...field('Under the button', 'We use your details to reply to this brief. Nothing else.'));
C.push(...field('Confirmation message', 'Brief received. Your reference is TR-0000. An engineer will reply within one business day with first questions or a call slot.'));
C.push(label('Beside the form: other ways in'));
C.push(...bullets(['**Book a 30-minute call** (calendar link) [CONFIRM tool]', '**Email us** (address shown as text, not an image)', '**Get the one-pager** for leadership (work email only)']));
C.push(label('Beside the form: what happens next'));
C.push(...nums(['You get a reference number and a copy of your brief by email.', 'An engineer reads it.', 'You get first questions or a call slot.', 'You get a proposal with a timeline and a pricing structure you can explain.'], 'n2'));
C.push(label('Trust strip under the form'));
C.push(P('4.8/5 on Clutch · 800+ products shipped · Experience with HIPAA, SOC 2, PCI DSS and GDPR'));
C.push(label('Band for AI assistants (visible on the page)'));
C.push(...field('Eyebrow', 'USING AN AI ASSISTANT?'));
C.push(...field('Line', 'Point it to tekrevol.com/brief. Everything it needs to brief us is there in plain text.'));
C.push(...field('Link', 'Open the brief format'));

C.push(h2('13. Footer'));
C.push(...field('One-line description (same sentence in schema and llms.txt)', 'TekRevol is an AI-first software development company that builds AI-native apps and custom software to enterprise standard.'));
C.push(...bullets(['Offices with full addresses, identical to llms.txt and Google Business Profiles', 'Links: pillars, Work, Strata Method, Industries, Insights, About, Careers, **Project brief**, Privacy, Cookie settings', 'Clutch and LinkedIn profile links']));
C.push(pb());

C.push(h1('3. The lead capture system'));
C.push(P('One brief, three doors. A person fills the form. A person books a call. An AI assistant submits the same brief for its user. All three land in the same place with the same fields, so sales works from one queue.'));
C.push(h2('Why build for AI assistants'));
C.push(...bullets([
  'Buyers are starting to ask an assistant to shortlist vendors and make first contact. Most agency sites block this with image-only contact details, forms that need a mouse, or bot checks',
  'We saw no documented way for an assistant to submit a brief on any of the five competitor homepages reviewed. Not checked beyond their homepages, but it looks like an open advantage',
  'What helps assistants also helps people: clear labels, few fields, a plain-text explanation of what is needed and what happens next',
]));
C.push(h2('For people'));
C.push(table(['Element', 'What', 'Why'], [
  ['Six questions, one per step', 'Starting point first, contact details last', 'People finish what they have started. Asking for email first loses them'],
  ['Pre-filled starting point', 'Carried from the card clicked in section 2', 'One less question, and sales sees the buyer type'],
  ['Three doors', 'Brief, call booking, email', 'Founders want a conversation. Owners want speed. Champions want a document'],
  ['Reference number and emailed copy', 'Shown on screen and sent by email', 'Proof it arrived. Something to forward internally'],
  ['"What happens next" in four steps', 'Beside the form', 'Answers the fear of being passed around'],
  ['One-pager door', 'Work email only', 'Captures the champion who is not ready to talk'],
], [2500, 3200, 3660]));
C.push(h2('For AI assistants'));
C.push(table(['Element', 'What', 'Why'], [
  ['/brief page', 'A plain-text page: who TekRevol is for, the six questions, accepted answers, what happens next. Also served as /brief.md', 'An assistant can read it in one request and collect answers from its user'],
  ['Real HTML form', 'Proper labels, field names and autocomplete hints. Works without a mouse. No text inside images', 'Browser-driving assistants can fill and submit it'],
  ['Brief endpoint', 'POST /api/brief accepts the same six answers as JSON. Described in /api/openapi.json', 'Assistants that call APIs can submit without a browser'],
  ['Pre-fill links', '/brief?start=prototype&compliance=hipaa (project facts only, never personal data in a link)', 'An assistant can hand its user a ready-made link to review and send'],
  ['llms.txt "Contact" block', 'How to submit a brief, the fields, the response time', 'The first file many assistants read'],
  ['Schema', 'ContactPoint plus a potentialAction pointing at the brief', 'Tells search and answer engines the page accepts inquiries'],
  ['Clear reply', 'Reference number, next steps and response time returned as text and JSON', 'The assistant can report back to its user accurately'],
], [2300, 3900, 3160]));
C.push(h2('Fields (same for the form and the endpoint)'));
C.push(table(['Field', 'Values', 'Required'], [
  ['start', 'idea · prototype · automate · modernize · summary · other', 'Yes'],
  ['problem', 'Free text', 'Yes'],
  ['business_type', 'startup · small_business · mid_sized · enterprise', 'Yes'],
  ['compliance', 'hipaa · soc2 · pci_dss · gdpr · none · not_sure (one or more)', 'No'],
  ['timeline, budget_range', 'Free text or range', 'No'],
  ['name, email', 'The person the brief is for', 'Yes'],
  ['consent', 'The person agrees to be contacted about this brief', 'Yes'],
  ['submitted_via', 'form · call · assistant', 'Set by the system'],
], [2600, 4760, 2000]));
C.push(h2('Safeguards'));
C.push(...bullets([
  '**Confirm with the human.** Every brief sent by an assistant triggers an email to the named person. Sales acts only after they confirm',
  '**No bot wall on the brief.** Use a hidden honeypot field and rate limits, not a puzzle that blocks assistants and annoys people',
  '**Collect little.** No phone number required. No personal data in links',
  '**Label the source.** "submitted_via" goes into the CRM so assistant-sent leads can be measured',
  'Privacy policy and consent wording [CONFIRM with whoever owns the policy]',
]));
C.push(h2('Build order'));
C.push(...nums([
  '**Now (copy and form only):** six-question form, three doors, confirmation with reference number, /brief page, llms.txt contact block, schema',
  '**Next:** pre-fill links from the starting-point cards, CRM routing by starting point, email confirmation step',
  '**Later:** the JSON endpoint and its description file. Newer standards for assistants are still settling, so add them once they are stable',
], 'n3'));
C.push(h2('What to measure'));
C.push(...bullets(['Brief starts and completions, by starting point', 'Share of briefs by door: form, call, assistant', 'Brief to first meeting, and meeting to proposal', 'Visits from AI tools (chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com) as their own channel']));
C.push(pb());

C.push(h1('4. SEO and AI-engine spec'));
C.push(table(['Element', 'Copy'], [
  ['Title (max 60)', 'AI-First Software Development Company | TekRevol'],
  ['Meta description (max 155)', 'TekRevol builds AI-native apps and custom software to enterprise standard, with compliance built in. 800+ products shipped, 4.8/5 on Clutch.'],
  ['H1', 'AI-first software development for products your business can depend on'],
], [2600, 6760]));
C.push(...bullets([
  'One H1, one H2 per section. Eyebrows are styled text, not headings',
  'Structured data: Organization, WebSite, the four pillars as Services, FAQPage matching section 10 word for word, the Strata Method as a defined term, ContactPoint with the brief action',
  'All text in HTML, including closed FAQ answers. A transcript under any video',
  'The Strata Method definition and the footer sentence appear word for word on the homepage, /strata-method, llms.txt and About',
  'llms.txt: fix the facts that conflict with the site (founded 2018, 500+ apps, 96% retention, 200+ engineers) and add the Contact block',
]));

C.push(h1('5. Open items before launch'));
C.push(table(['Item', 'Who'], [
  ['Strata Method stages, gates and sign-off roles (13 questions sent)', 'Project managers, CTO'],
  ['Founding year (2018 in schema vs "10 years" on the page)', 'TekRevol'],
  ['An engineer or technical lead joins first calls', 'Sales'],
  ['Response time for briefs', 'Sales'],
  ['Code review offer: exists, what it includes, free or paid', 'Sales'],
  ['Engagement and pricing models; code ownership terms', 'Sales, leadership'],
  ['Calendar tool for call booking; CRM that receives briefs', 'Sales, developers'],
  ['Privacy and consent wording for the brief', 'Policy owner'],
  ['Office list; client spelling (Rehkempers or Rekhempers)', 'Marketing'],
  ['Pillar names (decision D01)', 'Abeer'],
], [6760, 2600]));

const doc = new Document({
  creator: 'Sana Qazi', title: 'TekRevol homepage structure and copy v2',
  styles: { default: { document: { run: { font: B, size: 21, color: INK } } } },
  numbering: { config: [
    { reference: 'b', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } }, run: { color: OR } } }] },
    ...['n1', 'n2', 'n3'].map(r => ({ reference: r, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 300 } }, run: { color: ORINK, font: M } } }] })),
  ] },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1300, bottom: 1300, left: 1440, right: 1440 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: 'TekRevol · Homepage copy v2 · ', font: M, size: 14, color: MUTED }), new TextRun({ children: [PageNumber.CURRENT], font: M, size: 14, color: MUTED })] })] }) },
    children: C,
  }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[2], b); console.log('wrote'); });
