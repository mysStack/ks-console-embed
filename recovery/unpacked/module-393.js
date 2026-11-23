import module207 from "./module-207.js";
import module169 from "./module-169.js";
export default function(e, t, n) {
    if (n !== undefined && !module169(e[t], n) || n === undefined && !(t in e)) {
        module207(e, t, n);
    }
};
