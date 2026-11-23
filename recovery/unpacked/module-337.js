export default function(e, t) {
    let n = -1;
    const e_length = e.length;
    for(t || (t = Array(e_length)); ++n < e_length;){
        t[n] = e[n];
    }
    return t;
};
