import { a as a_1 } from "./module-957.js";
import { a as a_2 } from "./module-897.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
export const a = function(e, t, n) {
    const a = e[t];
    if (!(hasOwnProperty.call(e, t) && a_2(a, n) && (n !== undefined || t in e))) {
        a_1(e, t, n);
    }
};
