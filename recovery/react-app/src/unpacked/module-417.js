export default function(e, t, n, r) {
    for(let o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o;){
        if (t(e[a], a, e)) {
            return a;
        }
    }
    return -1;
};
