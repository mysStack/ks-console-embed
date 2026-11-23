import module33 from "unpacked/module-33.js";
import module25 from "unpacked/module-25.js";
import module21 from "unpacked/module-21.js";
import module174 from "unpacked/module-174.js";
import module206 from "unpacked/module-206.js";
import module102 from "unpacked/module-102.js";
import module114 from "unpacked/module-114.js";
import { f as f_1 } from "unpacked/module-150.js";
import module107 from "unpacked/module-107.js";
import module343 from "unpacked/module-343.js";
import module46 from "unpacked/module-46.js";
import module351 from "unpacked/module-351.js";
import module225 from "unpacked/module-225.js";
import module389 from "unpacked/module-389.js";
import module67 from "unpacked/module-67.js";
import module19 from "unpacked/module-19.js";
import module53 from "unpacked/module-53.js";
import module101 from "unpacked/module-101.js";
import module269 from "unpacked/module-269.js";
import module40 from "unpacked/module-40.js";
import module290 from "unpacked/module-290.js";
import module390 from "unpacked/module-390.js";
const module101_enforce = module101.enforce;
const E = module40("match");
const module25_RegExp = module25.RegExp;
const k_prototype = module25_RegExp.prototype;
const module25_SyntaxError = module25.SyntaxError;
const L = module21(k_prototype.exec);
const z = module21("".charAt);
const D = module21("".replace);
const T = module21("".indexOf);
const V = module21("".slice);
const H = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
const P = /a/g;
const A = /a/g;
const R = new module25_RegExp(P) !== P;
const { MISSED_STICKY, UNSUPPORTED_Y } = module225;
if (module174("RegExp", module33 && (!R || MISSED_STICKY || module290 || module390 || module19(function() {
    A[E] = false;
    return module25_RegExp(P) !== P || module25_RegExp(A) === A || String(module25_RegExp(P, "i")) !== "/a/i";
})))) {
    const I = function(e, t) {
        let n;
        let r;
        let o;
        let a;
        let i;
        let c;
        const v = module107(k_prototype, this);
        const m = module343(e);
        const g = t === undefined;
        let y = [];
        let w = e;
        if (!v && m && g && e.constructor === I) {
            return e;
        }
        if (m || module107(k_prototype, e)) {
            e = e.source;
            if (g) {
                t = module351(w);
            }
        }
        e = e === undefined ? "" : module46(e);
        t = t === undefined ? "" : module46(t);
        w = e;
        if (module290 && "dotAll" in P && (r = !!t && T(t, "s") > -1)) {
            t = D(t, /s/g, "");
        }
        n = t;
        if (MISSED_STICKY && "sticky" in P && (o = !!t && T(t, "y") > -1) && UNSUPPORTED_Y) {
            t = D(t, /y/g, "");
        }
        if (module390) {
            e = (a = ((e)=>{
                let t;
                for(var n = e.length, r = 0, o = "", a = [], i = module114(null), l = false, s = false, c = 0, f = ""; r <= n; r++){
                    if ((t = z(e, r)) === "\\") {
                        t += z(e, ++r);
                    } else if (t === "]") {
                        l = false;
                    } else if (!l) {
                        switch(true){
                            case t === "[":
                                l = true;
                                break;
                            case t === "(":
                                if (L(H, V(e, r + 1))) {
                                    r += 2;
                                    s = true;
                                }
                                o += t;
                                c++;
                                continue;
                            case t === ">" && s:
                                if (f === "" || module53(i, f)) {
                                    throw new module25_SyntaxError("Invalid capture group name");
                                }
                                i[f] = true;
                                a[a.length] = [
                                    f,
                                    c
                                ];
                                s = false;
                                f = "";
                                continue;
                        }
                    }
                    if (s) {
                        f += t;
                    } else {
                        o += t;
                    }
                }
                return [
                    o,
                    a
                ];
            })(e))[0];
            y = a[1];
        }
        i = module206(module25_RegExp(e, t), v ? this : k_prototype, I);
        if (r || o || y.length) {
            c = module101_enforce(i);
            if (r) {
                c.dotAll = true;
                c.raw = I(((e)=>{
                    let t;
                    for(var n = e.length, r = 0, o = "", a = false; r <= n; r++){
                        if ((t = z(e, r)) !== "\\") {
                            if (a || t !== ".") {
                                if (t === "[") {
                                    a = true;
                                } else if (t === "]") {
                                    a = false;
                                }
                                o += t;
                            } else {
                                o += "[\\s\\S]";
                            }
                        } else {
                            o += t + z(e, ++r);
                        }
                    }
                    return o;
                })(e), n);
            }
            if (o) {
                c.sticky = true;
            }
            if (y.length) {
                c.groups = y;
            }
        }
        if (e !== w) {
            try {
                module102(i, "source", w === "" ? "(?:)" : w);
            } catch (e) {}
        }
        return i;
    };
    for(let B = f_1(module25_RegExp), U = 0; B.length > U;){
        module389(I, module25_RegExp, B[U++]);
    }
    k_prototype.constructor = I;
    I.prototype = k_prototype;
    module67(module25, "RegExp", I, {
        constructor: true
    });
}
module269("RegExp");
