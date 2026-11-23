import module116 from "./module-116.js";
import module60 from "./module-60.js";
import module92 from "./module-92.js";
export default function(e) {
    return typeof e === "string" || !module60(e) && module92(e) && module116(e) == "[object String]";
};
