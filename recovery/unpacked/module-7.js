import module25 from "./module-25.js";
import module372 from "./module-372.js";
import module373 from "./module-373.js";
import module370 from "./module-370.js";
import module102 from "./module-102.js";
const s = (e)=>{
    if (e && e.forEach !== module370) {
        try {
            module102(e, "forEach", module370);
        } catch (t) {
            e.forEach = module370;
        }
    }
};
for(const u in module372){
    if (module372[u]) {
        s(module25[u] && module25[u].prototype);
    }
}
s(module373);
