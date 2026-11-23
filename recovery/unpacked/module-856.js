import module801 from "./module-801.js";
import module76 from "./module-76.js";
export default function(e, maxWait, n) {
    let leading = true;
    let trailing = true;
    if (typeof e !== "function") {
        throw new TypeError("Expected a function");
    }
    if (module76(n)) {
        leading = "leading" in n ? !!n.leading : leading;
        trailing = "trailing" in n ? !!n.trailing : trailing;
    }
    return module801(e, maxWait, {
        leading,
        maxWait,
        trailing
    });
};
