import { b } from "unpacked/module-5792.js";
import { a as a_1 } from "unpacked/module-1509.js";
function o(e, t, n, r, o) {
    const i = e * e;
    const a = i * e;
    return ((1 - 3 * e + 3 * i - a) * t + (4 - 6 * i + 3 * a) * n + (1 + 3 * e + 3 * i - 3 * a) * r + a * o) / 6;
}
function _a(e, t) {
    const n = t - e;
    if (n) {
        return ((e, t)=>function(n) {
                return e + n * t;
            })(e, n);
    }
    return a_1(isNaN(e) ? t : e);
}
function l(e) {
    return function(t) {
        let n;
        let o;
        const t_length = t.length;
        let a = new Array(t_length);
        let l = new Array(t_length);
        let u = new Array(t_length);
        for(n = 0; n < t_length; ++n){
            o = b(t[n]);
            a[n] = o.r || 0;
            l[n] = o.g || 0;
            u[n] = o.b || 0;
        }
        a = e(a);
        l = e(l);
        u = e(u);
        o.opacity = 1;
        return function(e) {
            o.r = a(e);
            o.g = l(e);
            o.b = u(e);
            return `${o}`;
        };
    };
}
export const a = function e(t) {
    const n = ((e)=>{
        if ((e = +e) == 1) {
            return _a;
        }
        return function(t, n) {
            if (n - t) {
                return ((e, t, n)=>{
                    e = e ** n;
                    t = t ** n - e;
                    n = 1 / n;
                    return function(r) {
                        return (e + r * t) ** n;
                    };
                })(t, n, e);
            }
            return a_1(isNaN(t) ? n : t);
        };
    })(t);
    function o(e, t) {
        const o = n((e = b(e)).r, (t = b(t)).r);
        const i = n(e.g, t.g);
        const l = n(e.b, t.b);
        const u = _a(e.opacity, t.opacity);
        return function(t) {
            e.r = o(t);
            e.g = i(t);
            e.b = l(t);
            e.opacity = u(t);
            return `${e}`;
        };
    }
    o.gamma = e;
    return o;
}(1);
l((e)=>{
    const t = e.length - 1;
    return function(n) {
        const r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t);
        const i = e[r];
        const a = e[r + 1];
        const l = r > 0 ? e[r - 1] : 2 * i - a;
        const u = r < t - 1 ? e[r + 2] : 2 * a - i;
        return o((n - r / t) * t, l, i, a, u);
    };
});
l((e)=>{
    const e_length = e.length;
    return function(n) {
        const r = Math.floor(((n %= 1) < 0 ? ++n : n) * e_length);
        const i = e[(r + e_length - 1) % e_length];
        const a = e[r % e_length];
        const l = e[(r + 1) % e_length];
        const u = e[(r + 2) % e_length];
        return o((n - r / e_length) * e_length, i, a, l, u);
    };
});
