import module21 from "unpacked/module-21.js";
import module77 from "unpacked/module-77.js";
const i = module21("".charAt);
const l = module21("".replace);
const s = module21("".slice);
const u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
const c = /\$([$&'`]|\d{1,2})/g;
export default function(e, t, n, r, f, d) {
    const p = n + e.length;
    const r_length = r.length;
    let v = c;
    if (f !== undefined) {
        f = module77(f);
        v = u;
    }
    return l(d, v, function(o, l) {
        let u;
        switch(i(l, 0)){
            case "$":
                return "$";
            case "&":
                return e;
            case "`":
                return s(t, 0, n);
            case "'":
                return s(t, p);
            case "<":
                u = f[s(l, 1, -1)];
                break;
            default:
                const c = +l;
                if (c === 0) {
                    return o;
                }
                if (c > r_length) {
                    const d = Math.floor(c / 10);
                    if (d === 0) {
                        return o;
                    }
                    if (d <= r_length) {
                        if (r[d - 1] === undefined) {
                            return i(l, 1);
                        }
                        return r[d - 1] + i(l, 1);
                    }
                    return o;
                }
                u = r[c - 1];
        }
        if (u === undefined) {
            return "";
        }
        return u;
    });
};
