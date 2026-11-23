import module130 from "./module-130.js";
import module183 from "./module-183.js";
import module182 from "./module-182.js";
import module132 from "./module-132.js";
export default function(e) {
    const t = module130(this);
    const n = module132(e);
    return !(module183(t) > n.size) && module182(t, function(e) {
        if (!n.includes(e)) {
            return false;
        }
    }, true) !== false;
};
