import module8 from "unpacked/module-8.js";
import module21 from "unpacked/module-21.js";
import module80 from "unpacked/module-80.js";
import module111 from "unpacked/module-111.js";
import module46 from "unpacked/module-46.js";
const u = module21("".slice);
module8({
    target: "String",
    proto: true,
    forced: !"".substr || "ab".substr(-1) !== "b"
}, {
    substr: function(e, t) {
        let n;
        let r;
        const o = module46(module80(this));
        const o_length = o.length;
        let d = module111(e);
        if (d === Infinity) {
            d = 0;
        }
        if (d < 0) {
            d = Math.max(o_length + d, 0);
        }
        if ((n = t === undefined ? o_length : module111(t)) <= 0 || n === Infinity || d >= (r = Math.min(d + n, o_length))) {
            return "";
        }
        return u(o, d, r);
    }
});
