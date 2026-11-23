#!/usr/bin/env node
import { chromium } from "playwright";
import fs from "node:fs";

const BASE = process.env.PHASE5_BASE || "http://127.0.0.1:8108";
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
const context = await browser.newContext();
const page = await context.newPage();
await page.goto(`${BASE}/login`, { waitUntil: "load" });
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
await waitResp;
await page.waitForTimeout(500);

const probe = await page.evaluate(async () => {
  const paths = [
    "/kapis/version",
    "/kapis/iam.kubesphere.io/v1beta1/users",
    "/kapis/config.kubesphere.io/v1alpha2/configs/configz",
    "/kapis/resources.kubesphere.io/v1alpha3/users",
    "/kapis/tenant.kubesphere.io/v1beta1/workspacetemplates",
    "/kapis/iam.kubesphere.io/v1beta1/users?limit=1",
  ];
  const out = [];
  for (const p of paths) {
    try {
      const r = await fetch(p, { credentials: "include" });
      const text = await r.text();
      let keys = [];
      let kind = null;
      let hasMetadataName = false;
      let itemCount = null;
      try {
        const j = JSON.parse(text);
        keys = Object.keys(j).slice(0, 12);
        kind = j.kind || null;
        hasMetadataName = Boolean(j.metadata && j.metadata.name);
        itemCount = Array.isArray(j.items) ? j.items.length : null;
      } catch {}
      out.push({ path: p, http: r.status, keys, kind, hasMetadataName, itemCount, jsonish: text.trim().startsWith("{") });
    } catch (e) {
      out.push({ path: p, error: "fetch-failed" });
    }
  }
  const token = (document.cookie.match(/(?:^|; )token=([^;]*)/) || [])[1] || "";
  const tokenParts = token ? decodeURIComponent(token).split(".").length : 0;
  let jwtHasUsername = false;
  if (tokenParts === 3) {
    try {
      const payload = JSON.parse(atob(decodeURIComponent(token).split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
      jwtHasUsername = Boolean(payload.username || payload.sub || payload.preferred_username);
    } catch {}
  }
  return { endpoints: out, tokenParts, jwtHasUsername };
});

fs.writeFileSync(`${ROOT}/PHASE5.1-WHOAMI.json`, JSON.stringify(probe, null, 2) + "\n");
console.log(JSON.stringify(probe, null, 2));
await browser.close();
