import module8 from "./module-8.js";
import toISOString from "./module-2767.js";
module8({
    target: "Date",
    proto: true,
    forced: Date.prototype.toISOString !== toISOString
}, {
    toISOString
});
