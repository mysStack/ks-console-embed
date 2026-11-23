import module798 from "./module-798.js";
export default function(e, t = {}) {
    module798(e);
    let n = i;
    n = t.require_hyphen ? n.replace("?", "") : n;
    if (!(n = t.case_sensitive ? new RegExp(n) : new RegExp(n, "i")).test(e)) {
        return false;
    }
    for(var r = e.replace("-", "").toUpperCase(), a = 0, l = 0; l < r.length; l++){
        const u = r[l];
        a += (u === "X" ? 10 : +u) * (8 - l);
    }
    return a % 11 == 0;
};
var i = "^\\d{4}-?\\d{3}[\\dX]$";

