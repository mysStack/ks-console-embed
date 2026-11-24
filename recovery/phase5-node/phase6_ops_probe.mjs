#!/usr/bin/env node
import { chromium } from "playwright";
import fs from "node:fs";

const BASE = "http://127.0.0.1:8108";
const ROOT = "/home/bruce/code/ks-develop/kse-console-v3/recovery";
const EVID = `${ROOT}/phase5-evidence`;
fs.mkdirSync(EVID, { recursive: true });

function loadBashrcVar(name) {
  if (process.env[name]) return;
  const text = fs.readFileSync("/home/bruce/.bashrc", "utf8");
  const re = new RegExp(`^(?:export\\s+)?${name}=(['"]?)([^'"\\n]*)\\1`, "m");
  const m = text.match(re);
  if (m && m[2]) process.env[name] = m[2];
}
loadBashrcVar("KS_TEST_USERNAME");
loadBashrcVar("KS_TEST_PASSWORD");

function redact(s) {
  return String(s || "")
    .replace(/\/workspaces\/[^/]+/g, "/workspaces/<ws>")
    .replace(/\/projects\/[^/]+/g, "/projects/<ns>")
    .replace(/\/namespaces\/[^/]+/g, "/namespaces/<ns>")
    .replace(/\/deployments\/[^/?]+/g, "/deployments/<name>")
    .replace(/\/statefulsets\/[^/?]+/g, "/statefulsets/<name>")
    .replace(/\/daemonsets\/[^/?]+/g, "/daemonsets/<name>")
    .replace(/\/pods\/[^/?]+/g, "/pods/<name>")
    .replace(/\/services\/[^/?]+/g, "/services/<name>")
    .replace(/\/ingresses\/[^/?]+/g, "/ingresses/<name>")
    .replace(/\/configmaps\/[^/?]+/g, "/configmaps/<name>")
    .replace(/\/secrets\/[^/?]+/g, "/secrets/<name>")
    .replace(/\/containers\/[^/?]+/g, "/containers/<name>");
}

