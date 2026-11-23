import module8 from "unpacked/module-8.js";
import module1495 from "unpacked/module-1495.js";
import module77 from "unpacked/module-77.js";
import module99 from "unpacked/module-99.js";
import module111 from "unpacked/module-111.js";
import module259 from "unpacked/module-259.js";
module8({
    target: "Array",
    proto: true
}, {
    flat: function(...args) {
        const e = args.length ? args[0] : undefined;
        const t = module77(this);
        const n = module99(t);
        const r = module259(t, 0);
        r.length = module1495(r, t, t, n, 0, e === undefined ? 1 : module111(e));
        return r;
    }
});
