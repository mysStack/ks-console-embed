import module50 from "./module-50.js";
import module54 from "./module-54.js";
import module168 from "./module-168.js";
export default function(e, t) {
    module50(e);
    if (module54(t) && t.constructor === e) {
        return t;
    }
    const n = module168.f(e);
    n.resolve(t);
    return n.promise;
};
