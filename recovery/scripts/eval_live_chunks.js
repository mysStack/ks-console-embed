#!/usr/bin/env node
"use strict";
/**
 * Headless Chrome CDP: /login + /dashboard overlay and webpackChunk unpacked ids.
 * Uses webpack-dev-server's nested `ws` package. No new npm packages.
 */
const http = require("http");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const WS_PATH = "/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/node_modules/ws";
const WebSocket = require(WS_PATH);
const OUT = "/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/LIVE_WEBPACK_CHUNK.json";
const RESOURCES = "/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/LIVE_RESOURCES.json";
const PORT = 9333;
const BASE = "http://127.0.0.1:8099";

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
  const userDir = fs.mkdtempSync("/tmp/kse-cdp-");
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
    const allScripts = new Set();
    for (const route of ["/login", "/dashboard"]) {
      await cdp.send("Page.navigate", { url: BASE + route });
      await sleep(4000);
      const info = await evalPage(
        cdp,
        `(() => {
          const overlay = !!document.getElementById("webpack-dev-server-client-overlay");
          const overlayIframe = !!document.querySelector("iframe#webpack-dev-server-client-overlay");
          const scripts = [...document.scripts].map(s => s.src).filter(Boolean);
          const resources = performance.getEntriesByType("resource").map(e => e.name).filter(n => n.includes(".js"));
          const chunk = (typeof webpackChunkv3dist_recovered_react_app !== "undefined")
            ? webpackChunkv3dist_recovered_react_app
            : (typeof webpackChunkv3dist !== "undefined" ? webpackChunkv3dist : null);
          const ids = [];
          if (Array.isArray(chunk)) {
            for (const entry of chunk) {
              const modules = entry && entry[1];
              if (modules && typeof modules === "object") {
                for (const k of Object.keys(modules)) ids.push(k);
              }
            }
          }
          return {
            href: location.href,
            title: document.title,
            overlay,
            overlayIframe,
            bodyStart: (document.body && document.body.innerText || "").slice(0, 240),
            scripts,
            resources,
            chunkName: chunk ? "present" : "missing",
            webpackIds: ids,
          };
        })()`
      );
      for (const u of info.scripts.concat(info.resources)) allScripts.add(u);
      routes[route] = info;
      console.log(
        JSON.stringify({
          route,
          overlay: info.overlay || info.overlayIframe,
          href: info.href,
          bodyStart: info.bodyStart,
          webpackIds: info.webpackIds.length,
          scripts: info.scripts.length,
          resources: info.resources.length,
        })
      );
    }
    const report = {
      routes: {
        "/login": {
          overlay: routes["/login"].overlay || routes["/login"].overlayIframe,
          href: routes["/login"].href,
          bodyStart: routes["/login"].bodyStart,
          webpackIds: routes["/login"].webpackIds.length,
        },
        "/dashboard": {
          overlay: routes["/dashboard"].overlay || routes["/dashboard"].overlayIframe,
          href: routes["/dashboard"].href,
          bodyStart: routes["/dashboard"].bodyStart,
          webpackIds: routes["/dashboard"].webpackIds.length,
        },
      },
      webpackIds: [...new Set(routes["/login"].webpackIds.concat(routes["/dashboard"].webpackIds))],
      scripts: [...allScripts],
    };
    fs.writeFileSync(OUT, JSON.stringify(report, null, 2) + "\n");
    fs.writeFileSync(RESOURCES, JSON.stringify({ scripts: report.scripts }, null, 2) + "\n");
    console.log("wrote", OUT, "ids", report.webpackIds.length, "scripts", report.scripts.length);
  } finally {
    chrome.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
