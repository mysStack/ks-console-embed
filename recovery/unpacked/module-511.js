import module25 from "./module-25.js";
import module19 from "./module-19.js";
import module21 from "./module-21.js";
import module46 from "./module-46.js";
import module214 from "./module-214.js";
import module224 from "./module-224.js";
const module214_trim = module214.trim;
const { parseInt, Symbol } = module25;
const f = Symbol && Symbol.iterator;
const d = /^[+-]?0x/i;
const p = module21(d.exec);
const h = parseInt(`${module224}08`) !== 8 || parseInt(`${module224}0x16`) !== 22 || f && !module19(function() {
    parseInt(Object(f));
});
export default h ? function(e, t) {
    const n = module214_trim(module46(e));
    return parseInt(n, t >>> 0 || (p(d, n) ? 16 : 10));
} : parseInt;
