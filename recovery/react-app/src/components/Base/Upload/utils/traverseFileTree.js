import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-7.js";
import "unpacked/module-4.js";
export default function(e, t, a) {
    e.forEach((e)=>{
        (function e(r, n) {
            const l = n || "";
            if (r.isFile) {
                r.file(function(e) {
                    if (a(e)) {
                        t([
                            e
                        ]);
                    }
                });
            } else if (r.isDirectory) {
                r.createReader().readEntries(function(t) {
                    t.forEach((t)=>{
                        e(t, `${l}${r.name}/`);
                    });
                });
            }
        })(e.webkitGetAsEntry());
    });
};
