import module8 from "./module-8.js";
import module33 from "./module-33.js";
import { f as defineProperties } from "./module-288.js";
module8({
    target: "Object",
    stat: true,
    forced: Object.defineProperties !== defineProperties,
    sham: !module33
}, {
    defineProperties
});
