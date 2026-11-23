import module21 from "./module-21.js";
import module131 from "./module-131.js";
import module104 from "./module-104.js";
const { Set, proto } = module104;
const s = module21(proto.forEach);
const u = module21(proto.keys);
const next = u(new Set).next;
export default function(e, t, n) {
    if (n) {
        return module131({
            iterator: u(e),
            next
        }, t);
    }
    return s(e, t);
};
