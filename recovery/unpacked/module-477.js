import module253 from "./module-253.js";
import module329 from "./module-329.js";
export default function(e) {
    return module253(function(t, n) {
        let r = -1;
        let n_length = n.length;
        let i = n_length > 1 ? n[n_length - 1] : undefined;
        const l = n_length > 2 ? n[2] : undefined;
        i = e.length > 3 && typeof i === "function" ? (n_length--, i) : undefined;
        if (l && module329(n[0], n[1], l)) {
            i = n_length < 3 ? undefined : i;
            n_length = 1;
        }
        for(t = Object(t); ++r < n_length;){
            const s = n[r];
            if (s) {
                e(t, s, r, i);
            }
        }
        return t;
    });
};
