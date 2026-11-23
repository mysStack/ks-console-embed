import module8 from "./module-8.js";
import module112 from "./module-112.js";
import module205 from "./module-205.js";
const module112_findIndex = module112.findIndex;
let forced = true;
if ("findIndex" in []) {
    Array(1).findIndex(()=>{
        forced = false;
    });
}
module8({
    target: "Array",
    proto: true,
    forced
}, {
    findIndex: function(e, _param_1) {
        return module112_findIndex(this, e, _param_1);
    }
});
module205("findIndex");
