// Exports carousel.html as an 8-page PDF (one 1080x1350 page per slide) with live text,
// for importing into Canva. Usage: node export-pdf.js
const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  await page.goto("file://" + path.join(__dirname, "carousel.html"));
  await page.waitForFunction(() => window.__ready === true);
  await page.addStyleTag({ content: `
    @page { size: 1080px 1350px; margin: 0; }
    body { padding: 0 !important; gap: 0 !important; background: none !important; display: block !important; }
    .slide { break-after: page; }` });
  await page.pdf({ path: path.join(__dirname, "aram-carousel.pdf"), width: "1080px", height: "1350px", printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await browser.close();
  console.log("wrote aram-carousel.pdf");
})();
