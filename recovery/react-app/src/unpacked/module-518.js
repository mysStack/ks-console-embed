export default function(e, t) {
    for(let n = -1, r = e == null ? 0 : e.length; ++n < r;){
        if (t(e[n], n, e)) {
            return true;
        }
    }
    return false;
};
