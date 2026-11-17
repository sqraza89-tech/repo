const path = require('path');
const fs = require('fs');
const D = require('C:/Claude-Projects/Projects/TekRevol/_build/report-docx/node_modules/docx');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, HeadingLevel, ShadingType, BorderStyle, AlignmentType } = D;

const H = 'Funnel Display', B = 'Wix Madefor Text';
const NAVY = '0B2545', GREY = '3A3A3A', LIGHT = 'EEF2F7', YEL = 'FFF4C2';

const p = (text, o = {}) => new Paragraph({ spacing: { after: 120 }, ...o.para, children: [].concat(text).map(t => typeof t === 'string' ? new TextRun({ text: t, font: B, size: 21, color: GREY, ...o.run }) : t) });
const run = (text, o = {}) => new TextRun({ text, font: B, size: 21, color: GREY, ...o });
const h1 = t => new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true, spacing: { before: 360, after: 160 }, children: [new TextRun({ text: t, font: H, size: 34, bold: true, color: NAVY })] });
const h2 = t => new Paragraph({ heading: HeadingLevel.HEADING_2, keepNext: true, spacing: { before: 280, after: 120 }, children: [new TextRun({ text: t, font: H, size: 26, bold: true, color: NAVY })] });
const bullet = (t) => new Paragraph({ bullet: { level: 0 }, spacing: { after: 60 }, children: [].concat(t).map(x => typeof x === 'string' ? run(x) : x) });

const border = { style: BorderStyle.SINGLE, size: 4, color: 'C9D2DE' };
const borders = { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border };
const cell = (children, o = {}) => new TableCell({ width: { size: o.w || 50, type: WidthType.PERCENTAGE }, shading: o.fill ? { type: ShadingType.CLEAR, color: 'auto', fill: o.fill } : undefined, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [].concat(children) });
const label = t => new Paragraph({ children: [run(t, { bold: true, color: NAVY, size: 19 })] });

function adCard(ad) {
  const rows = [
    ['Big text', [new Paragraph({ children: [run(ad.big, { bold: true, size: 26, color: NAVY })] })]],
    ['Subline', [p(ad.sub, { para: { spacing: { after: 0 } } })]],
  ];
  if (ad.source) rows.push(['Source line (small)', [p(ad.source, { para: { spacing: { after: 0 } } })]]);
  rows.push(['Visual direction', [p(ad.visual, { para: { spacing: { after: 0 } } })]]);
  const ctaLine = ad.cta || (ad.id.startsWith('I') ? 'Book a Creatio call for your insurance company.' : 'Book a Creatio call for your bank.');
  rows.push(['CTA strip (bottom of visual)', [
    new Paragraph({ children: [run(ctaLine, { bold: true })] }),
    new Paragraph({ children: [run('Huzaifa Valika, VP Enterprise Sales · 0322 2009713')] }),
  ]]);
  const postCta = ad.postCta || 'Call Huzaifa Valika, VP Enterprise Sales, on 0322 2009713 or email huzaifa.valika@xloopdigital.com.';
  rows.push(['Post text (not on the visual, for reference)', [p(ad.intro + ' ' + postCta, { para: { spacing: { after: 0 } }, run: { italics: true } })]]);
  return [
    h2(`${ad.id} · ${ad.name}${ad.tag ? '  (' + ad.tag + ')' : ''}`),
    new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, borders, rows: rows.map(([k, v]) => new TableRow({ cantSplit: true, children: [cell(label(k), { w: 26, fill: LIGHT }), cell(v, { w: 74, fill: k === 'Big text' ? YEL : undefined })] })) }),
  ];
}

