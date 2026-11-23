import module167 from "unpacked/module-167.js";
import module67 from "unpacked/module-67.js";
import module50 from "unpacked/module-50.js";
import module46 from "unpacked/module-46.js";
import module19 from "unpacked/module-19.js";
import module351 from "unpacked/module-351.js";
const module167_PROPER = module167.PROPER;
const toString = RegExp.prototype.toString;
const f = module19(function() {
    return toString.call({
        source: "a",
        flags: "b"
    }) !== "/a/b";
});
const d = module167_PROPER && toString.name !== "toString";
if (f || d) {
    module67(RegExp.prototype, "toString", function() {
        const e = module50(this);
        return `/${module46(e.source)}/${module46(module351(e))}`;
    }, {
        unsafe: true
    });
}
