import { a as a_1 } from "./module-1441.js";
import * as module1141 from "./module-1141.js";
import { a as a_2 } from "./module-1890.js";
import { a as a_3 } from "./module-1891.js";
import { b as b_1 } from "./module-1259.js";
import { a as a_4 } from "./module-1277.js";
import { a as a_5 } from "./module-1241.js";
import { a as a_6 } from "./module-5792.js";
import { a as a_7 } from "./module-5777.js";
import { a as a_8 } from "./module-2147.js";
import { a as a_9 } from "./module-1437.js";
import { a as a_10 } from "./module-1243.js";
import { a as a_11 } from "./module-1438.js";
import { b as b_2 } from "./module-1439.js";
const r = {
    value: function() {}
};
function o(...args) {
    let e;
    for(var t = 0, n = args.length, r = {}; t < n; ++t){
        if (!(e = `${args[t]}`) || e in r || /[\s.]/.test(e)) {
            throw new Error(`illegal type: ${e}`);
        }
        r[e] = [];
    }
    return new i(r);
}
function i(e) {
    this._ = e;
}
function a(e, t) {
    return e.trim().split(/^|\s+/).map((e)=>{
        let n = "";
        const r = e.indexOf(".");
        if (r >= 0) {
            n = e.slice(r + 1);
            e = e.slice(0, r);
        }
        if (e && !t.hasOwnProperty(e)) {
            throw new Error(`unknown type: ${e}`);
        }
        return {
            type: e,
            name: n
        };
    });
}
function l(e, name) {
    let n;
    for(let r = 0, o = e.length; r < o; ++r){
        if ((n = e[r]).name === name) {
            return n.value;
        }
    }
}
function u(e, name, n) {
    for(let o = 0, i = e.length; o < i; ++o){
        if (e[o].name === name) {
            e[o] = r;
            e = e.slice(0, o).concat(e.slice(o + 1));
            break;
        }
    }
    if (n != null) {
        e.push({
            name,
            value: n
        });
    }
    return e;
}
i.prototype = o.prototype = {
    constructor: i,
    on: function(e, t) {
        let n;
        const r = this._;
        const o = a(`${e}`, r);
        let i = -1;
        const o_length = o.length;
        if (!(arguments.length < 2)) {
            if (t != null && typeof t !== "function") {
                throw new Error(`invalid callback: ${t}`);
            }
            while(++i < o_length){
                if (n = (e = o[i]).type) {
                    r[n] = u(r[n], e.name, t);
                } else if (t == null) {
                    for(n in r){
                        r[n] = u(r[n], e.name, null);
                    }
                }
            }
            return this;
        }
        while(++i < o_length){
            if ((n = (e = o[i]).type) && (n = l(r[n], e.name))) {
                return n;
            }
        }
    },
    copy: function() {
        const e = {};
        const t = this._;
        for(const n in t){
            e[n] = t[n].slice();
        }
        return new i(e);
    },
    call: function(e, t) {
        if ((n = arguments.length - 2) > 0) {
            var r;
            for(var n, o = new Array(n), i = 0; i < n; ++i){
                o[i] = arguments[i + 2];
            }
        }
        if (!this._.hasOwnProperty(e)) {
            throw new Error(`unknown type: ${e}`);
        }
        i = 0;
        for(n = (r = this._[e]).length; i < n; ++i){
            r[i].value.apply(t, o);
        }
    },
    apply: function(e, t, n) {
        if (!this._.hasOwnProperty(e)) {
            throw new Error(`unknown type: ${e}`);
        }
        const r = this._[e];
        for(let o = 0, i = r.length; o < i; ++o){
            r[o].value.apply(t, n);
        }
    }
};
const s = o;
const d = function() {
    module1141.c.preventDefault();
    module1141.c.stopImmediatePropagation();
};
const p = (view)=>{
    const documentElement = view.document.documentElement;
    const n = a_1(view).on("dragstart.drag", d, true);
    if ("onselectstart" in documentElement) {
        n.on("selectstart.drag", d, true);
    } else {
        documentElement.__noselect = documentElement.style.MozUserSelect;
        documentElement.style.MozUserSelect = "none";
    }
};
function h(view, moved) {
    const documentElement = view.document.documentElement;
    const r = a_1(view).on("dragstart.drag", null);
    if (moved) {
        r.on("click.drag", d, true);
        setTimeout(()=>{
            r.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in documentElement) {
        r.on("selectstart.drag", null);
    } else {
        documentElement.style.MozUserSelect = documentElement.__noselect;
        delete documentElement.__noselect;
    }
}
function g(e) {
    return ((e = Math.exp(e)) + 1 / e) / 2;
}
let y;
let m;
const b = function(e, t) {
    let n;
    let r;
    const o = e[0];
    const i = e[1];
    const a = e[2];
    const l = t[0];
    const u = t[1];
    const s = t[2];
    const c = l - o;
    const f = u - i;
    const d = c * c + f * f;
    if (d < 1e-12) {
        r = Math.log(s / a) / Math.SQRT2;
        n = function(e) {
            return [
                o + e * c,
                i + e * f,
                a * Math.exp(Math.SQRT2 * e * r)
            ];
        };
    } else {
        const p = Math.sqrt(d);
        const h = (s * s - a * a + 4 * d) / (2 * a * 2 * p);
        const y = (s * s - a * a - 4 * d) / (2 * s * 2 * p);
        const m = Math.log(Math.sqrt(h * h + 1) - h);
        const b = Math.log(Math.sqrt(y * y + 1) - y);
        r = (b - m) / Math.SQRT2;
        n = function(e) {
            let t;
            const n = e * r;
            const l = g(m);
            const u = a / (2 * p) * (l * (t = Math.SQRT2 * n + m, ((t = Math.exp(2 * t)) - 1) / (t + 1)) - ((e)=>((e = Math.exp(e)) - 1 / e) / 2)(m));
            return [
                o + u * c,
                i + u * f,
                a * l / g(Math.SQRT2 * n + m)
            ];
        };
    }
    n.duration = 1000 * r;
    return n;
};
let C = 0;
let O = 0;
let E = 0;
let M = 0;
let S = 0;
let A = 0;
const k = typeof performance === "object" && performance.now ? performance : Date;
const j = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : (e)=>{
    setTimeout(e, 17);
};
function T() {
    return S || (j(P), S = k.now() + A);
}
function P() {
    S = 0;
}
function L() {
    this._call = this._time = this._next = null;
}
function z(e, t, n) {
    const r = new L;
    r.restart(e, t, n);
    return r;
}
function N() {
    S = (M = k.now()) + A;
    O = 0;
    C = 0;
    try {
        (()=>{
            T();
            ++C;
            let e;
            for(let t = y; t;){
                if ((e = S - t._time) >= 0) {
                    t._call.call(null, e);
                }
                t = t._next;
            }
            --C;
        })();
    } finally{
        C = 0;
        (()=>{
            let e;
            let t;
            for(var n = y, r = Infinity; n;){
                if (n._call) {
                    if (r > n._time) {
                        r = n._time;
                    }
                    e = n;
                    n = n._next;
                } else {
                    t = n._next;
                    n._next = null;
                    n = e ? e._next = t : y = t;
                }
            }
            m = e;
            I(r);
        })();
        S = 0;
    }
}
function D() {
    const e = k.now();
    const t = e - M;
    if (t > 1000) {
        A -= t;
        M = e;
    }
}
function I(e) {
    if (!C) {
        if (O) {
            O = clearTimeout(O);
        }
        if (e - S > 24) {
            if (e < Infinity) {
                O = setTimeout(N, e - k.now() - A);
            }
            if (E) {
                E = clearInterval(E);
            }
        } else {
            if (!E) {
                M = k.now();
                E = setInterval(D, 1000);
            }
            C = 1;
            j(N);
        }
    }
}
L.prototype = z.prototype = {
    constructor: L,
    restart: function(e, t, n) {
        if (typeof e !== "function") {
            throw new TypeError("callback is not a function");
        }
        n = (n == null ? T() : +n) + (t == null ? 0 : +t);
        if (!(this._next || m === this)) {
            if (m) {
                m._next = this;
            } else {
                y = this;
            }
            m = this;
        }
        this._call = e;
        this._time = n;
        I();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            I();
        }
    }
};
const R = (e, t, n)=>{
    const r = new L;
    t = t == null ? 0 : +t;
    r.restart(function(n) {
        r.stop();
        e(n + t);
    }, t, n);
    return r;
};
const on = s("start", "end", "cancel", "interrupt");
const tween = [];
const F = (e, name, n, index, group, i)=>{
    const e___transition = e.__transition;
    if (e___transition) {
        if (n in e___transition) {
            return;
        }
    } else {
        e.__transition = {};
    }
    ((e, t, n)=>{
        let r;
        const e___transition = e.__transition;
        function i(u) {
            let s;
            let c;
            let f;
            let d;
            if (n.state !== 1) {
                return l();
            }
            for(s in e___transition){
                if ((d = e___transition[s]).name === n.name) {
                    if (d.state === 3) {
                        return R(i);
                    }
                    if (d.state === 4) {
                        d.state = 6;
                        d.timer.stop();
                        d.on.call("interrupt", e, e.__data__, d.index, d.group);
                        delete e___transition[s];
                    } else if (+s < t) {
                        d.state = 6;
                        d.timer.stop();
                        d.on.call("cancel", e, e.__data__, d.index, d.group);
                        delete e___transition[s];
                    }
                }
            }
            R(()=>{
                if (n.state === 3) {
                    n.state = 4;
                    n.timer.restart(a, n.delay, n.time);
                    a(u);
                }
            });
            n.state = 2;
            n.on.call("start", e, e.__data__, n.index, n.group);
            if (n.state === 2) {
                n.state = 3;
                r = new Array(f = n.tween.length);
                s = 0;
                for(c = -1; s < f; ++s){
                    if (d = n.tween[s].value.call(e, e.__data__, n.index, n.group)) {
                        r[++c] = d;
                    }
                }
                r.length = c + 1;
            }
        }
        function a(t) {
            const o = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(l), n.state = 5, 1);
            for(let i = -1, a = r.length; ++i < a;){
                r[i].call(e, o);
            }
            if (n.state === 5) {
                n.on.call("end", e, e.__data__, n.index, n.group);
                l();
            }
        }
        function l() {
            n.state = 6;
            n.timer.stop();
            delete e___transition[t];
            for(const r in e___transition){
                return;
            }
            delete e.__transition;
        }
        e___transition[t] = n;
        n.timer = z(function(e) {
            n.state = 1;
            n.timer.restart(i, n.delay, n.time);
            if (n.delay <= e) {
                i(e - n.delay);
            }
        }, 0, n.time);
    })(e, n, {
        name,
        index,
        group,
        on,
        tween,
        time: i.time,
        delay: i.delay,
        duration: i.duration,
        ease: i.ease,
        timer: null,
        state: 0
    });
};
function V(e, t) {
    const n = U(e, t);
    if (n.state > 0) {
        throw new Error("too late; already scheduled");
    }
    return n;
}
function $(e, t) {
    const n = U(e, t);
    if (n.state > 3) {
        throw new Error("too late; already running");
    }
    return n;
}
function U({ __transition }, t) {
    if (!__transition || !(__transition = __transition[t])) {
        throw new Error("transition not found");
    }
    return __transition;
}
let Z;
let W;
let K;
let G;
const q = (e, t)=>{
    let n;
    let r;
    let o;
    const e___transition = e.__transition;
    let a = true;
    if (e___transition) {
        t = t == null ? null : `${t}`;
        for(o in e___transition){
            if ((n = e___transition[o]).name === t) {
                r = n.state > 2 && n.state < 5;
                n.state = 6;
                n.timer.stop();
                n.on.call(r ? "interrupt" : "cancel", e, e.__data__, n.index, n.group);
                delete e___transition[o];
            } else {
                a = false;
            }
        }
        if (a) {
            delete e.__transition;
        }
    }
};
const X = 180 / Math.PI;
const J = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
const Q = (e, t, n, r, translateX, translateY)=>{
    let scaleX;
    let scaleY;
    let u;
    if (scaleX = Math.sqrt(e * e + t * t)) {
        e /= scaleX;
        t /= scaleX;
    }
    if (u = e * n + t * r) {
        n -= e * u;
        r -= t * u;
    }
    if (scaleY = Math.sqrt(n * n + r * r)) {
        n /= scaleY;
        r /= scaleY;
        u /= scaleY;
    }
    if (e * r < t * n) {
        e = -e;
        t = -t;
        u = -u;
        scaleX = -scaleX;
    }
    return {
        translateX,
        translateY,
        rotate: Math.atan2(t, e) * X,
        skewX: Math.atan(u) * X,
        scaleX,
        scaleY
    };
};
function ee(e, t, n, r) {
    function o(e) {
        if (e.length) {
            return `${e.pop()} `;
        }
        return "";
    }
    return function(i, a) {
        const l = [];
        const u = [];
        i = e(i);
        a = e(a);
        ((e, r, o, i, a, l)=>{
            if (e !== o || r !== i) {
                const u = a.push("translate(", null, t, null, n);
                l.push({
                    i: u - 4,
                    x: a_4(e, o)
                }, {
                    i: u - 2,
                    x: a_4(r, i)
                });
            } else {
                if (o || i) {
                    a.push(`translate(${o}${t}${i}${n}`);
                }
            }
        })(i.translateX, i.translateY, a.translateX, a.translateY, l, u);
        ((e, t, n, i)=>{
            if (e !== t) {
                if (e - t > 180) {
                    t += 360;
                } else if (t - e > 180) {
                    e += 360;
                }
                i.push({
                    i: n.push(`${o(n)}rotate(`, null, r) - 2,
                    x: a_4(e, t)
                });
            } else if (t) {
                n.push(`${o(n)}rotate(${t}${r}`);
            }
        })(i.rotate, a.rotate, l, u);
        ((e, t, n, i)=>{
            if (e !== t) {
                i.push({
                    i: n.push(`${o(n)}skewX(`, null, r) - 2,
                    x: a_4(e, t)
                });
            } else if (t) {
                n.push(`${o(n)}skewX(${t}${r}`);
            }
        })(i.skewX, a.skewX, l, u);
        ((e, t, n, r, i, a)=>{
            if (e !== n || t !== r) {
                const l = i.push(`${o(i)}scale(`, null, ",", null, ")");
                a.push({
                    i: l - 4,
                    x: a_4(e, n)
                }, {
                    i: l - 2,
                    x: a_4(t, r)
                });
            } else {
                if (!(n === 1 && r === 1)) {
                    i.push(`${o(i)}scale(${n},${r})`);
                }
            }
        })(i.scaleX, i.scaleY, a.scaleX, a.scaleY, l, u);
        a = null;
        i = null;
        return function(e) {
            let t;
            for(let n = -1, r = u.length; ++n < r;){
                l[(t = u[n]).i] = t.x(e);
            }
            return l.join("");
        };
    };
}
const te = ee((e)=>{
    if (e === "none") {
        return J;
    }
    if (!Z) {
        Z = document.createElement("DIV");
        W = document.documentElement;
        K = document.defaultView;
    }
    Z.style.transform = e;
    e = K.getComputedStyle(W.appendChild(Z), null).getPropertyValue("transform");
    W.removeChild(Z);
    e = e.slice(7, -1).split(",");
    return Q(+e[0], +e[1], +e[2], +e[3], +e[4], +e[5]);
}, "px, ", "px)", "deg)");
const ne = ee((e)=>{
    if (e == null) {
        return J;
    }
    if (!G) {
        G = document.createElementNS("http://www.w3.org/2000/svg", "g");
    }
    G.setAttribute("transform", e);
    if (e = G.transform.baseVal.consolidate()) {
        return e = e.matrix, Q(e.a, e.b, e.c, e.d, e.e, e.f);
    }
    return J;
}, ", ", ")", ")");
function oe(e, t) {
    let n;
    let r;
    return function() {
        const o = $(this, e);
        const o_tween = o.tween;
        if (o_tween !== n) {
            for(let a = 0, l = (r = n = o_tween).length; a < l; ++a){
                if (r[a].name === t) {
                    (r = r.slice()).splice(a, 1);
                    break;
                }
            }
        }
        o.tween = r;
    };
}
function ie(e, t, n) {
    let r;
    let o;
    if (typeof n !== "function") {
        throw new Error;
    }
    return function() {
        const i = $(this, e);
        const i_tween = i.tween;
        if (i_tween !== r) {
            o = (r = i_tween).slice();
            const l = {
                name: t,
                value: n
            };
            for(var u = 0, s = o.length; u < s; ++u){
                if (o[u].name === t) {
                    o[u] = l;
                    break;
                }
            }
            if (u === s) {
                o.push(l);
            }
        }
        i.tween = o;
    };
}
function ae(e, t, n) {
    const e__id = e._id;
    e.each(function() {
        const e = $(this, e__id);
        (e.value || (e.value = {}))[t] = n.apply(this, arguments);
    });
    return function(e) {
        return U(e, e__id).value[t];
    };
}
const ce = function(e, t) {
    let n;
    return (typeof t === "number" ? a_4 : t instanceof a_6 ? a_7 : (n = a_6(t)) ? (t = n, a_7) : a_8)(e, t);
};
function fe(e) {
    return function() {
        this.removeAttribute(e);
    };
}
function de(e) {
    return function() {
        this.removeAttributeNS(e.space, e.local);
    };
}
function pe(e, t, n) {
    let r;
    let o;
    const i = `${n}`;
    return function() {
        const a = this.getAttribute(e);
        if (a === i) {
            return null;
        }
        if (a === r) {
            return o;
        }
        return o = t(r = a, n);
    };
}
function he(e, t, n) {
    let r;
    let o;
    const i = `${n}`;
    return function() {
        const a = this.getAttributeNS(e.space, e.local);
        if (a === i) {
            return null;
        }
        if (a === r) {
            return o;
        }
        return o = t(r = a, n);
    };
}
function ve(e, t, n) {
    let r;
    let o;
    let i;
    return function() {
        let a;
        let l;
        const u = n(this);
        if (u != null) {
            if ((a = this.getAttribute(e)) === (l = `${u}`)) {
                return null;
            }
            if (a === r && l === o) {
                return i;
            }
            o = l;
            return i = t(r = a, u);
        }
        this.removeAttribute(e);
    };
}
function ge(e, t, n) {
    let r;
    let o;
    let i;
    return function() {
        let a;
        let l;
        const u = n(this);
        if (u != null) {
            if ((a = this.getAttributeNS(e.space, e.local)) === (l = `${u}`)) {
                return null;
            }
            if (a === r && l === o) {
                return i;
            }
            o = l;
            return i = t(r = a, u);
        }
        this.removeAttributeNS(e.space, e.local);
    };
}
function ye(e, t) {
    return function(n) {
        this.setAttribute(e, t.call(this, n));
    };
}
function me(e, t) {
    return function(n) {
        this.setAttributeNS(e.space, e.local, t.call(this, n));
    };
}
function be(e, t) {
    let n;
    let r;
    function o() {
        const o = t.apply(this, arguments);
        if (o !== r) {
            n = (r = o) && me(e, o);
        }
        return n;
    }
    o._value = t;
    return o;
}
function xe(e, t) {
    let n;
    let r;
    function o() {
        const o = t.apply(this, arguments);
        if (o !== r) {
            n = (r = o) && ye(e, o);
        }
        return n;
    }
    o._value = t;
    return o;
}
function we(e, t) {
    return function() {
        V(this, e).delay = +t.apply(this, arguments);
    };
}
function _e(e, t) {
    t = +t;
    return function() {
        V(this, e).delay = t;
    };
}
function Ce(e, t) {
    return function() {
        $(this, e).duration = +t.apply(this, arguments);
    };
}
function Oe(e, t) {
    t = +t;
    return function() {
        $(this, e).duration = t;
    };
}
function Ee(e, t) {
    if (typeof t !== "function") {
        throw new Error;
    }
    return function() {
        $(this, e).ease = t;
    };
}
function Se(e, t, n) {
    let r;
    let o;
    const i = ((e)=>`${e}`.trim().split(/^|\s+/).every((e)=>{
            const t = e.indexOf(".");
            if (t >= 0) {
                e = e.slice(0, t);
            }
            return !e || e === "start";
        }))(t) ? V : $;
    return function() {
        const a = i(this, e);
        const l = a.on;
        if (l !== r) {
            (o = (r = l).copy()).on(t, n);
        }
        a.on = o;
    };
}
const constructor = b_1.prototype.constructor;
function Pe(e) {
    return function() {
        this.style.removeProperty(e);
    };
}
function Le(e, t, n) {
    return function(r) {
        this.style.setProperty(e, t.call(this, r), n);
    };
}
function ze(e, t, n) {
    let r;
    let o;
    function i() {
        const i = t.apply(this, arguments);
        if (i !== o) {
            r = (o = i) && Le(e, i, n);
        }
        return r;
    }
    i._value = t;
    return i;
}
function Ne(e) {
    return function(t) {
        this.textContent = e.call(this, t);
    };
}
function De(e) {
    let t;
    let n;
    function r() {
        const r = e.apply(this, arguments);
        if (r !== n) {
            t = (n = r) && Ne(r);
        }
        return t;
    }
    r._value = e;
    return r;
}
let Ie = 0;
function Re(e, t, n, r) {
    this._groups = e;
    this._parents = t;
    this._name = n;
    this._id = r;
}
function He() {
    return ++Ie;
}
const b_1_prototype = b_1.prototype;
Re.prototype = (function(e) {
    return b_1().transition(e);
}).prototype = {
    constructor: Re,
    select: function(e) {
        const _name = this._name;
        const _id = this._id;
        if (typeof e !== "function") {
            e = a_10(e);
        }
        const _groups = this._groups;
        for(var o = _groups.length, i = new Array(o), a = 0; a < o; ++a){
            let l;
            let u;
            const s = _groups[a];
            for(let c = s.length, f = i[a] = new Array(c), d = 0; d < c; ++d){
                if ((l = s[d]) && (u = e.call(l, l.__data__, d, s))) {
                    if ("__data__" in l) {
                        u.__data__ = l.__data__;
                    }
                    f[d] = u;
                    F(f[d], _name, _id, d, f, U(l, _id));
                }
            }
        }
        return new Re(i, this._parents, _name, _id);
    },
    selectAll: function(e) {
        const _name = this._name;
        const _id = this._id;
        if (typeof e !== "function") {
            e = a_11(e);
        }
        const _groups = this._groups;
        for(var o = _groups.length, i = [], a = [], l = 0; l < o; ++l){
            let u;
            const s = _groups[l];
            for(let c = s.length, f = 0; f < c; ++f){
                if (u = s[f]) {
                    let d;
                    const p = e.call(u, u.__data__, f, s);
                    const h = U(u, _id);
                    for(let v = 0, g = p.length; v < g; ++v){
                        if (d = p[v]) {
                            F(d, _name, _id, v, p, h);
                        }
                    }
                    i.push(p);
                    a.push(u);
                }
            }
        }
        return new Re(i, a, _name, _id);
    },
    filter: function(e) {
        if (typeof e !== "function") {
            e = a_9(e);
        }
        const _groups = this._groups;
        for(var n = _groups.length, r = new Array(n), o = 0; o < n; ++o){
            let i;
            const a = _groups[o];
            for(let l = a.length, u = r[o] = [], s = 0; s < l; ++s){
                if ((i = a[s]) && e.call(i, i.__data__, s, a)) {
                    u.push(i);
                }
            }
        }
        return new Re(r, this._parents, this._name, this._id);
    },
    merge: function(e) {
        if (e._id !== this._id) {
            throw new Error;
        }
        const _groups = this._groups;
        const e__groups = e._groups;
        const t_length = _groups.length;
        const n_length = e__groups.length;
        for(var i = Math.min(t_length, n_length), a = new Array(t_length), l = 0; l < i; ++l){
            let u;
            const s = _groups[l];
            const c = e__groups[l];
            for(let f = s.length, d = a[l] = new Array(f), p = 0; p < f; ++p){
                if (u = s[p] || c[p]) {
                    d[p] = u;
                }
            }
        }
        for(; l < t_length; ++l){
            a[l] = _groups[l];
        }
        return new Re(a, this._parents, this._name, this._id);
    },
    selection: function() {
        return new constructor(this._groups, this._parents);
    },
    transition: function() {
        const _name = this._name;
        const _id = this._id;
        const n = He();
        const _groups = this._groups;
        for(let o = _groups.length, i = 0; i < o; ++i){
            let a;
            const l = _groups[i];
            for(let u = l.length, s = 0; s < u; ++s){
                if (a = l[s]) {
                    const c = U(a, _id);
                    F(a, _name, n, s, l, {
                        time: c.time + c.delay + c.duration,
                        delay: 0,
                        duration: c.duration,
                        ease: c.ease
                    });
                }
            }
        }
        return new Re(_groups, this._parents, _name, n);
    },
    call: b_1_prototype.call,
    nodes: b_1_prototype.nodes,
    node: b_1_prototype.node,
    size: b_1_prototype.size,
    empty: b_1_prototype.empty,
    each: b_1_prototype.each,
    on: function(e, t) {
        const _id = this._id;
        if (arguments.length < 2) {
            return U(this.node(), _id).on.on(e);
        }
        return this.each(Se(_id, e, t));
    },
    attr: function(e, t) {
        const n = a_5(e);
        const r = n === "transform" ? ne : ce;
        return this.attrTween(e, typeof t === "function" ? (n.local ? ge : ve)(n, r, ae(this, `attr.${e}`, t)) : t == null ? (n.local ? de : fe)(n) : (n.local ? he : pe)(n, r, t));
    },
    attrTween: function(e, t) {
        let n = `attr.${e}`;
        if (arguments.length < 2) {
            return (n = this.tween(n)) && n._value;
        }
        if (t == null) {
            return this.tween(n, null);
        }
        if (typeof t !== "function") {
            throw new Error;
        }
        const r = a_5(e);
        return this.tween(n, (r.local ? be : xe)(r, t));
    },
    style: function(e, t, n) {
        const r = (e += "") == "transform" ? te : ce;
        if (t == null) {
            return this.styleTween(e, ((e, t)=>{
                let n;
                let r;
                let o;
                return function() {
                    const i = b_2(this, e);
                    this.style.removeProperty(e);
                    const a = b_2(this, e);
                    if (i === a) {
                        return null;
                    }
                    if (i === n && a === r) {
                        return o;
                    }
                    return o = t(n = i, r = a);
                };
            })(e, r)).on(`end.style.${e}`, Pe(e));
        }
        if (typeof t === "function") {
            return this.styleTween(e, ((e, t, n)=>{
                let r;
                let o;
                let i;
                return function() {
                    const a = b_2(this, e);
                    let l = n(this);
                    let u = `${l}`;
                    if (l == null) {
                        this.style.removeProperty(e);
                        u = l = b_2(this, e);
                    }
                    if (a === u) {
                        return null;
                    }
                    if (a === r && u === o) {
                        return i;
                    }
                    o = u;
                    return i = t(r = a, l);
                };
            })(e, r, ae(this, `style.${e}`, t))).each(((e, t)=>{
                let n;
                let r;
                let o;
                let i;
                const a = `style.${t}`;
                const l = `end.${a}`;
                return function() {
                    const u = $(this, e);
                    const s = u.on;
                    const c = u.value[a] == null ? i || (i = Pe(t)) : undefined;
                    if (!(s === n && o === c)) {
                        (r = (n = s).copy()).on(l, o = c);
                    }
                    u.on = r;
                };
            })(this._id, e));
        }
        return this.styleTween(e, ((e, t, n)=>{
            let r;
            let o;
            const i = `${n}`;
            return function() {
                const a = b_2(this, e);
                if (a === i) {
                    return null;
                }
                if (a === r) {
                    return o;
                }
                return o = t(r = a, n);
            };
        })(e, r, t), n).on(`end.style.${e}`, null);
    },
    styleTween: function(e, t, n) {
        let r = `style.${e += ""}`;
        if (arguments.length < 2) {
            return (r = this.tween(r)) && r._value;
        }
        if (t == null) {
            return this.tween(r, null);
        }
        if (typeof t !== "function") {
            throw new Error;
        }
        return this.tween(r, ze(e, t, n ?? ""));
    },
    text: function(e) {
        return this.tween("text", typeof e === "function" ? ((e)=>function() {
                const t = e(this);
                this.textContent = t ?? "";
            })(ae(this, "text", e)) : ((e)=>function() {
                this.textContent = e;
            })(e == null ? "" : `${e}`));
    },
    textTween: function(e) {
        let t = "text";
        if (arguments.length < 1) {
            return (t = this.tween(t)) && t._value;
        }
        if (e == null) {
            return this.tween(t, null);
        }
        if (typeof e !== "function") {
            throw new Error;
        }
        return this.tween(t, De(e));
    },
    remove: function() {
        return this.on("end.remove", (e = this._id, function() {
            const parentNode = this.parentNode;
            for(const n in this.__transition){
                if (+n !== e) {
                    return;
                }
            }
            if (parentNode) {
                parentNode.removeChild(this);
            }
        }));
        var e;
    },
    tween: function(e, t) {
        const _id = this._id;
        e += "";
        if (arguments.length < 2) {
            let r;
            const o = U(this.node(), _id).tween;
            for(let i = 0, a = o.length; i < a; ++i){
                if ((r = o[i]).name === e) {
                    return r.value;
                }
            }
            return null;
        }
        return this.each((t == null ? oe : ie)(_id, e, t));
    },
    delay: function(e) {
        const _id = this._id;
        if (arguments.length) {
            return this.each((typeof e === "function" ? we : _e)(_id, e));
        }
        return U(this.node(), _id).delay;
    },
    duration: function(e) {
        const _id = this._id;
        if (arguments.length) {
            return this.each((typeof e === "function" ? Ce : Oe)(_id, e));
        }
        return U(this.node(), _id).duration;
    },
    ease: function(e) {
        const _id = this._id;
        if (arguments.length) {
            return this.each(Ee(_id, e));
        }
        return U(this.node(), _id).ease;
    },
    end: function() {
        let e;
        let t;
        const _this = this;
        const _id = _this._id;
        let o = _this.size();
        return new Promise((resolve, value)=>{
            const l = {
                value
            };
            const u = {
                value: function() {
                    if (--o == 0) {
                        resolve();
                    }
                }
            };
            _this.each(function() {
                const n = $(this, _id);
                const o = n.on;
                if (o !== e) {
                    (t = (e = o).copy())._.cancel.push(l);
                    t._.interrupt.push(l);
                    t._.end.push(u);
                }
                n.on = t;
            });
        });
    }
};
const Fe = {
    time: null,
    delay: 0,
    duration: 250,
    ease: function(e) {
        return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
    }
};
function Ve(e, t) {
    for(var n; !(n = e.__transition) || !(n = n[t]);){
        if (!(e = e.parentNode)) {
            Fe.time = T();
            return Fe;
        }
    }
    return n;
}
b_1.prototype.interrupt = function(e) {
    return this.each(function() {
        q(this, e);
    });
};
b_1.prototype.transition = function(e) {
    let t;
    let n;
    if (e instanceof Re) {
        t = e._id;
        e = e._name;
    } else {
        t = He();
        n = Fe;
        n.time = T();
        e = e == null ? null : `${e}`;
    }
    const _groups = this._groups;
    for(let o = _groups.length, i = 0; i < o; ++i){
        let a;
        const l = _groups[i];
        for(let u = l.length, s = 0; s < u; ++s){
            if (a = l[s]) {
                F(a, e, t, s, l, n || Ve(a, t));
            }
        }
    }
    return new Re(_groups, this._parents, e, t);
};
const $e = (e)=>function() {
        return e;
    };
