import { a as a_1 } from "./module-1344.js";
import { a as a_2 } from "./module-993.js";
import { a as a_3 } from "./module-808.js";
import { a as a_4 } from "./module-956.js";
import { a as a_5 } from "./module-992.js";
const _a = require(958);
const hasOwnProperty = Object.prototype.hasOwnProperty;
export const a = function(e, t) {
    const n = a_3(e);
    const c = !n && a_2(e);
    const f = !n && !c && _a.a(e);
    const d = !n && !c && !f && a_5(e);
    const p = n || c || f || d;
    const h = p ? a_1(e.length, String) : [];
    const h_length = h.length;
    for(const g in e){
        if (!(!t && !hasOwnProperty.call(e, g) || p && (g == "length" || f && (g == "offset" || g == "parent") || d && (g == "buffer" || g == "byteLength" || g == "byteOffset") || a_4(g, h_length)))) {
            h.push(g);
        }
    }
    return h;
};
