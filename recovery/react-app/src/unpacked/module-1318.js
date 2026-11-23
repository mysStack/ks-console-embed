import module798 from "./module-798.js";
import module883 from "./module-883.js";
export default function(e, t) {
    module798(e);
    if ((t = module883(t, a)).allow_trailing_dot && e[e.length - 1] === ".") {
        e = e.substring(0, e.length - 1);
    }
    if (t.allow_wildcard === true && e.indexOf("*.") === 0) {
        e = e.substring(2);
    }
    const n = e.split(".");
    const i = n[n.length - 1];
    if (t.require_tld) {
        if (n.length < 2) {
            return false;
        }
        if (!t.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(i)) {
            return false;
        }
        if (/\s/.test(i)) {
            return false;
        }
    }
    return !(!t.allow_numeric_tld && /^\d+$/.test(i)) && n.every((e)=>!(e.length > 63 && !t.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e) || /[\uff01-\uff5e]/.test(e) || /^-|-$/.test(e) || !t.allow_underscores && /_/.test(e)));
};
var a = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_numeric_tld: false,
    allow_wildcard: false,
    ignore_max_length: false
};

