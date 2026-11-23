import module638 from "./module-638.js";
import module294 from "./module-294.js";
import module639 from "./module-639.js";
import module404 from "./module-404.js";
import module517 from "./module-517.js";
import module116 from "./module-116.js";
import module392 from "./module-392.js";
const c = module392(module638);
const f = module392(module294);
const d = module392(module639);
const p = module392(module404);
const h = module392(module517);
let v = module116;
if (module638 && v(new module638(new ArrayBuffer(1))) != "[object DataView]" || module294 && v(new module294) != "[object Map]" || module639 && v(module639.resolve()) != "[object Promise]" || module404 && v(new module404) != "[object Set]" || module517 && v(new module517) != "[object WeakMap]") {
    v = function(e) {
        const t = module116(e);
        const n = t == "[object Object]" ? e.constructor : undefined;
        const r = n ? module392(n) : "";
        if (r) {
            switch(r){
                case c:
                    return "[object DataView]";
                case f:
                    return "[object Map]";
                case d:
                    return "[object Promise]";
                case p:
                    return "[object Set]";
                case h:
                    return "[object WeakMap]";
            }
        }
        return t;
    };
}
export default v;
