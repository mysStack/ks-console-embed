import module19 from "./module-19.js";
import { RegExp } from "./module-25.js";
export default module19(function() {
    const e = RegExp(".", "s");
    return !(e.dotAll && e.test("\n") && e.flags === "s");
});
