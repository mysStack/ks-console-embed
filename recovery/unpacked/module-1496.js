import module275 from "./module-275.js";
import module342 from "./module-342.js";
import module363 from "./module-363.js";
import module121 from "./module-121.js";
import module171 from "./module-171.js";
import module276 from "./module-276.js";
export default function(e, t, n, s) {
    let c = -1;
    let f = module342;
    let d = true;
    const e_length = e.length;
    const h = [];
    const t_length = t.length;
    if (!e_length) {
        return h;
    }
    if (n) {
        t = module121(t, module171(n));
    }
    if (s) {
        f = module363;
        d = false;
    } else if (t.length >= 200) {
        f = module276;
        d = false;
        t = new module275(t);
    }
    e: while(++c < e_length){
        let g = e[c];
        const y = n == null ? g : n(g);
        g = s || g !== 0 ? g : 0;
        if (d && y == y) {
            for(let m = t_length; m--;){
                if (t[m] === y) {
                    continue e;
                }
            }
            h.push(g);
        } else {
            if (!f(t, y, s)) {
                h.push(g);
            }
        }
    }
    return h;
};
