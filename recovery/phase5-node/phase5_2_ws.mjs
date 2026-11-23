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
await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login" && window.globals?.user, { timeout: 25000 });

const paths = [
  "/workspaces/system-workspace/overview",
  "/workspaces/dev-workspace/overview",
  "/workspaces/dev-workspace/projects",
  "/workspaces/public-workspace/projects",
];
const out = [];
for (const p of paths) {
  await page.goto(`${BASE}${p}`, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForTimeout(8000);
  const info = await page.evaluate(() => {
    const root = document.getElementById("root");
    return {
      path: location.pathname,
      rootChildren: root ? root.childElementCount : -1,
      htmlLen: root ? root.innerHTML.length : 0,
      textLen: root ? (root.innerText || "").trim().length : 0,
      text: root ? (root.innerText || "").slice(0, 180) : "",
      hasRules: Boolean(window.globals?.user?.workspaceRules && Object.keys(window.globals.user.workspaceRules).length),
      ruleKeys: window.globals?.user?.workspaceRules ? Object.keys(window.globals.user.workspaceRules) : [],
      clusterRuleKeys: window.globals?.user?.clusterRules ? Object.keys(window.globals.user.clusterRules) : [],
    };
  });
  const shot = `p52-ws-${p.replace(/[^\w]+/g, "-").replace(/^-|-$/g, "")}`;
  await page.screenshot({ path: `${ROOT}/phase5-evidence/${shot}.png`, fullPage: true }).catch(() => null);
  out.push({ requested: p, ...info });
}

await page.goto(`${BASE}/clusters/default/projects`, { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(2500);
const clicked = await page.evaluate(() => {
  const link = document.querySelector("table a, .ks-table a, a[href*='projects']");
  if (!link) return { ok: false, href: null };
  const href = link.getAttribute("href") || "";
  link.click();
  return { ok: true, href };
});
await page.waitForTimeout(5000);
const afterClick = await page.evaluate(() => {
  const root = document.getElementById("root");
  return {
    path: location.pathname,
    text: root ? (root.innerText || "").slice(0, 200) : "",
    htmlLen: root ? root.innerHTML.length : 0,
  };
});
await page.screenshot({ path: `${ROOT}/phase5-evidence/p52-project-click.png`, fullPage: true }).catch(() => null);

fs.writeFileSync(`${ROOT}/PHASE5.2-WS.json`, JSON.stringify({ out, clicked, afterClick }, null, 2) + "\n");
console.log(JSON.stringify({
  out: out.map((r) => ({
    requested: r.requested,
    path: r.path,
    htmlLen: r.htmlLen,
    textLen: r.textLen,
    text: (r.text || "").replace(/\s+/g, " ").slice(0, 80),
    ruleKeys: r.ruleKeys,
    clusterRuleKeys: r.clusterRuleKeys,
  })),
  clicked,
  afterClick: { path: afterClick.path, htmlLen: afterClick.htmlLen, text: (afterClick.text || "").replace(/\s+/g, " ").slice(0, 80) },
}, null, 2));
await browser.close();
