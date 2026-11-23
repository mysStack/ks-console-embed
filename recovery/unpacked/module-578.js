export const parse = function(e, t) {
    if (typeof e !== "string") {
        throw new TypeError("argument str must be a string");
    }
    const n = {};
    const o = t || {};
    for(let i = e.split(a), s = o.decode || _decodeURIComponent, u = 0; u < i.length; u++){
        const c = i[u];
        let f = c.indexOf("=");
        if (!(f < 0)) {
            const d = c.substr(0, f).trim();
            let p = c.substr(++f, c.length).trim();
            if (p[0] == '"') {
                p = p.slice(1, -1);
            }
            if (n[d] == null) {
                n[d] = l(p, s);
            }
        }
    }
    return n;
};
export const serialize = function(e, t, n) {
    const r = n || {};
    const a = r.encode || _encodeURIComponent;
    if (typeof a !== "function") {
        throw new TypeError("option encode is invalid");
    }
    if (!i.test(e)) {
        throw new TypeError("argument name is invalid");
    }
    const l = a(t);
    if (l && !i.test(l)) {
        throw new TypeError("argument val is invalid");
    }
    let s = `${e}=${l}`;
    if (r.maxAge != null) {
        const u = r.maxAge - 0;
        if (isNaN(u)) {
            throw new Error("maxAge should be a Number");
        }
        s += `; Max-Age=${Math.floor(u)}`;
    }
    if (r.domain) {
        if (!i.test(r.domain)) {
            throw new TypeError("option domain is invalid");
        }
        s += `; Domain=${r.domain}`;
    }
    if (r.path) {
        if (!i.test(r.path)) {
            throw new TypeError("option path is invalid");
        }
        s += `; Path=${r.path}`;
    }
    if (r.expires) {
        if (typeof r.expires.toUTCString !== "function") {
            throw new TypeError("option expires is invalid");
        }
        s += `; Expires=${r.expires.toUTCString()}`;
    }
    if (r.httpOnly) {
        s += "; HttpOnly";
    }
    if (r.secure) {
        s += "; Secure";
    }
    if (r.sameSite) {
        switch(typeof r.sameSite === "string" ? r.sameSite.toLowerCase() : r.sameSite){
            case true:
            case "strict":
                s += "; SameSite=Strict";
                break;
            case "lax":
                s += "; SameSite=Lax";
                break;
            default:
                throw new TypeError("option sameSite is invalid");
        }
    }
    return s;
};
var _decodeURIComponent = decodeURIComponent;
var _encodeURIComponent = encodeURIComponent;
var a = /; */;
var i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function l(e, t) {
    try {
        return t(e);
    } catch (t) {
        return e;
    }
}
