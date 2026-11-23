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
    let p = "";
    const { pos, posMax } = e;
    let e_pos = e.pos;
    let y = true;
    if (e.src.charCodeAt(e.pos) !== 91) {
        return false;
    }
    u = e.pos + 1;
    if ((l = e.md.helpers.parseLinkLabel(e, e.pos, true)) < 0) {
        return false;
    }
    if ((s = l + 1) < posMax && e.src.charCodeAt(s) === 40) {
        y = false;
        s++;
        for(; s < posMax && (i = e.src.charCodeAt(s), isSpace(i) || i === 10); s++);
        if (s >= posMax) {
            return false;
        }
        e_pos = s;
        if ((c = e.md.helpers.parseLinkDestination(e.src, s, e.posMax)).ok) {
            p = e.md.normalizeLink(c.str);
            if (e.md.validateLink(p)) {
                s = c.pos;
            } else {
                p = "";
            }
        }
        for(e_pos = s; s < posMax && (i = e.src.charCodeAt(s), isSpace(i) || i === 10); s++);
        c = e.md.helpers.parseLinkTitle(e.src, s, e.posMax);
        if (s < posMax && e_pos !== s && c.ok) {
            d = c.str;
            for(s = c.pos; s < posMax && (i = e.src.charCodeAt(s), isSpace(i) || i === 10); s++);
        } else {
            d = "";
        }
        if (s >= posMax || e.src.charCodeAt(s) !== 41) {
            y = true;
        }
        s++;
    }
    if (y) {
        if (e.env.references === undefined) {
            return false;
        }
        if (s < posMax && e.src.charCodeAt(s) === 91) {
            e_pos = s + 1;
            if ((s = e.md.helpers.parseLinkLabel(e, s)) >= 0) {
                a = e.src.slice(e_pos, s++);
            } else {
                s = l + 1;
            }
        } else {
            s = l + 1;
        }
        if (!a) {
            a = e.src.slice(u, l);
        }
        if (!(f = e.env.references[normalizeReference(a)])) {
            e.pos = pos;
            return false;
        }
        p = f.href;
        d = f.title;
    }
    if (!t) {
        e.pos = u;
        e.posMax = l;
        e.push("link_open", "a", 1).attrs = n = [
            [
                "href",
                p
            ]
        ];
        if (d) {
            n.push([
                "title",
                d
            ]);
        }
        e.md.inline.tokenize(e);
        e.push("link_close", "a", -1);
    }
    e.pos = s;
    e.posMax = posMax;
    return true;
};
