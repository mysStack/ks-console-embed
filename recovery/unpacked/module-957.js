import { a as a_1 } from "./module-1642.js";
export const a = function(e, t, n) {
    if (t == "__proto__" && a_1) {
        a_1(e, t, {
            configurable: true,
            enumerable: true,
            value: n,
            writable: true
        });
    } else {
        e[t] = n;
    }
};
