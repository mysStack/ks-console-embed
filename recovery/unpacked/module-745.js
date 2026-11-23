import module746 from "./module-746.js";
export default function(e, t, n) {
    for(let o = -1, a = e.criteria, i = t.criteria, l = a.length, s = n.length; ++o < l;){
        const u = module746(a[o], i[o]);
        if (u) {
            if (o >= s) {
                return u;
            }
            return u * (n[o] == "desc" ? -1 : 1);
        }
    }
    return e.index - t.index;
};
