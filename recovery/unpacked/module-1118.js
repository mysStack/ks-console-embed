import { a as a_1 } from "./module-841.js";
import { a as a_2 } from "./module-1187.js";
import { a as a_3 } from "./module-939.js";
export const a = function(e, t, n) {
    let u;
    let s;
    let c;
    let f;
    let d;
    let p;
    let h = 0;
    let v = false;
    let g = false;
    let y = true;
    if (typeof e !== "function") {
        throw new TypeError("Expected a function");
    }
    function m(t) {
        const n = u;
        const r = s;
        s = undefined;
        u = undefined;
        h = t;
        return f = e.apply(r, n);
    }
    function b(e) {
        h = e;
        d = setTimeout(w, t);
        if (v) {
            return m(e);
        }
        return f;
    }
    function x(e) {
        const n = e - p;
        return p === undefined || n >= t || n < 0 || g && e - h >= c;
    }
    function w() {
        const e = a_2();
        if (x(e)) {
            return _(e);
        }
        d = setTimeout(w, ((e)=>{
            const n = t - (e - p);
            if (g) {
                return Math.min(n, c - (e - h));
            }
            return n;
        })(e));
    }
    function _(e) {
        d = undefined;
        if (y && u) {
            return m(e);
        }
        s = undefined;
        u = undefined;
        return f;
    }
    function C() {
        const e = a_2();
        const n = x(e);
        u = arguments;
        s = this;
        p = e;
        if (n) {
            if (d === undefined) {
                return b(p);
            }
            if (g) {
                clearTimeout(d);
                d = setTimeout(w, t);
                return m(p);
            }
        }
        if (d === undefined) {
            d = setTimeout(w, t);
        }
        return f;
    }
    t = a_3(t) || 0;
    if (a_1(n)) {
        v = !!n.leading;
        c = (g = "maxWait" in n) ? Math.max(a_3(n.maxWait) || 0, t) : c;
        y = "trailing" in n ? !!n.trailing : y;
    }
    C.cancel = function() {
        if (d !== undefined) {
            clearTimeout(d);
        }
        h = 0;
        d = undefined;
        s = undefined;
        p = undefined;
        u = undefined;
    };
    C.flush = function() {
        if (d === undefined) {
            return f;
        }
        return _(a_2());
    };
    return C;
};
