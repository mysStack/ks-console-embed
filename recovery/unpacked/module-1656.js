import { a as a_1 } from "./module-877.js";
export const a = function(e, t) {
    return function(n, o) {
        if (n == null) {
            return n;
        }
        if (!a_1(n)) {
            return e(n, o);
        }
        for(let i = n.length, a = t ? i : -1, l = Object(n); (t ? a-- : ++a < i) && o(l[a], a, l) !== false;);
        return n;
    };
};
