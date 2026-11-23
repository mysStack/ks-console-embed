#!/usr/bin/env node
import { chromium } from "playwright";
import fs from "node:fs";

const BASE = "http://127.0.0.1:8108";
const ROOT = "/home/bruce/code/ks-develop/kse-console-v3/recovery";
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
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e.message || e).slice(0, 300)));
page.on("console", (m) => {
  if (m.type() === "error") errors.push("console:" + m.text().slice(0, 200));
});

await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login", { timeout: 25000 });
await page.waitForTimeout(2000);

const discovered = await page.evaluate(async () => {
  const r = await fetch("/kapis/resources.kubesphere.io/v1alpha3/namespaces?limit=30", {
    credentials: "include",
  });
  const body = await r.json().catch(() => ({}));
  const hit = (body.items || []).find((x) => {
    const ws = x?.metadata?.labels?.["kubesphere.io/workspace"];
    const name = x?.metadata?.name;
    return ws && name && ws !== "system-workspace" && !String(name).startsWith("kubesphere-");
  });
  return {
    hasWs: Boolean(hit?.metadata?.labels?.["kubesphere.io/workspace"]),
    hasNs: Boolean(hit?.metadata?.name),
    prefix: hit
      ? `/${hit.metadata.labels["kubesphere.io/workspace"]}/clusters/default/projects/${hit.metadata.name}`
      : null,
  };
});

await page.goto(`${BASE}${discovered.prefix}/overview`, { waitUntil: "domcontentloaded", timeout: 45000 });
await page.waitForTimeout(4000);
await page.screenshot({ path: `${ROOT}/phase5-evidence/p53-diag-overview.png`, fullPage: true });
const snap = await page.evaluate(() => {
  const root = document.getElementById("root");
  return {
    path: location.pathname,
    child: root ? root.childElementCount : -1,
    htmlLen: root ? root.innerHTML.length : -1,
    text: (root?.innerText || "").replace(/\s+/g, " ").slice(0, 400),
    hasSide: Boolean(document.querySelector(".ks-page-side")),
    hasNav: Boolean(document.querySelector(".ks-page-nav")),
    classes: Array.from(root?.firstElementChild?.classList || []),
  };
});
console.log(JSON.stringify({ discovered: { hasWs: discovered.hasWs, hasNs: discovered.hasNs }, snap, errors: errors.slice(0, 12) }, null, 2));
await browser.close();
