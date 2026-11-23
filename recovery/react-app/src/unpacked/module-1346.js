import { a as a_1 } from "unpacked/module-808.js";
import { a as a_2 } from "unpacked/module-898.js";
const i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const _a = /^\w*$/;
export const a = function(e, t) {
    if (a_1(e)) {
        return false;
    }
    const n = typeof e;
    return !(n != "number" && n != "symbol" && n != "boolean" && e != null && !a_2(e)) || _a.test(e) || !i.test(e) || t != null && e in Object(t);
};
