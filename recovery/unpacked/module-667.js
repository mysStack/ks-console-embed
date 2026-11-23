import module19 from "./module-19.js";
import module54 from "./module-54.js";
import module91 from "./module-91.js";
import module668 from "./module-668.js";
const s = module19(function() {
    Object.isExtensible(1);
});
export default s || module668 ? function(e) {
    return !!module54(e) && (!module668 || module91(e) !== "ArrayBuffer") && (!Object.isExtensible || Object.isExtensible(e));
} : Object.isExtensible;
