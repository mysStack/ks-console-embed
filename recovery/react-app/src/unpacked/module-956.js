const r = /^(?:0|[1-9]\d*)$/;
export const a = function(e, t) {
    const n = typeof e;
    return !!(t = t ?? 9007199254740991) && (n == "number" || n != "symbol" && r.test(e)) && e > -1 && e % 1 == 0 && e < t;
};
