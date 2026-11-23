import module798 from "./module-798.js";
import { alpha } from "./module-1105.js";
export default function(e, t = "en-US", n = {}) {
    module798(e);
    let r = e;
    const n_ignore = n.ignore;
    if (n_ignore) {
        if (n_ignore instanceof RegExp) {
            r = r.replace(n_ignore, "");
        } else {
            if (typeof n_ignore !== "string") {
                throw new Error("ignore should be instance of a String or RegExp");
            }
            r = r.replace(new RegExp(`[${n_ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&")}]`, "g"), "");
        }
    }
    if (t in alpha) {
        return alpha[t].test(r);
    }
    throw new Error(`Invalid locale '${t}'`);
};
export const locales = Object.keys(alpha);
