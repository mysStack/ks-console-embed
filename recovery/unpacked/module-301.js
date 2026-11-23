import module520 from "./module-520.js";
import module413 from "./module-413.js";
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
const l = Object.getOwnPropertySymbols ? function(e) {
    if (e == null) {
        return [];
    }
    e = Object(e);
    return module520(Object.getOwnPropertySymbols(e), function(t) {
        return propertyIsEnumerable.call(e, t);
    });
} : module413;
export default l;
