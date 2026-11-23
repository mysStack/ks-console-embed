import module689 from "./module-689.js";
export default function(e, t) {
    if (e == null) {
        return {};
    }
    let n;
    let o;
    const a = module689(e, t);
    if (Object.getOwnPropertySymbols) {
        const i = Object.getOwnPropertySymbols(e);
        for(o = 0; o < i.length; o++){
            n = i[o];
            if (!(t.indexOf(n) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(e, n)) {
                    a[n] = e[n];
                }
            }
        }
    }
    return a;
};
