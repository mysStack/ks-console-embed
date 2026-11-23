import "./module-15.js";
import "./module-86.js";
import "./module-97.js";
import "./module-16.js";
import "./module-24.js";
import "./module-64.js";
import "./module-137.js";
import "./module-813.js";
import "./module-118.js";
import "./module-4.js";
import "./module-193.js";
export default function(e, t) {
    if (e && t) {
        const a = Array.isArray(t) ? t : t.split(",");
        const r = e.name || "";
        const n = e.type || "";
        const l = n.replace(/\/.*$/, "");
        return a.some((e)=>{
            let t;
            let a;
            const u = e.trim();
            if (u.charAt(0) === ".") {
                t = r.toLowerCase();
                a = u.toLowerCase();
                return t.indexOf(a, t.length - a.length) !== -1;
            }
            if (/\/\*$/.test(u)) {
                return l === u.replace(/\/.*$/, "");
            }
            return n === u;
        });
    }
    return true;
};
