import { a as a_1 } from "unpacked/module-1117.js";
import { a as a_2 } from "unpacked/module-1651.js";
const i = a_2(Object.keys, Object);
const hasOwnProperty = Object.prototype.hasOwnProperty;
export const a = function(e) {
    if (!a_1(e)) {
        return i(e);
    }
    const t = [];
    for(const n in Object(e)){
        if (hasOwnProperty.call(e, n) && n != "constructor") {
            t.push(n);
        }
    }
    return t;
};
