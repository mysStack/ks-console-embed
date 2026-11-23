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
const pageErrors = [];
const consoleErr = [];
page.on("pageerror", (e) => pageErrors.push(String(e)));
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErr.push(msg.text().slice(0, 400));
});
await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login", { timeout: 25000 });
pageErrors.length = 0;
consoleErr.length = 0;
await page.goto(`${BASE}/workspaces/dev-workspace/overview`, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(8000);
const info = await page.evaluate(() => {
  const root = document.getElementById("root");
  return {
    path: location.pathname,
    htmlLen: root ? root.innerHTML.length : -1,
    user: Boolean(window.globals?.user),
    hasApp: Boolean(window.globals?.app),
  };
});
console.log(JSON.stringify({ info, pageErrors: pageErrors.slice(0, 12), consoleErr: consoleErr.slice(0, 12) }, null, 2));
await browser.close();
