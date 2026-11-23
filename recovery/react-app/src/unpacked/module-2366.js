export default function(e, t, n) {
    let r;
    let o;
    let i;
    if (e.sCount[t] - e.blkIndent < 4) {
        return false;
    }
    for(o = r = t + 1; r < n;){
        if (e.isEmpty(r)) {
            r++;
        } else {
            if (!(e.sCount[r] - e.blkIndent >= 4)) {
                break;
            }
            o = ++r;
        }
    }
    e.line = o;
    i = e.push("code_block", "code", 0);
    i.content = e.getLines(t, o, 4 + e.blkIndent, true);
    i.map = [
        t,
        e.line
    ];
    return true;
};
