import module99 from "./module-99.js";
export default function(e, t) {
    for(var n = module99(e), o = new t(n), i = 0; i < n; i++){
        o[i] = e[n - i - 1];
    }
    return o;
};
