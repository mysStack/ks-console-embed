import module121 from "./module-121.js";
import module181 from "./module-181.js";
import module119 from "./module-119.js";
import module528 from "./module-528.js";
import module744 from "./module-744.js";
import module171 from "./module-171.js";
import module745 from "./module-745.js";
import module203 from "./module-203.js";
import module60 from "./module-60.js";
export default function(e, t, n) {
    t = t.length ? module121(t, function(e) {
        if (module60(e)) {
            return function(t) {
                return module181(t, e.length === 1 ? e[0] : e);
            };
        }
        return e;
    }) : [
        module203
    ];
    let d = -1;
    t = module121(t, module171(module119));
    const p = module528(e, function(e, n, o) {
        return {
            criteria: module121(t, function(t) {
                return t(e);
            }),
            index: ++d,
            value: e
        };
    });
    return module744(p, function(e, t) {
        return module745(e, t, n);
    });
};
