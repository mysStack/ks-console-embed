import module386 from "unpacked/module-386.js";
import module114 from "unpacked/module-114.js";
import module143 from "unpacked/module-143.js";
import module123 from "unpacked/module-123.js";
import module177 from "unpacked/module-177.js";
const module386_IteratorPrototype = module386.IteratorPrototype;
const s = function() {
    return this;
};
export default function(e, t, n, u) {
    const c = `${t} Iterator`;
    e.prototype = module114(module386_IteratorPrototype, {
        next: module143(+!u, n)
    });
    module123(e, c, false, true);
    module177[c] = s;
    return e;
};
