#!/usr/bin/env node
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

function cookieNamesFromHeader(header) {
  if (!header) return [];
  return header
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter(Boolean);
}

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
      path: location.pathname,
      href: location.href,
      title: document.title,
      rootChildCount: root ? root.childElementCount : 0,
      text: root ? (root.innerText || "").slice(0, 500) : "",
      userPresent: Boolean(window.globals?.user),
      usernameLen: window.globals?.user?.username ? String(window.globals.user.username).length : 0,
      userIsRecovered: window.globals?.user?.username === "recovered",
      hasGlobalrole: Boolean(window.globals?.user?.globalrole),
      sessionKeyPresent: Boolean(window.localStorage.getItem("ks-recovered-session-user")),
      mainJs: [...document.scripts].map((s) => s.src).find((s) => s.includes("/app.")) || "",
    };
  });
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const pageErrors = [];
const kapisCookieHeaders = [];
const pageApi = [];
page.on("pageerror", (e) => pageErrors.push(String(e)));
page.on("request", (req) => {
  const url = req.url();
  if (!url.includes("/kapis/") && !url.includes("/apis/") && !url.includes("/api/")) return;
  const names = cookieNamesFromHeader(req.headers()["cookie"] || req.headers()["Cookie"] || "");
  if (url.includes("/kapis/version")) {
    kapisCookieHeaders.push({ path: "/kapis/version", cookieNames: names });
  }
  pageApi.push({
    method: req.method(),
    path: url.replace(/^https?:\/\/[^/]+/, "").slice(0, 120),
    cookieNames: names,
  });
});
const apiStatus = [];
page.on("response", (resp) => {
  const url = resp.url();
  if (!url.includes("/kapis/") && !url.includes("/apis/")) return;
  apiStatus.push({
    path: url.replace(/^https?:\/\/[^/]+/, "").slice(0, 120),
    http: resp.status(),
  });
});

await page.goto(`${BASE}/login`, { waitUntil: "load" });
const pre = await page.evaluate(() => ({
  userPresent: Boolean(window.globals?.user),
  recovered: window.globals?.user?.username === "recovered",
  mainJs: [...document.scripts].map((s) => s.src).find((s) => s.includes("/app.")) || "",
}));
const kapisBefore = await kapis(page);
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
let navigated = false;
try {
  await page.waitForFunction(
    () => location.pathname !== "/login" && Boolean(window.globals?.user),
    { timeout: 25000 }
  );
  navigated = true;
} catch {
  navigated = false;
}
await page.waitForTimeout(1500);
const afterLogin = await snap(page, "p51-auto-after-login");
const kapisAfter = await kapis(page);
const whoami = await page.evaluate(async (username) => {
  const r = await fetch(
    `/kapis/iam.kubesphere.io/v1beta1/users/${encodeURIComponent(username)}`,
    { credentials: "include" }
  );
  let nameLen = 0;
  let kind = null;
  try {
    const body = await r.json();
    nameLen = body?.metadata?.name ? String(body.metadata.name).length : 0;
    kind = body?.kind || body?.apiVersion || null;
  } catch {}
  return { http: r.status, nameLen, kind };
}, process.env.KS_TEST_USERNAME || "");

await page.goto(`${BASE}/settings`, { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(2000);
const settings = await snap(page, "p51-auto-settings");
await page.reload({ waitUntil: "load" });
await page.waitForTimeout(2500);
const settingsRefresh = await snap(page, "p51-auto-settings-refresh");
await page.goto(`${BASE}/access`, { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(2000);
const access = await snap(page, "p51-auto-access");

const out = {
  pre: {
    userPresent: pre.userPresent,
    recovered: pre.recovered,
    mainJs: pre.mainJs.split("/").pop(),
  },
  kapisBefore,
  navigated,
  afterLogin,
  kapisAfter,
  whoami,
  settings,
  settingsRefresh,
  access,
  cookieNames: (await context.cookies()).map((c) => c.name),
  kapisCookieHeaders: kapisCookieHeaders.slice(-4),
  pageApiSample: pageApi.filter((x) => x.path.includes("/settings") || x.path.includes("/access") || x.path.includes("/users/")).slice(0, 20),
  apiStatusSample: apiStatus.filter((x) => x.http >= 400).slice(0, 20),
  pageErrors: pageErrors.slice(0, 8),
};
fs.writeFileSync(`${ROOT}/PHASE5.1-ACCEPT.json`, JSON.stringify(out, null, 2) + "\n");
console.log(JSON.stringify({
  shimUserBefore: pre.userPresent,
  recoveredBefore: pre.recovered,
  mainJs: (pre.mainJs || afterLogin.mainJs || "").split("/").pop(),
  kapisBefore: kapisBefore.http,
  navigatedOffLogin: navigated,
  afterPath: afterLogin.path,
  afterUserPresent: afterLogin.userPresent,
  afterRecovered: afterLogin.userIsRecovered,
  afterText: (afterLogin.text || "").slice(0, 160),
  kapisAfter: kapisAfter.http,
  whoamiHttp: whoami.http,
  whoamiNameLen: whoami.nameLen,
  settingsPath: settings.path,
  settingsUser: settings.userPresent,
  settingsRecovered: settings.userIsRecovered,
  settingsText: (settings.text || "").slice(0, 160),
  settingsRefreshPath: settingsRefresh.path,
  settingsRefreshUser: settingsRefresh.userPresent,
  accessPath: access.path,
  accessText: (access.text || "").slice(0, 160),
  cookieNames: out.cookieNames,
  lastKapisCookie: kapisCookieHeaders.slice(-1)[0] || null,
  pageErrors: pageErrors.slice(0, 5),
}, null, 2));
await browser.close();
