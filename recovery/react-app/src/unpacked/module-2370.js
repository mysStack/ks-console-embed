import { isSpace } from "unpacked/module-819.js";
function o(e, t) {
    let n;
    let o;
    let i;
    let a;
    o = e.bMarks[t] + e.tShift[t];
    i = e.eMarks[t];
    if ((n = e.src.charCodeAt(o++)) !== 42 && n !== 45 && n !== 43 || o < i && (a = e.src.charCodeAt(o), !isSpace(a))) {
        return -1;
    }
    return o;
}
function i(e, t) {
    let n;
    const o = e.bMarks[t] + e.tShift[t];
    let i = o;
    const a = e.eMarks[t];
    if (i + 1 >= a) {
        return -1;
    }
    if ((n = e.src.charCodeAt(i++)) < 48 || n > 57) {
        return -1;
    }
    while(true){
        if (i >= a) {
            return -1;
        }
        if (!((n = e.src.charCodeAt(i++)) >= 48 && n <= 57)) {
            if (n === 41 || n === 46) {
                break;
            }
            return -1;
        }
        if (i - o >= 10) {
            return -1;
        }
    }
    if (i < a && (n = e.src.charCodeAt(i), !isSpace(n))) {
        return -1;
    }
    return i;
}
export default function(e, t, n, r) {
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
    let E;
    let M;
    let S;
    let A;
    let k;
    let j;
    let T;
    let P;
    let L;
    let z = false;
    let N = true;
    if (e.sCount[t] - e.blkIndent >= 4) {
        return false;
    }
    if (r && e.parentType === "paragraph" && e.tShift[t] >= e.blkIndent) {
        z = true;
    }
    if ((A = i(e, t)) >= 0) {
        d = true;
        j = e.bMarks[t] + e.tShift[t];
        m = Number(e.src.substr(j, A - j - 1));
        if (z && m !== 1) {
            return false;
        }
    } else {
        if (!((A = o(e, t)) >= 0)) {
            return false;
        }
        d = false;
    }
    if (z && e.skipSpaces(A) >= e.eMarks[t]) {
        return false;
    }
    y = e.src.charCodeAt(A - 1);
    if (r) {
        return true;
    }
    g = e.tokens.length;
    if (d) {
        L = e.push("ordered_list_open", "ol", 1);
        if (m !== 1) {
            L.attrs = [
                [
                    "start",
                    m
                ]
            ];
        }
    } else {
        L = e.push("bullet_list_open", "ul", 1);
    }
    L.map = v = [
        t,
        0
    ];
    L.markup = String.fromCharCode(y);
    x = t;
    k = false;
    P = e.md.block.ruler.getRules("list");
    O = e.parentType;
    for(e.parentType = "list"; x < n;){
        S = A;
        b = e.eMarks[x];
        for(f = w = e.sCount[x] + A - (e.bMarks[t] + e.tShift[t]); S < b;){
            if ((a = e.src.charCodeAt(S)) === 9) {
                w += 4 - (w + e.bsCount[x]) % 4;
            } else {
                if (a !== 32) {
                    break;
                }
                w++;
            }
            S++;
        }
        if ((c = (l = S) >= b ? 1 : w - f) > 4) {
            c = 1;
        }
        s = f + c;
        L = e.push("list_item_open", "li", 1);
        L.markup = String.fromCharCode(y);
        L.map = p = [
            t,
            0
        ];
        _ = e.blkIndent;
        M = e.tight;
        E = e.tShift[t];
        C = e.sCount[t];
        e.blkIndent = s;
        e.tight = true;
        e.tShift[t] = l - e.bMarks[t];
        e.sCount[t] = w;
        if (l >= b && e.isEmpty(t + 1)) {
            e.line = Math.min(e.line + 2, n);
        } else {
            e.md.block.tokenize(e, t, n, true);
        }
        if (!(e.tight && !k)) {
            N = false;
        }
        k = e.line - t > 1 && e.isEmpty(e.line - 1);
        e.blkIndent = _;
        e.tShift[t] = E;
        e.sCount[t] = C;
        e.tight = M;
        L = e.push("list_item_close", "li", -1);
        L.markup = String.fromCharCode(y);
        x = t = e.line;
        p[1] = x;
        l = e.bMarks[t];
        if (x >= n) {
            break;
        }
        if (e.sCount[x] < e.blkIndent) {
            break;
        }
        T = false;
        u = 0;
        for(h = P.length; u < h; u++){
            if (P[u](e, x, n, true)) {
                T = true;
                break;
            }
        }
        if (T) {
            break;
        }
        if (d) {
            if ((A = i(e, x)) < 0) {
                break;
            }
        } else if ((A = o(e, x)) < 0) {
            break;
        }
        if (y !== e.src.charCodeAt(A - 1)) {
            break;
        }
    }
    L = d ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1);
    L.markup = String.fromCharCode(y);
    v[1] = x;
    e.line = x;
    e.parentType = O;
    if (N) {
        ((e, t)=>{
            let n;
            let r;
            const o = e.level + 2;
            n = t + 2;
            for(r = e.tokens.length - 2; n < r; n++){
                if (e.tokens[n].level === o && e.tokens[n].type === "paragraph_open") {
                    e.tokens[n + 2].hidden = true;
                    e.tokens[n].hidden = true;
                    n += 2;
                }
            }
        })(e, g);
    }
    return true;
};
