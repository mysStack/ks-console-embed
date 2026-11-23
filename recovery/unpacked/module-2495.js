import module883 from "./module-883.js";
import module798 from "./module-798.js";
import module2496 from "./module-2496.js";
import { decimal } from "./module-1105.js";
(function(e, t) {
    module798(e);
    if ((t = module883(t, u)).locale in decimal) {
        return !module2496(s, e.replace(/ /g, "")) && ((e)=>new RegExp(`^[-+]?([0-9]+)?(\\${decimal[e.locale]}[0-9]{${e.decimal_digits}})${e.force_decimal ? "" : "?"}\$`))(t).test(e);
    }
    throw new Error(`Invalid locale '${t.locale}'`);
});
var u = {
    force_decimal: false,
    decimal_digits: "1,",
    locale: "en-US"
};
var s = [
    "",
    "-",
    "+"
];
export default exports.default;
