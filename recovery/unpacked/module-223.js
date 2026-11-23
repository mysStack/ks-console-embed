import module39 from "./module-39.js";
import module50 from "./module-50.js";
import module126 from "./module-126.js";
export default function(e, t, n) {
    let i;
    let l;
    module50(e);
    try {
        if (!(i = module126(e, "return"))) {
            if (t === "throw") {
                throw n;
            }
            return n;
        }
        i = module39(i, e);
    } catch (error) {
        l = true;
        i = error;
    }
    if (t === "throw") {
        throw n;
    }
    if (l) {
        throw i;
    }
    module50(i);
    return n;
};
