#!/usr/bin/env node
/** After login, visit a known protected route in the same context. No fake user. */
import { chromium } from "playwright";
import fs from "node:fs";

const BASE = process.env.PHASE5_BASE || "http://127.0.0.1:8108";
const ROOT = "/home/bruce/code/ks-develop/kse-console-v3/recovery";
const EVIDENCE = `${ROOT}/phase5-evidence`;
fs.mkdirSync(EVIDENCE, { recursive: true });

function loadBashrcVar(name) {
  if (process.env[name]) return;
  const text = fs.readFileSync("/home/bruce/.bashrc", "utf8");
  const re = new RegExp(`^(?:export\\s+)?${name}=(['"]?)([^'"\\n]*)\\1`, "m");
  const m = text.match(re);
  if (m && m[2]) process.env[name] = m[2];
}
loadBashrcVar("KS_TEST_USERNAME");
loadBashrcVar("KS_TEST_PASSWORD");

async function kapis(page) {
  return page.evaluate(async () => {
    const r = await fetch("/kapis/version", { credentials: "include" });
    let gitVersion = null;
    try {
      gitVersion = (await r.json()).gitVersion || null;
    } catch {}
    return { http: r.status, gitVersion };
  });
}

async function snap(page, name) {
  await page.screenshot({ path: `${EVIDENCE}/${name}.png`, fullPage: true }).catch(() => null);
  return page.evaluate(() => {
    const root = document.getElementById("root");
    return {
      href: location.href,
      path: location.pathname,
      rootChildCount: root ? root.childElementCount : 0,
      text: root ? (root.innerText || "").slice(0, 400) : "",
      userPresent: Boolean(window.globals?.user),
      userIsRecovered: window.globals?.user?.username === "recovered",
    };
  });
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.waitForTimeout(600);
const beforeUser = await page.evaluate(() => ({
  userPresent: Boolean(window.globals?.user),
  username: window.globals?.user?.username || null,
}));
const kapisBefore = await kapis(page);
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
const waitResp = page.waitForResponse((r) => {
  try {
    return new URL(r.url()).pathname === "/login" && r.request().method() === "POST";
  } catch {
    return false;
  }
}, { timeout: 20000 });
await page.click('button[type="submit"]');
await waitResp;
await page.waitForTimeout(800);
const kapisAfter = await kapis(page);
const cookies = (await context.cookies()).map((c) => c.name);
const stillOnLogin = await snap(page, "p51-after-submit");
await page.goto(`${BASE}/settings`, { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(2000);
const settings = await snap(page, "p51-manual-settings");
await page.goto(`${BASE}/access`, { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(2000);
const access = await snap(page, "p51-manual-access");
await page.reload({ waitUntil: "load" });
await page.waitForTimeout(1500);
const accessRefresh = await snap(page, "p51-manual-access-refresh");
const out = {
  beforeUser,
  kapisBefore,
  kapisAfter,
  cookieNames: cookies,
  stillOnLogin,
  settings,
  access,
  accessRefresh,
};
fs.writeFileSync(`${ROOT}/PHASE5.1-MANUAL.json`, JSON.stringify(out, null, 2) + "\n");
console.log(JSON.stringify({
  shimUserBeforeLogin: beforeUser.userPresent,
  recoveredBeforeLogin: beforeUser.username === "recovered",
  kapisBefore: kapisBefore.http,
  kapisAfter: kapisAfter.http,
  cookieCount: cookies.length,
  afterSubmitPath: stillOnLogin.path,
  settingsPath: settings.path,
  settingsUserRecovered: settings.userIsRecovered,
  settingsText: (settings.text || "").slice(0, 120),
  accessPath: access.path,
  accessText: (access.text || "").slice(0, 120),
  accessRefreshPath: accessRefresh.path,
}, null, 2));
await browser.close();
