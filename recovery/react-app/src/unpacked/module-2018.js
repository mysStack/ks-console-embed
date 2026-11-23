import { a as a_1 } from "unpacked/module-919.js";
import module1643 from "unpacked/module-1643.js";
import { a as a_2 } from "unpacked/module-841.js";
import { a as a_3 } from "unpacked/module-1645.js";
let r;
const _a = (r = /[^.]+$/.exec(module1643.a && module1643.a.keys && module1643.a.keys.IE_PROTO || "")) ? `Symbol(src)_1.${r}` : "";
const s = /^\[object .+?Constructor\]$/;
const toString = Function.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const h = RegExp(`^${toString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}\$`);
export const a = function(e) {
    return !(!a_2(e) || ((e)=>!!_a && _a in e)(e)) && (a_1(e) ? h : s).test(a_3(e));
};
