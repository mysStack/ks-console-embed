export default function(e, t) {
    let n;
    let r;
    let o;
    let i;
    let a;
    let l;
    let e_pos = e.pos;
    if (e.src.charCodeAt(e_pos) !== 96) {
        return false;
    }
    n = e_pos;
    e_pos++;
    for(r = e.posMax; e_pos < r && e.src.charCodeAt(e_pos) === 96;){
        e_pos++;
    }
    o = e.src.slice(n, e_pos);
    for(i = a = e_pos; (i = e.src.indexOf("`", a)) !== -1;){
        for(a = i + 1; a < r && e.src.charCodeAt(a) === 96;){
            a++;
        }
        if (a - i === o.length) {
            if (!t) {
                l = e.push("code_inline", "code", 0);
                l.markup = o;
                l.content = e.src.slice(e_pos, i).replace(/[ \n]+/g, " ").trim();
            }
            e.pos = a;
            return true;
        }
    }
    if (!t) {
        e.pending += o;
    }
    e.pos += o.length;
    return true;
};
