// Shared headless-capture logic for project screenshots.
// Used by capture-sites.mjs (single site) and capture-all.mjs (batch).
// Works wherever a Chrome/Edge/Chromium binary exists (Windows, macOS, Linux CI).
import puppeteer from "puppeteer-core";
import { existsSync, renameSync } from "node:fs";
import path from "node:path";

const CANDIDATES = [
  // Env override first
  process.env.BROWSER_PATH,
  // Windows
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  // macOS
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  // Linux (GitHub runners, CI)
  "/usr/bin/google-chrome-stable",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
].filter(Boolean);

export function findBrowserExecutable() {
  const found = CANDIDATES.find((p) => existsSync(p));
  if (!found) {
    throw new Error(
      "No Chrome/Edge/Chromium executable found. Set BROWSER_PATH to a Chromium binary."
    );
  }
  return found;
}

export async function launchBrowser() {
  return puppeteer.launch({
    executablePath: findBrowserExecutable(),
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--disable-dev-shm-usage",
    ],
  });
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const bodyText = (page) => page.evaluate(() => document.body?.innerText ?? "");

const streamlitAsleep = (page) =>
  bodyText(page).then((t) => /has gone to sleep/i.test(t));

const streamlitWaking = (page) =>
  bodyText(page).then((t) => /waking up|This will take just a sec/i.test(t));

// Wake a sleeping Streamlit app; poll up to ~2 minutes.
// Starting the app, then reloading once, gives a clean boot-free render.
async function wakeStreamlit(page) {
  if (!(await streamlitAsleep(page))) return true;

  const clicked = await page.evaluate(() => {
    const btn = [...document.querySelectorAll("button")].find((b) =>
      /back up/i.test(b.textContent ?? "")
    );
    if (btn) {
      btn.click();
      return true;
    }
    return false;
  });
  if (!clicked) return false;

  const deadline = Date.now() + 120_000;
  while (Date.now() < deadline) {
    await sleep(8_000);
    if (!(await streamlitAsleep(page))) break;
  }
  if (await streamlitAsleep(page)) return false;

  // First boot renders inside Streamlit's shell (status banners, resizing
  // iframe). Reload and wait for a banner-free, settled load.
  const attempts = 2;
  for (let i = 0; i < attempts; i++) {
    await page.reload({ waitUntil: "networkidle2", timeout: 90_000 });
    await sleep(3_000);
    if (!(await streamlitAsleep(page)) && !(await streamlitWaking(page))) return true;
  }
  return !(await streamlitWaking(page));
}

/**
 * Capture `url` into `out`.
 * - writes to a temp file first: on any failure the existing PNG stays intact
 * - `wake: true` for Streamlit free-tier apps that sleep when idle
 * Returns { ok: boolean, reason?: string }.
 */
export async function captureSite(browser, url, out, { wake = false, viewport } = {}) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: viewport?.width ?? 1440, height: viewport?.height ?? 900, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "networkidle2", timeout: 90_000 });

    if (wake) {
      const awake = await wakeStreamlit(page);
      if (!awake) {
        return { ok: false, reason: "app stayed asleep after wake attempt" };
      }
    } else if (await streamlitAsleep(page)) {
      return { ok: false, reason: "app is asleep (pass wake: true to retry)" };
    }

    // Let webfonts / late animations settle, then shoot.
    await page.waitForNetworkIdle({ idleTime: 1_000, timeout: 15_000 }).catch(() => {});
    await sleep(1_500);

    const tmp = `${out}.tmp.png`;
    await page.screenshot({ path: tmp, captureBeyondViewport: false });
    renameSync(tmp, out);
    return { ok: true };
  } catch (err) {
    return { ok: false, reason: err?.message ?? String(err) };
  } finally {
    await page.close();
  }
}
