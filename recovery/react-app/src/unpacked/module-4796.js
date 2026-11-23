import "unpacked/module-38.js";
import module8 from "unpacked/module-8.js";
import module33 from "unpacked/module-33.js";
import module1921 from "unpacked/module-1921.js";
import module25 from "unpacked/module-25.js";
import module142 from "unpacked/module-142.js";
import module21 from "unpacked/module-21.js";
import module67 from "unpacked/module-67.js";
import module113 from "unpacked/module-113.js";
import module254 from "unpacked/module-254.js";
import module53 from "unpacked/module-53.js";
import module508 from "unpacked/module-508.js";
import module502 from "unpacked/module-502.js";
import module124 from "unpacked/module-124.js";
import module352 from "unpacked/module-352.js";
import module4797 from "unpacked/module-4797.js";
import module46 from "unpacked/module-46.js";
import module123 from "unpacked/module-123.js";
import module328 from "unpacked/module-328.js";
import module1922 from "unpacked/module-1922.js";
import module101 from "unpacked/module-101.js";
let r;
const module352_codeAt = module352.codeAt;
const module101_set = module101.set;
const E = module101.getterFor("URL");
const { URLSearchParams, getState } = module1922;
const { URL, TypeError, parseInt } = module25;
const L = module21("".charAt);
const z = module21(/./.exec);
const N = module21([].join);
const D = module21(1..toString);
const I = module21([].pop);
const R = module21([].push);
const H = module21("".replace);
const B = module21([].shift);
const F = module21("".split);
const V = module21("".slice);
const $ = module21("".toLowerCase);
const U = module21([].unshift);
const Z = /[a-z]/i;
const W = /[\d+-.a-z]/i;
const K = /\d/;
const G = /^0x/i;
const q = /^[0-7]+$/;
const Y = /^\d+$/;
const X = /^[\da-f]+$/i;
const J = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
const Q = /[\0\t\n\r #/:<>?@[\\\]^|]/;
const ee = /^[\u0000-\u0020]+/;
const te = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
const ne = /[\t\n\r]/g;
const re = (e)=>{
    let t;
    let n;
    let r;
    let o;
    if (typeof e === "number") {
        t = [];
        for(n = 0; n < 4; n++){
            U(t, e % 256);
            e = Math.floor(e / 256);
        }
        return N(t, ".");
    }
    if (typeof e === "object") {
        t = "";
        r = ((e)=>{
            let t = null;
            let n = 1;
            let r = null;
            let o = 0;
            for(let i = 0; i < 8; i++){
                if (e[i] !== 0) {
                    if (o > n) {
                        t = r;
                        n = o;
                    }
                    r = null;
                    o = 0;
                } else {
                    if (r === null) {
                        r = i;
                    }
                    ++o;
                }
            }
            if (o > n) {
                t = r;
                n = o;
            }
            return t;
        })(e);
        for(n = 0; n < 8; n++){
            if (!(o && e[n] === 0)) {
                if (o) {
                    o = false;
                }
                if (r === n) {
                    t += n ? ":" : "::";
                    o = true;
                } else {
                    t += D(e[n], 16);
                    if (n < 7) {
                        t += ":";
                    }
                }
            }
        }
        return `[${t}]`;
    }
    return e;
};
const oe = {};
const ie = module508({}, oe, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
});
const ae = module508({}, ie, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
});
const le = module508({}, ae, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
});
const ue = (e, t)=>{
    const n = module352_codeAt(e, 0);
    if (n > 32 && n < 127 && !module53(t, e)) {
        return e;
    }
    return encodeURIComponent(e);
};
const se = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
const ce = (e, t)=>{
    let n;
    return e.length === 2 && z(Z, L(e, 0)) && ((n = L(e, 1)) === ":" || !t && n === "|");
};
const fe = (e)=>{
    let t;
    return e.length > 1 && ce(V(e, 0, 2)) && (e.length === 2 || (t = L(e, 2)) === "/" || t === "\\" || t === "?" || t === "#");
};
const de = (e)=>e === "." || $(e) === "%2e";
const pe = {};
const he = {};
const ve = {};
const ge = {};
const ye = {};
const me = {};
const be = {};
const xe = {};
const we = {};
const _e = {};
const Ce = {};
const Oe = {};
const Ee = {};
const Me = {};
const Se = {};
const Ae = {};
const ke = {};
const je = {};
const Te = {};
const Pe = {};
const Le = {};
const ze = function(e, t, n) {
    let r;
    let o;
    let i;
    const a = module46(e);
    if (t) {
        if (o = this.parse(a)) {
            throw new TypeError(o);
        }
        this.searchParams = null;
    } else {
        if (n !== undefined) {
            r = new ze(n, true);
        }
        if (o = this.parse(a, null, r)) {
            throw new TypeError(o);
        }
        (i = getState(new URLSearchParams)).bindURL(this);
        this.searchParams = i;
    }
};
ze.prototype = {
    type: "URL",
    parse: function(e, t, n) {
        let o;
        let i;
        let a;
        let l;
        let u;
        const _this = this;
        let c = t || pe;
        let f = 0;
        let d = "";
        let h = false;
        let y = false;
        let m = false;
        e = module46(e);
        if (!t) {
            _this.scheme = "";
            _this.username = "";
            _this.password = "";
            _this.host = null;
            _this.port = null;
            _this.path = [];
            _this.query = null;
            _this.fragment = null;
            _this.cannotBeABaseURL = false;
            e = H(e, ee, "");
            e = H(e, te, "$1");
        }
        e = H(e, ne, "");
        for(o = module502(e); f <= o.length;){
            i = o[f];
            switch(c){
                case pe:
                    if (!i || !z(Z, i)) {
                        if (t) {
                            return "Invalid scheme";
                        }
                        c = ve;
                        continue;
                    }
                    d += $(i);
                    c = he;
                    break;
                case he:
                    if (i && (z(W, i) || i === "+" || i === "-" || i === ".")) {
                        d += $(i);
                    } else {
                        if (i !== ":") {
                            if (t) {
                                return "Invalid scheme";
                            }
                            d = "";
                            c = ve;
                            f = 0;
                            continue;
                        }
                        if (t && (_this.isSpecial() !== module53(se, d) || d === "file" && (_this.includesCredentials() || _this.port !== null) || _this.scheme === "file" && !_this.host)) {
                            return;
                        }
                        _this.scheme = d;
                        if (t) {
                            return void (_this.isSpecial() && se[_this.scheme] === _this.port && (_this.port = null));
                        }
                        d = "";
                        if (_this.scheme === "file") {
                            c = Me;
                        } else if (_this.isSpecial() && n && n.scheme === _this.scheme) {
                            c = ge;
                        } else if (_this.isSpecial()) {
                            c = xe;
                        } else if (o[f + 1] === "/") {
                            c = ye;
                            f++;
                        } else {
                            _this.cannotBeABaseURL = true;
                            R(_this.path, "");
                            c = Te;
                        }
                    }
                    break;
                case ve:
                    if (!n || n.cannotBeABaseURL && i !== "#") {
                        return "Invalid scheme";
                    }
                    if (n.cannotBeABaseURL && i === "#") {
                        _this.scheme = n.scheme;
                        _this.path = module124(n.path);
                        _this.query = n.query;
                        _this.fragment = "";
                        _this.cannotBeABaseURL = true;
                        c = Le;
                        break;
                    }
                    c = n.scheme === "file" ? Me : me;
                    continue;
                case ge:
                    if (i !== "/" || o[f + 1] !== "/") {
                        c = me;
                        continue;
                    }
                    c = we;
                    f++;
                    break;
                case ye:
                    if (i === "/") {
                        c = _e;
                        break;
                    }
                    c = je;
                    continue;
                case me:
                    _this.scheme = n.scheme;
                    if (i === r) {
                        _this.username = n.username;
                        _this.password = n.password;
                        _this.host = n.host;
                        _this.port = n.port;
                        _this.path = module124(n.path);
                        _this.query = n.query;
                    } else if (i === "/" || i === "\\" && _this.isSpecial()) {
                        c = be;
                    } else if (i === "?") {
                        _this.username = n.username;
                        _this.password = n.password;
                        _this.host = n.host;
                        _this.port = n.port;
                        _this.path = module124(n.path);
                        _this.query = "";
                        c = Pe;
                    } else {
                        if (i !== "#") {
                            _this.username = n.username;
                            _this.password = n.password;
                            _this.host = n.host;
                            _this.port = n.port;
                            _this.path = module124(n.path);
                            _this.path.length--;
                            c = je;
                            continue;
                        }
                        _this.username = n.username;
                        _this.password = n.password;
                        _this.host = n.host;
                        _this.port = n.port;
                        _this.path = module124(n.path);
                        _this.query = n.query;
                        _this.fragment = "";
                        c = Le;
                    }
                    break;
                case be:
                    if (!_this.isSpecial() || i !== "/" && i !== "\\") {
                        if (i !== "/") {
                            _this.username = n.username;
                            _this.password = n.password;
                            _this.host = n.host;
                            _this.port = n.port;
                            c = je;
                            continue;
                        }
                        c = _e;
                    } else {
                        c = we;
                    }
                    break;
                case xe:
                    c = we;
                    if (i !== "/" || L(d, f + 1) !== "/") {
                        continue;
                    }
                    f++;
                    break;
                case we:
                    if (i !== "/" && i !== "\\") {
                        c = _e;
                        continue;
                    }
                    break;
                case _e:
                    if (i === "@") {
                        if (h) {
                            d = `%40${d}`;
                        }
                        h = true;
                        a = module502(d);
                        for (const w of a){
                            if (w !== ":" || m) {
                                const _ = ue(w, le);
                                if (m) {
                                    _this.password += _;
                                } else {
                                    _this.username += _;
                                }
                            } else {
                                m = true;
                            }
                        }
                        d = "";
                    } else if (i === r || i === "/" || i === "?" || i === "#" || i === "\\" && _this.isSpecial()) {
                        if (h && d === "") {
                            return "Invalid authority";
                        }
                        f -= module502(d).length + 1;
                        d = "";
                        c = Ce;
                    } else {
                        d += i;
                    }
                    break;
                case Ce:
                case Oe:
                    if (t && _this.scheme === "file") {
                        c = Ae;
                        continue;
                    }
                    if (i !== ":" || y) {
                        if (i === r || i === "/" || i === "?" || i === "#" || i === "\\" && _this.isSpecial()) {
                            if (_this.isSpecial() && d === "") {
                                return "Invalid host";
                            }
                            if (t && d === "" && (_this.includesCredentials() || _this.port !== null)) {
                                return;
                            }
                            if (l = _this.parseHost(d)) {
                                return l;
                            }
                            d = "";
                            c = ke;
                            if (t) {
                                return;
                            }
                            continue;
                        }
                        if (i === "[") {
                            y = true;
                        } else if (i === "]") {
                            y = false;
                        }
                        d += i;
                    } else {
                        if (d === "") {
                            return "Invalid host";
                        }
                        if (l = _this.parseHost(d)) {
                            return l;
                        }
                        d = "";
                        c = Ee;
                        if (t === Oe) {
                            return;
                        }
                    }
                    break;
                case Ee:
                    if (!z(K, i)) {
                        if (i === r || i === "/" || i === "?" || i === "#" || i === "\\" && _this.isSpecial() || t) {
                            if (d !== "") {
                                const C = parseInt(d, 10);
                                if (C > 65535) {
                                    return "Invalid port";
                                }
                                _this.port = _this.isSpecial() && C === se[_this.scheme] ? null : C;
                                d = "";
                            }
                            if (t) {
                                return;
                            }
                            c = ke;
                            continue;
                        }
                        return "Invalid port";
                    }
                    d += i;
                    break;
                case Me:
                    _this.scheme = "file";
                    if (i === "/" || i === "\\") {
                        c = Se;
                    } else {
                        if (!n || n.scheme !== "file") {
                            c = je;
                            continue;
                        }
                        switch(i){
                            case r:
                                _this.host = n.host;
                                _this.path = module124(n.path);
                                _this.query = n.query;
                                break;
                            case "?":
                                _this.host = n.host;
                                _this.path = module124(n.path);
                                _this.query = "";
                                c = Pe;
                                break;
                            case "#":
                                _this.host = n.host;
                                _this.path = module124(n.path);
                                _this.query = n.query;
                                _this.fragment = "";
                                c = Le;
                                break;
                            default:
                                if (!fe(N(module124(o, f), ""))) {
                                    _this.host = n.host;
                                    _this.path = module124(n.path);
                                    _this.shortenPath();
                                }
                                c = je;
                                continue;
                        }
                    }
                    break;
                case Se:
                    if (i === "/" || i === "\\") {
                        c = Ae;
                        break;
                    }
                    if (n && n.scheme === "file" && !fe(N(module124(o, f), ""))) {
                        if (ce(n.path[0], true)) {
                            R(_this.path, n.path[0]);
                        } else {
                            _this.host = n.host;
                        }
                    }
                    c = je;
                    continue;
                case Ae:
                    if (i === r || i === "/" || i === "\\" || i === "?" || i === "#") {
                        if (!t && ce(d)) {
                            c = je;
                        } else if (d === "") {
                            _this.host = "";
                            if (t) {
                                return;
                            }
                            c = ke;
                        } else {
                            if (l = _this.parseHost(d)) {
                                return l;
                            }
                            if (_this.host === "localhost") {
                                _this.host = "";
                            }
                            if (t) {
                                return;
                            }
                            d = "";
                            c = ke;
                        }
                        continue;
                    }
                    d += i;
                    break;
                case ke:
                    if (_this.isSpecial()) {
                        c = je;
                        if (i !== "/" && i !== "\\") {
                            continue;
                        }
                    } else if (t || i !== "?") {
                        if (t || i !== "#") {
                            if (i !== r && (c = je, i !== "/")) {
                                continue;
                            }
                        } else {
                            _this.fragment = "";
                            c = Le;
                        }
                    } else {
                        _this.query = "";
                        c = Pe;
                    }
                    break;
                case je:
                    if (i === r || i === "/" || i === "\\" && _this.isSpecial() || !t && (i === "?" || i === "#")) {
                        if ((u = $(u = d)) === ".." || u === "%2e." || u === ".%2e" || u === "%2e%2e") {
                            _this.shortenPath();
                            if (!(i === "/" || i === "\\" && _this.isSpecial())) {
                                R(_this.path, "");
                            }
                        } else if (de(d)) {
                            if (!(i === "/" || i === "\\" && _this.isSpecial())) {
                                R(_this.path, "");
                            }
                        } else {
                            if (_this.scheme === "file" && !_this.path.length && ce(d)) {
                                if (_this.host) {
                                    _this.host = "";
                                }
                                d = `${L(d, 0)}:`;
                            }
                            R(_this.path, d);
                        }
                        d = "";
                        if (_this.scheme === "file" && (i === r || i === "?" || i === "#")) {
                            while(_this.path.length > 1 && _this.path[0] === ""){
                                B(_this.path);
                            }
                        }
                        if (i === "?") {
                            _this.query = "";
                            c = Pe;
                        } else if (i === "#") {
                            _this.fragment = "";
                            c = Le;
                        }
                    } else {
                        d += ue(i, ae);
                    }
                    break;
                case Te:
                    switch(i){
                        case "?":
                            _this.query = "";
                            c = Pe;
                            break;
                        case "#":
                            _this.fragment = "";
                            c = Le;
                            break;
                        default:
                            if (i !== r) {
                                _this.path[0] += ue(i, oe);
                            }
                    }
                    break;
                case Pe:
                    if (t || i !== "#") {
                        if (i !== r) {
                            if (i === "'" && _this.isSpecial()) {
                                _this.query += "%27";
                            } else {
                                _this.query += i === "#" ? "%23" : ue(i, oe);
                            }
                        }
                    } else {
                        _this.fragment = "";
                        c = Le;
                    }
                    break;
                case Le:
                    if (i !== r) {
                        _this.fragment += ue(i, ie);
                    }
            }
            f++;
        }
    },
    parseHost: function(e) {
        let t;
        let n;
        let r;
        if (L(e, 0) === "[") {
            if (L(e, e.length - 1) !== "]") {
                return "Invalid host";
            }
            if (!(t = ((e)=>{
                let t;
                let n;
                let r;
                let o;
                let i;
                let a;
                let l;
                const u = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                let s = 0;
                let c = null;
                let f = 0;
                const d = ()=>L(e, f);
                if (d() === ":") {
                    if (L(e, 1) !== ":") {
                        return;
                    }
                    f += 2;
                    c = ++s;
                }
                while(d()){
                    if (s === 8) {
                        return;
                    }
                    if (d() !== ":") {
                        for(t = n = 0; n < 4 && z(X, d());){
                            t = 16 * t + parseInt(d(), 16);
                            f++;
                            n++;
                        }
                        if (d() === ".") {
                            if (n === 0) {
                                return;
                            }
                            f -= n;
                            if (s > 6) {
                                return;
                            }
                            for(r = 0; d();){
                                o = null;
                                if (r > 0) {
                                    if (!(d() === "." && r < 4)) {
                                        return;
                                    }
                                    f++;
                                }
                                if (!z(K, d())) {
                                    return;
                                }
                                while(z(K, d())){
                                    i = parseInt(d(), 10);
                                    if (o === null) {
                                        o = i;
                                    } else {
                                        if (o === 0) {
                                            return;
                                        }
                                        o = 10 * o + i;
                                    }
                                    if (o > 255) {
                                        return;
                                    }
                                    f++;
                                }
                                u[s] = 256 * u[s] + o;
                                if (!(++r != 2 && r !== 4)) {
                                    s++;
                                }
                            }
                            if (r !== 4) {
                                return;
                            }
                            break;
                        }
                        if (d() === ":") {
                            f++;
                            if (!d()) {
                                return;
                            }
                        } else if (d()) {
                            return;
                        }
                        u[s++] = t;
                    } else {
                        if (c !== null) {
                            return;
                        }
                        f++;
                        c = ++s;
                    }
                }
                if (c !== null) {
                    a = s - c;
                    for(s = 7; s !== 0 && a > 0;){
                        l = u[s];
                        u[s--] = u[c + a - 1];
                        u[c + --a] = l;
                    }
                } else if (s !== 8) {
                    return;
                }
                return u;
            })(V(e, 1, -1)))) {
                return "Invalid host";
            }
            this.host = t;
        } else if (this.isSpecial()) {
            e = module4797(e);
            if (z(J, e)) {
                return "Invalid host";
            }
            if ((t = ((e)=>{
                let t;
                let n;
                let r;
                let o;
                let i;
                let a;
                let l;
                const u = F(e, ".");
                if (u.length && u[u.length - 1] === "") {
                    u.length--;
                }
                if ((t = u.length) > 4) {
                    return e;
                }
                n = [];
                for(r = 0; r < t; r++){
                    if ((o = u[r]) === "") {
                        return e;
                    }
                    i = 10;
                    if (o.length > 1 && L(o, 0) === "0") {
                        i = z(G, o) ? 16 : 8;
                        o = V(o, i === 8 ? 1 : 2);
                    }
                    if (o === "") {
                        a = 0;
                    } else {
                        if (!z(i === 10 ? Y : i === 8 ? q : X, o)) {
                            return e;
                        }
                        a = parseInt(o, i);
                    }
                    R(n, a);
                }
                for(r = 0; r < t; r++){
                    a = n[r];
                    if (r === t - 1) {
                        if (a >= 256 ** (5 - t)) {
                            return null;
                        }
                    } else if (a > 255) {
                        return null;
                    }
                }
                l = I(n);
                for(r = 0; r < n.length; r++){
                    l += n[r] * 256 ** (3 - r);
                }
                return l;
            })(e)) === null) {
                return "Invalid host";
            }
            this.host = t;
        } else {
            if (z(Q, e)) {
                return "Invalid host";
            }
            t = "";
            n = module502(e);
            for(r = 0; r < n.length; r++){
                t += ue(n[r], oe);
            }
            this.host = t;
        }
    },
    cannotHaveUsernamePasswordPort: function() {
        return !this.host || this.cannotBeABaseURL || this.scheme === "file";
    },
    includesCredentials: function() {
        return this.username !== "" || this.password !== "";
    },
    isSpecial: function() {
        return module53(se, this.scheme);
    },
    shortenPath: function() {
        const path = this.path;
        const e_length = path.length;
        if (!(!e_length || this.scheme === "file" && e_length === 1 && ce(path[0], true))) {
            path.length--;
        }
    },
    serialize: function() {
        const _this = this;
        const { scheme, username, password, host, port, path, query, fragment } = _this;
        let s = `${scheme}:`;
        if (host !== null) {
            s += "//";
            if (_this.includesCredentials()) {
                s += `${username + (password ? `:${password}` : "")}@`;
            }
            s += re(host);
            if (port !== null) {
                s += `:${port}`;
            }
        } else if (scheme === "file") {
            s += "//";
        }
        s += _this.cannotBeABaseURL ? path[0] : path.length ? `/${N(path, "/")}` : "";
        if (query !== null) {
            s += `?${query}`;
        }
        if (fragment !== null) {
            s += `#${fragment}`;
        }
        return s;
    },
    setHref: function(e) {
        const t = this.parse(e);
        if (t) {
            throw new TypeError(t);
        }
        this.searchParams.update();
    },
    getOrigin: function() {
        const scheme = this.scheme;
        const port = this.port;
        if (scheme === "blob") {
            try {
                return new URL_1(scheme.path[0]).origin;
            } catch (e) {
                return "null";
            }
        }
        if (scheme !== "file" && this.isSpecial()) {
            return `${scheme}://${re(this.host)}${port !== null ? `:${port}` : ""}`;
        }
        return "null";
    },
    getProtocol: function() {
        return `${this.scheme}:`;
    },
    setProtocol: function(e) {
        this.parse(`${module46(e)}:`, pe);
    },
    getUsername: function() {
        return this.username;
    },
    setUsername: function(e) {
        const t = module502(module46(e));
        if (!this.cannotHaveUsernamePasswordPort()) {
            this.username = "";
            for(let n = 0; n < t.length; n++){
                this.username += ue(t[n], le);
            }
        }
    },
    getPassword: function() {
        return this.password;
    },
    setPassword: function(e) {
        const t = module502(module46(e));
        if (!this.cannotHaveUsernamePasswordPort()) {
            this.password = "";
            for(let n = 0; n < t.length; n++){
                this.password += ue(t[n], le);
            }
        }
    },
    getHost: function() {
        const host = this.host;
        const port = this.port;
        if (host === null) {
            return "";
        }
        if (port === null) {
            return re(host);
        }
        return `${re(host)}:${port}`;
    },
    setHost: function(e) {
        if (!this.cannotBeABaseURL) {
            this.parse(e, Ce);
        }
    },
    getHostname: function() {
        const host = this.host;
        if (host === null) {
            return "";
        }
        return re(host);
    },
    setHostname: function(e) {
        if (!this.cannotBeABaseURL) {
            this.parse(e, Oe);
        }
    },
    getPort: function() {
        const port = this.port;
        if (port === null) {
            return "";
        }
        return module46(port);
    },
    setPort: function(e) {
        if (!this.cannotHaveUsernamePasswordPort()) {
            if ((e = module46(e)) === "") {
                this.port = null;
            } else {
                this.parse(e, Ee);
            }
        }
    },
    getPathname: function() {
        const path = this.path;
        if (this.cannotBeABaseURL) {
            return path[0];
        }
        if (path.length) {
            return `/${N(path, "/")}`;
        }
        return "";
    },
    setPathname: function(e) {
        if (!this.cannotBeABaseURL) {
            this.path = [];
            this.parse(e, ke);
        }
    },
    getSearch: function() {
        const query = this.query;
        if (query) {
            return `?${query}`;
        }
        return "";
    },
    setSearch: function(e) {
        if ((e = module46(e)) === "") {
            this.query = null;
        } else {
            if (L(e, 0) === "?") {
                e = V(e, 1);
            }
            this.query = "";
            this.parse(e, Pe);
        }
        this.searchParams.update();
    },
    getSearchParams: function() {
        return this.searchParams.facade;
    },
    getHash: function() {
        const fragment = this.fragment;
        if (fragment) {
            return `#${fragment}`;
        }
        return "";
    },
    setHash: function(e) {
        if ((e = module46(e)) !== "") {
            if (L(e, 0) === "#") {
                e = V(e, 1);
            }
            this.fragment = "";
            this.parse(e, Le);
        } else {
            this.fragment = null;
        }
    },
    update: function() {
        this.query = this.searchParams.serialize() || null;
    }
};
var URL_1 = function(e) {
    const t = module254(this, Ne_prototype);
    const n = module328(arguments.length, 1) > 1 ? arguments[1] : undefined;
    const r = module101_set(t, new ze(e, false, n));
    if (!module33) {
        t.href = r.serialize();
        t.origin = r.getOrigin();
        t.protocol = r.getProtocol();
        t.username = r.getUsername();
        t.password = r.getPassword();
        t.host = r.getHost();
        t.hostname = r.getHostname();
        t.port = r.getPort();
        t.pathname = r.getPathname();
        t.search = r.getSearch();
        t.searchParams = r.getSearchParams();
        t.hash = r.getHash();
    }
};
var Ne_prototype = URL_1.prototype;
const Ie = (e, t)=>({
        get: function() {
            return E(this)[e]();
        },
        set: t && function(e) {
            return E(this)[t](e);
        },
        configurable: true,
        enumerable: true
    });
