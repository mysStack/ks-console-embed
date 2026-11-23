"use strict";
const module1752 = require("unpacked/module-1752.js").default;
const module3459 = require("unpacked/module-3459.js").default;
const module3460 = require("unpacked/module-3460.js").default;
const module3462 = require("unpacked/module-3462.js").default;
const module1754 = require("unpacked/module-1754.js").default;
const module1386 = require("unpacked/module-1386.js");
const c = module3459("then", "then:finally", "done", "done:finally");
require("unpacked/module-1020.js").default.promise = function(e, t) {
    let n = Object.create(null);
    let o = Object.create(null);
    let f = Object.create(null);
    if (e === true) {
        e = null;
    } else {
        e = module3460(e);
        if (!c[e]) {
            throw new TypeError(`'${module3462(e)}' is not valid promise mode`);
        }
    }
    t.on("set", function(r, i, a) {
        let s = false;
        if (!module1754(a)) {
            o[r] = a;
            return void t.emit("setasync", r, 1);
        }
        n[r] = 1;
        f[r] = a;
        const c = function(e) {
            const i = n[r];
            if (s) {
                throw new Error("Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.");
            }
            if (i) {
                delete n[r];
                o[r] = e;
                t.emit("setasync", r, i);
            }
        };
        const d = function() {
            s = true;
            if (n[r]) {
                delete n[r];
                delete f[r];
                t.delete(r);
            }
        };
        let p = e;
        if (!p) {
            p = "then";
        }
        if (p === "then") {
            const h = function() {
                module1386(d);
            };
            if (typeof (a = a.then(function(e) {
                module1386(c.bind(this, e));
            }, h)).finally === "function") {
                a.finally(h);
            }
        } else if (p === "done") {
            if (typeof a.done !== "function") {
                throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
            }
            a.done(c, d);
        } else if (p === "done:finally") {
            if (typeof a.done !== "function") {
                throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
            }
            if (typeof a.finally !== "function") {
                throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
            }
            a.done(c);
            a.finally(d);
        }
    });
    t.on("get", function(e, r, o) {
        let i;
        if (n[e]) {
            ++n[e];
        } else {
            i = f[e];
            const a = function() {
                t.emit("getasync", e, r, o);
            };
            if (module1754(i)) {
                if (typeof i.done === "function") {
                    i.done(a);
                } else {
                    i.then(()=>{
                        module1386(a);
                    });
                }
            } else {
                a();
            }
        }
    });
    t.on("delete", function(e) {
        delete f[e];
        if (n[e]) {
            delete n[e];
        } else if (hasOwnProperty.call(o, e)) {
            const r = o[e];
            delete o[e];
            t.emit("deleteasync", e, [
                r
            ]);
        }
    });
    t.on("clear", function() {
        const e = o;
        o = Object.create(null);
        n = Object.create(null);
        f = Object.create(null);
        t.emit("clearasync", module1752(e, function(e) {
            return [
                e
            ];
        }));
    });
};
