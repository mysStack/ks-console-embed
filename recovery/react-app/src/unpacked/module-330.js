import module274 from "./module-274.js";
import module643 from "./module-643.js";
export default (function e(t, n, a, i, l) {
    let s = -1;
    const t_length = t.length;
    if (!a) {
        a = module643;
    }
    if (!l) {
        l = [];
    }
    while(++s < t_length){
        const c = t[s];
        if (n > 0 && a(c)) {
            if (n > 1) {
                e(c, n - 1, a, i, l);
            } else {
                module274(l, c);
            }
        } else if (!i) {
            l[l.length] = c;
        }
    }
    return l;
});
