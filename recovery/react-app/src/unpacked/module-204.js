import module338 from "unpacked/module-338.js";
import module54 from "unpacked/module-54.js";
import module80 from "unpacked/module-80.js";
import module541 from "unpacked/module-541.js";
export default Object.setPrototypeOf || ("__proto__" in {} ? (()=>{
    let e;
    let t = false;
    const n = {};
    try {
        (e = module338(Object.prototype, "__proto__", "set"))(n, []);
        t = n instanceof Array;
    } catch (e) {}
    return function(n, r) {
        module80(n);
        module541(r);
        if (module54(n)) {
            if (t) {
                e(n, r);
            } else {
                n.__proto__ = r;
            }
            return n;
        }
        return n;
    };
})() : undefined);