function Ue(e, t, n) {
    this.target = e;
    this.type = t;
    this.transform = n;
}
function Ze(e, t, n) {
    this.k = e;
    this.x = t;
    this.y = n;
}
Ze.prototype = {
    constructor: Ze,
    scale: function(e) {
        if (e === 1) {
            return this;
        }
        return new Ze(this.k * e, this.x, this.y);
    },
    translate: function(e, t) {
        if (e === 0 & t === 0) {
            return this;
        }
        return new Ze(this.k, this.x + this.k * e, this.y + this.k * t);
    },
    apply: function(e) {
        return [
            e[0] * this.k + this.x,
            e[1] * this.k + this.y
        ];
    },
    applyX: function(e) {
        return e * this.k + this.x;
    },
    applyY: function(e) {
        return e * this.k + this.y;
    },
    invert: function(e) {
        return [
            (e[0] - this.x) / this.k,
            (e[1] - this.y) / this.k
        ];
    },
    invertX: function(e) {
        return (e - this.x) / this.k;
    },
    invertY: function(e) {
        return (e - this.y) / this.k;
    },
    rescaleX: function(e) {
        return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
    },
    rescaleY: function(e) {
        return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
    },
    toString: function() {
        return `translate(${this.x},${this.y}) scale(${this.k})`;
    }
};
export const zoomIdentity = new Ze(1, 0, 0);
export function zoomTransform(e) {
    while(!e.__zoom){
        if (!(e = e.parentNode)) {
            return zoomIdentity;
        }
    }
    return e.__zoom;
}
function Ge() {
    module1141.c.stopImmediatePropagation();
}
zoomTransform.prototype = Ze.prototype;
const qe = ()=>{
    module1141.c.preventDefault();
    module1141.c.stopImmediatePropagation();
};
function Ye() {
    return !module1141.c.ctrlKey && !module1141.c.button;
}
function Xe() {
    let e = this;
    if (e instanceof SVGElement) {
        if ((e = e.ownerSVGElement || e).hasAttribute("viewBox")) {
            return [
                [
                    (e = e.viewBox.baseVal).x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function Je() {
    return this.__zoom || zoomIdentity;
}
function Qe() {
    return -module1141.c.deltaY * (module1141.c.deltaMode === 1 ? 0.05 : module1141.c.deltaMode ? 1 : 0.002);
}
function et() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function tt(e, t, n) {
    const r = e.invertX(t[0][0]) - n[0][0];
    const o = e.invertX(t[1][0]) - n[1][0];
    const i = e.invertY(t[0][1]) - n[0][1];
    const a = e.invertY(t[1][1]) - n[1][1];
    return e.translate(o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o), a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a));
}
export const zoom = function() {
    let e;
    let t;
    let n = Ye;
    let r = Xe;
    let o = tt;
    let i = Qe;
    let a = et;
    const l = [
        0,
        Infinity
    ];
    const u = [
        [
            -Infinity,
            -Infinity
        ],
        [
            Infinity,
            Infinity
        ]
    ];
    let d = 250;
    let v = b;
    const g = s("start", "zoom", "end");
    let y = 0;
    function m(e) {
        e.property("__zoom", Je).on("wheel.zoom", A).on("mousedown.zoom", k).on("dblclick.zoom", j).filter(a).on("touchstart.zoom", T).on("touchmove.zoom", P).on("touchend.zoom touchcancel.zoom", L).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function _(e, t) {
        if ((t = Math.max(l[0], Math.min(l[1], t))) === e.k) {
            return e;
        }
        return new Ze(t, e.x, e.y);
    }
    function C(e, t, n) {
        const r = t[0] - n[0] * e.k;
        const o = t[1] - n[1] * e.k;
        if (r === e.x && o === e.y) {
            return e;
        }
        return new Ze(e.k, r, o);
    }
    function O(e) {
        return [
            (+e[0][0] + +e[1][0]) / 2,
            (+e[0][1] + +e[1][1]) / 2
        ];
    }
    function E(e, t, n) {
        e.on("start.zoom", function() {
            M(this, arguments).start();
        }).on("interrupt.zoom end.zoom", function() {
            M(this, arguments).end();
        }).tween("zoom", function() {
            const _this = this;
            const o = arguments;
            const i = M(_this, o);
            const a = r.apply(_this, o);
            const l = n == null ? O(a) : typeof n === "function" ? n.apply(_this, o) : n;
            const u = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]);
            const __zoom = _this.__zoom;
            const c = typeof t === "function" ? t.apply(_this, o) : t;
            const f = v(__zoom.invert(l).concat(u / __zoom.k), c.invert(l).concat(u / c.k));
            return function(e) {
                if (e === 1) {
                    e = c;
                } else {
                    const t = f(e);
                    const n = u / t[2];
                    e = new Ze(n, l[0] - t[0] * n, l[1] - t[1] * n);
                }
                i.zoom(null, e);
            };
        });
    }
    function M(e, t, n) {
        return !n && e.__zooming || new S(e, t);
    }
    function S(e, t) {
        this.that = e;
        this.args = t;
        this.active = 0;
        this.extent = r.apply(e, t);
        this.taps = 0;
    }
    function A() {
        if (n.apply(this, arguments)) {
            var e = M(this, arguments);
            const t = this.__zoom;
            const r = Math.max(l[0], Math.min(l[1], t.k * 2 ** i.apply(this, arguments)));
            const a = a_2(this);
            if (e.wheel) {
                if (!(e.mouse[0][0] === a[0] && e.mouse[0][1] === a[1])) {
                    e.mouse[1] = t.invert(e.mouse[0] = a);
                }
                clearTimeout(e.wheel);
            } else {
                if (t.k === r) {
                    return;
                }
                e.mouse = [
                    a,
                    t.invert(a)
                ];
                q(this);
                e.start();
            }
            qe();
            e.wheel = setTimeout(s, 150);
            e.zoom("mouse", o(C(_(t, r), e.mouse[0], e.mouse[1]), e.extent, u));
        }
        function s() {
            e.wheel = null;
            e.end();
        }
    }
    function k() {
        if (!t && n.apply(this, arguments)) {
            var e = M(this, arguments, true);
            var r = a_1(module1141.c.view).on("mousemove.zoom", s, true).on("mouseup.zoom", d, true);
            const i = a_2(this);
            var a = module1141.c.clientX;
            var l = module1141.c.clientY;
            p(module1141.c.view);
            Ge();
            e.mouse = [
                i,
                this.__zoom.invert(i)
            ];
            q(this);
            e.start();
        }
        function s() {
            qe();
            if (!e.moved) {
                const t = module1141.c.clientX - a;
                const n = module1141.c.clientY - l;
                e.moved = t * t + n * n > y;
            }
            e.zoom("mouse", o(C(e.that.__zoom, e.mouse[0] = a_2(e.that), e.mouse[1]), e.extent, u));
        }
        function d() {
            r.on("mousemove.zoom mouseup.zoom", null);
            h(module1141.c.view, e.moved);
            qe();
            e.end();
        }
    }
    function j() {
        if (n.apply(this, arguments)) {
            const e = this.__zoom;
            const t = a_2(this);
            const i = e.invert(t);
            const a = e.k * (module1141.c.shiftKey ? 0.5 : 2);
            const l = o(C(_(e, a), t, i), r.apply(this, arguments), u);
            qe();
            if (d > 0) {
                a_1(this).transition().duration(d).call(E, l, t);
            } else {
                a_1(this).call(m.transform, l);
            }
        }
    }
    function T() {
        if (n.apply(this, arguments)) {
            let t;
            let r;
            let o;
            let i;
            const a = module1141.c.touches;
            const l = a.length;
            const u = M(this, arguments, module1141.c.changedTouches.length === l);
            Ge();
            for(r = 0; r < l; ++r){
                o = a[r];
                i = [
                    i = a_3(this, a, o.identifier),
                    this.__zoom.invert(i),
                    o.identifier
                ];
                if (u.touch0) {
                    if (!(u.touch1 || u.touch0[2] === i[2])) {
                        u.touch1 = i;
                        u.taps = 0;
                    }
                } else {
                    u.touch0 = i;
                    t = true;
                    u.taps = 1 + !!e;
                }
            }
            if (e) {
                e = clearTimeout(e);
            }
            if (t) {
                if (u.taps < 2) {
                    e = setTimeout(()=>{
                        e = null;
                    }, 500);
                }
                q(this);
                u.start();
            }
        }
    }
    function P() {
        if (this.__zooming) {
            let t;
            let n;
            let r;
            let i;
            const a = M(this, arguments);
            const l = module1141.c.changedTouches;
            const s = l.length;
            qe();
            if (e) {
                e = clearTimeout(e);
            }
            a.taps = 0;
            for(t = 0; t < s; ++t){
                n = l[t];
                r = a_3(this, l, n.identifier);
                if (a.touch0 && a.touch0[2] === n.identifier) {
                    a.touch0[0] = r;
                } else if (a.touch1 && a.touch1[2] === n.identifier) {
                    a.touch1[0] = r;
                }
            }
            n = a.that.__zoom;
            if (a.touch1) {
                const c = a.touch0[0];
                const d = a.touch0[1];
                const p = a.touch1[0];
                const h = a.touch1[1];
                var v = (v = p[0] - c[0]) * v + (v = p[1] - c[1]) * v;
                var g = (g = h[0] - d[0]) * g + (g = h[1] - d[1]) * g;
                n = _(n, Math.sqrt(v / g));
                r = [
                    (c[0] + p[0]) / 2,
                    (c[1] + p[1]) / 2
                ];
                i = [
                    (d[0] + h[0]) / 2,
                    (d[1] + h[1]) / 2
                ];
            } else {
                if (!a.touch0) {
                    return;
                }
                r = a.touch0[0];
                i = a.touch0[1];
            }
            a.zoom("touch", o(C(n, r, i), a.extent, u));
        }
    }
    function L() {
        if (this.__zooming) {
            let e;
            let n;
            const r = M(this, arguments);
            const o = module1141.c.changedTouches;
            const i = o.length;
            Ge();
            if (t) {
                clearTimeout(t);
            }
            t = setTimeout(()=>{
                t = null;
            }, 500);
            for(e = 0; e < i; ++e){
                n = o[e];
                if (r.touch0 && r.touch0[2] === n.identifier) {
                    delete r.touch0;
                } else if (r.touch1 && r.touch1[2] === n.identifier) {
                    delete r.touch1;
                }
            }
            if (r.touch1 && !r.touch0) {
                r.touch0 = r.touch1;
                delete r.touch1;
            }
            if (r.touch0) {
                r.touch0[1] = this.__zoom.invert(r.touch0[0]);
            } else {
                r.end();
                if (r.taps === 2) {
                    const a = a_1(this).on("dblclick.zoom");
                    if (a) {
                        a.apply(this, arguments);
                    }
                }
            }
        }
    }
    m.transform = function(e, t, n) {
        const r = e.selection ? e.selection() : e;
        r.property("__zoom", Je);
        if (e !== r) {
            E(e, t, n);
        } else {
            r.interrupt().each(function() {
                M(this, arguments).start().zoom(null, typeof t === "function" ? t.apply(this, arguments) : t).end();
            });
        }
    };
    m.scaleBy = function(e, t, n) {
        m.scaleTo(e, function() {
            const e = this.__zoom.k;
            const n = typeof t === "function" ? t.apply(this, arguments) : t;
            return e * n;
        }, n);
    };
    m.scaleTo = function(e, t, n) {
        m.transform(e, function() {
            const e = r.apply(this, arguments);
            const __zoom = this.__zoom;
            const a = n == null ? O(e) : typeof n === "function" ? n.apply(this, arguments) : n;
            const l = __zoom.invert(a);
            const s = typeof t === "function" ? t.apply(this, arguments) : t;
            return o(C(_(__zoom, s), a, l), e, u);
        }, n);
    };
    m.translateBy = function(e, t, n) {
        m.transform(e, function() {
            return o(this.__zoom.translate(typeof t === "function" ? t.apply(this, arguments) : t, typeof n === "function" ? n.apply(this, arguments) : n), r.apply(this, arguments), u);
        });
    };
    m.translateTo = function(e, t, n, i) {
        m.transform(e, function() {
            const e = r.apply(this, arguments);
            const __zoom = this.__zoom;
            const l = i == null ? O(e) : typeof i === "function" ? i.apply(this, arguments) : i;
            return o(zoomIdentity.translate(l[0], l[1]).scale(__zoom.k).translate(typeof t === "function" ? -t.apply(this, arguments) : -t, typeof n === "function" ? -n.apply(this, arguments) : -n), e, u);
        }, i);
    };
    S.prototype = {
        start: function() {
            if (++this.active == 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function(e, t) {
            if (this.mouse && e !== "mouse") {
                this.mouse[1] = t.invert(this.mouse[0]);
            }
            if (this.touch0 && e !== "touch") {
                this.touch0[1] = t.invert(this.touch0[0]);
            }
            if (this.touch1 && e !== "touch") {
                this.touch1[1] = t.invert(this.touch1[0]);
            }
            this.that.__zoom = t;
            this.emit("zoom");
            return this;
        },
        end: function() {
            if (--this.active == 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function(e) {
            module1141.a(new Ue(m, e, this.that.__zoom), g.apply, g, [
                e,
                this.that,
                this.args
            ]);
        }
    };
    m.wheelDelta = function(e) {
        if (arguments.length) {
            i = typeof e === "function" ? e : $e(+e);
            return m;
        }
        return i;
    };
    m.filter = function(e) {
        if (arguments.length) {
            n = typeof e === "function" ? e : $e(!!e);
            return m;
        }
        return n;
    };
    m.touchable = function(e) {
        if (arguments.length) {
            a = typeof e === "function" ? e : $e(!!e);
            return m;
        }
        return a;
    };
    m.extent = function(e) {
        if (arguments.length) {
            r = typeof e === "function" ? e : $e([
                [
                    +e[0][0],
                    +e[0][1]
                ],
                [
                    +e[1][0],
                    +e[1][1]
                ]
            ]);
            return m;
        }
        return r;
    };
    m.scaleExtent = function(e) {
        if (arguments.length) {
            l[0] = +e[0];
            l[1] = +e[1];
            return m;
        }
        return [
            l[0],
            l[1]
        ];
    };
    m.translateExtent = function(e) {
        if (arguments.length) {
            u[0][0] = +e[0][0];
            u[1][0] = +e[1][0];
            u[0][1] = +e[0][1];
            u[1][1] = +e[1][1];
            return m;
        }
        return [
            [
                u[0][0],
                u[0][1]
            ],
            [
                u[1][0],
                u[1][1]
            ]
        ];
    };
    m.constrain = function(e) {
        if (arguments.length) {
            o = e;
            return m;
        }
        return o;
    };
    m.duration = function(e) {
        if (arguments.length) {
            d = +e;
            return m;
        }
        return d;
    };
    m.interpolate = function(e) {
        if (arguments.length) {
            v = e;
            return m;
        }
        return v;
    };
    m.on = function() {
        const e = g.on(...arguments);
        if (e === g) {
            return m;
        }
        return e;
    };
    m.clickDistance = function(e) {
        if (arguments.length) {
            y = (e = +e) * e;
            return m;
        }
        return Math.sqrt(y);
    };
    return m;
};
