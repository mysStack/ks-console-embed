import module645 from "./module-645.js";
import module651 from "./module-651.js";
import module415 from "./module-415.js";
export default function(e) {
    const t = module651(e);
    if (t.length == 1 && t[0][2]) {
        return module415(t[0][0], t[0][1]);
    }
    return function(n) {
        return n === e || module645(n, e, t);
    };
};
