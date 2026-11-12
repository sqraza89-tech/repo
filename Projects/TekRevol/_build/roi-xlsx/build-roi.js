// Builds the TekRevol software ROI worksheet (companion to the business case kit).
// node build-roi.js <out.xlsx>
const ExcelJS = require('exceljs');
const out = process.argv[2] || 'TekRevol-Software-ROI-Worksheet.xlsx';

const C = { carbon: 'FF0C0807', graphite: 'FF1A1413', pearl: 'FFF2F1EF', chrome: 'FFDADAD8', molten: 'FFFF4F0F', input: 'FFFFF1EB', white: 'FFFFFFFF', muted: 'FF6B6563' };
const F = 'Arial';
const money = '$#,##0;[Red]-$#,##0';
const pct = '0%';
const thin = { style: 'thin', color: { argb: C.chrome } };
const box = { top: thin, left: thin, bottom: thin, right: thin };

// rows: [line, label, help, kind, exampleValue]
// kind: in-money, in-num, in-pct, out-money, out-months, out-pct
const rows = [
  ['sec', 'Time saved'],
  ['A', 'Hours per week spent on the manual process (all people)', 'Add up everyone who touches it', 'in-num', 30],
  ['B', 'Fully loaded hourly cost', 'Salary + benefits + overhead, per hour', 'in-money', 45],
  ['C', 'Share of those hours the software removes', 'Be conservative: 50% to 70%', 'in-pct', 0.7],
  ['W', 'Working weeks per year', '48 allows for holidays and leave', 'in-num', 48],
  ['D', 'Annual time savings', 'Calculated: A × B × C × W', 'out-money', 'IF(COUNT(A,B,C,W)<4,"",A*B*C*W)'],
  ['sec', 'Errors avoided'],
  ['E', 'Annual cost of errors today', 'Rework, refunds, write-offs, credits', 'in-money', 30000],
  ['F', 'Share of errors the software prevents', 'Be conservative', 'in-pct', 0.6],
  ['G', 'Annual error savings', 'Calculated: E × F', 'out-money', 'IF(COUNT(E,F)<2,"",E*F)'],
  ['sec', 'Other gains'],
  ['H', 'Licenses or tools you can retire, per year', 'Only tools you will actually cancel', 'in-money', 4000],
  ['I', 'Added revenue per year (optional)', 'Leave at 0 unless you can defend it', 'in-money', 0],
  ['J', 'Total annual benefit', 'Calculated: D + G + H + I', 'out-money', 'IF(COUNT(D,G,H,I)=0,"",N(D)+N(G)+N(H)+N(I))'],
  ['sec', 'Investment'],
  ['K', 'Project cost', 'Use the upper end of the planning range', 'in-money', 80000],
  ['L', 'Annual support and hosting', 'Support plan + cloud costs', 'in-money', 12000],
  ['sec', 'Result'],
  ['N', 'Net annual benefit', 'Calculated: J − L', 'out-money', 'IF(J="","",J-N(L))'],
  ['M', 'Payback period (months)', 'Calculated: K ÷ N × 12', 'out-months', 'PAYBACK'],
  ['R', 'Three-year return on investment', 'Calculated: (3 × N − K) ÷ K', 'out-pct', 'ROI3'],
  ['V', 'Three-year net value', 'Calculated: 3 × N − K', 'out-money', 'IF(OR(N="",K=""),"",3*N-K)'],
];

