import module60 from "./module-60.js";
import module163 from "./module-163.js";
const a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const i = /^\w*$/;
export default function(e, t) {
    if (module60(e)) {
        return false;
    }
    const n = typeof e;
    return !(n != "number" && n != "symbol" && n != "boolean" && e != null && !module163(e)) || i.test(e) || !a.test(e) || t != null && e in Object(t);
};
