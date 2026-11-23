import module1021 from "unpacked/module-1021.js";
import module1020 from "unpacked/module-1020.js";
module1020.refCounter = function(e, t, n) {
    let l;
    let u;
    l = Object.create(null);
    u = n.async && module1020.async || n.promise && module1020.promise ? "async" : "";
    t.on(`set${u}`, function(e, t) {
        l[e] = t || 1;
    });
    t.on(`get${u}`, function(e) {
        ++l[e];
    });
    t.on(`delete${u}`, function(e) {
        delete l[e];
    });
    t.on(`clear${u}`, function() {
        l = {};
    });
    Object.defineProperties(t.memoized, {
        deleteRef: module1021(function() {
            const e = t.get(arguments);
            if (e === null) {
                return null;
            }
            if (l[e]) {
                return !--l[e] && (t.delete(e), true);
            }
            return null;
        }),
        getRefCount: module1021(function() {
            const e = t.get(arguments);
            if (e === null) {
                return 0;
            }
            if (l[e]) {
                return l[e];
            }
            return 0;
        })
    });
};
