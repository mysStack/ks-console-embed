import module253 from "unpacked/module-253.js";
import module169 from "unpacked/module-169.js";
import module329 from "unpacked/module-329.js";
import module161 from "unpacked/module-161.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const s = module253(function(e, t) {
    e = Object(e);
    let n = -1;
    let t_length = t.length;
    const s = t_length > 2 ? t[2] : undefined;
    for(s && module329(t[0], t[1], s) && (t_length = 1); ++n < t_length;){
        const c = t[n];
        const f = module161(c);
        for(let d = -1, p = f.length; ++d < p;){
            const h = f[d];
            const v = e[h];
            if (v === undefined || module169(v, Object.prototype[h]) && !hasOwnProperty.call(e, h)) {
                e[h] = c[h];
            }
        }
    }
    return e;
});
export default s;
