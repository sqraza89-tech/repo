// Strata Method v2 (internal master). Run from a folder that has node_modules/docx:
//   node strata2.js <A|B> <out.docx>
// Needs helpers.js beside it, the cleaned covers in 01-brand-system/cover-templates/ and the diagram PNG.
const path = require('path');
const { fs, d, H, B, M, INK, MUTED, OR, ORINK, P, h1, h2, label, note, field, bullets, nums, table, pb } = require('./helpers.js');
const { Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, LevelFormat, Footer, PageNumber, HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, TextWrappingType } = d;

const variant = process.argv[2] || 'A';
const ROOT = 'C:/Claude-Projects/Projects/TekRevol/';
const V = {
  A: { img: ROOT + '01-brand-system/cover-templates/cover-A-gradient-clean-letter.jpg', before: 11250, label: ORINK, title: INK, sub: MUTED, size: 76 },
  B: { img: ROOT + '01-brand-system/cover-templates/cover-B-glass-mark-clean-letter.jpg', before: 11980, label: 'FF8A3D', title: 'FFFFFF', sub: 'E3E4E6', size: 68 },
}[variant];
const diagram = path.join(__dirname, 'strata-diagram.png');

const cover = [
  new Paragraph({ spacing: { before: V.before, after: 80 }, children: [
    new ImageRun({ type: 'jpg', data: fs.readFileSync(V.img), transformation: { width: 816, height: 1056 },
      floating: { horizontalPosition: { relative: HorizontalPositionRelativeFrom.PAGE, offset: 0 }, verticalPosition: { relative: VerticalPositionRelativeFrom.PAGE, offset: 0 }, behindDocument: true, wrap: { type: TextWrappingType.NONE } } }),
    new TextRun({ text: 'DELIVERY FRAMEWORK · INTERNAL MASTER V2', font: M, size: 18, color: V.label, characterSpacing: 40 }) ] }),
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: 'The Strata Method', font: H, size: V.size, color: V.title })] }),
  new Paragraph({ children: [new TextRun({ text: 'EXPLORE WITH AI. SHIP WITH ENGINEERING.', font: M, size: 18, color: V.sub, characterSpacing: 60 })] }),
];

const C = [];
C.push(P('**What this is:** the internal master for TekRevol\'s signature delivery framework. It turns the v1 proposal into an operating system: defined terms, pass or fail gates, AI-native practices, named accountability and a plan to prove it.'));
C.push(P('**Status:** version 2, 13 October 2026. Rewritten after review feedback. Nothing in this document is public yet. Items marked "Proposed" or "To confirm" need a decision from TekRevol delivery.'));

C.push(h1('1. The idea in brief'));
C.push(...field('Positioning', 'The Strata Method by TekRevol. Explore with AI. Ship with engineering. Cross the Ship Line only when it meets production standard.', true));
C.push(...field('Definition (use this exact wording everywhere)', 'The Strata Method is TekRevol\'s AI-native delivery framework. Teams explore with AI, then cross the Ship Line, a formal gate with a written sign-off, before anything becomes production work. Every release is checked across five layers, and what each build teaches feeds the next.'));
C.push(...bullets([
  '**The Ship Line is the signature idea.** It is the phrase buyers remember and AI engines quote. Lead with it',
  '**Strata is the layered model** behind the gate: five layers every release must pass',
  '**"Structured chaos" stays internal.** It describes the culture. Enterprise buyers may hear "uncontrolled", so it does not appear in public copy',
]));
C.push(new Paragraph({ spacing: { before: 160, after: 160 }, children: [new ImageRun({ type: 'png', data: fs.readFileSync(diagram), transformation: { width: 624, height: 243 } })] }));

