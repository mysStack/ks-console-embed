"use strict";
const module145 = require("unpacked/module-145.js").default;
const module39 = require("unpacked/module-39.js").default;
const module21 = require("unpacked/module-21.js").default;
const module226 = require("unpacked/module-226.js").default;
const module19 = require("unpacked/module-19.js").default;
const module50 = require("unpacked/module-50.js").default;
const module35 = require("unpacked/module-35.js").default;
const module103 = require("unpacked/module-103.js").default;
const module111 = require("unpacked/module-111.js").default;
const module141 = require("unpacked/module-141.js").default;
const module46 = require("unpacked/module-46.js").default;
const module80 = require("unpacked/module-80.js").default;
const module292 = require("unpacked/module-292.js").default;
const module126 = require("unpacked/module-126.js").default;
const module509 = require("unpacked/module-509.js").default;
const module227 = require("unpacked/module-227.js").default;
const b = require("unpacked/module-40.js").default("replace");
const _ = module21([].concat);
const x = module21([].push);
const M = module21("".indexOf);
const E = module21("".slice);
const k = "a".replace(/./, "$0") === "$0";
const O = !!/./[b] && /./[b]("a", "$0") === "";
module226("replace", function(e, t, n) {
    const a = O ? "$" : "$0";
    return [
        function(e, n) {
            const r = module80(this);
            const a = module103(e) ? undefined : module126(e, b);
            if (a) {
                return module39(a, e, r, n);
            }
            return module39(t, module46(r), e, n);
        },
        function(e, o) {
            const i = module50(this);
            const l = module46(e);
            if (typeof o === "string" && M(o, a) === -1 && M(o, "$<") === -1) {
                const c = n(t, i, l, o);
                if (c.done) {
                    return c.value;
                }
            }
            const h = module35(o);
            if (!h) {
                o = module46(o);
            }
            let m;
            const i_global = i.global;
            if (i_global) {
                m = i.unicode;
                i.lastIndex = 0;
            }
            for(var k, O = []; (k = module227(i, l)) !== null && (x(O, k), i_global);){
                if (module46(k[0]) === "") {
                    i.lastIndex = module292(l, module141(i.lastIndex), m);
                }
            }
            let S;
            let L = "";
            let z = 0;
            for(let D = 0; D < O.length; D++){
                let T;
                const V = module46((k = O[D])[0]);
                const H = Math.max(Math.min(module111(k.index), l.length), 0);
                const P = [];
                for(let A = 1; A < k.length; A++){
                    x(P, (S = k[A]) === undefined ? S : String(S));
                }
                const R = k.groups;
                if (h) {
                    const j = _([
                        V
                    ], P, H, l);
                    if (R !== undefined) {
                        x(j, R);
                    }
                    T = module46(module145(o, undefined, j));
                } else {
                    T = module509(V, l, H, P, R, o);
                }
                if (H >= z) {
                    L += E(l, z, H) + T;
                    z = H + V.length;
                }
            }
            return L + E(l, z);
        }
    ];
}, !!module19(function() {
    const e = /./;
    e.exec = function() {
        const e = [];
        e.groups = {
            a: "7"
        };
        return e;
    };
    return "".replace(e, "$<a>") !== "7";
}) || !k || O);