if (module33) {
    module113(Ne_prototype, "href", Ie("serialize", "setHref"));
    module113(Ne_prototype, "origin", Ie("getOrigin"));
    module113(Ne_prototype, "protocol", Ie("getProtocol", "setProtocol"));
    module113(Ne_prototype, "username", Ie("getUsername", "setUsername"));
    module113(Ne_prototype, "password", Ie("getPassword", "setPassword"));
    module113(Ne_prototype, "host", Ie("getHost", "setHost"));
    module113(Ne_prototype, "hostname", Ie("getHostname", "setHostname"));
    module113(Ne_prototype, "port", Ie("getPort", "setPort"));
    module113(Ne_prototype, "pathname", Ie("getPathname", "setPathname"));
    module113(Ne_prototype, "search", Ie("getSearch", "setSearch"));
    module113(Ne_prototype, "searchParams", Ie("getSearchParams"));
    module113(Ne_prototype, "hash", Ie("getHash", "setHash"));
}
module67(Ne_prototype, "toJSON", function() {
    return E(this).serialize();
}, {
    enumerable: true
});
module67(Ne_prototype, "toString", function() {
    return E(this).serialize();
}, {
    enumerable: true
});
if (URL) {
    const { createObjectURL, revokeObjectURL } = URL;
    if (createObjectURL) {
        module67(URL_1, "createObjectURL", module142(createObjectURL, URL));
    }
    if (revokeObjectURL) {
        module67(URL_1, "revokeObjectURL", module142(revokeObjectURL, URL));
    }
}
module123(URL_1, "URL");
module8({
    global: true,
    constructor: true,
    forced: !module1921,
    sham: !module33
}, {
    URL: URL_1
});
