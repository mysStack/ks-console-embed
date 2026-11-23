import module798 from "./module-798.js";
import module1579 from "./module-1579.js";
import module883 from "./module-883.js";
(function(e, t, n) {
    module798(e);
    if ((n = module883(n, l)).ignoreCase) {
        return e.toLowerCase().split(module1579(t).toLowerCase()).length > n.minOccurrences;
    }
    return e.split(module1579(t)).length > n.minOccurrences;
});
var l = {
    ignoreCase: false,
    minOccurrences: 1
};
export default exports.default;
