import module209 from "./module-209.js";
import module89 from "./module-89.js";
import module172 from "./module-172.js";
const i = module209(module209.bind);
export default function(e, t) {
    module89(e);
    if (t === undefined) {
        return e;
    }
    if (module172) {
        return i(e, t);
    }
    return function() {
        return e.apply(t, arguments);
    };
};
