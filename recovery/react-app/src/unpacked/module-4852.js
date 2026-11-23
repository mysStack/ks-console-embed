import module1458 from "unpacked/module-1458.js";
import module1970 from "unpacked/module-1970.js";
import module4853 from "unpacked/module-4853.js";
import module4855 from "unpacked/module-4855.js";
export default function(e) {
    const t = module4853(e);
    const n = module4855[t];
    if (typeof n !== "function" || !(t in module1458.prototype)) {
        return false;
    }
    if (e === n) {
        return true;
    }
    const l = module1970(n);
    return !!l && e === l[0];
};
