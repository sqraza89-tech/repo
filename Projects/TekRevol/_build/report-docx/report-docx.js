// TekRevol Word report builder: markdown report -> two .docx files, one per cover.
//   node report-docx.js <report.md> [outDir]
// Writes <name>-Cover-A.docx (abstract gradient) and <name>-Cover-B.docx (glass mark).
// File name: frontmatter docx_name, else TekRevol-<Title-Cased-Slug>.
// Cover text comes from the report's frontmatter: cover_label, cover_title, cover_sub
// (falls back to "REPORT", the # title and the date). Footer reads "TekRevol · <cover_title> · Internal · n".
// Markdown supported: ## / ### headings, paragraphs, - bullets (indent 2+ spaces for level 2),
// 1. numbered lists, - [ ] checkboxes, | tables |, **bold**, *italic*, `code`, [text](url), [[wikilink]].
// `VERIFIED` / `INFERRED` / `NEEDS DATA` render as colored tags.
// Setup once: npm install (in this folder). node_modules is git-ignored.
const fs = require('fs');
const path = require('path');
const d = require('docx');
const { Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  AlignmentType, LevelFormat, HeadingLevel, Footer, PageNumber, HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, TextWrappingType } = d;

const H = 'Funnel Display', B = 'Wix Madefor Text', M = 'JetBrains Mono';
const INK = '1D1E21', MUTED = '5E6166', OR = 'FF4A1C', ORINK = 'C23A00', MIST = 'F3F4F4', SILVER = 'C9CCCF';
const W = 9360;
const COVERS = 'C:/Claude-Projects/Projects/TekRevol/01-brand-system/cover-templates/';
const VARIANTS = {
  A: { img: COVERS + 'cover-A-gradient-clean-letter.jpg', before: 11250, label: ORINK, title: INK, sub: MUTED, size: 76 },
  B: { img: COVERS + 'cover-B-glass-mark-clean-letter.jpg', before: 11980, label: 'FF8A3D', title: 'FFFFFF', sub: 'E3E4E6', size: 68 },
};
const TAGS = {
  VERIFIED: { color: '1E6B3A', fill: 'E2F2E7' },
  INFERRED: { color: '1F5A8A', fill: 'E3EEF8' },
  'NEEDS DATA': { color: ORINK, fill: 'FFE8E0' },
};

const src = process.argv[2];
if (!src) { console.error('usage: node report-docx.js <report.md> [outDir]'); process.exit(1); }
const outDir = process.argv[3] || path.dirname(src);
let md = fs.readFileSync(src, 'utf8').replace(/\r\n/g, '\n');

// frontmatter
const fm = {};
const fmm = md.match(/^---\n([\s\S]*?)\n---\n/);
if (fmm) { fmm[1].split('\n').forEach(l => { const m = l.match(/^(\w+):\s*(.*)$/); if (m) fm[m[1]] = m[2].trim(); }); md = md.slice(fmm[0].length); }
const docTitle = (md.match(/^# (.+)$/m) || [, 'Report'])[1].trim();
const cv = { label: fm.cover_label || 'REPORT', title: fm.cover_title || docTitle, sub: fm.cover_sub || (fm.date || '') };

// inline formatting
function rich(text, base = {}) {
  text = text.replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
  const out = [], re = /(\*\*[^*]+\*\*|`[^`]+`|(?<![*\w])\*[^*\s][^*]*\*(?![*\w]))/g;
  const r = (t, o = {}) => new TextRun({ text: t, font: B, size: 20, color: INK, ...base, ...o });
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(r(text.slice(last, m.index)));
    const s = m[0];
    if (s.startsWith('**')) {
      // a tag can sit inside bold, e.g. **`VERIFIED`**: keep it simple and bold the plain text
      out.push(r(s.slice(2, -2).replace(/`/g, ''), { bold: true }));
    } else if (s[0] === '*') {
      out.push(r(s.slice(1, -1), { italics: true }));
    } else {
      const t = s.slice(1, -1), tag = TAGS[t];
      if (tag) out.push(r(` ${t} `, { font: M, size: 14, bold: true, color: tag.color, shading: { type: ShadingType.CLEAR, fill: tag.fill } }));
      else out.push(r(t, { font: M, size: (base.size || 20) - 3, color: MUTED }));
    }
    last = m.index + s.length;
  }
  if (last < text.length) out.push(r(text.slice(last)));
  return out;
}

const h1 = t => new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true, spacing: { before: 400, after: 160 },
  border: { top: { style: BorderStyle.SINGLE, size: 6, color: OR, space: 10 } },
  children: [new TextRun({ text: t, font: H, size: 34, color: INK })] });
const h2 = t => new Paragraph({ heading: HeadingLevel.HEADING_2, keepNext: true, spacing: { before: 260, after: 100 },
  children: [new TextRun({ text: t, font: H, size: 26, color: INK })] });
const para = t => new Paragraph({ keepNext: /^\*\*[^*]+\*\*$/.test(t), spacing: { after: 120, line: 300 }, children: rich(t) });

