import module352 from "./module-352.js";
import module46 from "./module-46.js";
import module101 from "./module-101.js";
import module289 from "./module-289.js";
import module272 from "./module-272.js";
const module352_charAt = module352.charAt;
const module101_set = module101.set;
const u = module101.getterFor("String Iterator");
module289(String, "String", function(e) {
    module101_set(this, {
        type: "String Iterator",
        string: module46(e),
        index: 0
    });
}, function() {
    let e;
    const t = u(this);
    const { string, index } = t;
    if (index >= string.length) {
        return module272(undefined, true);
    }
    e = module352_charAt(string, index);
    t.index += e.length;
    return module272(e, false);
});
