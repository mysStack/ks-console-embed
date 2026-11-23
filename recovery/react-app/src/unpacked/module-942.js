import module976 from "unpacked/module-976.js";
import { a as a_1 } from "unpacked/module-846.js";
import { a as a_2 } from "unpacked/module-808.js";
import { a as a_3 } from "unpacked/module-898.js";
const l = module976.a ? module976.a.prototype : undefined;
const u = l ? l.toString : undefined;
export const a = function e(t) {
    if (typeof t === "string") {
        return t;
    }
    if (a_2(t)) {
        return `${a_1(t, e)}`;
    }
    if (a_3(t)) {
        if (u) {
            return u.call(t);
        }
        return "";
    }
    const n = `${t}`;
    if (n == "0" && 1 / t == -Infinity) {
        return "-0";
    }
    return n;
};
