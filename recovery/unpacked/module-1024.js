import module356 from "./module-356.js";
import module164 from "./module-164.js";
import module108 from "./module-108.js";
import module195 from "./module-195.js";
import module4017 from "./module-4017.js";
export default function(e) {
    if (e == null) {
        return 0;
    }
    if (module108(e)) {
        if (module195(e)) {
            return module4017(e);
        }
        return e.length;
    }
    const t = module164(e);
    if (t == "[object Map]" || t == "[object Set]") {
        return e.size;
    }
    return module356(e).length;
};
