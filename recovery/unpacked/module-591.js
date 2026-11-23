import module78 from "./module-78.js";
import module53 from "./module-53.js";
import module102 from "./module-102.js";
import module107 from "./module-107.js";
import module204 from "./module-204.js";
import module268 from "./module-268.js";
import module389 from "./module-389.js";
import module206 from "./module-206.js";
import module341 from "./module-341.js";
import module592 from "./module-592.js";
import module593 from "./module-593.js";
import module33 from "./module-33.js";
import module79 from "./module-79.js";
export default function(e, t, n, m) {
    const g = m ? 2 : 1;
    const y = e.split(".");
    const b = y[y.length - 1];
    const C = module78.apply(null, y);
    if (C) {
        const w = C.prototype;
        if (!module79 && module53(w, "cause")) {
            delete w.cause;
        }
        if (!n) {
            return C;
        }
        const _ = module78("Error");
        var x = t(function(e, t) {
            const n = module341(m ? t : e, undefined);
            const r = m ? new C(e) : new C;
            if (n !== undefined) {
                module102(r, "message", n);
            }
            module593(r, x, r.stack, 2);
            if (this && module107(w, this)) {
                module206(r, this, x);
            }
            if (arguments.length > g) {
                module592(r, arguments[g]);
            }
            return r;
        });
        x.prototype = w;
        if (b !== "Error") {
            if (module204) {
                module204(x, _);
            } else {
                module268(x, _, {
                    name: true
                });
            }
        } else if (module33 && "stackTraceLimit" in C) {
            module389(x, C, "stackTraceLimit");
            module389(x, C, "prepareStackTrace");
        }
        module268(x, C);
        if (!module79) {
            try {
                if (w.name !== b) {
                    module102(w, "name", b);
                }
                w.constructor = x;
            } catch (e) {}
        }
        return x;
    }
};
