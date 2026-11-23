import module40 from "./module-40.js";
import module114 from "./module-114.js";
import { f } from "./module-70.js";
const i = module40("unscopables");
if (Array.prototype[i] === undefined) {
    f(Array.prototype, i, {
        configurable: true,
        value: module114(null)
    });
}
export default function(e) {
    Array.prototype[i][e] = true;
};
