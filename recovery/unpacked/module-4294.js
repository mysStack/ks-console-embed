import module1854 from "./module-1854.js";
import module1855 from "./module-1855.js";
export default function(e, t, n) {
    const i = t && n || 0;
    if (typeof e === "string") {
        t = e === "binary" ? new Array(16) : null;
        e = null;
    }
    const a = (e = e || {}).random || (e.rng || module1854)();
    a[6] = 15 & a[6] | 64;
    a[8] = 63 & a[8] | 128;
    if (t) {
        for(let l = 0; l < 16; ++l){
            t[i + l] = a[l];
        }
    }
    return t || module1855(a);
};
