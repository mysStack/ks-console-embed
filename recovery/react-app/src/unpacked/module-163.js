import module116 from "./module-116.js";
import module92 from "./module-92.js";
export default function(e) {
    return typeof e === "symbol" || module92(e) && module116(e) == "[object Symbol]";
};
