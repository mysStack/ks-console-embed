import module116 from "unpacked/module-116.js";
import module273 from "unpacked/module-273.js";
import module92 from "unpacked/module-92.js";
const toString = Function.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const c = toString.call(Object);
export default function(e) {
    if (!module92(e) || module116(e) != "[object Object]") {
        return false;
    }
    const t = module273(e);
    if (t === null) {
        return true;
    }
    const n = hasOwnProperty.call(t, "constructor") && t.constructor;
    return typeof n === "function" && n instanceof n && toString.call(n) == c;
};
