import module798 from "./module-798.js";
export default function(e) {
    module798(e);
    if (!i.test(e)) {
        return false;
    }
    let t = true;
    let n = 0;
    for(let r = e.length - 2; r >= 0; r--){
        if (e[r] >= "A" && e[r] <= "Z") {
            const a = e[r].charCodeAt(0) - 55;
            for (const s of [
                a % 10,
                Math.trunc(a / 10)
            ]){
                n += t ? s >= 5 ? 1 + 2 * (s - 5) : 2 * s : s;
                t = !t;
            }
        } else {
            const c = e[r].charCodeAt(0) - "0".charCodeAt(0);
            n += t ? c >= 5 ? 1 + 2 * (c - 5) : 2 * c : c;
            t = !t;
        }
    }
    const f = 10 * Math.trunc((n + 9) / 10) - n;
    return +e[e.length - 1] === f;
};
var i = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

