#!/usr/bin/env node
"use strict";
/**
 * Headless Chrome CDP: key-page overlay + dashboard webpackChunk leftover ids.
 * Uses webpack-dev-server nested `ws`. No new npm packages.
 */
const http = require("http");
const { spawn } = require("child_process");
const fs = require("fs");

const WS_PATH = "/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/node_modules/ws";
const WebSocket = require(WS_PATH);
const OUT = "/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/PASS7_OVERLAY.json";
const RESOURCES = "/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/LIVE_RESOURCES.json";
const CHUNK = "/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/LIVE_WEBPACK_CHUNK.json";
const PORT = 9334;
const BASE = "http://127.0.0.1:8099";

const ROUTES = [
  "/login",
  "/dashboard",
  "/clusters/default/statefulsets",
  "/clusters/default/daemonsets",
  "/clusters/default/jobs",
  "/clusters/default/cronjobs",
  "/clusters/default/pods",
  "/clusters/default/services",
  "/clusters/default/ingresses",
  "/clusters/default/secrets",
  "/clusters/default/configmaps",
  "/clusters/default/alerts",
  "/workspaces/system-workspace/apps",
  "/eventsearch",
  "/system-workspace/clusters/default/projects/kubesphere-system/statefulsets",
  "/system-workspace/clusters/default/projects/kubesphere-system/daemonsets",
  "/system-workspace/clusters/default/projects/kubesphere-system/jobs",
  "/system-workspace/clusters/default/projects/kubesphere-system/cronjobs",
  "/system-workspace/clusters/default/projects/kubesphere-system/pods",
  "/system-workspace/clusters/default/projects/kubesphere-system/services",
  "/system-workspace/clusters/default/projects/kubesphere-system/ingresses",
  "/system-workspace/clusters/default/projects/kubesphere-system/secrets",
  "/system-workspace/clusters/default/projects/kubesphere-system/configmaps",
  "/system-workspace/clusters/default/projects/kubesphere-system/alerts",
  "/system-workspace/clusters/default/projects/kubesphere-system/applications",
];

function get(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => resolve(d));
      })
      .on("error", reject);
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function cdpConnect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let id = 0;
    const pending = new Map();
    ws.on("open", () => {
      resolve({
        ws,
        send(method, params) {
          const msgId = ++id;
          return new Promise((res, rej) => {
            pending.set(msgId, { res, rej });
            ws.send(JSON.stringify({ id: msgId, method, params: params || {} }));
          });
        },
      });
    });
    ws.on("message", (data) => {
      const msg = JSON.parse(data.toString());
      if (msg.id && pending.has(msg.id)) {
        const { res, rej } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) rej(new Error(JSON.stringify(msg.error)));
        else res(msg.result);
      }
    });
    ws.on("error", reject);
  });
}

async function evalPage(cdp, expression) {
  const r = await cdp.send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  if (r.exceptionDetails) {
    throw new Error(JSON.stringify(r.exceptionDetails));
  }
  return r.result.value;
}

async function main() {
  const userDir = fs.mkdtempSync("/tmp/kse-cdp-pass7-");
  const chrome = spawn(
    "google-chrome",
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--disable-dev-shm-usage",
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${userDir}`,
    ],
    { stdio: ["ignore", "ignore", "pipe"] }
  );
  try {
    let targets = [];
    for (let i = 0; i < 40; i++) {
      try {
        targets = JSON.parse(await get(`http://127.0.0.1:${PORT}/json/list`));
        if (targets.length) break;
      } catch (_e) {
        /* wait */
      }
      await sleep(150);
    }
    if (!targets.length) throw new Error("no chrome targets");
    const page = targets.find((t) => t.type === "page") || targets[0];
    const cdp = await cdpConnect(page.webSocketDebuggerUrl);
    await cdp.send("Runtime.enable");
    await cdp.send("Page.enable");
    await cdp.send("Network.enable");

    const routes = {};
    const dashScripts = [];
    for (const route of ROUTES) {
      await cdp.send("Page.navigate", { url: BASE + route });
      await sleep(route === "/dashboard" || route === "/login" ? 4500 : 3500);
      const info = await evalPage(
        cdp,
        `(() => {
          const overlayEl = document.getElementById("webpack-dev-server-client-overlay");
          const overlayIframe = document.querySelector("iframe#webpack-dev-server-client-overlay");
          let overlayText = "";
          try {
            const doc = overlayIframe && overlayIframe.contentDocument;
            overlayText = doc && doc.body ? doc.body.innerText.slice(0, 1200) : "";
          } catch (e) {
            overlayText = String(e && e.message || e);
          }
          const scripts = [...document.scripts].map(s => s.src).filter(Boolean);
          const resources = performance.getEntriesByType("resource").map(e => e.name).filter(n => n.includes(".js"));
          const chunk = (typeof webpackChunkv3dist_recovered_react_app !== "undefined")
            ? webpackChunkv3dist_recovered_react_app
            : null;
          const ids = [];
          if (Array.isArray(chunk)) {
            for (const entry of chunk) {
              const modules = entry && entry[1];
              if (modules && typeof modules === "object") {
                for (const k of Object.keys(modules)) ids.push(k);
              }
            }
          }
          const unpacked = ids.filter(k => /src\\/unpacked\\/module-\\d+\\.js/.test(k));
          const named = ids.filter(k => k.includes("src/named/"));
          return {
            href: location.href,
            title: document.title,
            overlay: !!(overlayEl || overlayIframe),
            overlayText,
            bodyStart: (document.body && document.body.innerText || "").slice(0, 280),
            scripts,
            resources,
            webpackIds: ids.length,
            unpackedUnique: [...new Set(unpacked)].length,
            namedCount: named.length,
          };
        })()`
      );
      routes[route] = {
        overlay: info.overlay,
        overlayText: info.overlayText,
        href: info.href,
        bodyStart: info.bodyStart,
        webpackIds: info.webpackIds,
        unpackedUnique: info.unpackedUnique,
        namedCount: info.namedCount,
        scripts: info.scripts.length,
      };
      console.log(JSON.stringify({
        route,
        overlay: info.overlay,
        overlayText: (info.overlayText || "").slice(0, 180),
        href: info.href,
        bodyStart: (info.bodyStart || "").replace(/\\s+/g, " ").slice(0, 120),
        unpackedUnique: info.unpackedUnique,
        namedCount: info.namedCount,
      }));
      if (route === "/dashboard") {
        const all = [...new Set(info.scripts.concat(info.resources).filter((u) => u.includes("127.0.0.1:8099") && u.endsWith(".js")))];
        dashScripts.push(...all);
        fs.writeFileSync(CHUNK, JSON.stringify({
          overlay: info.overlay,
          href: info.href,
          webpackIds: info.webpackIds,
          unpackedUnique: info.unpackedUnique,
          namedCount: info.namedCount,
          scripts: all,
        }, null, 2) + "\n");
        fs.writeFileSync(RESOURCES, JSON.stringify({ scripts: all }, null, 2) + "\n");
      }
    }
    fs.writeFileSync(OUT, JSON.stringify({ routes, dashScripts: dashScripts.length }, null, 2) + "\n");
    console.log("wrote", OUT);
  } finally {
    chrome.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
