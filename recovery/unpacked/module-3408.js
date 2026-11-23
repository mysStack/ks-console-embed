import module3409 from "./module-3409.js";
export default function(e) {
    if (isNaN(e)) {
        return 0;
    }
    if ((e = Number(e)) !== 0 && isFinite(e)) {
        return module3409(e) * Math.floor(Math.abs(e));
    }
    return e;
};
