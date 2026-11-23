import module152 from "./module-152.js";
import module212 from "./module-212.js";
const a = module152("keys");
export default function(e) {
    return a[e] || (a[e] = module212(e));
};
