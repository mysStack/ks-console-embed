import "unpacked/module-15.js";
import "unpacked/module-86.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-24.js";
import "unpacked/module-64.js";
import "unpacked/module-137.js";
import "unpacked/module-813.js";
import "unpacked/module-118.js";
import "unpacked/module-4.js";
import "unpacked/module-193.js";
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
