import module207 from "./module-207.js";
import module526 from "./module-526.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const a = module526(function(e, t, n) {
    if (hasOwnProperty.call(e, n)) {
        e[n].push(t);
    } else {
        module207(e, n, [
            t
        ]);
    }
});
export default a;
