import module1113 from "unpacked/module-1113.js";
import module136 from "unpacked/module-136.js";
export const mergeClasses = function(e, t = []) {
    const n = e.default && module136(e.default) || {};
    t.map((t)=>{
        const o = e[t];
        if (o) {
            module1113(o, function(e, t) {
                if (!n[t]) {
                    n[t] = {};
                }
                n[t] = {
                    ...n[t],
                    ...o[t]
                };
            });
        }
        return t;
    });
    return n;
};
export default mergeClasses;
