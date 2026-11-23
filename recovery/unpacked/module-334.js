import module121 from "./module-121.js";
import module119 from "./module-119.js";
import module405 from "./module-405.js";
import module302 from "./module-302.js";
export default function(e, t) {
    if (e == null) {
        return {};
    }
    const n = module121(module302(e), function(e) {
        return [
            e
        ];
    });
    t = module119(t);
    return module405(e, n, function(e, n) {
        return t(e, n[0]);
    });
};
