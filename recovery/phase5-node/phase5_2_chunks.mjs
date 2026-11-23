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
const js = [];
page.on("response", (resp) => {
  const url = resp.url();
  if (!url.includes(".js")) return;
  js.push({
    path: url.replace(/^https?:\/\/[^/]+/, "").slice(0, 80),
    http: resp.status(),
    type: (resp.headers()["content-type"] || "").slice(0, 40),
  });
});
await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login", { timeout: 25000 });
js.length = 0;
await page.goto(`${BASE}/workspaces/dev-workspace/overview`, { waitUntil: "domcontentloaded", timeout: 45000 });
await page.waitForTimeout(6000);
const info = await page.evaluate(() => {
  const root = document.getElementById("root");
  return {
    path: location.pathname,
    htmlLen: root ? root.innerHTML.length : 0,
    text: root ? (root.innerText || "").slice(0, 120) : "",
    user: Boolean(window.globals?.user),
  };
});
const bad = js.filter((x) => x.http >= 400 || (x.type && x.type.includes("html")));
console.log(JSON.stringify({ info, jsCount: js.length, bad, js: js.slice(-15) }, null, 2));
fs.writeFileSync(
  "/home/bruce/code/ks-develop/kse-console-v3/recovery/PHASE5.2-CHUNKS.json",
  JSON.stringify({ info, js, bad }, null, 2) + "\n"
);
await browser.close();
