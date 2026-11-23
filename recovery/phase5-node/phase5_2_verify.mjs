#!/usr/bin/env node
import { chromium } from "playwright";
import fs from "node:fs";

const BASE = "http://127.0.0.1:8108";
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
  "/dashboard",
  "/clusters/default/deployments",
  "/workspaces/dev-workspace/overview",
  "/workspaces/dev-workspace/projects",
  "/workspaces/system-workspace/overview",
  "/settings",
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const identity = await (await page.goto(`${BASE}/__phase5`, { waitUntil: "domcontentloaded" })).json();
await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login" && window.globals?.user, { timeout: 25000 });

const discovered = await page.evaluate(async () => {
  const r = await fetch("/kapis/resources.kubesphere.io/v1alpha3/namespaces?limit=20", { credentials: "include" });
  const body = await r.json().catch(() => ({}));
  const items = body.items || [];
  const hit = items.find((x) => {
    const ws = x?.metadata?.labels?.["kubesphere.io/workspace"];
    const name = x?.metadata?.name;
    return ws && name && ws !== "system-workspace" && !String(name).startsWith("kubesphere-");
  });
  return {
    http: r.status,
    workspace: hit?.metadata?.labels?.["kubesphere.io/workspace"] || null,
    namespace: hit?.metadata?.name || null,
  };
});
if (discovered.workspace && discovered.namespace) {
  TARGETS.push(
    `/${discovered.workspace}/clusters/default/projects/${discovered.namespace}/overview`
  );
  TARGETS.push(
    `/${discovered.workspace}/clusters/default/projects/${discovered.namespace}/deployments`
  );
}

const results = [];
for (const path of TARGETS) {
  const pageErrors = [];
  const rejects = [];
  const onErr = (e) => pageErrors.push(String(e).slice(0, 240));
  page.on("pageerror", onErr);
  page.on("pageerror", () => {});
  await page.goto(`${BASE}${path}`, { waitUntil: "domcontentloaded", timeout: 45000 });
  try {
    await page.waitForFunction(() => {
      const root = document.getElementById("root");
      return root && (root.innerText || "").trim().length > 12;
    }, { timeout: 15000 });
  } catch {}
  const shot = `p52-fix-${path.replace(/[^\w]+/g, "-").replace(/^-|-$/g, "")}`;
  await page.screenshot({ path: `${EVIDENCE}/${shot}.png`, fullPage: true }).catch(() => null);
  const info = await page.evaluate(() => {
    const root = document.getElementById("root");
    const text = root ? root.innerText || "" : "";
    return {
      path: location.pathname,
      htmlLen: root ? root.innerHTML.length : 0,
      user: Boolean(window.globals?.user),
      recovered: window.globals?.user?.username === "recovered",
      text: text.slice(0, 220),
      notFound: /Not Found/i.test(text.slice(0, 200)),
    };
  });
  page.off("pageerror", onErr);
  const pass = info.htmlLen > 100 && !info.notFound && info.user && !info.recovered && (info.text || "").trim().length > 12;
  results.push({
    requested: path,
    ...info,
    pageErrors: pageErrors.filter((t) => !t.includes("loaded of")).slice(0, 4),
    verdict: pass ? (pageErrors.length ? "pass-with-pageerror" : "pass") : "fail",
  });
}

const out = {
  identity,
  discovered: {
    http: discovered.http,
    hasWorkspace: Boolean(discovered.workspace),
    hasNamespace: Boolean(discovered.namespace),
    workspaceLen: discovered.workspace ? String(discovered.workspace).length : 0,
    namespaceLen: discovered.namespace ? String(discovered.namespace).length : 0,
  },
  results,
};
fs.writeFileSync(`${ROOT}/PHASE5.2-VERIFY.json`, JSON.stringify(out, null, 2) + "\n");
console.log(JSON.stringify({
  mainJs: identity.mainJs,
  discovered: out.discovered,
  results: results.map((r) => ({
    requested: r.requested,
    path: r.path,
    htmlLen: r.htmlLen,
    verdict: r.verdict,
    notFound: r.notFound,
    text: (r.text || "").replace(/\s+/g, " ").slice(0, 90),
    errors: r.pageErrors.slice(0, 2),
  })),
}, null, 2));
await browser.close();
