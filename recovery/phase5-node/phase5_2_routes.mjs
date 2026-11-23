#!/usr/bin/env node
/**
 * Phase 5.2 / M3: authenticated core-route smoke on 8108.
 * Does not print credentials. Does not touch 8099. Does not mutate the cluster.
 */
import { chromium } from "playwright";
import fs from "node:fs";

const BASE = process.env.PHASE5_BASE || "http://127.0.0.1:8108";
const ROOT = "/home/bruce/code/ks-develop/kse-console-v3/recovery";
const EVIDENCE = `${ROOT}/phase5-evidence`;
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

const CORE_ROUTES = [
  { id: "dashboard", path: "/dashboard" },
  { id: "support", path: "/support" },
  { id: "clusters", path: "/clusters" },
  { id: "cluster-overview", path: "/clusters/default/overview" },
  { id: "cluster-deployments", path: "/clusters/default/deployments" },
  { id: "cluster-statefulsets", path: "/clusters/default/statefulsets" },
  { id: "cluster-pods", path: "/clusters/default/pods" },
  { id: "cluster-projects", path: "/clusters/default/projects" },
  { id: "cluster-nodes", path: "/clusters/default/nodes" },
  { id: "cluster-volumes", path: "/clusters/default/volumes" },
  { id: "cluster-services", path: "/clusters/default/services" },
  { id: "access", path: "/access" },
  { id: "settings", path: "/settings" },
  { id: "workspace-home", path: "/workspaces/system-workspace" },
  { id: "legacy-project-deployments", path: "/system-workspace/clusters/default/projects/default/deployments" },
];

async function snap(page, name) {
  const file = `${EVIDENCE}/p52-${name}.png`;
  await page.screenshot({ path: file, fullPage: true }).catch(() => null);
  return page.evaluate(() => {
    const root = document.getElementById("root");
    const text = root ? root.innerText || "" : "";
    const h1 = document.querySelector("h1, .h1");
    return {
      path: location.pathname,
      href: location.href,
      rootChildCount: root ? root.childElementCount : 0,
      text: text.slice(0, 450),
      h1: h1 ? (h1.innerText || "").slice(0, 80) : "",
      userPresent: Boolean(window.globals?.user),
      userIsRecovered: window.globals?.user?.username === "recovered",
      bouncedToLogin: location.pathname === "/login",
      notFound: /Not Found/i.test(text.slice(0, 200)) || (h1 && /Not Found/i.test(h1.innerText || "")),
    };
  });
}

