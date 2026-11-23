import { PRESENTATION_ATTRIBUTES } from "./module-810.js";
function o(e, t) {
    const n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        n.push.apply(n, r);
    }
    return n;
}
function i(e, t, n) {
    if (t in e) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        e[t] = n;
    }
    return e;
}
function Cell() {
    return null;
}
Cell.propTypes = {
    ...PRESENTATION_ATTRIBUTES
};
Cell.displayName = "Cell";
export default Cell;
