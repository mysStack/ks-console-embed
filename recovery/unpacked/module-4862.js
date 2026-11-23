import module1967 from "./module-1967.js";
import module1968 from "./module-1968.js";
import module1250 from "./module-1250.js";
export default function(e, t) {
    const n = e[1];
    const l = t[1];
    let u = n | l;
    const s = u < 131;
    const c = l == 128 && n == 8 || l == 128 && n == 256 && e[7].length <= t[8] || l == 384 && t[7].length <= t[8] && n == 8;
    if (!s && !c) {
        return e;
    }
    if (1 & l) {
        e[2] = t[2];
        u |= 1 & n ? 0 : 4;
    }
    let f = t[3];
    if (f) {
        var d = e[3];
        e[3] = d ? module1967(d, f, t[4]) : f;
        e[4] = d ? module1250(e[3], "__lodash_placeholder__") : t[4];
    }
    if (f = t[5]) {
        d = e[5];
        e[5] = d ? module1968(d, f, t[6]) : f;
        e[6] = d ? module1250(e[5], "__lodash_placeholder__") : t[6];
    }
    if (f = t[7]) {
        e[7] = f;
    }
    if (128 & l) {
        e[8] = e[8] == null ? t[8] : Math.min(e[8], t[8]);
    }
    if (e[9] == null) {
        e[9] = t[9];
    }
    e[0] = t[0];
    e[1] = u;
    return e;
};
