import module367 from "./module-367.js";
import module70 from "./module-70.js";
export default function(e, t, n) {
    if (n.get) {
        module367(n.get, t, {
            getter: true
        });
    }
    if (n.set) {
        module367(n.set, t, {
            setter: true
        });
    }
    return module70.f(e, t, n);
};
