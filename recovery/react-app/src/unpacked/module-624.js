export default function(e) {
    return function(t, n, r) {
        let o = -1;
        const a = Object(t);
        const i = r(t);
        for(let l = i.length; l--;){
            const s = i[e ? l : ++o];
            if (n(a[s], s, a) === false) {
                break;
            }
        }
        return t;
    };
};
