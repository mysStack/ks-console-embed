import module21 from "unpacked/module-21.js";
import module19 from "unpacked/module-19.js";
import module35 from "unpacked/module-35.js";
import module53 from "unpacked/module-53.js";
import module33 from "unpacked/module-33.js";
import module167 from "unpacked/module-167.js";
import module282 from "unpacked/module-282.js";
import module101 from "unpacked/module-101.js";
const module167_CONFIGURABLE = module167.CONFIGURABLE;
const { enforce, get } = module101;
const v = module21("".slice);
const m = module21("".replace);
const g = module21([].join);
const y = module33 && !module19(function() {
    return Object.defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
const b = String(String).split("String");
const C = function(e, t, n) {
    if (v(String(t), 0, 7) === "Symbol(") {
        t = `[${m(String(t), /^Symbol\(([^)]*)\).*$/, "$1")}]`;
    }
    if (n && n.getter) {
        t = `get ${t}`;
    }
    if (n && n.setter) {
        t = `set ${t}`;
    }
    if (!module53(e, "name") || module167_CONFIGURABLE && e.name !== t) {
        if (module33) {
            Object.defineProperty(e, "name", {
                value: t,
                configurable: true
            });
        } else {
            e.name = t;
        }
    }
    if (y && n && module53(n, "arity") && e.length !== n.arity) {
        Object.defineProperty(e, "length", {
            value: n.arity
        });
    }
    try {
        if (n && module53(n, "constructor") && n.constructor) {
            if (module33) {
                Object.defineProperty(e, "prototype", {
                    writable: false
                });
            }
        } else if (e.prototype) {
            e.prototype = undefined;
        }
    } catch (e) {}
    const r = enforce(e);
    if (!module53(r, "source")) {
        r.source = g(b, typeof t === "string" ? t : "");
    }
    return e;
};
export default C;
Function.prototype.toString = C(function() {
    return module35(this) && get(this).source || module282(this);
}, "toString");
