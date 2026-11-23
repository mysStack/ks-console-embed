import module630 from "./module-630.js";
import module180 from "./module-180.js";
import module60 from "./module-60.js";
import module170 from "./module-170.js";
import module211 from "./module-211.js";
import module216 from "./module-216.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e, t) {
    const n = module60(e);
    const c = !n && module180(e);
    const f = !n && !c && module170(e);
    const d = !n && !c && !f && module216(e);
    const p = n || c || f || d;
    const h = p ? module630(e.length, String) : [];
    const h_length = h.length;
    for(const m in e){
        if (!(!t && !hasOwnProperty.call(e, m) || p && (m == "length" || f && (m == "offset" || m == "parent") || d && (m == "buffer" || m == "byteLength" || m == "byteOffset") || module211(m, h_length)))) {
            h.push(m);
        }
    }
    return h;
};
