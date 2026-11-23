import module8 from "./module-8.js";
import lastIndexOf from "./module-1611.js";
module8({
    target: "Array",
    proto: true,
    forced: lastIndexOf !== [].lastIndexOf
}, {
    lastIndexOf
});
