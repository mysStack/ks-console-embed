import module3914 from "./module-3914.js";
import module164 from "./module-164.js";
import module519 from "./module-519.js";
import module3915 from "./module-3915.js";
export default function(e) {
    return function(t) {
        const n = module164(t);
        if (n == "[object Map]") {
            return module519(t);
        }
        if (n == "[object Set]") {
            return module3915(t);
        }
        return module3914(t, e(t));
    };
};
