import { a as a_1 } from "./module-1116.js";
import { a as a_2 } from "./module-957.js";
export const a = function(e, t, n, i) {
    const a = !n;
    if (!n) {
        n = {};
    }
    for(let l = -1, u = t.length; ++l < u;){
        const s = t[l];
        let c = i ? i(n[s], e[s], s, n, e) : undefined;
        if (c === undefined) {
            c = e[s];
        }
        if (a) {
            a_2(n, s, c);
        } else {
            a_1(n, s, c);
        }
    }
    return n;
};
