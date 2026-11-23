#!/usr/bin/env node
/** Phase 5.1 step 1: cookie/session evidence. Never print secrets or cookie values. */
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

function cookieMeta(list) {
  return (list || []).map((c) => ({
    name: c.name,
    httpOnly: !!c.httpOnly,
    secure: !!c.secure,
    path: c.path || "/",
    hasValue: Boolean(c.value),
  }));
}

async function kapis(page) {
  return page.evaluate(async () => {
    const r = await fetch("/kapis/version", { credentials: "include" });
    const text = await r.text();
    let gitVersion = null;
    try {
      gitVersion = JSON.parse(text).gitVersion || null;
    } catch {}
    return { http: r.status, gitVersion };
  });
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const cookieHeaderSeen = [];
page.on("request", (req) => {
  const url = req.url();
  if (url.includes("/kapis/version") || (url.includes("/login") && req.method() === "POST")) {
    const names = [];
    const raw = req.headers()["cookie"] || "";
    if (raw) {
      for (const part of raw.split(";")) {
        const n = part.trim().split("=")[0];
        if (n) names.push(n);
      }
    }
    cookieHeaderSeen.push({ urlPath: new URL(url).pathname, method: req.method(), cookieNames: names });
  }
});

await page.goto(`${BASE}/login`, { waitUntil: "load" });
await page.waitForTimeout(500);
const cookiesBefore = cookieMeta(await context.cookies());
const kapisBefore = await kapis(page);

const user = process.env.KS_TEST_USERNAME || "";
const pass = process.env.KS_TEST_PASSWORD || "";
if (!user || !pass) {
  console.log(JSON.stringify({ error: "credentials missing" }));
  await browser.close();
  process.exit(1);
}

await page.fill('input[name="username"]', user);
await page.fill('input[name="password"]', pass);
const waitResp = page.waitForResponse((r) => {
  try {
    return new URL(r.url()).pathname === "/login" && r.request().method() === "POST";
  } catch {
    return false;
  }
}, { timeout: 20000 });
await page.click('button[type="submit"]');
const resp = await waitResp;
const setCookiePresent = Boolean(resp.headers()["set-cookie"]);
const raw = await resp.text();
let parsed = {};
try {
  parsed = JSON.parse(raw);
} catch {
  parsed = {};
}
await page.waitForTimeout(800);
const cookiesAfter = cookieMeta(await context.cookies());
const kapisAfter = await kapis(page);
const loginJsonKeys = Object.keys(parsed);
const out = {
  artifact: "phase4-build",
  credentialsPresent: true,
  loginHttp: resp.status(),
  loginJsonKeys,
  loginJsonStatus: parsed.status ?? null,
  loginSuccess: parsed.success === true,
  redirectIsString: typeof parsed.redirect === "string",
  redirectIsAbsolute: typeof parsed.redirect === "string" && /^https?:/i.test(parsed.redirect),
  redirectPath:
    typeof parsed.redirect === "string"
      ? (() => {
          try {
            if (parsed.redirect.startsWith("/")) return parsed.redirect.split("?")[0];
            return new URL(parsed.redirect).pathname;
          } catch {
            return "(unparsed)";
          }
        })()
      : null,
  setCookiePresent,
  cookiesBefore,
  cookiesAfter,
  newCookieNames: cookiesAfter.map((c) => c.name).filter((n) => !cookiesBefore.some((b) => b.name === n)),
  kapisBefore,
  kapisAfter,
  cookieHeaderSeen,
  globalsUser: await page.evaluate(() => window.globals?.user?.username || null),
};
fs.writeFileSync(`${ROOT}/PHASE5.1-SESSION.json`, JSON.stringify(out, null, 2) + "\n");
console.log(JSON.stringify({
  loginHttp: out.loginHttp,
  loginJsonKeys: out.loginJsonKeys,
  loginSuccess: out.loginSuccess,
  redirectPath: out.redirectPath,
  setCookiePresent: out.setCookiePresent,
  newCookieNames: out.newCookieNames,
  cookieCountBefore: cookiesBefore.length,
  cookieCountAfter: cookiesAfter.length,
  kapisBefore: kapisBefore.http,
  kapisAfter: kapisAfter.http,
  gitVersion: kapisAfter.gitVersion,
  globalsUserIsRecovered: out.globalsUser === "recovered",
}, null, 2));
await browser.close();
