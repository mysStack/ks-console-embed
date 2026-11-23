import { a as a_1 } from "./module-1655.js";
const o = /^\s+/;
export const a = function(e) {
    if (e) {
        return e.slice(0, a_1(e) + 1).replace(o, "");
    }
    return e;
};
