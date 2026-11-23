import module964 from "unpacked/module-964.js";
import module1428 from "unpacked/module-1428.js";
import module1429 from "unpacked/module-1429.js";
const module964_parseInt = module964.parseInt;
const module1428_trim = module1428.trim;
const a = /^[-+]?0[xX]/;
export default module964_parseInt(`${module1429}08`) !== 8 || module964_parseInt(`${module1429}0x16`) !== 22 ? function(e, t) {
    const n = module1428_trim(String(e), 3);
    return module964_parseInt(n, t >>> 0 || (a.test(n) ? 16 : 10));
} : module964_parseInt;
