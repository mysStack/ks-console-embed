import module130 from "./module-130.js";
import module104 from "./module-104.js";
import module183 from "./module-183.js";
import module132 from "./module-132.js";
import module182 from "./module-182.js";
import module131 from "./module-131.js";
const { Set, add, has } = module104;
export default function(e) {
    const t = module130(this);
    const n = module132(e);
    const o = new Set;
    if (module183(t) > n.size) {
        module131(n.getIterator(), function(e) {
            if (has(t, e)) {
                add(o, e);
            }
        });
    } else {
        module182(t, function(e) {
            if (n.includes(e)) {
                add(o, e);
            }
        });
    }
    return o;
};
