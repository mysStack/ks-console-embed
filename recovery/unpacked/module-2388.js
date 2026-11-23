export default function(e) {
    let t;
    let n;
    let r;
    let o;
    const e_delimiters = e.delimiters;
    const length = e.delimiters.length;
    for(t = 0; t < length; t++){
        if ((r = e_delimiters[t]).close) {
            for(n = t - r.jump - 1; n >= 0;){
                if ((o = e_delimiters[n]).open && o.marker === r.marker && o.end < 0 && o.level === r.level && (!o.close && !r.open || o.length === undefined || r.length === undefined || (o.length + r.length) % 3 != 0)) {
                    r.jump = t - n;
                    r.open = false;
                    o.end = t;
                    o.jump = 0;
                    break;
                }
                n -= o.jump + 1;
            }
        }
    }
};
