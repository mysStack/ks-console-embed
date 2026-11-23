import { a as a_1 } from "./module-1652.js";
import { a as a_2 } from "./module-841.js";
import { a as a_3 } from "./module-1117.js";
import { a as a_4 } from "./module-877.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const l = (e)=>{
    if (!a_2(e)) {
        return ((e)=>{
            const t = [];
            if (e != null) {
                for(const n in Object(e)){
                    t.push(n);
                }
            }
            return t;
        })(e);
    }
    const t = a_3(e);
    const n = [];
    for(const r in e){
        if (r != "constructor" || !t && hasOwnProperty.call(e, r)) {
            n.push(r);
        }
    }
    return n;
};
export const a = function(e) {
    if (a_4(e)) {
        return a_1(e, true);
    }
    return l(e);
};
