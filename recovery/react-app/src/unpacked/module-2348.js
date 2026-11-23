class r {
    constructor(){
        this.protocol = null;
        this.slashes = null;
        this.auth = null;
        this.port = null;
        this.hostname = null;
        this.hash = null;
        this.search = null;
        this.pathname = null;
    }
    parse(e, t) {
        let n;
        let r;
        let i;
        let l;
        let u;
        let v = e;
        v = v.trim();
        if (!t && e.split("#").length === 1) {
            const g = a.exec(v);
            if (g) {
                this.pathname = g[1];
                if (g[2]) {
                    this.search = g[2];
                }
                return this;
            }
        }
        let y = o.exec(v);
        if (y) {
            i = (y = y[0]).toLowerCase();
            this.protocol = y;
            v = v.substr(y.length);
        }
        if (t || y || v.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            if (!(!(u = v.substr(0, 2) === "//") || y && p[y])) {
                v = v.substr(2);
                this.slashes = true;
            }
        }
        if (!p[y] && (u || y && !h[y])) {
            let m;
            let b;
            let x = -1;
            for(n = 0; n < c.length; n++){
                if ((l = v.indexOf(c[n])) !== -1 && (x === -1 || l < x)) {
                    x = l;
                }
            }
            if ((b = x === -1 ? v.lastIndexOf("@") : v.lastIndexOf("@", x)) !== -1) {
                m = v.slice(0, b);
                v = v.slice(b + 1);
                this.auth = m;
            }
            x = -1;
            for(n = 0; n < s.length; n++){
                if ((l = v.indexOf(s[n])) !== -1 && (x === -1 || l < x)) {
                    x = l;
                }
            }
            if (x === -1) {
                x = v.length;
            }
            if (v[x - 1] === ":") {
                x--;
            }
            const w = v.slice(0, x);
            v = v.slice(x);
            this.parseHost(w);
            this.hostname = this.hostname || "";
            const _ = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
            if (!_) {
                const C = this.hostname.split(/\./);
                n = 0;
                for(r = C.length; n < r; n++){
                    const O = C[n];
                    if (O && !O.match(f)) {
                        let E = "";
                        for(let M = 0, S = O.length; M < S; M++){
                            if (O.charCodeAt(M) > 127) {
                                E += "x";
                            } else {
                                E += O[M];
                            }
                        }
                        if (!E.match(f)) {
                            const A = C.slice(0, n);
                            const k = C.slice(n + 1);
                            const j = O.match(d);
                            if (j) {
                                A.push(j[1]);
                                k.unshift(j[2]);
                            }
                            if (k.length) {
                                v = k.join(".") + v;
                            }
                            this.hostname = A.join(".");
                            break;
                        }
                    }
                }
            }
            if (this.hostname.length > 255) {
                this.hostname = "";
            }
            if (_) {
                this.hostname = this.hostname.substr(1, this.hostname.length - 2);
            }
        }
        const T = v.indexOf("#");
        if (T !== -1) {
            this.hash = v.substr(T);
            v = v.slice(0, T);
        }
        const P = v.indexOf("?");
        if (P !== -1) {
            this.search = v.substr(P);
            v = v.slice(0, P);
        }
        if (v) {
            this.pathname = v;
        }
        if (h[i] && this.hostname && !this.pathname) {
            this.pathname = "";
        }
        return this;
    }
    parseHost(e) {
        let t = i.exec(e);
        if (t) {
            if ((t = t[0]) !== ":") {
                this.port = t.substr(1);
            }
            e = e.substr(0, e.length - t.length);
        }
        if (e) {
            this.hostname = e;
        }
    }
}
const o = /^([a-z0-9.+-]+:)/i;
const i = /:[0-9]*$/;
const a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
const l = [
    "{",
    "}",
    "|",
    "\\",
    "^",
    "`",
    "<",
    ">",
    '"',
    "`",
    " ",
    "\r",
    "\n",
    "\t"
];
const u = [
    "'",
    ...l
];
const s = [
    "%",
    "/",
    "?",
    ";",
    "#"
].concat(u);
const c = [
    "/",
    "?",
    "#"
];
const f = /^[+a-z0-9A-Z_-]{0,63}$/;
const d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
const p = {
    javascript: true,
    "javascript:": true
};
const h = {
    http: true,
    https: true,
    ftp: true,
    gopher: true,
    file: true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
};
export default function(e, t) {
    if (e && e instanceof r) {
        return e;
    }
    const n = new r;
    n.parse(e, t);
    return n;
};
