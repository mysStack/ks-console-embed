import { a } from "unpacked/module-5792.js";
import { a as a_2 } from "unpacked/module-5777.js";
import { a as a_3 } from "unpacked/module-1277.js";
import { a as a_4 } from "unpacked/module-2147.js";
import { a as a_5 } from "unpacked/module-1509.js";
const r = function(e, t) {
    if (e < t) {
        return -1;
    }
    if (e > t) {
        return 1;
    }
    if (e >= t) {
        return 0;
    }
    return NaN;
};
const o = (e)=>{
    let t;
    if (e.length === 1) {
        t = e;
        e = function(e, n) {
            return r(t(e), n);
        };
    }
    return {
        left: function(t, n, r, o) {
            if (r == null) {
                r = 0;
            }
            if (o == null) {
                o = t.length;
            }
            while(r < o){
                const i = r + o >>> 1;
                if (e(t[i], n) < 0) {
                    r = i + 1;
                } else {
                    o = i;
                }
            }
            return r;
        },
        right: function(t, n, r, o) {
            if (r == null) {
                r = 0;
            }
            if (o == null) {
                o = t.length;
            }
            while(r < o){
                const i = r + o >>> 1;
                if (e(t[i], n) > 0) {
                    o = i;
                } else {
                    r = i + 1;
                }
            }
            return r;
        }
    };
};
const i = o(r);
const i_right = i.right;
i.left;
const l = i_right;
const u = function(e) {
    if (e === null) {
        return NaN;
    }
    return +e;
};
Array.prototype.slice;
Array.prototype.map;
const c = function(e, t, n) {
    e = +e;
    t = +t;
    n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
    for(var r = -1, o = 0 | Math.max(0, Math.ceil((t - e) / n)), i = new Array(o); ++r < o;){
        i[r] = e + r * n;
    }
    return i;
};
const f = Math.sqrt(50);
const d = Math.sqrt(10);
const p = Math.sqrt(2);
const h = (e, t, n)=>{
    let r;
    let o;
    let i;
    let a;
    let l = -1;
    n = +n;
    if ((e = +e) == (t = +t) && n > 0) {
        return [
            e
        ];
    }
    if (r = t < e) {
        o = e;
        e = t;
        t = o;
    }
    if ((a = v(e, t, n)) === 0 || !isFinite(a)) {
        return [];
    }
    if (a > 0) {
        e = Math.ceil(e / a);
        t = Math.floor(t / a);
        for(i = new Array(o = Math.ceil(t - e + 1)); ++l < o;){
            i[l] = (e + l) * a;
        }
    } else {
        e = Math.floor(e * a);
        t = Math.ceil(t * a);
        for(i = new Array(o = Math.ceil(e - t + 1)); ++l < o;){
            i[l] = (e - l) / a;
        }
    }
    if (r) {
        i.reverse();
    }
    return i;
};
function v(e, t, n) {
    const r = (t - e) / Math.max(0, n);
    const o = Math.floor(Math.log(r) / Math.LN10);
    const i = r / 10 ** o;
    if (o >= 0) {
        return (i >= f ? 10 : i >= d ? 5 : i >= p ? 2 : 1) * 10 ** o;
    }
    return -(10 ** -o) / (i >= f ? 10 : i >= d ? 5 : i >= p ? 2 : 1);
}
function g(e, t, n) {
    const r = Math.abs(t - e) / Math.max(0, n);
    let o = 10 ** Math.floor(Math.log(r) / Math.LN10);
    const i = r / o;
    if (i >= f) {
        o *= 10;
    } else if (i >= d) {
        o *= 5;
    } else if (i >= p) {
        o *= 2;
    }
    if (t < e) {
        return -o;
    }
    return o;
}
const y = (e, t, n)=>{
    if (n == null) {
        n = u;
    }
    if (r = e.length) {
        if ((t = +t) <= 0 || r < 2) {
            return +n(e[0], 0, e);
        }
        if (t >= 1) {
            return +n(e[r - 1], r - 1, e);
        }
        var r;
        const o = (r - 1) * t;
        const i = Math.floor(o);
        const a = +n(e[i], i, e);
        return a + (+n(e[i + 1], i + 1, e) - a) * (o - i);
    }
};
function m(e, t) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(e);
            break;
        default:
            this.range(t).domain(e);
    }
    return this;
}
function b(e, t) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.interpolator(e);
            break;
        default:
            this.interpolator(t).domain(e);
    }
    return this;
}
function x() {}
function w(e, t) {
    const n = new x;
    if (e instanceof x) {
        e.each(function(e, t) {
            n.set(t, e);
        });
    } else if (Array.isArray(e)) {
        let r;
        let o = -1;
        const i = e.length;
        if (t == null) {
            while(++o < i){
                n.set(o, e[o]);
            }
        } else {
            while(++o < i){
                n.set(t(r = e[o], o, e), r);
            }
        }
    } else if (e) {
        for(const a in e){
            n.set(a, e[a]);
        }
    }
    return n;
}
x.prototype = w.prototype = {
    constructor: x,
    has: function(e) {
        return `\$${e}` in this;
    },
    get: function(e) {
        return this[`\$${e}`];
    },
    set: function(e, t) {
        this[`\$${e}`] = t;
        return this;
    },
    remove: function(e) {
        const t = `\$${e}`;
        return t in this && delete this[t];
    },
    clear: function() {
        for(const e in this){
            if (e[0] === "$") {
                delete this[e];
            }
        }
    },
    keys: function() {
        const e = [];
        for(const t in this){
            if (t[0] === "$") {
                e.push(t.slice(1));
            }
        }
        return e;
    },
    values: function() {
        const e = [];
        for(const t in this){
            if (t[0] === "$") {
                e.push(this[t]);
            }
        }
        return e;
    },
    entries: function() {
        const e = [];
        for(const t in this){
            if (t[0] === "$") {
                e.push({
                    key: t.slice(1),
                    value: this[t]
                });
            }
        }
        return e;
    },
    size: function() {
        let e = 0;
        for(const t in this){
            if (t[0] === "$") {
                ++e;
            }
        }
        return e;
    },
    empty: function() {
        for(const e in this){
            if (e[0] === "$") {
                return false;
            }
        }
        return true;
    },
    each: function(e) {
        for(const t in this){
            if (t[0] === "$") {
                e(this[t], t.slice(1), this);
            }
        }
    }
};
const _ = w;
function C() {}
const __prototype = _.prototype;
C.prototype = (function(e, t) {
    const n = new C;
    if (e instanceof C) {
        e.each(function(e) {
            n.add(e);
        });
    } else if (e) {
        let r = -1;
        const o = e.length;
        if (t == null) {
            while(++r < o){
                n.add(e[r]);
            }
        } else {
            while(++r < o){
                n.add(t(e[r], r, e));
            }
        }
    }
    return n;
}).prototype = {
    constructor: C,
    has: __prototype.has,
    add: function(e) {
        this[`\$${e += ""}`] = e;
        return this;
    },
    remove: __prototype.remove,
    clear: __prototype.clear,
    values: __prototype.keys,
    size: __prototype.size,
    empty: __prototype.empty,
    each: __prototype.each
};
const map = Array.prototype.map;
const slice = Array.prototype.slice;
export const scaleImplicit = {
    name: "implicit"
};
export function scaleOrdinal() {
    let e = _();
    let t = [];
    let n = [];
    let r = scaleImplicit;
    function o(o) {
        const i = `${o}`;
        let a = e.get(i);
        if (!a) {
            if (r !== scaleImplicit) {
                return r;
            }
            e.set(i, a = t.push(o));
        }
        return n[(a - 1) % n.length];
    }
    o.domain = function(n) {
        if (!arguments.length) {
            return t.slice();
        }
        t = [];
        e = _();
        let r;
        let i;
        for(let a = -1, l = n.length; ++a < l;){
            if (!e.has(i = `${r = n[a]}`)) {
                e.set(i, t.push(r));
            }
        }
        return o;
    };
    o.range = function(e) {
        if (arguments.length) {
            n = slice.call(e);
            return o;
        }
        return n.slice();
    };
    o.unknown = function(e) {
        if (arguments.length) {
            r = e;
            return o;
        }
        return r;
    };
    o.copy = function() {
        return scaleOrdinal(t, n).unknown(r);
    };
    m.apply(o, arguments);
    return o;
}
export function scaleBand() {
    let e;
    let t;
    const n = scaleOrdinal().unknown(undefined);
    const { domain, range } = n;
    let i = [
        0,
        1
    ];
    let a = false;
    let l = 0;
    let u = 0;
    let s = 0.5;
    function f() {
        const length = domain().length;
        const f = i[1] < i[0];
        let d = i[f - 0];
        const p = i[1 - f];
        e = (p - d) / Math.max(1, length - l + 2 * u);
        if (a) {
            e = Math.floor(e);
        }
        d += (p - d - e * (length - l)) * s;
        t = e * (1 - l);
        if (a) {
            d = Math.round(d);
            t = Math.round(t);
        }
        const h = c(length).map((t)=>d + e * t);
        return range(f ? h.reverse() : h);
    }
    delete n.unknown;
    n.domain = function(e) {
        if (arguments.length) {
            domain(e);
            return f();
        }
        return domain();
    };
    n.range = function(e) {
        if (arguments.length) {
            i = [
                +e[0],
                +e[1]
            ];
            return f();
        }
        return i.slice();
    };
    n.rangeRound = function(e) {
        i = [
            +e[0],
            +e[1]
        ];
        a = true;
        return f();
    };
    n.bandwidth = function() {
        return t;
    };
    n.step = function() {
        return e;
    };
    n.round = function(e) {
        if (arguments.length) {
            a = !!e;
            return f();
        }
        return a;
    };
    n.padding = function(e) {
        if (arguments.length) {
            l = Math.min(1, u = +e);
            return f();
        }
        return l;
    };
    n.paddingInner = function(e) {
        if (arguments.length) {
            l = Math.min(1, e);
            return f();
        }
        return l;
    };
    n.paddingOuter = function(e) {
        if (arguments.length) {
            u = +e;
            return f();
        }
        return u;
    };
    n.align = function(e) {
        if (arguments.length) {
            s = Math.max(0, Math.min(1, e));
            return f();
        }
        return s;
    };
    n.copy = function() {
        return scaleBand(domain(), i).round(a).paddingInner(l).paddingOuter(u).align(s);
    };
    return m.apply(f(), arguments);
}
function T(e) {
    const e_copy = e.copy;
    e.padding = e.paddingOuter;
    delete e.paddingInner;
    delete e.paddingOuter;
    e.copy = function() {
        return T(e_copy());
    };
    return e;
}
export function scalePoint() {
    return T(scaleBand.apply(null, arguments).paddingInner(1));
}
const N = function(e, t) {
    if (!t) {
        t = [];
    }
    let n;
    const r = e ? Math.min(t.length, e.length) : 0;
    const o = t.slice();
    return function(i) {
        for(n = 0; n < r; ++n){
            o[n] = e[n] * (1 - i) + t[n] * i;
        }
        return o;
    };
};
function D(e, t) {
    let n;
    const r = t ? t.length : 0;
    const o = e ? Math.min(r, e.length) : 0;
    const i = new Array(o);
    const a = new Array(r);
    for(n = 0; n < o; ++n){
        i[n] = V(e[n], t[n]);
    }
    for(; n < r; ++n){
        a[n] = t[n];
    }
    return function(e) {
        for(n = 0; n < o; ++n){
            a[n] = i[n](e);
        }
        return a;
    };
}
const I = function(e, t) {
    const date = new Date;
    e = +e;
    t = +t;
    return function(r) {
        date.setTime(e * (1 - r) + t * r);
        return date;
    };
};
const H = function(e, t) {
    let n;
    const r = {};
    const o = {};
    if (!(e !== null && typeof e === "object")) {
        e = {};
    }
    if (!(t !== null && typeof t === "object")) {
        t = {};
    }
    for(n in t){
        if (n in e) {
            r[n] = V(e[n], t[n]);
        } else {
            o[n] = t[n];
        }
    }
    return function(e) {
        for(n in r){
            o[n] = r[n](e);
        }
        return o;
    };
};
var V = function(e, t) {
    let n;
    const r = typeof t;
    if (t == null || r === "boolean") {
        return a_5(t);
    }
    return (r === "number" ? a_3 : r === "string" ? (n = a(t)) ? (t = n, a_2) : a_4 : t instanceof a ? a_2 : t instanceof Date ? I : ((e)=>ArrayBuffer.isView(e) && !(e instanceof DataView))(t) ? N : Array.isArray(t) ? D : typeof t.valueOf !== "function" && typeof t.toString !== "function" || isNaN(t) ? H : a_3)(e, t);
};
const $ = function(e, t) {
    e = +e;
    t = +t;
    return function(n) {
        return Math.round(e * (1 - n) + t * n);
    };
};
const U = function(e) {
    return +e;
};
const Z = [
    0,
    1
];
function W(e) {
    return e;
}
function K(e, t) {
    if (t -= e = +e) {
        return function(n) {
            return (n - e) / t;
        };
    }
    n = isNaN(t) ? NaN : 0.5;
    return function() {
        return n;
    };
    var n;
}
function G(e) {
    let t;
    let n = e[0];
    let r = e[e.length - 1];
    if (n > r) {
        t = n;
        n = r;
        r = t;
    }
    return function(e) {
        return Math.max(n, Math.min(r, e));
    };
}
function q([r, o], t, n) {
    let i = t[0];
    const a = t[1];
    if (o < r) {
        r = K(o, r);
        i = n(a, i);
    } else {
        r = K(r, o);
        i = n(i, a);
    }
    return function(e) {
        return i(r(e));
    };
}
function Y(e, t, n) {
    const r = Math.min(e.length, t.length) - 1;
    const o = new Array(r);
    const i = new Array(r);
    let a = -1;
    for(e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++a < r;){
        o[a] = K(e[a], e[a + 1]);
        i[a] = n(t[a], t[a + 1]);
    }
    return function(t) {
        const n = l(e, t, 1, r) - 1;
        return i[n](o[n](t));
    };
}
function X(e, t) {
    return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function J() {
    let e;
    let t;
    let n;
    let r;
    let o;
    let i;
    let a = Z;
    let l = Z;
    let u = V;
    let s = W;
    function c() {
        r = Math.min(a.length, l.length) > 2 ? Y : q;
        i = null;
        o = null;
        return f;
    }
    function f(t) {
        if (isNaN(t = +t)) {
            return n;
        }
        return (o || (o = r(a.map(e), l, u)))(e(s(t)));
    }
    f.invert = function(n) {
        return s(t((i || (i = r(l, a.map(e), a_3)))(n)));
    };
    f.domain = function(e) {
        if (arguments.length) {
            a = map.call(e, U);
            if (s !== W) {
                s = G(a);
            }
            return c();
        }
        return a.slice();
    };
    f.range = function(e) {
        if (arguments.length) {
            l = slice.call(e);
            return c();
        }
        return l.slice();
    };
    f.rangeRound = function(e) {
        l = slice.call(e);
        u = $;
        return c();
    };
    f.clamp = function(e) {
        if (arguments.length) {
            s = e ? G(a) : W;
            return f;
        }
        return s !== W;
    };
    f.interpolate = function(e) {
        if (arguments.length) {
            u = e;
            return c();
        }
        return u;
    };
    f.unknown = function(e) {
        if (arguments.length) {
            n = e;
            return f;
        }
        return n;
    };
    return function(n, r) {
        e = n;
        t = r;
        return c();
    };
}
function Q(e, t) {
    return J()(e, t);
}
const ee = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function te(e) {
    if (!(t = ee.exec(e))) {
        throw new Error(`invalid format: ${e}`);
    }
    var t;
    return new ne({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10]
    });
}
function ne(e) {
    this.fill = e.fill === undefined ? " " : `${e.fill}`;
    this.align = e.align === undefined ? ">" : `${e.align}`;
    this.sign = e.sign === undefined ? "-" : `${e.sign}`;
    this.symbol = e.symbol === undefined ? "" : `${e.symbol}`;
    this.zero = !!e.zero;
    this.width = e.width === undefined ? undefined : +e.width;
    this.comma = !!e.comma;
    this.precision = e.precision === undefined ? undefined : +e.precision;
    this.trim = !!e.trim;
    this.type = e.type === undefined ? "" : `${e.type}`;
}
function re(e, t) {
    if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) {
        return null;
    }
    var n;
    const r = e.slice(0, n);
    return [
        r.length > 1 ? r[0] + r.slice(2) : r,
        +e.slice(n + 1)
    ];
}
te.prototype = ne.prototype;
ne.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : `.${Math.max(0, 0 | this.precision)}`) + (this.trim ? "~" : "") + this.type;
};
let oe;
let ie;
let ae;
let le;
const ue = (e)=>{
    if (e = re(Math.abs(e))) {
        return e[1];
    }
    return NaN;
};
const r_1 = function(e, t) {
    const n = re(e, t);
    if (!n) {
        return `${e}`;
    }
    const r = n[0];
    const o = n[1];
    if (o < 0) {
        return `0.${new Array(-o).join("0")}${r}`;
    }
    if (r.length > o + 1) {
        return `${r.slice(0, o + 1)}.${r.slice(o + 1)}`;
    }
    return r + new Array(o - r.length + 2).join("0");
};
const ce = {
    "%": function(e, t) {
        return (100 * e).toFixed(t);
    },
    b: function(e) {
        return Math.round(e).toString(2);
    },
    c: function(e) {
        return `${e}`;
    },
    d: function(e) {
        if (Math.abs(e = Math.round(e)) >= 1e+21) {
            return e.toLocaleString("en").replace(/,/g, "");
        }
        return e.toString(10);
    },
    e: function(e, t) {
        return e.toExponential(t);
    },
    f: function(e, t) {
        return e.toFixed(t);
    },
    g: function(e, t) {
        return e.toPrecision(t);
    },
    o: function(e) {
        return Math.round(e).toString(8);
    },
    p: function(e, t) {
        return r_1(100 * e, t);
    },
    r: r_1,
    s: function(e, t) {
        const n = re(e, t);
        if (!n) {
            return `${e}`;
        }
        const r = n[0];
        const o = n[1];
        const i = o - (oe = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1;
        const r_length = r.length;
        if (i === r_length) {
            return r;
        }
        if (i > r_length) {
            return r + new Array(i - r_length + 1).join("0");
        }
        if (i > 0) {
            return `${r.slice(0, i)}.${r.slice(i)}`;
        }
        return `0.${new Array(1 - i).join("0")}${re(e, Math.max(0, t + i - 1))[0]}`;
    },
    X: function(e) {
        return Math.round(e).toString(16).toUpperCase();
    },
    x: function(e) {
        return Math.round(e).toString(16);
    }
};
const fe = function(e) {
    return e;
};
const map_1 = Array.prototype.map;
const pe = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
ie = ((e)=>{
    let t;
    let n;
    const r = e.grouping === undefined || e.thousands === undefined ? fe : (t = map_1.call(e.grouping, Number), n = `${e.thousands}`, (e, r)=>{
        for(var o = e.length, i = [], a = 0, l = t[0], u = 0; o > 0 && l > 0 && (u + l + 1 > r && (l = Math.max(1, r - u)), i.push(e.substring(o -= l, o + l)), !((u += l + 1) > r));){
            l = t[a = (a + 1) % t.length];
        }
        return i.reverse().join(n);
    });
    const o = e.currency === undefined ? "" : `${e.currency[0]}`;
    const i = e.currency === undefined ? "" : `${e.currency[1]}`;
    const a = e.decimal === undefined ? "." : `${e.decimal}`;
    const l = e.numerals === undefined ? fe : ((e)=>function(t) {
            return t.replace(/[0-9]/g, (t)=>e[+t]);
        })(map_1.call(e.numerals, String));
    const u = e.percent === undefined ? "%" : `${e.percent}`;
    const s = e.minus === undefined ? "-" : `${e.minus}`;
    const c = e.nan === undefined ? "NaN" : `${e.nan}`;
    function format(e) {
        let fill = (e = te(e)).fill;
        let e_align = e.align;
        const { sign, symbol } = e;
        let e_zero = e.zero;
        const e_width = e.width;
        let e_comma = e.comma;
        let e_precision = e.precision;
        let e_trim = e.trim;
        let e_type = e.type;
        if (e_type === "n") {
            e_comma = true;
            e_type = "g";
        } else if (!ce[e_type]) {
            if (e_precision === undefined) {
                e_precision = 12;
            }
            e_trim = true;
            e_type = "g";
        }
        if (e_zero || fill === "0" && e_align === "=") {
            e_zero = true;
            fill = "0";
            e_align = "=";
        }
        const b = symbol === "$" ? o : symbol === "#" && /[boxX]/.test(e_type) ? `0${e_type.toLowerCase()}` : "";
        const x = symbol === "$" ? i : /[%p]/.test(e_type) ? u : "";
        const w = ce[e_type];
        const _ = /[defgprs%]/.test(e_type);
        function C(e) {
            let o;
            let i;
            let u;
            let d = b;
            let C = x;
            if (e_type === "c") {
                C = w(e) + C;
                e = "";
            } else {
                let O = (e = +e) < 0 || 1 / e < 0;
                e = isNaN(e) ? c : w(Math.abs(e), e_precision);
                if (e_trim) {
                    e = ((e)=>{
                        e: for(var t, n = e.length, r = 1, o = -1; r < n; ++r){
                            switch(e[r]){
                                case ".":
                                    t = r;
                                    o = r;
                                    break;
                                case "0":
                                    if (o === 0) {
                                        o = r;
                                    }
                                    t = r;
                                    break;
                                default:
                                    if (!+e[r]) {
                                        break e;
                                    }
                                    if (o > 0) {
                                        o = 0;
                                    }
                            }
                        }
                        if (o > 0) {
                            return e.slice(0, o) + e.slice(t + 1);
                        }
                        return e;
                    })(e);
                }
                if (O && +e == 0 && sign !== "+") {
                    O = false;
                }
                d = (O ? sign === "(" ? sign : s : sign === "-" || sign === "(" ? "" : sign) + d;
                C = (e_type === "s" ? pe[8 + oe / 3] : "") + C + (O && sign === "(" ? ")" : "");
                if (_) {
                    o = -1;
                    for(i = e.length; ++o < i;){
                        if ((u = e.charCodeAt(o)) < 48 || u > 57) {
                            C = (u === 46 ? a + e.slice(o + 1) : e.slice(o)) + C;
                            e = e.slice(0, o);
                            break;
                        }
                    }
                }
            }
            if (e_comma && !e_zero) {
                e = r(e, Infinity);
            }
            let E = d.length + e.length + C.length;
            let M = E < e_width ? new Array(e_width - E + 1).join(fill) : "";
            if (e_comma && e_zero) {
                e = r(M + e, M.length ? e_width - C.length : Infinity);
                M = "";
            }
            switch(e_align){
                case "<":
                    e = d + e + C + M;
                    break;
                case "=":
                    e = d + M + e + C;
                    break;
                case "^":
                    e = M.slice(0, E = M.length >> 1) + d + e + C + M.slice(E);
                    break;
                default:
                    e = M + d + e + C;
            }
            return l(e);
        }
        e_precision = e_precision === undefined ? 6 : /[gprs]/.test(e_type) ? Math.max(1, Math.min(21, e_precision)) : Math.max(0, Math.min(20, e_precision));
        C.toString = function() {
            return `${e}`;
        };
        return C;
    }
    return {
        format,
        formatPrefix: function(e, t) {
            const n = format(((e = te(e)).type = "f", e));
            const r = 3 * Math.max(-8, Math.min(8, Math.floor(ue(t) / 3)));
            const o = 10 ** -r;
            const i = pe[8 + r / 3];
            return function(e) {
                return n(o * e) + i;
            };
        }
    };
})({
    decimal: ".",
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ],
    minus: "-"
});
ae = ie.format;
le = ie.formatPrefix;
export const tickFormat = function(e, t, n, r) {
    let o;
    const i = g(e, t, n);
    switch((r = te(r ?? ",f")).type){
        case "s":
            const a = Math.max(Math.abs(e), Math.abs(t));
            if (!(r.precision != null || isNaN(o = ((e, t)=>Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(ue(t) / 3))) - ue(Math.abs(e))))(i, a)))) {
                r.precision = o;
            }
            return le(r, a);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            if (!(r.precision != null || isNaN(o = ((e, t)=>{
                e = Math.abs(e);
                t = Math.abs(t) - e;
                return Math.max(0, ue(t) - ue(e)) + 1;
            })(i, Math.max(Math.abs(e), Math.abs(t)))))) {
                r.precision = o - (r.type === "e");
            }
            break;
        case "f":
        case "%":
            if (!(r.precision != null || isNaN(o = ((e)=>Math.max(0, -ue(Math.abs(e))))(i)))) {
                r.precision = o - 2 * (r.type === "%");
            }
    }
    return ae(r);
};
function ve(e) {
    const e_domain = e.domain;
    e.ticks = function(e) {
        const n = e_domain();
        return h(n[0], n[n.length - 1], e ?? 10);
    };
    e.tickFormat = function(e, n) {
        const r = e_domain();
        return tickFormat(r[0], r[r.length - 1], e ?? 10, n);
    };
    e.nice = function(n) {
        if (n == null) {
            n = 10;
        }
        let r;
        const o = e_domain();
        let i = 0;
        let a = o.length - 1;
        let l = o[i];
        let u = o[a];
        if (u < l) {
            r = l;
            l = u;
            u = r;
            r = i;
            i = a;
            a = r;
        }
        if ((r = v(l, u, n)) > 0) {
            r = v(l = Math.floor(l / r) * r, u = Math.ceil(u / r) * r, n);
        } else if (r < 0) {
            r = v(l = Math.ceil(l * r) / r, u = Math.floor(u * r) / r, n);
        }
        if (r > 0) {
            o[i] = Math.floor(l / r) * r;
            o[a] = Math.ceil(u / r) * r;
            e_domain(o);
        } else if (r < 0) {
            o[i] = Math.ceil(l * r) / r;
            o[a] = Math.floor(u * r) / r;
            e_domain(o);
        }
        return e;
    };
    return e;
}
export function scaleLinear() {
    const e = Q(W, W);
    e.copy = function() {
        return X(e, scaleLinear());
    };
    m.apply(e, arguments);
    return ve(e);
}
export function scaleIdentity(e) {
    let t;
    function n(e) {
        if (isNaN(e = +e)) {
            return t;
        }
        return e;
    }
    n.invert = n;
    n.domain = n.range = function(t) {
        if (arguments.length) {
            e = map.call(t, U);
            return n;
        }
        return e.slice();
    };
    n.unknown = function(e) {
        if (arguments.length) {
            t = e;
            return n;
        }
        return t;
    };
    n.copy = function() {
        return scaleIdentity(e).unknown(t);
    };
    e = arguments.length ? map.call(e, U) : [
        0,
        1
    ];
    return ve(n);
}
const me = (e, t)=>{
    let n;
    let r = 0;
    let o = (e = e.slice()).length - 1;
    let i = e[r];
    let a = e[o];
    if (a < i) {
        n = r;
        r = o;
        o = n;
        n = i;
        i = a;
        a = n;
    }
    e[r] = t.floor(i);
    e[o] = t.ceil(a);
    return e;
};
function be(e) {
    return Math.log(e);
}
function xe(e) {
    return Math.exp(e);
}
function we(e) {
    return -Math.log(-e);
}
function _e(e) {
    return -Math.exp(-e);
}
function Ce(e) {
    if (isFinite(e)) {
        return +`1e${e}`;
    }
    if (e < 0) {
        return 0;
    }
    return e;
}
function Oe(e) {
    return function(t) {
        return -e(-t);
    };
}
function Ee(e) {
    let t;
    let n;
    const r = e(be, xe);
    const r_domain = r.domain;
    let i = 10;
    function a() {
        t = ((e)=>{
            if (e === Math.E) {
                return Math.log;
            }
            return e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), function(t) {
                return Math.log(t) / e;
            });
        })(i);
        n = ((e)=>{
            if (e === 10) {
                return Ce;
            }
            if (e === Math.E) {
                return Math.exp;
            }
            return function(t) {
                return e ** t;
            };
        })(i);
        if (r_domain()[0] < 0) {
            t = Oe(t);
            n = Oe(n);
            e(we, _e);
        } else {
            e(be, xe);
        }
        return r;
    }
    r.base = function(e) {
        if (arguments.length) {
            i = +e;
            return a();
        }
        return i;
    };
    r.domain = function(e) {
        if (arguments.length) {
            r_domain(e);
            return a();
        }
        return r_domain();
    };
    r.ticks = function(e) {
        let r;
        const a = r_domain();
        let l = a[0];
        let u = a[a.length - 1];
        if (r = u < l) {
            d = l;
            l = u;
            u = d;
        }
        let s;
        let c;
        let f;
        var d = t(l);
        let p = t(u);
        const v = e == null ? 10 : +e;
        let g = [];
        if (!(i % 1) && p - d < v) {
            d = Math.round(d) - 1;
            p = Math.round(p) + 1;
            if (l > 0) {
                for(; d < p; ++d){
                    c = 1;
                    for(s = n(d); c < i; ++c){
                        if (!((f = s * c) < l)) {
                            if (f > u) {
                                break;
                            }
                            g.push(f);
                        }
                    }
                }
            } else {
                for(; d < p; ++d){
                    c = i - 1;
                    for(s = n(d); c >= 1; --c){
                        if (!((f = s * c) < l)) {
                            if (f > u) {
                                break;
                            }
                            g.push(f);
                        }
                    }
                }
            }
        } else {
            g = h(d, p, Math.min(p - d, v)).map(n);
        }
        if (r) {
            return g.reverse();
        }
        return g;
    };
    r.tickFormat = function(e, o) {
        if (o == null) {
            o = i === 10 ? ".0e" : ",";
        }
        if (typeof o !== "function") {
            o = ae(o);
        }
        if (e === Infinity) {
            return o;
        }
        if (e == null) {
            e = 10;
        }
        const a = Math.max(1, i * e / r.ticks().length);
        return function(e) {
            let r = e / n(Math.round(t(e)));
            if (r * i < i - 0.5) {
                r *= i;
            }
            if (r <= a) {
                return o(e);
            }
            return "";
        };
    };
    r.nice = function() {
        return r_domain(me(r_domain(), {
            floor: function(e) {
                return n(Math.floor(t(e)));
            },
            ceil: function(e) {
                return n(Math.ceil(t(e)));
            }
        }));
    };
    return r;
}
export function scaleLog() {
    const e = Ee(J()).domain([
        1,
        10
    ]);
    e.copy = function() {
        return X(e, scaleLog()).base(e.base());
    };
    m.apply(e, arguments);
    return e;
}
function Se(e) {
    return function(t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / e));
    };
}
function Ae(e) {
    return function(t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
    };
}
function ke(e) {
    let t = 1;
    const n = e(Se(t), Ae(t));
    n.constant = function(n) {
        if (arguments.length) {
            return e(Se(t = +n), Ae(t));
        }
        return t;
    };
    return ve(n);
}
export function scaleSymlog() {
    const e = ke(J());
    e.copy = function() {
        return X(e, scaleSymlog()).constant(e.constant());
    };
    return m.apply(e, arguments);
}
function Te(e) {
    return function(t) {
        if (t < 0) {
            return -((-t) ** e);
        }
        return t ** e;
    };
}
function Pe(e) {
    if (e < 0) {
        return -Math.sqrt(-e);
    }
    return Math.sqrt(e);
}
function Le(e) {
    if (e < 0) {
        return -e * e;
    }
    return e * e;
}
function ze(e) {
    const t = e(W, W);
    let n = 1;
    function r() {
        switch(n){
            case 1:
                return e(W, W);
            case 0.5:
                return e(Pe, Le);
            default:
                return e(Te(n), Te(1 / n));
        }
    }
    t.exponent = function(e) {
        if (arguments.length) {
            n = +e;
            return r();
        }
        return n;
    };
    return ve(t);
}
export function scalePow() {
    const e = ze(J());
    e.copy = function() {
        return X(e, scalePow()).exponent(e.exponent());
    };
    m.apply(e, arguments);
    return e;
}
export function scaleSqrt() {
    return scalePow.apply(null, arguments).exponent(0.5);
}
export function scaleQuantile() {
    let e;
    let t = [];
    let n = [];
    let o = [];
    function i() {
        let e = 0;
        const r = Math.max(1, n.length);
        for(o = new Array(r - 1); ++e < r;){
            o[e - 1] = y(t, e / r);
        }
        return a;
    }
    function a(t) {
        if (isNaN(t = +t)) {
            return e;
        }
        return n[l(o, t)];
    }
    a.invertExtent = function(e) {
        const r = n.indexOf(e);
        if (r < 0) {
            return [
                NaN,
                NaN
            ];
        }
        return [
            r > 0 ? o[r - 1] : t[0],
            r < o.length ? o[r] : t[t.length - 1]
        ];
    };
    a.domain = function(e) {
        if (!arguments.length) {
            return t.slice();
        }
        t = [];
        let n;
        for(let o = 0, a = e.length; o < a; ++o){
            if (!((n = e[o]) == null || isNaN(n = +n))) {
                t.push(n);
            }
        }
        t.sort(r);
        return i();
    };
    a.range = function(e) {
        if (arguments.length) {
            n = slice.call(e);
            return i();
        }
        return n.slice();
    };
    a.unknown = function(t) {
        if (arguments.length) {
            e = t;
            return a;
        }
        return e;
    };
    a.quantiles = function() {
        return o.slice();
    };
    a.copy = function() {
        return scaleQuantile().domain(t).range(n).unknown(e);
    };
    return m.apply(a, arguments);
}
export function scaleQuantize() {
    let e;
    let t = 0;
    let n = 1;
    let r = 1;
    let o = [
        0.5
    ];
    let i = [
        0,
        1
    ];
    function a(t) {
        if (t <= t) {
            return i[l(o, t, 0, r)];
        }
        return e;
    }
    function u() {
        let e = -1;
        for(o = new Array(r); ++e < r;){
            o[e] = ((e + 1) * n - (e - r) * t) / (r + 1);
        }
        return a;
    }
    a.domain = function(e) {
        if (arguments.length) {
            t = +e[0];
            n = +e[1];
            return u();
        }
        return [
            t,
            n
        ];
    };
    a.range = function(e) {
        if (arguments.length) {
            r = (i = slice.call(e)).length - 1;
            return u();
        }
        return i.slice();
    };
    a.invertExtent = function(e) {
        const a = i.indexOf(e);
        if (a < 0) {
            return [
                NaN,
                NaN
            ];
        }
        if (a < 1) {
            return [
                t,
                o[0]
            ];
        }
        if (a >= r) {
            return [
                o[r - 1],
                n
            ];
        }
        return [
            o[a - 1],
            o[a]
        ];
    };
    a.unknown = function(t) {
        if (arguments.length) {
            e = t;
            return a;
        }
        return a;
    };
    a.thresholds = function() {
        return o.slice();
    };
    a.copy = function() {
        return scaleQuantize().domain([
            t,
            n
        ]).range(i).unknown(e);
    };
    return m.apply(ve(a), arguments);
}
export function scaleThreshold() {
    let e;
    let t = [
        0.5
    ];
    let n = [
        0,
        1
    ];
    let r = 1;
    function o(o) {
        if (o <= o) {
            return n[l(t, o, 0, r)];
        }
        return e;
    }
    o.domain = function(e) {
        if (arguments.length) {
            t = slice.call(e);
            r = Math.min(t.length, n.length - 1);
            return o;
        }
        return t.slice();
    };
    o.range = function(e) {
        if (arguments.length) {
            n = slice.call(e);
            r = Math.min(t.length, n.length - 1);
            return o;
        }
        return n.slice();
    };
    o.invertExtent = function(e) {
        const r = n.indexOf(e);
        return [
            t[r - 1],
            t[r]
        ];
    };
    o.unknown = function(t) {
        if (arguments.length) {
            e = t;
            return o;
        }
        return e;
    };
    o.copy = function() {
        return scaleThreshold().domain(t).range(n).unknown(e);
    };
    return m.apply(o, arguments);
}
const date_1 = new Date;
const date_2 = new Date;
function Ve(e, t, n, r) {
    function o(t) {
        e(t = arguments.length === 0 ? new Date : new Date(+t));
        return t;
    }
    o.floor = function(t) {
        e(t = new Date(+t));
        return t;
    };
    o.ceil = function(n) {
        e(n = new Date(n - 1));
        t(n, 1);
        e(n);
        return n;
    };
    o.round = function(e) {
        const t = o(e);
        const n = o.ceil(e);
        if (e - t < n - e) {
            return t;
        }
        return n;
    };
    o.offset = function(e, n) {
        t(e = new Date(+e), n == null ? 1 : Math.floor(n));
        return e;
    };
    o.range = function(n, r, i) {
        let a;
        const l = [];
        n = o.ceil(n);
        i = i == null ? 1 : Math.floor(i);
        if (!(n < r && i > 0)) {
            return l;
        }
        do {
            l.push(a = new Date(+n));
            t(n, i);
            e(n);
        }while (a < n && n < r)
        return l;
    };
    o.filter = function(n) {
        return Ve((t)=>{
            if (t >= t) {
                while(e(t), !n(t)){
                    t.setTime(t - 1);
                }
            }
        }, (e, r)=>{
            if (e >= e) {
                if (r < 0) {
                    while(++r <= 0){
                        while(t(e, -1), !n(e));
                    }
                } else {
                    while(--r >= 0){
                        while(t(e, 1), !n(e));
                    }
                }
            }
        });
    };
    if (n) {
        o.count = function(t, r) {
            date_1.setTime(+t);
            date_2.setTime(+r);
            e(date_1);
            e(date_2);
            return Math.floor(n(date_1, date_2));
        };
        o.every = function(e) {
            e = Math.floor(e);
            if (isFinite(e) && e > 0) {
                if (e > 1) {
                    return o.filter(r ? (t)=>r(t) % e == 0 : (t)=>o.count(0, t) % e == 0);
                }
                return o;
            }
            return null;
        };
    }
    return o;
}
const $e = Ve((e)=>{
    e.setMonth(0, 1);
    e.setHours(0, 0, 0, 0);
}, (e, t)=>{
    e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
    return t.getFullYear() - e.getFullYear();
}, function(e) {
    return e.getFullYear();
});
$e.every = function(e) {
    if (isFinite(e = Math.floor(e)) && e > 0) {
        return Ve((t)=>{
            t.setFullYear(Math.floor(t.getFullYear() / e) * e);
            t.setMonth(0, 1);
            t.setHours(0, 0, 0, 0);
        }, (t, n)=>{
            t.setFullYear(t.getFullYear() + n * e);
        });
    }
    return null;
};
const Ue = $e;
$e.range;
const Ze = Ve((e)=>{
    e.setDate(1);
    e.setHours(0, 0, 0, 0);
}, (e, t)=>{
    e.setMonth(e.getMonth() + t);
}, function(e, t) {
    return t.getMonth() - e.getMonth() + 12 * (t.getFullYear() - e.getFullYear());
}, function(e) {
    return e.getMonth();
});
const We = Ze;
function Ke(e) {
    return Ve((t)=>{
        t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7);
        t.setHours(0, 0, 0, 0);
    }, (e, t)=>{
        e.setDate(e.getDate() + 7 * t);
    }, function(e, t) {
        return (t - e - 60000 * (t.getTimezoneOffset() - e.getTimezoneOffset())) / 604800000;
    });
}
Ze.range;
const Ge = Ke(0);
const qe = Ke(1);
const Ye = Ke(2);
const Xe = Ke(3);
const Je = Ke(4);
const Qe = Ke(5);
const et = Ke(6);
Ge.range;
qe.range;
Ye.range;
Xe.range;
Je.range;
Qe.range;
et.range;
const tt = Ve((e)=>{
    e.setHours(0, 0, 0, 0);
}, (e, t)=>{
    e.setDate(e.getDate() + t);
}, function(e, t) {
    return (t - e - 60000 * (t.getTimezoneOffset() - e.getTimezoneOffset())) / 86400000;
}, function(e) {
    return e.getDate() - 1;
});
const nt = tt;
tt.range;
const rt = Ve((e)=>{
    e.setTime(e - e.getMilliseconds() - 1000 * e.getSeconds() - 60000 * e.getMinutes());
}, (e, t)=>{
    e.setTime(+e + 3600000 * t);
}, function(e, t) {
    return (t - e) / 3600000;
}, function(e) {
    return e.getHours();
});
const ot = rt;
rt.range;
const it = Ve((e)=>{
    e.setTime(e - e.getMilliseconds() - 1000 * e.getSeconds());
}, (e, t)=>{
    e.setTime(+e + 60000 * t);
}, function(e, t) {
    return (t - e) / 60000;
}, function(e) {
    return e.getMinutes();
});
const at = it;
it.range;
const lt = Ve((e)=>{
    e.setTime(e - e.getMilliseconds());
}, (e, t)=>{
    e.setTime(+e + 1000 * t);
}, function(e, t) {
    return (t - e) / 1000;
}, function(e) {
    return e.getUTCSeconds();
});
const ut = lt;
lt.range;
const st = Ve(()=>{}, (e, t)=>{
    e.setTime(+e + t);
}, function(e, t) {
    return t - e;
});
st.every = function(e) {
    e = Math.floor(e);
    if (isFinite(e) && e > 0) {
        if (e > 1) {
            return Ve((t)=>{
                t.setTime(Math.floor(t / e) * e);
            }, (t, n)=>{
                t.setTime(+t + n * e);
            }, function(t, n) {
                return (n - t) / e;
            });
        }
        return st;
    }
    return null;
};
const ct = st;
function ft(e) {
    return Ve((t)=>{
        t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7);
        t.setUTCHours(0, 0, 0, 0);
    }, (e, t)=>{
        e.setUTCDate(e.getUTCDate() + 7 * t);
    }, function(e, t) {
        return (t - e) / 604800000;
    });
}
st.range;
const dt = ft(0);
const pt = ft(1);
const ht = ft(2);
const vt = ft(3);
const gt = ft(4);
const yt = ft(5);
const mt = ft(6);
dt.range;
pt.range;
ht.range;
vt.range;
gt.range;
yt.range;
mt.range;
const bt = Ve((e)=>{
    e.setUTCHours(0, 0, 0, 0);
}, (e, t)=>{
    e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
    return (t - e) / 86400000;
}, function(e) {
    return e.getUTCDate() - 1;
});
const xt = bt;
bt.range;
const wt = Ve((e)=>{
    e.setUTCMonth(0, 1);
    e.setUTCHours(0, 0, 0, 0);
}, (e, t)=>{
    e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
    return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
    return e.getUTCFullYear();
});
wt.every = function(e) {
    if (isFinite(e = Math.floor(e)) && e > 0) {
        return Ve((t)=>{
            t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e);
            t.setUTCMonth(0, 1);
            t.setUTCHours(0, 0, 0, 0);
        }, (t, n)=>{
            t.setUTCFullYear(t.getUTCFullYear() + n * e);
        });
    }
    return null;
};
const _t = wt;
function Ct(e) {
    if (e.y >= 0 && e.y < 100) {
        const t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
        t.setFullYear(e.y);
        return t;
    }
    return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ot(e) {
    if (e.y >= 0 && e.y < 100) {
        const t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        t.setUTCFullYear(e.y);
        return t;
    }
    return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Et(e, t, d_1) {
    return {
        y: e,
        m: t,
        d: d_1,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    };
}
wt.range;
let Mt;
let St;
let At;
const kt = {
    "-": "",
    _: " ",
    0: "0"
};
const jt = /^\s*\d+/;
const Tt = /^%/;
const Pt = /[\\^$*+?|[\]().{}]/g;
function Lt(e, t, n) {
    const r = e < 0 ? "-" : "";
    const o = `${r ? -e : e}`;
    const o_length = o.length;
    return r + (o_length < n ? new Array(n - o_length + 1).join(t) + o : o);
}
function zt(e) {
    return e.replace(Pt, "\\$&");
}
function Nt(e) {
    return new RegExp(`^(?:${e.map(zt).join("|")})`, "i");
}
function Dt(e) {
    const t = {};
    for(let n = -1, r = e.length; ++n < r;){
        t[e[n].toLowerCase()] = n;
    }
    return t;
}
function It(e, t, n) {
    const r = jt.exec(t.slice(n, n + 1));
    if (r) {
        e.w = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Rt(e, t, n) {
    const r = jt.exec(t.slice(n, n + 1));
    if (r) {
        e.u = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Ht(e, t, n) {
    const r = jt.exec(t.slice(n, n + 2));
    if (r) {
        e.U = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Bt(e, t, n) {
    const r = jt.exec(t.slice(n, n + 2));
    if (r) {
        e.V = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Ft(e, t, n) {
    const r = jt.exec(t.slice(n, n + 2));
    if (r) {
        e.W = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Vt(e, t, n) {
    const r = jt.exec(t.slice(n, n + 4));
    if (r) {
        e.y = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function $t(e, t, n) {
    const r = jt.exec(t.slice(n, n + 2));
    if (r) {
        e.y = +r[0] + (+r[0] > 68 ? 1900 : 2000);
        return n + r[0].length;
    }
    return -1;
}
function Ut(e, t, n) {
    const r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
    if (r) {
        e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"));
        return n + r[0].length;
    }
    return -1;
}
function q_1(e, t, n) {
    const r = jt.exec(t.slice(n, n + 1));
    if (r) {
        e.q = 3 * r[0] - 3;
        return n + r[0].length;
    }
    return -1;
}
function Wt(e, t, n) {
    const r = jt.exec(t.slice(n, n + 2));
    if (r) {
        e.m = r[0] - 1;
        return n + r[0].length;
    }
    return -1;
}
function Kt(e, t, n) {
    const r = jt.exec(t.slice(n, n + 2));
    if (r) {
        e.d = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Gt(e, t, n) {
    const r = jt.exec(t.slice(n, n + 3));
    if (r) {
        e.m = 0;
        e.d = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function qt(e, t, n) {
    const r = jt.exec(t.slice(n, n + 2));
    if (r) {
        e.H = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Yt(e, t, n) {
    const r = jt.exec(t.slice(n, n + 2));
    if (r) {
        e.M = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Xt(e, t, n) {
    const r = jt.exec(t.slice(n, n + 2));
    if (r) {
        e.S = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function L(e, t, n) {
    const r = jt.exec(t.slice(n, n + 3));
    if (r) {
        e.L = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Qt(e, t, n) {
    const r = jt.exec(t.slice(n, n + 6));
    if (r) {
        e.L = Math.floor(r[0] / 1000);
        return n + r[0].length;
    }
    return -1;
}
function en(e, t, n) {
    const r = Tt.exec(t.slice(n, n + 1));
    if (r) {
        return n + r[0].length;
    }
    return -1;
}
function tn(e, t, n) {
    const r = jt.exec(t.slice(n));
    if (r) {
        e.Q = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function nn(e, t, n) {
    const r = jt.exec(t.slice(n));
    if (r) {
        e.s = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function rn(e, t) {
    return Lt(e.getDate(), t, 2);
}
function on(e, t) {
    return Lt(e.getHours(), t, 2);
}
function an(e, t) {
    return Lt(e.getHours() % 12 || 12, t, 2);
}
function ln(e, t) {
    return Lt(1 + nt.count(Ue(e), e), t, 3);
}
function un(e, t) {
    return Lt(e.getMilliseconds(), t, 3);
}
function sn(e, t) {
    return `${un(e, t)}000`;
}
function cn(e, t) {
    return Lt(e.getMonth() + 1, t, 2);
}
function fn(e, t) {
    return Lt(e.getMinutes(), t, 2);
}
function dn(e, t) {
    return Lt(e.getSeconds(), t, 2);
}
function pn(e) {
    const t = e.getDay();
    if (t === 0) {
        return 7;
    }
    return t;
}
function hn(e, t) {
    return Lt(Ge.count(Ue(e) - 1, e), t, 2);
}
function vn(e) {
    const t = e.getDay();
    if (t >= 4 || t === 0) {
        return Je(e);
    }
    return Je.ceil(e);
}
function gn(e, t) {
    e = vn(e);
    return Lt(Je.count(Ue(e), e) + (Ue(e).getDay() === 4), t, 2);
}
function yn(e) {
    return e.getDay();
}
function mn(e, t) {
    return Lt(qe.count(Ue(e) - 1, e), t, 2);
}
function bn(e, t) {
    return Lt(e.getFullYear() % 100, t, 2);
}
function xn(e, t) {
    return Lt((e = vn(e)).getFullYear() % 100, t, 2);
}
function wn(e, t) {
    return Lt(e.getFullYear() % 10000, t, 4);
}
function _n(e, t) {
    const n = e.getDay();
    return Lt((e = n >= 4 || n === 0 ? Je(e) : Je.ceil(e)).getFullYear() % 10000, t, 4);
}
function Cn(e) {
    let t = e.getTimezoneOffset();
    return (t > 0 ? "-" : (t *= -1, "+")) + Lt(t / 60 | 0, "0", 2) + Lt(t % 60, "0", 2);
}
function On(e, t) {
    return Lt(e.getUTCDate(), t, 2);
}
function En(e, t) {
    return Lt(e.getUTCHours(), t, 2);
}
function Mn(e, t) {
    return Lt(e.getUTCHours() % 12 || 12, t, 2);
}
function Sn(e, t) {
    return Lt(1 + xt.count(_t(e), e), t, 3);
}
function An(e, t) {
    return Lt(e.getUTCMilliseconds(), t, 3);
}
function kn(e, t) {
    return `${An(e, t)}000`;
}
function jn(e, t) {
    return Lt(e.getUTCMonth() + 1, t, 2);
}
function Tn(e, t) {
    return Lt(e.getUTCMinutes(), t, 2);
}
function Pn(e, t) {
    return Lt(e.getUTCSeconds(), t, 2);
}
function Ln(e) {
    const t = e.getUTCDay();
    if (t === 0) {
        return 7;
    }
    return t;
}
function zn(e, t) {
    return Lt(dt.count(_t(e) - 1, e), t, 2);
}
function Nn(e) {
    const t = e.getUTCDay();
    if (t >= 4 || t === 0) {
        return gt(e);
    }
    return gt.ceil(e);
}
function Dn(e, t) {
    e = Nn(e);
    return Lt(gt.count(_t(e), e) + (_t(e).getUTCDay() === 4), t, 2);
}
function In(e) {
    return e.getUTCDay();
}
function Rn(e, t) {
    return Lt(pt.count(_t(e) - 1, e), t, 2);
}
function Hn(e, t) {
    return Lt(e.getUTCFullYear() % 100, t, 2);
}
function Bn(e, t) {
    return Lt((e = Nn(e)).getUTCFullYear() % 100, t, 2);
}
function Fn(e, t) {
    return Lt(e.getUTCFullYear() % 10000, t, 4);
}
function Vn(e, t) {
    const n = e.getUTCDay();
    return Lt((e = n >= 4 || n === 0 ? gt(e) : gt.ceil(e)).getUTCFullYear() % 10000, t, 4);
}
function $n() {
    return "+0000";
}
function Un() {
    return "%";
}
function Zn(e) {
    return +e;
}
function Wn(e) {
    return Math.floor(+e / 1000);
}
function Kn(e) {
    return new Date(e);
}
function Gn(e) {
    if (e instanceof Date) {
        return +e;
    }
    return +new Date(+e);
}
function qn(e, t, n, r, i, a, l, u, s) {
    const c = Q(W, W);
    const { invert, domain } = c;
    const p = s(".%L");
    const h = s(":%S");
    const v = s("%I:%M");
    const y = s("%I %p");
    const m = s("%a %d");
    const b = s("%b %d");
    const x = s("%B");
    const w = s("%Y");
    const _ = [
        [
            l,
            1,
            1000
        ],
        [
            l,
            5,
            5000
        ],
        [
            l,
            15,
            15000
        ],
        [
            l,
            30,
            30000
        ],
        [
            a,
            1,
            60000
        ],
        [
            a,
            5,
            300000
        ],
        [
            a,
            15,
            900000
        ],
        [
            a,
            30,
            1800000
        ],
        [
            i,
            1,
            3600000
        ],
        [
            i,
            3,
            10800000
        ],
        [
            i,
            6,
            21600000
        ],
        [
            i,
            12,
            43200000
        ],
        [
            r,
            1,
            86400000
        ],
        [
            r,
            2,
            172800000
        ],
        [
            n,
            1,
            604800000
        ],
        [
            t,
            1,
            2592000000
        ],
        [
            t,
            3,
            7776000000
        ],
        [
            e,
            1,
            31536000000
        ]
    ];
    function C(o) {
        return (l(o) < o ? p : a(o) < o ? h : i(o) < o ? v : r(o) < o ? y : t(o) < o ? n(o) < o ? m : b : e(o) < o ? x : w)(o);
    }
    function O(t, n, r, i) {
        if (t == null) {
            t = 10;
        }
        if (typeof t === "number") {
            const a = Math.abs(r - n) / t;
            let l = o(function(e) {
                return e[2];
            }).right(_, a);
            if (l === _.length) {
                i = g(n / 31536000000, r / 31536000000, t);
                t = e;
            } else if (l) {
                i = (l = _[a / _[l - 1][2] < _[l][2] / a ? l - 1 : l])[1];
                t = l[0];
            } else {
                i = Math.max(g(n, r, t), 1);
                t = u;
            }
        }
        if (i == null) {
            return t;
        }
        return t.every(i);
    }
    c.invert = function(e) {
        return new Date(invert(e));
    };
    c.domain = function(e) {
        if (arguments.length) {
            return domain(map.call(e, Gn));
        }
        return domain().map(Kn);
    };
    c.ticks = function(e, t) {
        let n;
        const r = domain();
        let o = r[0];
        let i = r[r.length - 1];
        const a = i < o;
        if (a) {
            n = o;
            o = i;
            i = n;
        }
        n = (n = O(e, o, i, t)) ? n.range(o, i + 1) : [];
        if (a) {
            return n.reverse();
        }
        return n;
    };
    c.tickFormat = function(e, t) {
        if (t == null) {
            return C;
        }
        return s(t);
    };
    c.nice = function(e, t) {
        const n = domain();
        if (e = O(e, n[0], n[n.length - 1], t)) {
            return domain(me(n, e));
        }
        return c;
    };
    c.copy = function() {
        return X(c, qn(e, t, n, r, i, a, l, u, s));
    };
    return c;
}
Mt = (({ dateTime, date, time, periods, days, shortDays, months, shortMonths })=>{
    const s = Nt(periods);
    const c = Dt(periods);
    const f = Nt(days);
    const d = Dt(days);
    const p = Nt(shortDays);
    const h = Dt(shortDays);
    const v = Nt(months);
    const g = Dt(months);
    const y = Nt(shortMonths);
    const m = Dt(shortMonths);
    const b = {
        a: function(e) {
            return shortDays[e.getDay()];
        },
        A: function(e) {
            return days[e.getDay()];
        },
        b: function(e) {
            return shortMonths[e.getMonth()];
        },
        B: function(e) {
            return months[e.getMonth()];
        },
        c: null,
        d: rn,
        e: rn,
        f: sn,
        g: xn,
        G: _n,
        H: on,
        I: an,
        j: ln,
        L: un,
        m: cn,
        M: fn,
        p: function(e) {
            return periods[+(e.getHours() >= 12)];
        },
        q: function(e) {
            return 1 + ~~(e.getMonth() / 3);
        },
        Q: Zn,
        s: Wn,
        S: dn,
        u: pn,
        U: hn,
        V: gn,
        w: yn,
        W: mn,
        x: null,
        X: null,
        y: bn,
        Y: wn,
        Z: Cn,
        "%": Un
    };
    const x = {
        a: function(e) {
            return shortDays[e.getUTCDay()];
        },
        A: function(e) {
            return days[e.getUTCDay()];
        },
        b: function(e) {
            return shortMonths[e.getUTCMonth()];
        },
        B: function(e) {
            return months[e.getUTCMonth()];
        },
        c: null,
        d: On,
        e: On,
        f: kn,
        g: Bn,
        G: Vn,
        H: En,
        I: Mn,
        j: Sn,
        L: An,
        m: jn,
        M: Tn,
        p: function(e) {
            return periods[+(e.getUTCHours() >= 12)];
        },
        q: function(e) {
            return 1 + ~~(e.getUTCMonth() / 3);
        },
        Q: Zn,
        s: Wn,
        S: Pn,
        u: Ln,
        U: zn,
        V: Dn,
        w: In,
        W: Rn,
        x: null,
        X: null,
        y: Hn,
        Y: Fn,
        Z: $n,
        "%": Un
    };
    var w = {
        a: function(e, t, n) {
            const r = p.exec(t.slice(n));
            if (r) {
                e.w = h[r[0].toLowerCase()];
                return n + r[0].length;
            }
            return -1;
        },
        A: function(e, t, n) {
            const r = f.exec(t.slice(n));
            if (r) {
                e.w = d[r[0].toLowerCase()];
                return n + r[0].length;
            }
            return -1;
        },
        b: function(e, t, n) {
            const r = y.exec(t.slice(n));
            if (r) {
                e.m = m[r[0].toLowerCase()];
                return n + r[0].length;
            }
            return -1;
        },
        B: function(e, t, n) {
            const r = v.exec(t.slice(n));
            if (r) {
                e.m = g[r[0].toLowerCase()];
                return n + r[0].length;
            }
            return -1;
        },
        c: function(e, n, r) {
            return O(e, dateTime, n, r);
        },
        d: Kt,
        e: Kt,
        f: Qt,
        g: $t,
        G: Vt,
        H: qt,
        I: qt,
        j: Gt,
        L,
        m: Wt,
        M: Yt,
        p: function(e, t, n) {
            const r = s.exec(t.slice(n));
            if (r) {
                e.p = c[r[0].toLowerCase()];
                return n + r[0].length;
            }
            return -1;
        },
        q: q_1,
        Q: tn,
        s: nn,
        S: Xt,
        u: Rt,
        U: Ht,
        V: Bt,
        w: It,
        W: Ft,
        x: function(e, t, r) {
            return O(e, date, t, r);
        },
        X: function(e, t, n) {
            return O(e, time, t, n);
        },
        y: $t,
        Y: Vt,
        Z: Ut,
        "%": en
    };
    function _(e, t) {
        return function(n) {
            let r;
            let o;
            let i;
            const a = [];
            let l = -1;
            let u = 0;
            const e_length = e.length;
            for(n instanceof Date || (n = new Date(+n)); ++l < e_length;){
                if (e.charCodeAt(l) === 37) {
                    a.push(e.slice(u, l));
                    if ((o = kt[r = e.charAt(++l)]) != null) {
                        r = e.charAt(++l);
                    } else {
                        o = r === "e" ? " " : "0";
                    }
                    if (i = t[r]) {
                        r = i(n, o);
                    }
                    a.push(r);
                    u = l + 1;
                }
            }
            a.push(e.slice(u, l));
            return a.join("");
        };
    }
    function C(e, t) {
        return function(n) {
            let r;
            let o;
            const i = Et(1900, undefined, 1);
            if (O(i, e, n += "", 0) != n.length) {
                return null;
            }
            if ("Q" in i) {
                return new Date(i.Q);
            }
            if ("s" in i) {
                return new Date(1000 * i.s + ("L" in i ? i.L : 0));
            }
            if (t && !("Z" in i)) {
                i.Z = 0;
            }
            if ("p" in i) {
                i.H = i.H % 12 + 12 * i.p;
            }
            if (i.m === undefined) {
                i.m = "q" in i ? i.q : 0;
            }
            if ("V" in i) {
                if (i.V < 1 || i.V > 53) {
                    return null;
                }
                if (!("w" in i)) {
                    i.w = 1;
                }
                if ("Z" in i) {
                    o = (r = Ot(Et(i.y, 0, 1))).getUTCDay();
                    r = o > 4 || o === 0 ? pt.ceil(r) : pt(r);
                    r = xt.offset(r, 7 * (i.V - 1));
                    i.y = r.getUTCFullYear();
                    i.m = r.getUTCMonth();
                    i.d = r.getUTCDate() + (i.w + 6) % 7;
                } else {
                    o = (r = Ct(Et(i.y, 0, 1))).getDay();
                    r = o > 4 || o === 0 ? qe.ceil(r) : qe(r);
                    r = nt.offset(r, 7 * (i.V - 1));
                    i.y = r.getFullYear();
                    i.m = r.getMonth();
                    i.d = r.getDate() + (i.w + 6) % 7;
                }
            } else {
                if ("W" in i || "U" in i) {
                    if (!("w" in i)) {
                        i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0;
                    }
                    o = "Z" in i ? Ot(Et(i.y, 0, 1)).getUTCDay() : Ct(Et(i.y, 0, 1)).getDay();
                    i.m = 0;
                    i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (o + 5) % 7 : i.w + 7 * i.U - (o + 6) % 7;
                }
            }
            if ("Z" in i) {
                i.H += i.Z / 100 | 0;
                i.M += i.Z % 100;
                return Ot(i);
            }
            return Ct(i);
        };
    }
    function O(e, t, n, r) {
        let o;
        let i;
        for(let a = 0, l = t.length, u = n.length; a < l;){
            if (r >= u) {
                return -1;
            }
            if ((o = t.charCodeAt(a++)) === 37) {
                o = t.charAt(a++);
                if (!(i = w[o in kt ? t.charAt(a++) : o]) || (r = i(e, n, r)) < 0) {
                    return -1;
                }
            } else if (o != n.charCodeAt(r++)) {
                return -1;
            }
        }
        return r;
    }
    b.x = _(date, b);
    b.X = _(time, b);
    b.c = _(dateTime, b);
    x.x = _(date, x);
    x.X = _(time, x);
    x.c = _(dateTime, x);
    return {
        format: function(e) {
            const t = _(e += "", b);
            t.toString = function() {
                return e;
            };
            return t;
        },
        parse: function(e) {
            const t = C(e += "", false);
            t.toString = function() {
                return e;
            };
            return t;
        },
        utcFormat: function(e) {
            const t = _(e += "", x);
            t.toString = function() {
                return e;
            };
            return t;
        },
        utcParse: function(e) {
            const t = C(e += "", true);
            t.toString = function() {
                return e;
            };
            return t;
        }
    };
})({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: [
        "AM",
        "PM"
    ],
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    shortDays: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
});
St = Mt.format;
Mt.parse;
At = Mt.utcFormat;
Mt.utcParse;
export const scaleTime = function() {
    return m.apply(qn(Ue, We, Ge, nt, ot, at, ut, ct, St).domain([
        new Date(2000, 0, 1),
        new Date(2000, 0, 2)
    ]), arguments);
};
const Xn = Ve((e)=>{
    e.setUTCDate(1);
    e.setUTCHours(0, 0, 0, 0);
}, (e, t)=>{
    e.setUTCMonth(e.getUTCMonth() + t);
}, function(e, t) {
    return t.getUTCMonth() - e.getUTCMonth() + 12 * (t.getUTCFullYear() - e.getUTCFullYear());
}, function(e) {
    return e.getUTCMonth();
});
const Jn = Xn;
Xn.range;
const Qn = Ve((e)=>{
    e.setUTCMinutes(0, 0, 0);
}, (e, t)=>{
    e.setTime(+e + 3600000 * t);
}, function(e, t) {
    return (t - e) / 3600000;
}, function(e) {
    return e.getUTCHours();
});
const er = Qn;
Qn.range;
const tr = Ve((e)=>{
    e.setUTCSeconds(0, 0);
}, (e, t)=>{
    e.setTime(+e + 60000 * t);
}, function(e, t) {
    return (t - e) / 60000;
}, function(e) {
    return e.getUTCMinutes();
});
const nr = tr;
tr.range;
export const scaleUtc = function() {
    return m.apply(qn(_t, Jn, dt, xt, er, nr, ut, ct, At).domain([
        Date.UTC(2000, 0, 1),
        Date.UTC(2000, 0, 2)
    ]), arguments);
};
function or() {
    let e;
    let t;
    let n;
    let r;
    let o;
    let i = 0;
    let a = 1;
    let l = W;
    let u = false;
    function s(t) {
        if (isNaN(t = +t)) {
            return o;
        }
        return l(n === 0 ? 0.5 : (t = (r(t) - e) * n, u ? Math.max(0, Math.min(1, t)) : t));
    }
    s.domain = function(o) {
        if (arguments.length) {
            e = r(i = +o[0]);
            t = r(a = +o[1]);
            n = e === t ? 0 : 1 / (t - e);
            return s;
        }
        return [
            i,
            a
        ];
    };
    s.clamp = function(e) {
        if (arguments.length) {
            u = !!e;
            return s;
        }
        return u;
    };
    s.interpolator = function(e) {
        if (arguments.length) {
            l = e;
            return s;
        }
        return l;
    };
    s.unknown = function(e) {
        if (arguments.length) {
            o = e;
            return s;
        }
        return o;
    };
    return function(o) {
        r = o;
        e = o(i);
        t = o(a);
        n = e === t ? 0 : 1 / (t - e);
        return s;
    };
}
function ir(e, t) {
    return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
export function scaleSequential() {
    const e = ve(or()(W));
    e.copy = function() {
        return ir(e, scaleSequential());
    };
    return b.apply(e, arguments);
}
export function scaleSequentialLog() {
    const e = Ee(or()).domain([
        1,
        10
    ]);
    e.copy = function() {
        return ir(e, scaleSequentialLog()).base(e.base());
    };
    return b.apply(e, arguments);
}
export function scaleSequentialSymlog() {
    const e = ke(or());
    e.copy = function() {
        return ir(e, scaleSequentialSymlog()).constant(e.constant());
    };
    return b.apply(e, arguments);
}
export function scaleSequentialPow() {
    const e = ze(or());
    e.copy = function() {
        return ir(e, scaleSequentialPow()).exponent(e.exponent());
    };
    return b.apply(e, arguments);
}
export function scaleSequentialSqrt() {
    return scaleSequentialPow.apply(null, arguments).exponent(0.5);
}
export function scaleSequentialQuantile() {
    let e = [];
    let t = W;
    function n(n) {
        if (!isNaN(n = +n)) {
            return t((l(e, n) - 1) / (e.length - 1));
        }
    }
    n.domain = function(t) {
        if (!arguments.length) {
            return e.slice();
        }
        e = [];
        let o;
        for(let i = 0, a = t.length; i < a; ++i){
            if (!((o = t[i]) == null || isNaN(o = +o))) {
                e.push(o);
            }
        }
        e.sort(r);
        return n;
    };
    n.interpolator = function(e) {
        if (arguments.length) {
            t = e;
            return n;
        }
        return t;
    };
    n.copy = function() {
        return scaleSequentialQuantile(t).domain(e);
    };
    return b.apply(n, arguments);
}
function dr() {
    let e;
    let t;
    let n;
    let r;
    let o;
    let i;
    let a;
    let l = 0;
    let u = 0.5;
    let s = 1;
    let c = W;
    let f = false;
    function d(e) {
        if (isNaN(e = +e)) {
            return a;
        }
        e = 0.5 + ((e = +i(e)) - t) * (e < t ? r : o);
        return c(f ? Math.max(0, Math.min(1, e)) : e);
    }
    d.domain = function(a) {
        if (arguments.length) {
            e = i(l = +a[0]);
            t = i(u = +a[1]);
            n = i(s = +a[2]);
            r = e === t ? 0 : 0.5 / (t - e);
            o = t === n ? 0 : 0.5 / (n - t);
            return d;
        }
        return [
            l,
            u,
            s
        ];
    };
    d.clamp = function(e) {
        if (arguments.length) {
            f = !!e;
            return d;
        }
        return f;
    };
    d.interpolator = function(e) {
        if (arguments.length) {
            c = e;
            return d;
        }
        return c;
    };
    d.unknown = function(e) {
        if (arguments.length) {
            a = e;
            return d;
        }
        return a;
    };
    return function(a) {
        i = a;
        e = a(l);
        t = a(u);
        n = a(s);
        r = e === t ? 0 : 0.5 / (t - e);
        o = t === n ? 0 : 0.5 / (n - t);
        return d;
    };
}
export function scaleDiverging() {
    const e = ve(dr()(W));
    e.copy = function() {
        return ir(e, scaleDiverging());
    };
    return b.apply(e, arguments);
}
export function scaleDivergingLog() {
    const e = Ee(dr()).domain([
        0.1,
        1,
        10
    ]);
    e.copy = function() {
        return ir(e, scaleDivergingLog()).base(e.base());
    };
    return b.apply(e, arguments);
}
export function scaleDivergingSymlog() {
    const e = ke(dr());
    e.copy = function() {
        return ir(e, scaleDivergingSymlog()).constant(e.constant());
    };
    return b.apply(e, arguments);
}
export function scaleDivergingPow() {
    const e = ze(dr());
    e.copy = function() {
        return ir(e, scaleDivergingPow()).exponent(e.exponent());
    };
    return b.apply(e, arguments);
}
export function scaleDivergingSqrt() {
    return scaleDivergingPow.apply(null, arguments).exponent(0.5);
}
