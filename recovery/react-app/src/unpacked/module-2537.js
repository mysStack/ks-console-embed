import module1590 from "./module-1590.js";
import module1580 from "./module-1580.js";
import module798 from "./module-798.js";
export default function(e, t) {
    module798(e);
    if (e.indexOf("mailto:") !== 0) {
        return false;
    }
    const [s = "", f = ""] = e.replace("mailto:", "").split("?");
    if (!s && !f) {
        return true;
    }
    const d = ((e)=>{
        const t = new Set([
            "subject",
            "body",
            "cc",
            "bcc"
        ]);
        const n = {
            cc: "",
            bcc: ""
        };
        let r = false;
        const o = e.split("&");
        if (o.length > 4) {
            return false;
        }
        for (const i of o){
            const [c, f] = i.split("=");
            if (c && !t.has(c)) {
                r = true;
                break;
            }
            if (!(!f || c !== "cc" && c !== "bcc")) {
                n[c] = f;
            }
            if (c) {
                t.delete(c);
            }
        }
        return !r && n;
    })(f);
    return !!d && `${s},${d.cc},${d.bcc}`.split(",").every((e)=>!(e = module1590(e, " ")) || module1580(e, t));
};

