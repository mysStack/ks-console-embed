import module295 from "./module-295.js";
function o(e, t) {
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
        const i = e.apply(this, r);
        n.cache = n_cache.set(o, i) || n_cache;
        return i;
    };
    n.cache = new (o.Cache || module295);
    return n;
}
o.Cache = module295;
export default o;
