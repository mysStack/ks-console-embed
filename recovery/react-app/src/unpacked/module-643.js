import module154 from "./module-154.js";
import module180 from "./module-180.js";
import module60 from "./module-60.js";
const i = module154 ? module154.isConcatSpreadable : undefined;
export default function(e) {
    return module60(e) || module180(e) || !!(i && e && e[i]);
};
