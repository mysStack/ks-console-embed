import module798 from "./module-798.js";
import module1176 from "./module-1176.js";
(function(e, t = "") {
    module798(e);
    const n = e.split("/");
    if (n.length !== 2) {
        return false;
    }
    if (!a.test(n[1])) {
        return false;
    }
    if (n[1].length > 1 && n[1].startsWith("0")) {
        return false;
    }
    const i = module1176(n[0], t);
    if (!i) {
        return false;
    }
    let l = null;
    switch(String(t)){
        case "4":
            l = 32;
            break;
        case "6":
            l = 128;
            break;
        default:
            l = module1176(n[0], "6") ? 128 : 32;
    }
    return n[1] <= l && n[1] >= 0;
});
var a = /^\d{1,3}$/;
export default exports.default;
