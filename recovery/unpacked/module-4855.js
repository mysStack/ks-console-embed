import module1458 from "./module-1458.js";
import module1971 from "./module-1971.js";
import module1459 from "./module-1459.js";
import module60 from "./module-60.js";
import module92 from "./module-92.js";
import module4856 from "./module-4856.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
function c(e) {
    if (module92(e) && !module60(e) && !(e instanceof module1458)) {
        if (e instanceof module1971) {
            return e;
        }
        if (hasOwnProperty.call(e, "__wrapped__")) {
            return module4856(e);
        }
    }
    return new module1971(e);
}
c.prototype = module1459.prototype;
c.prototype.constructor = c;
export default c;
