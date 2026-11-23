import module358 from "./module-358.js";
import module329 from "./module-329.js";
import module255 from "./module-255.js";
export default function(e, t, n) {
    t = (n ? module329(e, t, n) : t === undefined) ? 1 : Math.max(module255(t), 0);
    const u = e == null ? 0 : e.length;
    if (!u || t < 1) {
        return [];
    }
    for(var s = 0, c = 0, f = Array(Math.ceil(u / t)); s < u;){
        f[c++] = module358(e, s, s += t);
    }
    return f;
};
