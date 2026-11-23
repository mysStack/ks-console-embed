import module8 from "./module-8.js";
import module39 from "./module-39.js";
module8({
    target: "URL",
    proto: true,
    enumerable: true
}, {
    toJSON: function() {
        return module39(URL.prototype.toString, this);
    }
});
