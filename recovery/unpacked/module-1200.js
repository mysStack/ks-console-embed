import module8 from "./module-8.js";
import parseInt from "./module-511.js";
module8({
    target: "Number",
    stat: true,
    forced: Number.parseInt !== parseInt
}, {
    parseInt
});
