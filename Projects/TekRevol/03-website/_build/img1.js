const sharp = require('sharp');
(async () => {
  const H = 1325;
  const { data, info } = await sharp('../../images/1.webp').extract({ left: 0, top: 0, width: 1024, height: H }).raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels, W = info.width;
  const src = Buffer.from(data);
  const avg = (x, y, c, dx, dy) => { let s = 0; for (let k = 0; k < 5; k++) s += src[((y + dy * k) * W + (x + dx * k)) * ch + c]; return s / 5; };
  const [x0, y0, x1, y1] = [68, 1040, 606, 1302];
  for (let c = 0; c < 3; c++) {
    const L = y => avg(x0 - 1, y, c, -1, 0), R = y => avg(x1 + 1, y, c, 1, 0), T = x => avg(x, y0 - 1, c, 0, -1), Bm = x => avg(x, y1 + 1, c, 0, 1);
    const c00 = (L(y0) + T(x0)) / 2, c10 = (R(y0) + T(x1)) / 2, c01 = (L(y1) + Bm(x0)) / 2, c11 = (R(y1) + Bm(x1)) / 2;
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const u = (x - x0) / (x1 - x0), v = (y - y0) / (y1 - y0);
      const val = (1 - u) * L(y) + u * R(y) + (1 - v) * T(x) + v * Bm(x) - ((1 - u) * (1 - v) * c00 + u * (1 - v) * c10 + (1 - u) * v * c01 + u * v * c11);
      data[(y * W + x) * ch + c] = Math.max(0, Math.min(255, Math.round(val + (Math.random() - 0.5) * 5)));
    }
  }
  await sharp(data, { raw: info }).jpeg({ quality: 92 }).toFile('cover1.jpg');
  await sharp(data, { raw: info }).extract({ left: 0, top: 950, width: 1024, height: 375 }).png().toFile('cover1_zoom.png');
})();
