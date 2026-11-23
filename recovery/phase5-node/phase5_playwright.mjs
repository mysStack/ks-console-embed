#!/usr/bin/env node
/**
 * Phase 5 browser smoke against phase4-build static host.
 * Does not print credentials. Does not touch 8099.
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.PHASE5_BASE || "http://127.0.0.1:8108";
const ROOT = "/home/bruce/code/ks-develop/kse-console-v3/recovery";
const EVIDENCE = path.join(ROOT, "phase5-evidence");
const MAIN_JS = "app.f61e4774.js";
const EXPECTED_ARTIFACT = "phase4-build";

fs.mkdirSync(EVIDENCE, { recursive: true });

function loadBashrcVar(name) {
  if (process.env[name]) return;
  let text;
  try {
    text = fs.readFileSync("/home/bruce/.bashrc", "utf8");
  } catch {
    return;
  }
  const re = new RegExp(`^(?:export\\s+)?${name}=(['"]?)([^'"\\n]*)\\1`, "m");
  const m = text.match(re);
  if (m && m[2]) process.env[name] = m[2];
}
loadBashrcVar("KS_TEST_USERNAME");
loadBashrcVar("KS_TEST_PASSWORD");

function loadSmoke() {
  const routes = JSON.parse(fs.readFileSync(path.join(ROOT, "PHASE5-ROUTES.json"), "utf8"));
  return routes.smoke;
}

async function identityCheck(page) {
  const res = await page.goto(`${BASE}/__phase5`, { waitUntil: "domcontentloaded" });
  const headers = {
    artifact: res.headers()["x-recovery-artifact"] || "",
    mainJs: res.headers()["x-recovery-main-js"] || "",
  };
  const json = await res.json();
  return {
    http: res.status(),
    headers,
    json,
    isPhase4Build:
      headers.artifact === EXPECTED_ARTIFACT &&
      headers.mainJs === MAIN_JS &&
      json.mainJs === MAIN_JS,
  };
}

async function visit(page, item) {
  const consoleErrors = [];
  const pageErrors = [];
  const failed = [];
  const responses = [];
  const onConsole = (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  };
  const onPageError = (err) => pageErrors.push(String(err));
  const onFail = (req) =>
    failed.push({ url: req.url(), error: req.failure()?.errorText || "failed" });
  const onResp = (resp) => {
    const url = resp.url();
    if (
      url.includes(".js") ||
      url.includes(".css") ||
      url.includes("/login") ||
      url.includes("kapis/") ||
      url.includes("/oauth/")
    ) {
      responses.push({ url, status: resp.status() });
    }
  };
  page.on("console", onConsole);
  page.on("pageerror", onPageError);
  page.on("requestfailed", onFail);
  page.on("response", onResp);

  const resp = await page.goto(`${BASE}${item.path}`, { waitUntil: "load", timeout: 45000 }).catch((e) => {
    return { error: String(e) };
  });
  await page.waitForTimeout(2500);
  const shot = path.join(EVIDENCE, `${item.id}.png`);
  await page.screenshot({ path: shot, fullPage: true }).catch(() => null);

  const evaled = await page.evaluate((mainJs) => {
    const root = document.getElementById("root");
    const rootChildCount = root ? root.childElementCount : 0;
    const scripts = [...document.scripts].map((s) => s.src);
    const css = [...document.querySelectorAll("link[rel=stylesheet]")].map((l) => l.href);
    const chunks = performance
      .getEntriesByType("resource")
      .filter((e) => e.name.includes(".app.") && e.name.endsWith(".js"))
      .map((e) => ({ name: e.name, size: e.transferSize, type: e.initiatorType }));
    return {
      href: location.href,
      title: document.title,
      rootExists: !!root,
      rootChildCount,
      rootText: root ? (root.innerText || "").slice(0, 800) : "",
      hasMainScript: scripts.some((s) => s.includes(mainJs)),
      scripts,
      css,
      cssLoaded: css.length,
      webpackChunk: typeof window.webpackChunkv3dist_recovered_react_app !== "undefined",
      globalsUser: window.globals?.user?.username || null,
      globalsTitle: window.globals?.config?.title || null,
      disableAuthorization: window.globals?.config?.disableAuthorization ?? null,
      chunks,
    };
  }, MAIN_JS);

  page.off("console", onConsole);
  page.off("pageerror", onPageError);
  page.off("requestfailed", onFail);
  page.off("response", onResp);

  const jsFailed = failed.filter((f) => f.url.includes(".js") || f.url.includes(".css"));
  const chunkLoadError = [...consoleErrors, ...pageErrors].some((t) =>
    /ChunkLoadError|Loading chunk|Loading CSS chunk/i.test(t)
  );
  const mounted = !!(evaled.rootExists && evaled.rootChildCount > 0 && evaled.rootText.trim());
  const status = resp && !resp.error ? resp.status() : 0;
  let result = "fail";
  if (resp && resp.error) result = "fail";
  else if (!evaled.hasMainScript) result = "fail";
  else if (chunkLoadError || jsFailed.length) result = "fail";
  else if (!mounted) result = "fail";
  else result = "pass";

  return {
    id: item.id,
    path: item.path,
    layer: item.layer,
    result,
    http: status,
    mounted,
    screenshot: shot,
    identity: {
      title: evaled.title,
      hasMainScript: evaled.hasMainScript,
      webpackChunk: evaled.webpackChunk,
    },
    react: {
      rootExists: evaled.rootExists,
      rootChildCount: evaled.rootChildCount,
      text: evaled.rootText,
    },
    globals: {
      user: evaled.globalsUser,
      title: evaled.globalsTitle,
      disableAuthorization: evaled.disableAuthorization,
    },
    assets: {
      css: evaled.css.length,
      chunks: evaled.chunks,
    },
    consoleErrors: consoleErrors.slice(0, 30),
    pageErrors: pageErrors.slice(0, 20),
    requestFailed: failed.slice(0, 30),
    responses: responses.slice(0, 80),
    navigationError: resp && resp.error ? resp.error : null,
  };
}

async function kapisVersion(page) {
  return page.evaluate(async () => {
    const r = await fetch("/kapis/version", { credentials: "include" });
    const text = await r.text();
    let gitVersion = null;
    try {
      gitVersion = JSON.parse(text).gitVersion || null;
    } catch {
      gitVersion = null;
    }
    return { http: r.status, gitVersion, jsonish: text.trim().startsWith("{") };
  });
}

async function loginAttempt(page) {
  const user = process.env.KS_TEST_USERNAME || "";
  const pass = process.env.KS_TEST_PASSWORD || "";
  const out = {
    attempted: false,
    credentialsPresent: Boolean(user && pass),
    submitStatus: null,
    loginResponse: null,
    afterText: "",
    note: "",
    kapisBefore: null,
    kapisAfter: null,
    dashboardAfterLogin: null,
  };
  if (!user || !pass) {
    out.note = "KS_TEST_USERNAME/KS_TEST_PASSWORD missing after sourcing bashrc; login not attempted";
    return out;
  }
  out.attempted = true;
  await page.goto(`${BASE}/login`, { waitUntil: "load", timeout: 45000 });
  await page.waitForTimeout(1000);
  out.kapisBefore = await kapisVersion(page).catch((e) => ({ error: String(e) }));
  const userSel = 'input[name="username"]';
  const passSel = 'input[name="password"]';
  const hasForm = await page.locator(userSel).count();
  if (!hasForm) {
    out.note = "login form fields not found";
    out.afterText = await page.locator("#root").innerText().catch(() => "");
    await page.screenshot({ path: path.join(EVIDENCE, "login-submit.png"), fullPage: true }).catch(() => null);
    return out;
  }
  await page.fill(userSel, user);
  await page.fill(passSel, pass);
  const waitResp = page.waitForResponse((r) => {
    try {
      const u = new URL(r.url());
      return u.pathname === "/login" && r.request().method() === "POST";
    } catch {
      return false;
    }
  }, { timeout: 20000 }).catch(() => null);
  await page.click('button[type="submit"]');
  const resp = await waitResp;
  if (resp) {
    out.submitStatus = resp.status();
    const ct = resp.headers()["content-type"] || "";
    const apiOrigin = resp.headers()["x-recovery-api-origin"] || "";
    if (ct.includes("json")) {
      const body = await resp.json().catch(() => ({}));
      out.loginResponse = {
        http: resp.status(),
        jsonStatus: body.status ?? null,
        reason: body.reason || null,
        message: body.message || null,
        apiOrigin,
      };
    } else {
      out.loginResponse = { contentType: ct, http: resp.status(), apiOrigin };
    }
  } else {
    out.note = "no POST /login observed";
  }
  await page.waitForTimeout(2000);
  out.kapisAfter = await kapisVersion(page).catch((e) => ({ error: String(e) }));
  out.afterText = (await page.locator("#root").innerText().catch(() => "")).slice(0, 800);
  await page.screenshot({ path: path.join(EVIDENCE, "login-submit.png"), fullPage: true }).catch(() => null);
  const jsonOk = out.loginResponse && out.loginResponse.jsonStatus === 200;
  if (jsonOk) {
    await page.goto(`${BASE}/dashboard`, { waitUntil: "load", timeout: 45000 }).catch(() => null);
    await page.waitForTimeout(2000);
    out.dashboardAfterLogin = await page.evaluate(() => {
      const root = document.getElementById("root");
      const name = window.globals?.user?.username || "";
      return {
        text: root ? (root.innerText || "").slice(0, 400) : "",
        userIsRecovered: name === "recovered",
        userPresent: Boolean(name),
      };
    });
    await page.screenshot({ path: path.join(EVIDENCE, "p2-dashboard-after-login.png"), fullPage: true }).catch(() => null);
  }
  return out;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const ident = await identityCheck(page);
  const smoke = loadSmoke();
  const results = [];
  for (const item of smoke) {
    try {
      results.push(await visit(page, item));
    } catch (e) {
      results.push({ id: item.id, path: item.path, layer: item.layer, result: "fail", error: String(e) });
    }
  }
  const login = await loginAttempt(page).catch((e) => ({ attempted: false, error: String(e) }));
  await browser.close();

  const summary = {
    artifact: ident,
    counts: {
      total: results.length,
      pass: results.filter((r) => r.result === "pass").length,
      fail: results.filter((r) => r.result === "fail").length,
      unverifiable: results.filter((r) => r.result === "unverifiable").length,
    },
    login,
    results,
  };
  fs.writeFileSync(path.join(ROOT, "PHASE5-RUN.json"), JSON.stringify(summary, null, 2) + "\n");
  console.log(
    JSON.stringify(
      {
        isPhase4Build: ident.isPhase4Build,
        counts: summary.counts,
        loginAttempted: login.attempted,
        loginHttp: login.submitStatus,
        loginJsonStatus: login.loginResponse && login.loginResponse.jsonStatus,
        loginReason: login.loginResponse && login.loginResponse.reason,
        kapisBefore: login.kapisBefore,
        kapisAfter: login.kapisAfter,
      },
      null,
      2
    )
  );
}

main().catch((e) => {
  console.error(String(e));
  process.exit(1);
});
