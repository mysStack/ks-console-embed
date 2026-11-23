import module8 from "./module-8.js";
import forEach from "./module-370.js";
module8({
    target: "Array",
    proto: true,
    forced: [].forEach !== forEach
}, {
    forEach
});
