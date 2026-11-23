import module217 from "./module-217.js";
import module255 from "./module-255.js";
export default function(e, t, n) {
    const a = e == null ? 0 : e.length;
    if (!a) {
        return -1;
    }
    let l = n == null ? 0 : module255(n);
    if (l < 0) {
        l = Math.max(a + l, 0);
    }
    return module217(e, t, l);
};
