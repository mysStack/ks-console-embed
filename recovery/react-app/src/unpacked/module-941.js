import { a as a_1 } from "unpacked/module-898.js";
export const a = function(e) {
    if (typeof e === "string" || a_1(e)) {
        return e;
    }
    const t = `${e}`;
    if (t == "0" && 1 / e == -Infinity) {
        return "-0";
    }
    return t;
};
