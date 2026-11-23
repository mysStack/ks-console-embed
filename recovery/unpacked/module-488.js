import module124 from "./module-124.js";
const a = function(e, t) {
    const e_length = e.length;
    if (e_length < 8) {
        let i;
        let l;
        for(let s = 1; s < e_length;){
            l = s;
            for(i = e[s]; l && t(e[l - 1], i) > 0;){
                e[l] = e[--l];
            }
            if (l !== s++) {
                e[l] = i;
            }
        }
    } else {
        const u = Math.floor(e_length / 2);
        const c = a(module124(e, 0, u), t);
        const f = a(module124(e, u), t);
        for(let d = c.length, p = f.length, h = 0, v = 0; h < d || v < p;){
            e[h + v] = h < d && v < p ? t(c[h], f[v]) <= 0 ? c[h++] : f[v++] : h < d ? c[h++] : f[v++];
        }
    }
    return e;
};
export default a;
