import module208 from "./module-208.js";
import module277 from "./module-277.js";
import module523 from "./module-523.js";
import module278 from "./module-278.js";
import module125 from "./module-125.js";
const s = /^\s+/;
export default function(e, t, n) {
    if ((e = module125(e)) && (n || t === undefined)) {
        return e.replace(s, "");
    }
    if (!e || !(t = module208(t))) {
        return e;
    }
    const u = module278(e);
    const c = module523(u, module278(t));
    return module277(u, c).join("");
};
