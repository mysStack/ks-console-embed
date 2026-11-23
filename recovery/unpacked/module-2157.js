function r(e, t) {
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
const i = [
    "Webkit",
    "Moz",
    "O",
    "ms"
];
export const generatePrefixStyle = function(e, t) {
    if (!e) {
        return null;
    }
    const n = e.replace(/(\w)/, (e)=>e.toUpperCase());
    const a = i.reduce((acc, item)=>({
            ...acc,
            ...{
                [item + n]: t
            }
        }), {});
    a[e] = t;
    return a;
};
