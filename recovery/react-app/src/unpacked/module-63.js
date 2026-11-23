import module356 from "./module-356.js";
import module164 from "./module-164.js";
import module180 from "./module-180.js";
import module60 from "./module-60.js";
import module108 from "./module-108.js";
import module170 from "./module-170.js";
import module215 from "./module-215.js";
import module216 from "./module-216.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e) {
    if (e == null) {
        return true;
    }
    if (module108(e) && (module60(e) || typeof e === "string" || typeof e.splice === "function" || module170(e) || module216(e) || module180(e))) {
        return !e.length;
    }
    const t = module164(e);
    if (t == "[object Map]" || t == "[object Set]") {
        return !e.size;
    }
    if (module215(e)) {
        return !module356(e).length;
    }
    for(const n in e){
        if (hasOwnProperty.call(e, n)) {
            return false;
        }
    }
    return true;
};
