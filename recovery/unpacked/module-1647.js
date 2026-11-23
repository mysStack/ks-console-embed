export const a = function(e) {
    return function(t, n, r) {
        let o = -1;
        const i = Object(t);
        const a = r(t);
        for(let l = a.length; l--;){
            const u = a[e ? l : ++o];
            if (n(i[u], u, i) === false) {
                break;
            }
        }
        return t;
    };
};
