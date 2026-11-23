import module121 from "./module-121.js";
import module360 from "./module-360.js";
import module361 from "./module-361.js";
import module155 from "./module-155.js";
import module147 from "./module-147.js";
import module709 from "./module-709.js";
import module409 from "./module-409.js";
import module302 from "./module-302.js";
const f = module409(function(e, t) {
    let n = {};
    if (e == null) {
        return n;
    }
    let u = false;
    t = module121(t, function(t) {
        t = module155(t, e);
        if (!u) {
            u = t.length > 1;
        }
        return t;
    });
    module147(e, module302(e), n);
    if (u) {
        n = module360(n, 7, module709);
    }
    for(let f = t.length; f--;){
        module361(n, t[f]);
    }
    return n;
});
export default f;
