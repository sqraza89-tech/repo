const { fs, d, H, B, M, INK, MUTED, OR, ORINK, P, h1, h2, note, field, bullets, nums, table, pb } = require('./helpers.js');
const { Document, Packer, Paragraph, TextRun, BorderStyle, AlignmentType, LevelFormat, Footer, PageNumber } = d;

const C = [];
C.push(new Paragraph({ spacing: { before: 2400, after: 120 }, children: [new TextRun({ text: 'TEKREVOL · DELIVERY FRAMEWORK', font: M, size: 18, color: ORINK, characterSpacing: 30 })] }));
C.push(new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: 'The Strata Method', font: H, size: 72, color: INK })] }));
C.push(new Paragraph({ spacing: { after: 600 }, border: { bottom: { style: BorderStyle.SINGLE, size: 24, color: OR, space: 8 } }, children: [new TextRun({ text: 'Explore fast. Ship deliberately. · Proposal v1 · 12 October 2026', font: B, size: 24, color: MUTED })] }));
C.push(P('**What this is:** a proposed signature framework for how TekRevol delivers software with AI. It is meant to set TekRevol apart on the website, in proposals and in AI search answers.'));
C.push(P('**Status:** direction and name approved by Sana. The details of each stage are a proposal until TekRevol delivery confirms them. Items marked [CONFIRM] need an answer from project managers or the CTO.'));
C.push(P('**What we need from you:** read sections 2 and 4, then answer the 13 questions in section 6.'));
C.push(pb());

C.push(h1('1. Why TekRevol needs its own framework'));
C.push(P('Competitors have started naming how they deliver with AI. A named method gives buyers something to remember, gives a champion something to take to leadership, and gives AI engines a definition to quote.'));
C.push(table(['Competitor', 'Framework', 'Shape'], [
  ['HatchWorks', '**GenDD** (Generative-Driven Development), with a manifesto, an ebook and a 2026 award', 'A straight line: Decide, Build, Adopt'],
  ['Cheesecake Labs', '**AI-Accelerated Delivery**, described as an agentic software lifecycle', 'Agent and human pairs at each step ("Agents propose, human prioritizes")'],
  ['BluTech', 'No delivery method. Stage labels for its AI product (Understand, Orchestrate, Execute)', 'Short flows per service'],
  ['Azumo, LeewayHertz', 'Nothing named for delivery', 'n/a'],
], [1900, 4260, 3200]));
C.push(h2('The gap'));
C.push(...bullets([
  '**Every competitor framework is a straight line.** None separates exploring from shipping. That is exactly where AI-built software breaks: AI makes a demo cheap, but production still takes engineering',
  '**Nobody names the gate.** No one says when a prototype becomes production work, or what it has to pass',
  '**Nobody shows compounding.** No one shows how one build makes the next one better',
  '"Humans plus AI agents" is already expected. Cheesecake Labs owns that line, so TekRevol should not lead with it',
]));

C.push(h1('2. The Strata Method'));
C.push(...field('Definition (use this exact sentence everywhere)', "The Strata Method is TekRevol's AI-native delivery framework: explore fast with AI, cross the Ship Line only when the work meets production standard, and build in layers that make every next build better."));
C.push(...field('Brand line', 'Structured chaos, shipped in layers.', true));
C.push(h2('Two modes, one line between them'));
C.push(...bullets([
  '**Explore (cyan).** AI does the heavy lifting: research, options, prototypes. Cheap to try, cheap to throw away',
  '**The Ship Line (orange).** The gate. Nothing becomes production work until it passes the Build Standard checks',
  '**Ship (orange).** Engineers own every decision. Built layer by layer, each one production-grade before the next goes on top',
]));
C.push(note('This is the existing brand rule, word for word: "cyan explores, orange ships."'));
C.push(h2('Five stages'));
C.push(table(['Mode', 'Stage', 'AI does', 'Engineers own', 'Client gets'], [
  ['Explore', '**1. Learn**', 'Reads existing code, data and documents. Sums up user and market signals', 'The problem, constraints and compliance needs', 'A problem brief and risk map'],
  ['Explore', '**2. Ideate**', 'Generates solution options and clickable prototypes', 'Choosing the direction and the architecture', 'An architecture decision and a chosen prototype'],
  ['Explore', '**3. Iterate**', 'Builds variations quickly for testing', 'Judging what works with real users', 'A validated prototype'],
  ['Gate', '**The Ship Line**', 'Runs automated checks against the Build Standard', 'Sign-off', 'A written go or no-go'],
  ['Ship', '**4. Incubate**', 'Writes and tests code in parallel', 'Reviewing every change. Security and compliance', 'A production release, layer by layer'],
  ['Ship', '**5. Scale**', 'Monitors performance, cost and model quality', 'Deciding what improves next', 'A performance review that feeds the next Learn'],
], [900, 1400, 2500, 2360, 2200]));
C.push(note('The loop: Scale feeds back into Learn. What each build teaches goes into the next one. That is "Better with every layer" as a working process. Every cell in this table is [CONFIRM] with delivery.'));
C.push(h2('Four principles'));
C.push(...bullets(['**AI moves fast. Engineers own the decisions.**', '**Explore freely. Ship deliberately.**', '**Every layer is production-grade before the next goes on top.**', '**Every build makes the next one better.**']));

