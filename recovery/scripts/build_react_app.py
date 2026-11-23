#!/usr/bin/env python3
"""Classify Wakaru unpack output and scaffold recovery/react-app.

Does not rewrite business logic. Does not touch dist/v3dist.
"""
from __future__ import annotations

import json
import re
import shutil
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery")
UNPACKED = ROOT / "unpacked"
APP = ROOT / "react-app"
SRC = APP / "src"
UNPACKED_DST = SRC / "unpacked"

CHUNK_NAMES = {
    "0.79b1d388db9009cab691.js": "vendor",
    "1.9ca3a76d71946712055c.js": "common",
    "2.a875961480f3e500c2c8.js": "access",
    "3.bb6cbee4309e765b70c1.js": "actions",
    "4.49e1bbd1d064c2cb5c0d.js": "clusters",
    "5.b3ebc4536a8f41200f09.js": "console",
    "6.8bcf3ff261066d30352e.js": "devops",
    "7.e17520c994653ce8d2f4.js": "edgewize",
    "8.efefc7072f02199ebc47.js": "fedprojects",
    "10.0a4386054b517ee54ead.js": "nodegroup",
    "11.4803f6f37e8687716aa1.js": "observability",
    "12.2a69b0c5dbf5a00a4a8d.js": "projects",
    "13.49ba3bf3c56e4e52c867.js": "react-ace",
    "14.87db00577a502c52dfc5.js": "settings",
    "15.085308545755091f5ce0.js": "terminal",
    "16.c38048441fc60c1f26b2.js": "workspaces",
    "main.558f452048e49db23323.js": "main",
}

VENDOR_CHUNKS = {"vendor", "react-ace"}
BUSINESS_CHUNKS = {
    "main",
    "access",
    "actions",
    "clusters",
    "console",
    "devops",
    "edgewize",
    "fedprojects",
    "nodegroup",
    "observability",
    "projects",
    "settings",
    "terminal",
    "workspaces",
}

FINGERPRINTS = [
    ("react", ("Minified React error", "react.element")),
    ("react-dom", ("__REACT_DEVTOOLS_GLOBAL_HOOK__", "checkDCE")),
    ("mobx", ("mobxAdminProperty", "[MobX]")),
    ("mobx-react", ("inject", "mobx-react")),
    ("lodash", ("__lodash_hash_undefined__", "lodash")),
    ("moment", ("moment#isMoment", "moment.locale")),
    ("react-router", ("Router.computeRootMatch", "withRouter")),
    ("history", ("history/createBrowserHistory", "createBrowserHistory")),
    ("kube-design", ("@kube-design/components", "ks-page-loading")),
]


def load_warnings():
    report = json.loads((ROOT / "report.json").read_text())
    by_file = defaultdict(list)
    for w in report.get("warnings") or []:
        by_file[w.get("filename")].append(w)
    return report, by_file


def classify():
    prov = json.loads((UNPACKED / "provenance.json").read_text())
    report, warns = load_warnings()
    records = []
    lib_hits = Counter()
    named = {}

    for filename, meta in prov["modules"].items():
        path = UNPACKED / filename
        if not path.exists() or path.suffix != ".js":
            continue
        src = Path(meta.get("input") or "").name
        chunk = CHUNK_NAMES.get(src, "other")
        text = path.read_text(errors="replace")
        size = path.stat().st_size

        libs = [name for name, needles in FINGERPRINTS if all(n in text for n in needles)]
        if not libs:
            # weaker single-needle for kube-design Loading
            if "LocaleProvider" in text and "Loading" in text and "module.exports" not in text[:80]:
                libs = ["kube-design"]
        for lib in libs:
            lib_hits[lib] += 1

        routes = sorted(set(re.findall(r'path:\s*["\'](/[^"\']+)["\']', text)))
        store_mods = sorted(set(re.findall(r'module:\s*["\']([A-Za-z0-9_-]+)["\']', text)))
        kapis = sorted(set(re.findall(r'["\'](/kapis/[^"\']+)["\']', text)))[:12]
        create_el = text.count("createElement")
        named_exports = re.findall(r"export \{([^}]+)\}", text)
        export_names = []
        for block in named_exports:
            export_names.extend(re.findall(r"[A-Za-z_][A-Za-z0-9_]*", block))

        kind = "unknown"
        if chunk in VENDOR_CHUNKS or libs:
            kind = "vendor"
        elif chunk in BUSINESS_CHUNKS and (routes or store_mods or create_el or kapis):
            kind = "business"
        elif chunk in BUSINESS_CHUNKS:
            kind = "business-support"
        elif chunk == "common":
            kind = "shared"

        hint = None
        if routes and store_mods:
            hint = f"{store_mods[0]}:{routes[0]}"
        elif store_mods:
            hint = store_mods[0]
        elif routes:
            hint = routes[0]
        elif libs:
            hint = libs[0]
        if hint:
            named[filename] = hint

        records.append(
            {
                "filename": filename,
                "chunk": chunk,
                "input": src,
                "bytes": size,
                "kind": kind,
                "libs": libs,
                "routes": routes[:20],
                "stores": store_mods[:10],
                "kapis": kapis,
                "createElement": create_el,
                "exportNames": sorted(set(export_names))[:30],
                "warnings": [w.get("kind") for w in warns.get(filename, [])],
                "hint": hint,
            }
        )

    records.sort(key=lambda r: (r["kind"], r["chunk"], r["filename"]))
    kinds = Counter(r["kind"] for r in records)
    chunks = Counter(r["chunk"] for r in records)
    index = {
        "totals": {
            "modules": len(records),
            "kinds": dict(kinds),
            "chunks": dict(chunks),
            "libHits": dict(lib_hits),
            "namedHints": len(named),
            "wakaruFailed": report.get("failed"),
            "wakaruWarnings": len(report.get("warnings") or []),
        },
        "named": named,
        "modules": records,
    }
    (ROOT / "module-index.json").write_text(json.dumps(index, indent=2, ensure_ascii=False))
    return index