C.push(h1('2. Terms'));
C.push(P('Version 1 used "Strata" for two different things. From here on, each term has one meaning.'));
C.push(table(['Term', 'Meaning'], [
  ['**The Strata Method**', 'The whole framework'],
  ['**Explore**', 'The first mode. AI leads. Work is cheap to try and cheap to throw away'],
  ['**Ship**', 'The second mode. Engineers own every decision. Work is production-grade'],
  ['**The Ship Line**', 'The gate between Explore and Ship. Pass or fail, with a written sign-off'],
  ['**Stages**', 'The five delivery phases, in order: Learn, Ideate, Iterate, Incubate, Scale'],
  ['**Layers (the Strata)**', 'The five quality dimensions checked at the Ship Line: Infrastructure, Data, AI, Product logic, Experience. Security and compliance run through all five'],
  ['**The Build Standard**', 'The pass or fail criteria for each layer'],
  ['**Gate log**', 'The per-project record of every gate: owner, evidence, result, sign-offs'],
], [2600, 6760]));

C.push(h1('3. The five stages'));
C.push(table(['Mode', 'Stage', 'AI does', 'Engineers own', 'Client gets'], [
  ['Explore', '**1. Learn**', 'Reads existing code, data and documents. Sums up user and market signals', 'The problem, constraints and compliance needs', 'A problem brief and risk map'],
  ['Explore', '**2. Ideate**', 'Generates solution options and clickable prototypes', 'Choosing the direction and the architecture', 'An architecture decision and a chosen prototype'],
  ['Explore', '**3. Iterate**', 'Builds variations quickly for testing', 'Judging what works with real users', 'A validated prototype'],
  ['Gate', '**The Ship Line**', 'Runs the automated checks in the Build Standard', 'Sign-off, layer by layer', 'The Ship Line report: a written go or no-go'],
  ['Ship', '**4. Incubate**', 'Writes and tests code in parallel', 'Reviewing every change. Security and compliance', 'A production release'],
  ['Ship', '**5. Scale**', 'Monitors performance, cost and model quality', 'Deciding what improves next', 'A performance review that feeds the next Learn'],
], [900, 1400, 2500, 2360, 2200]));
C.push(note('The loop: Scale feeds Learn. Section 5 explains what actually carries over from one build to the next.'));

C.push(h1('4. The Ship Line: the Build Standard'));
C.push(P('Each layer is pass or fail. A fail blocks the release. Numeric thresholds (test coverage, uptime target, eval pass rate) are set per project at kickoff and written into the gate log, so the criteria are fixed before the work starts.'));
C.push(table(['Layer', 'Passes when (proposed)', 'Evidence and automated checks', 'Owner'], [
  ['**5. Experience**', 'Meets WCAG 2.2 AA. Usability tested with target users. Within the agreed performance budget', 'Accessibility scan report, usability test notes, performance test results', 'Design or QA lead'],
  ['**4. Product logic**', 'Every change reviewed by a person. Automated tests pass at the agreed coverage. Architecture documented', 'Review history, test run report, architecture decision records', 'Tech lead'],
  ['**3. AI**', 'Evals pass at the agreed threshold. Prompts and models are versioned. Fallback defined. Human review where risk is high', 'Eval report, model card, prompt and model version log, fallback test', 'AI lead'],
  ['**2. Data**', 'Data model documented with lineage. Privacy by design. Backups and retention tested', 'Data model, lineage map, restore test result, retention policy', 'Data lead'],
  ['**1. Infrastructure**', 'Monitoring and alerts live. Uptime target set. Cost guardrails set. Recovery plan tested', 'Monitoring dashboard, alert test, cost budget, recovery test', 'DevOps lead'],
  ['**Through every layer: security and compliance**', 'Threat model done. Code and dependency scans clean. No secrets in code. Least-privilege access. Requirements mapped for the client\'s regime (HIPAA, SOC 2, PCI DSS, GDPR)', 'Threat model, scan reports, access review, compliance mapping', 'Security lead'],
], [1800, 2900, 2860, 1800]));
C.push(...bullets([
  '**Client-visible artifact:** the Ship Line report. One page, one row per layer, pass or fail, with links to the evidence',
  '**Waivers:** a failed item can ship only with a written waiver signed by the CTO and the client, recorded in the gate log',
  '**Scaled by project tier** so small projects are not buried: Light (prototype or internal tool), Standard, Regulated (health, payments, personal data at scale). Tier decides which criteria apply and how strict the thresholds are',
]));
C.push(note('Every criterion here is proposed. Delivery must confirm each one is done today or commit to a start date. One person can hold several owner roles on a small project.'));

