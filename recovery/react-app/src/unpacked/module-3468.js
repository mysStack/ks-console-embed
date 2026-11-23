import module1019 from "unpacked/module-1019.js";
import module3469 from "unpacked/module-3469.js";
import module1020 from "unpacked/module-1020.js";
module1020.max = function(e, t, n) {
    let a;
    let l;
    let u;
    if (e = module1019(e)) {
        l = module3469(e);
        a = n.async && module1020.async || n.promise && module1020.promise ? "async" : "";
        t.on(`set${a}`, u = function(e) {
            if ((e = l.hit(e)) !== undefined) {
                t.delete(e);
            }
        });
        t.on(`get${a}`, u);
        t.on(`delete${a}`, l.delete);
        t.on(`clear${a}`, l.clear);
    }
};
