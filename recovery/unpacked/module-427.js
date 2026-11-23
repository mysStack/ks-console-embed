import module425 from "./module-425.js";
import module426 from "./module-426.js";
import module235 from "./module-235.js";
import module307 from "./module-307.js";
import module306 from "./module-306.js";
import module308 from "./module-308.js";
export default ((e, t, n, u)=>{
    switch(t){
        case "===":
            if (typeof e === "object") {
                e = e.version;
            }
            if (typeof n === "object") {
                n = n.version;
            }
            return e === n;
        case "!==":
            if (typeof e === "object") {
                e = e.version;
            }
            if (typeof n === "object") {
                n = n.version;
            }
            return e !== n;
        case "":
        case "=":
        case "==":
            return module425(e, n, u);
        case "!=":
            return module426(e, n, u);
        case ">":
            return module235(e, n, u);
        case ">=":
            return module307(e, n, u);
        case "<":
            return module306(e, n, u);
        case "<=":
            return module308(e, n, u);
        default:
            throw new TypeError(`Invalid operator: ${t}`);
    }
});
