import module1076 from "unpacked/module-1076.js";
import module4481 from "unpacked/module-4481.js";
const module4481_set = module4481.set;
export default function(e, t, n) {
    let i;
    const t_constructor = t.constructor;
    if (t_constructor !== n && typeof t_constructor === "function" && (i = t_constructor.prototype) !== n.prototype && module1076(i) && module4481_set) {
        module4481_set(e, i);
    }
    return e;
};
