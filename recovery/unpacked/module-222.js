import module21 from "./module-21.js";
import module19 from "./module-19.js";
import module35 from "./module-35.js";
import module202 from "./module-202.js";
import module78 from "./module-78.js";
import module282 from "./module-282.js";
const u = function() {};
const c = module78("Reflect", "construct");
const f = /^\s*(?:class|function)\b/;
const d = module21(f.exec);
const p = !f.test(u);
const h = function(e) {
    if (!module35(e)) {
        return false;
    }
    try {
        c(u, [], e);
        return true;
    } catch (e) {
        return false;
    }
};
const v = function(e) {
    if (!module35(e)) {
        return false;
    }
    switch(module202(e)){
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
            return false;
    }
    try {
        return p || !!d(f, module282(e));
    } catch (e) {
        return true;
    }
};
v.sham = true;
export default !c || module19(function() {
    let e;
    return h(h.call) || !h(Object) || !h(function() {
        e = true;
    }) || e;
}) ? v : h;
