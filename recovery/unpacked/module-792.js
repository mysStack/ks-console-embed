import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import module26 from "./module-26.js";
export const trigger = function(e) {
    e.prototype.trigger = function(e, t = {}) {
        const a = module26(this, "props.rootStore") || this.rootStore;
        if (a) {
            a.triggerAction(e, {
                store: this.store,
                ...t
            });
        }
    };
    return e;
};
