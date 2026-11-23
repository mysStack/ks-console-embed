import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-31.js";
import module26 from "unpacked/module-26.js";
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
