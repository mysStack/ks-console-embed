import module265 from "./module-265.js";
import module207 from "./module-207.js";
export default function(e, t, n, a) {
    const i = !n;
    if (!n) {
        n = {};
    }
    for(let l = -1, s = t.length; ++l < s;){
        const u = t[l];
        let c = a ? a(n[u], e[u], u, n, e) : undefined;
        if (c === undefined) {
            c = e[u];
        }
        if (i) {
            module207(n, u, c);
        } else {
            module265(n, u, c);
        }
    }
    return n;
};
