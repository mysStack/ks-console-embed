import { a as a_1 } from "unpacked/module-1028.js";
import { a as a_2 } from "unpacked/module-861.js";
import { a } from "unpacked/module-1341.js";
import { a as a_3 } from "unpacked/module-1662.js";
import { a as a_4 } from "unpacked/module-1663.js";
import { a as a_5 } from "unpacked/module-894.js";
import { a as a_6 } from "unpacked/module-1645.js";
const i = a_1(a_2, "DataView");
const l = a_1(a_2, "Promise");
const d = a_6(i);
const p = a_6(a);
const h = a_6(l);
const v = a_6(a_3);
const g = a_6(a_4);
let y = a_5;
if (i && y(new i(new ArrayBuffer(1))) != "[object DataView]" || a && y(new a) != "[object Map]" || l && y(l.resolve()) != "[object Promise]" || a_3 && y(new a_3) != "[object Set]" || a_4 && y(new a_4) != "[object WeakMap]") {
    y = function(e) {
        const t = a_5(e);
        const n = t == "[object Object]" ? e.constructor : undefined;
        const r = n ? a_6(n) : "";
        if (r) {
            switch(r){
                case d:
                    return "[object DataView]";
                case p:
                    return "[object Map]";
                case h:
                    return "[object Promise]";
                case v:
                    return "[object Set]";
                case g:
                    return "[object WeakMap]";
            }
        }
        return t;
    };
}
const _a = y;
export { _a as a };
