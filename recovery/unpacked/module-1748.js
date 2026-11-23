"use strict";
let r;
let o;
let i;
let a;
let l;
const module1019 = require("./module-1019.js").default;
const s = function(e, t) {
    return t;
};
try {
    Object.defineProperty(s, "length", {
        configurable: true,
        writable: false,
        enumerable: false,
        value: 1
    });
} catch (e) {}
if (s.length === 1) {
    r = {
        configurable: true,
        writable: false,
        enumerable: false
    };
    o = Object.defineProperty;
    module.exports = function(e, t) {
        t = module1019(t);
        if (e.length === t) {
            return e;
        }
        r.value = t;
        return o(e, "length", r);
    };
} else {
    a = require("./module-1749.js").default;
    l = [];
    i = function(e) {
        let t;
        let n = 0;
        if (l[e]) {
            return l[e];
        }
        for(t = []; e--;){
            t.push(`a${(++n).toString(36)}`);
        }
        return new Function("fn", `return function (${t.join(", ")}) { return fn.apply(this, arguments); };`);
    };
    module.exports = function(e, t) {
        let n;
        t = module1019(t);
        if (e.length === t) {
            return e;
        }
        n = i(t)(e);
        try {
            a(n, e);
        } catch (e) {}
        return n;
    };
}
