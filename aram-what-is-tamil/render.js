// Renders each .slide in carousel.html to a 1080x1350 PNG (Instagram portrait)
// plus a contact-sheet preview. Usage: node render.js
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

(async () => {
  const outDir = path.join(__dirname, "slides");
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 1400 }, deviceScaleFactor: 1 });
  await page.goto("file://" + path.join(__dirname, "carousel.html"));
  await page.waitForFunction(() => window.__ready === true);

  const slides = await page.$$(".slide");
  for (let i = 0; i < slides.length; i++) {
    const file = path.join(outDir, `aram-${String(i + 1).padStart(2, "0")}.png`);
    await slides[i].screenshot({ path: file });
    console.log("wrote", path.relative(__dirname, file));
  }

  // Contact sheet: all slides side by side, scaled down.
  const imgs = fs.readdirSync(outDir).filter((f) => /^aram-\d+\.png$/.test(f)).sort();
  const sheet = await browser.newPage({ viewport: { width: 4 * 360 + 5 * 24, height: 2 * 450 + 3 * 24 } });
  await sheet.setContent(
    `<body style="margin:0;background:#1b1b1b;display:grid;grid-template-columns:repeat(4,360px);gap:24px;padding:24px">` +
      imgs.map((f) => `<img src="data:image/png;base64,${fs.readFileSync(path.join(outDir, f)).toString("base64")}" style="width:360px;height:450px;display:block;border-radius:6px">`).join("") +
      `</body>`
  );
  await sheet.waitForLoadState("load");
  await sheet.screenshot({ path: path.join(__dirname, "preview.png"), fullPage: true });
  console.log("wrote preview.png");

  await browser.close();
})();
