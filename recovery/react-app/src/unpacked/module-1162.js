import module518 from "./module-518.js";
import module119 from "./module-119.js";
import module2160 from "./module-2160.js";
import module60 from "./module-60.js";
import module329 from "./module-329.js";
export default function(e, t, n) {
    const u = module60(e) ? module518 : module2160;
    if (n && module329(e, t, n)) {
        t = undefined;
    }
    return u(e, module119(t, 3));
};
