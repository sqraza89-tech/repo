const fs = require('fs');
const JSZip = require('../docx/node_modules/jszip');
const SRC = 'C:/Claude-Projects/Projects/TekRevol/03-website/TekRevol-Strata-Method-v1.docx';
const OUT = 'C:/Claude-Projects/Projects/TekRevol/03-website/';
const font = f => `<w:rFonts w:ascii="${f}" w:eastAsia="${f}" w:hAnsi="${f}" w:cs="${f}"/>`;
const anchor = rid => `<w:r><w:drawing><wp:anchor distT="0" distB="0" distL="0" distR="0" simplePos="0" relativeHeight="1" behindDoc="1" locked="0" layoutInCell="1" allowOverlap="1"><wp:simplePos x="0" y="0"/><wp:positionH relativeFrom="page"><wp:posOffset>0</wp:posOffset></wp:positionH><wp:positionV relativeFrom="page"><wp:posOffset>0</wp:posOffset></wp:positionV><wp:extent cx="7772400" cy="10058400"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:wrapNone/><wp:docPr id="901" name="Cover image"/><wp:cNvGraphicFramePr/><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="901" name="cover.jpg"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${rid}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="7772400" cy="10058400"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:anchor></w:drawing></w:r>`;
const coverSect = `<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1300" w:right="1440" w:bottom="400" w:left="1440" w:header="708" w:footer="708" w:gutter="0"/><w:cols w:space="720"/></w:sectPr>`;
function cover(rid, v) {
  return `<w:p><w:pPr><w:spacing w:before="${v.before}" w:after="80"/></w:pPr>${anchor(rid)}<w:r><w:rPr>${font('JetBrains Mono')}<w:color w:val="${v.label}"/><w:spacing w:val="40"/><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr><w:t>DELIVERY FRAMEWORK</w:t></w:r></w:p>`
    + `<w:p><w:pPr><w:spacing w:before="0" w:after="60"/></w:pPr><w:r><w:rPr>${font('Funnel Display')}<w:color w:val="${v.title}"/><w:sz w:val="${v.size}"/><w:szCs w:val="${v.size}"/></w:rPr><w:t>The Strata Method</w:t></w:r></w:p>`
    + `<w:p><w:pPr><w:spacing w:before="0" w:after="0"/>${coverSect}</w:pPr><w:r><w:rPr>${font('JetBrains Mono')}<w:color w:val="${v.sub}"/><w:spacing w:val="60"/><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr><w:t>EXPLORE FAST. SHIP DELIBERATELY.</w:t></w:r></w:p>`;
}
const variants = {
  A: { img: 'cover1.jpg', before: 11250, label: 'C23A00', title: '1D1E21', sub: '5E6166', size: 76 },
  B: { img: 'cover2.jpg', before: 11980, label: 'FF8A3D', title: 'FFFFFF', sub: 'E3E4E6', size: 68 },
};
(async () => {
  for (const [k, v] of Object.entries(variants)) {
    const zip = await JSZip.loadAsync(fs.readFileSync(SRC));
    let doc = await zip.file('word/document.xml').async('string');
    const b0 = doc.indexOf('<w:body>') + 8;
    // paragraphs: 0 label, 1 title, 2 "What this is", 3 page break
    const ends = []; let pos = b0; for (let i = 0; i < 4; i++) { pos = doc.indexOf('</w:p>', pos) + 6; ends.push(pos); }
    const p01 = doc.slice(b0, ends[1]), p3 = doc.slice(ends[2], ends[3]);
    if (!p01.includes('The Strata Method') || !p3.includes('w:type="page"')) throw new Error('unexpected cover structure');
    doc = doc.slice(0, b0) + cover('rIdCover', v) + doc.slice(ends[1], ends[2]) + doc.slice(ends[3]);
    zip.file('word/document.xml', doc);
    let rels = await zip.file('word/_rels/document.xml.rels').async('string');
    rels = rels.replace('</Relationships>', '<Relationship Id="rIdCover" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/cover.jpg"/></Relationships>');
    zip.file('word/_rels/document.xml.rels', rels);
    let ct = await zip.file('[Content_Types].xml').async('string');
    if (!/Extension="jpg"/.test(ct)) ct = ct.replace('<Default ', '<Default Extension="jpg" ContentType="image/jpeg"/><Default ');
    zip.file('[Content_Types].xml', ct);
    zip.file('word/media/cover.jpg', fs.readFileSync(v.img));
    const name = `TekRevol-Strata-Method-v1-Cover-${k}.docx`;
    fs.writeFileSync(OUT + name, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
    console.log('wrote', name);
  }
})();
