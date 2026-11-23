export default function(e, t) {
    let n;
    let r;
    let o;
    let i;
    let a;
    let l;
    let u = t + 1;
    const s = e.md.block.ruler.getRules("paragraph");
    const e_lineMax = e.lineMax;
    l = e.parentType;
    for(e.parentType = "paragraph"; u < e_lineMax && !e.isEmpty(u); u++){
        if (!(e.sCount[u] - e.blkIndent > 3 || e.sCount[u] < 0)) {
            r = false;
            o = 0;
            for(i = s.length; o < i; o++){
                if (s[o](e, u, e_lineMax, true)) {
                    r = true;
                    break;
                }
            }
            if (r) {
                break;
            }
        }
    }
    n = e.getLines(t, u, e.blkIndent, false).trim();
    e.line = u;
    a = e.push("paragraph_open", "p", 1);
    a.map = [
        t,
        e.line
    ];
    a = e.push("inline", "", 0);
    a.content = n;
    a.map = [
        t,
        e.line
    ];
    a.children = [];
    a = e.push("paragraph_close", "p", -1);
    e.parentType = l;
    return true;
};
