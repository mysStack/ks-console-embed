import module890 from "./module-890.js";
export default function(e, t, n, r, a) {
    const l = [];
    const u = Array.isArray(t) ? "array" : t === undefined ? "undefined" : typeof t;
    module890.required(e, t, r, l, a, u);
    n(l);
};