const bd = { style: BorderStyle.SINGLE, size: 4, color: SILVER };
function table(rows) {
  const head = rows[0], body = rows.slice(1), n = head.length;
  const fs_ = n >= 7 ? 15 : n >= 5 ? 17 : 18;
  // column widths: proportional to the longest cell, clamped
  const len = head.map((_, i) => Math.max(...rows.map(r => (r[i] || '').replace(/\*\*|`/g, '').length)));
  const wts = len.map(l => Math.min(Math.max(l, 8), 60));
  const sum = wts.reduce((a, b) => a + b, 0);
  const widths = wts.map(w => Math.round(W * w / sum));
  widths[n - 1] += W - widths.reduce((a, b) => a + b, 0);
  const cell = (t, i, isHead, zebra) => new TableCell({
    width: { size: widths[i], type: WidthType.DXA },
    shading: isHead ? { type: ShadingType.CLEAR, fill: INK } : zebra ? { type: ShadingType.CLEAR, fill: MIST } : undefined,
    margins: { top: 70, bottom: 70, left: 100, right: 100 },
    borders: { top: bd, bottom: bd, left: bd, right: bd },
    children: [new Paragraph({ spacing: { line: 260 }, children: isHead
      ? [new TextRun({ text: t.replace(/\*\*/g, ''), font: M, size: 15, color: 'FFFFFF' })]
      : rich(t, { size: fs_ }) })],
  });
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: widths,
    rows: [new TableRow({ tableHeader: true, cantSplit: true, children: head.map((t, i) => cell(t, i, true)) }),
      ...body.map((r, ri) => new TableRow({ cantSplit: true, children: head.map((_, i) => cell(r[i] || '', i, false, ri % 2 === 1)) }))] });
}

// body
const C = [];
let numInst = 0, inNum = false;
const lines = md.split('\n');
for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (/^# /.test(l)) continue;                       // title lives on the cover
  if (/^\s*$/.test(l)) { if (!/^\s*(\d+\.|-)\s/.test(lines[i + 1] || '')) inNum = false; continue; }
  let m;
  if ((m = l.match(/^## (.+)/))) { C.push(h1(m[1])); inNum = false; continue; }
  if ((m = l.match(/^### (.+)/))) { C.push(h2(m[1])); inNum = false; continue; }
  if (/^\|/.test(l)) {
    const rows = [];
    while (i < lines.length && /^\|/.test(lines[i])) {
      const cells = lines[i].trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      if (!cells.every(c => /^:?-{2,}:?$/.test(c))) rows.push(cells);
      i++;
    }
    i--;
    C.push(table(rows), new Paragraph({ spacing: { after: 100 }, children: [] }));
    continue;
  }
  if ((m = l.match(/^(\s*)- \[( |x)\] (.+)/))) {
    C.push(new Paragraph({ numbering: { reference: m[2] === 'x' ? 'cx' : 'c', level: 0 }, spacing: { after: 80, line: 290 }, children: rich(m[3]) }));
    continue;
  }
  if ((m = l.match(/^(\s*)\d+\. (.+)/))) {
    if (!inNum) { numInst++; inNum = true; }
    C.push(new Paragraph({ numbering: { reference: 'n', level: 0, instance: numInst }, spacing: { after: 80, line: 290 }, children: rich(m[2]) }));
    continue;
  }
  if ((m = l.match(/^(\s*)- (.+)/))) {
    const lvl = m[1].length >= 2 ? 1 : 0;
    C.push(new Paragraph({ numbering: { reference: 'b', level: lvl }, spacing: { after: 70, line: 290 }, children: rich(m[2]) }));
    continue;
  }
  inNum = false;
  C.push(para(l.trim()));
}

const numbering = { config: [
  { reference: 'b', levels: [
    { level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } }, run: { color: OR } } },
    { level: 1, format: LevelFormat.BULLET, text: '–', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 900, hanging: 260 } }, run: { color: MUTED } } },
  ] },
  ...[['c', '☐'], ['cx', '☑']].map(([reference, text]) => ({ reference, levels: [{ level: 0, format: LevelFormat.BULLET, text, alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 340 } }, run: { color: OR } } }] })),
  { reference: 'n', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 400 } }, run: { color: ORINK, font: M } } }] },
] };
const page = { size: { width: 12240, height: 15840 } };

const base = path.basename(src, '.md').replace(/^\d{4}-\d{2}-\d{2}-/, '');
const stem = fm.docx_name || 'TekRevol-' + base.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('-');
(async () => {
  for (const [k, V] of Object.entries(VARIANTS)) {
    const cover = [
      new Paragraph({ spacing: { before: V.before, after: 80 }, children: [
        new ImageRun({ type: 'jpg', data: fs.readFileSync(V.img), transformation: { width: 816, height: 1056 },
          floating: { horizontalPosition: { relative: HorizontalPositionRelativeFrom.PAGE, offset: 0 }, verticalPosition: { relative: VerticalPositionRelativeFrom.PAGE, offset: 0 }, behindDocument: true, wrap: { type: TextWrappingType.NONE } } }),
        new TextRun({ text: cv.label, font: M, size: 18, color: V.label, characterSpacing: 40 })] }),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: cv.title, font: H, size: V.size, color: V.title })] }),
      new Paragraph({ children: [new TextRun({ text: cv.sub, font: M, size: 18, color: V.sub, characterSpacing: 60 })] }),
    ];
    const doc = new Document({
      creator: 'Sana Qazi', title: `TekRevol: ${docTitle}`,
      styles: { default: { document: { run: { font: B, size: 20, color: INK } } } }, numbering,
      sections: [
        { properties: { page: { ...page, margin: { top: 1300, bottom: 400, left: 1440, right: 1440 } } }, children: cover },
        { properties: { page: { ...page, margin: { top: 1200, bottom: 1200, left: 1440, right: 1440 } } },
          footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [
            new TextRun({ text: `TekRevol · ${cv.title} · Internal · `, font: M, size: 14, color: MUTED }),
            new TextRun({ children: [PageNumber.CURRENT], font: M, size: 14, color: MUTED })] })] }) },
          children: C },
      ],
    });
    const out = path.join(outDir, `${stem}-Cover-${k}.docx`);
    fs.writeFileSync(out, await Packer.toBuffer(doc));
    console.log('wrote', out);
  }
})();
