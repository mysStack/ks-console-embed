export default function(e, t, n) {
    let r;
    let o;
    let i;
    let a;
    let l;
    let u;
    let s;
    let c;
    let f;
    let d;
    let p = t + 1;
    const h = e.md.block.ruler.getRules("paragraph");
    if (e.sCount[t] - e.blkIndent >= 4) {
        return false;
    }
    d = e.parentType;
    for(e.parentType = "paragraph"; p < n && !e.isEmpty(p); p++){
        if (!(e.sCount[p] - e.blkIndent > 3)) {
            if (e.sCount[p] >= e.blkIndent && (u = e.bMarks[p] + e.tShift[p]) < (s = e.eMarks[p]) && ((f = e.src.charCodeAt(u)) === 45 || f === 61) && (u = e.skipChars(u, f), (u = e.skipSpaces(u)) >= s)) {
                c = f === 61 ? 1 : 2;
                break;
            }
            if (!(e.sCount[p] < 0)) {
                o = false;
                i = 0;
                for(a = h.length; i < a; i++){
                    if (h[i](e, p, n, true)) {
                        o = true;
                        break;
                    }
                }
                if (o) {
                    break;
                }
            }
        }
    }
    return !!c && (r = e.getLines(t, p, e.blkIndent, false).trim(), e.line = p + 1, (l = e.push("heading_open", `h${String(c)}`, 1)).markup = String.fromCharCode(f), l.map = [
        t,
        e.line
    ], (l = e.push("inline", "", 0)).content = r, l.map = [
        t,
        e.line - 1
    ], l.children = [], (l = e.push("heading_close", `h${String(c)}`, -1)).markup = String.fromCharCode(f), e.parentType = d, true);
};
