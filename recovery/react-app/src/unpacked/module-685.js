import module130 from "unpacked/module-130.js";
import module104 from "unpacked/module-104.js";
import module303 from "unpacked/module-303.js";
import module132 from "unpacked/module-132.js";
import module131 from "unpacked/module-131.js";
const module104_add = module104.add;
export default function(e) {
    const t = module130(this);
    const n = module132(e).getIterator();
    const s = module303(t);
    module131(n, function(e) {
        module104_add(s, e);
    });
    return s;
};
