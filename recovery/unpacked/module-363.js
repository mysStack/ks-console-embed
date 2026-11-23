export default function(e, t, n) {
    for(let r = -1, o = e == null ? 0 : e.length; ++r < o;){
        if (n(t, e[r])) {
            return true;
        }
    }
    return false;
};
