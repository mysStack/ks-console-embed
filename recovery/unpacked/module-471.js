import module208 from "./module-208.js";
import module277 from "./module-277.js";
import module522 from "./module-522.js";
import module278 from "./module-278.js";
import module125 from "./module-125.js";
import module403 from "./module-403.js";
export default function(e, t, n) {
    if ((e = module125(e)) && (n || t === undefined)) {
        return e.slice(0, module403(e) + 1);
    }
    if (!e || !(t = module208(t))) {
        return e;
    }
    const u = module278(e);
    const c = module522(u, module278(t)) + 1;
    return module277(u, 0, c).join("");
};
