import module2980 from "./module-2980.js";
import module208 from "./module-208.js";
export default function(e, t) {
    return function(n, i) {
        let a;
        if (n === undefined && i === undefined) {
            return t;
        }
        if (n !== undefined) {
            a = n;
        }
        if (i !== undefined) {
            if (a === undefined) {
                return i;
            }
            if (typeof n === "string" || typeof i === "string") {
                n = module208(n);
                i = module208(i);
            } else {
                n = module2980(n);
                i = module2980(i);
            }
            a = e(n, i);
        }
        return a;
    };
};
