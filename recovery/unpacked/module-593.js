import module102 from "./module-102.js";
import module489 from "./module-489.js";
import module594 from "./module-594.js";
export default function(e, t, n, l) {
    if (module594) {
        if (Error.captureStackTrace) {
            Error.captureStackTrace(e, t);
        } else {
            module102(e, "stack", module489(n, l));
        }
    }
};
