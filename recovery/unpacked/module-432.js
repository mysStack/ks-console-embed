import { ForwardRef, Memo, isMemo } from "./module-761.js";
const o = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
const a = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
const i = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
const l = {};
function s(e) {
    if (isMemo(e)) {
        return i;
    }
    return l[e.$$typeof] || o;
}
l[ForwardRef] = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
l[Memo] = i;
export default (function e(t, n, r) {
    if (typeof n !== "string") {
        if (Object.prototype) {
            const o = Object.getPrototypeOf(n);
            if (o && o !== Object.prototype) {
                e(t, o, r);
            }
        }
        let i = Object.getOwnPropertyNames(n);
        if (Object.getOwnPropertySymbols) {
            i = i.concat(Object.getOwnPropertySymbols(n));
        }
        const l = s(t);
        const v = s(n);
        for (const g of i){
            if (!(a[g] || r && r[g] || v && v[g] || l && l[g])) {
                const y = Object.getOwnPropertyDescriptor(n, g);
                try {
                    Object.defineProperty(t, g, y);
                } catch (e) {}
            }
        }
    }
    return t;
});
