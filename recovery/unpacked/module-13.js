import module8 from "./module-8.js";
import module33 from "./module-33.js";
import module368 from "./module-368.js";
import module90 from "./module-90.js";
import module115 from "./module-115.js";
import module178 from "./module-178.js";
module8({
    target: "Object",
    stat: true,
    sham: !module33
}, {
    getOwnPropertyDescriptors: function(e) {
        let t;
        let n;
        const r = module90(e);
        const o = module115.f;
        for(var u = module368(r), c = {}, f = 0; u.length > f;){
            if ((n = o(r, t = u[f++])) !== undefined) {
                module178(c, t, n);
            }
        }
        return c;
    }
});
