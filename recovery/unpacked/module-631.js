import module76 from "./module-76.js";
import module215 from "./module-215.js";
import module632 from "./module-632.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e) {
    if (!module76(e)) {
        return module632(e);
    }
    const t = module215(e);
    const n = [];
    for(const l in e){
        if (l != "constructor" || !t && hasOwnProperty.call(e, l)) {
            n.push(l);
        }
    }
    return n;
};
