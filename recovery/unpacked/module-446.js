import module330 from "./module-330.js";
import module527 from "./module-527.js";
import module253 from "./module-253.js";
import module329 from "./module-329.js";
const l = module253(function(e, t) {
    if (e == null) {
        return [];
    }
    const t_length = t.length;
    if (t_length > 1 && module329(e, t[0], t[1])) {
        t = [];
    } else if (t_length > 2 && module329(t[0], t[1], t[2])) {
        t = [
            t[0]
        ];
    }
    return module527(e, module330(t, 1), []);
});
export default l;
