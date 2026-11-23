import module130 from "unpacked/module-130.js";
import module104 from "unpacked/module-104.js";
import module183 from "unpacked/module-183.js";
import module132 from "unpacked/module-132.js";
import module182 from "unpacked/module-182.js";
import module131 from "unpacked/module-131.js";
import module223 from "unpacked/module-223.js";
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
