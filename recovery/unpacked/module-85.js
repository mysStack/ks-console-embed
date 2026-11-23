import module8 from "./module-8.js";
import module21 from "./module-21.js";
import module285 from "./module-285.js";
import module80 from "./module-80.js";
import module46 from "./module-46.js";
import module286 from "./module-286.js";
const u = module21("".indexOf);
module8({
    target: "String",
    proto: true,
    forced: !module286("includes")
}, {
    includes: function(e, _param_1) {
        return !!~u(module46(module80(this)), module46(module285(e)), _param_1);
    }
});
