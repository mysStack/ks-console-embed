import module71 from "./module-71.js";
import module157 from "./module-157.js";
import _safeRe from "./module-184.js";
const { safeRe, t: t_1 } = _safeRe;
export default ((e, t)=>{
    if (e instanceof module71) {
        return e;
    }
    if (typeof e === "number") {
        e = String(e);
    }
    if (typeof e !== "string") {
        return null;
    }
    let n = null;
    if ((t = t || {}).rtl) {
        const r = t.includePrerelease ? safeRe[t_1.COERCERTLFULL] : safeRe[t_1.COERCERTL];
        let o;
        while((o = r.exec(e)) && (!n || n.index + n[0].length !== e.length)){
            if (!(n && o.index + o[0].length === n.index + n[0].length)) {
                n = o;
            }
            r.lastIndex = o.index + o[1].length + o[2].length;
        }
        r.lastIndex = -1;
    } else {
        n = e.match(t.includePrerelease ? safeRe[t_1.COERCEFULL] : safeRe[t_1.COERCE]);
    }
    if (n === null) {
        return null;
    }
    const l = n[2];
    const s = n[3] || "0";
    const u = n[4] || "0";
    const c = t.includePrerelease && n[5] ? `-${n[5]}` : "";
    const f = t.includePrerelease && n[6] ? `+${n[6]}` : "";
    return module157(`${l}.${s}.${u}${c}${f}`, t);
});
