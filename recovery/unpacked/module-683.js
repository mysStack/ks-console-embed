import module130 from "./module-130.js";
import module104 from "./module-104.js";
import module303 from "./module-303.js";
import module132 from "./module-132.js";
import module131 from "./module-131.js";
const { add, has, remove } = module104;
export default function(e) {
    const t = module130(this);
    const n = module132(e).getIterator();
    const o = module303(t);
    module131(n, function(e) {
        if (has(t, e)) {
            remove(o, e);
        } else {
            add(o, e);
        }
    });
    return o;
};
