import module3415 from "unpacked/module-3415.js";
import module1748 from "unpacked/module-1748.js";
import module1021 from "unpacked/module-1021.js";
import { methods } from "unpacked/module-3429.js";
import module3430 from "unpacked/module-3430.js";
import module3446 from "unpacked/module-3446.js";
const apply = Function.prototype.apply;
const call = Function.prototype.call;
const { on, emit } = methods;
export default function(original, t, n) {
    let a;
    let v;
    let g;
    let y;
    let m;
    let b;
    let x;
    let w;
    let _;
    let C;
    let O;
    let E;
    let M;
    let memoized;
    let A;
    let k = Object.create(null);
    v = t !== false ? t : isNaN(original.length) ? 1 : original.length;
    if (n.normalizer) {
        C = module3446(n.normalizer);
        g = C.get;
        y = C.set;
        m = C.delete;
        b = C.clear;
    }
    if (n.resolvers != null) {
        A = module3430(n.resolvers);
    }
    memoized = g ? module1748(function(t) {
        let n;
        let o;
        let i = arguments;
        if (A) {
            i = A(i);
        }
        if ((n = g(i)) !== null && hasOwnProperty.call(k, n)) {
            if (O) {
                a.emit("get", n, i, this);
            }
            return k[n];
        }
        o = i.length === 1 ? call.call(original, this, i[0]) : apply.call(original, this, i);
        if (n === null) {
            if ((n = g(i)) !== null) {
                throw module3415("Circular invocation", "CIRCULAR_INVOCATION");
            }
            n = y(i);
        } else if (hasOwnProperty.call(k, n)) {
            throw module3415("Circular invocation", "CIRCULAR_INVOCATION");
        }
        k[n] = o;
        if (E) {
            a.emit("set", n, null, o);
        }
        return o;
    }, v) : t === 0 ? function() {
        let t;
        if (hasOwnProperty.call(k, "data")) {
            if (O) {
                a.emit("get", "data", arguments, this);
            }
            return k.data;
        }
        t = arguments.length ? apply.call(original, this, arguments) : call.call(original, this);
        if (hasOwnProperty.call(k, "data")) {
            throw module3415("Circular invocation", "CIRCULAR_INVOCATION");
        }
        k.data = t;
        if (E) {
            a.emit("set", "data", null, t);
        }
        return t;
    } : function(t) {
        let n;
        let o;
        let i = arguments;
        if (A) {
            i = A(arguments);
        }
        o = String(i[0]);
        if (hasOwnProperty.call(k, o)) {
            if (O) {
                a.emit("get", o, i, this);
            }
            return k[o];
        }
        n = i.length === 1 ? call.call(original, this, i[0]) : apply.call(original, this, i);
        if (hasOwnProperty.call(k, o)) {
            throw module3415("Circular invocation", "CIRCULAR_INVOCATION");
        }
        k[o] = n;
        if (E) {
            a.emit("set", o, null, n);
        }
        return n;
    };
    a = {
        original,
        memoized,
        profileName: n.profileName,
        get: function(e) {
            if (A) {
                e = A(e);
            }
            if (g) {
                return g(e);
            }
            return String(e[0]);
        },
        has: function(e) {
            return hasOwnProperty.call(k, e);
        },
        delete: function(e) {
            let t;
            if (hasOwnProperty.call(k, e)) {
                if (m) {
                    m(e);
                }
                t = k[e];
                delete k[e];
                if (M) {
                    a.emit("delete", e, t);
                }
            }
        },
        clear: function() {
            const e = k;
            if (b) {
                b();
            }
            k = Object.create(null);
            a.emit("clear", e);
        },
        on: function(e, t) {
            switch(e){
                case "get":
                    O = true;
                    break;
                case "set":
                    E = true;
                    break;
                default:
                    if (e === "delete") {
                        M = true;
                    }
            }
            return on.call(this, e, t);
        },
        emit,
        updateEnv: function() {
            original = a.original;
        }
    };
    x = g ? module1748(function(e) {
        let t;
        let n = arguments;
        if (A) {
            n = A(n);
        }
        if ((t = g(n)) !== null) {
            a.delete(t);
        }
    }, v) : t === 0 ? function() {
        return a.delete("data");
    } : function(e) {
        if (A) {
            e = A(arguments)[0];
        }
        return a.delete(e);
    };
    w = module1748(function() {
        let e;
        let n = arguments;
        if (t === 0) {
            return k.data;
        }
        if (A) {
            n = A(n);
        }
        e = g ? g(n) : String(n[0]);
        return k[e];
    });
    _ = module1748(function() {
        let e;
        let n = arguments;
        if (t === 0) {
            return a.has("data");
        }
        if (A) {
            n = A(n);
        }
        return (e = g ? g(n) : String(n[0])) !== null && a.has(e);
    });
    Object.defineProperties(memoized, {
        __memoized__: module1021(true),
        delete: module1021(x),
        clear: module1021(a.clear),
        _get: module1021(w),
        _has: module1021(_)
    });
    return a;
};
