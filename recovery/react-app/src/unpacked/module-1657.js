import { a as a_1 } from "unpacked/module-977.js";
import { a as a_2 } from "unpacked/module-877.js";
export const a = function(e, t) {
    let n = -1;
    const i = a_2(e) ? Array(e.length) : [];
    a_1(e, function(e, r, o) {
        i[++n] = t(e, r, o);
    });
    return i;
};
