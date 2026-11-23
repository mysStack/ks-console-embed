import module8 from "./module-8.js";
import module258 from "./module-258.js";
import module19 from "./module-19.js";
import module205 from "./module-205.js";
const module258_includes = module258.includes;
module8({
    target: "Array",
    proto: true,
    forced: module19(function() {
        return !Array(1).includes();
    })
}, {
    includes: function(e, _param_1) {
        return module258_includes(this, e, _param_1);
    }
});
module205("includes");
