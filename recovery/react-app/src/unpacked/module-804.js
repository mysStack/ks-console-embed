import { a as a_1 } from "unpacked/module-1666.js";
import { a as a_2 } from "unpacked/module-1658.js";
import { a as a_3 } from "unpacked/module-876.js";
import { a as a_4 } from "unpacked/module-808.js";
import { a as a_5 } from "unpacked/module-1265.js";
export const a = function(e) {
    if (typeof e === "function") {
        return e;
    }
    if (e == null) {
        return a_3;
    }
    if (typeof e === "object") {
        if (a_4(e)) {
            return a_2(e[0], e[1]);
        }
        return a_1(e);
    }
    return a_5(e);
};
