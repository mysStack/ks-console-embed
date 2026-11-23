import module89 from "./module-89.js";
import module50 from "./module-50.js";
import module39 from "./module-39.js";
import module111 from "./module-111.js";
import module673 from "./module-673.js";
const f = function(e, t) {
    this.set = e;
    this.size = Math.max(t, 0);
    this.has = module89(e.has);
    this.keys = module89(e.keys);
};
f.prototype = {
    getIterator: function() {
        return module673(module50(module39(this.keys, this.set)));
    },
    includes: function(e) {
        return module39(this.has, this.set, e);
    }
};
export default function(e) {
    module50(e);
    const t = +e.size;
    if (t != t) {
        throw new TypeError("Invalid size");
    }
    const n = module111(t);
    if (n < 0) {
        throw new RangeError("Invalid size");
    }
    return new f(e, n);
};
