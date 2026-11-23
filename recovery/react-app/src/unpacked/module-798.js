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
export default function(e) {
    if (!(typeof e === "string" || e instanceof String)) {
        let t = r(e);
        if (e === null) {
            t = "null";
        } else if (t === "object") {
            t = e.constructor.name;
        }
        throw new TypeError(`Expected a string but received a ${t}`);
    }
};

