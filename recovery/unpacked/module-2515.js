import module798 from "./module-798.js";
import module1579 from "./module-1579.js";
(function(e, t) {
    let n;
    module798(e);
    if (Object.prototype.toString.call(t) === "[object Array]") {
        const i = [];
        for(n in t){
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                i[n] = module1579(t[n]);
            }
        }
        return i.indexOf(e) >= 0;
    }
    if (a(t) === "object") {
        return t.hasOwnProperty(e);
    }
    return !(!t || typeof t.indexOf !== "function") && t.indexOf(e) >= 0;
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
export default exports.default;
