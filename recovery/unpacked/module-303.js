import module104 from "./module-104.js";
import module182 from "./module-182.js";
const { Set, add } = module104;
export default function(e) {
    const t = new Set;
    module182(e, function(e) {
        add(t, e);
    });
    return t;
};
