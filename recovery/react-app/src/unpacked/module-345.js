import module222 from "unpacked/module-222.js";
import module149 from "unpacked/module-149.js";
export default function(e) {
    if (module222(e)) {
        return e;
    }
    throw new TypeError(`${module149(e)} is not a constructor`);
};
