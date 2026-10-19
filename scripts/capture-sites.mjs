// Capture a screenshot of one site:
//   node scripts/capture-sites.mjs <url> <out.png> [--wake]
// Uses scripts/lib-capture.mjs (cross-platform browser detection).
import { launchBrowser, captureSite } from "./lib-capture.mjs";

const [url, out] = process.argv.slice(2).filter((a) => a !== "--wake");
const wake = process.argv.includes("--wake");

if (!url || !out) {
  console.error("Usage: node scripts/capture-sites.mjs <url> <out.png> [--wake]");
  process.exit(1);
}

const browser = await launchBrowser();
try {
  const result = await captureSite(browser, url, out, { wake });
  if (result.ok) {
    console.log(`captured ${out}`);
  } else {
    console.error(`FAILED: ${result.reason}`);
    process.exit(1);
  }
} finally {
  await browser.close();
}
