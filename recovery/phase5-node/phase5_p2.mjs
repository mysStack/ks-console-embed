#!/usr/bin/env node
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.PHASE5_BASE || "http://127.0.0.1:8108";
const ROOT = "/home/bruce/code/ks-develop/kse-console-v3/recovery";
const EVIDENCE = path.join(ROOT, "phase5-evidence");
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
    const text = await r.text();
    let gitVersion = null;
    try {
      gitVersion = JSON.parse(text).gitVersion || null;
    } catch {}
    return { http: r.status, gitVersion };
  });
}

async function snapshot(page, name) {
  const shot = path.join(EVIDENCE, `${name}.png`);
  await page.screenshot({ path: shot, fullPage: true }).catch(() => null);
  return page.evaluate((mainJs) => {
    const root = document.getElementById("root");
    const name = window.globals?.user?.username || "";
    const scripts = [...document.scripts].map((s) => s.src);
    return {
      href: location.href,
      title: document.title,
      rootChildCount: root ? root.childElementCount : 0,
      text: root ? (root.innerText || "").slice(0, 500) : "",
      userIsRecovered: name === "recovered",
      userPresent: Boolean(name),
      hasMainScript: scripts.some((s) => s.includes(mainJs)),
      overlayText: (document.body && document.body.innerText || "").includes("Uncaught") ? "has-uncaught" : "",
    };
  }, "app.f61e4774.js");
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const pageErrors = [];
page.on("pageerror", (e) => pageErrors.push(String(e)));

await page.goto(`${BASE}/__phase5`, { waitUntil: "domcontentloaded" });
const ident = await page.evaluate(async () => {
  const r = await fetch("/__phase5");
  return { http: r.status, json: await r.json(), artifact: r.headers.get("x-recovery-artifact") };
});

await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.waitForTimeout(800);
const before = await kapis(page);
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
const resp = await waitResp;
const raw = await resp.text();
let parsed = null;
try {
  parsed = JSON.parse(raw);
} catch {
  parsed = { parse: "not-json", len: raw.length };
}
const login = {
  http: resp.status(),
  apiOrigin: resp.headers()["x-recovery-api-origin"] || "",
  jsonKeys: parsed && typeof parsed === "object" ? Object.keys(parsed) : [],
  jsonStatus: parsed && parsed.status != null ? parsed.status : null,
  jsonReason: parsed && parsed.reason ? parsed.reason : null,
};
await page.waitForTimeout(1000);
const after = await kapis(page);
await page.goto(`${BASE}/dashboard`, { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(2500);
const dashboard = await snapshot(page, "p2-dashboard-after-login");
await page.goto(`${BASE}/clusters/default/deployments`, { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(2500);
const deployments = await snapshot(page, "p2-deployments-after-login");
await browser.close();

const out = {
  ident,
  before,
  after,
  login,
  dashboard,
  deployments,
  pageErrors: pageErrors.slice(0, 10),
  authCookieWorked: before.http === 403 && after.http === 200,
};
fs.writeFileSync(path.join(ROOT, "PHASE5-P2.json"), JSON.stringify(out, null, 2) + "\n");
console.log(JSON.stringify({
  artifact: ident.artifact,
  authCookieWorked: out.authCookieWorked,
  kapisBefore: before.http,
  kapisAfter: after.http,
  gitVersion: after.gitVersion,
  loginHttp: login.http,
  jsonStatus: login.jsonStatus,
  jsonKeys: login.jsonKeys,
  dashboardUserIsRecovered: dashboard.userIsRecovered,
  dashboardText: (dashboard.text || "").slice(0, 160),
  deploymentsText: (deployments.text || "").slice(0, 160),
  pageErrors: pageErrors.slice(0, 5),
}, null, 2));
