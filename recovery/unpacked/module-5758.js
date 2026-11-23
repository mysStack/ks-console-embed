export const clone = function(e, i = 5) {
    if (typeof e !== "object") {
        return e;
    }
    if (e === null) {
        return null;
    }
    const r = Array.isArray(e) ? [] : {};
    for(const n in e){
        r[n] = i <= 1 ? e[n] : clone(e[n], i - 1);
    }
    return r;
};
