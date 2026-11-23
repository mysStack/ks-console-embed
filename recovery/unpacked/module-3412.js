import module986 from "./module-986.js";
import module1202 from "./module-1202.js";
import module1020 from "./module-1020.js";
import module3414 from "./module-3414.js";
import module1746 from "./module-1746.js";
export default (function e(t, ...args) {
    let n;
    let u;
    let s;
    module986(t);
    if ((n = Object(args[0])).async && n.promise) {
        throw new Error("Options 'async' and 'promise' cannot be used together");
    }
    if (hasOwnProperty.call(t, "__memoized__") && !n.force) {
        return t;
    }
    u = module1746(n.length, t.length, n.async && module1020.async);
    s = module3414(t, u, n);
    module1202(module1020, function(e, t) {
        if (n[t]) {
            e(n[t], s, n);
        }
    });
    if (e.__profiler__) {
        e.__profiler__(s);
    }
    s.updateEnv();
    return s.memoized;
});
