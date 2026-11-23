#!/usr/bin/env node
import { chromium } from "playwright";
import fs from "node:fs";

const BASE = "http://127.0.0.1:8108";
const ROOT = "/home/bruce/code/ks-develop/kse-console-v3/recovery";
const EVID = `${ROOT}/phase5-evidence`;
fs.mkdirSync(EVID, { recursive: true });

function loadBashrcVar(name) {
  if (process.env[name]) return;
  const text = fs.readFileSync("/home/bruce/.bashrc", "utf8");
  const re = new RegExp(`^(?:export\\s+)?${name}=(['"]?)([^'"\\n]*)\\1`, "m");
  const m = text.match(re);
  if (m && m[2]) process.env[name] = m[2];
}
loadBashrcVar("KS_TEST_USERNAME");
loadBashrcVar("KS_TEST_PASSWORD");

function redact(s) {
  return String(s || "")
    .replace(/\/workspaces\/[^/]+/g, "/workspaces/<ws>")
    .replace(/\/projects\/[^/]+/g, "/projects/<ns>")
    .replace(/\/namespaces\/[^/]+/g, "/namespaces/<ns>")
    .replace(/\/deployments\/[^/?]+/g, "/deployments/<name>");
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
const podApis = [];
page.on("pageerror", (e) => errors.push(String(e.message || e).slice(0, 180)));
page.on("response", async (resp) => {
  const url = resp.url();
  if (!/\/pods(\?|$)/.test(url)) return;
  let total = null;
  let items = null;
  try {
    const body = await resp.json();
    total = body.totalItems ?? body.totalCount ?? null;
    items = Array.isArray(body.items) ? body.items.length : null;
  } catch {}
  podApis.push({
    http: resp.status(),
    total,
    items,
    path: redact(url.replace(/^https?:\/\/[^/]+/, "")).slice(0, 180),
  });
});

await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login", { timeout: 25000 });

const identity = await page.evaluate(() => {
  const u = window.globals && window.globals.user;
  return { hasUser: Boolean(u && u.username), fakeRecovered: String((u && u.username) || "") === "recovered" };
});

const discovered = await page.evaluate(async () => {
  const r = await fetch("/kapis/resources.kubesphere.io/v1alpha3/namespaces?limit=30", { credentials: "include" });
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
await page.waitForFunction(() => (document.getElementById("root")?.innerText || "").includes("部署"), { timeout: 25000 });
await page.waitForTimeout(1200);
await page.screenshot({ path: `${EVID}/p54-overview.png`, fullPage: true });
const overview = await page.evaluate(() => {
  const text = document.getElementById("root")?.innerText || "";
  const m = text.match(/(\d+)\s*部署/);
  return {
    dep: m ? Number(m[1]) : null,
    hasNav: Boolean(document.querySelector(".ks-page-nav")),
    hasSelector: Boolean(document.querySelector(".ks-page-side .h6, .ks-page-side [class*='titleWrapper']")),
    htmlLen: document.getElementById("root")?.innerHTML.length || 0,
  };
});

const selectorClicked = { ok: false };
const title = page.locator(".ks-page-side .h6, .ks-page-side [class*='titleWrapper']").first();
if (await title.count()) {
  await title.click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${EVID}/p54-selector.png`, fullPage: true });
  selectorClicked.ok = await page.evaluate(() => {
    const text = document.body.innerText || "";
    return /项目|搜索|企业空间/.test(text) && !/Cannot convert undefined/.test(text);
  });
  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);
}

await page.goto(`${BASE}${prefix}/deployments`, { waitUntil: "domcontentloaded", timeout: 45000 });
await page.waitForFunction(() => /总数[：:]\s*\d+/.test(document.getElementById("root")?.innerText || ""), { timeout: 25000 });
await page.waitForTimeout(1500);
const list = await page.evaluate(() => {
  const text = document.getElementById("root")?.innerText || "";
  const m = text.match(/总数[：:]\s*(\d+)/);
  const href = Array.from(document.querySelectorAll("a[href]"))
    .map((a) => a.getAttribute("href") || "")
    .find((h) => /\/deployments\/[^/?#]+/.test(h) && !/\/deployments\/?$/.test(h.split("?")[0]));
  return { total: m ? Number(m[1]) : null, href, htmlLen: document.getElementById("root")?.innerHTML.length || 0 };
});
if (!list.href) {
  throw new Error(`no deployment href total=${list.total} htmlLen=${list.htmlLen}`);
}

podApis.length = 0;
await page.goto(list.href.startsWith("http") ? list.href : `${BASE}${list.href}`, { waitUntil: "domcontentloaded", timeout: 45000 });
await page.waitForTimeout(4000);
await page.screenshot({ path: `${EVID}/p54-detail.png`, fullPage: true });
const detail = await page.evaluate(() => {
  const text = (document.getElementById("root")?.innerText || "").replace(/\s+/g, " ");
  const m = text.match(/总数[：:]\s*(\d+)/);
  return {
    path: location.pathname,
    onDetail: /\/deployments\/[^/]+/.test(location.pathname),
    podTotal: m ? Number(m[1]) : null,
    hasEmpty: text.includes("未发现资源"),
    htmlLen: document.getElementById("root")?.innerHTML.length || 0,
    textHead: text.slice(0, 160),
  };
});

const checks = {
  loginRealUser: identity.hasUser && !identity.fakeRecovered,
  overviewAlive: overview.htmlLen > 1000 && overview.dep > 0,
  sidebarNav: Boolean(overview.hasNav),
  listMatches: overview.dep != null && list.total === overview.dep && list.total > 0,
  detailPods: Boolean(detail.onDetail && detail.podTotal > 0),
};

const report = {
  identity,
  overview,
  list: { total: list.total },
  selectorClicked,
  detail: { ...detail, path: redact(detail.path) },
  podApis: podApis.slice(0, 8),
  checks,
  errors: errors.slice(0, 8),
  pass: Object.values(checks).every(Boolean),
};
fs.writeFileSync(`${ROOT}/PHASE5.4-VERIFY.json`, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ pass: report.pass, checks, podApis: report.podApis, errors: report.errors }, null, 2));
await browser.close();
if (!report.pass) process.exit(1);
