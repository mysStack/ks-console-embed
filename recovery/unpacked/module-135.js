import module8 from "./module-8.js";
import module33 from "./module-33.js";
import module25 from "./module-25.js";
import module21 from "./module-21.js";
import module53 from "./module-53.js";
import module35 from "./module-35.js";
import module107 from "./module-107.js";
import module46 from "./module-46.js";
import module113 from "./module-113.js";
import module268 from "./module-268.js";
const module25_Symbol = module25.Symbol;
const h = module25_Symbol && module25_Symbol.prototype;
if (module33 && module35(module25_Symbol) && (!("description" in h) || module25_Symbol().description !== undefined)) {
    const v = {};
    const Symbol = function(...args) {
        const e = args.length < 1 || args[0] === undefined ? undefined : module46(args[0]);
        const t = module107(h, this) ? new module25_Symbol(e) : e === undefined ? module25_Symbol() : module25_Symbol(e);
        if (e === "") {
            v[t] = true;
        }
        return t;
    };
    module268(Symbol, module25_Symbol);
    Symbol.prototype = h;
    h.constructor = Symbol;
    const g = String(module25_Symbol("description detection")) === "Symbol(description detection)";
    const y = module21(h.valueOf);
    const b = module21(h.toString);
    const C = /^Symbol\((.*)\)[^)]+$/;
    const w = module21("".replace);
    const _ = module21("".slice);
    module113(h, "description", {
        configurable: true,
        get: function() {
            const e = y(this);
            if (module53(v, e)) {
                return "";
            }
            const t = b(e);
            const n = g ? _(t, 7, -1) : w(t, C, "$1");
            if (n === "") {
                return undefined;
            }
            return n;
        }
    });
    module8({
        global: true,
        constructor: true,
        forced: true
    }, {
        Symbol
    });
}
