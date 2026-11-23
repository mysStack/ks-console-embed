import module121 from "unpacked/module-121.js";
import module496 from "unpacked/module-496.js";
import module119 from "unpacked/module-119.js";
import module253 from "unpacked/module-253.js";
import module497 from "unpacked/module-497.js";
import module449 from "unpacked/module-449.js";
const s = module253(function(e) {
    let t = module449(e);
    const n = module121(e, module497);
    if (t === module449(n)) {
        t = undefined;
    } else {
        n.pop();
    }
    if (n.length && n[0] === e[0]) {
        return module496(n, module119(t, 2));
    }
    return [];
});
export default s;
