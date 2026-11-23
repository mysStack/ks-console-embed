function n(t) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        n = function(e) {
            return typeof e;
        };
        n.default = n;
        n.__esModule = true;
    } else {
        n = function(e) {
            if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
                return "symbol";
            }
            return typeof e;
        };
        n.default = n;
        n.__esModule = true;
    }
    return n(t);
}
export { n as default };
n.default = n;
