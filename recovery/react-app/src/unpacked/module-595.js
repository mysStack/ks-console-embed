import module25 from "./module-25.js";
import module19 from "./module-19.js";
import module21 from "./module-21.js";
import module46 from "./module-46.js";
import module214 from "./module-214.js";
import module224 from "./module-224.js";
const module214_trim = module214.trim;
const u = module21("".charAt);
const { parseFloat, Symbol } = module25;
const d = Symbol && Symbol.iterator;
const p = 1 / parseFloat(`${module224}-0`) != -Infinity || d && !module19(function() {
    parseFloat(Object(d));
});
export default p ? function(e) {
    const t = module214_trim(module46(e));
    const n = parseFloat(t);
    if (n === 0 && u(t, 0) === "-") {
        return -0;
    }
    return n;
} : parseFloat;
