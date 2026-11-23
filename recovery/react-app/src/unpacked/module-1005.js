function n(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
export default function(e, t, r) {
    if (t) {
        n(e.prototype, t);
    }
    if (r) {
        n(e, r);
    }
    return e;
};
