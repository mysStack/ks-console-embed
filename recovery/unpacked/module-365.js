import module33 from "./module-33.js";
import module19 from "./module-19.js";
import module219 from "./module-219.js";
export default !module33 && !module19(function() {
    return Object.defineProperty(module219("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});
