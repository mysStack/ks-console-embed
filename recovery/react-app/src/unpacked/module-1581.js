import module798 from "./module-798.js";
export default function(e, t) {
    let n;
    let r;
    module798(e);
    if (i(t) === "object") {
        n = t.min || 0;
        r = t.max;
    } else {
        n = arguments[1];
        r = arguments[2];
    }
    const a = encodeURI(e).split(/%..|./).length - 1;
    return a >= n && (r === undefined || a <= r);
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

