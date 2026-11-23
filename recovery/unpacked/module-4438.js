let n;
let r;
const toString = Function.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const u = toString.call(Object);
const toString_1 = Object.prototype.toString;
n = Object.getPrototypeOf;
r = Object;
const c = (e)=>n(r(e));
export default function(e) {
    if (!((e)=>!!e && typeof e === "object")(e) || toString_1.call(e) != "[object Object]" || ((e)=>{
        let t = false;
        if (e != null && typeof e.toString !== "function") {
            try {
                t = !!`${e}`;
            } catch (e) {}
        }
        return t;
    })(e)) {
        return false;
    }
    const t = c(e);
    if (t === null) {
        return true;
    }
    const n = hasOwnProperty.call(t, "constructor") && t.constructor;
    return typeof n === "function" && n instanceof n && toString.call(n) == u;
};
