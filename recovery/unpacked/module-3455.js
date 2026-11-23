"use strict";
const module1384 = require("./module-1384.js");
const module1752 = require("./module-1752.js").default;
const module1749 = require("./module-1749.js").default;
const module1748 = require("./module-1748.js");
const module1386 = require("./module-1386.js");
const slice = Array.prototype.slice;
const apply = Function.prototype.apply;
require("./module-1020.js").default.async = function(e, t) {
    let n;
    let f;
    let d;
    const p = Object.create(null);
    let h = Object.create(null);
    const { memoized, original } = t;
    t.memoized = module1748(function(e) {
        let t = arguments;
        const r = t[t.length - 1];
        if (typeof r === "function") {
            n = r;
            t = slice.call(t, 0, -1);
        }
        return memoized.apply(f = this, d = t);
    }, memoized);
    try {
        module1749(t.memoized, memoized);
    } catch (e) {}
    t.on("get", function(e) {
        let r;
        let o;
        let i;
        if (n) {
            if (p[e]) {
                if (typeof p[e] === "function") {
                    p[e] = [
                        p[e],
                        n
                    ];
                } else {
                    p[e].push(n);
                }
                return void (n = null);
            }
            r = n;
            o = f;
            i = d;
            d = null;
            f = null;
            n = null;
            module1386(function() {
                let a;
                if (hasOwnProperty.call(h, e)) {
                    a = h[e];
                    t.emit("getasync", e, i, o);
                    apply.call(r, a.context, a.args);
                } else {
                    n = r;
                    f = o;
                    d = i;
                    memoized.apply(o, i);
                }
            });
        }
    });
    t.original = function() {
        let e;
        let o;
        let i;
        let a;
        if (n) {
            e = module1384(arguments);
            o = function e(n) {
                let o;
                let args;
                const u = e.id;
                if (u != null) {
                    delete e.id;
                    o = p[u];
                    delete p[u];
                    if (o) {
                        args = module1384(arguments);
                        if (t.has(u)) {
                            if (n) {
                                t.delete(u);
                            } else {
                                h[u] = {
                                    context: this,
                                    args
                                };
                                t.emit("setasync", u, typeof o === "function" ? 1 : o.length);
                            }
                        }
                        if (typeof o === "function") {
                            a = apply.call(o, this, args);
                        } else {
                            o.forEach(function(e) {
                                a = apply.call(e, this, args);
                            }, this);
                        }
                        return a;
                    }
                } else {
                    module1386(apply.bind(e, this, arguments));
                }
            };
            i = n;
            d = null;
            f = null;
            n = null;
            e.push(o);
            a = apply.call(original, this, e);
            o.cb = i;
            n = o;
            return a;
        }
        return apply.call(original, this, arguments);
    };
    t.on("set", function(e) {
        if (n) {
            if (p[e]) {
                if (typeof p[e] === "function") {
                    p[e] = [
                        p[e],
                        n.cb
                    ];
                } else {
                    p[e].push(n.cb);
                }
            } else {
                p[e] = n.cb;
            }
            delete n.cb;
            n.id = e;
            n = null;
        } else {
            t.delete(e);
        }
    });
    t.on("delete", function(e) {
        let n;
        if (!hasOwnProperty.call(p, e)) {
            if (h[e]) {
                n = h[e];
                delete h[e];
                t.emit("deleteasync", e, slice.call(n.args, 1));
            }
        }
    });
    t.on("clear", function() {
        const e = h;
        h = Object.create(null);
        t.emit("clearasync", module1752(e, function(e) {
            return slice.call(e.args, 1);
        }));
    });
};
