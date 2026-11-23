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
await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login", { timeout: 25000 });
await page.goto(`${BASE}/dev-workspace/clusters/default/projects/dev-ewms-web/overview`, {
  waitUntil: "domcontentloaded",
});
await page.waitForTimeout(8000);
const info = await page.evaluate(() => {
  const rules = window.globals?.user?.projectRules || {};
  const clusterKeys = Object.keys(rules);
  const nested = {};
  clusterKeys.forEach((k) => {
    nested[k] = rules[k] && typeof rules[k] === "object" ? Object.keys(rules[k]) : typeof rules[k];
  });
  const navs = window.globals?.app?.getProjectNavs
    ? window.globals.app.getProjectNavs({
        cluster: "default",
        workspace: "dev-workspace",
        project: "dev-ewms-web",
      })
    : null;
  const cfgLen = Array.isArray(window.globals?.config?.projectNavs)
    ? window.globals.config.projectNavs.length
    : null;
  return {
    clusterKeys,
    nestedCounts: Object.fromEntries(Object.entries(nested).map(([k, v]) => [k, Array.isArray(v) ? v.length : v])),
    hasExact: Boolean(rules.default && rules.default["dev-ewms-web"]),
    navGroupCount: Array.isArray(navs) ? navs.length : navs,
    firstNav: Array.isArray(navs) && navs[0] ? (navs[0].items || []).map((i) => i.name).slice(0, 8) : [],
    projectNavsLen: cfgLen,
    disableAuthorization: Boolean(window.globals?.config?.disableAuthorization),
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
