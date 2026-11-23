import module21 from "./module-21.js";
import module127 from "./module-127.js";
import module35 from "./module-35.js";
import module91 from "./module-91.js";
import module46 from "./module-46.js";
const s = module21([].push);
export default function(e) {
    if (module35(e)) {
        return e;
    }
    if (module127(e)) {
        for(var t = e.length, n = [], r = 0; r < t; r++){
            const u = e[r];
            if (typeof u === "string") {
                s(n, u);
            } else if (!(typeof u !== "number" && module91(u) !== "Number" && module91(u) !== "String")) {
                s(n, module46(u));
            }
        }
        const c = n.length;
        let f = true;
        return function(e, t) {
            if (f) {
                f = false;
                return t;
            }
            if (module127(this)) {
                return t;
            }
            for(let r = 0; r < c; r++){
                if (n[r] === e) {
                    return t;
                }
            }
        };
    }
};
