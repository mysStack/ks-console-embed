import module492 from "./module-492.js";
export default function(e) {
    if (e) {
        if ((e = module492(e)) === Infinity || e === -Infinity) {
            return 1.7976931348623157e+308 * (e < 0 ? -1 : 1);
        }
        if (e == e) {
            return e;
        }
        return 0;
    }
    if (e === 0) {
        return e;
    }
    return 0;
};
