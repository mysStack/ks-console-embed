export default function(e, t, n) {
    const r = (2 << Math.log(t.length - 1) / Math.LN2) - 1;
    const o = Math.ceil(1.6 * r * n / t.length);
    let a = "";
    while(true){
        const i = e(o);
        for(let l = 0; l < o; l++){
            const s = i[l] & r;
            if (t[s] && (a += t[s]).length === n) {
                return a;
            }
        }
    }
};
