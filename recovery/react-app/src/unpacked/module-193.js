import "unpacked/module-24.js";
import module8 from "unpacked/module-8.js";
import module39 from "unpacked/module-39.js";
import module35 from "unpacked/module-35.js";
import module50 from "unpacked/module-50.js";
import module46 from "unpacked/module-46.js";
let r;
let o;
r = false;
o = /[ac]/;
o.exec = function() {
    r = true;
    return RegExp.prototype.exec.apply(this, arguments);
};
const c = o.test("abc") === true && r;
const test = /./.test;
module8({
    target: "RegExp",
    proto: true,
    forced: !c
}, {
    test: function(e) {
        const t = module50(this);
        const n = module46(e);
        const t_exec = t.exec;
        if (!module35(t_exec)) {
            return module39(test, t, n);
        }
        const o = module39(t_exec, t, n);
        return o !== null && (module50(o), true);
    }
});
