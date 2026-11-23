import module798 from "./module-798.js";
import { decimal } from "./module-1105.js";
(function(e, t) {
    module798(e);
    if (t && t.no_symbols) {
        return a.test(e);
    }
    return new RegExp(`^[+-]?([0-9]*[${(t || {}).locale ? decimal[t.locale] : "."}])?[0-9]+\$`).test(e);
});
var a = /^[0-9]+$/;
export default exports.default;
