import { isSpace } from "./module-819.js";
export default function(e, t, n, o) {
    let i;
    let a;
    let l;
    let u;
    let s;
    let c;
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
    let w;
    let _;
    let C;
    let O;
    const e_lineMax = e.lineMax;
    let M = e.bMarks[t] + e.tShift[t];
    let S = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4) {
        return false;
    }
    if (e.src.charCodeAt(M++) !== 62) {
        return false;
    }
    if (o) {
        return true;
    }
    u = p = e.sCount[t] + M - (e.bMarks[t] + e.tShift[t]);
    if (e.src.charCodeAt(M) === 32) {
        M++;
        u++;
        p++;
        i = false;
        x = true;
    } else if (e.src.charCodeAt(M) === 9) {
        x = true;
        if ((e.bsCount[t] + p) % 4 == 3) {
            M++;
            u++;
            p++;
            i = false;
        } else {
            i = true;
        }
    } else {
        x = false;
    }
    h = [
        e.bMarks[t]
    ];
    for(e.bMarks[t] = M; M < S && (a = e.src.charCodeAt(M), isSpace(a));){
        if (a === 9) {
            p += 4 - (p + e.bsCount[t] + (i ? 1 : 0)) % 4;
        } else {
            p++;
        }
        M++;
    }
    v = [
        e.bsCount[t]
    ];
    e.bsCount[t] = e.sCount[t] + 1 + (x ? 1 : 0);
    c = M >= S;
    m = [
        e.sCount[t]
    ];
    e.sCount[t] = p - u;
    b = [
        e.tShift[t]
    ];
    e.tShift[t] = M - e.bMarks[t];
    _ = e.md.block.ruler.getRules("blockquote");
    y = e.parentType;
    e.parentType = "blockquote";
    O = false;
    for(d = t + 1; d < n && (e.sCount[d] < e.blkIndent && (O = true), !((M = e.bMarks[d] + e.tShift[d]) >= (S = e.eMarks[d]))); d++){
        if (e.src.charCodeAt(M++) !== 62 || O) {
            if (c) {
                break;
            }
            w = false;
            l = 0;
            for(s = _.length; l < s; l++){
                if (_[l](e, d, n, true)) {
                    w = true;
                    break;
                }
            }
            if (w) {
                e.lineMax = d;
                if (e.blkIndent !== 0) {
                    h.push(e.bMarks[d]);
                    v.push(e.bsCount[d]);
                    b.push(e.tShift[d]);
                    m.push(e.sCount[d]);
                    e.sCount[d] -= e.blkIndent;
                }
                break;
            }
            h.push(e.bMarks[d]);
            v.push(e.bsCount[d]);
            b.push(e.tShift[d]);
            m.push(e.sCount[d]);
            e.sCount[d] = -1;
        } else {
            u = p = e.sCount[d] + M - (e.bMarks[d] + e.tShift[d]);
            if (e.src.charCodeAt(M) === 32) {
                M++;
                u++;
                p++;
                i = false;
                x = true;
            } else if (e.src.charCodeAt(M) === 9) {
                x = true;
                if ((e.bsCount[d] + p) % 4 == 3) {
                    M++;
                    u++;
                    p++;
                    i = false;
                } else {
                    i = true;
                }
            } else {
                x = false;
            }
            h.push(e.bMarks[d]);
            for(e.bMarks[d] = M; M < S && (a = e.src.charCodeAt(M), isSpace(a));){
                if (a === 9) {
                    p += 4 - (p + e.bsCount[d] + (i ? 1 : 0)) % 4;
                } else {
                    p++;
                }
                M++;
            }
            c = M >= S;
            v.push(e.bsCount[d]);
            e.bsCount[d] = e.sCount[d] + 1 + (x ? 1 : 0);
            m.push(e.sCount[d]);
            e.sCount[d] = p - u;
            b.push(e.tShift[d]);
            e.tShift[d] = M - e.bMarks[d];
        }
    }
    g = e.blkIndent;
    e.blkIndent = 0;
    C = e.push("blockquote_open", "blockquote", 1);
    C.markup = ">";
    C.map = f = [
        t,
        0
    ];
    e.md.block.tokenize(e, t, d);
    C = e.push("blockquote_close", "blockquote", -1);
    C.markup = ">";
    e.lineMax = e_lineMax;
    e.parentType = y;
    f[1] = e.line;
    for(l = 0; l < b.length; l++){
        e.bMarks[l + t] = h[l];
        e.tShift[l + t] = b[l];
        e.sCount[l + t] = m[l];
        e.bsCount[l + t] = v[l];
    }
    e.blkIndent = g;
    return true;
};
