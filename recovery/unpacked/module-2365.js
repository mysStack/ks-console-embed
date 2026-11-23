import { isSpace } from "./module-819.js";
function o(e, t) {
    const n = e.bMarks[t] + e.blkIndent;
    const r = e.eMarks[t];
    return e.src.substr(n, r - n);
}
function i(e) {
    let t;
    const n = [];
    let r = 0;
    const e_length = e.length;
    let i = 0;
    let a = 0;
    let l = false;
    let u = 0;
    for(t = e.charCodeAt(r); r < e_length;){
        if (t === 96) {
            if (l) {
                l = false;
                u = r;
            } else if (i % 2 == 0) {
                l = true;
                u = r;
            }
        } else if (!(t !== 124 || i % 2 != 0 || l)) {
            n.push(e.substring(a, r));
            a = r + 1;
        }
        if (t === 92) {
            i++;
        } else {
            i = 0;
        }
        if (++r === e_length && l) {
            l = false;
            r = u + 1;
        }
        t = e.charCodeAt(r);
    }
    n.push(e.substring(a));
    return n;
}
export default function(e, t, n, a) {
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
    if (t + 2 > n) {
        return false;
    }
    f = t + 1;
    if (e.sCount[f] < e.blkIndent) {
        return false;
    }
    if (e.sCount[f] - e.blkIndent >= 4) {
        return false;
    }
    if ((s = e.bMarks[f] + e.tShift[f]) >= e.eMarks[f]) {
        return false;
    }
    if ((l = e.src.charCodeAt(s++)) !== 124 && l !== 45 && l !== 58) {
        return false;
    }
    while(s < e.eMarks[f]){
        if ((l = e.src.charCodeAt(s)) !== 124 && l !== 45 && l !== 58 && !isSpace(l)) {
            return false;
        }
        s++;
    }
    d = (u = o(e, t + 1)).split("|");
    v = [];
    for(c = 0; c < d.length; c++){
        if (!(g = d[c].trim())) {
            if (c === 0 || c === d.length - 1) {
                continue;
            }
            return false;
        }
        if (!/^:?-+:?$/.test(g)) {
            return false;
        }
        if (g.charCodeAt(g.length - 1) === 58) {
            v.push(g.charCodeAt(0) === 58 ? "center" : "right");
        } else if (g.charCodeAt(0) === 58) {
            v.push("left");
        } else {
            v.push("");
        }
    }
    if ((u = o(e, t).trim()).indexOf("|") === -1) {
        return false;
    }
    if (e.sCount[t] - e.blkIndent >= 4) {
        return false;
    }
    if ((p = (d = i(u.replace(/^\||\|$/g, ""))).length) > v.length) {
        return false;
    }
    if (a) {
        return true;
    }
    h = e.push("table_open", "table", 1);
    h.map = y = [
        t,
        0
    ];
    h = e.push("thead_open", "thead", 1);
    h.map = [
        t,
        t + 1
    ];
    h = e.push("tr_open", "tr", 1);
    h.map = [
        t,
        t + 1
    ];
    for(c = 0; c < d.length; c++){
        h = e.push("th_open", "th", 1);
        h.map = [
            t,
            t + 1
        ];
        if (v[c]) {
            h.attrs = [
                [
                    "style",
                    `text-align:${v[c]}`
                ]
            ];
        }
        h = e.push("inline", "", 0);
        h.content = d[c].trim();
        h.map = [
            t,
            t + 1
        ];
        h.children = [];
        h = e.push("th_close", "th", -1);
    }
    h = e.push("tr_close", "tr", -1);
    h = e.push("thead_close", "thead", -1);
    h = e.push("tbody_open", "tbody", 1);
    h.map = m = [
        t + 2,
        0
    ];
    for(f = t + 2; f < n && !(e.sCount[f] < e.blkIndent) && (u = o(e, f).trim()).indexOf("|") !== -1 && !(e.sCount[f] - e.blkIndent >= 4); f++){
        d = i(u.replace(/^\||\|$/g, ""));
        h = e.push("tr_open", "tr", 1);
        for(c = 0; c < p; c++){
            h = e.push("td_open", "td", 1);
            if (v[c]) {
                h.attrs = [
                    [
                        "style",
                        `text-align:${v[c]}`
                    ]
                ];
            }
            h = e.push("inline", "", 0);
            h.content = d[c] ? d[c].trim() : "";
            h.children = [];
            h = e.push("td_close", "td", -1);
        }
        h = e.push("tr_close", "tr", -1);
    }
    h = e.push("tbody_close", "tbody", -1);
    h = e.push("table_close", "table", -1);
    y[1] = m[1] = f;
    e.line = f;
    return true;
};
