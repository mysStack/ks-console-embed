import { a as a_1 } from "./module-1262.js";
import { a as a_2 } from "./module-1264.js";
import { a as a_3 } from "./module-1347.js";
import { a as a_4 } from "./module-1189.js";
import module976 from "./module-976.js";
import module1650 from "./module-1650.js";
import { a as a_5 } from "./module-897.js";
import { a as a_6 } from "./module-1348.js";
import { a as a_7 } from "./module-1190.js";
import { a as a_8 } from "./module-1664.js";
import { a as a_9 } from "./module-966.js";
import { a as a_10 } from "./module-808.js";
import { a as a_11 } from "./module-992.js";
import { a as a_12 } from "./module-840.js";
const l = (e, t, n, r, l, u)=>{
    const s = 1 & n;
    const e_length = e.length;
    const t_length = t.length;
    if (e_length != t_length && !(s && t_length > e_length)) {
        return false;
    }
    const d = u.get(e);
    const p = u.get(t);
    if (d && p) {
        return d == t && p == e;
    }
    let h = -1;
    let v = true;
    const g = 2 & n ? new a_2 : undefined;
    u.set(e, t);
    u.set(t, e);
    while(++h < e_length){
        var y = e[h];
        const m = t[h];
        if (r) var b = s ? r(m, y, h, t, e, u) : r(y, m, h, e, t, u);
        if (b !== undefined) {
            if (b) {
                continue;
            }
            v = false;
            break;
        }
        if (g) {
            if (!a_3(t, function(e, t) {
                if (!a_4(g, t) && (y === e || l(y, e, n, r, u))) {
                    return g.push(t);
                }
            })) {
                v = false;
                break;
            }
        } else if (y !== m && !l(y, m, n, r, u)) {
            v = false;
            break;
        }
    }
    u.delete(e);
    u.delete(t);
    return v;
};
const p = module976.a ? module976.a.prototype : undefined;
const h = p ? p.valueOf : undefined;
const v = (e, t, n, r, o, i, a)=>{
    switch(n){
        case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
                return false;
            }
            e = e.buffer;
            t = t.buffer;
        case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !i(new module1650.a(e), new module1650.a(t)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
            return a_5(+e, +t);
        case "[object Error]":
            return e.name == t.name && e.message == t.message;
        case "[object RegExp]":
        case "[object String]":
            return e == `${t}`;
        case "[object Map]":
            var u = a_6;
        case "[object Set]":
            const p = 1 & r;
            if (!u) {
                u = a_7;
            }
            if (e.size != t.size && !p) {
                return false;
            }
            const v = a.get(e);
            if (v) {
                return v == t;
            }
            r |= 2;
            a.set(e, t);
            const g = l(u(e), u(t), r, o, i, a);
            a.delete(e);
            return g;
        case "[object Symbol]":
            if (h) {
                return h.call(e) == h.call(t);
            }
    }
    return false;
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const m = (e, t, n, r, o, i)=>{
    const a = 1 & n;
    const l = a_8(e);
    const l_length = l.length;
    if (l_length != a_8(t).length && !a) {
        return false;
    }
    for(var s = l_length; s--;){
        var c = l[s];
        if (!(a ? c in t : hasOwnProperty.call(t, c))) {
            return false;
        }
    }
    const f = i.get(e);
    const d = i.get(t);
    if (f && d) {
        return f == t && d == e;
    }
    let p = true;
    i.set(e, t);
    i.set(t, e);
    let h = a;
    while(++s < l_length){
        const v = e[c = l[s]];
        const m = t[c];
        if (r) var b = a ? r(m, v, c, t, e, i) : r(v, m, c, e, t, i);
        if (!(b === undefined ? v === m || o(v, m, n, r, i) : b)) {
            p = false;
            break;
        }
        if (!h) {
            h = c == "constructor";
        }
    }
    if (p && !h) {
        const x = e.constructor;
        const w = t.constructor;
        if (!(x == w || !("constructor" in e) || !("constructor" in t) || typeof x === "function" && x instanceof x && typeof w === "function" && w instanceof w)) {
            p = false;
        }
    }
    i.delete(e);
    i.delete(t);
    return p;
};
const w = require(958);
const C = "[object Object]";
const hasOwnProperty_1 = Object.prototype.hasOwnProperty;
const E = (e, t, n, o, i, a)=>{
    let u = a_10(e);
    const s = a_10(t);
    let c = u ? "[object Array]" : a_9(e);
    let f = s ? "[object Array]" : a_9(t);
    let d = (c = c == "[object Arguments]" ? C : c) == C;
    const p = (f = f == "[object Arguments]" ? C : f) == C;
    const h = c == f;
    if (h && w.a(e)) {
        if (!w.a(t)) {
            return false;
        }
        u = true;
        d = false;
    }
    if (h && !d) {
        if (!a) {
            a = new a_1;
        }
        if (u || a_11(e)) {
            return l(e, t, n, o, i, a);
        }
        return v(e, t, c, n, o, i, a);
    }
    if (!(1 & n)) {
        const g = d && hasOwnProperty_1.call(e, "__wrapped__");
        const y = p && hasOwnProperty_1.call(t, "__wrapped__");
        if (g || y) {
            const E = g ? e.value() : e;
            const M = y ? t.value() : t;
            if (!a) {
                a = new a_1;
            }
            return i(E, M, n, o, a);
        }
    }
    return !!h && (a || (a = new a_1), m(e, t, n, o, i, a));
};
export const a = function e(t, n, r, o, i) {
    return t === n || (t == null || n == null || !a_12(t) && !a_12(n) ? t != t && n != n : E(t, n, r, o, e, i));
};
