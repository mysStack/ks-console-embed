import module986 from "./module-986.js";
import module1202 from "./module-1202.js";
const call = Function.prototype.call;
export default function(e, t, a) {
    const n = {};
    module986(t);
    module1202(e, function(e, r, o, l) {
        n[r] = call.call(t, a, e, r, o, l);
    });
    return n;
};
