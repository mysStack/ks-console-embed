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
    .replace(/\/namespaces\/[^/]+/g, "/namespaces/<ns>");
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e.message || e).slice(0, 200)));

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
  };
});

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

await page.goto(`${BASE}${prefix}/overview`, { waitUntil: "domcontentloaded", timeout: 45000 });
await page.waitForFunction(() => {
  const root = document.getElementById("root");
  const text = root?.innerText || "";
  return (root?.innerHTML.length || 0) > 500 && text.includes("部署");
}, { timeout: 25000 });
await page.waitForTimeout(1200);
await page.screenshot({ path: `${EVID}/p55-overview.png`, fullPage: true });

const overview = await page.evaluate(() => {
  const root = document.getElementById("root");
  const text = root?.innerText || "";
  const m = text.match(/(\d+)\s*部署/);
  return {
    htmlLen: root?.innerHTML.length || 0,
    dep: m ? Number(m[1]) : null,
    hasNav: Boolean(document.querySelector(".ks-page-nav")),
    hasSelector: Boolean(document.querySelector(".ks-page-side .h6")),
    selectorText: (document.querySelector(".ks-page-side .h6")?.textContent || "").trim(),
  };
});

const sideTitle = page.locator(".ks-project-selector-slot .h6, #ks-project-selector-host .h6, .ks-page-side .h6").first();
await sideTitle.click();
await page.waitForTimeout(4000);
await page.screenshot({ path: `${EVID}/p55-selector.png`, fullPage: true });

const modal = await page.evaluate(() => {
  const dialog = document.querySelector(
    ".ReactModal__Content, .ReactModal__Overlay, [data-test='modal-close'], [role='dialog']"
  );
  const overlayText = (document.querySelector(".ReactModal__Content")?.innerText
    || document.querySelector(".ReactModal__Overlay")?.innerText
    || "")
    .replace(/\s+/g, " ");
  const cards = Array.from(document.querySelectorAll(".ReactModal__Content a, .ReactModal__Overlay a"))
    .map((a) => (a.textContent || "").trim())
    .filter(Boolean)
    .slice(0, 8);
  return {
    hasDialog: Boolean(dialog),
    htmlLen: document.getElementById("root")?.innerHTML.length || 0,
    cardCount: cards.length,
    textHead: overlayText.slice(0, 220),
    modalError: window.__ksSelectorModalError || "",
  };
});

let jumped = { ok: false, path: "" };
const cardLink = page.locator(".ReactModal__Content a").nth(1);
if (await cardLink.count()) {
  await cardLink.click();
  await page.waitForFunction(() => /\/projects\//.test(location.pathname), { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1500);
  jumped = await page.evaluate(() => ({
    path: location.pathname,
    hasNav: Boolean(document.querySelector(".ks-page-nav")),
    htmlLen: document.getElementById("root")?.innerHTML.length || 0,
    text: (document.getElementById("root")?.innerText || "").replace(/\s+/g, " ").slice(0, 120),
  }));
  jumped.ok = jumped.htmlLen > 500 && /\/projects\//.test(jumped.path);
}
await page.screenshot({ path: `${EVID}/p55-after-select.png`, fullPage: true });

const checks = {
  loginRealUser: identity.hasUser && !identity.fakeRecovered,
  overviewAlive: overview.htmlLen > 500 && overview.dep > 0,
  sidebarNav: Boolean(overview.hasNav),
  selectorVisible: Boolean(overview.hasSelector),
  modalOpens: Boolean(modal.hasDialog),
  modalHasProjects: modal.cardCount > 0,
  jumpKeepsProject: Boolean(jumped.ok),
  rootNotEmpty: overview.htmlLen > 500 && (jumped.htmlLen || 0) > 500,
};

const report = {
  identity,
  overview: { ...overview, selectorText: overview.selectorText ? "<name>" : "" },
  modal: { hasDialog: modal.hasDialog, cardCount: modal.cardCount, htmlLen: modal.htmlLen, textHead: modal.textHead.slice(0, 160), modalError: modal.modalError || "" },
  jumped: { ok: jumped.ok, path: redact(jumped.path || ""), hasNav: jumped.hasNav, htmlLen: jumped.htmlLen },
  checks,
  errors: errors.slice(0, 8),
  pass: Object.values(checks).every(Boolean),
};
fs.writeFileSync(`${ROOT}/PHASE5.5-VERIFY.json`, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ pass: report.pass, checks, errors: report.errors, modal: report.modal, jumped: report.jumped }, null, 2));
await browser.close();
if (!report.pass) process.exit(1);
