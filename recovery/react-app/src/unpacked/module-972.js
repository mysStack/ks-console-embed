import module208 from "./module-208.js";
import module516 from "./module-516.js";
import module277 from "./module-277.js";
import module522 from "./module-522.js";
import module523 from "./module-523.js";
import module278 from "./module-278.js";
import module125 from "./module-125.js";
export default function(e, t, n) {
    if ((e = module125(e)) && (n || t === undefined)) {
        return module516(e);
    }
    if (!e || !(t = module208(t))) {
        return e;
    }
    const c = module278(e);
    const f = module278(t);
    const d = module523(c, f);
    const p = module522(c, f) + 1;
    return module277(c, d, p).join("");
};
