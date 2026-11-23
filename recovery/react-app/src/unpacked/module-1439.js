import { a as a_1 } from "unpacked/module-1244.js";
function o(e) {
    return function() {
        this.style.removeProperty(e);
    };
}
function i(e, t, n) {
    return function() {
        this.style.setProperty(e, t, n);
    };
}
function _a(e, t, n) {
    return function() {
        const r = t.apply(this, arguments);
        if (r == null) {
            this.style.removeProperty(e);
        } else {
            this.style.setProperty(e, r, n);
        }
    };
}
export function b(e, t) {
    return e.style.getPropertyValue(t) || a_1(e).getComputedStyle(e, null).getPropertyValue(t);
}
export const a = function(e, t, n) {
    if (arguments.length > 1) {
        return this.each((t == null ? o : typeof t === "function" ? _a : i)(e, t, n ?? ""));
    }
    return b(this.node(), e);
};
