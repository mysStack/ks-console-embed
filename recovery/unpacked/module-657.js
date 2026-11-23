export default function(e, t, n) {
    for(let r = n - 1, o = e.length; ++r < o;){
        if (e[r] === t) {
            return r;
        }
    }
    return -1;
};
