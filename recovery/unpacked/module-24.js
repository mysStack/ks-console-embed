import module8 from "./module-8.js";
import exec from "./module-291.js";
module8({
    target: "RegExp",
    proto: true,
    forced: /./.exec !== exec
}, {
    exec
});
