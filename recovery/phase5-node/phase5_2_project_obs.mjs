#!/usr/bin/env node
import { chromium } from "playwright";
import fs from "node:fs";

const BASE = "http://127.0.0.1:8108";
function loadBashrcVar(name) {
  if (process.env[name]) return;
  const text = fs.readFileSync("/home/bruce/.bashrc", "utf8");
  const re = new RegExp(`^(?:export\\s+)?${name}=(['"]?)([^'"\\n]*)\\1`, "m");
  const m = text.match(re);
  if (m && m[2]) process.env[name] = m[2];
}
loadBashrcVar("KS_TEST_USERNAME");
loadBashrcVar("KS_TEST_PASSWORD");

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.addInitScript(() => {
  window.__obs = { childMax: 0, htmlMax: 0, errors: [], rejects: [] };
  window.addEventListener("error", (e) => {
    window.__obs.errors.push(String(e.error || e.message || e).slice(0, 500));
  });
  window.addEventListener("unhandledrejection", (e) => {
    const r = e.reason;
    window.__obs.rejects.push(String(r && r.stack ? r.stack : r).slice(0, 700));
  });
});
await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login", { timeout: 25000 });
const path = "/dev-workspace/clusters/default/projects/dev-ewms-web/overview";
await page.goto(`${BASE}${path}`, { waitUntil: "domcontentloaded" });
await page.evaluate(() => {
  const root = document.getElementById("root");
  const obs = new MutationObserver(() => {
    if (!root) return;
    window.__obs.childMax = Math.max(window.__obs.childMax, root.childElementCount);
    window.__obs.htmlMax = Math.max(window.__obs.htmlMax, root.innerHTML.length);
  });
  if (root) {
    window.__obs.childMax = root.childElementCount;
    window.__obs.htmlMax = root.innerHTML.length;
    obs.observe(root, { childList: true, subtree: true });
  }
});
await page.waitForTimeout(12000);
const out = await page.evaluate(() => {
  const root = document.getElementById("root");
  return {
    path: location.pathname,
    html: root ? root.innerHTML.slice(0, 300) : "",
    text: root ? (root.innerText || "").slice(0, 200) : "",
    obs: window.__obs,
    user: Boolean(window.globals?.user),
    projectRules: window.globals?.user?.projectRules ? Object.keys(window.globals.user.projectRules) : [],
  };
});
console.log(JSON.stringify(out, null, 2));
await page.screenshot({
  path: "/home/bruce/code/ks-develop/kse-console-v3/recovery/phase5-evidence/p52-project-obs.png",
  fullPage: true,
}).catch(() => null);
await browser.close();
