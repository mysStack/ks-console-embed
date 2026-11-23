import module215 from "./module-215.js";
import module637 from "./module-637.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e) {
    if (!module215(e)) {
        return module637(e);
    }
    const t = [];
    for(const n in Object(e)){
        if (hasOwnProperty.call(e, n) && n != "constructor") {
            t.push(n);
        }
    }
    return t;
};
