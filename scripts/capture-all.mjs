// Batch-capture every project screenshot listed in scripts/screenshots.config.json.
// Used locally and by .github/workflows/refresh-screenshots.yml (weekly cron):
//   node scripts/capture-all.mjs
//
// Failure policy: a site that can't be captured (asleep, blocked, timeout) never
// overwrites its existing PNG — the script logs the failure and continues, so a
// scheduled run can only ever improve the screenshots, never break them.
import { readFileSync, existsSync } from "node:fs";
import { launchBrowser, captureSite } from "./lib-capture.mjs";

const config = JSON.parse(readFileSync(new URL("./screenshots.config.json", import.meta.url), "utf8"));

const browser = await launchBrowser();
const results = [];
try {
  for (const site of config.sites) {
    process.stdout.write(`${site.name} … `);
    const result = await captureSite(browser, site.url, site.out, {
      wake: site.wake === true,
      viewport: config.viewport,
    });
    if (result.ok) {
      console.log(`OK  ->  ${site.out}`);
    } else {
      console.log(`SKIPPED  (${result.reason})`);
      console.log("          keeping existing PNG");
    }
    results.push({ name: site.name, ...result });
  }
} finally {
  await browser.close();
}

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} captured.`);
if (failed.length) {
  console.log("Not captured (kept previous image):");
  for (const f of failed) console.log(`  - ${f.name}: ${f.reason}`);
}
// Exit 0 even with individual failures: stale-but-real screenshots beat a red build.
if (!results.some((r) => r.ok)) {
  console.error("ERROR: nothing could be captured (browser missing or network down).");
  process.exit(1);
}