C.push(h1('3. The Ship Line checks (the Build Standard)'));
C.push(P('The five Strata layers from the brand guidelines become the checklist at the Ship Line. Security and compliance run through every layer.'));
C.push(table(['Layer', 'Checked at the Ship Line [CONFIRM]'], [
  ['**5. Experience**', 'Accessibility, usability tested'],
  ['**4. Product logic**', 'Code reviewed, automated tests passing, architecture documented'],
  ['**3. AI**', 'Model evaluated, human review where it matters, data kept private'],
  ['**2. Data**', 'Data model, privacy by design, backups'],
  ['**1. Infrastructure**', 'Monitoring, uptime targets, cost controls'],
  ['**Through every layer**', 'Security and compliance: encryption, least-privilege access, secure development lifecycle, experience with HIPAA, SOC 2, PCI DSS and GDPR'],
], [2800, 6560]));
C.push(note('Only publish what delivery actually does today. A standard that is not followed is a liability.'));

C.push(h1('4. Accountability: who signs each gate'));
C.push(P('A framework only works if someone is answerable for it. Every gate has a named owner and a written sign-off, and the client sees the result.'));
C.push(table(['Gate', 'Owner (answerable)', 'Signs off', 'Client sees'], [
  ['Learn, Ideate, Iterate', 'Project manager', 'Tech lead', 'The gate document (brief, decision, prototype)'],
  ['**The Ship Line**', 'Tech lead', '**CTO or a named delegate**', 'A written go or no-go against the Build Standard'],
  ['Incubate (each release)', 'Project manager', 'Tech lead and QA', 'Release notes'],
  ['Scale (review)', 'Project manager', 'CTO or delegate', 'Performance review'],
], [2300, 2100, 2200, 2760]));
C.push(...bullets([
  'Public line this enables: **"Every gate has a named owner and a written sign-off you can see."**',
  'Internally: one gate log per project, so leadership can see which gates were skipped',
  'The roles above are a starting assumption [CONFIRM]',
]));

C.push(h1('5. Why it sets TekRevol apart'));
C.push(...bullets([
  '**It names the real problem with AI-built software** (great demos, fragile products) without blaming anyone. It reframes the prototype story: "You\'ve explored. We help you cross the Ship Line."',
  '**It is visual and ownable.** Cyan field, orange line, stacked layers. The framework and the brand identity are the same thing',
  '**It has accountability built in.** Named owners and written sign-offs the client can see',
  '**It speaks to every buyer.** Founders get speed in Explore, approvers get the Ship Line, champions get a named method to take to leadership',
]));
C.push(h2('How it shows up'));
C.push(...field('Homepage section (replaces "How we work"): eyebrow', 'THE STRATA METHOD'));
C.push(...field('H2', 'Explore fast. Ship deliberately.', true));
C.push(...field('Lead', 'AI makes exploring nearly free. Production still takes engineering. Our method keeps the two apart, with one line between them.'));
C.push(...bullets([
  'A dedicated page, /strata-method: definition first, the stage table, the Ship Line checks, FAQs',
  'The same name and definition sentence on the homepage, the method page, llms.txt, About, proposals and LinkedIn, so search and AI engines learn one consistent answer',
  'Later: a short manifesto PDF for champions and one blog post per stage',
  'No speed or cost claims until one measured engagement exists',
]));
C.push(pb());

C.push(h1('6. Questions for project managers and the CTO'));
C.push(P('Short answers are fine. "It depends on the project" is a valid answer: tell us what it depends on.'));
C.push(h2('How projects run today'));
C.push(...nums([
  'Walk us through the last two projects from kickoff to launch. What were the real phases, and what document or sign-off ended each one?',
  'Who decides a build is ready for production today? Is it written down?',
  'Is there one point of contact from kickoff to launch? Who?',
  'Where do projects most often slip or get reworked?',
], 'n1'));
C.push(h2('AI in delivery'));
C.push(...nums([
  'Which AI tools does the team use today, and for what: research, prototyping, writing code, code review, testing, documentation, monitoring?',
  "Is that standard across projects or each developer's choice? Is there an approved-tools list or policy?",
  'Does client code or data go into third-party AI tools? Under what rules (private models, client consent, regulated projects)?',
  'Is every AI-written change reviewed by a person before it is merged? By whom?',
  'For AI features built for clients: how is model quality tested before launch and monitored after?',
], 'n1'));
C.push(h2('Standards and proof'));
C.push(...nums([
  'What is checked before go-live today (security, tests, accessibility, backups, monitoring)? Is there a checklist?',
  'What gets reused across projects (components, templates, internal agents, checklists)? Where does it live?',
  'Is there one recent project where time or cost can be measured with and without AI? That would be the first proof point.',
  'Which stages and the Ship Line could the team commit to from a set date, and who would own the gate log?',
], 'n1'));
C.push(h2('Answers'));
C.push(table(['#', 'Answer', 'Answered by'], Array.from({ length: 13 }, (_, i) => [String(i + 1), '', '']), [600, 6760, 2000]));

const doc = new Document({
  creator: 'Sana Qazi', title: 'TekRevol: The Strata Method (proposal v1)',
  styles: { default: { document: { run: { font: B, size: 21, color: INK } } } },
  numbering: { config: [
    { reference: 'b', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } }, run: { color: OR } } }] },
    { reference: 'n1', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 400 } }, run: { color: ORINK, font: M } } }] },
  ] },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1300, bottom: 1300, left: 1440, right: 1440 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: 'TekRevol · The Strata Method · ', font: M, size: 14, color: MUTED }), new TextRun({ children: [PageNumber.CURRENT], font: M, size: 14, color: MUTED })] })] }) },
    children: C,
  }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[2], b); console.log('wrote'); });
