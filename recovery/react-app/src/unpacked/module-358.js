export default function(e, t, n) {
    let r = -1;
    let e_length = e.length;
    if (t < 0) {
        t = -t > e_length ? 0 : e_length + t;
    }
    if ((n = n > e_length ? e_length : n) < 0) {
        n += e_length;
    }
    e_length = t > n ? 0 : n - t >>> 0;
    t >>>= 0;
    const a = Array(e_length);
    while(++r < e_length){
        a[r] = e[r + t];
    }
    return a;
};
