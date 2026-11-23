import module8 from "unpacked/module-8.js";
import module78 from "unpacked/module-78.js";
import module79 from "unpacked/module-79.js";
import module153 from "unpacked/module-153.js";
import module176 from "unpacked/module-176.js";
import module379 from "unpacked/module-379.js";
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
