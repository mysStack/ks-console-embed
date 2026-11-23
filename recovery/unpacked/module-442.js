import module8 from "./module-8.js";
import module21 from "./module-21.js";
const i = module21(Date.prototype.getTime);
module8({
    target: "Date",
    stat: true
}, {
    now: function() {
        return i(new Date);
    }
});
