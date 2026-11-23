import { isSpace } from "unpacked/module-819.js";
const o = [];
for(let i = 0; i < 256; i++){
    o.push(0);
}
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((e)=>{
    o[e.charCodeAt(0)] = 1;
});
export default function(e, t) {
    let n;
    let e_pos = e.pos;
    const e_posMax = e.posMax;
    if (e.src.charCodeAt(e_pos) !== 92) {
        return false;
    }
    if (++e_pos < e_posMax) {
        if ((n = e.src.charCodeAt(e_pos)) < 256 && o[n] !== 0) {
            if (!t) {
                e.pending += e.src[e_pos];
            }
            e.pos += 2;
            return true;
        }
        if (n === 10) {
            if (!t) {
                e.push("hardbreak", "br", 0);
            }
            e_pos++;
            while(e_pos < e_posMax && (n = e.src.charCodeAt(e_pos), isSpace(n))){
                e_pos++;
            }
            e.pos = e_pos;
            return true;
        }
    }
    if (!t) {
        e.pending += "\\";
    }
    e.pos++;
    return true;
};
