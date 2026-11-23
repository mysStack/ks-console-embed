import module25 from "./module-25.js";
import module35 from "./module-35.js";
const a = (e)=>{
    if (module35(e)) {
        return e;
    }
};
export default function(e, t) {
    if (arguments.length < 2) {
        return a(module25[e]);
    }
    return module25[e] && module25[e][t];
};
