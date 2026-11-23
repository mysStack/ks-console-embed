import module237 from "./module-237.js";
import module93 from "./module-93.js";
export default ((e, t, n)=>{
    const a = [];
    let i = null;
    let l = null;
    const s = e.sort((e, t)=>module93(e, t, n));
    for (const o of s){
        if (module237(o, t, n)) {
            l = o;
            if (!i) {
                i = o;
            }
        } else {
            if (l) {
                a.push([
                    i,
                    l
                ]);
            }
            l = null;
            i = null;
        }
    }
    if (i) {
        a.push([
            i,
            null
        ]);
    }
    const u = [];
    for (const [r, o] of a){
        if (r === o) {
            u.push(r);
        } else if (o || r !== s[0]) {
            if (o) {
                if (r === s[0]) {
                    u.push(`<=${o}`);
                } else {
                    u.push(`${r} - ${o}`);
                }
            } else {
                u.push(`>=${r}`);
            }
        } else {
            u.push("*");
        }
    }
    const c = u.join(" || ");
    const f = typeof t.raw === "string" ? t.raw : String(t);
    if (c.length < f.length) {
        return c;
    }
    return t;
});
