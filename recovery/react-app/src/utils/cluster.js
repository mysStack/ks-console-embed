import "unpacked/module-15.js";
import "unpacked/module-6.js";
import "unpacked/module-24.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-160.js";
import "unpacked/module-4.js";
import module26 from "unpacked/module-26.js";
export const getOverrides = function(e, t, a) {
    const r = [];
    if (e && t) {
        a.forEach((a)=>{
            const l = module26(e, a, {});
            const o = module26(t, a, {});
            if (JSON.stringify(l) !== JSON.stringify(o)) {
                r.push({
                    path: `/${a.replace(/\./g, "/")}`,
                    value: o
                });
            }
        });
        return r;
    }
    return r;
};
