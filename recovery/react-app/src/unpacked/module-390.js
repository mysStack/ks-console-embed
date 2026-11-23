import module19 from "unpacked/module-19.js";
import { RegExp } from "unpacked/module-25.js";
export default module19(function() {
    const e = RegExp("(?<a>b)", "g");
    return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
});
