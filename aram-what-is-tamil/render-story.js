// Renders each .story in story.html to a 1080x1920 PNG (Instagram Story). Usage: node render-story.js
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
(async () => {
  const outDir = path.join(__dirname, "story");
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 3500, height: 2100 }, deviceScaleFactor: 1 });
  await page.goto("file://" + path.join(__dirname, "story.html"));
  await page.waitForFunction(() => window.__ready === true);
  const frames = await page.$$(".story");
  for (let i = 0; i < frames.length; i++) {
    const file = path.join(outDir, `aram-story-${i + 1}.png`);
    await frames[i].screenshot({ path: file });
    console.log("wrote", path.relative(__dirname, file));
  }
  const imgs = fs.readdirSync(outDir).filter((f) => /^aram-story-\d+\.png$/.test(f)).sort();
  const sheet = await browser.newPage({ viewport: { width: imgs.length * 405 + (imgs.length + 1) * 24, height: 720 + 48 } });
  await sheet.setContent(`<body style="margin:0;background:#1b1b1b;display:flex;gap:24px;padding:24px">` +
    imgs.map((f) => `<img src="data:image/png;base64,${fs.readFileSync(path.join(outDir, f)).toString("base64")}" style="width:405px;height:720px;border-radius:8px">`).join("") + `</body>`);
  await sheet.screenshot({ path: path.join(__dirname, "story-preview.png") });
  console.log("wrote story-preview.png");
  await browser.close();
})();
