import module986 from "unpacked/module-986.js";
import module1202 from "unpacked/module-1202.js";
import module1020 from "unpacked/module-1020.js";
const apply = Function.prototype.apply;
module1020.dispose = function(e, t, n) {
    let l;
    module986(e);
    if (n.async && module1020.async || n.promise && module1020.promise) {
        t.on("deleteasync", l = function(t, n) {
            apply.call(e, null, n);
        });
        return void t.on("clearasync", function(e) {
            module1202(e, function(e, t) {
                l(t, e);
            });
        });
    }
    t.on("delete", l = function(t, n) {
        e(n);
    });
    t.on("clear", function(e) {
        module1202(e, function(e, t) {
            l(t, e);
        });
    });
};
