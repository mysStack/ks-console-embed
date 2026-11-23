import module1458 from "unpacked/module-1458.js";
import module1971 from "unpacked/module-1971.js";
import module337 from "unpacked/module-337.js";
export default function(e) {
    if (e instanceof module1458) {
        return e.clone();
    }
    const t = new module1971(e.__wrapped__, e.__chain__);
    t.__actions__ = module337(e.__actions__);
    t.__index__ = e.__index__;
    t.__values__ = e.__values__;
    return t;
};
