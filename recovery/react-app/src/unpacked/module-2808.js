import module195 from "unpacked/module-195.js";
import module1113 from "unpacked/module-1113.js";
import module264 from "unpacked/module-264.js";
import module896 from "unpacked/module-896.js";
export const flattenNames = function e(t = []) {
    const n = [];
    module896(t, function(t) {
        if (Array.isArray(t)) {
            e(t).map((e)=>n.push(e));
        } else if (module264(t)) {
            module1113(t, function(e, t) {
                if (e === true) {
                    n.push(t);
                }
                n.push(`${t}-${e}`);
            });
        } else if (module195(t)) {
            n.push(t);
        }
    });
    return n;
};
export default flattenNames;
