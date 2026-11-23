import module417 from "./module-417.js";
import module119 from "./module-119.js";
import module255 from "./module-255.js";
export default function(e, t, n) {
    const l = e == null ? 0 : e.length;
    if (!l) {
        return -1;
    }
    let s = n == null ? 0 : module255(n);
    if (s < 0) {
        s = Math.max(l + s, 0);
    }
    return module417(e, module119(t, 3), s);
};
