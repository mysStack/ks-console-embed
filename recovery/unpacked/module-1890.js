import { a as a_1 } from "./module-1440.js";
import { a as a_2 } from "./module-1142.js";
export const a = function(e) {
    let t = a_1();
    if (t.changedTouches) {
        t = t.changedTouches[0];
    }
    return a_2(e, t);
};
