import module626 from "./module-626.js";
import module92 from "./module-92.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
const s = module626(function() {
    return arguments;
}()) ? module626 : function(e) {
    return module92(e) && hasOwnProperty.call(e, "callee") && !propertyIsEnumerable.call(e, "callee");
};
export default s;
