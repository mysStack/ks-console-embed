import module19 from "unpacked/module-19.js";
import module143 from "unpacked/module-143.js";
export default !module19(function() {
    const e = new Error("a");
    return !("stack" in e) || (Object.defineProperty(e, "stack", module143(1, 7)), e.stack !== 7);
});
