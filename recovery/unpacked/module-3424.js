import module3425 from "./module-3425.js";
export default function(e) {
    if (!module3425(e)) {
        return false;
    }
    try {
        return !!e.constructor && e.constructor.prototype === e;
    } catch (e) {
        return false;
    }
};
