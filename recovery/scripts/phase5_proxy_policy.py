"""HTTP method policy for the Phase 5/6 recovery static proxy."""
import os

WRITE_METHODS = {"POST", "PUT", "PATCH", "DELETE"}


def readonly_enabled(env=None):
    raw = (env or os.environ).get("PHASE5_READONLY", "1")
    return str(raw).strip().lower() not in {"0", "false", "no", "off"}


def is_session_write_path(path):
    if not path:
        return False
    return (
        path == "/login"
        or path.startswith("/login?")
        or path == "/logout"
        or path.startswith("/logout?")
        or path == "/csrf_token"
        or path.startswith("/csrf_token?")
    )


def should_allow_proxy_method(method, path, readonly=None):
    method = (method or "").upper()
    if readonly is None:
        readonly = readonly_enabled()
    if method in {"GET", "HEAD"}:
        return True
    if method == "POST" and is_session_write_path(path):
        return True
    if method in WRITE_METHODS and readonly:
        return False
    return method in WRITE_METHODS
