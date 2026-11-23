import module127 from "unpacked/module-127.js";
import module99 from "unpacked/module-99.js";
import module263 from "unpacked/module-263.js";
import module142 from "unpacked/module-142.js";
const l = function(e, t, n, u, s, c, f, d) {
    let p;
    let h;
    let v = s;
    for(let g = 0, y = !!f && module142(f, d); g < u;){
        if (g in n) {
            p = y ? y(n[g], g, t) : n[g];
            if (c > 0 && module127(p)) {
                h = module99(p);
                v = l(e, t, p, h, v, c - 1) - 1;
            } else {
                module263(v + 1);
                e[v] = p;
            }
            v++;
        }
        g++;
    }
    return v;
};
export default l;
