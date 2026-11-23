import module798 from "./module-798.js";
(function(e, t) {
    module798(e);
    if (t) {
        const n = new RegExp(`[${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}]+\$`, "g");
        return e.replace(n, "");
    }
    for(var r = e.length - 1; /\s/.test(e.charAt(r));){
        r -= 1;
    }
    return e.slice(0, r + 1);
});
export default exports.default;
