"use strict";
let r;
let once;
let i;
let a;
let l;
let u;
let s;
const module1021 = require("./module-1021.js");
const module986 = require("./module-986.js").default;
const apply = Function.prototype.apply;
const call = Function.prototype.call;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const m = {
    configurable: true,
    enumerable: false,
    writable: true
};
once = function(e, t) {
    let n;
    let o;
    module986(t);
    o = this;
    r.call(this, e, n = function() {
        i.call(o, e, n);
        apply.call(t, this, arguments);
    });
    n.__eeOnceListener__ = t;
    return this;
};
l = {
    on: r = function(e, t) {
        let n;
        module986(t);
        if (hasOwnProperty.call(this, "__ee__")) {
            n = this.__ee__;
        } else {
            n = m.value = Object.create(null);
            Object.defineProperty(this, "__ee__", m);
            m.value = null;
        }
        if (n[e]) {
            if (typeof n[e] === "object") {
                n[e].push(t);
            } else {
                n[e] = [
                    n[e],
                    t
                ];
            }
        } else {
            n[e] = t;
        }
        return this;
    },
    once,
    off: i = function(e, t) {
        let n;
        let r;
        let o;
        let i;
        module986(t);
        if (!hasOwnProperty.call(this, "__ee__")) {
            return this;
        }
        if (!(n = this.__ee__)[e]) {
            return this;
        }
        if (typeof (r = n[e]) === "object") {
            for(i = 0; o = r[i]; ++i){
                if (!(o !== t && o.__eeOnceListener__ !== t)) {
                    if (r.length === 2) {
                        n[e] = r[i ? 0 : 1];
                    } else {
                        r.splice(i, 1);
                    }
                }
            }
        } else {
            if (!(r !== t && r.__eeOnceListener__ !== t)) {
                delete n[e];
            }
        }
        return this;
    },
    emit: a = function(e) {
        let t;
        let n;
        let r;
        let o;
        let i;
        if (hasOwnProperty.call(this, "__ee__") && (o = this.__ee__[e])) {
            if (typeof o === "object") {
                n = arguments.length;
                i = new Array(n - 1);
                for(t = 1; t < n; ++t){
                    i[t - 1] = arguments[t];
                }
                o = o.slice();
                for(t = 0; r = o[t]; ++t){
                    apply.call(r, this, i);
                }
            } else {
                switch(arguments.length){
                    case 1:
                        call.call(o, this);
                        break;
                    case 2:
                        call.call(o, this, arguments[1]);
                        break;
                    case 3:
                        call.call(o, this, arguments[1], arguments[2]);
                        break;
                    default:
                        n = arguments.length;
                        i = new Array(n - 1);
                        for(t = 1; t < n; ++t){
                            i[t - 1] = arguments[t];
                        }
                        apply.call(o, this, i);
                }
            }
        }
    }
};
u = {
    on: module1021(r),
    once: module1021(once),
    off: module1021(i),
    emit: module1021(a)
};
s = Object.defineProperties({}, u);
module.exports = exports = function(e) {
    if (e == null) {
        return Object.create(s);
    }
    return Object.defineProperties(Object(e), u);
};
exports.methods = l;