function buildSheet(wb, name, filled) {
  const ws = wb.addWorksheet(name, { views: [{ showGridLines: false }], pageSetup: { orientation: 'portrait', fitToPage: true, fitToWidth: 1, fitToHeight: 0, margins: { left: 0.5, right: 0.5, top: 0.6, bottom: 0.6, header: 0.3, footer: 0.3 } } });
  ws.columns = [{ width: 3 }, { width: 7 }, { width: 52 }, { width: 18 }, { width: 40 }, { width: 3 }];

  // header band
  for (let r = 1; r <= 4; r++) for (let c = 1; c <= 6; c++) ws.getCell(r, c).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: C.carbon } };
  ws.getCell('B2').value = 'TEKREVOL  ·  BUSINESS CASE KIT';
  ws.getCell('B2').font = { name: F, size: 9, bold: true, color: { argb: C.molten } };
  ws.getCell('B3').value = filled ? 'Software ROI worksheet: worked example' : 'Software ROI worksheet';
  ws.getCell('B3').font = { name: F, size: 18, bold: true, color: { argb: C.white } };
  ws.getRow(3).height = 28;
  for (let c = 1; c <= 6; c++) ws.getCell(5, c).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: C.molten } };
  ws.getRow(5).height = 4;

  ws.getCell('B7').value = filled
    ? 'Illustrative numbers, not a client result. A distributor with 120 employees re-keys orders between its order system and accounting.'
    : 'Fill in the shaded cells with your own numbers. Everything else calculates. Conservative inputs make a stronger case than optimistic ones.';
  ws.mergeCells('B7:E7');
  ws.getCell('B7').alignment = { wrapText: true, vertical: 'top' };
  ws.getCell('B7').font = { name: F, size: 10, color: { argb: C.graphite } };
  ws.getRow(7).height = 30;

  // table header
  const hr = 9;
  ['Line', 'Item', filled ? 'Example' : 'Your number', 'How to fill it in'].forEach((t, i) => {
    const cell = ws.getCell(hr, i + 2);
    cell.value = t;
    cell.font = { name: F, size: 9, bold: true, color: { argb: C.white } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: C.graphite } };
    cell.alignment = { vertical: 'middle', horizontal: i === 2 ? 'right' : 'left', indent: 1 };
  });
  ws.getRow(hr).height = 20;

  const addr = {};
  let r = hr + 1;
  for (const row of rows) { if (row[0] !== 'sec') { addr[row[0]] = null; } }
  // first pass: assign addresses
  let rr = r;
  for (const row of rows) { if (row[0] === 'sec') { rr++; continue; } addr[row[0]] = 'D' + rr; rr++; }
  // swap single-letter line refs for cell addresses; leave N( (the Excel N function) alone
  const sub = (expr) => expr.replace(/\b([A-Z])\b(?!\()/g, (m) => addr[m] || m);

  for (const row of rows) {
    if (row[0] === 'sec') {
      const cell = ws.getCell(r, 2);
      cell.value = row[1].toUpperCase();
      cell.font = { name: F, size: 9, bold: true, color: { argb: C.molten } };
      ws.getRow(r).height = 22;
      cell.alignment = { vertical: 'bottom' };
      r++; continue;
    }
    const [line, label, help, kind, ex] = row;
    const isIn = kind.startsWith('in');
    const isKey = ['J', 'M', 'R', 'V'].includes(line);
    ws.getCell(r, 2).value = line;
    ws.getCell(r, 3).value = label;
    ws.getCell(r, 5).value = help;
    const v = ws.getCell(r, 4);
    if (isIn) {
      v.value = filled ? ex : (line === 'W' ? 48 : null);
      v.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: C.input } };
      v.protection = { locked: false };
    } else {
      const ref = sub;
      let f;
      if (ex === 'PAYBACK') f = `IF(OR(${addr.K}="",${addr.N}=""),"",IF(${addr.N}<=0,"No payback",${addr.K}/${addr.N}*12))`;
      else if (ex === 'ROI3') f = `IF(OR(${addr.K}="",${addr.K}=0,${addr.N}=""),"",(3*${addr.N}-${addr.K})/${addr.K})`;
      else f = ref(ex);
      v.value = { formula: f };
      if (isKey) {
        for (let c = 2; c <= 5; c++) ws.getCell(r, c).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: C.pearl } };
      }
    }
    v.numFmt = kind.endsWith('money') ? money : kind.endsWith('pct') ? pct : kind === 'out-months' ? '0.0' : '#,##0';
    v.alignment = { horizontal: 'right', vertical: 'middle', indent: 1 };
    for (let c = 2; c <= 5; c++) {
      const cell = ws.getCell(r, c);
      cell.border = { bottom: thin };
      if (c !== 4) cell.alignment = { vertical: 'middle', wrapText: c === 5, indent: c === 2 ? 1 : 0 };
      cell.font = { name: F, size: c === 5 ? 9 : 10, bold: isKey && c !== 5, color: { argb: c === 5 ? C.muted : C.carbon } };
    }
    if (isIn) v.border = box;
    ws.getRow(r).height = 20;
    r++;
  }

  // sensitivity
  r += 1;
  ws.getCell(r, 2).value = 'WHAT IF THE BENEFITS ARE OFF?';
  ws.getCell(r, 2).font = { name: F, size: 9, bold: true, color: { argb: C.molten } };
  r++;
  ['Scenario', 'Annual benefit', 'Payback (months)'].forEach((t, i) => {
    const cell = ws.getCell(r, [3, 4, 5][i]);
    cell.value = t;
    cell.font = { name: F, size: 9, bold: true, color: { argb: C.white } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: C.graphite } };
    cell.alignment = { horizontal: i ? 'right' : 'left', indent: 1, vertical: 'middle' };
  });
  ws.getCell(r, 2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: C.graphite } };
  r++;
  for (const [lab, k] of [['Benefits 25% lower', 0.75], ['As entered', 1], ['Benefits 25% higher', 1.25]]) {
    ws.getCell(r, 3).value = lab;
    ws.getCell(r, 4).value = { formula: `IF(${addr.J}="","",${addr.J}*${k})` };
    ws.getCell(r, 4).numFmt = money;
    ws.getCell(r, 5).value = { formula: `IF(OR(${addr.J}="",${addr.K}=""),"",IF(${addr.J}*${k}-N(${addr.L})<=0,"No payback",${addr.K}/(${addr.J}*${k}-N(${addr.L}))*12))` };
    ws.getCell(r, 5).numFmt = '0.0';
    for (let c = 2; c <= 5; c++) {
      const cell = ws.getCell(r, c);
      cell.border = { bottom: thin };
      cell.font = { name: F, size: 10, color: { argb: C.carbon }, bold: k === 1 };
      cell.alignment = { horizontal: c >= 4 ? 'right' : 'left', indent: 1, vertical: 'middle' };
    }
    ws.getRow(r).height = 20;
    r++;
  }

  // footer
  r += 1;
  ws.getCell(r, 2).value = 'Ready for real numbers? Get a written project estimate in 3 business days: cost range, timeline, team and what to build first. tekrevol.com/get-an-estimate';
  ws.mergeCells(r, 2, r, 5);
  ws.getCell(r, 2).font = { name: F, size: 10, bold: true, color: { argb: C.carbon } };
  ws.getCell(r, 2).alignment = { wrapText: true };
  ws.getRow(r).height = 30;
  r++;
  ws.getCell(r, 2).value = 'Planning tool only. Results depend on your inputs; they are not a quote or a guarantee.';
  ws.mergeCells(r, 2, r, 5);
  ws.getCell(r, 2).font = { name: F, size: 8, italic: true, color: { argb: C.muted } };

  ws.headerFooter.oddFooter = '&L&8TekRevol · Software ROI worksheet&R&8&P';
  ws.pageSetup.printArea = `A1:F${r}`;
  ws.protect('', { selectLockedCells: true, selectUnlockedCells: true, formatColumns: true, formatRows: true });
  return addr;
}

(async () => {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'TekRevol';
  wb.title = 'Software ROI worksheet';
  wb.calcProperties.fullCalcOnLoad = true;
  buildSheet(wb, 'Your numbers', false);
  buildSheet(wb, 'Worked example', true);
  await wb.xlsx.writeFile(out);
  console.log('wrote ' + out);
})();
