import module8 from "./module-8.js";
import module112 from "./module-112.js";
import module205 from "./module-205.js";
const module112_find = module112.find;
let forced = true;
if ("find" in []) {
    Array(1).find(()=>{
        forced = false;
    });
}
module8({
    target: "Array",
    proto: true,
    forced
}, {
    find: function(e, _param_1) {
        return module112_find(this, e, _param_1);
    }
});
module205("find");
