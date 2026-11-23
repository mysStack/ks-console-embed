import { a as a_1 } from "unpacked/module-1468.js";
export function a(e, t) {
    if (typeof e !== "function" || t != null && typeof t !== "function") {
        throw new TypeError("Expected a function");
    }
    const n = function() {
        const r = arguments;
        const o = t ? t.apply(this, r) : r[0];
        const n_cache = n.cache;
        if (n_cache.has(o)) {
            return n_cache.get(o);
        }
        const a = e.apply(this, r);
        n.cache = n_cache.set(o, a) || n_cache;
        return a;
    };
    n.cache = new (a.Cache || a_1);
    return n;
}
a.Cache = a_1;
