import module19 from "unpacked/module-19.js";
import module35 from "unpacked/module-35.js";
import module54 from "unpacked/module-54.js";
import module114 from "unpacked/module-114.js";
import module260 from "unpacked/module-260.js";
import module67 from "unpacked/module-67.js";
import module40 from "unpacked/module-40.js";
import module79 from "unpacked/module-79.js";
let IteratorPrototype;
let o;
let a;
const h = module40("iterator");
let BUGGY_SAFARI_ITERATORS = false;
if ([].keys) {
    if ("next" in (a = [].keys())) {
        if ((o = module260(module260(a))) !== Object.prototype) {
            IteratorPrototype = o;
        }
    } else {
        BUGGY_SAFARI_ITERATORS = true;
    }
}
if (!module54(IteratorPrototype) || module19(function() {
    const e = {};
    return IteratorPrototype[h].call(e) !== e;
})) {
    IteratorPrototype = {};
} else if (module79) {
    IteratorPrototype = module114(IteratorPrototype);
}
if (!module35(IteratorPrototype[h])) {
    module67(IteratorPrototype, h, function() {
        return this;
    });
}
export default {
    IteratorPrototype,
    BUGGY_SAFARI_ITERATORS
};
