import module644 from "./module-644.js";
import module652 from "./module-652.js";
import module203 from "./module-203.js";
import module60 from "./module-60.js";
import module653 from "./module-653.js";
export default function(e) {
    if (typeof e === "function") {
        return e;
    }
    if (e == null) {
        return module203;
    }
    if (typeof e === "object") {
        if (module60(e)) {
            return module652(e[0], e[1]);
        }
        return module644(e);
    }
    return module653(e);
};
