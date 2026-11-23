import module154 from "./module-154.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const toString = Object.prototype.toString;
const l = module154 ? module154.toStringTag : undefined;
export default function(e) {
    const t = hasOwnProperty.call(e, l);
    const n = e[l];
    try {
        e[l] = undefined;
        var r = true;
    } catch (e) {}
    const o = toString.call(e);
    if (r) {
        if (t) {
            e[l] = n;
        } else {
            delete e[l];
        }
    }
    return o;
};
