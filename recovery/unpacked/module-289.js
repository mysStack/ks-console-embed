import module8 from "./module-8.js";
import module39 from "./module-39.js";
import module79 from "./module-79.js";
import module167 from "./module-167.js";
import module35 from "./module-35.js";
import module503 from "./module-503.js";
import module260 from "./module-260.js";
import module204 from "./module-204.js";
import module123 from "./module-123.js";
import module102 from "./module-102.js";
import module67 from "./module-67.js";
import module40 from "./module-40.js";
import module177 from "./module-177.js";
import module386 from "./module-386.js";
const { PROPER, CONFIGURABLE } = module167;
const { IteratorPrototype, BUGGY_SAFARI_ITERATORS } = module386;
const w = module40("iterator");
const _ = function() {
    return this;
};
export default function(e, target, n, i, h, m, x) {
    module503(n, target, i);
    let M;
    let E;
    let k;
    const O = (e)=>{
        if (e === h && T) {
            return T;
        }
        if (!BUGGY_SAFARI_ITERATORS && e && e in e_prototype) {
            return e_prototype[e];
        }
        switch(e){
            case "keys":
            case "values":
            case "entries":
                return function() {
                    return new n(this, e);
                };
        }
        return function() {
            return new n(this);
        };
    };
    const S = `${target} Iterator`;
    let L = false;
    var e_prototype = e.prototype;
    const D = e_prototype[w] || e_prototype["@@iterator"] || h && e_prototype[h];
    var T = !BUGGY_SAFARI_ITERATORS && D || O(h);
    const V = target === "Array" && e_prototype.entries || D;
    if (V && (M = module260(V.call(new e))) !== Object.prototype && M.next) {
        if (!(module79 || module260(M) === IteratorPrototype)) {
            if (module204) {
                module204(M, IteratorPrototype);
            } else if (!module35(M[w])) {
                module67(M, w, _);
            }
        }
        module123(M, S, true, true);
        if (module79) {
            module177[S] = _;
        }
    }
    if (PROPER && h === "values" && D && D.name !== "values") {
        if (!module79 && CONFIGURABLE) {
            module102(e_prototype, "name", "values");
        } else {
            L = true;
            T = function() {
                return module39(D, this);
            };
        }
    }
    if (h) {
        E = {
            values: O("values"),
            keys: m ? T : O("keys"),
            entries: O("entries")
        };
        if (x) {
            for(k in E){
                if (BUGGY_SAFARI_ITERATORS || L || !(k in e_prototype)) {
                    module67(e_prototype, k, E[k]);
                }
            }
        } else {
            module8({
                target,
                proto: true,
                forced: BUGGY_SAFARI_ITERATORS || L
            }, E);
        }
    }
    if (!(module79 && !x || e_prototype[w] === T)) {
        module67(e_prototype, w, T, {
            name: h
        });
    }
    module177[target] = T;
    return E;
};
