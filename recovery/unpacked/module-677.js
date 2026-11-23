import module130 from "./module-130.js";
import module104 from "./module-104.js";
import module183 from "./module-183.js";
import module132 from "./module-132.js";
import module182 from "./module-182.js";
import module131 from "./module-131.js";
import module223 from "./module-223.js";
const module104_has = module104.has;
export default function(e) {
    const t = module130(this);
    const n = module132(e);
    if (module183(t) <= n.size) {
        return module182(t, function(e) {
            if (n.includes(e)) {
                return false;
            }
        }, true) !== false;
    }
    const c = n.getIterator();
    return module131(c, function(e) {
        if (module104_has(t, e)) {
            return module223(c, "normal", false);
        }
    }) !== false;
};
