function n(t) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        module.exports = n = function(e) {
            return typeof e;
        };
    } else {
        module.exports = n = function(e) {
            if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
                return "symbol";
            }
            return typeof e;
        };
    }
    return n(t);
}
export default n;
