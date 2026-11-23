import module798 from "./module-798.js";
import { fullWidth } from "./module-1583.js";
import { halfWidth } from "./module-1584.js";
export default function(e) {
    module798(e);
    return fullWidth.test(e) && halfWidth.test(e);
};

