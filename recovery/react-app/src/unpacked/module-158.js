import module246 from "unpacked/module-246.js";
function o() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    o = function() {
        return weakMap;
    };
    return weakMap;
}
export default function(e) {
    if (e && e.__esModule) {
        return e;
    }
    if (e === null || module246(e) !== "object" && typeof e !== "function") {
        return {
            default: e
        };
    }
    const t = o();
    if (t && t.has(e)) {
        return t.get(e);
    }
    const n = {};
    const a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(const i in e){
        if (Object.prototype.hasOwnProperty.call(e, i)) {
            const l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            if (l && (l.get || l.set)) {
                Object.defineProperty(n, i, l);
            } else {
                n[i] = e[i];
            }
        }
    }
    n.default = e;
    if (t) {
        t.set(e, n);
    }
    return n;
};
