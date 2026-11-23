import module21 from "./module-21.js";
import module1959 from "./module-1959.js";
const i = module21(ArrayBuffer.prototype.slice);
export default function(e) {
    if (module1959(e) !== 0) {
        return false;
    }
    try {
        i(e, 0, 0);
        return false;
    } catch (e) {
        return true;
    }
};
