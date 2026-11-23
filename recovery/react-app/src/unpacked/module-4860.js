import module337 from "unpacked/module-337.js";
import module211 from "unpacked/module-211.js";
export default function(e, t) {
    const e_length = e.length;
    for(let a = Math.min(t.length, e_length), l = module337(e); a--;){
        const u = t[a];
        e[a] = module211(u, e_length) ? l[u] : undefined;
    }
    return e;
};
