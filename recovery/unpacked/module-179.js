import module19 from "./module-19.js";
import module40 from "./module-40.js";
import module146 from "./module-146.js";
const i = module40("species");
export default function(e) {
    return module146 >= 51 || !module19(function() {
        const t = [];
        (t.constructor = {})[i] = function() {
            return {
                foo: 1
            };
        };
        return t[e](Boolean).foo !== 1;
    });
};
