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
page.on("pageerror", (e) => errors.push(String(e.message || e).slice(0, 180)));

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
    path: location.pathname,
  };
});

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
if (!discovered.workspace || !discovered.namespace) {
  throw new Error("no discovered project");
}
const prefix = `/${discovered.workspace}/clusters/default/projects/${discovered.namespace}`;

await page.goto(`${BASE}${prefix}/overview`, { waitUntil: "domcontentloaded", timeout: 45000 });
await page.waitForFunction(() => (document.getElementById("root")?.innerText || "").includes("部署"), {
  timeout: 25000,
});
await page.waitForTimeout(1500);
await page.screenshot({ path: `${EVID}/p53-overview.png`, fullPage: true });
const overview = await page.evaluate(() => {
  const text = document.getElementById("root")?.innerText || "";
  const m = text.match(/(\d+)\s*部署/);
  return {
    path: location.pathname,
    dep: m ? Number(m[1]) : null,
    hasSide: Boolean(document.querySelector(".ks-page-side, .ks-page-nav")),
    navLinks: Array.from(document.querySelectorAll(".ks-page-nav a, .ks-page-side a"))
      .map((a) => (a.textContent || "").trim())
      .filter(Boolean)
      .slice(0, 12),
  };
});

await page.goto(`${BASE}${prefix}/deployments`, { waitUntil: "domcontentloaded", timeout: 45000 });
await page.waitForFunction(() => {
  const t = document.getElementById("root")?.innerText || "";
  return /总数[：:]\s*\d+/.test(t);
}, { timeout: 25000 });
await page.waitForTimeout(1500);
await page.screenshot({ path: `${EVID}/p53-deployments.png`, fullPage: true });
const list = await page.evaluate(() => {
  const text = document.getElementById("root")?.innerText || "";
  const m = text.match(/总数[：:]\s*(\d+)/);
  const links = Array.from(document.querySelectorAll("a[href]"))
    .map((a) => ({ href: a.getAttribute("href") || "", text: (a.textContent || "").trim() }))
    .filter((x) => /\/deployments\/[^/]+/.test(x.href) && !x.href.endsWith("/deployments"));
  const navTexts = Array.from(document.querySelectorAll(".ks-page-nav, .ks-page-side"))
    .map((n) => (n.innerText || "").replace(/\s+/g, " ").trim())
    .slice(0, 3);
  return {
    path: location.pathname,
    total: m ? Number(m[1]) : null,
    hasSide: Boolean(document.querySelector(".ks-page-side")),
    hasNav: Boolean(document.querySelector(".ks-page-nav")),
    navTexts,
    firstHref: links[0]?.href || null,
    firstName: links[0]?.text || null,
    linkCount: links.length,
  };
});

let navClick = { ok: false };
if (list.hasNav) {
  const beforeNav = new URL(page.url()).pathname;
  const navTarget = page.locator(".ks-page-nav a, .ks-page-side a").filter({ hasText: /服务|容器组|概览/ }).first();
  if (await navTarget.count()) {
    await navTarget.click();
    await page.waitForTimeout(1500);
    const afterNav = new URL(page.url()).pathname;
    navClick = {
      ok: afterNav !== beforeNav,
      path: afterNav,
    };
    await page.screenshot({ path: `${EVID}/p53-nav.png`, fullPage: true });
    await page.goto(`${BASE}${prefix}/deployments`, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForFunction(() => /总数[：:]\s*\d+/.test(document.getElementById("root")?.innerText || ""), {
      timeout: 25000,
    });
    await page.waitForTimeout(1000);
  }
}

let detail = { ok: false };
const row = page.locator("a[href*='/deployments/']").filter({ hasNot: page.locator("text=/创建/") });
const hrefCandidate = list.firstHref;
if (hrefCandidate) {
  const abs = hrefCandidate.startsWith("http") ? hrefCandidate : `${BASE}${hrefCandidate}`;
  await page.goto(abs, { waitUntil: "domcontentloaded", timeout: 45000 });
} else if (await row.count()) {
  await row.first().click();
}
await page.waitForTimeout(2500);
await page.screenshot({ path: `${EVID}/p53-detail.png`, fullPage: true });
detail = await page.evaluate(() => {
  const path = location.pathname;
  const text = document.getElementById("root")?.innerText || "";
  const onDetail = /\/deployments\/[^/]+/.test(path) && !path.endsWith("/deployments");
  return {
    path,
    onDetail,
    hasResourceStatus: /运行中|等待中|失败|已停止|更新中|容器组|副本|镜像/.test(text),
    hasSide: Boolean(document.querySelector(".ks-page-side, .ks-page-nav")),
    textHead: text.replace(/\s+/g, " ").slice(0, 180),
  };
});
detail.ok = Boolean(detail.onDetail);

const checks = {
  loginRealUser: identity.hasUser && !identity.fakeRecovered,
  overviewMatchesList:
    overview.dep != null && list.total != null && overview.dep === list.total && list.total > 0,
  sidebarVisible: Boolean(list.hasSide && list.hasNav),
  navUsable: Boolean(navClick.ok),
  detailOpened: Boolean(detail.ok),
};

const report = {
  identity: { hasUser: identity.hasUser, fakeRecovered: identity.fakeRecovered, path: identity.path },
  overview: { path: redact(overview.path), dep: overview.dep, hasSide: overview.hasSide, navLinks: overview.navLinks },
  list: {
    path: redact(list.path),
    total: list.total,
    hasSide: list.hasSide,
    hasNav: list.hasNav,
    navTexts: list.navTexts.map((t) => t.slice(0, 80)),
    linkCount: list.linkCount,
    firstName: list.firstName ? "<name>" : null,
    firstHref: redact(list.firstHref || ""),
  },
  navClick: { ok: navClick.ok, path: redact(navClick.path || "") },
  detail: {
    ok: detail.ok,
    onDetail: detail.onDetail,
    hasResourceStatus: detail.hasResourceStatus,
    hasSide: detail.hasSide,
    path: redact(detail.path),
    textHead: detail.textHead,
  },
  checks,
  errors: errors.slice(0, 8),
  pass: Object.values(checks).every(Boolean),
};
fs.writeFileSync(`${ROOT}/PHASE5.3-VERIFY.json`, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ pass: report.pass, checks, overviewDep: overview.dep, listTotal: list.total }, null, 2));
await browser.close();
if (!report.pass) process.exit(1);
