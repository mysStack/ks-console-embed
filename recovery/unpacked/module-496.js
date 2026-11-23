import module275 from "./module-275.js";
import module342 from "./module-342.js";
import module363 from "./module-363.js";
import module121 from "./module-121.js";
import module171 from "./module-171.js";
import module276 from "./module-276.js";
export default function(e, t, n) {
    const c = n ? module363 : module342;
    const length = e[0].length;
    const e_length = e.length;
    for(var p = e_length, h = Array(e_length), v = Infinity, m = []; p--;){
        var g = e[p];
        if (p && t) {
            g = module121(g, module171(t));
        }
        v = Math.min(g.length, v);
        h[p] = !n && (t || length >= 120 && g.length >= 120) ? new module275(p && g) : undefined;
    }
    g = e[0];
    let y = -1;
    const b = h[0];
    e: while(++y < length && m.length < v){
        let C = g[y];
        const w = t ? t(C) : C;
        C = n || C !== 0 ? C : 0;
        if (!(b ? module276(b, w) : c(m, w, n))) {
            for(p = e_length; --p;){
                const _ = h[p];
                if (!(_ ? module276(_, w) : c(e[p], w, n))) {
                    continue e;
                }
            }
            if (b) {
                b.push(w);
            }
            m.push(C);
        }
    }
    return m;
};
