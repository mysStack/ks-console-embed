import module798 from "./module-798.js";
export default function(e, t) {
    module798(e);
    let n = i;
    if ((t = t || {}).allow_hyphens) {
        n = a;
    }
    if (!n.test(e)) {
        return false;
    }
    e = e.replace(/-/g, "");
    let r = 0;
    let l = 2;
    for(let u = 0; u < 14; u++){
        const s = e.substring(14 - u - 1, 14 - u);
        const c = parseInt(s, 10) * l;
        r += c >= 10 ? c % 10 + 1 : c;
        if (l === 1) {
            l += 1;
        } else {
            l -= 1;
        }
    }
    return (10 - r % 10) % 10 === parseInt(e.substring(14, 15), 10);
};
var i = /^[0-9]{15}$/;
var a = /^\d{2}-\d{6}-\d{6}-\d{1}$/;

