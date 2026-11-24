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
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => {
  errors.push({
    message: String(e.message || e).slice(0, 300),
    stack: String(e.stack || "").slice(0, 1500),
  });
});
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push({ console: msg.text().slice(0, 400) });
});

await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login", { timeout: 25000 });

const hit = await page.evaluate(async () => {
  const r = await fetch("/kapis/resources.kubesphere.io/v1alpha3/namespaces?limit=30", { credentials: "include" });
  const body = await r.json().catch(() => ({}));
  const ns = (body.items || []).find((x) => {
    const ws = x?.metadata?.labels?.["kubesphere.io/workspace"];
    const name = x?.metadata?.name;
    return ws && name && ws !== "system-workspace" && !String(name).startsWith("kubesphere-");
  });
  const workspace = ns.metadata.labels["kubesphere.io/workspace"];
  const namespace = ns.metadata.name;
  const pr = await fetch(`/kapis/resources.kubesphere.io/v1alpha3/namespaces/${namespace}/pods?limit=5`, { credentials: "include" });
  const pods = await pr.json().catch(() => ({}));
  const name = pods.items?.[0]?.metadata?.name;
  return { workspace, namespace, name };
});
const url = `${BASE}/${hit.workspace}/clusters/default/projects/${hit.namespace}/pods/${hit.name}`;
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
await page.waitForTimeout(4000);

const probe = await page.evaluate(async () => {
  const raw = await fetch(location.pathname.replace(/^\/[^/]+\/clusters\/default\/projects/, "/api/v1/namespaces").replace(/\/pods\//, "/pods/"), { credentials: "include" }).then((r) => r.json()).catch((e) => ({ err: String(e) }));
  return {
    path: location.pathname,
    htmlLen: document.getElementById("root")?.innerHTML.length || 0,
    textHead: (document.getElementById("root")?.innerText || "").replace(/\s+/g, " ").slice(0, 200),
    hasLoading: Boolean(document.querySelector(".ks-page-loading")),
    podKeys: raw && raw.metadata ? Object.keys(raw.spec || {}) : Object.keys(raw || {}),
    hasVolumes: Array.isArray(raw?.spec?.volumes),
    volumeCount: raw?.spec?.volumes?.length ?? null,
  };
});

fs.writeFileSync(`${ROOT}/PHASE6-POD-DIAG.json`, JSON.stringify({ hit: { ...hit, workspace: "<ws>", namespace: "<ns>", name: "<name>" }, probe, errors }, null, 2) + "\n");
console.log(JSON.stringify({ probe, errors }, null, 2));
await browser.close();
