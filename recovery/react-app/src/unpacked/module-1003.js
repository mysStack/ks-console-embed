import module349 from "unpacked/module-349.js";
function o(e) {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    const weakMap_1 = new WeakMap;
    return (o = function(e) {
        if (e) {
            return weakMap_1;
        }
        return weakMap;
    })(e);
}
export default function(e, t) {
    if (!t && e && e.__esModule) {
        return e;
    }
    if (e === null || module349(e) !== "object" && typeof e !== "function") {
        return {
            default: e
        };
    }
    const n = o(t);
    if (n && n.has(e)) {
        return n.get(e);
    }
    const i = {};
    const a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(const l in e){
        if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
            const u = a ? Object.getOwnPropertyDescriptor(e, l) : null;
            if (u && (u.get || u.set)) {
                Object.defineProperty(i, l, u);
            } else {
                i[l] = e[l];
            }
        }
    }
    i.default = e;
    if (n) {
        n.set(e, i);
    }
    return i;
};
