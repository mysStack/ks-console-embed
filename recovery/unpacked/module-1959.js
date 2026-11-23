import module338 from "./module-338.js";
import module91 from "./module-91.js";
export default module338(ArrayBuffer.prototype, "byteLength", "get") || function(e) {
    if (module91(e) !== "ArrayBuffer") {
        throw new TypeError("ArrayBuffer expected");
    }
    return e.byteLength;
};