const banking = [
  { id: 'B1', name: 'Digital payments', tag: 'launch', big: "92% of Pakistan's retail payments are digital.", sub: 'Your CRM should be too. Creatio banking CRM with AI agents, implemented by xLoop.', source: 'Source: State Bank of Pakistan, FY2025-26', visual: '"92%" as a huge numeral, taking most of the frame. Headline wraps around or under it. Clean brand background, no photos.', intro: "Pakistan's customers have gone digital. Creatio brings banks a CRM with AI agents built in. xLoop sets it up, moves your data and connects it to core banking." },
  { id: 'B2', name: 'AI agents for banks', tag: 'launch', big: 'AI agents for banks. Onboarding. Lending. Service.', sub: 'AI does the routine work. Your people approve the decisions that matter.', visual: 'Three tiles side by side: Onboarding, Lending, Service, each with a simple line icon. A small "Approved" tick with a person icon under the tiles to show human sign off. No robots.', intro: 'AI agents for onboarding, lending and service, with your team signing off every decision. Creatio banking CRM, implemented by xLoop.' },
  { id: 'B6', name: 'One view of the customer', tag: 'launch', big: 'One customer. One view. Every department.', sub: 'Sales, service and branches on one Creatio CRM, with AI agents built in. Implemented by xLoop.', visual: 'One customer icon in the center, with clean lines connecting to three labels: Sales, Service, Branches. Calm, structured, lots of white space.', intro: "Sales, service and branches finally see the same customer. Creatio banking CRM with AI agents, implemented and connected by xLoop." },
  { id: 'B8', name: 'Works with your core banking', tag: 'launch', big: 'Works with your core banking. No rip and replace.', sub: 'We connect Creatio to your existing core banking and call center systems.', visual: 'Simple left to right flow: "Core banking" and "Call center" boxes on the left, arrows into a Creatio block in the middle, then "AI agents" and "Your team approves" on the right.', intro: 'Keep your core banking. xLoop connects Creatio to it and to your call center, then adds AI agents with your people signing off.' },
  { id: 'B3', name: 'Mobile banking scale', tag: 'spare, week 2', big: '132 million+ mobile banking and wallet accounts.', sub: 'One CRM to serve every one of them, with AI built in.', source: 'Source: State Bank of Pakistan, March 2026', visual: '"132M+" as a huge numeral, with a simple phone outline. Same layout family as B1.', intro: '132 million+ mobile banking and wallet accounts in Pakistan. Serve them from one CRM with AI agents built in. Creatio, implemented by xLoop.' },
  { id: 'B4', name: 'Creatio investment', tag: 'spare, week 2', big: 'Creatio is investing $300 million in AI for banking.', sub: 'xLoop implements it in Pakistan.', source: 'Source: Creatio, 2026', visual: '"$300M" as a huge numeral. xLoop × Creatio lockup larger than on other ads.', intro: 'Creatio is putting $300 million into AI for banking. xLoop is its implementation partner in Pakistan: setup, data migration, core banking integration, AI agents.' },
  { id: 'B7', name: 'One screen for the front desk', tag: 'spare, week 2', big: 'One screen for your front desk.', sub: 'Accounts, cases and leads in one place, so your teams serve customers faster.', visual: 'One clean, generic screen mockup split into three panels labeled Accounts, Cases, Leads. Not a real Creatio screenshot unless Creatio supplies one.', intro: "Your front desk shouldn't need a different app for every task. Creatio puts accounts, cases and leads on one screen. Implemented by xLoop." },
  { id: 'B5', name: 'Complaints', tag: 'optional, only if Nasir approves', big: '35,130 complaints reached the Banking Mohtasib in 2025.', sub: 'AI service that resolves them first.', source: 'Source: Banking Mohtasib Pakistan, Annual Report 2025', visual: '"35,130" as a huge numeral. Calm, not alarming: no red, no warning icons.', intro: "35,130 complaints reached the Banking Mohtasib in 2025. Creatio's AI service desk helps banks resolve them first. Implemented by xLoop." },
];
const insurance = [
  { id: 'I1', name: 'Digital growth', tag: 'launch', big: 'Insurance in Pakistan is 0.7% of GDP. The growth is digital.', sub: 'Digital premiums grew 71% in 2025. Creatio CRM with AI agents, implemented by xLoop.', source: 'Source: SECP', visual: '"0.7%" small and "71%" large with an upward arrow, so the growth number is the hero.', intro: 'Digital insurance premiums in Pakistan grew 71% in 2025. Creatio gives insurers a CRM with AI agents built in. xLoop implements it.' },
  { id: 'I2', name: 'AI agents for insurers', tag: 'launch', big: 'AI agents for insurers. Policy sales. Claims intake. Renewals.', sub: 'Routine work automated. Every decision signed off by your team.', visual: 'Same three tile layout as B2: Policy sales, Claims intake, Renewals, with the "Approved" person tick.', intro: 'AI agents for policy sales, claims intake and renewals, with your team approving every decision. Creatio for insurance, implemented by xLoop.' },
  { id: 'I3', name: 'Claims at scale', tag: 'launch', big: '1 million+ claims paid in 2025.', sub: 'Handle the next million faster, with AI agents inside your CRM.', source: 'Source: SECP, 2025', visual: '"1M+" as a huge numeral. Same layout family as B1.', intro: "Pakistan's insurers paid over a million claims in 2025. Creatio with AI agents helps you handle the next million faster. Implemented by xLoop." },
];

