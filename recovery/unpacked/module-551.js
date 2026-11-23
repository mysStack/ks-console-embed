import module8 from "./module-8.js";
import module78 from "./module-78.js";
import module79 from "./module-79.js";
import module153 from "./module-153.js";
import module176 from "./module-176.js";
import module379 from "./module-379.js";
const module176_CONSTRUCTOR = module176.CONSTRUCTOR;
const u = module78("Promise");
const c = module79 && !module176_CONSTRUCTOR;
module8({
    target: "Promise",
    stat: true,
    forced: module79 || module176_CONSTRUCTOR
}, {
    resolve: function(e) {
        return module379(c && this === u ? module153 : this, e);
    }
});
