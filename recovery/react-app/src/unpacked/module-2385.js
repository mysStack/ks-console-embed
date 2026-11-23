const r = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
const o = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
export default function(e, t) {
    let n;
    let i;
    let a;
    let l;
    let u;
    let s;
    const e_pos = e.pos;
    return !(e.src.charCodeAt(e_pos) !== 60 || (n = e.src.slice(e_pos)).indexOf(">") < 0 || (o.test(n) ? (l = (i = n.match(o))[0].slice(1, -1), u = e.md.normalizeLink(l), !e.md.validateLink(u) || (t || ((s = e.push("link_open", "a", 1)).attrs = [
        [
            "href",
            u
        ]
    ], s.markup = "autolink", s.info = "auto", (s = e.push("text", "", 0)).content = e.md.normalizeLinkText(l), (s = e.push("link_close", "a", -1)).markup = "autolink", s.info = "auto"), e.pos += i[0].length, 0)) : !r.test(n) || (l = (a = n.match(r))[0].slice(1, -1), u = e.md.normalizeLink(`mailto:${l}`), !e.md.validateLink(u) || (t || ((s = e.push("link_open", "a", 1)).attrs = [
        [
            "href",
            u
        ]
    ], s.markup = "autolink", s.info = "auto", (s = e.push("text", "", 0)).content = e.md.normalizeLinkText(l), (s = e.push("link_close", "a", -1)).markup = "autolink", s.info = "auto"), e.pos += a[0].length, 0))));
};