function judge(shot, pageErrors, api4xx) {
  if (shot.bouncedToLogin) return "fail-login-guard";
  if (shot.notFound) return "fail-not-found";
  if (!shot.rootChildCount || (shot.text || "").trim().length < 8) return "fail-blank";
  if (shot.userIsRecovered) return "fail-fake-user";
  if (!shot.userPresent) return "fail-no-user";
  if (pageErrors.some((e) => /ChunkLoadError/i.test(e))) return "fail-chunk";
  if (pageErrors.length) return "pass-with-pageerror";
  if (api4xx.length) return "pass-with-api-4xx";
  return "pass";
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const identity = await (await page.goto(`${BASE}/__phase5`, { waitUntil: "domcontentloaded" })).json();

await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(
  () => location.pathname !== "/login" && Boolean(window.globals?.user),
  { timeout: 25000 }
);
await page.waitForTimeout(800);
const afterLogin = await snap(page, "login-dashboard");

const discovered = await page.evaluate(async () => {
  const out = { workspace: null, namespace: null, deployment: null, http: {} };
  const tryFetch = async (url) => {
    const r = await fetch(url, { credentials: "include" });
    let body = null;
    try {
      body = await r.json();
    } catch {}
    return { http: r.status, body };
  };
  const dep = await tryFetch("/kapis/resources.kubesphere.io/v1alpha3/deployments?limit=1");
  out.http.deployments = dep.http;
  const item = dep.body?.items?.[0];
  if (item?.metadata) {
    out.namespace = item.metadata.namespace || null;
    out.deployment = item.metadata.name || null;
    out.workspace = item.metadata.labels?.["kubesphere.io/workspace"] || null;
  }
  if (!out.workspace) {
    const ws = await tryFetch("/kapis/tenant.kubesphere.io/v1beta1/workspacetemplates?limit=5");
    out.http.workspaces = ws.http;
    const names = (ws.body?.items || []).map((x) => x?.metadata?.name).filter(Boolean);
    out.workspace = names.find((n) => n !== "system-workspace") || names[0] || null;
  }
  if (!out.namespace) {
    const ns = await tryFetch("/kapis/resources.kubesphere.io/v1alpha3/namespaces?limit=10");
    out.http.namespaces = ns.http;
    const items = ns.body?.items || [];
    const labeled = items.find((x) => x?.metadata?.labels?.["kubesphere.io/workspace"]);
    out.namespace = labeled?.metadata?.name || items.find((x) => x?.metadata?.name && x.metadata.name !== "default")?.metadata?.name || null;
    if (!out.workspace) {
      out.workspace = labeled?.metadata?.labels?.["kubesphere.io/workspace"] || null;
    }
  }
  return out;
});

const extra = [];
if (discovered.workspace && discovered.namespace) {
  extra.push({
    id: "project-overview",
    path: `/${discovered.workspace}/clusters/default/projects/${discovered.namespace}/overview`,
  });
  extra.push({
    id: "project-deployments",
    path: `/${discovered.workspace}/clusters/default/projects/${discovered.namespace}/deployments`,
  });
}

const results = [];
for (const item of [...CORE_ROUTES, ...extra]) {
  const pageErrors = [];
  const api4xx = [];
  const onErr = (e) => pageErrors.push(String(e));
  const onResp = (resp) => {
    const url = resp.url();
    if (!(url.includes("/kapis/") || url.includes("/apis/"))) return;
    const st = resp.status();
    if (st >= 400) {
      api4xx.push({
        http: st,
        path: url.replace(/^https?:\/\/[^/]+/, "").slice(0, 140),
      });
    }
  };
  page.on("pageerror", onErr);
  page.on("response", onResp);
  try {
    await page.goto(`${BASE}${item.path}`, { waitUntil: "load", timeout: 45000 });
    await page.waitForTimeout(1800);
  } catch (err) {
    pageErrors.push(`goto: ${String(err).slice(0, 180)}`);
  }
  const shot = await snap(page, item.id);
  page.off("pageerror", onErr);
  page.off("response", onResp);
  results.push({
    id: item.id,
    requested: item.path,
    ...shot,
    pageErrors: pageErrors.slice(0, 6),
    api4xx: api4xx.slice(0, 8),
    verdict: judge(shot, pageErrors, api4xx),
  });
}

let detail = null;
if (discovered.deployment) {
  await page.goto(`${BASE}/clusters/default/deployments`, { waitUntil: "load", timeout: 45000 });
  await page.waitForTimeout(1500);
  const clicked = await page.evaluate((name) => {
    const nodes = [...document.querySelectorAll("a, td, span, div")];
    const el = nodes.find((n) => (n.innerText || "").trim() === name);
    if (!el) return false;
    el.click();
    return true;
  }, discovered.deployment);
  await page.waitForTimeout(2000);
  const shot = await snap(page, "deployment-detail-click");
  detail = {
    clicked,
    requestedNameLen: discovered.deployment ? String(discovered.deployment).length : 0,
    ...shot,
    verdict: clicked && !shot.bouncedToLogin && !shot.notFound && shot.rootChildCount ? "pass" : "fail",
  };
}

const summary = {};
for (const r of results) {
  summary[r.verdict] = (summary[r.verdict] || 0) + 1;
}

const out = {
  identity,
  afterLogin: {
    path: afterLogin.path,
    userPresent: afterLogin.userPresent,
    userIsRecovered: afterLogin.userIsRecovered,
    bouncedToLogin: afterLogin.bouncedToLogin,
    text: afterLogin.text.slice(0, 180),
  },
  discovered: {
    hasWorkspace: Boolean(discovered.workspace),
    hasNamespace: Boolean(discovered.namespace),
    hasDeployment: Boolean(discovered.deployment),
    http: discovered.http,
    workspaceLen: discovered.workspace ? String(discovered.workspace).length : 0,
    namespaceLen: discovered.namespace ? String(discovered.namespace).length : 0,
  },
  cookieNames: (await context.cookies()).map((c) => c.name),
  summary,
  results,
  detail,
};
fs.writeFileSync(`${ROOT}/PHASE5.2-RUN.json`, JSON.stringify(out, null, 2) + "\n");
console.log(JSON.stringify({
  mainJs: identity.mainJs,
  artifact: identity.artifact,
  afterPath: afterLogin.path,
  recovered: afterLogin.userIsRecovered,
  summary,
  routes: results.map((r) => ({
    id: r.id,
    path: r.path,
    verdict: r.verdict,
    notFound: r.notFound,
    bounced: r.bouncedToLogin,
    errors: r.pageErrors.slice(0, 2),
    text: (r.text || "").replace(/\s+/g, " ").slice(0, 90),
  })),
  detail: detail && {
    clicked: detail.clicked,
    path: detail.path,
    verdict: detail.verdict,
    text: (detail.text || "").replace(/\s+/g, " ").slice(0, 90),
  },
}, null, 2));
await browser.close();
