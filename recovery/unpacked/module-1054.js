import { a as a_1 } from "./module-809.js";
import { a as a_2 } from "./module-888.js";
export const a = function(e) {
    return a_1(function(t, n) {
        let r = -1;
        let n_length = n.length;
        let a = n_length > 1 ? n[n_length - 1] : undefined;
        const l = n_length > 2 ? n[2] : undefined;
        a = e.length > 3 && typeof a === "function" ? (n_length--, a) : undefined;
        if (l && a_2(n[0], n[1], l)) {
            a = n_length < 3 ? undefined : a;
            n_length = 1;
        }
        for(t = Object(t); ++r < n_length;){
            const u = n[r];
            if (u) {
                e(t, u, r, a);
            }
        }
        return t;
    });
};
