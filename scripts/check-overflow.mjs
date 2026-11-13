// Quick horizontal-overflow check across viewports.
// Usage: node scripts/check-overflow.mjs http://localhost:3000
import puppeteer from "puppeteer-core";
import { existsSync } from "node:fs";

const CANDIDATES = [
  process.env.BROWSER_PATH,
  "C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe",
  "C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe",
  "C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe",
  "C:\\\\Program Files\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
].filter(Boolean);

const url = process.argv[2] || "http://localhost:3000";
const viewports = [
  { width: 1440, height: 900 },
  { width: 1024, height: 900 },
  { width: 820, height: 1180 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
];

const executablePath = CANDIDATES.find((p) => existsSync(p));
if (!executablePath) {
  console.error("No browser found");
  process.exit(1);
}

const browser = await puppeteer.launch({
  executablePath,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

let bad = false;
try {
  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport(vp);
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
    await new Promise((r) => setTimeout(r, 1500));
    const result = await page.evaluate(() => {
      const doc = document.documentElement;
      const body = document.body;
      const sw = Math.max(doc.scrollWidth, body.scrollWidth);
      const cw = doc.clientWidth;
      const overflow = sw - cw;
      // find elements wider than viewport
      const offenders = [];
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.width > cw + 1 && r.right > cw + 1) {
          const tag = el.tagName.toLowerCase();
          const cls = (el.className && typeof el.className === "string") ? el.className.slice(0, 60) : "";
          offenders.push({ tag, cls, w: Math.round(r.width), right: Math.round(r.right) });
        }
      }
      // de-dup by tag+cls
      const seen = new Set();
      const uniq = offenders.filter(o => {
        const k = o.tag + "|" + o.cls + "|" + o.w;
        if (seen.has(k)) return false; seen.add(k); return true;
      }).slice(0, 8);
      return { sw, cw, overflow, offenders: uniq };
    });
    const ok = result.overflow <= 1;
    console.log(`${vp.width}x${vp.height}: scrollWidth=${result.sw} clientWidth=${result.cw} overflow=${result.overflow}px ${ok ? "OK" : "OVERFLOW"}`);
    if (!ok) {
      bad = true;
      for (const o of result.offenders) console.log("  offender:", JSON.stringify(o));
    }
    await page.close();
  }
} finally {
  await browser.close();
}
if (bad) process.exit(1);
