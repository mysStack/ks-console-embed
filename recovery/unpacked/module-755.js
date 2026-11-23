import module8 from "./module-8.js";
import trimLeft from "./module-429.js";
module8({
    target: "String",
    proto: true,
    name: "trimStart",
    forced: "".trimLeft !== trimLeft
}, {
    trimLeft
});
