import module8 from "./module-8.js";
import module39 from "./module-39.js";
import module89 from "./module-89.js";
import module168 from "./module-168.js";
import module270 from "./module-270.js";
import module213 from "./module-213.js";
import forced from "./module-348.js";
module8({
    target: "Promise",
    stat: true,
    forced
}, {
    race: function(e) {
        const _this = this;
        const n = module168.f(_this);
        const n_reject = n.reject;
        const u = module270(function() {
            const i = module89(_this.resolve);
            module213(e, function(e) {
                module39(i, _this, e).then(n.resolve, n_reject);
            });
        });
        if (u.error) {
            n_reject(u.value);
        }
        return n.promise;
    }
});
