import module8 from "unpacked/module-8.js";
import module78 from "unpacked/module-78.js";
import module145 from "unpacked/module-145.js";
import module39 from "unpacked/module-39.js";
import module21 from "unpacked/module-21.js";
import module19 from "unpacked/module-19.js";
import module35 from "unpacked/module-35.js";
import module166 from "unpacked/module-166.js";
import module124 from "unpacked/module-124.js";
import module588 from "unpacked/module-588.js";
import module151 from "unpacked/module-151.js";
const v = module78("JSON", "stringify");
const m = module21(/./.exec);
const g = module21("".charAt);
const y = module21("".charCodeAt);
const b = module21("".replace);
const C = module21(1..toString);
const w = /[\uD800-\uDFFF]/g;
const _ = /^[\uD800-\uDBFF]$/;
const x = /^[\uDC00-\uDFFF]$/;
const M = !module151 || module19(function() {
    const a_1 = module78("Symbol")("stringify detection");
    return v([
        a_1
    ]) !== "[null]" || v({
        a: a_1
    }) !== "{}" || v(Object(a_1)) !== "{}";
});
const E = module19(function() {
    return v("\udf06\ud834") !== '"\\udf06\\ud834"' || v("\udead") !== '"\\udead"';
});
const k = function(e, t) {
    const n = module124(arguments);
    const r = module588(t);
    if (module35(r) || e !== undefined && !module166(e)) {
        n[1] = function(e, t) {
            if (module35(r)) {
                t = module39(r, this, String(e), t);
            }
            if (!module166(t)) {
                return t;
            }
        };
        return module145(v, null, n);
    }
};
const O = function(e, t, n) {
    const r = g(n, t - 1);
    const o = g(n, t + 1);
    if (m(_, e) && !m(x, o) || m(x, e) && !m(_, r)) {
        return `\\u${C(y(e, 0), 16)}`;
    }
    return e;
};
if (v) {
    module8({
        target: "JSON",
        stat: true,
        arity: 3,
        forced: M || E
    }, {
        stringify: function(e, t, n) {
            const r = module124(arguments);
            const o = module145(M ? k : v, null, r);
            if (E && typeof o === "string") {
                return b(o, w, O);
            }
            return o;
        }
    });
}
