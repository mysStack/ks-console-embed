import module8 from "unpacked/module-8.js";
import module21 from "unpacked/module-21.js";
import module127 from "unpacked/module-127.js";
const i = module21([].reverse);
const l = [
    1,
    2
];
module8({
    target: "Array",
    proto: true,
    forced: String(l) === String(l.reverse())
}, {
    reverse: function() {
        if (module127(this)) {
            this.length = this.length;
        }
        return i(this);
    }
});
