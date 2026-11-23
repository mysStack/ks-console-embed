import module35 from "./module-35.js";
import module70 from "./module-70.js";
import module367 from "./module-367.js";
import module281 from "./module-281.js";
export default function(e, t, n, l) {
    if (!l) {
        l = {};
    }
    let l_enumerable = l.enumerable;
    const u = l.name !== undefined ? l.name : t;
    if (module35(n)) {
        module367(n, u, l);
    }
    if (l.global) {
        if (l_enumerable) {
            e[t] = n;
        } else {
            module281(t, n);
        }
    } else {
        try {
            if (l.unsafe) {
                if (e[t]) {
                    l_enumerable = true;
                }
            } else {
                delete e[t];
            }
        } catch (e) {}
        if (l_enumerable) {
            e[t] = n;
        } else {
            module70.f(e, t, {
                value: n,
                enumerable: false,
                configurable: !l.nonConfigurable,
                writable: !l.nonWritable
            });
        }
    }
    return e;
};
