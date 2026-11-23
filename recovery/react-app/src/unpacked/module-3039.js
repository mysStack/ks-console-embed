import module121 from "./module-121.js";
import module496 from "./module-496.js";
import module253 from "./module-253.js";
import module497 from "./module-497.js";
import module449 from "./module-449.js";
const u = module253(function(e) {
    let t = module449(e);
    const n = module121(e, module497);
    if (t = typeof t === "function" ? t : undefined) {
        n.pop();
    }
    if (n.length && n[0] === e[0]) {
        return module496(n, undefined, t);
    }
    return [];
});
export default u;
