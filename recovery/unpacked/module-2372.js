import { isSpace } from "./module-819.js";
export default function(e, t, n, o) {
    let i;
    let a;
    let l;
    let u;
    let s = e.bMarks[t] + e.tShift[t];
    let c = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4) {
        return false;
    }
    if ((i = e.src.charCodeAt(s)) !== 35 || s >= c) {
        return false;
    }
    a = 1;
    for(i = e.src.charCodeAt(++s); i === 35 && s < c && a <= 6;){
        a++;
        i = e.src.charCodeAt(++s);
    }
    return !(a > 6 || s < c && !isSpace(i) || (o || (c = e.skipSpacesBack(c, s), (l = e.skipCharsBack(c, 35, s)) > s && isSpace(e.src.charCodeAt(l - 1)) && (c = l), e.line = t + 1, (u = e.push("heading_open", `h${String(a)}`, 1)).markup = "########".slice(0, a), u.map = [
        t,
        e.line
    ], (u = e.push("inline", "", 0)).content = e.src.slice(s, c).trim(), u.map = [
        t,
        e.line
    ], u.children = [], (u = e.push("heading_close", `h${String(a)}`, -1)).markup = "########".slice(0, a)), 0));
};
