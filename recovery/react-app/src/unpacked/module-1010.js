import { a as a_1 } from "unpacked/module-894.js";
import { a as a_2 } from "unpacked/module-1184.js";
import { a as a_3 } from "unpacked/module-840.js";
const toString = Function.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const c = toString.call(Object);
export const a = function(e) {
    if (!a_3(e) || a_1(e) != "[object Object]") {
        return false;
    }
    const t = a_2(e);
    if (t === null) {
        return true;
    }
    const n = hasOwnProperty.call(t, "constructor") && t.constructor;
    return typeof n === "function" && n instanceof n && toString.call(n) == c;
};
