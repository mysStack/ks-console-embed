import module798 from "./module-798.js";
import module1318 from "./module-1318.js";
import module1176 from "./module-1176.js";
import module883 from "./module-883.js";
export default function(e, t) {
    module798(e);
    if (!e || /[\s<>]/.test(e)) {
        return false;
    }
    if (e.indexOf("mailto:") === 0) {
        return false;
    }
    if ((t = module883(t, s)).validate_length && e.length >= 2083) {
        return false;
    }
    if (!t.allow_fragments && e.includes("#")) {
        return false;
    }
    if (!t.allow_query_components && (e.includes("?") || e.includes("&"))) {
        return false;
    }
    let n;
    let l;
    let d;
    let p;
    let h;
    let v;
    let g;
    let y;
    let m;
    g = e.split("#");
    e = g.shift();
    g = e.split("?");
    e = g.shift();
    if ((g = e.split("://")).length > 1) {
        n = g.shift().toLowerCase();
        if (t.require_valid_protocol && t.protocols.indexOf(n) === -1) {
            return false;
        }
    } else {
        if (t.require_protocol) {
            return false;
        }
        if (e.slice(0, 2) === "//") {
            if (!t.allow_protocol_relative_urls) {
                return false;
            }
            g[0] = e.slice(2);
        }
    }
    if ((e = g.join("://")) === "") {
        return false;
    }
    g = e.split("/");
    if ((e = g.shift()) === "" && !t.require_host) {
        return true;
    }
    if ((g = e.split("@")).length > 1) {
        if (t.disallow_auth) {
            return false;
        }
        if (g[0] === "") {
            return false;
        }
        if ((l = g.shift()).indexOf(":") >= 0 && l.split(":").length > 2) {
            return false;
        }
        2;
        const b = ((e)=>{
            if (Array.isArray(e)) {
                return e;
            }
        })(m = l.split(":")) || ((e, t)=>{
            if (typeof Symbol !== "undefined" && Symbol.iterator in Object(e)) {
                const n = [];
                let r = true;
                let o = false;
                let i;
                try {
                    for(var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), n.length !== 2); r = true);
                } catch (error) {
                    o = true;
                    i = error;
                } finally{
                    try {
                        if (!(r || l.return == null)) {
                            l.return();
                        }
                    } finally{
                        if (o) {
                            throw i;
                        }
                    }
                }
                return n;
            }
        })(m) || ((e, t)=>{
            if (e) {
                if (typeof e === "string") {
                    return u(e, 2);
                }
                let n = Object.prototype.toString.call(e).slice(8, -1);
                if (n === "Object" && e.constructor) {
                    n = e.constructor.name;
                }
                if (n === "Map" || n === "Set") {
                    return Array.from(e);
                }
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                    return u(e, 2);
                }
                return undefined;
            }
        })(m) || (()=>{
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })();
        const x = b[0];
        const w = b[1];
        if (x === "" && w === "") {
            return false;
        }
    }
    v = null;
    y = null;
    const _ = (p = g.join("@")).match(c);
    if (_) {
        d = "";
        y = _[1];
        v = _[2] || null;
    } else {
        d = (g = p.split(":")).shift();
        if (g.length) {
            v = g.join(":");
        }
    }
    if (v !== null && v.length > 0) {
        h = parseInt(v, 10);
        if (!/^[0-9]+$/.test(v) || h <= 0 || h > 65535) {
            return false;
        }
    } else if (t.require_port) {
        return false;
    }
    if (t.host_whitelist) {
        return f(d, t.host_whitelist);
    }
    return d === "" && !t.require_host || !!(module1176(d) || module1318(d, t) || y && module1176(y, 6)) && (d = d || y, !t.host_blacklist || !f(d, t.host_blacklist));
};
function u(e, t) {
    if (t == null || t > e.length) {
        t = e.length;
    }
    for(var n = 0, r = new Array(t); n < t; n++){
        r[n] = e[n];
    }
    return r;
}
var s = {
    protocols: [
        "http",
        "https",
        "ftp"
    ],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_port: false,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false,
    allow_fragments: true,
    allow_query_components: true,
    validate_length: true
};
var c = /^\[([^\]]+)\](?::([0-9]+))?$/;
function f(e, t) {
    for (const r of t){
        if (e === r || (o = r, Object.prototype.toString.call(o) === "[object RegExp]" && r.test(e))) {
            return true;
        }
    }
    var o;
    return false;
}

