import module277 from "./module-277.js";
import module359 from "./module-359.js";
import module278 from "./module-278.js";
import module125 from "./module-125.js";
export default function(e) {
    return function(t) {
        t = module125(t);
        const n = module359(t) ? module278(t) : undefined;
        const l = n ? n[0] : t.charAt(0);
        const s = n ? module277(n, 1).join("") : t.slice(1);
        return l[e]() + s;
    };
};
