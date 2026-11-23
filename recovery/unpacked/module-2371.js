import { normalizeReference, isSpace } from "./module-819.js";
export default function(e, t, n, i) {
    let a;
    let l;
    let u;
    let s;
    let href;
    let f;
    let d;
    let p;
    let h;
    let v;
    let g;
    let y;
    let m;
    let b;
    let x;
    let title;
    let _ = 0;
    let C = e.bMarks[t] + e.tShift[t];
    let O = e.eMarks[t];
    let E = t + 1;
    if (e.sCount[t] - e.blkIndent >= 4) {
        return false;
    }
    if (e.src.charCodeAt(C) !== 91) {
        return false;
    }
    while(++C < O){
        if (e.src.charCodeAt(C) === 93 && e.src.charCodeAt(C - 1) !== 92) {
            if (C + 1 === O) {
                return false;
            }
            if (e.src.charCodeAt(C + 1) !== 58) {
                return false;
            }
            break;
        }
    }
    s = e.lineMax;
    x = e.md.block.ruler.getRules("reference");
    v = e.parentType;
    for(e.parentType = "reference"; E < s && !e.isEmpty(E); E++){
        if (!(e.sCount[E] - e.blkIndent > 3 || e.sCount[E] < 0)) {
            b = false;
            f = 0;
            for(d = x.length; f < d; f++){
                if (x[f](e, E, s, true)) {
                    b = true;
                    break;
                }
            }
            if (b) {
                break;
            }
        }
    }
    O = (m = e.getLines(t, E, e.blkIndent, false).trim()).length;
    for(C = 1; C < O; C++){
        if ((a = m.charCodeAt(C)) === 91) {
            return false;
        }
        if (a === 93) {
            h = C;
            break;
        }
        if (a === 10 || a === 92 && ++C < O && m.charCodeAt(C) === 10) {
            _++;
        }
    }
    if (h < 0 || m.charCodeAt(h + 1) !== 58) {
        return false;
    }
    for(C = h + 2; C < O; C++){
        if ((a = m.charCodeAt(C)) === 10) {
            _++;
        } else if (!isSpace(a)) {
            break;
        }
    }
    if (!(g = e.md.helpers.parseLinkDestination(m, C, O)).ok) {
        return false;
    }
    href = e.md.normalizeLink(g.str);
    if (!e.md.validateLink(href)) {
        return false;
    }
    l = C = g.pos;
    u = _ += g.lines;
    for(y = C; C < O; C++){
        if ((a = m.charCodeAt(C)) === 10) {
            _++;
        } else if (!isSpace(a)) {
            break;
        }
    }
    g = e.md.helpers.parseLinkTitle(m, C, O);
    if (C < O && y !== C && g.ok) {
        title = g.str;
        C = g.pos;
        _ += g.lines;
    } else {
        title = "";
        C = l;
        _ = u;
    }
    while(C < O && (a = m.charCodeAt(C), isSpace(a))){
        C++;
    }
    if (C < O && m.charCodeAt(C) !== 10 && title) {
        title = "";
        C = l;
        for(_ = u; C < O && (a = m.charCodeAt(C), isSpace(a));){
            C++;
        }
    }
    return !(C < O && m.charCodeAt(C) !== 10 || !(p = normalizeReference(m.slice(1, h))) || (i || (e.env.references === undefined && (e.env.references = {}), e.env.references[p] === undefined && (e.env.references[p] = {
        title,
        href
    }), e.parentType = v, e.line = t + _ + 1), 0));
};
