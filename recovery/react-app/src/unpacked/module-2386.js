import { HTML_TAG_RE } from "unpacked/module-1561.js";
export default function(e, t) {
    let n;
    let o;
    let i;
    const e_pos = e.pos;
    return !(!e.md.options.html || (i = e.posMax, e.src.charCodeAt(e_pos) !== 60 || e_pos + 2 >= i || (n = e.src.charCodeAt(e_pos + 1)) !== 33 && n !== 63 && n !== 47 && !((e)=>{
        const t = 32 | e;
        return t >= 97 && t <= 122;
    })(n) || !(o = e.src.slice(e_pos).match(HTML_TAG_RE)) || (t || (e.push("html_inline", "", 0).content = e.src.slice(e_pos, e_pos + o[0].length)), e.pos += o[0].length, 0)));
};
