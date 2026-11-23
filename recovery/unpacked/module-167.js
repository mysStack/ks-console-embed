import module33 from "./module-33.js";
import module53 from "./module-53.js";
const i = module33 && Object.getOwnPropertyDescriptor;
const EXISTS = module53(Function.prototype, "name");
const PROPER = EXISTS && (function() {}).name === "something";
const CONFIGURABLE = EXISTS && (!module33 || module33 && i(Function.prototype, "name").configurable);
export default {
    EXISTS,
    PROPER,
    CONFIGURABLE
};
