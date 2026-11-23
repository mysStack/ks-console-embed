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
const page = await browser.newPage();
const apis = [];
page.on("response", async (resp) => {
  const url = resp.url();
  if (!(url.includes("/kapis/") || url.includes("/apis/"))) return;
  const path = url.replace(/^https?:\/\/[^/]+/, "");
  if (
    path.includes("deployments") ||
    path.includes("quotas") ||
    path.includes("namespaces/") ||
    path.includes("resourcequotas")
  ) {
    let total = null;
    let items = null;
    try {
      const body = await resp.json();
      total = body.totalItems ?? body.totalCount ?? null;
      items = Array.isArray(body.items) ? body.items.length : null;
      if (body.used) total = Object.keys(body.used).length;
    } catch {}
    apis.push({ path: path.slice(0, 180), http: resp.status(), total, items });
  }
});

await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login", { timeout: 25000 });

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
    workspace: hit?.metadata?.labels?.["kubesphere.io/workspace"] || null,
    namespace: hit?.metadata?.name || null,
  };
});

const prefix = `/${discovered.workspace}/clusters/default/projects/${discovered.namespace}`;
await page.goto(`${BASE}${prefix}/overview`, { waitUntil: "domcontentloaded", timeout: 45000 });
try {
  await page.waitForFunction(() => (document.getElementById("root")?.innerText || "").includes("部署"), {
    timeout: 20000,
  });
} catch {}
await page.waitForTimeout(2000);
const overview = await page.evaluate(() => {
  const text = document.getElementById("root")?.innerText || "";
  const m = text.match(/(\d+)\s*部署/);
  return { path: location.pathname, dep: m ? Number(m[1]) : null, text: text.slice(0, 250) };
});

apis.length = 0;
await page.goto(`${BASE}${prefix}/deployments`, { waitUntil: "domcontentloaded", timeout: 45000 });
try {
  await page.waitForFunction(() => {
    const t = document.getElementById("root")?.innerText || "";
    return /总数[：:]\s*\d+/.test(t) && !t.includes("ks-page-loading");
  }, { timeout: 25000 });
} catch {}
await page.waitForTimeout(2500);
const list = await page.evaluate(() => {
  const text = document.getElementById("root")?.innerText || "";
  const m = text.match(/总数[：:]\s*(\d+)/);
  return {
    path: location.pathname,
    total: m ? Number(m[1]) : null,
    hasSpinner: Boolean(document.querySelector("[class*='loading'], .spin")),
    text: text.slice(0, 280),
    hasNav: Boolean(document.querySelector(".ks-page-nav, .ks-page-side")),
  };
});

const out = { discovered: { hasWs: Boolean(discovered.workspace), hasNs: Boolean(discovered.namespace) }, overview, list, apis: apis.slice(0, 25) };
fs.writeFileSync(`${ROOT}/PHASE5.3-LIST.json`, JSON.stringify(out, null, 2) + "\n");
console.log(JSON.stringify({
  overviewDep: overview.dep,
  listTotal: list.total,
  hasNav: list.hasNav,
  apis: apis.map((a) => ({ http: a.http, total: a.total, items: a.items, path: a.path.slice(0, 100) })),
  listText: (list.text || "").replace(/\s+/g, " ").slice(0, 120),
}, null, 2));
await browser.close();
