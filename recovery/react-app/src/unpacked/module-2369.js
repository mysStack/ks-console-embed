import { isSpace } from "unpacked/module-819.js";
export default function(e, t, n, o) {
    let i;
    let a;
    let l;
    let u;
    let s = e.bMarks[t] + e.tShift[t];
    const c = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4) {
        return false;
    }
    if ((i = e.src.charCodeAt(s++)) !== 42 && i !== 45 && i !== 95) {
        return false;
    }
    for(a = 1; s < c;){
        if ((l = e.src.charCodeAt(s++)) !== i && !isSpace(l)) {
            return false;
        }
        if (l === i) {
            a++;
        }
    }
    return !(a < 3 || (o || (e.line = t + 1, (u = e.push("hr", "hr", 0)).map = [
        t,
        e.line
    ], u.markup = Array(a + 1).join(String.fromCharCode(i))), 0));
};
