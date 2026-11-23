import { isSpace } from "unpacked/module-819.js";
export default function(e, t) {
    let n;
    let o;
    let e_pos = e.pos;
    if (e.src.charCodeAt(e_pos) !== 10) {
        return false;
    }
    n = e.pending.length - 1;
    o = e.posMax;
    if (!t) {
        if (n >= 0 && e.pending.charCodeAt(n) === 32) {
            if (n >= 1 && e.pending.charCodeAt(n - 1) === 32) {
                e.pending = e.pending.replace(/ +$/, "");
                e.push("hardbreak", "br", 0);
            } else {
                e.pending = e.pending.slice(0, -1);
                e.push("softbreak", "br", 0);
            }
        } else {
            e.push("softbreak", "br", 0);
        }
    }
    e_pos++;
    while(e_pos < o && isSpace(e.src.charCodeAt(e_pos))){
        e_pos++;
    }
    e.pos = e_pos;
    return true;
};
