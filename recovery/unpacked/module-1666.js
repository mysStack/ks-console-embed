import { a as a_1 } from "./module-1351.js";
import { a as a_2 } from "./module-1350.js";
import { a as a_3 } from "./module-1660.js";
export const a = function(e) {
    const t = a_2(e);
    if (t.length == 1 && t[0][2]) {
        return a_3(t[0][0], t[0][1]);
    }
    return function(n) {
        return n === e || a_1(n, e, t);
    };
};
