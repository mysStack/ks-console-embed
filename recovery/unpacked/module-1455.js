import module111 from "./module-111.js";
import module141 from "./module-141.js";
export default function(e) {
    if (e === undefined) {
        return 0;
    }
    const t = module111(e);
    const n = module141(t);
    if (t !== n) {
        throw new RangeError("Wrong length or index");
    }
    return n;
};
