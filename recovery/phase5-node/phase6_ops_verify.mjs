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
    .replace(/\/containers\/[^/?]+/g, "/containers/<name>")
    .replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, "<ip>");
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
const apiHits = [];
page.on("pageerror", (e) => errors.push(redact(String(e.message || e).slice(0, 240))));
page.on("response", (resp) => {
  const url = resp.url();
  if (!/\/(kapis|apis|api)\//.test(url)) return;
  apiHits.push({
    http: resp.status(),
    path: redact(url.replace(/^https?:\/\/[^/]+/, "")).slice(0, 220),
  });
});

await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.fill('input[name="username"]', process.env.KS_TEST_USERNAME || "");
await page.fill('input[name="password"]', process.env.KS_TEST_PASSWORD || "");
await page.click('button[type="submit"]');
await page.waitForFunction(() => location.pathname !== "/login", { timeout: 25000 });

const identity = await page.evaluate(() => {
  const u = window.globals && window.globals.user;
  return {
    hasUser: Boolean(u && u.username),
    fakeRecovered: String((u && u.username) || "") === "recovered",
    mainJs: document.querySelector('script[src*="app."]')?.getAttribute("src") || "",
  };
});

const found = await page.evaluate(async () => {
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
  const out = {};
  for (const t of types) out[t] = null;
  for (const ns of items) {
    const workspace = ns.metadata.labels["kubesphere.io/workspace"];
    const namespace = ns.metadata.name;
    const missing = types.filter((t) => !out[t]);
    if (!missing.length) break;
    await Promise.all(
      missing.map(async (t) => {
        const resp = await fetch(
          `/kapis/resources.kubesphere.io/v1alpha3/namespaces/${namespace}/${t}?limit=5`,
          { credentials: "include" }
        );
        const data = await resp.json().catch(() => ({}));
        const first = data.items?.[0];
        const name = first?.metadata?.name;
        if (resp.ok && name) {
          out[t] = {
            workspace,
            namespace,
            name,
            total: data.totalItems ?? data.items.length,
            containerName: first?.spec?.containers?.[0]?.name || first?.containers?.[0]?.name || null,
          };
        }
      })
    );
  }
  return out;
});

async function openPage(url, shot, waitMs = 2800) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForFunction(() => {
    const root = document.getElementById("root");
    const text = (root?.innerText || "").replace(/\s+/g, " ");
    const htmlLen = root?.innerHTML.length || 0;
    const spinning = Boolean(
      document.querySelector(
        ".ks-page-loading, .spin-spinning, .spin-nested-loading .spin-spinning"
      )
    );
    if (spinning) return false;
    return htmlLen > 1500 && (text.includes("总数") || text.length > 60);
  }, { timeout: 25000 }).catch(() => {});
  await page.waitForTimeout(Math.min(waitMs, 800));
  await page.screenshot({ path: `${EVID}/${shot}.png`, fullPage: true });
  return page.evaluate(() => {
    const root = document.getElementById("root");
    const text = (root?.innerText || "").replace(/\s+/g, " ");
    const total = text.match(/总数[：:]\s*(\d+)/);
    const loading = Boolean(document.querySelector(".ks-page-loading"));
    return {
      path: location.pathname,
      htmlLen: root?.innerHTML.length || 0,
      textHead: text.slice(0, 220),
      textHas: {
        eventsTable: /类型/.test(text) && /原因/.test(text),
        logs: /CONTAINER_LOG|容器日志|REFRESH|刷新/.test(text) || /log/i.test(text),
        unsupportedLogs: /CONTAINER_LOGS_NOT_SUPPORTED/.test(text),
      },
      total: total ? Number(total[1]) : null,
      loading,
      hasNav: Boolean(document.querySelector(".ks-page-nav, .detail-page-nav")),
    };
  });
}

function prefixOf(hit) {
  return `/${hit.workspace}/clusters/default/projects/${hit.namespace}`;
}

const resources = {};
for (const key of [
  "deployments",
  "statefulsets",
  "daemonsets",
  "pods",
  "services",
  "ingresses",
  "configmaps",
  "secrets",
]) {
  const hit = found[key];
  if (!hit) {
    resources[key] = { skipped: true };
    continue;
  }
  const prefix = prefixOf(hit);
  const list = await openPage(`${BASE}${prefix}/${key}`, `p6v-list-${key}`, 2200);
  const href = await page.evaluate((kind) => {
    const re = new RegExp(`/${kind}/[^/?#]+`);
    return Array.from(document.querySelectorAll("a[href]"))
      .map((a) => a.getAttribute("href") || "")
      .find((h) => re.test(h) && !new RegExp(`/${kind}/?$`).test(h.split("?")[0]));
  }, key);
  let detail = null;
  if (href) {
    detail = await openPage(href.startsWith("http") ? href : `${BASE}${href}`, `p6v-detail-${key}`, 3200);
  }
  resources[key] = {
    listAlive: Boolean(list && !list.loading && list.htmlLen > 2000 && (list.total == null || list.total >= 0)),
    listTotal: list?.total ?? null,
    detailAlive: Boolean(detail && !detail.loading && detail.htmlLen > 2000 && (detail.textHead || "").length > 10),
    detailPath: detail ? redact(detail.path) : null,
    listPath: redact(list.path),
  };
}

