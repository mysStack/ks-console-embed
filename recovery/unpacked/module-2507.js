import module798 from "./module-798.js";
import module1587 from "./module-1587.js";
(function(e) {
    module798(e);
    const t = e.split(".");
    return t.length === 3 && t.reduce((acc, item)=>acc && module1587(item, {
            urlSafe: true
        }), true);
});
export default exports.default;
