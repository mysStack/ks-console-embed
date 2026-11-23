import module2412 from "./module-2412.js";
export default function(e, t) {
    if (e == null) {
        return {};
    }
    let n;
    let o;
    const i = module2412(e, t);
    if (Object.getOwnPropertySymbols) {
        const a = Object.getOwnPropertySymbols(e);
        for(o = 0; o < a.length; o++){
            n = a[o];
            if (!(t.indexOf(n) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(e, n)) {
                    i[n] = e[n];
                }
            }
        }
    }
    return i;
};
