import module986 from "./module-986.js";
import module1066 from "./module-1066.js";
const bind = Function.prototype.bind;
const call = Function.prototype.call;
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
export default function(e, t) {
    return function(n, s, f, d) {
        let c;
        n = Object(module1066(n));
        module986(s);
        c = Object.keys(n);
        if (d) {
            c.sort(typeof d === "function" ? bind.call(d, n) : undefined);
        }
        if (typeof e !== "function") {
            e = c[e];
        }
        return call.call(e, c, function(e, r) {
            if (propertyIsEnumerable.call(n, e)) {
                return call.call(s, f, n[e], e, n, r);
            }
            return t;
        });
    };
};
