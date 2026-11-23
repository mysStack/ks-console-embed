import module207 from "./module-207.js";
import module169 from "./module-169.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e, t, n) {
    const i = e[t];
    if (!(hasOwnProperty.call(e, t) && module169(i, n) && (n !== undefined || t in e))) {
        module207(e, t, n);
    }
};
