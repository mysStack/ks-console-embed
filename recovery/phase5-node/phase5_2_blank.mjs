#!/usr/bin/env node
import { chromium } from "playwright";
import fs from "node:fs";

const BASE = process.env.PHASE5_BASE || "http://127.0.0.1:8108";
const ROOT = "/home/bruce/code/ks-develop/kse-console-v3/recovery";
const EVIDENCE = `${ROOT}/phase5-evidence`;

function loadBashrcVar(name) {
  if (process.env[name]) return;
  const text = fs.readFileSync("/home/bruce/.bashrc", "utf8");
  const re = new RegExp(`^(?:export\\s+)?${name}=(['"]?)([^'"\\n]*)\\1`, "m");
  const m = text.match(re);
  if (m && m[2]) process.env[name] = m[2];
}
loadBashrcVar("KS_TEST_USERNAME");
loadBashrcVar("KS_TEST_PASSWORD");

const TARGETS = [
  "/settings",
  "/settings/base-info",
  "/workspaces/system-workspace",
  "/clusters/default/volumes",
  "/clusters/default/projects",
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();

await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(
  () => location.pathname !== "/login" && Boolean(window.globals?.user),
  { timeout: 25000 }
);

const results = [];
for (const path of TARGETS) {
  const failedJs = [];
  const consoleErr = [];
  const pageErrors = [];
  const jsHttp = [];
  const onFail = (req) => {
    const url = req.url();
    if (url.includes(".js")) failedJs.push({ url: url.replace(BASE, ""), error: req.failure()?.errorText });
  };
  const onConsole = (msg) => {
    if (msg.type() === "error") consoleErr.push(msg.text().slice(0, 240));
  };
  const onPage = (err) => pageErrors.push(String(err).slice(0, 240));
  const onResp = (resp) => {
    const url = resp.url();
    if (url.includes(".js") && resp.status() >= 400) {
      jsHttp.push({ path: url.replace(/^https?:\/\/[^/]+/, "").slice(0, 120), http: resp.status() });
    }
  };
  page.on("requestfailed", onFail);
  page.on("console", onConsole);
  page.on("pageerror", onPage);
  page.on("response", onResp);
  await page.goto(`${BASE}${path}`, { waitUntil: "domcontentloaded", timeout: 45000 });
  try {
    await page.waitForFunction(
      () => {
        const root = document.getElementById("root");
        const text = root ? (root.innerText || "").trim() : "";
        return text.length > 12;
      },
      { timeout: 12000 }
    );
  } catch {}
  const shotName = `p52-retry-${path.replace(/[^\w]+/g, "-").replace(/^-|-$/g, "")}`;
  await page.screenshot({ path: `${EVIDENCE}/${shotName}.png`, fullPage: true }).catch(() => null);
  const info = await page.evaluate(() => {
    const root = document.getElementById("root");
    return {
      path: location.pathname,
      rootChildCount: root ? root.childElementCount : 0,
      userPresent: Boolean(window.globals?.user),
      text: root ? (root.innerText || "").slice(0, 220) : "",
    };
  });
  page.off("requestfailed", onFail);
  page.off("console", onConsole);
  page.off("pageerror", onPage);
  page.off("response", onResp);
  results.push({
    requested: path,
    ...info,
    failedJs: failedJs.slice(0, 8),
    jsHttp: jsHttp.slice(0, 8),
    consoleErr: consoleErr.filter((t) => !t.includes("loaded of")).slice(0, 8),
    pageErrors: pageErrors.filter((t) => !t.includes("loaded of")).slice(0, 8),
  });
}

fs.writeFileSync(`${ROOT}/PHASE5.2-BLANK.json`, JSON.stringify(results, null, 2) + "\n");
console.log(JSON.stringify(results.map((r) => ({
  requested: r.requested,
  path: r.path,
  root: r.rootChildCount,
  user: r.userPresent,
  text: (r.text || "").replace(/\s+/g, " ").slice(0, 100),
  failedJs: r.failedJs,
  jsHttp: r.jsHttp,
  consoleErr: r.consoleErr.slice(0, 4),
  pageErrors: r.pageErrors.slice(0, 4),
})), null, 2));
await browser.close();
