import module8 from "unpacked/module-8.js";
import module19 from "unpacked/module-19.js";
import module90 from "unpacked/module-90.js";
import { f } from "unpacked/module-115.js";
import module33 from "unpacked/module-33.js";
module8({
    target: "Object",
    stat: true,
    forced: !module33 || module19(function() {
        f(1);
    }),
    sham: !module33
}, {
    getOwnPropertyDescriptor: function(e, t) {
        return f(module90(e), t);
    }
});
