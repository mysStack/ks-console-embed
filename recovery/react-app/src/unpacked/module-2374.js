import module2375 from "unpacked/module-2375.js";
import { HTML_OPEN_CLOSE_TAG_RE } from "unpacked/module-1561.js";
const i = [
    [
        /^<(script|pre|style)(?=(\s|>|$))/i,
        /<\/(script|pre|style)>/i,
        true
    ],
    [
        /^<!--/,
        /-->/,
        true
    ],
    [
        /^<\?/,
        /\?>/,
        true
    ],
    [
        /^<![A-Z]/,
        />/,
        true
    ],
    [
        /^<!\[CDATA\[/,
        /\]\]>/,
        true
    ],
    [
        new RegExp(`^</?(${module2375.join("|")})(?=(\\s|/?>|\$))`, "i"),
        /^$/,
        true
    ],
    [
        new RegExp(`${HTML_OPEN_CLOSE_TAG_RE.source}\\s*\$`),
        /^$/,
        false
    ]
];
export default function(e, t, n, r) {
    let o;
    let a;
    let l;
    let u;
    let s = e.bMarks[t] + e.tShift[t];
    let c = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4) {
        return false;
    }
    if (!e.md.options.html) {
        return false;
    }
    if (e.src.charCodeAt(s) !== 60) {
        return false;
    }
    u = e.src.slice(s, c);
    for(o = 0; o < i.length && !i[o][0].test(u); o++);
    if (o === i.length) {
        return false;
    }
    if (r) {
        return i[o][2];
    }
    a = t + 1;
    if (!i[o][1].test(u)) {
        for(; a < n && !(e.sCount[a] < e.blkIndent); a++){
            s = e.bMarks[a] + e.tShift[a];
            c = e.eMarks[a];
            u = e.src.slice(s, c);
            if (i[o][1].test(u)) {
                if (u.length !== 0) {
                    a++;
                }
                break;
            }
        }
    }
    e.line = a;
    l = e.push("html_block", "", 0);
    l.map = [
        t,
        a
    ];
    l.content = e.getLines(t, a, e.blkIndent, true);
    return true;
};
