import { a } from "./module-981.js";
import { a as a_1 } from "./module-1120.js";
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
const l = Object.getOwnPropertySymbols ? function(e) {
    if (e == null) {
        return [];
    }
    e = Object(e);
    return a(Object.getOwnPropertySymbols(e), function(t) {
        return propertyIsEnumerable.call(e, t);
    });
} : a_1;
export { l as a };
