import { unescapeAll } from "./module-819.js";
export default function(e, t, n) {
    let o;
    let i;
    let a = 0;
    const l = t;
    const u = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ""
    };
    if (t >= n) {
        return u;
    }
    if ((i = e.charCodeAt(t)) !== 34 && i !== 39 && i !== 40) {
        return u;
    }
    t++;
    if (i === 40) {
        i = 41;
    }
    while(t < n){
        if ((o = e.charCodeAt(t)) === i) {
            u.pos = t + 1;
            u.lines = a;
            u.str = unescapeAll(e.slice(l + 1, t));
            u.ok = true;
            return u;
        }
        if (o === 10) {
            a++;
        } else if (o === 92 && t + 1 < n) {
            t++;
            if (e.charCodeAt(t) === 10) {
                a++;
            }
        }
        t++;
    }
    return u;
};
