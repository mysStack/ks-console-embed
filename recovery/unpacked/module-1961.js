import module25 from "./module-25.js";
import module19 from "./module-19.js";
import module146 from "./module-146.js";
import module501 from "./module-501.js";
import module346 from "./module-346.js";
import module162 from "./module-162.js";
const module25_structuredClone = module25.structuredClone;
export default !!module25_structuredClone && !module19(function() {
    if (module346 && module146 > 92 || module162 && module146 > 94 || module501 && module146 > 97) {
        return false;
    }
    const e = new ArrayBuffer(8);
    const t = module25_structuredClone(e, {
        transfer: [
            e
        ]
    });
    return e.byteLength !== 0 || t.byteLength !== 8;
});