const podHit = found.pods;
const ops = { events: null, logs: null, terminal: null };
if (podHit) {
  const prefix = prefixOf(podHit);
  const podUrl = `${BASE}${prefix}/pods/${podHit.name}`;
  const podDetail = await openPage(podUrl, "p6v-pod-detail", 4000);
  let containerName = podHit.containerName;
  if (!containerName) {
    containerName = await page.evaluate(async ({ ns, name }) => {
      const href = Array.from(document.querySelectorAll("a[href]"))
        .map((a) => a.getAttribute("href") || "")
        .find((h) => /\/pods\/[^/]+\/containers\/[^/?#]+/.test(h));
      if (href) return decodeURIComponent(href.split("/containers/")[1].split(/[/?#]/)[0]);
      const r = await fetch(`/api/v1/namespaces/${ns}/pods/${name}`, { credentials: "include" });
      const body = await r.json().catch(() => ({}));
      return body?.spec?.containers?.[0]?.name || null;
    }, { ns: podHit.namespace, name: podHit.name });
  }
  const events = await openPage(`${podUrl}/events`, "p6v-pod-events", 2800);
  let container = null;
  let logs = null;
  let terminal = null;
  if (containerName) {
    const containerUrl = `${podUrl}/containers/${containerName}`;
    container = await openPage(containerUrl, "p6v-container", 3200);
    const logMark = apiHits.length;
    logs = await openPage(`${containerUrl}/logs`, "p6v-logs", 4500);
    logs.logApis = apiHits.slice(logMark).filter((x) => /\/log(\?|$)/.test(x.path)).slice(0, 6);
    const termPath = `/terminal/cluster/default/projects/${podHit.namespace}/pods/${podHit.name}/containers/${containerName}`;
    const wsHits = [];
    const onWs = (ws) => {
      const rec = {
        url: redact(ws.url()),
        framesSent: 0,
        framesReceived: 0,
        closed: false,
        errors: [],
      };
      ws.on("framesent", () => {
        rec.framesSent += 1;
      });
      ws.on("framereceived", () => {
        rec.framesReceived += 1;
      });
      ws.on("close", () => {
        rec.closed = true;
      });
      ws.on("socketerror", (err) => {
        rec.errors.push(String(err).slice(0, 120));
      });
      wsHits.push(rec);
    };
    page.on("websocket", onWs);
    terminal = await openPage(`${BASE}${termPath}`, "p6v-terminal", 4000);
    const deadline = Date.now() + 8000;
    while (Date.now() < deadline && !wsHits.some((w) => w.framesReceived > 0 && w.errors.length === 0)) {
      await page.waitForTimeout(400);
    }
    terminal.termPath = redact(termPath);
    terminal.ws = wsHits.slice(0, 4);
    terminal.wsReady = wsHits.some((w) => w.framesReceived > 0 && w.errors.length === 0);
    terminal.hasTermUi = Boolean(
      await page.evaluate(
        () =>
          Boolean(document.querySelector("kubernetes-container-terminal, canvas, .xterm, .xterm-helper-textarea")) ||
          /Connecting|BASIC_INFORMATION|IMAGE|IMAGE_VALUE|终端/.test(document.body.innerText || "")
      )
    );
    const badWsBefore = wsHits.length;
    const bad = await openPage(`${BASE}/terminal/cluster/default`, "p6v-terminal-bad", 1800);
    ops.terminalInvalid = {
      rejected: /Invalid terminal path/i.test(bad.textHead || ""),
      extraWs: wsHits.length > badWsBefore,
    };
  }
  ops.podDetail = {
    alive: Boolean(podDetail && !podDetail.loading && podDetail.htmlLen > 2000),
    loading: podDetail.loading,
    htmlLen: podDetail.htmlLen,
    textHead: redact(podDetail.textHead),
  };
  ops.events = {
    alive: Boolean(events && !events.loading && events.htmlLen > 2000),
    textHead: redact(events.textHead),
    hasTable: Boolean(events?.textHas?.eventsTable),
  };
  ops.logs = logs && {
    alive: Boolean(logs && !logs.loading && logs.htmlLen > 1500 && !logs.textHas?.unsupportedLogs),
    textHead: redact(logs.textHead),
    logApis: logs.logApis,
    unsupported: Boolean(logs.textHas?.unsupportedLogs),
    containerName,
  };
  ops.terminal = terminal && {
    alive: Boolean(terminal.hasTermUi && terminal.wsReady && /\/terminal\//.test(terminal.path)),
    path: redact(terminal.path),
    textHead: redact(terminal.textHead),
    ws: terminal.ws,
    wsReady: Boolean(terminal.wsReady),
    htmlLen: terminal.htmlLen,
  };
}

const pvcHit = await page.evaluate(async () => {
  const r = await fetch("/kapis/resources.kubesphere.io/v1alpha3/namespaces?limit=80", {
    credentials: "include",
  });
  const body = await r.json().catch(() => ({}));
  const items = (body.items || []).filter((x) => {
    const ws = x?.metadata?.labels?.["kubesphere.io/workspace"];
    const name = x?.metadata?.name;
    return ws && name && ws !== "system-workspace" && !String(name).startsWith("kubesphere-");
  });
  const kinds = ["deployments", "statefulsets", "pods"];
  for (const ns of items) {
    const workspace = ns.metadata.labels["kubesphere.io/workspace"];
    const namespace = ns.metadata.name;
    for (const kind of kinds) {
      const resp = await fetch(
        `/kapis/resources.kubesphere.io/v1alpha3/namespaces/${namespace}/${kind}?limit=50`,
        { credentials: "include" }
      );
      const data = await resp.json().catch(() => ({}));
      for (const item of data.items || []) {
        const vols =
          item?.spec?.template?.spec?.volumes ||
          item?.spec?.volumes ||
          [];
        const claim = vols.find((v) => v.persistentVolumeClaim)?.persistentVolumeClaim?.claimName;
        if (claim) {
          return {
            kind,
            workspace,
            namespace,
            name: item.metadata.name,
            claim,
          };
        }
      }
    }
  }
  return null;
});
if (pvcHit) {
  const pvcMeta = await page.evaluate(async ({ ns, claim }) => {
    const resp = await fetch(`/api/v1/namespaces/${ns}/persistentvolumeclaims/${claim}`, {
      credentials: "include",
    });
    const data = await resp.json().catch(() => ({}));
    return {
      http: resp.status,
      storageClassName: data?.spec?.storageClassName || "",
      capacity: data?.spec?.resources?.requests?.storage || data?.status?.capacity?.storage || "",
    };
  }, { ns: pvcHit.namespace, claim: pvcHit.claim });
  const prefix = `/${pvcHit.workspace}/clusters/default/projects/${pvcHit.namespace}`;
  const detail = await openPage(
    `${BASE}${prefix}/${pvcHit.kind}/${pvcHit.name}/resource-status`,
    "p6v-pvc-detail",
    3500
  );
  const pageText = await page.evaluate(() => (document.getElementById("root")?.innerText || "").replace(/\s+/g, " "));
  ops.pvcMapped = {
    skipped: false,
    kind: pvcHit.kind,
    claim: pvcHit.claim,
    storageClassName: pvcMeta.storageClassName || null,
    hasClaim: pageText.includes(pvcHit.claim),
    hasMappedField: Boolean(
      (pvcMeta.capacity && pageText.includes(pvcMeta.capacity)) ||
        (pvcMeta.storageClassName && pageText.includes(pvcMeta.storageClassName))
    ),
    loading: detail.loading,
  };
} else {
  ops.pvcMapped = { skipped: true };
}

const checks = {
  loginRealUser: identity.hasUser && !identity.fakeRecovered,
  deployments: Boolean(resources.deployments?.listAlive && resources.deployments?.detailAlive),
  statefulsets: Boolean(resources.statefulsets?.listAlive && resources.statefulsets?.detailAlive),
  daemonsets: Boolean(resources.daemonsets?.listAlive && resources.daemonsets?.detailAlive),
  pods: Boolean(resources.pods?.listAlive && ops.podDetail?.alive),
  services: Boolean(resources.services?.listAlive && resources.services?.detailAlive),
  ingresses: Boolean(resources.ingresses?.listAlive && resources.ingresses?.detailAlive),
  configmaps: Boolean(resources.configmaps?.listAlive && resources.configmaps?.detailAlive),
  secrets: Boolean(resources.secrets?.listAlive && resources.secrets?.detailAlive),
  podEvents: Boolean(ops.events?.alive && ops.events?.hasTable),
  podLogs: Boolean(ops.logs?.alive),
  terminal: Boolean(ops.terminal?.alive),
  terminalPathGuard: Boolean(ops.terminalInvalid?.rejected && !ops.terminalInvalid?.extraWs),
  pvcMapped: Boolean(ops.pvcMapped?.skipped || ops.pvcMapped?.hasMappedField),
};

const report = {
  identity: { ...identity, mainJs: identity.mainJs },
  resources,
  ops: {
    podDetail: ops.podDetail,
    events: ops.events,
    logs: ops.logs,
    terminal: ops.terminal,
    terminalInvalid: ops.terminalInvalid,
    pvcMapped: ops.pvcMapped,
  },
  checks,
  errors: errors.slice(0, 16),
  pass: Object.values(checks).every(Boolean),
};
fs.writeFileSync(`${ROOT}/PHASE6-OPS-VERIFY.json`, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ pass: report.pass, checks, errors: report.errors, terminal: ops.terminal, logs: ops.logs }, null, 2));
await browser.close();
if (!report.pass) process.exit(1);
