import module8 from "unpacked/module-8.js";
import module209 from "unpacked/module-209.js";
import module258 from "unpacked/module-258.js";
import module128 from "unpacked/module-128.js";
const module258_indexOf = module258.indexOf;
const l = module209([].indexOf);
const s = !!l && 1 / l([
    1
], 1, -0) < 0;
module8({
    target: "Array",
    proto: true,
    forced: s || !module128("indexOf")
}, {
    indexOf: function(e, t) {
        if (s) {
            return l(this, e, t) || 0;
        }
        return module258_indexOf(this, e, t);
    }
});
