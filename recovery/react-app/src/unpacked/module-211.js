const n = /^(?:0|[1-9]\d*)$/;
export default function(e, t) {
    const r = typeof e;
    return !!(t = t ?? 9007199254740991) && (r == "number" || r != "symbol" && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
};
