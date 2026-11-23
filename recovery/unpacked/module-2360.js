import { arrayReplaceAt } from "./module-819.js";
function o(content) {
    return /^<\/a\s*>/i.test(content);
}
export default function(e) {
    let t;
    let n;
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
    const e_tokens = e.tokens;
    if (e.md.options.linkify) {
        n = 0;
        for(i = e_tokens.length; n < i; n++){
            if (e_tokens[n].type === "inline" && e.md.linkify.pretest(e_tokens[n].content)) {
                v = 0;
                for(t = (a = e_tokens[n].children).length - 1; t >= 0; t--){
                    if ((u = a[t]).type !== "link_close") {
                        if (u.type === "html_inline") {
                            x = u.content;
                            if (/^<a[>\s]/i.test(x) && v > 0) {
                                v--;
                            }
                            if (o(u.content)) {
                                v++;
                            }
                        }
                        if (!(v > 0) && u.type === "text" && e.md.linkify.test(u.content)) {
                            f = u.content;
                            b = e.md.linkify.match(f);
                            s = [];
                            h = u.level;
                            p = 0;
                            for(c = 0; c < b.length; c++){
                                g = b[c].url;
                                y = e.md.normalizeLink(g);
                                if (e.md.validateLink(y)) {
                                    m = b[c].text;
                                    m = b[c].schema ? b[c].schema !== "mailto:" || /^mailto:/i.test(m) ? e.md.normalizeLinkText(m) : e.md.normalizeLinkText(`mailto:${m}`).replace(/^mailto:/, "") : e.md.normalizeLinkText(`http://${m}`).replace(/^http:\/\//, "");
                                    if ((d = b[c].index) > p) {
                                        l = new e.Token("text", "", 0);
                                        l.content = f.slice(p, d);
                                        l.level = h;
                                        s.push(l);
                                    }
                                    l = new e.Token("link_open", "a", 1);
                                    l.attrs = [
                                        [
                                            "href",
                                            y
                                        ]
                                    ];
                                    l.level = h++;
                                    l.markup = "linkify";
                                    l.info = "auto";
                                    s.push(l);
                                    l = new e.Token("text", "", 0);
                                    l.content = m;
                                    l.level = h;
                                    s.push(l);
                                    l = new e.Token("link_close", "a", -1);
                                    l.level = --h;
                                    l.markup = "linkify";
                                    l.info = "auto";
                                    s.push(l);
                                    p = b[c].lastIndex;
                                }
                            }
                            if (p < f.length) {
                                l = new e.Token("text", "", 0);
                                l.content = f.slice(p);
                                l.level = h;
                                s.push(l);
                            }
                            e_tokens[n].children = a = arrayReplaceAt(a, t, s);
                        }
                    } else {
                        for(t--; a[t].level !== u.level && a[t].type !== "link_open";){
                            t--;
                        }
                    }
                }
            }
        }
    }
};
