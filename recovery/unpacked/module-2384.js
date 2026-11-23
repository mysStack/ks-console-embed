import { normalizeReference, isSpace } from "./module-819.js";
export default function(e, t) {
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
    let y = "";
    const { pos, posMax } = e;
    if (e.src.charCodeAt(e.pos) !== 33) {
        return false;
    }
    if (e.src.charCodeAt(e.pos + 1) !== 91) {
        return false;
    }
    s = e.pos + 2;
    if ((u = e.md.helpers.parseLinkLabel(e, e.pos + 1, false)) < 0) {
        return false;
    }
    if ((c = u + 1) < posMax && e.src.charCodeAt(c) === 40) {
        for(c++; c < posMax && (i = e.src.charCodeAt(c), isSpace(i) || i === 10); c++);
        if (c >= posMax) {
            return false;
        }
        g = c;
        if ((d = e.md.helpers.parseLinkDestination(e.src, c, e.posMax)).ok) {
            y = e.md.normalizeLink(d.str);
            if (e.md.validateLink(y)) {
                c = d.pos;
            } else {
                y = "";
            }
        }
        for(g = c; c < posMax && (i = e.src.charCodeAt(c), isSpace(i) || i === 10); c++);
        d = e.md.helpers.parseLinkTitle(e.src, c, e.posMax);
        if (c < posMax && g !== c && d.ok) {
            p = d.str;
            for(c = d.pos; c < posMax && (i = e.src.charCodeAt(c), isSpace(i) || i === 10); c++);
        } else {
            p = "";
        }
        if (c >= posMax || e.src.charCodeAt(c) !== 41) {
            e.pos = pos;
            return false;
        }
        c++;
    } else {
        if (e.env.references === undefined) {
            return false;
        }
        if (c < posMax && e.src.charCodeAt(c) === 91) {
            g = c + 1;
            if ((c = e.md.helpers.parseLinkLabel(e, c)) >= 0) {
                l = e.src.slice(g, c++);
            } else {
                c = u + 1;
            }
        } else {
            c = u + 1;
        }
        if (!l) {
            l = e.src.slice(s, u);
        }
        if (!(f = e.env.references[normalizeReference(l)])) {
            e.pos = pos;
            return false;
        }
        y = f.href;
        p = f.title;
    }
    if (!t) {
        a = e.src.slice(s, u);
        e.md.inline.parse(a, e.md, e.env, v = []);
        h = e.push("image", "img", 0);
        h.attrs = n = [
            [
                "src",
                y
            ],
            [
                "alt",
                ""
            ]
        ];
        h.children = v;
        h.content = a;
        if (p) {
            n.push([
                "title",
                p
            ]);
        }
    }
    e.pos = c;
    e.posMax = posMax;
    return true;
};
