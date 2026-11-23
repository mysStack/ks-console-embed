import module798 from "./module-798.js";
export default function(e, t) {
    let n;
    let r;
    module798(e);
    if (i(t) === "object") {
        n = t.min || 0;
        r = t.max;
    } else {
        n = arguments[1] || 0;
        r = arguments[2];
    }
    const a = e.match(/(\uFE0F|\uFE0E)/g) || [];
    const l = e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
    const u = e.length - a.length - l.length;
    return u >= n && (r === undefined || u <= r);
};
function i(e) {
    return (i = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}

