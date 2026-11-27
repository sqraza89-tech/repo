const ExcelJS=require('./node_modules/exceljs');
(async()=>{const wb=new ExcelJS.Workbook();await wb.xlsx.readFile('C:/Claude-Projects/Notes/2026-09-29-xloop-linkedin-blog-content-calendar-q2-v4.xlsx');
const ids=process.argv.slice(2);
wb.eachSheet(ws=>{console.log('### SHEET',ws.name,ws.rowCount);
let hdr=null;ws.eachRow((row,i)=>{const v=row.values.slice(1).map(c=>c&&typeof c==='object'?(c.richText?c.richText.map(t=>t.text).join(''):(c.text||c.result||JSON.stringify(c))):c);
if(!hdr && v.some(x=>String(x).match(/Caption|ID/i))){hdr=v;console.log('HDR',i,JSON.stringify(v));return;}
if(ids.some(id=>v.some(x=>String(x).trim()===id))){console.log('\n--- row',i);v.forEach((x,k)=>{if(x!==undefined&&x!==null&&x!=='')console.log(`[${hdr?hdr[k]:k}] ${x}`)});}
});});})();
