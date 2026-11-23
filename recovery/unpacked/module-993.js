import { a } from "./module-894.js";
import { a as a_1 } from "./module-840.js";
const i = function(e) {
    return a_1(e) && a(e) == "[object Arguments]";
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
const s = i(function() {
    return arguments;
}()) ? i : function(e) {
    return a_1(e) && hasOwnProperty.call(e, "callee") && !propertyIsEnumerable.call(e, "callee");
};
export { s as a };
