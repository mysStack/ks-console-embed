import module163 from "./module-163.js";
export default function(e, t, n) {
    for(let o = -1, i = e.length; ++o < i;){
        const a = e[o];
        const l = t(a);
        if (l != null && (u === undefined ? l == l && !module163(l) : n(l, u))) {
            var u = l;
            var s = a;
        }
    }
    return s;
};
