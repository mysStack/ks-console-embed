export default function(e, t, n, r) {
    let o;
    let i;
    let a;
    let l;
    let u;
    let s;
    let c;
    let f = false;
    let d = e.bMarks[t] + e.tShift[t];
    let p = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4) {
        return false;
    }
    if (d + 3 > p) {
        return false;
    }
    if ((o = e.src.charCodeAt(d)) !== 126 && o !== 96) {
        return false;
    }
    u = d;
    if ((i = (d = e.skipChars(d, o)) - u) < 3) {
        return false;
    }
    c = e.src.slice(u, d);
    if ((a = e.src.slice(d, p)).indexOf(String.fromCharCode(o)) >= 0) {
        return false;
    }
    if (r) {
        return true;
    }
    for(l = t; !(++l >= n || (d = u = e.bMarks[l] + e.tShift[l]) < (p = e.eMarks[l]) && e.sCount[l] < e.blkIndent);){
        if (e.src.charCodeAt(d) === o && !(e.sCount[l] - e.blkIndent >= 4 || (d = e.skipChars(d, o)) - u < i || (d = e.skipSpaces(d)) < p)) {
            f = true;
            break;
        }
    }
    i = e.sCount[t];
    e.line = l + (f ? 1 : 0);
    s = e.push("fence", "code", 0);
    s.info = a;
    s.content = e.getLines(t + 1, l, i, true);
    s.markup = c;
    s.map = [
        t,
        e.line
    ];
    return true;
};
