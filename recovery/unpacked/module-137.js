import module39 from "./module-39.js";
import module21 from "./module-21.js";
import module226 from "./module-226.js";
import module50 from "./module-50.js";
import module103 from "./module-103.js";
import module80 from "./module-80.js";
import module261 from "./module-261.js";
import module292 from "./module-292.js";
import module141 from "./module-141.js";
import module46 from "./module-46.js";
import module126 from "./module-126.js";
import module227 from "./module-227.js";
import module225 from "./module-225.js";
import module19 from "./module-19.js";
const module225_UNSUPPORTED_Y = module225.UNSUPPORTED_Y;
const b = module21([].push);
const C = module21("".slice);
const w = !module19(function() {
    const e = /(?:)/;
    const e_exec = e.exec;
    e.exec = function() {
        return e_exec.apply(this, arguments);
    };
    const n = "ab".split(e);
    return n.length !== 2 || n[0] !== "a" || n[1] !== "b";
});
const _ = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
module226("split", function(e, t, n) {
    const o = "0".split(undefined, 0).length ? function(e, n) {
        if (e === undefined && n === 0) {
            return [];
        }
        return module39(t, this, e, n);
    } : t;
    return [
        function(t, n) {
            const a = module80(this);
            const i = module103(t) ? undefined : module126(t, e);
            if (i) {
                return module39(i, t, a, n);
            }
            return module39(o, module46(a), t, n);
        },
        function(e, r) {
            const a = module50(this);
            const l = module46(e);
            if (!_) {
                const s = n(o, a, l, r, o !== t);
                if (s.done) {
                    return s.value;
                }
            }
            const p = module261(a, RegExp);
            const a_unicode = a.unicode;
            const m = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (module225_UNSUPPORTED_Y ? "g" : "y");
            const w = new p(module225_UNSUPPORTED_Y ? `^(?:${a.source})` : a, m);
            const x = r === undefined ? 4294967295 : r >>> 0;
            if (x === 0) {
                return [];
            }
            if (l.length === 0) {
                if (module227(w, l) === null) {
                    return [
                        l
                    ];
                }
                return [];
            }
            let M = 0;
            for(var E = 0, k = []; E < l.length;){
                w.lastIndex = module225_UNSUPPORTED_Y ? 0 : E;
                let O;
                const S = module227(w, module225_UNSUPPORTED_Y ? C(l, E) : l);
                if (S === null || (O = Math.min(module141(w.lastIndex + (module225_UNSUPPORTED_Y ? E : 0)), l.length)) === M) {
                    E = module292(l, E, a_unicode);
                } else {
                    b(k, C(l, M, E));
                    if (k.length === x) {
                        return k;
                    }
                    for(let L = 1; L <= S.length - 1; L++){
                        b(k, S[L]);
                        if (k.length === x) {
                            return k;
                        }
                    }
                    M = O;
                    E = O;
                }
            }
            b(k, C(l, M));
            return k;
        }
    ];
}, _ || !w, module225_UNSUPPORTED_Y);