PACKAGE_JSON = {
    "name": "v3dist-recovered-react-app",
    "private": True,
    "version": "0.0.0-recovered",
    "description": "Best-effort React app reconstructed from Wakaru-unpacked KubeSphere Console v3dist. Not original source.",
    "scripts": {
        "build": "webpack --mode production",
        "start": "webpack serve --mode development",
    },
    "dependencies": {
        "@kube-design/components": "^1.32.0",
        "classnames": "^2.2.5",
        "lodash": "^4.17.21",
        "mobx": "^4.15.4",
        "mobx-react": "^6.2.2",
        "mobx-react-router": "^4.1.0",
        "moment-mini": "^2.19.4",
        "prop-types": "^15.6.0",
        "qs": "^6.5.2",
        "react": "^16.6.3",
        "react-dom": "^16.6.3",
        "react-router": "^5.1.2",
        "react-router-dom": "^5.1.2",
    },
    "devDependencies": {
        "@babel/core": "^7.23.0",
        "@babel/preset-env": "^7.23.0",
        "@babel/preset-react": "^7.23.0",
        "babel-loader": "^9.1.3",
        "css-loader": "^6.8.1",
        "html-webpack-plugin": "^5.5.3",
        "style-loader": "^3.3.3",
        "webpack": "^5.89.0",
        "webpack-cli": "^5.1.4",
        "webpack-dev-server": "^4.15.1",
    },
}

WEBPACK = r"""const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "src/bootstrap.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.[contenthash:8].js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      // Identified unpacked copies of React. Prefer npm packages for the public graph.
      [path.resolve(__dirname, "src/unpacked/module-553.js")]: require.resolve("react"),
      [path.resolve(__dirname, "src/unpacked/module-106.js")]: require.resolve("react-dom"),
    },
  },
  module: {
    parser: {
      javascript: {
        exportsPresence: false,
        importExportsPresence: false,
      },
    },
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "public/index.html" }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
    }),
  ],
  performance: { hints: false },
  stats: "errors-warnings",
};
"""

BOOTSTRAP = r"""import "./globals-shim.js";
import "./unpacked/entry.js";
"""

GLOBALS = r"""window.globals = window.globals || {
  config: {
    title: "KubeSphere (recovered)",
    enableErrorNotify: false,
    disableAuthorization: true,
  },
  ksConfig: {
    enabledExtensionModulesStatus: {},
  },
  user: { username: "recovered" },
};
window.t =
  window.t ||
  function t(key) {
    return key;
  };
"""

INDEX_HTML = r"""<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>v3dist recovered React app</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
"""


def write_named_index(index):
    lines = [
        "# Recovered module names",
        "",
        "Hints come from routes, store module ids, and library fingerprints in unpacked code.",
        "Filenames stay `module-<id>.js` so the import graph is not guessed.",
        "",
        "| file | chunk | kind | hint |",
        "| --- | --- | --- | --- |",
    ]
    for rec in index["modules"]:
        if rec.get("hint"):
            hint = str(rec["hint"]).replace("|", "/")
            lines.append(
                f"| `{rec['filename']}` | {rec['chunk']} | {rec['kind']} | `{hint}` |"
            )
    (APP / "RECOVERED_NAMES.md").write_text("\n".join(lines) + "\n")
    (APP / "src" / "recovered-names.json").write_text(
        json.dumps(index["named"], indent=2, ensure_ascii=False)
    )


def scaffold(index):
    if APP.exists():
        shutil.rmtree(APP)
    SRC.mkdir(parents=True)
    (APP / "public").mkdir()
    if UNPACKED_DST.exists():
        shutil.rmtree(UNPACKED_DST)
    shutil.copytree(
        UNPACKED,
        UNPACKED_DST,
        ignore=shutil.ignore_patterns("provenance.json"),
    )
    (APP / "package.json").write_text(json.dumps(PACKAGE_JSON, indent=2) + "\n")
    (APP / "webpack.config.js").write_text(WEBPACK)
    (APP / "src" / "bootstrap.js").write_text(BOOTSTRAP)
    (APP / "src" / "globals-shim.js").write_text(GLOBALS)
    (APP / "public" / "index.html").write_text(INDEX_HTML)
    write_named_index(index)
    summary = {
        "source": str(UNPACKED),
        "copiedModules": len(list(UNPACKED_DST.glob("*.js"))),
        "totals": index["totals"],
        "note": "Business JS is the Wakaru unpack. Vendor copies remain as modules unless webpack aliases them to npm.",
    }
    (APP / "scaffold.json").write_text(json.dumps(summary, indent=2, ensure_ascii=False))
    print(json.dumps(index["totals"], indent=2))
    print("wrote", APP)


if __name__ == "__main__":
    index = classify()
    scaffold(index)
