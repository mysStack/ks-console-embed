import module265 from "./module-265.js";
import module147 from "./module-147.js";
import module477 from "./module-477.js";
import module108 from "./module-108.js";
import module215 from "./module-215.js";
import module122 from "./module-122.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const c = module477(function(e, t) {
    if (module215(t) || module108(t)) {
        module147(t, module122(t), e);
    } else {
        for(const n in t){
            if (hasOwnProperty.call(t, n)) {
                module265(e, n, t[n]);
            }
        }
    }
});
export default c;
