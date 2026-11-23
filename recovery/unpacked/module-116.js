import module154 from "./module-154.js";
import module607 from "./module-607.js";
import module608 from "./module-608.js";
const i = module154 ? module154.toStringTag : undefined;
export default function(e) {
    if (e == null) {
        if (e === undefined) {
            return "[object Undefined]";
        }
        return "[object Null]";
    }
    if (i && i in Object(e)) {
        return module607(e);
    }
    return module608(e);
};
