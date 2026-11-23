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

function nsFromPath(pathname) {
  const m = String(pathname || "").match(/\/projects\/([^/]+)/);
  return m ? m[1] : null;
}

function nsFromUrl(url) {
  const m = String(url || "").match(/\/namespaces\/([^/?#]+)/);
  return m ? m[1] : null;
}

function snapshotApis(calls, ns) {
  return calls.filter((u) => nsFromUrl(u) === ns).length;
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e.message || e).slice(0, 200)));

await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login", { timeout: 25000 });

const identity = await page.evaluate(() => {
  const u = window.globals && window.globals.user;
  return {
    hasUser: Boolean(u && u.username),
    fakeRecovered: String((u && u.username) || "") === "recovered",
  };
});

const discovered = await page.evaluate(async () => {
  const r = await fetch("/kapis/resources.kubesphere.io/v1alpha3/namespaces?limit=50", {
    credentials: "include",
  });
  const body = await r.json().catch(() => ({}));
  const hits = (body.items || []).filter((x) => {
    const ws = x?.metadata?.labels?.["kubesphere.io/workspace"];
    const name = x?.metadata?.name;
    return ws && name && ws !== "system-workspace" && !String(name).startsWith("kubesphere-");
  });
  const grouped = new Map();
  for (const item of hits) {
    const ws = item.metadata.labels["kubesphere.io/workspace"];
    if (!grouped.has(ws)) grouped.set(ws, []);
    grouped.get(ws).push(item.metadata.name);
  }
  let workspace = null;
  let namespaces = [];
  for (const [ws, names] of grouped.entries()) {
    const uniq = [...new Set(names)];
    if (uniq.length >= 2) {
      workspace = ws;
      namespaces = uniq.slice(0, 8);
      break;
    }
  }
  return { workspace, namespaces, enough: namespaces.length >= 2 };
});

if (!discovered.enough) {
  const report = { identity, discovered: { enough: false }, pass: false, reason: "need-two-projects" };
  fs.writeFileSync(`${ROOT}/PHASE6-CONTEXT-VERIFY.json`, JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
  process.exit(1);
}

const [nsA, nsB] = discovered.namespaces;
const prefix = (ns) => `/${discovered.workspace}/clusters/default/projects/${ns}`;

async function readContext() {
  return page.evaluate(() => {
    const g = window.globals || {};
    const root = window.__ksRootStore || g._rootStore;
    let storeName = null;
    try {
      const ps = window.__ksProjectDetail || {};
      storeName = ps.name || ps.namespace || null;
    } catch (e) {
      storeName = null;
    }
    const h6 = document.querySelector("#ks-project-selector-host .h6, .ks-project-selector-slot .h6, .ks-page-side .h6");
    return {
      path: location.pathname,
      htmlLen: document.getElementById("root")?.innerHTML.length || 0,
      selectorText: (h6?.textContent || "").trim(),
      globalsUser: Boolean(g.user && g.user.username),
      globalsCluster: g.cluster || g.currentCluster || null,
      globalsWorkspace: g.workspace || g.currentWorkspace || null,
      slotDetailName: storeName,
    };
  });
}

const beforeCalls = [];
page.on("request", (req) => {
  const u = req.url();
  if (u.includes("/kapis/") || u.includes("/api/")) beforeCalls.push(u);
});

await page.goto(`${BASE}${prefix(nsA)}/overview`, { waitUntil: "domcontentloaded", timeout: 45000 });
await page.waitForFunction(() => {
  const root = document.getElementById("root");
  return (root?.innerHTML.length || 0) > 500 && (root?.innerText || "").includes("部署");
}, { timeout: 25000 });
await page.waitForTimeout(2500);
await page.screenshot({ path: `${EVID}/p6-context-a.png`, fullPage: true });
const ctxA = await readContext();
const apisA = beforeCalls.slice();

const afterCalls = [];
page.removeAllListeners("request");
page.on("request", (req) => {
  const u = req.url();
  if (u.includes("/kapis/") || u.includes("/api/")) afterCalls.push(u);
});

const pathBefore = ctxA.path;
const sideTitle = page.locator("#ks-project-selector-host .h6, .ks-project-selector-slot .h6, .ks-page-side .h6").first();
await sideTitle.click();
await page.waitForSelector(".ReactModal__Content a", { timeout: 15000 });
await page.waitForTimeout(2500);
const cardCount = await page.locator(".ReactModal__Content a").count();
let clickedOther = false;
for (let i = 1; i < cardCount; i += 1) {
  const text = ((await page.locator(".ReactModal__Content a").nth(i).textContent()) || "").trim();
  if (!text || text === nsA || text.includes("企业空间")) {
    continue;
  }
  await page.locator(".ReactModal__Content a").nth(i).click();
  clickedOther = true;
  break;
}
if (!clickedOther && cardCount > 1) {
  await page.locator(".ReactModal__Content a").nth(1).click();
}
await page.waitForFunction((prev) => location.pathname !== prev, pathBefore, { timeout: 20000 }).catch(() => {});
await page.waitForTimeout(2500);
await page.screenshot({ path: `${EVID}/p6-context-b.png`, fullPage: true });
const ctxB = await readContext();

const pathA = nsFromPath(ctxA.path);
const pathB = nsFromPath(ctxB.path);
const apisAfterToB = snapshotApis(afterCalls, pathB);
const apisAfterToA = snapshotApis(afterCalls, pathA);
const selectorChanged = Boolean(ctxB.selectorText) && ctxB.selectorText !== ctxA.selectorText;

const checks = {
  loginRealUser: identity.hasUser && !identity.fakeRecovered,
  startedOnA: pathA === nsA,
  routeSwitched: Boolean(pathB) && pathB !== pathA,
  selectorFollowed: selectorChanged || (ctxB.selectorText || "").includes(pathB || ""),
  slotDetailFollowed: !ctxB.slotDetailName || !pathB || String(ctxB.slotDetailName).includes(pathB),
  apisHitNewNs: Boolean(pathB) && apisAfterToB > 0,
  apisNotStuckOnOldNs: Boolean(pathB) && apisAfterToB >= apisAfterToA,
  rootAlive: ctxA.htmlLen > 500 && ctxB.htmlLen > 500,
};

const report = {
  identity,
  from: { pathNs: pathA ? "<nsA>" : null, selector: ctxA.selectorText ? "<titleA>" : "", htmlLen: ctxA.htmlLen },
  to: { pathNs: pathB ? "<nsB>" : null, selector: ctxB.selectorText ? "<titleB>" : "", htmlLen: ctxB.htmlLen },
  api: { afterToA: apisAfterToA, afterToB: apisAfterToB },
  differentProjects: nsA !== nsB,
  checks,
  errors: errors.slice(0, 8),
  pass: Object.values(checks).every(Boolean),
};
fs.writeFileSync(`${ROOT}/PHASE6-CONTEXT-VERIFY.json`, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
await browser.close();
if (!report.pass) process.exit(1);