C.push(h1('5. What makes it AI-native'));
C.push(P('Using AI to write code faster is AI-assisted. Any agency can say it. AI-native means the delivery system itself is built around agents, evaluation and compounding assets. These are the practices that would earn the word.'));
C.push(table(['Practice', 'What it means', 'Status'], [
  ['**Agent registry and orchestration**', 'A maintained set of approved agents for research, prototyping, coding, testing and monitoring, with rules for what each may touch', 'To confirm'],
  ['**Evaluation harness**', 'Every AI feature has an eval suite and regression tests that run before each release', 'To confirm'],
  ['**Prompt and model version control**', 'Prompts, models and settings are versioned like code, so any behavior can be traced and rolled back', 'To confirm'],
  ['**Model selection**', 'Models are chosen per task on measured cost and quality, not habit', 'To confirm'],
  ['**AI observability**', 'Live monitoring for drift, hallucination, bias and safety issues after launch', 'To confirm'],
  ['**Human in the loop**', 'A person approves AI output wherever the risk is high: money, health, legal, personal data', 'To confirm'],
  ['**Private data handling**', 'Private models and personal-data redaction when client data cannot leave (RevAI)', 'Stated on the current site. Verify'],
  ['**Compounding assets**', 'Each release adds to a shared library: agents, evals, components, checklists. This is what "Scale feeds Learn" means in practice', 'To confirm'],
], [2700, 5060, 1600]));
C.push(note('Rule: public copy names only the practices marked "In place". The rest become the roadmap. Claiming a practice the team does not run is the fastest way to lose an enterprise deal in due diligence.'));

C.push(h1('6. Accountability'));
C.push(...field('The public principle', 'Every gate has a named owner and a written sign-off you can see.'));
C.push(...bullets([
  '**Named people, not roles.** The gate log lists a person for every gate at kickoff',
  '**Client sign-off** on the Ship Line report and on each release',
  '**One gate log per project**, visible to TekRevol leadership and to the client',
  '**Audit.** Someone outside the project samples gate logs each month and reports skipped gates to the CTO',
]));
C.push(table(['Gate log field', 'Content'], [
  ['Project and tier', 'Name, Light / Standard / Regulated'],
  ['Gate', 'Stage gate, Ship Line layer, or release'],
  ['Owner', 'Named person answerable for the gate'],
  ['Evidence', 'Links to the reports and artifacts'],
  ['Result', 'Pass, fail, or waived (with reason)'],
  ['Sign-offs', 'TekRevol name and date. Client name and date'],
], [2600, 6760]));
C.push(note('If teams do not use the gate log, the framework is fiction. The log is the product.'));

C.push(h1('7. Positioning against the market'));
C.push(P('Other firms have named methods. HatchWorks has GenDD with a manifesto and ebook. Cheesecake Labs pairs agents and people at every step. The claim is not that nobody else has a method.'));
C.push(...field('Say', 'Most AI delivery models are linear. Strata separates Explore from Ship with a formal Ship Line, then compounds every build into the next.'));
C.push(...field('Do not say', '"Nobody names the gate." "No one else does this." Any speed or cost claim before the pilots report.'));

C.push(h1('8. Proof plan'));
C.push(P('Run the method on two or three projects, measure, then publish anonymized case studies. No performance claims before that.'));
C.push(table(['Metric', 'Shows'], [
  ['Time to validated prototype', 'Explore speed'],
  ['Time from validated prototype to production', 'Cost of crossing the Ship Line'],
  ['Defect escape rate', 'Whether the gate catches problems'],
  ['Eval pass rate', 'AI quality at release'],
  ['Rework hours', 'Whether exploring first reduces waste'],
  ['Cost per release', 'Efficiency over time'],
  ['Client satisfaction', 'Whether clients value the visibility'],
], [4680, 4680]));
C.push(...bullets(['Also collect: one anonymized gate log, one Ship Line report, two client quotes', 'Compliance wording stays "experience with" and each regime is tied to a named or anonymized project before it is published']));

