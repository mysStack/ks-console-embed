import module490 from "./module-490.js";
export default function(e, t, n) {
    t = Math.max(t === undefined ? e.length - 1 : t, 0);
    return function() {
        const a = arguments;
        for(var i = -1, l = Math.max(a.length - t, 0), s = Array(l); ++i < l;){
            s[i] = a[t + i];
        }
        i = -1;
        const u = Array(t + 1);
        while(++i < t){
            u[i] = a[i];
        }
        u[t] = n(s);
        return module490(e, this, u);
    };
};
