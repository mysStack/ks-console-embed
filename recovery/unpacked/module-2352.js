export default function(e, t, n) {
    let r;
    let o;
    let i;
    let a;
    let l = -1;
    const { posMax, pos } = e;
    e.pos = t + 1;
    for(r = 1; e.pos < posMax;){
        if ((i = e.src.charCodeAt(e.pos)) === 93 && --r == 0) {
            o = true;
            break;
        }
        a = e.pos;
        e.md.inline.skipToken(e);
        if (i === 91) {
            if (a === e.pos - 1) {
                r++;
            } else if (n) {
                e.pos = pos;
                return -1;
            }
        }
    }
    if (o) {
        l = e.pos;
    }
    e.pos = pos;
    return l;
};
