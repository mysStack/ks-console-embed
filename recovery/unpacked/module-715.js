import module108 from "./module-108.js";
export default function(e, t) {
    return function(n, o) {
        if (n == null) {
            return n;
        }
        if (!module108(n)) {
            return e(n, o);
        }
        for(let a = n.length, i = t ? a : -1, l = Object(n); (t ? i-- : ++i < a) && o(l[i], i, l) !== false;);
        return n;
    };
};
