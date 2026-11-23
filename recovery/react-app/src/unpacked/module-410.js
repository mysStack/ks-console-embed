import module275 from "./module-275.js";
import module518 from "./module-518.js";
import module276 from "./module-276.js";
export default function(e, t, n, i, l, s) {
    const u = 1 & n;
    const e_length = e.length;
    const t_length = t.length;
    if (e_length != t_length && !(u && t_length > e_length)) {
        return false;
    }
    const d = s.get(e);
    const p = s.get(t);
    if (d && p) {
        return d == t && p == e;
    }
    let h = -1;
    let v = true;
    const m = 2 & n ? new module275 : undefined;
    s.set(e, t);
    s.set(t, e);
    while(++h < e_length){
        var g = e[h];
        const y = t[h];
        if (i) var b = u ? i(y, g, h, t, e, s) : i(g, y, h, e, t, s);
        if (b !== undefined) {
            if (b) {
                continue;
            }
            v = false;
            break;
        }
        if (m) {
            if (!module518(t, function(e, t) {
                if (!module276(m, t) && (g === e || l(g, e, n, i, s))) {
                    return m.push(t);
                }
            })) {
                v = false;
                break;
            }
        } else if (g !== y && !l(g, y, n, i, s)) {
            v = false;
            break;
        }
    }
    s.delete(e);
    s.delete(t);
    return v;
};
