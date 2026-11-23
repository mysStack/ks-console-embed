import module130 from "unpacked/module-130.js";
import module183 from "unpacked/module-183.js";
import module182 from "unpacked/module-182.js";
import module132 from "unpacked/module-132.js";
export default function(e) {
    const t = module130(this);
    const n = module132(e);
    return !(module183(t) > n.size) && module182(t, function(e) {
        if (!n.includes(e)) {
            return false;
        }
    }, true) !== false;
};
