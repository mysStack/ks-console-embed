import module798 from "./module-798.js";
import module883 from "./module-883.js";
(function(e, t) {
    module798(e);
    try {
        t = module883(t, l);
        let n = [];
        if (t.allow_primitives) {
            n = [
                null,
                false,
                true
            ];
        }
        const i = JSON.parse(e);
        return n.includes(i) || !!i && a(i) === "object";
    } catch (e) {}
    return false;
});
function a(e) {
    return (a = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
var l = {
    allow_primitives: false
};
export default exports.default;
