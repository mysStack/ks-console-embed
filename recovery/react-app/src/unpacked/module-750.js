import module751 from "./module-751.js";
export default function(e, t, n) {
    const o = module751(e);
    if (o.length === 1) {
        const a = o[0];
        if ((u = a.step) === 1 && a.start === t && a.end === n) {
            return "*";
        }
        if (u !== 1 && a.start === t && a.end === n - u + 1) {
            return `*/${u}`;
        }
    }
    const i = [];
    for(let l = 0, s = o.length; l < s; ++l){
        var u;
        const c = o[l];
        if (c.count === 1) {
            i.push(c.start);
        } else if ((u = c.step) === 1) {
            i.push(`${c.start}-${c.end}`);
        } else if (c.end === n - u + 1) {
            i.push(`${c.start}/${u}`);
        } else {
            i.push(`${c.start}-${c.end}/${u}`);
        }
    }
    return i.join(",");
};
