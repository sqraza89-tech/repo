const sharp = require('sharp');
async function run(n, box, H = 1325) {
  const { data, info } = await sharp(`../../images/${n}.webp`).extract({ left: 0, top: 0, width: 1024, height: H }).raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels, W = info.width;
  const px = (x, y, c) => data[(y * W + x) * ch + c];
  const [x0, y0, x1, y1] = box;
  for (let y = y0; y < Math.min(y1, H); y++) {
    for (let c = 0; c < 3; c++) {
      let l = 0, r = 0; for (let k = 1; k <= 6; k++) { l += px(x0 - k, y, c); r += px(x1 + k, y, c); } l /= 6; r /= 6;
      for (let x = x0; x <= x1; x++) { const t = (x - x0) / (x1 - x0); data[(y * W + x) * ch + c] = Math.round(l + (r - l) * t + (Math.random() - 0.5) * 3); }
    }
  }
  await sharp(data, { raw: info }).jpeg({ quality: 92 }).toFile(`cover${n}.jpg`);
  await sharp(data, { raw: info }).resize(500).png().toFile(`cover${n}_prev.png`);
}
run('1', [66, 1030, 625, 1325]).then(() => run('2', [58, 1140, 632, 1325])).then(() => console.log('done'));
