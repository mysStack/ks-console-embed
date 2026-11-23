import module357 from "./module-357.js";
import module26 from "./module-26.js";
import module407 from "./module-407.js";
import module299 from "./module-299.js";
import module414 from "./module-414.js";
import module415 from "./module-415.js";
import module156 from "./module-156.js";
export default function(e, t) {
    if (module299(e) && module414(t)) {
        return module415(module156(e), t);
    }
    return function(n) {
        const i = module26(n, e);
        if (i === undefined && i === t) {
            return module407(n, e);
        }
        return module357(t, i, 3);
    };
};