C.push(h1('9. The public page (AI search asset)'));
C.push(P('One page at /strata-method, definition first, with FAQ schema so AI engines can quote it. Draft answers:'));
const faq = [
  ['What is the Strata Method?', 'The Strata Method is TekRevol\'s AI-native delivery framework. Teams explore with AI, then cross the Ship Line, a formal gate with a written sign-off, before anything becomes production work.'],
  ['What is the Ship Line?', 'The Ship Line is the gate between exploring and shipping. A build crosses it only when it passes TekRevol\'s Build Standard across five layers, with a named owner signing each one.'],
  ['What happens in Explore?', 'AI does the heavy lifting: research, solution options and prototypes. The stages are Learn, Ideate and Iterate. The output is a validated prototype.'],
  ['What happens in Ship?', 'Engineers own every decision. The product is built and released to production standard, then monitored and improved. The stages are Incubate and Scale.'],
  ['Who signs off?', 'Every gate has a named owner at TekRevol, and the client signs the Ship Line report and each release.'],
  ['How is AI evaluated?', 'To be written once section 5 is confirmed.'],
  ['How is security handled?', 'To be written once the security layer criteria are confirmed.'],
];
faq.forEach(([q, a]) => { C.push(new Paragraph({ spacing: { before: 140, after: 50 }, children: [new TextRun({ text: q, font: B, size: 22, color: INK, bold: true })] })); C.push(P(a)); });
C.push(h2('Homepage block'));
C.push(...field('Eyebrow', 'HOW WE WORK'));
C.push(...field('H2', 'The Strata Method', true));
C.push(...field('Lead', 'AI makes exploring nearly free, while production still takes engineering. Our method keeps the two apart, with one line between them.'));

C.push(h1('10. Internal rollout'));
C.push(table(['Step', 'What', 'Owner'], [
  ['1', 'Delivery answers the 13 questions and marks each practice and criterion: in place, partial, planned', 'CTO'],
  ['2', 'Templates: gate log, Ship Line report, problem brief, architecture decision record', 'To assign'],
  ['3', 'Team training and a short delivery playbook per stage', 'To assign'],
  ['4', 'Pilot on two or three projects with the metrics in section 8', 'CTO, project managers'],
  ['5', 'Monthly gate log audit', 'To assign'],
  ['6', 'Public launch: page, homepage block, case studies', 'Marketing'],
], [700, 6460, 2200]));

C.push(h1('11. Open items'));
C.push(...bullets([
  '**Trademark.** A quick web search on 13 October 2026 found no mark for "Strata Method" or "Ship Line" as a delivery method. "Strata" alone is crowded in software (a registered "Strata Development Frameworks", a "Sembix Strata" product, a US application for STRATA covering website software). A proper search of US and EU registers by counsel is needed before launch',
  '**Compliance.** Evidence for each regime named (HIPAA, SOC 2, PCI DSS, GDPR)',
  '**Named owners** for each layer and for the gate log audit',
  '**Thresholds** per project tier',
  '**Status** of every AI-native practice in section 5',
]));

const numbering = { config: [
  { reference: 'b', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } }, run: { color: OR } } }] },
  { reference: 'n1', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 400 } }, run: { color: ORINK, font: M } } }] },
] };
const page = { size: { width: 12240, height: 15840 } };
const doc = new Document({
  creator: 'Sana Qazi', title: 'TekRevol: The Strata Method (internal master v2)',
  styles: { default: { document: { run: { font: B, size: 21, color: INK } } } }, numbering,
  sections: [
    { properties: { page: { ...page, margin: { top: 1300, bottom: 400, left: 1440, right: 1440 } } }, children: cover },
    { properties: { page: { ...page, margin: { top: 1300, bottom: 1300, left: 1440, right: 1440 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: 'TekRevol · The Strata Method v2 · Internal · ', font: M, size: 14, color: MUTED }), new TextRun({ children: [PageNumber.CURRENT], font: M, size: 14, color: MUTED })] })] }) },
      children: C },
  ],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[3], b); console.log('wrote', process.argv[3]); });
