import { a as a_1 } from "unpacked/module-1118.js";
import { a as a_2 } from "unpacked/module-841.js";
export const a = function(e, maxWait, n) {
    let leading = true;
    let trailing = true;
    if (typeof e !== "function") {
        throw new TypeError("Expected a function");
    }
    if (a_2(n)) {
        leading = "leading" in n ? !!n.leading : leading;
        trailing = "trailing" in n ? !!n.trailing : trailing;
    }
    return a_1(e, maxWait, {
        leading,
        maxWait,
        trailing
    });
};
