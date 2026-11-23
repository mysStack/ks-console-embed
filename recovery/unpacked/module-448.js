import module8 from "./module-8.js";
import bind from "./module-422.js";
module8({
    target: "Function",
    proto: true,
    forced: Function.bind !== bind
}, {
    bind
});
