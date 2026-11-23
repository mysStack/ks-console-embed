import module130 from "unpacked/module-130.js";
import module104 from "unpacked/module-104.js";
import module303 from "unpacked/module-303.js";
import module183 from "unpacked/module-183.js";
import module132 from "unpacked/module-132.js";
import module182 from "unpacked/module-182.js";
import module131 from "unpacked/module-131.js";
const { has, remove } = module104;
export default function(e) {
    const t = module130(this);
    const n = module132(e);
    const o = module303(t);
    if (module183(t) <= n.size) {
        module182(t, function(e) {
            if (n.includes(e)) {
                remove(o, e);
            }
        });
    } else {
        module131(n.getIterator(), function(e) {
            if (has(t, e)) {
                remove(o, e);
            }
        });
    }
    return o;
};
