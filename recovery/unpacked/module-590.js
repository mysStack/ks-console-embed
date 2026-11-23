import module50 from "./module-50.js";
import module223 from "./module-223.js";
export default function(e, t, n, a) {
    try {
        if (a) {
            return t(module50(n)[0], n[1]);
        }
        return t(n);
    } catch (error) {
        module223(e, "throw", error);
    }
};
