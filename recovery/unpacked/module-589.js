import module8 from "./module-8.js";
import module151 from "./module-151.js";
import module19 from "./module-19.js";
import module221 from "./module-221.js";
import module77 from "./module-77.js";
module8({
    target: "Object",
    stat: true,
    forced: !module151 || module19(function() {
        module221.f(1);
    })
}, {
    getOwnPropertySymbols: function(e) {
        const t = module221.f;
        if (t) {
            return t(module77(e));
        }
        return [];
    }
});
