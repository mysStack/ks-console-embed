import module8 from "./module-8.js";
import assign from "./module-508.js";
module8({
    target: "Object",
    stat: true,
    arity: 2,
    forced: Object.assign !== assign
}, {
    assign
});
