import module8 from "./module-8.js";
import module21 from "./module-21.js";
import module165 from "./module-165.js";
import module90 from "./module-90.js";
import module128 from "./module-128.js";
const s = module21([].join);
module8({
    target: "Array",
    proto: true,
    forced: module165 !== Object || !module128("join", ",")
}, {
    join: function(e) {
        return s(module90(this), e === undefined ? "," : e);
    }
});
