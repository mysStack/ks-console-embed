import module8 from "./module-8.js";
import module19 from "./module-19.js";
import module77 from "./module-77.js";
import module267 from "./module-267.js";
module8({
    target: "Date",
    proto: true,
    arity: 1,
    forced: module19(function() {
        return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
            toISOString: function() {
                return 1;
            }
        }) !== 1;
    })
}, {
    toJSON: function(e) {
        const t = module77(this);
        const n = module267(t, "number");
        if (typeof n !== "number" || isFinite(n)) {
            return t.toISOString();
        }
        return null;
    }
});
