import module275 from "./module-275.js";
import module342 from "./module-342.js";
import module363 from "./module-363.js";
import module276 from "./module-276.js";
import module764 from "./module-764.js";
import module300 from "./module-300.js";
export default function(e, t, n) {
    let u = -1;
    let c = module342;
    const e_length = e.length;
    let d = true;
    const p = [];
    let h = p;
    if (n) {
        d = false;
        c = module363;
    } else if (e_length >= 200) {
        const v = t ? null : module764(e);
        if (v) {
            return module300(v);
        }
        d = false;
        c = module276;
        h = new module275;
    } else {
        h = t ? [] : p;
    }
    e: while(++u < e_length){
        let m = e[u];
        const g = t ? t(m) : m;
        m = n || m !== 0 ? m : 0;
        if (d && g == g) {
            for(let y = h.length; y--;){
                if (h[y] === g) {
                    continue e;
                }
            }
            if (t) {
                h.push(g);
            }
            p.push(m);
        } else {
            if (!c(h, g, n)) {
                if (h !== p) {
                    h.push(g);
                }
                p.push(m);
            }
        }
    }
    return p;
};
