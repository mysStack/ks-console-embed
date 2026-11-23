import module1384 from "unpacked/module-1384.js";
import module1202 from "unpacked/module-1202.js";
import module1386 from "unpacked/module-1386.js";
import module1754 from "unpacked/module-1754.js";
import module3466 from "unpacked/module-3466.js";
import module1020 from "unpacked/module-1020.js";
module1020.maxAge = function(e, t, n) {
    let p;
    let h;
    let v;
    let g;
    if (e = module3466(e)) {
        p = Object.create(null);
        h = n.async && module1020.async || n.promise && module1020.promise ? "async" : "";
        t.on(`set${h}`, function(n) {
            p[n] = setTimeout(()=>{
                t.delete(n);
            }, e);
            if (typeof p[n].unref === "function") {
                p[n].unref();
            }
            if (g) {
                if (g[n] && g[n] !== "nextTick") {
                    clearTimeout(g[n]);
                }
                g[n] = setTimeout(()=>{
                    delete g[n];
                }, v);
                if (typeof g[n].unref === "function") {
                    g[n].unref();
                }
            }
        });
        t.on(`delete${h}`, function(e) {
            clearTimeout(p[e]);
            delete p[e];
            if (g) {
                if (g[e] !== "nextTick") {
                    clearTimeout(g[e]);
                }
                delete g[e];
            }
        });
        if (n.preFetch && (v = n.preFetch === true || isNaN(n.preFetch) ? 0.333 : Math.max(Math.min(Number(n.preFetch), 1), 0))) {
            g = {};
            v = (1 - v) * e;
            t.on(`get${h}`, function(e, o, l) {
                if (!g[e]) {
                    g[e] = "nextTick";
                    module1386(function() {
                        let i;
                        if (g[e] === "nextTick") {
                            delete g[e];
                            t.delete(e);
                            if (n.async) {
                                (o = module1384(o)).push(Function.prototype);
                            }
                            i = t.memoized.apply(l, o);
                            if (n.promise && module1754(i)) {
                                if (typeof i.done === "function") {
                                    i.done(Function.prototype, Function.prototype);
                                } else {
                                    i.then(Function.prototype, Function.prototype);
                                }
                            }
                        }
                    });
                }
            });
        }
        t.on(`clear${h}`, function() {
            module1202(p, function(e) {
                clearTimeout(e);
            });
            p = {};
            if (g) {
                module1202(g, function(e) {
                    if (e !== "nextTick") {
                        clearTimeout(e);
                    }
                });
                g = {};
            }
        });
    }
};
