import module246 from "./module-246.js";
import module88 from "./module-88.js";
export default function(e, t) {
    if (!t || module246(t) !== "object" && typeof t !== "function") {
        return module88(e);
    }
    return t;
};
