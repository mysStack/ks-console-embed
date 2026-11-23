import module33 from "./module-33.js";
import module19 from "./module-19.js";
import module50 from "./module-50.js";
import module341 from "./module-341.js";
const toString = Error.prototype.toString;
const s = module19(function() {
    if (module33) {
        var e = Object.create(Object.defineProperty({}, "name", {
            get: function() {
                return this === e;
            }
        }));
        if (toString.call(e) !== "true") {
            return true;
        }
    }
    return toString.call({
        message: 1,
        name: 2
    }) !== "2: 1" || toString.call({}) !== "Error";
});
export default s ? function() {
    const e = module50(this);
    const t = module341(e.name, "Error");
    const n = module341(e.message);
    if (t) {
        if (n) {
            return `${t}: ${n}`;
        }
        return t;
    }
    return n;
} : toString;
