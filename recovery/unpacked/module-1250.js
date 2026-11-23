export default function(e, t) {
    for(var n = -1, r = e.length, o = 0, i = []; ++n < r;){
        const a = e[n];
        if (!(a !== t && a !== "__lodash_placeholder__")) {
            e[n] = "__lodash_placeholder__";
            i[o++] = n;
        }
    }
    return i;
};
