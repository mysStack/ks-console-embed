import { a as a_1 } from "unpacked/module-1262.js";
import { a as a_2 } from "unpacked/module-1263.js";
export const a = function(e, t, n, i) {
    let n_length = n.length;
    const l = n_length;
    const u = !i;
    if (e == null) {
        return !l;
    }
    for(e = Object(e); n_length--;){
        var s = n[n_length];
        if (u && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) {
            return false;
        }
    }
    while(++n_length < l){
        const c = (s = n[n_length])[0];
        const f = e[c];
        const d = s[1];
        if (u && s[2]) {
            if (f === undefined && !(c in e)) {
                return false;
            }
        } else {
            const p = new a_1;
            if (i) var h = i(f, d, c, e, t, p);
            if (!(h === undefined ? a_2(d, f, 3, i, p) : h)) {
                return false;
            }
        }
    }
    return true;
};
