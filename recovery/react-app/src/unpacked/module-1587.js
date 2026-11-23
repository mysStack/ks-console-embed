import module798 from "./module-798.js";
import module883 from "./module-883.js";
export default function(e, t) {
    module798(e);
    t = module883(t, u);
    const e_length = e.length;
    if (t.urlSafe) {
        return l.test(e);
    }
    if (e_length % 4 != 0 || a.test(e)) {
        return false;
    }
    const i = e.indexOf("=");
    return i === -1 || i === e_length - 1 || i === e_length - 2 && e[e_length - 1] === "=";
};
var a = /[^A-Z0-9+\/=]/i;
var l = /^[A-Z0-9_\-]*$/i;
var u = {
    urlSafe: false
};

