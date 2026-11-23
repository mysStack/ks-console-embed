import module976 from "./module-976.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const toString = Object.prototype.toString;
const l = module976.a ? module976.a.toStringTag : undefined;
const toString_1 = Object.prototype.toString;
const s = module976.a ? module976.a.toStringTag : undefined;
export const a = function(e) {
    if (e == null) {
        if (e === undefined) {
            return "[object Undefined]";
        }
        return "[object Null]";
    }
    if (s && s in Object(e)) {
        return ((e)=>{
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
        })(e);
    }
    return ((e)=>toString_1.call(e))(e);
};
