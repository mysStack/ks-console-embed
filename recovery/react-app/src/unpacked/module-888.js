import { a as a_1 } from "unpacked/module-897.js";
import { a as a_2 } from "unpacked/module-877.js";
import { a as a_3 } from "unpacked/module-956.js";
import { a as a_4 } from "unpacked/module-841.js";
export const a = function(e, t, n) {
    if (!a_4(n)) {
        return false;
    }
    const l = typeof t;
    return !!(l == "number" ? a_2(n) && a_3(t, n.length) : l == "string" && t in n) && a_1(n[t], e);
};
