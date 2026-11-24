#!/usr/bin/env python3
"""Serve phase4-build on an independent port. Does not touch 8099 or v3dist files."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote, urlparse
import http.client
import mimetypes
import os
import re
import socket
import sys
import threading

PORT = int(os.environ.get("PHASE5_PORT", "8108"))
ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
BUILD = ROOT / "recovery/react-app/phase4-build"
V3DIST = Path("/home/bruce/code/ks-develop/console/dist/v3dist")
ARTIFACT = "phase4-build"


def discover_main_js():
    html = (BUILD / "index.html").read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"src=/?([a-zA-Z0-9._-]+\.js)", html)
    if m:
        return m.group(1)
    mains = sorted(BUILD.glob("app.*.js"))
    if mains:
        return mains[0].name
    raise SystemExit("phase4-build has no app.*.js")


MAIN_JS = discover_main_js() if (BUILD / "index.html").is_file() else ""
API_ORIGIN = os.environ.get("PHASE5_API_ORIGIN", "http://192.168.2.131:30880")
HOP = {
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailers",
    "transfer-encoding",
    "upgrade",
    "host",
}


def api_parts():
    u = urlparse(API_ORIGIN)
    return u.scheme, u.hostname, u.port or (443 if u.scheme == "https" else 80)


def should_proxy(method, path):
    if path == "/login" or path.startswith("/login?"):
        return method in {"POST", "PUT", "PATCH", "DELETE"}
    prefixes = ("/kapis", "/apis", "/api/", "/oauth", "/logout", "/csrf_token")
    return any(path == p.rstrip("/") or path.startswith(p if p.endswith("/") else p + "/") or path.startswith(p) for p in prefixes)


class Handler(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        sys.stderr.write("[phase5 %s] %s\n" % (ARTIFACT, fmt % args))

    def end_headers(self):
        self.send_header("X-Recovery-Artifact", ARTIFACT)
        self.send_header("X-Recovery-Main-Js", MAIN_JS)
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def translate_path(self, path):
        return str(BUILD)

    def send_file(self, path: Path, content_type=None):
        if not path.is_file():
            return False
        data = path.read_bytes()
        ctype = content_type or mimetypes.guess_type(str(path))[0] or "application/octet-stream"
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)
        return True

    def proxy(self, method):
        length = int(self.headers.get("Content-Length") or 0)
        body = self.rfile.read(length) if length else None
        scheme, host, port = api_parts()
        conn_cls = http.client.HTTPSConnection if scheme == "https" else http.client.HTTPConnection
        headers = {k: v for k, v in self.headers.items() if k.lower() not in HOP}
        conn = conn_cls(host, port, timeout=30)
        try:
            conn.request(method, self.path, body=body, headers=headers)
            resp = conn.getresponse()
            data = resp.read()
        except Exception as exc:
            msg = '{"reason":"api-proxy-error","message":"%s"}' % str(exc).replace('"', "")
            payload = msg.encode()
            self.send_response(502)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(payload)))
            self.send_header("X-Recovery-Api-Origin", API_ORIGIN)
            super().end_headers()
            self.wfile.write(payload)
            return
        finally:
            conn.close()
        self.send_response(resp.status)
        for key, val in resp.getheaders():
            if key.lower() in HOP:
                continue
            if key.lower() == "content-length":
                continue
            self.send_header(key, val)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("X-Recovery-Api-Origin", API_ORIGIN)
        super().end_headers()
        self.wfile.write(data)

    def proxy_websocket(self):
        scheme, host, port = api_parts()
        backend = socket.create_connection((host, port), timeout=30)
        backend.settimeout(None)
        lines = ["%s %s HTTP/1.1" % (self.command, self.path)]
        for key, val in self.headers.items():
            if key.lower() == "host":
                val = "%s:%s" % (host, port)
            lines.append("%s: %s" % (key, val))
        payload = ("\r\n".join(lines) + "\r\n\r\n").encode("iso-8859-1")
        backend.sendall(payload)

        def pump(src, dst):
            try:
                while True:
                    data = src.recv(65536)
                    if not data:
                        break
                    dst.sendall(data)
            except Exception:
                pass
            try:
                dst.shutdown(socket.SHUT_WR)
            except Exception:
                pass

        client = self.connection
        client.settimeout(None)
        up = threading.Thread(target=pump, args=(client, backend), daemon=True)
        down = threading.Thread(target=pump, args=(backend, client), daemon=True)
        up.start()
        down.start()
        up.join()
        down.join()
        try:
            backend.close()
        except Exception:
            pass

    def do_GET(self):
        raw = unquote(urlparse(self.path).path)
        if self.headers.get("Upgrade", "").lower() == "websocket" and should_proxy("GET", raw):
            self.proxy_websocket()
            return
        if should_proxy("GET", raw):
            self.proxy("GET")
            return
        if raw == "/__phase5":
            body = (
                '{"artifact":"%s","mainJs":"%s","buildDir":"%s","apiOrigin":"%s"}'
                % (ARTIFACT, MAIN_JS, BUILD, API_ORIGIN)
            ).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        if raw.startswith("/v3css/"):
            name = Path(raw[len("/v3css/") :]).name
            if self.send_file(V3DIST / name, "text/css"):
                return
        if raw.startswith("/dist/v3dist/"):
            rel = raw[len("/dist/v3dist/") :]
            candidate = (V3DIST / rel).resolve()
            if str(candidate).startswith(str(V3DIST.resolve())) and candidate.is_file():
                ctype = "application/json" if candidate.suffix == ".json" else None
                if self.send_file(candidate, ctype):
                    return
        if raw.startswith("/assets/"):
            rel = raw[len("/assets/") :]
            candidate = (V3DIST / "assets" / rel).resolve()
            if str(candidate).startswith(str((V3DIST / "assets").resolve())) and self.send_file(candidate):
                return
        if raw.startswith("/locale-") and raw.endswith(".json"):
            name = Path(raw).name
            if self.send_file(V3DIST / name, "application/json"):
                return
        rel = raw.lstrip("/")
        if rel:
            candidate = (BUILD / rel).resolve()
            if str(candidate).startswith(str(BUILD.resolve())) and candidate.is_file():
                self.send_file(candidate)
                return
            static_ext = (".js", ".css", ".map", ".json", ".woff", ".woff2", ".ttf", ".png", ".svg", ".jpg", ".ico")
            if raw.endswith(static_ext):
                self.send_response(404)
                self.send_header("Content-Type", "text/plain")
                self.send_header("Content-Length", "9")
                self.end_headers()
                self.wfile.write(b"not found")
                return
        # SPA fallback for HTML routes only — never serve original v3dist JS
        self.send_file(BUILD / "index.html", "text/html")

    def do_POST(self):
        raw = unquote(urlparse(self.path).path)
        if should_proxy("POST", raw):
            self.proxy("POST")
            return
        body = b'{"reason":"no-apiserver","message":"phase4-build static host does not proxy this path"}'
        self.send_response(503)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_PUT(self):
        self.proxy("PUT") if should_proxy("PUT", unquote(urlparse(self.path).path)) else self.do_POST()

    def do_PATCH(self):
        self.proxy("PATCH") if should_proxy("PATCH", unquote(urlparse(self.path).path)) else self.do_POST()

    def do_DELETE(self):
        raw = unquote(urlparse(self.path).path)
        if should_proxy("DELETE", raw):
            self.proxy("DELETE")
            return
        self.send_response(404)
        self.end_headers()

    do_HEAD = do_GET


def main():
    if not (BUILD / "index.html").is_file() or not (BUILD / MAIN_JS).is_file():
        raise SystemExit("phase4-build missing index.html or %s" % MAIN_JS)
    httpd = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    print(
        "phase5-static listening 0.0.0.0:%s artifact=%s main=%s api=%s"
        % (PORT, ARTIFACT, MAIN_JS, API_ORIGIN),
        flush=True,
    )
    httpd.serve_forever()


if __name__ == "__main__":
    main()
