import module21 from "./module-21.js";
import module35 from "./module-35.js";
import module280 from "./module-280.js";
const i = module21(Function.toString);
if (!module35(module280.inspectSource)) {
    module280.inspectSource = function(e) {
        return i(e);
    };
}
export default module280.inspectSource;
