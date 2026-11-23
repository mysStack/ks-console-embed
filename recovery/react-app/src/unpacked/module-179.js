import module19 from "unpacked/module-19.js";
import module40 from "unpacked/module-40.js";
import module146 from "unpacked/module-146.js";
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
