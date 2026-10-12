const fs = require('fs');
const d = require('docx');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, AlignmentType, LevelFormat, HeadingLevel, Footer, PageNumber, PageBreak } = d;

const H = 'Funnel Display', B = 'Wix Madefor Text', M = 'JetBrains Mono';
const INK = '1D1E21', MUTED = '5E6166', OR = 'FF4A1C', ORINK = 'C23A00', MIST = 'EEEFEF', SILVER = 'C9CCCF';
const W = 9360;

const run = (t, o = {}) => new TextRun({ text: t, font: B, size: 21, color: INK, ...o });
// inline **bold** and [CONFIRM ...] highlighting
function rich(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\[CONFIRM[^\]]*\])/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(run(text.slice(last, m.index), base));
    const s = m[0];
    if (s.startsWith('**')) out.push(run(s.slice(2, -2), { ...base, bold: true }));
    else out.push(run(s, { ...base, color: ORINK, bold: true, size: 17, font: M, shading: { type: ShadingType.CLEAR, fill: 'FFE8E0' } }));
    last = m.index + s.length;
  }
  if (last < text.length) out.push(run(text.slice(last), base));
  return out;
}
const P = (t, o = {}) => new Paragraph({ spacing: { after: 120, line: 300 }, ...o, children: rich(t) });
const h1 = t => new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 360, after: 160 }, children: [new TextRun({ text: t, font: H, size: 36, color: INK })] });
const h2 = t => new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 280, after: 100 }, children: [new TextRun({ text: t, font: H, size: 28, color: INK })] });
const label = t => new Paragraph({ spacing: { before: 120, after: 40 }, children: [new TextRun({ text: t.toUpperCase(), font: M, size: 16, color: ORINK, characterSpacing: 20 })] });
const note = t => new Paragraph({ spacing: { after: 120 }, children: rich(t, { color: MUTED, size: 18, italics: true }) });
// a copy field: mono label + copy with an orange left rule
const field = (lab, text, big = false) => [
  label(lab),
  new Paragraph({ indent: { left: 200 }, spacing: { after: 140, line: big ? 320 : 300 }, border: { left: { style: BorderStyle.SINGLE, size: 18, color: OR, space: 10 } },
    children: rich(text, big ? { font: H, size: 30 } : { size: 22 }) }),
];
const bullets = items => items.map(t => new Paragraph({ numbering: { reference: 'b', level: 0 }, spacing: { after: 80, line: 290 }, children: rich(t) }));
const nums = (items, ref) => items.map(t => new Paragraph({ numbering: { reference: ref, level: 0 }, spacing: { after: 80, line: 290 }, children: rich(t) }));
const bd = { style: BorderStyle.SINGLE, size: 4, color: SILVER };
function table(head, rows, widths) {
  const cell = (t, i, isHead) => new TableCell({
    width: { size: widths[i], type: WidthType.DXA },
    shading: isHead ? { type: ShadingType.CLEAR, fill: INK } : undefined,
    margins: { top: 80, bottom: 80, left: 110, right: 110 },
    borders: { top: bd, bottom: bd, left: bd, right: bd },
    children: [new Paragraph({ spacing: { line: 270 }, children: isHead ? [new TextRun({ text: t, font: M, size: 16, color: 'FFFFFF' })] : rich(t, { size: 18 }) })],
  });
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: widths,
    rows: [new TableRow({ tableHeader: true, children: head.map((t, i) => cell(t, i, true)) }), ...rows.map(r => new TableRow({ children: r.map((t, i) => cell(t, i, false)) }))] });
}
const gap = () => new Paragraph({ spacing: { after: 120 }, children: [] });
const pb = () => new Paragraph({ children: [new PageBreak()] });

module.exports={fs,d,H,B,M,INK,MUTED,OR,ORINK,MIST,SILVER,W,run,rich,P,h1,h2,label,note,field,bullets,nums,table,gap,pb};