const TYPES = [
  { key: "deployments", path: "deployments", api: "deployments" },
  { key: "statefulsets", path: "statefulsets", api: "statefulsets" },
  { key: "daemonsets", path: "daemonsets", api: "daemonsets" },
  { key: "pods", path: "pods", api: "pods" },
  { key: "services", path: "services", api: "services" },
  { key: "ingresses", path: "ingresses", api: "ingresses" },
  { key: "configmaps", path: "configmaps", api: "configmaps" },
  { key: "secrets", path: "secrets", api: "secrets" },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
const apiHits = [];
page.on("pageerror", (e) => errors.push(redact(String(e.message || e).slice(0, 220))));
page.on("response", (resp) => {
  const url = resp.url();
  if (!/\/(kapis|apis|api)\//.test(url)) return;
  apiHits.push({
    http: resp.status(),
    path: redact(url.replace(/^https?:\/\/[^/]+/, "")).slice(0, 220),
  });
});

function snapApis(since) {
  return apiHits.slice(since).slice(-12);
}

async function snapshot(label) {
  const shot = `${EVID}/p6-ops-${label}.png`;
  await page.screenshot({ path: shot, fullPage: true });
  return page.evaluate(() => {
    const root = document.getElementById("root");
    const text = (root?.innerText || "").replace(/\s+/g, " ");
    const total = text.match(/总数[：:]\s*(\d+)/);
    const tabs = Array.from(document.querySelectorAll(".detail-page-nav a, [class*='navItem']"))
      .map((el) => (el.textContent || "").trim())
      .filter(Boolean)
      .slice(0, 12);
    return {
      path: location.pathname,
      htmlLen: root?.innerHTML.length || 0,
      textHead: text.slice(0, 220),
      total: total ? Number(total[1]) : null,
      hasNav: Boolean(document.querySelector(".ks-page-nav")),
      tabs,
      blank: (root?.innerHTML.length || 0) < 400,
    };
  });
}

await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login", { timeout: 25000 });

const identity = await page.evaluate(() => {
  const u = window.globals && window.globals.user;
  const ks = window.globals && window.globals.ksConfig;
  return {
    hasUser: Boolean(u && u.username),
    fakeRecovered: String((u && u.username) || "") === "recovered",
    ksKeys: ks ? Object.keys(ks).slice(0, 20) : [],
    hasLogging: Boolean(window.globals?.app?.hasKSModule?.("whizard-logging")),
    hasMonitoring: Boolean(window.globals?.app?.hasKSModule?.("whizard-monitoring")),
  };
});

const discovered = await page.evaluate(async () => {
  const r = await fetch("/kapis/resources.kubesphere.io/v1alpha3/namespaces?limit=80", {
    credentials: "include",
  });
  const body = await r.json().catch(() => ({}));
  const items = (body.items || [])
    .filter((x) => {
      const ws = x?.metadata?.labels?.["kubesphere.io/workspace"];
      const name = x?.metadata?.name;
      return ws && name && ws !== "system-workspace" && !String(name).startsWith("kubesphere-");
    })
    .slice(0, 12);
  const types = [
    "deployments",
    "statefulsets",
    "daemonsets",
    "pods",
    "services",
    "ingresses",
    "configmaps",
    "secrets",
  ];
  const found = {};
  for (const t of types) found[t] = null;
  for (const ns of items) {
    const workspace = ns.metadata.labels["kubesphere.io/workspace"];
    const namespace = ns.metadata.name;
    const missing = types.filter((t) => !found[t]);
    if (!missing.length) break;
    await Promise.all(
      missing.map(async (t) => {
        const resp = await fetch(
          `/kapis/resources.kubesphere.io/v1alpha3/namespaces/${namespace}/${t}?limit=5`,
          { credentials: "include" }
        );
        const data = await resp.json().catch(() => ({}));
        const first = (data.items || [])[0];
        const name = first?.metadata?.name;
        if (resp.ok && name) {
          found[t] = { workspace, namespace, name, http: resp.status, total: data.totalItems ?? data.items?.length ?? null };
        }
      })
    );
  }
  return { found, scanned: items.length };
});

const pages = {};
for (const t of TYPES) {
  const hit = discovered.found[t.key];
  const mark = apiHits.length;
  const pageErr0 = errors.length;
  if (!hit) {
    pages[t.key] = { skipped: true, reason: "no-resource-in-scanned-namespaces" };
    continue;
  }
  const prefix = `/${hit.workspace}/clusters/default/projects/${hit.namespace}`;
  const listUrl = `${BASE}${prefix}/${t.path}`;
  try {
    await page.goto(listUrl, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(2500);
    const list = await snapshot(`list-${t.key}`);
    const href = await page.evaluate((kind) => {
      const re = new RegExp(`/${kind}/[^/?#]+`);
      return Array.from(document.querySelectorAll("a[href]"))
        .map((a) => a.getAttribute("href") || "")
        .find((h) => re.test(h) && !new RegExp(`/${kind}/?$`).test(h.split("?")[0]));
    }, t.path);
    let detail = null;
    if (href) {
      await page.goto(href.startsWith("http") ? href : `${BASE}${href}`, {
        waitUntil: "domcontentloaded",
        timeout: 45000,
      });
      await page.waitForTimeout(3000);
      detail = await snapshot(`detail-${t.key}`);
    }
    let extra = {};
    if (t.key === "deployments" || t.key === "pods") {
      if (detail && /\/[^/]+$/.test(detail.path) || detail) {
        const eventsHref = page.url().replace(/\/$/, "").replace(/\/(resource-status|schedule|metadata|monitors|env|events)$/, "") + "/events";
        await page.goto(eventsHref, { waitUntil: "domcontentloaded", timeout: 45000 });
        await page.waitForTimeout(2500);
        extra.events = await snapshot(`events-${t.key}`);
      }
    }
    if (t.key === "pods" && href) {
      const containerHref = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("a[href]"))
          .map((a) => a.getAttribute("href") || "")
          .find((h) => /\/pods\/[^/]+\/containers\/[^/?#]+/.test(h));
      });
      extra.containerHref = containerHref ? redact(containerHref) : null;
      if (containerHref) {
        await page.goto(containerHref.startsWith("http") ? containerHref : `${BASE}${containerHref}`, {
          waitUntil: "domcontentloaded",
          timeout: 45000,
        });
        await page.waitForTimeout(2500);
        extra.container = await snapshot("container-detail");
        const logsHref = page.url().replace(/\/$/, "").replace(/\/(resource-status|monitors|env|logs)$/, "") + "/logs";
        await page.goto(logsHref, { waitUntil: "domcontentloaded", timeout: 45000 });
        await page.waitForTimeout(3500);
        extra.logs = await snapshot("container-logs");
        extra.terminal = await page.evaluate(() => {
          const pathSplit = location.pathname.split("/");
          const cluster = pathSplit[pathSplit.indexOf("clusters") + 1];
          const namespace = pathSplit[pathSplit.indexOf("projects") + 1];
          const podName = pathSplit[pathSplit.indexOf("pods") + 1];
          const containerName = pathSplit[pathSplit.indexOf("containers") + 1];
          return {
            url: `/terminal/cluster/${cluster}/projects/${namespace}/pods/${podName}/containers/${containerName}`,
            hasTerminalBtn: /TERMINAL|终端/.test(document.body.innerText || ""),
          };
        });
        await page.goto(`${BASE}${extra.terminal.url}`, { waitUntil: "domcontentloaded", timeout: 45000 });
        await page.waitForTimeout(3000);
        extra.terminalPage = await snapshot("terminal");
      }
    }
    pages[t.key] = {
      hit: { ...hit, workspace: "<ws>", namespace: "<ns>", name: "<name>" },
      list: { ...list, path: redact(list.path), textHead: redact(list.textHead) },
      detail: detail ? { ...detail, path: redact(detail.path), textHead: redact(detail.textHead) } : null,
      extra: extra.events || extra.logs || extra.terminal
        ? {
            events: extra.events && { ...extra.events, path: redact(extra.events.path), textHead: redact(extra.events.textHead) },
            container: extra.container && { ...extra.container, path: redact(extra.container.path), textHead: redact(extra.container.textHead) },
            logs: extra.logs && { ...extra.logs, path: redact(extra.logs.path), textHead: redact(extra.logs.textHead) },
            terminal: extra.terminal && { ...extra.terminal, url: redact(extra.terminal.url) },
            terminalPage: extra.terminalPage && {
              ...extra.terminalPage,
              path: redact(extra.terminalPage.path),
              textHead: redact(extra.terminalPage.textHead),
            },
          }
        : extra,
      apis: snapApis(mark),
      newErrors: errors.slice(pageErr0, pageErr0 + 8),
    };
  } catch (err) {
    pages[t.key] = {
      failed: true,
      error: redact(String(err.message || err).slice(0, 240)),
      newErrors: errors.slice(pageErr0, pageErr0 + 8),
    };
  }
}

const report = {
  identity,
  discovered: {
    scanned: discovered.scanned,
    found: Object.fromEntries(
      Object.entries(discovered.found).map(([k, v]) => [
        k,
        v ? { ...v, workspace: "<ws>", namespace: "<ns>", name: "<name>" } : null,
      ])
    ),
  },
  pages,
  errors: errors.slice(0, 20),
};
fs.writeFileSync(`${ROOT}/PHASE6-OPS-PROBE.json`, JSON.stringify(report, null, 2) + "\n");
const summary = {};
for (const [k, v] of Object.entries(pages)) {
  summary[k] = {
    skipped: Boolean(v.skipped),
    failed: Boolean(v.failed),
    listAlive: Boolean(v.list && !v.list.blank && v.list.htmlLen > 1000),
    listTotal: v.list?.total ?? null,
    detailAlive: Boolean(v.detail && !v.detail.blank && v.detail.htmlLen > 1000),
    eventsAlive: Boolean(v.extra?.events && !v.extra.events.blank),
    logsAlive: Boolean(v.extra?.logs && !v.extra.logs.blank),
    terminalPath: v.extra?.terminalPage?.path || null,
    error: v.error || (v.newErrors && v.newErrors[0]) || null,
  };
}
console.log(JSON.stringify({ identity, summary, errors: errors.slice(0, 12) }, null, 2));
await browser.close();
