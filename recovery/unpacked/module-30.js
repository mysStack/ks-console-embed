import module90 from "./module-90.js";
import module205 from "./module-205.js";
import module177 from "./module-177.js";
import module101 from "./module-101.js";
import { f as f_1 } from "./module-70.js";
import module289 from "./module-289.js";
import module272 from "./module-272.js";
import module79 from "./module-79.js";
import module33 from "./module-33.js";
const module101_set = module101.set;
const p = module101.getterFor("Array Iterator");
export default module289(Array, "Array", function(e, kind) {
    module101_set(this, {
        type: "Array Iterator",
        target: module90(e),
        index: 0,
        kind
    });
}, function() {
    const e = p(this);
    const e_target = e.target;
    const n = e.index++;
    if (!e_target || n >= e_target.length) {
        e.target = undefined;
        return module272(undefined, true);
    }
    switch(e.kind){
        case "keys":
            return module272(n, false);
        case "values":
            return module272(e_target[n], false);
    }
    return module272([
        n,
        e_target[n]
    ], false);
}, "values");
const h = module177.Arguments = module177.Array;
module205("keys");
module205("values");
module205("entries");
if (!module79 && module33 && h.name !== "values") {
    try {
        f_1(h, "name", {
            value: "values"
        });
    } catch (e) {}
}
