import module1019 from "unpacked/module-1019.js";
import module3467 from "unpacked/module-3467.js";
export default function(e) {
    if ((e = module1019(e)) > module3467) {
        throw new TypeError(`${e} exceeds maximum possible timeout`);
    }
    return e;
};
