function r(e) {
    return (r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
(function(e) {
    if (r(e) === "object" && e !== null) {
        e = typeof e.toString === "function" ? e.toString() : "[object Object]";
    } else if (e == null || isNaN(e) && !e.length) {
        e = "";
    }
    return String(e);
});
export default exports.default;
