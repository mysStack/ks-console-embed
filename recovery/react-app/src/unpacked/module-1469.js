import { a as a_1 } from "unpacked/module-1262.js";
import { a as a_2 } from "unpacked/module-957.js";
import { a as a_3 } from "unpacked/module-897.js";
import { a as a_4 } from "unpacked/module-1340.js";
import { a as a_5 } from "unpacked/module-1649.js";
import { a as a_6 } from "unpacked/module-907.js";
import { a as a_7 } from "unpacked/module-1653.js";
import { a as a_8 } from "unpacked/module-993.js";
import { a as a_9 } from "unpacked/module-808.js";
import { a as a_10 } from "unpacked/module-878.js";
import { a as a_11 } from "unpacked/module-919.js";
import { a as a_12 } from "unpacked/module-841.js";
import { a as a_13 } from "unpacked/module-1010.js";
import { a as a_14 } from "unpacked/module-992.js";
import { a as a_15 } from "unpacked/module-1185.js";
import { a as a_16 } from "unpacked/module-880.js";
const _a = (e, t, n)=>{
    if (n !== undefined && !a_3(e[t], n) || n === undefined && !(t in e)) {
        a_2(e, t, n);
    }
};
const u = require("unpacked/module-1648.js");
const v = require("unpacked/module-958.js");
const x = (e, t)=>{
    if ((t !== "constructor" || typeof e[t] !== "function") && t != "__proto__") {
        return e[t];
    }
};
const _ = (e, t, n, r, o, i, l)=>{
    const _ = x(e, n);
    const C = x(t, n);
    const O = l.get(C);
    if (O) {
        _a(e, n, O);
    } else {
        let E = i ? i(_, C, `${n}`, e, t, l) : undefined;
        let M = E === undefined;
        if (M) {
            const S = a_9(C);
            const A = !S && v.a(C);
            const k = !S && !A && a_14(C);
            E = C;
            if (S || A || k) {
                if (a_9(_)) {
                    E = _;
                } else if (a_10(_)) {
                    E = a_6(_);
                } else if (A) {
                    M = false;
                    E = u.a(C, true);
                } else if (k) {
                    M = false;
                    E = a_5(C, true);
                } else {
                    E = [];
                }
            } else if (a_13(C) || a_8(C)) {
                E = _;
                if (a_8(_)) {
                    E = a_15(_);
                } else if (!(a_12(_) && !a_11(_))) {
                    E = a_7(C);
                }
            } else {
                M = false;
            }
        }
        if (M) {
            l.set(C, E);
            o(E, C, r, i, l);
            l.delete(C);
        }
        _a(e, n, E);
    }
};
export const a = function e(t, n, o, i, u) {
    if (t !== n) {
        a_4(n, function(l, s) {
            if (!u) {
                u = new a_1;
            }
            if (a_12(l)) {
                _(t, n, s, o, e, i, u);
            } else {
                let c = i ? i(x(t, s), l, `${s}`, t, n, u) : undefined;
                if (c === undefined) {
                    c = l;
                }
                _a(t, s, c);
            }
        }, a_16);
    }
};
