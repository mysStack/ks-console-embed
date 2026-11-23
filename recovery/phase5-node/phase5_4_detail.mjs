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
const apis = [];
page.on("response", async (resp) => {
  const url = resp.url();
  if (!(url.includes("/kapis/") || url.includes("/apis/") || url.includes("/api/"))) return;
  const path = url.replace(/^https?:\/\/[^/]+/, "");
  if (!/pods|replicasets|deployments|namespaces/.test(path)) return;
  let total = null;
  let items = null;
  try {
    const body = await resp.json();
    total = body.totalItems ?? body.totalCount ?? null;
    items = Array.isArray(body.items) ? body.items.length : null;
  } catch {}
  apis.push({
    http: resp.status(),
    total,
    items,
    path: path.replace(/\/workspaces\/[^/]+/g, "/workspaces/<ws>")
      .replace(/\/namespaces\/[^/]+/g, "/namespaces/<ns>")
      .replace(/\/deployments\/[^/?]+/g, "/deployments/<name>")
      .replace(/\/projects\/[^/]+/g, "/projects/<ns>")
      .slice(0, 220),
  });
});

await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login", { timeout: 25000 });

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
const prefix = `/${discovered.workspace}/clusters/default/projects/${discovered.namespace}`;
await page.goto(`${BASE}${prefix}/deployments`, { waitUntil: "domcontentloaded", timeout: 45000 });
await page.waitForFunction(() => /总数[：:]\s*\d+/.test(document.getElementById("root")?.innerText || ""), {
  timeout: 25000,
});
await page.waitForTimeout(800);
const href = await page.evaluate(() => {
  const a = Array.from(document.querySelectorAll("a[href]")).find((el) =>
    /\/deployments\/[^/]+/.test(el.getAttribute("href") || "") &&
    !(el.getAttribute("href") || "").endsWith("/deployments")
  );
  return a ? a.getAttribute("href") : null;
});
apis.length = 0;
await page.goto(`${BASE}${href}`, { waitUntil: "domcontentloaded", timeout: 45000 });
await page.waitForTimeout(4000);
const snap = await page.evaluate(() => {
  const text = (document.getElementById("root")?.innerText || "").replace(/\s+/g, " ");
  const m = text.match(/容器组[\s\S]{0,40}总数[：:]\s*(\d+)/) || text.match(/总数[：:]\s*(\d+)/);
  return {
    path: location.pathname.replace(/\/workspaces\/[^/]+/g, "/<ws>")
      .replace(/\/projects\/[^/]+/g, "/projects/<ns>")
      .replace(/\/deployments\/[^/]+/g, "/deployments/<name>"),
    podTotal: m ? Number(m[1]) : null,
    hasEmpty: text.includes("未发现资源"),
    text: text.slice(0, 280),
  };
});
console.log(JSON.stringify({ snap, apis: apis.slice(0, 30) }, null, 2));
await browser.close();
