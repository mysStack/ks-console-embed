import module754 from "./module-754.js";
function o(t, n, a) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        module.exports = o = Reflect.get;
    } else {
        module.exports = o = function(e, t, n) {
            const o = module754(e, t);
            if (o) {
                const a = Object.getOwnPropertyDescriptor(o, t);
                if (a.get) {
                    return a.get.call(n);
                }
                return a.value;
            }
        };
    }
    return o(t, n, a || t);
}
export default o;
