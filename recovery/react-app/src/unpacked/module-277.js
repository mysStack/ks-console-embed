import module358 from "./module-358.js";
export default function(e, t, n) {
    const e_length = e.length;
    n = n === undefined ? e_length : n;
    if (!t && n >= e_length) {
        return e;
    }
    return module358(e, t, n);
};