const children = [
  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: 'xLoop × Creatio', font: H, size: 44, bold: true, color: NAVY })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: 'Paid ads for banks and insurers in Pakistan · design brief', font: H, size: 28, color: GREY })] }),

  h1('At a glance'),
  bullet([run('Campaign: ', { bold: true }), run('xLoop is now a Creatio implementation partner. Bold, simple ads for banks first, then insurers, in Pakistan.')]),
  bullet([run('Platforms: ', { bold: true }), run('LinkedIn and Facebook feed (paid), plus one organic announcement post.')]),
  bullet([run('Tone: ', { bold: true }), run('confident and short. One hard fact or one bold line per ad. No problem slides, no long explanations.')]),
  bullet([run('Deadlines: ', { bold: true }), run('banking drafts Thu 19 Nov 2026 · approval Fri 20 Nov 2026 · banking ads live Mon 23 Nov 2026 · insurance drafts Wed 25 Nov 2026.')]),

  h1('Specs for every ad'),
  bullet('Size: 1080 × 1350 px (4:5), PNG. Also export 1080 × 1080 (1:1) for the four banking launch ads.'),
  bullet('Layout family: big text at the top or as a hero numeral, subline under it, source line small at the bottom, xLoop × Creatio lockup in a corner, CTA strip with Huzaifa’s name and number along the bottom.'),
  bullet('Logos: xLoop first, Creatio second, equal weight. Creatio logo files are coming from Huzaifa; use a placeholder until then.'),
  bullet('CTA strip on every ad (like the NEPRA page): one bold action line, then "Huzaifa Valika, VP Enterprise Sales · 0322 2009713". Make the phone number big enough to read on a phone screen.'),
  bullet('Platform button (set in Ads Manager, not on the image): Facebook "Call now" to +92 322 2009713. LinkedIn has no call button, so it uses a lead form that sends leads to Huzaifa.'),
  bullet('Keep text on the image short. Facebook and LinkedIn show less of an ad when the image is mostly text.'),
  bullet('Do not use: stock handshakes, robots, glowing AI brains, red alert colors, real bank logos, or real Creatio screenshots unless Creatio supplies them.'),
  bullet('Do not add "leading" or any Gartner wording. That needs Creatio approval first.'),
  bullet('One series look across all ads, so they read as one campaign. B1, B3, B4, B5, I1 and I3 share the "hero numeral" layout; B2 and I2 share the "three tiles" layout.'),

  h1('Banking ads (phase 1)'),
  p('Launch set: B1, B2, B6, B8. Spares for week 2: B3, B4, B7. B5 only if Nasir approves it.'),
  ...banking.flatMap(adCard),

  h1('Insurance ads (phase 2)'),
  p('Brief starts Mon 23 Nov 2026, drafts by Wed 25 Nov 2026.'),
  ...insurance.flatMap(adCard),

  h1('Organic announcement post'),
  p('Company page post on the day the banking ads go live. Single image, same series look.'),
  ...adCard({ id: 'A1', name: 'Partnership announcement', cta: 'Book a Creatio call for your bank or insurance company.', big: 'xLoop is now a Creatio partner in Pakistan.', sub: 'The banking and insurance CRM with AI agents built in. Set up, connected and governed by xLoop.', visual: 'Large xLoop × Creatio lockup as the hero. Short line under it. CTA strip with Huzaifa’s name and number, same as the ads.', intro: 'xLoop is now a Creatio partner in Pakistan. Creatio is the CRM built for banks and insurers, with AI agents inside. We set it up, move your data, connect it to your core systems and build AI agents that work inside your workflows, with your people signing off.', postCta: 'Banks and insurers: book a Creatio call with Huzaifa Valika, VP Enterprise Sales, on 0322 2009713 or at huzaifa.valika@xloopdigital.com. #Creatio #Banking #Insurance #AIAgents #Pakistan' }),
];

const doc = new Document({ styles: { default: { document: { run: { font: B, size: 21 } } } }, sections: [{ properties: { page: { margin: { top: 1000, bottom: 1000, left: 1100, right: 1100 } } }, children }] });
const out = process.argv[2];
Packer.toBuffer(doc).then(b => { fs.writeFileSync(out, b); console.log('wrote', out); });
