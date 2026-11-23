import module25 from "./module-25.js";
import module33 from "./module-33.js";
export default function(e) {
    if (!module33) {
        return module25[e];
    }
    const t = Object.getOwnPropertyDescriptor(module25, e);
    return t && t.value;
};
