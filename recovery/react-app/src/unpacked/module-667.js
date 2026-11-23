import module19 from "unpacked/module-19.js";
import module54 from "unpacked/module-54.js";
import module91 from "unpacked/module-91.js";
import module668 from "unpacked/module-668.js";
const s = module19(function() {
    Object.isExtensible(1);
});
export default s || module668 ? function(e) {
    return !!module54(e) && (!module668 || module91(e) !== "ArrayBuffer") && (!Object.isExtensible || Object.isExtensible(e));
} : Object.isExtensible;
