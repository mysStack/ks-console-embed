import module78 from "./module-78.js";
import module35 from "./module-35.js";
import module107 from "./module-107.js";
import module364 from "./module-364.js";
export default module364 ? function(e) {
    return typeof e === "symbol";
} : function(e) {
    const t = module78("Symbol");
    return module35(t) && module107(t.prototype, Object(e));
};
