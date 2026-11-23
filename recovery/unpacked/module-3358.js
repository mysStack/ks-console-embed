import "./module-15.js";
import "./module-6.js";
import "./module-24.js";
import "./module-64.js";
import "./module-7.js";
import "./module-28.js";
import "./module-191.js";
import "./module-160.js";
import "./module-4.js";
import module26 from "./module-26.js";
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
