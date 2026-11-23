import module8 from "./module-8.js";
import module25 from "./module-25.js";
import module78 from "./module-78.js";
import module143 from "./module-143.js";
import { f as f_1 } from "./module-70.js";
import module53 from "./module-53.js";
import module254 from "./module-254.js";
import module206 from "./module-206.js";
import module341 from "./module-341.js";
import module1888 from "./module-1888.js";
import module489 from "./module-489.js";
import module33 from "./module-33.js";
import module79 from "./module-79.js";
const g = module78("Error");
const y = module78("DOMException");
const m = function(...args) {
    module254(this, b);
    const args_length = args.length;
    const t = module341(args_length < 1 ? undefined : args[0]);
    const n = module341(args_length < 2 ? undefined : args[1], "Error");
    const r = new y(t, n);
    const o = new g(t);
    o.name = "DOMException";
    f_1(r, "stack", module143(1, module489(o.stack, 1)));
    module206(r, this, m);
    return r;
};
var b = m.prototype = y.prototype;
const x = "stack" in new g("DOMException");
const w = "stack" in new y(1, 2);
const _ = y && module33 && Object.getOwnPropertyDescriptor(module25, "DOMException");
const C = !(!_ || _.writable && _.configurable);
const O = x && !C && !w;
module8({
    global: true,
    constructor: true,
    forced: module79 || O
}, {
    DOMException: O ? m : y
});
const E = module78("DOMException");
const E_prototype = E.prototype;
if (E_prototype.constructor !== E) {
    if (!module79) {
        f_1(E_prototype, "constructor", module143(1, E));
    }
    for(const S in module1888){
        if (module53(module1888, S)) {
            const A = module1888[S];
            const k = A.s;
            if (!module53(E, k)) {
                f_1(E, k, module143(6, A.c));
            }
        }
    }
}
