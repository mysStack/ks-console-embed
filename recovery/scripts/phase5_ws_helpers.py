"""Helpers for the Phase 5/6 test static server websocket tunnel."""
import socket
import ssl
import threading

TERMINAL_WS_PREFIX = "/kapis/terminal.kubesphere.io/"
WS_HANDSHAKE_TIMEOUT = 15
WS_IDLE_TIMEOUT = 600


def should_proxy_websocket(path):
    if not path:
        return False
    return path.startswith(TERMINAL_WS_PREFIX)


def parse_status_code(header):
    first = header.split(b"\r\n", 1)[0].decode("iso-8859-1", "replace")
    parts = first.split()
    if len(parts) < 2:
        raise ValueError("invalid websocket handshake status line")
    return int(parts[1])


def read_http_headers(sock, limit=65536):
    buf = b""
    while b"\r\n\r\n" not in buf:
        chunk = sock.recv(4096)
        if not chunk:
            raise OSError("backend closed during websocket handshake")
        buf += chunk
        if len(buf) > limit:
            raise OSError("websocket handshake too large")
    header, rest = buf.split(b"\r\n\r\n", 1)
    return header, rest


def connect_backend(scheme, host, port, timeout=30):
    raw = socket.create_connection((host, port), timeout=timeout)
    if scheme == "https":
        ctx = ssl.create_default_context()
        return ctx.wrap_socket(raw, server_hostname=host)
    return raw


def close_quietly(sock):
    if sock is None:
        return
    try:
        sock.close()
    except Exception:
        pass


def pump_socket(src, dst):
    try:
        while True:
            try:
                data = src.recv(65536)
            except socket.timeout:
                break
            if not data:
                break
            dst.sendall(data)
    except Exception:
        pass
    try:
        dst.shutdown(socket.SHUT_WR)
    except Exception:
        pass


def pump_bidirectional(client, backend):
    up = threading.Thread(target=pump_socket, args=(client, backend), daemon=True)
    down = threading.Thread(target=pump_socket, args=(backend, client), daemon=True)
    up.start()
    down.start()
    up.join()
    down.join()
