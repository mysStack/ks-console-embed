import module154 from "./module-154.js";
import module121 from "./module-121.js";
import module60 from "./module-60.js";
import module163 from "./module-163.js";
const l = module154 ? module154.prototype : undefined;
const s = l ? l.toString : undefined;
export default (function e(t) {
    if (typeof t === "string") {
        return t;
    }
    if (module60(t)) {
        return `${module121(t, e)}`;
    }
    if (module163(t)) {
        if (s) {
            return s.call(t);
        }
        return "";
    }
    const n = `${t}`;
    if (n == "0" && 1 / t == -Infinity) {
        return "-0";
    }
    return n;
});
