import module8 from "unpacked/module-8.js";
import module1960 from "unpacked/module-1960.js";
if (module1960) {
    module8({
        target: "ArrayBuffer",
        proto: true
    }, {
        transfer: function(...args) {
            return module1960(this, args.length ? args[0] : undefined, true);
        }
    });
}
